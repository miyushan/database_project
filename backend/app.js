const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
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

// //get delivery-persons
// app.get('/delivery-persons', (req, res) => {
    
//     db.query('SELECT * FROM delivery_person', (err,rows)=>{
//         if(!err){
//             res.send(rows);
//             // console.log(rows);
//         }else{
//             console.log(err);
//         }
//     })
// })

// //get manager
// app.get('/managers', (req, res) => {
    
//     db.query('SELECT * FROM manager', (err,rows)=>{
//         if(!err){
//             res.send(rows);
//             // console.log(rows);
//         }else{
//             console.log(err);
//         }
//     })
// })


//get manager
app.get('/employee', (req, res) => {
    
    db.query('SELECT * FROM employee', (err,rows)=>{
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

//get order items
app.get('/order-items', (req, res) => {
    
    db.query('SELECT * FROM order_items', (err,rows)=>{
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
    const Branch_id = req.body.Branch_id;
    const Password = req.body.password;

    let query = 'INSERT INTO customer (First_Name, Last_Name, Gender, Contact_Number, Branch_id, Password) VALUES (?, ?, ?, ?, ?, ?)'
    
    db.query(query,[First_Name, Last_Name, Gender, Contact_Number, Branch_id, Password], (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//post- add new branch
app.post('/branches', (req, res) => {

    const Name = req.body.name;
    const Contact_Number = req.body.contactNumber;
    const Address = req.body.address;

    let query = 'INSERT INTO branch (Name, Contact_Number, Address) VALUES (?, ?, ?)'
    
    db.query(query,[Name, Contact_Number, Address], (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//post- add new delivery person
app.post('/delivery-persons', (req, res) => {
    
    const First_Name = req.body.firstName;
    const Last_Name = req.body.lastName;
    const Gender = req.body.gender;
    const Salary = req.body.salary;
    const Contact_Number = req.body.contactNumber;
    const Branch_Name = req.body.branchName;
    const Password = req.body.password;
    const Address = req.body.address;

    let query = 'INSERT INTO delivery_person (First_Name, Last_Name, Gender, Salary, Contact_Number, Branch_Name, Password, Address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    
    db.query(query,[First_Name, Last_Name, Gender, Salary, Contact_Number, Branch_Name, Password, Address], (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//post- add new manager
app.post('/managers', (req, res) => {
    
    const First_Name = req.body.firstName;
    const Last_Name = req.body.lastName;
    const Gender = req.body.gender;
    const Salary = req.body.salary;
    const Contact_Number = req.body.contactNumber;
    const Branch_Name = req.body.branchName;
    const Password = req.body.password;
    const Address = req.body.address;

    let query = 'INSERT INTO manager (First_Name, Last_Name, Gender, Salary, Contact_Number, Branch_Name, Password, Address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    
    db.query(query,[First_Name, Last_Name, Gender, Salary, Contact_Number, Branch_Name, Password, Address], (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//post- add new product
app.post('/products', (req, res) => {
    
    const Name = req.body.productName;
    const Weight = req.body.totalStockWeight;
    const Price = req.body.pricePerKilogram;

    let query = 'INSERT INTO product (Name, Weight, Price) VALUES (?, ?, ?)'
    
    db.query(query,[Name, Weight, Price], (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})

//post- add new order
app.post('/orders', (req, res) => {
    
    const Quantity = req.body.quantity;
    const Total_Cost = req.body.cost;
    const Customer_Id = req.body.customerId;
    const Manager_Id = req.body.managerId;
    const Delivery_Person_Id = req.body.deliveryPersonId;

    let query = 'INSERT INTO orders (Quantity, Total_Cost, Customer_Id, Manager_Id, Delivery_Person_Id) VALUES (?, ?, ?, ?, ?)'
    
    db.query(query,[Quantity, Total_Cost, Customer_Id, Manager_Id, Delivery_Person_Id], (err,rows)=>{
        if(!err){
            res.send(rows);
            // console.log(rows);
        }else{
            console.log(err);
        }
    })
})





// update branch
app.put('/branches/:id', (req, res) => {
    // from header
    const id = req.params.id;

    // from body
    const Name = req.body.Name;
    const Contact_Number = req.body.Contact_Number;
    const Address = req.body.Address;

    console.log(`id: ${id}`)

    let query = 'UPDATE branch SET Name=?, Contact_Number=?, Address=? WHERE id=?'
    
    db.query(query,[Name, Contact_Number, Address, id], (err,rows)=>{
        if(!err){
            res.send(rows);
            console.log('Branch Updated!')
        }else{
            console.log(err);
        }
    })
})

// update customer address
app.put('/customer-address/:id', (req, res) => {
    // from header
    const id = req.params.id;

    // from body
    const Address = req.body.Address;

    console.log(`id: ${id}`)

    let query = 'UPDATE customer SET Address=? WHERE id=?'
    
    db.query(query,[Address, id], (err,rows)=>{
        if(!err){
            res.send(rows);
            console.log('Customer Address Updated!')
        }else{
            console.log(err);
        }
    })
})




// delete branch
app.delete('/branches/:id', (req, res) => {

    const id = req.params.id;
    console.log(`id: ${id}`)

    let query = 'DELETE FROM branch WHERE id = ?'
    
    db.query(query,[id], (err,rows)=>{
        if(!err){
            res.send(rows);
            console.log('Branch Deleted!')
        }else{
            console.log(err);
        }
    })
})







//listning port (server) 
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

