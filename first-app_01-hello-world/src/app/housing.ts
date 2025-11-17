import { Injectable } from "@angular/core";
import { HousingLocationInfo } from "./housing-location";
import { environment } from "src/enviroments/environment";

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

  readonly baseUrl = "http://localhost:3000";
  readonly baseUrlAssets = "assets";
  housingLocationList: HousingLocationInfo[] = [
    {
      id: 0,
      name: "Edificio Aurora Redondo",
      city: "Murcia",
      state: "Barrio del Carmen",
      photo: "assets/gonzalez conde_5-Foto.jpg",
      realEstateName: "AnovaHomes",
      realEstateLink: "https://www.anovahomes.com/",
      socialMediaLinks: [
        {
          id: 0,
          nombreRedSocial: "Instagram",
          rutaArchivo: "https://www.instagram.com/anova_homes/",
        },
        {
          id: 1,
          nombreRedSocial: "TikTok",
          rutaArchivo: "https://www.tiktok.com/@anova_homes",
        },
        {
          id: 2,
          nombreRedSocial: "Linkedin",
          rutaArchivo: "https://www.linkedin.com/company/anova-inmobiliaria/",
        },
      ],
      minimunPrice: "10000€",
      units: [
        {
          vivienda: "1ºA",
          m2: 151.72,
          terrazas: 15.12,
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-6-7.pdf",
        },
        {
          vivienda: "1ºB",
          m2: 90.16,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-8-9.pdf",
        },
        {
          vivienda: "2ºA",
          m2: 163.55,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf",
        },
        {
          vivienda: "2ºB",
          m2: 56.75,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf",
        },
        {
          vivienda: "2ºC",
          m2: 143.27,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf",
        },
        {
          vivienda: "3ºA",
          m2: 163.55,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf",
        },
        {
          vivienda: "3ºB",
          m2: 56.75,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf",
        },
        {
          vivienda: "3ºC",
          m2: 143.27,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf",
        },
        {
          vivienda: "4ºA",
          m2: 163.55,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-10-11.pdf",
        },
        {
          vivienda: "4ºB",
          m2: 56.75,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-12-13.pdf",
        },
        {
          vivienda: "4ºC",
          m2: 143.27,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-14-15.pdf",
        },
        {
          vivienda: "5ºA",
          m2: 285.09,
          terrazas: 23.67,
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-16-17.pdf",
        },
        {
          vivienda: "5ºB",
          m2: 101.27,
          terrazas: 23.34,
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-18-19.pdf",
        },
        {
          vivienda: "5ºC",
          m2: 238.16,
          terrazas: 18.94,
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-20-21.pdf",
        },

        {
          vivienda: "Local A",
          m2: 398.69,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-LOCAL.pdf",
        },
        {
          vivienda: "Sótano",
          m2: 3,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl:
            "assets/pdfs/planos/GonzalezConde/COMERCIALIZACION-GARAGE.pdf",
        },
      ],
      resume:
        "Diseñado por Juan Carlos Cartagena Arquitectos, este exclusivo edificio residencial de obra nueva está ubicado junto a la iglesia del Carmen. Combina la elegancia histórica de su fachada protegida con un diseño contemporáneo en cinco alturas. Consta de 15 viviendas de 1 a 5 dormitorios, adecuadas para distintos tipos de compradores, todas con plaza de garaje en sótano y trasteros distribuidos en dos niveles. En planta baja cuenta con un local comercial de 389,69 m². Destacan acabados de alta calidad y eficiencia energética, en un proyecto que respeta la identidad arquitectónica original con modernas comodidades.",
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
      name: "Edificio Barrio del Progreso",
      city: "Murcia",
      state: "Barrio del progreso",
      photo: `${this.baseUrlAssets}/1_3-Foto.jpg`,
      //realEstateName: "Anova Homes",
      //realEstateLink: "https://www.anovahomes.com/",
      minimunPrice: "250.000€",
      /*units: 
      [
        {
          vivienda: "Local vivienda 1°A",
          m2: 69.79,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl: "N/D",
        },
        {
          vivienda: "vivienda 1°B",
          m2: 72.71,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl: "N/D",
        },
        {
          vivienda: "vivienda 2°A",
          m2: 69.79,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl: "N/D",
        },
        {
          vivienda: "vivienda 2°B",
          m2: 72.71,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl: "N/D",
        },
        {
          vivienda: "vivienda 3°A",
          m2: 69.79,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl: "N/D",
        },
        {
          vivienda: "vivienda 3°B",
          m2: 62.75,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl: "N/D",
        },
        {
          vivienda: "vivienda 4°A",
          m2: 69.79,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl: "N/D",
        },
        {
          vivienda: "vivienda 4°B",
          m2: 62.75,
          terrazas: "—",
          precio: "N/D",
          planoPdfUrl: "N/D",
        },
      ]
,*/
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
      name: "Edificio Reino de Murcia",
      city: "Murcia",
      state: "Reino de Murcia",
      photo: `${this.baseUrlAssets}/PERPECTIVA_DETALLE.jpg`,
      realEstateName: "Siroco",
      realEstateLink: "https://sirocoinmuebles.com/",
      renderLink: "https://my.matterport.com/show/?m=poxMa2bcLc2",
      minimunPrice: "222,000€",
      socialMediaLinks: [
        {
          id: 1,
          nombreRedSocial: "Instagram",
          rutaArchivo: "https://www.instagram.com/sirocoinmuebles/",
        },
        {
          id: 2,
          nombreRedSocial: "TikTok",
          rutaArchivo: "https://www.tiktok.com/@sirocoinmuebles",
        },
        {
          id: 2,
          nombreRedSocial: "Linkedin",
          rutaArchivo:
            "https://www.linkedin.com/in/antonio-hern%C3%A1ndez-2b4a2b1a7/",
        },
      ],
      units: [
        {
          vivienda: "1º A",
          m2: 170.2,
          terrazas: 40.4,
          precio: 275000.0,
          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/Reino_de_Murcia_1A.pdf`,
        },
        {
          vivienda: "1º B",
          m2: 117.2,
          terrazas: 26.3,
          precio: 235000.0,
          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/Reino_de_Murcia_1B.pdf`,
        },
        {
          vivienda: "1º C",
          m2: 147.15,
          terrazas: 10.0,
          precio: 257000.0,
          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/Reino_de_Murcia_1C.pdf`,
        },
        {
          vivienda: "2º A",
          m2: 139.8,
          terrazas: 10.0,
          precio: 298000.0,
          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/Reino_de_Murcia_2A-3A.pdf`,
        },
        {
          vivienda: "2º B",
          m2: 90.9,
          terrazas: "—", // Dejé el guion en la columna del PDF, por lo que aquí es nulo.
          precio: 222000.0,
          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/Reino_de_Murcia_2B-3B`,
        },
        {
          vivienda: "2º C",
          m2: 137.15,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined, // No se puede descargar si está vendido
        },
        {
          vivienda: "3º A",
          m2: 139.8,
          terrazas: 10.0,
          precio: 318000.0,
          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/Reino_de_Murcia_2A-3A.pdf`,
        },
        {
          vivienda: "3º B",
          m2: 90.9,
          terrazas: "—",
          precio: 232000.0,
          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/Reino_de_Murcia_2B-3B.pdf`,
        },
        {
          vivienda: "3º C",
          m2: 137.15,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined,
        },
        {
          vivienda: "ATICO A",
          m2: 107.4,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined,
        },
        {
          vivienda: "ATICO B",
          m2: 69.6,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined,
        },
        {
          vivienda: "GARAJES",
          m2: 3,
          terrazas: "—",
          precio: 54000.0,
          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf`,
        },
        {
          vivienda: "LOCAL",
          m2: 320,
          terrazas: "—",
          precio: 512000.0,
          planoPdfUrl: `${this.baseUrlAssets}/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf`,
        },
      ],
      resume:
        "Proyecto promovido por PROMARHOGAR INFANTE S.L. y diseñado por el arquitecto Juan Sánchez Carrillo. Ubicado en Avenida Miguel Indurain, el edificio cuenta con 11 viviendas, locales comerciales, garaje y trasteros, cumpliendo todas las normativas vigentes. Dispone de amplias viviendas con terrazas, locales comerciales en planta baja, y zonas de almacenamiento en sótano. El diseño incluye terrazas comunitarias para el disfrute de los residentes, combinando funcionalidad y calidad en un entorno accesible y bien situado.",
      galleryImages: [
        "assets/pdfs/fotos/ReinoDeMurcia/FRONTAL.jpg",
        "assets/pdfs/fotos/ReinoDeMurcia/GENERAL.jpg",
        "assets/pdfs/fotos/ReinoDeMurcia/PLANTA.jpg",
      ],
      downloadDocuments: [
        {
          id: 1,
          nombreBoton: "Planos Globales",
          rutaArchivo: "assets/pdfs/planos/Edificio_Global.pdf",
        },
        {
          id: 2,
          nombreBoton: "Memoria de Calidades",
          rutaArchivo: "assets/pdfs/memoria_calidades.pdf",
        },
      ],
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.4823069294587!2d-1.1181602905529737!3d38.0052129310496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6382378c4223b7%3A0xbcf245bc7bc0ac4c!2sDiseminado%20Diego%20Carmona%2C%202%2C%2030007%20Zarandona%2C%20Murcia!5e1!3m2!1ses!2ses!4v1762621605517!5m2!1ses!2ses",
    },
  ];

  async submitApplication(
    firstName: string,
    lastName: string,
    email: string,
    houseId: number
  ) {
    try {
      const response = await fetch(`${apiUrl}/api/solicitud-info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, houseId }),
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
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email} (Para la casa con Id: ${houseId}).`
    );
  }
}
