<template>
  <div class="players-show">
    <div id="header">
      <!-- Inner -->
      <div class="inner">
        <header>
          <h1 id="logo">Baseball Almanac</h1>
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
                <h3><a href="#">About {{ player.name }}</a></h3>
              </header>
              <p>Height: {{ player.height }}</p>
              <p>Weight: {{ player.weight }}</p>
              <p>Debut: {{ player.debut }}</p>
              <p>Final Game: {{ player.final_game }}</p>
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
                <h2>{{ player.name }}</h2>
              </header>
              <section v-if="player.hitting_stats && player.hitting_stats.length > 0">
                <header>
                  <h3>Regular Season Batting</h3>
                </header>
                <table class="default">
                  <thead>
                    <th>Year</th>
                    <th>Team</th>
                    <th>League</th>
                    <th>Games</th>
                    <th>At Bats</th>
                    <th>Runs</th>
                    <th>Hits</th>
                    <th>2B</th>
                    <th>3B</th>
                    <th>HR</th>
                    <th>RBI</th>
                    <th>SB</th>
                    <th>CS</th>
                    <th>BB</th>
                    <th>SO</th>
                    <th>IBB</th>
                    <th>HBP</th>
                    <th>Sac Hits</th>
                    <th>Sac Fly</th>
                    <th>GIDP</th>
                  </thead>
                  <tr v-bind:key="stat.id" v-for="stat in player.hitting_stats">
                    <td>{{stat.year_id}}</td>
                    <td>{{stat.team_id}}</td>
                    <td>{{stat.lg_id}}</td>
                    <td>{{stat.g}}</td>
                    <td>{{stat.ab}}</td>
                    <td>{{stat.r}}</td>
                    <td>{{stat.h}}</td>
                    <td>{{stat.doubles}}</td>
                    <td>{{stat.triples}}</td>
                    <td>{{stat.hr}}</td>
                    <td>{{stat.rbi}}</td>
                    <td>{{stat.sb}}</td>
                    <td>{{stat.cs}}</td>
                    <td>{{stat.bb}}</td>
                    <td>{{stat.so}}</td>
                    <td>{{stat.ibb}}</td>
                    <td>{{stat.hbp}}</td>
                    <td>{{stat.sh}}</td>
                    <td>{{stat.sf}}</td>
                    <td>{{stat.gidp}}</td>
                  </tr>
                </table>
              </section>
              <section v-if="player.post_hitting && player.post_hitting.length > 0">
                <header>
                  <h3>Post Season Batting</h3>
                </header>
                <table class="default">
                  <thead>
                    <th>Year</th>
                    <th>Team</th>
                    <th>League</th>
                    <th>Games</th>
                    <th>At Bats</th>
                    <th>Runs</th>
                    <th>Hits</th>
                    <th>2B</th>
                    <th>3B</th>
                    <th>HR</th>
                    <th>RBI</th>
                    <th>SB</th>
                    <th>CS</th>
                    <th>BB</th>
                    <th>SO</th>
                    <th>IBB</th>
                    <th>HBP</th>
                    <th>Sac Hits</th>
                    <th>Sac Fly</th>
                    <th>GIDP</th>
                  </thead>
                  <tr v-bind:key="stat.id" v-for="stat in player.post_hitting">
                    <td>{{stat.year_id}}</td>
                    <td>{{stat.team_id}}</td>
                    <td>{{stat.lg_id}}</td>
                    <td>{{stat.g}}</td>
                    <td>{{stat.ab}}</td>
                    <td>{{stat.r}}</td>
                    <td>{{stat.h}}</td>
                    <td>{{stat.doubles}}</td>
                    <td>{{stat.triples}}</td>
                    <td>{{stat.hr}}</td>
                    <td>{{stat.rbi}}</td>
                    <td>{{stat.sb}}</td>
                    <td>{{stat.cs}}</td>
                    <td>{{stat.bb}}</td>
                    <td>{{stat.so}}</td>
                    <td>{{stat.ibb}}</td>
                    <td>{{stat.hbp}}</td>
                    <td>{{stat.sh}}</td>
                    <td>{{stat.sf}}</td>
                    <td>{{stat.gidp}}</td>
                  </tr>
                </table>
              </section>
              <section v-if="player.pitching_stats && player.pitching_stats.length > 0">
                <header>
                  <h3>Regular Season Pitching</h3>
                </header>
                <table class="default">
                  <thead>
                    <th>Year</th>
                    <th>Team</th>
                    <th>League</th>
                    <th>W</th>
                    <th>L</th>
                    <th>G</th>
                    <th>GS</th>
                    <th>GF</th>
                    <th>CG</th>
                    <th>SHO</th>
                    <th>SV</th>
                    <th>H</th>
                    <th>R</th>
                    <th>ER</th>
                    <th>HR</th>
                    <th>BB</th>
                    <th>SO</th>
                    <th>BA OPP</th>
                    <th>ERA</th>
                    <th>IBB</th>
                    <th>WP</th>
                    <th>HBP</th>
                    <th>Balks</th>
                  </thead>
                  <tr v-bind:key="stat.id" v-for="stat in player.pitching_stats">
                    <td>{{stat.year_id}}</td>
                    <td>{{stat.team_id}}</td>
                    <td>{{stat.lg_id}}</td>
                    <td>{{stat.w}}</td>
                    <td>{{stat.l}}</td>
                    <td>{{stat.g}}</td>
                    <td>{{stat.gs}}</td>
                    <td>{{stat.gf}}</td>
                    <td>{{stat.cg}}</td>
                    <td>{{stat.sho}}</td>
                    <td>{{stat.sv}}</td>
                    <td>{{stat.h}}</td>
                    <td>{{stat.r}}</td>
                    <td>{{stat.er}}</td>
                    <td>{{stat.hr}}</td>
                    <td>{{stat.bb}}</td>
                    <td>{{stat.so}}</td>
                    <td>{{stat.ba_opp}}</td>
                    <td>{{stat.era}}</td>
                    <td>{{stat.ibb}}</td>
                    <td>{{stat.wp}}</td>
                    <td>{{stat.hbp}}</td>
                    <td>{{stat.bk}}</td>
                  </tr>
                </table>
              </section>
              <section v-if="player.post_pitching && player.post_pitching.length > 0">
                <header>
                  <h3>Post Season Pitching</h3>
                </header>
                <table class="default">
                  <thead>
                    <th>Year</th>
                    <th>Team</th>
                    <th>League</th>
                    <th>W</th>
                    <th>L</th>
                    <th>G</th>
                    <th>GS</th>
                    <th>GF</th>
                    <th>CG</th>
                    <th>SHO</th>
                    <th>SV</th>
                    <th>H</th>
                    <th>R</th>
                    <th>ER</th>
                    <th>HR</th>
                    <th>BB</th>
                    <th>SO</th>
                    <th>BA OPP</th>
                    <th>ERA</th>
                    <th>IBB</th>
                    <th>WP</th>
                    <th>HBP</th>
                    <th>Balks</th>
                  </thead>
                  <tr v-bind:key="stat.id" v-for="stat in player.post_pitching">
                    <td>{{stat.year_id}}</td>
                    <td>{{stat.team_id}}</td>
                    <td>{{stat.lg_id}}</td>
                    <td>{{stat.w}}</td>
                    <td>{{stat.l}}</td>
                    <td>{{stat.g}}</td>
                    <td>{{stat.gs}}</td>
                    <td>{{stat.gf}}</td>
                    <td>{{stat.cg}}</td>
                    <td>{{stat.sho}}</td>
                    <td>{{stat.sv}}</td>
                    <td>{{stat.h}}</td>
                    <td>{{stat.r}}</td>
                    <td>{{stat.er}}</td>
                    <td>{{stat.hr}}</td>
                    <td>{{stat.bb}}</td>
                    <td>{{stat.so}}</td>
                    <td>{{stat.ba_opp}}</td>
                    <td>{{stat.era}}</td>
                    <td>{{stat.ibb}}</td>
                    <td>{{stat.wp}}</td>
                    <td>{{stat.hbp}}</td>
                    <td>{{stat.bk}}</td>
                  </tr>
                </table>
              </section>
              <section v-if="player.fielding_stats && player.fielding_stats.length > 0">
                <header>
                  <h3>Regular Season Fielding</h3>
                </header>
                <table class="default">
                  <thead>
                    <th>Year</th>
                    <th>Team</th>
                    <th>League</th>
                    <th>POS</th>
                    <th>G</th>
                    <th>GS</th>
                    <th>PO</th>
                    <th>A</th>
                    <th>E</th>
                    <th>DP</th>
                    <th>PB</th>
                    <th>WP</th>
                    <th>SB</th>
                    <th>CS</th>
                  </thead>
                  <tr v-bind:key="stat.id" v-for="stat in player.fielding_stats">
                    <td>{{stat.year_id}}</td>
                    <td>{{stat.team_id}}</td>
                    <td>{{stat.lg_id}}</td>
                    <td>{{stat.pos}}</td>
                    <td>{{stat.g}}</td>
                    <td>{{stat.gs}}</td>
                    <td>{{stat.po}}</td>
                    <td>{{stat.a}}</td>
                    <td>{{stat.e}}</td>
                    <td>{{stat.dp}}</td>
                    <td>{{stat.pb}}</td>
                    <td>{{stat.wp}}</td>
                    <td>{{stat.sb}}</td>
                    <td>{{stat.cs}}</td>
                  </tr>
                </table>
              </section>
              <section v-if="player.post_fielding && player.post_fielding.length > 0">
                <header>
                  <h3>Post Season Fielding</h3>
                </header>
                <table class="default">
                  <thead>
                    <th>Year</th>
                    <th>Team</th>
                    <th>League</th>
                    <th>POS</th>
                    <th>G</th>
                    <th>GS</th>
                    <th>PO</th>
                    <th>A</th>
                    <th>E</th>
                    <th>DP</th>
                    <th>PB</th>
                    <th>WP</th>
                    <th>SB</th>
                    <th>CS</th>
                  </thead>
                  <tr v-bind:key="stat.id" v-for="stat in player.post_fielding">
                    <td>{{stat.year_id}}</td>
                    <td>{{stat.team_id}}</td>
                    <td>{{stat.lg_id}}</td>
                    <td>{{stat.pos}}</td>
                    <td>{{stat.g}}</td>
                    <td>{{stat.gs}}</td>
                    <td>{{stat.po}}</td>
                    <td>{{stat.a}}</td>
                    <td>{{stat.e}}</td>
                    <td>{{stat.dp}}</td>
                    <td>{{stat.pb}}</td>
                    <td>{{stat.wp}}</td>
                    <td>{{stat.sb}}</td>
                    <td>{{stat.cs}}</td>
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
      message: "Player Stats",
      player: {},
    };
  },
  created: function() {
    axios.get(`/api/player/${this.$route.params.id}`).then(response => {
      // console.log(response.data);
      this.player = response.data;
      // console.log(this.player);
    });
  },
  methods: {}
};
</script>
