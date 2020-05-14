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
                <!-- would like to pass this info down from franchisestats page -->
                <h2>Game</h2>
                <p>Date</p>
              </header>
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
    };
  },
  created: function() {
    axios.get(`/api/games/${this.$route.params.game_id}`).then(response => {
      console.log(response.data);
      this.game = response.data;
    });
  },
  methods: {}
};
</script>
