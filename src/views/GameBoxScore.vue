<template>
  <div class="franchises-show">
    <h1>{{ message }}</h1>
    <div v-bind:key="event.id" v-for="event in game">
      <p>{{event}}</p>
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
