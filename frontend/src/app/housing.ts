import { Injectable } from "@angular/core";
import { HousingLocationInfo } from "./housing-location";
import { environment } from "src/environments/environment";

const apiUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: "root",
})

export class Housing {
  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  // --- NUEVO MÉTODO DE FILTRADO ---
  getHousingLocationsByType(type: string): HousingLocationInfo[] {
    const normalizedType = type.toLowerCase();
    return this.housingLocationList.filter(
      (location) => location.estado?.toLowerCase() === normalizedType
    );
  }

  readonly baseUrl = "http://localhost:3000";
  readonly baseUrlAssets = "assets";

  housingLocationList: HousingLocationInfo[] = [
    {
      id: 0,
      estado: "venta",
      name: "Edificio Aurora Redondo",
      city: "Murcia",
      state: "Barrio del Carmen",
      photo: "assets/gonzalez conde_5-Foto.jpg",
      realEstateId: 1,
      units: [
        // PRIMERA PLANTA
        {
          planta: "PRIMERA",
          tipologia: "A",
          dormitorios: 2,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 151.72,
          m2utiles: 121.38,
          m2terraza: 15.19,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-6-7.pdf",
        },
        {
          planta: "PRIMERA",
          tipologia: "B",
          dormitorios: 2,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 90.16,
          m2utiles: 70.05,
          m2terraza: 0,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-8-9.pdf",
        },
        {
          planta: "PRIMERA",
          tipologia: "C",
          dormitorios: 1,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 113.14,
          m2utiles: 86.01,
          m2terraza: 0,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",
        },

        // SEGUNDA PLANTA
        {
          planta: "SEGUNDA",
          tipologia: "A",
          dormitorios: 3,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 163.55,
          m2utiles: 129.35,
          m2terraza: 0,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf",
        },
        {
          planta: "SEGUNDA",
          tipologia: "B",
          dormitorios: 1,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 56.75,
          m2utiles: 43.57,
          m2terraza: 0,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf",
        },
        {
          planta: "SEGUNDA",
          tipologia: "C",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 143.27,
          m2utiles: 109.21,
          m2terraza: 0,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf",
        },

        // TERCERA PLANTA
        {
          planta: "TERCERA",
          tipologia: "A",
          dormitorios: 3,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 163.55,
          m2utiles: 129.35,
          m2terraza: 0,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf",
        },
        {
          planta: "TERCERA",
          tipologia: "B",
          dormitorios: 1,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 56.75,
          m2utiles: 43.57,
          m2terraza: 0,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf",
        },
        {
          planta: "TERCERA",
          tipologia: "C",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 143.27,
          m2utiles: 109.21,
          m2terraza: 0,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf",
        },

        // CUARTA PLANTA
        {
          planta: "CUARTA",
          tipologia: "A",
          dormitorios: 3,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 163.55,
          m2utiles: 129.35,
          m2terraza: 0,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf",
        },
        {
          planta: "CUARTA",
          tipologia: "B",
          dormitorios: 1,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 56.75,
          m2utiles: 43.57,
          m2terraza: 0,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf",
        },
        {
          planta: "CUARTA",
          tipologia: "C",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 143.27,
          m2utiles: 109.21,
          m2terraza: 0,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf",
        },

        // QUINTA + BAJO CUBIERTA
        {
          planta: "QUINTA + BAJO CUBIERTA",
          tipologia: "A",
          dormitorios: 5,
          banos: 4,
          piscina: "COMUNITARIA",
          m2construidos: 285,
          m2utiles: 209.43,
          m2terraza: 23.68,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-16-17.pdf",
        },
        {
          planta: "QUINTA + BAJO CUBIERTA",
          tipologia: "B",
          dormitorios: 1,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 101.27,
          m2utiles: 73.75,
          m2terraza: 23.34,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-18-19.pdf",
        },
        {
          planta: "QUINTA + BAJO CUBIERTA",
          tipologia: "C",
          dormitorios: 4,
          banos: 3,
          piscina: "COMUNITARIA",
          m2construidos: 238.16,
          m2utiles: 180.16,
          m2terraza: 18.94,
          orientacion: "ESTE+OESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-20-21.pdf",
        },

        // LOCAL
        {
          planta: "LOCAL",
          tipologia: "-",
          dormitorios: "-",
          banos: "-",
          piscina: "-",
          m2construidos: 388.84,
          m2utiles: "-",
          m2terraza: "-",
          orientacion: "-",
          eficEnergetica: "CEE A",
          garage: "-",
          trastero: "-",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-LOCAL.pdf",
        
        },

        // GARAJES
        {
          planta: "GARAJES",
          tipologia: "-1",
          dormitorios: "-",
          banos: "-",
          piscina: "-",
          m2construidos: "-",
          m2utiles: "-",
          m2terraza: "-",
          orientacion: "-",
          eficEnergetica: "CEE A",
          garage: "-",
          trastero: "-",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-GARAGE.pdf",
        },
        {
          planta: "GARAJES",
          tipologia: "-2",
          dormitorios: "-",
          banos: "-",
          piscina: "-",
          m2construidos: "-",
          m2utiles: "-",
          m2terraza: "-",
          orientacion: "-",
          eficEnergetica: "CEE A",
          garage: "-",
          trastero: "-",

          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-GARAGE.pdf",
        },
      ],

      resume:
        "Alfaro presenta un proyecto de rehabilitación integral con demolición parcial en el histórico Barrio del Carmen, Murcia. Se trata de un edificio renovado pensado para quienes buscan viviendas modernas, luminosas y funcionales, sin perder la esencia del barrio.\n\nCada espacio está diseñado para ofrecer comodidad y bienestar, con distribución optimizada, materiales de calidad y soluciones eficientes que mejoran la luz natural, la ventilación y el confort. La fachada se actualiza respetando la armonía del entorno, creando un equilibrio perfecto entre tradición y modernidad.\n\nEste proyecto representa una oportunidad de inversión única: viviendas atractivas en una ubicación consolidada, con diseño contemporáneo y calidad garantizada. Alfaro convierte un edificio antiguo en un hogar actual, listo para quienes valoran estilo, funcionalidad y vida urbana de calidad.",
      galleryImages: [
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_3-Foto.jpg",
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_5-Foto.jpg",
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralder_mod.jpg",
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralder.jpg",
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralizq_mod.jpg",
      ],
      downloadDocuments: [
        {
          id: 1,
          nombreBoton: "Comercialización",
          rutaArchivo:
            "assets/pdfs/descargas/GonzalezConde/COMERCIALIZACION.pdf",
        },
        {
          id: 2,
          nombreBoton: "Memoria de Calidades",
          rutaArchivo:
            "assets/pdfs/descargas/GonzalezConde/MEMORIA_DE_CALIDADES.pdf",
        },
      ],
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381.9216337206188!2d-1.1308198048811309!3d37.97940597346104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd638203f16a3307%3A0xf5d9db67b1c46f05!2sPl.%20Gonz%C3%A1lez%20Conde%2C%206%2C%2030002%20Murcia!5e0!3m2!1ses!2ses!4v1763398946119!5m2!1ses!2ses",
    },
    {
      id: 1,
      estado: "proyecto",
      name: "Edificio Barrio del Progreso",
      city: "Murcia",
      state: "Barrio del progreso",
      photo: `${this.baseUrlAssets}/1_3-Foto.jpg`,
      units: [
        {
          planta: "PRIMERA",
          tipologia: "A",
          m2construidos: 55.81,
          dormitorios: 2,
          banos: 1,
        },
        {
          planta: "PRIMERA",
          tipologia: "B",
          m2construidos: 58.15,
          dormitorios: 2,
          banos: 1,
        },
        {
          planta: "SEGUNDA",
          tipologia: "A",
          m2construidos: 55.81,
          dormitorios: 2,
          banos: 1,
        },
        {
          planta: "SEGUNDA",
          tipologia: "B",
          m2construidos: 55.15,
          dormitorios: 2,
          banos: 1,
        },
        {
          planta: "TERCERA",
          tipologia: "A",
          m2construidos: 55.81,
          dormitorios: 2,
          banos: 1,
        },
        {
          planta: "TERCERA",
          tipologia: "B",
          m2construidos: 50.18,
          dormitorios: 1,
          banos: 1,
        },
        {
          planta: "CUARTA",
          tipologia: "A",
          m2construidos: 55.81,
          dormitorios: 2,
          banos: 1,
        },
        {
          planta: "CUARTA",
          tipologia: "B",
          m2construidos: 50.18,
          dormitorios: 1,
          banos: 1,
        },
        {
          planta: "LOCAL",
          tipologia: "-",
          m2construidos: 76.25,
          dormitorios: "-",
        },
      ],
      resume:
        "Este proyecto, diseñado por Juan Carlos Cartagena Sevilla, propone un edificio de 8 viviendas, con un local en la primera planta y distribución en las plantas 1ª-2ª y 3ª-4ª. Cuenta con aproximadamente 440 m² útiles de vivienda, distribuidas en tipos A y B, y un local de 76,25 m² en la primera planta. Además, dispone de un espacio común de 110 m², complementando la funcionalidad del conjunto en una ubicación privilegiada en Murcia.",
      galleryImages: [
        "assets/pdfs/fotos/BarrioDelProgreso/1_2-Foto1VIVIENDA PLANTA.jpg",
        "assets/pdfs/fotos/BarrioDelProgreso/1_3-Foto.jpg",
        "assets/pdfs/fotos/BarrioDelProgreso/OPCIONA1VIVIENDAPLANTA.jpg",
        "assets/pdfs/fotos/BarrioDelProgreso/OPCIONB1VIVIENDAPLANTA.jpg",
        "assets/pdfs/fotos/BarrioDelProgreso/RENDERS_VIVIENDA_POR_PLANTA-1_page-0001.jpg",
        "assets/pdfs/fotos/BarrioDelProgreso/RENDERS_VIVIENDA_POR_PLANTA-2_page-0001.jpg",
        "assets/pdfs/fotos/BarrioDelProgreso/RENDERS_VIVIENDA_POR_PLANTA-3_page-0001.jpg",
      ],
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.3785863790206!2d-1.1214610303960344!3d37.965124298246145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6378a37f9eb157%3A0xde1d83e2e9629306!2sC.%20Macario%2C%2066%2C%2030012%20San%20Benito%20-%20Progreso%2C%20Murcia!5e0!3m2!1ses!2ses!4v1763399139549!5m2!1ses!2ses",

      downloadDocuments: [
        {
          id: 1,
          nombreBoton: "Planos",
          rutaArchivo: "assets/pdfs/descargas/BarrioDelProgreso/PLANOS1.pdf",
        },
      ],
    },

    {
      id: 2,
      estado: "venta",
      name: "Edificio Reino de Murcia",
      city: "Murcia",
      state: "Reino de Murcia",
      photo: `${this.baseUrlAssets}/PERPECTIVA_DETALLE.jpg`,
      realEstateId: 0,
      renderLink: "https://my.matterport.com/show/?m=poxMa2bcLc2",
      units: [
        {
          planta: "PRIMERA",
          tipologia: "A",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 129.8,
          m2utiles: 96.83,
          m2terraza: 40.4,
          orientacion: "ESTE+NORTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/ReinoDeMurcia/Reino_de_Murcia_1A.pdf`,
        },
        {
          planta: "PRIMERA",
          tipologia: "B",
          dormitorios: 2,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 90.9,
          m2utiles: 67.85,
          m2terraza: 26.3,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/ReinoDeMurcia/Reino_de_Murcia_1B.pdf`,
        },
        {
          planta: "PRIMERA",
          tipologia: "C",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 137.15,
          m2utiles: 102.33,
          m2terraza: 10,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/ReinoDeMurcia/Reino_de_Murcia_1C.pdf`,
        },
        {
          planta: "SEGUNDA",
          tipologia: "A",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 129.8,
          m2utiles: 96.83,
          m2terraza: 10,
          orientacion: "ESTE+NORTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/ReinoDeMurcia/Reino_de_Murcia_2A-3A.pdf`,
        },
        {
          planta: "SEGUNDA",
          tipologia: "B",
          dormitorios: 2,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 90.9,
          m2utiles: 67.85,
          m2terraza: 0,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/ReinoDeMurcia/Reino_de_Murcia_2B-3B`,
        },
        {
          planta: "SEGUNDA",
          tipologia: "C",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 137.15,
          m2utiles: 102.33,
          m2terraza: 0,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: undefined, // No se puede descargar si está vendido
        },
        {
          planta: "TERCERA",
          tipologia: "A",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 129.8,
          m2utiles: 96.83,
          m2terraza: 10,
          orientacion: "ESTE+NORTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/ReinoDeMurcia/Reino_de_Murcia_2A-3A.pdf`,
        },
        {
          planta: "TERCERA",
          tipologia: "B",
          dormitorios: 2,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 90.9,
          m2utiles: 67.85,
          m2terraza: 0,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/ReinoDeMurcia/Reino_de_Murcia_2B-3B.pdf`,
        },
        {
          planta: "TERCERA",
          tipologia: "C",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 137.15,
          m2utiles: 102.33,
          m2terraza: 0,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: undefined,
        },
        {
          planta: "ATICOS",
          tipologia: "A",
          dormitorios: 3,
          banos: 2,
          piscina: "COMUNITARIA",
          m2construidos: 107.4,
          m2utiles: 80.12,
          m2terraza: 20.45,
          orientacion: "ESTE+NORTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: undefined,
        },
        {
          planta: "ATICOS",
          tipologia: "B",
          dormitorios: 1,
          banos: 1,
          piscina: "COMUNITARIA",
          m2construidos: 69.6,
          m2utiles: 0,
          m2terraza: 0,
          orientacion: "ESTE",
          eficEnergetica: "CEE A",
          garage: "INCLUIDO EN -1",
          trastero: "INCLUIDO",

          planoPdfUrl: undefined,
        },
        {
          planta: "LOCAL",
          tipologia: "A",
          dormitorios: "-",
          banos: "-",
          piscina: "-",
          m2construidos: 320,
          m2utiles: 0,
          m2terraza: 0,
          orientacion: "-",
          eficEnergetica: "CEE A",
          garage: "-",
          trastero: "-",

          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/ReinoDeMurcia/Reino_de_Mucia_Sotano-PB.pdf`,
        },
        {
          planta: "GARAJES",
          tipologia: "-1",
          dormitorios: "-",
          banos: "-",
          piscina: "-",
          m2construidos: "-",
          m2utiles: "-",
          m2terraza: "-",
          orientacion: "-",
          eficEnergetica: "CEE A",
          garage: "-",
          trastero: "-",

          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/ReinoDeMurcia/Reino_de_Mucia_Sotano-PB.pdf`,
        },
      ],
      resume:
        "Alfaro presenta un proyecto residencial contemporáneo en la Avenida de Zarandona, una de las zonas con mayor proyección del Reino de Murcia. Es un edificio nuevo que combina diseño actual, eficiencia energética y calidad constructiva, en un entorno tranquilo y perfectamente conectado con la ciudad.\n\nLas viviendas se distinguen por su luminosidad, confort y acabados premium, ofreciendo espacios funcionales y modernos, pensados para el estilo de vida actual. La fachada, de líneas limpias y materiales seleccionados, aporta personalidad y presencia urbana, creando una imagen sólida y atractiva.\n\nEste proyecto es una oportunidad inteligente para vivir o invertir, con una ubicación estratégica, calificación energética A y el respaldo de Alfaro como garantía de confianza. Una propuesta para quienes buscan futuro, bienestar y calidad de vida en Murcia.",
      galleryImages: [
        "assets/pdfs/fotos/ReinoDeMurcia/FRONTAL.jpg",
        "assets/pdfs/fotos/ReinoDeMurcia/GENERAL.jpg",
        "assets/pdfs/fotos/ReinoDeMurcia/PLANTA.jpg",
      ],
      downloadDocuments: [
        {
          id: 1,
          nombreBoton: "Comercialización",
          rutaArchivo: "assets/pdfs/descargas/ReinoDeMurcia/REINO_DE_MURCIA_PLANOS.pdf",
        },
        {
          id: 2,
          nombreBoton: "Memoria de Calidades",
          rutaArchivo:
            "assets/pdfs/descargas/ReinoDeMurcia/MEMORIA_DE_CALIDADES_REINO_DE_MURCIA.pdf",
        },
      ],
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.4823069294587!2d-1.1181602905529737!3d38.0052129310496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6382378c4223b7%3A0xbcf245bc7bc0ac4c!2sDiseminado%20Diego%20Carmona%2C%202%2C%2030007%20Zarandona%2C%20Murcia!5e1!3m2!1ses!2ses!4v1762621605517!5m2!1ses!2ses",
    },
  ];

  /**
   * GET /api/housing
   * Recupera la lista. Acepta un filtro opcional por estado (ej: 'venta', 'proyecto').
   */
  /*
  async getAllHousingLocations(
    estado?: string
  ): Promise<HousingLocationInfo[]> {
    try {
      // Construimos la URL. Si hay estado, añadimos el query param.
      const url = estado
        ? `${apiUrl}/api/housing?estado=${estado.toLocaleLowerCase()}`
        : `${apiUrl}/api/housing`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error al cargar viviendas: ${response.statusText}`);
      }

      // El backend devuelve directamente el array, sin envoltorio ".data"
      const data = await response.json();

      // Mapeo para asegurar tipos y estructuras seguras
      return (Array.isArray(data) ? data : []).map((v: any) =>
        this.processViviendaData(v)
      );
    } catch (error) {
      console.error("Error en getAllHousingLocations:", error);
      return [];
    }
  }
  */
  /**
   * GET /api/housing/:id
   * Recupera el detalle de una vivienda.
   */
  /*
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocationInfo | undefined> {
    try {
      const response = await fetch(`${apiUrl}/api/housing/${id}`);

      if (!response.ok) {
        // Si es un 404 u otro error, lanzamos excepción o devolvemos undefined
        throw new Error(
          `Error al cargar vivienda ${id}: ${response.statusText}`
        );
      }

      const data = await response.json();

      // Si data está vacío o es null
      if (!data) return undefined;

      return this.processViviendaData(data);
    } catch (error) {
      console.error("Error en getHousingLocationById:", error);
      return undefined;
    }
  }
  */
  

  /**
   * Función auxiliar para limpiar y asegurar datos
   */
  /*
  private processViviendaData(v: any): HousingLocationInfo {
    return {
      ...v, // Copia id, name, city, description, etc.

      // Arrays vacíos por defecto si vienen nulos
      units: v.units || [],
      downloadDocuments: v.downloadDocuments || [],

      // NOTA: En el nuevo esquema, las viviendas NO tienen socialMediaLinks directos.
      // (Pertenecen a la inmobiliaria `realEstate`).
      // Si tu interfaz HousingLocationInfo los requiere obligatoriamente,
      // puedes dejarlos vacíos o extraerlos de v.realEstate?.socialMediaLinks
      socialMediaLinks: v.realEstate?.socialMediaLinks || [],

      // IMÁGENES:
      // Como en el backend ya hicimos el .map() para devolver strings,
      // aquí v.galleryImages debería ser ['url1', 'url2'].
      // Lo dejamos tal cual, o ponemos [] si es null.
      galleryImages: v.galleryImages || [],
    };
  }
  */
  async submitApplication(
    firstName: string,
    phone: string,
    email: string,
    houseId: number
  ) {
    try {
      const response = await fetch(`${apiUrl}/api/solicitud-info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, phone, email, houseId }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Solicitud recibida con éxito:", data);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }

    console.log(
      `Homes application received: firstName: ${firstName}, phone: ${phone}, email: ${email} (Para la casa con Id: ${houseId}).`
    );
  }
}
