import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-compra',
  templateUrl: './listas-compra.component.html',
  styleUrls: ['./listas-compra.component.scss']
})
export class ListasCompraComponent implements OnInit{
  @Input() listas: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listas);
  }
}
