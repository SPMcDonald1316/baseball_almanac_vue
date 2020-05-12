<template>
  <div class="home">
    <div id="header">
      <!-- Inner -->
        <div class="inner">
          <header>
            <h1><a href="/" id="logo">Helios</a></h1>
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
            <li>
              <a href="#">Dropdown</a>
              <ul>
                <li><a href="#">Lorem ipsum dolor</a></li>
                <li><a href="#">Magna phasellus</a></li>
                <li><a href="#">Etiam dolore nisl</a></li>
                <li>
                  <a href="#">And a submenu &hellip;</a>
                  <ul>
                    <li><a href="#">Lorem ipsum dolor</a></li>
                    <li><a href="#">Phasellus consequat</a></li>
                    <li><a href="#">Magna phasellus</a></li>
                    <li><a href="#">Etiam dolore nisl</a></li>
                  </ul>
                </li>
                <li><a href="#">Veroeros feugiat</a></li>
              </ul>
            </li>
            <li><a href="left-sidebar.html">Left Sidebar</a></li>
            <li><a href="right-sidebar.html">Right Sidebar</a></li>
            <li><a href="no-sidebar.html">No Sidebar</a></li>
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
          <article class="col-4 col-12-mobile special">
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
          <article class="col-4 col-12-mobile special">
            <a class="image featured"><img src="images/pic08.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Players</a></h3>
            </header>
            <p>
              Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
              porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
            </p>
            <p>Search Players By Last Names</p>
            <p>[ <router-link :to="{ name: 'players-index', params: {search: letter } }" tag="a" v-bind:key="letter" v-for="letter in lastNameStartsWith"> {{ letter}} | </router-link> ]</p>
          </article>
          <article class="col-4 col-12-mobile special">
            <a href="#" class="image featured"><img src="images/pic09.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Schedules</a></h3>
            </header>
            <p>
              Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
              porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
            </p>
            <p>Search Team: <input type="text" v-model="franchise" list="franchises"></p>
            <datalist id="franchises">
              <option v-bind:key="franchise.id" v-for="franchise in franchises" v-bind:value="franchise.franch_id">{{franchise.franch_name}}</option>
            </datalist>
            <p>Search Years: <input type="text" v-model="year" list="years"></p>
            <datalist id="years">
              <option v-bind:key="year" v-for="year in years" v-bind:value="year">{{year}}</option>
            </datalist>
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
