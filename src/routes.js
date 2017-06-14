/**
 * routes config
 */

import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Login from './pages/login';

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
    name: 'login',
    component: Login
  },
  {
    path: '*',
    redirect: '/'
  }
];

export default routes;
