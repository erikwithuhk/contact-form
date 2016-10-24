const express = require('express');
const MessageController = require('../controllers/MessageController');

const router = express.Router();

router.get('/messages', MessageController.index);
router.post('/messages', MessageController.create);

module.exports = router;
