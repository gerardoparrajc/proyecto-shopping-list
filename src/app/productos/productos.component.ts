import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @Input() listaProductos: any[] = [];

  cuentaProductos: number = 0;

  ngOnInit() {
    this.cuentaProductos = this.listaProductos.length;
  }

  actualizarCuenta() {
    let cuenta = 0;
    for (const producto of this.listaProductos) {
      if (!producto.marcado) {
        cuenta++;
      }
    }

    this.cuentaProductos = cuenta;
  }
}
