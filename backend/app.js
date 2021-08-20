const express = require('express');
const mysql = require('mysql');

const app = express();

// create connection with DB
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'miyushan',
    password : '1234',
    database : 'database_project'
});
//connect
db.connect((err)=>{
    if(err){
        // throw err;
    }else{
        console.log('MySQL connected successfully...');
    }
});

db.query('SELECT * FROM `product` WHERE `Name`="Onion Leaves"', function (error, results, fields) {
    console.log(results);
});


app.listen('4000', () => {
    console.log('Server started on port 4000');
})

