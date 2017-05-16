import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Perguntas } from './perguntas';

@NgModule({
  declarations: [
    Perguntas,
  ],
  imports: [
    IonicModule.forRoot(Perguntas),
  ],
  exports: [
    Perguntas
  ]
})
export class PerguntasModule {}
