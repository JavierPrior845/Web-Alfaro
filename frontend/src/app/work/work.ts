import { Component, inject } from '@angular/core';
import { Working } from '../working';
import { MasonryComponent } from '../masonry/masonry';

@Component({
  selector: 'app-work',
  imports: [MasonryComponent],
  templateUrl: "./work.html",
  styleUrl: "./work.css",
})

export class Work {
  workingService = inject(Working);
  works = this.workingService.getAllWorks();

  getMasonryItems(item: any) {
    const base = item.imagenes ?? [];
    const card = {
      id: -1,                // Usar id negativo para diferenciar
      src: '',               // no hay imagen real
      type: 'text',
      title: item.obra,
      location: item.localizacion,
    };
    return [...base.map((src : string, i : number) => ({ id: i, src, type: 'image' })), card];
  }
}
