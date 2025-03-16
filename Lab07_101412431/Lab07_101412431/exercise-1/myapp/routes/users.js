var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// Configure middleware first
router.use(bodyParser.urlencoded({extended: true}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  // Log the actual form data from request
  console.log(`First name: ${req.body.firstname}`);
  console.log(`Last name: ${req.body.lastname}`);
  res.send('POST received!');
});

module.exports = router;
