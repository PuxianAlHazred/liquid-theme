<template>
  <div :style="'--gradient:'+this.theme.gradientEvent">
    <ClientOnly>
    <section class="ticket-content">
      <div class="grid-content">
          <div class="countdown">
              <div class="current-time" v-if="currentTime">
                <p><span>{{ currentTime ? `${currentTime.days}` : "" }}</span><span class="text-gradient">Day</span></p>
                <p><span>{{ currentTime ? `${("0" + currentTime.hours).slice(-2)}` : "" }}</span><span class="text-gradient">Hours</span></p>
                <p><span>{{ currentTime ? `${("0" + currentTime.minutes).slice(-2)}` : "" }}</span><span class="text-gradient">Minutes</span></p>
                <p><span>{{ currentTime ? `${("0" + currentTime.seconds).slice(-2)}` : "" }}</span><span class="text-gradient">Seconds</span></p>
                <div class="reserv">
                    <a target="_blank" class="underline glitchy" :href="this.ticketLink">Réserver maintenant votre place</a>
                </div>
              </div>
              <p class=" timeto underline glitchy" v-if="!currentTime">Time's Up!</p>
          </div>
      </div>
    </section>
    <div class="container grid-content">
        <section class="content-slug place">
            <div class="agenda-header">
              <h3>{{lieu.titleLieu}}</h3>
              <a class="map" :href="lieu.linkLieu" target="_blank">
                <i class="las la-map-marked-alt "></i>
                <div class="triangle"></div>
                <div class="map-link "><div class="text-gradient " data-text="S'Y RENDRE"><p>S'Y RENDRE</p></div></div>
              </a>
            </div>
            <div class="agenda-content">
              <div class="agenda-thumbs glitchy" :lazy-background="lieu.thumbnailLieu" ></div>
              <div class="content-markdown">
                  <markdown-it-vue :content="lieu.descriptionLieu" :options="this.$store.state.options.plugins.markdown"/>
              </div>
            </div>
        </section>
        <section class="content-slug artistes">
            <div class="agenda-header">
              <h3>ARTISTES</h3>
              <div class="map">
                <i class="las la-user-tag"></i>
                <div class="map-link "><div class="text-gradient "><p class="glitchy">{{meta.cat}}</p></div></div>
              </div>
            </div>
            <div v-for="(element, index) in artiste" class="agenda-content">
              <div class="agenda-thumbs glitchy" :lazy-background="element.thumbnailArtiste"></div>
              <div class="content-markdown">
                  <h4>{{element.titleArtiste}}</h4>
                  <markdown-it-vue :content="element.descriptionArtiste" :options="options"/>
                  <a class="artiste-link" :href="element.linkArtiste" target="_blank">En savoir plus <i class="las la-external-link-alt"></i></a>
              </div>
            </div>
        </section>
    </div>
    <div class="other-event">
      <div class="grid-content">
        <article v-for="element in otherPost.slice(0,1)" class="grid-item glitchy">
          <div class="agenda-thumbs" :lazy-background="element.thumbnail"></div>

          <div class="content-right">
              <p class="style"><span>{{ element.meta.cat }}</span> - <span>{{ element.meta.tags }}</span></p>
              <ul class="artistes">
                <small class="title-event">{{ element.title }}</small>
                <li v-for="(a, i) in element.artiste" :key="i" >{{ a.titleArtiste }}</li>
              </ul>
              <p class="date">{{ element.dateEvent  | moment("DD/MM/YYYY") }}</p>
              <nuxt-link class="link glitchy" :to="element._path+'/'">EN SAVOIR PLUS</nuxt-link>
          </div>
        </article>
        <div class="select-other">
            <h4 class="underline">OTHER EVENTS</h4>
        </div>
        <article v-for="element in otherPost.slice(1,2)" class="grid-item ">
          <div class="agenda-thumbs" :lazy-background="element.thumbnail"></div>
          <div class="content-right">
              <p class="style"><span>{{ element.meta.cat }}</span> - <span>{{ element.meta.tag }}</span></p>
              <ul class="artistes">
                <small class="title-event">{{ element.title }}</small>
                <li v-for="(a, i) in element.artiste" :key="i" >{{ a.titleArtiste }}</li>
              </ul>
              <p class="date">{{ element.dateEvent  | moment("DD/MM/YYYY") }}</p>
              <nuxt-link class="link glitchy" :to="element._path+'/'">EN SAVOIR PLUS</nuxt-link>
          </div>
        </article>
      </div>
    </div>
    </ClientOnly>
  </div>
</template>
<style>
.glitchy:hover {
  -webkit-filter: url("#glitch");
  filter: url("#glitch");
}

</style>
<script>
export default {
  layout: 'default',
  scrollToTop: true,
  data() {
    return {
      options: this.$store.state.options.plugins.markdown,
      currentTime: null,
      speed: 1000,
      otherPost: []
    };
  },
  mounted() {
    VanillaTilt.init(document.querySelector(".agenda-thumbs"), {
    });
    setTimeout(this.countdown, 1);
    var allId = this.$store.state.agenda.posts.map((e, i) => {
      if(e.title != this.title) {
        this.otherPost.push(e)
      } else {
      }
    }).slice(0,1);
  },
  async asyncData({ params }) {
    let page = await import('~/content/agenda/posts/' + params.slug + '.json');
    return page;
  },
  methods: {
    countdown() {

      let t = Date.parse(this.dateEvent) - Date.parse(new Date());
      let seconds = Math.floor((t / 1000) % 60);
      let minutes = Math.floor((t / 1000 / 60) % 60);
      let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (t > 0) {
        this.currentTime = {
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = null;
      }
    }
  }
};
</script>
