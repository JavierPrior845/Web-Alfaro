import { Component, inject, Input } from '@angular/core';
import { HousingLocationInfo } from '../housing-location';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Colab } from '../colab';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, CommonModule],
  templateUrl: "./housing-location.html",
  styleUrls: ['./housing-location.css']
})

export class HousingLocation implements OnInit {
  @Input() housingLocation!: HousingLocationInfo;
  colabService = inject(Colab);
  realEstateName?: string;

  async ngOnInit() {
    if (this.housingLocation?.realEstateId != null) {
      const colab = await this.colabService.getColabById(this.housingLocation.realEstateId);
      this.realEstateName = colab?.name;
    }
  }

  hasRealEstateName(): boolean {
    return !!this.realEstateName;
  }
}
