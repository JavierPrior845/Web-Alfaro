import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Unit } from '../unit';

@Component({
  selector: 'app-unit-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./unit-table.html",
  styleUrl: './unit-table.css',
})
export class UnitTableComponent {
  // Recibe la lista de unidades
  units = input.required<Unit[]>();
}
