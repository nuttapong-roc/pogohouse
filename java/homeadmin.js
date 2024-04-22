document.addEventListener("DOMContentLoaded", function() {

    const sub = document.getElementById("submit");
    sub.addEventListener("click", myFunctionsub);
});

function myFunctionsub() 
{
    const id = document.querySelector('input[id="search_value"]').value;
    const op = document.getElementById('ddl').value;
    //console.log(id);
    //console.log(op);
    fetch(`http://localhost:8126/admin/edit_product/${id}/${op}`)
      .then(response => response.json())
      .then(data => {
          let listproduct = document.querySelector('.listproduct');
        if(data.length < 1)
        {
            listproduct.innerHTML = `<div class='item'> <h1>Empty</h1> <div>`;
        }
        else
        {
            listproduct.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        }
    })
      .catch(error => console.error('Error fetching images:', error));
}