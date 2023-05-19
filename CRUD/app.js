import express from 'express';
import { createConnection } from 'mysql';

//create connection
const db = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'perfis'
});

//connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/users', (req, res) => {
  let sql = 'SELECT * FROM usuarios;';
  let query = db.query(sql,(err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('User list');
  });
});

app.post('/adduser', (req, res) => {
  const user = req.body;
  const sql = 'INSERT INTO usuarios SET ?';
  db.query(sql, user, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('User added...');
  });
});

app.put('/updateuser/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;
  const sql = 'UPDATE usuarios SET ? WHERE id=?;';
  db.query (sql, [user, id], (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('User updated');
  });
});

app.delete('/deleteuser/:id', (req, res) => {
  const user = req.params.id;
  const sql = 'DELETE FROM usuarios WHERE id=?;';
  db.query(sql, user, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('User deleted');
  });
});

app.listen(3000, () => {
    console.log('server started on http://localhost:3000');
});
