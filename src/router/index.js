import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FranchisesIndex from '../views/FranchisesIndex.vue';
import FranchisesShow from '../views/FranchisesShow.vue';
import PlayersIndex from '../views/PlayersIndex.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/franchises',
    name: 'franchises-index',
    component: FranchisesIndex
  },
  {
    path: '/franchises/:id',
    name: 'franchises-show',
    component: FranchisesShow
  },
  {
    path: '/players',
    name: 'players-index',
    component: PlayersIndex
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
