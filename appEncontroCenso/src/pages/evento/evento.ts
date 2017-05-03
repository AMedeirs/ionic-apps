import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComoChegar } from '../como-chegar/como-chegar';

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class Evento {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Evento');
  }

  abrirPagComoChegar(){
    this.navCtrl.push(ComoChegar);
  }
}
