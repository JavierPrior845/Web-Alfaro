import { Injectable } from '@angular/core';
import { Works } from './works';

@Injectable({
  providedIn: 'root',
})
export class Working {
  getAllWorks(): Works[]{
    return this.worksList;
  }

  worksList : Works [] = [
    {
      obra: "35 VIVIENDAS, 3 SÓTANOS, GARAJES Y LOCALES",
      localizacion: "BARRIO DEL CARMEN - MURCIA",
      imagenes: [
        "assets/works/w1-1.png",
        "assets/works/w1-2.png"
      ]
    },
    {
      obra: "13 VIVIENDAS, BAJOS COMERCIALES Y GARAJES",
      localizacion: "MURCIA (Avda. Mártires, Avda. Juan de Borbón esquina Avda. Príncipe de Asturias)",
      imagenes:[
        "assets/works/w2-1.png"
      ]
    },
    {
      obra: "7 VIVIENDAS Y LOCALES COMERCIALES",
      localizacion: "LA ÑORA. MURCIA",
      imagenes: [
        "assets/works/w3-1.png",
        "assets/works/w3-2.png"
      ]
    },
    {
      obra: "14 VIVIENDAS, BAJOS, GARAJES Y TRASTEROS",
      localizacion: "MURCIA (Av. Juan de Borbón y Av. de Los Mártires)",
      imagenes: [
        "assets/works/w4-1.png"
      ]
    },
    {
      obra: "3 VIVIENDAS",
      localizacion: "ZARANDONA. MURCIA",
      imagenes: [
        "assets/works/w5-1.png",
        "assets/works/w5-2.png"
      ]
    },
    {
      obra: "20 VIVIENDAS, LOCAL, GARAJE Y TRASTEROS",
      localizacion: "MURCIA (PC/4, Polig.C-4, P.P.CR-3)",
      imagenes: [
        "assets/works/w6-1.png"
      ]
    },
    {
      obra: "21 VIVIENDAS, LOCAL, SOTANO-GARAJE Y TRASTEROS",
      localizacion: "EL PALMAR, MURCIA",
      imagenes: [
        "assets/works/w7-1.png"
      ]
    },
    {
      obra: "5 VIVIENDAS DÚPLEX",
      localizacion: "SANTO ÁNGEL. MURCIA",
      imagenes: [
        "assets/works/w8-1.png",
        "assets/works/w8-2.png"
      ]
    },
    {
      obra: "13 VIVIENDAS Y GARAJES V.P.O.",
      localizacion: "SAN BASILIO, CIUDAD RESIDENCIAL CR-8. MURCIA",
      imagenes: [
        "assets/works/w9-1.png",
        "assets/works/w9-2.png"
      ]
    },
    {
      obra: "35 VIVIENDAS, SÓTANO – GARAJE Y TRASTEROS",
      localizacion: "TORRE DE LA HORADADA, PILAR DE LA HORADADA. ALICANTE",
      imagenes: [
        "assets/works/w10-1.png",
        "assets/works/w10-2.png"
      ]
    },
    {
      obra: "RECONSTRUCCIÓN: 8 VIVIENDAS, LOCALES Y TRASTEROS",
      localizacion: "MURCIA (C/ Alfaro, 8)"
    },
    {
      obra: "8 VIVIENDAS, LOCAL Y TRASTEROS",
      localizacion: "MURCIA (C/ Vistalegre, 10)"
    },
    {
      obra: "CONSTRUCCIÓN 18 DUPLEX",
      localizacion: "LORQUÍ. MURCIA"
    },
    {
      obra: "CONSTRUCCIÓN DUPLEX",
      localizacion: "RONDA ESTE – MOLINA DE SEGURA. MURCIA"
    },
    {
      obra: "COOPERATIVA: 26 viviendas locales y Garajes",
      localizacion: "LA ÑORA. MURCIA"
    },
    {
      obra: "6 VIVIENDAS Y BAJOS",
      localizacion: "SANGONERA LA VERDE. MURCIA"
    },
    {
      obra: "CONSTRUCCIÓN EDIFICIO",
      localizacion: "LA MANGA. MURCIA"
    },
    {
      obra: "CHALET PRIVADO",
      localizacion: "BUENAVISTA. MURCIA"
    },
    {
      obra: "CHALET PRIVADO",
      localizacion: "TORRES DE COTILLAS. MURCIA"
    },
    {
      obra: "10 VIVIENDAS",
      localizacion: "JAVALI NUEVO. MURCIA"
    },
    {
      obra: "14 VIVIENDAS",
      localizacion: "EL RANERO. MURCIA"
    },
    {
      obra: "10 VIVIENDAS",
      localizacion: "CASILLAS. MURCIA"
    },
    {
      obra: "6 VIVIENDAS",
      localizacion: "CASILLAS, MURCIA"
    },
    {
      obra: "48 DUPLEX PAREADOS",
      localizacion: "LA ALBERCA Y URBANIZACION. MURCIA"
    },
    {
      obra: "25 VIVIENDAS",
      localizacion: "LO PAGÁN. MURCIA"
    },
    {
      obra: "36 CHALETS CAMPO DE GOLF DE SAN JUAN",
      localizacion: "ALICANTE"
    }
  ]

}
