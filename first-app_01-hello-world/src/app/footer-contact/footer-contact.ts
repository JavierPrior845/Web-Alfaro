import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiBaseUrl;

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
        <form [formGroup]="applyForm" (ngSubmit)="submitApplication()" class="contact-form">
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


  async submitApplication() {
    if (this.applyForm.valid) {
      this.submissionStatus = 'pending';
      const email = this.applyForm.value.email ?? '';

      try {
        const response = await fetch(`${apiUrl}/api/suscripcion`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          if (response.status === 409) {
            alert('Este correo electrónico ya está suscrito.');
          } else {
            alert('Error al suscribirse. Intenta nuevamente más tarde.');
          }
          this.submissionStatus = 'error';
          return;
        }

        const data = await response.json();
        console.log('Suscripción exitosa', data);
        this.submissionStatus = 'success';
        this.applyForm.reset();
      } catch (error) {
        console.error('Error en la suscripción', error);
        alert('Error de conexión. Intenta nuevamente más tarde.');
        this.submissionStatus = 'error';
      }
    }
  }
}
