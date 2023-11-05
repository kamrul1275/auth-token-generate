import LoginVue from "./components/Login.vue";
import DashboardVue from "./components/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

 
const routes = [
  { path: "/", component: LoginVue, meta: { requiredAuth: true } },
  { path: "/login", component: LoginVue, meta: { requiredAuth: false } },
  { path: "/dashboard", component: DashboardVue, meta: { requiredAuth: true } },
];
 
export const routeConfig = createRouter({
  history: createWebHistory(),
  routes: routes
});
 
// routeConfig.beforeEach(async (to, from, next) => {
//   if (to.meta.requiredAuth) {
//     var userProfile = store.getters["api/user"];
//     if (userProfile.id === 0) {
//       await store.dispatch("api/user");
//       userProfile = store.getters["api/user"];
//       if (userProfile.id === 0) {
//         return next({ path: "/login" });
//       } else {
//         return next();
//       }
//     }
//   }
//   return next();
// });