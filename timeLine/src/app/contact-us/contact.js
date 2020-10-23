window.onload=function(){

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

// window.document.onload = navSlide();



// for copying email %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  
