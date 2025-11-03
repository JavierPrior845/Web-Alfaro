import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class Housing {
  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }

  readonly baseUrl = "assets";
  housingLocationList: HousingLocationInfo[] = [
    {
      id: 0,
      name: "Edificio Gonzalez Conde",
      city: "Murcia",
      state: "Barrio del Carmen",
      photo: `${this.baseUrl}/gonzalez conde_5-Foto.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
      units: [
        {
          vivienda: "1º A",
          m2: 170.20,
          terrazas: 40.40,
          precio: 275000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_1A.pdf`, 
        },
        {
          vivienda: "1º B",
          m2: 117.20,
          terrazas: 26.30,
          precio: 235000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_1B.pdf`, 
        },
        {
          vivienda: "1º C",
          m2: 147.15,
          terrazas: 10.00,
          precio: 257000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_1C.pdf`, 
        },
        {
          vivienda: "2º A",
          m2: 139.80,
          terrazas: 10.00,
          precio: 298000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2A-3A.pdf`, 
        },
        {
          vivienda: "2º B",
          m2: 90.90,
          terrazas: "—", // Dejé el guion en la columna del PDF, por lo que aquí es nulo.
          precio: 222000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2B-3B`, 
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
          m2: 139.80,
          terrazas: 10.00,
          precio: 318000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2A-3A.pdf`, 
        },
        {
          vivienda: "3º B",
          m2: 90.90,
          terrazas: "—",
          precio: 232000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2B-3B.pdf`, 
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
          m2: 107.40,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined,
        },
        {
          vivienda: "ATICO B",
          m2: 69.60,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined,
        },
        {
          vivienda: "GARAJES",
          m2: 3,
          terrazas: "—",
          precio: 54000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf`,
        },
        {
          vivienda: "LOCAL",
          m2: 320,
          terrazas: "—",
          precio: 512000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf`,
        },
      ],
    },
    {
      id: 1,
      name: "Edificio Barrio del Progreso",
      city: "Murcia",
      state: "Barrio del progreso",
      photo: `${this.baseUrl}/1_3-Foto.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
      units: [
        {
          vivienda: "1º A",
          m2: 170.20,
          terrazas: 40.40,
          precio: 275000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_1A.pdf`, 
        },
        {
          vivienda: "1º B",
          m2: 117.20,
          terrazas: 26.30,
          precio: 235000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_1B.pdf`, 
        },
        {
          vivienda: "1º C",
          m2: 147.15,
          terrazas: 10.00,
          precio: 257000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_1C.pdf`, 
        },
        {
          vivienda: "2º A",
          m2: 139.80,
          terrazas: 10.00,
          precio: 298000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2A-3A.pdf`, 
        },
        {
          vivienda: "2º B",
          m2: 90.90,
          terrazas: "—", // Dejé el guion en la columna del PDF, por lo que aquí es nulo.
          precio: 222000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2B-3B`, 
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
          m2: 139.80,
          terrazas: 10.00,
          precio: 318000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2A-3A.pdf`, 
        },
        {
          vivienda: "3º B",
          m2: 90.90,
          terrazas: "—",
          precio: 232000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2B-3B.pdf`, 
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
          m2: 107.40,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined,
        },
        {
          vivienda: "ATICO B",
          m2: 69.60,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined,
        },
        {
          vivienda: "GARAJES",
          m2: 3,
          terrazas: "—",
          precio: 54000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf`,
        },
        {
          vivienda: "LOCAL",
          m2: 320,
          terrazas: "—",
          precio: 512000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf`,
        },
      ],
    },
    {
      id: 2,
      name: "Edificio Reino de Murcia",
      city: "Murcia",
      state: "Reino de Murcia",
      photo: `${this.baseUrl}/PERPECTIVA_DETALLE.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
      units: [
        {
          vivienda: "1º A",
          m2: 170.20,
          terrazas: 40.40,
          precio: 275000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_1A.pdf`, 
        },
        {
          vivienda: "1º B",
          m2: 117.20,
          terrazas: 26.30,
          precio: 235000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_1B.pdf`, 
        },
        {
          vivienda: "1º C",
          m2: 147.15,
          terrazas: 10.00,
          precio: 257000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_1C.pdf`, 
        },
        {
          vivienda: "2º A",
          m2: 139.80,
          terrazas: 10.00,
          precio: 298000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2A-3A.pdf`, 
        },
        {
          vivienda: "2º B",
          m2: 90.90,
          terrazas: "—", // Dejé el guion en la columna del PDF, por lo que aquí es nulo.
          precio: 222000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2B-3B`, 
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
          m2: 139.80,
          terrazas: 10.00,
          precio: 318000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2A-3A.pdf`, 
        },
        {
          vivienda: "3º B",
          m2: 90.90,
          terrazas: "—",
          precio: 232000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Murcia_2B-3B.pdf`, 
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
          m2: 107.40,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined,
        },
        {
          vivienda: "ATICO B",
          m2: 69.60,
          terrazas: "—",
          precio: "VENDIDO",
          planoPdfUrl: undefined,
        },
        {
          vivienda: "GARAJES",
          m2: 3,
          terrazas: "—",
          precio: 54000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf`,
        },
        {
          vivienda: "LOCAL",
          m2: 320,
          terrazas: "—",
          precio: 512000.00,
          planoPdfUrl: `${this.baseUrl}/pdfs/planos/Reino_de_Mucia_Sotano-PB.pdf`,
        },
      ],
    },
  ];

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
