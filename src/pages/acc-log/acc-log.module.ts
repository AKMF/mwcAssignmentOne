import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccLogPage } from './acc-log';

@NgModule({
  declarations: [
    AccLogPage,
  ],
  imports: [
    IonicPageModule.forChild(AccLogPage),
  ],
})
export class AccLogPageModule {}
