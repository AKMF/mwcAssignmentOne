import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventForm } from '../../models/event-form/event-form.interface';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

/**
 * Generated class for the FillEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fill-event',
  templateUrl: 'fill-event.html',
})
export class FillEventPage {

  eventList = {} as EventForm;

  eventDetailRef$: FirebaseListObservable<EventForm[]>

  constructor(private fireDB: AngularFireDatabase,
    
    public navCtrl: NavController, public navParams: NavParams) {
      this.eventDetailRef$ = this.fireDB.list('home');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FillEventPage');
  // }

   addEventItem(eventList: EventForm) {
    //  console.log(eventList);
    this.eventDetailRef$.push({
      eventName: this.eventList.eventName,
      eventAddress: this.eventList.eventAddress,
      eventStartDate:this.eventList.eventStartDate,
      eventEndDate:this.eventList.eventEndDate,
      eventTime:String(this.eventList.eventTime),
    // eventStartDate:PickDatePage;
    // eventEndDate:PickDatePage;
    // eventTime:Time;
      eventFood:Boolean(this.eventList.eventFood),
      eventGames:Boolean(this.eventList.eventGames),
      eventWiFi:Boolean(this.eventList.eventWiFi),
    })

    this.eventList = {} as EventForm;

    this.navCtrl.pop();
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
}

}
