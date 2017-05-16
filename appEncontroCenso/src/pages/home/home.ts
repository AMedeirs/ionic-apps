import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Evento } from '../evento/evento';
import { ComoChegar } from '../como-chegar/como-chegar';
import { Programacao } from '../programacao/programacao';
import { Perguntas } from '../perguntas/perguntas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {  };

  abrirPagEvento(){
    this.navCtrl.push(Evento);
  };

  abrirPagComoChegar(){
    this.navCtrl.push(ComoChegar);
  };

  abrirPagProgramacao(){
    this.navCtrl.push(Programacao);
  };

  abrirPagPerguntas(){
    this.navCtrl.push(Perguntas);
  }
}
