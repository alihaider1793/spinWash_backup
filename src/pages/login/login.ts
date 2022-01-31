import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";
import { RegisterPage } from '../register/register';
import { TermsAndConditionsPage } from "../terms-and-conditions/terms-and-conditions";
import { ForgotPasswordPage } from "../forgot-password/forgot-password";
import { getResponseURL } from "@angular/http/src/http_utils";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  resposeData: any;
  pID: any;
  userData = {
    "email": "",
    "password": "",
    "pID": ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, public authService: HkApiproviderProvider, public alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.menuCtrl.enable(false);
  }


  guestLogin() {
    let loader = this.loadingCtrl.create({
      content: "Fetching Data",
      duration: 10000
    });
    loader.present();
    this.userData.email = "guest@user.com";
    this.userData.password = "guestuser123";
    this.pID = localStorage.getItem("pID");
    this.userData.pID = this.pID;
    this.authService.postData(this.userData, "login").then((result) => {
      loader.dismiss();
      this.resposeData = result;

      console.log("guest login userData: ", this.resposeData);

      if (this.resposeData.userData) {
        this.pID = localStorage.getItem('pID');
        localStorage.setItem('userData', JSON.stringify(this.resposeData).replace("}}", ",\"pID\":\"" + this.pID + "\",\"page\":\"1\",\"delivery_option\":\" \"}}"));
        this.navCtrl.setRoot(HomePage);
      } else if (this.resposeData.error) {
        console.log("ERROR : ", this.resposeData.error);
        this.showalertinfo();
      }
    }, (err) => {
      loader.dismiss();
      this.showalertinfo();
      console.log("CONNECTION ERROR");
      //Connection failed message
    });
  }


  login() {

    let loader = this.loadingCtrl.create({
      content: "Fetching Data",
      duration: 10000
    });
    loader.present();
    if (this.userData.email != "" && this.userData.password != "") {
      this.pID = localStorage.getItem("pID");
      this.userData.pID = this.pID;
      this.authService.postData(this.userData, "login").then((result) => {
        loader.dismiss();
        this.resposeData = result;


        if (this.resposeData.userData) {
          this.pID = localStorage.getItem('pID');
          localStorage.setItem('userData', JSON.stringify(this.resposeData).replace("}}", ",\"pID\":\"" + this.pID + "\",\"page\":\"1\",\"delivery_option\":\" \"}}"));
          console.log('userData after login: ' + localStorage.getItem('userData'));
          localStorage.setItem('isSubscribed', this.resposeData.userData.is_subscribed);
          this.navCtrl.setRoot(HomePage);
        } else if (this.resposeData.error) {
          console.log("ERROR : ", this.resposeData.error);
          this.showalertinfo();
        }
      }, (err) => {
        loader.dismiss();
        this.showalertinfo();
        console.log("CONNECTION ERROR");
        //Connection failed message
      });
    }
    else {
      loader.dismiss();
      this.showalertinfo();
    }

  }

  showalertinfo() {
    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: "Login Failed!",
      buttons: ["OK"]
    });
    alert.present();
  }

  onregister() {
    this.navCtrl.setRoot(RegisterPage);
  }

  onForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
