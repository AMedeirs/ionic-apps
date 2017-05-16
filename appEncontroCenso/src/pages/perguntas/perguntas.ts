import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class Perguntas {

  lista: FirebaseListObservable<any>
  mensagem: string;
  nome: string;
  municipio: string;
  palestra: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afd: AngularFireDatabase) {
    this.lista = afd.list("https://appencontrocenso.firebaseio.com/perguntas");
  }

  enviar(){
    let m = {
      palestra: this.palestra,
      texto: this.mensagem,
      data: new Date(),
      nome: this.nome,
      municipio: this.municipio
    };
    this.lista.push(m).then(() => {
      this.mensagem = "";
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perguntas');
  }

}
