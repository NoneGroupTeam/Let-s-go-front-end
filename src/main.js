import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import Vuex from 'vuex';
// import components
import Index from './components/index';
import Login from './components/login';
import Regist from './components/regist';
import Logout from './components/logout';
import Profile from './components/profile';
import Guide from './components/guide';
import GuideID from './components/guide_id';
import GuideAdd from './components/guide_add';
import GuideMe from './components/guide_me';
import Question from './components/question';
import QuestionID from './components/question_id';
import QuestionAdd from './components/question_add';
import QuestionMe from './components/question_me';
import store from './store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.xhr = { withCredentials: true };
const routes = [
  { path: '/', component: Index },
  { path: '/index', component: Index },
  { path: '/login', component: Login },
  { path: '/regist', component: Regist },
  { path: '/logout', component: Logout },
  { path: '/profile', component: Profile },
  { path: '/guide/add', component: GuideAdd },
  { path: '/guide/me', component: GuideMe },
  { path: '/guide/:id', component: GuideID },
  { path: '/guide', component: Guide },
  { path: '/question/add', component: QuestionAdd },
  { path: '/question/me', component: QuestionMe },
  { path: '/question/:id', component: QuestionID },
  { path: '/Question', component: Question },
  { path: '*', redirect: '/' },
];
/* eslint-disable no-unused-vars */
const router = new VueRouter({
  routes,
});
const app = new Vue({
  router,
  store,
}).$mount('#app');
