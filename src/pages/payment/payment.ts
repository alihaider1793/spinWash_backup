import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { daysInMonth } from 'ionic-angular/umd/util/datetime-util';
import { HomePage } from '../home/home';
import { OrderConfirmPage } from "../order-confirm/order-confirm";
import { LoginPage } from "../login/login";


/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var Stripe;

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  stripe = Stripe('pk_test_08ttNxfeqEq0b3wepDezSUy7');
  card: any;
  loading: any;
  response: any;
  resposeData :any;
  orderData:any;
  orderdataSet:any;
  totalBill= localStorage.getItem("totalBill2");

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public auth: HkApiproviderProvider,
    //  public apiProvider: ApiProvider,
     public alertCtrl: AlertController,
     public loadingCtrl: LoadingController) {
       console.log("from",this.navParams.get('orderData'));
       //add stripe_token in orderData
       this.orderData = this.navParams.get('orderData');
      }

    ionViewDidLoad() {

      this.setupStripe();
    }

    placeOrder(){

    // this.setupStripe();

    let zest = this.loadingCtrl.create({
      content: "Processing Payment..",
      duration:20000,
      spinner:'crescent'
    });

    zest.present();

    console.log("BEFORE SENDING",this.orderData);

    this.auth.postData(this.orderData, "placeorder").then(
      result => {
        zest.dismiss();
        this.resposeData = result;
        console.log("Result",result);
        if(this.resposeData.success){

          console.log("ORDER INSETRED AFTER PAYMENT");
          this.presentAlert();
          zest.dismiss();

          // this.orderdataSet = this.resposeData.success;
          // this.navCtrl.setRoot(OrderConfirmPage,{ OrderId: this.orderdataSet });
        }else{
          console.log("Error");
          this.failpresentAlert();
        }
      },
      err => {
        zest.dismiss();
      }
    );


    // this.setupStripe();
    // console.log(this.resDetail);
    // this.presentLoadingDefault();
    // this.apiProvider.bookProperty(this.resDetail)
    // .subscribe(data=>{


    //   if(data.status==true){
    //   this.response=data
    //   console.log('Res Posted:',this.response.status);

    //   this.loading.dismiss();
    //   this.presentAlert();
    //   }
    //   if(data.status==false){

    //     this.loading.dismiss();
    //     this.failpresentAlert();

    //   }

    // })

  }


presentLoadingDefault() {
  this.loading = this.loadingCtrl.create({
   content: 'Please wait...'
 });

 this.loading.present();
}

  presentAlert() {

    let alert = this.alertCtrl.create({
      title: 'Congratulations!',
      subTitle: 'Your payment has been successfully processed',
      buttons: [{
        text: 'OK',
        role: 'dismiss',
        handler: () => {
          console.log('Ok clicked');
          this.orderdataSet = this.resposeData.success;
          this.navCtrl.setRoot(OrderConfirmPage,{ OrderId: this.orderdataSet });
          // this.navCtrl.push(LoginPage);
          // this.navCtrl.setRoot(DashboardPage);
          //this.navCtrl.push(ExplorePage);
        }
      }],enableBackdropDismiss : false
    });
    alert.present();
  }


  failpresentAlert() {

    let alert = this.alertCtrl.create({
      title: 'Sorry!',
      subTitle: 'Due to some problem property cannot be reserved. Please try again',
      buttons: [{
        text: 'OK',
        role: 'dismiss',
        handler: () => {
          console.log('Not posted Ok clicked');
         // this.navCtrl.parent.parent.setRoot(DashboardPage);
        }
      }],enableBackdropDismiss : false
    });
    alert.present();
  }

  setupStripe(){
    let elements = this.stripe.elements();

    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });


    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');

    console.log("Form:",form);
    form.addEventListener('submit', event => {

      event.preventDefault();

       this.stripe.createToken(this.card)
   //   this.stripe.createSource(this.card)
      .then(result => {
        console.log("Foran:",document.getElementsByName('cvc')[0]);
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {

          this.orderData.token_stripe = result.token.id;
          // this.resDetail.token=result.token.id;
          // console.log("Token:",this.resDetail.token);
          this.placeOrder();

          console.log("Card details",result);

        //  console.log("Card details1",this.card);
        }
      });
    });
  }

}
