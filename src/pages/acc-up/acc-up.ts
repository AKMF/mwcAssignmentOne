import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

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
    
    public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AccUpPage');
  // }

  async signUp(user: User) {
    try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
    this.toast.create({
        message: 'Sign up successfull, sign in you new account',
        duration: 3000
      }).present();
      this.navCtrl.pop();
  }
    catch (e) {
      console.error(e);
      this.toast.create({
      message: 'Sign up fail, password should be more than 6 character',
      duration: 5000
    }).present();
    }
  }

  // async signUp(user: User) {
  //   const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  //   if(user.password.length <= 6)
  //   console.log(user.password.length);
  //   // this.toast.create({
  //   //   message: 'Could not find authentication detail',
  //   //   duration: 3000
  //   // }).present();
  //   try {
  //   if (result) {
  //     this.toast.create({
  //       message: 'Sign up successfull!',
  //       duration: 3000
  //     }).present();
  //     this.navCtrl.setRoot(HomePage);
  //   } 
  // } catch (e) {
  //   console.error(e);
  //   // this.toast.create({
  //   //   message: 'Could not find authentication detail',
  //   //   duration: 3000
  //   // }).present();
  // }
  // }
}
