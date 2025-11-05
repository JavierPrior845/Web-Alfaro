import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para @if y @for

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-container" *ngIf="images && images.length > 0">
      
      <!-- 1. Imagen Principal (Hero) -->
      <div class="hero-image-wrapper">
        <img [src]="selectedImageUrl" alt="Imagen seleccionada de la galería" class="hero-image" />
      </div>

      <!-- 2. Lista de Miniaturas (Thumbnails) -->
      <div class="thumbnail-list">
        @for(imageUrl of images; track $index) {
          <div 
            class="thumbnail" 
            [class.active]="imageUrl === selectedImageUrl"
            (click)="selectImage(imageUrl)">
            <img [src]="imageUrl" alt="Miniatura de galería {{$index + 1}}" />
          </div>
        }
      </div>

    </div>
  `,
  styleUrls: ['./image-gallery.css']
})
export class ImageGalleryComponent implements OnInit {

  // --- ESTA ES LA LÍNEA CLAVE ---
  // Define 'images' como una propiedad de Input que se puede enlazar [images]="..."
  @Input() images: string[] = [];
  
  // Variable de estado para saber qué imagen mostrar en grande
  selectedImageUrl: string = '';

  ngOnInit(): void {
    // Al iniciar, mostramos la primera imagen del array
    if (this.images && this.images.length > 0) {
      this.selectedImageUrl = this.images[0];
    }
  }

  // Método para cambiar la imagen principal al hacer clic en una miniatura
  selectImage(imageUrl: string): void {
    this.selectedImageUrl = imageUrl;
  }
}

