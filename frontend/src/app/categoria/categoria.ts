import { Component, inject, OnInit, OnDestroy } from "@angular/core"; // Importar OnInit y OnDestroy
import { HousingLocation } from "../housing-location/housing-location";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housing-location";
import { ActivatedRoute } from "@angular/router";
import { ColabsLocationInfo } from "../colabs-location";
import { Colab } from "../colab";
import { Colaboracion } from "../colaboracion/colaboracion";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-details",
  imports: [HousingLocation, Colaboracion, CommonModule],
  templateUrl: "./categoria.html",
  styleUrls: ["./categoria.css"],
})


export class Categoria implements OnInit, OnDestroy { // Implementar OnInit y OnDestroy
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  
  housingService: Housing = inject(Housing);
  route: ActivatedRoute = inject(ActivatedRoute);

  colabService = inject(Colab);
  colabs: ColabsLocationInfo[] = [];

  pageTitle: string = "Viviendas Obra Nueva";
  pageSubtitle: string = "Descubre las mejores promociones inmobiliarias en tu zona.";

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
    // Nos suscribimos a los cambios en la URL.
    // Esto permite que al hacer clic en el menú, la página se actualice sin recargar.
    this.route.paramMap.subscribe(async params => {
      const type = params.get('type'); // Lee el parámetro :type de la ruta
      
      if (type === "COLABORACION") {
        // MODO CATEGORÍA: Filtramos por el tipo recibido
        this.colabs = await this.colabService.getAllColabs();
        this.updatePageContent(type);
      }else if(type){
        this.filteredLocationList = await this.housingService.getAllHousingLocations(type);
        this.updatePageContent(type);
      }
      // Inicializamos el carrusel (se reinicia al cambiar de ruta)
      this.setupHeroCarousel();
    });
  }

  private updatePageContent(type: string): void {
    switch(type.toUpperCase()) {
      case 'VENTA': 
        this.pageTitle = 'Proyectos en Venta';
        this.pageSubtitle = 'Explora nuestras últimas promociones disponibles para ti.';
        break;
      case 'COLABORACION': 
        this.pageTitle = 'Nuestras Colaboraciones';
        this.pageSubtitle = 'Proyectos exclusivos desarrollados junto a nuestros socios estratégicos.';
        break;
      case 'PROYECTO': 
        this.pageTitle = 'Proyectos Futuros';
        this.pageSubtitle = 'Conoce lo que estamos construyendo para el mañana.';
        break;
      default: 
        this.pageTitle = 'Viviendas';
        this.pageSubtitle = 'Encuentra el hogar de tus sueños.';
        break;
    }
  }
  setupHeroCarousel() {
    // --- ¡CAMBIO AQUÍ! ---
    // Ya no tomamos las imágenes del servicio.
    // Definimos 3 URLs estáticas (en crudo) para la rotación.
    // (Reemplaza estas URLs por las 3 imágenes que quieras usar)
    this.heroImages = [
      'assets/pdfs/fotos/GonzalezConde/gonzalezconde_3-Foto.jpg',
      'assets/pdfs/fotos/BarrioDelProgreso/OPCIONA1VIVIENDAPLANTA.jpg',
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
    if (this.intervalId) {
    clearInterval(this.intervalId);
  }

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