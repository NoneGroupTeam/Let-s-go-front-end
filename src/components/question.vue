<template>
  <div id="question">
    <navbar></navbar>
    <div id="question-list">
      question index
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
