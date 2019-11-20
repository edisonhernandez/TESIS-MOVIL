import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UsuarioLogin} from '../../models/UsuarioLogin';
import {UsuarioAdoptante} from '../../models/usuarioAdoptante';

import {UsuarioService} from '../../services/usuario.service';
import {GLOBAL} from '../../services/global';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';

import {
  Facebook,
  FacebookLoginResponse
}

  from '@ionic-native/facebook/ngx';
  import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[UsuarioService,Facebook]
})
export class LoginPage implements OnInit {
  public usuarioLogin:UsuarioLogin;
  public usuarioLogin2:UsuarioLogin;

  public usuarioAdoptante:UsuarioAdoptante;
  public usuarioAdoptante2:UsuarioAdoptante;

  public status:string;
  public identity;
  public token;
  public proLogin;
  public url:string;
  public mensaje;
  constructor(private nativeStorage: NativeStorage,
		public loadingController: LoadingController,private fb: Facebook,private _route:ActivatedRoute,
    private _router:Router, private _usuarioService:UsuarioService,public toastController: ToastController,public alertController: AlertController) {
      this.proLogin = false;
      this.usuarioLogin = new UsuarioLogin("","","","" );
      this.usuarioLogin2 = new UsuarioLogin("","","","" );

      this.usuarioAdoptante= new UsuarioAdoptante("","","","","",null,"" );
      this.usuarioAdoptante2= new UsuarioAdoptante("","","","","",null,"" );

      this.identity = this._usuarioService.obtIdentity();
      this.url = GLOBAL.url;
      this.mensaje = "inicio"
     }

  ngOnInit() {
    /*if(this.identity != null){
      this._router.navigate(['tabs']);
    }*/
  }
  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position: 'top'
    });
    toast.present();
    
  }
  async presentAlertConfirm(user) {
    const alert = await this.alertController.create({
      header: 'Confirmar cuenta',
      message: 'Hola'+'<strong>'+user.name+'</strong>'+' tu cuenta de facebook no coinciden con nuestros registros. Deseas crear una cuenta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sí',
          handler: () => {
            this.presentToast('proceso de registro')
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert(er,msj) {
    const alert = await this.alertController.create({
      header: er,
      subHeader: 'Subtitle',
      message: msj,
      buttons: ['OK']
    });

    await alert.present();
  }
async login(){
  const loading = await this.loadingController.create({
    message: 'Verificando...'
  });
  this.presentLoading(loading);
    
    this._usuarioService.login(this.usuarioLogin).subscribe(
      
      response=>{

        if(response.usuario && response.n == '3'){
          console.log("entro")
        this.usuarioAdoptante2._id = response.usuario._id;
        this.presentToast(this.usuarioAdoptante2._id)

         this.usuarioAdoptante2.nombres = response.usuario.nombres;
         this.usuarioAdoptante2.apellidos = response.usuario.apellidos;
         this.usuarioAdoptante2.correo = response.usuario.correo;
         this.usuarioAdoptante2.edad = response.usuario.edad;
         this.usuarioAdoptante2.foto = response.usuario.foto;
          this._usuarioService.login(this.usuarioLogin, 'true').subscribe(
                      
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
                    id:this.usuarioAdoptante2._id,
                    type:'n',
                    nombres: this.usuarioAdoptante2.nombres,
                    apellidos:this.usuarioAdoptante2.apellidos,
                    correo: this.usuarioAdoptante2.correo,
                    image: this.usuarioAdoptante2.foto
                  })
                  .then(() =>{
                    loading.dismiss();   
                    this.presentToast(this.usuarioAdoptante2._id+" oken")
                    this._router.navigate(['tabs']);       
                  }, error =>{
                    loading.dismiss();
          
                    this.presentToast('Inténtalo nuevamente5');
                  })
                  
                }, error =>{
                  console.log(<any>error)
                  loading.dismiss();
          
                  this.presentToast('Inténtalo nuevamente8');
                  this._router.navigate(['tabs']);    
                })
                
              }
            }, error =>{
              loading.dismiss();
              var errorMessage = <any>error;
              this.presentToast('Error token, inténtalo nuevamente.');
          
            })

           
        }else if(response.n == '2'){
          loading.dismiss();

          this.presentToast('Correo o contraseña incorrectos')
          
        }
      }, 
      error =>{
        loading.dismiss();
        var errorMessage = <any>error;
        this.mensaje = error.message
        if(error.error.n == '0' || error.error.n == '1' ){
          this.presentToast('Correo o contraseña incorrectos')
        }else if(error.error.n == '5'){
          this.presentToast('Error, intentalo nuevamente2')
        }
      }
    )
  }


loginFacebook() {
 
  const rs = this.fb.login(['public_profile', 'email'])
  .then((res: FacebookLoginResponse) => this.presentAlert('success',res)
  )
  .catch(e => this.presentAlert('error1',e)
  );
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
         var idus = response.usuario._id;
          if(response.n == '1'){ //no registrado -- empieza proceso automatico de registro
            loading.dismiss();
            this.usuarioAdoptante.nombres = user.name;
            this.usuarioAdoptante.apellidos = "FBA";
            this.usuarioAdoptante.correo = user.email;
            this.usuarioAdoptante.password = "FBA";
            this.usuarioAdoptante.foto = user.picture;
            this.registrarUsuario(this.usuarioAdoptante);
            
          }else if(response.n == '2'){//si el usuario ya existe
                  //CONSEGUIR EL TOKEN
                  this.usuarioLogin2.correo = user.email
                  this._usuarioService.loginFB(this.usuarioLogin2, 'true').subscribe(
                      
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


async presentLoading(loading) {
  return await loading.present();
}

async registrarUsuario(usuarioAdoptante){
  const loading = await this.loadingController.create({
    message: 'Creando tu cuenta...'
  });

 
  this.presentLoading(loading)
 
  this._usuarioService.registro(usuarioAdoptante).subscribe(
    response=>{
      if(response.n == '1'){
        this.usuarioLogin2.correo = usuarioAdoptante.correo;
      this.usuarioLogin2.password = usuarioAdoptante.password;

        this._usuarioService.loginFB(this.usuarioLogin2,"true").subscribe(
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
