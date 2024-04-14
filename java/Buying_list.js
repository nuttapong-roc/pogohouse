function load5img()
{
    fetch('http://localhost:8126/Buying_list').then(response => response.json()).then(data => {

        console.log(data);
        let listproduct = document.querySelector('.listproduct');

        // var list
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
                                        "<a href='/House_Detail'><button type='button'>Detail</button></a>" + 
                                        "<br>" +
                                    "</div>";
            }

    })
      .catch(error => console.error('Error fetching images:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    load5img();
});