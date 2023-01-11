import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  doLogin() {
    console.log(this.loginForm.value);
  }
}
