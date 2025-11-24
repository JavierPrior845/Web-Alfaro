import { Component, inject, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HousingLocationInfo } from '../housing-location';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Colab } from '../colab';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, CommonModule],
  templateUrl: "./housing-location.html",
  styleUrls: ['./housing-location.css']
})
export class HousingLocation implements OnInit, OnChanges {
  @Input() housingLocation!: HousingLocationInfo;
  colabService = inject(Colab);
  realEstateName?: string;

  async ngOnInit() {
    await this.updateRealEstateName();
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['housingLocation']) {
      await this.updateRealEstateName();
    }
  }

  private async updateRealEstateName() {
    if (this.housingLocation?.realEstateId != null) {
      const colab = await this.colabService.getColabById(this.housingLocation.realEstateId);
      this.realEstateName = colab?.name ?? undefined;
    } else {
      this.realEstateName = undefined;
    }
  }

  hasRealEstateName(): boolean {
    return !!this.realEstateName;
  }
}
