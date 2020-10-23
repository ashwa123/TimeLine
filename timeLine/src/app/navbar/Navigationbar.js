const navSlide  = () => {
    const phonemenu = document.querySelector('.phonemenu');
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    phonemenu.addEventListener('click', ()=>{
        menu.classList.toggle('menuclick');
 
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    phonemenu.classList.toggle('toggle');    


    });

   
}

navSlide();