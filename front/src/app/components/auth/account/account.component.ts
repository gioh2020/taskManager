import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, delay, tap, timer, throwError } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  accountForm: FormGroup;
  submitted = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  succesful: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { 
    this.accountForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordValid: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';
    
    if (this.accountForm.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos correctamente';
      return;
    }

    const {username, password, passwordValid} = this.accountForm.value;

    if(password !== passwordValid) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    this.isLoading = true;
    const userData = { username, password };

    this.authService.createAccount(userData).pipe(
      tap(() => {
        this.isLoading = false;
        this.errorMessage = '';
        this.succesful = true;
        
      }),
      catchError((error) => {
        this.isLoading = false;

        const errorMsg = error?.error || '';
        
        if ( errorMsg === 'El nombre de usuario ya está registrado') {
          this.errorMessage = 'Este nombre de usuario ya está registrado';
          this.accountForm.get('username')?.setErrors({ 'duplicated': true });
        } else if (error.status === 400) {
          this.errorMessage = error.error?.message || 'Datos inválidos';
        } else if (error.status === 500) {
          this.errorMessage = 'Error en el servidor';
        } else {
          this.errorMessage = 'Error al crear la cuenta';
        }

        return throwError(() => error);
      })
    ).subscribe((res)=>{
      this.router.navigate(['/auth/login']);}

    );
  }
}
