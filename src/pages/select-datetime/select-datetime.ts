import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import moment from 'moment';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the SelectDatetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class TimeSlot {
  id: number;
  day: string;
  start_time: string;
  end_time: string;
  time_text: string;
}

@IonicPage()
@Component({
  selector: 'page-select-datetime',
  templateUrl: 'select-datetime.html',
})
export class SelectDatetimePage {

  dnt: string = "pick";
  private dates: Array<Date> = [];
  private pickUpDates: Array<Date> = [];
  private deliveryDates: Array<Date> = [];
  private times: Array<TimeSlot>;
  private availabilityTimes: Array<Array<TimeSlot>>;
  private datePickupSelectedIndex = -1;
  private timePickupSelectedIndex = -1;
  private dateDeliverySelectedIndex = -1;
  private timeDeliverySelectedIndex = -1;
  private weekDaysTrans: Array<String>;
  private monthsTrans: Array<String>;
  private selectionDateHeading: string = "Select Pick up Date";
  private selectionTimeHeading: string = "Select Pick up Time";
  private pickupDateTime: Date;
  private deliveryDateTime: Date;
  private pickupSlot: string;
  private deliverySlot: string;
  private tss: TimeSlot;

  private deliveryDate: string;
  private pickUpDate: string;
  private pickUpDateIndex: any;
  private deliveryTimeTo: string;
  private deliveryTimeFrom: string;
  private pickUpTimeTo: string;
  private pickUpTimeFrom: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.weekDaysTrans = new Array<String>();
    this.weekDaysTrans.push('SUN');
    this.weekDaysTrans.push('MON');
    this.weekDaysTrans.push('TUE');
    this.weekDaysTrans.push('WED');
    this.weekDaysTrans.push('THU');
    this.weekDaysTrans.push('FRI');
    this.weekDaysTrans.push('SAT');

    this.monthsTrans = new Array<String>();
    this.monthsTrans.push('JAN');
    this.monthsTrans.push('FEB');
    this.monthsTrans.push('MAR');
    this.monthsTrans.push('APR');
    this.monthsTrans.push('MAY');
    this.monthsTrans.push('JUN');
    this.monthsTrans.push('JUL');
    this.monthsTrans.push('AUG');
    this.monthsTrans.push('SEP');
    this.monthsTrans.push('OCT');
    this.monthsTrans.push('NOV');
    this.monthsTrans.push('DEC');

    for (let i = 0; i < 15; i++) {
      let d = new Date();
      d.setDate(d.getDate() + i);
      this.dates.push(d);
    }
    for(let i = 0; i < 7; i ++) {
      this.pickUpDates.push(this.dates[i]);
    }

    this.setupAvailability();
    this.selectpickDate(0);
    this.selectDate(0);
    this.selectTime(0);
  }

  setupAvailability() {
    this.availabilityTimes = new Array<Array<TimeSlot>>();
    for (let i = 0; i < 7; i++) {
      this.availabilityTimes.push(new Array<TimeSlot>());
    }
    let timeSlots: Array<TimeSlot> = [];
    this.tss = new TimeSlot();
    this.tss.id = 0;
    this.tss.day = "MON";
    this.tss.start_time = "9:00 am:";
    this.tss.end_time = "10:00 am:";
    this.tss.time_text = "9:00:am to 10:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 1;
    this.tss.day = "MON";
    this.tss.start_time = "10:00 am:";
    this.tss.end_time = "11:00 am:";
    this.tss.time_text = "10:00:am to 11:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 2;
    this.tss.day = "MON";
    this.tss.start_time = "11:00 am:";
    this.tss.end_time = "12:00 pm:";
    this.tss.time_text = "11:00:am to 12:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 3;
    this.tss.day = "MON";
    this.tss.start_time = "12:00 pm:";
    this.tss.end_time = "1:00 pm:";
    this.tss.time_text = "12:00:pm to 1:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 4;
    this.tss.day = "MON";
    this.tss.start_time = "1:00 pm:";
    this.tss.end_time = "2:00 pm:";
    this.tss.time_text = "1:00:pm to 2:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 5;
    this.tss.day = "MON";
    this.tss.start_time = "2:00 pm:";
    this.tss.end_time = "3:00 pm:";
    this.tss.time_text = "2:00:pm to 3:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 6;
    this.tss.day = "MON";
    this.tss.start_time = "3:00 pm:";
    this.tss.end_time = "4:00 pm:";
    this.tss.time_text = "3:00:pm to 4:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 7;
    this.tss.day = "MON";
    this.tss.start_time = "4:00 pm:";
    this.tss.end_time = "5:00 pm:";
    this.tss.time_text = "4:00:pm to 5:00:pm";
    timeSlots.push(this.tss);

    // TUESDAY
    this.tss = new TimeSlot();
    this.tss.id = 0;
    this.tss.day = "TUE";
    this.tss.start_time = "9:00 am:";
    this.tss.end_time = "10:00 am:";
    this.tss.time_text = "9:00:am to 10:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 1;
    this.tss.day = "TUE";
    this.tss.start_time = "10:00 am:";
    this.tss.end_time = "11:00 am:";
    this.tss.time_text = "10:00:am to 11:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 2;
    this.tss.day = "TUE";
    this.tss.start_time = "11:00 am:";
    this.tss.end_time = "12:00 pm:";
    this.tss.time_text = "11:00:am to 12:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 3;
    this.tss.day = "TUE";
    this.tss.start_time = "12:00 pm:";
    this.tss.end_time = "1:00 pm:";
    this.tss.time_text = "12:00:pm to 1:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 4;
    this.tss.day = "TUE";
    this.tss.start_time = "1:00 pm:";
    this.tss.end_time = "2:00 pm:";
    this.tss.time_text = "1:00:pm to 2:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 5;
    this.tss.day = "TUE";
    this.tss.start_time = "2:00 pm:";
    this.tss.end_time = "3:00 pm:";
    this.tss.time_text = "2:00:pm to 3:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 6;
    this.tss.day = "TUE";
    this.tss.start_time = "3:00 pm:";
    this.tss.end_time = "4:00 pm:";
    this.tss.time_text = "3:00:pm to 4:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 7;
    this.tss.day = "TUE";
    this.tss.start_time = "4:00 pm:";
    this.tss.end_time = "5:00 pm:";
    this.tss.time_text = "4:00:pm to 5:00:pm";
    timeSlots.push(this.tss);


    // WEDNESDAY
    this.tss = new TimeSlot();
    this.tss.id = 0;
    this.tss.day = "WED";
    this.tss.start_time = "9:00 am:";
    this.tss.end_time = "10:00 am:";
    this.tss.time_text = "9:00:am to 10:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 1;
    this.tss.day = "WED";
    this.tss.start_time = "10:00 am:";
    this.tss.end_time = "11:00 am:";
    this.tss.time_text = "10:00:am to 11:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 2;
    this.tss.day = "WED";
    this.tss.start_time = "11:00 am:";
    this.tss.end_time = "12:00 pm:";
    this.tss.time_text = "11:00:am to 12:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 3;
    this.tss.day = "WED";
    this.tss.start_time = "12:00 pm:";
    this.tss.end_time = "1:00 pm:";
    this.tss.time_text = "12:00:pm to 1:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 4;
    this.tss.day = "WED";
    this.tss.start_time = "1:00 pm:";
    this.tss.end_time = "2:00 pm:";
    this.tss.time_text = "1:00:pm to 2:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 5;
    this.tss.day = "WED";
    this.tss.start_time = "2:00 pm:";
    this.tss.end_time = "3:00 pm:";
    this.tss.time_text = "2:00:pm to 3:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 6;
    this.tss.day = "WED";
    this.tss.start_time = "3:00 pm:";
    this.tss.end_time = "4:00 pm:";
    this.tss.time_text = "3:00:pm to 4:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 7;
    this.tss.day = "WED";
    this.tss.start_time = "4:00 pm:";
    this.tss.end_time = "5:00 pm:";
    this.tss.time_text = "4:00:pm to 5:00:pm";
    timeSlots.push(this.tss);

    // THURSDAY
    this.tss = new TimeSlot();
    this.tss.id = 0;
    this.tss.day = "THU";
    this.tss.start_time = "9:00 am:";
    this.tss.end_time = "10:00 am:";
    this.tss.time_text = "9:00:am to 10:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 1;
    this.tss.day = "THU";
    this.tss.start_time = "10:00 am:";
    this.tss.end_time = "11:00 am:";
    this.tss.time_text = "10:00:am to 11:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 2;
    this.tss.day = "THU";
    this.tss.start_time = "11:00 am:";
    this.tss.end_time = "12:00 pm:";
    this.tss.time_text = "11:00:am to 12:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 3;
    this.tss.day = "THU";
    this.tss.start_time = "12:00 pm:";
    this.tss.end_time = "1:00 pm:";
    this.tss.time_text = "12:00:pm to 1:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 4;
    this.tss.day = "THU";
    this.tss.start_time = "1:00 pm:";
    this.tss.end_time = "2:00 pm:";
    this.tss.time_text = "1:00:pm to 2:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 5;
    this.tss.day = "THU";
    this.tss.start_time = "2:00 pm:";
    this.tss.end_time = "3:00 pm:";
    this.tss.time_text = "2:00:pm to 3:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 6;
    this.tss.day = "THU";
    this.tss.start_time = "3:00 pm:";
    this.tss.end_time = "4:00 pm:";
    this.tss.time_text = "3:00:pm to 4:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 7;
    this.tss.day = "THU";
    this.tss.start_time = "4:00 pm:";
    this.tss.end_time = "5:00 pm:";
    this.tss.time_text = "4:00:pm to 5:00:pm";
    timeSlots.push(this.tss);

    // FRIDAY
    this.tss = new TimeSlot();
    this.tss.id = 0;
    this.tss.day = "FRI";
    this.tss.start_time = "9:00 am:";
    this.tss.end_time = "10:00 am:";
    this.tss.time_text = "9:00:am to 10:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 1;
    this.tss.day = "FRI";
    this.tss.start_time = "10:00 am:";
    this.tss.end_time = "11:00 am:";
    this.tss.time_text = "10:00:am to 11:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 2;
    this.tss.day = "FRI";
    this.tss.start_time = "11:00 am:";
    this.tss.end_time = "12:00 pm:";
    this.tss.time_text = "11:00:am to 12:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 3;
    this.tss.day = "FRI";
    this.tss.start_time = "12:00 pm:";
    this.tss.end_time = "1:00 pm:";
    this.tss.time_text = "12:00:pm to 1:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 4;
    this.tss.day = "FRI";
    this.tss.start_time = "1:00 pm:";
    this.tss.end_time = "2:00 pm:";
    this.tss.time_text = "1:00:pm to 2:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 5;
    this.tss.day = "FRI";
    this.tss.start_time = "2:00 pm:";
    this.tss.end_time = "3:00 pm:";
    this.tss.time_text = "2:00:pm to 3:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 6;
    this.tss.day = "FRI";
    this.tss.start_time = "3:00 pm:";
    this.tss.end_time = "4:00 pm:";
    this.tss.time_text = "3:00:pm to 4:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 7;
    this.tss.day = "FRI";
    this.tss.start_time = "4:00 pm:";
    this.tss.end_time = "5:00 pm:";
    this.tss.time_text = "4:00:pm to 5:00:pm";
    timeSlots.push(this.tss);

    // SATURDAY
    this.tss = new TimeSlot();
    this.tss.id = 0;
    this.tss.day = "SAT";
    this.tss.start_time = "9:00 am:";
    this.tss.end_time = "10:00 am:";
    this.tss.time_text = "9:00:am to 10:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 1;
    this.tss.day = "SAT";
    this.tss.start_time = "10:00 am:";
    this.tss.end_time = "11:00 am:";
    this.tss.time_text = "10:00:am to 11:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 2;
    this.tss.day = "SAT";
    this.tss.start_time = "11:00 am:";
    this.tss.end_time = "12:00 pm:";
    this.tss.time_text = "11:00:am to 12:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 3;
    this.tss.day = "SAT";
    this.tss.start_time = "12:00 pm:";
    this.tss.end_time = "1:00 pm:";
    this.tss.time_text = "12:00:pm to 1:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 4;
    this.tss.day = "SAT";
    this.tss.start_time = "1:00 pm:";
    this.tss.end_time = "2:00 pm:";
    this.tss.time_text = "1:00:pm to 2:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 5;
    this.tss.day = "SAT";
    this.tss.start_time = "2:00 pm:";
    this.tss.end_time = "3:00 pm:";
    this.tss.time_text = "2:00:pm to 3:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 6;
    this.tss.day = "SAT";
    this.tss.start_time = "3:00 pm:";
    this.tss.end_time = "4:00 pm:";
    this.tss.time_text = "3:00:pm to 4:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 7;
    this.tss.day = "SAT";
    this.tss.start_time = "4:00 pm:";
    this.tss.end_time = "5:00 pm:";
    this.tss.time_text = "4:00:pm to 5:00:pm";
    timeSlots.push(this.tss);

    // SUNDAY
    this.tss = new TimeSlot();
    this.tss.id = 0;
    this.tss.day = "SUN";
    this.tss.start_time = "9:00 am:";
    this.tss.end_time = "10:00 am:";
    this.tss.time_text = "9:00:am to 10:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 1;
    this.tss.day = "SUN";
    this.tss.start_time = "10:00 am:";
    this.tss.end_time = "11:00 am:";
    this.tss.time_text = "10:00:am to 11:00:am";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 2;
    this.tss.day = "SUN";
    this.tss.start_time = "11:00 am:";
    this.tss.end_time = "12:00 pm:";
    this.tss.time_text = "11:00:am to 12:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 3;
    this.tss.day = "SUN";
    this.tss.start_time = "12:00 pm:";
    this.tss.end_time = "1:00 pm:";
    this.tss.time_text = "12:00:pm to 1:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 4;
    this.tss.day = "SUN";
    this.tss.start_time = "1:00 pm:";
    this.tss.end_time = "2:00 pm:";
    this.tss.time_text = "1:00:pm to 2:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 5;
    this.tss.day = "SUN";
    this.tss.start_time = "2:00 pm:";
    this.tss.end_time = "3:00 pm:";
    this.tss.time_text = "2:00:pm to 3:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 6;
    this.tss.day = "SUN";
    this.tss.start_time = "3:00 pm:";
    this.tss.end_time = "4:00 pm:";
    this.tss.time_text = "3:00:pm to 4:00:pm";
    timeSlots.push(this.tss);

    this.tss = new TimeSlot();
    this.tss.id = 7;
    this.tss.day = "SUN";
    this.tss.start_time = "4:00 pm:";
    this.tss.end_time = "5:00 pm:";
    this.tss.time_text = "4:00:pm to 5:00:pm";
    timeSlots.push(this.tss);


    // let timeSlots: Array<TimeSlot> = JSON.parse(window.localStorage.getItem('klc_time_slots'));
    // console.log('time slots: ' + JSON.stringify(timeSlots));
    if (timeSlots) {
      for (let ts of timeSlots) {
        ts.time_text = ts.start_time.substr(0, ts.start_time.lastIndexOf(":")) + " - " + ts.end_time.substr(0, ts.end_time.lastIndexOf(":"));
        switch (ts.day) {
          case "SUN": {
            this.availabilityTimes[0].push(ts);
            break;
          }
          case "MON": {
            this.availabilityTimes[1].push(ts);
            break;
          }
          case "TUE": {
            this.availabilityTimes[2].push(ts);
            break;
          }
          case "WED": {
            this.availabilityTimes[3].push(ts);
            break;
          }
          case "THU": {
            this.availabilityTimes[4].push(ts);
            break;
          }
          case "FRI": {
            this.availabilityTimes[5].push(ts);
            break;
          }
          case "SAT": {
            this.availabilityTimes[6].push(ts);
            break;
          }
        }
      }
    }

    console.log(this.availabilityTimes);
  }

  selectDate(index) {
    console.log(index);
    if (this.dnt == "pick") {
      if (this.datePickupSelectedIndex != index) {
        this.timePickupSelectedIndex = -1;
        this.pickupDateTime = null;
      }
      this.selectpickDate(index);
      var month = (this.pickUpDates[index].getMonth() + 1);
      this.pickUpDate = this.pickUpDates[index].getDate() + '-' + month + '-' + this.pickUpDates[index].getFullYear();
      this.pickUpDateIndex = index;
      console.log('pick up date: ' + this.pickUpDate + ' index is: ' + this.pickUpDateIndex);
    } else {
      if (this.dateDeliverySelectedIndex != index) {
        console.log('selected date for delivery is not equal to index : ' + this.dateDeliverySelectedIndex + ' and : ' + index);
        this.timeDeliverySelectedIndex = -1;
        this.deliveryDateTime = null;
      }
      this.selectDeliverytDate(index);
      var month = (this.deliveryDates[index].getMonth() + 1);
      this.deliveryDate = this.deliveryDates[index].getDate() + '-' + month + '-' + this.deliveryDates[index].getFullYear();
      console.log('delivery date: ' + this.deliveryDate);
    }
  }

  selectTime(index) {
    if (this.dnt == "pick") {
      // console.log('selected pickup time: ' + JSON.stringify(this.times[index]));
      this.pickUpTimeFrom = this.times[index].start_time;
      this.pickUpTimeFrom = this.pickUpTimeFrom.substring(0, this.pickUpTimeFrom.length - 1);
      this.pickUpTimeTo = this.times[index].end_time;
      this.pickUpTimeTo = this.pickUpTimeTo.substring(0, this.pickUpTimeTo.length - 1);

      console.log('selected pickup time: ' + this.pickUpTimeFrom + ' - ' + this.pickUpTimeTo);

      this.selectpickTime(index);
      this.markPickupDateTime();
    } else {
      // console.log('selected delivery time: ' + JSON.stringify(this.times[index]));
      this.deliveryTimeFrom = this.times[index].start_time;
      this.deliveryTimeFrom = this.deliveryTimeFrom.substring(0, this.deliveryTimeFrom.length - 1);

      this.deliveryTimeTo = this.times[index].end_time;
      this.deliveryTimeTo = this.deliveryTimeTo.substring(0, this.deliveryTimeTo.length - 1);

      console.log('selected delivery time: ' + this.deliveryTimeFrom + ' - ' + this.deliveryTimeTo);

      this.selectDeliveryTime(index);
      this.markDeliveryDateTime();
    }
  }

  onSegmentChange() {
    // this.translate.get((this.dnt == "pick") ? "select_pickdate" : "select_deliverydate").subscribe(value => this.selectionDateHeading = value);
    // this.translate.get((this.dnt == "pick") ? "select_picktime" : "select_deliverytime").subscribe(value => this.selectionTimeHeading = value);
    // let indexToShow = this.dnt == "pick" ? this.datePickupSelectedIndex : this.dateDeliverySelectedIndex;
    // this.selectDate((indexToShow && indexToShow > -1) ? indexToShow : 0);
    console.log('segment changed: ' + this.dnt);
    if (this.dnt == "pick") {
      this.selectDate(0);
      this.selectionTimeHeading = "Select Pick up Time";
      this.selectionDateHeading = "Select Pick up Date";
    }
    else {
      this.deliveryDates = [];
      for(let i = this.pickUpDateIndex + 1; i < 14; i++) {
        this.deliveryDates.push(this.dates[i]);
      }
      console.log('total dates: ' + this.dates.length);
      console.log('selected pickup date index = ' + this.pickUpDateIndex + ' and next date is: ' + this.dates[this.pickUpDateIndex + 1]);
      // console.log('delivery dates: ' + this.deliveryDates);
      this.selectDate(0);
      // this.selectTime(0);
      this.selectionDateHeading = "Select Delivery Date";
      this.selectionTimeHeading = "Select Delivery Pick up Time";
    }
  }


  markPickupDateTime() {
    if (this.pickUpDates[this.datePickupSelectedIndex] && this.times[this.timePickupSelectedIndex]) {
      this.pickupDateTime = moment(moment(this.pickUpDates[this.datePickupSelectedIndex]).format("YYYY-MM-DD") + ' ' + this.times[this.timePickupSelectedIndex].start_time).toDate();
      this.pickupSlot = this.times[this.timePickupSelectedIndex].time_text;
    }
  }

  markDeliveryDateTime() {
    if (this.deliveryDates[this.dateDeliverySelectedIndex] && this.times[this.timeDeliverySelectedIndex]) {
      this.deliveryDateTime = moment(moment(this.deliveryDates[this.dateDeliverySelectedIndex]).format("YYYY-MM-DD") + ' ' + this.times[this.timeDeliverySelectedIndex].start_time).toDate();
      this.deliverySlot = this.times[this.timeDeliverySelectedIndex].time_text;
    }
  }

  selectpickDate(index) {
    this.datePickupSelectedIndex = index;

    // let nowTime = new Date().getTime();
    // let toShow = new Array<TimeSlot>();
    // for (let tc of this.availabilityTimes[this.dates[this.datePickupSelectedIndex].getDay()]) {
    //   let pickupTime = moment(moment(this.dates[this.datePickupSelectedIndex]).format("YYYY-MM-DD") + ' ' + tc.start_time).valueOf();
    //   if (nowTime <= pickupTime)
    //     toShow.push(tc);
    // }
    // this.times = toShow;

    this.times = this.availabilityTimes[this.dates[this.datePickupSelectedIndex].getDay()];
  }

  selectpickTime(index) {
    this.timePickupSelectedIndex = index;
  }

  selectDeliverytDate(index) {
    this.dateDeliverySelectedIndex = index;

    // let nowTime = new Date().getTime();
    // let toShow = new Array<TimeSlot>();
    // for (let tc of this.availabilityTimes[this.dates[this.dateDeliverySelectedIndex].getDay()]) {
    //   let deliveryTime = moment(moment(this.dates[this.dateDeliverySelectedIndex]).format("YYYY-MM-DD") + ' ' + tc.start_time).valueOf();
    //   if (nowTime <= deliveryTime)
    //     toShow.push(tc);
    // }
    // this.times = toShow;
    this.times = this.availabilityTimes[this.dates[this.dateDeliverySelectedIndex].getDay()];

  }

  selectDeliveryTime(index) {
    this.timeDeliverySelectedIndex = index;
  }

  isTimeSelected(index): boolean {
    if (this.dnt == "pick") {
      return this.timePickupSelectedIndex == index;
    } else {
      return this.timeDeliverySelectedIndex == index;
    }
  }

  isDateSelected(index): boolean {
    if (this.dnt == "pick") {
      return this.datePickupSelectedIndex == index;
    } else {
      return this.dateDeliverySelectedIndex == index;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectDatetimePage');
  }

  payment() {
    if (!this.pickupDateTime) {
      this.showToast('Select Pick up Time');
    } else if (!this.deliveryDateTime) {
      this.dnt = "delivery";
      this.showToast('Select Delivery Time');

    } else {
      let nowTime = new Date();
      console.log('delivery time: ' + this.deliveryDateTime);
      console.log('pick up time: ' + this.pickupDateTime);
      console.log('now time: ' + nowTime);

      if (this.pickupDateTime < nowTime) {
        this.showToast("Choosen pickup time has already passed");
      } else if (this.deliveryDateTime < nowTime) {
        this.showToast("Choosen delivery time has already passed");

      } else if (this.deliveryDateTime <= this.pickupDateTime) {
        this.showToast("Delivery time cannot be before pickup time");

      } else {
        console.log('navigate to cart page!');
        this.navCtrl.push(CartPage, { pickupTimeFrom: this.pickUpTimeFrom, pickupTimeTo: this.pickUpTimeTo, deliveryTimeFrom: this.deliveryTimeFrom, deliveryTimeTo: this.deliveryTimeTo, pickupDate: this.pickUpDate, deliveryDate: this.deliveryDate });
        // this.navCtrl.push(PaymentPage, { pickupTime: this.pickupDateTime.getTime(), pickupSlot: this.pickupSlot, deliveryTime: this.deliveryDateTime.getTime(), deliverySlot: this.deliverySlot });
      }
    }
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}