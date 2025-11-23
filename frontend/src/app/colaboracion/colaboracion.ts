import { Component, Input } from '@angular/core';
import { ColabsLocationInfo } from '../colabs-location';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-colaboracion',
  templateUrl: './colaboracion.html',
  styleUrls: ['./colaboracion.css'],
})
export class Colaboracion {
  @Input() colab!: ColabsLocationInfo;

  getSocial(colab: ColabsLocationInfo, red: string) {
    return colab.socialMediaLinks?.find(
      (s) => s.nombreRedSocial.toLowerCase() === red.toLowerCase()
    )?.rutaArchivo;
  }
}
