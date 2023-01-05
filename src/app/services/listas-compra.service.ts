import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListasCompraService {

  urlServer = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getListasCompra() {
    return this.http.get(`${this.urlServer}/listas-compra`);
  }

  getListaCompra(id: number) {
    return this.http.get(`${this.urlServer}/listas-compra/${id}`);
  }

  createListaCompra(nombreLista: string) {
    return this.http.post(`${this.urlServer}/listas-compra`, {
      nombre: nombreLista
    });
  }

  editListaCompra(idLista: number, nombreLista: string) {
    return this.http.put(`${this.urlServer}/listas-compra/${idLista}`, {
      nombre: nombreLista
    });
  }

  removeListaCompra(idLista: number) {
    return this.http.delete(`${this.urlServer}/listas-compra/${idLista}`);
  }

  createProducto(nombreProducto: string, unidadesProducto: number, idLista: number) {
    return this.http.post(`${this.urlServer}/listas-compra/${idLista}/productos`, {
      nombre: nombreProducto,
      unidades: unidadesProducto
    });
  }

  editProducto(idProducto: number, nombreProducto: string, unidadesProducto: number) {
    return this.http.put(`${this.urlServer}/productos/${idProducto}`, {
      nombre: nombreProducto,
      unidades: unidadesProducto
    });
  }

  removeProducto(idProducto: number) {
    return this.http.delete(`${this.urlServer}/productos/${idProducto}`);
  }
}
