import { SafeResourceUrl } from "@angular/platform-browser";

export interface DownloadDocument {
  id: number;
  nombreBoton: string;
  rutaArchivo: string;
  rutaArchivoSanitizada?: SafeResourceUrl;
}