import Vue from 'vue'
Vue.filter('capitalize', val => val.toUpperCase())
Vue.filter('minimize', val => val.toLowerCase())
Vue.filter('slugy', val => val.replace(" ", ""))
