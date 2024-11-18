import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  isBrowser: boolean = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object

  ) {
    // Crear el formulario reactivo
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      // Enviar datos al backend
      this.http
        .post('http://localhost:8080/auth/login', formData, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .subscribe(
          (response) => {
            const user: User = response as User;
            // Guardar token en localStorage
            if (this.isBrowser) {
              localStorage.setItem('token', user.id.toString());
              console.log('Token guardado:', user.id);
            }

            console.log('Usuario login:', user);
            // Redirigir a la página
            if (user.role === "admin" ) {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/']);
            }
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
