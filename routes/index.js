var express = require('express');
var router = express.Router();
const dataController = require('../controllers/dataController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', dataController.all);

module.exports = router;
