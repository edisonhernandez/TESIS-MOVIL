import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Mascota} from '../models/mascota';
import {Adopcion} from '../models/adopcion';

import {Filtro} from '../models/filtro';
import {GLOBAL} from './global';
@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  public url:string;
  public identity;
  public filtro;
  public filtroFnd;
  public token;
  constructor(public _http:HttpClient) { 
    this.url = GLOBAL.url;
  }


  obtMascotass(page=1):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+'obtener-mascotas/'+page, {headers:headers});
  }

  obtMascota(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+'obtener-mascota/'+id, {headers:headers});
  }

 

  obtFotosMascotas(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+'obtener-fotos-mascota/'+id, {headers:headers});
  }


filtroMascotas(filtro:any,page = 1):Observable<any>{
  let params = JSON.stringify(filtro);
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.post(this.url+'filtro-mascotas/'+page, params,{headers:headers});
}
filtroMascotas2(id,filtro:any,page = 1):Observable<any>{
  let params = JSON.stringify(filtro);
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.post(this.url+'filtro-mascotas2/'+id+'/'+page, params,{headers:headers});
}
obtFiltro(){
  let filtro = JSON.parse(localStorage.getItem('busquedaMascotas2')); 
  
  if(filtro != "undefined"){
      this.filtro = filtro;
  }else{
      this.filtro = null;
  }

  return this.filtro;
}
obtFiltroMascotasFundacion(){
  let filtro = JSON.parse(localStorage.getItem('busquedaMascotasFnd')); 
  
  if(filtro != "undefined"){
      this.filtroFnd = filtro;
  }else{
      this.filtroFnd = null;
  }

  return this.filtroFnd;
}

registroAdopcion(fid,mid,adopcion:Adopcion,token):Observable<any>{
    
  let params = JSON.stringify(adopcion);
  let headers = new HttpHeaders().set('Content-Type','application/json')
                                  .set('Authorization',token);
  return this._http.post(this.url+'nueva-adopcion/'+fid+'/'+mid, params, {headers:headers});

}
comprobarAdopcion(id,idm):Observable<any>{
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.get(this.url+'comprobar-adopcion/'+id+'/'+idm, {headers:headers});
}
}

