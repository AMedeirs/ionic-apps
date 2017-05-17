import { Component, Directive, Attribute } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-credenciamento',
  templateUrl: 'credenciamento.html'
})

export class Credenciamento {
lsUsuarios: FirebaseListObservable<any>
inCpf: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public afd: AngularFireDatabase, public toastCtrl: ToastController) {
    //this.lsUsuarios = afd.list("/Usuarios");
  }

  listarCheckin(){
    if(this.inCpf == null){
      let toast = this.toastCtrl.create({
        message: 'Campo Vazio. Preencha com o seu CPF.',
        duration: 3000,
        position: "middle"
      });
      toast.present();
    }else {
      this.lsUsuarios = this.afd.list("/Usuarios", {
        query:{
          orderByChild: 'cpf',
          equalTo: this.inCpf
        }
      });

    }
    }
  }
