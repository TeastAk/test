// slider one

const swiperOne = new Swiper('.slider', {
  spaceBetween: 30,
  slidersPerView: 4,

    navigation: {
      nextEl: '.swiper-button-nexts',
      prevEl: '.swiper-button-prevs',
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

});

// slider two

  // const swiperTwo = new Swiper('.luxury__luxury-slider', {

  //   spaceBetween: 17,
  //   slidersPerView: 6,
  
  //   navigation: {
  //     nextEl: '.luxury__right',
  //     prevEl: '.luxury__left',
  //   },
  
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
    
  // });

// slider three

const swiperThree = new Swiper('.review-blocks', {
    spaceBetween: 94,
    slidersPerView: 6,

    navigation: {
      nextEl: '.review__right',
      prevEl: '.review__left',
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
