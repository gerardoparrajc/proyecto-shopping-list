import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  urlServer = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string) {
    return this.http.post(`${this.urlServer}/login`, {
      usuario: usuario,
      password: password
    });
  }

  registro(usuario: string, password: string) {
    return this.http.post(`${this.urlServer}/register`, {
      usuario: usuario,
      password: password
    });
  }
}
