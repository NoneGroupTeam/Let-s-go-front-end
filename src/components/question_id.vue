<template>
  <div id="question">
    <navbar></navbar>
    <div id="question-id">
      <h2 class="text-center">{{question.title}}</h2>
      <div class="text-center">
      <span class="label label-primary">{{question.username}}</span>
      <span class="label label-success">{{question.place}}</span>
      <span class="label label-info" v-for="label in question.labels">{{label}}</span>
      <span class="label label-default">{{question.answer.length}} answers from {{question.submit}}</span>
    </div>
    </div>
    <div id="editor">
      <div id="view" v-html="compiledMarkdown"></div>
    </div>
    <hr>
    <div id="answer-list">
      <ul>
        <li v-for="item in question.answer">
          <ans :img=item.img :content=item.content :username=item.username :submit=item.submit>1</ans>
        </li>
      </ul>
    </div>
    <hr>
    <div>
      <textarea rows="3" v-model="content"></textarea>
    </div>
    <div class="text-center">
      <button type="button" class="btn center-block btn-success" v-on:click="comment">Comment</button>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import marked from 'marked';
import Navbar from './navbar';
import Foot from './foot';
import Ans from './ans';

/* eslint-disable no-undef */
/* eslint-disable no-alert */
export default {
  components: {
    Navbar,
    Foot,
    Ans,
  },
  data() {
    return {
      logined: false,
      username: false,
      userid: -1,
      question: [],
      content: '',
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
    this.getter(`/api/question/${id}/`);
  },
  computed: {
    compiledMarkdown() {
      return marked(this.question.content, { sanitize: true });
    },
  },
  methods: {
    getter(url) {
      this.$http.get(url)
      .then((response) => {
        this.serverCheck(response);
      });
    },
    comment() {
      console.log(this.content);
      const id = this.$route.params.id;
      this.$http.post(`/api/question/${id}/comment/`, { content: this.content })
      .then((response) => {
        this.commentCheck(response);
      });
    },
    serverCheck(response) {
      if (response.data.status === false) {
        alert(response.data.message);
        this.$router.back(-1);
      } else {
        this.$set(this, 'question', response.data.message);
      }
    },
    commentCheck(response) {
      if (response.data.status === false) {
        alert(response.data.message);
      } else {
        const id = this.$route.params.id;
        this.getter(`/api/question/${id}/`);
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
ul {
  list-style:none;
}
textarea {
  resize: none;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}
</style>
