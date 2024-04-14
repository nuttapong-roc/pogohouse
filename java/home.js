function load5img()
{
    fetch('http://localhost:8126')
      .then(response => response.json())
      .then(data => {
        let images = document.querySelectorAll('.slideshow .items img');
        console.log(data);
        data.forEach((item, index) => {
            console.log(index)
            images[index+1].src = item.picture1;
            images[index+1].alt = item.alt;
        });
    })
      .catch(error => console.error('Error fetching images:', error));
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
    load5img();
    loadflipcard();
});