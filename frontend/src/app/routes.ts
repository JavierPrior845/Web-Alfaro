import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Details } from "./details/details";
import { Terms } from "./terms/terms";
import { Categoria } from "./categoria/categoria"

const routeConfig: Routes = [
  {
    path: "",
    component: Home,
    title: "ALFARO",
  },
  {
    path: 'categoria/:type',
    component: Categoria,
    title: 'Alfaro - Categoría'
  },
  {
    path: "vivienda-obra-nueva/:id",
    component: Details,
  },
  { path: "terms", component: Terms },
];
export default routeConfig;
