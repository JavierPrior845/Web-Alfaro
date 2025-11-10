import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housing-location";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  templateUrl: "./home.html",
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
