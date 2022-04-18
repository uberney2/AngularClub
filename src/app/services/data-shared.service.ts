import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  sharedUSer : any;
  sharedInvoice : any [] = []
  sharedAuthService : any[]= []
  sharedSelectedAdditions : any[] = []

  constructor() { 
    console.log(this.sharedUSer)
  }

  setUser(user){
    this.sharedUSer = user;

  }

  setAdditions(additions){
    this.sharedSelectedAdditions = additions;
  }

  setInvoice(Invoices){
    this.sharedInvoice = Invoices;
  }

  getUser(){
    return this.sharedUSer
  }

  getAdditions(){
    return this.sharedSelectedAdditions;
  }

  getInvoice(){
    return this.sharedInvoice
  }

  getAuthUser(){
    return this.sharedAuthService
  }
  setAuthUser(authUser){
    this.sharedAuthService = authUser;
  }
}
