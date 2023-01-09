import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, shareReplay } from 'rxjs';
import { NuevaListaComponent } from './dialogos/nueva-lista/nueva-lista.component';
import { NuevoProductoComponent } from './dialogos/nuevo-producto/nuevo-producto.component';
import { ListaCompra } from './models/lista-compra';
import { Producto } from './models/producto';
import { ListasCompraService } from './services/listas-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public datos = [];
  public listaActiva:number = -1;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private listasCompraService: ListasCompraService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listasCompraService.getListasCompra().subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.success) {
          this.datos = response.data;
        }
      },
      error: (err) => console.log(err)
    });
  }

  seleccionarLista(id: number) {
    this.listaActiva = id;
  }

  getProductos(idLista: number): Producto[] {
    const lista = this.datos.find(
      (valor: ListaCompra) => {
        return valor.id === idLista;
      }
    );
    if (lista) {
      return (lista as ListaCompra).Productos;
    }
    return [];
  }

  abrirDialogoNuevaLista() {
    const dialog = this.dialog.open(NuevaListaComponent);
    dialog.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.createListaCompra(result);
        }
      },
      error: (err) => console.log(err)
    });
  }

  abrirDialogoNuevoProducto() {
    const dialog = this.dialog.open(NuevoProductoComponent);
    dialog.afterClosed().subscribe({
      next: (result) => {
        console.log(result);
        if (result) {
          this.addProductoToLista(result.nombreProducto, result.unidades);
        }
      },
      error: (err) => console.log(err)
    });
  }

  createListaCompra(nombreLista: string) {
    this.listasCompraService.createListaCompra(nombreLista).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.datos = response.data;
        }
      },
      error: (err) => console.log(err)
    });
  }

  addProductoToLista(nombreProducto: string, unidades: number) {

  }
}
