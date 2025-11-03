import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housing-location";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  template: `
    <div class="hero-section">
      <div class="hero-content">
        <h1>Viviendas Obra Nueva</h1>
        <p>Descubre las mejores promociones inmobiliarias en tu zona.</p>
      </div>
    </div>
    <section class="results">
      @for(housingLocation of filteredLocationList; track $index) {
      <app-housing-location
        [housingLocation]="housingLocation"
      ></app-housing-location>
      }
    </section>
  `,
  styles: ``,
  styleUrls: ["./home.css"],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  housingService: Housing = inject(Housing);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

}
