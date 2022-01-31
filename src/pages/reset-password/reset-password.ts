import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HkApiproviderProvider} from "../../providers/hk-apiprovider/hk-apiprovider";
import {LoginPage} from "../login/login";

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  public resposeData: any;
  postData={
    email:"",
    verify_code:"",
    password:"",
    confirm_password:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,  private auth: HkApiproviderProvider, public alertCtrl: AlertController) {
    this.postData.email = localStorage.getItem('resetEmail');
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title:"Alert",
      subTitle:"Provide All Information",
      buttons:["OK"]
    });
    alert.present();
  }

  showAlert1(){
    let alert = this.alertCtrl.create({
      title:"Alert",
      subTitle:"Passwords Do Not Match",
      buttons:["OK"]
    });
    alert.present();
  }

  showAlert2(){
    let alert = this.alertCtrl.create({
      title:"Error",
      subTitle:"Incorrect Verification Code",
      buttons:["OK"]
    });
    alert.present();
  }

  showAlert3(){
    let alert = this.alertCtrl.create({
      title:"Error",
      subTitle:"Something Went Wrong! Please Try Again",
      buttons:["OK"]
    });
    alert.present();
  }

  showSuccessAlert(){
    let alert = this.alertCtrl.create({
      title:"SUCCESS",
      subTitle:"Password Changed Successfully",
      buttons:["OK"]
    });
    alert.present();
    this.navCtrl.setRoot(LoginPage);
  }

  verifyCode(){
    this.auth.postData(this.postData, "checkVerificationCode").then(
      result => {
        this.resposeData = result;
        console.log("Checking verification code from database: ",this.resposeData);
        if(this.resposeData == "VERIFICATION FAIL"){
          this.showAlert2();
        }
        else{
          //update password in database
          this.changePassword();
        }
      },
      err => {
        console.log("Storing verification code to database: ",err);
      }
    );
  }

  changePassword(){
    this.auth.postData(this.postData, "resetPassword").then(
      result => {
        this.resposeData = result;
        console.log("Checking verification code from database: ",this.resposeData);
        if(this.resposeData == "Password Reset Fail"){
          this.showAlert3();
        }
        else{
          //update password in database
          this.showSuccessAlert();
        }
      },
      err => {
        console.log("Storing verification code to database: ",err);
      }
    );
  }

  updatePassword(){
    if(this.postData.verify_code== "" || this.postData.password=="" || this.postData.confirm_password==""){
      this.showAlert();
    }
    else if(this.postData.confirm_password != this.postData.password){
      this.showAlert1();
    }
    else{
      this.verifyCode();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

}
