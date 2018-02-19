import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AngularFireAuth } from "angularfire2/auth";
// import { AngularFireDatabase } from "angularfire2/database";
// ToastController
import { FillEventPage } from '../fill-event/fill-event';
import { EventDetailPage } from "../event-detail/event-detail";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { EventForm } from '../../models/event-form/event-form.interface';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

// people = 1;

eventListRef$: FirebaseListObservable<EventForm[]>;

  FillEventPage:any;
  EventDetailPage:any;

  // eventYear= {} as EventYear;

  // arrData = []
  // eventDetailRef$: AngularFireDatabaseModule<EventYear>
  // private fireDB: AngularFireDatabase, private afAuth: AngularFireAuth, private toast: ToastController,
  constructor( private fireDB: AngularFireDatabase,
    
    public navCtrl: NavController) {
    this.FillEventPage = FillEventPage;
    this.EventDetailPage = EventDetailPage;
    // this.fireDB.list("/listOfEvent/").valueChanges().subscribe;
    
    this.eventListRef$ = this.fireDB.list('home');

    
    
    
  }

  // ionViewWillLoad() {
    // this.afAuth.authState.subscribe(data => {
    //   if(data.email && data.uid) {
    //   this.toast.create({
    //     message: 'Welcome to APP_NAME, ${data.email}',
    //     duration: 3000
    //   }).present();
    // }
    // else {
    //   this.toast.create({
    //     message: 'Could not find authentication detail',
    //     duration: 3000
    //   }).present();
    // }
    // });
  // }

  findOut(item) {
    this.navCtrl.push(this.EventDetailPage, {
        keyID: item.$key,
        nameEvent: item.eventName,
        addressEvent: item.eventAddress,
        startDateEvent: item.eventStartDate,
        endDateEvent: item.eventEndDate,
        timeEvent: item.eventTime,
        foodEvent: item.eventFood,
        gamesEvent: item.eventGames,
        wifiEvent: item.eventWiFi,
        // peopleJoin: this.people,
    })
    // console.log(item.$key);
    // console.log(item.eventName);
    
  }

  // ionViewWillLoad(){
  //   var cDate = document.getElementsByTagName("p")[0].getAttribute("hari");
  //   console.log(cDate)
  // }

}
