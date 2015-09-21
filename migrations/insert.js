var ItemRepository = require('../library/ItemRepository');
var Item = require('../library/Item');

var myItem = new Item(null, "item name", false);

//ItemRepository.save(myItem);


ItemRepository.findAll(function(results) {
    console.log(results);
});

