import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  isLoading = false;
  successful = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';
    this.successful = false;

    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    this.isLoading = true;

    this.authService.login(username, password)
      .pipe(
        tap(() => {
          this.isLoading = false;
          this.successful = true;
          this.loginForm.disable();

        }),
        catchError((error) => {
          this.isLoading = false;
          if (error.status === 401) {
            if (error.error === "Usuario no encontrado") {
              this.loginForm.get('username')?.setErrors({ notFound: true });
              this.errorMessage = 'El usuario no existe';
            } else if (error.error === "Contraseña incorrecta") {
              this.loginForm.get('password')?.setErrors({ incorrect: true });
              this.errorMessage = 'La contraseña es incorrecta';
            } else {
              this.errorMessage = 'Credenciales inválidas';
            }
          } else {
            this.errorMessage = 'Error al intentar iniciar sesión';
          }
          
           return throwError(() => error);
         
        })

      )
      .subscribe((res) =>
        this.router.navigate(['/page/taskManager'])
      );
  }

  goToSignup(): void {
    console.log('Navigate to signup');
    // this.router.navigate(['/signup']);
  }
}
