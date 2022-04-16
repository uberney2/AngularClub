import { Component, OnInit } from '@angular/core';
import { ClubService } from '../services/club.service';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices : any[] = [];
  user : any
  mensaje : string = "";
  authUser : any;
  constructor(private _sharedService : DataSharedService, private _clubService : ClubService) {
    this.invoices = this._sharedService.getInvoice().filter(Boolean);
    this.user = this._sharedService.getUser();
    this.authUser = this._sharedService.getAuthUser();
    console.log(this.invoices)
    console.log(this.user)
    console.log(this.authUser)
   }

  ngOnInit(): void {
    this.invoices = this._sharedService.getInvoice().filter(Boolean);
    this.user = this._sharedService.getUser();
  }

  payInvoice(numeroFactura : number, valor: number){
    if(this.authUser.length == 0){
      this._clubService.pagarFactura(this.user.cedula, numeroFactura).subscribe(resp => {
         this.mensaje = resp;
      })
    }else{
      this._clubService.pagarFacturaPersona( this.authUser.cedula, this.user.cedula,  numeroFactura, valor).subscribe(resp => {
        this.mensaje = resp;
        this._sharedService.setAuthUser([]);
     })
    }
   
  }
}
