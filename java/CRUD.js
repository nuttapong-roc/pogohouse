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
  
        const id = document.querySelector('input[name="id"]').value;
        const name = document.querySelector('input[name="name"]').value;
        const country = document.querySelector('input[name="country"]').value;
        const city = document.querySelector('input[name="city"]').value;
        const Description = document.querySelector('input[name="Description"]').value;
        const choice = document.querySelector('input[name="choice"]').value;
        const buy_rent = document.querySelector('input[name="buy_rent"]').value;
        const price = document.querySelector('input[name="price"]').value;
        const admin = document.querySelector('input[name="adminId"]').value;
        const Pic1 = document.querySelector('input[name="pic1"]').value;
        const Pic2 = document.querySelector('input[name="pic2"]').value;
        const Pic3 = document.querySelector('input[name="pic3"]').value;
        const Pic4 = document.querySelector('input[name="pic4"]').value;
        const Pic5 = document.querySelector('input[name="pic5"]').value;
        
        fetch('http://localhost:8126/admin/edit_product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
              p_id: id,
              p_name: name,
              p_type: choice,
              p_price: price,
              p_description: Description,
              p_city: city,
              p_country: country,
              adminid: admin,
              categories: buy_rent,
              picture1: Pic1,
              picture2: Pic2,
              picture3: Pic3,
              picture4: Pic4,
              picture5: Pic5
          }),
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));

          window.location.href = `/admin_house_edit` 
}

//      PUT/UPDATE
function myFunctionPut() {
  
  const id = document.querySelector('input[name="id"]').value;
  const name = document.querySelector('input[name="name"]').value;
  const country = document.querySelector('input[name="country"]').value;
  const city = document.querySelector('input[name="city"]').value;
  const Description = document.querySelector('input[name="Description"]').value;
  const choice = document.querySelector('input[name="choice"]').value;
  const buy_rent = document.querySelector('input[name="buy_rent"]').value;
  const price = document.querySelector('input[name="price"]').value;
  const admin = document.querySelector('input[name="adminId"]').value;
  const Pic1 = document.querySelector('input[name="pic1"]').value;
  const Pic2 = document.querySelector('input[name="pic2"]').value;
  const Pic3 = document.querySelector('input[name="pic3"]').value;
  const Pic4 = document.querySelector('input[name="pic4"]').value;
  const Pic5 = document.querySelector('input[name="pic5"]').value;
  
  fetch('http://localhost:8126/admin/edit_product', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
        p_id: id,
        p_name: name,
        p_type: choice,
        p_price: price,
        p_description: Description,
        p_city: city,
        p_country: country,
        adminid: admin,
        categories: buy_rent,
        picture1: Pic1,
        picture2: Pic2,
        picture3: Pic3,
        picture4: Pic4,
        picture5: Pic5
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    window.location.href = `/admin_house_edit` 
}

//      DELETE
function myFunctionDelete() {
  
  const id = document.querySelector('input[name="id"]').value;
  const name = document.querySelector('input[name="name"]').value;
  const country = document.querySelector('input[name="country"]').value;
  const city = document.querySelector('input[name="city"]').value;
  const Description = document.querySelector('input[name="Description"]').value;
  const choice = document.querySelector('input[name="choice"]').value;
  const buy_rent = document.querySelector('input[name="buy_rent"]').value;
  const price = document.querySelector('input[name="price"]').value;
  const admin = document.querySelector('input[name="adminId"]').value;
  const Pic1 = document.querySelector('input[name="pic1"]').value;
  const Pic2 = document.querySelector('input[name="pic2"]').value;
  const Pic3 = document.querySelector('input[name="pic3"]').value;
  const Pic4 = document.querySelector('input[name="pic4"]').value;
  const Pic5 = document.querySelector('input[name="pic5"]').value;
  
  fetch('http://localhost:8126/admin/edit_product', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
        p_id: id,
        p_name: name,
        p_type: choice,
        p_price: price,
        p_description: Description,
        p_city: city,
        p_country: country,
        adminid: admin,
        categories: buy_rent,
        picture1: Pic1,
        picture2: Pic2,
        picture3: Pic3,
        picture4: Pic4,
        picture5: Pic5
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    window.location.href = `/admin_house_edit` 
}
