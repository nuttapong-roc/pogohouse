document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("sub");
    element.addEventListener("click", myFunction);
});

function myFunction() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // console.log("Username:", username);
    // console.log("Password:", password);
    //console.log(window.location.href);
    
    let url = `http://localhost:8126/login/${username}/${password}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data[0].adminid);
        if (data[0].adminid != null)
        {
            window.location.href = `/c00kie/${username}/${password}`;
        }
        if (data[0].adminid == null)
        {
            window.location.href = "/";
        }
            
    })
      .catch(error => console.error('Error fetching images:', error));
}



