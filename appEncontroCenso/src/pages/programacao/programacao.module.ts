import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Programacao } from './programacao';

@NgModule({
  declarations: [
    Programacao,
  ],
  imports: [
    IonicModule.forRoot(Programacao),
  ],
  exports: [
    Programacao
  ]
})
export class ProgramacaoModule {}
