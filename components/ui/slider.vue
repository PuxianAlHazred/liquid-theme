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
                  <div v-show="show" class="clipPath flyer glitchy" :lazy-background="e.thumbnail">
                  </div>
                </transition>
                <div class="content-right">
                  <div class="meta">
                    <transition  name="fadeDate">
                      <div v-if="show" class="clipPath">
                        <p class="One date">{{ e.event.dateEvent }}</p>
                      </div>
                    </transition>
                    <transition name="fadeOne">
                      <div v-show="show" class="clipPath">
                        <p class="One hour">{{ e.event.hourEvent }}</p>
                      </div>
                    </transition>
                    <p class="Two author"><span>author</span> présente :</p>
                    <transition name="fadeTwo">
                      <div v-show="show" class="clipPath glitchy" >
                          <p class="Two event">{{ e.title }}</p>
                      </div>
                    </transition>
                  </div>
                  <ul class="artistes">
                    <li v-for="(a, i) in e.artiste" :key="i">
                      <transition name="fadeTree" tag="div" :time="i">
                        <div v-show="show" class="clipPath glitchy">
                          {{ a.titleArtiste }}
                        </div>
                      </transition>
                    </li>
                  </ul>
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
        <li :style="'background:'+e.theme.color1+';color:'+e.theme.color2+';'" v-for="(e, i) in filtered" :key="i" :class="{ active: indexed === i }" class="swiper-thumbs-button glitchy" @click="toSlideTop(i)">
          {{ e.date }}
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
  }
  /* INDEX */
  .swiper {
      transition:0.5s all ease;
  }
  .swiper-thumbs {
      transition:0.3s all ease;
      position: absolute;
      top: 0;
      width: 50px;
      height: 70vh;
      z-index: 9;
      cursor: pointer;
      right: 0px;
      background: transparent;
  }
  .swiper-thumbs .swiper-thumbs-button {
      width: 30px;
      height: 100px;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      line-height: 30px;
      left: -40px;
      top: -16px;
      position: relative;
      padding: 10px;
      text-align: center;
      list-style: none;
      color:white;
  }
  .swiper-thumbs .swiper-thumbs-button:hover {
      background: green;
  }
  .swiper-thumbs .swiper-thumbs-button.active {
      background: black!important;
      color:white!important;
  }
  .swiper-back {
      display:none;
  }
  /* SLUG ACTIVE */
  .agenda-slug .swiper{
    height:100vh;


  }
  .agenda-slug .swiper-thumbs {
      height: 100vh;
      right:-50px;
  }
  .agenda-slug .swiper-back {
      position: absolute;
      top: 20px;
      left: 100px;

      z-index: 1;
      cursor: pointer;
      display:block;
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
      VanillaTilt.init(document.querySelectorAll(".flyer"));
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
      VanillaTilt.init(document.querySelectorAll(".flyer"));
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
