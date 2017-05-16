import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-prog-palestras-22',
  templateUrl: 'modal-prog-palestras-22.html',
})
export class ModalProgPalestras22 {
  conteudoNome: string = this.navParams.get('nome');
  conteudoHorario: string = this.navParams.get('horario');
  conteudoData: string = this.navParams.get('data');
  conteudoLink: string = this.navParams.get('linkApresentacao');
  conteudoPalestrante: string = this.navParams.get('palestrante');
  conteudoPalestranteEmail: string = this.navParams.get('palestranteEmail');
  conteudoPalestranteFone: string = this.navParams.get('palestranteFone');
  isEnabled: boolean = null;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    if(this.conteudoLink !== "##"){
      this.isEnabled = true;
    }else this.isEnabled = null;
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
