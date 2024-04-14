const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const sql = require('mysql2');
const cors = require('cors');
dotenv.config();

const app = express();
const router = express.Router();

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
    dbconnect.query(`select picture1 from Product order by rand()`, function(err, results) {
        if (err) throw err;
        return res.json(results);
    });
});

// Buying_list

app.get('/Buying_list',cors(), (req,res) => {
      dbconnect.query(`select p_name, p_price, categories, picture1 from Product`, function(err, results) {
        if (err) throw err;
        return res.json(results);
    });
});

app.get('/Buying_list/:id', function (req, res) {

    let type = req.params.id;
    
    if (!type) {
    return res.status(400).send({ error: true, message: 'Please provide student id.' });
    }
    dbconnect.query('SELECT p_name, p_price, picture1 FROM Product where categories=?', type, function (error, results) {
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

dbconnect.connect(function(err)
{
    if(err) throw err;
    console.log(`connected to database ${process.env.DATABASE}`);
});

app.listen(process.env.PORT, () =>
{
    console.log(`connected on port ${process.env.PORT}`);
})


