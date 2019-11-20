import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {
  public op;
  public aespecie = ["Canino","Felino"]
  public asexo = ["Macho","Hembra"]
  public atam = ["Grande","Mediano","Pequeño"]
  public aedad = ["Adulto","Joven","Cachorro"]
  public araza = ["Mestizo","American Bully","Aussiedoodle o aussiepoo","Azawakh","Boxer","Cavapoo o cavoodle", "Cavachon","Cockapoo","Chorkie","Chow Chow","Eurasier","Foxhound","Goldendoodle","Husky","Kelpie","Labrador","Morkie","Pitbull","Puggle","Rottweiler","Schnauzer","Schnoodle","Terrier","Yorkipoo"]
  
  especie = new FormControl('',);
  sexo = new FormControl('',);
  raza = new FormControl('', );
  edad = new FormControl('', );
  tamanio = new FormControl('',);
  constructor(public modalController: ModalController,navParams: NavParams) { 
    this.op = navParams.get('op');

  }

  ngOnInit() {}
  async myDismiss(result) {

    await this.modalController.dismiss(result);
  }

  filtrar(){
    console.log(this.especie.value)
    console.log(this.sexo.value)
    console.log(this.tamanio.value)
    console.log(this.edad.value)
    console.log(this.raza.value)


  }
}
