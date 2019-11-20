import { Component, OnInit,Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import {MascotaService} from "../../services/mascota.service"
import { ModalController } from '@ionic/angular';
import {Adopcion} from '../../models/adopcion'
import {GLOBAL} from '../../services/global';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatCardModule,MatButtonModule, MatStepperModule, MatFormFieldModule ,MatFormFieldControl} from '@angular/material'
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-proceso-adopcion',
  templateUrl: './proceso-adopcion.page.html',
  styleUrls: ['./proceso-adopcion.page.scss'],
  providers:[{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ProcesoAdopcionPage implements OnInit {
  @Input() id: string;
  isLinear = false;
 public identity;
 public token;
  public mascota:any;
  public adopcion:Adopcion;
  public url;
  public edads = ['18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']
  constructor(private _route:ActivatedRoute,
    private _router:Router,public alertController: AlertController,public toastController: ToastController,public loadingController: LoadingController,private nativeStorage: NativeStorage,private _formBuilder: FormBuilder,navParams: NavParams,private _mascotaService:MascotaService,public modalController: ModalController) { 
    this.id = navParams.get('id');
    this.obtenerMascota(this.id);
    this.url = GLOBAL.url;
    this.adopcion = new Adopcion("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","")
    this.obtIDTK();
  }

  ngOnInit() {
    this.obtIDTK();
   
  }
  obtenerMascota(id){
    this._mascotaService.obtMascota(id).subscribe(
      response=>{
        console.log(response);
        this.mascota = response.mascota;
      },
      error=>{
        console.log(error)

      }
    )
  }
  closeModal(){
    this.modalController.dismiss()
  }
  async myDismiss(result) {

    await this.modalController.dismiss(result);
  }
  prueba(){
    this._router.navigate(['perfil-mascota',this.mascota._id]);       

  }
  async registrarAdopcion(fid,mid){
    const loading = await this.loadingController.create({
      message: 'Postulando...'
    });
  
   
    this.presentLoading(loading)
    this._mascotaService.registroAdopcion(fid,mid,this.adopcion,this.token).subscribe(
      response=>{
        console.log(response)
        loading.dismiss();   
        
        var msj = "Te has postulado correctamente al proceso de adopción para: "+this.mascota.nombre+". Se te notificará cuando la respectiva fundación revise tu postulación."
        this.presentAlert("Proceso de adopción",msj)
        this.myDismiss('ok');
      },
      error=>{
        loading.dismiss();   
        console.log(<any>error)
      }
    )
  }
  obtIDTK(){
    this.nativeStorage.getItem('identity')
    .then(
    data => {
      
      this.identity = data;
    
    },
    error => console.log(<any>error)
  );
  this.nativeStorage.getItem('token')
  .then(
  data => {
    
    this.token = data.token;
    
  
  },
  error => console.log(<any>error)
  );
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
  async presentAlert(head,text) {
    const alert = await this.alertController.create({
      header: head,
      
      message: text,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
