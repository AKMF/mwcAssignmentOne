import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickDatePage } from './pick-date';

@NgModule({
  declarations: [
    PickDatePage,
  ],
  imports: [
    IonicPageModule.forChild(PickDatePage),
  ],
})
export class PickDatePageModule {
}
