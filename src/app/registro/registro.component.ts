import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  registroForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder
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
    console.log(this.registroForm.value);
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
