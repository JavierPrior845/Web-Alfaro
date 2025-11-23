export interface Unit {
  vivienda: string;
  m2: number;
  terrazas?: number | string; // Puede ser opcional o un guion
  dormitorios?: number | string; // Puede ser opcional o un guion
  banos?: number | string;
  trastero?: string;
  garage?: string;
  planoPdfUrl?: string;   // URL para descargar el plano (¡NUEVO CAMPO!)
}
