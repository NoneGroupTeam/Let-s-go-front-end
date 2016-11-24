<template>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created: function logout() {
    this.logined = this.$store.getters.getLogin;
    if (this.logined === true) {
      this.$http.get('/api/user/logout/');
    }
    this.$store.dispatch('setLogin', false);
    this.$store.dispatch('setUsername', '');
    this.$store.dispatch('setUserid', -1);
    this.$router.push({ path: '/index' });
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
