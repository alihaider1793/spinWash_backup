import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HkApiproviderProvider } from '../../providers/hk-apiprovider/hk-apiprovider';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { SelectDatetimePage } from '../select-datetime/select-datetime';

/**
 * Generated class for the RetailProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retail-products',
  templateUrl: 'retail-products.html',
})
export class RetailProductsPage {

  noRetailProducts: boolean = false;
  retailProducts: any = [];
  selectedProductPackages: any = [];
  baseUrlImage: String;
  amount: any = 0;
  finalcartdata;
  selectedPackage: any;
  private page = 1;
  private userDetails: any;
  private resposeData: any;
  private pageLimit = 10;
  private homeproductdataSet: any;


  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, private auth: HkApiproviderProvider, private toastController: ToastController) {
    this.baseUrlImage = auth.getimage();
    this.finalcartdata = HomePage.cartData;
    this.retailProducts = HomePage.retailProductsData.slice(0);
    const data = JSON.parse(localStorage.getItem('userData'));
    this.page = 1;
    this.userDetails = data.userData;
    this.userDetails.page = this.page;

    // console.log('user detail are: ' + JSON.stringify(this.userDetails));
    if (this.retailProducts.length == 0) {
      this.noRetailProducts = true;
    }
    else {
      this.noRetailProducts = false;
    }
  }

  openCartPage() {
    // add retail produts in cart!
    // this.navCtrl.push(CartPage);
    let flag = false;
    if (HomePage.cartData.length > 0) {
      console.log('cart is not empty! ');
      HomePage.cartData.forEach(element => {
        if (element.selectedCategory != "Retail") {
          flag = true;
        }
      });
      if (flag) {
        this.navCtrl.push(SelectDatetimePage);
      }
      else {
        this.navCtrl.push(CartPage);
      }
    }
    else {
      this.navCtrl.push(CartPage);
      this.showToast('There are no clothes in your cart!');
    }
  }

  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    this.userDetails.page = this.page;
    console.log("PAGE NUMBER AFTER INCREMENT: ", this.userDetails.page);

    this.auth.postData(this.userDetails, "getRetailProducts").then(
      result => {
        this.resposeData = result;
        this.homeproductdataSet = this.resposeData.RetailData;
        console.log("SIZE OF RESULT: ", this.homeproductdataSet.length);
        if (this.homeproductdataSet.length < this.pageLimit) {
          infiniteScroll.enable(false);
        }
        for (let i = 0; i < this.homeproductdataSet.length; i++) {
          this.retailProducts.push(this.homeproductdataSet[i]);
        }
        console.log('total products in retail list are: ' + this.retailProducts.length);
        infiniteScroll.complete();
      },
      err => {
      }
    );
  } // End do

  showToast(message: string) {
    let toast = this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('onDidDismiss Toast');
    });
    toast.present();
  }

  cartCounterManager() {
    return HomePage.cartData.length
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailProductsPage');
  }

  ionViewDidEnter() {
    this.retailProducts = [];
    this.retailProducts = HomePage.retailProductsData;
    console.log('total products in retail list are (ionViewDidEnter): ' + HomePage.retailProductsData.length);
    console.log('total products in retail list are (ionViewDidEnter): ' + this.retailProducts.length);
    const data = JSON.parse(localStorage.getItem('userData'));
    this.page = 1;
    this.userDetails = data.userData;
    this.userDetails.page = this.page;
  }

  getProductPackages(index, product) {
    //get packages of product!
    // console.log('clicked on retail product with index! ' + index);
    // console.log('clicked on retail product! ' + JSON.stringify(product));
    this.selectedProductPackages = [];
    HomePage.packagesData.forEach(element => {
      if (element.item_id == product.id) {
        this.selectedProductPackages.push(element);
      }
    });

    let alert = this.alertCtrl.create();

    alert.setTitle("Select Package: ");

    for (let i = 0; i < this.selectedProductPackages.length; i++) {
      alert.addInput({ type: 'radio', label: this.selectedProductPackages[i]['quantity'] + ' ' + this.selectedProductPackages[i]['quantity_type'] + ' - BSD$ ' + this.selectedProductPackages[i]['price'], value: this.selectedProductPackages[i], });
    }

    alert.addButton({
      text: 'cancel', handler: () => {
        console.log('cancel clicked!');
      }
    });
    alert.addButton({
      text: 'ok', handler: (data: any) => {
        this.selectedPackage = data;
        if (this.selectedPackage != undefined) {
          console.log('selected package: ' + JSON.stringify(this.selectedPackage));
          console.log('selected product: ' + JSON.stringify(product));
          this.addtocart(product.id, product.name, this.selectedPackage.quantity, this.selectedPackage.quantity_type, this.selectedPackage.price, product.image, 1, product.category);
        }
        else {
          console.log('NO PACKAGE IS SELECTED!');
        }
      }
    });

    alert.present();

    console.log('packages of selected retail product are: ' + JSON.stringify(this.selectedProductPackages));
  }

  addtocart(itemid: any, itemname: any, itemquantity: any, itemquantitytype: any, itemprice: any, itemimage: any, selectedQuantity: any, selectedCategory: any) {

    HomePage.Instance.storeToCart(
      itemid,
      itemname,
      itemquantity,
      itemquantitytype,
      itemprice,
      itemimage,
      selectedQuantity,
      selectedCategory
    );
    this.showAddCartMsg();

  }

  showAddCartMsg() {
    let toast = this.toastController.create({
      message: "Product Added to Cart!",
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  calculatecart() {
    this.amount = 0;
    for (let item of this.finalcartdata) {
      this.amount += parseFloat(item.itemprice) * parseFloat(item.Mquantity);
    }

    return this.amount.toFixed(2).toString();
  }


}
