import { Component, OnInit } from '@angular/core';
import {trigger,keyframes,animate,transition} from '@angular/animations';
import { MatCardModule,MatButtonModule } from '@angular/material'
import {ActivatedRoute} from '@angular/router';
import {MascotaService} from "../../services/mascota.service"
import {UsuarioService} from "../../services/usuario.service"
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';

import {GLOBAL} from '../../services/global';
import { ModalController } from '@ionic/angular';
import { ProcesoAdopcionPage } from '../../components/proceso-adopcion/proceso-adopcion.page';

import * as $ from 'jquery'
import Swiper from 'swiper';
import * as kf from './keyframes'
@Component({
  selector: 'app-perfil-mascota',
  templateUrl: './perfil-mascota.page.html',
  styleUrls: ['./perfil-mascota.page.scss'],
  providers:[MascotaService],
  animations:[
    trigger('cardAnimator',[
     // transition('* => wobble', animate(1000,keyframes(kf.wobble))),
      transition('* => swing', animate(1000,keyframes(kf.swing))),
     // transition('* => jello', animate(1000,keyframes(kf.jello))),
     // transition('* => zoomOutRight', animate(1000,keyframes(kf.zoomOutRight))),
     // transition('* => slideOutLeft', animate(1000,keyframes(kf.slideOutLeft))),
      //transition('* => rotateOutUpRight', animate(1000,keyframes(kf.rotateOutUpRight))),
     // transition('* => fliOutY', animate(1000,keyframes(kf.fliOutY)))



    ])
  ]
})
export class PerfilMascotaPage implements OnInit {
  animationState:string;
  public id;
  public mascota:any;
  public url;
  public identity;
  public idVer;
  public token;
  public validAdop;
  public validAdop2;
  public vadopcion:any;
  startAnimation(state){
    console.log(state);
    if(!this.animationState){
      this.animationState = state;
    }
  }
  resetAnimationState(state){
      this.animationState = '';
    
  }
  constructor(public toastController: ToastController,private nativeStorage: NativeStorage,public modalController: ModalController,private activeRoute:ActivatedRoute,private _mascotaService:MascotaService) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.swiperCard();
    this.url = GLOBAL.url;
    this.obtIDTK()

   }

  ngOnInit() {
    this.obtIDTK() 
   this.swiperCard()
    this.obtenerMascota(this.id)
    console.log("entro")
    
  /*  $(document).ready(function (){
      var element = $('#msc'); 
      console.log(element.scrollHeight)
    if (element.scrollHeight - element.scrollTop === element.clientHeight) { 
        console.log("entro aqui")
    } 
  });
  $(window).scroll(function(event) {
    var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();
    console.log("Vertical "+scrollTop);
    console.log("Horizontal "+scrollLeft);
  });
  $(document).ready(function () {
    	
      var hh = $("#msc").scrollTop()
      console.log("imprimiento "+hh)
    $(window).on("scroll", function() {
      console.log("entro")
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        console.log("final")
      }
  });
});*/
  }
  logScrollEnd(){
    //console.log("okey")
  }
  logScrolling(event){
    /*console.log(event.detail.deltaY)
    console.log(event.detail.currentY)

    console.log(event.detail.scrollTop)
    console.log($("#msc"))*/
    var element = $("#msc").height();

    
    //const lo = event.detail.scrollTop
   // var ll = document.querySelector('ion-content');
   //console.log( this.getContent())

  }

  ki(){
    //console.log($("#msc").scrollTop())
  }
  getContent() {
    return document.querySelector('ion-content');
  }
  swiperCard(){
    $(document).ready(function () {
      var swiper = new Swiper('.swiper-container', {
       effect: 'cube',
       grabCursor: true,
       cubeEffect: {
         shadow: true,
         slideShadows: true,
         shadowOffset: 20,
         shadowScale: 0.94,
       },
       pagination: {
         el: '.swiper-pagination',
         type: 'progressbar',
       },
     });
   });
  }
  obtenerMascota(id){
    this._mascotaService.obtMascota(id).subscribe(
      response=>{
        console.log(response);
        this.mascota = response.mascota;
        this.swiperCard()
      },
      error=>{
        console.log(error)

      }
    )
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    var op = ev.detail.value;
    if(op == "desc"){
      $(".mascota-desc").fadeIn('slow')
      $(".mascota-options").fadeOut('fast')
      $(".mascota-vacunas").fadeOut('fast')

     

    }else if(op == "info"){
      $("#desc").removeClass('segment-button-checked')
      $(".mascota-desc").fadeOut('fast')
      $(".mascota-options").fadeIn('slow')
      $(".mascota-options").addClass('visib')
      $(".mascota-vacunas").fadeOut('fast')
    }else{
      $("#desc").removeClass('segment-button-checked')

      $(".mascota-desc").fadeOut('fast')
      $(".mascota-options").fadeOut('fast')
      $(".mascota-vacunas").fadeIn('slow')
      $(".mascota-vacunas").addClass('visib')

    }
  }
  async presentModal(id) {
    const modal = await this.modalController.create({
      component: ProcesoAdopcionPage,
      componentProps: {
        'id': id,
      }
    });
    modal.onDidDismiss().then((detail) => {
      if (detail !== null) {
        if(detail.data == 'ok'){
          this.validAdop = false;
        }
      }
   });
    return await modal.present();
  }
  obtIDTK(){
    this.nativeStorage.getItem('identity')
    .then(
    data => {
      this.idVer = data.id;
      this.identity = data;
      this.comprobarAdopcion(this.idVer)
    
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
  comprobarAdopcion(id){
    this._mascotaService.comprobarAdopcion(id,this.id).subscribe(
      response=>{
        if(response.n == '1'){
          
          this.validAdop = false;
   
          this.vadopcion = response.adopcion;
        }else if(response.n == '2'){
          this.validAdop = true;
        }
      },
      error=>{
        console.log(<any>error)
      }
    )
  }
}
