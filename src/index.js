import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import routes from './routes';
import stores from './store';

import './styles/main.styl';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(stores);

const router = new VueRouter({
  // hash | history，默认为 hash
  mode: 'hash',
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
// }).$mount('#app');
