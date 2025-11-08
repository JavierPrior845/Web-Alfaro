import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Details } from "./details/details";
import { Terms } from "./terms/terms";

const routeConfig: Routes = [
  {
    path: "",
    component: Home,
    title: "Home page",
  },
  {
    path: "details/:id",
    component: Details,
    title: "Home details",
  },
  { path: "terms", component: Terms },
];
export default routeConfig;
