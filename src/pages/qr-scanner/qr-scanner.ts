import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner , BarcodeScannerOptions} from "@ionic-native/barcode-scanner";
import {MyWalletPage} from "../my-wallet/my-wallet";
import {HkApiproviderProvider} from "../../providers/hk-apiprovider/hk-apiprovider";
import {HomePage} from "../home/home";


/**
 * Generated class for the QrScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-scanner',
  templateUrl: 'qr-scanner.html',
})
export class QrScannerPage {

  options:BarcodeScannerOptions;
  scannedData:any={};
  resposeData: any;


  public userDetails:any;

  postData = {
    token: "",
    user_id:"",
    amount:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner:BarcodeScanner, private auth: HkApiproviderProvider, public alertCtrl:AlertController) {
    // this.scanCard();
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;
    this.scan();
  }

  scan(){
    this.options={
      prompt:'Scan QR Code'
    };
    this.scanner.scan(this.options).then((data)=>{
      this.scannedData = data;
      // if(data.text == "100"){
      //   this.postData.amount = data.text;
      //   this.addToWallet();
      //   console.log("THIS WILL BE ADDED TO WALLET: ",data.text);
      //   this.navCtrl.pop();
      //   this.navCtrl.push(MyWalletPage);
      // }
      // else{
      //   console.log("QR SCANNED: ",this.scannedData);
      //   this.navCtrl.pop();
      // }
      this.postData.amount=  data.text;
      this.auth.postData(this.postData, "addToWallet").then(
        result => {
          this.resposeData = result;
          console.log("added amount to wallet: ",this.resposeData);
          if(this.resposeData.Error == "INVALID QR"){
            let alert = this.alertCtrl.create({
              title: 'INVALID QR',
              message: 'The QR you scanned is either invalid or already scanned!',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    console.log('Update clicked');
                    this.navCtrl.pop();
                    this.navCtrl.push(HomePage);
                  }
                }
              ],
              enableBackdropDismiss: false
            });
            alert.present();
          }
          else{
            this.navCtrl.pop();
            this.navCtrl.push(MyWalletPage);
          }
        },
        err => {
          console.log('error: adding amount to wallet failed: ',err);
        }
      );
    }, (err)=>{
      console.log("Error while reading qr code: ",err);
    })
  }

  addToWallet(){
    this.auth.postData(this.postData, "addToWallet").then(
      result => {
        this.resposeData = result;
        console.log("added amount to wallet: ",this.resposeData);
      },
      err => {
        console.log('error: adding amount to wallet: ',err);
      }
    );
  }

  // scanCard(){
  //   // Optionally request the permission early
  //   this.qrScanner.prepare()
  //     .then((status: QRScannerStatus) => {
  //       if (status.authorized) {
  //         // camera permission was granted
  //
  //
  //         // start scanning
  //         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //           console.log('Scanned something', text);
  //
  //           this.qrScanner.hide(); // hide camera preview
  //           scanSub.unsubscribe(); // stop scanning
  //           this.navCtrl.pop();
  //         });
  //
  //       } else if (status.denied) {
  //         // camera permission was permanently denied
  //         // you must use QRScanner.openSettings() method to guide the user to the settings page
  //         // then they can grant the permission from there
  //       } else {
  //         // permission was denied, but not permanently. You can ask for permission again at a later time.
  //       }
  //     })
  //     .catch((e: any) => console.log('Error is', e));
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScannerPage');
  }

}
