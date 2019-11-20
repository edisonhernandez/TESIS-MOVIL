import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MomentModule } from 'ngx-moment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MatCardModule,MatButtonModule, MatStepperModule, MatFormFieldModule,MatIconModule,MatRadioModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  Facebook,
  FacebookLoginResponse
}
  from '@ionic-native/facebook/ngx';

  import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
  import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


import { File } from '@ionic-native/file';
import {ProcesoAdopcionPage} from './components/proceso-adopcion/proceso-adopcion.page'
import {MenuComponent} from './components/menu/menu.component'
import {FiltrosComponent} from './components/filtros/filtros.component'

@NgModule({
  declarations: [AppComponent,ProcesoAdopcionPage,MenuComponent,FiltrosComponent],
  entryComponents: [ProcesoAdopcionPage,MenuComponent,FiltrosComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MomentModule,
    MatCardModule,MatButtonModule,MatStepperModule,MatFormFieldModule,MatIconModule,MatRadioModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Facebook,
    NativeStorage,
    Camera,
    FileTransfer,
    FileTransferObject,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
