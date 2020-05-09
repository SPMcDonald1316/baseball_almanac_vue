<template>
  <div class="franchises-show">
    <h1>{{ message }}</h1>
    <div>
      <h2>{{ franchise.franch_name }}</h2>
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
