const Contact = require('../models/Contact');

class ContactController {
  static index(req, res) {
    Contact.all()
           .then(response => res.status(200).json(response))
           .catch(err => err);
  }
  static create(req, res) {
    Contact.new(req.body)
           .then(response => res.status(200).json(response))
           .catch(err => err);
  }
}

module.exports = ContactController;
