import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterContact } from "./footer-contact/footer-contact";

@Component({
  selector: "app-root",
  imports: [RouterModule, FooterContact],
  template: `
    <main>
      <header class="top-bar">
        <!-- LOGO -->
        <a [routerLink]="['/']" class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.png"
            alt="logo"
            aria-hidden="true"
          />
        </a>

        <!-- BOTÓN HAMBURGUESA (MENU) -->
        <button class="menu-toggle" (click)="isMenuOpen = !isMenuOpen">
          &#9776;
        </button>

        <!-- MENÚ -->
        <nav class="menu" [class.open]="isMenuOpen">
          
          <!-- 
              Usamos routerLinkActive="active" para resaltar la sección actual.
              Los enlaces apuntan a las rutas dinámicas que creamos.
            -->
            <a 
              [routerLink]="['/trabajos']" 
              routerLinkActive="active" 
              class="nav-link"
            >TRABAJOS</a>
            
            <a 
              [routerLink]="['/categoria', 'COLABORACION']" 
              routerLinkActive="active"
              >COLABORACIONES</a
            >
            
            <!-- Asumiendo que 'En Venta' es un filtro específico -->
            <a 
              [routerLink]="['/categoria', 'VENTA']" 
              routerLinkActive="active" 
              class="nav-link"
            >EN VENTA</a>
            
            <a 
              [routerLink]="['/categoria', 'PROYECTO']" 
              routerLinkActive="active" 
              class="nav-link"
            >PROYECTOS</a>
        </nav>

        <div class="contact-info">
          <a href="tel:+34968355053" class="phone-number">
            <svg
              class="phone-icon"
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
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            +34 609 57 67 81
          </a>
        </div>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
    <app-footer-contact></app-footer-contact>
  `,
  styleUrls: ["./app.css"],
})
export class App {
  title = "Homes";
  isMenuOpen = false;
}
