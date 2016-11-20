import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import components
import Index from './components/index';
import Login from './components/login';
import Regist from './components/regist';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.xhr = { withCredentials: true };
const routes = [
  { path: '/', component: Index },
  { path: '/index', component: Index },
  { path: '/login', component: Login },
  { path: '/regist', component: Regist },
  { path: '*', redirect: '/' },
];
/* eslint-disable no-unused-vars */
const router = new VueRouter({
  routes,
});
const app = new Vue({
  router,
}).$mount('#app');
