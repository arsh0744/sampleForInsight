"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_single-select-modal_single-select-modal_module_ts"],{

/***/ 4795:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/single-select-modal/single-select-modal-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleSelectModalPageRoutingModule": () => (/* binding */ SingleSelectModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _single_select_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-select-modal.page */ 12868);




const routes = [
    {
        path: '',
        component: _single_select_modal_page__WEBPACK_IMPORTED_MODULE_0__.SingleSelectModalPage
    }
];
let SingleSelectModalPageRoutingModule = class SingleSelectModalPageRoutingModule {
};
SingleSelectModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SingleSelectModalPageRoutingModule);



/***/ }),

/***/ 91657:
/*!*************************************************************************!*\
  !*** ./src/app/pages/single-select-modal/single-select-modal.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleSelectModalPageModule": () => (/* binding */ SingleSelectModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _single_select_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-select-modal-routing.module */ 4795);
/* harmony import */ var _single_select_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-select-modal.page */ 12868);







let SingleSelectModalPageModule = class SingleSelectModalPageModule {
};
SingleSelectModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _single_select_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingleSelectModalPageRoutingModule
        ],
        declarations: [_single_select_modal_page__WEBPACK_IMPORTED_MODULE_1__.SingleSelectModalPage]
    })
], SingleSelectModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_single-select-modal_single-select-modal_module_ts.js.map