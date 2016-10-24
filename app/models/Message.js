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
  static create({ name, email, body }) {
    return db.one(sql.create, [name, email, body], row => new Message(row));
  }
  static destroy(id) {
    return db.none(sql.delete, [id]);
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
