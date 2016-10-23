const request = require('superagent');

class Contact {
  static all() {
    const contacts = { contacts: [
      new Contact({ id: 1, name: 'Erik', email: 'efjonsson@gmail.com', message: 'I want to hire you.' }),
      new Contact({ id: 2, name: 'Lichard', email: 'lichard@gmail.com', message: 'I love Omily.' }),
      new Contact({ id: 3, name: 'Joy', email: 'joy@gmail.com', message: 'What\' up?' }),
    ] };
    return request.get('http://localhost:8080')
           .then(response => contacts)
           .catch(err => err);
  }
  static new({ name, email, message }) {
    const id = Math.floor(Math.random() * 10) + 3;
    const contact = new Contact({ id, name, email, message });
    return request.get('http://localhost:8080')
           .then(response => contact)
           .catch(err => err);
  }
  constructor({ id, name, email, message }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
    this.createdAt = new Date();
  }
}

module.exports = Contact;
