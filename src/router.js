import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
// import About from "./views/About.vue";
import Project from "./views/Project.vue";
import Social from "./views/Social.vue";
import NotFound from "./views/NotFound.vue";
import Experience from "./views/Experience.vue";

// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home, name: "Home" },
  // { path: '/about', component: About },
  { path: "/experience", component: Experience },
  { path: "/project", component: Project },
  { path: "/social", component: Social },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
