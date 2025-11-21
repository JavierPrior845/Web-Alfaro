import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy, NgZone, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-grid-motion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-motion.html',
  styleUrls: ['./grid-motion.css'],
  encapsulation: ViewEncapsulation.None // Para asegurar que los estilos afecten correctamente a la estructura interna
})
export class GridMotionComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() items: string[] = [];
  @Input() gradientColor: string = 'black';

  // Referencias a las filas del DOM
  @ViewChildren('rowRef') rows!: QueryList<ElementRef>;

  gridItems: string[] = [];
  private mouseX: number = 0;
  private handleMouseMoveBind: any;
  private updateMotionBind: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    const totalItems = 28; // 4 filas x 7 columnas
    
    // Lógica para rellenar: Si hay items, los usamos y repetimos si es necesario.
    // Si no, usamos placeholders.
    if (this.items.length > 0) {
      this.gridItems = Array.from({ length: totalItems }, (_, i) => {
        return this.items[i % this.items.length]; // Repetir imágenes cíclicamente
      });
    } else {
      this.gridItems = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
    }
  }

  ngAfterViewInit() {
    // Ejecutamos la animación fuera de Angular para no disparar la detección de cambios constantemente (Mejora el rendimiento)
    this.ngZone.runOutsideAngular(() => {
      gsap.ticker.lagSmoothing(0);

      this.mouseX = window.innerWidth / 2;

      // 1. Manejador del ratón
      this.handleMouseMoveBind = (e: MouseEvent) => {
        this.mouseX = e.clientX;
      };
      window.addEventListener('mousemove', this.handleMouseMoveBind);

      // 2. Loop de animación
      this.updateMotionBind = () => {
        const maxMoveAmount = 300;
        const baseDuration = 0.8;
        const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

        this.rows.forEach((rowRef, index) => {
          const row = rowRef.nativeElement;
          if (row) {
            const direction = index % 2 === 0 ? 1 : -1;
            const moveAmount = ((this.mouseX / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

            gsap.to(row, {
              x: moveAmount,
              duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
              ease: 'power3.out',
              overwrite: 'auto'
            });
          }
        });
      };

      gsap.ticker.add(this.updateMotionBind);
    });
  }

  ngOnDestroy() {
    // Limpieza importante para evitar fugas de memoria
    window.removeEventListener('mousemove', this.handleMouseMoveBind);
    gsap.ticker.remove(this.updateMotionBind);
  }
  
  // Helper para saber si es una imagen o texto
  isImage(content: string): boolean {
    return content.includes('/') || content.startsWith('http');
  }
}