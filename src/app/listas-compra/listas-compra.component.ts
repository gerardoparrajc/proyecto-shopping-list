import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listas-compra',
  templateUrl: './listas-compra.component.html',
  styleUrls: ['./listas-compra.component.scss']
})
export class ListasCompraComponent {
  @Input() listas: any[] = [];
  @Input() seleccionada: number = 1;
  @Output() listaSeleccionada: EventEmitter<number> = new EventEmitter<number>();

  seleccionarLista(id: number) {
    this.seleccionada = id;
    this.listaSeleccionada.emit(this.seleccionada);
  }

  estaSeleccionada(id: number): boolean {
    return id === this.seleccionada;
  }

  eliminarListaCompra(idLista: number) {
    const indiceLista = this.listas.findIndex((item: any) => item.id === idLista);
    this.listas.splice(indiceLista, 1);
  }

}
