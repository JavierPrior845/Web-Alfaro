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

  shouldDisplayTerraza = computed(() => this.hasValidData('terrazas'));
  shouldDisplayDormitorios = computed(() => this.hasValidData('dormitorios'));
  shouldDisplayBanos = computed(() => this.hasValidData('banos'));
  shouldDisplayTrastero = computed(() => this.hasValidData('trastero'));
  shouldDisplayGarage = computed(() => this.hasValidData('garage'));
  shouldDisplayPlano = computed(() => this.hasValidData('planoPdfUrl'));

  private hasValidData(fieldKey: 'terrazas' | 'dormitorios' | 'banos' | 'trastero' | 'garage' | 'planoPdfUrl'): boolean {
    const units = this.units();
    if (!units || units.length === 0) return false;

    return units.some((unit: any) => {
      const value = unit[fieldKey];
      return value !== null && value !== undefined && value !== '—';
    });
  }
}
