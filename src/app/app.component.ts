import { Component } from '@angular/core';

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
    }]
  }];
}
