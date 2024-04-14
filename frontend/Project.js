const express = require('express');
const path = require('path');

const dotenv = require("dotenv");

const app = express();
const router = express.Router();

// const port = 8026

dotenv.config();

// import cookie
const cp = require("cookie-parser");
router.use(cp());

app.use("/", router);

router.use(express.json());
router.use(express.urlencoded({extended:true}));

// Read folder as a static file
router.use(express.static(path.join(__dirname, '/../..', 'pogohouse-main')));


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'home.html'));
  console.log(`Request at ${__dirname} \nRetrieve a home page`)
});

router.get('/Home', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'home.html'));
  console.log(`Request at ${__dirname} \nRetrieve a home page`)
});

router.get('/House_Detail', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'House_Detail.html'));
  console.log(`Request at ${__dirname} \nRetrieve a House Detail page`)
});

router.get('/about_us', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'aboutus.html'));
  console.log(`Request at ${__dirname} \nRetrieve a about us page`)
});

router.get('/Buying_list', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'Buying_Detail.html'));
  console.log(`Request at ${__dirname} \nRetrieve a Buying_list page`)
});

router.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'search.html'));
  console.log(`Request at ${__dirname} \nRetrieve a search page`)
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'login.html'));
  console.log(`Request at ${__dirname} \nRetrieve a login page`)
});

// post
router.post('/login', function(req, res) {

  var user = req.body.username
  var password = req.body.password

  console.log(user)
  console.log(password)
  if(user == 'booktepbook' && password == '123456'){ 
    // res.cookie('cookie#1','user' , {expire: 360000 + Date.now()});       <----------- waiting for admin page ---------
    // res.cookie('cookie#2','Password' , {expire: 360000 + Date.now()});
    // res.redirect('/admin')
  }else{
    res.redirect('/home')
  }
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'register.html'));
  console.log(`Request at ${__dirname} \nRetrieve a register page`)
});

///////////////////////////////////////////////// Only Admin can access //////////////////////////////////////////////
// router.get('/admin', (req, res) => {
// const cookie1 = req.cookies['cookie#1'];
// const cookie2 = req.cookies['cookie#2']
//   if(cookie1 && cookie2){
//     res.sendFile(path.join(__dirname, '..', 'html', 'admin.html'));
//     console.log(`Request at ${__dirname} \nRetrieve a register page`)
//   }else{
//      res.redirect('/home')
// }
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.use((req, res, next) => {
  console.log("404: Invalid accessed");
  // res.status(404).sendFile(path.join(`${__dirname}/error.html`));
  res.send("404 ERROR")
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

