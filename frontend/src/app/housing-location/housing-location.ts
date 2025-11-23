import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housing-location';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, CommonModule],
  templateUrl: "./housing-location.html",
  styleUrls: ['./housing-location.css']
})

export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
