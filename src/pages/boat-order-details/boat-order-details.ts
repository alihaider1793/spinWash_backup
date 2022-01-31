import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { HkApiproviderProvider } from '../../providers/hk-apiprovider/hk-apiprovider';
import { AddressPage } from '../address/address';

/**
 * Generated class for the BoatOrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boat-order-details',
  templateUrl: 'boat-order-details.html',
})
export class BoatOrderDetailsPage {

  boatOrderData = {
    island_name: "",
    island_id: "",
    vessel: "",
    shipment_date: ""
  };

  month: number;
  year: number;
  myDate: String = new Date().toISOString();
  myDate1: String = new Date().toISOString();
  myDate2: String = new Date().toISOString();
  myDate3: String = new Date().toISOString();
  myFullDate: String;
  myMaxDate: String;

  islandNames: any;
  vesselNames: any;

  selectedVesselIndex: any;
  selectedIndex: any;
  userDetails: any;
  private responseData: any;
  private responseData1: any;

  loading: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private datePicker: DatePicker,
    public alertCtrl: AlertController,
    private auth: HkApiproviderProvider,
    public loadingCtrl: LoadingController) {

    //GET CURRENT DATE TO SET MAX AND MIN LIMIT
    this.myDate = new Date().getDate().toString();
    if (this.myDate.length < 2) {
      this.myDate = "0" + this.myDate;
    }
    console.log("TODAY: ", this.myDate);
    this.month = new Date().getUTCMonth();
    this.month = this.month + 1;
    this.myDate1 = this.month.toString();
    if (this.myDate1.length < 2) {
      this.myDate1 = "0" + this.myDate1;
    }
    console.log("TODAY: ", this.myDate1);
    this.myDate2 = new Date().getUTCFullYear().toString();
    console.log("TODAY: ", this.myDate2);
    this.myFullDate = this.myDate2 + "-" + this.myDate1 + "-" + this.myDate;
    console.log("TODAY: ", this.myFullDate);
    this.year = new Date().getUTCFullYear();
    this.year = this.year + 1;
    this.myDate3 = this.year.toString();
    this.myMaxDate = this.myDate3 + "-" + this.myDate1 + "-" + this.myDate;

    //GET USER DATA TO HIT API
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;



  }

  ngOnInit() {
    console.log("NGONINIT!!")
    //GET ISLAND NAMES FROM SERVER
    this.getIslandNames();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Fetching Data'
    });

    this.loading.present();
  }

  getIslandNames() {
    this.presentLoadingDefault();
    this.auth.postData(this.userDetails, "getIslandList").then(
      result => {
        this.responseData = result;
        this.islandNames = this.responseData.islandsData;
        console.log('island names: ', this.islandNames);
        //GET VESSEL NAMES FROM SERVER
        this.getVesselNames();
      },
    );
  }

  getVesselNames() {
    this.auth.postData(this.userDetails, "getVesselList").then(
      result => {
        this.responseData1 = result;
        this.vesselNames = this.responseData1.vesselData;
        console.log('vessel names: ', this.vesselNames);
        this.loading.dismiss();
      },
    );
  }

  islandSelected() {
    this.boatOrderData.island_id = this.islandNames[this.selectedIndex].id;
    this.boatOrderData.island_name = this.islandNames[this.selectedIndex].island_name;
    console.log('selected island: ', this.boatOrderData.island_id);
    console.log('selected island: ', this.boatOrderData.island_name);
  }

  vesselSelected() {
    this.boatOrderData.vessel = this.vesselNames[this.selectedVesselIndex].vessel_name;
    console.log('selected vessel: ', this.boatOrderData.vessel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoatOrderDetailsPage');
  }

  onSubmit() {
    if (this.boatOrderData.shipment_date != "" && this.boatOrderData.vessel != "" && this.boatOrderData.island_id != "" && this.boatOrderData.island_name != "") {
      console.log('something is happening: ', this.boatOrderData.shipment_date);
      localStorage.setItem("BoatOrderDetails", JSON.stringify(this.boatOrderData));
      this.navCtrl.push(AddressPage);
    }
    else {
      let alert = this.alertCtrl.create({
        title: ' ALERT',
        subTitle: 'Incomplete Data',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

}
