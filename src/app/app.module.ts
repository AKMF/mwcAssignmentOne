import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FIREBASE_CONFIG } from './app.firebase.config';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AccLogPage } from '../pages/acc-log/acc-log';
import { AccUpPage } from '../pages/acc-up/acc-up';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { FillEventPage } from '../pages/fill-event/fill-event';
import { PickDatePage } from '../pages/pick-date/pick-date';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    AccLogPage,
    AccUpPage,
    EventDetailPage,
    FillEventPage,
    PickDatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    AccLogPage,
    AccUpPage,
    EventDetailPage,
    FillEventPage,
    PickDatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
