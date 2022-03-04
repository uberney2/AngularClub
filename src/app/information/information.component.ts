import { Component, OnInit } from '@angular/core';
import { DataSharedService } from '../services/data-shared.service';
import { ClubService } from '../services/club.service';
import { last } from 'rxjs';
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

  constructor(private _sharedService : DataSharedService, private _clubService : ClubService, private router : Router ) { 
    this.user = this._sharedService.getUser();
    this.cutFullName(this.user.nombre);
    this.getAuthUsers()
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

  
}

