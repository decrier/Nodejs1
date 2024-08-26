require("dotenv").config();  // notwendig um das Modul dotenv nutzen zu können

console.log('Host: ' + process.env.DATABASE_HOST);
console.log('Database: ' + process.env.DATABASE_NAME);
console.log('Username: ' + process.env.DATABASE_USER);
console.log('Password: ' + process.env.DATABASE_PASSWORD);
console.log('Port: ' + process.env.DATABASE_PORT);
