import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HkApiproviderProvider } from '../../providers/hk-apiprovider/hk-apiprovider';
import { OrderPlacedPage } from '../order-placed/order-placed';

/**
 * Generated class for the SamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html',
})
export class SamplePage {

  public userDetails: any;
  private mPage = 1;
  private pageLimit = 10;
  allOrderData: any;

  postData = {
    token: "",
    page: "",
    user_id: ""
  };

  userHis: any;

  public showtxt: boolean;
  public showHisdata: boolean;
  public showMessageDetails: boolean= false;
  public msgToShow:any;

  resposeData: any;
  orderdata: any;

  constructor(private auth: HkApiproviderProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

    this.mPage = 1;
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userDetails.page = this.mPage;
    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;
    this.postData.page = this.userDetails.page;
    this.getorderhistory();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamplePage');
  }

  getorderhistory() {
    let zest = this.loadingCtrl.create({
      content: "Getting Data..",
      duration: 20000,
      spinner: 'crescent'
    });

    zest.present();

    this.auth.postData(this.postData, "fetchMessages").then(
      result => {
        this.resposeData = result;
        this.orderdata = this.resposeData.MessagesData;
        console.log('messages data: ', this.orderdata);
        this.allOrderData = this.orderdata;
        console.log(this.orderdata.length);
        if (this.orderdata.length == 0) {
          this.showtxt = true;
          this.showHisdata = false;
        } else {
          this.showtxt = false;
          this.showHisdata = true;
        }
        zest.dismiss();
      },
      err => {
        zest.dismiss();
      }
    );
  }

  openMessageDetail(item: any) {
    this.showMessageDetails= true;
    this.msgToShow = item;
    console.log('Display message details: ',this.msgToShow);
  }

  showAllMessages(){
    this.getorderhistory();
    this.showMessageDetails= false;
  }


  openOrderDetailPage(orderid: String, fname: String, lname: String, area: String, address: String, mobile: String, ordertime: String, delivery_option: String) {
    this.navCtrl.push(OrderPlacedPage, { orderid: orderid, fname: fname, lname: lname, area: area, address: address, mobile: mobile, ordertime: ordertime, delivery_option: delivery_option });
    console.log(orderid);
  }

  doInfinite2(infiniteScroll) {
    this.mPage = this.mPage + 1;
    this.userDetails.page = this.mPage;
    this.postData.page = this.userDetails.page;
    console.log("PAGE NUMBER AFTER INCREMENT: ", this.userDetails.page);

    this.auth.postData(this.postData, "fetchorder").then((result) => {
      this.resposeData = result;
      this.orderdata = this.resposeData.OrderData;
      console.log("SIZE OF RESULT: ", this.orderdata.length);
      if (this.orderdata.length < this.pageLimit) {
        infiniteScroll.enable(false);
      }
      for (let i = 0; i < this.orderdata.length; i++) {
        this.allOrderData.push(this.orderdata[i]);
      }
      infiniteScroll.complete();
    }, (err) => {

    });
  } // End doInfinite1

}
