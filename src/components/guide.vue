<template>
  <div id="guide">
    <navbar></navbar>
    <ol class="breadcrumb">
      <li><b><router-link to="/guide">所有攻略</router-link></b></li>
      <li><router-link to="/guide/me">我的攻略</router-link></li>
      <li><router-link to="/guide/add">发表攻略</router-link></li>
    </ol>
    <div id="guide-list">
      <ul>
        <li v-for="item in items">
          <item :img=item.img :title=item.title :labels=item.labels :place=item.place :username=item.username :pageview=item.pageview></item>
        </li>
      </ul>
    </div>
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
    getData() {
      this.$http.post('/api/guide/list/', this.qData)
      .then((response) => {
        this.serverCheck(response);
      });
    },
    serverCheck(response) {
      if (response.data.status === false) {
        alert(response.data.message);
      } else {
        this.$set(this, 'items', response.data.message);
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style:none;
}
table {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  width: 100%;
  border-spacing: 0px;
}
.cell {
    padding: 10px;
    font-size: 12px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
}
.item {
    background-position: 0 bottom;
    background-repeat: repeat-x;
}
.item_title {
    font-size: 16px;
    line-height: 120%;
    text-shadow: 0px 1px 0px #fff;
    word-wrap: break-word;
    hyphens: auto;
}
.fade {
    color: #ccc;
    font-size: 14px;
}
.avatar {
    -moz-border-radius: 4px;
    border-radius: 4px;
}
</style>
