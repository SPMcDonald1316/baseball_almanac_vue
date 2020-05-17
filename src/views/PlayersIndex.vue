<template>
  <div class="players-index">
    <div id="header">
      <!-- Inner -->
      <div class="inner">
        <header>
          <h1><a href="/" id="logo">Baseball Almanac</a></h1>
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
                <h3>Filter players on page:</h3>
              </header>
              <p><input type="text" v-model="playerFilter"></p>
            </section>
            <hr />
          </div>
          <div class="col-8 col-12-mobile imp-mobile" id="content">
            <article id="main">
              <header>
                <h2><a href="#">Players</a></h2>
                <p>
                  List of Major League Players sorted by last name.
                </p>
              </header>
              <section v-bind:key="item.id" v-for="item in filterBy(pageOfItems, playerFilter, 'name')">
                <header>
                  <h3><router-link :to="{name: 'players-show', params: {id: item.id}}">{{ item.name }}</router-link></h3>
                </header>
                <p>Debut: {{ item.debut }}</p>
                <p>Final Game: {{ item.final_game }}</p>
              </section>
              <div>
                <jw-pagination v-bind:items="players" v-bind:pageSize="100" @changePage="onChangePage"></jw-pagination>
              </div>
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
import Vue2Filters from 'vue2-filters';
import JwPagination from 'jw-vue-pagination';
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Players",
      players: [],
      pageOfItems: [],
      playerFilter: ""
    };
  },
  created: function() {
    axios.get(`/api/players/${this.$route.params.search}`).then(response => {
      console.log(response.data);
      this.players = response.data;
    });
  },
  methods: {
    onChangePage(pageOfItems) {
    // update page of items
      this.pageOfItems = pageOfItems;
    }
  }
};
</script>
