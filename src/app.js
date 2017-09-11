
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import routes from './routes';
import stores from './store';

import './styles/main.styl';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(stores);

const router = new VueRouter({
  // 默认为 hash
  mode: 'history',
  routes
});

new Vue({
  router,
  store
}).$mount('#app');
