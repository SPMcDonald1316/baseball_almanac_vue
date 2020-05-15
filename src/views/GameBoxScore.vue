<template>
  <div class="franchises-show">
    <div id="header">
      <!-- Inner -->
      <div class="inner">
        <header>
          <h1>Baseball Almanac</h1>
        </header>
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

      <div class="container">
        <div class="row gtr-200">
          <div class="col-8 col-12-mobile imp-mobile" id="content">
            <article id="main">
              <header>
                <h2>{{game[0].away_team}} @ {{game[0].home_team[0]}}</h2>
                <p>{{ game[0].home_team[1]}}</p>
                <p>{{game[0].game_date}}</p>
              </header>
              <table class=default>
                <thead>
                  <th>Inning</th>
                  <!-- <th v-bind:key="inning.id" v-for="inning in innings">{{inning}}</th> -->
                </thead>
                <tr>
                  <th>Away</th>
                </tr>
                <tr>
                  <th>Home</th>
                </tr>
              </table>
              <section>
                <table class="default">
                  <thead>
                    <th>Inning</th>
                    <th>Team Batting</th>
                    <th>Batter</th>
                    <th>Pitcher</th>
                    <th>Outs</th>
                    <th>Balls</th>
                    <th>Strikes</th>
                    <th>Event</th>
                  </thead>
                  <tbody>
                    <tr v-bind:key="event.id" v-for="event in game">
                      <td>{{ event.inning }}</td>
                      <td>{{ event.batting }}</td>
                      <td>{{ event.batter }}</td>
                      <td>{{ event.pitcher }}</td>
                      <td>{{ event.outs }}</td>
                      <td>{{ event.balls }}</td>
                      <td>{{ event.strikes }}</td>
                      <td>{{ event.event }}</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </article>
          </div>
          <div class="col-4 col-12-mobile" id="sidebar">
            <hr class="first" />
            <section>
              <header>
                <h3>
                  
                </h3>
              </header>
              <p>




              </p>
            </section>
            <section>
              <header>
                <h3>

                </h3>
              </header>
              <p>




              </p>
            </section>
            <section>
              <header>
                <h3>{{game[0].away_team}} Lineup</h3>
              </header>
              <ul>
                <li v-bind:key="player.id" v-for="player in awayLineup">{{player}}</li>
              </ul>
            </section>
            <hr />
            <section>
              <header>
                <h3>{{game[0].home_team[0]}} Lineup</h3>
              </header>
              <ul>
                <li v-bind:key="player.id" v-for="player in homeLineup">{{player}}</li>
              </ul>
            </section>
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
      message: "Game Box Score",
      game: {},
      homeLineup: [],
      awayLineup: []
    };
  },
  created: function() {
    axios.get(`/api/games/${this.$route.params.game_id}`).then(response => {
      console.log(response.data);
      this.game = response.data;
      for (let i = 0; i < this.game.length; i++) {
        if (this.game[i].batting === this.game[i].away_team) {
          if (this.awayLineup.length === 0) {
            this.awayLineup.push(this.game[i].batter);
          } else if (this.awayLineup.includes(this.game[i].batter)) {
            i++;
          } else if (this.awayLineup.length < 9) {
            this.awayLineup.push(this.game[i].batter);
          } else {
            break;
          }
        }
      }
      for (let i = 0; i < this.game.length; i++) {
        if (this.game[i].batting === this.game[i].home_team[0]) {
          if (this.homeLineup.length === 0) {
            this.homeLineup.push(this.game[i].batter);
          } else if (this.homeLineup.includes(this.game[i].batter)) {
            continue;
          } else if (this.homeLineup.length < 9) {
            this.homeLineup.push(this.game[i].batter);
          } else {
            break;
          }
        }
      }
    });
  },
  methods: {}
};
</script>
