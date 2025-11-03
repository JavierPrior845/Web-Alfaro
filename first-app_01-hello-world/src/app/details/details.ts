import { Component, inject, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UnitTableComponent } from "../unit-table/unit-table";
import { Unit } from "../unit";
import * as L from "leaflet";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [ReactiveFormsModule, UnitTableComponent],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />

      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>

      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>

      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />

          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
      
      <section>
        @if (housingLocation?.units) {
        <app-unit-table [units]="housingLocation.units" />
        } @else {
        <p>No hay información de unidades disponible para este edificio.</p>
        }
      </section>
      <section class="listing-map-apply">
        <h2 class="section-heading">Location</h2>
        <div id="map" style="height: 400px; width: 400px;"></div>
      </section>

    </article>
  `,
  styleUrls: ["./details.css"],
})
export class Details implements AfterViewInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(Housing);

  housingLocationId = -1;
  housingLocation: HousingLocationInfo | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId
    );
  }

  ngAfterViewInit(): void {
    // Coordenadas de Madrid, Cambiara cuando tengamos coordenadas de edificios
    const lat = 40.4168;
    const lng = -3.7038;

    const map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(this.housingLocation?.name || "Housing Location")
      .openPopup();

    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }
}
