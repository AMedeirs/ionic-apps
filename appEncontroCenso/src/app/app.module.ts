import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Evento } from '../pages/evento/evento';
import { ComoChegar } from '../pages/como-chegar/como-chegar';
import { Programacao } from '../pages/programacao/programacao';
import { Programacao22 } from '../pages/programacao-22/programacao-22';
import { ModalProgPalestras22 } from '../pages/modal-prog-palestras-22/modal-prog-palestras-22';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Evento,
    ComoChegar,
    Programacao,
    Programacao22,
    ModalProgPalestras22
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {backButtonText: ''})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Evento,
    ComoChegar,
    Programacao,
    Programacao22,
    ModalProgPalestras22
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
