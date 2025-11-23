import { Component, inject, AfterViewInit, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UnitTableComponent } from "../unit-table/unit-table";
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GridGalleryComponent } from "../grid-gallery/grid-gallery";
import { Colab } from "../colab";
import { ColabsLocationInfo } from "../colabs-location";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [ReactiveFormsModule, UnitTableComponent, CommonModule, GridGalleryComponent],
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
  safeMapUrl: SafeResourceUrl | string = '';

  lastClicked: string = '';

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
    if (this.housingLocation?.realEstateId){
      this.colab = await this.colabService.getColabById(this.housingLocation?.realEstateId);
    }
    if (this.housingLocation?.mapLink) {
      // Le decimos a Angular que esta URL es segura para 'iframes'
      this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.housingLocation.mapLink
      );
    }
    if (this.housingLocation) {
      this.titleService.setTitle(`ALFARO - ${this.housingLocation.name}`);
    } else {
      this.titleService.setTitle('ALFARO');
    }
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
    // Aquí pondrías tu router:
    // this.router.navigate(['/detalle'], { queryParams: { img: imagen } });
  }
}
