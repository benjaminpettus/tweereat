const pg = require('pg')
const connectionString =  process.env.DATABASE_URL || 'postgres://@localhost:5432/tweereat'
const client = new pg.Client(connectionString)
client.connect();

const query = client.query('CREATE TABLE posts(id SERIAL PRIMARY KEY, text VARCHAR(160) not null, twitter_id INTEGER not null, rt_from VARCHAR(25) not null )');
query.on('end', () => { client.end(); } );
