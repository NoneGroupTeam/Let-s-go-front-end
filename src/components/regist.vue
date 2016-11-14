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
        <input type="text" class="form-control regist-box" id="username" placeholder="用户名">
      </div>
      <div class="form-group col-md-10">
        <input type="password" class="form-control regist-box" id="password" placeholder="密码">
      </div>
      <div class="form-group col-md-10">
        <input type="password" class="form-control regist-box" id="password-confirm" placeholder="确认密码">
      </div>
      <button type="submit" class="regist-button btn center-block">Regist</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  data() {
    return {
    };
  },
  created: function changeBodyStyle() {
    document.getElementsByTagName('body')[0].className = 'body-regist';
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
  .regist-button
  {
    padding-left: 20%;
    padding-right: 20%;
    background-color: rgba(160, 160, 160, 0.8)
  }
</style>
