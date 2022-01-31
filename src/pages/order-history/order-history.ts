import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from "ionic-angular";
import { OrderPlacedPage } from "../order-placed/order-placed";
import { ContactPage } from "../contact/contact";
import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: "page-order-history",
  templateUrl: "order-history.html"
})
export class OrderHistoryPage {

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

  resposeData: any;
  orderdata: any;

  constructor(
    private auth: HkApiproviderProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage
  ) {
    this.mPage = 1;
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userDetails.page = this.mPage;
    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;
    this.postData.page = this.userDetails.page;
    this.getorderhistory();
  }

  openOrderDetailPage(orderid: String, fname: String, lname: String, area: String, address: String, mobile: String, ordertime: String, delivery_option: String, delivery_date: String, pickup_date: String, pickup_time_from: String, pickup_time_to: String, delivery_time_from: String, delivery_time_to: String, delivery_fee: String) {
    this.navCtrl.push(OrderPlacedPage, { orderid: orderid, fname: fname, lname: lname, area: area, address: address, mobile: mobile, ordertime: ordertime, delivery_option: delivery_option, delivery_date: delivery_date, pickup_date: pickup_date, pickup_time_from: pickup_time_from, pickup_time_to: pickup_time_to, delivery_time_from: delivery_time_from, delivery_time_to: delivery_time_to, delivery_fee: delivery_fee });
    console.log(orderid);
  }

  openReturnProduct() {
    this.navCtrl.push(ContactPage);
  }

  getorderhistory() {
    let zest = this.loadingCtrl.create({
      content: "Getting Data..",
      duration: 20000,
      spinner: 'crescent'
    });

    zest.present();

    this.auth.postData(this.postData, "fetchorder").then(
      result => {
        this.resposeData = result;
        this.orderdata = this.resposeData.OrderData;
        this.allOrderData = this.orderdata;
        // console.log(this.orderdata.length);
        if (this.orderdata.length == 0) {
          this.showtxt = true;
          this.showHisdata = false;
        } else {
          this.showtxt = false;
          this.showHisdata = true;
          // console.log('total orders data: ' + JSON.stringify(this.orderdata));
        }
        zest.dismiss();
      },
      err => {
        zest.dismiss();
      }
    );
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
