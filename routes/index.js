var express = require('express');
var router = express.Router();
var ItemRepository = require('../library/ItemRepository');

/* GET home page. */
router.get('/', function(req, res, next) {

  ItemRepository.findAll(function(items) {
    res.render('index', {title: 'Express', items: items});
  });

  console.log(req);

  //alert(req.body.todoText);

});

/*router.get('/addItem', function(req, res) {
  res.render('addItem', {items: 'testtest'});


  console.log('test1113');
});*/

/*
app.post('/', function(req, res) {
  var message = req.body.todoText;
  alert('test');
  console.log(todoText);
});*/


module.exports = router;