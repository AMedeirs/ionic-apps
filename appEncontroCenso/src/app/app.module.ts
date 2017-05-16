import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Evento } from '../pages/evento/evento';
import { ComoChegar } from '../pages/como-chegar/como-chegar';
import { Programacao } from '../pages/programacao/programacao';
import { Programacao22 } from '../pages/programacao-22/programacao-22';
import { ModalProgPalestras22 } from '../pages/modal-prog-palestras-22/modal-prog-palestras-22';
import { Perguntas } from '../pages/perguntas/perguntas';

export const firebaseConfig = {
    apiKey: "AIzaSyAHt_rmp3FizwTE451b4DHFQ0TmKqQBdSM",
    authDomain: "appencontrocenso.firebaseapp.com",
    databaseURL: "https://appencontrocenso.firebaseio.com",
    projectId: "appencontrocenso",
    storageBucket: "appencontrocenso.appspot.com",
    messagingSenderId: "531909231024"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Evento,
    ComoChegar,
    Programacao,
    Programacao22,
    ModalProgPalestras22,
    Perguntas
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {backButtonText: ''}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Evento,
    ComoChegar,
    Programacao,
    Programacao22,
    ModalProgPalestras22,
    Perguntas
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
