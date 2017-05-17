import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Credenciamento } from './credenciamento';

@NgModule({
  declarations: [
    Credenciamento,
  ],
  imports: [
    IonicModule.forRoot(Credenciamento),
  ],
  exports: [
    Credenciamento
  ]
})
export class CredenciamentoModule {}
