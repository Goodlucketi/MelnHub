import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServiceView from "../views/ServiceView.vue";
import BlogView from "../views/BlogView.vue";
import TrainingView from "@/views/TrainingView.vue";
import ProjectView from "@/views/ProjectView.vue";
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
    component: TrainingView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
  },
  
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
