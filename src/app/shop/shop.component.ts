import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { Product } from '../Models/Product';
import { Shop } from '../Models/shop';
import { ClubService } from '../services/club.service';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shop = new Shop();
  total : number = 0;
  selectedProducts : Product[] = [];
  user: any ;
  mensaje : string = "";
  authPerson : any = null ;

  constructor(private _sharedService : DataSharedService, private _clubService : ClubService) {
    this.user = this._sharedService.getUser();
    this.authPerson = this._sharedService.getAuthUser();
    console.log(this.user);
    console.log(this.authPerson[0]);
  }

    ngOnInit(): void {
    }


    add(product : Product){
      this.selectedProducts.push(product)
      this.sumPrice()
      this.mensaje= "";

    }

    sumPrice(){
      this.total = 0
      for(let i = 0; i<=this.selectedProducts.length ; i++){
        this.total = this.total + this.selectedProducts[i].price
      }

    }

    deleteProduct(product : Product){
        this.selectedProducts = this.selectedProducts.filter((item) => item.id !== product.id);
        this.sumPrice()
        this.mensaje= "";
    }

    buy(){
      console.log(this.authPerson)
      if(this.authPerson.length == 0){
        this.selectedProducts.forEach(product => {
          this._clubService.registrarConsumo(this.user.cedula, product.name, product.price, product.id ).subscribe(resp => {
            this.mensaje = resp;
          })
        })
      }
      else{
        this.selectedProducts.forEach(product => {
          console.log("entre aca")
          this._clubService.registrarConsumoPersonaAutorizada(this.user.cedula, this.authPerson[0].cedula, product.name, product.price, product.id ).subscribe(resp => {
            this.mensaje = resp;
            this.authPerson = [];
            this._sharedService.setAuthUser([])
            console.log(this.authPerson)
          })
        })
      }
      
    }
}


