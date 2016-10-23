const express = require('express');
const ContactController = require('../controllers/ContactController');

const router = express.Router();

router.get('/contacts', ContactController.index);

module.exports = router;
