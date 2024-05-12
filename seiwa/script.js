let oldScrollY = window.scrollY;
let navbr = document.querySelector('nav');
let tglbtn = document.querySelector('.toggle-btn');
let navItems = document.querySelector('.nav-items');
window.onscroll = () => {
     if(window.innerWidth < 700)
     {
          return;
     }
     if(window.scrollY < 90){
          navbr.style.transform = 'translate(0,0)';
          return;
     }
     else if(window.scrollY < oldScrollY - 50){
          navbr.style.transform = 'translate(0,0)';
          oldScrollY = window.scrollY;
     }
     else if(window.scrollY > oldScrollY + 50){
          navbr.style.transform = 'translate(0,-100%)';
          oldScrollY = window.scrollY;
     }
     
     
}
window.onload = () => {
     window.scrollTo(0,0);
     let x = document.querySelector('div');
     setTimeout(() => {
          x.style.opacity = '0';
          setTimeout(() => {
               x.remove();
          }, 1000);
     }, 500);
}

tglbtn.addEventListener('click', () => {
     navItems.classList.toggle('active');
})
navItems.addEventListener('click', () => {
     navItems.classList.toggle('active');
})