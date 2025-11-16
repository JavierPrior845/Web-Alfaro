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
      name: "Edificio Gonzalez Conde",
      city: "Murcia",
      state: "Barrio del Carmen",
      photo: `${this.baseUrlAssets}/gonzalez conde_5-Foto.jpg`,
      realEstateName: "AnovaHomes",
      realEstateLink: "https://www.anovahomes.com/",
      minimunPrice: "10000€",
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
        "Diseñado por Juan Carlos Cartagena Arquitectos, este exclusivo edificio residencial de obra nueva está ubicado junto a la iglesia del Carmen. Combina la elegancia histórica de su fachada protegida con un diseño contemporáneo en cinco alturas. Consta de 15 viviendas de 1 a 5 dormitorios, adecuadas para distintos tipos de compradores, todas con plaza de garaje en sótano y trasteros distribuidos en dos niveles. En planta baja cuenta con un local comercial de 389,69 m². Destacan acabados de alta calidad y eficiencia energética, en un proyecto que respeta la identidad arquitectónica original con modernas comodidades.",
      galleryImages: [
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_3-Foto.jpg",
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_5-Foto.jpg",
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralder_mod.jpg",
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralder.jpg",
        "assets/pdfs/fotos/GonzalezConde/gonzalezconde_Lateralizq_mod.jpg",
      ],
    },
    {
      id: 1,
      name: "Edificio Barrio del Progreso",
      city: "Murcia",
      state: "Barrio del progreso",
      photo: `${this.baseUrlAssets}/1_3-Foto.jpg`,
      realEstateName: "Anova Homes",
      realEstateLink: "https://www.anovahomes.com/",
      minimunPrice: "250.000€",
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
        "Este proyecto, diseñado por Juan Carlos Cartagena Sevilla, propone un edificio de 8 viviendas, con un local en la primera planta y distribución en las plantas 1ª-2ª y 3ª-4ª. Cuenta con aproximadamente 440 m² útiles de vivienda, distribuidas en tipos A y B, y un local de 76,25 m² en la primera planta. Además, dispone de un espacio común de 110 m², complementando la funcionalidad del conjunto en una ubicación privilegiada en Murcia.",
      galleryImages: [
        "assets/pdfs/fotos/BarrioDelCarmen/1_2-Foto1VIVIENDA PLANTA.jpg",
        "assets/pdfs/fotos/BarrioDelCarmen/1_3-Foto.jpg",
        "assets/pdfs/fotos/BarrioDelCarmen/OPCIONA1VIVIENDAPLANTA.jpg",
        "assets/pdfs/fotos/BarrioDelCarmen/OPCIONB1VIVIENDAPLANTA.jpg",
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
      minimunPrice: "180.000€",
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
          rutaArchivo: "https://www.linkedin.com/in/antonio-hern%C3%A1ndez-2b4a2b1a7/",
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
        "Proyecto promovido por PROMARHOGAR INFANTE S.L. y diseñado por el arquitecto Juan Sánchez Carrillo. Ubicado en Avenida Miguel Indurain, el edificio cuenta con 11 viviendas, locales comerciales, garaje y trasteros, cumpliendo todas las normativas vigentes.Dispone de amplias viviendas con terrazas, locales comerciales en planta baja, y zonas de almacenamiento en sótano. El diseño incluye terrazas comunitarias para el disfrute de los residentes, combinando funcionalidad y calidad en un entorno accesible y bien situado.",
      galleryImages: [
        "assets/pdfs/fotos/ReinoDeMurcia/FRONTAL.jpg",
        "assets/pdfs/fotos/ReinoDeMurcia/GENERAL.jpg",
        "assets/pdfs/fotos/ReinoDeMurcia/PLANTA.jpg",
      ],
      downloadDocuments: [
        {
          id: 1,
          nombreBoton: 'Planos Globales',
          rutaArchivo: 'assets/pdfs/planos/Edificio_Global.pdf'
        },
        {
          id: 2,
          nombreBoton: 'Memoria de Calidades',
          rutaArchivo: 'assets/pdfs/memoria_calidades.pdf'
        }
      ]
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
