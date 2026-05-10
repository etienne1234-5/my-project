const connection = require('./config/db');
connection.promise().query("SELECT id,email,fullname,CHAR_LENGTH(email) AS len,CHAR_LENGTH(TRIM(email)) AS trimmed_len, email = LOWER(email) AS is_lower FROM users WHERE email != TRIM(email) OR email != LOWER(email) LIMIT 20")
  .then(([rows]) => {
    console.log(JSON.stringify(rows, null, 2));
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
