import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit, DoCheck {
  @Input() listaProductos: any[] = [];
  cuentaProductos: number = 0;

  ngOnInit() {
    this.actualizarCuenta();
  }

  ngDoCheck(): void {
    this.actualizarCuenta();
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listaProductos, event.previousIndex, event.currentIndex);
  }
}
