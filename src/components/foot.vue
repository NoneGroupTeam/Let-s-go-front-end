<template>
  <footer v-bind:class="classf">
    <p id="foot-font" class="text-center foot-font">Copyright © None Team | 软件工程及应用</p>
  </footer>
  <!-- <footer class="foot-index-end">
    <p id="foot-font" v-bind:class="[classa, classb, classf]">Copyright © None Team | 软件工程及应用</p>
  </footer> -->
</template>

<script>
/* eslint-disable no-undef */
export default {
  data() {
    return {
      classf: '',
    };
  },
  mounted() {
    // console.log(this.$el.clientHeight);
    // console.log(document.body.clientHeight);
    // console.log(window.innerHeight);
    if (this.$el.clientHeight + document.body.clientHeight > window.innerHeight) {
      this.$set(this, 'classf', 'foot-index-end');
    } else {
      this.$set(this, 'classf', 'foot-index-fixed');
    }
  },
};
</script>


<style scoped>
.foot-index-fixed
{
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  padding: 2%;
  width: 100%;
  background-color: rgb(48, 45, 45);
}
.foot-index-end
{
  margin-top: 20px;
  padding: 2%;
  width: 100%;
  background-color: rgb(48, 45, 45);
}
.foot-font
{
  font-weight: 600;
  font-family: "SimHei";
  font-style: bold;
  font-size: 16px;
  color: white;
  vertical-align: middle;
}
</style>
