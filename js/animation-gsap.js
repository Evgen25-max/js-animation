window.onload = function() {
  var heroTitle = document.querySelector('.hero__title')
  var heroDesc = document.querySelector('.hero__descr')
  var heroBtn = document.querySelector('.hero__btn')
  var photographerData = document.querySelector('.photos__author')
  var allPhotosImg = document.querySelectorAll('[photos-img]')
  var tl = gsap.timeline();
  var burgertl = gsap.timeline({paused:true});
  var burgerOpen = document.querySelector('.burger')
  var burgerClose = document.querySelector('.close')
  var burgerMenu = document.querySelector('.menu')
  var menuRight = document.querySelector('.menu__right')
  var menuNav = document.querySelector('.menu__nav')
  var social = document.querySelector('.social')
  var menuTop = document.querySelector('.menu__top')
  gsap.registerPlugin(CustomEase);

  burgertl.from(burgerMenu, {ease: "power3.out", delay: .1, duration: .4, opacity: 0})
          .from(menuTop, {height: 0, ease: CustomEase.create("custom", "M0,0,C0,0,0.05,0.228,0.09,0.373,0.12,0.484,0.139,0.547,0.18,0.654,0.211,0.737,0.235,0.785,0.275,0.864,0.291,0.896,0.303,0.915,0.325,0.944,0.344,0.97,0.356,0.989,0.38,1.009,0.413,1.039,0.441,1.058,0.48,1.08,0.496,1.089,0.51,1.091,0.53,1.095,0.552,1.099,0.567,1.101,0.59,1.099,0.623,1.097,0.646,1.094,0.68,1.085,0.768,1.061,0.822,1.035,0.91,1.011,0.943,1.002,1,1,1,1"), delay: .2, duration: .5}, "<")
          .from(menuTop, {opacity: 0, ease: 'sine.in', duration: .8}, "<")
          .from(menuNav, {opacity: 0, y: 20,  ease: "power4.out", duration: .4})
          .from(menuRight, {opacity: 0, y: 80, ease: "power4.out", duration: .8})
          .from(social, {opacity: 0, y: 80, ease: "power4.out", duration: .8}, "<");


  burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('menu--open')
    burgertl.play()
  }
  )

  burgerClose.addEventListener('click', () => {
    burgertl.reverse()
    setTimeout(() => {
      burgerMenu.classList.remove('menu--open')
    }, 2000
    )
  })
  gsap.from(heroTitle, {y: 100, opacity: 0, delay: .5, duration: 1.2, ease: "power3.out"})
  gsap.from(heroBtn, {y: 100, opacity: 0, delay: .5, duration: 1, ease: "power3.out"})
  gsap.from(heroDesc, {opacity: 0, ease: "power3.out", delay: 1.2, duration: 3})
  gsap.from(photographerData, {opacity: 0, ease: "power3.out", delay: 2, duration: 1.2})
  tl.from(allPhotosImg, {opacity: 0, ease: "power3.out", delay: 1.2, duration: 5, stagger: .3})
};
