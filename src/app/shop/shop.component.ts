import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { Shop } from '../Models/shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shop = new Shop();
  total : number = 0;
  selectedProducts : Product[] = [];

  constructor() { 
    console.log(this.shop)
  }

    ngOnInit(): void {
    }


    add(product : Product){
      this.selectedProducts.push(product)
      this.sum()
  
    }

    sum(){
      this.total = 0
      for(let i = 0; i<=this.selectedProducts.length ; i++){
        this.total = this.total + this.selectedProducts[i].price
      }

    }
}


