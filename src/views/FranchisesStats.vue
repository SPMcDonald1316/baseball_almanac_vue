<template>
  <div class="franchises-stats">
    <h1>{{ message }}</h1>
    <div>
      <h2>{{ franchise.franch_name }}</h2>
      <table>
        <!-- <h2>Hitting Stats</h2> -->
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
      <table>
        <!-- <h2>Hitting Stats</h2> -->
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
