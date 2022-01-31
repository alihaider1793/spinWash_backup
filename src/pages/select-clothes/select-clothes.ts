import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HkApiproviderProvider } from '../../providers/hk-apiprovider/hk-apiprovider';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { SelectDatetimePage } from '../select-datetime/select-datetime';

/**
 * Generated class for the SelectClothesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-clothes',
  templateUrl: 'select-clothes.html',
})
export class SelectClothesPage {

  categData: any = [];
  servicesData: any = [];
  selectedCategoryIdx: number = 0;
  selectedCategory: any = "";
  selectedCategProducts: any = [];
  selectedProductPackages: any = [];
  baseUrlImage: any = "";
  noCategoryProducts: boolean;
  selectedService: any = 0;
  selectedProductt: any;
  categoriestoShow: any = [];

  amount: any = 0;
  finalcartdata;


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: HkApiproviderProvider, private alertCtrl: AlertController, private toastController: ToastController) {
    if (HomePage.categData) {
      console.log('total categories to be displayed: ' + HomePage.categData.length);
      this.categData = HomePage.categData;
      console.log('total categories are: ' + JSON.stringify(this.categData));
      if (HomePage.steamPressSelected) {
        this.categData.forEach(element => {
          if (element.categry == "Single Items") {
            this.categoriestoShow.push(element);
          }
        });
        this.categData = this.categoriestoShow;
      }

      else {
        this.categData.forEach(element => {
          if (element.categry != "Single Items") {
            this.categoriestoShow.push(element);
          }
        });
        this.categData = this.categoriestoShow;
      }
      this.baseUrlImage = auth.getimage();
    }
    if (HomePage.servicesData) {
      this.servicesData = HomePage.servicesData;
      console.log('total services to be displayed: ' + HomePage.servicesData.length);
    }
    this.finalcartdata = HomePage.cartData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectClothesPage');
  }

  ionViewWillEnter() {
    this.loadProducts(0);
  }

  openVariations(index, product) {
    this.selectedProductPackages = [];
    // console.log('clicked on item: ' + index + ' ' + JSON.stringify(product));
    var prodId = product.id;
    this.selectedProductt = product;
    HomePage.packagesData.forEach(element => {
      if (element.item_id == prodId) {
        this.selectedProductPackages.push(element);
        console.log('packages of selected product are: ' + JSON.stringify(element));
      }
    });
    // console.log('total packages of selected product are: ' + this.selectedProductPackages.length);
    // console.log('total packages of selected product are: ' + JSON.stringify(this.selectedProductPackages[0]));

    // let alert = this.alertCtrl.create({
    //   title: 'Select Service: ',
    //   inputs: [
    //     {
    //       type: 'radio',
    //       label: 'label 1',
    //       value: '0'
    //     },
    //     {
    //       type: 'radio',
    //       label: 'label 2',
    //       value: '1'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'OK',
    //       handler: () => {
    //         console.log('OK clicked: ');
    //         // I NEED TO GET THE VALUE OF THE SELECTED RADIO BUTTON HERE
    //       }
    //     }
    //   ]
    // });
    // alert.present();

    console.log('services to select! ' + this.selectedProductPackages);

    let alert = this.alertCtrl.create();

    alert.setTitle("Select Service: ");

    for (let i = 0; i < this.selectedProductPackages.length; i++) {
      alert.addInput({ type: 'radio', label: this.selectedProductPackages[i]['quantity_type'] + ' - BSD$ ' + this.selectedProductPackages[i]['price'], value: this.selectedProductPackages[i], });
    }

    alert.addButton({
      text: 'cancel', handler: () => {
        console.log('cancel clicked!');
      }
    });
    alert.addButton({
      text: 'ok', handler: (data: any) => {
        this.selectedService = data;
        console.log('selected product is: ' + JSON.stringify(this.selectedProductt));
        console.log('selected service is : ' + JSON.stringify(this.selectedService));
        this.addtocart(this.selectedProductt.id, this.selectedProductt.name, this.selectedService.quantity, this.selectedService.quantity_type, this.selectedService.price, this.selectedProductt.image, 1, this.selectedCategory)
      }
    });

    alert.present();

  }

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

  openCartPage() {
    if (HomePage.cartData.length > 0) {
      this.navCtrl.push(SelectDatetimePage);
    }
    else {
      this.showToast('There are no clothes in your cart!');
    }
    // this.navCtrl.push(CartPage);
  }

  addtocart(itemid: any, itemname: any, itemquantity: any, itemquantitytype: any, itemprice: any, itemimage: any, selectedQuantity: any, selectedCategory: any) {
    // console.log('without typecast',this.packageDetails[this.package_id].price);
    // console.log('with typecast',parseFloat(this.packageDetails[this.package_id].price));
    // console.log('selected index',this.package_id);


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

  cartCounterManager() {
    return HomePage.cartData.length
  }

  calculatecart() {
    this.amount = 0;
    for (let item of this.finalcartdata) {
      this.amount += parseFloat(item.itemprice) * parseFloat(item.Mquantity);
    }
    return this.amount.toFixed(2).toString();

  }

  loadProducts(index) {
    console.log('getting data for category id: ' + index);
    var nameOfCat = this.categData[index]["categry"];
    this.selectedCategory = nameOfCat;
    console.log("Selected Category = ", this.selectedCategory);

    this.selectedCategProducts = [];

    for (let pro of HomePage.productData) {
      if (pro["category"] == nameOfCat) {
        this.selectedCategProducts.push(pro);
      }
    }
    if (this.selectedCategProducts.length == 0) {
      this.noCategoryProducts = true;
    }
    else {
      this.noCategoryProducts = false;
    }

    console.log('total products inside this category: ' + this.selectedCategProducts.length);
  }

}