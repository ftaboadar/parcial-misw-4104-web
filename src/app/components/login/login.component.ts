import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // importante en Angular 19 si quieres usarlo sin módulo
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl(""),
  });

  showError: boolean = false; 

  constructor(private router: Router) {}

  onSubmit() {
    const { userName, password } = this.loginForm.value;

    if (userName === 'admin' && password === 'admin') {
      this.router.navigate(['list']);
      this.showError = false; 
    } else {
      this.showError = true;
    }
  }

  onCancel() {
    this.loginForm.reset();
    this.showError = false; 
  }
}
