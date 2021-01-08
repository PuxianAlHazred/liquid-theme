<template>
	<div :class="'accordion ' + [active ? 'active' : '']">
		<div class="acordion-title" v-on:click="toggle">
			<p>{{ name }}</p>
			<i class="las la-caret-up"></i>
		</div>
		<div ref="accordion-content" class="accordion-content">
			<div ref="height" class="accordion-height"><slot></slot></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Accordion',
  components: {},
  props: {
    name: String
  },
  methods: {
    toggle() {
      this.active = !this.active;
      const open = getComputedStyle(this.$refs['accordion-content']).height;
      const height = this.$refs['height'].offsetHeight;
      if(open == '0px'){
          this.$refs['accordion-content'].style.maxHeight  = height+'px' ;
      }else{
          this.$refs['accordion-content'].style.maxHeight  = '0px';
      }
    }
  },
  data() {
    return {
      active: false
    }
  }
}
</script>
