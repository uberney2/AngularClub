import { Component, OnInit } from '@angular/core';
import { DataSharedService } from '../services/data-shared.service';
import { ClubService } from '../services/club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {


  user: any ;
  invoice: any [] = [];
  userName: string;
  lastName : string; 
  autUsers : any [] = [];
  mensaje : string = "";
  debt : string;

  constructor(private _sharedService : DataSharedService, private _clubService : ClubService, private router : Router ) { 
    this.user = this._sharedService.getUser();
    this.cutFullName(this.user.nombre);
    this.getAuthUsers()
    console.log(this.user)
  }

  ngOnInit(): void {
    
  }

  cutFullName(name : string){
    var splitName = name.split(" ");
    this.userName = splitName[0];
    this.lastName = splitName[1];
    console.log(this.lastName)

  }

  saveAuthUser(name : string, lastName : string, identification: string){

    console.log(name + lastName + identification)
    name = name + " " + lastName

    this._clubService.inscribirPersona(parseInt(this.user.cedula), parseInt(identification), name).subscribe(res => {
      console.log(res);
    });

  }

  getAuthUsers(){
    this.autUsers = this.user.personasAutorizadas.filter(Boolean)
  }

  goToInvoice(){
    this._sharedService.setInvoice(this.user.facturas)
    this.router.navigate(['/invoice']);
  }

  goToInvoicePerson(){
    this._sharedService.setInvoice(this.autUsers[0].facturas)
    this._sharedService.setUser(this.autUsers[0]);
    this._sharedService.setAuthUser (this.user);
    this.router.navigate(['/invoice']);
  }

  goToShop(){
    this.router.navigate(['/shop']);
  }

  goToPersonShop(){
    this._sharedService.setAuthUser(this.autUsers);
    this.router.navigate(['/shop']);
  }

  eliminarPersonaAutorizada(cedula : number){
    this._clubService.eliminarPersonaAutorizada(this.user.cedula, cedula).subscribe(resp =>{
      console.log(resp);
      this.mensaje = resp;
    })
  }

  eliminarSocio(){
    this._clubService.eliminarSocio(this.user.cedula).subscribe(resp => {
      console.log(resp)
      this.mensaje = resp;
    })
    
  }

  addFounds(value : string){
    console.log(value)
    this._clubService.agregarFondos(this.user.cedula, parseInt(value, 10)).subscribe(resp => {
      console.log(resp);
      this.mensaje = resp;
    })

  }

  showTotalDebt(){
    this._clubService.verDeuda(this.user.cedula).subscribe(resp => {
      this.debt = resp;
    })

  }

  
}

