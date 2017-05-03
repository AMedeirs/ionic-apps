import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { ModalProgPalestras22 } from '../modal-prog-palestras-22/modal-prog-palestras-22';

@IonicPage()
@Component({
  selector: 'page-programacao-22',
  templateUrl: 'programacao-22.html',
})
export class Programacao22 {

  varPalestras: any;
  varOficinas: any;
  varMesasRedonda: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.varPalestras = [
      { nome: "A importância do Censo Escolar", palestrante: "Silvana Morais", horario:"10:00" , linkApresentacao: "https://drive.google.com/file/d/0B5aNr3gQ21izbXR6SjgzZGY2ZG8/view?usp=sharing"},
      { nome: "Melhorias para o Censo Escolar 2016", palestrante: "Darlene Melo", horario:"9:00", linkApresentacao: "https://drive.google.com/file/d/0B5aNr3gQ21izV082R2NMTzlRYk0/view?usp=sharing" },
      { nome: "Cadastro da Escola", palestrante: "Sarah Barbosa", horario:"11:00" }
    ];

    this.varOficinas = [
      { nome: "Cadastro de Turma", palestrante: "Renan Braga", horario:"13:00"},
      { nome: "Atividade Complementar - Mais Educação", palestrante: "Adriano Silva", horario:"14:00" }
    ];

    this.varMesasRedonda = [
      { nome: "Educação Especial e o Censo Escolar", palestrante: "Lenice Salermo", horario:"15:00"},
      { nome: "Estudo Sobre a Tendência da Matrícula", palestrante: "Sarah Barbosa", horario:"16:00" }
    ];
  }

  openModal(palestra){
    let obj = palestra;
    let myModal = this.modalCtrl.create(ModalProgPalestras22, obj); 
    myModal.present();

      /*let myModal = this.modalCtrl.create(ModalProgPalestras22);
      myModal.present();*/
  }

}
