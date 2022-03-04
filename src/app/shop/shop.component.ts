import { Component, OnInit } from '@angular/core';

interface product{
  name: string;
  precio: number;
}


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name: "papas"
precio: "1000"

  guardar(){

console.log("compra")
  }
}


