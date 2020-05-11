<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <h3>Teams</h3>
      <p>Search Teams: <input type="text" v-model="franchise" list="franchises"></p>
      <datalist id="franchises">
        <option v-bind:key="franchise.id" v-for="franchise in franchises" v-bind:value="franchise.franch_id">{{franchise.franch_name}}</option>
      </datalist>
      <router-link :to="{ name: 'franchises-show', params: { franch_id: franchise } }" tag="button">Search Teams</router-link>
      <router-link :to="{ name: 'franchises-index'}" tag="button">See All Teams</router-link>
    </div>
    <div>
      <h3>Players</h3>
      <p>Search Teams: <input type="text" v-model="player" list="players"></p>
      <datalist id="players">
        <option v-bind:key="player.id" v-for="player in players" v-bind:value="player.id">{{ player.name }}</option>
      </datalist>
      <router-link :to="{ name: 'players-show', params: { id: player } }" tag="button">Search Player</router-link>
      <!-- <router-link :to="{ name: 'franchises-index'}" tag="button">See All Teams</router-link> -->
    </div>
    <div>
      <h3>Games</h3>
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
      message: "Baseball Almanac",
      franchises: {},
      franchise: "",
      lastNameStartsWith: {},
      player: ""
    };
  },
  created: function() {
    axios.get('/api/franchises').then(response => {
      this.franchises = response.data;
      axios.get('api/players').then(response => {
        this.players = response.data;
        console.log(this.players);
      });
    });
  },
  methods: {}
};
</script>
