import { Component,OnInit,ViewChild } from '@angular/core';
import {
  Facebook,
  FacebookLoginResponse
}
  from '@ionic-native/facebook/ngx';
  import { NativeStorage } from '@ionic-native/native-storage/ngx';
  import {Router, ActivatedRoute, Params} from '@angular/router';
  import { IonInfiniteScroll } from '@ionic/angular';
  import {UsuarioService} from '../services/usuario.service'
  import { ToastController } from '@ionic/angular';
  import {GLOBAL} from '../services/global';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[Facebook,UsuarioService]
})
export class Tab2Page implements OnInit {
  public nm;
  public apel;
  public im;
  public token;
  public status;
  public items =[];
  public status2;

  public pages;
  public itemsPerPage;
  public total;
  public fundaciones=[];
  public page;
  public event:any;
  public url;
  constructor(public toastController: ToastController,private _usuarioService:UsuarioService, private fb: Facebook,private nativeStorage: NativeStorage,
		private _route:ActivatedRoute,
    private _router:Router) {
      this.page = 1;
      this.status = false;
      this.url = GLOBAL.url;

    }

    doRefresh(event) {

      setTimeout(() => {
        this.page = 1;
        this.obtFundaciones(this.page)
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
  this.obtFundaciones(this.page)
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
  
        if(this.fundaciones.length != this.total){
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
    async obtFundaciones(page,adding=false){
      let rol = 4;
      await this._usuarioService.obtUsuariosRol(page,rol).subscribe(
        response=>{
          
          if(response.usuarios && response.n == '1'){
            //this.fotos = response.fot;
            this.total = response.total;
            this.pages = response.pages;
            this.itemsPerPage = response.itemsPerPage;
            console.log(this.total)
           /* if(page > this.pages){
              this._router.navigate[('/login')]
            }*/
           if(!adding){
  
            this.fundaciones = response.usuarios;
  
           }else{
             var arrayA = this.fundaciones;
             var arrayB = response.usuarios;
             this.fundaciones = arrayA.concat(arrayB)
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
      if(this.fundaciones.length == this.total){
        this.noMore = true;
      }else{
        this.page += 1;
      }
  
      this.obtFundaciones(this.page,true)
    }
  
    perfilFundacion(id){
      this._router.navigate(['perfil-fundacion',id]);       
    }

}
