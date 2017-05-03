import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Evento } from './evento';

@NgModule({
  declarations: [
    Evento,
  ],
 imports: [
    IonicModule.forRoot(Evento),
  ],
  exports: [
    Evento
  ]
})
export class EventoModule {}
