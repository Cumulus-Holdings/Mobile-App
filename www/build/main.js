webpackJsonp([8],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Provider = class Provider {
    constructor() {
        this.userData = null;
        this.token = null;
        this.rawData = null;
        this.url = "istio-ingressgateway-istio-system.apps.ocpclustervj.os.fyre.ibm.com";
        this.accountsUrl = "accounts-api-bankdemo.apps.democluster.emea-dst-techlab.com";
        this.authUrl = "auth-api-bankdemo.apps.democluster.emea-dst-techlab.com";
        this.apiUrl = {
            login: "http://" + this.authUrl + "/authsvc/login",
            signup: "http://" + this.authUrl + "/authsvc/createUser",
            book: "http://" + this.url + "/bookingsvc/book",
            listBookingByUser: "http://" + this.url + "/bookingsvc/listBookingByUser",
            checkin: "http://" + this.url + "/bookingsvc/checkin",
            listFlightsByID: "http://" + this.url + "/listingsvc/listFlights",
            listFlights: "http://" + this.url + "/listingsvc/searchFlights",
            listAllFlights: "http://" + this.url + "/listingsvc/listFlights",
            map: "http://" + this.url + "/mapsvc/getMap",
            email: 'http://' + this.url + "/celerysvc/postEmail",
            addNewAccount: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
            getAccount: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
            getAccountById: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
            getAccountByID: 'http://' + this.accountsUrl + "/accountsvc/listAccountID",
            updateAccount: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
            activate: 'http://' + this.accountsUrl + "/accountsvc/activate",
            paybill: 'http://' + this.accountsUrl + "/accountsvc/bill",
            balanceUpdate: 'http://' + this.accountsUrl + "/accountsvc/balanceUpdate",
            addTransaction: 'http://' + this.accountsUrl + "/accountsvc/transaction",
            deleteAccount: 'http://' + this.accountsUrl + "/accountsvc/listAccount",
            getsessionid: 'http://' + this.url + "/aisvc/session" /*,
            watsoncall: 'http://' +this.url + "/aisvc/watson",
            sms: 'http://' +this.url + "/send",
            odm:'http://' +this.url + "/odm",
            customerfeed: 'http://' + this.accountsUrl + "/accountsvc/customerfeed",
            ledgerfeed: 'http://' + this.accountsUrl + "/accountsvc/ledgerfeed",
            utilitybill: 'http://' + this.accountsUrl + "/accountsvc/utilitybill",
            */
        };
    }
};
Provider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], Provider);

//# sourceMappingURL=provider.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let EmailService = class EmailService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    postEmail(toemail, src, dest) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.email;
        const bodyObject = {
            toemail,
            src,
            dest,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
};
EmailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], EmailService);

//# sourceMappingURL=email.component.service.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ListingService = class ListingService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    listFlights(Year, Month, DayOfMonth, Origin, Dest) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.listFlights;
        const bodyObject = {
            Year: Year,
            Month: Month,
            DayOfMonth: DayOfMonth,
            origin: Origin,
            dest: Dest
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    listAllFlights() {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.listAllFlights;
        return this.http
            .post(link, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    listFlightsByID(ID) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.listFlightsByID + '/' + String(ID);
        return this.http
            .get(link, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
};
ListingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], ListingService);

//# sourceMappingURL=listing.component.service.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_provider__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ContactPage = class ContactPage {
    constructor(navCtrl, provider) {
        this.navCtrl = navCtrl;
        this.provider = provider;
    }
};
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- Profile picture -->\n  <div text-center>\n    <img src="../assets/avatar.png" class="edit-avatar" alt="">\n  </div>\n\n  <!-- Form -->\n\n  <ion-list>\n    <ion-item>\n      <ion-icon name="person" item-start color="tab"></ion-icon>\n      {{provider.userData.FirstName + \' \'}} {{provider.userData.LastName + \' \'}} \n    </ion-item>\n    <ion-item>\n      <ion-icon name="body" item-start color="tab"></ion-icon>\n      {{provider.userData.Age}}  years\n    </ion-item>\n    <ion-item>\n      <ion-icon name="at" item-start color="tab"></ion-icon>\n      {{provider.userData.Email}} \n    </ion-item>\n    <ion-item>\n      <ion-icon name="call" item-start color="tab"></ion-icon>\n      {{provider.userData.Mobile}}  \n    </ion-item>\n  </ion-list>\n\n\n  <!-- Private information form -->\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__provider_provider__["a" /* Provider */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_checkin_service_checkin_component_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_booking_service_booking_component_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_allservices_allservices_component_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offers_offers__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let AboutPage = class AboutPage {
    constructor(navCtrl, provider, checkinService, bookingService, alertCtrl, loadingCtrl, allservicesService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.checkinService = checkinService;
        this.bookingService = bookingService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.allservicesService = allservicesService;
        this.modalCtrl = modalCtrl;
        this.show = null;
    }
    ionViewDidLoad() {
        let loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID => {
            this.show = dataID[0];
            console.log("data isssssssss", this.show);
            loading.dismiss();
        }, (error) => {
            loading.dismiss();
        });
    }
    pay(id, price, product) {
        let profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__offers_offers__["a" /* OffersPage */], { userId: { id: id, price: price, product: product } });
        profileModal.present();
    }
    doRefresh(refresher) {
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID => {
            this.show = dataID[0];
            console.log("data isssssssss", this.show);
            refresher.complete();
        }, (error) => {
            refresher.complete();
        });
        setTimeout(() => {
            console.log("Async operation has ended");
            refresher.complete();
        }, 7000);
    }
};
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: "page-about",template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/about/about.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Bills</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="masters">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf="show">\n    <ion-list>\n      <ng-container *ngFor="let card of show.Billing">\n        <ion-item *ngIf="card.Payed===false">\n          <ion-thumbnail item-start *ngIf="card.Product===\'Home Entertainment\' && card.Payed ===false">\n            <img src="assets/etisalat.png" height="10" width="10">\n          </ion-thumbnail>\n          <ion-thumbnail item-start *ngIf="card.Product===\'Water And Electricity\' && card.Payed ===false">\n            <img src="assets/dewa.png" height="10" width="10">\n          </ion-thumbnail>\n          <ion-thumbnail item-start *ngIf="card.Product===\'Phone\' && card.Payed ===false">\n            <img src="assets/du.png" height="10" width="10">\n          </ion-thumbnail>\n          <h2 *ngIf="card.Payed ===false" >{{card.Product}}</h2>\n          <p *ngIf="card.Payed ===false" >{{card.Price}} DHS</p>\n          <button ion-button clear item-end *ngIf="card.Payed===false" (click)="pay(card._id,card.Price, card.Product)">\n            Pay</button>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n  </ng-container>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n  </footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__provider_provider__["a" /* Provider */],
        __WEBPACK_IMPORTED_MODULE_3__services_checkin_service_checkin_component_service__["a" /* CheckinService */],
        __WEBPACK_IMPORTED_MODULE_4__services_booking_service_booking_component_service__["a" /* BookingService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__services_allservices_allservices_component_service__["a" /* AllservicesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_allservices_allservices_component_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let HomePage = class HomePage {
    constructor(navCtrl, listingService, alertCtrl, loadingCtrl, allservicesService, provider, http) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.allservicesService = allservicesService;
        this.provider = provider;
        this.http = http;
        this._url = "../assets/cards.json";
        this.cards = this.getJSON();
    }
    getJSON() {
        return this.http
            .get(this._url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])((res) => res));
    }
    update(ID) {
        let loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.allservicesService.activate(ID).subscribe(data => {
            this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID => {
                this.data = dataID[0];
                console.log("data newww", this.data);
                loading.dismiss();
                /*
                        this.allservicesService.customerfeed(this.data['CurrentAccount']).subscribe(ledgerfeed=>{
                          console.log('successs')
                        }, (error)=> {
                          console.log(error)
                        })
                */
            }, (error) => {
                loading.dismiss();
            });
        }, (error) => {
            loading.dismiss();
        });
    }
    doRefresh(refresher) {
        console.log('Begin async operation');
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID => {
            this.data = dataID[0];
            console.log("data isssssssss", this.data);
            refresher.complete();
        }, (error) => {
            refresher.complete();
        });
        // setTimeout(() => {
        //   console.log('Async operation has ended');
        // }, 2000);
    }
    go(acc, balance) {
        console.log("heree", acc, balance, this.data['Transaction']);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking__["a" /* BookingPage */], { data: {
                acc: acc,
                balance: balance,
                tx: this.data['Transaction']
            } });
    }
    ionViewDidLoad() {
        console.log("vieww neter");
        let loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID => {
            this.data = dataID[0];
            console.log("data isssssssss", this.data);
            loading.dismiss();
        }, (error) => {
            loading.dismiss();
        });
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: "page-home",template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n        </button>\n      </ion-buttons>\n      <ion-title color="primary">My Account</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n      <ion-list>\n          <ng-container *ngIf="data">\n          <ion-item-sliding no-padding margin-bottom *ngFor="let card of data.Account">\n            <ion-item no-padding lines="none">\n              <ion-grid [class.cardON]="card.Activate===true" [class.cardOFF]="card.Activate===false">\n                <ion-row>\n                  <ion-col class="state">\n                    <div class="msg" (click)="go(card.AccountName, card.Balance)">\n                      <span [class.ON]="card.Activate===true" [class.OFF]="card.Activate===false"></span> \n                      <ng-container *ngIf="card.Activate===true" >\n                      Active\n                      </ng-container>\n                      <ng-container *ngIf="card.Activate===false">\n                          Inactive\n                          </ng-container>\n                    </div>\n                  </ion-col>\n                  <ion-col class="logo" *ngIf="card.AccountName===\'Visa Card\'">\n                    <img class="brand" src="assets/visa.png"  height="30" width="80">\n                  </ion-col>\n                  <ion-col class="logo" *ngIf="card.AccountName===\'American Express\'">\n                      <img class="brand" src="assets/american.png"  height="30" width="80">\n                    </ion-col>\n                    <ion-col class="logo" *ngIf="card.AccountName===\'Master Card\'">\n                        <img class="brand" src="assets/mastercard.png"  height="30" width="80">\n                      </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class="chip">\n                    <img src="assets/chip.png"  height="40" width="50">\n                  </ion-col>\n                </ion-row>\n                <ion-row class="digits">\n                  <ion-col class="number">\n                    123\n                  </ion-col>\n                  <ion-col class="number">\n                    4567\n                  </ion-col>\n                  <ion-col class="number">\n                   567\n                  </ion-col>\n                  <ion-col class="number">\n                    5678\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class="date">\n                    Balance: {{card.Balance}}\n                  </ion-col>\n                  <ion-col class="bank">\n                    cumulus\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item-options padding side="end" color="white" (click)="update(card._id)">\n              <ion-icon id="power" color="primary" name="power"></ion-icon>\n            </ion-item-options>\n          </ion-item-sliding>\n          </ng-container>\n        </ion-list>\n\n    </ion-content>\n  <ion-footer no-border>\n\n    <footer>\n      <p class="copyright">© IBM 2019 </p>\n  </footer>\n  \n  </ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__["a" /* ListingService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services_allservices_allservices_component_service__["a" /* AllservicesService */],
        __WEBPACK_IMPORTED_MODULE_5__provider_provider__["a" /* Provider */],
        __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_email_service_email_component_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_odm_service_odm_component_service__ = __webpack_require__(235);
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
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let BookingPage = class BookingPage {
    constructor(navCtrl, navParams, alertCtrl, bookingService, provider, loadingCtrl, emailService, actionSheetCtrl, odmService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.bookingService = bookingService;
        this.provider = provider;
        this.loadingCtrl = loadingCtrl;
        this.emailService = emailService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.odmService = odmService;
        this.tx = null;
        this.gaugeType = "arch";
        this.gaugeValue = 0;
        this.gaugeLabel = "Amount";
        this.gaugeAppendText = "DHS";
        this.data = navParams.get("data");
        this.gaugeValue = 10000 - this.data['balance'];
        this.tx = this.data['tx'];
        this.cardtype = this.data['acc'];
        console.log("this is data", this.data);
    }
    ionViewDidLoad() {
    }
    ionViewWillLeave() {
    }
    cancel() {
        this.navCtrl.pop();
    }
};
BookingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: "page-booking",template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/booking/booking.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Transaction</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="danger" (click)="cancel()">\n        CANCEL\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col text-center>\n      <!-- <ngx-gauge [type]="gaugeType" [value]="gaugeValue" [label]="gaugeLabel" [min]=0 [max]=10000 [append]="gaugeAppendText">\n      </ngx-gauge> -->\n    </ion-col>\n  </ion-row>\n  <ng-container *ngIf="tx">\n    <div *ngFor="let card of tx">\n  <ion-list no-border *ngIf="card.AccountName === cardtype ">\n\n    <ion-list-header>\n      {{card.Date}}\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'cart\' item-start color="icon"></ion-icon>\n      Product\n      <ion-note item-end>\n        {{card.Product}}\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'cash\' item-start color="icon"></ion-icon>\n      Price\n      <ion-note item-end>\n        {{card.Price}} AED\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'information-circle\' item-start color="icon"></ion-icon>\n      Type\n      <ion-note item-end>\n        {{card.Type}}\n      </ion-note>\n    </ion-item>\n\n\n  </ion-list>\n  </div>\n  </ng-container>\n\n</ion-content>\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n  </footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/booking/booking.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__["a" /* BookingService */],
        __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services_email_service_email_component_service__["a" /* EmailService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_5__services_odm_service_odm_component_service__["a" /* OdmService */]])
], BookingPage);

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service_email_component_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_allservices_allservices_component_service__ = __webpack_require__(40);
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
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let OffersPage = class OffersPage {
    constructor(allservicesService, navCtrl, navParams, bookingService, alertCtrl, loadingCtrl, emailService, provider) {
        this.allservicesService = allservicesService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookingService = bookingService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailService = emailService;
        this.provider = provider;
        console.log('UserId', this.navParams.get('userId'));
        this.bill = this.navParams.get('userId');
    }
    cancel() {
        this.navCtrl.pop();
    }
    ionViewDidLoad() {
        let loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID => {
            this.data = dataID[0];
            console.log("data isssssssss", this.data);
            loading.dismiss();
        }, (error) => {
            loading.dismiss();
        });
        console.log('ionViewDidLoad OffersPage');
    }
    confirm() {
        let loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        console.log(this.pricing);
        let creditbalance = this.pricing.split(",")[1];
        let id = this.pricing.split(",")[0];
        console.log(creditbalance, id);
        let finalcredit = creditbalance - this.bill['price'];
        this.finalcredit = finalcredit;
        console.log(finalcredit);
        let accountname = this.pricing.split(",")[2];
        let date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        console.log(this.data['_id'], "my dataaaaaa");
        if (creditbalance > 0) {
            this.allservicesService.bill(this.bill['id']).subscribe(data => {
                console.log("billinnggggg", data);
                this.allservicesService.balanceUpdate(id, finalcredit).subscribe(databill => {
                    const billingdet = {
                        "_id": this.data['_id'],
                        "credit": this.finalcredit,
                        "accountname": accountname,
                        "date": date
                    };
                    /*
                    this.allservicesService.utilitybill(billingdet).subscribe(utilitybill=>{
                      console.log('suucess')
                    }, error=> {
            
                    })
                    */
                    this.allservicesService.addTransaction(this.data["_id"], this.bill['product'], this.bill['price'], id, accountname, "Bill", date).subscribe(dataID => {
                        const tempo = {
                            "_id": this.data["_id"],
                            "product": this.bill['product'],
                            "price": this.bill['price'],
                            accountname: accountname,
                            Bill: "bill",
                            date: date
                        };
                        /*
                                  this.allservicesService.ledgerfeed(tempo).subscribe(ledgerfeed => {
                                    this.navCtrl.pop();
                                    console.log('suucess')
                                  }, error => {
                                    loading.dismiss()
                                    this.navCtrl.pop();
                                    console.log(error)
                                  })
                        */
                        // this.allservicesService.sms('Your '+ this.bill['product']+' bill has been payed. Current '+accountname+' balance is '+ this.finalcredit,'+971509786313').subscribe(sms=>{
                        //   console.log(sms);
                        //   loading.dismiss()
                        //   this.navCtrl.pop();
                        // },(error)=>{
                        //   console.log(error)
                        //   loading.dismiss()
                        //   this.navCtrl.pop();
                        // })
                    }, (error) => {
                        console.log(error);
                        this.navCtrl.pop();
                        loading.dismiss();
                    });
                }, (error) => {
                    console.log(error);
                    loading.dismiss();
                    this.navCtrl.pop();
                });
            }, (error) => {
                console.log(error);
                loading.dismiss();
                this.navCtrl.pop();
            });
        }
        else {
            console.log("no enough balance");
        }
    }
};
OffersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-offers',template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/offers/offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Payment</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="danger" (click)="cancel()">\n        CANCEL\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-divider color="light">Select Card</ion-item-divider>\n  <ion-list radio-group [(ngModel)]="pricing">\n    <ng-container *ngIf="data">\n      <ng-container *ngFor="let listshow of data.Account">\n    <ion-item *ngIf="listshow.Activate===true">\n      <ion-label>\n        <h3>\n          <ion-icon name="card" item-start></ion-icon>\n          {{listshow.AccountName}}\n        </h3>\n        <h3>\n          <ion-icon name="cash" item-start></ion-icon>\n          {{listshow.Balance}} DHS\n        </h3>\n      </ion-label>\n      <ion-radio value= "{{listshow._id}},{{listshow.Balance}},{{listshow.AccountName}}"></ion-radio>\n    </ion-item>\n    </ng-container>\n    </ng-container>\n  </ion-list>\n        \n  <ion-item>\n      <button ion-button block outline color="tab" (click)="confirm()">Pay</button>\n  </ion-item>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/offers/offers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_allservices_allservices_component_service__["a" /* AllservicesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__["a" /* BookingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services_email_service_email_component_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_4__provider_provider__["a" /* Provider */]])
], OffersPage);

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service_login_component_service__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__awesome_cordova_plugins_status_bar_ngx__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_allservices_allservices_component_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { TabsPage } from "../tabs/tabs";








// import {ServicesService} from "../../services/services/services.component.services.ts"
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let LoginPage = class LoginPage {
    constructor(navCtrl, navParams, loginService, alertCtrl, loadingCtrl, provider, statusBar, allservicesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.provider = provider;
        this.statusBar = statusBar;
        this.allservicesService = allservicesService;
    }
    ionViewWillEnter() {
        let tabs = document.querySelectorAll(".show-tabbar");
        if (tabs !== null) {
            Object.keys(tabs).map(key => {
                tabs[key].style.display = "flex";
            });
        }
    }
    login() {
        this.provider.userData = {
            "UserID": Math.floor(Math.random() * Math.floor(1000)),
            "Email": this.username,
            "FirstName": "",
            "LastName": "",
            "Mobile": ""
        };
        let loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        /*
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID=>{
          console.log("data isss",dataID);
          if(dataID.length===0){
            this.allservicesService.addNewAccount(this.provider.userData["UserID"]).subscribe(insertData=>{
              console.log("data sucesfully inserted",insertData)
              this.navCtrl.push(DashboardPage);
              loading.dismiss();
            },(error)=>{
    
            })
          }
          else{
            this.navCtrl.push(DashboardPage);
            loading.dismiss();
          }
        },(error)=>{
          let alert = this.alertCtrl.create({
            title: "Alert!",
            subTitle: "OOOOPS... Something Went Wrong",
            buttons: ["Dismiss"]
          });
          loading.dismiss();
          alert.present();
        })
    */
        this.loginService.login(this.username, this.password).subscribe(data => {
            // this.statusBar.backgroundColorByHexString("#25312C")
            this.provider.token = data['token'];
            localStorage.setItem('token', this.provider.token);
            this.provider.userData = __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(data['token']);
            this.provider.userData = this.provider.userData["data"][0];
            console.log(this.provider.userData);
            this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID => {
                console.log("data isss", dataID);
                if (dataID.length === 0) {
                    this.allservicesService.addNewAccount(this.provider.userData["UserID"]).subscribe(insertData => {
                        console.log("data sucesfully inserted", insertData);
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                        loading.dismiss();
                    }, (error) => {
                        console.log(error);
                    });
                }
                else {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                    loading.dismiss();
                }
            }, (error) => {
                console.log(error);
                let alert = this.alertCtrl.create({
                    title: "Alert!",
                    subTitle: "OOOOPS... Something Went Wrong",
                    buttons: ["Dismiss"]
                });
                loading.dismiss();
                alert.present();
            });
        }, error => {
            console.log(error);
            let alert = this.alertCtrl.create({
                title: "Alert!",
                subTitle: "OOOOPS... Something Went Wrong",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
        });
    }
    signup() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    }
    ionViewDidLoad() {
        console.log("ionViewDidLoad LoginPage");
    }
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: "page-login",template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/login/login.html"*/'<ion-content class="background">\n	<ion-card>\n		<ion-card-content>\n			<ion-list no-line>\n				<ion-item>\n					<ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n				</ion-item>\n				<button ion-button block outline color="light" (click)="login()">Log in</button>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n	<button class="bottom" ion-button clear full color="light" (click)="signup()">Don\'t have an account? Sign up</button>\n</ion-content>\n\n<ion-footer no-border>\n\n	<footer>\n		<p class="copyright">© IBM 2019 </p>\n	</footer>\n\n</ion-footer>\n\n\n'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_login_service_login_component_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__provider_provider__["a" /* Provider */],
        __WEBPACK_IMPORTED_MODULE_7__awesome_cordova_plugins_status_bar_ngx__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_8__services_allservices_allservices_component_service__["a" /* AllservicesService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service_signup_component_service__ = __webpack_require__(239);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let SignupPage = class SignupPage {
    constructor(navCtrl, navParams, signupService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signupService = signupService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalData = ["GOLD", "SILVER", "BRONZE"];
    }
    ionViewDidLoad() {
        console.log("ionViewDidLoad SignupPage");
    }
    signin() {
        this.navCtrl.pop();
    }
    signup() {
        let loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.signupService
            .signup(this.firstName, this.lastName, this.age, this.email, this.password, this.mobile)
            .subscribe(data => {
            console.log(data);
            let alert = this.alertCtrl.create({
                title: "Alert!",
                subTitle: "Hi There! You have Sucessfully Signed Up!",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
            this.navCtrl.pop();
        }, error => {
            let alert = this.alertCtrl.create({
                title: "Alert!",
                subTitle: "OOOOPS... Something Went Wrong",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
            this.navCtrl.pop();
            console.log(error);
        });
    }
};
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: "page-signup",template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/signup/signup.html"*/'<ion-content class="background">\n  <ion-card>\n    <ion-card-content>\n      <ion-list no-line>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="person" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="First Name" [(ngModel)]="firstName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="person" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="Last Name" [(ngModel)]="lastName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="body" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="number" placeholder="Age" [(ngModel)]="age"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="call" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="Mobile" [(ngModel)]="mobile"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="at" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="medical" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <button ion-button block outline color="light" (click)="signup()">Signup</button>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n  <button class="bottom" ion-button clear full color="light" (click)="signin()">Already have an account? Sign in</button>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_signup_service_signup_component_service__["a" /* SignupService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 192:
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
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/booking/booking.module": [
		459,
		7
	],
	"../pages/chat/chat.module": [
		460,
		6
	],
	"../pages/dashboard/dashboard.module": [
		461,
		5
	],
	"../pages/login/login.module": [
		462,
		4
	],
	"../pages/map/map.module": [
		464,
		3
	],
	"../pages/offers/offers.module": [
		463,
		2
	],
	"../pages/shop/shop.module": [
		465,
		1
	],
	"../pages/signup/signup.module": [
		466,
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
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OdmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let OdmService = class OdmService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    getODM(srcAirport, dstAirport, customerTier, milesBalance) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.provider.token
        });
        const link = this.provider.apiUrl.odm;
        const bodyObject = {
            srcAirport,
            dstAirport,
            customerTier,
            milesBalance,
            offers: [],
            messages: []
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
};
OdmService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], OdmService);

//# sourceMappingURL=odm.component.service.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ChatService = class ChatService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    call(text, session_id) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.watsoncall;
        const bodyObject = {
            text,
            session_id
        };
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    getsessionid() {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.getsessionid;
        console.log('log of url', link);
        return this.http
            .get(link, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
};
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], ChatService);

//# sourceMappingURL=chat.component.service.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DashboardService = class DashboardService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    list(lat, long) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
        });
        const link = this.provider.apiUrl.map;
        console.log('linkkk', link);
        const bodyObject = {
            lat,
            long
        };
        console.log('bodyyyy', bodyObject);
        return this.http.post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        }));
    }
};
DashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], DashboardService);

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let CheckinService = class CheckinService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    checkin(BookingID, UserID) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': this.provider.token
        });
        const link = this.provider.apiUrl.checkin + '/' + String(BookingID) + '/' + String(UserID);
        return this.http
            .get(link, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
};
CheckinService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], CheckinService);

//# sourceMappingURL=checkin.component.service.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let SignupService = class SignupService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
        this.parameters = {};
        this.params = {};
    }
    signup(firstName, lastName, age, email, password, mobile) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.signup;
        const bodyObject = {
            'firstName': firstName,
            'lastName': lastName,
            'age': Number(age),
            'email': email,
            'password': password,
            'mobile': mobile,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
};
SignupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], SignupService);

//# sourceMappingURL=signup.component.service.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let LoginService = class LoginService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
        this._url = "../assets/airports.json";
        this.parameters = {};
        this.params = {};
        this.getJSON().subscribe(data => {
            this.provider.rawData = data;
        });
    }
    getJSON() {
        return this.http
            .get(this._url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res));
    }
    login(email, password) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.login;
        const bodyObject = {
            email: email,
            password: password
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
};
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], LoginService);

//# sourceMappingURL=login.component.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(402);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllservicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AllservicesService = class AllservicesService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
        this._url = "../assets/newAccount.json";
    }
    getJSON() {
        return this.http
            .get(this._url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res));
    }
    /*
      public customerfeed(object): Observable<any> {
        const options = new RequestOptions({
          headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
          })
        });
        const link = this.provider.apiUrl.customerfeed;
        const bodyObject = object
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        console.log(bodyString);
        return this.http
          .post(link, bodyObject, options) // ...using post request
          .map((res: Response) => res.json())
          .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || "Server error");
          });
      }
    
      public ledgerfeed(object): Observable<any> {
        const options = new RequestOptions({
          headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
          })
        });
        const link = this.provider.apiUrl.ledgerfeed;
        const bodyObject = object
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
          .post(link, bodyString, options) // ...using post request
          .map((res: Response) => res.json())
          .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || "Server error");
          });
      }
    
      public utilitybill(object): Observable<any> {
        const options = new RequestOptions({
          headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
          })
        });
        const link = this.provider.apiUrl.utilitybill;
        const bodyObject = object
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
          .post(link, bodyString, options) // ...using post request
          .map((res: Response) => res.json())
          .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || "Server error");
          });
      }
    */
    addNewAccount(ID) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.addNewAccount;
        const bodyObject = this.getJSON();
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    getAccount() {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.getAccount;
        return this.http
            .get(link, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    activate(ID) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.activate;
        const bodyObject = {
            ID: ID
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    /*
      public sms(msg, number): Observable<any> {
        const options = new RequestOptions({
          headers: new Headers({
            "Content-Type": "application/json"
          })
        });
        const link = this.provider.apiUrl.sms;
        const bodyObject = {
          message:msg,
          reciever : number
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
          .post(link, bodyObject, options) // ...using post request
          .map((res: Response) => res.json())
          .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || "Server error");
          });
      }
    */
    bill(ID) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.paybill;
        const bodyObject = {
            ID: ID
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    balanceUpdate(ID, balance) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.balanceUpdate;
        const bodyObject = {
            ID: ID,
            balance: balance
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    addTransaction(ID, Product, Price, AccountID, AccountName, Type, DateNow) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.addTransaction;
        console.log("my id issss", ID);
        const bodyObject = {
            ID: ID,
            Product: Product,
            Price: Price,
            AccountID: AccountID,
            AccountName: AccountName,
            Type: Type,
            Date: DateNow
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    /*
      public odm(cardType,cardTier, cardLimit, nameOnCard, cardStatus, cardOffers) : Observable<any> {
        const options = new RequestOptions({
          headers: new Headers({
            "Content-Type": "application/json"
          })
        });
        const link = this.provider.apiUrl.odm;
        const bodyObject = {
            cardType,
            cardTier,
            cardLimit,
            nameOnCard,
            cardStatus,
            cardOffers
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
          .post(link, bodyObject, options) // ...using post request
          .map((res: Response) => res.json())
          .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || "Server error");
          });
      }
    */
    getAccountById(ID) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.getAccountById + '/' + ID;
        return this.http
            .get(link, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    getAccountByID(ID) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.getAccountByID + '/' + ID;
        return this.http
            .get(link, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
};
AllservicesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], AllservicesService);

//# sourceMappingURL=allservices.component.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_shop_shop__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_offers_offers__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_map_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service_login_component_service__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_signup_service_signup_component_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__awesome_cordova_plugins_status_bar_ngx__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__awesome_cordova_plugins_splash_screen_ngx__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_listing_schedule_service_listing_component_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_shared_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_booking_service_booking_component_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_chat_service_chat_component_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_email_service_email_component_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_checkin_service_checkin_component_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_allservices_allservices_component_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_odm_service_odm_component_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_chat_chat__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_carousel_carousel__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { TabsPage } from '../pages/tabs/tabs';














//import { Geolocation } from "@ionic-native/geolocation/ngx";



let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_30__components_carousel_carousel__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            //    TabsPage,
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking__["a" /* BookingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_offers_offers__["a" /* OffersPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_shop_shop__["a" /* ShopPage */]
        ],
        imports: [
            // NgxGaugeModule,
            //NativeHttpWrapper,
            __WEBPACK_IMPORTED_MODULE_22__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/booking/booking.module#BookingPageModule', name: 'BookingPage', segment: 'booking', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/offers/offers.module#OffersPageModule', name: 'OffersPage', segment: 'offers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shop/shop.module#ShopPageModule', name: 'ShopPage', segment: 'shop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            //    TabsPage,
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking__["a" /* BookingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_offers_offers__["a" /* OffersPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_shop_shop__["a" /* ShopPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__awesome_cordova_plugins_status_bar_ngx__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__awesome_cordova_plugins_splash_screen_ngx__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_14__services_login_service_login_component_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_15__services_signup_service_signup_component_service__["a" /* SignupService */],
            __WEBPACK_IMPORTED_MODULE_20__provider_provider__["a" /* Provider */],
            __WEBPACK_IMPORTED_MODULE_21__services_listing_schedule_service_listing_component_service__["a" /* ListingService */],
            __WEBPACK_IMPORTED_MODULE_23__services_booking_service_booking_component_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_26__services_checkin_service_checkin_component_service__["a" /* CheckinService */],
            __WEBPACK_IMPORTED_MODULE_27__services_allservices_allservices_component_service__["a" /* AllservicesService */],
            //    Geolocation,
            __WEBPACK_IMPORTED_MODULE_25__services_email_service_email_component_service__["a" /* EmailService */],
            __WEBPACK_IMPORTED_MODULE_28__services_odm_service_odm_component_service__["a" /* OdmService */],
            __WEBPACK_IMPORTED_MODULE_24__services_chat_service_chat_component_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__awesome_cordova_plugins_status_bar_ngx__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_splash_screen_ngx__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_shop_shop__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Geolocation } from '@ionic-native/geolocation/ngx';


//import {TabsPage} from '../pages/tabs/tabs'
//import * as jwtDecode from 'jwt-decode';






//import {BookingPage} from '../pages/booking/booking'


let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen, keyboard, provider, menuCtrl) {
        this.keyboard = keyboard;
        this.provider = provider;
        this.menuCtrl = menuCtrl;
        this.showSplash = true;
        this.rightMenuItems = [
            { icon: 'home', active: true, page: 'DashboardPage' },
            { icon: 'heart', active: false, page: 'ShopPage' },
            { icon: 'pin', active: false, page: 'MapPage' },
            { icon: 'cash', active: false, page: 'AboutPage' },
            { icon: 'card', active: false, page: 'HomePage' },
            { icon: 'person', active: false, page: 'ContactPage' },
            { icon: 'chatboxes', active: false, page: 'ChatPage' },
            { icon: 'log-out', active: false, page: 'LoginPage' }
        ];
        platform.ready().then(() => {
            this.key = localStorage.getItem('token');
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs__["timer"])(1000).subscribe(() => this.showSplash = false);
        });
    }
    rightMenuClick(item, page) {
        this.rightMenuItems.map(menuItem => menuItem.active = false);
        item.active = true;
        console.log('page to navigate isss', page);
        if (page === 'ChatPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */]);
        if (page === 'ShopPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_shop_shop__["a" /* ShopPage */]);
        if (page === 'MapPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */]);
        if (page === 'AboutPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */]);
        if (page === 'DashboardPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */]);
        if (page === 'HomePage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]);
        if (page === 'ContactPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */]);
        if (page === 'LoginPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    }
    goto(page) {
        console.log(page);
    }
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.nav.setRoot(page.component);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n        <img src="../assets/watson_logo.gif" alt="ibm">\n</div>\n<ion-menu side="left" type="push" [content]="content" id="menu-right">\n        <ion-content>\n                <ion-list no-lines>\n                        <button menuClose icon-only ion-item detail-none (click)="rightMenuClick(item,item.page)"\n                                *ngFor="let item of rightMenuItems; let i = index">\n                                <div *ngIf="item.active" class="active-menu-item"></div>\n                                <ng-container *ngIf="item.icon===\'log-out\'">\n                                        <ion-icon [name]="item.icon" color=danger></ion-icon>\n                                </ng-container>\n                                <ng-container *ngIf="item.icon!==\'log-out\'">\n                                        <ion-icon [name]="item.icon"></ion-icon>\n                                </ng-container>\n                        </button>\n                </ion-list>\n        </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__awesome_cordova_plugins_status_bar_ngx__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__awesome_cordova_plugins_splash_screen_ngx__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_6__provider_provider__["a" /* Provider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_country_pipe__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_time_pipe__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__pipes_time_pipe__["a" /* TimeRefactorPipe */], __WEBPACK_IMPORTED_MODULE_0__pipes_country_pipe__["a" /* CountryRefactorPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__pipes_time_pipe__["a" /* TimeRefactorPipe */], __WEBPACK_IMPORTED_MODULE_0__pipes_country_pipe__["a" /* CountryRefactorPipe */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryRefactorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let CountryRefactorPipe = class CountryRefactorPipe {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
        this._url = "../assets/airports.json";
        this.fullCountryName = "airport not found";
        this.getJSON().subscribe(data => {
            this.provider.rawData = data;
        });
    }
    transform(value, ...args) {
        if (this.provider.rawData) {
            console.log('lengtgg', this.provider.rawData.length);
            for (var i = 0; i < this.provider.rawData.length; i++) {
                var obj = this.provider.rawData[i];
                if (obj.iata === value) {
                    this.fullCountryName = obj.name;
                    break;
                }
            }
            return this.fullCountryName;
        }
    }
    getJSON() {
        return this.http
            .get(this._url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])((res) => res));
    }
};
CountryRefactorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: "isoToCountryName"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__provider_provider__["a" /* Provider */]])
], CountryRefactorPipe);

//# sourceMappingURL=country.pipe.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeRefactorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TimeRefactorPipe = class TimeRefactorPipe {
    constructor() {
        this.character = ':';
        this.position = 2;
    }
    transform(value, ...args) {
        if (value.length !== 4) {
            value = '0' + value;
        }
        return [value.slice(0, this.position), this.character, value.slice(this.position)].join('');
    }
};
TimeRefactorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'timeRefactor'
    })
], TimeRefactorPipe);

//# sourceMappingURL=time.pipe.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the CarouselComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
let CarouselComponent = class CarouselComponent {
    constructor(platform, eleRef) {
        this.platform = platform;
        this.eleRef = eleRef;
        this.currentDeg = 0;
        this.items = [];
        this.autoloop = false;
        this.selectSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    set slides(values) {
        if (!values.length)
            return;
        let degree = 0;
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.tz = 250;
        }
        else {
            this.tz = 200;
        }
        //this.tz = Math.round((this.containerWidth / 2) / Math.tan(Math.PI / values.length));
        this.items = values.map((item, index) => {
            let slideItem = {
                idx: index,
                title: item.title,
                description: item.description,
                account: item.account,
                imgUrl: item.imgUrl,
                backgroundImgUrl: item.backgroundImgUrl,
                color: item.color,
                outstanding: item.outstanding,
                currentPlacement: degree
            };
            degree = degree + 60;
            return slideItem;
        });
    }
    ngOnInit() {
        //console.log("autoloop", this.autoloop); 
        if (this.autoloop) {
            let autoloopTask = setInterval(() => {
                this.onSwipeLeft();
            }, 2000);
        }
    }
    onSwipeLeft() {
        this.currentDeg = this.currentDeg - 60;
        this.applyStyle();
    }
    onSwipeRight() {
        this.currentDeg = this.currentDeg + 60;
        this.applyStyle();
    }
    applyStyle() {
        let ele = this.eleRef.nativeElement.querySelector('.carousel');
        ele.style['-webkit-transform'] = "rotateY(" + this.currentDeg + "deg)";
        ele.style['-moz-transform'] = "rotateY(" + this.currentDeg + "deg)";
        ele.style['-o-transform'] = "rotateY(" + this.currentDeg + "deg)";
        ele.style['transform'] = "rotateY(" + this.currentDeg + "deg)";
    }
    selectItem(item) {
        this.applyResizeStyle(item);
        setTimeout(() => {
            this.resetResizeStyle(item);
            this.selectSlide.emit(item);
        }, 2000);
    }
    applyResizeStyle(item) {
        let ele = this.eleRef.nativeElement.querySelector('.slide-item-' + item.idx);
        ele.style['animation-name'] = "resize";
        ele.style['animation-duration'] = "1s";
        ele.style['animation-timing-function'] = "ease-in-out";
        ele.style['animation-iteration-count'] = "1";
        ele.style['-webkit-animation-name'] = "resize";
        ele.style['-webkit-animation-duration'] = "1s";
        ele.style['-webkit-animation-timing-function'] = "ease-in-out";
        ele.style['-webkit-animation-iteration-count'] = "1";
        ele.style['-moz-animation-name'] = "resize";
        ele.style['-moz-animation-duration'] = "1s";
        ele.style['-moz-animation-timing-function'] = "ease-in-out";
        ele.style['-moz-animation-iteration-count'] = "1";
        ele.style['-o-animation-name'] = "resize";
        ele.style['-o-animation-duration'] = "1s";
        ele.style['-o-animation-timing-function'] = "ease-in-out";
        ele.style['-o-animation-iteration-count'] = "1";
    }
    resetResizeStyle(item) {
        let ele = this.eleRef.nativeElement.querySelector('.slide-item-' + item.idx);
        ele.style['animation-name'] = "";
        ele.style['-webkit-animation-name'] = "";
        ele.style['-moz-animation-name'] = "";
        ele.style['-o-animation-name'] = "";
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Boolean)
], CarouselComponent.prototype, "autoloop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], CarouselComponent.prototype, "slides", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
    __metadata("design:type", Object)
], CarouselComponent.prototype, "selectSlide", void 0);
CarouselComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'carousel',template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/components/carousel/carousel.html"*/'<!-- Generated template for the CarouselComponent component -->\n\n\n<div class="carousel-container">\n    <div class="carousel">\n      <div radio-group class="carousel-slide-item slide-item-{{i}}" *ngFor="let item of items; let i=index"\n           [style.background-color]="item.color"\n           [ngStyle]="{\'transform\': \'rotateY(-\'+item.currentPlacement+\'deg)  translateZ(\'+tz+\'px)\', \'-webkit-transform\': \'rotateY(\'+item.currentPlacement+\'deg)  translateZ(\'+tz+\'px)\', \'-ms-transform\': \'rotateY(\'+item.currentPlacement+\'deg)  translateZ(\'+tz+\'px)\',\n          \'-o-transform\': \'rotateY(\'+item.currentPlacement+\'deg)  translateZ(\'+tz+\'px)\'}"\n           (swipeleft)="onSwipeLeft($event);"\n           (swiperight)="onSwipeRight($event);"\n              >\n  \n          <ion-card >\n              <ion-card-content>\n                  <ion-card-title>\n                      {{item.title}}\n                      <p>{{item.account}}</p>\n                  </ion-card-title>\n              </ion-card-content>\n          </ion-card>\n      </div>\n    </div>\n  </div>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/components/carousel/carousel.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
], CarouselComponent);

//# sourceMappingURL=carousel.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_allservices_allservices_component_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shop_shop__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Geolocation } from "@ionic-native/geolocation";









/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let DashboardPage = class DashboardPage {
    constructor(navCtrl, navParams, dashboardService, loadingCtrl, allservicesService, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dashboardService = dashboardService;
        this.loadingCtrl = loadingCtrl;
        this.allservicesService = allservicesService;
        this.provider = provider;
        this.show = null;
        this.gaugeType = "arch";
        this.gaugeValue = 900;
        this.gaugeLabel = "Amount";
        this.gaugeAppendText = "DHS";
        this.showCoursel = false;
        this.data = [];
        this.slides = [];
        this.start = 0;
        this.end = 4;
    }
    ionViewDidLoad() {
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(data => {
            this.loginData = data[0]['CurrentAccount'];
            console.log('logindata', this.loginData);
            let tempdata = [];
            this.loginData.forEach(function (value, i) {
                console.log(value, i);
                console.log('data isss', data);
                tempdata.push({
                    'id': i,
                    'title': value['AccountName'],
                    'account': value['CuurentSpending']
                });
            });
            this.data = tempdata;
            this.showCoursel = true;
            this.getCurrentSlides();
        }, error => {
            console.log(error);
        });
        //   this.getCurrentSlides();
    }
    navigate(page) {
        if (page === 'shop')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_shop_shop__["a" /* ShopPage */]);
        if (page === 'map')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */]);
        if (page === 'bills')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */]);
        if (page === 'credit')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
        if (page === 'profile')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */]);
        if (page === 'support')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */]);
    }
    goback() {
        this.navCtrl.pop();
    }
    getCurrentSlides() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        if (this.start == this.data.length) {
            this.start = 0;
            this.end = 5;
        }
        this.slides = [];
        for (var i = this.start; i <= this.end; i++) {
            this.slides.push(this.data[i]);
        }
        loading.dismiss();
        this.start = this.end + 1;
        if ((this.start + this.end) < this.data.length)
            this.end = this.start + this.end;
        else
            this.end = this.data.length - 1;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], DashboardPage.prototype, "nav", void 0);
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: "page-dashboard",template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/dashboard/dashboard.html"*/'<ion-header >\n  <ion-toolbar >\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">HOME</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="masters">\n  <carousel [slides]="slides"  (selectSlide)="selectItem($event);" *ngIf="showCoursel"></carousel>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-card text-center padding color="white" (click)="navigate(\'shop\')">\n              <ion-icon name="heart" color="icon"></ion-icon>\n              <h2>Offers</h2>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6>\n            <ion-card text-center padding color="white" (click)="navigate(\'map\')">\n              <ion-icon name="pin" color="icon"></ion-icon>\n              <h2>Find ATM</h2>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <ion-card text-center padding color="white" (click)="navigate(\'bills\')">\n              <ion-icon name="cash" color="icon"></ion-icon>\n              <h2>Bills</h2>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6 >\n            <ion-card text-center padding color="white" (click)="navigate(\'credit\')">\n              <ion-icon name="card" color="icon"></ion-icon>\n              <h2>Cards</h2>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <ion-card text-center padding color="white" (click)="navigate(\'profile\')">\n              <ion-icon name="person" color="icon"></ion-icon>\n              <h2>Profile</h2>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6>\n              <ion-card text-center padding color="white" (click)="navigate(\'support\')">\n                <ion-icon name="chatboxes" color="icon"></ion-icon>\n                <h2>Chatbot</h2>\n              </ion-card>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- <div>\n          <div class="cardd">\n              <div class="bank-name" title="BestBank">Cumulus Bank</div>\n              <div class="chip">\n                  <div class="side left"></div>\n                  <div class="side right"></div>\n                  <div class="vertical top"></div>\n                  <div class="vertical bottom"></div>\n              </div>\n              <div class="data">\n                  <div class="pan" title="4123 4567 8910 1112">4123 4567 8910 1112</div>\n                  <div class="first-digits">4123</div>\n                  <div class="exp-date-wrapper">\n                      <div class="left-label">EXPIRES END</div>\n                      <div class="exp-date">\n                          <div class="upper-labels">MONTH/YEAR</div>\n                          <div class="date" title="01/17">01/17</div>\n                      </div>\n                  </div>\n                  <div class="name-on-card" title="John Doe">Saif Ur Rehman</div>\n              </div>\n              <div class="lines-down"></div>\n              <div class="lines-up"></div>\n          </div>\n          </div> -->\n</ion-content>\n\n<ion-footer no-border>\n  \n  <footer>\n    <p class="copyright"> Made by © IBM 2019 </p>\n  </footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/dashboard/dashboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_allservices_allservices_component_service__["a" /* AllservicesService */],
        __WEBPACK_IMPORTED_MODULE_4__provider_provider__["a" /* Provider */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let BookingService = class BookingService {
    constructor(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    booking(UserID, FlightID, OfferNamePricing, OfferTypePricing, CostPricing, OfferNameUpgrade, OfferTypeUpgrade, CostUpgrade) {
        console.log(UserID, FlightID, OfferNamePricing, OfferTypePricing, CostPricing, OfferNameUpgrade, OfferTypeUpgrade, CostUpgrade);
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.book;
        const bodyObject = {
            UserID,
            FlightID,
            OfferNamePricing,
            OfferTypePricing,
            CostPricing,
            OfferNameUpgrade,
            OfferTypeUpgrade,
            CostUpgrade
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
    listBookingByUser(ID) {
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            "Content-Type": "application/json"
        });
        const link = this.provider.apiUrl.listBookingByUser + "/" + String(ID);
        return this.http
            .get(link, { headers }) // ...using post request
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])((res) => res), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])((error) => {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        }));
    }
};
BookingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], BookingService);

//# sourceMappingURL=booking.component.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service_chat_component_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_allservices_allservices_component_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_provider__ = __webpack_require__(12);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let ChatPage = class ChatPage {
    constructor(navCtrl, navParams, chatService, loadingCtrl, listingService, allservicesService, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.loadingCtrl = loadingCtrl;
        this.listingService = listingService;
        this.allservicesService = allservicesService;
        this.provider = provider;
        this.sessionid = null;
        this.message = [];
        this.watsontype = false;
        this.type = false;
        if (!this.sessionid) {
            this.chatService.getsessionid().subscribe(data => {
                this.sessionid = data["session_id"];
            }, error => {
                this.sessionid = null;
            });
        }
    }
    ionViewDidLoad() {
        console.log("ionViewDidLoad ChatPage");
        this.message.push({
            user: "watson",
            message: "Hi, I am watson, what can I help you with?"
        });
    }
    doSend() {
        this.type = false;
        this.message.push({
            user: "human",
            message: this.input
        });
        console.log(this.message);
        this.temp = this.input;
        this.input = "";
        if (this.sessionid) {
            this.watsontype = true;
            this.chatService.call(this.temp, this.sessionid).subscribe(data => {
                if ((data["response"]["output"]["generic"][0]["text"] !== 'bills')) {
                    this.watsontype = false;
                    this.message.push({
                        user: "watson",
                        message: data["response"]["output"]["generic"][0]["text"]
                    });
                }
                if ((data["response"]["output"]["generic"][0]["text"] === 'bills')) {
                    let temp = [];
                    this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(data => {
                        console.log(data);
                        data[0]['Billing'].forEach(element => {
                            if (!element['Payed']) {
                                temp.push(element['Product']);
                                console.log('temp', temp);
                            }
                        });
                        if (temp.length === 0) {
                            this.watsontype = false;
                            this.message.push({
                                user: "watson",
                                message: 'No! You dont have any pending bills! :)'
                            });
                        }
                        else {
                            this.watsontype = false;
                            this.message.push({
                                user: "watson",
                                message: 'You need to pay your ' + temp.join(' , ') + 'bills'
                            });
                        }
                    }, error => {
                        this.watsontype = false;
                    });
                }
                else {
                    this.chatService.getsessionid().subscribe(data => {
                        this.sessionid = data["session_id"];
                    }, error => {
                        this.sessionid = null;
                    });
                    this.bookinginfo = data["response"]["output"]["generic"][0]["text"].split(',');
                    console.log(this.bookinginfo);
                }
            }, error => {
                this.watsontype = false;
                this.sessionid = null;
                this.chatService.getsessionid().subscribe(data => {
                    this.sessionid = data["session_id"];
                }, error => {
                    this.sessionid = null;
                });
            });
        }
    }
    typing() {
        console.log(this.input);
        if (this.input != "") {
            this.type = true;
        }
        else {
            this.type = false;
        }
    }
};
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: "page-chat",template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Help</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="message-wrap" *ngFor="let show of message">\n    \n\n    <div class="sender" *ngIf="show.user===\'watson\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 text-left>\n            <img class="friend-img" src="../assets/watson_logo.gif" alt="">\n          </ion-col>\n          <ion-col col-10>\n            <p>{{show.message}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class="me" *ngIf="show.user===\'human\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10>\n            <p>{{show.message}}</p>\n          </ion-col>\n          <ion-col col-2>\n            <img class="friend-img" src="../assets/avatar.png" alt="">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n  <div class="me" *ngIf="type">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10>\n            <p>Typing ...</p>\n          </ion-col>\n          <ion-col col-2>\n            <img class="friend-img" src="../assets/typing.gif" alt="">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class="sender" *ngIf="watsontype">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2 text-left>\n              <img class="friend-img" src="../assets/typing.gif" alt="">\n            </ion-col>\n            <ion-col col-10>\n              <p>Watson is typing...</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n</ion-content>\n\n\n<ion-footer no-border>\n  <ion-toolbar color="facebook">\n    <ion-textarea (keyup.enter)="doSend()" [(ngModel)]="input" placeholder="Enter your message" name="message" (ngModelChange)="typing($event)"></ion-textarea>\n    <ion-buttons end>\n      <button (click)="doSend()" ion-button icon-only>\n        <ion-icon name="send" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/chat/chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_chat_service_chat_component_service__["a" /* ChatService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__["a" /* ListingService */],
        __WEBPACK_IMPORTED_MODULE_4__services_allservices_allservices_component_service__["a" /* AllservicesService */],
        __WEBPACK_IMPORTED_MODULE_5__provider_provider__["a" /* Provider */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_routing_machine__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_routing_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let MapPage = class MapPage {
    constructor(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this._url = "../assets/locations.json";
        this.values = navParams.get("item");
        console.log(this.values);
    }
    getJSON() {
        return this.http
            .get(this._url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])((res) => res));
    }
    loadmap() {
        this.getJSON().subscribe((locations) => {
            var map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map('map').setView([24.4539, 54.3773], 7);
            var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 18,
            }).addTo(map);
            for (var i = 0; i < locations.length; i++) {
                var marker = new __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([locations[i][1], locations[i][2]])
                    .bindPopup(locations[i][0])
                    .addTo(map);
            }
        });
    }
    ionViewDidLoad() {
        this.loadmap();
    }
    goback() {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
    }
    ionViewWillLeave() {
        let tabs = document.querySelectorAll(".show-tabbar");
    }
    cancel() {
        this.navCtrl.pop();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("map"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], MapPage.prototype, "mapContainer", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: "page-map",template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hide-tabs>\n  <ion-toolbar>\n    <ion-buttons start>\n       \n        <button ion-button left class="loginnavbtn" (click)="goback()">\n            <ion-icon name="arrow-back" color="icon"></ion-icon>\n          </button>\n    </ion-buttons>\n    <ion-title color="primary">Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id="map" style="width:100%; height:100%;"></div>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n  </footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_allservices_allservices_component_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(12);
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
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ShopPage = class ShopPage {
    constructor(navCtrl, navParams, allservicesService, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.allservicesService = allservicesService;
        this.provider = provider;
        this.odm = [];
        this.visaOffers = [];
        this.masterOffers = [];
        this.amexOffers = [];
    }
    call() {
        this.masterOffers = [];
        this.visaOffers = [];
        this.amexOffers = [];
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(data => {
            data[0]['Account'].forEach(element => {
                console.log(element);
                if (element['Activate']) {
                    if (element['AccountName'] === 'Visa Card') {
                        /*
                        this.allservicesService.odm('Visa','Gold',10517320,'','',[]).subscribe( visadata =>{
                          this.visaOffers.push({
                            type: 'visa',
                            offers: visadata['creditCard']['cardOffers']
                          })
                          this.visaOffers = this.visaOffers[0]
                          console.log(this.visaOffers)
            
                        } , error =>{
                          console.log(error)
                        })
                        */
                    }
                    if (element['AccountName'] === 'Master Card') {
                        /*
                          this.allservicesService.odm('MasterCard','World',10517320,'','',[]).subscribe( masterdata =>{
                            this.masterOffers.push({
                              type: 'master',
                              offers: masterdata['creditCard']['cardOffers']
                            })
                            this.masterOffers = this.masterOffers[0];
                          } , error =>{
                            console.log(error)
                          })
                        */
                    }
                    if (element['AccountName'] === 'American Express') {
                        /*
                        this.allservicesService.odm('AMEX','Preferred',10517320,'','',[]).subscribe( americandata =>{
                          this.amexOffers.push({
                            type: 'amex',
                            offers: americandata['creditCard']['cardOffers']
                          })
                          this.amexOffers = this.amexOffers[0];
                          console.log(this.amexOffers)
                        } , error =>{
                          console.log(error)
                        })
                        */
                    }
                }
            });
        }, error => {
        });
    }
    ionViewDidLoad() {
        this.call();
    }
    doRefresh(refresher) {
        this.call();
        console.log('Begin async operation', refresher);
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
};
ShopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-shop',template:/*ion-inline-start:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/shop/shop.html"*/'<!--\n  Generated template for the ShopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content  class="cards-bg">\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n    <ion-item-divider color="light">Visa Card Offers</ion-item-divider>\n    <ion-card class="adv-map" *ngFor="let item of visaOffers.offers">\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'information-circle\'></ion-icon>\n        <h2>Catagory</h2>\n        <p>{{item.category}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'flower\'></ion-icon>\n        <h2>Partner</h2>\n        <p>{{item.offerPartner}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'flash\'></ion-icon>\n        <h2>Offer</h2>\n        <p> {{item.offerDesc}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'flag\'></ion-icon>\n        <h2>Type</h2>\n        <p>{{item.offerType}}</p>\n      </ion-item>\n      <ion-item actions>\n        <button ion-button color="secondary" clear item-end icon-start>\n          <ion-icon name=\'checkmark\'></ion-icon>\n          BUY\n        </button>\n      </ion-item>\n      </ion-card>\n\n      <ion-item-divider color="light">Master Card Offers</ion-item-divider>\n      <ion-card class="adv-map" *ngFor="let item of masterOffers.offers">\n        <ion-item>\n          <ion-icon color="subtle" large item-start name=\'information-circle\'></ion-icon>\n          <h2>Catagory</h2>\n          <p>{{item.category}}</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="subtle" large item-start name=\'flower\'></ion-icon>\n          <h2>Partner</h2>\n          <p>{{item.offerPartner}}</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="subtle" large item-start name=\'flash\'></ion-icon>\n          <h2>Offer</h2>\n          <p> {{item.offerDesc}}</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="subtle" large item-start name=\'flag\'></ion-icon>\n          <h2>Type</h2>\n          <p>{{item.offerType}}</p>\n        </ion-item>\n        <ion-item actions>\n          <button ion-button color="secondary" clear item-end icon-start>\n            <ion-icon name=\'checkmark\'></ion-icon>\n            BUY\n          </button>\n        </ion-item>\n        </ion-card>\n\n        <ion-item-divider color="light">AMEX Card Offers</ion-item-divider>\n        <ion-card class="adv-map" *ngFor="let item of amexOffers.offers">\n          <ion-item>\n            <ion-icon color="subtle" large item-start name=\'information-circle\'></ion-icon>\n            <h2>Catagory</h2>\n            <p>{{item.category}}</p>\n          </ion-item>\n          <ion-item>\n            <ion-icon color="subtle" large item-start name=\'flower\'></ion-icon>\n            <h2>Partner</h2>\n            <p>{{item.offerPartner}}</p>\n          </ion-item>\n          <ion-item>\n            <ion-icon color="subtle" large item-start name=\'flash\'></ion-icon>\n            <h2>Offer</h2>\n            <p> {{item.offerDesc}}</p>\n          </ion-item>\n          <ion-item>\n            <ion-icon color="subtle" large item-start name=\'flag\'></ion-icon>\n            <h2>Type</h2>\n            <p>{{item.offerType}}</p>\n          </ion-item>\n          <ion-item actions>\n            <button ion-button color="secondary" clear item-end icon-start>\n              <ion-icon name=\'checkmark\'></ion-icon>\n              BUY\n            </button>\n          </ion-item>\n          </ion-card>\n  \n  </ion-content>\n\n  <ion-footer no-border>\n  \n    <footer>\n      <p class="copyright"> Made by © IBM 2019 </p>\n    </footer>\n  \n  </ion-footer>'/*ion-inline-end:"/Users/saif/Desktop/cumulus/Mobile-App/src/pages/shop/shop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_allservices_allservices_component_service__["a" /* AllservicesService */],
        __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
], ShopPage);

//# sourceMappingURL=shop.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map