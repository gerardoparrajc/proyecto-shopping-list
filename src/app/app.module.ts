import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListaCompraComponent } from './listas-compra/item-lista-compra/item-lista-compra.component';
import { ListasCompraComponent } from './listas-compra/listas-compra.component';
import { ItemProductoComponent } from './productos/item-producto/item-producto.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,

    ListasCompraComponent,
    ItemListaCompraComponent,

    ProductosComponent,
    ItemProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
