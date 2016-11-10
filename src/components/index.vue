<template>
  <div id="index">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './navbar';

/* eslint-disable no-undef */
export default {
  components: {
    Navbar,
  },
  created: function changeBodyStyle() {
    document.getElementsByTagName('body')[0].className = 'body-index';
  },
};
</script>

<style>
  .body-index
  {
    background-color: #fff
  }
</style>
