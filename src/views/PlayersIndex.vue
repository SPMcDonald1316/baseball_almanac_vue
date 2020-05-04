<template>
  <div class="players-index">
    <h1>{{ message }}</h1>
    <p>Search players here:<input type="text" v-model="playerFilter"></p>
    <div v-bind:key="player.id" v-for="player in filterBy(players, playerFilter, 'name')">
      <h2>{{ player.name }}</h2>
      <h4>{{ player.debut }}</h4>
      <h4>{{ player.final_game }}</h4>
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
      message: "Players",
      players: [],
      playerFilter: ""
    };
  },
  created: function() {
    axios.get('/api/players?search=A').then(response => {
      console.log(response.data);
      this.players = response.data;
    });
  },
  methods: {}
};
</script>
