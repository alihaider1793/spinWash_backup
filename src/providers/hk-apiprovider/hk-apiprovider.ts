import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HkApiproviderProvider {

  /*******************************
 *
 *  Developer : Ali Haider
 *  Email : alihaider1793@gmail.com
 *
 *  Please don't share this script on nulled websites
 *  Buy from Envato & appreciate Developer
 *
 * ******************************/

  // baseUrl = 'http://62.171.149.49:8082/app/';
  baseUrl = 'http://173.249.13.154:8082/app/';
  data: any;
  data1: any;
  userDetails1: any;

  imagebaseurl = 'http://173.249.13.154:8082/admin/itemimg/';
  wsimagebaseurl = "http://173.249.13.154:8082/admin/wsitemimg/"
  bannerbaseurl = 'http://173.249.13.154:8082/admin/banner/';

  // imagebaseurl = 'http://62.171.149.49:8082/admin/itemimg/';
  // wsimagebaseurl = "http://62.171.149.49:8082/admin/wsitemimg/"
  // bannerbaseurl = 'http://62.171.149.49:8082/admin/banner/';

  shipping = 10;

  /*********************************************** */

  constructor(public http: Http, public httpclient: HttpClient) {
  }


  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(this.baseUrl + type, JSON.stringify(credentials), { headers: headers }).
        subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  postData1(type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(this.baseUrl + type, "", { headers: headers }).
        subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }


  getimage() {
    return this.imagebaseurl;
  }

  getbanner() {
    return this.bannerbaseurl;
  }

  getshippingChargers() {
    return this.shipping;
  }

}
