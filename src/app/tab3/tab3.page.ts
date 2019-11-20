import { Component, OnInit } from '@angular/core';
import {NotificacionService} from '../services/notificacion.service'
import {GLOBAL} from '../services/global';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers:[NotificacionService]
})
export class Tab3Page implements OnInit {
  public url;
  public page
  public pages;
  public itemsPerPage;
  public total;
  public idU;
  public status;
  public notificaciones=[];
  constructor(private _notificacionService:NotificacionService,private nativeStorage: NativeStorage) {
    this.page = 1;
    //this.status = false;
    this.url = GLOBAL.url;
  }
  doRefresh(event) {

    setTimeout(() => {
      this.page = 1;
      this.obtenerNotificaciones(this.page)
      event.target.complete();

    }, 500);
  }
ngOnInit(){ 
 
  this.nativeStorage.getItem('identity')
    .then(
    data => {
      
      this.idU = data.id;
     
    },
    error => console.log(<any>error)
  );
  this.obtenerNotificaciones(this.page);
}
loadData(event) {
  this.status = false;

  setTimeout(() => {

    if(this.notificaciones.length != this.total){
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
async obtenerNotificaciones(page,adding=false){
  
  if(this.idU == undefined){
    this.idU = "5d966fa9882c6d42d8a94b0d"
  }
  await this._notificacionService.obtNotificaciones(this.idU,'t',page).subscribe(
    response=>{
      if(response.notificaciones){
        console.log(response)
        this.total = response.total;
        this.pages = response.pages;
        this.itemsPerPage = response.itemsPerPage;
       console.log(this.total)
       
        if(!adding){
  
          this.notificaciones = response.notificaciones;
  
         }else{
           var arrayA = this.notificaciones;
           var arrayB = response.notificaciones;
           this.notificaciones = arrayA.concat(arrayB)
         }
         console.log(this.notificaciones)
      }
      
    },
    error=>{
      console.log(<any>error)
    }
  )
}
public noMore = false;
viewMore(){
  if(this.notificaciones.length == this.total){
    this.noMore = true;
  }else{
    this.page += 1;
  }

  this.obtenerNotificaciones(this.page,true)
}
}
