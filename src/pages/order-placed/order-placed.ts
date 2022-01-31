import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";

@IonicPage()
@Component({
  selector: 'page-order-placed',
  templateUrl: 'order-placed.html',
})
export class OrderPlacedPage {

  public userDetails: any;

  postData = {
    token: "",
    user_id: "",
    orderid: ""
  };

  viewData = {
    orderid: "",
    fname: "",
    lname: "",
    area: "",
    address: "",
    mobile: "",
    ordertime: "",
    delivery_option: "",
    pickup_date: "",
    delivery_date: "",
    pickup_time_from: "",
    pickup_time_to: "",
    delivery_time_from: "",
    delivery_time_to: "",
    delivery_fee:""
  };
  resposeData: any;
  orderDetail: any;
  orderDetailRetail: any;
  noRetailProducts: boolean = true;
  noClothProducts: boolean = true;
  flag: boolean = false;
  flag1: boolean = true;

  constructor(private loadingCtrl: LoadingController, private auth: HkApiproviderProvider, public navCtrl: NavController, public navParams: NavParams) {

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;

    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;

    this.postData.orderid = navParams.get("orderid");
    this.viewData.orderid = navParams.get("orderid");
    this.viewData.fname = navParams.get("fname");
    this.viewData.lname = navParams.get("lname");
    this.viewData.area = navParams.get("area");
    this.viewData.address = navParams.get("address");
    this.viewData.mobile = navParams.get("mobile");
    this.viewData.ordertime = navParams.get("ordertime");
    this.viewData.delivery_option = navParams.get("delivery_option");
    this.viewData.pickup_date = navParams.get("pickup_date");
    this.viewData.delivery_date = navParams.get("delivery_date");
    this.viewData.pickup_time_from = navParams.get("pickup_time_from");
    this.viewData.pickup_time_to = navParams.get("pickup_time_to");
    this.viewData.delivery_time_from = navParams.get("delivery_time_from");
    this.viewData.delivery_time_to = navParams.get("delivery_time_to");
    this.viewData.delivery_fee = navParams.get("delivery_fee");
    if (this.viewData.delivery_option == "home_delivery") {
      this.flag = true;
      this.flag1 = false;
    }

    this.getOrderDetail();
  }

  getOrderDetail() {
    let zest = this.loadingCtrl.create({
      content: "Getting Data..",
      duration: 20000,
      spinner: 'crescent'
    });

    zest.present();
    this.auth.postData(this.postData, "fetchorderdetail").then(
      result => {
        this.resposeData = result;
        this.orderDetail = this.resposeData.OrderDetail;
        this.orderDetailRetail = this.resposeData.OrderDetailRetail;
        if (this.orderDetailRetail.length > 0) {
          this.noRetailProducts = false;
        }
        else {
          this.noRetailProducts = true;
        }
        if (this.orderDetail.length > 0) {
          this.noClothProducts = false;
        }
        else {
          this.noClothProducts = true;
        }
        console.log('order details: ' + JSON.stringify(this.resposeData));
        zest.dismiss();
      },
      err => {
        zest.dismiss();
      });
  }


}
