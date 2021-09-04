import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: () => import(/* webpackChunkName: "scoreboard" */ '../views/Scoreboard.vue'),
  },
  {
    path: '/submissions',
    name: 'Submissions',
    component: () => import(/* webpackChunkName: "submissions" */ '../views/Submissions.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
