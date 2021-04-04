// Navigation Bar  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
window.onclick=function(){

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
    

}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 0, 
        
        function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  

// var navSlide  = () => {
//     const phonemenu = document.querySelector('.phonemenu');
//     const menu = document.querySelector('.menu');
//     const navLinks = document.querySelectorAll('.menu li');

//     phonemenu.addEventListener("DOMContentLoaded",'click', ()=>{
//         menu.classList.toggle('menuclick');
 
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             }
//             else {
//             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//             }
//         });
//     phonemenu.classList.toggle('toggle');    


//     });

   
// }

// window.document.onclick = navSlide();

