import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComoChegar } from './como-chegar';

@NgModule({
  declarations: [
    ComoChegar,
  ],
 imports: [
    IonicModule.forRoot(ComoChegar),
  ],
  exports: [
    ComoChegar
  ]
})
export class ComoChegarModule {}
