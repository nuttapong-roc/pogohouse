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

function loadflipcard()
{
  fetch('http://localhost:8126/homefilp')
      .then(response => response.json())
      .then(data => {
        let container = document.querySelector('.flip');
        data.forEach(item =>{
          var temp = "";
          switch (item.p_type)
          {
            case "H": temp = "House"; break;
            case "T": temp = "Town House"; break;
            case "C": temp = "Condo"; break;
            case "HT": temp = "Haunted House"; break;
            default: temp = "Type";
          }
          let div = document.createElement('div');
          div.classList.add('flip-card');
          div.innerHTML = `<div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="${item.picture1}" alt="Avatar" style="width:300px;height:300px;">
                                </div>
                                <div class="flip-card-back">
                                    <h1>${item.p_name}</h1>
                                    <br>
                                    <p>${temp}</p>
                                    <br>
                                    <p>${item.p_price} USD.</p>
                                </div>
                            </div>`;
        container.append(div);
        });
    })
      .catch(error => console.error('Error fetching images:', error));
    }


document.addEventListener('DOMContentLoaded', function() {
    writenav();
    loadflipcard();
});