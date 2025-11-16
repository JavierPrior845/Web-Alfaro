import { Component, inject, AfterViewInit, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UnitTableComponent } from "../unit-table/unit-table";
import { ImageGalleryComponent } from "../image-gallery/image-gallery";
import * as L from "leaflet";
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: "app-details",
  standalone: true,
  imports: [ReactiveFormsModule, UnitTableComponent, ImageGalleryComponent, CommonModule, ],
  templateUrl: "./details.html",
  styleUrls: ["./details.css"],
})
export class Details implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(Housing);
  titleService: Title = inject(Title);
  sanitizer: DomSanitizer = inject(DomSanitizer);

  housingLocationId = -1;
  housingLocation: HousingLocationInfo | undefined;
  safeMapUrl: SafeResourceUrl | string = '';

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
    if (this.housingLocation?.mapLink) {
      // Le decimos a Angular que esta URL es segura para 'iframes'
      this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.housingLocation.mapLink
      );
    }
  }

  ngOnInit(): void {
    if (this.housingLocation) {
      this.titleService.setTitle(`ALFARO - ${this.housingLocation.name}`);
    } else {
      this.titleService.setTitle('ALFARO');
    }
  }


  getSocialMediaUrl(nombre: string): string | null {
    if (!this.housingLocation?.socialMediaLinks) return null;

    const link = this.housingLocation.socialMediaLinks.find(
      (s) => s.nombreRedSocial.toLowerCase() === nombre.toLowerCase()
    );

    return link?.rutaArchivo || null;
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
