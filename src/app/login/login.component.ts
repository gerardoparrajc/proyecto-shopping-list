import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private autenticacionService: AutenticacionService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  doLogin() {
    const { usuario, password } = this.loginForm.value;
    this.autenticacionService.login(usuario, password).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          sessionStorage.setItem('shopping-list-token', response.data);
          this.autenticacionService.isAuthenticated = true;
          this.router.navigate(['/lista-compra']);
        } else {
          this.snackBar.open(response.error, 'Ok');
        }
      },
      error: (err) => {
        this.snackBar.open('Usuario o contraseña incorrectos.', 'Ok');
      }
    })
  }
}
