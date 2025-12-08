import { Injectable } from "@angular/core";
import { ColabsLocationInfo } from "./colabs-location";
import { environment } from "src/environments/environment";

const apiUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: "root",
})
export class Colab {
  constructor() {}

  // Lista de inmobiliarias
  colabs: ColabsLocationInfo[] = [
    {
      id: 0,
      name: "Siroco",
      logo: "assets/pdfs/fotos/Inmobiliarias/logo-sirocco.png",
      website: "https://sirocoinmuebles.com/",
      description:
        "Siroco Inmuebles combina su experiencia como arquitecto y asesor inmobiliario para ofrecer un servicio integral: valoración, marketing profesional, home staging, asesoría jurídica y fiscal, y un acompañamiento cercano en todo el proceso de compraventa, con la seguridad y la transparencia que mereces.",
      address:
        "C/ Sánchez Madrigal 9, Edificio Villaleal, Bajo, 30004, Murcia, España.",
      phone: "(+34) 610 89 41 63",
      email: "info@sirocoinmuebles.com",
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
          id: 3,
          nombreRedSocial: "LinkedIn",
          rutaArchivo:
            "https://www.linkedin.com/in/antonio-hern%C3%A1ndez-2b4a2b1a7/",
        },
      ],
    },
    {
      id: 1,
      name: "Anova Homes",
      logo: "assets/pdfs/fotos/Inmobiliarias/logo-anova.png",
      website: "https://www.anovahomes.com/",
      description:
        "Anova Homes es una inmobiliaria moderna que ofrece un servicio integral en venta y alquiler: valoración gratuita, marketing profesional, home staging, tours virtuales y gestión jurídica completa, apostando siempre por la transparencia y una atención cercana.",
      address: "C/ Marqués de Ordoño, 1, 4A, 30002 Murcia",
      phone: "(+34) 644 03 32 19",
      email: "hola@anovahomes.com",
      socialMediaLinks: [
        {
          id: 1,
          nombreRedSocial: "Instagram",
          rutaArchivo: "https://www.instagram.com/anova_homes/",
        },
        {
          id: 2,
          nombreRedSocial: "TikTok",
          rutaArchivo: "https://www.tiktok.com/@anova_homes",
        },
        {
          id: 3,
          nombreRedSocial: "LinkedIn",
          rutaArchivo: "https://www.linkedin.com/company/anova-inmobiliaria/",
        },
      ],
    },
  ];

  // Métodos públicos
  /*getAllColabs(): ColabsLocationInfo[] {
    return this.colabs;
  }

  getColabById(id: number): ColabsLocationInfo | undefined {
    return this.colabs.find((c) => c.id === id);
  }*/

  /**
     * GET /api/colabs
     * Recupera la lista de inmobiliarias (Colabs).
     */
    async getAllColabs(): Promise<ColabsLocationInfo[]> {
      try {
        const response = await fetch(`${apiUrl}/api/colabs`);
  
        if (!response.ok) {
          throw new Error(
            `Error al cargar colaboraciones: ${response.statusText}`
          );
        }
  
        const data = await response.json();
  
        // Devolvemos el array directamente (asegurando que sea array)
        return Array.isArray(data) ? data : [];
      } catch (error) {
        console.error("Error en getAllColabs:", error);
        return [];
      }
    }

    /**
   * GET /api/colabs/:id
   * Recupera el detalle de una inmobiliaria específica.
   */
  async getColabById(id: number): Promise<ColabsLocationInfo | undefined> {
    try {
      const response = await fetch(`${apiUrl}/api/colabs/${id}`);

      if (!response.ok) {
        throw new Error(`Error al cargar la inmobiliaria ${id}: ${response.statusText}`);
      }

      const data = await response.json();

      // Si no hay datos, retornamos undefined
      if (!data) return undefined;

      // No requiere transformación compleja, los arrays ya vienen listos desde el backend
      return data;

    } catch (error) {
      console.error('Error en getColabById:', error);
      return undefined;
    }
  }
}
