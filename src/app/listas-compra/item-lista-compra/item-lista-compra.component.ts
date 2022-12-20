import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-lista-compra',
  templateUrl: './item-lista-compra.component.html',
  styleUrls: ['./item-lista-compra.component.scss']
})
export class ItemListaCompraComponent {
  @Input() datosLista: any = null;
}
