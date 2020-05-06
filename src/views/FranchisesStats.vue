<template>
  <div class="franchises-stats">
    <h1>{{ message }}</h1>
    <div>
      <h2>{{ franchise.team_name }}</h2>
      <table>
        <thead>
          <th>Year</th>
          <th>Wins</th>
          <th>Losses</th>
          <!-- <th>Winning Pct</th> -->
          <th>Wild Card</th>
          <th>Division</th>
          <th>League</th>
          <th>World Series</th>
        </thead>
          <tr>
            <td>{{yearStats.year_id}}</td> <!-- create link to hitting/pitching/fielding stats for given year? -->
            <td>{{yearStats.w}}</td>
            <td>{{yearStats.l}}</td>
            <!-- <td>{{yearStats.win_pct}}</td> -->
            <td>{{yearStats.wc_win}}</td>
            <td>{{yearStats.div_win}}</td>
            <td>{{yearStats.lg_win}}</td>
            <td>{{yearStats.ws_win}}</td>
            <!-- decide what else to display on this page as opposed to stats pages
            maybe winning pct, division/league/world series titles -->
          </tr>
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
      message: "Franchise Stats",
      franchise: {},
      yearStats: {}
    };
  },
  created: function() {
    axios.get(`/api/franchises/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.franchise = response.data;
      this.yearStats = this.franchise.stats.filter(year => {
        return year.year_id === 1876;
      });
      console.log(this.yearStats);
    });
  },
  methods: {}
};
</script>
