"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_multiple-select-modal_multiple-select-modal_module_ts"],{

/***/ 80518:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/multiple-select-modal/multiple-select-modal-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleSelectModalPageRoutingModule": () => (/* binding */ MultipleSelectModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _multiple_select_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-select-modal.page */ 37374);




const routes = [
    {
        path: '',
        component: _multiple_select_modal_page__WEBPACK_IMPORTED_MODULE_0__.MultipleSelectModalPage
    }
];
let MultipleSelectModalPageRoutingModule = class MultipleSelectModalPageRoutingModule {
};
MultipleSelectModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MultipleSelectModalPageRoutingModule);



/***/ }),

/***/ 42355:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/multiple-select-modal/multiple-select-modal.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleSelectModalPageModule": () => (/* binding */ MultipleSelectModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _multiple_select_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-select-modal-routing.module */ 80518);
/* harmony import */ var _multiple_select_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-select-modal.page */ 37374);







let MultipleSelectModalPageModule = class MultipleSelectModalPageModule {
};
MultipleSelectModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _multiple_select_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.MultipleSelectModalPageRoutingModule
        ],
        declarations: [_multiple_select_modal_page__WEBPACK_IMPORTED_MODULE_1__.MultipleSelectModalPage]
    })
], MultipleSelectModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_multiple-select-modal_multiple-select-modal_module_ts.js.map