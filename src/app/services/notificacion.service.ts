import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  public url:string;
  constructor(public _http:HttpClient) { 
    this.url = GLOBAL.url;
  }

  obtNotificaciones(id,tipo,page=null):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
  
    return this._http.get(this.url+'obtener-notificacionesMB/'+id+'/'+tipo+'/'+page,{headers:headers});
  }
}
