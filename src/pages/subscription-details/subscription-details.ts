import { Component, AfterViewInit, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";
import { HomePage } from '../../pages/home/home';
import { PaypalSubsccriptionPage } from '../paypal-subsccription/paypal-subsccription';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SubscriptionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subscription-details',
  templateUrl: 'subscription-details.html',
})
export class SubscriptionDetailsPage implements OnInit {

  subscriptionOpened: any;
  static subscriptionOpenedDetails: any;
  bagDetails: any;
  noBagDetails: boolean = false;
  resposeData: any;
  postData = {
    token: "",
    user_id: "",
    bag_id: ""
  };
  subscriptionData = {
    token: "",
    user_id: "",
    bag_id: "",
    paypal_subscription_id: "",
    subscription_details: ""
  }

  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  static browser: any;

  static susbscriptionPostData: any;
  userDetails: any;

  constructor(public alertCtrl: AlertController, private loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private auth: HkApiproviderProvider, private iab: InAppBrowser) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;
    this.subscriptionData.user_id = this.userDetails.user_id;;
    this.subscriptionData.token = this.userDetails.token;

    this.subscriptionOpened = this.navParams.get("subs");
    SubscriptionDetailsPage.subscriptionOpenedDetails = this.subscriptionOpened;
    console.log(this.subscriptionOpened);
    console.log('OPENED SUBSCRIPTION: ' + JSON.stringify(this.subscriptionOpened));
    // this.getBagDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscriptionDetailsPage');
  }

  ngOnInit() {
    // this.getBagDetails();
    this.getBagDetails();
  }

  ngAfterViewInit() {
  }

  getBagDetails() {
    let zest = this.loadingCtrl.create({
      content: "Getting Data..",
      duration: 20000,
      spinner: 'crescent'
    });

    zest.present();

    this.postData.bag_id = this.subscriptionOpened.id;

    this.auth.postData(this.postData, "getBagDetails").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.BagsDetails) {
          this.bagDetails = this.resposeData.BagsDetails;
          console.log('bag details of opened subscription: ' + JSON.stringify(this.bagDetails));
          this.subscriptionData.subscription_details = this.resposeData.BagsDetails;
          if (this.bagDetails.length == 0) {
            this.noBagDetails = true;
          }
        } else {
        }
        // console.log('order details: ' + JSON.stringify(this.orderDetail));
        zest.dismiss();
      },
      err => {
        zest.dismiss();
      });
  }

  subscribe() {
    // let zest = this.loadingCtrl.create({
    //   content: "Subscribing..",
    //   duration: 20000,
    //   spinner: 'crescent'
    // });

    // zest.present();

    this.subscriptionData.bag_id = this.subscriptionOpened.id;
    SubscriptionDetailsPage.susbscriptionPostData = this.subscriptionData;
    // this.auth.postData(this.subscriptionData, "subscribeUser").then(
    //   result => {
    //     this.resposeData = result;
    //     if (this.resposeData.status == "200") {
    //       /* this.bagDetails = this.resposeData.BagsDetails;
    //       if (!this.bagDetails.length) {
    //         this.bagDetails = [];
    //       } */
    //       let alert = this.alertCtrl.create({
    //         title: 'ALERT',
    //         subTitle: 'Subscribed',
    //         buttons: ['Dismiss']
    //       });
    //       alert.present();
    //       this.navCtrl.setRoot(HomePage, {});
    //     } else {
    //       let alert = this.alertCtrl.create({
    //         title: 'ALERT',
    //         subTitle: 'Falied to Subscribe',
    //         buttons: ['Dismiss']
    //       });
    //       alert.present();
    //     }
    //     // console.log('order details: ' + JSON.stringify(this.orderDetail));
    //     zest.dismiss();
    //   },
    //   err => {
    //     zest.dismiss();
    //   });

    //   let target = "_blank";
    //   // SubscriptionDetailsPage.browser = this.iab.create('./assets/iframeTemplates/paypalSubscription.html', target, this.options);
    //   // SubscriptionDetailsPage.browser = this.iab.create('./assets/iframeTemplates/paypalSubscription.html', target, this.options);
    //   SubscriptionDetailsPage.browser = this.iab.create('http://ur-rent.com:8082/spinwashpaypal/paypalSubscription.html?user_id='+this.postData.user_id, target, this.options);
    //   SubscriptionDetailsPage.browser.on('loadstop').subscribe(event => {
    //     console.log('loaded data');
    //     SubscriptionDetailsPage.browser.insertCSS({ code: "body{color: red;" });
    //   });

    //   SubscriptionDetailsPage.browser.on('exit').subscribe(() => {
    //     console.log('browser closed'); 
    //     console.log('in app broswser closed: ' + localStorage.getItem('subscriptionID'));
    //     //check if user is subscribed 
    //     //update local storage accordingly and redirect to homepage
    // }, err => {
    //     console.error(err);
    // });

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(PaypalSubsccriptionPage);

  }
}
