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

document.addEventListener('DOMContentLoaded', function() {
    loadimg();
});