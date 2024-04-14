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


document.addEventListener('DOMContentLoaded', function() {
    load5img();
});