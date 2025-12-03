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
        "assets/works/w5-2.png",
        "assets/works/w5-3.png"
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
      localizacion: "MURCIA (C/ Alfaro, 8)",
      imagenes: [
        "assets/works/w11-1.png",
        "assets/works/w11-2.png"
      ]
    },
    {
      obra: "8 VIVIENDAS, LOCAL Y TRASTEROS",
      localizacion: "MURCIA (C/ Vistalegre, 10)",
      imagenes: [
        "assets/works/w12-1.png",
        "assets/works/w12-2.png"
      ]
    },
    {
      obra: "REHABILTACIÓN CONVENTO SAN JOAQUIN Y SAN PASCUAL",
      localizacion: "CIEZA - MURCIA",
      imagenes: [
        "assets/works/w14-1.png",
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA Y ZAGUÁN",
      localizacion: "PLAZA CARDENAL BELLUGA MURCIA",
      imagenes: [
        "assets/works/w15-1.png",
        "assets/works/w15-2.png",
        "assets/works/w15-3.png",
        "assets/works/w15-4.png",
        "assets/works/w15-5.png"
      ]
    },
    {
      obra: "REPARACIÓN IGLESIA PARROQUIAL NUESTRA SEÑORA DE LA CONSOLACIÓN",
      localizacion: "COPA DE BULLAS. BULLAS - MURCIA",
      imagenes: [
        "assets/works/w16-1.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA, ZAGUÁN, ASCENSOR Y CUBIERTAS",
      localizacion: "CALLE VIDRIEROS - SAN ANTOLIN. MURCIA",
      imagenes: [
        "assets/works/w17-1.png",
        "assets/works/w17-2.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA Y ZAGUÁN",
      localizacion: "CALLE JARA CARRILLO. MURCIA",
      imagenes: [
        "assets/works/w18-1.png",
        "assets/works/w18-2.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO",
      localizacion: "AVD. ALFONSO X. MURCIA",
      imagenes: [
        "assets/works/w19-1.png",
        "assets/works/w19-2.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA Y ZAGUÁN",
      localizacion: "PLAZA DE SANTO DOMINGO. MURCIA",
      imagenes: [
        "assets/works/w20-1.png",
        "assets/works/w20-2.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO EXTERIOR E INTERIOR COLEGIO JESUS MARÍA",
      localizacion: "AVD. ALFONSO X. MURCIA",
      imagenes: [
        "assets/works/w22-1.png",
        "assets/works/w22-2.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA Y ZAGUÁN",
      localizacion: "CALLE QUITERIA (JUNTO A GERENCIA DE URBANISMO). MURCIA",
      imagenes: [
        "assets/works/w23-1.png",
        "assets/works/w23-2.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA, ZAGUÁN Y CUBIERTAS",
      localizacion: "CALLE SAN BENITO. MURCIA",
      imagenes: [
        "assets/works/w24-1.png",
        "assets/works/w24-2.png"

      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO COLEGIO EL BUEN PASTOR",
      localizacion: "PLAZA DE SAN AGUSTÍN. MURCIA",
      imagenes: [
        "assets/works/w25-1.png",
        "assets/works/w25-2.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA Y ZAGUÁN",
      localizacion: "CALLE ALEJANDRO SÉIQUER. MURCIA",
      imagenes: [
        "assets/works/w26-1.png",
        "assets/works/w26-2.png"
      ]
    },
    {
      obra: "CONSTRUCCIÓN OBRAS VARIAS PARA PROMOTORA INMOBILIARIA GRUPO LÓPEZ REJAS Desde 1975 a 2005",
      localizacion: "MURCIA",
      imagenes: [
        "assets/works/w27-1.png",
        "assets/works/w27-2.png",
        "assets/works/w27-3.png",
        "assets/works/w27-4.png",
        "assets/works/w27-5.png",
        "assets/works/w27-6.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA Y CUBIERTAS",
      localizacion: "CALLE GRAN VÍA. MURCIA",
      imagenes: [
        "assets/works/w28-1.png",
        "assets/works/w28-2.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA Y CUBIERTA",
      localizacion: "CALLE SOCIEDAD. MURCIA",
      imagenes: [
        "assets/works/w29-1.png"
      ]
    },
    {
      obra: "REHABILITACIÓN EDIFICIO FACHADA, ZAGUÁN Y CUBIERTAS",
      localizacion: "CALLE PASCUAL ESQUINA CALLE MADRE DE DIOS. MURCIA",
      imagenes: [
        "assets/works/w30-1.png",
        "assets/works/w30-2.png"
      ]
    },
    {
      obra: "CONSTRUCCIÓN 18 DUPLEX",
      localizacion: "LORQUÍ. MURCIA",
      imagenes: [
        "assets/works/w31-1.png",
        "assets/works/w31-2.png"
      ]
    },
    {
      obra: "CONSTRUCCIÓN DUPLEX",
      localizacion: "RONDA ESTE – MOLINA DE SEGURA. MURCIA",
      imagenes: [
        "assets/works/w32-1.png",
        "assets/works/w32-2.png"
      ]
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
