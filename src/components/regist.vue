<template>
  <div id="regist">
    <router-link to="/"><img id="logo-with-font" src="../assets/img/logo-with-font.png" class="logo"></router-link>
    <form id="regist-form" class="regist-form" role="form" >
      <div class="form-group">
        <div id="regist-form-title" class="regist-form-title">
          <p class="text-center form-title">let's Go</p>
        </div>
      <div>
      <div class="form-group col-md-10">
        <input type="text" class="form-control regist-box" id="username" v-model="postData.username" placeholder="用户名">
      </div>
      <div class="form-group col-md-10">
        <input type="password" class="form-control regist-box" id="password" v-model="postData.password" placeholder="密码">
      </div>
      <!-- <div class="form-group col-md-10">
        <input type="password" class="form-control regist-box" id="password-confirm" v-model="password-confirm" placeholder="确认密码">
      </div> -->
      <div class="form-group col-md-10">
        <input type="email" class="form-control regist-box" id="email" v-model="postData.email"  placeholder="Email">
      </div>
      <div class="form-group col-md-10">
        <input type="text" class="form-control regist-box" id="phone" v-model="postData.phone" placeholder="手机号">
      </div>
      <div class="form-group col-md-10">
        <input type="text" class="form-control regist-box" id="birthday" v-model="postData.birthday" placeholder="出生日期">
      </div>
      <div class="form-group col-md-10 radio">
        <label class="regist-choice">
          <input type="radio" name="gender" id="gender-1" value="1" v-model="postData.gender">男
        </label>
      </div>
      <div class="form-group col-md-10 radio">
        <label class="regist-choice">
          <input type="radio" name="gender" id="gender-0" value="0" v-model="postData.gender">女
        </label>
      </div>
      <button type="button" class="regist-button btn center-block" v-on:click="reg">Regist</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
export default {
  data() {
    return {
      postData: {
        username: '',
        password: '',
        email: '',
        phone: '',
        gender: '',
        birthday: '',
      },
    };
  },
  created: function changeBodyStyle() {
    document.getElementsByTagName('body')[0].className = 'body-regist';
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
    reg() {
      this.$http.post('/api/user/register/', this.postData)
      .then((response) => {
        this.serverCheck(response);
      });
    },
    serverCheck(response) {
      if (response.data.status === false) {
        alert(response.data.message);
      } else {
        this.$router.push({ path: '/login' });
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
.body-regist
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
  .regist-form
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
  .regist-box
  {
    margin-left: 10%;
    margin-top: 10%;
    border-radius: 5px;
    background-color: rgba(143, 143, 143, 0.2)
  }
  .regist-choice
  {
    margin-left: 15%;
    color: rgba(149, 149, 149, 0.8);
  }
  .regist-button
  {
    padding-left: 20%;
    padding-right: 20%;
    background-color: rgba(160, 160, 160, 0.8)
  }
</style>
