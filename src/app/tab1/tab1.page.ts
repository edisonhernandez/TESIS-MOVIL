import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import {
  Facebook,
  FacebookLoginResponse
}
  from '@ionic-native/facebook/ngx';
  import { NativeStorage } from '@ionic-native/native-storage/ngx';
  import {Router, ActivatedRoute, Params} from '@angular/router';
  import { IonInfiniteScroll } from '@ionic/angular';
  import {MascotaService} from '../services/mascota.service'
  import { ToastController } from '@ionic/angular';
  import {GLOBAL} from '../services/global';
  import { MenuController } from '@ionic/angular';
  import { IonContent } from '@ionic/angular';
  import { ModalController } from '@ionic/angular';
  import { FiltrosComponent } from '../components/filtros/filtros.component';

declare var $:any;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers:[Facebook,MascotaService,FiltrosComponent]
})
export class Tab1Page implements OnInit {
  @ViewChild(IonContent,{read:IonContent,static:false}) content: IonContent;
  public nm;
  public apel;
  public im;
  public token;
  public status;
  public items =[];
  public status2;

  public tp;
  public sc;
  public pages;
  public itemsPerPage;
  public total;
  public mascotas=[];
  public page;
  public event:any;
  public url;
  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(public modalController: ModalController,private menu: MenuController,public toastController: ToastController,private _mascotaService:MascotaService, private fb: Facebook,private nativeStorage: NativeStorage,
		private _route:ActivatedRoute,
    private _router:Router) {
      this.page = 1;
      this.status = false;
      this.url = GLOBAL.url;

    }

  doRefresh(event) {

    setTimeout(() => {
      this.page = 1;
      this.obtMascotas(this.page)
      event.target.complete();

    }, 500);
  }
  doFbLogout(){
		this.fb.logout()
		.then(res =>{
			//user logged out so we will remove him from the NativeStorage
			this.nativeStorage.remove('facebook_user');
      this._router.navigate(['login']);
		}, error =>{
			console.log(error);
		});
  }
  
  ngOnInit(){
    $(document).ready(()=>{
      this.finSc()
    
   })
    this.nativeStorage.getItem('identity')
    .then(
    data => {
      
      this.nm = data.id;
      this.apel = data.apellidos;
      this.im = data.image;
    
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
this.obtMascotas(this.page)
  }
 
  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position: 'top'
    });
    toast.present();
    
  }
  loadData(event) {
    this.status = false;

    setTimeout(() => {

      if(this.mascotas.length != this.total){
        this.viewMore()
      }else{
        this.status = true;
      }
      
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      /*if (data.length == 1000) {
        event.target.disabled = true;
      }*/
    }, 500);
  }
  async obtMascotas(page,adding=false){
    
    await this._mascotaService.obtMascotass(page).subscribe(
      response=>{
        
        if(response.mascotas && response.n == '1'){
          //this.fotos = response.fot;
          this.total = response.total;
          this.pages = response.pages;
          this.itemsPerPage = response.itemsPerPage;
          console.log(this.total)
         /* if(page > this.pages){
            this._router.navigate[('/login')]
          }*/
         if(!adding){

          this.mascotas = response.mascotas;

         }else{
           var arrayA = this.mascotas;
           var arrayB = response.mascotas;
           this.mascotas = arrayA.concat(arrayB)
         }

        }else{
          
          this.presentToast('Intentalo nuevamente')

        }
      },
      error=>{
        var errorMessage = <any>error;
        console.log(errorMessage)
        this.presentToast('Intentalo nuevamente')

        if(errorMessage != null && error.error.n == '2'){
          
        }else if(errorMessage != null && error.error.n == '3'){
          
        }else{
          
        }
      }
    )

  }
  public noMore = false;
  viewMore(){
    if(this.mascotas.length == this.total){
      this.noMore = true;
    }else{
      this.page += 1;
    }

    this.obtMascotas(this.page,true)
  }

  perfilMascota(id){
    this._router.navigate(['perfil-mascota',id]);       
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  logScrollStart(event){
    

    console.log("logScrollStart : When Scroll Starts");
  }
 
  logScrolling(event){
    console.log(event)
    this.tp = event.detail.deltaY;
    this.sc = event.detail.scrollTop;
    if(this.tp > 0 && this.sc > 20){
      $("#headerM").addClass("MOVERHE")
      $("#divNotificacion").addClass("contentN")

    }
    if(this.tp <= 0 && this.sc > 21){
      $("#headerM").removeClass("MOVERHE");
      $("#headerM").addClass("headerFix")
      
    }
    if(this.tp <= 0 && this.sc <= 20){
      $("#headerM").removeClass("MOVERHE");
      $("#headerM").removeClass("headerFix")
      $("#divNotificacion").removeClass("contentN")
      
    }
   
  }
 
  logScrollEnd(){
    console.log("logScrollEnd : When Scroll Ends");
  }
 
  ScrollToBottom(){
    this.content.scrollToBottom(1500);
  }
 
  ScrollToTop(){
    this.content.scrollToTop(1500);
  }
 
  ScrollToPoint(X,Y){
    this.content.scrollToPoint(X,Y,1500);
  }
 /* toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }*/
  finSc(){
    
    $("#divNotificacion").scroll(()=>{
    let element = document.getElementById("divNotificacion");
    console.log(element.offsetHeight + " "+ element.scrollTop + " "+ element.scrollHeight )
   /* if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
      this.verMas()
    }*/
  })
}
/*--MODAL PARA FILTROS---*/
async presentModal(op) {
  const modal = await this.modalController.create({
    component: FiltrosComponent,
    componentProps: {
      'op': op,
    }
  });
  modal.onDidDismiss().then((detail) => {
    if (detail !== null) {
      /*if(detail.data == 'ok'){
        this.validAdop = false;
      }*/
    }
 });
  return await modal.present();
}
}
