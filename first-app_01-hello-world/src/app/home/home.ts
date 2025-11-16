import { Component, inject, OnInit, OnDestroy } from "@angular/core"; // Importar OnInit y OnDestroy
import { HousingLocation } from "../housing-location/housing-location";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housing-location";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  templateUrl: "./home.html",
  styleUrls: ["./home.css"],
})


export class Home implements OnInit, OnDestroy { // Implementar OnInit y OnDestroy
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  housingService: Housing = inject(Housing);

  // --- LÓGICA DEL CARRUSEL ---
  heroImages: string[] = []; // Array de imágenes para rotar
  currentHeroImage: string = ''; // Imagen actual
  private currentIndex = 0;
  private intervalId: any; // Para guardar la referencia del temporizador
  // -------------------------

  constructor() {
    // El constructor debe ser ligero.
  }

  async ngOnInit() {
    // 1. Cargar todas las viviendas
    this.housingLocationList = await this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;

    // 2. Preparar el carrusel
    this.setupHeroCarousel();
  }

   setupHeroCarousel() {
    // --- ¡CAMBIO AQUÍ! ---
    // Ya no tomamos las imágenes del servicio.
    // Definimos 3 URLs estáticas (en crudo) para la rotación.
    // (Reemplaza estas URLs por las 3 imágenes que quieras usar)
    this.heroImages = [
      'assets/pdfs/fotos/GonzalezConde/gonzalezconde_3-Foto.jpg',
      'assets/pdfs/fotos/BarrioDelCarmen/OPCIONA1VIVIENDAPLANTA.jpg',
      'assets/pdfs/fotos/ReinoDeMurcia/FRONTAL.jpg'
    ];

    // Si no hay imágenes, usar un placeholder (aunque ahora siempre hay 3)
    if (this.heroImages.length === 0) {
      this.currentHeroImage = 'https://placehold.co/1920x300/4A4E69/FFFFFF?text=ALFARO';
      return;
    }

    // 4. Iniciar la rotación
    this.currentHeroImage = this.heroImages[0];
    this.startImageRotation();
  }

  startImageRotation(): void {
    // Cambiar la imagen cada 5 segundos (5000 ms)
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.heroImages.length;
      this.currentHeroImage = this.heroImages[this.currentIndex];
    }, 5000);
  }

  ngOnDestroy() {
    // 5. Limpiar el temporizador cuando el componente se destruye
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}