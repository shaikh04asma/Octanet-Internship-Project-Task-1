//Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let menu =document.getElementById('menu-icon')
  let navBar =document.querySelector('.navbar')

  menu.onclick=()=>{
    menu.classList.toggle('bx-x')
    navBar.classList.toggle('active')

  }
  window.onscroll=()=>{
    menu.classList.remove('bx-x')
    navBar.classList.remove('active')
  }
  