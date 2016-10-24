const db = require('../config/db/db');
const sql = require('../config/db/sqlProvider').messages;
const request = require('superagent');

class Message {
  static all() {
    return db.map(sql.all, [], row => new Message(row));
  }
  static find(id) {
    return db.one(sql.find, [id], row => new Message(row));
  }
  static new({ name, email, body }) {
    const id = Math.floor(Math.random() * 10) + 3;
    const message = new Message({ id, name, email, body });
    return request.get('http://localhost:8080')
           .then(response => message)
           .catch(err => err);
  }
  constructor({ id, name, email, body }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.body = body;
    this.createdAt = new Date();
  }
}

module.exports = Message;
