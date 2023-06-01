"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customreports_customreports_module_ts"],{

/***/ 38688:
/*!*********************************************************************!*\
  !*** ./src/app/pages/customreports/customreports-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomreportsPageRoutingModule": () => (/* binding */ CustomreportsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _customreports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customreports.page */ 9176);




const routes = [
    {
        path: '',
        component: _customreports_page__WEBPACK_IMPORTED_MODULE_0__.CustomreportsPage
    }
];
let CustomreportsPageRoutingModule = class CustomreportsPageRoutingModule {
};
CustomreportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomreportsPageRoutingModule);



/***/ }),

/***/ 21643:
/*!*************************************************************!*\
  !*** ./src/app/pages/customreports/customreports.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomreportsPageModule": () => (/* binding */ CustomreportsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _customreports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customreports-routing.module */ 38688);
/* harmony import */ var _customreports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customreports.page */ 9176);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let CustomreportsPageModule = class CustomreportsPageModule {
};
CustomreportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _customreports_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomreportsPageRoutingModule,
        ],
        declarations: [_customreports_page__WEBPACK_IMPORTED_MODULE_1__.CustomreportsPage]
    })
], CustomreportsPageModule);



/***/ }),

/***/ 9176:
/*!***********************************************************!*\
  !*** ./src/app/pages/customreports/customreports.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomreportsPage": () => (/* binding */ CustomreportsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customreports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customreports.page.html?ngResource */ 29899);
/* harmony import */ var _customreports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customreports.page.scss?ngResource */ 33647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/report/report.service */ 45945);
/* harmony import */ var src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/BaseComp */ 88075);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var src_app_services_token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token/token.service */ 38264);











let CustomreportsPage = class CustomreportsPage extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__.BaseComp {
    constructor(navCtrl, dataService, route, token) {
        super();
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.route = route;
        this.token = token;
        this.reportDetails = [];
        this.statusacc = 1;
        this.userFilter = { reportName: "" };
        this.searchList$ = [];
        this.getstaticdataforreports();
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("");
    }
    ngOnInit() {
        let userId = this.getFarmerUserID();
        let rep$ = [];
        const searchTerm$ = this.searchField.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)("All Reports"));
        this.dataService
            .getStaticReports(this.key, this.DatabaseCode, userId)
            .subscribe((m) => {
            rep$ = m[0]["Report"];
        });
    }
    ionViewDidLoad() {
    }
    setSrcBarVal(filtername, value) {
        console.log(value);
        this.searchField.setValue = value;
        let srcbar = document.getElementById(filtername).children[0].children[2];
        srcbar.value = value;
        console.log(srcbar, "srcbar");
    }
    getstaticdataforreports() {
        let userId = this.getFarmerUserID();
        this.dataService
            .getStaticReports(this.key, this.DatabaseCode, userId)
            .subscribe((res) => {
            this.reportDetails = res;
            this.reportDetails.forEach((array) => {
                array.Module.sort((a, b) => a.moduleId - b.moduleId);
            });
            this.searchList$ = res[0]["Report"];
        });
    }
    accordiancustum(id) {
        // var acc:any = document.getElementById("accordion"+id) as HTMLElement;
        var acc = document.getElementById(id);
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "none") {
                    panel.style.display = "block";
                }
                else {
                    panel.style.display = "none";
                }
            });
        }
    }
    accoropenclose(id) {
        document.getElementById(id).classList.toggle("active");
        // var elems = document.getElementsByClassName(id);
        // console.log(elems)
        //var elems = document.getElementById(id);
        // for (let i = 0; i < elems.length; i += 1) {
        //     let temp = <HTMLElement>elems[i]
        //     temp.style.display = 'none';
        // }
        // $("."+id).css("display", "none");
    }
    openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        //  evt.currentTarget.className += " active";
    }
    reportCustumDetails(id, reportname) {
        this.dataService.changeActiveReportFunction({ id, reportname });
        this.navCtrl.navigateForward('/customreportdetail');
    }
    goToTest() {
        //let testModal : multipleSelectModal[]=[]
        for (let report of this.reportDetails[0]['Report']) {
            // testModal.push({
            //   label: report.reportName,
            //   value: report.reportId,
            //   checked: true,
            // })
        }
        // this.navCtrl.push(TestPage,{
        //   list:this.reportDetails[0]['Report'],
        //   searchPlaceholder:'Search Reports',
        //   selectedItem:"32,31,S19",
        //   labelKey:'',
        //   valueKey:'',
        // });
    }
    listcount(modulesAll) {
        console.log(modulesAll);
        //count list per report
    }
    backPage() {
        this.navCtrl.pop();
    }
    hideMoreOptions() {
        console.log("hide More Clicked");
        alert("Hide More ");
    }
    filter() {
        let accordions = document.getElementsByTagName('ion-accordion-group');
        Array.from(accordions).forEach(x => {
            if (this.search == '' || this.search == null || this.search == undefined) {
                return;
            }
            else {
                x.value = x.firstChild.value;
            }
        });
    }
};
CustomreportsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__.ReportService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_token_token_service__WEBPACK_IMPORTED_MODULE_4__.TokenService }
];
CustomreportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-customreports',
        template: _customreports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customreports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomreportsPage);



/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */


  static filter(items, term) {
    const
    /** @type {?} */
    toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */

    function checkInside(item, term) {
      for (let
      /** @type {?} */
      property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }

        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }

}

Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};

Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.ɵfac
});
/**
 * @nocollapse
 */

Ng2SearchPipe.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Ng2SearchPipeModule {}

Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};

Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */

Ng2SearchPipeModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 33647:
/*!************************************************************************!*\
  !*** ./src/app/pages/customreports/customreports.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".custum-reports-mobile {\n  display: none !important;\n}\n\n.custum-reports-web {\n  padding-bottom: 75px;\n}\n\n.custum-reports-web ion-header ion-toolbar .navname {\n  height: 45px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.custum-reports-web ion-header ion-toolbar .navname span p {\n  color: white;\n  font-size: 1.3em;\n}\n\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea {\n  width: 20%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n}\n\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea img {\n  position: absolute;\n  left: 10px;\n}\n\n.custum-reports-web ion-content {\n  padding-bottom: 500px;\n}\n\n.custum-reports-web ion-content .headnameAndSearch {\n  margin: 45px 5px 45px 25px;\n  padding: 0px;\n}\n\n.custum-reports-web ion-content .headnameAndSearch span {\n  margin: 0px;\n}\n\n.custum-reports-web ion-content .headnameAndSearch span p {\n  margin-left: 15px;\n  margin: 5px;\n  font-size: 3.3em;\n}\n\n.custum-reports-web ion-content .headnameAndSearch ion-searchbar {\n  width: 40%;\n  margin-top: 25px;\n  border-radius: 5px;\n  padding: 0px;\n  background: white;\n  border: solid 4px #74b743;\n}\n\n.custum-reports-web ion-content .headnameAndSearch ion-searchbar .searchbar-input-container {\n  border-radius: 5px;\n  padding: 0px;\n}\n\n.custum-reports-web ion-content .headnameAndSearch ion-searchbar .searchbar-input-container input {\n  border: solid 3px #74b743;\n  border-radius: 5px;\n}\n\n.custum-reports-web ion-content .moduleList {\n  margin: 15px;\n}\n\n.custum-reports-web ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion {\n  scale: 1;\n  transition: 0.4s;\n  border: solid 3px rgb(202, 195, 195);\n  border-radius: 10px;\n  cursor: pointer;\n  pointer-events: all;\n}\n\n.custum-reports-web ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item {\n  border: solid 3px rgb(202, 195, 195);\n  border-radius: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transform: scale(1);\n  transition: 0.4s;\n}\n\n.custum-reports-web ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item:hover {\n  transform: scale(1.01);\n  transition: 0.4s;\n  border: solid 3px #74b743;\n}\n\n.custum-reports-web ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-expanded {\n  border: none;\n}\n\n.custum-reports-web ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-collapsed:hover {\n  border: solid 3px #74b743;\n  transform: scale(1.01);\n  transition: 0.4s;\n}\n\n.custum-reports-web ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-collapsing ion-item[slot=header],\n.custum-reports-web ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n\n.custum-reports-web ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-expanding ion-item[slot=header],\n.custum-reports-web ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-primary-contrast);\n}\n\n@media only screen and (max-width: 480px) {\n  .custum-reports-mobile {\n    display: block !important;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname {\n    height: 45px;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname span p {\n    color: white;\n    font-size: 1.1em;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea {\n    width: 20%;\n    height: 100%;\n    position: absolute;\n    left: 0px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea img {\n    position: absolute;\n    left: 10px;\n  }\n  .custum-reports-mobile ion-content {\n    padding-bottom: 500px;\n    margin-bottom: 75px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch {\n    margin: 45px 5px 45px 25px;\n    padding: 0px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch span {\n    margin: 0px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch span p {\n    margin-left: 15px;\n    margin: 5px;\n    font-size: 2.5em;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar {\n    width: 90%;\n    height: 45px;\n    max-height: 45px;\n    margin-top: 25px;\n    border-radius: 5px;\n    padding: 0px;\n    background: white;\n    border: solid 2px #74b743;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar .searchbar-input-container {\n    width: 100% !important;\n    max-width: 100% !important;\n    height: 100%;\n    max-height: 100% !important;\n    padding: 0px;\n    background: white;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar .searchbar-input-container input {\n    border-radius: 5px;\n    background: white;\n  }\n  .custum-reports-mobile ion-content .moduleList {\n    margin-bottom: 30px;\n    padding-bottom: 50px;\n    margin: 15px;\n  }\n  .custum-reports-mobile ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion {\n    scale: 1;\n    transition: 0.4s;\n    border: solid 3px rgb(202, 195, 195);\n    border-radius: 10px;\n    cursor: pointer;\n    pointer-events: all;\n  }\n  .custum-reports-mobile ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item {\n    border: solid 3px rgb(202, 195, 195);\n    border-radius: 10px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    transform: scale(1);\n    transition: 0.4s;\n  }\n  .custum-reports-mobile ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item:hover {\n    transform: scale(1.01);\n    transition: 0.4s;\n    border: solid 3px #74b743;\n  }\n  .custum-reports-mobile ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-expanded {\n    border: none;\n  }\n  .custum-reports-mobile ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-collapsed:hover {\n    border: solid 3px #74b743;\n    transform: scale(1.01);\n    transition: 0.4s;\n  }\n  .custum-reports-mobile ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-collapsing ion-item[slot=header],\n.custum-reports-mobile ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-collapsed ion-item[slot=header] {\n    --background: var(--ion-color-light);\n    --color: var(--ion-color-light-contrast);\n  }\n  .custum-reports-mobile ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-expanding ion-item[slot=header],\n.custum-reports-mobile ion-content .moduleList ion-grid ion-row ion-col.singleModule ion-accordion-group ion-accordion.accordion-expanded ion-item[slot=header] {\n    --background: var(--ion-color-primary);\n    --color: var(--ion-color-primary-contrast);\n  }\n  .custum-reports-web {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbXJlcG9ydHMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcT3JpZ2h0JTIwQXBwJTIwSW9uaWMlMjA2JTIwQnVpbGQlMjAzMCUyME1hcmNoXFxPcmlnaHRfdjRfTWluaUJ1aWxkXFxzcmNcXGFwcFxccGFnZXNcXGN1c3RvbXJlcG9ydHNcXGN1c3RvbXJlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0JBQUE7QUNBSjs7QURHRTtFQUdJLG9CQUFBO0FDRk47O0FET2M7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ05sQjs7QURTb0I7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNQdEI7O0FEV2tCO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ1RwQjs7QURVb0I7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNSdEI7O0FEZU07RUFDSSxxQkFBQTtBQ2JWOztBRGNVO0VBQ0ksMEJBQUE7RUFFQSxZQUFBO0FDYmQ7O0FEY2M7RUFDUSxXQUFBO0FDWnRCOztBRGFnQjtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDWGxCOztBRGNjO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSx5QkFBQTtBQ2JsQjs7QURla0I7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUNkcEI7O0FEZW9CO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ2J0Qjs7QURrQlk7RUFFRSxZQUFBO0FDakJkOztBRDJCOEI7RUFDSSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDekJsQzs7QUQ4QjhDO0VBQ0ksb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUM1QmxEOztBRDhCOEM7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUM1QmxEOztBRGtDOEI7RUFDSSxZQUFBO0FDaENsQzs7QURvQzhCO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDbENsQzs7QURxQzhCOztFQUVBLG9DQUFBO0VBQ0Esd0NBQUE7QUNuQzlCOztBRHNDOEI7O0VBRUEsc0NBQUE7RUFDQSwwQ0FBQTtBQ3BDOUI7O0FEaURFO0VBQ0U7SUFDRSx5QkFBQTtFQzlDSjtFRHFEWTtJQUVJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VDcERoQjtFRHVEa0I7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUNyRHBCO0VEeURnQjtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7RUN2RGxCO0VEd0RrQjtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtFQ3REcEI7RUQ2REk7SUFDSSxxQkFBQTtJQUNBLG1CQUFBO0VDM0RSO0VENERRO0lBQ0ksMEJBQUE7SUFFQSxZQUFBO0VDM0RaO0VENERZO0lBQ1EsV0FBQTtFQzFEcEI7RUQyRGM7SUFDRSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ3pEaEI7RUQ0RFk7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFFQSxpQkFBQTtJQUNBLHlCQUFBO0VDM0RoQjtFRDZEZ0I7SUFDRSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBRUEsWUFBQTtJQUNBLGlCQUFBO0VDNURsQjtFRDZEa0I7SUFFRSxrQkFBQTtJQUNBLGlCQUFBO0VDNURwQjtFRGlFVTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0VDL0RaO0VEeUU0QjtJQUNJLFFBQUE7SUFDQSxnQkFBQTtJQUNBLG9DQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUN2RWhDO0VENEU0QztJQUNJLG9DQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDMUVoRDtFRDRFNEM7SUFDSSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUMxRWhEO0VEZ0Y0QjtJQUNJLFlBQUE7RUM5RWhDO0VEa0Y0QjtJQUNJLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtFQ2hGaEM7RURtRjRCOztJQUVBLG9DQUFBO0lBQ0Esd0NBQUE7RUNqRjVCO0VEb0Y0Qjs7SUFFQSxzQ0FBQTtJQUNBLDBDQUFBO0VDbEY1QjtFRDZGRTtJQUNFLHdCQUFBO0VDM0ZKO0FBQ0YiLCJmaWxlIjoiY3VzdG9tcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdHVtLXJlcG9ydHMtd2ViXHJcbiAge1xyXG4gICAgICBcclxuICAgICAgcGFkZGluZy1ib3R0b206IDc1cHg7XHJcbiAgICAgIGlvbi1oZWFkZXJ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5uYXZuYW1lIHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuYmFja2J1dHRvbmFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpb24tY29udGVudHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MDBweDtcclxuICAgICAgICAgIC5oZWFkbmFtZUFuZFNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA0NXB4IDVweCA0NXB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuM2VtO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgNHB4ICM3NGI3NDM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2R1bGVMaXN0e1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBpb24tZ3JpZHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tY29sLnNpbmdsZU1vZHVsZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLWdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigyMDIsIDE5NSwgMTk1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjcmVwb3J0c1BhbmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpbmdsZUl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzaW5nIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZCBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICBpb24taGVhZGVye1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5uYXZuYW1lIHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuYmFja2J1dHRvbmFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpb24tY29udGVudHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MDBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgICAgICAgICAuaGVhZG5hbWVBbmRTZWFyY2gge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNDVweCA1cHggNDVweCAyNXB4O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4ICM3NGI3NDM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vZHVsZUxpc3R7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1ncmlke1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBpb24tcm93e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1jb2wuc2luZ2xlTW9kdWxle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDIwMiwgMTk1LCAxOTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNyZXBvcnRzUGFuZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2luZ2xlSXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigyMDIsIDE5NSwgMTk1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW06aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzZWQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNpbmcgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICAuY3VzdHVtLXJlcG9ydHMtd2ViIHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBcclxuXHJcblxyXG4iLCIuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdHVtLXJlcG9ydHMtd2ViIHtcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUgc3BhbiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIC5iYWNrYnV0dG9uYXJlYSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSAuYmFja2J1dHRvbmFyZWEgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiA1MDBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIHtcbiAgbWFyZ2luOiA0NXB4IDVweCA0NXB4IDI1cHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIHNwYW4ge1xuICBtYXJnaW46IDBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIHNwYW4gcCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAzLjNlbTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIGlvbi1zZWFyY2hiYXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogc29saWQgNHB4ICM3NGI3NDM7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAubW9kdWxlTGlzdCB7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLm1vZHVsZUxpc3QgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sLnNpbmdsZU1vZHVsZSBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24ge1xuICBzY2FsZTogMTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDIwMiwgMTk1LCAxOTUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5tb2R1bGVMaXN0IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbC5zaW5nbGVNb2R1bGUgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uICNyZXBvcnRzUGFuZWwgLnNpbmdsZUl0ZW0gaW9uLWl0ZW0ge1xuICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAubW9kdWxlTGlzdCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wuc2luZ2xlTW9kdWxlIGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbiAjcmVwb3J0c1BhbmVsIC5zaW5nbGVJdGVtIGlvbi1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0Mztcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLm1vZHVsZUxpc3QgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sLnNpbmdsZU1vZHVsZSBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAubW9kdWxlTGlzdCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wuc2luZ2xlTW9kdWxlIGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkOmhvdmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLm1vZHVsZUxpc3QgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sLnNpbmdsZU1vZHVsZSBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNpbmcgaW9uLWl0ZW1bc2xvdD1oZWFkZXJdLFxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAubW9kdWxlTGlzdCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wuc2luZ2xlTW9kdWxlIGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLm1vZHVsZUxpc3QgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sLnNpbmdsZU1vZHVsZSBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyBpb24taXRlbVtzbG90PWhlYWRlcl0sXG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5tb2R1bGVMaXN0IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbC5zaW5nbGVNb2R1bGUgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIHNwYW4gcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIC5iYWNrYnV0dG9uYXJlYSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSAuYmFja2J1dHRvbmFyZWEgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCB7XG4gICAgbWFyZ2luOiA0NXB4IDVweCA0NXB4IDI1cHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIHNwYW4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIHNwYW4gcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjNzRiNzQzO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIGlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2ggaW9uLXNlYXJjaGJhciAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLm1vZHVsZUxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLm1vZHVsZUxpc3QgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sLnNpbmdsZU1vZHVsZSBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24ge1xuICAgIHNjYWxlOiAxO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDIwMiwgMTk1LCAxOTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAubW9kdWxlTGlzdCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wuc2luZ2xlTW9kdWxlIGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbiAjcmVwb3J0c1BhbmVsIC5zaW5nbGVJdGVtIGlvbi1pdGVtIHtcbiAgICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5tb2R1bGVMaXN0IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbC5zaW5nbGVNb2R1bGUgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uICNyZXBvcnRzUGFuZWwgLnNpbmdsZUl0ZW0gaW9uLWl0ZW06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLm1vZHVsZUxpc3QgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sLnNpbmdsZU1vZHVsZSBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAubW9kdWxlTGlzdCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wuc2luZ2xlTW9kdWxlIGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkOmhvdmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5tb2R1bGVMaXN0IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbC5zaW5nbGVNb2R1bGUgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzaW5nIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSxcbi5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLm1vZHVsZUxpc3QgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sLnNpbmdsZU1vZHVsZSBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZCBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLm1vZHVsZUxpc3QgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sLnNpbmdsZU1vZHVsZSBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyBpb24taXRlbVtzbG90PWhlYWRlcl0sXG4uY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5tb2R1bGVMaXN0IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbC5zaW5nbGVNb2R1bGUgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtd2ViIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 29899:
/*!************************************************************************!*\
  !*** ./src/app/pages/customreports/customreports.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n<!--     Mobile View     -->\n\n<div class=\"custum-reports-mobile\" style=\"width: 100%; height: 100%\">\n  <ion-header>\n    <ion-toolbar color=\"primary\" hideBackButton click=\"hideMoreOptions()\">\n      <div class=\"navname\">\n        <div class=\"backbuttonarea\" (click)=\"backPage()\">\n          <img src=\"assets/imgs/ic_back.png\" style=\"height: 25px\" />\n        </div>\n\n        <span><p>Report Engine</p></span>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content no-padding>\n    <div class=\"headnameAndSearch\">\n      <span><p>Custom Reports</p></span>\n\n      <ion-searchbar id=\"mainPageSrcBar\"\n        (input)=\"listcount(reportDetails[0]['Report'])\"\n        [(ngModel)]=\"search\"\n        show-clear-button=\"focus\"\n         (ionChange)=\"filter()\"    \n\n       >\n\n      \n\n      </ion-searchbar>\n\n      \n\n     \n    </div>\n\n    <div class=\"moduleList\" *ngIf=\"reportDetails && reportDetails[0]\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\"\n            *ngFor=\"let item of reportDetails[0]['Module']  \"\n            class=\"singleModule\">\n            \n            <ion-accordion-group *ngIf=\"reportDetails[0]['Report'].length!=0\" value=\"\">\n                  <ion-accordion  value=\"{{item.moduleName}}\" >\n                    <ion-item slot=\"header\">\n                      <ion-label>{{item.moduleName}}</ion-label>\n                    </ion-item>\n                    <div class=\"ion-padding\" slot=\"content\" id=\"reportsPanel\">\n                      <div class=\"singleItem\" \n                      *ngFor=\"let report of reportDetails[0]['Report'] | filter:search\">\n\n                      <ion-item *ngIf=\"item.moduleId == report.moduleId\" lines=\"none\"\n                            id=\"{{item.moduleName}}_{{report.moduleId}}\"\n                            (click)=\"reportCustumDetails(report.reportId,report.reportName)\"\n                        >\n                          <ion-label>{{report.reportName}}</ion-label>\n                          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                        </ion-item>\n\n                      </div>\n                    </div>\n                  </ion-accordion>\n                \n                  \n            </ion-accordion-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-content>\n</div>\n\n<!--     Mobile View     -->\n\n<!--     Browser  View     -->\n\n<div class=\"custum-reports-web\" style=\"width: 100%; height: 100%\">\n  <ion-header>\n    <ion-toolbar color=\"primary\" hideBackButton click=\"hideMoreOptions()\">\n      <div class=\"navname\">\n        <div class=\"backbuttonarea\" (click)=\"backPage()\">\n          <img src=\"assets/imgs/ic_back.png\" style=\"height: 25px\" />\n        </div>\n\n        <span><p>Report Engine</p></span>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content no-padding>\n    <div class=\"headnameAndSearch\">\n      <span><p>Custom Reports</p></span>\n\n      <ion-searchbar id=\"mainPageSrcBar\"\n        (input)=\"listcount(reportDetails[0]['Report'])\"\n        [(ngModel)]=\"search\"\n        show-clear-button=\"focus\"\n         (ionChange)=\"filter()\"    \n\n       >\n\n      \n\n      </ion-searchbar>\n\n      \n\n     \n    </div>\n\n    <div class=\"moduleList\" *ngIf=\"reportDetails && reportDetails[0]\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\"\n            *ngFor=\"let item of reportDetails[0]['Module']  \"\n            class=\"singleModule\">\n            \n            <ion-accordion-group *ngIf=\"reportDetails[0]['Report'].length!=0\" value=\"{{item.moduleName}}\">\n                  <ion-accordion  value=\"{{item.moduleName}}\" >\n                    <ion-item slot=\"header\">\n                      <ion-label>{{item.moduleName}}</ion-label>\n                    </ion-item>\n                    <div class=\"ion-padding\" slot=\"content\" id=\"reportsPanel\">\n                      <div class=\"singleItem\" \n                      *ngFor=\"let report of reportDetails[0]['Report'] | filter:search\">\n\n                      <ion-item *ngIf=\"item.moduleId == report.moduleId\" lines=\"none\"\n                            id=\"{{item.moduleName}}_{{report.moduleId}}\"\n                            (click)=\"reportCustumDetails(report.reportId,report.reportName)\"\n                        >\n                          <ion-label>{{report.reportName}}</ion-label>\n                          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                        </ion-item>\n\n                      </div>\n                    </div>\n                  </ion-accordion>\n                \n                  \n            </ion-accordion-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-content>\n</div>\n\n<!--     Browser  View     -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customreports_customreports_module_ts.js.map