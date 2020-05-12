<template>
  <div class="franchises-index">
    <div id="header">
      <!-- Inner -->
      <div class="inner">
        <header>
          <h1><a href="index.html" id="logo">Helios</a></h1>
        </header>
      </div>
      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li><a href="index.html">Home</a></li>
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
                <h3><a href="#">Accumsan sed penatibus</a></h3>
              </header>
              <p>
                Dolor sed fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
                porttitor phasellus tempus cubilia ultrices tempor sagittis  tellus ante diam nec penatibus dolor cras
                magna tempus feugiat veroeros.
              </p>
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
                <h2>Franchises</h2>
                <p>
                  List of Major League Franchises
                </p>
              </header>
              <a href="#" class="image featured"><img src="images/pic06.jpg" alt="" /></a>
              <p>
                These are franchises and not team names so it might seem like certain teams are missing but their stats are just included within the franchise they're considered part of. For example the Montreal Expos became the Washington Nationals so the Expos year stats and game schedules are included in the Nationals Franchise.
              </p>
              <section v-bind:key="franchise.id" v-for="franchise in filterBy(franchises, teamFilter, 'franch_name')">
                <header>
                  <h3><a v-bind:href="`/franchises/${franchise.franch_id}`">{{ franchise.franch_name }}</a></h3>
                </header>
                <p>{{ franchise.franch_id }}</p>
              </section>
            </article>
          </div>
        </div>
        <hr />
        <div class="row">
          <article class="col-4 col-12-mobile special">
            <a href="#" class="image featured"><img src="images/pic07.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Gravida aliquam penatibus</a></h3>
            </header>
            <p>
              Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
              porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
            </p>
          </article>
          <article class="col-4 col-12-mobile special">
            <a href="#" class="image featured"><img src="images/pic08.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Sed quis rhoncus placerat</a></h3>
            </header>
            <p>
              Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
              porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
            </p>
          </article>
          <article class="col-4 col-12-mobile special">
            <a href="#" class="image featured"><img src="images/pic09.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Magna laoreet et aliquam</a></h3>
            </header>
            <p>
              Amet nullam fringilla nibh nulla convallis tique ante proin sociis accumsan lobortis. Auctor etiam
              porttitor phasellus tempus cubilia ultrices tempor sagittis. Nisl fermentum consequat integer interdum.
            </p>
          </article>
        </div>
      </div>

    </div>
    <p>Search teams here:<input type="text" v-model="teamFilter"></p>
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
