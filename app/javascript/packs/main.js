import Vue from 'vue/dist/vue.esm'
import router from './router.js'
import App from '../app.vue'
/* ここから bootstrap-vue */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
/* ここまで */
/* 開発中はtrue の場合の方が開発者向けのメッセージがコンソールに出るらしい。*/
Vue.config.productionTip = false; 

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    router: router,
    components: { App }
  })
})