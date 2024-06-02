const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'edipanel.mysql.database.azure.com',
    user: 'edipanel',
    port: 3306,
    password: 'Admin1234-',
    database: 'project_jwt',
});

module.exports = connection;