<template>
  <div class="franchises">
    <h1>{{ message }}</h1>
    <p>Search teams here:<input type="text" v-model="teamFilter"></p>
    <div v-bind:key="franchise.id" v-for="franchise in filterBy(franchises, teamFilter, 'team_name')">
      <h2><a v-bind:href="`/franchises/${franchise.id}`">{{ franchise.team_name }}</a></h2>
      <h4>{{ franchise.team_abbr }}</h4>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from 'vue2-filters';
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Franchise's",
      franchises: [],
      teamFilter: ""
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
