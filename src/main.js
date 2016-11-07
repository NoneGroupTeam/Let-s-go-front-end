import Vue from 'vue';
import VueRouter from 'vue-router';
// import components
import Index from './components/index';
import Login from './components/login';

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Index },
  { path: '/index', component: Index },
  { path: '/login', component: Login },
  { path: '*', redirect: '/' },
];
/* eslint-disable no-unused-vars */
const router = new VueRouter({
  routes,
});
const app = new Vue({
  router,
}).$mount('#app');
