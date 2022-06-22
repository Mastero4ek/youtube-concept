window.addEventListener('DOMContentLoaded', () => {

  //sliders

  const swiper1 = new Swiper('.main__channel-slider', {
    loop: true,
    spaceBetween: 40,

    breakpoints: {

      1600: {
        slidesPerView: 6,
        spaceBetween: 40,
      },

      1450: {
        slidesPerView: 6,
        spaceBetween: 35,
      },

      1300: {
        slidesPerView: 6,
        spaceBetween: 30,
      },

      1100: {
        slidesPerView: 6,
        spaceBetween: 25,
      },

      950: {
        slidesPerView: 6,
        spaceBetween: 20,
      },

      820: {
        slidesPerView: 6,
        spaceBetween: 15,
      },

      768.5: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },

    navigation: {
      nextEl: '.main__channel-button-next',
      prevEl: '.main__channel-button-prev',
    },
  });

const swiper2 = new Swiper('.main__recommended-slider', {
  loop: true,
  spaceBetween: 40,

  breakpoints: {

      1600: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

      1450: {
        slidesPerView: 3,
        spaceBetween: 35,
      },

      1300: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1100: {
        slidesPerView: 3,
        spaceBetween: 25,
      },

      950: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      820: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

      768.5: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },

  navigation: {
    nextEl: '.main__recommended-button-next',
    prevEl: '.main__recommended-button-prev',
  },
});

const swiper3 = new Swiper('.main__food-slider', {
  loop: true,
  spaceBetween: 40,

  breakpoints: {

      1600: {
        slidesPerView: 6,
        spaceBetween: 40,
      },

      1450: {
        slidesPerView: 6,
        spaceBetween: 35,
      },

      1300: {
        slidesPerView: 6,
        spaceBetween: 30,
      },

      1100: {
        slidesPerView: 6,
        spaceBetween: 25,
      },

      950: {
        slidesPerView: 6,
        spaceBetween: 20,
      },

      820: {
        slidesPerView: 6,
        spaceBetween: 15,
      },

      768.5: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },

  navigation: {
    nextEl: '.main__food-button-next',
    prevEl: '.main__food-button-prev',
  },
});

const innerWidth = window.innerWidth;
if (innerWidth <= 768) {
  swiper1.destroy();
  swiper2.destroy();
  swiper3.destroy();
}

//mobile-search

const serchBtn = document.querySelector('.header__search-mobile-img'),
      serchInput = document.querySelector('.header__input-mobile');

      serchBtn.addEventListener('click', () => {
        serchInput.classList.toggle('active');
      });

//menu-sidebar

const expand = document.querySelector('.expand'),
      expandImg = document.querySelector('.sidebar__link-show'),
      nav = document.querySelector('.sidebar__nav-hidden');

      expand.addEventListener('click', () => {

        if (nav.classList.contains('visibility')) {
          expandImg.style.transform = 'rotate(0deg)';
          nav.classList.toggle('visibility');
        } else {
          expandImg.style.transform = 'rotate(180deg)';
          nav.classList.toggle('visibility');
        }

      });

});