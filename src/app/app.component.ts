import { Component } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public datos = [{
    id: 1,
    nombre: 'Mercadona',
    productos: [{
      id: 1,
      nombre: 'Leche',
      cantidad: 2,
      idLista: 1,
      marcado: false
    }, {
      id: 2,
      nombre: 'Jamón',
      cantidad: 8,
      idLista: 1,
      marcado: true
    }]
  }, {
    id: 2,
    nombre: 'Aldi',
    productos: [{
      id: 3,
      nombre: 'Queso',
      cantidad: 5,
      idLista: 2,
      marcado: false
    }, {
      id: 4,
      nombre: 'Salchichón',
      cantidad: 1,
      idLista: 2,
      marcado: false
    }, {
      id: 5,
      nombre: 'Pan de molde',
      cantidad: 2,
      idLista: 2,
      marcado: false
    }]
  }];
  public listaActiva = 1;

  seleccionarLista(id: number) {
    this.listaActiva = id;
  }

  getProductos(idLista: number): Producto[] {
    const lista = this.datos.find(
      (valor) => {
        return valor.id === idLista;
      }
    );

    if (lista) {
      return lista.productos;
    }

    return [];

  }
}
