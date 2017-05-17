import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class Perguntas {

  lsUsuarios: FirebaseListObservable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, public afd: AngularFireDatabase) {
    this.lsUsuarios = afd.list("/Usuarios");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perguntas');
  }

}
