<template>
  <div id="question">
    <navbar></navbar>
    <ol class="breadcrumb">
      <li><b><router-link to="/question">所有提问</router-link></b></li>
      <li><router-link to="/question/me">我的提问</router-link></li>
      <li><router-link to="/question/add">提出问题</router-link></li>
    </ol>
    <div id="question-list">
      <ul>
        <li v-for="item in items">
          <item :to=geturl(item.id) :img=item.img :title=item.title :labels=item.labels :place=item.place :username=item.username :count=item.answer></item>
        </li>
      </ul>
    </div>
    <button type="button" class="btn center-block" v-on:click="getData">{{button_text}}</button>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './navbar';
import Foot from './foot';
import Item from './item';

/* eslint-disable no-undef */
/* eslint-disable no-alert */
export default {
  components: {
    Navbar,
    Foot,
    Item,
  },
  data() {
    return {
      button_text: 'Load More',
      logined: false,
      username: '',
      userid: -1,
      items: [],
      qData: {
        start: 0,
        offset: 10,
      },
    };
  },
  created: function init() {
    this.logined = this.$store.getters.getLogin;
    this.username = this.$store.getters.getUsername;
    this.userid = this.$store.getters.getUserid;
    if (this.logined === false) {
      alert('not login');
      this.$router.push({ path: '/index' });
    } else {
      this.getData();
    }
  },
  methods: {
    geturl(id) {
      return `/question/${id}`;
    },
    getData() {
      this.$http.post('/api/question/list/', this.qData)
      .then((response) => {
        this.serverCheck(response);
      });
    },
    serverCheck(response) {
      if (response.data.status === false) {
        alert(response.data.message);
      } else {
        const data = this.items;
        for (const key of response.data.message) {
          data.push(key);
        }
        if (response.data.message.length < this.qData.offset) {
          this.$set(this, 'button_text', 'End');
        } else {
          this.$set(this, 'items', data);
          this.$set(this.qData, 'start', this.qData.start + this.qData.offset);
        }
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style:none;
}
button {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
