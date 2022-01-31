import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { HkApiproviderProvider } from '../../providers/hk-apiprovider/hk-apiprovider';

/**
 * Generated class for the MyBagsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-bags',
  templateUrl: 'my-bags.html',
})
export class MyBagsPage {

  postData = {
    token: "",
    user_id: ""
  };
  userDetails: any;
  resposeData: any;
  bagDetails: any;
  noBags: boolean = false;

  constructor(
    public alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: HkApiproviderProvider) {

    this.noBags = false;

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;

    this.getUserSubscriptions();
  }

  getUserSubscriptions() {
    let zest = this.loadingCtrl.create({
      content: "Getting Data..",
      duration: 20000,
      spinner: 'crescent'
    });

    zest.present();
    this.auth.postData(this.postData, "getUserSubscriptions").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.UserSubscriptionDetails) {
          this.bagDetails = this.resposeData.UserSubscriptionDetails;
          console.log('total bags of user: ' + this.bagDetails.length);
          console.log('user subscription bags are: ' + JSON.stringify(this.bagDetails));
          if (this.bagDetails.length == 0) {
            this.noBags = true;
          }
          else {
            this.noBags = false;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBagsPage');
  }

}
