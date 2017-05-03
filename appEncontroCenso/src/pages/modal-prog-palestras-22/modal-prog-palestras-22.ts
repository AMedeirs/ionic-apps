import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalProgPalestras22 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-prog-palestras-22',
  templateUrl: 'modal-prog-palestras-22.html',
})
export class ModalProgPalestras22 {


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  conteudoNome: string = this.navParams.get('nome');
  conteudoPalestrante: string = this.navParams.get('palestrante');
  conteudoHorario: string = this.navParams.get('horario');
  conteudoLink: string = this.navParams.get('linkApresentacao');
  
}
