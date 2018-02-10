import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

import { FillEventPage } from '../fill-event/fill-event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  FillEventPage:any;

  arrData = []

  constructor(private fireDB: AngularFireDatabase, private afAuth: AngularFireAuth, private toast: ToastController,
    
    public navCtrl: NavController) {
    this.FillEventPage = FillEventPage;
    // this.fireDB.list("/listOfEvent/").subscribe();
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid) {
      this.toast.create({
        message: 'Welcome to APP_NAME, ${data.email}',
        duration: 3000
      }).present();
    }
    else {
      this.toast.create({
        message: 'Could not find authentication detail',
        duration: 3000
      }).present();
    }
    });
  }

}
