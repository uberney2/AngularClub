import { Component, OnInit } from '@angular/core';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private _clubService : ClubService) { }

  ngOnInit(): void {
  }

  answer : string;

  registrarSocio(nombre : string, apellido : string, cedula : string, tipoMembresia : string){
    nombre = nombre +" " + apellido;
    if(tipoMembresia == "VIP"){
      tipoMembresia = "1";
    }else if(tipoMembresia == "Regular"){
      tipoMembresia = "2";
    }

    this._clubService.registrarSocio(nombre,  parseInt(cedula), parseInt(tipoMembresia)).subscribe(respuesta =>{
      this.answer = respuesta
      console.log(this.answer);
    });   
  }

}
