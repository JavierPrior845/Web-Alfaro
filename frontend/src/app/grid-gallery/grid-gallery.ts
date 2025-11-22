import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// ---------------------------------------------------------
// 1. COMPONENTE HIJO: GRID GALLERY
// Este es el componente reutilizable que querías crear.
// ---------------------------------------------------------
@Component({
  selector: 'app-grid-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./grid-gallery.html",
  styleUrls: ["./grid-gallery.css"],
})
export class GridGalleryComponent {

  @Input() images?: string[] = [];
  @Output() imageClick = new EventEmitter<string>();

  // Nueva propiedad para controlar qué imagen se muestra en grande
  selectedImage: string | null = null;

  // Método modificado: Ahora abre el modal y también emite el evento
  openModal(img: string): void {
    this.selectedImage = img; // Guarda la imagen para mostrarla en el overlay
    this.imageClick.emit(img); // Mantiene la funcionalidad original por si el padre la necesita
  }

  // Método para cerrar el modal
  closeModal(): void {
    this.selectedImage = null;
  }

  extractTitle(path: string): string {
    if (!path) return 'Proyecto';
    const filename = path.split('/').pop() || '';
    let cleanName = filename.split('.')[0];
    cleanName = cleanName.replace(/[-_]/g, ' ');
    cleanName = cleanName.replace(/foto|mod|lateral|der|izq/gi, '').trim();
    return cleanName.charAt(0).toUpperCase() + cleanName.slice(1) || 'Proyecto';
  }
}