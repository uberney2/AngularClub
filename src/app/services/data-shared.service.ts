import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  sharedUSer : any;
  sharedInvoice : any [] = []

  constructor() { 
    console.log(this.sharedUSer)
  }

  setUser(user){
    this.sharedUSer = user;

  }

  setInvoice(Invoices){
    this.sharedInvoice = Invoices;
  }

  getUser(){
    return this.sharedUSer
  }

  getInvoice(){
    return this.sharedInvoice
  }
}
