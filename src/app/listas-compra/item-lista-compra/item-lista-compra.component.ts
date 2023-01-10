import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarListaComponent } from 'src/app/dialogos/editar-lista/editar-lista.component';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-item-lista-compra',
  templateUrl: './item-lista-compra.component.html',
  styleUrls: ['./item-lista-compra.component.scss']
})
export class ItemListaCompraComponent {
  @Input() datosLista: any = null;

  constructor(
    private dialog: MatDialog,
    private listasComprarService: ListasCompraService
  ) { }

  onClick(event: any) {
    event.stopPropagation();
  }

  abrirEditarLista(idLista: number) {
    const dialog = this.dialog.open(EditarListaComponent, {
      data: this.datosLista.nombre
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.trim() !== '') {
        this.listasComprarService.editListaCompra(idLista, result).subscribe({
          next: (response: any) => {
            if (response && response.success) {
              this.datosLista.nombre = result;
            }
          },
          error: (err) => console.log(err)
        });
      }
    });
  }
}
