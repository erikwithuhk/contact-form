const request = require('superagent');

class Message {
  static all() {
    const messages = { messages: [
      new Message({ id: 1, name: 'Erik', email: 'efjonsson@gmail.com', body: 'I want to hire you.' }),
      new Message({ id: 2, name: 'Lichard', email: 'lichard@gmail.com', body: 'I love Omily.' }),
      new Message({ id: 3, name: 'Joy', email: 'joy@gmail.com', body: 'What\' up?' }),
    ] };
    return request.get('http://localhost:8080')
           .then(response => messages)
           .catch(err => err);
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
