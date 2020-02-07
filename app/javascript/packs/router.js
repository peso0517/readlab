import Vue from "vue/dist/vue.esm";
import Router from "vue-router";
import Login from "../src/components/Login.vue";

Vue.use(Router);

const routes = [
  {
   path: '/',
   name: "login",
   component: Login
  }
];

export default new Router({ routes });