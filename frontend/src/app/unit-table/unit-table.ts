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

  // 1. COMPUTED: Analiza si TERRAZA debe mostrarse
  shouldDisplayTerraza = computed(() => this.hasValidData('terrazas'));

  // 2. COMPUTED: Analiza si DORMITORIOS debe mostrarse
  shouldDisplayDormitorios = computed(() => this.hasValidData('dormitorios'));
  shouldDisplayPlano = computed(() => this.hasValidData('planoPdfUrl'));
  /**
   * Verifica si al menos una unidad tiene un valor real para un campo dado.
   * La verificación se realiza sobre el array completo de unidades.
   */
  private hasValidData(fieldKey: 'terrazas' | 'dormitorios' | 'planoPdfUrl'): boolean {
    const units = this.units();
    if (!units || units.length === 0) return false;

    // Busca si existe AL MENOS una unidad donde el valor NO es nulo Y NO es el guion '—'
    return units.some((unit: any) => {
      const value = unit[fieldKey];
      
      // Debe ser un valor que no sea null, undefined, ni el guion '—'
      return value !== null && value !== undefined && value !== '—';
    });
  }
}
