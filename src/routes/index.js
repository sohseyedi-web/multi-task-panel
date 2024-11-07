import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Tasks",
    component: () => import("../views/Tasks.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/Calendar.vue"),
  },

];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
