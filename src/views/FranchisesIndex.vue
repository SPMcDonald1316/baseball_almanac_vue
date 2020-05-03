<template>
  <div class="franchises">
    <h1>{{ message }}</h1>
    <div v-bind:key="franchise.id" v-for="franchise in franchises">
      <h2>{{ franchise.team_name }}</h2>
      <h4>{{ franchise.team_abbr }}</h4>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Franchise's",
      franchises: []
    };
  },
  created: function() {
    axios.get('/api/franchises').then(response => {
      console.log(response.data);
      this.franchises = response.data;
    });
  },
  methods: {}
};
</script>
