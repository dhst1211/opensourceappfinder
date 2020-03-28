const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  database: 'opensources',
})

pool.on('connect', () => {
  console.log('connected to the db');
});

const query = (text, params, callback) => {
  return pool.query(text, params, callback)
}

const getRepos = () => {
  // return promise
  return query('SELECT * FROM repository', null, null) 
}

module.exports = {
  getRepos
}
