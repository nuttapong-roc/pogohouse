const express = require('express');
const dotenv = require('dotenv');
const sql = require('mysql2');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

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
    dbconnect.query('SELECT * FROM account where accountname = ? and password = ?', [id, pass], function (error, results) {
    if (error) throw error;
    return res.json(results);
    });
});


//------------------------------------ Admin part ---------------------------------------

//  GET
app.get('/admin/edit_product/:id/:op',cors(), (req,res) => {
    let { id,op } = req.params;
    let sql="";
    if (op == "HID")
    {
        sql = `select * from product where p_id = "${id}"`
    }
    else if(op == "AID")
    {
        sql = `select * from admin where admin_id = "${id}"`
    }
    else
    {
        sql = `select * from Account where acc_id = "${id}"`
    }
    dbconnect.query(sql, function(err, results) {
      if (err) throw err;
      return res.json(results);
  });
});
// ++++++++++++++++++++++++ Product Edit +++++++++++++++++++++++++++++++++

// Insert/Post
app.post('/admin/edit_product',cors(), function (req, res) {
  
    let product = req.body.Product;
    console.log(product);
    
    if (!product) {
        return res.status(400).send({ error: true, message: 'Please provide all information.' });
    }
    dbconnect.query("INSERT INTO Product SET ? ", product, function (error, results) {

    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New Product has beencreated successfully.'});
    });

});

// Delete
app.delete('/admin/edit_product', function (req, res) {
    let product_id = req.body.Product.p_id;
    if (!product_id) {
    return res.status(400).send({ error: true, message: 'Please provide product_id' });
    }
    dbconnect.query('DELETE FROM Product WHERE p_id = ?', [product_id], function (error, results)
    {
    if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Product has been deleted successfully.' });
    });
});

// Update
app.put('/admin/edit_product', function (req, res) {
    let product_id = req.body.Product.p_id;
    let product = req.body.Product;
    
    if (!product_id || !product) {
        return res.status(400).send({ error: student, message: 'Please provide Product information' });
    }
    dbconnect.query("UPDATE Product SET ? WHERE p_id = ?", [product, product_id], function (error,results) {
    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'Product has been updated successfully.'})
    });
});

// +++++++++++++++++++++++++++++++++ Admin Edit ID +++++++++++++++++++++++++++++++++++++

// Insert/Post
app.post('/admin/edit_id',cors(), function (req, res) {
  
    let Admin = req.body.Admin;
    console.log(Admin);
    if (!Admin || !req.body.firstName) {
        return res.status(400).send({ error: true, message: 'Please provide all information.' });
    }
    dbconnect.query("INSERT INTO Admin SET ? ", Admin, function (error, results) {

    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New Admin has been created successfully.'});
    });

});

// Delete
app.delete('/admin/edit_id', function (req, res) {
    let Admin_id = req.body.Admin.admin_id;
    if (!Admin_id) {
    return res.status(400).send({ error: true, message: 'Please provide Admin_id' });
    }
    dbconnect.query('DELETE FROM Admin WHERE admin_id = ?', [Admin_id], function (error, results)
    {
    if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Admin has been deleted successfully.' });
    });
});

// Update
app.put('/admin/edit_id', function (req, res) {
    let Admin_id = req.body.Admin.admin_id;
    let Admin = req.body.Admin;
    if (!Admin_id || !Admin) {
        return res.status(400).send({ error: student, message: 'Please provide admin information' });
    }
    dbconnect.query("UPDATE Admin SET ? WHERE admin_id = ?", [Admin, Admin_id], function (error,results) {
    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'Admin has been updated successfully.'})
    });
});

// +++++++++++++++++++++++++++++++++ Admin Edit User +++++++++++++++++++++++++++++++++++++

// Insert/Post
app.post('/admin/edit_user',cors(), function (req, res) {
  
    let Account = req.body.User;
    console.log(Account);
    if (!Account) {
        return res.status(400).send({ error: true, message: 'Please provide all information.' });
    }
    dbconnect.query("INSERT INTO Account SET ? ", Account, function (error, results) {

    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New Account has been created successfully.'});
    });

});

// Delete
app.delete('/admin/edit_user', function (req, res) {
    let Account_id = req.body.User.acc_id;
    if (!Account_id) {
    return res.status(400).send({ error: true, message: 'Please provide Account_id' });
    }
    dbconnect.query('DELETE FROM Account WHERE acc_id = ?', [Account_id], function (error, results)
    {
    if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Account has been deleted successfully.' });
    });
});

// Update
app.put('/admin/edit_user', function (req, res) {
    let Account_id = req.body.User.acc_id;
    let Account = req.body.User;
    if (!Account_id || !Account) {
        return res.status(400).send({ error: student, message: 'Please provide Account information' });
    }
    dbconnect.query("UPDATE Account SET ? WHERE acc_id = ?", [Account, Account_id], function (error,results) {
    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'Account has been updated successfully.'})
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