<template>
  <div id="slider" ref="slider" >
    <div class="swiper" ref="swiperTop" effect="fade"
      v-swiper:myDirectiveSwiper="this.$store.state.options.plugins.swiper"
      @ready="swiperRedied"
      @slide-change="slideChange"
      @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      @slideChangeTransitionEnd="onSwiperSlideChangeTransitionEnd"
      @slider-move="sliderMove"
      >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(e, i) in filtered" :key="i" data-swiper-parallax-opacity="0.1">
          <div class="fontblur" data-tilt-full-page-listening :lazy-background="e.thumbnail"></div>
          <div class="grid-content">
            <NuxtLink class="slider-content" :to="e._path+'/'">
                <transition name="fadeFlyer">
                  <transition name="fadeTwo">
                    <div v-show="show" class="clipPath glitchy" >
                        <h2 class="Two event">{{ e.title }}</h2>
                    </div>
                  </transition>
                </transition>
                <div class="content-right">
                  <div class="meta">
                    <p class="Two author">Par : <span>{{ e.meta.auteur }}</span> le <span>{{ e.meta.date  | moment("DD/MM/YYYY")  }}</span></p>
                  </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-back glitchy">
      <NuxtLink to="/"><i class="las la-undo"></i></NuxtLink>
    </div>
    <div class="swiper-thumbs">
      <ul>
        <li v-for="(e, i) in filtered" :key="i" :class="{ active: indexed === i }" class="swiper-thumbs-button glitchy" @click="toSlideTop(i)">
          {{ e.meta.date | moment("DD/MM/YYYY") }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
  .directGlitch {
    -webkit-filter: url("#glitch");
    filter: url("#glitch");

  }
  .glitchy:hover {
    -webkit-filter: url("#glitch");
    filter: url("#glitch");
  }
  .meta {
    min-height:175px;
  }
  .clipPath {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  .swiper.directGlitch .meta .author{
     opacity:0;
     transition: all 0s ease;
  }
  .swiper .meta .author{
     opacity:1;
     transition: all 1s ease;
  }
  .fadeFlyer-enter-active, .fadeFlyer-leave-active {
    transition: all .5s ease-out;
    -webkit-filter: url("#glitch");
    filter: url("#glitch");
  }
  .fadeFlyer-enter, .fadeFlyer-leave-to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform: translate(0%, -100%);
    transition: all .0s ease-out;
    filter:blur(10px);
  }

  .fadeOne-enter-active, .fadeOne-leave-active {
    transition: all .5s ease-out;
    -webkit-filter: url("#glitch");
    filter: url("#glitch");
  }
  .fadeOne-enter, .fadeOne-leave-to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform: translate(0%, 100%);
    transition: all .0s ease-out;
    filter:blur(10px);
  }

  .fadeDate-enter-active, .fadeDate-leave-active {
    transition: all .3s ease-out;
    transition-delay: 0.3s;
    -webkit-filter: url("#glitch");
    filter: url("#glitch");
  }
  .fadeDate-enter, .fadeDate-leave-to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform: translate(0%, 100%);
    transition: all .0s ease-out;
    filter:blur(5px);
  }

  .fadeTwo-enter-active, .fadeTwo-leave-active {
    transition: all .5s ease-out;
    transition-delay: 0.3s;
  }
  .fadeTwo-enter, .fadeTwo-leave-to {
    clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
    transform: translate(0%, -100%);
    transition: all .0s ease-out;
    filter:blur(5px);
  }

  .fadeTree-enter-active, .fadeTree-leave-active {
    transition: all .5s ease-out;
    transition-delay: 0.5s;
  }
  .fadeTree-enter, .fadeTree-leave-to {
    clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
    transform: translate(0%, -100%);
    transition: all .0s ease-out;

  }

  #slider{
    transition:1s all ease;
    overflow: hidden;
    position: relative;
    z-index:2;
  }
  /* INDEX */
  .swiper {
      transition:0.5s all ease;
  }

  .swiper-back {
      display:none;
  }
  /* SLUG ACTIVE */
  .agenda-slug .swiper{
    height:100vh;


  }
  .agenda-slug .swiper-thumbs {
      width: 100vh;
      right:-50px;
  }
  .agenda-slug .swiper-back {
      position: fixed;
      top: 57px;
      left: 100px;
      z-index: 1;
      cursor: pointer;
      display: block;
  }
  .agenda-slug .swiper-back i{
    color: white!important;
    font-size: 30px;
  }
</style>
<script>
  export default {
    name: 'Slider',
    data() {
      return {
        routing: '',
        active: false,
        indexed: 0,
        show: false
      }
    },
    props: {
      filtered: { type: Array, required: true },
    },
    methods: {
      swiperRedied(swiper) {
        console.log("Swiper ready !")
        this.show = true
        VanillaTilt.init(document.querySelector(".flyer"), {

        });
        /*
        const animateCSS = (element, animation, prefix = 'animate__') =>
          new Promise((resolve, reject) => {
          const animationName = `${prefix}${animation}`;
          const node = document.querySelector(element);
          node.classList.add(`${prefix}animated`, animationName);
          function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
          }
          node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });
        animateCSS('.meta', 'bounce');
        animateCSS('.artistes', 'rollIn');
        */

      },

      sliderMove() {
        console.log( "Slider : On move touch")

      },
      slideChange(i, reallyIndex) {
        this.indexed = this.$refs.swiperTop.swiper.activeIndex;
        console.log( "Slider change : "+ this.indexed )
        VanillaTilt.init(document.querySelector(".flyer"), {

        });
      },
      onSwiperSlideChangeTransitionStart() {
        this.show = false
        this.$refs.swiperTop.classList.add("directGlitch");
      },
      onSwiperSlideChangeTransitionEnd() {
        this.show = true
        this.$refs.swiperTop.classList.remove("directGlitch");


      },
      clickSlide(i, reallyIndex) {
        console.log( "Click on slider : "+ i)
        this.indexed = i
      },
      toSlideTop(i) {
        this.$refs.swiperTop.swiper.slideTo(i);
        this.indexed = i
        console.log( "To slider : "+ i)

      }
    },
  }
</script>
