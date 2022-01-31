import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, ModalController, AlertController, ToastController, NavParams } from 'ionic-angular';
import { HkApiproviderProvider } from '../../providers/hk-apiprovider/hk-apiprovider';
import { CartPage } from "../cart/cart";
import { HomePage } from '../home/home';
import { ProductDescPage } from '../product-desc/product-desc';

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  public resposeData : any;
  public userDetails:any;
  private mPage = 1;
  private pageLimit = 10;

  postData={
    token:"",
    page:"",
    user_id:""
  }

  public baseUrlImage:String;

  public dataSetitems : any;
  public offersFullData : any = [];

  products:any[];
  category:any="";
  iteminfo:any="";
  itemdatafull:any="";
  itemFullArray:any=[];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public auth:HkApiproviderProvider,
    public toastController:ToastController,
    public loadingCtrl : LoadingController
	) {
    this.mPage = 1;
    this.baseUrlImage = auth.getimage();

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userDetails.page = this.mPage;

    this.postData.user_id = this.userDetails.user_id;
    this.postData.token = this.userDetails.token;
    this.postData.page = this.userDetails.page;

    this.getofferdata();
	}

  gotocart(){
    this.navCtrl.push(CartPage);
  }

  public getofferdata()
{
  let zest = this.loadingCtrl.create({
    content: "Getting Data..",
    duration:20000,
    spinner:'crescent'
  });

  zest.present();

    this.auth.postData(this.postData, "offers").then((result) => {
        this.resposeData = result;
        this.offersFullData = this.resposeData.offersData;
        this.itemdatafull = this.offersFullData;
        zest.dismiss();
    }, (err) => {
      zest.dismiss();
    });
  }

  openProductDetailPage(itemId:String,itemName:String, itemImage:String,itemDesc:String,itemQuantity:String, itemQuantityType:String, itemPrice:String){
    this.navCtrl.push(ProductDescPage,{
      itemId : itemId,
      itemName : itemName,
      itemDesc : itemDesc,
      itemQuantity :itemQuantity,
      itemQuantityType:itemQuantityType,
      itemPrice : itemPrice,
      itemImage : itemImage
    });
  }


  // addToCartProd(itemid:any, itemname:any, itemquantity:any, itemquantitytype:any, itemprice:any, itemimage:any, selectedQuantity:any) {
  //   HomePage.Instance.storeToCart(itemid,itemname,itemquantity,itemquantitytype,itemprice, itemimage,selectedQuantity);
  //   this.showAddCartMsg();
  // }

  showAddCartMsg(){
    let toast = this.toastController.create({
      message: "Product Added to Cart!",
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  cartCounterManager(){
    return HomePage.cartData.length
  }

  doInfinite1(infiniteScroll) {
    this.mPage = this.mPage+1;
    this.userDetails.page = this.mPage;
    this.postData.page = this.userDetails.page;
    console.log("PAGE NUMBER AFTER INCREMENT: ",this.userDetails.page);

    this.auth.postData(this.postData, "offers").then((result) => {
      this.resposeData = result;
      this.offersFullData = this.resposeData.offersData;
      console.log("SIZE OF RESULT: ",this.offersFullData.length);
        if(this.offersFullData.length < this.pageLimit){
          infiniteScroll.enable(false);
        }
        for(let i=0; i<this.offersFullData.length; i++) {
          this.itemdatafull.push(this.offersFullData[i]);
          }
        infiniteScroll.complete();
  }, (err) => {

  });
  } // End doInfinite1
}

