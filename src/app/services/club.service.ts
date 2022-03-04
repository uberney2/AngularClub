import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http : HttpClient) { }

  getQuery(query : string, nombre? : string, cedula? : number, tipoMembresia? : number, numeroFactura? : number ){
    const url = `http://localhost:8080/${query}`;
    const headers = new HttpHeaders({
      'nombre'    : `${nombre}`,
      'cedula'    : `${cedula}`,
      'membresia' : `${tipoMembresia}`,
      'numerofactura' : `${numeroFactura}`
    });
    return this.http.get(url, {headers});
  }

  getSociosRegulares(){
      return this.getQuery('getregular')
  }

  registrarSocio(nombre : string, cedula : number, tipoMembresia : number){
    return this.getQuery('inscribirsocio', nombre, cedula, tipoMembresia)
  }

  getSocioById(cedula : number){
      return this.getQuery('obtenerSocioById', null, cedula, null)
  }

  pagarFactura(cedula : number, numeroFactura : number){
    return this.getQuery('pagarfactura', null, cedula, null, numeroFactura)
  }

  inscribirPersona(cedulaSocio : number, cedulaPersona: number, nombrePersona : string){
    const url = `http://localhost:8080/inscribirpersona`;
    const headers = new HttpHeaders({
      'cedulasocio'   : `${cedulaSocio}`,
      'cedulapersona' : `${cedulaPersona}`,
      'nombrepersona' : nombrePersona
    });
    return this.http.get(url, {headers});
  }
}
