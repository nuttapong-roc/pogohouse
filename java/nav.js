function writenav()
{
    let header = document.querySelector("header");
    const navHTML = `
        <link rel="stylesheet" href="../css/nav.css" />
        <div class="logo">
            <a href="/Home"><img src="https://github.com/nuttapong-roc/pogohouse/blob/e2bbcb25d39cf5b1101fe735cd05aabd548d3a7e/poggo-house.png?raw=true"><p>Pogo house</p></a>
        </div>
        <ul class="menu">
            <li><a href="/Buying_list/?type=B">Buy <ion-icon name="cash-outline"></ion-icon></a></li>
            <li><a href="/Buying_list/?type=R">Rent <ion-icon name="key-outline"></ion-icon></a></li>
            <li><a href="/search">Search <ion-icon name="search-outline"></ion-icon></a></li>
            <li><a href="/login">Log in <ion-icon name="person-circle-outline"></ion-icon></a></li>
        </ul>`;
    const nav = document.createElement('nav');
    nav.innerHTML = navHTML
    header.appendChild(nav);
    let footer = document.querySelector("footer");
    footer.innerHTML = `<a href="/about_us">About Us<ion-icon name="help-circle-outline"></ion-icon></a>`;
    
    
}

document.addEventListener('DOMContentLoaded', function() {
    writenav();
});