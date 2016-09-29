import './styles/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';

// import App from './pages/App';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Login from './pages/Login';

Vue.use(VueRouter);

let App = Vue.extend({
  template: `
    <div>
      <router-view></router-view>
    </div`
});

let router = new VueRouter();

router.map({
  '/': {
    component: Home
  },
  '/page1': {
    component: Page1
  },
  '/page2': {
    component: Page2
  },
  '/login': {
    component: Login
  }
});

router.start(App, '#app');


// new Vue({
//   el: 'body',
//   components: {App}
// });

