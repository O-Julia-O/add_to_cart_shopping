let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    loginForm.classList.remove('active');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        
      },
      "@0.75": {
        slidesPerView: 2,
        
      },
      "@1.00": {
        slidesPerView: 3,
        
      },
      "@1.50": {
        slidesPerView: 4,
        
      },
    },
});

let swiper1 = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        
      },
      "@0.75": {
        slidesPerView: 2,
        
      },
      "@1.00": {
        slidesPerView: 3,
        
      },
      "@1.50": {
        slidesPerView: 4,
        
      },
    },
});