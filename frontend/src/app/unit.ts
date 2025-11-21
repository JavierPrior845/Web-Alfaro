export interface Unit {
  vivienda: string;
  m2: number;
  terrazas?: number | string; // Puede ser opcional o un guion
  dormitorios?: number | string; // Puede ser opcional o un guion
  precio: number | string;   // Puede ser "VENDIDO" o un precio
  planoPdfUrl?: string;     // URL para descargar el plano (¡NUEVO CAMPO!)
}
