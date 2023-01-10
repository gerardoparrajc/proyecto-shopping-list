import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent {

  constructor(
    private dialog: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public datosProducto: any
  ) { }

  cancelar() {
    this.dialog.close();
  }

}
