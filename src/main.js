import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')