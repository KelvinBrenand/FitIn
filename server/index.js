const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"fitin",
})

app.use(cors());
app.use(express.json());

app.post("/register",(req,res)=>{
    const {email} = req.body;
    const {password} = req.body;

    let SQL = "INSERT INTO users (email, password) VALUES (?,?)";

    db.query(SQL, [email, password], (err, result)=>{
        console.log(err);
    });
});

app.post("/checkuser",(req,res)=>{
    const {email} = req.body;
    const {password} = req.body;

    let SQL = "SELECT COUNT(*) AS userFound FROM users WHERE email = ? AND password = ?";

    db.query(SQL, [email, password], (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    });
});

app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM users;';
    let query = db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
  });

app.put('/updateuser/:email', (req, res) => {
    let user = req.params.email;
    user = user.substring(1)
    let pwd = req.body;
    console.log(req.body);
    const sql = 'UPDATE users SET ? WHERE email=?;';
    db.query (sql, [pwd, user], (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('User updated');
    });
});


app.delete('/deleteuser/:email', (req, res) => {
    let user = req.params.email;
    user = user.substring(1)
    const sql = 'DELETE FROM users WHERE email=?;';
    db.query(sql, [user], (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('User deleted');
    });
});


app.listen(3001, ()=>{
    console.log("server started on http://localhost:3001");
})