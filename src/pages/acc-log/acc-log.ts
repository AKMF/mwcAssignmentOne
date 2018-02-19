import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccUpPage } from '../acc-up/acc-up';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

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
    
    public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
    this.AccUpPage = AccUpPage;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AccLogPage');
  // }

  // AccUpPage() {
  //   this.navCtrl.setRoot(AccUpPage);
  // }

  // async login(user: User) {
  //   try {
  //   const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  //   if(!result) {
  //     this.toast.create({
  //       message: 'Sign in successfull',
  //       duration: 3000
  //     }).present();
  //     this.navCtrl.setRoot(HomePage);
  //   }
  //     // this.toast.create({
  //     //   message: 'Could not find authentication detail',
  //     //   duration: 3000
  //     // }).present();
  //   } catch (e) {
  //     console.error(e);
  //     this.toast.create({
  //     message: 'Could not find authentication detail',
  //     duration: 5000
  //   }).present();
  //   }
  // }
  // catch (e) {
  //   console.error(e);
  // }
  // }

  // async login(user: User) {
  //   try {
  //     const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  //     console.log(result);
  //   // this.toast.create({
  //   //     message: 'Sign Ip successfull',
  //   //     duration: 3000
  //   //   }).present();
  //   //   this.navCtrl.setRoot(HomePage);
  // }
  //   catch (e1) {
  //     console.log(e1);
  //   //   this.toast.create({
  //   //   message: 'Could not find authentication detail',
  //   //   duration: 5000
  //   // }).present();
  //   }
  // }

//   async login(user: User) {
//     try {
//      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email , user.password);
//      // console.log(result);
//      if(result) {
//      this.toast.create({
//         message: 'Sign Ip successfull',
//         duration: 3000
//       }).present();
//       this.navCtrl.setRoot(HomePage);
//      }
//    } 
//    catch(e) {
//        console.error(e);
//    }
//  } 

async login(user:User){
  this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
  .then(res => {
      this.toast.create({
        message: 'Sign Ip successfull',
        duration: 3000
      }).present();
    this.navCtrl.setRoot(HomePage);
  }, err => {
    // let msg;
    // switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
    //   case "auth/wrong-password":
    //     msg= "Email or Password is wrong.";
    //     break;

    //   case "auth/user-not-found":
    //     msg= 'User not found.'
    //     break;

    //   case "auth/invalid-email":
    //     msg= 'Email or Password is wrong.';
    //     break;
    // }

    // alert(msg);

        this.toast.create({
      message: 'Could not find authentication detail',
      duration: 5000
    }).present();
  });
}

}
