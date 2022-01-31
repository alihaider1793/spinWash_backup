import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {HkApiproviderProvider} from "../../providers/hk-apiprovider/hk-apiprovider";
import {ResetPasswordPage} from "../reset-password/reset-password";

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  public resposeData: any;
  regex :any;
  emialFlag:boolean = false;
  postData={
    email:"",
    verification_code:0
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,    private auth: HkApiproviderProvider, public alertCtrl: AlertController) {
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title:"Error",
      subTitle:"Provide A Valid Email Address",
      buttons:["OK"]
    });
    alert.present();
  }

  showAlert1(){
    let alert = this.alertCtrl.create({
      title:"Error",
      subTitle:"Email Address Required",
      buttons:["OK"]
    });
    alert.present();
  }

  showAlert2(){
    let alert = this.alertCtrl.create({
      title:"AELRT",
      subTitle:"USER DOES NOT EXIST",
      buttons:["OK"]
    });
    alert.present();
  }


  sendEmail(){
    this.auth.postData(this.postData, "sendVerificationCodeEmail").then(
      result => {
        this.resposeData = result;
        console.log(this.resposeData);
      },
      err => {
        console.log(err);
      }
    );
  }

  saveVerificationCodeToDatabase(){
    this.auth.postData(this.postData, "storeVerificationCode").then(
      result => {
        this.resposeData = result;
        console.log("Storing verification code to database: ",this.resposeData);
      },
      err => {
        console.log("Storing verification code to database: ",err);
      }
    );
  }

  resetPassword(){
    if(this.postData.email == ""){
      this.showAlert1();
    }
    else{
      this.regex = new RegExp("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})");
      this.emialFlag = this.regex.test(this.postData.email);
      if(this.emialFlag == false){
        this.showAlert();
      }
      else{
        //CHECKING IF USER EXISTS
        this.auth.postData(this.postData, "checkUserEmail").then(
          result => {
            this.resposeData = result;
            if(this.resposeData=="USER NOT FOUND"){
              this.showAlert2();
            }
            else{
              //generating 4 digit random code and sending email to the user
              this.postData.verification_code = Math.floor(1000 + Math.random() * 9000);
              //STORE THIS IN DATABASE IN THE VERIFICATION_CODE COLUMN
              this.saveVerificationCodeToDatabase();
              // console.log("VERIFICATION CODE TO BE SENT TO EMAIL: ",this.postData.verification_code);
              this.sendEmail();
              localStorage.setItem('resetEmail',this.postData.email);
              this.navCtrl.push(ResetPasswordPage);
            }
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

}
