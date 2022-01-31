import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController,
  ToastController
} from "ionic-angular";
import { OrderConfirmPage } from "../order-confirm/order-confirm";
import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";
import { Http } from "@angular/http";
import { HomePage } from '../home/home';
import { PaymentPage } from "../payment/payment";
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: "page-address",
  templateUrl: "address.html"
})
export class AddressPage {

  hasRetailProducts: boolean = false;

  resposeData1: any;
  walletData: any;
  walletAmount = 0;

  resposeData: any;
  orderdataSet: any;
  delivery_charges = 0;
  totalCharges = 0;

  temp1: any = [];
  temp2: any = [];

  amount: any;
  shipping: any;
  finalBill: any;

  expedite_activated: boolean = false;
  expedite_amount: any;
  delivery_fee: any;

  public userDetails: any;
  public boatOrderDetails: any;

  userData = {
    fname: "",
    address: "",
    mobile: "",
    payment: "",
    delivery_option: "",
    island_id: "",
    island_name: "",
    vessel: "",
    shipment_date: "",
  };

  order = {
    token: "",
    user_id: "",
    fname: "",
    address: "",
    payment: "",
    mobile: "",
    token_stripe: "",
    total_amount: "",
    delivery_option: "",
    items: [],
    retail_items: [],
    charity_amount: "",
    charity_id: "",
    island_id: "",
    island_name: "",
    vessel: "",
    shipment_date: "",
    pickup_date: "",
    delivery_date: "",
    pickup_time_from: "",
    pickup_time_to: "",
    delivery_time_from: "",
    delivery_time_to: "",
    updatedBag: [],
    expedite_activated: "",
    expedite_amount: "",
    delivery_fee: ""
  }

  postData = {
    token: "",
    user_id: "",
    amount: ""
  };

  canPayViaSubscriptionn: boolean = false;
  checkIfPayViaSubscription: any = [];


  private pickupTimeFrom: string;
  private pickupTimeTo: string;
  private deliveryTimeFrom: string;
  private deliveryTimeTo: string;
  private pickupDate: string;
  private deliveryDate: string;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public auth: HkApiproviderProvider,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http: Http,
    private payPal: PayPal,
    private storage: Storage

  ) {

    this.hasRetailProducts = false;
    HomePage.cartData.forEach(element => {
      if (element.selectedCategory == "Retail") {
        this.hasRetailProducts = true;
      }
    });

    this.pickupTimeFrom = this.navParams.get('pickupTimeFrom');
    this.pickupTimeTo = this.navParams.get('pickupTimeTo');
    this.deliveryTimeFrom = this.navParams.get('deliveryTimeFrom');
    this.deliveryTimeTo = this.navParams.get('deliveryTimeTo');
    this.pickupDate = this.navParams.get('pickupDate');
    this.deliveryDate = this.navParams.get('deliveryDate');
    this.expedite_activated = this.navParams.get('expedite_activated');
    this.expedite_amount = localStorage.getItem('expediteCharges');
    this.delivery_fee = parseFloat(localStorage.getItem('deliveryCharges'));

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userData.mobile = this.userDetails.mobile;
    this.userData.fname = this.userDetails.fname;
    this.userData.address = this.userDetails.address;
    this.userData.delivery_option = localStorage.getItem('delivery_option');

    if (this.userData.delivery_option == 'boat_order') {
      this.boatOrderDetails = JSON.parse(localStorage.getItem('BoatOrderDetails'));
      this.order.island_id = this.boatOrderDetails.island_id;
      this.order.island_name = this.boatOrderDetails.island_name;
      this.order.vessel = this.boatOrderDetails.vessel;
      this.order.shipment_date = this.boatOrderDetails.shipment_date;
    }

    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;

    this.delivery_charges = parseFloat(localStorage.getItem('deliveryCharges'));
    this.order.charity_amount = localStorage.getItem('charityAmount');
    this.order.charity_id = localStorage.getItem('charityID');

    this.order.expedite_activated = this.expedite_activated.toString();
    this.order.expedite_amount = this.expedite_amount;
    this.order.delivery_fee = this.delivery_fee;

    // console.log('charity name: ', localStorage.getItem('charityID'));
    // console.log('charity amount: ', localStorage.getItem('charityAmount'));
    console.log('Total Bill: ', localStorage.getItem('totalBill'));

    this.finalBill = localStorage.getItem('totalBill');
    this.shipping = localStorage.getItem('deliveryCharges');
    this.amount = localStorage.getItem('cartamount');
  }


  onSubmit() {

    let zest = this.loadingCtrl.create({
      content: "Submitting Order..",
      duration: 20000,
      spinner: 'crescent'
    });

    zest.present();

    this.order.fname = this.userData.fname;
    this.order.mobile = this.userData.mobile;
    this.order.address = this.userData.address;
    this.order.token = this.userDetails.token;
    this.order.user_id = this.userDetails.user_id;
    this.order.payment = this.userData.payment;
    this.order.delivery_option = this.userData.delivery_option;
    this.order.total_amount = localStorage.getItem("totalBill");

    for (let i = 0; i < HomePage.cartData.length; i++) {
      if (HomePage.cartData[i].selectedCategory == 'Retail') {
        this.order.retail_items.push(HomePage.cartData[i]);
        HomePage.cartData.splice(i, 1);
      }
    }

    this.order.items = HomePage.cartData;
    this.order.delivery_date = this.deliveryDate;
    this.order.pickup_date = this.pickupDate;
    this.order.pickup_time_from = this.pickupTimeFrom;
    this.order.pickup_time_to = this.pickupTimeTo;
    this.order.delivery_time_from = this.deliveryTimeFrom;
    this.order.delivery_time_to = this.deliveryTimeTo;

    console.log('BEFORE PLACING ORDER: ', this.order);

    if (this.order.fname != "" && this.order.address != "" && this.order.mobile != "" && this.order.user_id != "" && this.order.token != "" && this.order.delivery_option != "") {

      // if(this.order.delivery_option == "pick_from_store"){
      //   localStorage.setItem('totalBill2',localStorage.getItem('totalBill1'));
      //   this.order.total_amount = localStorage.getItem("totalBill1");
      //   console.log('price to be charged when selected pick_from_store: ',this.order.total_amount);
      //
      // }
      //
      // if(this.order.delivery_option=="home_delivery"){
      //   localStorage.setItem('totalBill2',localStorage.getItem('totalBill'));
      //   this.order.total_amount = localStorage.getItem("totalBill");
      //   console.log('price to be charged when selected home_delivery: ',this.order.total_amount);
      //
      // }

      localStorage.setItem('totalBill2', localStorage.getItem('totalBill'));

      if (this.userData.payment == "cash_on_delivery") {
        console.log('order to be submitted: ' + JSON.stringify(this.order));
        this.auth.postData(this.order, "placeorder").then(
          result => {
            zest.dismiss();
            this.resposeData = result;
            if (this.resposeData.success) {
              this.orderdataSet = this.resposeData.success;
              HomePage.cartData = [];
              //update cart data inside the local storage
              this.storage.set('cartData', HomePage.cartData);
              this.navCtrl.setRoot(OrderConfirmPage, { OrderId: this.orderdataSet });
            } else {
              console.log("Error");
            }
          },
          err => {
            zest.dismiss();
          }
        );
      }
      else if (this.userData.payment == "pay_via_wallet") {
        zest.dismiss();

        //check if amount in wallet is greater than or equal to the total cart bill
        this.getWalletDetails();
      }
      else if (this.userData.payment == "pay_via_stripe") {
        zest.dismiss();
        // this.navCtrl.push(PaymentPage, { orderData: this.order });
        console.log('pay via stripe: ' + this.order);
      }
      else if (this.userData.payment == "pay_via_paypal") {
        zest.dismiss();
        this.payy();
      }
      else if (this.userData.payment == "pay_via_subscription") {
        console.log('paying via subscription');

        if (this.order.items.length == 1) {
          this.canPayViaSubscriptionn = false;

          HomePage.userSubscriptions.forEach(bag => {
            if (this.order.items[0].itemquantitytype == bag.service_name && this.order.items[0].itemname == bag.item_name && this.order.items[0].Mquantity <= bag.quantity && bag.quantity != 0) {
              console.log('this can be paid via subscription');
              this.canPayViaSubscriptionn = true;
            }
          });
          this.checkIfPayViaSubscription.push(this.canPayViaSubscriptionn);

        }
        else {
          this.canPayViaSubscriptionn = false;

          this.order.items.forEach(element => {
            HomePage.userSubscriptions.forEach(element1 => {
              if (element.itemquantitytype == element1.service_name && element.itemname == element1.item_name && element.Mquantity <= element1.quantity && element1.quantity != 0) {
                this.canPayViaSubscriptionn = true;
              }
            });
            if (this.canPayViaSubscriptionn == false) {
              console.log('this can not be paid via subscription');
            }
            else if (this.canPayViaSubscriptionn == true) {
              console.log('this can paid via subscription');
            }
            this.checkIfPayViaSubscription.push(this.canPayViaSubscriptionn);
            this.canPayViaSubscriptionn = false;
          });

          // this.checkIfPayViaSubscription.forEach(element => {
          //   if(element == false) {
          //     console.log('can not pay via subscription');
          //     this.canPayViaSubscriptionn = false;
          //   }
          // });
        }

        let checker = arr => arr.every(v => v === true);
        console.log('can pay via subscriptions?? ' + checker(this.checkIfPayViaSubscription));

        if (!checker(this.checkIfPayViaSubscription)) {

          zest.dismiss();

          let alert = this.alertCtrl.create({
            title: ' ALERT',
            subTitle: 'You can not pay for these items via your subscription! Pay via cash?',
            buttons: ['Dismiss']
          });
          alert.present();

        }
        else {
          console.log('updating user bag details');
          // subtract the things from user bag and update user subscription and place order
          HomePage.userSubscriptions.forEach(element => {
            this.order.items.forEach(element1 => {
              if (element.service_name == element1.itemquantitytype && element.item_name == element1.itemname && element.quantity >= element1.Mquantity) {
                element.quantity = element.quantity - element1.Mquantity;
                this.order.updatedBag.push(element);
              }
            });
          });

          console.log('placing order: ' + JSON.stringify(this.order.updatedBag));

          this.auth.postData(this.order, "placeorder").then(
            result => {
              zest.dismiss();
              this.resposeData = result;
              if (this.resposeData.success) {
                this.orderdataSet = this.resposeData.success;
                HomePage.cartData = [];
                //update cart data inside the local storage
                this.storage.set('cartData', HomePage.cartData);
                this.navCtrl.setRoot(OrderConfirmPage, { OrderId: this.orderdataSet });
              } else {
                console.log("Error");
              }
            },
            err => {
              zest.dismiss();
            }
          );

        }

      }
      else {
        let alert = this.alertCtrl.create({
          title: ' ALERT',
          subTitle: 'No Payment Method Selected',
          buttons: ['Dismiss']
        });
        alert.present();
        zest.dismiss();
      }
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Something Went Wrong',
        subTitle: 'Please Provide All Details',
        buttons: ['Dismiss']
      });
      alert.present();
      zest.dismiss();
    }
  }

  removeFromWallet() {
    this.auth.postData(this.postData, "updateWallet").then(
      result => {
        this.resposeData = result;
        console.log("updated amount in wallet: ", this.resposeData);
        this.placeOrderViaWallet();
      },
      err => {
        console.log('error: updating amount in wallet: ', err);
        let alert = this.alertCtrl.create({
          subTitle: 'server error: updating amount in wallet failed',
          buttons: ['Dismiss']
        });
        alert.present();
      }
    );
  }

  placeOrderViaWallet() {
    let zest = this.loadingCtrl.create({
      content: "Submitting Order..",
      duration: 20000,
      spinner: 'crescent'
    });

    zest.present();

    this.auth.postData(this.order, "placeorder").then(
      result => {
        zest.dismiss();
        this.resposeData = result;
        if (this.resposeData.success) {
          this.orderdataSet = this.resposeData.success;
          HomePage.cartData = [];
          //update cart data inside the local storage
          this.storage.set('cartData', HomePage.cartData);
          this.navCtrl.setRoot(OrderConfirmPage, { OrderId: this.orderdataSet });
        } else {
          console.log("Error");
        }
      },
      err => {
        zest.dismiss();
      }
    );
  }

  getWalletDetails() {
    this.auth.postData(this.postData, "fetchwallet").then(
      result => {
        this.resposeData1 = result;
        this.walletData = this.resposeData1.WalletData;
        if (this.walletData.length == 0) {
          //show error alert
          let alert = this.alertCtrl.create({
            subTitle: 'Your Wallet Is Empty. Select Another Payment Method',
            buttons: ['Dismiss']
          });
          alert.present();
        } else {
          this.walletAmount = parseFloat(this.walletData[0].amount);
          //check if bill is less than wallet amount
          if (parseFloat(this.walletData[0].amount) > parseFloat(localStorage.getItem('totalBill'))) {
            // this.walletAmount = (parseFloat(this.walletData[0].amount) - parseFloat(localStorage.getItem('totalBill'))) * -1;
            this.walletAmount = (parseFloat(localStorage.getItem('totalBill'))) * -1;
            this.postData.amount = this.walletAmount.toFixed(2).toString();
            this.removeFromWallet();
            console.log("You can pay with your wallet. ", this.walletData[0].amount);
          }
          else {
            console.log('not enough amount in the wallet');
            let alert = this.alertCtrl.create({
              subTitle: 'Not Enough Amount In The Wallet. Select Another Payment Method',
              buttons: ['Dismiss']
            });
            alert.present();
          }
        }
      },
      err => {
        console.log('error: getting wallet details: ', err);
      }
    );
  }

  canPayViaSubscription() {
    if (localStorage.getItem('isSubscribed') != '0') {
      return false;
    }
    else {
      return true;
    }
  }

  payy() {
    console.log('initializing paypal');

    this.payPal.init({
      PayPalEnvironmentProduction: 'AcfgY0HIj78N_WBdb9Ky6J-FXzBVV5I8lxuEG6KT93GLw3YQNoXH6v4vuElWrHEFf8dLuwVLKWW060Xg',
      PayPalEnvironmentSandbox: 'AbqAb57k-dK7En-rC0DP6EZUZ6VucPCmAuDKatpxY45y1_72q9_CsUPd1JE24xwxyuukwtsBU7wOQ-DA'
    }).then(() => {
      console.log("initialized paypal");

      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(localStorage.getItem('totalBill2'), 'USD', 'Total Bill', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
          // Successfully paid
          console.log("payment successful");

          //store order data into
          this.auth.postData(this.order, "placeorder").then(
            result => {
              this.resposeData = result;
              if (this.resposeData.success) {
                this.orderdataSet = this.resposeData.success
                HomePage.cartData = [];
                //update cart data inside the local storage
                this.storage.set('cartData', HomePage.cartData);
                this.navCtrl.setRoot(OrderConfirmPage, { OrderId: this.orderdataSet });
              } else {
                console.log("Error");
              }
            },
            err => {
            }
          );
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Error or render dialog closed without being successful
          console.log('failed to process transaction');
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }

}

