<template>
  <div id="index">
    <navbar></navbar>
    <carousel></carousel>
    <subtitle msg='攻略分享'></subtitle>
    <guide></guide>
    <subtitle msg='心之所向'></subtitle>
    <place></place>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './navbar';
import Carousel from './carousel';
import Subtitle from './subtitle';
import Guide from './guide';
import Place from './place';
import Foot from './foot';

/* eslint-disable no-undef */
export default {
  components: {
    Navbar,
    Carousel,
    Subtitle,
    Guide,
    Place,
    Foot,
  },
  created: function changeBodyStyle() {
    document.getElementsByTagName('body')[0].className = 'body-index';
  },
};
</script>

<style>
  .body-index
  {
    background-color: #fff;
  }
  .index-top
  {
    margin-top: -2%;
    width: 100%;
    height: auto;
  }
</style>
