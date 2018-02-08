import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FillEventPage } from '../fill-event/fill-event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  FillEventPage:any;

  constructor(public navCtrl: NavController) {
    this.FillEventPage = FillEventPage;
  }

}
