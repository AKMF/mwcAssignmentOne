import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"

/**
 * Generated class for the AccUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acc-up',
  templateUrl: 'acc-up.html',
})
export class AccUpPage {

  user = {} as User;

  constructor( private afAuth: AngularFireAuth,
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AccUpPage');
  // }

  async signUp(user: User) {
    try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
  }
    catch (e) {
      console.error(e);
    }
  }

}
