var pg   = require('pg');
var conn = process.env.DATABASE_URL || 'postgres://localhost:5432/mytodo';

var client = new pg.Client(conn);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });