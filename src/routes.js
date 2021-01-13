/**
 * routes config
 */

import Home from './pages/home';
// import Page1 from './pages/page1';
// import Page2 from './pages/page2';
// import Login from './pages/login';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/page1',
    component: () => import('./pages/page1'),
  },
  {
    path: '/page2',
    component: () => import('./pages/page2'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./pages/login'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default routes;
