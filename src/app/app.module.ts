import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { ItemListaCompraComponent } from './listas-compra/item-lista-compra/item-lista-compra.component';
import { ListasCompraComponent } from './listas-compra/listas-compra.component';
import { ItemProductoComponent } from './productos/item-producto/item-producto.component';
import { ProductosComponent } from './productos/productos.component';
import { NuevaListaComponent } from './dialogos/nueva-lista/nueva-lista.component';
import { NuevoProductoComponent } from './dialogos/nuevo-producto/nuevo-producto.component';
import { EditarListaComponent } from './dialogos/editar-lista/editar-lista.component';
import { EliminarListaComponent } from './dialogos/eliminar-lista/eliminar-lista.component';
import { EditarProductoComponent } from './dialogos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './dialogos/eliminar-producto/eliminar-producto.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,

    ListasCompraComponent,
    ItemListaCompraComponent,

    ProductosComponent,
    ItemProductoComponent,
    NuevaListaComponent,
    NuevoProductoComponent,
    EditarListaComponent,
    EliminarListaComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,

    HttpClientModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
