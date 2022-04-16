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
    })
    return this.http.get(url, {headers, responseType: 'text'});
  }

  getQueryReturnObject(query : string, nombre? : string, cedula? : number, tipoMembresia? : number, numeroFactura? : number ){
    const url = `http://localhost:8080/${query}`;
    const headers = new HttpHeaders({
      'nombre'    : `${nombre}`,
      'cedula'    : `${cedula}`,
      'membresia' : `${tipoMembresia}`,
      'numerofactura' : `${numeroFactura}`
    })
    return this.http.get(url, {headers});
  }

  getSociosRegulares(){
      return this.getQuery('getregular')
  }

  registrarSocio(nombre : string, cedula : number, tipoMembresia : number) {
    return this.getQuery('inscribirsocio', nombre, cedula, tipoMembresia)
  }

  getSocioById(cedula : number){
      return this.getQueryReturnObject('obtenerSocioById', null, cedula, null)
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

  registrarConsumo(cedula: number, nombreProducto : string, valor: number, numeroFactura: number){
    const url = `http://localhost:8080/registrarconsumo`;
    const headers = new HttpHeaders({
      'cedula'   : `${cedula}`,
      'consumo' : `${nombreProducto}`,
      'valor' : `${valor}`,
      'numerofactura' : `${numeroFactura}`,
    });
    return this.http.get(url, {headers, responseType: 'text'});

  }

  registrarConsumoPersonaAutorizada(cedulaSocio: number, cedulaPersonaAutorizada: number, nombreProducto : string, valor: number, numeroFactura: number){
    const url = `http://localhost:8080/registrarConsumoPersonaAutorizada`;
    const headers = new HttpHeaders({
      'cedulasocio'   : `${cedulaSocio}`,
      'cedulapersona'   : `${cedulaPersonaAutorizada}`,
      'consumo' : `${nombreProducto}`,
      'valor' : `${valor}`,
      'numerofactura' : `${numeroFactura}`,
    });
    return this.http.get(url, {headers, responseType: 'text'});

  }

  pagarFacturaPersona(cedula : number, cedulaPersona : number,  numeroFactura : number, valor : number){
    const url = `http://localhost:8080/pagarfacturapersona`;
    const headers = new HttpHeaders({
      'cedula'   : `${cedula}`,
      'cedulapersona'   : `${cedulaPersona}`,
      'numerofactura' : `${numeroFactura}`,
      'valor' : `${valor}`
    });
    return this.http.get(url, {headers, responseType: 'text'});
  }

  eliminarPersonaAutorizada(cedula : number, cedulaPersona : number){
    const url = `http://localhost:8080/eliminarpersona`;
    const headers = new HttpHeaders({
      'cedulasocio'   : `${cedula}`,
      'cedulapersona'   : `${cedulaPersona}`,
    });
    return this.http.get(url, {headers, responseType: 'text'});
  }

  eliminarSocio(cedula : number){
    const url = `http://localhost:8080/eliminarsocio`;
    const headers = new HttpHeaders({
      'cedulasocio'   : `${cedula}`,
    });
    return this.http.get(url, {headers, responseType: 'text'});
  }

  agregarFondos(cedula : number, valor: number){
    const url = `http://localhost:8080/agregarfondos`;
    const headers = new HttpHeaders({
      'cedulasocio'   : `${cedula}`,
      'valor'   : `${valor}`,
    });
    return this.http.get(url, {headers, responseType: 'text'});
  }

  verDeuda(cedula : number){
    const url = `http://localhost:8080/verdeuda`;
    const headers = new HttpHeaders({
      'cedulasocio'   : `${cedula}`,
    });
    return this.http.get(url, {headers, responseType: 'text'});
  }
}
