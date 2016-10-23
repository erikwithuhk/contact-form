const request = require('superagent');

class Contact {
  static all() {
    const contacts = { contacts: [
      new Contact({ name: 'Erik', email: 'efjonsson@gmail.com', message: 'I want to hire you.' }),
      new Contact({ name: 'Lichard', email: 'lichard@gmail.com', message: 'I love Omily.' }),
      new Contact({ name: 'Joy', email: 'joy@gmail.com', message: 'What\' up?' }),
    ] };
    return request.get('http://localhost:8080')
           .then(response => contacts)
           .catch(err => err);
  }
  constructor({ name, email, message }) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.createdAt = new Date();
  }
}

module.exports = Contact;
