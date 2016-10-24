const Message = require('../models/Message');

class MessageController {
  static index(req, res) {
    Message.all()
           .then(response => res.status(200).json(response))
           .catch(err => err);
  }
  static show(req, res) {
    const { id } = req.params;
    Message.find(id)
           .then(response => res.status(200).json(response))
           .catch(err => err);
  }
  static create(req, res) {
    Message.new(req.body)
           .then(response => res.status(200).json(response))
           .catch(err => err);
  }
}

module.exports = MessageController;
