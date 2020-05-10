<template>
  <div class="franchises-show">
    <h1>{{ message }}</h1>
    <div v-bind:key="event.id" v-for="event in game">
      <table>
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
