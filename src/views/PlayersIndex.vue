<template>
  <div class="players-index">
    <h1>{{ message }}</h1>
    <p>Filter players on page:<input type="text" v-model="playerFilter"></p>
    <p>Search players last name by letter:<input type="text" v-model="search"></p>
    <button v-on:click="findPlayers(search)">Search</button> 
    <div v-bind:key="player.id" v-for="player in filterBy(players, playerFilter, 'name')">
      <h2><a v-bind:href="`/players/${player.id}`">{{ player.name }}</a></h2>
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
      playerFilter: "",
      params: 'A'
    };
  },
  created: function() {
    axios.get(`/api/players?search=A`).then(response => {
      console.log(response.data);
      this.players = response.data;
    });
  },
  methods: {
    findPlayers: function(search) {
      axios.get(`/api/players?search=${search.toUpperCase()}`).then(response => {
        console.log(response.data);
        this.players = response.data;
      });
    }
  }
};
</script>
