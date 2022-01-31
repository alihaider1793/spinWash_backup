import { Component } from "@angular/core";
import {
  AlertController,
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { AddressPage } from "../address/address";
import { HomePage } from '../home/home';
import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";
import { Storage } from '@ionic/storage';
import { RegisterPage } from "../register/register";
import { BoatOrderDetailsPage } from "../boat-order-details/boat-order-details";


@IonicPage()
@Component({
  selector: "page-cart",
  templateUrl: "cart.html"
})
export class CartPage {

  shipping = 0;
  amount = 0;
  VATax = 0;
  finalamount = 0;
  finalBill: any = "";
  delivery_option: any;

  charity_activated: boolean = false;
  expedite_activated: boolean = false;
  expedite_amount_added: boolean = false;
  private charityAccounts: any;
  private responseData: any;

  charity_amount = 0;
  charityID: any = "";
  expedite_amount: any;
  private names: Array<string>;
  userDetails: any;


  public showtxt: boolean;
  public showcartdata: boolean;

  public baseUrlImage: String;

  cartquantity = 1;
  finalcartdata;

  private pickupTimeFrom: string;
  private pickupTimeTo: string;
  private deliveryTimeFrom: string;
  private deliveryTimeTo: string;
  private pickupDate: string;
  private deliveryDate: string;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController,
    private auth: HkApiproviderProvider,
    private storage: Storage

  ) {
    this.baseUrlImage = auth.getimage();
    this.finalcartdata = HomePage.cartData;

    this.pickupTimeFrom = this.navParams.get('pickupTimeFrom');
    this.pickupTimeTo = this.navParams.get('pickupTimeTo');
    this.deliveryTimeFrom = this.navParams.get('deliveryTimeFrom');
    this.deliveryTimeTo = this.navParams.get('deliveryTimeTo');
    this.pickupDate = this.navParams.get('pickupDate');
    this.deliveryDate = this.navParams.get('deliveryDate');
    this.expedite_amount = parseFloat(localStorage.getItem('expediteCharges'));
    if (this.finalcartdata.length == 0) {
      this.showtxt = true;
      this.showcartdata = false;
    } else {
      this.showtxt = false;
      this.showcartdata = true;
    }
    this.shipping = parseFloat(localStorage.getItem('deliveryCharges'));
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    // this.getCharityAccounts();
    this.calculatecart();
    this.names = ['charity1', 'charity2', 'charity3', 'charity4'];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CartPage");
  }
  updateCharity() {
    if (this.charity_activated == false) {
      //update values accordingly
      this.charity_amount = -1;
      this.charityID = -1;
    }
    this.calculatecart();
    console.log('charity_activated? :', this.charity_activated);
  }

  // getCharityAccounts() {

  //   this.auth.postData(this.userDetails, "getCharityAccounts").then(
  //     result => {
  //       this.responseData = result;
  //       this.charityAccounts = this.responseData.charityData;
  //       console.log('charityAccounts: ', this.charityAccounts);
  //     },
  //   );
  // }

  isGuestLogin() {
    if (this.userDetails.fname == "guest") {
      return true;
    }
    else {
      return false;
    }
  }

  showRegisterPrompt() {
    // let alert = this.alertCtrl.create({
    //   title: 'ALERT',
    //   subTitle: 'You must have an account to place an order!',
    //   buttons: ['Dismiss']
    // });
    // alert.present();
    let alert = this.alertCtrl.create({
      title: 'ALERT',
      message: 'You must have an account to place an order!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Register',
          handler: () => {
            console.log('Buy clicked');
            this.navCtrl.setRoot(RegisterPage);
          }
        }
      ]
    });
    alert.present();
  }

  goToCheckout() {
    if (this.charity_activated == true && this.charityID == "") {
      let alert = this.alertCtrl.create({
        title: ' ALERT',
        subTitle: 'No Charity Account Selected',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else if (this.delivery_option == "home_delivery" || this.delivery_option == "pick_from_store") {
      if (this.charity_activated == false) {
        this.charity_amount = 0;
        this.charityID = -1;
      }
      localStorage.setItem('totalBill', this.finalamount.toFixed(2).toString());
      localStorage.setItem('charityAmount', this.charity_amount.toFixed(2).toString());
      localStorage.setItem('charityID', this.charityID);
      this.navCtrl.push(AddressPage);
    }
    else if (this.delivery_option == 'boat_order') {
      if (this.charity_activated == false) {
        this.charity_amount = 0;
        this.charityID = -1;
      }
      localStorage.setItem('totalBill', this.finalamount.toFixed(2).toString());
      localStorage.setItem('charityAmount', this.charity_amount.toFixed(2).toString());
      localStorage.setItem('charityID', this.charityID);
      this.navCtrl.push(BoatOrderDetailsPage);
    }
    else {
      let alert = this.alertCtrl.create({
        title: ' ALERT',
        subTitle: 'No Delivery Option Selected',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  presentCharityAlert() {

    if (this.delivery_option == "home_delivery" || this.delivery_option == "pick_from_store") {

      var options = {
        title: 'Choose a charity account',
        message: 'Where do you want to send the charity amount?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: data => {
              console.log(data);
              localStorage.setItem('totalBill', this.finalamount.toFixed(2).toString());
              localStorage.setItem('charityAmount', this.charity_amount.toFixed(2).toString());
              localStorage.setItem('charityID', data);
              this.navCtrl.push(AddressPage);
            }
          }
        ]
      };
      //
      // options.inputs = [];
      //
      //
      // this.charityAccounts.forEach(function (value) {
      //   // console.log(value);
      //   options.inputs.push({name : 'options', value: value.id, label:value.charity_name, type:'radio'});
      // });

      // // Now we add the radio buttons
      // for(let i=0; i< this.names.length; i++) {
      //   if(i==0){
      //     options.inputs.push({ name : 'options', value: this.names[i], label: this.names[i], type: 'radio' , checked:true});
      //   }
      //   options.inputs.push({ name : 'options', value: this.names[i], label: this.names[i], type: 'radio' });
      // }

      // Create the alert with the options
      let alert = this.alertCtrl.create(options);
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: ' ALERT',
        subTitle: 'No Delivery Option Selected',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  selectaddress() {
    localStorage.setItem('totalBill', this.finalamount.toFixed(2).toString());
    this.navCtrl.push(AddressPage, { pickupTimeFrom: this.pickupTimeFrom, pickupTimeTo: this.pickupTimeTo, deliveryTimeFrom: this.deliveryTimeFrom, deliveryTimeTo: this.deliveryTimeTo, pickupDate: this.pickupDate, deliveryDate: this.deliveryDate, expedite_activated: this.expedite_activated });
  }

  calculatecart() {
    this.amount = 0;
    for (let item of this.finalcartdata) {
      this.amount += parseFloat(item.itemprice) * parseFloat(item.Mquantity);
      // console.log(this.amount);
    }
    //this is total bill without shipping charges & VAT
    // localStorage.setItem("totalBill1",this.amount.toString());
    this.finalamount = +this.amount + +this.shipping;
    this.finalBill = this.finalamount.toFixed(2);
    //this is total bill without VAT but with shipping charges
    // localStorage.setItem("totalBill",this.finalamount.toString());

    // this.VATax = parseFloat((this.finalamount * 0.12).toFixed(2));
    // this.finalamount = parseFloat((this.finalamount + this.VATax).toFixed(2));
    localStorage.setItem('totalBill', this.finalamount.toFixed(2).toString());
    localStorage.setItem('cartamount', this.amount.toFixed(2).toString());

    console.log('final amount: ', this.finalamount.toFixed(2));
  }

  updateCartAmount() {
    if (this.expedite_activated == true) {
      //add to expedite charges in total
      console.log('final amount: ' + this.finalamount);
      console.log('expedite amount: ' + this.expedite_amount);
      this.finalamount = this.finalamount + this.expedite_amount;
      this.finalBill = this.finalamount.toFixed(2);
      console.log(' after adding expedite amount: ' + (this.finalamount));
      this.expedite_amount_added = true;
    }
    else if (this.expedite_activated == false && this.expedite_amount_added == true) {
      //remove expedite charges from total
      console.log('final amount: ' + this.finalamount);
      console.log('expedite amount: ' + this.expedite_amount);
      this.finalamount = this.finalamount - this.expedite_amount;
      this.finalBill = this.finalamount.toFixed(2);
      console.log(' after removing expedite amount: ' + (this.finalamount));
      this.expedite_amount_added = false;
    }
  }

  emptycart() {
    HomePage.cartData = [];
    //update cart data inside the local storage
    this.storage.set('cartData', HomePage.cartData);
    this.navCtrl.popToRoot();
  }

  changeQty(i, change) {

    let qty = parseInt(this.finalcartdata[i].Mquantity);
    qty += parseInt(change);

    if (qty != 0) {
      this.finalcartdata[i].Mquantity = qty.toString();
      this.calculatecart();
    }
    if (qty == 0) {

      // this.finalcartdata.splice(i, 1);
      HomePage.cartData.splice(i, 1);
      this.finalcartdata = HomePage.cartData;

      //update the cart data inside the local storage
      this.storage.set('cartData', HomePage.cartData);


      console.log("homepage.cartdata ", HomePage.cartData);
      console.log("finalcartdata: ", this.finalcartdata);

      if (this.finalcartdata.length <= 0) {
        this.showtxt = true;
        this.showcartdata = false;
      }
      this.calculatecart();
    }

    this.toastController.create({
      message: "Cart Updated.",
      duration: 2000
    }).present();
  }

  homeDeliveryChecked() {
    this.shipping = parseFloat(localStorage.getItem('deliveryCharges'));
    this.calculatecart();
    localStorage.setItem('delivery_option', this.delivery_option);
  }

  pickFromStoreSelected() {
    this.shipping = 0;
    this.calculatecart();
    localStorage.setItem('delivery_option', this.delivery_option);
  }

  boatOrderSelected() {
    this.shipping = 0;
    this.calculatecart();
    localStorage.setItem('delivery_option', this.delivery_option);
  }

  charitySelected() {
    console.log("selected charityAccount: ", this.charityID);
    this.charity_amount = Math.round(Number(localStorage.getItem('totalBill')));
    // console.log(Math.round(Number(localStorage.getItem('totalBill'))));
    if (this.charity_amount > this.finalamount) {
      // console.log(this.charity_amount,"charityIncluded");
      console.log('charity amount is: ', this.charity_amount - this.finalamount, " and total bill is: ", this.finalamount + (this.charity_amount - this.finalamount));
      this.charity_amount = parseFloat((this.charity_amount - this.finalamount).toFixed(2));
      this.finalamount = parseFloat((this.finalamount + this.charity_amount).toFixed(2));

    }
    else {
      this.charity_amount = Math.round(this.finalamount) + 1;
      this.charity_amount = parseFloat((this.charity_amount - this.finalamount).toFixed(2));
      console.log('charity amount is: ', this.charity_amount, " and total bill is: ", this.finalamount + this.charity_amount);
      this.finalamount = parseFloat((this.finalamount + this.charity_amount).toFixed(2));
    }
  }

  charityNotSelected() {
    console.log(localStorage.getItem('totalBill'), "charityExcluded");
  }
}
