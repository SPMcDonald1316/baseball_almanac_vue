<template>
  <div class="players-show">
    <h1>{{ message }}</h1>
    <div>
      <h2>Player: {{ player.name }}</h2>
      <h4>Height: {{ player.height }}</h4>
      <h4>Weight: {{ player.weight }}</h4>
      <h4>Debut: {{ player.debut }}</h4>
      <h4>Final Game: {{ player.final_game }}</h4>
      <table v-if="player.hitting_stats && player.hitting_stats.length > 0">
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
      <table v-if="player.post_hitting && player.post_hitting.length > 0">
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
      <table v-if="player.pitching_stats && player.pitching_stats.length > 0">
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
      <table v-if="player.post_pitching && player.post_pitching.length > 0">
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
      <table v-if="player.fielding_stats && player.fielding_stats.length > 0">
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
      <table v-if="player.post_fielding && player.post_fielding.length > 0">
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
