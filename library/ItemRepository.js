var pg   = require('pg');
var Item = require('./Item');
var conn = process.env.DATABASE_URL || 'postgres://localhost:5432/mytodo';

function ItemRepository()
{

}


ItemRepository.prototype.findAll = function(cb)
{
    pg.connect(conn, function(err, client) {

        if(err) {
            return console.error('error fetching client from pool', err);
        }

        var results = [];
        var query   = client.query("SELECT * FROM items ORDER BY id DESC");

        query.on('row', function(row) {
            results.push(new Item(row.id, row.text, row.complete));
        });

        query.on('end', function() {
            client.end();
            cb(results);
        });
    });
};

ItemRepository.prototype.save = function(item)
{
    if (item.id == null)
    {
        pg.connect(conn, function(err, client) {
            var query = client.query("INSERT INTO items(text, complete) values($1, $2)", [item.description, item.done]);
            query.on('end', function() {
                client.end();
            });

        });
    }
    else
    {
        pg.connect(conn, function(err, client) {
            var query = client.query("UPDATE items SET text = $1, complete $2 WHERE id = $3", [item.description, item.done, item.id]);
            query.on('end', function() {
                client.end();
            });
        });
    }
};

ItemRepository.prototype.remove = function(item)
{

};

module.exports = new ItemRepository();