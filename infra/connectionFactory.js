var mysql      = require('mysql');

function connectionFactory() {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '', // caelum
        database : 'casadocodego'
      });
    return connection
}

module.exports = connectionFactory