import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccUpPage } from '../acc-up/acc-up';

/**
 * Generated class for the AccLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acc-log',
  templateUrl: 'acc-log.html',
})
export class AccLogPage {

  AccUpPage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AccUpPage = AccUpPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccLogPage');
  }

  // AccUpPage() {
  //   this.navCtrl.setRoot(AccUpPage);
  // }

}
