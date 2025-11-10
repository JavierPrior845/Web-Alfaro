import { Component, inject, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UnitTableComponent } from "../unit-table/unit-table";
import { ImageGalleryComponent } from "../image-gallery/image-gallery";
import { Unit } from "../unit";
import * as L from "leaflet";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [ReactiveFormsModule, UnitTableComponent, ImageGalleryComponent],
  templateUrl: "./details.html",
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
    termsAccepted: new FormControl(false),
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId
    );
  }

  ngAfterViewInit(): void {
    // Coordenadas de Madrid, Cambiara cuando tengamos coordenadas de edificios
    const lat = 38.00538956066262;
    const lng = -1.1178594990637745;

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

  getGlobalPlanPath(): string {
    // Asegúrate de que este archivo existe en la ruta especificada
    // (Ajusta el nombre si es diferente)
    return "assets/pdfs/planos/Edificio_Global.pdf";
  }

  submitApplication() {
    if (!this.applyForm.value.termsAccepted) {
      alert("Debes aceptar los términos y condiciones antes de continuar.");
      return;
    }

    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? "",
      this.housingLocationId
    );
  }
}
