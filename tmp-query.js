const connection = require('./config/db');
connection.promise().query('SELECT id,email,password,fullname FROM users LIMIT 10')
  .then(([rows]) => {
    console.log(JSON.stringify(rows, null, 2));
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
