import { Component, inject, AfterViewInit, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UnitTableComponent } from "../unit-table/unit-table";
import { CommonModule } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { GridGalleryComponent } from "../grid-gallery/grid-gallery";
import { Colab } from "../colab";
import { ColabsLocationInfo } from "../colabs-location";
import { Colaboracion } from "../colaboracion/colaboracion";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UnitTableComponent,
    CommonModule,
    GridGalleryComponent,
    Colaboracion,
  ],
  templateUrl: "./details.html",
  styleUrls: ["./details.css"],
})
export class Details implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(Housing);
  colabService = inject(Colab);
  titleService: Title = inject(Title);
  sanitizer: DomSanitizer = inject(DomSanitizer);
  colab: ColabsLocationInfo | undefined;

  housingLocationId = -1;
  housingLocation: HousingLocationInfo | undefined;
  safeMapUrl: SafeResourceUrl | string = "";

  lastClicked: string = "";
  resumeHtml: string = "";

  applyForm = new FormGroup({
    firstName: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl(""),
    termsAccepted: new FormControl(false),
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
  }

  async ngOnInit(): Promise<void> {
    this.housingLocation = await this.housingService.getHousingLocationById(
      this.housingLocationId
    );
    if (this.housingLocation?.realEstateId != null) {
      this.colab = await this.colabService.getColabById(
        this.housingLocation?.realEstateId
      );
    }
    if (this.housingLocation?.mapLink) {
      this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.housingLocation.mapLink
      );
    }
    if (this.housingLocation) {
      this.titleService.setTitle(`ALFARO - ${this.housingLocation.name}`);
    } else {
      this.titleService.setTitle("ALFARO");
    }
    if (this.housingLocation?.resume) {
      this.resumeHtml = this.housingLocation.resume.replace(/\n/g, "<br>");
    }
    if (this.housingLocation?.downloadDocuments) {
    this.housingLocation.downloadDocuments =
      this.housingLocation.downloadDocuments.map(doc => ({
        ...doc,
        rutaArchivoSanitizada: this.sanitizeUrl(doc.rutaArchivo)
      }));
  }
  }

  //  MÉTODO NUEVO PARA SANEAR PDFs
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  submitApplication() {
    if (!this.applyForm.value.termsAccepted) {
      alert("Debes aceptar los términos y condiciones antes de continuar.");
      return;
    }

    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.phone ?? "",
      this.applyForm.value.email ?? "",
      this.housingLocationId
    );
  }

  navegarA(imagen: string) {
    this.lastClicked = imagen;
    console.log("Navegando a la imagen:", imagen);
  }
}
