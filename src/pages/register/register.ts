import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";
import { LoginPage } from '../login/login';
import {TermsAndConditionsPage} from "../terms-and-conditions/terms-and-conditions";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  regex :any;
  resposeData : any;
  pID: any;
  userData = {"name":"","mobile":"","address":"","email":"", "password":"", "pID":""};
  emialFlag:boolean = false;

  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, public authService: HkApiproviderProvider, public alertCtrl: AlertController, private loadingCtrl: LoadingController) {
      this.menuCtrl.enable(false);
  }

  onTermsAndConditions(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

  showDisclaimer(){
    this.showAlertInfo111();
  }

 register(){
    let loader = this.loadingCtrl.create({
          content: "Fetching Server",
          duration: 10000
        });
        loader.present();
        this.regex = new RegExp ("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})");
      // console.log(this.regex.test(this.userData.email));
      this.emialFlag = this.regex.test(this.userData.email);

      if(this.userData.email == "" || this.userData.password == "" || this.userData.name == "" || this.userData.mobile == "" || this.userData.address == ""){
        loader.dismiss();
        this.showalertinfo1();
      }

      else if(this.emialFlag == false){
        loader.dismiss();
        this.showalertinfo2();
      }
      else{

    if(this.userData.email != "" && this.userData.password != "" && this.userData.name != "" && this.userData.mobile != "" && this.userData.address != ""){
     this.pID  = localStorage.getItem("pID");
     this.userData.pID = this.pID;
     this.authService.postData(this.userData, "register").then((result) =>{
      loader.dismiss();
     this.resposeData = result;
     if(this.resposeData.userData){
            this.showsucessinfo();
            this.navCtrl.setRoot(LoginPage);
        }else if(this.resposeData.error){
          this.showalertinfo();
        }
     }, (err) => {
      loader.dismiss();
      this.showalertinfo();
       //Connection failed message
     });
    }
    else{
     loader.dismiss();
     this.showalertinfo1();
    }
  }


   }

  showalertinfo(){
    let alert = this.alertCtrl.create({
      subTitle:"This email already exists. try logging in",
      buttons:["OK"]
    });
    alert.present();
  }

  showalertinfo1(){
    let alert = this.alertCtrl.create({
      subTitle:"Provide Complete Information",
      buttons:["OK"]
    });
    alert.present();
  }

  showalertinfo2(){
    let alert = this.alertCtrl.create({
      subTitle:"Provide a valid email address!",
      buttons:["OK"]
    });
    alert.present();
  }

  showsucessinfo(){
    let alert = this.alertCtrl.create({
      title:"Done",
      subTitle:"Registration Successful",
      buttons:["OK"]
    });
    alert.present();
  }

  showAlertInfo111(){
    let alert = this.alertCtrl.create({
      title:"Disclaimer!",
      subTitle:"Prices seen on app are not applicable in the store!",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel');
            this.platform.exitApp();
          }
        },
        {
          text:'Agree',
          handler: () => {
            console.log('Continue Registration');
            this.register();
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

  onlogin(){
    this.navCtrl.setRoot(LoginPage);
  }

}
