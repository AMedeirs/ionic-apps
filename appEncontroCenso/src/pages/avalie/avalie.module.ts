import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Avalie } from './avalie';

@NgModule({
  declarations: [
    Avalie,
  ],
  imports: [
    IonicModule.forRoot(Avalie),
  ],
  exports: [
    Avalie
  ]
})
export class AvalieModule {}
