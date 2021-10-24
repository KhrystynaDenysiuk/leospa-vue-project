import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import * as VueGoogleMaps from "vue2-google-maps";
import VueYoutube from 'vue-youtube'
 
Vue.use(VueYoutube)
Vue.use(VueRouter)
Vue.use(Vuelidate)
 
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyDwy3yIZKy6wx7R3dZ9A9l-7KLVhnNAO6M',
		libraries: 'places',
	},
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')