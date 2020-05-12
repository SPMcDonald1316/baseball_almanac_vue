<template>
  <div class="players-index">
    <div id="header">
      <!-- Inner -->
      <div class="inner">
        <header>
          <h1><a href="/" id="logo">Baseball Almanac</a></h1>
        </header>
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

      <div class="container">
        <div class="row gtr-200">
          <div class="col-4 col-12-mobile" id="sidebar">
            <hr class="first" />
            <section>
              <header>
                <h3>Filter players on page:</h3>
              </header>
              <p><input type="text" v-model="playerFilter"></p>
              <footer>
                <a href="#" class="button">Learn More</a>
              </footer>
            </section>
            <hr />
            <section>
              <header>
                <h3><a href="#">Sed lorem etiam consequat</a></h3>
              </header>
              <p>
                Tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
              </p>
              <div class="row gtr-50">
                <div class="col-4">
                  <a href="#" class="image fit"><img src="images/pic10.jpg" alt="" /></a>
                </div>
                <div class="col-8">
                  <h4>Nibh sed cubilia</h4>
                  <p>
                    Amet nullam fringilla nibh nulla convallis tique ante proin.
                  </p>
                </div>
                <div class="col-4">
                  <a href="#" class="image fit"><img src="images/pic11.jpg" alt="" /></a>
                </div>
                <div class="col-8">
                  <h4>Proin sed adipiscing</h4>
                  <p>
                    Amet nullam fringilla nibh nulla convallis tique ante proin.
                  </p>
                </div>
                <div class="col-4">
                  <a href="#" class="image fit"><img src="images/pic12.jpg" alt="" /></a>
                </div>
                <div class="col-8">
                  <h4>Lorem feugiat magna</h4>
                  <p>
                    Amet nullam fringilla nibh nulla convallis tique ante proin.
                  </p>
                </div>
                <div class="col-4">
                  <a href="#" class="image fit"><img src="images/pic13.jpg" alt="" /></a>
                </div>
                <div class="col-8">
                  <h4>Sed tempus fringilla</h4>
                  <p>
                    Amet nullam fringilla nibh nulla convallis tique ante proin.
                  </p>
                </div>
                <div class="col-4">
                  <a href="#" class="image fit"><img src="images/pic14.jpg" alt="" /></a>
                </div>
                <div class="col-8">
                  <h4>Malesuada fermentum</h4>
                  <p>
                    Amet nullam fringilla nibh nulla convallis tique ante proin.
                  </p>
                </div>
              </div>
              <footer>
                <a href="#" class="button">Magna Adipiscing</a>
              </footer>
            </section>
          </div>
          <div class="col-8 col-12-mobile imp-mobile" id="content">
            <article id="main">
              <header>
                <h2><a href="#">Players</a></h2>
                <p>
                  List of Major League Players sorted by last name.
                </p>
              </header>
              <section v-bind:key="player.id" v-for="player in filterBy(players, playerFilter, 'name')">
                <header>
                  <h3><router-link :to="{name: 'players-show', params: {id: player.id}}">{{ player.name }}</router-link></h3>
                </header>
                <p>Debut: {{ player.debut }}</p>
                <p>Final Game: {{ player.final_game }}</p>
              </section>
            </article>
          </div>
        </div>
      </div>

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
    axios.get(`/api/players/${this.$route.params.search}`).then(response => {
      console.log(response.data);
      this.players = response.data;
    });
  },
  methods: {}
};
</script>
