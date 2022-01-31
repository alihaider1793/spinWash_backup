import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  ToastController,
  MenuController,
  AlertController
} from "ionic-angular";
import { CartPage } from "../cart/cart";
import { ProductsPage } from "../products/products";
import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";
import { ProductDescPage } from "../product-desc/product-desc";
import { ProductSearchPage } from "../product-search/product-search";
import { OffersPage } from '../offers/offers';
import { Storage } from '@ionic/storage';
import { AppVersion } from "@ionic-native/app-version";
import { Platform } from 'ionic-angular';
import { OrderHistoryPage } from "../order-history/order-history";
import { SelectClothesPage } from "../select-clothes/select-clothes";
import { SubscriptionDetailsPage } from "../subscription-details/subscription-details";
import { OrderPlacedPage } from "../order-placed/order-placed";
import { RetailProductsPage } from "../retail-products/retail-products";
import { SubscriptionPage } from "../subscription/subscription";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  app_version: any;
  myApp_version: any;

  public static Instance: HomePage;
  public resposeData: any;
  userDetails: any;
  userDetails1: any;
  deliveryCharges: any;
  expediteCharges: any;
  isUserSubscribed: boolean = false;

  static cartData = [];
  static categData = [];
  static productData = [];
  static servicesData = [];
  static packagesData = [];
  static retailProductsData = [];
  static userSubscriptions = [];
  static steamPressSelected: boolean = false;
  cartCounter = 0;

  public baseUrlImage: String;
  public baseUrlBanner: String;


  public homeproductdataSet: any;
  public categoryFullData: any;
  public retailProductsFullData: any;
  public bannerFullData: any;
  public servicesFullData: any;
  public packagesFullData: any;
  public ordersData: any;
  public activeOrdersData: any = [];
  public noOrders: boolean = false;
  public totalOrdersOfUser: any = 0;

  public productFullData: any = [];
  moreProducts: any[];
  private page = 1;
  private pageLimit = 10;
  searchQuery: string = "";
  categoryList: any = "";

  bagDetails: any;


  title: string = "";
  message: string = "";
  responseData: any;

  constructor(
    public navCtrl: NavController,
    private auth: HkApiproviderProvider,
    public navPram: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    private storage: Storage,
    private appVersion: AppVersion,
    public alertCtrl: AlertController,
    private platform: Platform
  ) {
    this.platform = platform;
    this.page = 1;
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userDetails.page = this.page;
    // this.checkForUpdates();
    this.menuCtrl.enable(true);
    this.baseUrlImage = auth.getimage();
    // this.baseUrlBanner = 'http://62.171.149.49:8082/admin/banner/';
    this.baseUrlBanner = 'http://173.249.13.154:8082/admin/banner/';
    // console.log('base url for getting banner images: ' + this.baseUrlBanner);
    if (localStorage.getItem('isSubscribed') != '0') {
      console.log('user is subscribed');
      this.getUserSubscriptions();
    }
    else {
      console.log('user is not subscribed');
    }
    this.getDeliveryCharges();
    this.getExpediteCharges();
  }

  getUserSubscriptions() {
    this.auth.postData(this.userDetails, "getUserSubscriptions").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.UserSubscriptionDetails) {
          this.bagDetails = this.resposeData.UserSubscriptionDetails;
          console.log('total bags of user: ' + this.bagDetails.length);
          HomePage.userSubscriptions = this.bagDetails;
          console.log('user subscription bags in homepage are: ' + JSON.stringify(HomePage.userSubscriptions));

        } else {
          console.log('failed to fetch user subscriptions');
        }
        // console.log('order details: ' + JSON.stringify(this.orderDetail));
      },
      err => {
        // zest.dismiss();
        console.log('failed to get user subscriptions');
      });
  }

  openOrderDetails(order: any) {
    this.navCtrl.push(OrderPlacedPage, { orderid: order.orderid, fname: order.fname, lname: order.lname, area: order.area, address: order.address, mobile: order.mobile, ordertime: order.ordertime, delivery_option: order.delivery_option, delivery_date: order.delivery_date, pickup_date: order.pickup_date, pickup_time_from: order.pickup_time_from, pickup_time_to: order.pickup_time_to, delivery_time_from: order.delivery_time_from, delivery_time_to: order.delivery_time_to });
  }


  getUserData() {
    this.auth.postData(this.userDetails, "login").then((result) => {
      this.resposeData = result;


      if (this.resposeData.userData) {
        console.log('checking subscription status of user on homepage: ' + this.resposeData.userData.is_subscribed);
        if (this.resposeData.userData.is_subscribed == 1 || this.resposeData.userData.is_subscribed == '1') {
          this.isUserSubscribed = true;
        }
        else {
          this.isUserSubscribed = false;
        }
        localStorage.setItem('isSubscribed', this.resposeData.userData.is_subscribed);
      } else if (this.resposeData.error) {
        console.log("ERROR : ", this.resposeData.error);
      }
    }, (err) => {
      console.log('failed to load subscription status of user on homepage');
      //Connection failed message
    });
  }

  myOrders() {
    this.navCtrl.push(OrderHistoryPage);
  }

  checkForUpdates() {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails1 = data.userData;
    //getting latest app version from the backend
    this.auth.postData(this.userDetails1, "getAppVersion").then(
      result => {
        this.app_version = result;
        // console.log("Version Code: ",this.app_version);

        //getting installed app version
        this.appVersion.getVersionCode().then((version_code) => {
          this.myApp_version = version_code;

          //check if version code is latest
          // console.log('version code from server: ', this.app_version);
          // console.log('version code of app: ', this.myApp_version);

          if (this.myApp_version != this.app_version) {
            // console.log("UPDATE AVAILABLE");
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
            // console.log('Update clicked');
            window.open("https://play.google.com/store/apps/details?id=discountdistributors.app.grocery", "_system");
            this.platform.exitApp();
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

  ngOnInit() {
    HomePage.Instance = this;
    // Or to get a key/value pair
    this.storage.get('cartData').then((val) => {
      console.log('Your cartData is', val);
      if (val != null) {
        HomePage.cartData = val;
      }
    });
    this.getAgeDisclaimerMessage();
  }

  getAgeDisclaimerMessage() {
    //getting ageDisclaimer notifications form the server
    this.auth.postData1("getAgeDisclaimerMessage").then(
      result => {
        this.responseData = result;
        if (this.responseData[0].is_active == 1) {
          this.title = this.responseData[0].title;
          this.message = this.responseData[0].message;
        }
      },
      err => {
      }
    );
  }

  itemSelected(category) {
    // console.log(category);
    this.navCtrl.push(ProductsPage, { category: category });
  }

  gotocart() {
    this.navCtrl.push(CartPage);
  }

  homepageproducts() {
    let zest = this.loadingCtrl.create({
      content: "Fetching Data..",
      duration: 20000,
      spinner: 'crescent'
    });
    zest.present();
    // console.log('parameters for getting home page API response: ' + JSON.stringify(this.userDetails));
    this.userDetails.page = 1;
    this.auth.postData(this.userDetails, "gethomepage").then(
      result => {
        this.resposeData = result;
        this.bannerFullData = this.resposeData.BannData;
        this.homeproductdataSet = this.resposeData.HomeData;
        this.productFullData = this.homeproductdataSet;
        this.categoryFullData = this.resposeData.CateData;
        this.servicesFullData = this.resposeData.ServicesData;
        this.packagesFullData = this.resposeData.PackagesData;
        this.retailProductsFullData = this.resposeData.RetailData;
        HomePage.categData = this.categoryFullData;
        HomePage.productData = this.homeproductdataSet;
        HomePage.servicesData = this.servicesFullData;
        HomePage.packagesData = this.packagesFullData;
        HomePage.retailProductsData = this.retailProductsFullData;

        console.log('response data: ' + JSON.stringify(this.resposeData));
        // console.log('after loading servicesFullData: ' + JSON.stringify(this.servicesFullData));
        // console.log('after loading bannerFullData: ' + this.bannerFullData.length);
        console.log('Total packages of all records: ' + this.packagesFullData.length);
        // console.log('Total packages of all records: ' + JSON.stringify(this.packagesFullData));
        console.log('Total retail products are: ' + this.retailProductsFullData.length);
        // console.log('Retail products are: ' + JSON.stringify(this.retailProductsFullData));
      },
      err => {
        zest.dismiss();
      }
    );

    this.auth.postData(this.userDetails, "fetchorder").then(
      result => {
        this.resposeData = result;
        this.ordersData = this.resposeData.OrderData;
        this.activeOrdersData = [];
        this.totalOrdersOfUser = 0;
        console.log('orders of user: ' + this.ordersData.length);
        if (this.ordersData.length == 0) {
          this.noOrders = true;
        }
        else if (this.ordersData.length > 0) {
          // console.log('orders of user: ' + JSON.stringify(this.ordersData));
          this.noOrders = false;
          this.ordersData.forEach(element => {
            if (element.status.toLowerCase() != 'delivered') {
              this.activeOrdersData.push(element);
            }
          });
          console.log('total active orders of user: ' + this.activeOrdersData.length);
          this.totalOrdersOfUser = this.activeOrdersData.length;
        }
        zest.dismiss();
      },
      err => {
        zest.dismiss();
      }
    );
  }

  selectclothes(selectedService: any) {
    console.log('selected service: ' + JSON.stringify(selectedService));

    if (selectedService.id == 88) {
      console.log('open retail page');
      this.navCtrl.push(RetailProductsPage);
    }
    else {
      if (selectedService.service == "Steam Pressing") {
        HomePage.steamPressSelected = true;
      }
      else {
        HomePage.steamPressSelected = false;
      }
      console.log('open other page!');
      this.navCtrl.push(SelectClothesPage);
    }
  }

  openProductDetailPage(
    itemId: String,
    itemName: String,
    itemImage: String,
    itemDesc: String,
    itemQuantity: String,
    itemQuantityType: String,
    itemPrice: String
  ) {
    this.navCtrl.push(ProductDescPage, {
      itemId: itemId,
      itemName: itemName,
      itemDesc: itemDesc,
      itemQuantity: itemQuantity,
      itemQuantityType: itemQuantityType,
      itemPrice: itemPrice,
      itemImage: itemImage
    });
  }

  gotoproducts(category: any) {

    if (category.permission_required == 0) {
      this.navCtrl.push(ProductsPage, {
        category: category.categry
      });
    }
    else {
      this.getAccessPermission(category);
    }
  }


  getAccessPermission(category: any) {

    if (this.title == "") {
      this.title = "Attention!";
    }
    if (this.message == "") {
      this.message = "You must be 18 years or older to access this category!";
    }

    let alert = this.alertCtrl.create({
      title: this.title,
      message: this.message,
      buttons: [
        {
          text: 'Continue',
          handler: () => {
            // console.log('OVER 18 CLICKED!!');
            this.navCtrl.push(ProductsPage, {
              category: category.categry
            });
          }
        },
        {
          text: 'Cancel',
          handler: () => {

          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

  addToCart(itemid: any, itemname: any, itemquantity: any, itemquantitytype: any, itemprice: any, itemImage: any, selectedQuantity: any, selectedCategory: any) {
    this.storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage, selectedQuantity, selectedCategory);
    this.showAddCartMsg();
  }

  public storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage, selectedQuantity, selectedCategory) {
    var Mquantity = selectedQuantity;
    var itemtotal = itemprice;
    var alreadyExists = false;
    HomePage.cartData.forEach(element => {
      if (element.itemid == itemid && itemquantitytype == element.itemquantitytype) {
        alreadyExists = true;
        element.Mquantity += selectedQuantity;
      }
    });
    console.log('product does not exist in cart? ' + alreadyExists);
    if (!alreadyExists) {
      HomePage.cartData.push({ itemid, itemname, itemquantity, itemquantitytype, itemprice, itemtotal, itemImage, Mquantity, selectedCategory });
    }
    this.storage.set('cartData', HomePage.cartData);

    // Or to get a key/value pair
    this.storage.get('cartData').then((val) => {
      // console.log('Your cartData in storage is', val);
    });
  }


  showAddCartMsg() {
    let toast = this.toastCtrl.create({
      message: "Product Added to Cart!",
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  gotoSearch() {
    this.navCtrl.push(ProductSearchPage);
  }

  cartCounterManager() {
    return HomePage.cartData.length;
  }

  gotoOffer() {
    this.navCtrl.push(OffersPage);
  }

  isSubscribed() {
    if (localStorage.getItem('isSubscribed') != '0') {
      return false;
    }
    else {
      return true;
    }
  }

  onclickSubscriptions() {
    console.log('subscriptions will be fetched from server');
    this.navCtrl.push(SubscriptionPage);
    // this.nav.push(PaypalSubsccriptionPage);
  }

  ionViewWillEnter() {
    this.getUserData();
    this.isSubscribed();
    this.homepageproducts();
    console.log('checking if user subscribed recently!');
    if (localStorage.getItem('subscriptionID') != 'null' && localStorage.getItem('subscriptionID') != null && localStorage.getItem('subscriptionID') && localStorage.getItem('subscriptionID') != '-1' && localStorage.getItem('isSubscribed') == '0') {
      console.log('subscribed successfully! ' + localStorage.getItem('subscriptionID') + ' and ' + localStorage.getItem('isSubscribed'));
      // call API to update user subscription details on server
      SubscriptionDetailsPage.susbscriptionPostData.paypal_subscription_id = localStorage.getItem('subscriptionID');
      this.sendSubscriptionDataToServer();
    }
    else {
      console.log('nothing found in subscriptionID');
    }
  }

  ionViewDidEnter() {
    console.log('checking if user subscribed recently!');
    console.log('retail products length: !' + HomePage.retailProductsData.length);
    if (localStorage.getItem('subscriptionID') != 'null' && localStorage.getItem('subscriptionID') != null && localStorage.getItem('subscriptionID') && localStorage.getItem('subscriptionID') != '-1' && localStorage.getItem('isSubscribed') == '0') {
      console.log('subscribed successfully! ' + localStorage.getItem('subscriptionID') + ' and ' + localStorage.getItem('isSubscribed'));
      // call API to update user subscription details on server
      SubscriptionDetailsPage.susbscriptionPostData.paypal_subscription_id = localStorage.getItem('subscriptionID');
      this.sendSubscriptionDataToServer();
      this.getUserData();

    }
    else {
      console.log('nothing found in subscriptionID');
    }
  }

  sendSubscriptionDataToServer() {
    let zest = this.loadingCtrl.create({
      content: "Fetching Data From Server!",
      duration: 20000,
      spinner: 'crescent'
    });

    zest.present();


    this.auth.postData(SubscriptionDetailsPage.susbscriptionPostData, "subscribeUser").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.status == "200") {
          console.log('data sent to server successfully');
          localStorage.setItem('subscriptionID', null);
        } else {
          zest.dismiss();
          this.sendSubscriptionDataToServer();
        }
        // console.log('order details: ' + JSON.stringify(this.orderDetail));
        zest.dismiss();
      },
      err => {
        zest.dismiss();
      });
  }

  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    this.userDetails.page = this.page;
    // console.log("PAGE NUMBER AFTER INCREMENT: ", this.userDetails.page);

    this.auth.postData(this.userDetails, "gethomepage").then(
      result => {
        this.resposeData = result;
        this.homeproductdataSet = this.resposeData.HomeData;
        this.resposeData = result;
        this.homeproductdataSet = this.resposeData.HomeData;
        // console.log("SIZE OF RESULT: ", this.homeproductdataSet.length);
        if (this.homeproductdataSet.length < this.pageLimit) {
          infiniteScroll.enable(false);
        }
        for (let i = 0; i < this.homeproductdataSet.length; i++) {
          this.productFullData.push(this.homeproductdataSet[i]);
        }
        infiniteScroll.complete();
      },
      err => {
      }
    );
  } // End doInfinite


  //getting deliveryCharges
  getDeliveryCharges() {
    this.auth.postData(this.userDetails, "getDeliveryCharges").then(
      result => {
        this.deliveryCharges = result;
        localStorage.setItem('deliveryCharges', this.deliveryCharges);
        // console.log("DELIVERY CHARGES: ",localStorage.getItem('deliveryCharges'));
      },
      err => {
      }
    );
  }

  //getting expediteCharge
  getExpediteCharges() {
    this.auth.postData(this.userDetails, "getExpediteCharges").then(
      result => {
        this.expediteCharges = result;
        localStorage.setItem('expediteCharges', this.expediteCharges);
        // console.log("DELIVERY CHARGES: ",localStorage.getItem('deliveryCharges'));
      },
      err => {
      }
    );
  }

}
