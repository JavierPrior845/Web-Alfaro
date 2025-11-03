import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <footer class="footer-section">
      <div class="footer-content">
        <h3 class="footer-heading">¿Interesado en Viviendas de Obra Nueva?</h3>
        <p class="footer-text">Suscríbete para recibir notificaciones exclusivas sobre nuevos lanzamientos de ALFARO.</p>
        
        <!-- Formulario de Suscripción -->
        <form [formGroup]="applyForm" (submit)="submitApplication()" class="contact-form">
          <div class="input-group">
            <input 
              type="email" 
              formControlName="email" 
              placeholder="Introduce tu correo electrónico" 
              class="email-input"
            >
            <button type="submit" [disabled]="!applyForm.valid" class="primary footer-button">
              Suscribirme
            </button>
          </div>
          
          <!-- Mensaje de Validación y Error -->
          @if (applyForm.controls['email'].invalid && applyForm.controls['email'].dirty) {
            <p class="error-message">Por favor, introduce un correo electrónico válido.</p>
          }
          @if (submissionStatus === 'success') {
            <p class="success-message">¡Gracias! Nos pondremos en contacto contigo pronto.</p>
          }
          @if (submissionStatus === 'error') {
            <p class="error-message">Hubo un error al enviar tu solicitud. Inténtalo de nuevo.</p>
          }

        </form>
      </div>
      <div class="footer-bar">
        <p class="copyright">ALFARO Inmobiliaria &copy; 2025. Todos los derechos reservados.</p>
        <div class="contact-info">
            <!-- Información de contacto estática -->
            <p>Tel: +34 XXX XXX XXX</p>
            <p>Email: contacto@alfaro.com</p>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer-contact.css'
})
export class FooterContact {
  // Estado para manejar la respuesta del servidor (Fastify)
  submissionStatus: 'pending' | 'success' | 'error' | null = null; 

  // Definición del formulario reactivo con validación
  applyForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  submitApplication() {
    if (this.applyForm.valid) {
      this.submissionStatus = 'pending';
      const email = this.applyForm.value.email ?? '';

      // --- SIMULACIÓN DE LLAMADA AL BACKEND ---
      // Aquí irá la lógica para llamar a tu Fastify POST /api/contacto
      console.log(`Intentando enviar: ${email}`);
      
      // Simulación de éxito (reemplazar con fetch real a Fastify)
      setTimeout(() => {
        this.submissionStatus = 'success'; 
        this.applyForm.reset();
      }, 1500);
      // ----------------------------------------
    }
  }
}
