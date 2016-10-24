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
  static create({ name, email, body, createdAt, updatedAt }) {
    return db.one(sql.create, [name, email, body, createdAt, updatedAt], row => new Message(row));
  }
  static destroy(id) {
    return db.none(sql.delete, [id]);
  }
  constructor({ id, name, email, body, created_at, updated_at }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.body = body;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
  save() {
    return db.one(sql.save, [this.id, this.name, this.email, this.body, this.updatedAt], (row) => {
      return new Message(row);
    });
  }
  update(options) {
    this.updatedAt = new Date(Date.now());
    Object.keys(options).forEach((key) => {
      if (key !== 'id') {
        this[key] = options[key];
      }
    });
    return this.save();
  }
}

module.exports = Message;
