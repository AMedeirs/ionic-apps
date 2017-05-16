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
      { nome: "A importância do Censo Escolar", horario:"10:00", data: "22/05/2017", linkApresentacao: "https://drive.google.com/file/d/0B1uh9xN2drHrZDFGZEdfU3p5VDA/view?usp=sharing", palestrante: "Silvana Morais", palestranteEmail: "silvanamorais@seduc.net", palestranteFone: "(92) 98888-8888"},
      { nome: "Melhorias para o Censo Escolar 2016", horario:"9:00", data: "22/05/2017", linkApresentacao: "https://drive.google.com/file/d/0B1uh9xN2drHrdVJJOGVaVVFkWjA/view?usp=sharing", palestrante: "Darlene Melo", palestranteEmail: "darlene_melo@seduc.net", palestranteFone: "(92) 98888-8888"},
      { nome: "Cadastro da Escola", horario:"11:00", data: "22/05/2017", linkApresentacao:"https://drive.google.com/file/d/0B1uh9xN2drHrQlJZa3hidTZTR1E/view?usp=sharing", palestrante: "Sarah Barbosa", palestranteEmail: "sarah.pinheiro@seduc.net", palestranteFone: "(92) 98888-8888" }
    ];

    this.varOficinas = [
      { nome: "Cadastro de Turma", horario:"13:00", data: "22/05/2017", palestrante: "Renan Braga", linkApresentacao: "##"},
      { nome: "Atividade Complementar - Mais Educação", horario:"14:00", data: "22/05/2017", palestrante: "Adriano Silva", linkApresentacao: "##" }
    ];

    this.varMesasRedonda = [
      { nome: "Educação Especial e o Censo Escolar",  horario:"15:00", data: "22/05/2017", palestrante: "Lenice Salermo", linkApresentacao: "##"},
      { nome: "Estudo Sobre a Tendência da Matrícula", horario:"16:00", data: "22/05/2017", palestrante: "Sarah Barbosa", linkApresentacao: "##" }
    ];
  }

  openModal(palestra){
    let obj = palestra;
    let myModal = this.modalCtrl.create(ModalProgPalestras22, obj);
    myModal.present();

  }

}
