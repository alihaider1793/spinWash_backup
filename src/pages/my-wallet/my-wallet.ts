import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HkApiproviderProvider} from "../../providers/hk-apiprovider/hk-apiprovider";

/**
 * Generated class for the MyWalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-wallet',
  templateUrl: 'my-wallet.html',
})
export class MyWalletPage {

  public showtxt:boolean ;
  public showData:boolean;
  public userDetails:any;

  resposeData: any;
  walletData:any;

  postData = {
    token: "",
    user_id:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: HkApiproviderProvider) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;
    this.getWalletDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyWalletPage');
  }

  getWalletDetails(){
    this.auth.postData(this.postData, "fetchwallet").then(
      result => {
        this.resposeData = result;
        this.walletData = this.resposeData.WalletData;
        if(this.walletData.length == 0){
          this.showtxt = true;
          this.showData = false;
        }else{
          this.showtxt = false;
          this.showData = true;
        }
      },
      err => {
        console.log('error: getting wallet details: ',err);
      }
    );
  }

}
