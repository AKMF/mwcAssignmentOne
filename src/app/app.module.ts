import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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
