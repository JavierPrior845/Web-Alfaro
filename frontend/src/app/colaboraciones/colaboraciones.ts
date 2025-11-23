import { Component, inject, OnInit } from '@angular/core';
import { Colab } from '../colab';
import { ColabsLocationInfo } from '../colabs-location';
import { CommonModule } from '@angular/common';
import { Colaboracion } from '../colaboracion/colaboracion';

@Component({
  standalone: true,
  selector: 'app-colaboraciones',
  imports: [ CommonModule, ],
  templateUrl: './colaboraciones.html',
  styleUrls: ['./colaboraciones.css'],
})
export class Colaboraciones implements OnInit {

  colabService = inject(Colab);
  colabs: ColabsLocationInfo[] = [];   // ← AQUÍ GUARDAREMOS TODAS LAS INMOBILIARIAS

  ngOnInit(): void {
    this.colabs = this.colabService.getAllColabs();  
    // ← AHORA colabs tiene Siroco y Anova
  }

  getSocial(colab: ColabsLocationInfo, red: string) {
    return colab.socialMediaLinks?.find(
      (s) => s.nombreRedSocial.toLowerCase() === red.toLowerCase()
    )?.rutaArchivo;
  }
}

