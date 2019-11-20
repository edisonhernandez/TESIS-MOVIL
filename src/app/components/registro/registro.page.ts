import { Component, OnInit } from '@angular/core';
import {UsuarioAdoptante} from '../../models/usuarioAdoptante';
import {UsuarioLogin} from '../../models/UsuarioLogin';
import {UsuarioService} from '../../services/usuario.service';
import {GLOBAL} from '../../services/global';
import * as $ from 'jquery'
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular'; 

import {
  Facebook,
  FacebookLoginResponse
}from '@ionic-native/facebook/ngx';
  import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  providers:[UsuarioService]
})
export class RegistroPage implements OnInit {
  public usuarioAdoptante:UsuarioAdoptante;
  public usuarioAdoptante2:UsuarioAdoptante;

  public usuarioLogin:UsuarioLogin;
  public proFR;
  public proRegistro;

  public status;
  public identity;
  public token;
 
  public url:string;
  public mensaje;
   slideOpts = {
    lock: false,
 
  };
  constructor(private nativeStorage: NativeStorage,private fb: Facebook,private _route:ActivatedRoute,
    private _router:Router, private _usuarioService:UsuarioService,public toastController: ToastController,public loadingController: LoadingController) {
    this.proFR = false;
    this.proRegistro = false;
    this.usuarioAdoptante = new UsuarioAdoptante("","","","","",null,"" );
    this.usuarioAdoptante2 = new UsuarioAdoptante("","","","","",null,"" );

    this.usuarioLogin = new UsuarioLogin("","","","" );

    this.url = GLOBAL.url;
    this.status = false;
   }

  ngOnInit() {
    /*if(this.identity != null){
      this._router.navigate(['tabs']);
    }*/
    this.prob()
  
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position: 'top'
    });
    toast.present();
    
  }
  async presentLoading(loading) {
    return await loading.present();
  }
 
  async registroProcess(){

    const loading = await this.loadingController.create({
      message: 'Verificando...'
    });
   
    this.presentLoading(loading)
   
    this._usuarioService.validUser(this.usuarioAdoptante).subscribe(
      response=>{
       
        if(response.n == '1'){
          loading.dismiss();
          
          this._router.navigate(['registro-proceso',this.usuarioAdoptante.correo,this.usuarioAdoptante.password]);
        }else if(response.n == '2'){
          this.status = true;
          loading.dismiss();
        }
      },
      error=>{
        this.mensaje = error.message
        
        loading.dismiss();
        this.presentToast('Intentalo nuevamente')
        console.log(<any>error)
      }
    )
   
  }


  prob(){

    $("#correo").keyup(()=>{
      this.status = false;
  
  }); 
  }


  async doFbLogin(){
    const loading = await this.loadingController.create({
      message: 'Verificando...'
    });
    this.presentLoading(loading);
    let permissions = new Array<string>();
  
    //the permissions your facebook app needs from the user
    permissions = ["public_profile", "email"];
    this.fb.login(permissions)
    .then(response =>{
      let userId = response.authResponse.userID;
  
      //Getting name and gender properties
      this.fb.api("/me?fields=name,email", permissions)
      .then(user =>{
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        var us = new UsuarioLogin("","","","")
        us.correo = user.email;
        this._usuarioService.validUser(us).subscribe(
          response=>{
           
            if(response.n == '1'){ //no registrado -- empieza proceso automatico de registro
              loading.dismiss();
              this.usuarioAdoptante2._id = response.usuario._id;
              this.usuarioAdoptante2.nombres = user.name;
              this.usuarioAdoptante2.apellidos = "FBA";
              this.usuarioAdoptante2.correo = user.email;
              this.usuarioAdoptante2.password = "FBA";
              this.usuarioAdoptante2.foto = user.picture;
              this.registrarUsuario(this.usuarioAdoptante2);
              
            }else if(response.n == '2'){
                    //existe usuario, proceso de login
                    this.usuarioLogin.correo = user.email
                    this._usuarioService.loginFB(this.usuarioLogin, 'true').subscribe(
                        
                      response=>{
                        var idus = response.usuario._id;
                        this.token = response.token;
                        console.log(this.token)
                        if(this.token.length <= 0 ){
                          this.presentToast('No se pudo guardar el token')
                        }else{
                          
                          //PERSISTIR token del usuario
                          this.nativeStorage.setItem('token',
                          {
                            token: this.token,
                           
                          })
                          .then(() =>{
                            
                            this.nativeStorage.setItem('identity',
                            {
                              id:idus,
                              type:'fb',
                              nombres: user.name,
                              correo: user.email,
                              image: user.picture
                            })
                            .then(() =>{
                              loading.dismiss();   
                              this._router.navigate(['tabs']);       
                            }, error =>{
                              loading.dismiss();
                    
                              this.presentToast('Inténtalo nuevamente');
                            })
                            
                          }, error =>{
                            loading.dismiss();
                    
                            this.presentToast('Inténtalo nuevamente');
                          })
                          
                        }
                      }, error =>{
                        loading.dismiss();
                        var errorMessage = <any>error;
                        this.presentToast('Error token, inténtalo nuevamente.');
                    
                      })
  
            }
          },
          error=>{
            this.mensaje = error.message
            
            loading.dismiss();
            this.presentToast('Intentalo nuevamente')
            console.log(<any>error)
          }
        )
  
      });
  
    }, error =>{
      loading.dismiss();
      this.presentToast('ERROR, inténtalo nuevamente')
    });
  }
  async registrarUsuario(usuarioAdoptante){
    const loading = await this.loadingController.create({
      message: 'Creando tu cuenta...'
    });
  
   
    this.presentLoading(loading)
   
    this._usuarioService.registro(usuarioAdoptante).subscribe(
      response=>{
        if(response.n == '1'){
          this.usuarioLogin.correo = usuarioAdoptante.correo;
        this.usuarioLogin.password = usuarioAdoptante.password;
  
          this._usuarioService.loginFB(this.usuarioLogin,"true").subscribe(
            response=>{
      this.token = response.token;
      console.log(this.token)
      if(this.token.length <= 0 ){
        this.presentToast('No se pudo guardar el token')
      }else{
        
        //PERSISTIR token del usuario
        this.nativeStorage.setItem('token',
        {
          token: this.token,
         
        })
        .then(() =>{
          
          this.nativeStorage.setItem('identity',
          {
            nombres: usuarioAdoptante.nombres,
            correo: usuarioAdoptante.correo,
            image:  usuarioAdoptante.foto
          })
          .then(() =>{
            loading.dismiss();   
            this._router.navigate(['tabs']);       
          }, error =>{
            loading.dismiss();
  
            this.presentToast('Inténtalo nuevamente');
          })
          
        }, error =>{
          loading.dismiss();
  
          this.presentToast('Inténtalo nuevamente');
        })
        
      }
            },
            error=>{
              loading.dismiss();
              this.presentToast('Error token, inténtalo nuevamente')
            }
          )
        }
  
      },
      error=>{
        loading.dismiss();
        this.presentToast('Error al registrar, inténtalo nuevamente')
      }
    )
  }
}
