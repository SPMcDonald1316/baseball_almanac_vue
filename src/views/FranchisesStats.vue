<template>
  <div class="franchises-stats">
    <h1>{{ message }}</h1>
    <div>
      <h2>{{ franchise.franch_name }}</h2>
      <table>
        <h2>Hitting Stats</h2>
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
            <td>{{yearStats.g}}</td>
            <td>{{yearStats.g_home}}</td>
            <td>{{yearStats.ab}}</td>
            <td>{{yearStats.r}}</td>
            <td>{{yearStats.h}}</td>
            <td>{{yearStats.doubles}}</td>
            <td>{{yearStats.triples}}</td>
            <td>{{yearStats.hr}}</td>
            <td>{{yearStats.bb}}</td>
            <td>{{yearStats.so}}</td>
            <td>{{yearStats.sb}}</td>
            <td>{{yearStats.cs}}</td>
            <td>{{yearStats.hbp}}</td>
            <td>{{yearStats.sf}}</td>
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
    axios.get(`/api/franchises/${this.$route.params.franch_id}`).then(response => {
      console.log(response.data);
      this.franchise = response.data;
      this.yearStats = this.franchise.stats.filter(year => {
        return year.year_id === `${this.$route.params.year_id}`;
      });
      console.log(this.yearStats);
    });
  },
  methods: {}
};
</script>
