<template>
  <div class="franchises-show">
    <h1>{{ message }}</h1>
    <div>
      <h2>{{ franchise.franch_name }}</h2>
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
          <tr v-bind:key="stat.id" v-for="stat in franchise.stats">
            <td>{{stat.year_id}}</td> <!-- create link to hitting/pitching/fielding stats for given year? -->
            <td>{{stat.w}}</td>
            <td>{{stat.l}}</td>
            <!-- <td>{{stat.win_pct}}</td> -->
            <td>{{stat.wc_win}}</td>
            <td>{{stat.div_win}}</td>
            <td>{{stat.lg_win}}</td>
            <td>{{stat.ws_win}}</td>
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
    };
  },
  created: function() {
    axios.get(`/api/franchises/${this.$route.params.franch_id}`).then(response => {
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
