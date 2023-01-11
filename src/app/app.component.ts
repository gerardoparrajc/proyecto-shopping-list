import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  public listaActiva: number = -1;
  public mostrarFormularios: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private listasCompraService: ListasCompraService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.obtenerListasCompra();

    this.router.events.forEach(e => {
      if (e instanceof NavigationEnd) {
        console.log(this.route.root.firstChild?.snapshot.routeConfig?.path);
        if (
          this.route.root.firstChild?.snapshot.routeConfig?.path === 'login' ||
          this.route.root.firstChild?.snapshot.routeConfig?.path === 'registro'
        ) {
          this.mostrarFormularios = true;
        } else {
          this.mostrarFormularios = false;
          this.obtenerListasCompra();
        }
      }
    });
  }

  private obtenerListasCompra() {
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
          this.addProductoToLista(result.nombre, result.unidades);
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
    this.listasCompraService.createProducto(nombreProducto, unidades, this.listaActiva).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.listasCompraService.forzarActualizacionProductos(this.listaActiva);
        }
      },
      error: (err) => console.log(err)
    });
  }
}
