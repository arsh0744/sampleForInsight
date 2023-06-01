"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mymainpage_mymainpage_module_ts"],{

/***/ 13573:
/*!***************************************************************!*\
  !*** ./src/app/pages/mymainpage/mymainpage-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MymainpagePageRoutingModule": () => (/* binding */ MymainpagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mymainpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mymainpage.page */ 16616);




const routes = [
    {
        path: '',
        component: _mymainpage_page__WEBPACK_IMPORTED_MODULE_0__.MymainpagePage
    }
];
let MymainpagePageRoutingModule = class MymainpagePageRoutingModule {
};
MymainpagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MymainpagePageRoutingModule);



/***/ }),

/***/ 15705:
/*!*******************************************************!*\
  !*** ./src/app/pages/mymainpage/mymainpage.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MymainpagePageModule": () => (/* binding */ MymainpagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mymainpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mymainpage-routing.module */ 13573);
/* harmony import */ var _mymainpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mymainpage.page */ 16616);







let MymainpagePageModule = class MymainpagePageModule {
};
MymainpagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mymainpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.MymainpagePageRoutingModule
        ],
        declarations: [_mymainpage_page__WEBPACK_IMPORTED_MODULE_1__.MymainpagePage]
    })
], MymainpagePageModule);



/***/ }),

/***/ 16616:
/*!*****************************************************!*\
  !*** ./src/app/pages/mymainpage/mymainpage.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MymainpagePage": () => (/* binding */ MymainpagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mymainpage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mymainpage.page.html?ngResource */ 86479);
/* harmony import */ var _mymainpage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mymainpage.page.scss?ngResource */ 98906);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_accessauthorization_accessauthorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/accessauthorization/accessauthorization.service */ 67085);
/* harmony import */ var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/events/events.service */ 11716);
/* harmony import */ var src_app_services_token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token/token.service */ 38264);
/* harmony import */ var src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/BaseComp */ 88075);











let MymainpagePage = class MymainpagePage extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_5__.BaseComp {
    constructor(menuCtrl, route, TokenService, http, Auth, nav, events) {
        super();
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.TokenService = TokenService;
        this.http = http;
        this.Auth = Auth;
        this.nav = nav;
        this.events = events;
    }
    ngOnInit() {
    }
    openMenu() {
        this.menuCtrl.open();
    }
    gotoTest() {
    }
    goToMyTest2() {
        this.route.navigateByUrl('mytest2');
    }
    goToReportEngine() {
        this.route.navigateByUrl('customreports');
    }
    goToStockAdd() {
    }
    goToStockDisplay() {
    }
    logout() {
        this.TokenService.removeToken();
        this.TokenService.removeAuthToken();
        this.TokenService.removeRefreshAccessToken();
        this.removeItem('Db_code');
        this.removeItem(this.LOGIN_USER_DATA);
        this.removeItem(this.IS_LOGIN);
        this.Auth.startPasswordCheckService(false);
        // this.rootPage = 'login';
        this.route.navigateByUrl('login');
    }
    goToMyTest() {
        this.route.navigateByUrl('mytest');
    }
};
MymainpagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_token_token_service__WEBPACK_IMPORTED_MODULE_4__.TokenService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: src_app_services_accessauthorization_accessauthorization_service__WEBPACK_IMPORTED_MODULE_2__.AccessauthorizationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService }
];
MymainpagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-mymainpage',
        template: _mymainpage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mymainpage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MymainpagePage);



/***/ }),

/***/ 98906:
/*!******************************************************************!*\
  !*** ./src/app/pages/mymainpage/mymainpage.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteW1haW5wYWdlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 86479:
/*!******************************************************************!*\
  !*** ./src/app/pages/mymainpage/mymainpage.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <div  class=\"flex_center_content\" (click)=\"openMenu()\" style=\"\n        position: absolute;\n        height: 45px;\n        left: 10px;\n        z-index: 1000;\n        top: env(safe-area-inset-top);\n      \">\n      <img src=\"assets/imgs/ic_ham.png\" style=\"height: 25px\" />\n    </div>\n\n   \n    \n\n\n    <div  class=\"ion-text-center\" class=\"block_center_content\" style=\"\n        position: absolute;\n        left: 0;\n        right: 0;\n        height: 45px;\n        top: env(safe-area-inset-top);\n      \">\n      <!--        <img src=\"assets/imgs/logo.png\" style=\"height: 25px;\">-->\n      <p style=\"\n          font-family: nexa_bold;\n          color: #ffffff;\n          font-size: 15px;\n          margin-left: 5px;\n        \">\n        Navigator\n      </p>\n     \n    </div>\n    \n    \n\n   \n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\n  <ion-button (click)=\"goToReportEngine()\"  fill=\"solid\" color=\"success\">Go To Report Engine</ion-button>\n  <ion-button (click)=\"goToMyTest()\"  fill=\"solid\" color=\"warning\">Go TO My Test</ion-button>\n  <ion-button (click)=\"goToMyTest2()\"  fill=\"solid\" color=\"warning\">Go TO My Report Engine MultiLevel Test</ion-button>\n\n\n  <ion-button (click)=\"goToStockAdd()\"  fill=\"solid\" color=\"success\">Go To  Stock Add</ion-button>\n  <ion-button (click)=\"goToStockDisplay()\"  fill=\"solid\" color=\"success\">Go To  Stock Add</ion-button>\n\n  <ion-button (click)=\"logout()\"  fill=\"solid\" color=\"danger\">Logout</ion-button>\n\n\n\n\n\n  \n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mymainpage_mymainpage_module_ts.js.map