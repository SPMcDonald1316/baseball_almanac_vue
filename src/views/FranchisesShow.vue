<template>
  <div class="franchises">
    <h1>{{ message }}</h1>
    <div>
      <h2>{{ franchise.team_name }}</h2>
      <table>
        <thead>
          <th>Year</th>
          <th>Wins</th>
          <th>Losses</th>
        </thead>
          <tr v-for="stat in franchise.stats">
            <td>{{stat.year_id}}</td>
            <td>{{stat.w}}</td>
            <td>{{stat.l}}</td>
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
    axios.get(`/api/franchises/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.franchise = response.data;
    });
  },
  methods: {}
};
</script>
