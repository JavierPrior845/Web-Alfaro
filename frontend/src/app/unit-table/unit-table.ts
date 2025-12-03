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

  shouldDisplayUtiles = computed(() => this.hasValidData("m2utiles"));
  shouldDisplayTerraza = computed(() => this.hasValidData("m2terraza"));
  shouldDisplayDormitorios = computed(() => this.hasValidData("dormitorios"));
  shouldDisplayBanos = computed(() => this.hasValidData("banos"));
  shouldDisplayTrastero = computed(() => this.hasValidData("trastero"));
  shouldDisplayGarage = computed(() => this.hasValidData("garage"));
  shouldDisplayPlano = computed(() => this.hasValidData("planoPdfUrl"));

  private hasValidData(
    fieldKey:
      | "m2utiles"
      | "m2terraza"
      | "dormitorios"
      | "banos"
      | "trastero"
      | "garage"
      | "planoPdfUrl"
  ): boolean {
    const units = this.units();
    if (!units || units.length === 0) return false;

    return units.some((unit: any) => {
      const value = unit[fieldKey];
      return value !== null && value !== undefined && value !== "—";
    });
  }

  get unitsGrouped() {
    const groups: { [key: string]: Unit[] } = {};
    for (const u of this.units()) {
      if (!groups[u.planta!]) groups[u.planta!] = [];
      groups[u.planta!].push(u);
    }
    return Object.entries(groups); 
  }
}
