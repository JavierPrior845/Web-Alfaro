import { Component, inject, OnInit } from '@angular/core';
import { Colab } from '../colab';
import { ColabsLocationInfo } from '../colabs-location';
import { CommonModule } from '@angular/common';
import { Colaboracion } from '../colaboracion/colaboracion';

@Component({
  standalone: true,
  selector: 'app-colaboraciones',
  imports: [ CommonModule, Colaboracion],
  templateUrl: './colaboraciones.html',
  styleUrls: ['./colaboraciones.css'],
})
export class Colaboraciones implements OnInit {
  colabService = inject(Colab);
  colabs: ColabsLocationInfo[] = [];

  ngOnInit(): void {
    this.colabs = this.colabService.getAllColabs();
  }
}

