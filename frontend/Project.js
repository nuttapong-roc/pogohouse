const express = require('express');
const path = require('path');

const dotenv = require("dotenv");

const cp = require("cookie-parser");
const app = express();
const router = express.Router();

dotenv.config();

app.use("/", router);
router.use(cp());
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



// post
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'login.html'));
  console.log(`Request at ${__dirname} \nRetrieve a login page`)
});

router.get('/c00kie/:id/:pass', (req, res) => {
    let user = req.params.id;
    let pass = req.params.pass;
    res.cookie('cookie#1',user , {expire: 36000 + Date.now()});    
    res.cookie('cookie#2',pass , {expire: 36000 + Date.now()});
    res.redirect('/admin')
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'register.html'));
  console.log(`Request at ${__dirname} \nRetrieve a register page`)
});


///////////////////////////////////////////////// Only Admin can access //////////////////////////////////////////////
router.get('/admin', (req, res) => {
  const cookie1 = req.cookies['cookie#1'];
  const cookie2 = req.cookies['cookie#2']
    if(cookie1 && cookie2){
      res.sendFile(path.join(__dirname, '..', 'html_admin', 'home_admin.html'));
      console.log(`Request at ${__dirname} \nRetrieve a admin page`)
    }else{
       res.redirect('/home')
    }
  });
  
  router.get('/admin_house_edit', (req, res) => {
    const cookie1 = req.cookies['cookie#1'];
    const cookie2 = req.cookies['cookie#2']
      if(cookie1 && cookie2){
        res.sendFile(path.join(__dirname, '..', 'html_admin', 'addHouse_admin.html'));
        console.log(`Request at ${__dirname} \nRetrieve a admin house edit page`)
      }else{
         res.redirect('/home')
    }
  });
  
  router.get('/admin_edit', (req, res) => {
    const cookie1 = req.cookies['cookie#1'];
    const cookie2 = req.cookies['cookie#2']
      if(cookie1 && cookie2){
        res.sendFile(path.join(__dirname, '..', 'html_admin', 'Add_Admin.html'));
        console.log(`Request at ${__dirname} \nRetrieve a admin edit page`)
      }else{
         res.redirect('/home')
    }
  });

  router.get('/admin_editUser', (req, res) => {
    const cookie1 = req.cookies['cookie#1'];
    const cookie2 = req.cookies['cookie#2']
      if(cookie1 && cookie2){
        res.sendFile(path.join(__dirname, '..', 'html_admin', 'add_user.html'));
        console.log(`Request at ${__dirname} \nRetrieve a admin edit user page`)
      }else{
         res.redirect('/home')
    }
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  

// Start the server
const port = 8026;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});