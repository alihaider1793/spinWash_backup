import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NotificationsPage } from '../pages/notifications/notifications';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { ContactPage } from '../pages/contact/contact';
import { FeedbackPage } from '../pages/feedback/feedback';
import { HomePage } from '../pages/home/home';
import { OffersPage } from '../pages/offers/offers';
import { AboutUsPage } from "../pages/about-us/about-us";
import { MyWalletPage } from "../pages/my-wallet/my-wallet";
import { QrScannerPage } from "../pages/qr-scanner/qr-scanner";
import { Storage } from '@ionic/storage';
import { AppVersion } from '@ionic-native/app-version';
import { HkApiproviderProvider } from "../providers/hk-apiprovider/hk-apiprovider";
import { NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { SamplePage } from '../pages/sample/sample';
import { SubscriptionPage } from '../pages/subscription/subscription';
import { MyBagsPage } from '../pages/my-bags/my-bags';
import { PaypalSubsccriptionPage } from '../pages/paypal-subsccription/paypal-subsccription';
import { RetailProductsPage } from '../pages/retail-products/retail-products';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  validEmail: any;
  rootPage: any = LoginPage;
  public userDetails: any;
  app_version: any;
  myApp_version: any;

  pages: Array<{ title: string, component: any }>;

  title: string = "";
  message: string = "";
  responseData: any;

  constructor(public platform: Platform,
    public app: App,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage,
    private appVersion: AppVersion,
    private auth: HkApiproviderProvider,
  ) {
    // this.initializeApp();
    // this.checkForUpdates();

    platform.ready().then(() => {
      // statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#000');
      this.splashScreen.hide();

      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      var notificationOpenedCallback = function (jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };

      var getPlayerIdCallback = function (response) {
        console.log('playerId:' + response.userId);
        console.log('pushToken:' + response.pushToken);
        localStorage.setItem('pID', response.userId);
      }

      window["plugins"].OneSignal
        .startInit("d00ad8b8-49fb-491a-82b6-f84c19b4a34c", "472147193179")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();

      window["plugins"].OneSignal.getIds(getPlayerIdCallback);

    });
  }

  ngOnInit() {
    this.checkForAppNotifications();
  }

  checkForAppNotifications() {
    //getting app notifications form the server
    this.auth.postData1("getAppNotificationMessages").then(
      result => {
        this.responseData = result;
        if (this.responseData[0].is_active == 1) {
          this.title = this.responseData[0].title;
          this.message = this.responseData[0].message;

          let alert = this.alertCtrl.create({
            title: this.title,
            message: this.message,
            buttons: [
              {
                text: 'OK',
                handler: () => {
                }
              }
            ],
            enableBackdropDismiss: false
          });
          alert.present();
        }
      },
      err => {
      }
    );
  }

  checkForUpdates() {

    //getting latest app version from the backend
    this.auth.postData1("getAppVersion1").then(
      result => {
        this.app_version = result;
        // console.log("Version Code: ",this.app_version);

        //getting installed app version
        this.appVersion.getVersionCode().then((version_code) => {
          this.myApp_version = version_code;

          //check if version code is latest
          console.log('version code from server: ', this.app_version);
          console.log('version code of app: ', this.myApp_version);

          if (this.myApp_version != this.app_version) {
            console.log("UPDATE AVAILABLE");
            this.showUpdatePrompt();
          }

        });


      },
      err => {
      }
    );
  }

  showUpdatePrompt() {
    let alert = this.alertCtrl.create({
      title: 'UPDATE AVAILABLE',
      message: 'You must have the latest version of the app!',
      buttons: [
        {
          text: 'Update',
          handler: () => {
            console.log('Update clicked');
            window.open("https://play.google.com/store/apps/details?id=discountdistributors.app.grocery", "_system");
            this.platform.exitApp();
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

  isGuestLogin() {
    if (localStorage.getItem('userData') != null) {
      const data = JSON.parse(localStorage.getItem('userData'));
      this.userDetails = data.userData;
      if (this.userDetails.fname == "guest") {
        return true;
      }
    }
    else {
      return true;
    }
  }

  isSubscribed() {
    if (localStorage.getItem('isSubscribed') != '0') {
      return false;
    }
    else {
      return true;
    }
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.backgroundColorByHexString('#fff');
  //     this.splashScreen.hide();
  //   });
  // }

  onclickHome() {
    this.nav.setRoot(HomePage);
  }

  onClickRetailProducts() {
    this.nav.push(RetailProductsPage);
  }

  openMessages() {
    this.nav.push(SamplePage);
  }

  onclickMyWallet() {
    this.nav.push(MyWalletPage);
  }

  onclickQrScanner() {
    this.nav.push(QrScannerPage);
  }
  onclickSubscriptions() {
    console.log('subscriptions will be fetched from server');
    this.nav.push(SubscriptionPage);
    // this.nav.push(PaypalSubsccriptionPage);
  }

  onMyBagsClicked() {
    this.nav.push(MyBagsPage);
  }

  onclickMyOrder() {
    this.nav.push(OrderHistoryPage);
  }

  openContact() {
    this.nav.push(ContactPage);
  }

  onclickNoti() {
    this.nav.push(NotificationsPage);
  }

  openfeedback() {
    this.nav.push(FeedbackPage);
  }

  openoffers() {
    this.nav.push(OffersPage);
  }

  logout() {
    console.log('logging out');
    HomePage.cartData = [];
    //update cart data inside the local storage
    this.storage.set('cartData', HomePage.cartData);
    this.nav.setRoot(LoginPage);
  }

  openAboutUs() {
    this.nav.push(AboutUsPage);
  }

}
