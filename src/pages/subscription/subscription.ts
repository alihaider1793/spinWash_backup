import { Component } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';
import { AlertController, IonicPage, LoadingController, MenuController, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { HkApiproviderProvider } from '../../providers/hk-apiprovider/hk-apiprovider';
import { SubscriptionDetailsPage } from '../subscription-details/subscription-details';

/**
 * Generated class for the SubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
})
export class SubscriptionPage {

  public resposeData: any;
  public userDetails: any;
  public subFullData: any;
  public showtxt: boolean;

  static bagsData : any;

  constructor(
    public navCtrl: NavController,
    private auth: HkApiproviderProvider,
    public navPram: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,

  ) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.getSubscriptions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscriptionPage');
  }

  openSubscriptionDetails(subscription: any){
    console.log('view details of subscription: ' + JSON.stringify(subscription));
    this.navCtrl.push(SubscriptionDetailsPage,{ subs : subscription });
  }

  getSubscriptions() {
    let zest = this.loadingCtrl.create({
      content: "Fetching Subscription!",
      duration: 20000,
      spinner: 'crescent'
    });
    zest.present();

    this.auth.postData(this.userDetails, "getBags").then(
      result => {
        this.resposeData = result;
        this.subFullData = this.resposeData.BagsData;
        SubscriptionPage.bagsData = this.subFullData;
        console.log('total subscriptions: ' + this.subFullData.length);
        if (this.subFullData.length == 0) {
          this.showtxt = true;
        }
        else {
          this.showtxt = false;
        }

        console.log('response data: ' + JSON.stringify(this.subFullData));
        zest.dismiss();
      },
      err => {
        zest.dismiss();
      }
    );
  }

}
