function load5img()
{
 
    const para = new URLSearchParams(window.location.search);
    const type = para.get('type');
    let country = para.get('country');
    let city = para.get('city');
    let cb = para.get('cb');
    let cb1 = para.get('cb1');
    let cb2 = para.get('cb2');
    let cb3 = para.get('cb3');
    let max_price = para.get('max_price');
    let min_price = para.get('min_price');
    let buy_rent = para.get('buy_rent');

    const setEmptyToNull = (value) => {
        return value === "" ? null : value;
    };

    cb = setEmptyToNull(cb);
    cb1 = setEmptyToNull(cb1);
    cb2 = setEmptyToNull(cb2);
    cb3 = setEmptyToNull(cb3);

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