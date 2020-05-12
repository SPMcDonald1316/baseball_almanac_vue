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
      <p>Search Players By Last Names</p>
      <p>[ <router-link :to="{ name: 'players-index', params: {search: letter } }" tag="a" v-bind:key="letter" v-for="letter in lastNameStartsWith"> {{ letter}} | </router-link> ]</p>
    </div>
    <div>
      <h3>Schedules</h3>
      <p>Search Teams: <input type="text" v-model="franchise" list="franchises"></p>
      <datalist id="franchises">
        <option v-bind:key="franchise.id" v-for="franchise in franchises" v-bind:value="franchise.franch_id">{{franchise.franch_name}}</option>
      </datalist>
      <p>Search Years: <input type="text" v-model="year" list="years"></p>
      <datalist id="years">
        <option v-bind:key="year" v-for="year in years" v-bind:value="year">{{year}}</option>
      </datalist>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  props: ['search'],
  data: function() {
    return {
      message: "Baseball Almanac",
      franchises: {},
      franchise: "",
      lastNameStartsWith: [],
      years: [],
      year: ""
    };
  },
  created: function() {
    axios.get('/api/franchises').then(response => {
      this.franchises = response.data;
    });
    let aplhabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < aplhabet.length; i++) {
      let letter = aplhabet[i].toUpperCase();
      this.lastNameStartsWith.push(letter);
    }
    let currentYear = new Date().getFullYear();
    for (let i = 1918; i < currentYear; i++) {
      this.years.push(i);
    }
  },
  methods: {}
};
</script>
