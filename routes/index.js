var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Middleware to parse request body
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: "New Message Form", messages: messages });
});

router.post('/new', (req, res) => {
  const { author, message } = req.body;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect('/');
});

module.exports = router;
