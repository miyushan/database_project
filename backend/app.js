const express = require('express');
// const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());
// cors
app.use(cors({
    origin: 'http://localhost:3000'
}));


// create connection
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'database_project'
});
// conect db
db.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('MySql db connected')
    }
});


//get products
app.get('/products', (req, res) => {
    
    db.query('SELECT * FROM product', (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//get delivery-persons
app.get('/delivery-persons', (req, res) => {
    
    db.query('SELECT * FROM delivery_person', (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//get manager
app.get('/managers', (req, res) => {
    
    db.query('SELECT * FROM manager', (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//get branch
app.get('/branches', (req, res) => {
    
    db.query('SELECT * FROM branch', (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//get orders
app.get('/orders', (req, res) => {
    
    db.query('SELECT * FROM orders', (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//get customers
app.get('/customers', (req, res) => {
    
    db.query('SELECT * FROM customer', (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})


//post- add new customer
app.post('/customers', (req, res) => {
    
    const First_Name = req.body.firstName;
    const Last_Name = req.body.lastName;
    const Gender = req.body.gender;
    const Contact_Number = req.body.contactNumber;
    const Branch_Name = req.body.branchName;
    const Password = req.body.password;

    let query = 'INSERT INTO customer (First_Name, Last_Name, Gender, Contact_Number, Branch_Name, Password) VALUES (?, ?, ?, ?, ?, ?)'
    
    db.query(query,[First_Name, Last_Name, Gender, Contact_Number, Branch_Name, Password], (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

// //get data by ID
// app.get('/:id', (req, res) => {
//     db.getConnection((err, connection)=>{
//         if(err){
//             throw err;
//         }
//         console.log(`Connected as id ${connection.threadId}`);

//         connection.query('SELECT * FROM `product` WHERE id = ?', [req.params.id], (err,rows)=>{
//             connection.release();   //return all connections to the pool

//             if(!err){
//                 res.send(rows);
//             }else{
//                 console.log(err);
//             }
//         })
//     })
// })


// //Delete data
// app.delete('/:id', (req, res) => {
//     db.getConnection((err, connection)=>{
//         if(err){
//             throw err;
//         }
//         console.log(`Connected as id ${connection.threadId}`);

//         connection.query('DELETE FROM `product` WHERE id = ?', [req.params.id], (err,rows)=>{
//             connection.release();   //return all connections to the pool

//             if(!err){
//                 res.send(`Data with id: ${req.params.id} has deleted!`);
//             }else{
//                 console.log(err);
//             }
//         })
//     })
// })


// //insert a data
// app.post('/', (req, res) => {
//     db.getConnection((err, connection)=>{
//         if(err){
//             throw err;
//         }
//         console.log(`Connected as id ${connection.threadId}`);

//         const params = req.body;

//         connection.query('INSERT INTO `product` SET ?', params, (err,rows)=>{
//             connection.release();   //return all connections to the pool

//             if(!err){
//                 res.send(`Data with name: ${params.Name} has inserted.`);
//             }else{
//                 console.log(err);
//             }
//         })
//     })
// })



// //update a data
// app.put('/', (req, res) => {
//     db.getConnection((err, connection)=>{
//         if(err){
//             throw err;
//         }
//         console.log(`Connected as id ${connection.threadId}`);

//         const {id, Name, Weight} = req.body;

//         connection.query('UPDATE `product` SET Name=?, Weight=? WHERE id=?', [Name, Weight, id], (err,rows)=>{
//             connection.release();   //return all connections to the pool

//             if(!err){
//                 res.send(`Data with Id: ${id} has changed.`);
//             }else{
//                 console.log(err);
//             }
//         })
//     })
// })



//listning port (server) 
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

