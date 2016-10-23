const Contact = require('../models/Contact');

class ContactController {
  static index(req, res) {
    res.status(200).send('Contacts');
  }
}

module.exports = ContactController;
