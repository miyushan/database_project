const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// Static files
app.use(express.static('public'));

//Template Engine
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

// create connection(pool) with DB
const pool = mysql.createPool({
    connectionLimit: 10,
    host     : 'localhost',
    user     : 'miyushan',
    password : '1234',
    database : 'database_project'
});


//get data
app.get('/', (req, res) => {
    
    pool.getConnection((err, connection)=>{
        if(err){
            throw err;
        }
        console.log(`Connected as id ${connection.threadId}`);

        connection.query('SELECT * FROM `product`', (err,rows)=>{
            connection.release();   //return all connections to the pool

            if(!err){
                res.send(rows);
                console.log(rows);
            }else{
                console.log(err);
            }
        })
    })
})


//get data by ID
app.get('/:id', (req, res) => {
    pool.getConnection((err, connection)=>{
        if(err){
            throw err;
        }
        console.log(`Connected as id ${connection.threadId}`);

        connection.query('SELECT * FROM `product` WHERE id = ?', [req.params.id], (err,rows)=>{
            connection.release();   //return all connections to the pool

            if(!err){
                res.send(rows);
            }else{
                console.log(err);
            }
        })
    })
})


//Delete data
app.delete('/:id', (req, res) => {
    pool.getConnection((err, connection)=>{
        if(err){
            throw err;
        }
        console.log(`Connected as id ${connection.threadId}`);

        connection.query('DELETE FROM `product` WHERE id = ?', [req.params.id], (err,rows)=>{
            connection.release();   //return all connections to the pool

            if(!err){
                res.send(`Data with id: ${req.params.id} has deleted!`);
            }else{
                console.log(err);
            }
        })
    })
})


//insert a data
app.post('/', (req, res) => {
    pool.getConnection((err, connection)=>{
        if(err){
            throw err;
        }
        console.log(`Connected as id ${connection.threadId}`);

        const params = req.body;

        connection.query('INSERT INTO `product` SET ?', params, (err,rows)=>{
            connection.release();   //return all connections to the pool

            if(!err){
                res.send(`Data with name: ${params.Name} has inserted.`);
            }else{
                console.log(err);
            }
        })
    })
})



//update a data
app.put('/', (req, res) => {
    pool.getConnection((err, connection)=>{
        if(err){
            throw err;
        }
        console.log(`Connected as id ${connection.threadId}`);

        const {id, Name, Weight} = req.body;

        connection.query('UPDATE `product` SET Name=?, Weight=? WHERE id=?', [Name, Weight, id], (err,rows)=>{
            connection.release();   //return all connections to the pool

            if(!err){
                res.send(`Data with Id: ${id} has changed.`);
            }else{
                console.log(err);
            }
        })
    })
})



//listning port (server) 
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

