import './styles/main.styl';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Login from './pages/login';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/'
  }
];

let router = new VueRouter({
  // 默认为 hash
  mode: 'history',
  routes
});

const app = new Vue({
  router,
  template: `
    <div>
      <router-view></router-view>
    </div>`
}).$mount('#app');
