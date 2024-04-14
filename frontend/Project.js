const express = require('express');
const path = require('path');

const dotenv = require("dotenv");

const cp = require("cookie-parser");
const app = express();
const router = express.Router();

dotenv.config();

app.use("/", router);

// router.get('/', (req, res) => {
  //   res.send("Hello World! in plain text");
  // })
router.use(cp());

router.use(express.json());
router.use(express.urlencoded({extended:true}));

// Read folder as a static file
router.use(express.static(path.join(__dirname, '/../..', 'web programing')));


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

router.get('/Buying_listvs', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'Buying_Detail.html'));
  console.log(`Request at ${__dirname} \nRetrieve a Buying_list page`)
});



// post
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'login.html'));
  console.log(`Request at ${__dirname} \nRetrieve a login page`)
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'register.html'));
  console.log(`Request at ${__dirname} \nRetrieve a register page`)
});


// router.use((req, res, next) => {
//   res.status(404).sendFile(path.join(`${__dirname}/error.html`));
// })

// Start the server
const port = 8026;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

