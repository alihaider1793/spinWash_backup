import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController, AlertController
} from "ionic-angular";
import { CartPage } from "../cart/cart";
import { HomePage } from "../home/home";
import { HkApiproviderProvider } from "../../providers/hk-apiprovider/hk-apiprovider";

@IonicPage()
@Component({
  selector: "page-product-desc",
  templateUrl: "product-desc.html"
})
export class ProductDescPage {
  itemId: string;
  itemName: string;
  itemDesc: String;
  itemQuantity: string;
  itemQuantityType: string;
  itemPrice: string;
  itemImage: string;

  public baseUrlImage: String;

  package_id: any = "";
  selected_package_id :any;
  available_amount: any = 0;
  userDetails: any;
  resposeData: any;
  packageDetails: any = "";
  postData = {
    token: "",
    user_id: "",
    item_id: ""
  };

  selectedQuantity = 1;
  outOfStock:boolean = true;


  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastController: ToastController,
    private auth: HkApiproviderProvider,
    public loadingCtrl: LoadingController,

  ) {

    this.baseUrlImage = auth.getimage();

    this.itemId = navParams.get("itemId");
    this.itemName = navParams.get("itemName");
    this.itemDesc = navParams.get("itemDesc");
    this.itemQuantity = navParams.get("itemQuantity");
    this.itemQuantityType = navParams.get("itemQuantityType");
    this.itemPrice = navParams.get("itemPrice");
    this.itemImage = navParams.get("itemImage");

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;
    this.postData.item_id = this.itemId;

    this.getPackageDetails();
  }

  packageSelected() {
    // console.log('all packages: ', this.packageDetails);
    if (this.packageDetails != "" && this.package_id != "") {
      this.available_amount = this.packageDetails[this.package_id].available_stock;
      this.selected_package_id = this.packageDetails[this.package_id].id;
      this.selectedQuantity = 1;
      console.log('AVAILABLE STOCK: ', this.available_amount);
      console.log('selected package: ', this.package_id);
      console.log('SELECTED QUANTITY: ', this.selectedQuantity);
    }
  }

  changeItemQty(change) {
    if (this.selectedQuantity + change > 0 && this.selectedQuantity + change <= this.available_amount) {
      this.selectedQuantity = this.selectedQuantity + change;
    }
  }


  ionViewDidLoad() { }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }

  // addtocart(itemid: any, itemname: any, itemquantity: any, itemquantitytype: any, itemprice: any, itemimage: any, selectedQuantity: any, packageId:any,availableStock:any) {
  //   // console.log('without typecast',this.packageDetails[this.package_id].price);
  //   // console.log('with typecast',parseFloat(this.packageDetails[this.package_id].price));
  //   // console.log('selected index',this.package_id);
  //   if (this.package_id >= 0) {
  //     itemprice = parseFloat(this.packageDetails[this.package_id].price);
  //     itemquantity = this.packageDetails[this.package_id].quantity;
  //     itemquantitytype = this.packageDetails[this.package_id].quantity_type;
  //     packageId = this.packageDetails[this.package_id].id;
  //     availableStock = this.packageDetails[this.package_id].available_stock;

  //     HomePage.Instance.storeToCart(
  //       itemid,
  //       itemname,
  //       itemquantity,
  //       itemquantitytype,
  //       itemprice,
  //       itemimage,
  //       selectedQuantity
  //     );
  //     console.log(this.package_id);
  //     this.showAddCartMsg();
  //   }
  //   else {
  //     let alert = this.alertCtrl.create({
  //       title: ' ALERT',
  //       subTitle: 'No Package Selected',
  //       buttons: ['Dismiss']
  //     });
  //     alert.present();
  //   }
  // }

  showAddCartMsg() {
    let toast = this.toastController.create({
      message: "Product Added to Cart!",
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  getPackageDetails() {
    let zest = this.loadingCtrl.create({
      content: "Fetching Data..",
      duration: 20000,
      spinner: 'crescent'
    });
    zest.present();

    this.auth.postData(this.postData, "getItemPackages").then(
      result => {
        this.resposeData = result;
        this.packageDetails = this.resposeData;
        this.packageDetails.forEach(element => {
            if(element.available_stock > 0){
              this.outOfStock = false;
            }
        });
        console.log(this.packageDetails);
        zest.dismiss();
      },
      err => {
        zest.dismiss();
      }
    );
  }

  cartCounterManager() {
    return HomePage.cartData.length
  }
}
