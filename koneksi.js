// panggil library mysql
var mysql = require('mysql');

// buat koneksi database

const conn = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password:'',
    database:'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('mysql terkoneksi');

}); 

module.export =  conn;

