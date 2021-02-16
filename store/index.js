import menu from '~/content/configuration/menu.json';
import generales from '~/content/configuration/generales.json';
import footer from '~/content/configuration/footer.json';

export const state = () => ({
  options: {
    menu: menu,
    generales: generales,
    footer: footer,
    plugins: {
      markdown: {
        markdownIt: {
          linkify: true,
          html: true
        },
        linkAttributes: {
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }
      },
      swiper: {
        allowTouchMove:false,
        loop: false,
        slidesPerView: '3',
        centeredSlides: true,
        parallax: {
          enabled : true
        },
        autoplay: {
          delay: 10000,
        },
        spaceBetween: 0,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    },
  }
});
