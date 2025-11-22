import { Injectable } from "@angular/core";
import { ColabsLocationInfo } from "./colabs-location";

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
      address: "C/ Sánchez Madrigal 9, Edificio Villaleal, Bajo, 30004, Murcia, España.",
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
      address: "C. Marqués de Ordoño, 1, 4A, 30002 Murcia",
      phone: "(+34) 644 03 32 19",
      email: "hola@anovahomes.com",
    },
  ];

  // Métodos públicos
  getAllColabs(): ColabsLocationInfo[] {
    return this.colabs;
  }

  getColabById(id: number): ColabsLocationInfo | undefined {
    return this.colabs.find((c) => c.id === id);
  }
}
