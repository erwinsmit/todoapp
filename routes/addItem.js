var express = require('express');
var router = express.Router();
var ItemRepository = require('../library/ItemRepository');
var Item = require('../library/Item');

router.get('/', function() {

});

router.post('/', function(req, res) {
    var myItem = new Item(null, req.body.todoText, false);
    ItemRepository.save(myItem);
    res.render('addItem', {message: 'Message "' + req.body.todoText + '" added successfully'});
});

module.exports = router;