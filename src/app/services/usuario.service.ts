import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UsuarioLogin} from '../models/UsuarioLogin';
import {UsuarioAdoptante} from '../models/usuarioAdoptante';
import{FileTransfer,FileUploadOptions} from '@ionic-native/file-transfer/ngx'

import {Router, ActivatedRoute, Params} from '@angular/router';
import {GLOBAL} from './global';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url:string;
  public identity;
  public token;
  constructor(private transfer:FileTransfer,public _http:HttpClient,private _route:ActivatedRoute,
    private _router:Router) {
      this.url = GLOBAL.url;
     }

      
   login(usuario:UsuarioLogin, gettoken = null):Observable<any>{
    if(gettoken != null){
      usuario.gettoken = gettoken;

    }
    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'login-mobile', params, {headers:headers});

  }
  loginFB(usuario:UsuarioLogin, gettoken = null):Observable<any>{
    if(gettoken != null){
      usuario.gettoken = gettoken;

    }
    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'login-mobileFB', params, {headers:headers});

  }     
  registro(usuario:UsuarioAdoptante):Observable<any>{
    
    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'registrarAdoptanteFB', params, {headers:headers});

  }
  obtUsuario(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
  
    return this._http.get(this.url+'usuario/'+id,{headers:headers});
  }
uploadUser(img,user){
    let url = this.url + 'registrarAdoptante';
    var options:FileUploadOptions={
        fileKey:'foto',
        chunkedMode:false,
        mimeType:'multipart/form-data',
        params:user
    }
    const fileTransfer = this.transfer.create();
    return fileTransfer.upload(img,url,options)
}
 validUser(usuario):Observable<any>{
    
    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'valid-usuario', params, {headers:headers});

  }
  errrp(errp):Observable<any>{
    
    let params = JSON.stringify(this.errrp);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'errorprueba', params, {headers:headers});

  }
  obtIdentity(){
    let identity = JSON.parse(localStorage.getItem('identityMobile')); 
    
    if(identity != "undefined"){
        this.identity = identity;
    }else{
        this.identity = null;
    }

    return this.identity;
}

obtToken(){
  let token = localStorage.getItem('token'); 
  
  if(token != "undefined"){
      this.token = token;
  }else{
      this.token = null;
  }
  return this.token;
}
obtUsuariosRol(page=null,rol):Observable<any>{
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.get(this.url+'obtener-usuarios-rol/'+rol+'/'+page,{headers:headers});
}
}
