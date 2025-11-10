import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from 'src/enviroments/environment';

const apiUrl = environment.apiBaseUrl;

@Component({
  selector: 'app-footer-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./footer-contact.html",
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
