import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccUpPage } from '../acc-up/acc-up';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';

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

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    
    public navCtrl: NavController, public navParams: NavParams) {
    this.AccUpPage = AccUpPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccLogPage');
  }

  // AccUpPage() {
  //   this.navCtrl.setRoot(AccUpPage);
  // }

  async login(user: User) {
    try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result) {
      this.navCtrl.setRoot(HomePage);
    }
  }
  catch (e) {
    console.error(e);
  }
  }

}
