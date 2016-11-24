<template>
  <div id="login">
    <router-link to="/"><img id="logo-with-font" src="../assets/img/logo-with-font.png" class="logo"></router-link>
    <form id="login-form" class="login-form" role="form" >
      <div class="form-group">
        <div id="login-form-title" class="login-form-title">
          <p class="text-center form-title">let's Go</p>
        </div>
      <div>
      <div class="form-group col-md-10">
        <input type="text" class="form-control login-box" id="username" v-model="postData.username" placeholder="用户名">
      </div>
      <div class="form-group col-md-10">
        <input type="password" class="form-control login-box" id="password" v-model="postData.password" placeholder="密码">
      </div>
      <!-- <div class="form-group checkbox col-md-10">
        <label class="login-check">
          <input id="remenber" type="checkbox">记住密码</input>
        </label>
      </div> -->
      <button type="button" class="login-button btn center-block" v-on:click="login">Login</button>
      <div id="login-help">
        <br/>
        <p class="text-right">
          <router-link to="/regist" class="text-help">注册</router-link>
          <router-link to="/fotget-passwd" class="text-help">忘记密码</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-alert */
export default {
  data() {
    return {
      postData: {
        username: '',
        password: '',
      },
      logined: false,
      username: '',
      userid: -1,
    };
  },
  created: function changeBodyStyle() {
    document.getElementsByTagName('body')[0].className = 'body-login';
  },
  mounted() {
    this.logined = this.$store.getters.getLogin;
    this.username = this.$store.getters.getUsername;
    this.userid = this.$store.getters.getUserid;
    if (this.logined === true) {
      this.$router.push({ path: '/index' });
    }
  },
  methods: {
    login() {
      this.$http.post('/api/user/login/', this.postData)
      .then((response) => {
        this.serverCheck(response);
      });
    },
    serverCheck(response) {
      if (response.data.status === false) {
        alert(response.data.message);
      } else {
        this.$store.dispatch('setLogin', true);
        this.$router.push({ path: '/index' });
      }
    },
  },
};
</script>

<style lang="sass">
    $icon-font-path: '../../node_modules/bootstrap-sass/assets/fonts/bootstrap/'
    @import '../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap'
</style>

<style>
.body-login
{
  background-image: url('../assets/img/login-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<style scoped>
  .logo
  {
    margin: 10px;
    margin-left: 2.5%;
    max-width: 5%;
    height: auto;
  }
  .login-form
  {
    margin-left: 10%;
    margin-right: 70%;
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 30px;
    border-radius: 10px;
  }
  @font-face
  {
      font-family: "Comic Sans MS.ttf";
      src: url('../assets/font/Comic Sans MS.ttf');
  }
  .form-title
  {
    font-family: "Comic Sans MS";
    font-size: 30px;
    font-style: bold;
  }
  .login-box
  {
    margin-left: 10%;
    margin-top: 10%;
    border-radius: 5px;
    background-color: rgba(143, 143, 143, 0.2);
  }
  .login-button
  {
    padding-left: 20%;
    padding-right: 20%;
    background-color: rgba(160, 160, 160, 0.8);
  }
  .login-check
  {
    margin-left: 15%;
    color: rgba(149, 149, 149, 0.8);
  }
  .text-help
  {
    color: rgba(0, 0, 0, 0.5);
  }
</style>
