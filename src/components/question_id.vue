<template>
  <div id="question">
    <navbar></navbar>
    <div id="question-id">
      this is id :{{$route.params.id}}
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
