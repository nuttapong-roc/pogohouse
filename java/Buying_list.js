function load5img()
{
 
    const para = new URLSearchParams(window.location.search);
    const type = para.get('type');
    const country = para.get('country');
    const city = para.get('city');
    const cb = para.get('cb');
    const cb1 = para.get('cb1');
    const cb2 = para.get('cb2');
    const cb3 = para.get('cb3');
    const max_price = para.get('max_price');
    const min_price = para.get('min_price');
    const buy_rent = para.get('buy_rent');
    if (type!=null)
    {
        url = `http://localhost:8126/Buying_list/${type}`;
    }
    else
    {
        url = `http://localhost:8126/Buying_lists/?country=${country}&city=${city}&cb=${cb}&cb1=${cb1}&cb2=${cb2}&cb3=${cb3}&max_price=${max_price}&min_price=${min_price}&buy_rent=${buy_rent}`;
        console.log(url);
    }

    fetch(url).then(response => response.json()).then(data => {

        console.log(data);
        let listproduct = document.querySelector('.listproduct');

        for(let i = 0 ; i < data.length ; i++){    
            
                listproduct.innerHTML += "<div class='item'>" +
                "<div class='forimg'>" +
                "<img src="+ data[i].picture1 +">" +
                "</div>" +
                "<div class='overlay-image'>" +
                "<img src='../pic/pog_star5.png' alt='Poggo House'>" +
                "</div>" +
                "<div id='name'>" + data[i].p_name + "</div>" +
                "<div id='price'>$" + data[i].p_price + "</div>" +
                "<a href='/House_Detail/?detail="+ data[i].p_id +"'><button type='button'>Detail</button></a>" +  
                "<br>" +
                "</div>";
          
        }

    })
      .catch(error => console.error('Error fetching images:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    load5img();
});