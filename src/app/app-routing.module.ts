import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'lista-compra', redirectTo: '/', pathMatch: 'full' },
  { path: 'lista-compra/:id', component: ProductosComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
