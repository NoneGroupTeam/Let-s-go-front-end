<template>
  <div id="navbar">
    <nav class="navbar">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <router-link to="/"><img id="logo-with-font" src="../assets/img/logo-with-font.png" class="logo"></router-link>
          <ul class="nav navbar-nav navbar-right">

            <li v-if="login"><router-link to="/" class="navbar-text">首页</router-link></li>
            <li v-else><router-link to="/login" class="navbar-text">登录</router-link></li>
            <li v-if="login"><router-link to="/user/profile" class="navbar-text">个人中心</router-link></li>
            <li v-else><router-link to="/regist" class="navbar-text">注册</router-link></li>
            <li v-if="login"><router-link to="/user/logout" class="navbar-text">退出</router-link></li>




          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        login: false,
      };
    },
  };
</script>

<style scoped>
body
{
  background-color: #fff;
}
.logo
{
  max-width: 5%;
  height:auto;
  margin: 10px;
}
.navbar-text
{
    color: rgb(116, 103, 103);
    font-style: italic;
}
</style>
