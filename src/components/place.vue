<template>
  <div id="place">
    <div class="cell">
      <div class="left-top">
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <p class="place-name text-center">九寨沟</p>
        <br/><br/><br/>
        <p class="place-intro col-sm-offset-8">人间天堂之旅</p>
        <br/><br/><br/>
      </div>
      <div class="right-top">
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <p class="place-name text-center">西藏</p>
        <br/><br/><br/>
        <p class="place-intro col-sm-offset-8">净化心灵之路</p>
        <br/><br/><br/>
      </div>
    </div>
    <div class="cell">
      <div class="left-bottom">
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <p class="place-name text-center">英格兰</p>
        <br/><br/><br/>
        <p class="place-intro col-sm-offset-8">大本钟之美</p>
        <br/><br/><br/>
      </div>
      <div class="right-bottom">
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <p class="place-name text-center">点击查看更多</p>
        <br/><br/><br/>
        <p class="place-intro col-sm-offset-8">......</p>
        <br/><br/><br/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
  };
</script>

<style scoped>
  .place .cell
  {
    overflow: auto;
  }
  .cell
  {
    overflow: auto;
  }
  .cell > div
  {
    border: 36px solid #bdbdbd;
    width: 40%;
    height: auto;
    background-repeat: no-repeat;
  }
  .left-top
  {
    float: left;
    background-image: url('../assets/img/jzg.jpg');
    margin-left: 10%;
  }
  .right-top
  {
    float: right;
    background-image: url('../assets/img/xz.jpg');
    margin-right:10%;
  }
  .left-bottom
  {
    float: left;
    background-image: url('../assets/img/england.jpg');
    margin-left: 10%;
  }
  .right-bottom
  {
    float: right;
    background-image: url('../assets/img/more.jpg');
    margin-right: 10%;
  }
  .place-name
  {
    font-family: "Yuppy SC Regular";
    font-size: 40px;
    font-weight: 700;
    color: white;
  }
  .place-intro
  {
    font-family: "SimHei";
    font-size: 18px;
    font-weight: 800;
    font-style: italic;
    color: white;
  }
</style>
