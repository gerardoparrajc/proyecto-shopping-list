import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  registroForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private autenticacionService: AutenticacionService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repitePassword: ['', [Validators.required, Validators.minLength(5)]]
    }, {
      validator: this.passwordsIguales('password', 'repitePassword')
    });
  }

  doRegistro() {
    const { usuario, password } = this.registroForm.value;
    this.autenticacionService.registro(usuario, password).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.snackBar.open('Te has registrado correctamente. Ya puedes identificarte.', 'Vamos', {
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.router.navigate(['/login']);
        } else {
          this.snackBar.open(response.error, 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
      },
      error: (err: any) => {
        this.snackBar.open('Se ha producido un error. Por favor, inténtalo más tarde', 'Ok');
      }
    });
  }

  passwordsIguales(passA: string, passB: string) {
    return (formGroup: FormGroup) => {
      const controlPassA = formGroup.controls[passA];
      const controlPassB = formGroup.controls[passB];
      if (controlPassA.value !== controlPassB.value) {
        controlPassB.setErrors({ passwordsIguales: true });
      } else {
        controlPassB.setErrors(null);
      }
    }
  }
}
