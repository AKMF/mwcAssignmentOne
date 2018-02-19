import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { EventForm } from '../../models/event-form/event-form.interface';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  keyID: any;
  nameEvent: any;
  addressEvent: any;
  startDateEvent: any;
  endDateEvent: any;
  timeEvent: any;
  foodEvent: any;
  gamesEvent: any;
  wifiEvent: any;
  buttonColor: string = '#000';
  buttonColor2: string = '#000';
  buttonColor3: string = '#000';

  people:number = 0;
  // appended:string = this.people + " people joined"
  appended: any;

  eventListRef$: FirebaseListObservable<EventForm[]>;
  eventData: FirebaseObjectObservable<EventForm>;

  constructor(private fireDB: AngularFireDatabase,
    private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
      this.keyID = navParams.data.keyID,
      this.nameEvent= navParams.data.nameEvent;
      this.addressEvent= navParams.data.addressEvent;
      this.startDateEvent= navParams.data.startDateEvent;
      this.endDateEvent= navParams.data.endDateEvent;
      this.timeEvent= navParams.data.timeEvent;
      this.foodEvent= navParams.data.foodEvent;
      this.gamesEvent= navParams.data.gamesEvent;
      this.wifiEvent= navParams.data.wifiEvent;

      this.eventListRef$ = this.fireDB.list('home');
  }

  ionViewWillLoad() {
    if(this.foodEvent == true) {
      this.buttonColor = '#00CED1';
      
       
      }
      if(this.gamesEvent == true ) {
        this.buttonColor2 = '#e64808';
    }

    if(this.wifiEvent == true ) {
      this.buttonColor3 = '#1056ec';
    } 

    
    // if(this.gamesEvent == true ) {
    //   this.buttonColor2 = '#e64808';
    // }
    // if(this.wifiEvent == true ) {
    //   this.buttonColor3 = '#1056ec';
    // } 
    // else {
    //   this.buttonColor = '#000';
    // }
  }

  someYes() {
    // console.log('hello yes');
    // this.people ++;
    // var join = + this.people;
    // console.log(this.people);
    // var addition = join + " people joined!";
    // console.log(addition);
    console.log('hello yes');
    this.people ++;
    var coming = this.people + " people joining!"
    console.log(this.people);
    console.log(coming);
    this.appended = this.people + " people joined"
  }
  
  someNo() {
    console.log('hello no');
    // this.fireDB.object(this.keyID).remove();
    this.fireDB.list('home').remove(this.keyID);
    this.toast.create({
      message: 'Item removed!',
      duration: 3000
    }).present();
    this.navCtrl.pop();
  }

  // some(name) {
  //   console.log
  // }
  // ionViewDidLoad() {
  //   // console.log('ionViewDidLoad EventDetailPage');
  //   this.eventData =this.fireDB.object('home/item.$key')
  // }

}
