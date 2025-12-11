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

  shouldDisplayPlanta = computed(() => this.hasValidData("planta"));
  shouldDisplayTipologia = computed(() => this.hasValidData("tipologia"));
  shouldDisplayDormitorios = computed(() => this.hasValidData("dormitorios"));
  shouldDisplayBanos = computed(() => this.hasValidData("banos"));
  shouldDisplayPiscina = computed(() => this.hasValidData("piscina"));
  shouldDisplayConstruidos = computed(() => this.hasValidData("m2construidos"));
  shouldDisplayUtiles = computed(() => this.hasValidData("m2utiles"));
  shouldDisplayTerraza = computed(() => this.hasValidData("m2terraza"));
  shouldDisplayOrientacion = computed(() => this.hasValidData("orientacion"));
  shouldDisplayEficEnergetica = computed(() => this.hasValidData("eficEnergetica"));
  shouldDisplayGarage = computed(() => this.hasValidData("garage"));
  shouldDisplayTrastero = computed(() => this.hasValidData("trastero"));
  shouldDisplayPlano = computed(() => this.hasValidData("planoPdfUrl"));


  private hasValidData(
    fieldKey:
      | "planta"
      | "tipologia"
      | "dormitorios"
      | "banos"
      | "piscina"
      | "m2construidos"
      | "m2utiles"
      | "m2terraza"
      | "orientacion"
      | "eficEnergetica"
      | "garage"
      | "trastero"
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
