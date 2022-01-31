import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SubscriptionDetailsPage } from '../subscription-details/subscription-details';
/**
 * Generated class for the PaypalSubsccriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paypal-subsccription',
  templateUrl: 'paypal-subsccription.html',
})
export class PaypalSubsccriptionPage {

  paypalSubscriptionName: any = "";
  paypalSubscriptionURL: any = "";
  bronze: boolean = false;
  silver: boolean = false;
  gold: boolean = false;

  // options: InAppBrowserOptions = {
  //   location: 'yes',//Or 'no' 
  //   hidden: 'no', //Or  'yes'
  //   clearcache: 'yes',
  //   clearsessioncache: 'yes',
  //   zoom: 'yes',//Android only ,shows browser zoom controls 
  //   hardwareback: 'yes',
  //   mediaPlaybackRequiresUserAction: 'no',
  //   shouldPauseOnSuspend: 'no', //Android only 
  //   closebuttoncaption: 'Close', //iOS only
  //   disallowoverscroll: 'no', //iOS only 
  //   toolbar: 'yes', //iOS only 
  //   enableViewportScale: 'no', //iOS only 
  //   allowInlineMediaPlayback: 'no',//iOS only 
  //   presentationstyle: 'pagesheet',//iOS only 
  //   fullscreen: 'yes',//Windows only    
  // };

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    // let target = "_blank";
    // const browser = this.iab.create('./assets/iframeTemplates/paypalSubscription.html', target, this.options);
    // browser.on('loadstop').subscribe(event => {
    //   console.log('loaded data');
    //   browser.insertCSS({ code: "body{color: red;" });
    // });

    if (SubscriptionDetailsPage.subscriptionOpenedDetails.id == 3) {
      this.bronze = true;
      this.silver = false;
      this.gold = false;
    }
    if (SubscriptionDetailsPage.subscriptionOpenedDetails.id == 8) {
      this.silver = true;
      this.bronze = false;
      this.gold = false;
    }
    if (SubscriptionDetailsPage.subscriptionOpenedDetails.id == 7) {
      this.gold = true;
      this.silver = false;
      this.bronze = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaypalSubsccriptionPage');
  }

  // canceledPaypalSubscription() {
  //   console.log('paypal subscription cancelled');
  // }

}
