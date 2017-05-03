import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Programacao22 } from '../programacao-22/programacao-22';

@IonicPage()
@Component({
  selector: 'page-programacao',
  templateUrl: 'programacao.html',
})
export class Programacao {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Programacao');
  }

  abrirPagProgramacao22(){
    this.navCtrl.push(Programacao22);
  }
}
