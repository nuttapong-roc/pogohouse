const express = require('express');
const dotenv = require('dotenv');
const sql = require('mysql2');
const cors = require('cors');
dotenv.config();

const app = express();

let corsoption = {
    origin: 'http://localhost:8026',
    methods: 'GET,POST,PUT,DELETE'
}
app.use(cors(corsoption));

var dbconnect = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

app.get('/',cors(), (req,res) => {
    dbconnect.query(`select picture1 from Product order by rand() limit 6`, function(err, results) {
        if (err) throw err;
        return res.json(results);
    });
});

// Buying_list

app.get('/Buying_list',cors(), (req,res) => {
    dbconnect.query(`select p_id, p_name, p_price, picture1 from Product`, function(err, results) {
      if (err) throw err;
      return res.json(results);
  });
});

app.get('/Buying_list/:id',cors(), function (req, res) {

  let type = req.params.id;
  
  if (!type) {
  return res.status(400).send({ error: true });
  }
  dbconnect.query('SELECT p_id, p_name, p_price, picture1 FROM Product where categories=?', type, function (error, results) {
  if (error) throw error;
  return res.json(results);
  });
});
app.get('/Buying_lists',cors(), function (req, res) {
    const { country, city, cb, cb1, cb2, cb3, max_price, min_price, buy_rent } = req.query;
    if (!country || !city || !cb || !cb1 || !cb2 || !cb3 || !max_price || !min_price || !buy_rent) {
        return res.status(400).send({ error: true, message: 'Please provide all parameters.' });
    }
    dbconnect.query('SELECT p_id,p_name, p_price, picture1 FROM Product WHERE categories=?', buy_rent, function (error, results) {
        if (error) throw error;
        return res.json(results);
    });
});


app.get('/homefilp',cors(), (req,res) => {
    dbconnect.query(`select p_name, p_price,p_type,picture1 from Product order by rand() limit 5 `, function(err, results) {
        if (err) throw err;
        return res.json(results);
    });
});
app.get('/House_Detail',cors(), (req,res) => {
    dbconnect.query(`select p_name, p_price, categories, picture1 from Product`, function(err, results) {
      if (err) throw err;
      return res.json(results);
  });
});

app.get('/House_Detail/:id',cors(), function (req, res) {

    let id = req.params.id;
    console.log(id)
    if (!id) {
    return res.status(400).send({ error: true });
    }
    dbconnect.query('SELECT * FROM Product where p_id=?', id, function (error, results) {
    if (error) throw error;
    return res.json(results);
    });
});

dbconnect.connect(function(err)
{
    if(err) throw err;
    console.log(`connected to database ${process.env.DATABASE}`);
});

app.listen(process.env.PORT, () =>
{
    console.log(`connected on port ${process.env.PORT}`);
})


