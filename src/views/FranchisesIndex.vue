<template>
  <div class="franchises-index">
    <h1>{{ message }}</h1>
    <p>Search teams here:<input type="text" v-model="teamFilter"></p>
    <div v-bind:key="franchise.id" v-for="franchise in filterBy(franchises, teamFilter, 'franch_name')">
      <h2><a v-bind:href="`/franchises/${franchise.franch_id}`">{{ franchise.franch_name }}</a></h2>
      <h4>{{ franchise.franch_id }}</h4>
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
      message: "Franchises",
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
