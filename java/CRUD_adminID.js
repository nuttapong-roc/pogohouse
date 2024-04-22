document.addEventListener("DOMContentLoaded", function() {

    const Post = document.getElementById("post");
    Post.addEventListener("click", myFunctionPost);
    const put = document.getElementById("put");
    put.addEventListener("click", myFunctionPut);
    const Delete = document.getElementById("delete");
    Delete.addEventListener("click", myFunctionDelete);
});

//      POST/INSERT
function myFunctionPost() {
  
        const adminid = document.querySelector('input[name="adminid"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const firstName = document.querySelector('input[name="firstName"]').value;
        const lastName = document.querySelector('input[name="lastName"]').value;
        const start_date = document.querySelector('input[name="start_date"]').value;
  
        
        fetch('http://localhost:8126/admin/edit_id', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            Admin:{
              admin_id: adminid,
              admin_pass: password,
              admin_fname: firstName,
              admin_lname: lastName,
              admin_startdate: start_date
            }
          }),
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));

          window.location.href = `/admin_edit` 
}

//      PUT/UPDATE
function myFunctionPut() {
  
  const adminid = document.querySelector('input[name="adminid"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const firstName = document.querySelector('input[name="firstName"]').value;
  const lastName = document.querySelector('input[name="lastName"]').value;
  const start_date = document.querySelector('input[name="start_date"]').value;

  
  fetch('http://localhost:8126/admin/edit_id', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      Admin:{
        admin_id: adminid,
        admin_pass: password,
        admin_fname: firstName,
        admin_lname: lastName,
        admin_startdate: start_date
      }

    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    window.location.href = `/admin_edit`
}

//      DELETE
function myFunctionDelete() {
  
  const adminid = document.querySelector('input[name="adminid"]').value;

  fetch('http://localhost:8126/admin/edit_id', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      Admin:{
        admin_id: adminid      
      }
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    window.location.href = `/admin_edit`
}