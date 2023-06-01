"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 90392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 64374);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 17110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 90392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 64374);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 64374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 45722);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 62124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/BaseComp */ 88075);








let SignupPage = class SignupPage extends _utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__.BaseComp {
  constructor(navCtrl, http, loadingCtrl, toastCtrl) {
    super();
    this.navCtrl = navCtrl;
    this.http = http;
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
    this.farmDetail_arr = [];
    this.collectionCenter_arr = [];
    this.first_name = '';
    this.middle_name = '';
    this.last_name = '';
    this.phone = '';
    this.pan = '';
    this.aadhar = '';
    this.cattle_cow = '';
    this.calves_cow = '';
    this.cattle_buffalo = '';
    this.calve_buffalo = '';
    this.cattle_desi = '';
    this.calves_desi = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage'); // this.getFarms() ;
  }

  ngOnInit() {}

  getFarms() {
    // var url = this.FARMER_DASHBOARD_URL + "?farmerDashboard=[{FarmerId:" + this.getItem(this.LOGIN_USER_ID) + ",Month:9,Year:2019,MilkType:0}]" ;
    var url = this.BASE_URL + 'api/DairyFarmApi/getAllDairyFarm?UserId=2' + '&Key=' + this.key + '&con=' + this.DatabaseCode; // var url = this.LOGIN_URL+"?UserName="+this.email+"&Pword="+this.password ;

    let postData = new FormData();
    console.log('url:-' + url);
    this.http.get(url).subscribe(result => {
      this.farmDetail_arr = []; // loading.dismiss() ;

      try {
        // console.log("data:-" + JSON.stringify(result)) ;
        var parsedJSON = JSON.parse(JSON.stringify(result));

        for (let i = 0; i < parsedJSON.length; i++) {
          const farmDetail = {
            Farm_ID: parsedJSON[i].Farm_ID,
            Farm_Name: parsedJSON[i].Farm_Name,
            Comany_Name: parsedJSON[i].Comany_Name,
            Address: parsedJSON[i].Address,
            Zip_Code: parsedJSON[i].Zip_Code,
            City_ID: parsedJSON[i].City_ID,
            State_ID: parsedJSON[i].State_ID,
            Country_ID: parsedJSON[i].Country_ID,
            Owner_Name: parsedJSON[i].Owner_Name,
            Contact_Person: parsedJSON[i].Contact_Person
          };
          this.farmDetail_arr.push(farmDetail);
          this.getCollectionCenters();
        }
      } catch (err) {
        console.log(err);
      }
    }, error => {
      console.log('API Error', error);
      this.somethingWentWrongError(this.toastCtrl);
    });
  }

  getCollectionCenters() {
    // var url = this.FARMER_DASHBOARD_URL + "?farmerDashboard=[{FarmerId:" + this.getItem(this.LOGIN_USER_ID) + ",Month:9,Year:2019,MilkType:0}]" ;
    var url = this.BASE_URL + 'api/CollectionCentreApi/getAllCollectionCentre?UserId=2' + '&Key=' + this.key + '&con=' + this.DatabaseCode; // var url = this.LOGIN_URL+"?UserName="+this.email+"&Pword="+this.password ;

    let postData = new FormData();
    console.log('url:-' + url);
    this.http.get(url).subscribe(result => {
      this.collectionCenter_arr = []; // loading.dismiss() ;

      try {
        // console.log("data:-" + JSON.stringify(result)) ;
        var parsedJSON = JSON.parse(JSON.stringify(result));

        for (let i = 0; i < parsedJSON.length; i++) {
          const collectionCenter = {
            CollectionCentre_ID: parsedJSON[i].CollectionCentre_ID,
            CollectionCentre_Name: parsedJSON[i].CollectionCentre_Name,
            PCollectionCentre_ID: parsedJSON[i].PCollectionCentre_ID,
            CollectionCentre_Type: parsedJSON[i].CollectionCentre_Type,
            Farm_ID: parsedJSON[i].Farm_ID,
            Address: parsedJSON[i].Address,
            Zip_Code: parsedJSON[i].Zip_Code,
            City_ID: parsedJSON[i].City_ID,
            Owner_ID: parsedJSON[i].Owner_ID,
            SupervisorName: parsedJSON[i].SupervisorName,
            Modified_By: parsedJSON[i].Modified_By,
            Modified_On: parsedJSON[i].Modified_On,
            City_Name: parsedJSON[i].City_Name,
            Owner_Name: parsedJSON[i].Owner_Name
          };
          this.collectionCenter_arr.push(collectionCenter);
        }
      } catch (err) {
        console.log(err);
      }
    }, error => {
      console.log('API Error', error);
      this.somethingWentWrongError(this.toastCtrl);
    });
  }

  makeSignupRequest() {
    let signUp = {
      FirstName: this.first_name,
      MiddleName: this.middle_name,
      LastName: this.last_name,
      Phone: this.phone,
      PAN: this.pan,
      RFID: '10',
      Aadhar: this.aadhar,
      Farm_ID: this.farmDetail_arr[Number(this.selected_farm)],
      CollectionCentre_ID: this.collectionCenter_arr[Number(this.selected_cc)],
      CattleCowNo: this.cattle_cow,
      CalvesCowNo: this.calves_cow,
      CattleBuffaloNo: this.cattle_buffalo,
      CalvesBuffaloNo: this.calve_buffalo,
      CattleDesiCowNo: this.cattle_desi,
      CalvesDesiCowNo: this.calves_desi
    };
    let data = [];
    data.push(signUp);
    return JSON.stringify(data);
  }

  callSignupAPI() {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let loading = yield _this.loadingComp(_this.loadingCtrl);
      loading.present();

      var url = _this.BASE_URL + 'api/FarmerApi/addFarmer?FarmerDetail=' + _this.makeSignupRequest() + '&Key=' + _this.key + '&con=' + _this.DatabaseCode; // var url = this.LOGIN_URL+"?UserName="+this.email+"&Pword="+this.password ;


      let postData = new FormData();
      console.log('url:-' + url);

      _this.http.post(url, postData).subscribe(result => {
        loading.dismiss();

        try {
          // console.log("data:-" + JSON.stringify(result)) ;
          if (JSON.stringify(result) == 'true') {
            _this.presentToast(_this.toastCtrl, 'User Register! Please Login Now.');

            _this.navCtrl.pop();
          } else {
            _this.presentToast(_this.toastCtrl, 'Something went wrong');
          }
        } catch (err) {
          console.log(err);
        }
      }, error => {
        loading.dismiss();
        console.log('API Error', error);

        _this.somethingWentWrongError(_this.toastCtrl);
      });
    })();
  }

  backToLogin() {
    this.navCtrl.pop();
  }

};

SignupPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}];

SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-signup',
  template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignupPage);


/***/ }),

/***/ 62124:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".signup_input {\n  width: 100%;\n  height: 30px;\n  border: none;\n  padding-left: 7px;\n  padding-right: 7px;\n  font-size: 12px;\n  font-family: nexa_bold;\n}\n\n.signup_left_img_div {\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 30px;\n  border-right: 1px solid #bdbdbd;\n}\n\n.signup_main_div {\n  display: flex;\n  border: 1px solid #bdbdbd;\n  border-radius: 7px;\n  margin-top: 10px;\n}\n\n.bg {\n  background: #74b743;\n  height: 25vh;\n  width: 100vw;\n  position: relative;\n}\n\n.bg:after {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  content: \"\";\n  height: 0;\n  width: 0;\n  border-left: 100vw solid #74b743;\n  border-bottom: 55vw solid transparent;\n  border-top: 0px solid transparent;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxPcmlnaHQlMjBBcHAlMjBJb25pYyUyMDYlMjBCdWlsZCUyMDMwJTIwTWFyY2hcXE9yaWdodF92NF9NaW5pQnVpbGRcXHNyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXBfaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogbmV4YV9ib2xkO1xyXG59XHJcblxyXG4uc2lnbnVwX2xlZnRfaW1nX2RpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JkYmRiZDtcclxufVxyXG5cclxuLnNpZ251cF9tYWluX2RpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vLyRtYWluQ29sb3I6I0IxRUNDNiA7XHJcbi8vJGJnQ29sb3I6I0ZGRkZGRiA7XHJcblxyXG4uYmcge1xyXG4gIGJhY2tncm91bmQ6ICM3NGI3NDM7XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwMHZ3IHNvbGlkICM3NGI3NDM7XHJcbiAgICBib3JkZXItYm90dG9tOiA1NXZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuIiwiLnNpZ251cF9pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogbmV4YV9ib2xkO1xufVxuXG4uc2lnbnVwX2xlZnRfaW1nX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiZGJkYmQ7XG59XG5cbi5zaWdudXBfbWFpbl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6ICM3NGI3NDM7XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmc6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQ6IDEwMHZ3IHNvbGlkICM3NGI3NDM7XG4gIGJvcmRlci1ib3R0b206IDU1dncgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */";

/***/ }),

/***/ 45722:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div style=\"\r\n      height: 100%;\r\n      background-color: #ffffff;\r\n      position: absolute;\r\n      z-index: -1;\r\n    \">\r\n    <div class=\"bg\">\r\n      <div class=\"test\"></div>\r\n    </div>\r\n  </div>\r\n  <div style=\"\r\n      position: absolute;\r\n      z-index: 1;\r\n      padding-left: 7px;\r\n      padding-right: 7px;\r\n    \">\r\n    <ion-card style=\"border-radius: 10px; margin-top: 25px\">\r\n      <ion-card-content>\r\n        <div class=\"signup_main_div\">\r\n          <div class=\"signup_left_img_div\">\r\n            <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n          </div>\r\n          <input class=\"signup_input\" placeholder=\"First Name\" [(ngModel)]=\"first_name\" />\r\n        </div>\r\n        <div class=\"signup_main_div\">\r\n          <div class=\"signup_left_img_div\">\r\n            <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n          </div>\r\n          <input class=\"signup_input\" placeholder=\"Middle Name\" [(ngModel)]=\"middle_name\" />\r\n        </div>\r\n        <div class=\"signup_main_div\">\r\n          <div class=\"signup_left_img_div\">\r\n            <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n          </div>\r\n          <input class=\"signup_input\" placeholder=\"Last Name\" [(ngModel)]=\"last_name\" />\r\n        </div>\r\n        <div class=\"signup_main_div\">\r\n          <div class=\"signup_left_img_div\">\r\n            <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n          </div>\r\n          <input class=\"signup_input\" placeholder=\"Phone\" [(ngModel)]=\"phone\" />\r\n        </div>\r\n        <div class=\"signup_main_div\">\r\n          <div class=\"signup_left_img_div\">\r\n            <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n          </div>\r\n          <input class=\"signup_input\" placeholder=\"PAN\" [(ngModel)]=\"pan\" />\r\n        </div>\r\n        <div class=\"signup_main_div\">\r\n          <div class=\"signup_left_img_div\">\r\n            <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n          </div>\r\n          <input class=\"signup_input\" placeholder=\"Aadhar Number\" [(ngModel)]=\"aadhar\" />\r\n        </div>\r\n        <div style=\"display: flex\">\r\n          <div style=\"width: 50%; padding-right: 5px\">\r\n            <div class=\"signup_main_div\">\r\n              <div class=\"signup_left_img_div\">\r\n                <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n              </div>\r\n              <input class=\"signup_input\" placeholder=\"Cattle Cow\" [(ngModel)]=\"cattle_cow\" />\r\n            </div>\r\n          </div>\r\n          <div style=\"width: 50%; padding-left: 5px\">\r\n            <div class=\"signup_main_div\">\r\n              <div class=\"signup_left_img_div\">\r\n                <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n              </div>\r\n              <input class=\"signup_input\" placeholder=\"Calves Cow\" [(ngModel)]=\"calves_cow\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"display: flex\">\r\n          <div style=\"width: 50%; padding-right: 5px\">\r\n            <div class=\"signup_main_div\">\r\n              <div class=\"signup_left_img_div\">\r\n                <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n              </div>\r\n              <input class=\"signup_input\" placeholder=\"Cattle Buffalo\" [(ngModel)]=\"cattle_buffalo\" />\r\n            </div>\r\n          </div>\r\n          <div style=\"width: 50%; padding-left: 5px\">\r\n            <div class=\"signup_main_div\">\r\n              <div class=\"signup_left_img_div\">\r\n                <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n              </div>\r\n              <input class=\"signup_input\" placeholder=\"Calves Buffalo\" [(ngModel)]=\"calve_buffalo\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"display: flex\">\r\n          <div style=\"width: 50%; padding-right: 5px\">\r\n            <div class=\"signup_main_div\">\r\n              <div class=\"signup_left_img_div\">\r\n                <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n              </div>\r\n              <input class=\"signup_input\" placeholder=\"Cattle Mix\" [(ngModel)]=\"cattle_desi\" />\r\n            </div>\r\n          </div>\r\n          <div style=\"width: 50%; padding-left: 5px\">\r\n            <div class=\"signup_main_div\">\r\n              <div class=\"signup_left_img_div\">\r\n                <img src=\"../../../assets/imgs/ic_user.png\" style=\"width: 12px\" />\r\n              </div>\r\n              <input class=\"signup_input\" placeholder=\"Calves Mix\" [(ngModel)]=\"calves_desi\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ion-item style=\"border-bottom: 1px solid #bdbdbd\">\r\n          <ion-label>Farms</ion-label>\r\n          <ion-select [(ngModel)]=\"selected_farm\">\r\n            <ion-select-option *ngFor=\"let farms of farmDetail_arr\" value=\"{{farms.Farm_ID}}\">{{farms.Farm_Name}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item style=\"border-bottom: 1px solid #bdbdbd\">\r\n          <ion-label>Collection Center</ion-label>\r\n          <ion-select [(ngModel)]=\"selected_cc\">\r\n            <ion-select-option *ngFor=\"let collectionCenter of collectionCenter_arr\"\r\n              value=\"{{collectionCenter.CollectionCentre_ID}}\">{{collectionCenter.CollectionCentre_Name}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n<ion-footer style=\"background-color: #ffffff; margin-top: 10px; margin-bottom: 10px\" lines=\"none\">\r\n  <div (click)=\"callSignupAPI()\" style=\"\r\n      display: flex;\r\n      text-align: center;\r\n      justify-content: center;\r\n      align-items: center;\r\n    \">\r\n    <div style=\"\r\n        background-color: #88dd4b;\r\n        width: 80%;\r\n        display: flex;\r\n        text-align: center;\r\n        justify-content: center;\r\n        align-items: center;\r\n        border-radius: 20px;\r\n        height: 40px;\r\n      \">\r\n      <p style=\"\r\n          font-size: 15px;\r\n          font-weight: bolder;\r\n          color: #ffffff;\r\n          font-family: nexa_bold;\r\n        \">\r\n        Sign up\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"flex_center_content\">\r\n    <p style=\"font-family: nexa_bold\" (click)=\"backToLogin()\">\r\n      Already have an account? Sign In\r\n    </p>\r\n  </div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map