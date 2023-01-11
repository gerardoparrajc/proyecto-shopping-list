import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  urlServer = 'http://localhost:3000/users';
  private _isAuthenticated: boolean = false;

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

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }
}
