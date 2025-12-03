export interface Unit {
  planta?: string;
  tipologia?: string;
  dormitorios?: number | string; // Puede ser opcional o un guion
  banos?: number | string;
  piscina?: string;
  m2construidos?: number | string;
  m2utiles?: number | string;
  m2terraza?: number | string;
  orientacion?:string;
  eficEnergetica?: string;
  garage?: string;
  trastero?: string;
  planoPdfUrl?: string;   // URL para descargar el plano (¡NUEVO CAMPO!)
}
