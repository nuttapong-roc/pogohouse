function loadimg()
{
 
    const para = new URLSearchParams(window.location.search);
    const epara = para.get('detail');
    // console.log(epara);

    fetch(`http://localhost:8126/House_Detail/${epara}`).then(response => response.json()).then(data => {
        
        // ------------------House Picture--------------------------
        let img1 = document.querySelector('section .grid .img1 img');
        img1.src = data[0].picture1
        let img2 = document.querySelector('section .grid .img2 img');
        img2.src = data[0].picture2    
        let img3 = document.querySelector('section .grid .img3 img');
        img3.src = data[0].picture3
        let img4 = document.querySelector('section .grid .img4 img');
        img4.src = data[0].picture4
        let img5 = document.querySelector('section .grid .img5 img');
        img5.src = data[0].picture5
        // ----------------------------------------------------------

        // ----------------------------House Detail-------------------------------
        let h_name = document.querySelector('section .detail #Pname b');
        h_name.innerHTML = data[0].p_name 
        let locate = document.querySelector('section .detail #Pplace');
        locate.innerHTML += data[0].p_location 

        let Htype = document.querySelector('section .detail #Htype');
        switch (data[0].p_type)
        {
            case "H": Htype.innerHTML += "House"; break;
            case "T": Htype.innerHTML += "Town House"; break;
            case "C": Htype.innerHTML += "Condo"; break;
            case "HT": Htype.innerHTML += "Haunted House"; break;
            default: Htype.innerHTML += "None";
        }
        
        let Ptype = document.querySelector('section .detail #Ptype');
        switch (data[0].categories)
        {
            case "B": Ptype.innerHTML += "Buy"; break;
            case "R": Ptype.innerHTML += "Rent"; break;
            default: Ptype.innerHTML += "None";
        }

        let description = document.querySelector('section .detail #description');
        description.innerHTML += data[0].p_description
        let Pprice = document.querySelector('section .detail #Pprice');
        Pprice.innerHTML += data[0].p_price
        //------------------------------------------------------------------------
    })
      .catch(error => console.error('Error fetching images:', error));
}
function loadapi()
{
    const para = new URLSearchParams(window.location.search);
    const epara = para.get('detail');
    const apikey = "161549cd4c4180b17440d7f07e97052f";
    // console.log(epara);
    "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"

    fetch(`http://localhost:8126/House_Detail/${epara}`).then(response => response.json()).then(data => {
        q = data[0].p_country;
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=1&appid=${apikey}`).then(response => response.json()).then(data => 
        {
            console.log(data);
            // console.log(data[0].lat);
            // console.log(data[0].lon);
            let lat = data[0].lat;
            let lon = data[0].lon;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`).then(response => response.json()).then(data => 
                {
                    // console.log(data);
                    // console.log(data.weather[0].main);
                    // console.log(data.weather[0].description);
                    // console.log(data.main.temp);
                    // console.log(data.main.humidity);
                    let box8 = document.querySelector(".box8");
                    box8.innerHTML = "Current weather"+
                                     "<br>" +
                                     "Currently: "+ data.weather[0].main +
                                     "<br>" +
                                     "weather description: " + data.weather[0].description +
                                     "<br>" +
                                     "Temp: " + data.main.temp + " Fahrenheit" +
                                     "<br>" + 
                                     "Humidity: " + data.main.humidity + " %";
                })
                .catch(error => console.error('Error fetching images:', error));
        })
      .catch(error => console.error('Error fetching images:', error));

    })
      .catch(error => console.error('Error fetching images:', error));
}


document.addEventListener('DOMContentLoaded', function() {
    loadimg();
    loadapi();
});