<template>
  <div class="home">
    <div id="header">
      <!-- Inner -->
        <div class="inner">
          <header>
            <h1><a href="/" id="logo">Baseball Almanac</a></h1>
            <hr />
            <p>Another fine freebie by HTML5 UP</p>
          </header>
          <footer>
            <a href="#features" class="button circled scrolly">Start</a>
          </footer>
        </div>
      <!-- Nav -->
        <nav id="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/franchises">Franchises</a></li>
            <li><a href="/players/A">Players</a></li>
            <li><a href="/about">About Me</a></li>
          </ul>
        </nav>
    </div>
    <div class="wrapper style1">
      <section id="features" class="container special">
        <header>
          <h2>Morbi ullamcorper et varius leo lacus</h2>
          <p>Ipsum volutpat consectetur orci metus consequat imperdiet duis integer semper magna.</p>
        </header>
        <div class="row">
          <article class="col-6 col-12-mobile special">
            <a class="image featured"><img src="images/pic07.jpg" alt="" /></a>
            <header>
              <h3><a href="/franchises">Teams</a></h3>
            </header>
            <p>
              Franchise stats dating back to 1871. See year by year win/loss records and stats for specific years. As well as games played in a given year where available.
            </p>
            <p>Search Teams: <input type="text" v-model="franchise" list="franchises"></p>
            <datalist id="franchises">
              <option v-bind:key="franchise.id" v-for="franchise in franchises" v-bind:value="franchise.franch_id">{{franchise.franch_name}}</option>
            </datalist>
            <router-link :to="{ name: 'franchises-show', params: { franch_id: franchise } }" tag="button">Search Teams</router-link>
          </article>
          <article class="col-6 col-12-mobile special">
            <a class="image featured"><img src="images/pic08.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Players</a></h3>
            </header>
            <p>
              Player stats for both regular and post season batting, pitching, and fielding.
            </p>
            <p>Search Players By Last Names</p>
            <p>[ <router-link :to="{ name: 'players-index', params: {search: letter } }" tag="a" v-bind:key="letter" v-for="letter in lastNameStartsWith"> {{ letter}} | </router-link> ]</p>
          </article>
        </div>
      </section>
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
      franchises1: {},
      franchise1: "",
      franchise: "",
      lastNameStartsWith: [],
      years: [],
      year: ""
    };
  },
  created: function() {
    axios.get('/api/franchises').then(response => {
      this.franchises = response.data;
      this.franchises1 = response.data;
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
