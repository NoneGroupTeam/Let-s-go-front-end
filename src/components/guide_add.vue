<template>
  <div id="guide">
    <navbar></navbar>
    <form class="form-inline">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" class="form-control" id="title" v-model="postData.title" placeholder="New guide">
      </div>
      <div class="form-group">
        <label for="place">Place:</label>
        <select id="place" class="form-control" v-model="postData.place">
          <option v-for="option in places" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="label">Label:</label>
        <select id="label" class="form-control" v-model="postData.label" multiple="multiple">
          <option v-for="option in labels" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="start-time">Start:</label>
        <input type="date" class="form-control" id="start-time" v-model="postData.start_time" placeholder="出发日期">
      </div>
      <div class="form-group">
        <label for="end-time">End:</label>
        <input type="date" class="form-control" id="end-time" v-model="postData.end_time" placeholder="结束日期">
      </div>
    </form>
    <div id="editor">
      <textarea id='text' ref="text" :value="postData.content" v-on:input="update" rows="25"></textarea>
      <div id="view" v-html="compiledMarkdown"></div>
    </div>
    <div class="text-center">
      <button type="button" class="btn center-block btn-success" v-on:click="submit">Submit</button>
    </div>
    <foot></foot>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import autosize from 'autosize';
import marked from 'marked';
import Navbar from './navbar';
import Foot from './foot';

const initString = `# Header1
## Header2
###### Header6

**Bold**
*Emhasize*
++Underline++
~~Strikethrough~~
^Superscript^
~Subscript~

    ![alt text](url), [link text](url), @[alt text](url)

- Unordered list


1. Order list

\`code\`
\`\`\`block code\`\`\`

- - -`;
export default {
  components: {
    Navbar,
    Foot,
  },
  data() {
    return {
      logined: false,
      username: '',
      userid: -1,
      // data
      labels: [],
      label: [],
      places: [],
      place: '',
      postData: {
        content: initString,
        label: [],
        place: '',
        title: '',
        start_time: '',
        end_time: '',
      },
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.postData.content, { sanitize: true });
    },
  },
  created: function init() {
    this.logined = this.$store.getters.getLogin;
    this.username = this.$store.getters.getUsername;
    this.userid = this.$store.getters.getUserid;
    if (this.logined === false) {
      this.$router.push({ path: '/login' });
    } else {
      this.getLabels();
      this.getPlaces();
    }
  },
  methods: {
    update(e) {
      this.postData.content = e.target.value;
      autosize(this.$refs.text);
    },
    getLabels() {
      this.$http.get('/api/label/list')
      .then((response) => {
        this.updateLabels(response);
      });
    },
    getPlaces() {
      this.$http.get('/api/place/list')
      .then((response) => {
        this.updatePlaces(response);
      });
    },
    updateLabels(res) {
      if (res.data.status === true) {
        const data = [];
        for (const key of res.data.message) {
          data.push({ value: key.id, text: key.name });
        }
        this.$set(this, 'labels', data);
      }
    },
    updatePlaces(res) {
      if (res.data.status === true) {
        const data = [];
        for (const key of res.data.message) {
          data.push({ value: key.id, text: key.name });
        }
        this.$set(this, 'places', data);
      }
    },
    submit() {
      this.$http.post('/api/guide/add/', this.postData)
      .then((response) => {
        this.serverCheck(response);
      });
    },
    serverCheck(response) {
      if (response.data.status === false) {
        alert(response.data.message);
      } else {
        alert('success');
      }
    },
  },
};
</script>

<style scoped>
@import '../../node_modules/multiple-select/multiple-select.css';
html, body, #editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  outline: none;
  resize: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
  overflow:hidden;
  height: auto;
  word-break:break-all;
  display:inline-block;
}
form, form div {
  margin: 10px;
}
img {
  max-width: 49%;
  height: auto;
}
code {
  color: #f66;
}
</style>
