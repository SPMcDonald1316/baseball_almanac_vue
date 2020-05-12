<template>
  <div class="franchises-stats">
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
                <h2>{{franchise.stats.name}}</h2>
                <p>{{franchise.stats.year_id}}</p>
              </header>
              <section>
                <header>
                  <h3>Hitting Stats</h3>
                </header>
                <table class="default">
                  <thead>
                    <th>Games</th>
                    <th>Home Games</th>
                    <th>At Bats</th>
                    <th>Runs</th>
                    <th>Hits</th>
                    <th>Doubles</th>
                    <th>Triples</th>
                    <th>Home Runs</th>
                    <th>Walks</th>
                    <th>Strikeouts</th>
                    <th>Steals</th>
                    <th>Caught Stealing</th>
                    <th>Hit By Pitch</th>
                    <th>Sac Flys</th>
                  </thead>
                  <tr>
                    <td>{{franchise.stats.g}}</td>
                    <td>{{franchise.stats.g_home}}</td>
                    <td>{{franchise.stats.ab}}</td>
                    <td>{{franchise.stats.r}}</td>
                    <td>{{franchise.stats.h}}</td>
                    <td>{{franchise.stats.doubles}}</td>
                    <td>{{franchise.stats.triples}}</td>
                    <td>{{franchise.stats.hr}}</td>
                    <td>{{franchise.stats.bb}}</td>
                    <td>{{franchise.stats.so}}</td>
                    <td>{{franchise.stats.sb}}</td>
                    <td>{{franchise.stats.cs}}</td>
                    <td>{{franchise.stats.hbp}}</td>
                    <td>{{franchise.stats.sf}}</td>
                  </tr>
                </table>
              </section>
              <section>
                <header>
                  <h3>Pitching Stats</h3>
                </header>
                <table class="default">
                  <thead>
                    <th>Games</th>
                    <th>Home Games</th>
                    <th>Hits Allowed</th>
                    <th>Walks Allowed</th>
                    <th>Runs Allowed</th>
                    <th>Home Runs Allowed</th>
                    <th>Strikeouts</th>
                    <th>Earned Runs</th>
                    <th>ERA</th>
                    <th>Complete Games</th>
                    <th>Shutouts</th>
                    <th>Saves</th>
                    <th>Errors</th>
                    <th>Double Plays</th>
                    <th>Fielding Pct</th>
                  </thead>
                  <tr>
                    <td>{{franchise.stats.g}}</td>
                    <td>{{franchise.stats.g_home}}</td>
                    <td>{{franchise.stats.ha}}</td>
                    <td>{{franchise.stats.bba}}</td>
                    <td>{{franchise.stats.ra}}</td>
                    <td>{{franchise.stats.hra}}</td>
                    <td>{{franchise.stats.soa}}</td>
                    <td>{{franchise.stats.er}}</td>
                    <td>{{franchise.stats.era}}</td>
                    <td>{{franchise.stats.cg}}</td>
                    <td>{{franchise.stats.sho}}</td>
                    <td>{{franchise.stats.sv}}</td>
                    <td>{{franchise.stats.e}}</td>
                    <td>{{franchise.stats.dp}}</td>
                    <td>{{franchise.stats.fp}}</td>
                  </tr>
                </table>
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
export default {
  data: function() {
    return {
      message: "Year Stats",
      franchise: {},
      games: {}
    };
  },
  created: function() {
    axios.get(`/api/franchises/${this.$route.params.franch_id}/${this.$route.params.year_id}`).then(response => {
      console.log(response.data);
      this.franchise = response.data;
    });
  },
  mounted: function() {
    axios.get(`/api/games?team=${this.franchise.stats.team_id_retro}&&year=${this.franchise.stats.year_id}`).then(response => {
      this.games = response.data;
    });
  },
  methods: {}
};
</script>
