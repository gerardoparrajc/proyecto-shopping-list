import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListasCompraService {

  urlServer = 'http://localhost:3000/api';
  forzadorActualizacion = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  getListasCompra() {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': sessionStorage.getItem('shopping-list-token') ?? ''
      })
    };
    return this.http.get(`${this.urlServer}/listas-compra`, httpOptions);
  }

  getListaCompra(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': sessionStorage.getItem('shopping-list-token') ?? ''
      })
    };
    return this.http.get(`${this.urlServer}/listas-compra/${id}`, httpOptions);
  }

  createListaCompra(nombreLista: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': sessionStorage.getItem('shopping-list-token') ?? ''
      })
    };
    return this.http.post(`${this.urlServer}/listas-compra`, {
      nombre: nombreLista
    }, httpOptions);
  }

  editListaCompra(idLista: number, nombreLista: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': sessionStorage.getItem('shopping-list-token') ?? ''
      })
    };
    return this.http.put(`${this.urlServer}/listas-compra/${idLista}`, {
      nombre: nombreLista
    }, httpOptions);
  }

  removeListaCompra(idLista: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': sessionStorage.getItem('shopping-list-token') ?? ''
      })
    };
    return this.http.delete(`${this.urlServer}/listas-compra/${idLista}`, httpOptions);
  }

  getProductos(idLista: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': sessionStorage.getItem('shopping-list-token') ?? ''
      })
    };
    return this.http.get(`${this.urlServer}/listas-compra/${idLista}/productos`, httpOptions);
  }

  createProducto(nombreProducto: string, unidadesProducto: number, idLista: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': sessionStorage.getItem('shopping-list-token') ?? ''
      })
    };
    return this.http.post(`${this.urlServer}/listas-compra/${idLista}/productos`, {
      nombre: nombreProducto,
      unidades: unidadesProducto
    }, httpOptions);
  }

  editProducto(idProducto: number, nombreProducto: string, unidadesProducto: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': sessionStorage.getItem('shopping-list-token') ?? ''
      })
    };
    return this.http.put(`${this.urlServer}/productos/${idProducto}`, {
      nombre: nombreProducto,
      unidades: unidadesProducto
    }, httpOptions);
  }

  removeProducto(idProducto: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': sessionStorage.getItem('shopping-list-token') ?? ''
      })
    };
    return this.http.delete(`${this.urlServer}/productos/${idProducto}`, httpOptions);
  }

  forzarActualizacionProductos(idLista: number) {
    this.forzadorActualizacion.next(idLista);
  }

}
