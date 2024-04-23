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
  
        const acc_id = document.querySelector('input[name="acc_id"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const accountname = document.querySelector('input[name="accountname"]').value;
        const location = document.querySelector('input[name="location"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const contact = document.querySelector('input[name="contact"]').value;
        const adminid = document.querySelector('input[name="adminid"]').value;
        
        fetch('http://localhost:8126/admin/edit_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            User:{
                acc_id: acc_id,
                location: location,
                email: email,
                contact: contact,
                password: password,
                accountname: accountname,
                adminid: adminid
            }
          }),
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));

          window.location.reload();
}

//      PUT/UPDATE
function myFunctionPut() {
  
    const acc_id = document.querySelector('input[name="acc_id"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const accountname = document.querySelector('input[name="accountname"]').value;
    const location = document.querySelector('input[name="location"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const contact = document.querySelector('input[name="contact"]').value;
    const adminid = document.querySelector('input[name="adminid"]').value;
    
    fetch('http://localhost:8126/admin/edit_user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        User:{
            acc_id: acc_id,
            location: location,
            email: email,
            contact: contact,
            password: password,
            accountname: accountname,
            adminid: adminid
        }
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

      window.location.reload(); 
}

//      DELETE
function myFunctionDelete() {
  
    const acc_id = document.querySelector('input[name="acc_id"]').value;
    
    fetch('http://localhost:8126/admin/edit_user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        User:{
            acc_id: acc_id
        }
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

      window.location.reload();
}