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

app.get('/Buying_lists', cors(), function (req, res) {
    let { country, city, cb, cb1, cb2, cb3, max_price, min_price, buy_rent } = req.query;
    if (!country || !city || !cb || !cb1 || !cb2 || !cb3 || !max_price || !min_price || !buy_rent) {
        return res.status(400).send({ error: true, message: 'Please provide all parameters.' });
    }
    if (buy_rent == "Both") {
        buy_rent = ['R', 'B']; // Array of values
    }
    const sqlQuery = 'SELECT p_id, p_name, p_price, picture1 FROM Product WHERE ((p_city LIKE ?) OR (p_country LIKE ?)) AND (categories IN (?)) AND (p_type IN (?, ?, ?, ?)) AND (p_price BETWEEN ? AND ?)';
    const queryParams = [`%${city}%`, `%${country}%`, buy_rent, cb, cb1, cb2, cb3, min_price, max_price];
    console.log("SQL Query:", sqlQuery);
    console.log("Parameters:", queryParams);
    
    dbconnect.query(sqlQuery, queryParams, function (error, results) {
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
app.get('/login/:username/:password',cors(), function (req, res) {
    let id = req.params.username;
    let pass = req.params.password;
    if (!id && !pass) {
    return res.status(400).send({ error: true });
    }
    dbconnect.query('SELECT * FROM admin where admin_id = ? and admin_pass = ?', [id, pass], function (error, results) {
    if (error) throw error;
    return res.json(results);
    });
});


//------------------------------------ Admin part ---------------------------------------

// Insert
app.post('/admin_house_edit',cors(), function (req, res) {
    const { p_id, p_name, p_type, p_price, p_description, p_city, p_country, adminid, categories, picture1, picture2, picture3, picture4, picture5 } = req.query;
    if (!p_id || !p_name || !p_type || !p_price || !p_description || !p_city || !p_country || !adminid || !categories || !picture1 || !picture2 || !picture3 || !picture4 || !picture5) {
        return res.status(400).send({ error: true, message: 'Please provide all information.' });
    }
    let Product = { 
            "Product" : {
                "p_id" : p_id,
                "p_name" : p_name,
                "p_type" : p_type,
                "p_price" : p_price,
                "p_description" : p_description,
                "p_city" : p_city,
                "p_country" : p_country,
                "adminid" : adminid,
                "categories" : categories,
                "picture1" : picture1,
                "picture2" : picture2,
                "picture3" : picture3,
                "picture4" : picture4,
                "picture5" : picture5,
            }
    };
    dbconnect.query("INSERT INTO Product SET ? ", Product, function (error, results) {
        if (error) throw error;
        return res.json(results);
    });
});

// // Delete
app.delete('/admin_edit', function (req, res) {
    let p_id = req.query.id;
    if (!p_id) {
        return res.status(400).send({ error: true, message: 'Please provide p_id' });
    }
    dbconnect.query('DELETE FROM Product WHERE p_id = ?', [p_id], function (error, results)
    {
    if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Product has been deleted successfully.' });
    });
});

// // Update
app.put('/admin_house_edit', function (req, res) {
    const { p_id, p_name, p_type, p_price, p_description, p_city, p_country, adminid, categories, picture1, picture2, picture3, picture4, picture5 } = req.query;
    if (!p_id || !p_name || !p_type || !p_price || !p_description || !p_city || !p_country || !adminid || !categories || !picture1 || !picture2 || !picture3 || !picture4 || !picture5) {
        return res.status(400).send({ error: true, message: 'Please provide all information.' });
    }
    let Product = { 
            "Product" : {
                "p_id" : p_id,
                "p_name" : p_name,
                "p_type" : p_type,
                "p_price" : p_price,
                "p_description" : p_description,
                "p_city" : p_city,
                "p_country" : p_country,
                "adminid" : adminid,
                "categories" : categories,
                "picture1" : picture1,
                "picture2" : picture2,
                "picture3" : picture3,
                "picture4" : picture4,
                "picture5" : picture5,
            }
    };
    let ID = req.body.Product.p_id;
    // let student = req.body.student;
    //if (!student_id || !student) {
    //   return res.status(400).send({ error: student, message: 'Please provide Product information' });
//    }
    dbconnect.query("UPDATE Product SET ? WHERE p_id = ?", [Product, ID], function (error,
    results) {
    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'Product has been updated successfully.'})
    });
});

// ---------------------------------------------------------------------------------------

dbconnect.connect(function(err)
{
    if(err) throw err;
    console.log(`connected to database ${process.env.DATABASE}`);
});

app.listen(process.env.PORT, () =>
{
    console.log(`connected on port ${process.env.PORT}`);
})


