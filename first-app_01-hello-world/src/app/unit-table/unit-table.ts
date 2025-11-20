import { Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Unit } from "../unit";

@Component({
  selector: "app-unit-table",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./unit-table.html",
  styleUrl: "./unit-table.css",
})
export class UnitTableComponent {
  // Recibe la lista de unidades
  units = input.required<Unit[]>();

  // NUEVO: Un 'signal' calculado que determina qué columna mostrar
  // Revisa el primer piso de la lista para ver si tiene la propiedad 'terrazas' o 'dormitorios'.
  public displayColumn = computed(() => {
    const firstUnit = this.units()?.[0];
    if (firstUnit && typeof firstUnit.terrazas !== "undefined") {
      return "terraza";
    }
    else if (firstUnit && typeof firstUnit.dormitorios !== "undefined") {
      return "dormitorios";
    }
    return "none"; // Por si acaso no viene ninguna de las dos
  });
}
