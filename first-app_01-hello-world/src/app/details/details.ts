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
  template: `
    <article>
      <section>
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
          <h2 class="section-heading">Sobre el edificio</h2>
          @if (housingLocation?.resume; as texto) {
          <div class="building-resume">
            <p>{{ texto }}</p>
          </div>
          }

          <!-- SECCIÓN DE DESCARGAS MEJORADA -->
          <section class="download-section clearfix">
            <h3 class="real-estate-heading">Documentación</h3>
            <div class="download-buttons">
              <a [href]="getGlobalPlanPath()" download class="btn-download">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Planos Globales
              </a>
              <a [href]="getGlobalPlanPath()" download class="btn-download">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Memoria de Calidades
              </a>
            </div>
          </section>

          <div class="real-estate-info">
            <h3 class="real-estate-heading">Comercializado por</h3>
            <p class="real-estate-name">
              {{ housingLocation?.realEstateName }}
            </p>
            <p class="real-estate-description">
              ¿Quieres conocer más detalles sobre este edificio o agendar una
              visita? Contacta directamente con la inmobiliaria.
            </p>

            <a
              [href]="housingLocation?.realEstateLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-real-estate"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Descubre más en la inmobiliaria
            </a>
          </div>
        </section>
      </section>

      <!-- 
        --- SECCIÓN DE GALERÍA (CORREGIDA) ---
        Usamos un alias '; as galleryImages' para que TypeScript sepa
        que 'galleryImages' es de tipo string[] (no undefined) dentro del bloque.
      -->
      @if (housingLocation?.galleryImages; as galleryImages) { @if
      (galleryImages.length > 0) {
      <section class="gallery-section">
        <h2 class="section-heading">Galería de Imágenes</h2>
        <!-- Esta línea ahora es segura y no dará error -->
        <app-image-gallery [images]="galleryImages" />
      </section>
      } }

      <section class="unit-table-section clearfix">
        @if (housingLocation?.units; as availableUnits) {
        <!-- Usamos el alias 'availableUnits' para asegurar el tipo -->
        <app-unit-table [units]="availableUnits" />
        } @else {
        <p>No hay información de unidades disponible para este edificio.</p>
        }
      </section>
      <section class="listing-map-apply">
        <div class="map-form-container">
          <!-- Columna izquierda: Mapa -->
          <div class="map-column">
            <h2 class="section-heading">Ubicación</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.4823069294587!2d-1.1181602905529737!3d38.0052129310496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6382378c4223b7%3A0xbcf245bc7bc0ac4c!2sDiseminado%20Diego%20Carmona%2C%202%2C%2030007%20Zarandona%2C%20Murcia!5e1!3m2!1ses!2ses!4v1762621605517!5m2!1ses!2ses"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <!-- Columna derecha: Formulario -->
          <div class="form-column">
            <h2 class="section-heading">Quieres que te enviemos información</h2>
            <form [formGroup]="applyForm" (ngSubmit)="submitApplication()">
              <label for="first-name">Nombre</label>
              <input id="first-name" type="text" formControlName="firstName" />

              <label for="last-name">Telefono</label>
              <input id="last-name" type="text" formControlName="lastName" />

              <label for="email">Email</label>
              <input id="email" type="email" formControlName="email" />

              <div class="terms-container">
                <input
                  type="checkbox"
                  id="terms"
                  formControlName="termsAccepted"
                />
                <label for="terms">
                  Acepto los
                  <a href="/terms" target="_blank">términos y condiciones</a>
                </label>
              </div>

              <button type="submit" class="primary">
                Confirmar información
              </button>
            </form>
          </div>
        </div>
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
