import Vue from 'vue';
import Vuex from 'vuex';
// import * as actions from './actions'
// import * as getters from './getters'
// import cart from './modules/cart'
// import products from './modules/products'
Vue.use(Vuex);

/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const localStorage = window.localStorage;
export default new Vuex.Store({
  state: {
    login: false,
    username: '',
    userid: -1,
  },
  mutations: {
    SET_LOGIN(state, login) {
      state.login = login;
      localStorage.setItem('login', JSON.stringify(login));
    },
    SET_USERNAME(state, username) {
      state.username = username;
      localStorage.setItem('username', JSON.stringify(username));
    },
    SET_USERID(state, userid) {
      state.userid = userid;
      localStorage.setItem('userid', JSON.stringify(userid));
    },
  },
  actions: {
    setLogin({ commit }, login) {
      commit('SET_LOGIN', login);
    },
    setUsername({ commit }, username) {
      commit('SET_USERNAME', username);
    },
    setUserid({ commit }, userid) {
      commit('SET_USERID', userid);
    },
  },
  getters: {
    getLogin(state) {
      if (localStorage.getItem('login')) {
        const data = JSON.parse(localStorage.getItem('login'));
        state.login = data;
      } else {
        localStorage.setItem('login', JSON.stringify(false));
      }
      return state.login;
    },
    getUsername(state) {
      if (localStorage.getItem('username')) {
        const data = JSON.parse(localStorage.getItem('username'));
        state.username = data;
      } else {
        localStorage.setItem('username', JSON.stringify(''));
      }
      return state.username;
    },
    getUserid(state) {
      if (localStorage.getItem('userid')) {
        const data = JSON.parse(localStorage.getItem('userid'));
        state.userid = data;
      } else {
        localStorage.setItem('userid', JSON.stringify(-1));
      }
      return state.userid;
    },
  },
});
