import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServiceView from "../views/ServiceView.vue";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/service",
    name: "service",
    component: ServiceView,
  },
  
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/training",
    name: "training",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "training" */ "../views/TrainingView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
