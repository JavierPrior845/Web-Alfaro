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
  
}
