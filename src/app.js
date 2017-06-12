import './styles/main.styl';

import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

let router = new VueRouter({
  // 默认为 hash
  mode: 'history',
  routes
});

const app = new Vue({
  router
}).$mount('#app');
