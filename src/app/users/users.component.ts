import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubService } from '../services/club.service';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any;
  invoice: any = []
  mensaje : string
 

  constructor(private _clubService : ClubService, private _sharedService : DataSharedService, private router : Router) { }

  ngOnInit(): void {
  }


  obtenerSocio(cedula : string){
    this._clubService.getSocioById(parseInt(cedula)).subscribe(socio => {
      this.user = socio;
      if(this.user == null){
        this.mensaje = "no se ha encontrado un socio con esta cedula";
        return;

      }
      this.invoice = this.user.facturas.filter(Boolean);
      this._sharedService.setUser(this.user);
      this.router.navigate(['/information']);
      
      
      
    });
  }

  setDataUser(){
    return this._sharedService.sharedUSer = this.user;
  }

  setDataInvoice(){
    return this._sharedService.sharedInvoice = this.invoice;
  }

}
