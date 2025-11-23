import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Details } from "./details/details";
import { Terms } from "./terms/terms";
import { Colaboraciones } from "./colaboraciones/colaboraciones";

const routeConfig: Routes = [
  {
    path: "",
    component: Home,
    title: "ALFARO",
  },
  {
    path: "vivienda-obra-nueva/:id",
    component: Details,
    //title: "Home details",
  },
  { path: "terms", component: Terms },

  { path: "colaboraciones", component: Colaboraciones }
 
];
export default routeConfig;
