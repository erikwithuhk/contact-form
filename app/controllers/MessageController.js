const Message = require('../models/Message');

class MessageController {
  static index(req, res) {
    Message.all()
           .then(response => res.status(200).json(response))
           .catch(err => res.status(500).json(err));
  }
  static show(req, res) {
    const { id } = req.params;
    Message.find(id)
           .then(response => res.status(200).json(response))
           .catch(err => res.status(500).json(err));
  }
  static create(req, res) {
    const { name, email, body } = req.body;
    const createdAt = new Date(Date.now());
    const updatedAt = new Date(Date.now());
    Message.create({ name, email, body, createdAt, updatedAt })
           .then(response => res.status(201).json(response))
           .catch(err => res.status(500).json(err));
  }
  static update(req, res) {
    const { id } = req.params;
    Message.find(id)
           .then((message) => {
             message.update(req.body)
                    .then(updatedMessage => res.status(200).json(updatedMessage))
                    .catch(err => res.status(500).json(err));
           })
           .catch(err => err);
  }
  static destroy(req, res) {
    const { id } = req.params;
    Message.destroy(id)
           .then(response => res.status(204).json(response))
           .catch(err => res.status(500).json(err));
  }
}

module.exports = MessageController;
