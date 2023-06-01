"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgot-password_forgot-password_module_ts"],{

/***/ 6177:
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 22032);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 65638:
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 6177);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 22032);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 22032:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 36688);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 72653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _utils_BaseComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/BaseComp */ 88075);







let ForgotPasswordPage = class ForgotPasswordPage extends _utils_BaseComp__WEBPACK_IMPORTED_MODULE_2__.BaseComp {
    constructor(navCtrl, http) {
        super();
        this.navCtrl = navCtrl;
        this.http = http;
        this.email = '';
        this.ForgotPasswordPage = {
            Forgot_Password: 'Forgot Password',
            SUBMIT: 'SUBMIT',
            Username: 'Username',
        };
        this.getData();
    }
    ngOnInit() { }
    getData() {
        var selectedLang = this.getItem(this.LANG_SELECTED);
        console.log('selected_lang:-' + this.getItem(this.LANG_SELECTED));
        let url = 'assets/lang/' + selectedLang + '.json';
        // let url = "assets/lang/en.json";
        // if (this.getItem(this.LANG_SELECTED) == this.HINDI_LANG) {
        //   url = "assets/lang/hn.json";
        // }
        this.http.get(url).subscribe((result) => {
            try {
                // console.log("data:-" + JSON.stringify(result));
                let parsedJSON = JSON.parse(JSON.stringify(result));
                this.ForgotPasswordPage = parsedJSON.ForgotPasswordPage;
            }
            catch (err) {
                console.log(err);
            }
        }, (error) => { });
    }
    ionViewWillEnter() {
        console.log('ionViewDidLoad ForgotPasswordPage');
    }
    callAPI() { }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgot-password',
        template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 72653:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 36688:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"back-button\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ForgotPasswordPage.Forgot_Password}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div style=\"\r\n      height: 100%;\r\n      display: block;\r\n      text-align: center;\r\n      align-items: center;\r\n      justify-content: center;\r\n    \">\r\n    <div lines=\"none\" style=\"\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        text-align: center;\r\n        margin-top: 50px;\r\n      \">\r\n      <img src=\"assets/imgs/logo.png\" style=\"width: 170px\" />\r\n    </div>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\" style=\"color: #000000; font-size: 16px\">\r\n        {{ForgotPasswordPage.Username}}\r\n      </ion-label>\r\n      <ion-input placeholder=\"\" type=\"text\" [(ngModel)]=\"email\" style=\"\r\n          width: 100%;\r\n          padding-left: 10px;\r\n          padding-right: 10px;\r\n          border: 1px solid transparent;\r\n        \"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" style=\"\r\n        width: 100%;\r\n        display: flex;\r\n        text-align: center;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin-top: 20px;\r\n      \">\r\n      <div (click)=\"callAPI()\" style=\"\r\n          display: flex;\r\n          text-align: center;\r\n          justify-content: center;\r\n          align-items: center;\r\n          width:100%\r\n        \">\r\n        <div style=\"\r\n            background-color: #88dd4b;\r\n            width: 80%;\r\n            display: flex;\r\n            text-align: center;\r\n            justify-content: center;\r\n            align-items: center;\r\n            border-radius: 20px;\r\n            height: 40px;\r\n          \">\r\n          <p style=\"font-size: 15px; font-weight: bolder; color: #ffffff\">\r\n            {{ForgotPasswordPage.SUBMIT}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot-password_forgot-password_module_ts.js.map