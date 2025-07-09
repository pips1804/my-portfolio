import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../views/MainLayout.vue";
import ProjectsPage from "../views/AllProjects.vue"; // ✅ Add this line
import ExperiencesPage from "../views/AllExperiences.vue";
import TechStackPage from "../views/AllTechStack.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainLayout,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsPage,
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: ExperiencesPage,
  },
  {
    path: "/techstack",
    name: "TechStack",
    component: TechStackPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
