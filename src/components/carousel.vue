<template>
  <div id="carousel-index" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-index" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-index" data-slide-to="1"></li>
      <li data-target="#carousel-index" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img class="img-responsive center-block" src="../assets/img/index-top.jpg" alt="1" width="100%">
        <div class="carousel-font carousel-caption col-md-offset-2">
          <p>Share your</p>
          <p>Brilliant</p>
          <p>Travel strategy</p>
        </div>
      </div>
      <div class="item">
        <img class="img-responsive center-block" src="../assets/img/index-top.jpg" alt="2" width="100%">
        <div class="carousel-font carousel-caption col-md-offset-2">
          <p>...</p>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-index" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-index" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
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
    font-family: "ChalkboardSE";
    src: url('../assets/font/ChalkboardSE.ttf');
  }
</style>
<!-- chalkboardSE Regular 上面的字
Arial OCt

Yuppy SC Regular  心之所向 带着嘴巴去长沙 作者：
STYuanti TC Regular 攻略分享 -->
<style scoped>
.carousel-font
{
  font-family: ChalkboardSE;
  color: rgb(86, 86, 86);
  font-style: bold;
  font-size: 40px;
}
</style>
