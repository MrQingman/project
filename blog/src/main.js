// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/assets/icon/iconfont.css'
import App from './App'
import router from './router'
import axios from 'axios'
import AlloyFinger from 'alloyfinger/alloy_finger'
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerVue, {
  AlloyFinger
})
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.axios=axios;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
