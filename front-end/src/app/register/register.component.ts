import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    // Crear el formulario reactivo
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      // Validar que las contraseñas coincidan
      if (formData.password !== formData.confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }

      // Enviar datos al backend
      this.http
        .post('http://localhost:8080/auth/register', formData, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .subscribe(
          (response) => {
            
            this.router.navigate(['/login']);
          },
          (error) => {
            alert('Ocurrió un error');
            console.error(error);
          }
        );
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
