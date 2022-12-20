import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss']
})
export class ItemProductoComponent {
  @Input() datosProducto: any = null;
  @Output() datosActualizados: EventEmitter<boolean> = new EventEmitter();

  emitirEvento() {
    this.datosActualizados.emit(true);
  }
}
