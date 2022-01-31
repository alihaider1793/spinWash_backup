webpackJsonp([29],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\about-us\about-us.html"*/'<ion-header style="background-color: #2cbfb1;">\n\n  <ion-navbar>\n    <ion-title style="color:#fff;">ABOUT US</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-light">\n\n  <h5>Company Name: </h5>\n  <p>GNC Company Ltd.</p>\n  <h5>Trading As: </h5>\n  <p>The Clothes Spin Bahamas</p>\n  <h5>Address</h5>\n  <p>#45 Carib Road, Pyfroms Addition</p>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoatOrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_address__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BoatOrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BoatOrderDetailsPage = /** @class */ (function () {
    function BoatOrderDetailsPage(navCtrl, navParams, datePicker, alertCtrl, auth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.boatOrderData = {
            island_name: "",
            island_id: "",
            vessel: "",
            shipment_date: ""
        };
        this.myDate = new Date().toISOString();
        this.myDate1 = new Date().toISOString();
        this.myDate2 = new Date().toISOString();
        this.myDate3 = new Date().toISOString();
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
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
    }
    BoatOrderDetailsPage.prototype.ngOnInit = function () {
        console.log("NGONINIT!!");
        //GET ISLAND NAMES FROM SERVER
        this.getIslandNames();
    };
    BoatOrderDetailsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Fetching Data'
        });
        this.loading.present();
    };
    BoatOrderDetailsPage.prototype.getIslandNames = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.auth.postData(this.userDetails, "getIslandList").then(function (result) {
            _this.responseData = result;
            _this.islandNames = _this.responseData.islandsData;
            console.log('island names: ', _this.islandNames);
            //GET VESSEL NAMES FROM SERVER
            _this.getVesselNames();
        });
    };
    BoatOrderDetailsPage.prototype.getVesselNames = function () {
        var _this = this;
        this.auth.postData(this.userDetails, "getVesselList").then(function (result) {
            _this.responseData1 = result;
            _this.vesselNames = _this.responseData1.vesselData;
            console.log('vessel names: ', _this.vesselNames);
            _this.loading.dismiss();
        });
    };
    BoatOrderDetailsPage.prototype.islandSelected = function () {
        this.boatOrderData.island_id = this.islandNames[this.selectedIndex].id;
        this.boatOrderData.island_name = this.islandNames[this.selectedIndex].island_name;
        console.log('selected island: ', this.boatOrderData.island_id);
        console.log('selected island: ', this.boatOrderData.island_name);
    };
    BoatOrderDetailsPage.prototype.vesselSelected = function () {
        this.boatOrderData.vessel = this.vesselNames[this.selectedVesselIndex].vessel_name;
        console.log('selected vessel: ', this.boatOrderData.vessel);
    };
    BoatOrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoatOrderDetailsPage');
    };
    BoatOrderDetailsPage.prototype.onSubmit = function () {
        if (this.boatOrderData.shipment_date != "" && this.boatOrderData.vessel != "" && this.boatOrderData.island_id != "" && this.boatOrderData.island_name != "") {
            console.log('something is happening: ', this.boatOrderData.shipment_date);
            localStorage.setItem("BoatOrderDetails", JSON.stringify(this.boatOrderData));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__address_address__["a" /* AddressPage */]);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: ' ALERT',
                subTitle: 'Incomplete Data',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
    };
    BoatOrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-boat-order-details',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\boat-order-details\boat-order-details.html"*/'<!--\n  Generated template for the BoatOrderDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="background-color: #2cbfb1;">\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu" style="color:#fff; "></ion-icon>\n    </button>\n    <ion-title style="color:#fff; ">Boat Order Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding class="formdiv">\n\n  <ion-item style="margin-bottom:10px">\n    <ion-label stacked color="primary">Island Name</ion-label>\n    <!-- <ion-input type="text" required [(ngModel)]="boatOrderData.island_name"></ion-input> -->\n    <ion-select class="my-select" placeholder="Select" [(ngModel)]="this.selectedIndex" (ionChange)="islandSelected()">\n      <ion-option *ngFor="let item of islandNames ; let i = index" [value]=i>{{item.island_name}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item style="margin-bottom:10px">\n    <ion-label stacked color="primary">Vessel</ion-label>\n    <!-- <ion-textarea rows="5" required [(ngModel)]="boatOrderData.vessel"></ion-textarea> -->\n    <ion-select class="my-select" placeholder="Select" [(ngModel)]="this.selectedVesselIndex" (ionChange)="vesselSelected()">\n      <ion-option *ngFor="let item of vesselNames ; let i = index" [value]=i>{{item.vessel_name}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item style="margin-bottom:10px">\n    <ion-label stacked color="primary">Shipment Date</ion-label>\n    <!-- <ion-input type="number" required [(ngModel)]="boatOrderData.shipment_date"></ion-input> -->\n    <ion-datetime min="{{this.myFullDate}}" max={{this.myMaxDate}} value="" [(ngModel)]="boatOrderData.shipment_date" display-timezone="utc"></ion-datetime>\n  </ion-item>\n\n  <div class="subbtn">\n    <button ion-button round (click)="onSubmit()">\n      Continue\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\boat-order-details\boat-order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], BoatOrderDetailsPage);
    return BoatOrderDetailsPage;
}());

//# sourceMappingURL=boat-order-details.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_password_reset_password__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.emialFlag = false;
        this.postData = {
            email: "",
            verification_code: 0
        };
    }
    ForgotPasswordPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Error",
            subTitle: "Provide A Valid Email Address",
            buttons: ["OK"]
        });
        alert.present();
    };
    ForgotPasswordPage.prototype.showAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: "Error",
            subTitle: "Email Address Required",
            buttons: ["OK"]
        });
        alert.present();
    };
    ForgotPasswordPage.prototype.showAlert2 = function () {
        var alert = this.alertCtrl.create({
            title: "AELRT",
            subTitle: "USER DOES NOT EXIST",
            buttons: ["OK"]
        });
        alert.present();
    };
    ForgotPasswordPage.prototype.sendEmail = function () {
        var _this = this;
        this.auth.postData(this.postData, "sendVerificationCodeEmail").then(function (result) {
            _this.resposeData = result;
            console.log(_this.resposeData);
        }, function (err) {
            console.log(err);
        });
    };
    ForgotPasswordPage.prototype.saveVerificationCodeToDatabase = function () {
        var _this = this;
        this.auth.postData(this.postData, "storeVerificationCode").then(function (result) {
            _this.resposeData = result;
            console.log("Storing verification code to database: ", _this.resposeData);
        }, function (err) {
            console.log("Storing verification code to database: ", err);
        });
    };
    ForgotPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (this.postData.email == "") {
            this.showAlert1();
        }
        else {
            this.regex = new RegExp("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})");
            this.emialFlag = this.regex.test(this.postData.email);
            if (this.emialFlag == false) {
                this.showAlert();
            }
            else {
                //CHECKING IF USER EXISTS
                this.auth.postData(this.postData, "checkUserEmail").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData == "USER NOT FOUND") {
                        _this.showAlert2();
                    }
                    else {
                        //generating 4 digit random code and sending email to the user
                        _this.postData.verification_code = Math.floor(1000 + Math.random() * 9000);
                        //STORE THIS IN DATABASE IN THE VERIFICATION_CODE COLUMN
                        _this.saveVerificationCodeToDatabase();
                        // console.log("VERIFICATION CODE TO BE SENT TO EMAIL: ",this.postData.verification_code);
                        _this.sendEmail();
                        localStorage.setItem('resetEmail', _this.postData.email);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reset_password_reset_password__["a" /* ResetPasswordPage */]);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\forgot-password\forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding style="background-image: url(././assets/imgs/bg.png);background-color:white;">\n\n  <div class="forgot-password">\n    <img src="././assets/imgs/wgs-logo.png" alt=""\n         style="width: 65%;">\n    <div class="forgot-passwordinput">\n      <ion-item>\n        <ion-label fixed color="primary">Email</ion-label>\n        <ion-input type="email" [(ngModel)]="postData.email"></ion-input>\n      </ion-item>\n\n\n    </div>\n    <div class="btn-login"><button ion-button round (click)="resetPassword()">RESET PASSWORD</button></div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.postData = {
            email: "",
            verify_code: "",
            password: "",
            confirm_password: ""
        };
        this.postData.email = localStorage.getItem('resetEmail');
    }
    ResetPasswordPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Alert",
            subTitle: "Provide All Information",
            buttons: ["OK"]
        });
        alert.present();
    };
    ResetPasswordPage.prototype.showAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: "Alert",
            subTitle: "Passwords Do Not Match",
            buttons: ["OK"]
        });
        alert.present();
    };
    ResetPasswordPage.prototype.showAlert2 = function () {
        var alert = this.alertCtrl.create({
            title: "Error",
            subTitle: "Incorrect Verification Code",
            buttons: ["OK"]
        });
        alert.present();
    };
    ResetPasswordPage.prototype.showAlert3 = function () {
        var alert = this.alertCtrl.create({
            title: "Error",
            subTitle: "Something Went Wrong! Please Try Again",
            buttons: ["OK"]
        });
        alert.present();
    };
    ResetPasswordPage.prototype.showSuccessAlert = function () {
        var alert = this.alertCtrl.create({
            title: "SUCCESS",
            subTitle: "Password Changed Successfully",
            buttons: ["OK"]
        });
        alert.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ResetPasswordPage.prototype.verifyCode = function () {
        var _this = this;
        this.auth.postData(this.postData, "checkVerificationCode").then(function (result) {
            _this.resposeData = result;
            console.log("Checking verification code from database: ", _this.resposeData);
            if (_this.resposeData == "VERIFICATION FAIL") {
                _this.showAlert2();
            }
            else {
                //update password in database
                _this.changePassword();
            }
        }, function (err) {
            console.log("Storing verification code to database: ", err);
        });
    };
    ResetPasswordPage.prototype.changePassword = function () {
        var _this = this;
        this.auth.postData(this.postData, "resetPassword").then(function (result) {
            _this.resposeData = result;
            console.log("Checking verification code from database: ", _this.resposeData);
            if (_this.resposeData == "Password Reset Fail") {
                _this.showAlert3();
            }
            else {
                //update password in database
                _this.showSuccessAlert();
            }
        }, function (err) {
            console.log("Storing verification code to database: ", err);
        });
    };
    ResetPasswordPage.prototype.updatePassword = function () {
        if (this.postData.verify_code == "" || this.postData.password == "" || this.postData.confirm_password == "") {
            this.showAlert();
        }
        else if (this.postData.confirm_password != this.postData.password) {
            this.showAlert1();
        }
        else {
            this.verifyCode();
        }
    };
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset-password',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\reset-password\reset-password.html"*/'<!--\n  Generated template for the ResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding style="background-image: url(././assets/imgs/bg.png);background-color:white;">\n\n  <div class="reset-password">\n    <img src="././assets/imgs/wgs-logo.png" alt=""\n         style="width: 65%;">\n    <div class="reset-passwordinput">\n\n      <ion-item>\n<!--        <ion-label fixed color="primary">Password</ion-label>-->\n        <ion-input type="password" placeholder="Enter Password" [(ngModel)]="postData.password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n<!--        <ion-label fixed color="primary">Confirm Password</ion-label>-->\n        <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="postData.confirm_password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n<!--        <ion-label fixed color="primary">Code</ion-label>-->\n        <ion-input type="text" placeholder="Enter Verification Code" [(ngModel)]="postData.verify_code"></ion-input>\n      </ion-item>\n      <p style="color: #2cbfb1"><small>4 digit verification code was sent the provided email address</small></p>\n\n    </div>\n    <div class="btn-login"><button ion-button round (click)="updatePassword()">UPDATE PASSWORD</button></div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsAndConditionsPage = /** @class */ (function () {
    function TermsAndConditionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsAndConditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsAndConditionsPage');
    };
    TermsAndConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms-and-conditions',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\terms-and-conditions\terms-and-conditions.html"*/'<ion-header style="background-color: #2cbfb1;">\n\n  <ion-navbar>\n    <ion-title style="color:#fff;">Terms and Conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p><strong>Terms And Conditions</strong></p>\n  <p>GNC Company Limited built the Discount Distributors Order app as a Free app. This SERVICE is provided by GNC Company Limited at no cost and is intended for use as is.\n    By ordering through this app you agree to pay for the items ordered via your chosen payment method and understand that your account can be canceled if you fail to do so.\n    In cases where you have chosen delivery you give permission for our staff to contact you to confirm directions.</p>\n\n  <p>You acknowledge and give permission for the Discount Distributor staff to enter your property and will have someone in place to receive the items that is over the age of 16 years of age.\n  </p>\n\n  <p><strong>Delivery</strong></p>\n  <p>Delivery of confirmed orders is done by our delivery staff via our delivery vehicles.</p>\n  <p>Orders confirmed before noon will be eligible for same day delivery while orders after noon may be delivered the following day. This information will be updated via your order status page.</p>\n\n  <p>If for any reason you will be unable to receive or pickup items you may cancel your order (through your account via the order page or) by calling or whatsapping is immediately. Our contact numbers are here.\n    <br>office: 1-242-601-0213 or 1-242-601-0215\n    <br>whatsapp: 1-242-809-0235</p>\n\n  <p>If contact cannot be made with the account holder to clarify directions or there is no response at the directed building the order will be canceled and restocked.</p>\n  <p>Orders placed for pickup will be canceled and restocked after 24 hours.</p>\n\n  <p>Accounts with unsuccessful deliveries or pickup orders may be canceled by us.</p>\n\n  <p>If for any reason you need to return items purchased, you may do so by returning the item to our store located on Caribe Road, off of Chesapeake Road accompanied by the receipt you would have received with your order for an exchange (or cash refund).</p>\n\n  <p>GNC Company Limited built the Discount Distributors Order app as a Free app. This SERVICE is provided by GNC Company Limites at no cost and is intended for use as is.\n    This page is used to inform users regarding our policies with the collection, use, and disclosure of Personal Information.\n    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>\n\n  <p><strong>Information Collection and Use</strong></p>\n  <p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Address. The information that we request will be retained by us and used as to identify customers and to aid in the delivery service.\n    The app does use third party services that may collect information used to identify you.\n    Link to privacy policy of third party service providers used by the app</p>\n\n\n  <p><strong>Google Play Services</strong></p>\n  <p>Changes to This Privacy Policy <br>\n    We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>\n\n  <p><strong>Contact Us</strong></p>\n  <p>If you have any questions, feedback or suggestions about our Terms & Conditions, Privacy Policy, Services or App do not hesitate to contact us at:</p>\n  <p><strong>Tel.</strong> 1-242-601-0213 or 601-0215 <br>\n    <strong>Whatsapp :</strong> 1-242-813-0213 <br>\n    <strong>Email:</strong> info@theproduceexpress.com</p>\n  <br>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\terms-and-conditions\terms-and-conditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
}());

//# sourceMappingURL=terms-and-conditions.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_desc_product_desc__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductSearchPage = /** @class */ (function () {
    function ProductSearchPage(navCtrl, navParams, modalCtrl, alertCtrl, auth, toastController, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.postData = {
            token: "",
            user_id: "",
            squery: ""
        };
        this.searchFullData = [];
        this.baseUrlImage = auth.getimage();
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
    }
    ProductSearchPage.prototype.onChange = function (newValue) {
        var _this = this;
        console.log("searching for: ", newValue);
        this.postData.squery = newValue;
        this.auth.postData(this.postData, "searchproduct").then(function (result) {
            _this.resposeData = result;
            _this.searchFullData = _this.resposeData.SearchData;
        }, function (err) {
        });
        // ... do other stuff here ...
    };
    ProductSearchPage.prototype.openCartPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    ProductSearchPage.prototype.searchProduct = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: "crescent"
        });
        zest.present();
        this.auth.postData(this.postData, "searchproduct").then(function (result) {
            _this.resposeData = result;
            _this.searchFullData = _this.resposeData.SearchData;
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    ProductSearchPage.prototype.openProductDetailPage = function (itemId, itemName, itemImage, itemDesc, itemQuantity, itemQuantityType, itemPrice) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_desc_product_desc__["a" /* ProductDescPage */], {
            itemId: itemId,
            itemName: itemName,
            itemDesc: itemDesc,
            itemQuantity: itemQuantity,
            itemQuantityType: itemQuantityType,
            itemPrice: itemPrice,
            itemImage: itemImage
        });
    };
    // addToCartProd(itemid:any, itemname:any, itemquantity:any, itemquantitytype:any, itemprice:any, itemimage:any, selectedQuantity:any,packageId:any) {
    //   HomePage.Instance.storeToCart(
    //     itemid,
    //     itemname,
    //     itemquantity,
    //     itemquantitytype,
    //     itemprice,
    //     itemimage,
    //     selectedQuantity,
    //     packageId
    //   );
    //   this.showAddCartMsg();
    // }
    ProductSearchPage.prototype.showAddCartMsg = function () {
        var toast = this.toastController.create({
            message: "Product Added to Cart!",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    ProductSearchPage.prototype.cartCounterManager = function () {
        return __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].cartData.length;
    };
    ProductSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-product-search",template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\product-search\product-search.html"*/'<ion-header style="background-color: #2cbfb1;">\n    <ion-navbar>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu" style="color:#fff; "></ion-icon>\n      </button>\n      <ion-title style="color:#fff; ">Search</ion-title>\n      <ion-buttons end class="cartbadge">\n          <button ion-button (click)="openCartPage()">\n              <ion-icon name="ios-cart"></ion-icon>\n            </button><ion-badge item-end>{{cartCounterManager()}}</ion-badge>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding style="background-image: url(././assets/imgs/bg.png);background-color:white;" class="welcome-background" >\n    <ion-list class="listcls" no-lines>\n        <ion-item class="searchcl">\n          <ion-input type="text" [(ngModel)]="postData.squery" placeholder="Search" (ngModelChange)="onChange($event)"></ion-input>\n          <button item-right ion-button clear (click)="searchProduct()">\n              <ion-icon name="md-search"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list>\n\n      <div class="cateproduct">\n          <ion-card class="myCard" *ngFor="let item of searchFullData;  let i = index;">\n\n            <div *ngIf="item.out_of_stock != 1">\n              <img (click)="openProductDetailPage(item.id,item.name,item.image,item.description,item.quantity,item.quantitytype,item.price)" class="p-2" src="{{baseUrlImage}}{{item.image}}">\n              <ion-card-header>\n                <h2 class="text-center">{{item.name}}</h2>\n              </ion-card-header>\n            </div>\n            <div *ngIf="item.out_of_stock != 0">\n              <img class="p-2" src="{{baseUrlImage}}{{item.image}}">\n              <div class="myOverlay">\n                <div class="card-subtitle"><strong>OUT OF STOCK</strong></div>\n              </div>\n              <ion-card-header>\n                <h2 style="color: grey" class="text-center">{{item.name}}</h2>\n              </ion-card-header>\n            </div>\n\n            <!-- <ion-card-content>\n                <div class="quantity">{{item.quantity}} {{item.quantitytype}}</div> <div class="price">{{item.price | currency}}</div>\n                <div class="btn-cart"><button ion-button round (click)="addToCartProd(item.id,item.name,item.quantity,item.quantitytype,item.price, item.image)"><ion-icon name="md-add-circle"></ion-icon>&nbsp;Add to Cart</button>\n                </div>\n            </ion-card-content> -->\n          </ion-card>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\product-search\product-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ProductSearchPage);
    return ProductSearchPage;
}());

//# sourceMappingURL=product-search.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectClothesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_datetime_select_datetime__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SelectClothesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectClothesPage = /** @class */ (function () {
    function SelectClothesPage(navCtrl, navParams, auth, alertCtrl, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.categData = [];
        this.servicesData = [];
        this.selectedCategoryIdx = 0;
        this.selectedCategory = "";
        this.selectedCategProducts = [];
        this.selectedProductPackages = [];
        this.baseUrlImage = "";
        this.selectedService = 0;
        this.categoriestoShow = [];
        this.amount = 0;
        if (__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].categData) {
            console.log('total categories to be displayed: ' + __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].categData.length);
            this.categData = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].categData;
            console.log('total categories are: ' + JSON.stringify(this.categData));
            if (__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].steamPressSelected) {
                this.categData.forEach(function (element) {
                    if (element.categry == "Single Items") {
                        _this.categoriestoShow.push(element);
                    }
                });
                this.categData = this.categoriestoShow;
            }
            else {
                this.categData.forEach(function (element) {
                    if (element.categry != "Single Items") {
                        _this.categoriestoShow.push(element);
                    }
                });
                this.categData = this.categoriestoShow;
            }
            this.baseUrlImage = auth.getimage();
        }
        if (__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].servicesData) {
            this.servicesData = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].servicesData;
            console.log('total services to be displayed: ' + __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].servicesData.length);
        }
        this.finalcartdata = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData;
    }
    SelectClothesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectClothesPage');
    };
    SelectClothesPage.prototype.ionViewWillEnter = function () {
        this.loadProducts(0);
    };
    SelectClothesPage.prototype.openVariations = function (index, product) {
        var _this = this;
        this.selectedProductPackages = [];
        // console.log('clicked on item: ' + index + ' ' + JSON.stringify(product));
        var prodId = product.id;
        this.selectedProductt = product;
        __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].packagesData.forEach(function (element) {
            if (element.item_id == prodId) {
                _this.selectedProductPackages.push(element);
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
        var alert = this.alertCtrl.create();
        alert.setTitle("Select Service: ");
        for (var i = 0; i < this.selectedProductPackages.length; i++) {
            alert.addInput({ type: 'radio', label: this.selectedProductPackages[i]['quantity_type'] + ' - BSD$ ' + this.selectedProductPackages[i]['price'], value: this.selectedProductPackages[i], });
        }
        alert.addButton({
            text: 'cancel', handler: function () {
                console.log('cancel clicked!');
            }
        });
        alert.addButton({
            text: 'ok', handler: function (data) {
                _this.selectedService = data;
                console.log('selected product is: ' + JSON.stringify(_this.selectedProductt));
                console.log('selected service is : ' + JSON.stringify(_this.selectedService));
                _this.addtocart(_this.selectedProductt.id, _this.selectedProductt.name, _this.selectedService.quantity, _this.selectedService.quantity_type, _this.selectedService.price, _this.selectedProductt.image, 1, _this.selectedCategory);
            }
        });
        alert.present();
    };
    SelectClothesPage.prototype.showToast = function (message) {
        var toast = this.toastController.create({
            message: message,
            duration: 2000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('onDidDismiss Toast');
        });
        toast.present();
    };
    SelectClothesPage.prototype.openCartPage = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData.length > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__select_datetime_select_datetime__["a" /* SelectDatetimePage */]);
        }
        else {
            this.showToast('There are no clothes in your cart!');
        }
        // this.navCtrl.push(CartPage);
    };
    SelectClothesPage.prototype.addtocart = function (itemid, itemname, itemquantity, itemquantitytype, itemprice, itemimage, selectedQuantity, selectedCategory) {
        // console.log('without typecast',this.packageDetails[this.package_id].price);
        // console.log('with typecast',parseFloat(this.packageDetails[this.package_id].price));
        // console.log('selected index',this.package_id);
        __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].Instance.storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemimage, selectedQuantity, selectedCategory);
        this.showAddCartMsg();
    };
    SelectClothesPage.prototype.showAddCartMsg = function () {
        var toast = this.toastController.create({
            message: "Product Added to Cart!",
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SelectClothesPage.prototype.cartCounterManager = function () {
        return __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData.length;
    };
    SelectClothesPage.prototype.calculatecart = function () {
        this.amount = 0;
        for (var _i = 0, _a = this.finalcartdata; _i < _a.length; _i++) {
            var item = _a[_i];
            this.amount += parseFloat(item.itemprice) * parseFloat(item.Mquantity);
        }
        return this.amount.toFixed(2).toString();
    };
    SelectClothesPage.prototype.loadProducts = function (index) {
        console.log('getting data for category id: ' + index);
        var nameOfCat = this.categData[index]["categry"];
        this.selectedCategory = nameOfCat;
        console.log("Selected Category = ", this.selectedCategory);
        this.selectedCategProducts = [];
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].productData; _i < _a.length; _i++) {
            var pro = _a[_i];
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
    };
    SelectClothesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-clothes',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\select-clothes\select-clothes.html"*/'<!--\n  Generated template for the SelectClothesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Clothes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-light">\n  <div class="tabs-list bg-green">\n    <ion-scroll scrollX="true" style="height: 50px;;">\n      <ion-segment class="bg-green" [(ngModel)]="selectedCategoryIdx">\n        <ion-segment-button *ngFor="let cat of categData; let i = index" [value]="i" [innerHTML]="cat.categry"\n          (click)="loadProducts(i)">\n        </ion-segment-button>\n      </ion-segment>\n    </ion-scroll>\n  </div>\n\n  <div *ngIf="!noCategoryProducts" style="margin-top: 8px;" class="cloth-list">\n    <ion-list no-lines>\n      <ion-item *ngFor="let product of selectedCategProducts; let i = index;">\n        <ion-avatar item-start>\n          <img [src]="baseUrlImage + product.image">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{product.name}}</h3>\n        </ion-label>\n        \n        <!-- <ion-note class="modify_cart" item-end>\n          Modify Items\n        </ion-note> -->\n        <ion-note item-end  (click)="openVariations(i, product)">\n          Add to cart\n        </ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="noCategoryProducts">\n    <ion-row class="emptycart">\n      <ion-col>\n        <p>There are no products in this category!</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="fixed-bootom" (click)="openCartPage()">\n      <ion-row>\n        <!-- <ion-col col-4 class="cost">{{"total" | translate}} <span [innerHTML]="total_html"></span> </ion-col> -->\n        <ion-col col-4 class="cost">Total <span> {{calculatecart()}}</span> </ion-col>\n        <!-- <ion-col col-4 class="small " text-center>{{cartItems.length}} {{"items" | translate}}</ion-col> -->\n        <ion-col col-4 class="small " text-center>{{cartCounterManager()}} Item(s) Addeed</ion-col>\n        <ion-col col-4 class="next" text-end>Next\n          <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\select-clothes\select-clothes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SelectClothesPage);
    return SelectClothesPage;
}());

//# sourceMappingURL=select-clothes.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaypalSubsccriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscription_details_subscription_details__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PaypalSubsccriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaypalSubsccriptionPage = /** @class */ (function () {
    // options: InAppBrowserOptions = {
    //   location: 'yes',//Or 'no' 
    //   hidden: 'no', //Or  'yes'
    //   clearcache: 'yes',
    //   clearsessioncache: 'yes',
    //   zoom: 'yes',//Android only ,shows browser zoom controls 
    //   hardwareback: 'yes',
    //   mediaPlaybackRequiresUserAction: 'no',
    //   shouldPauseOnSuspend: 'no', //Android only 
    //   closebuttoncaption: 'Close', //iOS only
    //   disallowoverscroll: 'no', //iOS only 
    //   toolbar: 'yes', //iOS only 
    //   enableViewportScale: 'no', //iOS only 
    //   allowInlineMediaPlayback: 'no',//iOS only 
    //   presentationstyle: 'pagesheet',//iOS only 
    //   fullscreen: 'yes',//Windows only    
    // };
    function PaypalSubsccriptionPage(navCtrl, navParams, iab) {
        // let target = "_blank";
        // const browser = this.iab.create('./assets/iframeTemplates/paypalSubscription.html', target, this.options);
        // browser.on('loadstop').subscribe(event => {
        //   console.log('loaded data');
        //   browser.insertCSS({ code: "body{color: red;" });
        // });
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.paypalSubscriptionName = "";
        this.paypalSubscriptionURL = "";
        this.bronze = false;
        this.silver = false;
        this.gold = false;
        if (__WEBPACK_IMPORTED_MODULE_3__subscription_details_subscription_details__["a" /* SubscriptionDetailsPage */].subscriptionOpenedDetails.id == 3) {
            this.bronze = true;
            this.silver = false;
            this.gold = false;
        }
        if (__WEBPACK_IMPORTED_MODULE_3__subscription_details_subscription_details__["a" /* SubscriptionDetailsPage */].subscriptionOpenedDetails.id == 8) {
            this.silver = true;
            this.bronze = false;
            this.gold = false;
        }
        if (__WEBPACK_IMPORTED_MODULE_3__subscription_details_subscription_details__["a" /* SubscriptionDetailsPage */].subscriptionOpenedDetails.id == 7) {
            this.gold = true;
            this.silver = false;
            this.bronze = false;
        }
    }
    PaypalSubsccriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaypalSubsccriptionPage');
    };
    PaypalSubsccriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paypal-subsccription',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\paypal-subsccription\paypal-subsccription.html"*/'<!--\n  Generated template for the PaypalSubsccriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PAYPAL SUBSCRIPTION</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-light">\n  <ion-col>\n    <iframe *ngIf="bronze" src="../../assets/iFrameTemplates/paypalSubscription.html" \n      style="width: 100% !important; height: 100% !important;"></iframe>\n\n      <iframe *ngIf="silver" src="../../assets/iFrameTemplates/paypalSubscriptionsilver.html" \n      style="width: 100% !important; height: 100% !important;"></iframe>\n\n      <iframe *ngIf="gold" src="../../assets/iFrameTemplates/paypalSubscriptiongold.html" \n      style="width: 100% !important; height: 100% !important;"></iframe>\n  </ion-col>\n</ion-content>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\paypal-subsccription\paypal-subsccription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PaypalSubsccriptionPage);
    return PaypalSubsccriptionPage;
}());

//# sourceMappingURL=paypal-subsccription.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(alertCtrl, navCtrl, auth, toastCtrl, formBuilder, navParams, loadingCtrl, http) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.postData = {
            token: "",
            user_id: "",
            fmsg: ""
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.todo = this.formBuilder.group({
            fmsg: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    FeedbackPage.prototype.logForm = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Sending Feedback..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.postData.fmsg = this.todo.value.fmsg;
        this.auth.postData(this.postData, "sendfeedback").then(function (result) {
            zest.dismiss();
            _this.resposeData = result;
            if (_this.resposeData.success) {
                _this.ticket = _this.resposeData.success;
                _this.feedbacksend();
                _this.navCtrl.pop();
            }
            else {
                console.log("Error");
            }
        }, function (err) {
            zest.dismiss();
        });
    };
    FeedbackPage.prototype.feedbacksend = function () {
        var alert = this.alertCtrl.create({
            title: "Feedback Send",
            subTitle: "Thanks for Giving Feedback!",
            buttons: ["Close"]
        });
        alert.present();
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedback',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\feedback\feedback.html"*/'<ion-header style="background-color: #2cbfb1;">\n\n  <ion-navbar>\n    <ion-title style="color:#fff;">Feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="todo" (ngSubmit)="logForm()">\n        <ion-item>\n            <ion-label floating color="primary">Your Feedback</ion-label>\n              <ion-textarea rows="10" formControlName="fmsg"></ion-textarea>\n        </ion-item>\n        <div class="feedbackbtn">\n        <button ion-button round type="submit" [disabled]="!todo.valid">Submit</button>\n      </div>\n      </form>\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBagsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MyBagsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyBagsPage = /** @class */ (function () {
    function MyBagsPage(alertCtrl, loadingCtrl, navCtrl, navParams, auth) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.postData = {
            token: "",
            user_id: ""
        };
        this.noBags = false;
        this.noBags = false;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.getUserSubscriptions();
    }
    MyBagsPage.prototype.getUserSubscriptions = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "getUserSubscriptions").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.UserSubscriptionDetails) {
                _this.bagDetails = _this.resposeData.UserSubscriptionDetails;
                console.log('total bags of user: ' + _this.bagDetails.length);
                console.log('user subscription bags are: ' + JSON.stringify(_this.bagDetails));
                if (_this.bagDetails.length == 0) {
                    _this.noBags = true;
                }
                else {
                    _this.noBags = false;
                }
            }
            else {
            }
            // console.log('order details: ' + JSON.stringify(this.orderDetail));
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    MyBagsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyBagsPage');
    };
    MyBagsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-bags',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\my-bags\my-bags.html"*/'<!--\n  Generated template for the MyBagsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>MY BAGS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-light">\n\n  <div *ngIf="noBags">\n    <ion-grid>\n      <ion-row class="emptycart">\n        <ion-col>\n          <p>No Bags Found!</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="!noBags">\n    <ion-card no-padding *ngFor="let item of bagDetails;  let i = index;">\n      <ion-row class="orderholder">\n        <ion-col>\n          <h2 class="orderid">{{item.service_name}}</h2>\n          <h3 class="ordertime"><span style="font-weight: bold;">{{item.quantity}} x {{item.item_name}}</span></h3>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n        <!-- <ion-col>\n          <button ion-button icon-left clear\n          (click)="openSubscriptionDetails(item)">\n            <div>Details</div>\n          </button>\n        </ion-col> -->\n      </ion-row>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\my-bags\my-bags.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */]])
    ], MyBagsPage);
    return MyBagsPage;
}());

//# sourceMappingURL=my-bags.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(loadingCtrl, navCtrl, navParams, auth) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.postData = {
            user_id: "",
            token: ""
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.getField();
    }
    NotificationsPage.prototype.getField = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Notification..",
            duration: 20000,
            spinner: "crescent"
        });
        zest.present();
        this.auth.postData(this.postData, "getnotification").then(function (result) {
            _this.resposeData = result;
            _this.NotidataSet = _this.resposeData.NotiData;
            console.log(_this.NotidataSet);
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-notifications",template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\notifications\notifications.html"*/'<ion-header style="background-color: #2cbfb1;">\n    <ion-navbar>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu" style="color:#fff; "></ion-icon>\n      </button>\n      <ion-title style="color:#fff; ">NOTIFICATIONS</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n        <div class="noti" *ngFor="let item of NotidataSet">\n          <ion-icon name="ios-notifications"></ion-icon>\n          <h2>{{item.title}}</h2>\n          <p>{{item.description}}</p>\n        </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_wallet_my_wallet__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QrScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrScannerPage = /** @class */ (function () {
    function QrScannerPage(navCtrl, navParams, scanner, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scanner = scanner;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.scannedData = {};
        this.postData = {
            token: "",
            user_id: "",
            amount: ""
        };
        // this.scanCard();
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.scan();
    }
    QrScannerPage.prototype.scan = function () {
        var _this = this;
        this.options = {
            prompt: 'Scan QR Code'
        };
        this.scanner.scan(this.options).then(function (data) {
            _this.scannedData = data;
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
            _this.postData.amount = data.text;
            _this.auth.postData(_this.postData, "addToWallet").then(function (result) {
                _this.resposeData = result;
                console.log("added amount to wallet: ", _this.resposeData);
                if (_this.resposeData.Error == "INVALID QR") {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'INVALID QR',
                        message: 'The QR you scanned is either invalid or already scanned!',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    console.log('Update clicked');
                                    _this.navCtrl.pop();
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    alert_1.present();
                }
                else {
                    _this.navCtrl.pop();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_wallet_my_wallet__["a" /* MyWalletPage */]);
                }
            }, function (err) {
                console.log('error: adding amount to wallet failed: ', err);
            });
        }, function (err) {
            console.log("Error while reading qr code: ", err);
        });
    };
    QrScannerPage.prototype.addToWallet = function () {
        var _this = this;
        this.auth.postData(this.postData, "addToWallet").then(function (result) {
            _this.resposeData = result;
            console.log("added amount to wallet: ", _this.resposeData);
        }, function (err) {
            console.log('error: adding amount to wallet: ', err);
        });
    };
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
    QrScannerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrScannerPage');
    };
    QrScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-qr-scanner',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\qr-scanner\qr-scanner.html"*/'<!--\n  Generated template for the QrScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>QR Scanner</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\qr-scanner\qr-scanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QrScannerPage);
    return QrScannerPage;
}());

//# sourceMappingURL=qr-scanner.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_placed_order_placed__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SamplePage = /** @class */ (function () {
    function SamplePage(auth, navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mPage = 1;
        this.pageLimit = 10;
        this.postData = {
            token: "",
            page: "",
            user_id: ""
        };
        this.showMessageDetails = false;
        this.mPage = 1;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userDetails.page = this.mPage;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.postData.page = this.userDetails.page;
        this.getorderhistory();
    }
    SamplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SamplePage');
    };
    SamplePage.prototype.getorderhistory = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "fetchMessages").then(function (result) {
            _this.resposeData = result;
            _this.orderdata = _this.resposeData.MessagesData;
            console.log('messages data: ', _this.orderdata);
            _this.allOrderData = _this.orderdata;
            console.log(_this.orderdata.length);
            if (_this.orderdata.length == 0) {
                _this.showtxt = true;
                _this.showHisdata = false;
            }
            else {
                _this.showtxt = false;
                _this.showHisdata = true;
            }
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    SamplePage.prototype.openMessageDetail = function (item) {
        this.showMessageDetails = true;
        this.msgToShow = item;
        console.log('Display message details: ', this.msgToShow);
    };
    SamplePage.prototype.showAllMessages = function () {
        this.getorderhistory();
        this.showMessageDetails = false;
    };
    SamplePage.prototype.openOrderDetailPage = function (orderid, fname, lname, area, address, mobile, ordertime, delivery_option) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_placed_order_placed__["a" /* OrderPlacedPage */], { orderid: orderid, fname: fname, lname: lname, area: area, address: address, mobile: mobile, ordertime: ordertime, delivery_option: delivery_option });
        console.log(orderid);
    };
    SamplePage.prototype.doInfinite2 = function (infiniteScroll) {
        var _this = this;
        this.mPage = this.mPage + 1;
        this.userDetails.page = this.mPage;
        this.postData.page = this.userDetails.page;
        console.log("PAGE NUMBER AFTER INCREMENT: ", this.userDetails.page);
        this.auth.postData(this.postData, "fetchorder").then(function (result) {
            _this.resposeData = result;
            _this.orderdata = _this.resposeData.OrderData;
            console.log("SIZE OF RESULT: ", _this.orderdata.length);
            if (_this.orderdata.length < _this.pageLimit) {
                infiniteScroll.enable(false);
            }
            for (var i = 0; i < _this.orderdata.length; i++) {
                _this.allOrderData.push(_this.orderdata[i]);
            }
            infiniteScroll.complete();
        }, function (err) {
        });
    }; // End doInfinite1
    SamplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sample',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\sample\sample.html"*/'<!--\n  Generated template for the SamplePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="background-color: #2cbfb1;">\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu" style="color:#000; "></ion-icon>\n    </button>\n\n    <ion-title style="color:#fff;" *ngIf="showMessageDetails==true">Message Details</ion-title>\n    <ion-title style="color:#fff;" *ngIf="showMessageDetails==false">Messages</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-content no-padding style="background-image: url(././assets/imgs/bg.png);background-color:white;"\n    class="welcome-background">\n\n    <div *ngIf="showMessageDetails==false">\n\n      <div *ngIf="showtxt">\n        <ion-grid>\n          <ion-row class="emptycart">\n            <ion-col>\n              <p>There are no messages in your inbox!</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <ion-list *ngIf="showHisdata">\n        <ion-card no-padding *ngFor="let item of allOrderData;  let i = index;">\n          <ion-row class="orderholder">\n            <ion-col>\n              <h2 class="orderid">Message ID: {{item.id}}</h2>\n              <!-- <h3 class="ordertime">Placed on <span>{{item.ordertime}}</span></h3> -->\n              <!-- <p *ngIf="item.status == \'Received\'"><img src="././assets/imgs/received.png">Received</p>\n              <p *ngIf="item.status == \'Confirmed\'"><img src="././assets/imgs/confirm.png">Confirmed</p>\n              <p *ngIf="item.status == \'Preparing\'"><img src="././assets/imgs/process.png">Processed</p>\n              <p *ngIf="item.status == \'On Way\'"><img src="././assets/imgs/deliver.png">On Way</p>\n              <p *ngIf="item.status == \'Delivered\'"><img src="././assets/imgs/delivered.png">Delivered</p>\n              <p *ngIf="item.status == \'Cancelled\'"><img src="././assets/imgs/cancel.png">Cancelled</p> -->\n              <p>{{item.cmsg}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear (click)="openMessageDetail(item)">\n                <div>View Reply</div>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-list>\n      <ion-infinite-scroll (ionInfinite)="doInfinite2($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </div>\n\n    <div *ngIf="showMessageDetails==true">\n\n      <div>\n        <ion-item no-padding clear style="margin-bottom: 10px; margin-left: 10px;">\n          <ion-row>\n            <ion-col>\n              <div style="font-weight: bold">Message ID</div>\n            </ion-col>\n            <ion-col>\n              <p>{{msgToShow.id}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n\n        <ion-item style="margin-bottom: 10px;">\n          <ion-label style="font-weight: bold; color: black;" >Message</ion-label>\n          <ion-textarea rows="6" cols="20" placeholder="Customer Message: " disabled value={{msgToShow.cmsg}}></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label style="font-weight: bold; color:black">Reply</ion-label>\n          <ion-textarea rows="6" cols="20" placeholder="No Reply Yet..." disabled value={{msgToShow.replyMessage}}></ion-textarea>\n        </ion-item>\n\n        <ion-item no-padding clear no-lines>\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear (click)="showAllMessages()">\n                <div>Ok</div>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n\n      </div>\n\n      <!-- <ion-card>\n        <ion-row class="orderholder">\n          <ion-col>\n            <h2 class="orderid">Message ID: {{msgToShow.id}}</h2>\n            <p>{{msgToShow.cmsg}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear (click)="showAllMessages()">\n              <div>Ok</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card> -->\n\n    </div>\n\n  </ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\sample\sample.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SamplePage);
    return SamplePage;
}());

//# sourceMappingURL=sample.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_desc_product_desc__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_search_product_search__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__offers_offers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_history_order_history__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__select_clothes_select_clothes__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__subscription_details_subscription_details__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__order_placed_order_placed__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__retail_products_retail_products__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__subscription_subscription__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth, navPram, toastCtrl, loadingCtrl, menuCtrl, storage, appVersion, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navPram = navPram;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.appVersion = appVersion;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.isUserSubscribed = false;
        this.cartCounter = 0;
        this.activeOrdersData = [];
        this.noOrders = false;
        this.totalOrdersOfUser = 0;
        this.productFullData = [];
        this.page = 1;
        this.pageLimit = 10;
        this.searchQuery = "";
        this.categoryList = "";
        this.title = "";
        this.message = "";
        this.platform = platform;
        this.page = 1;
        var data = JSON.parse(localStorage.getItem('userData'));
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
    HomePage_1 = HomePage;
    HomePage.prototype.getUserSubscriptions = function () {
        var _this = this;
        this.auth.postData(this.userDetails, "getUserSubscriptions").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.UserSubscriptionDetails) {
                _this.bagDetails = _this.resposeData.UserSubscriptionDetails;
                console.log('total bags of user: ' + _this.bagDetails.length);
                HomePage_1.userSubscriptions = _this.bagDetails;
                console.log('user subscription bags in homepage are: ' + JSON.stringify(HomePage_1.userSubscriptions));
            }
            else {
                console.log('failed to fetch user subscriptions');
            }
            // console.log('order details: ' + JSON.stringify(this.orderDetail));
        }, function (err) {
            // zest.dismiss();
            console.log('failed to get user subscriptions');
        });
    };
    HomePage.prototype.openOrderDetails = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__order_placed_order_placed__["a" /* OrderPlacedPage */], { orderid: order.orderid, fname: order.fname, lname: order.lname, area: order.area, address: order.address, mobile: order.mobile, ordertime: order.ordertime, delivery_option: order.delivery_option, delivery_date: order.delivery_date, pickup_date: order.pickup_date, pickup_time_from: order.pickup_time_from, pickup_time_to: order.pickup_time_to, delivery_time_from: order.delivery_time_from, delivery_time_to: order.delivery_time_to });
    };
    HomePage.prototype.getUserData = function () {
        var _this = this;
        this.auth.postData(this.userDetails, "login").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.userData) {
                console.log('checking subscription status of user on homepage: ' + _this.resposeData.userData.is_subscribed);
                if (_this.resposeData.userData.is_subscribed == 1 || _this.resposeData.userData.is_subscribed == '1') {
                    _this.isUserSubscribed = true;
                }
                else {
                    _this.isUserSubscribed = false;
                }
                localStorage.setItem('isSubscribed', _this.resposeData.userData.is_subscribed);
            }
            else if (_this.resposeData.error) {
                console.log("ERROR : ", _this.resposeData.error);
            }
        }, function (err) {
            console.log('failed to load subscription status of user on homepage');
            //Connection failed message
        });
    };
    HomePage.prototype.myOrders = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__order_history_order_history__["a" /* OrderHistoryPage */]);
    };
    HomePage.prototype.checkForUpdates = function () {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails1 = data.userData;
        //getting latest app version from the backend
        this.auth.postData(this.userDetails1, "getAppVersion").then(function (result) {
            _this.app_version = result;
            // console.log("Version Code: ",this.app_version);
            //getting installed app version
            _this.appVersion.getVersionCode().then(function (version_code) {
                _this.myApp_version = version_code;
                //check if version code is latest
                // console.log('version code from server: ', this.app_version);
                // console.log('version code of app: ', this.myApp_version);
                if (_this.myApp_version != _this.app_version) {
                    // console.log("UPDATE AVAILABLE");
                    _this.showUpdatePrompt();
                }
            });
        }, function (err) {
        });
    };
    HomePage.prototype.showUpdatePrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'UPDATE AVAILABLE',
            message: 'You must have the latest version of the app!',
            buttons: [
                {
                    text: 'Update',
                    handler: function () {
                        // console.log('Update clicked');
                        window.open("https://play.google.com/store/apps/details?id=discountdistributors.app.grocery", "_system");
                        _this.platform.exitApp();
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    HomePage.prototype.ngOnInit = function () {
        HomePage_1.Instance = this;
        // Or to get a key/value pair
        this.storage.get('cartData').then(function (val) {
            console.log('Your cartData is', val);
            if (val != null) {
                HomePage_1.cartData = val;
            }
        });
        this.getAgeDisclaimerMessage();
    };
    HomePage.prototype.getAgeDisclaimerMessage = function () {
        var _this = this;
        //getting ageDisclaimer notifications form the server
        this.auth.postData1("getAgeDisclaimerMessage").then(function (result) {
            _this.responseData = result;
            if (_this.responseData[0].is_active == 1) {
                _this.title = _this.responseData[0].title;
                _this.message = _this.responseData[0].message;
            }
        }, function (err) {
        });
    };
    HomePage.prototype.itemSelected = function (category) {
        // console.log(category);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */], { category: category });
    };
    HomePage.prototype.gotocart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.homepageproducts = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Fetching Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        // console.log('parameters for getting home page API response: ' + JSON.stringify(this.userDetails));
        this.userDetails.page = 1;
        this.auth.postData(this.userDetails, "gethomepage").then(function (result) {
            _this.resposeData = result;
            _this.bannerFullData = _this.resposeData.BannData;
            _this.homeproductdataSet = _this.resposeData.HomeData;
            _this.productFullData = _this.homeproductdataSet;
            _this.categoryFullData = _this.resposeData.CateData;
            _this.servicesFullData = _this.resposeData.ServicesData;
            _this.packagesFullData = _this.resposeData.PackagesData;
            _this.retailProductsFullData = _this.resposeData.RetailData;
            HomePage_1.categData = _this.categoryFullData;
            HomePage_1.productData = _this.homeproductdataSet;
            HomePage_1.servicesData = _this.servicesFullData;
            HomePage_1.packagesData = _this.packagesFullData;
            HomePage_1.retailProductsData = _this.retailProductsFullData;
            console.log('response data: ' + JSON.stringify(_this.resposeData));
            // console.log('after loading servicesFullData: ' + JSON.stringify(this.servicesFullData));
            // console.log('after loading bannerFullData: ' + this.bannerFullData.length);
            console.log('Total packages of all records: ' + _this.packagesFullData.length);
            // console.log('Total packages of all records: ' + JSON.stringify(this.packagesFullData));
            console.log('Total retail products are: ' + _this.retailProductsFullData.length);
            // console.log('Retail products are: ' + JSON.stringify(this.retailProductsFullData));
        }, function (err) {
            zest.dismiss();
        });
        this.auth.postData(this.userDetails, "fetchorder").then(function (result) {
            _this.resposeData = result;
            _this.ordersData = _this.resposeData.OrderData;
            _this.activeOrdersData = [];
            _this.totalOrdersOfUser = 0;
            console.log('orders of user: ' + _this.ordersData.length);
            if (_this.ordersData.length == 0) {
                _this.noOrders = true;
            }
            else if (_this.ordersData.length > 0) {
                // console.log('orders of user: ' + JSON.stringify(this.ordersData));
                _this.noOrders = false;
                _this.ordersData.forEach(function (element) {
                    if (element.status.toLowerCase() != 'delivered') {
                        _this.activeOrdersData.push(element);
                    }
                });
                console.log('total active orders of user: ' + _this.activeOrdersData.length);
                _this.totalOrdersOfUser = _this.activeOrdersData.length;
            }
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    HomePage.prototype.selectclothes = function (selectedService) {
        console.log('selected service: ' + JSON.stringify(selectedService));
        if (selectedService.id == 88) {
            console.log('open retail page');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__retail_products_retail_products__["a" /* RetailProductsPage */]);
        }
        else {
            if (selectedService.service == "Steam Pressing") {
                HomePage_1.steamPressSelected = true;
            }
            else {
                HomePage_1.steamPressSelected = false;
            }
            console.log('open other page!');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__select_clothes_select_clothes__["a" /* SelectClothesPage */]);
        }
    };
    HomePage.prototype.openProductDetailPage = function (itemId, itemName, itemImage, itemDesc, itemQuantity, itemQuantityType, itemPrice) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_desc_product_desc__["a" /* ProductDescPage */], {
            itemId: itemId,
            itemName: itemName,
            itemDesc: itemDesc,
            itemQuantity: itemQuantity,
            itemQuantityType: itemQuantityType,
            itemPrice: itemPrice,
            itemImage: itemImage
        });
    };
    HomePage.prototype.gotoproducts = function (category) {
        if (category.permission_required == 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */], {
                category: category.categry
            });
        }
        else {
            this.getAccessPermission(category);
        }
    };
    HomePage.prototype.getAccessPermission = function (category) {
        var _this = this;
        if (this.title == "") {
            this.title = "Attention!";
        }
        if (this.message == "") {
            this.message = "You must be 18 years or older to access this category!";
        }
        var alert = this.alertCtrl.create({
            title: this.title,
            message: this.message,
            buttons: [
                {
                    text: 'Continue',
                    handler: function () {
                        // console.log('OVER 18 CLICKED!!');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */], {
                            category: category.categry
                        });
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    HomePage.prototype.addToCart = function (itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage, selectedQuantity, selectedCategory) {
        this.storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage, selectedQuantity, selectedCategory);
        this.showAddCartMsg();
    };
    HomePage.prototype.storeToCart = function (itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage, selectedQuantity, selectedCategory) {
        var Mquantity = selectedQuantity;
        var itemtotal = itemprice;
        var alreadyExists = false;
        HomePage_1.cartData.forEach(function (element) {
            if (element.itemid == itemid && itemquantitytype == element.itemquantitytype) {
                alreadyExists = true;
                element.Mquantity += selectedQuantity;
            }
        });
        console.log('product does not exist in cart? ' + alreadyExists);
        if (!alreadyExists) {
            HomePage_1.cartData.push({ itemid: itemid, itemname: itemname, itemquantity: itemquantity, itemquantitytype: itemquantitytype, itemprice: itemprice, itemtotal: itemtotal, itemImage: itemImage, Mquantity: Mquantity, selectedCategory: selectedCategory });
        }
        this.storage.set('cartData', HomePage_1.cartData);
        // Or to get a key/value pair
        this.storage.get('cartData').then(function (val) {
            // console.log('Your cartData in storage is', val);
        });
    };
    HomePage.prototype.showAddCartMsg = function () {
        var toast = this.toastCtrl.create({
            message: "Product Added to Cart!",
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    HomePage.prototype.gotoSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__product_search_product_search__["a" /* ProductSearchPage */]);
    };
    HomePage.prototype.cartCounterManager = function () {
        return HomePage_1.cartData.length;
    };
    HomePage.prototype.gotoOffer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__offers_offers__["a" /* OffersPage */]);
    };
    HomePage.prototype.isSubscribed = function () {
        if (localStorage.getItem('isSubscribed') != '0') {
            return false;
        }
        else {
            return true;
        }
    };
    HomePage.prototype.onclickSubscriptions = function () {
        console.log('subscriptions will be fetched from server');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__subscription_subscription__["a" /* SubscriptionPage */]);
        // this.nav.push(PaypalSubsccriptionPage);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getUserData();
        this.isSubscribed();
        this.homepageproducts();
        console.log('checking if user subscribed recently!');
        if (localStorage.getItem('subscriptionID') != 'null' && localStorage.getItem('subscriptionID') != null && localStorage.getItem('subscriptionID') && localStorage.getItem('subscriptionID') != '-1' && localStorage.getItem('isSubscribed') == '0') {
            console.log('subscribed successfully! ' + localStorage.getItem('subscriptionID') + ' and ' + localStorage.getItem('isSubscribed'));
            // call API to update user subscription details on server
            __WEBPACK_IMPORTED_MODULE_12__subscription_details_subscription_details__["a" /* SubscriptionDetailsPage */].susbscriptionPostData.paypal_subscription_id = localStorage.getItem('subscriptionID');
            this.sendSubscriptionDataToServer();
        }
        else {
            console.log('nothing found in subscriptionID');
        }
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('checking if user subscribed recently!');
        console.log('retail products length: !' + HomePage_1.retailProductsData.length);
        if (localStorage.getItem('subscriptionID') != 'null' && localStorage.getItem('subscriptionID') != null && localStorage.getItem('subscriptionID') && localStorage.getItem('subscriptionID') != '-1' && localStorage.getItem('isSubscribed') == '0') {
            console.log('subscribed successfully! ' + localStorage.getItem('subscriptionID') + ' and ' + localStorage.getItem('isSubscribed'));
            // call API to update user subscription details on server
            __WEBPACK_IMPORTED_MODULE_12__subscription_details_subscription_details__["a" /* SubscriptionDetailsPage */].susbscriptionPostData.paypal_subscription_id = localStorage.getItem('subscriptionID');
            this.sendSubscriptionDataToServer();
            this.getUserData();
        }
        else {
            console.log('nothing found in subscriptionID');
        }
    };
    HomePage.prototype.sendSubscriptionDataToServer = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Fetching Data From Server!",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(__WEBPACK_IMPORTED_MODULE_12__subscription_details_subscription_details__["a" /* SubscriptionDetailsPage */].susbscriptionPostData, "subscribeUser").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.status == "200") {
                console.log('data sent to server successfully');
                localStorage.setItem('subscriptionID', null);
            }
            else {
                zest.dismiss();
                _this.sendSubscriptionDataToServer();
            }
            // console.log('order details: ' + JSON.stringify(this.orderDetail));
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        this.userDetails.page = this.page;
        // console.log("PAGE NUMBER AFTER INCREMENT: ", this.userDetails.page);
        this.auth.postData(this.userDetails, "gethomepage").then(function (result) {
            _this.resposeData = result;
            _this.homeproductdataSet = _this.resposeData.HomeData;
            _this.resposeData = result;
            _this.homeproductdataSet = _this.resposeData.HomeData;
            // console.log("SIZE OF RESULT: ", this.homeproductdataSet.length);
            if (_this.homeproductdataSet.length < _this.pageLimit) {
                infiniteScroll.enable(false);
            }
            for (var i = 0; i < _this.homeproductdataSet.length; i++) {
                _this.productFullData.push(_this.homeproductdataSet[i]);
            }
            infiniteScroll.complete();
        }, function (err) {
        });
    }; // End doInfinite
    //getting deliveryCharges
    HomePage.prototype.getDeliveryCharges = function () {
        var _this = this;
        this.auth.postData(this.userDetails, "getDeliveryCharges").then(function (result) {
            _this.deliveryCharges = result;
            localStorage.setItem('deliveryCharges', _this.deliveryCharges);
            // console.log("DELIVERY CHARGES: ",localStorage.getItem('deliveryCharges'));
        }, function (err) {
        });
    };
    //getting expediteCharge
    HomePage.prototype.getExpediteCharges = function () {
        var _this = this;
        this.auth.postData(this.userDetails, "getExpediteCharges").then(function (result) {
            _this.expediteCharges = result;
            localStorage.setItem('expediteCharges', _this.expediteCharges);
            // console.log("DELIVERY CHARGES: ",localStorage.getItem('deliveryCharges'));
        }, function (err) {
        });
    };
    HomePage.cartData = [];
    HomePage.categData = [];
    HomePage.productData = [];
    HomePage.servicesData = [];
    HomePage.packagesData = [];
    HomePage.retailProductsData = [];
    HomePage.userSubscriptions = [];
    HomePage.steamPressSelected = false;
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            THE CLOTHES SPIN\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div style="height: 160px; min-height: 160px;">\n        <ion-slides *ngIf="bannerFullData && bannerFullData.length" pager autoplay="2000" loop="true" dir="ltr">\n            <ion-slide *ngFor="let slide of bannerFullData">\n                <img [src]="baseUrlBanner + slide.bnimg" class="slide-image" />\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <p padding-left padding-right class="heading">Services</p>\n    <ion-scroll scrollX style="height:185px;white-space: nowrap;">\n        <!-- <div class="scroll-item" *ngFor="let cat of servicesFullData" (click)="selectclothes(cat)"> -->\n        <div class="scroll-item" *ngFor="let cat of servicesFullData" (click)="selectclothes(cat)">\n            <div class="item-box">\n                <img *ngIf="cat.service_img != null" [src]="baseUrlImage + cat.service_img">\n                <img *ngIf="cat.service_img == null" src="assets/imgs/logo.png">\n                <h5 [innerHTML]="cat.service"></h5>\n                <p *ngIf="cat.description != null">{{cat.description}}</p>\n            </div>\n        </div>\n    </ion-scroll>\n\n    <div class="row" *ngIf="!isUserSubscribed">\n        <div class="col"></div>\n        <div class="col">\n            <button ion-button round style="height: 50px;" (click)="onclickSubscriptions()">Subscribe</button>\n        </div>\n        <div class="col"></div>\n    </div>\n    <!-- <button ion-button round outline>Outline + Round</button> -->\n\n    <p *ngIf="noOrders && activeOrdersData.length==0" padding-left padding-right class="heading">\n        You Have No Active Orders\n    </p>\n    <p *ngIf="!noOrders  && activeOrdersData.length!=0" padding-left padding-right class="heading">\n        Your Active Orders ({{activeOrdersData.length}})<span (click)="myOrders()">\n            Past Orders\n        </span>\n    </p>\n\n    <div *ngIf="!noOrders && activeOrdersData.length!=0" padding-left padding-right class="order-list">\n        <ion-list no-lines>\n            <ion-item *ngFor="let order of activeOrdersData" (click)="openOrderDetails(order)">\n                <ion-avatar [ngSwitch]="order.status" item-start>\n                    <img src="assets/imgs/confirmed.png" *ngSwitchDefault>\n                    <img src="assets/imgs/pick_active.png" *ngSwitchCase="\'Picked Up\'">\n                    <img src="assets/imgs/inporcess.png" *ngSwitchCase="\'Processing\'">\n                    <img src="assets/imgs/dispatched.png" *ngSwitchCase="\'Dispatched\'">\n                    <img src="assets/imgs/delivered.png" *ngSwitchCase="\'Delivered\'">\n                </ion-avatar>\n                <h2>Order No: {{order.orderid}}</h2>\n                <p>{{order.status}}</p>\n                <ion-note item-end>\n                    <p [innerHTML]="order.total_html"></p>\n                    <small>{{order.ordertime}}</small>\n                </ion-note>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <!-- <div class="placeholder" margin *ngIf="!user && !ordersLoading" (click)="login()">\n      <div class="icon-box">\n          <div class="box">\n              <ion-icon name="md-person-add"></ion-icon>\n          </div>\n      </div>\n      <div class="text-box">\n          <h3>\n              <span>{{"login_to_view_order" | translate}}</span>\n              <span></span>\n          </h3>\n      </div>\n  </div> -->\n    <!-- <div class="placeholder" margin *ngIf="user && !ordersLoading && !orders.length" (click)="order()">\n      <div class="icon-box">\n          <div class="box">\n              <ion-icon name="md-add"></ion-icon>\n          </div>\n      </div>\n      <div class="text-box">\n          <h3>\n              <span>No Orders</span>\n              <span class="link">Order Now</span>\n          </h3>\n      </div>\n  </div> -->\n</ion-content>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		455,
		28
	],
	"../pages/address/address.module": [
		482,
		27
	],
	"../pages/boat-order-details/boat-order-details.module": [
		456,
		26
	],
	"../pages/cart/cart.module": [
		481,
		25
	],
	"../pages/contact/contact.module": [
		457,
		24
	],
	"../pages/feedback/feedback.module": [
		458,
		23
	],
	"../pages/forgot-password/forgot-password.module": [
		459,
		22
	],
	"../pages/login/login.module": [
		460,
		21
	],
	"../pages/my-bags/my-bags.module": [
		461,
		20
	],
	"../pages/my-wallet/my-wallet.module": [
		462,
		19
	],
	"../pages/notifications/notifications.module": [
		463,
		18
	],
	"../pages/offers/offers.module": [
		464,
		17
	],
	"../pages/order-confirm/order-confirm.module": [
		465,
		16
	],
	"../pages/order-history/order-history.module": [
		466,
		15
	],
	"../pages/order-placed/order-placed.module": [
		467,
		14
	],
	"../pages/payment/payment.module": [
		468,
		13
	],
	"../pages/paypal-subsccription/paypal-subsccription.module": [
		469,
		12
	],
	"../pages/product-desc/product-desc.module": [
		470,
		11
	],
	"../pages/product-search/product-search.module": [
		471,
		10
	],
	"../pages/qr-scanner/qr-scanner.module": [
		472,
		9
	],
	"../pages/register/register.module": [
		473,
		8
	],
	"../pages/reset-password/reset-password.module": [
		474,
		7
	],
	"../pages/retail-products/retail-products.module": [
		475,
		6
	],
	"../pages/sample/sample.module": [
		476,
		5
	],
	"../pages/select-clothes/select-clothes.module": [
		477,
		4
	],
	"../pages/select-datetime/select-datetime.module": [
		483,
		3
	],
	"../pages/subscription-details/subscription-details.module": [
		478,
		2
	],
	"../pages/subscription/subscription.module": [
		479,
		1
	],
	"../pages/terms-and-conditions/terms-and-conditions.module": [
		480,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_desc_product_desc__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, modalCtrl, alertCtrl, auth, toastController, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.mPage = 1;
        this.pageLimit = 10;
        this.postData = {
            "user_id": "",
            "token": "",
            "categoryname": "",
            "page": ""
        };
        this.categoryFullData = [];
        this.category = "";
        this.iteminfo = "";
        this.itemdatafull = "";
        this.itemFullArray = [];
        this.mPage = 1;
        this.baseUrlImage = auth.getimage();
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userDetails.page = this.mPage;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.postData.page = this.userDetails.page;
        this.postData.categoryname = this.navParams.get('category');
        this.categoryid = navParams.get('category');
        this.postData.categoryname = this.categoryid;
        console.log(this.categoryid);
        this.getcategorydata();
    }
    ProductsPage.prototype.gotocart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.getcategorydata = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "categoryfilter").then(function (result) {
            _this.resposeData = result;
            _this.categoryFullData = _this.resposeData.CateFilterData;
            _this.itemdatafull = _this.categoryFullData;
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    ProductsPage.prototype.openProductDetailPage = function (itemId, itemName, itemImage, itemDesc, itemQuantity, itemQuantityType, itemPrice) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_desc_product_desc__["a" /* ProductDescPage */], {
            itemId: itemId,
            itemName: itemName,
            itemDesc: itemDesc,
            itemQuantity: itemQuantity,
            itemQuantityType: itemQuantityType,
            itemPrice: itemPrice,
            itemImage: itemImage
        });
    };
    // addToCartProd(itemid:any, itemname:any, itemquantity:any, itemquantitytype:any, itemprice:any, itemimage:any, selectedQuantity:any,packageId:any) {
    //   HomePage.Instance.storeToCart(itemid,itemname,itemquantity,itemquantitytype,itemprice, itemimage,selectedQuantity,packageId);
    //   this.showAddCartMsg();
    // }
    ProductsPage.prototype.showAddCartMsg = function () {
        var toast = this.toastController.create({
            message: "Product Added to Cart!",
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ProductsPage.prototype.cartCounterManager = function () {
        return __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData.length;
    };
    ProductsPage.prototype.doInfinite3 = function (infiniteScroll) {
        var _this = this;
        this.mPage = this.mPage + 1;
        this.userDetails.page = this.mPage;
        this.postData.page = this.userDetails.page;
        console.log("PAGE NUMBER AFTER INCREMENT: ", this.userDetails.page);
        this.auth.postData(this.postData, "categoryfilter").then(function (result) {
            _this.resposeData = result;
            _this.categoryFullData = _this.resposeData.CateFilterData;
            console.log("SIZE OF RESULT: ", _this.categoryFullData.length);
            if (_this.categoryFullData.length < _this.pageLimit) {
                infiniteScroll.enable(false);
            }
            for (var i = 0; i < _this.categoryFullData.length; i++) {
                _this.itemdatafull.push(_this.categoryFullData[i]);
            }
            infiniteScroll.complete();
        }, function (err) {
        });
    }; // End doInfinite1
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\products\products.html"*/'<ion-header style="background-color: #2cbfb1;">\n<ion-navbar no-border-bottom>\n	  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  	<ion-title>{{categoryid}}</ion-title>\n\n    <ion-buttons end class="cartbadge">\n        <button ion-button (click)="gotocart()">\n            <ion-icon name="ios-cart"></ion-icon>\n          </button><ion-badge item-end>{{cartCounterManager()}}</ion-badge>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding style="background-image: url(././assets/imgs/bg.png);background-color:white;" class="welcome-background" >\n\n  <div class="cateproduct">\n    <ion-card class="myCard" *ngFor="let item of itemdatafull;  let i = index;">\n\n      <div *ngIf="item.out_of_stock != 1">\n        <img (click)="openProductDetailPage(item.id,item.name,item.image,item.description,item.quantity,item.quantitytype,item.price)" class="p-2" src="{{baseUrlImage}}{{item.image}}">\n        <ion-card-header>\n          <h2 class="text-center">{{item.name}}</h2>\n        </ion-card-header>\n      </div>\n      <div *ngIf="item.out_of_stock != 0">\n        <img class="p-2" src="{{baseUrlImage}}{{item.image}}">\n        <div class="myOverlay">\n          <div class="card-subtitle"><strong>OUT OF STOCK</strong></div>\n        </div>\n        <ion-card-header>\n          <h2 style="color: grey" class="text-center">{{item.name}}</h2>\n        </ion-card-header>\n      </div>\n\n      <!-- <ion-card-content>\n          <div class="quantity">{{item.quantity}} {{item.quantitytype}}</div> <div class="price">{{item.price | currency}}</div>\n          <div class="btn-cart"><button ion-button round (click)="addToCartProd(item.id,item.name,item.quantity,item.quantitytype,item.price, item.image)"><ion-icon name="md-add-circle"></ion-icon>&nbsp;Add to Cart</button>\n          </div>\n      </ion-card-content> -->\n    </ion-card>\n</div>\n<ion-infinite-scroll (ionInfinite)="doInfinite3($event)">\n  <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n  </ion-content>\n\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boat_order_details_boat_order_details__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CartPage = /** @class */ (function () {
    function CartPage(alertCtrl, navCtrl, navParams, toastController, auth, storage) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.auth = auth;
        this.storage = storage;
        this.shipping = 0;
        this.amount = 0;
        this.VATax = 0;
        this.finalamount = 0;
        this.finalBill = "";
        this.charity_activated = false;
        this.expedite_activated = false;
        this.expedite_amount_added = false;
        this.charity_amount = 0;
        this.charityID = "";
        this.cartquantity = 1;
        this.baseUrlImage = auth.getimage();
        this.finalcartdata = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData;
        this.pickupTimeFrom = this.navParams.get('pickupTimeFrom');
        this.pickupTimeTo = this.navParams.get('pickupTimeTo');
        this.deliveryTimeFrom = this.navParams.get('deliveryTimeFrom');
        this.deliveryTimeTo = this.navParams.get('deliveryTimeTo');
        this.pickupDate = this.navParams.get('pickupDate');
        this.deliveryDate = this.navParams.get('deliveryDate');
        this.expedite_amount = parseFloat(localStorage.getItem('expediteCharges'));
        if (this.finalcartdata.length == 0) {
            this.showtxt = true;
            this.showcartdata = false;
        }
        else {
            this.showtxt = false;
            this.showcartdata = true;
        }
        this.shipping = parseFloat(localStorage.getItem('deliveryCharges'));
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        // this.getCharityAccounts();
        this.calculatecart();
        this.names = ['charity1', 'charity2', 'charity3', 'charity4'];
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CartPage");
    };
    CartPage.prototype.updateCharity = function () {
        if (this.charity_activated == false) {
            //update values accordingly
            this.charity_amount = -1;
            this.charityID = -1;
        }
        this.calculatecart();
        console.log('charity_activated? :', this.charity_activated);
    };
    // getCharityAccounts() {
    //   this.auth.postData(this.userDetails, "getCharityAccounts").then(
    //     result => {
    //       this.responseData = result;
    //       this.charityAccounts = this.responseData.charityData;
    //       console.log('charityAccounts: ', this.charityAccounts);
    //     },
    //   );
    // }
    CartPage.prototype.isGuestLogin = function () {
        if (this.userDetails.fname == "guest") {
            return true;
        }
        else {
            return false;
        }
    };
    CartPage.prototype.showRegisterPrompt = function () {
        var _this = this;
        // let alert = this.alertCtrl.create({
        //   title: 'ALERT',
        //   subTitle: 'You must have an account to place an order!',
        //   buttons: ['Dismiss']
        // });
        // alert.present();
        var alert = this.alertCtrl.create({
            title: 'ALERT',
            message: 'You must have an account to place an order!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Register',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage.prototype.goToCheckout = function () {
        if (this.charity_activated == true && this.charityID == "") {
            var alert_1 = this.alertCtrl.create({
                title: ' ALERT',
                subTitle: 'No Charity Account Selected',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else if (this.delivery_option == "home_delivery" || this.delivery_option == "pick_from_store") {
            if (this.charity_activated == false) {
                this.charity_amount = 0;
                this.charityID = -1;
            }
            localStorage.setItem('totalBill', this.finalamount.toFixed(2).toString());
            localStorage.setItem('charityAmount', this.charity_amount.toFixed(2).toString());
            localStorage.setItem('charityID', this.charityID);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */]);
        }
        else if (this.delivery_option == 'boat_order') {
            if (this.charity_activated == false) {
                this.charity_amount = 0;
                this.charityID = -1;
            }
            localStorage.setItem('totalBill', this.finalamount.toFixed(2).toString());
            localStorage.setItem('charityAmount', this.charity_amount.toFixed(2).toString());
            localStorage.setItem('charityID', this.charityID);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__boat_order_details_boat_order_details__["a" /* BoatOrderDetailsPage */]);
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: ' ALERT',
                subTitle: 'No Delivery Option Selected',
                buttons: ['Dismiss']
            });
            alert_2.present();
        }
    };
    CartPage.prototype.presentCharityAlert = function () {
        var _this = this;
        if (this.delivery_option == "home_delivery" || this.delivery_option == "pick_from_store") {
            var options = {
                title: 'Choose a charity account',
                message: 'Where do you want to send the charity amount?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function (data) {
                            console.log(data);
                            localStorage.setItem('totalBill', _this.finalamount.toFixed(2).toString());
                            localStorage.setItem('charityAmount', _this.charity_amount.toFixed(2).toString());
                            localStorage.setItem('charityID', data);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */]);
                        }
                    }
                ]
            };
            //
            // options.inputs = [];
            //
            //
            // this.charityAccounts.forEach(function (value) {
            //   // console.log(value);
            //   options.inputs.push({name : 'options', value: value.id, label:value.charity_name, type:'radio'});
            // });
            // // Now we add the radio buttons
            // for(let i=0; i< this.names.length; i++) {
            //   if(i==0){
            //     options.inputs.push({ name : 'options', value: this.names[i], label: this.names[i], type: 'radio' , checked:true});
            //   }
            //   options.inputs.push({ name : 'options', value: this.names[i], label: this.names[i], type: 'radio' });
            // }
            // Create the alert with the options
            var alert_3 = this.alertCtrl.create(options);
            alert_3.present();
        }
        else {
            var alert_4 = this.alertCtrl.create({
                title: ' ALERT',
                subTitle: 'No Delivery Option Selected',
                buttons: ['Dismiss']
            });
            alert_4.present();
        }
    };
    CartPage.prototype.selectaddress = function () {
        localStorage.setItem('totalBill', this.finalamount.toFixed(2).toString());
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */], { pickupTimeFrom: this.pickupTimeFrom, pickupTimeTo: this.pickupTimeTo, deliveryTimeFrom: this.deliveryTimeFrom, deliveryTimeTo: this.deliveryTimeTo, pickupDate: this.pickupDate, deliveryDate: this.deliveryDate, expedite_activated: this.expedite_activated });
    };
    CartPage.prototype.calculatecart = function () {
        this.amount = 0;
        for (var _i = 0, _a = this.finalcartdata; _i < _a.length; _i++) {
            var item = _a[_i];
            this.amount += parseFloat(item.itemprice) * parseFloat(item.Mquantity);
            // console.log(this.amount);
        }
        //this is total bill without shipping charges & VAT
        // localStorage.setItem("totalBill1",this.amount.toString());
        this.finalamount = +this.amount + +this.shipping;
        this.finalBill = this.finalamount.toFixed(2);
        //this is total bill without VAT but with shipping charges
        // localStorage.setItem("totalBill",this.finalamount.toString());
        // this.VATax = parseFloat((this.finalamount * 0.12).toFixed(2));
        // this.finalamount = parseFloat((this.finalamount + this.VATax).toFixed(2));
        localStorage.setItem('totalBill', this.finalamount.toFixed(2).toString());
        localStorage.setItem('cartamount', this.amount.toFixed(2).toString());
        console.log('final amount: ', this.finalamount.toFixed(2));
    };
    CartPage.prototype.updateCartAmount = function () {
        if (this.expedite_activated == true) {
            //add to expedite charges in total
            console.log('final amount: ' + this.finalamount);
            console.log('expedite amount: ' + this.expedite_amount);
            this.finalamount = this.finalamount + this.expedite_amount;
            this.finalBill = this.finalamount.toFixed(2);
            console.log(' after adding expedite amount: ' + (this.finalamount));
            this.expedite_amount_added = true;
        }
        else if (this.expedite_activated == false && this.expedite_amount_added == true) {
            //remove expedite charges from total
            console.log('final amount: ' + this.finalamount);
            console.log('expedite amount: ' + this.expedite_amount);
            this.finalamount = this.finalamount - this.expedite_amount;
            this.finalBill = this.finalamount.toFixed(2);
            console.log(' after removing expedite amount: ' + (this.finalamount));
            this.expedite_amount_added = false;
        }
    };
    CartPage.prototype.emptycart = function () {
        __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData = [];
        //update cart data inside the local storage
        this.storage.set('cartData', __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData);
        this.navCtrl.popToRoot();
    };
    CartPage.prototype.changeQty = function (i, change) {
        var qty = parseInt(this.finalcartdata[i].Mquantity);
        qty += parseInt(change);
        if (qty != 0) {
            this.finalcartdata[i].Mquantity = qty.toString();
            this.calculatecart();
        }
        if (qty == 0) {
            // this.finalcartdata.splice(i, 1);
            __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData.splice(i, 1);
            this.finalcartdata = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData;
            //update the cart data inside the local storage
            this.storage.set('cartData', __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData);
            console.log("homepage.cartdata ", __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData);
            console.log("finalcartdata: ", this.finalcartdata);
            if (this.finalcartdata.length <= 0) {
                this.showtxt = true;
                this.showcartdata = false;
            }
            this.calculatecart();
        }
        this.toastController.create({
            message: "Cart Updated.",
            duration: 2000
        }).present();
    };
    CartPage.prototype.homeDeliveryChecked = function () {
        this.shipping = parseFloat(localStorage.getItem('deliveryCharges'));
        this.calculatecart();
        localStorage.setItem('delivery_option', this.delivery_option);
    };
    CartPage.prototype.pickFromStoreSelected = function () {
        this.shipping = 0;
        this.calculatecart();
        localStorage.setItem('delivery_option', this.delivery_option);
    };
    CartPage.prototype.boatOrderSelected = function () {
        this.shipping = 0;
        this.calculatecart();
        localStorage.setItem('delivery_option', this.delivery_option);
    };
    CartPage.prototype.charitySelected = function () {
        console.log("selected charityAccount: ", this.charityID);
        this.charity_amount = Math.round(Number(localStorage.getItem('totalBill')));
        // console.log(Math.round(Number(localStorage.getItem('totalBill'))));
        if (this.charity_amount > this.finalamount) {
            // console.log(this.charity_amount,"charityIncluded");
            console.log('charity amount is: ', this.charity_amount - this.finalamount, " and total bill is: ", this.finalamount + (this.charity_amount - this.finalamount));
            this.charity_amount = parseFloat((this.charity_amount - this.finalamount).toFixed(2));
            this.finalamount = parseFloat((this.finalamount + this.charity_amount).toFixed(2));
        }
        else {
            this.charity_amount = Math.round(this.finalamount) + 1;
            this.charity_amount = parseFloat((this.charity_amount - this.finalamount).toFixed(2));
            console.log('charity amount is: ', this.charity_amount, " and total bill is: ", this.finalamount + this.charity_amount);
            this.finalamount = parseFloat((this.finalamount + this.charity_amount).toFixed(2));
        }
    };
    CartPage.prototype.charityNotSelected = function () {
        console.log(localStorage.getItem('totalBill'), "charityExcluded");
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-cart",template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\cart\cart.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>My Cart</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n	<div *ngIf="finalcartdata && finalcartdata.length" class="all-orders">\n		<p class="order-header">Your Clothes</p>\n		<ion-label *ngFor="let cartItem of finalcartdata let itemno = index">\n			<div class="item_details">\n				<ion-row>\n					<ion-col col-5>\n						<h2>{{cartItem.itemname}} <span>({{cartItem.selectedCategory}})</span> </h2>\n						<h5 class="service">{{cartItem.itemquantitytype}}</h5>\n					</ion-col>\n					<ion-col col-3>\n						<h3>\n							<ion-icon name="md-remove-circle" (click)="changeQty(itemno,-1)"></ion-icon>\n							<span class="quantity"> {{cartItem.Mquantity}}</span>\n							<ion-icon name="md-add-circle" (click)="changeQty(itemno,1)"></ion-icon>\n						</h3>\n					</ion-col>\n\n					<ion-col col-4>\n						<h4>\n							x BSD$ &nbsp;<span class="amount" [innerHTML]="cartItem.itemprice"></span>\n						</h4>\n					</ion-col>\n				</ion-row>\n			</div>\n\n		</ion-label>\n	</div>\n\n	<div class="empty-view" *ngIf="!finalcartdata || !finalcartdata.length">\n		<ion-icon class="material-icons">shopping_cart</ion-icon>\n		<p>Cart is Empty!</p>\n	</div>\n</ion-content>\n\n<ion-footer no-border *ngIf="finalcartdata || finalcartdata.length">\n	<div class="fixed-bottom">\n		<!-- <p *ngIf="!coupon && (cartItems && cartItems.length)" class="promo-code" (click)="codePage()">\n			<ion-icon name="md-pricetag"></ion-icon>{{"have_promo" | translate}}\n		</p>\n		<p *ngIf="coupon && (cartItems && cartItems.length)" class="promo-code">\n			{{coupon.code}} {{\'applied\' | translate}}\n			<span text-right [innerHTML]="coupon_amount_html"></span>\n			<ion-icon name="md-close" class="cross-coupon" (click)="removeCoupon()"></ion-icon>\n		</p> -->\n\n		<ion-item *ngIf="finalcartdata && finalcartdata.length">\n			<ion-label>Want Expedite Delivery?</ion-label>\n			<ion-checkbox [(ngModel)]="expedite_activated" (ionChange)="updateCartAmount()"></ion-checkbox>\n		</ion-item>\n\n		<div *ngIf="finalcartdata && finalcartdata.length" class="price-section">\n			<h3 class="d-flex">Sub Total <span class="end">BSD$ {{amount}}</span></h3>\n			<h3 class="d-flex">Delivery Amount <span class="end">BSD$ {{shipping}}</span></h3>\n			<h3 *ngIf="expedite_activated" class="d-flex">Expedite Delivery Amount <span class="end">BSD$ {{expedite_amount}}</span></h3>\n			<h3 class="d-flex">Payable Amount <span class="end">BSD$ {{finalBill}}</span></h3>\n			<!-- <ion-label class="total-amount">{{"amt_pybl" | translate}}<span [innerHTML]="total_html"></span></ion-label> -->\n		</div>\n		<p *ngIf="finalcartdata && finalcartdata.length" (click)="selectaddress()" text-center class="btn">\n			Confirm Order\n			<ion-icon name="ios-arrow-forward-outline"></ion-icon>\n		</p>\n	</div>\n</ion-footer>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_confirm_order_confirm__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, auth, 
        //  public apiProvider: ApiProvider,
        alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.stripe = Stripe('pk_test_08ttNxfeqEq0b3wepDezSUy7');
        this.totalBill = localStorage.getItem("totalBill2");
        console.log("from", this.navParams.get('orderData'));
        //add stripe_token in orderData
        this.orderData = this.navParams.get('orderData');
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        this.setupStripe();
    };
    PaymentPage.prototype.placeOrder = function () {
        // this.setupStripe();
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Processing Payment..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        console.log("BEFORE SENDING", this.orderData);
        this.auth.postData(this.orderData, "placeorder").then(function (result) {
            zest.dismiss();
            _this.resposeData = result;
            console.log("Result", result);
            if (_this.resposeData.success) {
                console.log("ORDER INSETRED AFTER PAYMENT");
                _this.presentAlert();
                zest.dismiss();
                // this.orderdataSet = this.resposeData.success;
                // this.navCtrl.setRoot(OrderConfirmPage,{ OrderId: this.orderdataSet });
            }
            else {
                console.log("Error");
                _this.failpresentAlert();
            }
        }, function (err) {
            zest.dismiss();
        });
        // this.setupStripe();
        // console.log(this.resDetail);
        // this.presentLoadingDefault();
        // this.apiProvider.bookProperty(this.resDetail)
        // .subscribe(data=>{
        //   if(data.status==true){
        //   this.response=data
        //   console.log('Res Posted:',this.response.status);
        //   this.loading.dismiss();
        //   this.presentAlert();
        //   }
        //   if(data.status==false){
        //     this.loading.dismiss();
        //     this.failpresentAlert();
        //   }
        // })
    };
    PaymentPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    PaymentPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Congratulations!',
            subTitle: 'Your payment has been successfully processed',
            buttons: [{
                    text: 'OK',
                    role: 'dismiss',
                    handler: function () {
                        console.log('Ok clicked');
                        _this.orderdataSet = _this.resposeData.success;
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__order_confirm_order_confirm__["a" /* OrderConfirmPage */], { OrderId: _this.orderdataSet });
                        // this.navCtrl.push(LoginPage);
                        // this.navCtrl.setRoot(DashboardPage);
                        //this.navCtrl.push(ExplorePage);
                    }
                }], enableBackdropDismiss: false
        });
        alert.present();
    };
    PaymentPage.prototype.failpresentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sorry!',
            subTitle: 'Due to some problem property cannot be reserved. Please try again',
            buttons: [{
                    text: 'OK',
                    role: 'dismiss',
                    handler: function () {
                        console.log('Not posted Ok clicked');
                        // this.navCtrl.parent.parent.setRoot(DashboardPage);
                    }
                }], enableBackdropDismiss: false
        });
        alert.present();
    };
    PaymentPage.prototype.setupStripe = function () {
        var _this = this;
        var elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount('#card-element');
        this.card.addEventListener('change', function (event) {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        var form = document.getElementById('payment-form');
        console.log("Form:", form);
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            _this.stripe.createToken(_this.card)
                .then(function (result) {
                console.log("Foran:", document.getElementsByName('cvc')[0]);
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                }
                else {
                    _this.orderData.token_stripe = result.token.id;
                    // this.resDetail.token=result.token.id;
                    // console.log("Token:",this.resDetail.token);
                    _this.placeOrder();
                    console.log("Card details", result);
                    //  console.log("Card details1",this.card);
                }
            });
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-payment',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\payment\payment.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Payment Details</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content padding>\n\n    <ion-row>Total Amount to be charged = BSD${{totalBill}}</ion-row>\n\n    <ion-row><ion-label text-wrap>Please provide your card details:</ion-label>\n    </ion-row>\n\n      <form action="/" method="post" id="payment-form">\n\n        <div class="form-row">\n          <div id="card-element">\n            <!-- a Stripe Element will be inserted here. -->\n\n          </div>\n\n          <!-- Used to display Element errors -->\n          <div id="card-errors" role="alert"></div>\n        </div>\n\n      <button ion-button round small>Make Payment</button>\n\n      </form>\n\n  </ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(393);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDescPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDescPage = /** @class */ (function () {
    function ProductDescPage(alertCtrl, navCtrl, navParams, toastController, auth, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.package_id = "";
        this.available_amount = 0;
        this.packageDetails = "";
        this.postData = {
            token: "",
            user_id: "",
            item_id: ""
        };
        this.selectedQuantity = 1;
        this.outOfStock = true;
        this.baseUrlImage = auth.getimage();
        this.itemId = navParams.get("itemId");
        this.itemName = navParams.get("itemName");
        this.itemDesc = navParams.get("itemDesc");
        this.itemQuantity = navParams.get("itemQuantity");
        this.itemQuantityType = navParams.get("itemQuantityType");
        this.itemPrice = navParams.get("itemPrice");
        this.itemImage = navParams.get("itemImage");
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.postData.item_id = this.itemId;
        this.getPackageDetails();
    }
    ProductDescPage.prototype.packageSelected = function () {
        // console.log('all packages: ', this.packageDetails);
        if (this.packageDetails != "" && this.package_id != "") {
            this.available_amount = this.packageDetails[this.package_id].available_stock;
            this.selected_package_id = this.packageDetails[this.package_id].id;
            this.selectedQuantity = 1;
            console.log('AVAILABLE STOCK: ', this.available_amount);
            console.log('selected package: ', this.package_id);
            console.log('SELECTED QUANTITY: ', this.selectedQuantity);
        }
    };
    ProductDescPage.prototype.changeItemQty = function (change) {
        if (this.selectedQuantity + change > 0 && this.selectedQuantity + change <= this.available_amount) {
            this.selectedQuantity = this.selectedQuantity + change;
        }
    };
    ProductDescPage.prototype.ionViewDidLoad = function () { };
    ProductDescPage.prototype.openCartPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
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
    ProductDescPage.prototype.showAddCartMsg = function () {
        var toast = this.toastController.create({
            message: "Product Added to Cart!",
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ProductDescPage.prototype.getPackageDetails = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Fetching Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "getItemPackages").then(function (result) {
            _this.resposeData = result;
            _this.packageDetails = _this.resposeData;
            _this.packageDetails.forEach(function (element) {
                if (element.available_stock > 0) {
                    _this.outOfStock = false;
                }
            });
            console.log(_this.packageDetails);
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    ProductDescPage.prototype.cartCounterManager = function () {
        return __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */].cartData.length;
    };
    ProductDescPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-product-desc",template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\product-desc\product-desc.html"*/'<ion-header style="background-color: #2cbfb1;">\n    <ion-navbar>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu" style="color:#fff; "></ion-icon>\n      </button>\n      <ion-title style="color:#fff; ">Product Description</ion-title>\n      <ion-buttons end class="cartbadge">\n          <button ion-button (click)="openCartPage()">\n              <ion-icon name="ios-cart"></ion-icon>\n            </button><ion-badge item-end>{{cartCounterManager()}}</ion-badge>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n<ion-content style="background-image: url(././assets/imgs/bg.png);background-color:white;">\n  <div class="productdesc">\n    <ion-grid>\n          <img class="productimage" src="{{baseUrlImage}}{{itemImage}}">\n          <ion-row>\n              <ion-col>\n                  <h1>{{itemName}}</h1>\n              </ion-col>\n            <!-- <ion-col>\n                <p class="price">{{itemPrice | currency}}/ {{itemQuantity}} {{itemQuantityType}}</p>\n            </ion-col> -->\n          </ion-row>\n      <ion-row>\n        <p>\n            {{itemDesc}}\n        </p>\n      </ion-row>\n\n      <div style=" margin-top:2rem; padding-left: 16px">\n        <ion-item-group>\n          <ion-label stacked color="primary">PACKAGE DETAILS</ion-label>\n          <ion-list radio-group [(ngModel)]="package_id" (ionChange)="packageSelected()">\n\n                <ion-item *ngFor="let item of packageDetails;  let i = index;">\n                  <ion-label>BSD$ {{item.price}} / {{item.quantity}}{{item.quantity_type}}</ion-label>\n                  <ion-radio *ngIf="item.available_stock<=0" disabled=true value={{i}}></ion-radio>\n                  <ion-radio *ngIf="item.available_stock>0" value={{i}}></ion-radio>\n                </ion-item>\n\n          </ion-list>\n        </ion-item-group>\n      </div>\n\n      <ion-row align="center" *ngIf="outOfStock==false">\n        <ion-label><strong>SELECTED PACKAGE QUANTITY</strong></ion-label>\n      </ion-row>\n      <hr>\n      <ion-row align="center"  *ngIf="outOfStock==false">\n        <ion-col>Quantity</ion-col>\n        <ion-col>{{selectedQuantity}}</ion-col>\n        <ion-col>\n          <button ion-button color="danger" outline (click)="changeItemQty(-1)"><b>-</b></button>\n          <button ion-button color="danger" outline (click)="changeItemQty( 1)" ><b>+</b></button>\n        </ion-col>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <ion-col class="btn-cart" *ngIf="outOfStock==false">\n            <!-- <button ion-button round primary (click)="addtocart(itemId,itemName,itemQuantity,itemQuantityType,itemPrice,itemImage,selectedQuantity,selected_package_id,available_amount)">\n              <ion-icon name="md-add-circle"></ion-icon>\n               &nbsp;&nbsp;Add To Cart\n            </button> -->\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  </ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\product-desc\product-desc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ProductDescPage);
    return ProductDescPage;
}());

//# sourceMappingURL=product-desc.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_address_address__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_history_order_history__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_order_placed_order_placed__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_product_desc_product_desc__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_product_search_product_search__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__validators_validators_module__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_order_confirm_order_confirm__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_offers_offers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_feedback_feedback__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_products_products__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_http__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_payment_payment__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_paypal__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_terms_and_conditions_terms_and_conditions__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_about_us_about_us__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_forgot_password_forgot_password__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_reset_password_reset_password__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_my_wallet_my_wallet__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_qr_scanner_qr_scanner__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_barcode_scanner__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_app_version__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_sample_sample__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_boat_order_details_boat_order_details__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_date_picker__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_select_clothes_select_clothes__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_select_datetime_select_datetime__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_subscription_subscription__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_subscription_details_subscription_details__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_my_bags_my_bags__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_paypal_subsccription_paypal_subsccription__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_in_app_browser__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_retail_products_retail_products__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_order_history_order_history__["a" /* OrderHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_order_placed_order_placed__["a" /* OrderPlacedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_product_desc_product_desc__["a" /* ProductDescPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_product_search_product_search__["a" /* ProductSearchPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_my_wallet_my_wallet__["a" /* MyWalletPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_qr_scanner_qr_scanner__["a" /* QrScannerPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_sample_sample__["a" /* SamplePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_boat_order_details_boat_order_details__["a" /* BoatOrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_select_clothes_select_clothes__["a" /* SelectClothesPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_select_datetime_select_datetime__["a" /* SelectDatetimePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_subscription_subscription__["a" /* SubscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_subscription_details_subscription_details__["a" /* SubscriptionDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_my_bags_my_bags__["a" /* MyBagsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_paypal_subsccription_paypal_subsccription__["a" /* PaypalSubsccriptionPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_retail_products_retail_products__["a" /* RetailProductsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boat-order-details/boat-order-details.module#BoatOrderDetailsPageModule', name: 'BoatOrderDetailsPage', segment: 'boat-order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-bags/my-bags.module#MyBagsPageModule', name: 'MyBagsPage', segment: 'my-bags', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-wallet/my-wallet.module#MyWalletPageModule', name: 'MyWalletPage', segment: 'my-wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offers/offers.module#OffersPageModule', name: 'OffersPage', segment: 'offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-confirm/order-confirm.module#OrderConfirmPageModule', name: 'OrderConfirmPage', segment: 'order-confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-history/order-history.module#OrderHistoryPageModule', name: 'OrderHistoryPage', segment: 'order-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-placed/order-placed.module#OrderPlacedPageModule', name: 'OrderPlacedPage', segment: 'order-placed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paypal-subsccription/paypal-subsccription.module#PaypalSubsccriptionPageModule', name: 'PaypalSubsccriptionPage', segment: 'paypal-subsccription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-desc/product-desc.module#ProductDescPageModule', name: 'ProductDescPage', segment: 'product-desc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-search/product-search.module#ProductSearchPageModule', name: 'ProductSearchPage', segment: 'product-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-scanner/qr-scanner.module#QrScannerPageModule', name: 'QrScannerPage', segment: 'qr-scanner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/retail-products/retail-products.module#RetailProductsPageModule', name: 'RetailProductsPage', segment: 'retail-products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sample/sample.module#SamplePageModule', name: 'SamplePage', segment: 'sample', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-clothes/select-clothes.module#SelectClothesPageModule', name: 'SelectClothesPage', segment: 'select-clothes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription-details/subscription-details.module#SubscriptionDetailsPageModule', name: 'SubscriptionDetailsPage', segment: 'subscription-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription/subscription.module#SubscriptionPageModule', name: 'SubscriptionPage', segment: 'subscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule', name: 'TermsAndConditionsPage', segment: 'terms-and-conditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-datetime/select-datetime.module#SelectDatetimePageModule', name: 'SelectDatetimePage', segment: 'select-datetime', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__validators_validators_module__["a" /* ValidatorsModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_25__angular_http__["c" /* HttpModule */],
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_order_history_order_history__["a" /* OrderHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_order_placed_order_placed__["a" /* OrderPlacedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_product_desc_product_desc__["a" /* ProductDescPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_product_search_product_search__["a" /* ProductSearchPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_my_wallet_my_wallet__["a" /* MyWalletPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_qr_scanner_qr_scanner__["a" /* QrScannerPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_sample_sample__["a" /* SamplePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_boat_order_details_boat_order_details__["a" /* BoatOrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_select_clothes_select_clothes__["a" /* SelectClothesPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_select_datetime_select_datetime__["a" /* SelectDatetimePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_subscription_subscription__["a" /* SubscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_subscription_details_subscription_details__["a" /* SubscriptionDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_my_bags_my_bags__["a" /* MyBagsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_paypal_subsccription_paypal_subsccription__["a" /* PaypalSubsccriptionPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_retail_products_retail_products__["a" /* RetailProductsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 194,
	"./af.js": 194,
	"./ar": 195,
	"./ar-dz": 196,
	"./ar-dz.js": 196,
	"./ar-kw": 197,
	"./ar-kw.js": 197,
	"./ar-ly": 198,
	"./ar-ly.js": 198,
	"./ar-ma": 199,
	"./ar-ma.js": 199,
	"./ar-sa": 200,
	"./ar-sa.js": 200,
	"./ar-tn": 201,
	"./ar-tn.js": 201,
	"./ar.js": 195,
	"./az": 202,
	"./az.js": 202,
	"./be": 203,
	"./be.js": 203,
	"./bg": 204,
	"./bg.js": 204,
	"./bm": 205,
	"./bm.js": 205,
	"./bn": 206,
	"./bn.js": 206,
	"./bo": 207,
	"./bo.js": 207,
	"./br": 208,
	"./br.js": 208,
	"./bs": 209,
	"./bs.js": 209,
	"./ca": 210,
	"./ca.js": 210,
	"./cs": 211,
	"./cs.js": 211,
	"./cv": 212,
	"./cv.js": 212,
	"./cy": 213,
	"./cy.js": 213,
	"./da": 214,
	"./da.js": 214,
	"./de": 215,
	"./de-at": 216,
	"./de-at.js": 216,
	"./de-ch": 217,
	"./de-ch.js": 217,
	"./de.js": 215,
	"./dv": 218,
	"./dv.js": 218,
	"./el": 219,
	"./el.js": 219,
	"./en-au": 220,
	"./en-au.js": 220,
	"./en-ca": 221,
	"./en-ca.js": 221,
	"./en-gb": 222,
	"./en-gb.js": 222,
	"./en-ie": 223,
	"./en-ie.js": 223,
	"./en-il": 224,
	"./en-il.js": 224,
	"./en-in": 225,
	"./en-in.js": 225,
	"./en-nz": 226,
	"./en-nz.js": 226,
	"./en-sg": 227,
	"./en-sg.js": 227,
	"./eo": 228,
	"./eo.js": 228,
	"./es": 229,
	"./es-do": 230,
	"./es-do.js": 230,
	"./es-us": 231,
	"./es-us.js": 231,
	"./es.js": 229,
	"./et": 232,
	"./et.js": 232,
	"./eu": 233,
	"./eu.js": 233,
	"./fa": 234,
	"./fa.js": 234,
	"./fi": 235,
	"./fi.js": 235,
	"./fil": 236,
	"./fil.js": 236,
	"./fo": 237,
	"./fo.js": 237,
	"./fr": 238,
	"./fr-ca": 239,
	"./fr-ca.js": 239,
	"./fr-ch": 240,
	"./fr-ch.js": 240,
	"./fr.js": 238,
	"./fy": 241,
	"./fy.js": 241,
	"./ga": 242,
	"./ga.js": 242,
	"./gd": 243,
	"./gd.js": 243,
	"./gl": 244,
	"./gl.js": 244,
	"./gom-deva": 245,
	"./gom-deva.js": 245,
	"./gom-latn": 246,
	"./gom-latn.js": 246,
	"./gu": 247,
	"./gu.js": 247,
	"./he": 248,
	"./he.js": 248,
	"./hi": 249,
	"./hi.js": 249,
	"./hr": 250,
	"./hr.js": 250,
	"./hu": 251,
	"./hu.js": 251,
	"./hy-am": 252,
	"./hy-am.js": 252,
	"./id": 253,
	"./id.js": 253,
	"./is": 254,
	"./is.js": 254,
	"./it": 255,
	"./it-ch": 256,
	"./it-ch.js": 256,
	"./it.js": 255,
	"./ja": 257,
	"./ja.js": 257,
	"./jv": 258,
	"./jv.js": 258,
	"./ka": 259,
	"./ka.js": 259,
	"./kk": 260,
	"./kk.js": 260,
	"./km": 261,
	"./km.js": 261,
	"./kn": 262,
	"./kn.js": 262,
	"./ko": 263,
	"./ko.js": 263,
	"./ku": 264,
	"./ku.js": 264,
	"./ky": 265,
	"./ky.js": 265,
	"./lb": 266,
	"./lb.js": 266,
	"./lo": 267,
	"./lo.js": 267,
	"./lt": 268,
	"./lt.js": 268,
	"./lv": 269,
	"./lv.js": 269,
	"./me": 270,
	"./me.js": 270,
	"./mi": 271,
	"./mi.js": 271,
	"./mk": 272,
	"./mk.js": 272,
	"./ml": 273,
	"./ml.js": 273,
	"./mn": 274,
	"./mn.js": 274,
	"./mr": 275,
	"./mr.js": 275,
	"./ms": 276,
	"./ms-my": 277,
	"./ms-my.js": 277,
	"./ms.js": 276,
	"./mt": 278,
	"./mt.js": 278,
	"./my": 279,
	"./my.js": 279,
	"./nb": 280,
	"./nb.js": 280,
	"./ne": 281,
	"./ne.js": 281,
	"./nl": 282,
	"./nl-be": 283,
	"./nl-be.js": 283,
	"./nl.js": 282,
	"./nn": 284,
	"./nn.js": 284,
	"./oc-lnc": 285,
	"./oc-lnc.js": 285,
	"./pa-in": 286,
	"./pa-in.js": 286,
	"./pl": 287,
	"./pl.js": 287,
	"./pt": 288,
	"./pt-br": 289,
	"./pt-br.js": 289,
	"./pt.js": 288,
	"./ro": 290,
	"./ro.js": 290,
	"./ru": 291,
	"./ru.js": 291,
	"./sd": 292,
	"./sd.js": 292,
	"./se": 293,
	"./se.js": 293,
	"./si": 294,
	"./si.js": 294,
	"./sk": 295,
	"./sk.js": 295,
	"./sl": 296,
	"./sl.js": 296,
	"./sq": 297,
	"./sq.js": 297,
	"./sr": 298,
	"./sr-cyrl": 299,
	"./sr-cyrl.js": 299,
	"./sr.js": 298,
	"./ss": 300,
	"./ss.js": 300,
	"./sv": 301,
	"./sv.js": 301,
	"./sw": 302,
	"./sw.js": 302,
	"./ta": 303,
	"./ta.js": 303,
	"./te": 304,
	"./te.js": 304,
	"./tet": 305,
	"./tet.js": 305,
	"./tg": 306,
	"./tg.js": 306,
	"./th": 307,
	"./th.js": 307,
	"./tl-ph": 308,
	"./tl-ph.js": 308,
	"./tlh": 309,
	"./tlh.js": 309,
	"./tr": 310,
	"./tr.js": 310,
	"./tzl": 311,
	"./tzl.js": 311,
	"./tzm": 312,
	"./tzm-latn": 313,
	"./tzm-latn.js": 313,
	"./tzm.js": 312,
	"./ug-cn": 314,
	"./ug-cn.js": 314,
	"./uk": 315,
	"./uk.js": 315,
	"./ur": 316,
	"./ur.js": 316,
	"./uz": 317,
	"./uz-latn": 318,
	"./uz-latn.js": 318,
	"./uz.js": 317,
	"./vi": 319,
	"./vi.js": 319,
	"./x-pseudo": 320,
	"./x-pseudo.js": 320,
	"./yo": 321,
	"./yo.js": 321,
	"./zh-cn": 322,
	"./zh-cn.js": 322,
	"./zh-hk": 323,
	"./zh-hk.js": 323,
	"./zh-mo": 324,
	"./zh-mo.js": 324,
	"./zh-tw": 325,
	"./zh-tw.js": 325
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 434;

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notifications_notifications__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_order_history_order_history__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feedback_feedback__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_offers_offers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_wallet_my_wallet__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_qr_scanner_qr_scanner__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_app_version__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sample_sample__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_subscription_subscription__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_my_bags_my_bags__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_retail_products_retail_products__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var MyApp = /** @class */ (function () {
    function MyApp(platform, app, toastCtrl, loadingCtrl, alertCtrl, statusBar, splashScreen, storage, appVersion, auth) {
        // this.initializeApp();
        // this.checkForUpdates();
        var _this = this;
        this.platform = platform;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.appVersion = appVersion;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.title = "";
        this.message = "";
        platform.ready().then(function () {
            // statusBar.styleDefault();
            _this.statusBar.backgroundColorByHexString('#000');
            _this.splashScreen.hide();
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
            };
            window["plugins"].OneSignal
                .startInit("d00ad8b8-49fb-491a-82b6-f84c19b4a34c", "472147193179")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
            window["plugins"].OneSignal.getIds(getPlayerIdCallback);
        });
    }
    MyApp.prototype.ngOnInit = function () {
        this.checkForAppNotifications();
    };
    MyApp.prototype.checkForAppNotifications = function () {
        var _this = this;
        //getting app notifications form the server
        this.auth.postData1("getAppNotificationMessages").then(function (result) {
            _this.responseData = result;
            if (_this.responseData[0].is_active == 1) {
                _this.title = _this.responseData[0].title;
                _this.message = _this.responseData[0].message;
                var alert_1 = _this.alertCtrl.create({
                    title: _this.title,
                    message: _this.message,
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                            }
                        }
                    ],
                    enableBackdropDismiss: false
                });
                alert_1.present();
            }
        }, function (err) {
        });
    };
    MyApp.prototype.checkForUpdates = function () {
        var _this = this;
        //getting latest app version from the backend
        this.auth.postData1("getAppVersion1").then(function (result) {
            _this.app_version = result;
            // console.log("Version Code: ",this.app_version);
            //getting installed app version
            _this.appVersion.getVersionCode().then(function (version_code) {
                _this.myApp_version = version_code;
                //check if version code is latest
                console.log('version code from server: ', _this.app_version);
                console.log('version code of app: ', _this.myApp_version);
                if (_this.myApp_version != _this.app_version) {
                    console.log("UPDATE AVAILABLE");
                    _this.showUpdatePrompt();
                }
            });
        }, function (err) {
        });
    };
    MyApp.prototype.showUpdatePrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'UPDATE AVAILABLE',
            message: 'You must have the latest version of the app!',
            buttons: [
                {
                    text: 'Update',
                    handler: function () {
                        console.log('Update clicked');
                        window.open("https://play.google.com/store/apps/details?id=discountdistributors.app.grocery", "_system");
                        _this.platform.exitApp();
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    MyApp.prototype.isGuestLogin = function () {
        if (localStorage.getItem('userData') != null) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.userDetails = data.userData;
            if (this.userDetails.fname == "guest") {
                return true;
            }
        }
        else {
            return true;
        }
    };
    MyApp.prototype.isSubscribed = function () {
        if (localStorage.getItem('isSubscribed') != '0') {
            return false;
        }
        else {
            return true;
        }
    };
    // initializeApp() {
    //   this.platform.ready().then(() => {
    //     this.statusBar.backgroundColorByHexString('#fff');
    //     this.splashScreen.hide();
    //   });
    // }
    MyApp.prototype.onclickHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.onClickRetailProducts = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_20__pages_retail_products_retail_products__["a" /* RetailProductsPage */]);
    };
    MyApp.prototype.openMessages = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_sample_sample__["a" /* SamplePage */]);
    };
    MyApp.prototype.onclickMyWallet = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_my_wallet_my_wallet__["a" /* MyWalletPage */]);
    };
    MyApp.prototype.onclickQrScanner = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_qr_scanner_qr_scanner__["a" /* QrScannerPage */]);
    };
    MyApp.prototype.onclickSubscriptions = function () {
        console.log('subscriptions will be fetched from server');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_18__pages_subscription_subscription__["a" /* SubscriptionPage */]);
        // this.nav.push(PaypalSubsccriptionPage);
    };
    MyApp.prototype.onMyBagsClicked = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_19__pages_my_bags_my_bags__["a" /* MyBagsPage */]);
    };
    MyApp.prototype.onclickMyOrder = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_order_history_order_history__["a" /* OrderHistoryPage */]);
    };
    MyApp.prototype.openContact = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */]);
    };
    MyApp.prototype.onclickNoti = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_notifications_notifications__["a" /* NotificationsPage */]);
    };
    MyApp.prototype.openfeedback = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_feedback_feedback__["a" /* FeedbackPage */]);
    };
    MyApp.prototype.openoffers = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_offers_offers__["a" /* OffersPage */]);
    };
    MyApp.prototype.logout = function () {
        console.log('logging out');
        __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */].cartData = [];
        //update cart data inside the local storage
        this.storage.set('cartData', __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */].cartData);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.openAboutUs = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-content class="menubar">\n\n    <div class="menu-header">\n      <img src="././assets/imgs/logo.png" alt="" srcset="" style="width: 50%; height: 137px; margin-bottom: 20px;">\n\n    </div>\n    <ion-list class="mainmenu">\n      <ion-item no-lines class="item item-trns">\n        <button ion-button clear (click)="onclickHome()" menuToggle>\n          <ion-icon name="md-home"></ion-icon>\n          &nbsp;&nbsp;<p>Home</p>\n        </button>\n      </ion-item>\n\n      <!-- <ion-item no-lines class="item item-trns">\n        <button ion-button clear (click)="onClickRetailProducts()" menuToggle>\n          <ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>\n          &nbsp;&nbsp;<p>Retail Products</p>\n        </button>\n      </ion-item> -->\n\n      <ion-item no-lines class="item item-trns" *ngIf="!isGuestLogin()">\n        <button ion-button clear (click)="onclickMyOrder()" menuToggle>\n          <ion-icon name="ios-cart"></ion-icon>\n          &nbsp;&nbsp;<p>My Orders</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="item item-trns" *ngIf="!isGuestLogin()  && isSubscribed()">\n        <button ion-button clear (click)="onclickSubscriptions()" menuToggle>\n          <ion-icon ios="ios-refresh" md="md-refresh"></ion-icon>\n          &nbsp;&nbsp;<p>Subscriptions</p>\n        </button>\n      </ion-item>\n\n      <!-- <ion-item no-lines class="item item-trns" *ngIf="!isGuestLogin() && isSubscribed()">\n        <button ion-button clear (click)="onclickSubscriptions()" menuToggle>\n          <ion-icon ios="ios-refresh" md="md-refresh"></ion-icon>\n          &nbsp;&nbsp;<p>Subscriptions</p>\n        </button>\n      </ion-item> -->\n\n      <ion-item no-lines class="item item-trns" *ngIf="!isSubscribed()">\n        <button ion-button clear (click)="onMyBagsClicked()" menuToggle>\n          <ion-icon ios="ios-basket" md="md-basket"></ion-icon>\n          &nbsp;&nbsp;<p>My Bags</p>\n        </button>\n      </ion-item>\n\n      <!-- <ion-item no-lines class="item item-trns" *ngIf="!isGuestLogin()">\n        <button ion-button clear (click)="onclickMyWallet()" menuToggle>\n          <ion-icon ios="ios-cash" md="md-cash"></ion-icon>\n          &nbsp;&nbsp;<p>My Wallet</p>\n        </button>\n      </ion-item> -->\n\n      <!-- <ion-item no-lines class="item item-trns" *ngIf="!isGuestLogin()">\n        <button ion-button clear (click)="onclickQrScanner()" menuToggle>\n          <ion-icon name="expand"></ion-icon>\n          &nbsp;&nbsp;<p>QR Scanner</p>\n        </button>\n      </ion-item> -->\n\n      <!-- <ion-item no-lines class="item item-trns">\n        <button ion-button clear (click)="openoffers()" menuToggle>\n          <ion-icon name="md-happy"></ion-icon>\n          &nbsp;&nbsp;<p>Offers</p>\n        </button>\n      </ion-item> -->\n\n      <ion-item no-lines class="item item-trns">\n        <button ion-button clear (click)="onclickNoti()" menuToggle>\n          <ion-icon name="ios-notifications"></ion-icon>\n          &nbsp;&nbsp;<p>Notifications</p>\n        </button>\n      </ion-item>\n\n      <!-- <ion-item no-lines class="item item-trns">\n        <button ion-button clear (click)="openContact()" menuToggle>\n          <ion-icon name="ios-pin"></ion-icon>\n          &nbsp;&nbsp;<p>Contact Us</p>\n        </button>\n      </ion-item> -->\n\n      <!-- <ion-item no-lines class="item item-trns" *ngIf="!isGuestLogin()">\n        <button ion-button clear (click)="openMessages()" menuToggle>\n          <ion-icon ios="ios-mail-open" md="md-mail-open"></ion-icon>\n          &nbsp;&nbsp;<p>Messages</p>\n        </button>\n      </ion-item> -->\n      <!-- \n      <ion-item no-lines class="item item-trns">\n        <button ion-button clear (click)="openfeedback()" menuToggle>\n          <ion-icon name="md-star-half"></ion-icon>\n          &nbsp;&nbsp;<p>Feedback</p>\n        </button>\n      </ion-item> -->\n\n      <ion-item no-lines class="item item-trns">\n        <button ion-button clear (click)="openAboutUs()" menuToggle>\n          <ion-icon name="people"></ion-icon>\n          &nbsp;&nbsp;<p>About Us</p>\n        </button>\n      </ion-item>\n\n      <ion-item no-lines class="item item-trns">\n        <button ion-button clear (click)="logout()" menuToggle>\n          <ion-icon name="md-log-out"></ion-icon>\n          &nbsp;&nbsp;<p>Logout</p>\n        </button>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_16__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ValidatorsModule = /** @class */ (function () {
    function ValidatorsModule() {
    }
    ValidatorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__["TextMaskModule"]
            ]
        })
    ], ValidatorsModule);
    return ValidatorsModule;
}());

//# sourceMappingURL=validators.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, authService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = {
            "email": "",
            "password": "",
            "pID": ""
        };
        this.menuCtrl.enable(false);
    }
    LoginPage.prototype.guestLogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Fetching Data",
            duration: 10000
        });
        loader.present();
        this.userData.email = "guest@user.com";
        this.userData.password = "guestuser123";
        this.pID = localStorage.getItem("pID");
        this.userData.pID = this.pID;
        this.authService.postData(this.userData, "login").then(function (result) {
            loader.dismiss();
            _this.resposeData = result;
            console.log("guest login userData: ", _this.resposeData);
            if (_this.resposeData.userData) {
                _this.pID = localStorage.getItem('pID');
                localStorage.setItem('userData', JSON.stringify(_this.resposeData).replace("}}", ",\"pID\":\"" + _this.pID + "\",\"page\":\"1\",\"delivery_option\":\" \"}}"));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else if (_this.resposeData.error) {
                console.log("ERROR : ", _this.resposeData.error);
                _this.showalertinfo();
            }
        }, function (err) {
            loader.dismiss();
            _this.showalertinfo();
            console.log("CONNECTION ERROR");
            //Connection failed message
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Fetching Data",
            duration: 10000
        });
        loader.present();
        if (this.userData.email != "" && this.userData.password != "") {
            this.pID = localStorage.getItem("pID");
            this.userData.pID = this.pID;
            this.authService.postData(this.userData, "login").then(function (result) {
                loader.dismiss();
                _this.resposeData = result;
                if (_this.resposeData.userData) {
                    _this.pID = localStorage.getItem('pID');
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData).replace("}}", ",\"pID\":\"" + _this.pID + "\",\"page\":\"1\",\"delivery_option\":\" \"}}"));
                    console.log('userData after login: ' + localStorage.getItem('userData'));
                    localStorage.setItem('isSubscribed', _this.resposeData.userData.is_subscribed);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else if (_this.resposeData.error) {
                    console.log("ERROR : ", _this.resposeData.error);
                    _this.showalertinfo();
                }
            }, function (err) {
                loader.dismiss();
                _this.showalertinfo();
                console.log("CONNECTION ERROR");
                //Connection failed message
            });
        }
        else {
            loader.dismiss();
            this.showalertinfo();
        }
    };
    LoginPage.prototype.showalertinfo = function () {
        var alert = this.alertCtrl.create({
            title: "Error",
            subTitle: "Login Failed!",
            buttons: ["OK"]
        });
        alert.present();
    };
    LoginPage.prototype.onregister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.onForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\login\login.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>SIGN IN NOW</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!--    <img src="assets/imgs/logo.png" class="logo">-->\n	<ion-list no-lines class="form">\n\n		<ion-item>\n			<ion-icon name="md-mail" item-start></ion-icon>\n			<ion-label floating>Email</ion-label>\n			<ion-input type="email" [(ngModel)]="userData.email">\n			</ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-icon name="md-lock" item-start></ion-icon>\n			<ion-label floating>Password</ion-label>\n			<ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n			<!-- <h5 item-end (click)="onForgotPassword()">Forgot?</h5> -->\n		</ion-item>\n	</ion-list>\n	<button ion-button block (click)="login()">Sign In</button>\n</ion-content>\n\n<ion-footer no-border padding-left padding-right>\n	<div class="not_registered">\n		<p text-center>Oh! Not Registered Yet?</p>\n		<button ion-button outline block (click)="onregister()">Register Now</button>\n	</div>\n</ion-footer>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPlacedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderPlacedPage = /** @class */ (function () {
    function OrderPlacedPage(loadingCtrl, auth, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postData = {
            token: "",
            user_id: "",
            orderid: ""
        };
        this.viewData = {
            orderid: "",
            fname: "",
            lname: "",
            area: "",
            address: "",
            mobile: "",
            ordertime: "",
            delivery_option: "",
            pickup_date: "",
            delivery_date: "",
            pickup_time_from: "",
            pickup_time_to: "",
            delivery_time_from: "",
            delivery_time_to: "",
            delivery_fee: ""
        };
        this.noRetailProducts = true;
        this.noClothProducts = true;
        this.flag = false;
        this.flag1 = true;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.postData.orderid = navParams.get("orderid");
        this.viewData.orderid = navParams.get("orderid");
        this.viewData.fname = navParams.get("fname");
        this.viewData.lname = navParams.get("lname");
        this.viewData.area = navParams.get("area");
        this.viewData.address = navParams.get("address");
        this.viewData.mobile = navParams.get("mobile");
        this.viewData.ordertime = navParams.get("ordertime");
        this.viewData.delivery_option = navParams.get("delivery_option");
        this.viewData.pickup_date = navParams.get("pickup_date");
        this.viewData.delivery_date = navParams.get("delivery_date");
        this.viewData.pickup_time_from = navParams.get("pickup_time_from");
        this.viewData.pickup_time_to = navParams.get("pickup_time_to");
        this.viewData.delivery_time_from = navParams.get("delivery_time_from");
        this.viewData.delivery_time_to = navParams.get("delivery_time_to");
        this.viewData.delivery_fee = navParams.get("delivery_fee");
        if (this.viewData.delivery_option == "home_delivery") {
            this.flag = true;
            this.flag1 = false;
        }
        this.getOrderDetail();
    }
    OrderPlacedPage.prototype.getOrderDetail = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "fetchorderdetail").then(function (result) {
            _this.resposeData = result;
            _this.orderDetail = _this.resposeData.OrderDetail;
            _this.orderDetailRetail = _this.resposeData.OrderDetailRetail;
            if (_this.orderDetailRetail.length > 0) {
                _this.noRetailProducts = false;
            }
            else {
                _this.noRetailProducts = true;
            }
            if (_this.orderDetail.length > 0) {
                _this.noClothProducts = false;
            }
            else {
                _this.noClothProducts = true;
            }
            console.log('order details: ' + JSON.stringify(_this.resposeData));
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    OrderPlacedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-placed',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\order-placed\order-placed.html"*/'<ion-header style="background-color: #2cbfb1;">\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu" style="color:#fff; "></ion-icon>\n    </button>\n    <ion-title style="color:#fff; ">ORDER DETAILS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" padding>\n\n  <div>\n    <ion-item no-padding clear>\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">Order Detail</div>\n        </ion-col>\n        <ion-col>\n          <p>ORDER ID: {{viewData.orderid}}</p>\n          <p>Placed on </p>\n          <p>{{viewData.ordertime}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <!--          <ion-item no-padding clear>-->\n    <!--              <ion-row >-->\n    <!--                <ion-col >-->\n    <!--                  <div style="font-weight: bold">PAYMENT MODE</div>-->\n    <!--                </ion-col>-->\n    <!--                <ion-col>-->\n    <!--                  <p>COD</p>-->\n    <!--                </ion-col>-->\n    <!--              </ion-row>-->\n    <!--          </ion-item>-->\n\n    <ion-item no-padding clear>\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">ADDRESS</div>\n        </ion-col>\n        <ion-col>\n          <p>{{viewData.area}}</p>\n          <p>{{viewData.address}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-padding clear no-lines>\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">Contact</div>\n        </ion-col>\n        <ion-col>\n          <p>{{viewData.mobile}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-padding clear no-lines *ngIf="!noClothProducts">\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">Pick up Date</div>\n        </ion-col>\n        <ion-col>\n          <p>{{viewData.pickup_date}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!noClothProducts">\n        <ion-col>\n          <div style="font-weight: bold">Pick up Time</div>\n        </ion-col>\n        <ion-col>\n          <p>{{viewData.pickup_time_from}} - {{viewData.pickup_time_to}}</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item no-padding clear no-lines *ngIf="!noClothProducts">\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">Delivery Date</div>\n        </ion-col>\n        <ion-col>\n          <p>{{viewData.delivery_date}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="!noClothProducts">\n        <ion-col>\n          <div style="font-weight: bold">Delivery Time</div>\n        </ion-col>\n        <ion-col>\n          <p>{{viewData.delivery_time_from}} - {{viewData.delivery_time_to}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item no-padding clear *ngIf="viewData.delivery_fee != NULL">\n      <ion-row>\n        <ion-col>\n          <div style="font-weight: bold">Delivery Fee</div>\n        </ion-col>\n        <ion-col>\n          <p>BSD$ {{viewData.delivery_fee}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <div class="cartitems" *ngIf="!noClothProducts">\n      <p>Your Clothes</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col style="font-weight:bold">Item</ion-col>\n          <ion-col style="font-weight:bold">Service</ion-col>\n          <ion-col style="font-weight:bold">Qty</ion-col>\n          <ion-col style="font-weight:bold">Price</ion-col>\n        </ion-row>\n        <ion-row *ngFor="let c of orderDetail; let i = index">\n          <ion-col *ngIf="c.categoryname"> {{ c.itemname }} ({{ c.categoryname }}) </ion-col>\n          <ion-col *ngIf="!c.categoryname"> {{ c.itemname }} </ion-col>\n          <ion-col> {{ c.itemquantity }} {{ c.itemquantitytype }} </ion-col>\n          <ion-col> {{ c.Mquantity }}</ion-col>\n          <ion-col> BSD$ {{ c.itemprice * c.Mquantity }} </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class="cartitems" *ngIf="!noRetailProducts">\n      <p>Your Items</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col style="font-weight:bold">Item</ion-col>\n          <ion-col style="font-weight:bold">Description</ion-col>\n          <ion-col style="font-weight:bold">Qty</ion-col>\n          <ion-col style="font-weight:bold">Price</ion-col>\n        </ion-row>\n        <ion-row *ngFor="let c of orderDetailRetail; let i = index">\n          <ion-col> {{ c.itemname }} </ion-col>\n          <ion-col> {{ c.itemquantity }} {{ c.itemquantitytype }} </ion-col>\n          <ion-col> {{ c.Mquantity }}</ion-col>\n          <ion-col> BSD$ {{ c.itemprice * c.Mquantity }} </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <!-- <div *ngIf=flag>\n              <ion-item no-padding clear>\n                <ion-row >\n                  <ion-col></ion-col>\n                  <ion-col >\n                      <p><small>Price is Exclusive Of Delivery Charges, VAT(12%) and Charity Amount</small></p>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </div> -->\n\n    <!-- <div *ngIf=flag1>\n          <ion-item no-padding clear>\n            <ion-row >\n              <ion-col></ion-col>\n              <ion-col >\n                <p><small>Price is Exclusive of VAT(12%) and Charity Amount</small></p>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </div> -->\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\order-placed\order-placed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], OrderPlacedPage);
    return OrderPlacedPage;
}());

//# sourceMappingURL=order-placed.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paypal_subsccription_paypal_subsccription__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SubscriptionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubscriptionDetailsPage = /** @class */ (function () {
    function SubscriptionDetailsPage(alertCtrl, loadingCtrl, navCtrl, navParams, auth, iab) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.iab = iab;
        this.noBagDetails = false;
        this.postData = {
            token: "",
            user_id: "",
            bag_id: ""
        };
        this.subscriptionData = {
            token: "",
            user_id: "",
            bag_id: "",
            paypal_subscription_id: "",
            subscription_details: ""
        };
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.subscriptionData.user_id = this.userDetails.user_id;
        ;
        this.subscriptionData.token = this.userDetails.token;
        this.subscriptionOpened = this.navParams.get("subs");
        SubscriptionDetailsPage_1.subscriptionOpenedDetails = this.subscriptionOpened;
        console.log(this.subscriptionOpened);
        console.log('OPENED SUBSCRIPTION: ' + JSON.stringify(this.subscriptionOpened));
        // this.getBagDetails();
    }
    SubscriptionDetailsPage_1 = SubscriptionDetailsPage;
    SubscriptionDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscriptionDetailsPage');
    };
    SubscriptionDetailsPage.prototype.ngOnInit = function () {
        // this.getBagDetails();
        this.getBagDetails();
    };
    SubscriptionDetailsPage.prototype.ngAfterViewInit = function () {
    };
    SubscriptionDetailsPage.prototype.getBagDetails = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.postData.bag_id = this.subscriptionOpened.id;
        this.auth.postData(this.postData, "getBagDetails").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.BagsDetails) {
                _this.bagDetails = _this.resposeData.BagsDetails;
                console.log('bag details of opened subscription: ' + JSON.stringify(_this.bagDetails));
                _this.subscriptionData.subscription_details = _this.resposeData.BagsDetails;
                if (_this.bagDetails.length == 0) {
                    _this.noBagDetails = true;
                }
            }
            else {
            }
            // console.log('order details: ' + JSON.stringify(this.orderDetail));
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    SubscriptionDetailsPage.prototype.subscribe = function () {
        // let zest = this.loadingCtrl.create({
        //   content: "Subscribing..",
        //   duration: 20000,
        //   spinner: 'crescent'
        // });
        // zest.present();
        this.subscriptionData.bag_id = this.subscriptionOpened.id;
        SubscriptionDetailsPage_1.susbscriptionPostData = this.subscriptionData;
        // this.auth.postData(this.subscriptionData, "subscribeUser").then(
        //   result => {
        //     this.resposeData = result;
        //     if (this.resposeData.status == "200") {
        //       /* this.bagDetails = this.resposeData.BagsDetails;
        //       if (!this.bagDetails.length) {
        //         this.bagDetails = [];
        //       } */
        //       let alert = this.alertCtrl.create({
        //         title: 'ALERT',
        //         subTitle: 'Subscribed',
        //         buttons: ['Dismiss']
        //       });
        //       alert.present();
        //       this.navCtrl.setRoot(HomePage, {});
        //     } else {
        //       let alert = this.alertCtrl.create({
        //         title: 'ALERT',
        //         subTitle: 'Falied to Subscribe',
        //         buttons: ['Dismiss']
        //       });
        //       alert.present();
        //     }
        //     // console.log('order details: ' + JSON.stringify(this.orderDetail));
        //     zest.dismiss();
        //   },
        //   err => {
        //     zest.dismiss();
        //   });
        //   let target = "_blank";
        //   // SubscriptionDetailsPage.browser = this.iab.create('./assets/iframeTemplates/paypalSubscription.html', target, this.options);
        //   // SubscriptionDetailsPage.browser = this.iab.create('./assets/iframeTemplates/paypalSubscription.html', target, this.options);
        //   SubscriptionDetailsPage.browser = this.iab.create('http://ur-rent.com:8082/spinwashpaypal/paypalSubscription.html?user_id='+this.postData.user_id, target, this.options);
        //   SubscriptionDetailsPage.browser.on('loadstop').subscribe(event => {
        //     console.log('loaded data');
        //     SubscriptionDetailsPage.browser.insertCSS({ code: "body{color: red;" });
        //   });
        //   SubscriptionDetailsPage.browser.on('exit').subscribe(() => {
        //     console.log('browser closed'); 
        //     console.log('in app broswser closed: ' + localStorage.getItem('subscriptionID'));
        //     //check if user is subscribed 
        //     //update local storage accordingly and redirect to homepage
        // }, err => {
        //     console.error(err);
        // });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__paypal_subsccription_paypal_subsccription__["a" /* PaypalSubsccriptionPage */]);
    };
    SubscriptionDetailsPage = SubscriptionDetailsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-subscription-details',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\subscription-details\subscription-details.html"*/'<!--\n\n  Generated template for the SubscriptionDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SUBSCRIPTION DETAILS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n\n\n  <ion-list>\n\n    <ion-card no-padding>\n\n      <ion-row class="orderholder">\n\n        <ion-col>\n\n          <h2 class="orderid">{{subscriptionOpened.bag_name}}</h2>\n\n          <h3 class="ordertime">Price: <span style="font-weight: bold;">BSD$ {{subscriptionOpened.bag_price}}</span>\n\n          </h3>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col></ion-col>\n\n        <ion-col></ion-col>\n\n        <ion-col></ion-col>\n\n        <ion-col>\n\n          <button *ngIf="!noBagDetails" ion-button icon-left clear (click)="subscribe()">\n\n            <div>Subscribe</div>\n\n          </button>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n\n\n    <div class="cartitems">\n\n      <p>Bag Details</p>\n\n      <ion-grid>\n\n        <ion-row *ngIf="!noBagDetails">\n\n          <ion-col style="font-weight:bold">Item</ion-col>\n\n          <ion-col style="font-weight:bold">Service</ion-col>\n\n          <ion-col style="font-weight:bold">Qty</ion-col>\n\n          <!-- <ion-col style="font-weight:bold">Price</ion-col> -->\n\n        </ion-row>\n\n\n\n        <div *ngIf="!noBagDetails">\n\n          <div>\n\n            <ion-row *ngFor="let c of bagDetails; let i = index">\n\n              <ion-col *ngIf="c.categoryname"> {{ c.item_name }} </ion-col>\n\n              <ion-col *ngIf="!c.categoryname"> {{ c.item_name }} </ion-col>\n\n              <ion-col> {{ c.service_name }} </ion-col>\n\n              <ion-col> {{ c.item_quantity }} </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf="noBagDetails">\n\n            <ion-row *ngIf="!bagDetails.length" class="row" style=" justify-content: center; color: grey;">\n\n              No Bag Details\n\n            </ion-row>\n\n        </div>\n\n\n\n      </ion-grid>\n\n    </div>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\subscription-details\subscription-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SubscriptionDetailsPage);
    return SubscriptionDetailsPage;
    var SubscriptionDetailsPage_1;
}());

//# sourceMappingURL=subscription-details.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_confirm_order_confirm__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddressPage = /** @class */ (function () {
    function AddressPage(alertCtrl, navCtrl, auth, toastCtrl, navParams, loadingCtrl, http, payPal, storage) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.payPal = payPal;
        this.storage = storage;
        this.hasRetailProducts = false;
        this.walletAmount = 0;
        this.delivery_charges = 0;
        this.totalCharges = 0;
        this.temp1 = [];
        this.temp2 = [];
        this.expedite_activated = false;
        this.userData = {
            fname: "",
            address: "",
            mobile: "",
            payment: "",
            delivery_option: "",
            island_id: "",
            island_name: "",
            vessel: "",
            shipment_date: "",
        };
        this.order = {
            token: "",
            user_id: "",
            fname: "",
            address: "",
            payment: "",
            mobile: "",
            token_stripe: "",
            total_amount: "",
            delivery_option: "",
            items: [],
            retail_items: [],
            charity_amount: "",
            charity_id: "",
            island_id: "",
            island_name: "",
            vessel: "",
            shipment_date: "",
            pickup_date: "",
            delivery_date: "",
            pickup_time_from: "",
            pickup_time_to: "",
            delivery_time_from: "",
            delivery_time_to: "",
            updatedBag: [],
            expedite_activated: "",
            expedite_amount: "",
            delivery_fee: ""
        };
        this.postData = {
            token: "",
            user_id: "",
            amount: ""
        };
        this.canPayViaSubscriptionn = false;
        this.checkIfPayViaSubscription = [];
        this.hasRetailProducts = false;
        __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData.forEach(function (element) {
            if (element.selectedCategory == "Retail") {
                _this.hasRetailProducts = true;
            }
        });
        this.pickupTimeFrom = this.navParams.get('pickupTimeFrom');
        this.pickupTimeTo = this.navParams.get('pickupTimeTo');
        this.deliveryTimeFrom = this.navParams.get('deliveryTimeFrom');
        this.deliveryTimeTo = this.navParams.get('deliveryTimeTo');
        this.pickupDate = this.navParams.get('pickupDate');
        this.deliveryDate = this.navParams.get('deliveryDate');
        this.expedite_activated = this.navParams.get('expedite_activated');
        this.expedite_amount = localStorage.getItem('expediteCharges');
        this.delivery_fee = parseFloat(localStorage.getItem('deliveryCharges'));
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userData.mobile = this.userDetails.mobile;
        this.userData.fname = this.userDetails.fname;
        this.userData.address = this.userDetails.address;
        this.userData.delivery_option = localStorage.getItem('delivery_option');
        if (this.userData.delivery_option == 'boat_order') {
            this.boatOrderDetails = JSON.parse(localStorage.getItem('BoatOrderDetails'));
            this.order.island_id = this.boatOrderDetails.island_id;
            this.order.island_name = this.boatOrderDetails.island_name;
            this.order.vessel = this.boatOrderDetails.vessel;
            this.order.shipment_date = this.boatOrderDetails.shipment_date;
        }
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.delivery_charges = parseFloat(localStorage.getItem('deliveryCharges'));
        this.order.charity_amount = localStorage.getItem('charityAmount');
        this.order.charity_id = localStorage.getItem('charityID');
        this.order.expedite_activated = this.expedite_activated.toString();
        this.order.expedite_amount = this.expedite_amount;
        this.order.delivery_fee = this.delivery_fee;
        // console.log('charity name: ', localStorage.getItem('charityID'));
        // console.log('charity amount: ', localStorage.getItem('charityAmount'));
        console.log('Total Bill: ', localStorage.getItem('totalBill'));
        this.finalBill = localStorage.getItem('totalBill');
        this.shipping = localStorage.getItem('deliveryCharges');
        this.amount = localStorage.getItem('cartamount');
    }
    AddressPage.prototype.onSubmit = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Submitting Order..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.order.fname = this.userData.fname;
        this.order.mobile = this.userData.mobile;
        this.order.address = this.userData.address;
        this.order.token = this.userDetails.token;
        this.order.user_id = this.userDetails.user_id;
        this.order.payment = this.userData.payment;
        this.order.delivery_option = this.userData.delivery_option;
        this.order.total_amount = localStorage.getItem("totalBill");
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData[i].selectedCategory == 'Retail') {
                this.order.retail_items.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData[i]);
                __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData.splice(i, 1);
            }
        }
        this.order.items = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData;
        this.order.delivery_date = this.deliveryDate;
        this.order.pickup_date = this.pickupDate;
        this.order.pickup_time_from = this.pickupTimeFrom;
        this.order.pickup_time_to = this.pickupTimeTo;
        this.order.delivery_time_from = this.deliveryTimeFrom;
        this.order.delivery_time_to = this.deliveryTimeTo;
        console.log('BEFORE PLACING ORDER: ', this.order);
        if (this.order.fname != "" && this.order.address != "" && this.order.mobile != "" && this.order.user_id != "" && this.order.token != "" && this.order.delivery_option != "") {
            // if(this.order.delivery_option == "pick_from_store"){
            //   localStorage.setItem('totalBill2',localStorage.getItem('totalBill1'));
            //   this.order.total_amount = localStorage.getItem("totalBill1");
            //   console.log('price to be charged when selected pick_from_store: ',this.order.total_amount);
            //
            // }
            //
            // if(this.order.delivery_option=="home_delivery"){
            //   localStorage.setItem('totalBill2',localStorage.getItem('totalBill'));
            //   this.order.total_amount = localStorage.getItem("totalBill");
            //   console.log('price to be charged when selected home_delivery: ',this.order.total_amount);
            //
            // }
            localStorage.setItem('totalBill2', localStorage.getItem('totalBill'));
            if (this.userData.payment == "cash_on_delivery") {
                console.log('order to be submitted: ' + JSON.stringify(this.order));
                this.auth.postData(this.order, "placeorder").then(function (result) {
                    zest.dismiss();
                    _this.resposeData = result;
                    if (_this.resposeData.success) {
                        _this.orderdataSet = _this.resposeData.success;
                        __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData = [];
                        //update cart data inside the local storage
                        _this.storage.set('cartData', __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__order_confirm_order_confirm__["a" /* OrderConfirmPage */], { OrderId: _this.orderdataSet });
                    }
                    else {
                        console.log("Error");
                    }
                }, function (err) {
                    zest.dismiss();
                });
            }
            else if (this.userData.payment == "pay_via_wallet") {
                zest.dismiss();
                //check if amount in wallet is greater than or equal to the total cart bill
                this.getWalletDetails();
            }
            else if (this.userData.payment == "pay_via_stripe") {
                zest.dismiss();
                // this.navCtrl.push(PaymentPage, { orderData: this.order });
                console.log('pay via stripe: ' + this.order);
            }
            else if (this.userData.payment == "pay_via_paypal") {
                zest.dismiss();
                this.payy();
            }
            else if (this.userData.payment == "pay_via_subscription") {
                console.log('paying via subscription');
                if (this.order.items.length == 1) {
                    this.canPayViaSubscriptionn = false;
                    __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].userSubscriptions.forEach(function (bag) {
                        if (_this.order.items[0].itemquantitytype == bag.service_name && _this.order.items[0].itemname == bag.item_name && _this.order.items[0].Mquantity <= bag.quantity && bag.quantity != 0) {
                            console.log('this can be paid via subscription');
                            _this.canPayViaSubscriptionn = true;
                        }
                    });
                    this.checkIfPayViaSubscription.push(this.canPayViaSubscriptionn);
                }
                else {
                    this.canPayViaSubscriptionn = false;
                    this.order.items.forEach(function (element) {
                        __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].userSubscriptions.forEach(function (element1) {
                            if (element.itemquantitytype == element1.service_name && element.itemname == element1.item_name && element.Mquantity <= element1.quantity && element1.quantity != 0) {
                                _this.canPayViaSubscriptionn = true;
                            }
                        });
                        if (_this.canPayViaSubscriptionn == false) {
                            console.log('this can not be paid via subscription');
                        }
                        else if (_this.canPayViaSubscriptionn == true) {
                            console.log('this can paid via subscription');
                        }
                        _this.checkIfPayViaSubscription.push(_this.canPayViaSubscriptionn);
                        _this.canPayViaSubscriptionn = false;
                    });
                    // this.checkIfPayViaSubscription.forEach(element => {
                    //   if(element == false) {
                    //     console.log('can not pay via subscription');
                    //     this.canPayViaSubscriptionn = false;
                    //   }
                    // });
                }
                var checker = function (arr) { return arr.every(function (v) { return v === true; }); };
                console.log('can pay via subscriptions?? ' + checker(this.checkIfPayViaSubscription));
                if (!checker(this.checkIfPayViaSubscription)) {
                    zest.dismiss();
                    var alert_1 = this.alertCtrl.create({
                        title: ' ALERT',
                        subTitle: 'You can not pay for these items via your subscription! Pay via cash?',
                        buttons: ['Dismiss']
                    });
                    alert_1.present();
                }
                else {
                    console.log('updating user bag details');
                    // subtract the things from user bag and update user subscription and place order
                    __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].userSubscriptions.forEach(function (element) {
                        _this.order.items.forEach(function (element1) {
                            if (element.service_name == element1.itemquantitytype && element.item_name == element1.itemname && element.quantity >= element1.Mquantity) {
                                element.quantity = element.quantity - element1.Mquantity;
                                _this.order.updatedBag.push(element);
                            }
                        });
                    });
                    console.log('placing order: ' + JSON.stringify(this.order.updatedBag));
                    this.auth.postData(this.order, "placeorder").then(function (result) {
                        zest.dismiss();
                        _this.resposeData = result;
                        if (_this.resposeData.success) {
                            _this.orderdataSet = _this.resposeData.success;
                            __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData = [];
                            //update cart data inside the local storage
                            _this.storage.set('cartData', __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__order_confirm_order_confirm__["a" /* OrderConfirmPage */], { OrderId: _this.orderdataSet });
                        }
                        else {
                            console.log("Error");
                        }
                    }, function (err) {
                        zest.dismiss();
                    });
                }
            }
            else {
                var alert_2 = this.alertCtrl.create({
                    title: ' ALERT',
                    subTitle: 'No Payment Method Selected',
                    buttons: ['Dismiss']
                });
                alert_2.present();
                zest.dismiss();
            }
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'Something Went Wrong',
                subTitle: 'Please Provide All Details',
                buttons: ['Dismiss']
            });
            alert_3.present();
            zest.dismiss();
        }
    };
    AddressPage.prototype.removeFromWallet = function () {
        var _this = this;
        this.auth.postData(this.postData, "updateWallet").then(function (result) {
            _this.resposeData = result;
            console.log("updated amount in wallet: ", _this.resposeData);
            _this.placeOrderViaWallet();
        }, function (err) {
            console.log('error: updating amount in wallet: ', err);
            var alert = _this.alertCtrl.create({
                subTitle: 'server error: updating amount in wallet failed',
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    AddressPage.prototype.placeOrderViaWallet = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Submitting Order..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.order, "placeorder").then(function (result) {
            zest.dismiss();
            _this.resposeData = result;
            if (_this.resposeData.success) {
                _this.orderdataSet = _this.resposeData.success;
                __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData = [];
                //update cart data inside the local storage
                _this.storage.set('cartData', __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__order_confirm_order_confirm__["a" /* OrderConfirmPage */], { OrderId: _this.orderdataSet });
            }
            else {
                console.log("Error");
            }
        }, function (err) {
            zest.dismiss();
        });
    };
    AddressPage.prototype.getWalletDetails = function () {
        var _this = this;
        this.auth.postData(this.postData, "fetchwallet").then(function (result) {
            _this.resposeData1 = result;
            _this.walletData = _this.resposeData1.WalletData;
            if (_this.walletData.length == 0) {
                //show error alert
                var alert_4 = _this.alertCtrl.create({
                    subTitle: 'Your Wallet Is Empty. Select Another Payment Method',
                    buttons: ['Dismiss']
                });
                alert_4.present();
            }
            else {
                _this.walletAmount = parseFloat(_this.walletData[0].amount);
                //check if bill is less than wallet amount
                if (parseFloat(_this.walletData[0].amount) > parseFloat(localStorage.getItem('totalBill'))) {
                    // this.walletAmount = (parseFloat(this.walletData[0].amount) - parseFloat(localStorage.getItem('totalBill'))) * -1;
                    _this.walletAmount = (parseFloat(localStorage.getItem('totalBill'))) * -1;
                    _this.postData.amount = _this.walletAmount.toFixed(2).toString();
                    _this.removeFromWallet();
                    console.log("You can pay with your wallet. ", _this.walletData[0].amount);
                }
                else {
                    console.log('not enough amount in the wallet');
                    var alert_5 = _this.alertCtrl.create({
                        subTitle: 'Not Enough Amount In The Wallet. Select Another Payment Method',
                        buttons: ['Dismiss']
                    });
                    alert_5.present();
                }
            }
        }, function (err) {
            console.log('error: getting wallet details: ', err);
        });
    };
    AddressPage.prototype.canPayViaSubscription = function () {
        if (localStorage.getItem('isSubscribed') != '0') {
            return false;
        }
        else {
            return true;
        }
    };
    AddressPage.prototype.payy = function () {
        var _this = this;
        console.log('initializing paypal');
        this.payPal.init({
            PayPalEnvironmentProduction: 'AcfgY0HIj78N_WBdb9Ky6J-FXzBVV5I8lxuEG6KT93GLw3YQNoXH6v4vuElWrHEFf8dLuwVLKWW060Xg',
            PayPalEnvironmentSandbox: 'AbqAb57k-dK7En-rC0DP6EZUZ6VucPCmAuDKatpxY45y1_72q9_CsUPd1JE24xwxyuukwtsBU7wOQ-DA'
        }).then(function () {
            console.log("initialized paypal");
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentProduction', new __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["c" /* PayPalPayment */](localStorage.getItem('totalBill2'), 'USD', 'Total Bill', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    // Successfully paid
                    console.log("payment successful");
                    //store order data into
                    _this.auth.postData(_this.order, "placeorder").then(function (result) {
                        _this.resposeData = result;
                        if (_this.resposeData.success) {
                            _this.orderdataSet = _this.resposeData.success;
                            __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData = [];
                            //update cart data inside the local storage
                            _this.storage.set('cartData', __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */].cartData);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__order_confirm_order_confirm__["a" /* OrderConfirmPage */], { OrderId: _this.orderdataSet });
                        }
                        else {
                            console.log("Error");
                        }
                    }, function (err) {
                    });
                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, function () {
                    // Error or render dialog closed without being successful
                    console.log('failed to process transaction');
                });
            }, function () {
                // Error in configuration
            });
        }, function () {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-address",template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\address\address.html"*/'<ion-header style="background-color: #2cbfb1;">\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="menu" style="color:#fff; "></ion-icon>\n    </button>\n    <ion-title style="color:#fff; ">Delivery Address</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding class="formdiv">\n  <ion-item>\n    <ion-label stacked color="primary">Name</ion-label>\n    <ion-input type="text" required [(ngModel)]="userData.fname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Address</ion-label>\n    <ion-textarea rows="5" required [(ngModel)]="userData.address"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Mobile Number</ion-label>\n    <ion-input type="number" required [(ngModel)]="userData.mobile"></ion-input>\n  </ion-item>\n\n  <div style=" margin-top:2rem; padding-left: 16px">\n    <ion-item-group>\n      <ion-label stacked color="primary">Payment Method</ion-label>\n      <ion-list radio-group [(ngModel)]="userData.payment">\n\n        <div id="container">\n          <div id="leftThing">\n            <ion-icon class="ion-md-icon" name="cash"></ion-icon>\n          </div>\n          <div id="rightThing">\n            <ion-item no-lines>\n              <ion-label>Cash</ion-label>\n              <ion-radio value="cash_on_delivery"></ion-radio>\n            </ion-item>\n          </div>\n        </div>\n\n        <div id="container" *ngIf="!canPayViaSubscription() && !hasRetailProducts">\n          <div id="leftThing">\n            <ion-icon class="ion-md-icon" name="card"></ion-icon>\n          </div>\n          <div id="rightThing">\n            <ion-item no-lines>\n              <ion-label>Pay via Subscription</ion-label>\n              <ion-radio value="pay_via_subscription"></ion-radio>\n            </ion-item>\n          </div>\n        </div>\n\n        <!-- <div id="container">\n           <div id="leftThing">\n             <ion-icon class="ion-md-icon" name="card"></ion-icon>\n           </div>\n           <div id="rightThing">\n             <ion-item no-lines>\n               <ion-label>Pay via PayPal</ion-label>\n               <ion-radio value="pay_via_paypal"></ion-radio>\n             </ion-item>\n           </div>\n         </div> -->\n\n        <!-- <div id="container">\n            <div id="leftThing">\n              <ion-icon class="ion-md-icon" ios="ios-phone-portrait" md="md-phone-portrait"></ion-icon>\n            </div>\n            <div id="rightThing">\n              <ion-item no-lines>\n                <ion-label>Pay via Wallet</ion-label>\n                <ion-radio value="pay_via_wallet"></ion-radio>\n              </ion-item>\n            </div>\n          </div> -->\n\n      </ion-list>\n    </ion-item-group>\n\n  </div>\n\n  <!--    <div style=" margin-top:2rem; padding-left: 16px">-->\n\n  <!--        <ion-item-group>-->\n  <!--          <ion-label stacked color="primary">Delivery Options</ion-label>-->\n  <!--          <ion-list radio-group [(ngModel)]="userData.delivery_option">-->\n\n  <!--            <div id="container">-->\n  <!--              <div id="leftThing">-->\n  <!--                <ion-icon class="ion-md-icon" name="home"></ion-icon>-->\n  <!--              </div>-->\n  <!--              <div id="rightThing">-->\n  <!--                <ion-item no-lines>-->\n  <!--                  <ion-label>Home Delivery</ion-label>-->\n  <!--                  <ion-radio value="home_delivery"></ion-radio>-->\n  <!--                </ion-item>-->\n  <!--              </div>-->\n  <!--            </div>-->\n\n  <!--            <div id="container">-->\n  <!--              <div id="leftThing">-->\n  <!--                <ion-icon class="ion-md-icon" name="cart"></ion-icon>-->\n  <!--              </div>-->\n  <!--              <div id="rightThing">-->\n  <!--                <ion-item no-lines>-->\n  <!--                  <ion-label>Pick From Store</ion-label>-->\n  <!--                  <ion-radio value="pick_from_store"></ion-radio>-->\n  <!--                </ion-item>-->\n  <!--              </div>-->\n  <!--            </div>-->\n\n  <!--          </ion-list>-->\n  <!--        </ion-item-group>-->\n\n  <!--      </div>-->\n\n  <!-- <div class="subbtn">\n        <button ion-button round (click)="onSubmit()">\n            Submit\n        </button>\n    </div> -->\n\n</ion-content>\n\n\n<ion-footer no-border>\n  <div class="fixed-bottom">\n\n    <div class="price-section">\n      <h3 class="d-flex">Sub Total <span class="end">BSD$ {{amount}}</span></h3>\n      <h3 class="d-flex">Delivery Amount <span class="end">BSD$ {{shipping}}</span></h3>\n			<h3 *ngIf="expedite_activated" class="d-flex">Expedite Delivery Amount <span class="end">BSD$ {{expedite_amount}}</span></h3>\n      <h3 class="d-flex">Payable Amount <span class="end">BSD$ {{finalBill}}</span></h3>\n      <!-- <ion-label class="total-amount">{{"amt_pybl" | translate}}<span [innerHTML]="total_html"></span></ion-label> -->\n    </div>\n\n    <p (click)="onSubmit()" text-center class="btn">\n      Submit\n      <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n    </p>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\address\address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderConfirmPage = /** @class */ (function () {
    function OrderConfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderid = navParams.get("OrderId");
        this.clearcart();
    }
    OrderConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderConfirmPage');
    };
    OrderConfirmPage.prototype.clearcart = function () {
        __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */].cartData = [];
    };
    OrderConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-confirm',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\order-confirm\order-confirm.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle icon-only>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Order Confirmation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light">\n  <div class="img-holder"><img class="confirmimg" src="assets/imgs/confirmed.png" /></div>\n  <h2 class="textthanks">Thank You</h2>\n<p class="textorderplaced">Your Order has been Placed !!</p>\n\n<div>\n</div>\n<p class="textorderno">Your Order Number: <span class="orderno">{{orderid}}</span></p>\n<!-- <p class="textaddional">All the details of the Shipping of the order, status & delivery shall be sent to you via an sms</p> -->\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\order-confirm\order-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], OrderConfirmPage);
    return OrderConfirmPage;
}());

//# sourceMappingURL=order-confirm.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_and_conditions_terms_and_conditions__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(platform, navCtrl, navParams, menuCtrl, authService, alertCtrl, loadingCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "name": "", "mobile": "", "address": "", "email": "", "password": "", "pID": "" };
        this.emialFlag = false;
        this.menuCtrl.enable(false);
    }
    RegisterPage.prototype.onTermsAndConditions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]);
    };
    RegisterPage.prototype.showDisclaimer = function () {
        this.showAlertInfo111();
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Fetching Server",
            duration: 10000
        });
        loader.present();
        this.regex = new RegExp("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})");
        // console.log(this.regex.test(this.userData.email));
        this.emialFlag = this.regex.test(this.userData.email);
        if (this.userData.email == "" || this.userData.password == "" || this.userData.name == "" || this.userData.mobile == "" || this.userData.address == "") {
            loader.dismiss();
            this.showalertinfo1();
        }
        else if (this.emialFlag == false) {
            loader.dismiss();
            this.showalertinfo2();
        }
        else {
            if (this.userData.email != "" && this.userData.password != "" && this.userData.name != "" && this.userData.mobile != "" && this.userData.address != "") {
                this.pID = localStorage.getItem("pID");
                this.userData.pID = this.pID;
                this.authService.postData(this.userData, "register").then(function (result) {
                    loader.dismiss();
                    _this.resposeData = result;
                    if (_this.resposeData.userData) {
                        _this.showsucessinfo();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    }
                    else if (_this.resposeData.error) {
                        _this.showalertinfo();
                    }
                }, function (err) {
                    loader.dismiss();
                    _this.showalertinfo();
                    //Connection failed message
                });
            }
            else {
                loader.dismiss();
                this.showalertinfo1();
            }
        }
    };
    RegisterPage.prototype.showalertinfo = function () {
        var alert = this.alertCtrl.create({
            subTitle: "This email already exists. try logging in",
            buttons: ["OK"]
        });
        alert.present();
    };
    RegisterPage.prototype.showalertinfo1 = function () {
        var alert = this.alertCtrl.create({
            subTitle: "Provide Complete Information",
            buttons: ["OK"]
        });
        alert.present();
    };
    RegisterPage.prototype.showalertinfo2 = function () {
        var alert = this.alertCtrl.create({
            subTitle: "Provide a valid email address!",
            buttons: ["OK"]
        });
        alert.present();
    };
    RegisterPage.prototype.showsucessinfo = function () {
        var alert = this.alertCtrl.create({
            title: "Done",
            subTitle: "Registration Successful",
            buttons: ["OK"]
        });
        alert.present();
    };
    RegisterPage.prototype.showAlertInfo111 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Disclaimer!",
            subTitle: "Prices seen on app are not applicable in the store!",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel');
                        _this.platform.exitApp();
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Continue Registration');
                        _this.register();
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    RegisterPage.prototype.onlogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>REGISTER</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top padding-left padding-right>\n\n  <ion-list no-lines class="form">\n\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" text-right placeholder="" [(ngModel)]="userData.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-phone-portrait" item-start></ion-icon>\n      <ion-label floating>Phone#</ion-label>\n      <ion-input type="tel" text-right placeholder="" [(ngModel)]="userData.mobile"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-mail" item-start></ion-icon>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" text-right placeholder="" [(ngModel)]="userData.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-lock" item-start></ion-icon>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" text-right placeholder="" [(ngModel)]="userData.password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-map" item-start></ion-icon>\n      <ion-label floating>Address</ion-label>\n      <ion-input type="text" text-right [(ngModel)]="userData.address"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <h6>Already have an Account? <span><a href="#" (click)="onlogin()">Login</a></span></h6>\n\n</ion-content>\n\n<ion-footer no-border padding-left padding-right>\n  <button ion-button block (click)="register()">Register</button>\n</ion-footer>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_desc_product_desc__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OffersPage = /** @class */ (function () {
    function OffersPage(navCtrl, navParams, modalCtrl, alertCtrl, auth, toastController, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.mPage = 1;
        this.pageLimit = 10;
        this.postData = {
            token: "",
            page: "",
            user_id: ""
        };
        this.offersFullData = [];
        this.category = "";
        this.iteminfo = "";
        this.itemdatafull = "";
        this.itemFullArray = [];
        this.mPage = 1;
        this.baseUrlImage = auth.getimage();
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userDetails.page = this.mPage;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.postData.page = this.userDetails.page;
        this.getofferdata();
    }
    OffersPage.prototype.gotocart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
    };
    OffersPage.prototype.getofferdata = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "offers").then(function (result) {
            _this.resposeData = result;
            _this.offersFullData = _this.resposeData.offersData;
            _this.itemdatafull = _this.offersFullData;
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    OffersPage.prototype.openProductDetailPage = function (itemId, itemName, itemImage, itemDesc, itemQuantity, itemQuantityType, itemPrice) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_desc_product_desc__["a" /* ProductDescPage */], {
            itemId: itemId,
            itemName: itemName,
            itemDesc: itemDesc,
            itemQuantity: itemQuantity,
            itemQuantityType: itemQuantityType,
            itemPrice: itemPrice,
            itemImage: itemImage
        });
    };
    // addToCartProd(itemid:any, itemname:any, itemquantity:any, itemquantitytype:any, itemprice:any, itemimage:any, selectedQuantity:any) {
    //   HomePage.Instance.storeToCart(itemid,itemname,itemquantity,itemquantitytype,itemprice, itemimage,selectedQuantity);
    //   this.showAddCartMsg();
    // }
    OffersPage.prototype.showAddCartMsg = function () {
        var toast = this.toastController.create({
            message: "Product Added to Cart!",
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    OffersPage.prototype.cartCounterManager = function () {
        return __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].cartData.length;
    };
    OffersPage.prototype.doInfinite1 = function (infiniteScroll) {
        var _this = this;
        this.mPage = this.mPage + 1;
        this.userDetails.page = this.mPage;
        this.postData.page = this.userDetails.page;
        console.log("PAGE NUMBER AFTER INCREMENT: ", this.userDetails.page);
        this.auth.postData(this.postData, "offers").then(function (result) {
            _this.resposeData = result;
            _this.offersFullData = _this.resposeData.offersData;
            console.log("SIZE OF RESULT: ", _this.offersFullData.length);
            if (_this.offersFullData.length < _this.pageLimit) {
                infiniteScroll.enable(false);
            }
            for (var i = 0; i < _this.offersFullData.length; i++) {
                _this.itemdatafull.push(_this.offersFullData[i]);
            }
            infiniteScroll.complete();
        }, function (err) {
        });
    }; // End doInfinite1
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offers',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\offers\offers.html"*/'<ion-header style="background-color: #2cbfb1;">\n  <ion-navbar no-border-bottom>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Offers</ion-title>\n\n      <ion-buttons end class="cartbadge">\n          <button ion-button (click)="gotocart()">\n              <ion-icon name="ios-cart"></ion-icon>\n            </button><ion-badge item-end>{{cartCounterManager()}}</ion-badge>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content no-padding style="background-image: url(././assets/imgs/bg.png);background-color:white;" class="welcome-background" >\n\n    <div class="offersproduct">\n      <ion-card class="myCard" *ngFor="let item of itemdatafull;  let i = index;">\n        <h3 class="text-offer">New</h3>\n\n        <div *ngIf="item.out_of_stock != 1">\n          <img (click)="openProductDetailPage(item.id,item.name,item.image,item.description,item.quantity,item.quantitytype,item.price)" class="p-2" src="{{baseUrlImage}}{{item.image}}">\n          <ion-card-header>\n            <h2 class="text-center">{{item.name}}</h2>\n          </ion-card-header>\n        </div>\n        <div *ngIf="item.out_of_stock != 0">\n          <img class="p-2" src="{{baseUrlImage}}{{item.image}}">\n          <div class="myOverlay">\n            <div class="card-subtitle"><strong>OUT OF STOCK</strong></div>\n          </div>\n          <ion-card-header>\n            <h2 style="color: grey" class="text-center">{{item.name}}</h2>\n          </ion-card-header>\n        </div>\n        <!-- <ion-card-content>\n            <div class="quantity">{{item.quantity}} {{item.quantitytype}}</div> <div class="price">{{item.price | currency}}</div>\n            <div class="btn-cart"><button ion-button round (click)="addToCartProd(item.id,item.name,item.quantity,item.quantitytype,item.price, item.image)"><ion-icon name="md-add-circle"></ion-icon>&nbsp;Add to Cart</button>\n            </div>\n        </ion-card-content> -->\n      </ion-card>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite1($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n    </ion-content>\n\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\offers\offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_placed_order_placed__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderHistoryPage = /** @class */ (function () {
    function OrderHistoryPage(auth, navCtrl, navParams, alertCtrl, loadingCtrl, storage) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.mPage = 1;
        this.pageLimit = 10;
        this.postData = {
            token: "",
            page: "",
            user_id: ""
        };
        this.mPage = 1;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userDetails.page = this.mPage;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.postData.page = this.userDetails.page;
        this.getorderhistory();
    }
    OrderHistoryPage.prototype.openOrderDetailPage = function (orderid, fname, lname, area, address, mobile, ordertime, delivery_option, delivery_date, pickup_date, pickup_time_from, pickup_time_to, delivery_time_from, delivery_time_to, delivery_fee) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_placed_order_placed__["a" /* OrderPlacedPage */], { orderid: orderid, fname: fname, lname: lname, area: area, address: address, mobile: mobile, ordertime: ordertime, delivery_option: delivery_option, delivery_date: delivery_date, pickup_date: pickup_date, pickup_time_from: pickup_time_from, pickup_time_to: pickup_time_to, delivery_time_from: delivery_time_from, delivery_time_to: delivery_time_to, delivery_fee: delivery_fee });
        console.log(orderid);
    };
    OrderHistoryPage.prototype.openReturnProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    };
    OrderHistoryPage.prototype.getorderhistory = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Getting Data..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.postData, "fetchorder").then(function (result) {
            _this.resposeData = result;
            _this.orderdata = _this.resposeData.OrderData;
            _this.allOrderData = _this.orderdata;
            // console.log(this.orderdata.length);
            if (_this.orderdata.length == 0) {
                _this.showtxt = true;
                _this.showHisdata = false;
            }
            else {
                _this.showtxt = false;
                _this.showHisdata = true;
                // console.log('total orders data: ' + JSON.stringify(this.orderdata));
            }
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    OrderHistoryPage.prototype.doInfinite2 = function (infiniteScroll) {
        var _this = this;
        this.mPage = this.mPage + 1;
        this.userDetails.page = this.mPage;
        this.postData.page = this.userDetails.page;
        console.log("PAGE NUMBER AFTER INCREMENT: ", this.userDetails.page);
        this.auth.postData(this.postData, "fetchorder").then(function (result) {
            _this.resposeData = result;
            _this.orderdata = _this.resposeData.OrderData;
            console.log("SIZE OF RESULT: ", _this.orderdata.length);
            if (_this.orderdata.length < _this.pageLimit) {
                infiniteScroll.enable(false);
            }
            for (var i = 0; i < _this.orderdata.length; i++) {
                _this.allOrderData.push(_this.orderdata[i]);
            }
            infiniteScroll.complete();
        }, function (err) {
        });
    }; // End doInfinite1
    OrderHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-order-history",template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\order-history\order-history.html"*/'<ion-header style="background-color: #2cbfb1;">\n    <ion-navbar>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu" style="color:#fff; "></ion-icon>\n      </button>\n      <ion-title style="color:#fff; ">MY ORDERS</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content class="bg-light">\n\n    <div *ngIf="showtxt">\n        <ion-grid>\n          <ion-row class="emptycart">\n            <ion-col>\n              <p>You have no orders in your orders list!</p></ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <ion-list *ngIf="showHisdata">\n        <ion-card no-padding *ngFor="let item of allOrderData;  let i = index;">\n          <ion-row class="orderholder">\n            <ion-col>\n              <h2 class="orderid">ORDER ID: {{item.orderid}}</h2>\n              <h3 class="ordertime">Placed on <span>{{item.ordertime}}</span></h3>\n              <!-- <p *ngIf="item.status == \'Received\'"><img src="././assets/imgs/received.png">Received</p> -->\n              <p *ngIf="item.status == \'Confirmed\'"><img src="././assets/imgs/confirmed.png">Order Confirmed</p>\n              <p *ngIf="item.status == \'Picked Up\'"><img src="././assets/imgs/pick_active.png">Order Picked Up</p>\n              <p *ngIf="item.status == \'Processing\'"><img src="././assets/imgs/inporcess.png">Order In Process</p>\n              <p *ngIf="item.status == \'Dispatched\'"><img src="././assets/imgs/dispatched.png">Order Dispatched</p>\n              <p *ngIf="item.status == \'Delivered\'"><img src="././assets/imgs/delivered.png">Order Delivered</p>\n              <!-- <p *ngIf="item.status == \'Cancelled\'"><img src="././assets/imgs/cancel.png">Cancelled</p> -->\n            </ion-col>\n          </ion-row>\n          <ion-row >\n            <ion-col></ion-col>\n            <ion-col></ion-col>\n            <ion-col></ion-col>\n            <ion-col>\n              <button ion-button icon-left clear (click)="openOrderDetailPage(item.orderid,item.fname,item.lname,item.area,item.address,item.mobile,item.ordertime,item.delivery_option,item.delivery_date,item.pickup_date,item.pickup_time_from,item.pickup_time_to,item.delivery_time_from,item.delivery_time_to,item.delivery_fee)">\n                <div>Details</div>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-list>\n      <ion-infinite-scroll (ionInfinite)="doInfinite2($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\order-history\order-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], OrderHistoryPage);
    return OrderHistoryPage;
}());

//# sourceMappingURL=order-history.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = /** @class */ (function () {
    function ContactPage(alertCtrl, navCtrl, auth, toastCtrl, formBuilder, navParams, loadingCtrl, http) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.postData = {
            token: "",
            user_id: "",
            cname: "",
            cmobile: "",
            cmsg: ""
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.todo = this.formBuilder.group({
            cname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            cmobile: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            cmsg: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    ContactPage.prototype.logForm = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Sending Message..",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.postData.cname = this.todo.value.cname;
        this.postData.cmobile = this.todo.value.cmobile;
        this.postData.cmsg = this.todo.value.cmsg;
        this.auth.postData(this.postData, "sendmessage").then(function (result) {
            zest.dismiss();
            _this.resposeData = result;
            if (_this.resposeData.success) {
                _this.ticket = _this.resposeData.success;
                _this.messagesend();
                _this.navCtrl.pop();
            }
            else {
                console.log("Error");
            }
        }, function (err) {
            zest.dismiss();
        });
    };
    ContactPage.prototype.messagesend = function () {
        var alert = this.alertCtrl.create({
            title: "Message Send",
            subTitle: "Thanks for getting in touch. We will contact you shortly!",
            buttons: ["Close"]
        });
        alert.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-contact",template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="background-color: #2cbfb1;">\n\n  <ion-navbar>\n    <ion-title style="color:#fff;">Contact</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="todo" (ngSubmit)="logForm()">\n        <ion-item>\n            <ion-label floating color="primary"> Name</ion-label>\n          <ion-input type="text" formControlName="cname"></ion-input>\n        </ion-item>\n          <ion-item>\n              <ion-label floating color="primary">Phone Number</ion-label>\n              <ion-input type="number" formControlName="cmobile" max="10"></ion-input>\n          </ion-item>\n        <ion-item>\n            <ion-label floating color="primary">Message</ion-label>\n              <ion-textarea rows="10" formControlName="cmsg"></ion-textarea>\n        </ion-item>\n        <div class="contactbtn">\n        <button ion-button round type="submit" [disabled]="!todo.valid">Send</button>\n      </div>\n      </form>\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDatetimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SelectDatetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeSlot = /** @class */ (function () {
    function TimeSlot() {
    }
    return TimeSlot;
}());
var SelectDatetimePage = /** @class */ (function () {
    function SelectDatetimePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.dnt = "pick";
        this.dates = [];
        this.pickUpDates = [];
        this.deliveryDates = [];
        this.datePickupSelectedIndex = -1;
        this.timePickupSelectedIndex = -1;
        this.dateDeliverySelectedIndex = -1;
        this.timeDeliverySelectedIndex = -1;
        this.selectionDateHeading = "Select Pick up Date";
        this.selectionTimeHeading = "Select Pick up Time";
        this.weekDaysTrans = new Array();
        this.weekDaysTrans.push('SUN');
        this.weekDaysTrans.push('MON');
        this.weekDaysTrans.push('TUE');
        this.weekDaysTrans.push('WED');
        this.weekDaysTrans.push('THU');
        this.weekDaysTrans.push('FRI');
        this.weekDaysTrans.push('SAT');
        this.monthsTrans = new Array();
        this.monthsTrans.push('JAN');
        this.monthsTrans.push('FEB');
        this.monthsTrans.push('MAR');
        this.monthsTrans.push('APR');
        this.monthsTrans.push('MAY');
        this.monthsTrans.push('JUN');
        this.monthsTrans.push('JUL');
        this.monthsTrans.push('AUG');
        this.monthsTrans.push('SEP');
        this.monthsTrans.push('OCT');
        this.monthsTrans.push('NOV');
        this.monthsTrans.push('DEC');
        for (var i = 0; i < 15; i++) {
            var d = new Date();
            d.setDate(d.getDate() + i);
            this.dates.push(d);
        }
        for (var i = 0; i < 7; i++) {
            this.pickUpDates.push(this.dates[i]);
        }
        this.setupAvailability();
        this.selectpickDate(0);
        this.selectDate(0);
        this.selectTime(0);
    }
    SelectDatetimePage.prototype.setupAvailability = function () {
        this.availabilityTimes = new Array();
        for (var i = 0; i < 7; i++) {
            this.availabilityTimes.push(new Array());
        }
        var timeSlots = [];
        this.tss = new TimeSlot();
        this.tss.id = 0;
        this.tss.day = "MON";
        this.tss.start_time = "9:00 am:";
        this.tss.end_time = "10:00 am:";
        this.tss.time_text = "9:00:am to 10:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 1;
        this.tss.day = "MON";
        this.tss.start_time = "10:00 am:";
        this.tss.end_time = "11:00 am:";
        this.tss.time_text = "10:00:am to 11:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 2;
        this.tss.day = "MON";
        this.tss.start_time = "11:00 am:";
        this.tss.end_time = "12:00 pm:";
        this.tss.time_text = "11:00:am to 12:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 3;
        this.tss.day = "MON";
        this.tss.start_time = "12:00 pm:";
        this.tss.end_time = "1:00 pm:";
        this.tss.time_text = "12:00:pm to 1:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 4;
        this.tss.day = "MON";
        this.tss.start_time = "1:00 pm:";
        this.tss.end_time = "2:00 pm:";
        this.tss.time_text = "1:00:pm to 2:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 5;
        this.tss.day = "MON";
        this.tss.start_time = "2:00 pm:";
        this.tss.end_time = "3:00 pm:";
        this.tss.time_text = "2:00:pm to 3:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 6;
        this.tss.day = "MON";
        this.tss.start_time = "3:00 pm:";
        this.tss.end_time = "4:00 pm:";
        this.tss.time_text = "3:00:pm to 4:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 7;
        this.tss.day = "MON";
        this.tss.start_time = "4:00 pm:";
        this.tss.end_time = "5:00 pm:";
        this.tss.time_text = "4:00:pm to 5:00:pm";
        timeSlots.push(this.tss);
        // TUESDAY
        this.tss = new TimeSlot();
        this.tss.id = 0;
        this.tss.day = "TUE";
        this.tss.start_time = "9:00 am:";
        this.tss.end_time = "10:00 am:";
        this.tss.time_text = "9:00:am to 10:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 1;
        this.tss.day = "TUE";
        this.tss.start_time = "10:00 am:";
        this.tss.end_time = "11:00 am:";
        this.tss.time_text = "10:00:am to 11:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 2;
        this.tss.day = "TUE";
        this.tss.start_time = "11:00 am:";
        this.tss.end_time = "12:00 pm:";
        this.tss.time_text = "11:00:am to 12:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 3;
        this.tss.day = "TUE";
        this.tss.start_time = "12:00 pm:";
        this.tss.end_time = "1:00 pm:";
        this.tss.time_text = "12:00:pm to 1:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 4;
        this.tss.day = "TUE";
        this.tss.start_time = "1:00 pm:";
        this.tss.end_time = "2:00 pm:";
        this.tss.time_text = "1:00:pm to 2:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 5;
        this.tss.day = "TUE";
        this.tss.start_time = "2:00 pm:";
        this.tss.end_time = "3:00 pm:";
        this.tss.time_text = "2:00:pm to 3:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 6;
        this.tss.day = "TUE";
        this.tss.start_time = "3:00 pm:";
        this.tss.end_time = "4:00 pm:";
        this.tss.time_text = "3:00:pm to 4:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 7;
        this.tss.day = "TUE";
        this.tss.start_time = "4:00 pm:";
        this.tss.end_time = "5:00 pm:";
        this.tss.time_text = "4:00:pm to 5:00:pm";
        timeSlots.push(this.tss);
        // WEDNESDAY
        this.tss = new TimeSlot();
        this.tss.id = 0;
        this.tss.day = "WED";
        this.tss.start_time = "9:00 am:";
        this.tss.end_time = "10:00 am:";
        this.tss.time_text = "9:00:am to 10:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 1;
        this.tss.day = "WED";
        this.tss.start_time = "10:00 am:";
        this.tss.end_time = "11:00 am:";
        this.tss.time_text = "10:00:am to 11:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 2;
        this.tss.day = "WED";
        this.tss.start_time = "11:00 am:";
        this.tss.end_time = "12:00 pm:";
        this.tss.time_text = "11:00:am to 12:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 3;
        this.tss.day = "WED";
        this.tss.start_time = "12:00 pm:";
        this.tss.end_time = "1:00 pm:";
        this.tss.time_text = "12:00:pm to 1:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 4;
        this.tss.day = "WED";
        this.tss.start_time = "1:00 pm:";
        this.tss.end_time = "2:00 pm:";
        this.tss.time_text = "1:00:pm to 2:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 5;
        this.tss.day = "WED";
        this.tss.start_time = "2:00 pm:";
        this.tss.end_time = "3:00 pm:";
        this.tss.time_text = "2:00:pm to 3:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 6;
        this.tss.day = "WED";
        this.tss.start_time = "3:00 pm:";
        this.tss.end_time = "4:00 pm:";
        this.tss.time_text = "3:00:pm to 4:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 7;
        this.tss.day = "WED";
        this.tss.start_time = "4:00 pm:";
        this.tss.end_time = "5:00 pm:";
        this.tss.time_text = "4:00:pm to 5:00:pm";
        timeSlots.push(this.tss);
        // THURSDAY
        this.tss = new TimeSlot();
        this.tss.id = 0;
        this.tss.day = "THU";
        this.tss.start_time = "9:00 am:";
        this.tss.end_time = "10:00 am:";
        this.tss.time_text = "9:00:am to 10:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 1;
        this.tss.day = "THU";
        this.tss.start_time = "10:00 am:";
        this.tss.end_time = "11:00 am:";
        this.tss.time_text = "10:00:am to 11:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 2;
        this.tss.day = "THU";
        this.tss.start_time = "11:00 am:";
        this.tss.end_time = "12:00 pm:";
        this.tss.time_text = "11:00:am to 12:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 3;
        this.tss.day = "THU";
        this.tss.start_time = "12:00 pm:";
        this.tss.end_time = "1:00 pm:";
        this.tss.time_text = "12:00:pm to 1:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 4;
        this.tss.day = "THU";
        this.tss.start_time = "1:00 pm:";
        this.tss.end_time = "2:00 pm:";
        this.tss.time_text = "1:00:pm to 2:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 5;
        this.tss.day = "THU";
        this.tss.start_time = "2:00 pm:";
        this.tss.end_time = "3:00 pm:";
        this.tss.time_text = "2:00:pm to 3:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 6;
        this.tss.day = "THU";
        this.tss.start_time = "3:00 pm:";
        this.tss.end_time = "4:00 pm:";
        this.tss.time_text = "3:00:pm to 4:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 7;
        this.tss.day = "THU";
        this.tss.start_time = "4:00 pm:";
        this.tss.end_time = "5:00 pm:";
        this.tss.time_text = "4:00:pm to 5:00:pm";
        timeSlots.push(this.tss);
        // FRIDAY
        this.tss = new TimeSlot();
        this.tss.id = 0;
        this.tss.day = "FRI";
        this.tss.start_time = "9:00 am:";
        this.tss.end_time = "10:00 am:";
        this.tss.time_text = "9:00:am to 10:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 1;
        this.tss.day = "FRI";
        this.tss.start_time = "10:00 am:";
        this.tss.end_time = "11:00 am:";
        this.tss.time_text = "10:00:am to 11:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 2;
        this.tss.day = "FRI";
        this.tss.start_time = "11:00 am:";
        this.tss.end_time = "12:00 pm:";
        this.tss.time_text = "11:00:am to 12:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 3;
        this.tss.day = "FRI";
        this.tss.start_time = "12:00 pm:";
        this.tss.end_time = "1:00 pm:";
        this.tss.time_text = "12:00:pm to 1:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 4;
        this.tss.day = "FRI";
        this.tss.start_time = "1:00 pm:";
        this.tss.end_time = "2:00 pm:";
        this.tss.time_text = "1:00:pm to 2:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 5;
        this.tss.day = "FRI";
        this.tss.start_time = "2:00 pm:";
        this.tss.end_time = "3:00 pm:";
        this.tss.time_text = "2:00:pm to 3:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 6;
        this.tss.day = "FRI";
        this.tss.start_time = "3:00 pm:";
        this.tss.end_time = "4:00 pm:";
        this.tss.time_text = "3:00:pm to 4:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 7;
        this.tss.day = "FRI";
        this.tss.start_time = "4:00 pm:";
        this.tss.end_time = "5:00 pm:";
        this.tss.time_text = "4:00:pm to 5:00:pm";
        timeSlots.push(this.tss);
        // SATURDAY
        this.tss = new TimeSlot();
        this.tss.id = 0;
        this.tss.day = "SAT";
        this.tss.start_time = "9:00 am:";
        this.tss.end_time = "10:00 am:";
        this.tss.time_text = "9:00:am to 10:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 1;
        this.tss.day = "SAT";
        this.tss.start_time = "10:00 am:";
        this.tss.end_time = "11:00 am:";
        this.tss.time_text = "10:00:am to 11:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 2;
        this.tss.day = "SAT";
        this.tss.start_time = "11:00 am:";
        this.tss.end_time = "12:00 pm:";
        this.tss.time_text = "11:00:am to 12:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 3;
        this.tss.day = "SAT";
        this.tss.start_time = "12:00 pm:";
        this.tss.end_time = "1:00 pm:";
        this.tss.time_text = "12:00:pm to 1:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 4;
        this.tss.day = "SAT";
        this.tss.start_time = "1:00 pm:";
        this.tss.end_time = "2:00 pm:";
        this.tss.time_text = "1:00:pm to 2:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 5;
        this.tss.day = "SAT";
        this.tss.start_time = "2:00 pm:";
        this.tss.end_time = "3:00 pm:";
        this.tss.time_text = "2:00:pm to 3:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 6;
        this.tss.day = "SAT";
        this.tss.start_time = "3:00 pm:";
        this.tss.end_time = "4:00 pm:";
        this.tss.time_text = "3:00:pm to 4:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 7;
        this.tss.day = "SAT";
        this.tss.start_time = "4:00 pm:";
        this.tss.end_time = "5:00 pm:";
        this.tss.time_text = "4:00:pm to 5:00:pm";
        timeSlots.push(this.tss);
        // SUNDAY
        this.tss = new TimeSlot();
        this.tss.id = 0;
        this.tss.day = "SUN";
        this.tss.start_time = "9:00 am:";
        this.tss.end_time = "10:00 am:";
        this.tss.time_text = "9:00:am to 10:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 1;
        this.tss.day = "SUN";
        this.tss.start_time = "10:00 am:";
        this.tss.end_time = "11:00 am:";
        this.tss.time_text = "10:00:am to 11:00:am";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 2;
        this.tss.day = "SUN";
        this.tss.start_time = "11:00 am:";
        this.tss.end_time = "12:00 pm:";
        this.tss.time_text = "11:00:am to 12:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 3;
        this.tss.day = "SUN";
        this.tss.start_time = "12:00 pm:";
        this.tss.end_time = "1:00 pm:";
        this.tss.time_text = "12:00:pm to 1:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 4;
        this.tss.day = "SUN";
        this.tss.start_time = "1:00 pm:";
        this.tss.end_time = "2:00 pm:";
        this.tss.time_text = "1:00:pm to 2:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 5;
        this.tss.day = "SUN";
        this.tss.start_time = "2:00 pm:";
        this.tss.end_time = "3:00 pm:";
        this.tss.time_text = "2:00:pm to 3:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 6;
        this.tss.day = "SUN";
        this.tss.start_time = "3:00 pm:";
        this.tss.end_time = "4:00 pm:";
        this.tss.time_text = "3:00:pm to 4:00:pm";
        timeSlots.push(this.tss);
        this.tss = new TimeSlot();
        this.tss.id = 7;
        this.tss.day = "SUN";
        this.tss.start_time = "4:00 pm:";
        this.tss.end_time = "5:00 pm:";
        this.tss.time_text = "4:00:pm to 5:00:pm";
        timeSlots.push(this.tss);
        // let timeSlots: Array<TimeSlot> = JSON.parse(window.localStorage.getItem('klc_time_slots'));
        // console.log('time slots: ' + JSON.stringify(timeSlots));
        if (timeSlots) {
            for (var _i = 0, timeSlots_1 = timeSlots; _i < timeSlots_1.length; _i++) {
                var ts = timeSlots_1[_i];
                ts.time_text = ts.start_time.substr(0, ts.start_time.lastIndexOf(":")) + " - " + ts.end_time.substr(0, ts.end_time.lastIndexOf(":"));
                switch (ts.day) {
                    case "SUN": {
                        this.availabilityTimes[0].push(ts);
                        break;
                    }
                    case "MON": {
                        this.availabilityTimes[1].push(ts);
                        break;
                    }
                    case "TUE": {
                        this.availabilityTimes[2].push(ts);
                        break;
                    }
                    case "WED": {
                        this.availabilityTimes[3].push(ts);
                        break;
                    }
                    case "THU": {
                        this.availabilityTimes[4].push(ts);
                        break;
                    }
                    case "FRI": {
                        this.availabilityTimes[5].push(ts);
                        break;
                    }
                    case "SAT": {
                        this.availabilityTimes[6].push(ts);
                        break;
                    }
                }
            }
        }
        console.log(this.availabilityTimes);
    };
    SelectDatetimePage.prototype.selectDate = function (index) {
        console.log(index);
        if (this.dnt == "pick") {
            if (this.datePickupSelectedIndex != index) {
                this.timePickupSelectedIndex = -1;
                this.pickupDateTime = null;
            }
            this.selectpickDate(index);
            var month = (this.pickUpDates[index].getMonth() + 1);
            this.pickUpDate = this.pickUpDates[index].getDate() + '-' + month + '-' + this.pickUpDates[index].getFullYear();
            this.pickUpDateIndex = index;
            console.log('pick up date: ' + this.pickUpDate + ' index is: ' + this.pickUpDateIndex);
        }
        else {
            if (this.dateDeliverySelectedIndex != index) {
                console.log('selected date for delivery is not equal to index : ' + this.dateDeliverySelectedIndex + ' and : ' + index);
                this.timeDeliverySelectedIndex = -1;
                this.deliveryDateTime = null;
            }
            this.selectDeliverytDate(index);
            var month = (this.deliveryDates[index].getMonth() + 1);
            this.deliveryDate = this.deliveryDates[index].getDate() + '-' + month + '-' + this.deliveryDates[index].getFullYear();
            console.log('delivery date: ' + this.deliveryDate);
        }
    };
    SelectDatetimePage.prototype.selectTime = function (index) {
        if (this.dnt == "pick") {
            // console.log('selected pickup time: ' + JSON.stringify(this.times[index]));
            this.pickUpTimeFrom = this.times[index].start_time;
            this.pickUpTimeFrom = this.pickUpTimeFrom.substring(0, this.pickUpTimeFrom.length - 1);
            this.pickUpTimeTo = this.times[index].end_time;
            this.pickUpTimeTo = this.pickUpTimeTo.substring(0, this.pickUpTimeTo.length - 1);
            console.log('selected pickup time: ' + this.pickUpTimeFrom + ' - ' + this.pickUpTimeTo);
            this.selectpickTime(index);
            this.markPickupDateTime();
        }
        else {
            // console.log('selected delivery time: ' + JSON.stringify(this.times[index]));
            this.deliveryTimeFrom = this.times[index].start_time;
            this.deliveryTimeFrom = this.deliveryTimeFrom.substring(0, this.deliveryTimeFrom.length - 1);
            this.deliveryTimeTo = this.times[index].end_time;
            this.deliveryTimeTo = this.deliveryTimeTo.substring(0, this.deliveryTimeTo.length - 1);
            console.log('selected delivery time: ' + this.deliveryTimeFrom + ' - ' + this.deliveryTimeTo);
            this.selectDeliveryTime(index);
            this.markDeliveryDateTime();
        }
    };
    SelectDatetimePage.prototype.onSegmentChange = function () {
        // this.translate.get((this.dnt == "pick") ? "select_pickdate" : "select_deliverydate").subscribe(value => this.selectionDateHeading = value);
        // this.translate.get((this.dnt == "pick") ? "select_picktime" : "select_deliverytime").subscribe(value => this.selectionTimeHeading = value);
        // let indexToShow = this.dnt == "pick" ? this.datePickupSelectedIndex : this.dateDeliverySelectedIndex;
        // this.selectDate((indexToShow && indexToShow > -1) ? indexToShow : 0);
        console.log('segment changed: ' + this.dnt);
        if (this.dnt == "pick") {
            this.selectDate(0);
            this.selectionTimeHeading = "Select Pick up Time";
            this.selectionDateHeading = "Select Pick up Date";
        }
        else {
            this.deliveryDates = [];
            for (var i = this.pickUpDateIndex + 1; i < 14; i++) {
                this.deliveryDates.push(this.dates[i]);
            }
            console.log('total dates: ' + this.dates.length);
            console.log('selected pickup date index = ' + this.pickUpDateIndex + ' and next date is: ' + this.dates[this.pickUpDateIndex + 1]);
            // console.log('delivery dates: ' + this.deliveryDates);
            this.selectDate(0);
            // this.selectTime(0);
            this.selectionDateHeading = "Select Delivery Date";
            this.selectionTimeHeading = "Select Delivery Pick up Time";
        }
    };
    SelectDatetimePage.prototype.markPickupDateTime = function () {
        if (this.pickUpDates[this.datePickupSelectedIndex] && this.times[this.timePickupSelectedIndex]) {
            this.pickupDateTime = __WEBPACK_IMPORTED_MODULE_2_moment___default()(__WEBPACK_IMPORTED_MODULE_2_moment___default()(this.pickUpDates[this.datePickupSelectedIndex]).format("YYYY-MM-DD") + ' ' + this.times[this.timePickupSelectedIndex].start_time).toDate();
            this.pickupSlot = this.times[this.timePickupSelectedIndex].time_text;
        }
    };
    SelectDatetimePage.prototype.markDeliveryDateTime = function () {
        if (this.deliveryDates[this.dateDeliverySelectedIndex] && this.times[this.timeDeliverySelectedIndex]) {
            this.deliveryDateTime = __WEBPACK_IMPORTED_MODULE_2_moment___default()(__WEBPACK_IMPORTED_MODULE_2_moment___default()(this.deliveryDates[this.dateDeliverySelectedIndex]).format("YYYY-MM-DD") + ' ' + this.times[this.timeDeliverySelectedIndex].start_time).toDate();
            this.deliverySlot = this.times[this.timeDeliverySelectedIndex].time_text;
        }
    };
    SelectDatetimePage.prototype.selectpickDate = function (index) {
        this.datePickupSelectedIndex = index;
        // let nowTime = new Date().getTime();
        // let toShow = new Array<TimeSlot>();
        // for (let tc of this.availabilityTimes[this.dates[this.datePickupSelectedIndex].getDay()]) {
        //   let pickupTime = moment(moment(this.dates[this.datePickupSelectedIndex]).format("YYYY-MM-DD") + ' ' + tc.start_time).valueOf();
        //   if (nowTime <= pickupTime)
        //     toShow.push(tc);
        // }
        // this.times = toShow;
        this.times = this.availabilityTimes[this.dates[this.datePickupSelectedIndex].getDay()];
    };
    SelectDatetimePage.prototype.selectpickTime = function (index) {
        this.timePickupSelectedIndex = index;
    };
    SelectDatetimePage.prototype.selectDeliverytDate = function (index) {
        this.dateDeliverySelectedIndex = index;
        // let nowTime = new Date().getTime();
        // let toShow = new Array<TimeSlot>();
        // for (let tc of this.availabilityTimes[this.dates[this.dateDeliverySelectedIndex].getDay()]) {
        //   let deliveryTime = moment(moment(this.dates[this.dateDeliverySelectedIndex]).format("YYYY-MM-DD") + ' ' + tc.start_time).valueOf();
        //   if (nowTime <= deliveryTime)
        //     toShow.push(tc);
        // }
        // this.times = toShow;
        this.times = this.availabilityTimes[this.dates[this.dateDeliverySelectedIndex].getDay()];
    };
    SelectDatetimePage.prototype.selectDeliveryTime = function (index) {
        this.timeDeliverySelectedIndex = index;
    };
    SelectDatetimePage.prototype.isTimeSelected = function (index) {
        if (this.dnt == "pick") {
            return this.timePickupSelectedIndex == index;
        }
        else {
            return this.timeDeliverySelectedIndex == index;
        }
    };
    SelectDatetimePage.prototype.isDateSelected = function (index) {
        if (this.dnt == "pick") {
            return this.datePickupSelectedIndex == index;
        }
        else {
            return this.dateDeliverySelectedIndex == index;
        }
    };
    SelectDatetimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectDatetimePage');
    };
    SelectDatetimePage.prototype.payment = function () {
        if (!this.pickupDateTime) {
            this.showToast('Select Pick up Time');
        }
        else if (!this.deliveryDateTime) {
            this.dnt = "delivery";
            this.showToast('Select Delivery Time');
        }
        else {
            var nowTime = new Date();
            console.log('delivery time: ' + this.deliveryDateTime);
            console.log('pick up time: ' + this.pickupDateTime);
            console.log('now time: ' + nowTime);
            if (this.pickupDateTime < nowTime) {
                this.showToast("Choosen pickup time has already passed");
            }
            else if (this.deliveryDateTime < nowTime) {
                this.showToast("Choosen delivery time has already passed");
            }
            else if (this.deliveryDateTime <= this.pickupDateTime) {
                this.showToast("Delivery time cannot be before pickup time");
            }
            else {
                console.log('navigate to cart page!');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */], { pickupTimeFrom: this.pickUpTimeFrom, pickupTimeTo: this.pickUpTimeTo, deliveryTimeFrom: this.deliveryTimeFrom, deliveryTimeTo: this.deliveryTimeTo, pickupDate: this.pickUpDate, deliveryDate: this.deliveryDate });
                // this.navCtrl.push(PaymentPage, { pickupTime: this.pickupDateTime.getTime(), pickupSlot: this.pickupSlot, deliveryTime: this.deliveryDateTime.getTime(), deliverySlot: this.deliverySlot });
            }
        }
    };
    SelectDatetimePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SelectDatetimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-datetime',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\select-datetime\select-datetime.html"*/'<!--\n  Generated template for the SelectDatetimePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Date & Time</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top class="select-tab">\n    <ion-segment [(ngModel)]="dnt" (ionChange)="onSegmentChange()">\n      <ion-segment-button value="pick">\n        <span class="pick"></span> PICK UP\n      </ion-segment-button>\n      <ion-segment-button value="delivery">\n        <span class="delivery"></span> DELIVERY\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="bg-light">\n\n  <ion-list no-lines>\n    <div *ngIf="weekDaysTrans && monthsTrans && dnt==\'pick\'" class="select-day">\n      <p class="heading">{{selectionDateHeading}}</p>\n      <ion-scroll scrollX style="height:38px;white-space: nowrap;">\n        <div class="scroll-item" *ngFor="let item of pickUpDates;let i=index">\n          <div class="date-box" [ngClass]="{\'active\':isDateSelected(i)}" (click)="selectDate(i)">\n            {{ weekDaysTrans[item.getDay()]}}, {{item.getDate()}} {{ monthsTrans[item.getMonth()]}}\n          </div>\n        </div>\n      </ion-scroll>\n    </div>\n\n    <div *ngIf="weekDaysTrans && monthsTrans && dnt!=\'pick\'" class="select-day">\n      <p class="heading">{{selectionDateHeading}}</p>\n      <ion-scroll scrollX style="height:38px;white-space: nowrap;">\n        <div class="scroll-item" *ngFor="let item of deliveryDates;let i=index">\n          <div class="date-box" [ngClass]="{\'active\':isDateSelected(i)}" (click)="selectDate(i)">\n            {{ weekDaysTrans[item.getDay()]}}, {{item.getDate()}} {{ monthsTrans[item.getMonth()]}}\n          </div>\n        </div>\n      </ion-scroll>\n    </div>\n\n    <div *ngIf="times && times.length" class="select-time">\n      <p class="heading">{{selectionTimeHeading}}</p>\n      <ion-row no-padding>\n        <ion-col col-6 no-padding *ngFor="let item of times;let j=index">\n          <h6 [ngClass]="{\'active\':isTimeSelected(j)}" (click)="selectTime(j)"><span>{{item.time_text}}</span></h6>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n	<div class="fixed-bootom" (click)="payment()">\n		<ion-row>\n			<ion-col class="next">Next\n				<ion-icon name="ios-arrow-forward-outline"></ion-icon>\n			</ion-col>\n		</ion-row>\n	</div>\n</ion-footer>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\select-datetime\select-datetime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SelectDatetimePage);
    return SelectDatetimePage;
}());

//# sourceMappingURL=select-datetime.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_datetime_select_datetime__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RetailProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RetailProductsPage = /** @class */ (function () {
    function RetailProductsPage(navCtrl, alertCtrl, navParams, auth, toastController) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.toastController = toastController;
        this.noRetailProducts = false;
        this.retailProducts = [];
        this.selectedProductPackages = [];
        this.amount = 0;
        this.page = 1;
        this.pageLimit = 10;
        this.baseUrlImage = auth.getimage();
        this.finalcartdata = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].cartData;
        this.retailProducts = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].retailProductsData.slice(0);
        var data = JSON.parse(localStorage.getItem('userData'));
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
    RetailProductsPage.prototype.openCartPage = function () {
        // add retail produts in cart!
        // this.navCtrl.push(CartPage);
        var flag = false;
        if (__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].cartData.length > 0) {
            console.log('cart is not empty! ');
            __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].cartData.forEach(function (element) {
                if (element.selectedCategory != "Retail") {
                    flag = true;
                }
            });
            if (flag) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__select_datetime_select_datetime__["a" /* SelectDatetimePage */]);
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
            this.showToast('There are no clothes in your cart!');
        }
    };
    RetailProductsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        this.userDetails.page = this.page;
        console.log("PAGE NUMBER AFTER INCREMENT: ", this.userDetails.page);
        this.auth.postData(this.userDetails, "getRetailProducts").then(function (result) {
            _this.resposeData = result;
            _this.homeproductdataSet = _this.resposeData.RetailData;
            console.log("SIZE OF RESULT: ", _this.homeproductdataSet.length);
            if (_this.homeproductdataSet.length < _this.pageLimit) {
                infiniteScroll.enable(false);
            }
            for (var i = 0; i < _this.homeproductdataSet.length; i++) {
                _this.retailProducts.push(_this.homeproductdataSet[i]);
            }
            console.log('total products in retail list are: ' + _this.retailProducts.length);
            infiniteScroll.complete();
        }, function (err) {
        });
    }; // End do
    RetailProductsPage.prototype.showToast = function (message) {
        var toast = this.toastController.create({
            message: message,
            duration: 2000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('onDidDismiss Toast');
        });
        toast.present();
    };
    RetailProductsPage.prototype.cartCounterManager = function () {
        return __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].cartData.length;
    };
    RetailProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RetailProductsPage');
    };
    RetailProductsPage.prototype.ionViewDidEnter = function () {
        this.retailProducts = [];
        this.retailProducts = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].retailProductsData;
        console.log('total products in retail list are (ionViewDidEnter): ' + __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].retailProductsData.length);
        console.log('total products in retail list are (ionViewDidEnter): ' + this.retailProducts.length);
        var data = JSON.parse(localStorage.getItem('userData'));
        this.page = 1;
        this.userDetails = data.userData;
        this.userDetails.page = this.page;
    };
    RetailProductsPage.prototype.getProductPackages = function (index, product) {
        var _this = this;
        //get packages of product!
        // console.log('clicked on retail product with index! ' + index);
        // console.log('clicked on retail product! ' + JSON.stringify(product));
        this.selectedProductPackages = [];
        __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].packagesData.forEach(function (element) {
            if (element.item_id == product.id) {
                _this.selectedProductPackages.push(element);
            }
        });
        var alert = this.alertCtrl.create();
        alert.setTitle("Select Package: ");
        for (var i = 0; i < this.selectedProductPackages.length; i++) {
            alert.addInput({ type: 'radio', label: this.selectedProductPackages[i]['quantity'] + ' ' + this.selectedProductPackages[i]['quantity_type'] + ' - BSD$ ' + this.selectedProductPackages[i]['price'], value: this.selectedProductPackages[i], });
        }
        alert.addButton({
            text: 'cancel', handler: function () {
                console.log('cancel clicked!');
            }
        });
        alert.addButton({
            text: 'ok', handler: function (data) {
                _this.selectedPackage = data;
                if (_this.selectedPackage != undefined) {
                    console.log('selected package: ' + JSON.stringify(_this.selectedPackage));
                    console.log('selected product: ' + JSON.stringify(product));
                    _this.addtocart(product.id, product.name, _this.selectedPackage.quantity, _this.selectedPackage.quantity_type, _this.selectedPackage.price, product.image, 1, product.category);
                }
                else {
                    console.log('NO PACKAGE IS SELECTED!');
                }
            }
        });
        alert.present();
        console.log('packages of selected retail product are: ' + JSON.stringify(this.selectedProductPackages));
    };
    RetailProductsPage.prototype.addtocart = function (itemid, itemname, itemquantity, itemquantitytype, itemprice, itemimage, selectedQuantity, selectedCategory) {
        __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */].Instance.storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemimage, selectedQuantity, selectedCategory);
        this.showAddCartMsg();
    };
    RetailProductsPage.prototype.showAddCartMsg = function () {
        var toast = this.toastController.create({
            message: "Product Added to Cart!",
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    RetailProductsPage.prototype.calculatecart = function () {
        this.amount = 0;
        for (var _i = 0, _a = this.finalcartdata; _i < _a.length; _i++) {
            var item = _a[_i];
            this.amount += parseFloat(item.itemprice) * parseFloat(item.Mquantity);
        }
        return this.amount.toFixed(2).toString();
    };
    RetailProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-retail-products',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\retail-products\retail-products.html"*/'<!--\n  Generated template for the RetailProductsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Retail Products</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-light">\n\n  <div *ngIf="!noRetailProducts" style="margin-top: 8px;" class="cloth-list">\n    <ion-list no-lines>\n      <ion-item *ngFor="let product of retailProducts; let i = index;">\n        <ion-avatar item-start>\n          <img [src]="baseUrlImage + product.image">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{product.name}}</h3>\n        </ion-label>\n\n        <!-- <ion-note class="modify_cart" item-end>\n          Modify Items\n        </ion-note> -->\n        <ion-note item-end (click)="getProductPackages(i, product)">\n          Add to cart\n        </ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="noRetailProducts">\n    <ion-row class="emptycart">\n      <ion-col>\n        <p>No Retail Products Found</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-infinite-scroll *ngIf="!noRetailProducts" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="fixed-bootom" (click)="openCartPage()">\n      <ion-row>\n        <!-- <ion-col col-4 class="cost">{{"total" | translate}} <span [innerHTML]="total_html"></span> </ion-col> -->\n        <ion-col col-4 class="cost">Total <span> {{calculatecart()}}</span> </ion-col>\n        <!-- <ion-col col-4 class="small " text-center>{{cartItems.length}} {{"items" | translate}}</ion-col> -->\n        <ion-col col-4 class="small " text-center>{{cartCounterManager()}} Item(s) addeed</ion-col>\n        <ion-col col-4 class="next" text-end>Next\n          <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\retail-products\retail-products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], RetailProductsPage);
    return RetailProductsPage;
}());

//# sourceMappingURL=retail-products.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscription_details_subscription_details__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubscriptionPage = /** @class */ (function () {
    function SubscriptionPage(navCtrl, auth, navPram, toastCtrl, loadingCtrl, menuCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navPram = navPram;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.getSubscriptions();
    }
    SubscriptionPage_1 = SubscriptionPage;
    SubscriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscriptionPage');
    };
    SubscriptionPage.prototype.openSubscriptionDetails = function (subscription) {
        console.log('view details of subscription: ' + JSON.stringify(subscription));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subscription_details_subscription_details__["a" /* SubscriptionDetailsPage */], { subs: subscription });
    };
    SubscriptionPage.prototype.getSubscriptions = function () {
        var _this = this;
        var zest = this.loadingCtrl.create({
            content: "Fetching Subscription!",
            duration: 20000,
            spinner: 'crescent'
        });
        zest.present();
        this.auth.postData(this.userDetails, "getBags").then(function (result) {
            _this.resposeData = result;
            _this.subFullData = _this.resposeData.BagsData;
            SubscriptionPage_1.bagsData = _this.subFullData;
            console.log('total subscriptions: ' + _this.subFullData.length);
            if (_this.subFullData.length == 0) {
                _this.showtxt = true;
            }
            else {
                _this.showtxt = false;
            }
            console.log('response data: ' + JSON.stringify(_this.subFullData));
            zest.dismiss();
        }, function (err) {
            zest.dismiss();
        });
    };
    SubscriptionPage = SubscriptionPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-subscription',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\subscription\subscription.html"*/'<!--\n  Generated template for the SubscriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PAYPAL SUBSCRIPTION</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-light">\n  <!-- \n  <ion-col>\n    <iframe src="assets/iframeTemplates/paypalSubscription.html" name="ebook-player" id="ebook-player"\n      style="width: 100% !important; height: 35% !important;"></iframe>\n  </ion-col>\n\n  <ion-col>\n    <iframe src="assets/iframeTemplates/paypalSubscription1.html" name="ebook-player" id="ebook-player"\n      style="width: 100% !important; height: 35% !important;"></iframe>\n  </ion-col> -->\n\n  <div *ngIf="showtxt">\n    <ion-grid>\n      <ion-row class="emptycart">\n        <ion-col>\n          <p>No subscriptions are available right now! :(</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-list *ngIf="!emptycart">\n    <ion-card no-padding *ngFor="let item of subFullData;  let i = index;">\n      <ion-row class="orderholder">\n        <ion-col>\n          <h2 class="orderid">{{item.bag_name}}</h2>\n          <h3 class="ordertime">Price: <span style="font-weight: bold;">BSD$ {{item.bag_price}}</span></h3>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n        <ion-col>\n          <button ion-button icon-left clear\n          (click)="openSubscriptionDetails(item)">\n            <div>Details</div>\n          </button>\n          <!-- <button ion-button icon-left clear\n            (click)="openOrderDetailPage(item.orderid,item.fname,item.lname,item.area,item.address,item.mobile,item.ordertime,item.delivery_option,item.delivery_date,item.pickup_date,item.pickup_time_from,item.pickup_time_to,item.delivery_time_from,item.delivery_time_to)">\n            <div>View Details</div>\n          </button> -->\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\subscription\subscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SubscriptionPage);
    return SubscriptionPage;
    var SubscriptionPage_1;
}());

//# sourceMappingURL=subscription.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyWalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MyWalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyWalletPage = /** @class */ (function () {
    function MyWalletPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.postData = {
            token: "",
            user_id: ""
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.postData.user_id = this.userDetails.user_id;
        this.postData.token = this.userDetails.token;
        this.getWalletDetails();
    }
    MyWalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyWalletPage');
    };
    MyWalletPage.prototype.getWalletDetails = function () {
        var _this = this;
        this.auth.postData(this.postData, "fetchwallet").then(function (result) {
            _this.resposeData = result;
            _this.walletData = _this.resposeData.WalletData;
            if (_this.walletData.length == 0) {
                _this.showtxt = true;
                _this.showData = false;
            }
            else {
                _this.showtxt = false;
                _this.showData = true;
            }
        }, function (err) {
            console.log('error: getting wallet details: ', err);
        });
    };
    MyWalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-wallet',template:/*ion-inline-start:"D:\Projects\ionic\SpinWash\src\pages\my-wallet\my-wallet.html"*/'<!--\n  Generated template for the MyWalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Wallet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding style="background-image: url(././assets/imgs/bg.png);background-color:white;" class="welcome-background">\n\n  <div *ngIf="showtxt">\n    <ion-grid>\n      <ion-row class="emptywallet">\n        <ion-col>\n          <p>There Is Nothing In Your Wallet!</p></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="showData">\n\n    <ion-card>\n      <ion-card-header>\n        <h1>Wallet Details</h1>\n      </ion-card-header>\n      <ion-card-content>\n        <p><strong>AMOUNT: </strong>{{walletData[0].amount}}</p>\n<!--        <p><strong>POINTS: </strong>{{walletData[0].points}}</p>-->\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\SpinWash\src\pages\my-wallet\my-wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_hk_apiprovider_hk_apiprovider__["a" /* HkApiproviderProvider */]])
    ], MyWalletPage);
    return MyWalletPage;
}());

//# sourceMappingURL=my-wallet.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HkApiproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HkApiproviderProvider = /** @class */ (function () {
    /*********************************************** */
    function HkApiproviderProvider(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
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
        this.baseUrl = 'http://173.249.13.154:8082/app/';
        this.imagebaseurl = 'http://173.249.13.154:8082/admin/itemimg/';
        this.wsimagebaseurl = "http://173.249.13.154:8082/admin/wsitemimg/";
        this.bannerbaseurl = 'http://173.249.13.154:8082/admin/banner/';
        // imagebaseurl = 'http://62.171.149.49:8082/admin/itemimg/';
        // wsimagebaseurl = "http://62.171.149.49:8082/admin/wsitemimg/"
        // bannerbaseurl = 'http://62.171.149.49:8082/admin/banner/';
        this.shipping = 10;
    }
    HkApiproviderProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            _this.http.post(_this.baseUrl + type, JSON.stringify(credentials), { headers: headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    HkApiproviderProvider.prototype.postData1 = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            _this.http.post(_this.baseUrl + type, "", { headers: headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    HkApiproviderProvider.prototype.getimage = function () {
        return this.imagebaseurl;
    };
    HkApiproviderProvider.prototype.getbanner = function () {
        return this.bannerbaseurl;
    };
    HkApiproviderProvider.prototype.getshippingChargers = function () {
        return this.shipping;
    };
    HkApiproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], HkApiproviderProvider);
    return HkApiproviderProvider;
}());

//# sourceMappingURL=hk-apiprovider.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map