import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para @if y @for
//! El que usabamos antes
@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./image-gallery.html",
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

