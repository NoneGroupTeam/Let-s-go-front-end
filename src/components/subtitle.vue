<template>
  <div id="subtitle" class="subtitle-font text-center">
    <p>{{msg}}</p>
    <hr class="subtitle-hr"/>
  </div>
</template>

<script>
  export default {
    props: [
      'msg',
    ],
  };
</script>

<style>
  @font-face
  {
    font-family: "Yuanti SC Regular";
    src: url('../assets/font/Yuanti SC Regular.ttf');
  }
</style>

<style scoped>
  .subtitle-font
  {
    font-family: "Yuanti SC Regular";
    font-style: bold;
    font-size: 32px;
    margin: 4%;
    color: rgb(88, 86, 86);
  }
  .subtitle-hr
  {
    border-top:2px solid black;
    max-width: 7%;
  }
</style>
