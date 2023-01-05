import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
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

  constructor(private breakpointObserver: BreakpointObserver, private listasCompraService: ListasCompraService) { }

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
}
