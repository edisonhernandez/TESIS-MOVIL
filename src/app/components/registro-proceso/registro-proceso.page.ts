import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsuarioAdoptante} from '../../models/usuarioAdoptante';
import {UsuarioLogin} from '../../models/usuarioLogin';

import {UsuarioService} from '../../services/usuario.service';
import {UploadService} from '../../services/upload.service';

import {GLOBAL} from '../../services/global';
import * as $ from 'jquery'
import {Router, Params} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-registro-proceso',
  templateUrl: './registro-proceso.page.html',
  styleUrls: ['./registro-proceso.page.scss'],
  providers:[UsuarioService/*,UploadService*/]
})
export class RegistroProcesoPage implements OnInit {
  image:any=''
  public url:string;
  public mensaje:any;
  public token;
  public in:any;
  public usuarioAdoptante:UsuarioAdoptante;
  public usuarioLogin;
  constructor(/*public _uploadService:UploadService,*/private nativeStorage: NativeStorage,public actionSheetController: ActionSheetController,private camera: Camera,private activeRoute:ActivatedRoute,private _route:ActivatedRoute,
    private _router:Router, private _usuarioService:UsuarioService,public toastController: ToastController,public loadingController: LoadingController) { 
    this.usuarioAdoptante = new UsuarioAdoptante("","","","","",null,"" );
    this.usuarioLogin = new UsuarioLogin("","","","");

    this.url = GLOBAL.url;

  }

  ngOnInit() {
    this.usuarioAdoptante.correo = this.activeRoute.snapshot.paramMap.get('user');
    this.usuarioAdoptante.password = this.activeRoute.snapshot.paramMap.get('pass');

   
  }
  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position: 'top'
    });
    toast.present();
    
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccionar foto',
      buttons: [ {
        text: 'Cámara',
        icon: 'camera',
        handler: () => {
          this.openCam()
        }
      }, {
        text: 'Galería',
        icon: 'image',
        handler: () => {
          this.openGallery()
        }
      }]
    });
    await actionSheet.present();
  }

  openCam(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
     this.mensaje = imageData
         this.usuarioAdoptante.foto = imageData;
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });

  }
  openGallery(){
    const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
    
      this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.mensaje = imageData
         this.usuarioAdoptante.foto = imageData;
         }, (err) => {
           // Handle error
         })
}
async presentLoading(loading) {
  return await loading.present();
}
async registrarUsuario(){
  const loading = await this.loadingController.create({
    message: 'Creando tu cuenta...'
  });
 
 
  this.presentLoading(loading)
 
  this._usuarioService.uploadUser(this.mensaje,this.usuarioAdoptante).then(
    response=>{ 
      
      this.usuarioLogin.correo = this.usuarioAdoptante.correo;
      this.usuarioLogin.password = this.usuarioAdoptante.password;

      
this._usuarioService.login(this.usuarioLogin, 'true').subscribe(
    
  response=>{
    this.usuarioAdoptante._id = response.usuario._id;
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
          id:this.usuarioAdoptante._id,
          type:'n',
          nombres: this.usuarioAdoptante.nombres,
          apellidos:this.usuarioAdoptante.apellidos,
          correo: this.usuarioAdoptante.correo,
          image: this.image
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


 


  }, error=>{
    loading.dismiss();
    this.presentToast('Error al registrar, inténtalo nuevamente')
  }

  )
  
}
}

