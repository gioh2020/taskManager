import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  get form() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;


    if (this.loginForm.invalid) {
      return;
    }

    console.log('Login successful', this.loginForm.value);


    // this.router.navigate(['/dashboard']);
  }




  goToSignup(): void {

    console.log('Navigate to signup');
    // this.router.navigate(['/signup']);
  }

}
