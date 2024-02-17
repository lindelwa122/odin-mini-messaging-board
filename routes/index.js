var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hello, world!',
    user: 'nqabenhle',
    date: new Date(),
  },
  {
    text: 'Jeez!! What\'s happening in here!?',
    user: 'lindelwa',
    date: new Date(),
  },
  {
    text: 'Abracadabra!',
    user: 'shin_lim',
    date: new Date(),
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messaging Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add a new message' });
});

router.post('/new', function(req, res, next) {
  const username = req.body.username;
  const message = req.body.message;

  messages.push({ user: username, text: message, date: new Date() });
  res.redirect('/');
});

module.exports = router;
