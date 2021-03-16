import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueMobileDetection from "vue-mobile-detection";
Vue.use(VueMobileDetection);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
