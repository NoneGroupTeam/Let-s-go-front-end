<template>
  <div>
    <navbar></navbar>
    <img src="../assets/img/me.png">
    <div class="mt20">
      <span class="label label-success ml20" v-for="place in i.places">{{place}}</span>
    </div>
    <div>
        <div class="form-inline col-md-4 mt20">
          <input type="text" class="form-control" id="text" v-model="new_label" placeholder="New Label">
          <button type="button" class="btn btn-default btn-info" v-on:click="addLabel">Add New Label</button>
        </div>
        <div class="form-inline col-md-4 mt20">
          <input type="text" class="form-control" id="text" v-model="new_place" placeholder="New Place">
          <button type="button" class="btn btn-default btn-info" v-on:click="addPlace">Add New Place</button>
        </div>
        <div class="form-inline col-md-4 mt20">
          <input type="text" class="form-control" id="text" v-model="new_been" placeholder="Place I've Been">
          <button type="button" class="btn btn-default btn-info" v-on:click="addBeen">Add Place I've Been</button>
        </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Navbar from './navbar';
import Foot from './foot';

/* eslint-disable no-undef */
/* eslint-disable no-alert */
export default {
  components: {
    Navbar,
    Foot,
  },
  data() {
    return {
      logined: false,
      username: '',
      userid: -1,
      new_place: '',
      new_label: '',
      new_been: '',
      d: {
        labels: ['1', '2', '3'],
        places: ['1', '2', '3'],
      },
      i: {
        username: '',
        id: -1,
        birthday: '',
        gender: -1,
        places: [],
      },
    };
  },
  created: function init() {
    this.logined = this.$store.getters.getLogin;
    this.username = this.$store.getters.getUsername;
    this.userid = this.$store.getters.getUserid;
    if (this.logined === false) {
      this.$router.push({ path: '/login' });
    } else {
      this.getInfo();
    }
  },
  methods: {
    addPlace() {
      this.$http.post('/api/place/add/', { name: this.new_place })
      .then((response) => {
        alert(response.data.message);
      });
    },
    addLabel() {
      this.$http.post('/api/label/add/', { name: this.new_label })
      .then((response) => {
        alert(response.data.message);
      });
    },
    addBeen() {
      this.$http.post('/api/user/place/', { name: this.new_been })
      .then((response) => {
        alert(response.data.message);
        this.getInfo();
      });
    },
    refreshBeen() {
      this.getInfo();
    },
    getInfo() {
      this.$http.get('/api/user/info/')
      .then((response) => {
        this.serverCheck(response);
      });
    },
    serverCheck(response) {
      if (response.data.status === false) {
        alert(response.data.message);
      } else {
        this.$set(this, 'i', response.data.message);
        // console.log(this.i);
      }
    },
  },
};
</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
.ml20 {
  margin-left: 20px;
}
</style>
