<template>
  <div id="guide">
    <navbar></navbar>
    <div id="guide-id">
      <h2 class="text-center">{{guide.title}}</h2>
      <div class="text-center">
      <span class="label label-primary">{{guide.username}}</span>
      <span class="label label-success">{{guide.place}}</span>
      <span class="label label-info" v-for="label in guide.labels">{{label}}</span>
      <span class="label label-warning">{{guide.start_time}} -> {{guide.end_time}}</span>
      <span class="label label-default">{{guide.pageview}} views from {{guide.submit}}</span>
    </div>
    </div>
    <div>
    </div>
    <div id="editor">
      <div id="view" v-html="compiledMarkdown"></div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import marked from 'marked';
import Navbar from './navbar';
import Foot from './foot';

/* eslint-disable no-undef */
/* eslint-disable no-alert */
export default {
  components: {
    Navbar,
    Foot,
  },
  data() {
    return {
      logined: false,
      username: false,
      userid: -1,
      guide: {
      },
    };
  },
  mounted() {
    this.logined = this.$store.getters.getLogin;
    this.username = this.$store.getters.getUsername;
    this.userid = this.$store.getters.getUserid;
    if (this.logined === false) {
      this.$router.push({ path: '/index' });
    }
  },
  created: function init() {
    const id = this.$route.params.id;
    this.getter(`/api/guide/${id}/`);
  },
  computed: {
    compiledMarkdown() {
      return marked(this.guide.content, { sanitize: true });
    },
  },
  methods: {
    getter(url) {
      this.$http.get(url)
      .then((response) => {
        this.serverCheck(response);
      });
    },
    serverCheck(response) {
      if (response.data.status === false) {
        alert(response.data.message);
        this.$router.back(-1);
      } else {
        this.$set(this, 'guide', response.data.message);
      }
    },
  },
};
</script>

<style scoped>
#view {
  margin: 10px;
}
img {
  max-width: 100%;
  height:auto;
}
span {
  margin-left: 2px;
  margin-right: 2px;
}
</style>
