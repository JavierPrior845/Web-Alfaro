import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterContact } from "./footer-contact/footer-contact";

@Component({
  selector: "app-root",
  imports: [RouterModule, FooterContact],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.png"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
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
}
