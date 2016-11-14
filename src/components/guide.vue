<template>
  <div id="guide" class="guide-img center-block">
    <div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <p class="date text-center">Oct , 5th</p>
      <br/><br/><br/><br/>
      <p class="title text-center">带着嘴巴去长沙<p>
      <br/><br/><br/>
      <p class="author text-center">作者： 饺子<p>
      <br/>
      <div style="vertical-align: middle;">
        <span class="plus-css col-sm-offset-2">+</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="share">旅行足迹</span>
        <span class="plus-css col-sm-offset-4">+</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="share">旅途分享</span>
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

<style>
@font-face
{
  font-family: "Yuppy SC Regular";
  src: url('../assets/font/Yuppy SC Regular.otf');
}
@font-face
{
  font-family: "Arial";
  src: url('../assets/font/Arial.ttf');
}
</style>

<style scoped>
  .guide-img
  {
    margin-left: 5%;
    margin-right: 5%;
    background-repeat: no-repeat;
    background-image: url('../assets/img/guide.jpg');
    max-width: 100%;
    height: auto;
    border: 14px solid #bdbdbd;
    -moz-border-bottom-colors: #300 #600 #700 #800 #900 #A00;
    -moz-border-top-colors: #300 #600 #700 #800 #900 #A00;
    -moz-border-left-colors: #300 #600 #700 #800 #900 #A00;
    -moz-border-right-colors: #300 #600 #700 #800 #900 #A00;
  }
  .date
  {
    font-family: "Arial";
    font-size: 54px;
    color: white;
    font-weight: 900;
  }
  .title
  {
    font-family: "Yuppy SC Regular";
    font-size: 54px;
    color: white;
    font-weight: 600;
  }
  .author
  {
    font-family: "Yuppy SC Regular";
    font-size: 36px;
    color: white;
    font-weight: 300;
  }
  .share
  {

    font-family: "Yuanti SC Regular";
    color: white;
    font-size: 36px;
    line-height: 124px;
    vertical-align: top;
  }
  .plus-css
  {
    font-family: "Microsoft YaHei";
    font-size: 84px;
    font-weight: 900px;
    color: white;
  }

</style>
