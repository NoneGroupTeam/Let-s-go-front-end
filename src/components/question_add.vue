<template>
  <div id="question">
    <navbar></navbar>
    <div id="question-add">
      this is question add page
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './navbar';
import Foot from './foot';

export default {
  components: {
    Navbar,
    Foot,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
