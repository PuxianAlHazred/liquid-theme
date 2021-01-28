<template>
  <footer id="footer">
      <div class="grid-content">
          <div class="">
            <p class="text-left"><i class="lar la-copyright"></i> COPYRIGHT AND DESIGN BY <span class="text-gradient">PIKS-L</span></p>
          </div>
          <div class="">
            <p class="text-right"><a class="underline" @click="scrollToTop">Scroll to top <i class="las la-caret-up"></i></a></p>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="glitch" x="0" y="0">
              <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />
            <feOffset in="r" result="r" dx="-5">
              <animate attributeName="dx" attributeType="XML" values="0; -5; 0; -5; -2; -4; 0 ;-3; 0" dur="1s" repeatCount="indefinite"/>
            </feOffset>
            <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g"/>
            <feOffset in="g" result="g" dx="0" dy="0">
              <animate attributeName="dx" attributeType="XML" values="0; 0; 0; -3; 0; 8; 0 ;-1; 0" dur="1s" repeatCount="indefinite"/>
            </feOffset>
            <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="b"/>
            <feOffset in="b" result="b" dx="0" dy="0">
              <animate attributeName="dx" attributeType="XML" values="0; 3; -1; 4; 0; 2; 0 ;5; 0" dur="1s" repeatCount="indefinite"/>
            </feOffset>
            <feBlend in="r" in2="g" mode="screen" result="blend" />
            <feBlend in="blend" in2="b" mode="screen" result="blend" />
          </filter>
        </defs>
      </svg>
  </footer>
</template>

<script>
  export default {
    methods: {
      scrollToTop() { window.scroll({ top: 0, left: 0, behavior: 'smooth' }) },
    }
  }
</script>
