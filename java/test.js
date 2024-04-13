function writenav()
{
    let header = document.querySelector("header");
    const navHTML = `
        <link rel="stylesheet" href="../css/nav.css" />
        <div class="logo">
            <a href="#"><img src="../pic/poggo-house.png"><p>Pogo house</p></a>
        </div>
        <ul class="menu">
            <li><a href="/House_Detail">Buy <ion-icon name="cash-outline"></ion-icon></a></li>
            <li><a href="#">Rent <ion-icon name="key-outline"></ion-icon></a></li>
            <li><a href="#">Search <ion-icon name="search-outline"></ion-icon></a></li>
            <li><a href="#">Log in <ion-icon name="person-circle-outline"></ion-icon></a></li>
        </ul>`;
    const nav = document.createElement('nav');
    nav.innerHTML = navHTML
    header.appendChild(nav);
    let footer = document.querySelector("footer");
    footer.innerHTML = `<a href="#">About Us <ion-icon name="help-circle-outline"></ion-icon></a>`;
    
    
}

document.addEventListener('DOMContentLoaded', function() {
    writenav();
});

document.querySelector('form').onsubmit = function() {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    if(password != confirm_password) {
        alert('Passwords do not match!');
        return false; // Prevent form submission
    }
};
