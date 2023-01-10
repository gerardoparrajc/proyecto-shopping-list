import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarProductoComponent } from 'src/app/dialogos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from 'src/app/dialogos/eliminar-producto/eliminar-producto.component';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss']
})
export class ItemProductoComponent {
  @Input() datosProducto: any = null;
  @Output() datosActualizados: EventEmitter<boolean> = new EventEmitter();
  @Output() productoEliminado: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private listasCompraService: ListasCompraService,
    private dialog: MatDialog
  ) { }

  emitirEvento() {
    this.datosActualizados.emit(true);
  }

  onClick(event: any) {
    event.stopPropagation();
  }

  abrirEditarProducto(idProducto: number) {
    const dialog = this.dialog.open(EditarProductoComponent, {
      data: {
        nombre: this.datosProducto.nombre,
        unidades: this.datosProducto.unidades
      }
    });
    dialog.afterClosed().subscribe({
      next: result => {
        if (result) {
          this.listasCompraService.editProducto(idProducto, result.nombre, result.unidades).subscribe({
            next: (response: any) => {
              if (response && response.success) {
                this.datosProducto.nombre = result.nombre;
                this.datosProducto.unidades = result.unidades;
              }
            },
            error: (err) => console.log(err)
          })
        }
      },
      error: (err) => console.log(err)
    });
  }
  abrirEliminarProducto(idProducto: number) {
    const dialog = this.dialog.open(EliminarProductoComponent);
    dialog.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.listasCompraService.removeProducto(idProducto).subscribe({
            next: (response: any) => {
              if (response && response.success) {
                this.productoEliminado.emit(idProducto);
              }
            }
          })
        }
      }
    })
  }
}
