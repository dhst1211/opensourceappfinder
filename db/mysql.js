// let mysql = require('mysql');

// function setupMysql() {
//   let db = mysql.createConnection({
//     host     : process.env.DATABASE_HOST,
//     user     : process.env.DATABASE_USER,
//     password : process.env.DATABASE_PASSWORD,
//     database : 'opensources'
//   });
  
//   db.connect((err) => {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       throw err;
//     }
//     console.log('connected as id ' + db.threadId);
//   });
//   global.db = db;
// }

// module.exports = setupMysql;