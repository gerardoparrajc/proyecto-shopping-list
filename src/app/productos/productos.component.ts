import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListasCompraService } from '../services/listas-compra.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit, DoCheck {
  listaProductos: any[] = [];
  cuentaProductos: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listasCompraService: ListasCompraService
  ) { }

  ngOnInit(): void {

    const idLista = this.route.snapshot.params['id'];
    if (isNaN(idLista)) {
      this.router.navigate(['']);
      return;
    }

    this.cargarProductos(idLista);

    this.route.params.subscribe({
      next: (params) => {
        if (isNaN(params['id'])) {
          this.router.navigate(['']);
        } else {
          this.cargarProductos(params['id']);
        }
      }
    });

    this.listasCompraService.forzadorActualizacion.subscribe({
      next: (idLista: number) => this.cargarProductos(idLista)
    });
  }

  ngDoCheck(): void {
    this.actualizarCuenta();
  }

  cargarProductos(idLista: number) {
    this.listasCompraService.getProductos(idLista).subscribe({
      next: (resultado: any) => {
        if (resultado && resultado.success) {
          this.listaProductos = resultado.data;
          this.cuentaProductos = this.listaProductos.length;
        }
      },
      error: (err) => console.log(err)
    });
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

  eliminarProducto(idProducto: number) {
    const indiceProducto = this.listaProductos.findIndex((producto: any) => producto.id === idProducto);
    this.listaProductos.splice(indiceProducto, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listaProductos, event.previousIndex, event.currentIndex);
  }
}
