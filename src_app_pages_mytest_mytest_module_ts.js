"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mytest_mytest_module_ts"],{

/***/ 32683:
/*!*******************************************************!*\
  !*** ./src/app/pages/mytest/mytest-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MytestPageRoutingModule": () => (/* binding */ MytestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mytest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mytest.page */ 82405);




const routes = [
    {
        path: '',
        component: _mytest_page__WEBPACK_IMPORTED_MODULE_0__.MytestPage
    }
];
let MytestPageRoutingModule = class MytestPageRoutingModule {
};
MytestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MytestPageRoutingModule);



/***/ }),

/***/ 47124:
/*!***********************************************!*\
  !*** ./src/app/pages/mytest/mytest.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MytestPageModule": () => (/* binding */ MytestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mytest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mytest-routing.module */ 32683);
/* harmony import */ var _mytest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mytest.page */ 82405);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 92302);
/* harmony import */ var src_app_pipes_CustomKeyValue_customkeyvalue_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/CustomKeyValue/customkeyvalue.pipe */ 4904);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ 63806);












let MytestPageModule = class MytestPageModule {
};
MytestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _mytest_routing_module__WEBPACK_IMPORTED_MODULE_0__.MytestPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_11__.IonicSelectableModule,
            src_app_pipes_CustomKeyValue_customkeyvalue_pipe__WEBPACK_IMPORTED_MODULE_3__.MyKeyvaluePipe,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_11__.IonicSelectableModule,
        ],
        declarations: [_mytest_page__WEBPACK_IMPORTED_MODULE_1__.MytestPage]
    })
], MytestPageModule);



/***/ }),

/***/ 82405:
/*!*********************************************!*\
  !*** ./src/app/pages/mytest/mytest.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MytestPage": () => (/* binding */ MytestPage)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mytest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mytest.page.html?ngResource */ 61432);
/* harmony import */ var _mytest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mytest.page.scss?ngResource */ 29082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_json_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/json/json.service */ 98971);
/* harmony import */ var src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/report/report.service */ 45945);
/* harmony import */ var src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/BaseComp */ 88075);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ 84177);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ 43015);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_components_report_column_selector_report_column_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/report-column-selector/report-column-selector.component */ 87345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);















let MytestPage = class MytestPage extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_5__.BaseComp {
  constructor(navCtrl, dataService, loadingCtrl, datePipe, alert, json, tree, modalCtrl, http, route) {
    super();
    this.navCtrl = navCtrl;
    this.dataService = dataService;
    this.loadingCtrl = loadingCtrl;
    this.datePipe = datePipe;
    this.alert = alert;
    this.json = json;
    this.tree = tree;
    this.modalCtrl = modalCtrl;
    this.http = http;
    this.route = route;
    this.isOpen = false;
    this.people = [{
      id: 1,
      name: 'John',
      value: 'Male'
    }, {
      id: 2,
      name: 'Jane',
      value: 'Female'
    }, {
      id: 3,
      name: 'Alice',
      value: 'Female'
    }, {
      id: 4,
      name: 'Bob',
      value: 'Male'
    }, {
      id: 5,
      name: 'Sam',
      value: 'Male'
    }];
  }

  ngOnInit() {}

  backPage() {
    this.navCtrl.pop();
  }

  goToPowerBIPage() {
    this.route.navigateByUrl('powerbi');
  }

  exportPdf() {
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]("l", "pt", "a4");
    const headers = ['Cow', 'Buff', 'Total', 'Result'];
    const columnWidths = [220, 220, 220, 100];
    const newRowValues = ['Fat', 'SNF', 'Qty', 'Amount', 'Fat', 'SNF', 'Qty', 'Amount', 'Fat', 'SNF', 'Qty', 'Amount', 'Quality'];
    const newRowWidths = [55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 100];
    const randomDataRows = 3; // Number of random data rows (reduced to 3)

    const qualityAlternatives = ['Good', 'Sour', 'Fat']; // Alternating values for the "Quality" column

    let currentX = 50; // Left margin of 50

    let currentY = 100; // Top margin of 100
    // Render the headers row

    doc.setFont("bold"); // Set font style to bold for headers

    doc.setFontSize(12); // Set font size for headers

    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      const width = columnWidths[i];
      doc.setDrawColor(0); // Set border color to black

      doc.rect(currentX, currentY, width, 20, 'S'); // Add row border only

      doc.text(header, currentX + width / 2, currentY + 15, {
        align: 'center'
      }); // Center align text within the cell

      currentX += width;
    }

    currentX = 50;
    currentY += 20; // Move to the next row
    // Render the new row

    doc.setFont("normal"); // Set font style to normal for the new row

    for (let i = 0; i < newRowValues.length; i++) {
      const value = newRowValues[i];
      const width = newRowWidths[i];
      doc.setDrawColor(0); // Set border color to black

      doc.rect(currentX, currentY, width, 20, 'S'); // Add row border only

      if (value === 'Qty' || value === 'Amount') {
        doc.text(value, currentX + width - 5, currentY + 15, {
          align: 'right'
        }); // Adjust text position within the cell
      } else {
        doc.text(value, currentX + width / 2, currentY + 15, {
          align: 'center'
        }); // Center align text within the cell
      }

      currentX += width;
    }

    currentY += 20; // Move to the next row
    // Render the random data rows

    for (let i = 0; i < randomDataRows; i++) {
      currentX = 50;

      for (let j = 0; j < newRowValues.length; j++) {
        const width = newRowWidths[j];

        if (j === newRowValues.length - 1) {
          // Alternate the "Quality" column value
          const qualityValue = qualityAlternatives[i % qualityAlternatives.length];
          doc.setDrawColor(0); // Set border color to black

          doc.rect(currentX, currentY, width, 20, 'S'); // Add row border only

          doc.text(qualityValue, currentX + width / 2, currentY + 15, {
            align: 'center'
          }); // Center align text within the cell
        } else {
          // Generate random data for other columns
          const randomValue = Math.floor(Math.random() * 100).toString(); // Generate a random value

          doc.setDrawColor(0); // Set border color to black

          doc.rect(currentX, currentY, width, 20, 'S'); // Add row border only

          if (newRowValues[j] === 'Qty' || newRowValues[j] === 'Amount') {
            doc.text(randomValue, currentX + width - 5, currentY + 15, {
              align: 'right'
            }); // Adjust text position within the cell
          } else {
            doc.text(randomValue, currentX + width / 2, currentY + 15, {
              align: 'center'
            }); // Center align text within the cell
          }
        }

        currentX += width;
      }

      currentY += 20; // Move to the next row
    } // Add the additional row


    const additionalRowWidths = [660, 100];
    const additionalRowValues = ['Amount: Rs 400', 'Remarks:'];
    currentX = 50;

    for (let i = 0; i < additionalRowValues.length; i++) {
      const value = additionalRowValues[i];
      const width = additionalRowWidths[i];
      doc.setDrawColor(0); // Set border color to black

      doc.rect(currentX, currentY, width, 20, 'S'); // Add row border only

      doc.text(value, currentX + width / 2, currentY + 15, {
        align: 'center'
      }); // Center align text within the cell

      currentX += width;
    }

    doc.save('grid.pdf');
  }

  changedFilter(event) {
    console.log(event, "ye hai event");
  }

  clearSelectable(id) {
    let selectable = document.getElementById(id);
    console.log(selectable, selectable.value);
    selectable.getElementsByClassName('ionic-selectable-value-item')[0].innerHTML = "Please Select Karle  ";
    selectable.value = "";
    console.log(selectable, selectable.value), "after change";
  }

  openModal() {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isOpen = false;
      const modal = yield _this.modalCtrl.create({
        component: src_app_components_report_column_selector_report_column_selector_component__WEBPACK_IMPORTED_MODULE_8__.ReportColumnSelectorComponent,
        componentProps: {
          dataToTakeAsInput: 123
        }
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {// this.message = `Hello, ${data}!`;
      }
    })();
  }

  presentPopover(e) {
    this.popover.event = e;
    this.isOpen = true;
  }

  goToQuickInsight() {
    this.route.navigateByUrl('quick');
  }

};

MytestPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
}, {
  type: src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_4__.ReportService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: src_app_services_json_json_service__WEBPACK_IMPORTED_MODULE_3__.JsonService
}, {
  type: src_app_services_json_json_service__WEBPACK_IMPORTED_MODULE_3__.JsonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}];

MytestPage.propDecorators = {
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ['popover']
  }]
};
MytestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-mytest',
  template: _mytest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_mytest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MytestPage);


/***/ }),

/***/ 98971:
/*!***********************************************!*\
  !*** ./src/app/services/json/json.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataWithMultiHeader": () => (/* binding */ DataWithMultiHeader),
/* harmony export */   "JsonService": () => (/* binding */ JsonService),
/* harmony export */   "reportTablesSampleData": () => (/* binding */ reportTablesSampleData),
/* harmony export */   "reportTablesSampleDataWithMultiHeader": () => (/* binding */ reportTablesSampleDataWithMultiHeader),
/* harmony export */   "reportTablesSampleDataWithMultiHeaderB": () => (/* binding */ reportTablesSampleDataWithMultiHeaderB)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let JsonService = class JsonService {
    constructor() { }
    createDataTree(data) {
        let idMapping = null;
        idMapping = data.reduce((acc, el, i) => {
            acc[el.id] = i;
            return acc;
        }, {});
        data.forEach((el) => {
            // Handle the root element
            if (el.parentId === null) {
                this.root = el;
                return;
            }
            // Use our mapping to locate the parent element in our data array
            this.parentEl = data[idMapping[el.parentId]];
            // Add our current el to its parent's `children` array
            this.parentEl.children = [...(this.parentEl.children || []), el];
        });
        return this.root;
    }
};
JsonService.ctorParameters = () => [];
JsonService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], JsonService);

const reportTablesSampleData = [
    [
        { Header: [
                { columnName: "Table1Column1" },
                { columnName: "Table1Column2" },
                { columnName: "Table1Column3" },
                { columnName: "Table1Column4" },
                { columnName: "Table1Column5" },
            ] },
        { Data: [
                { Table1Column1: "A", Table1Column2: "AA", Table1Column3: "AAA", Table1Column4: "AAAA", Table1Column5: "AAAAA" },
                { Table1Column1: "B", Table1Column2: "BB", Table1Column3: "BBB", Table1Column4: "BBBB", Table1Column5: "BBBBB" },
                { Table1Column1: "C", Table1Column2: "CC", Table1Column3: "CCC", Table1Column4: "CCCC", Table1Column5: "CCCCC" },
                { Table1Column1: "D", Table1Column2: "DD", Table1Column3: "DDD", Table1Column4: "DDDD", Table1Column5: "DDDDD" },
                { Table1Column1: "E", Table1Column2: "EE", Table1Column3: "EEE", Table1Column4: "EEEE", Table1Column5: "EEEEE" },
            ] }
    ],
    [
        { Header: [
                { columnName: "Table2Column1" },
                { columnName: "Table2Column2" },
                { columnName: "Table2Column3" },
                { columnName: "Table2Column4" },
                { columnName: "Table2Column5" },
            ] },
        { Data: [
                { Table2Column1: "F", Table2Column2: "FF", Table2Column3: "FFF", Table2Column4: "FFFF", Table2Column5: "FFFFF" },
                { Table2Column1: "G", Table2Column2: "GG", Table2Column3: "GGG", Table2Column4: "GGGG", Table2Column5: "GGGGG" },
                { Table2Column1: "H", Table2Column2: "HH", Table2Column3: "HHH", Table2Column4: "HHHH", Table2Column5: "HHHHH" },
                { Table2Column1: "I", Table2Column2: "II", Table2Column3: "III", Table2Column4: "IIII", Table2Column5: "IIIII" },
                { Table2Column1: "J", Table2Column2: "JJ", Table2Column3: "JJJ", Table2Column4: "JJJJ", Table2Column5: "JJJJJ" },
            ] }
    ]
];
const reportTablesSampleDataWithMultiHeader = [
    [
        { Header: [
                [
                    { columnName: "Cow" },
                    { columnName: "Buffalo" },
                    { columnName: "Mix" }
                ],
                [
                    { parentHeader: "CowFat", columnName: "Fat" },
                    { parentHeader: "CowSnF", columnName: "SnF" },
                    { parentHeader: "BuffaloFat", columnName: "Fat" },
                    { parentHeader: "BuffaloSnF", columnName: "SnF" },
                    { parentHeader: "MixFat", columnName: "Fat" },
                    { parentHeader: "MixSnF", columnName: "SnF" }
                ]
            ]
        },
        { Data: [
                { CowFat: 6, CowSnF: 2, BuffaloFat: 5, BuffaloSnF: 5, MixFat: 17, MixSnF: 1211 },
                { CowFat: 2, CowSnF: 4, BuffaloFat: 34, BuffaloSnF: 15, MixFat: 2137, MixSnF: 151 },
                { CowFat: 55, CowSnF: 54, BuffaloFat: 345, BuffaloSnF: 215, MixFat: 7, MixSnF: 115 },
                { CowFat: 23, CowSnF: 98, BuffaloFat: 52, BuffaloSnF: 3215, MixFat: 1237, MixSnF: 15211 },
                { CowFat: 123, CowSnF: 212, BuffaloFat: 215, BuffaloSnF: 25, MixFat: 7123, MixSnF: 1111 },
            ]
        }
    ]
];
const reportTablesSampleDataWithMultiHeaderB = [
    [
        { Header: [
                [
                    { columnName: "  " },
                    { columnName: "Cow" },
                    { columnName: "Buffalo" },
                    { columnName: "Mix" }
                ],
                [
                    { parentHeader: "  ", columnName: "  " },
                    { parentHeader: "  ", columnName: "  " },
                    { parentHeader: "CowFat", columnName: "Fat" },
                    { parentHeader: "CowSnF", columnName: "SnF" },
                    { parentHeader: "BuffaloFat", columnName: "Fat" },
                    { parentHeader: "BuffaloSnF", columnName: "SnF" },
                    { parentHeader: "MixFat", columnName: "Fat" },
                    { parentHeader: "MixSnF", columnName: "SnF" }
                ]
            ]
        },
        { Data: [
                { Label: "Good", CowFat: 6, CowSnF: 2, BuffaloFat: 5, BuffaloSnF: 5, MixFat: 17, MixSnF: 1211, hasLabel: true },
                { Label: "Sour", CowFat: 2, CowSnF: 4, BuffaloFat: 34, BuffaloSnF: 15, MixFat: 2137, MixSnF: 151, hasLabel: true },
                { Label: "Curd", CowFat: 55, CowSnF: 54, BuffaloFat: 345, BuffaloSnF: 215, MixFat: 7, MixSnF: 115, hasLabel: true },
                { Label: "Destroy", CowFat: 23, CowSnF: 98, BuffaloFat: 52, BuffaloSnF: 3215, MixFat: 1237, MixSnF: 15211, hasLabel: true },
            ]
        }
    ]
];
const DataWithMultiHeader = [
    { Report: "Report Name", id: 0, parentId: null },
    { table: "Table 1 Name", id: 1, parentId: 0 },
    { header: "Top Header 1", id: 2, parentId: 1 },
    { header: "Top Header 2", id: 3, parentId: 1 },
    { header: "Sub Header 1", id: 4, parentId: 2 },
    { header: "Sub Header 2", id: 5, parentId: 2 },
    { header: "Sub Header 1", id: 6, parentId: 3 },
    { header: "Sub Header 2", id: 7, parentId: 3 },
    { data: "Sample Data 1", id: 8, parentId: 4 },
    { data: "Sample Data 2", id: 9, parentId: 5 },
    { data: "Sample Data 1", id: 10, parentId: 6 },
    { data: "Sample Data 2", id: 11, parentId: 7 }
];


/***/ }),

/***/ 29082:
/*!**********************************************************!*\
  !*** ./src/app/pages/mytest/mytest.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".custum-reports-web {\n  padding-bottom: 50px;\n}\n.custum-reports-web ion-header ion-toolbar .navname {\n  height: 45px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.custum-reports-web ion-header ion-toolbar .navname span p {\n  color: white;\n  font-size: 1.3em;\n}\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea {\n  width: 20%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n}\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea img {\n  position: absolute;\n  left: 10px;\n}\n.custum-reports-web ion-content input#dateInput {\n  background: inherit;\n  color: #000;\n  font-size: 12px;\n  border: solid 3px #74b743;\n  background: inherit;\n  color: #000;\n  font-size: 12px;\n  width: 80%;\n  height: 45px;\n  max-height: 45px;\n}\n.custum-reports-mobile {\n  display: none !important;\n}\n@media only screen and (max-width: 480px) {\n  .custum-reports-mobile {\n    display: block !important;\n    padding-bottom: 50px;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname {\n    height: 45px;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname span p {\n    color: white;\n    font-size: 1.3em;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea {\n    width: 20%;\n    height: 100%;\n    position: absolute;\n    left: 0px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea img {\n    position: absolute;\n    left: 10px;\n  }\n  .custum-reports-mobile ion-content {\n    margin-bottom: 75px;\n    padding-bottom: 50px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active {\n    display: block;\n    width: 400px;\n    height: 100%;\n    max-height: 100% !important;\n    margin-top: 5px;\n    margin-bottom: 50px;\n    overflow-y: auto;\n    z-index: 50;\n    position: absolute;\n    background: white;\n    box-shadow: 15px 0px 50px -10px rgba(0, 0, 0, 0.75);\n    overflow-x: visible;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .sideNavCloseButton {\n    z-index: 51;\n    width: 50px;\n    height: 30px;\n    position: absolute;\n    right: 0px;\n    top: 20px;\n    z-index: 1000;\n    margin-left: 0px !important;\n    padding: auto;\n    background: #74b743;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n    border-radius: 15px 0px 0px 15px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .sideNavCloseButton ion-icon {\n    color: white;\n    scale: 1.5;\n    margin: 5px;\n    z-index: 52;\n    position: absolute;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .title {\n    margin-top: 15px;\n    margin-left: 15px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .title span {\n    font-size: 30px;\n    font-weight: bold;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea {\n    width: 85%;\n    margin: 20px auto;\n    margin-bottom: 50px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav {\n    width: 95%;\n    margin: 5px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group {\n    width: 100% !important;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion {\n    scale: 1;\n    transition: 0.4s;\n    border: solid 3px rgb(202, 195, 195);\n    border-radius: 10px;\n    cursor: pointer;\n    pointer-events: all;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item {\n    border: solid 3px rgb(202, 195, 195);\n    border-radius: 10px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    transform: scale(1);\n    transition: 0.4s;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item:hover {\n    transform: scale(1.01);\n    transition: 0.4s;\n    border: solid 3px #74b743;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded {\n    border: none;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed:hover {\n    border: solid 3px #74b743;\n    transform: scale(1.01);\n    transition: 0.4s;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsing ion-item[slot=header],\n.custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed ion-item[slot=header] {\n    --background: var(--ion-color-light);\n    --color: var(--ion-color-light-contrast);\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanding ion-item[slot=header],\n.custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded ion-item[slot=header] {\n    --background: var(--ion-color-primary);\n    --color: var(--ion-color-primary-contrast);\n  }\n  .custum-reports-mobile ion-content .sideNav {\n    display: none;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch {\n    height: 60px;\n    margin-bottom: 15px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch .sideNavButton {\n    width: 30px;\n    height: 30px;\n    margin-left: 0px !important;\n    margin-top: 15px;\n    padding: auto;\n    background: #74b743;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n    border-radius: 0px 15px 15px 0px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch .sideNavButton ion-icon {\n    color: white;\n    scale: 1.3;\n    margin: 5px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch span {\n    border: solid 2x orange;\n    width: 100%;\n    height: auto;\n    margin-left: 30px;\n    font-size: 1.5em;\n    margin-bottom: 20px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar {\n    width: 75%;\n    margin-top: 2%;\n    border-radius: 15px;\n    padding: 0px;\n    background: white;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar .searchbar-input-container {\n    border: none;\n    border-radius: 15px;\n    padding: 0px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar .searchbar-input-container input {\n    border: solid 2px grey;\n    border-radius: 15px;\n  }\n  .custum-reports-mobile ion-content .filterContainer {\n    width: 102%;\n    max-width: 102%;\n    margin-left: -1%;\n    margin-right: 0px;\n    border-radius: 0px 0px 80px 80px;\n    box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n    margin-top: 0px;\n    padding-top: 5px !important;\n    padding-left: 25px !important;\n    padding-right: 25px !important;\n    padding-bottom: 0px !important;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active {\n    display: block !important;\n    margin-left: 15px;\n    margin-right: 15px;\n    width: 98%;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem {\n    border: solid 3px #74b743;\n    margin-top: 10px;\n    max-height: 45px;\n    height: 45px;\n    max-height: 45px;\n    padding: 0px !important;\n    display: flex;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem input {\n    border: none;\n    margin-top: 0px;\n    height: 40px;\n    max-height: 40px;\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-left: 0px;\n    margin-right: 0px;\n    display: flex;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem ionic-selectable {\n    margin-top: 0px;\n    height: 40px;\n    max-height: 40px;\n    width: 100%;\n    max-width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#errorMsgRow {\n    padding: 5px;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#errorMsgRow ion-col {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#filterButtonsRow ion-col#filterButtonCol {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid {\n    display: none !important;\n  }\n  .custum-reports-mobile ion-content .filterContainer .hideGridBtn {\n    width: 50%;\n    margin-left: 25%;\n  }\n  .custum-reports-mobile ion-content .filterContainer .hideGridBtn .iconArea {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .filterContainer .hideGridBtn .iconArea ion-icon {\n    scale: 1.5;\n  }\n  .custum-reports-mobile ion-content .resultsFilter {\n    border-radius: 0px 0px 30px 30px;\n    width: 80%;\n    margin-left: 10%;\n    height: auto;\n    margin-top: 5px;\n    z-index: -10;\n    box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n    padding: 10px;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header {\n    width: 95%;\n    margin-left: 2.5%;\n    height: 30px;\n    max-height: 30px !important;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .spanarea {\n    width: 90%;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .spanarea span {\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .iconArea {\n    width: 8%;\n    margin-left: 5px;\n    display: flex;\n    flex-direction: row-reverse;\n    margin-top: 5px;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .iconArea ion-icon {\n    scale: 1.5;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#divshow {\n    width: 90%;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) input {\n    height: 80%;\n    width: 100%;\n    border: solid 2px #74b743;\n  }\n  .custum-reports-mobile ion-content .results {\n    border-radius: 5px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    padding: 5px;\n    padding-bottom: 25px;\n    width: 95%;\n    margin-left: 2.5%;\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.45), 25px 0px 20px -20px rgba(0, 0, 0, 0.45), 0px 25px 20px -20px rgba(0, 0, 0, 0.45), -25px 0px 20px -20px rgba(0, 0, 0, 0.45);\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid {\n    padding: 0px;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop {\n    width: 96%;\n    height: 60px;\n    margin-left: 2%;\n    max-width: 96%;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount {\n    height: 100%;\n    max-height: 60px;\n    display: flex;\n    align-items: center;\n    width: 49%;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea {\n    height: 100%;\n    width: 40%;\n    display: flex;\n    align-items: center;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea span {\n    display: flex;\n    align-items: center;\n    align-content: center;\n    text-align: left;\n    height: 100%;\n    width: auto;\n    margin-left: 0px;\n    font-size: 25px;\n    font-weight: bold;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount #repPerPage {\n    width: 60%;\n    max-width: 300px;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch {\n    height: 100%;\n    max-height: 60px;\n    display: flex;\n    align-items: center;\n    width: 50%;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .exportBtns {\n    width: 49%;\n    display: flex;\n    flex-direction: row;\n    align-content: flex-end;\n    align-items: flex-end;\n    padding-left: 10px;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch {\n    width: 49%;\n    height: 100%;\n    max-height: 60px;\n    display: flex;\n    align-items: center;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch input {\n    width: 90%;\n    height: 45px;\n    border: solid 2px #74b743;\n  }\n  .custum-reports-mobile ion-content .results table#pager {\n    width: 98%;\n    margin-left: 1%;\n    margin-top: 5px;\n    padding-bottom: 0px;\n    table-layout: fixed;\n  }\n  .custum-reports-mobile ion-content .results table#pager .switchheaderclass {\n    background-color: #d1d1d1;\n    color: #000000;\n  }\n  .custum-reports-mobile ion-content .results table#pager .switchheaderclass ion-icon {\n    transform: rotateZ(180deg);\n  }\n  .custum-reports-mobile ion-content .results table#pager thead {\n    background: #fff;\n    color: #000000;\n    height: 40px;\n    font-size: 15px;\n    margin-bottom: 10px;\n  }\n  .custum-reports-mobile ion-content .results table#pager thead tr {\n    border: solid 2px white;\n    padding-left: 2px;\n  }\n  .custum-reports-mobile ion-content .results table#pager thead tr th {\n    border: solid 2px white;\n    padding-left: 5px;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody {\n    margin-top: 5px;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody tr:nth-child(odd) {\n    background: #eceff0;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody tr {\n    border: solid 2px white;\n    height: 30px;\n    margin: 5px;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody tr td {\n    font-size: 18px;\n    padding-left: 8px;\n    max-width: 20% !important;\n    overflow: hidden;\n  }\n  .custum-reports-mobile ion-content .results table#pager tfoot {\n    margin-bottom: 5px;\n    height: 45px;\n    margin-top: 20px;\n    margin-left: 0px;\n    justify-content: start;\n    align-content: center;\n    align-items: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .results table#pager tfoot pagination-controls.my-pagination {\n    margin: auto;\n    padding-top: 20px;\n    display: flex;\n    flex-direction: row;\n    height: 45px;\n    width: 500px;\n  }\n  .custum-reports-web {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15dGVzdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxPcmlnaHQlMjBBcHAlMjBJb25pYyUyMDYlMjBCdWlsZCUyMDMwJTIwTWFyY2hcXE9yaWdodF92NF9NaW5pQnVpbGRcXHNyY1xcYXBwXFxwYWdlc1xcbXl0ZXN0XFxteXRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7QUNBSjtBREtZO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNKaEI7QURPa0I7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNMcEI7QURTZ0I7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDUGxCO0FEUWtCO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDTnBCO0FEaUJNO0VBRUUsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNoQlI7QURrQ0M7RUFDSyx3QkFBQTtBQy9CTjtBRG1DSTtFQUNFO0lBQ0UseUJBQUE7SUFFQSxvQkFBQTtFQ2pDTjtFRHNDYztJQUVJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VDckNsQjtFRHdDb0I7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUN0Q3RCO0VEMENrQjtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0Es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QTtFQ25LZDtFRHFLYztJQUNFLG1CQUFBO0VDbktoQjtFRHFLYztJQUNFLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNuS2hCO0VEcUtnQjtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBRUEsZ0JBQUE7RUNwS2xCO0VEeUtZO0lBRUUsa0JBQUE7SUFFQSxZQUFBO0lBRUEsZ0JBQUE7SUFDQSxnQkFBQTtJQUdBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VDNUtkO0VENktjO0lBRUUsWUFBQTtJQUNBLGlCQUFBO0lBR0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUM5S2hCO0VENkxJO0lBQ0Usd0JBQUE7RUMzTE47QUFDRiIsImZpbGUiOiJteXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3R1bS1yZXBvcnRzLXdlYlxyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGlvbi1oZWFkZXJ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubmF2bmFtZSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYmFja2J1dHRvbmFyZWEge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29udGVudCB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgaW5wdXQjZGF0ZUlucHV0e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XHJcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDVweDsgIFxyXG4gICAgfVxyXG5cclxuICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICBcclxuICBcclxuXHJcbiAgICB9XHJcbiBcclxuXHJcblxyXG59XHJcblxyXG4gLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgaW9uLWhlYWRlcntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2bmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5iYWNrYnV0dG9uYXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlvbi1jb250ZW50IHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo3NXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLnNpZGVOYXYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDE1cHggMHB4IDUwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAuc2lkZU5hdkNsb3NlQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgei1pbmRleDogNTE7XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJlcG9ydExpc3RBcmVhIHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigyMDIsIDE5NSwgMTk1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNyZXBvcnRzUGFuZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaW5nbGVJdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzaW5nIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzZWQgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2lkZU5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaGVhZG5hbWVBbmRTZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuc2lkZU5hdkJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAyeCBvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWx0ZXJDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAyJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDgwcHggODBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgaW9uLXJvdyN0b3BMZXZlbEZpbHRlcnNSb3d7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbS50b3BMZXZlbEl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbmljLXNlbGVjdGFibGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1yb3cjZXJyb3JNc2dSb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpb24tcm93I2ZpbHRlckJ1dHRvbnNSb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNvbCNmaWx0ZXJCdXR0b25Db2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5oaWRlR3JpZEJ0biB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgIC5pY29uQXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJlc3VsdHNGaWx0ZXJ7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTEwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGlvbi1yb3cjaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC5zcGFuYXJlYXtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmljb25BcmVhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1yb3cjZGl2c2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1jb2w6aGFzKGlucHV0W3R5cGU9J3RleHQnXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5yZXN1bHRzIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuNDUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggMjVweCAyMHB4IC0yMHB4IHJnYmEoMCwwLDAsMC40NSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBpb24tcm93I3JlcG9ydFRhYmxlVG9wIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NiU7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjdGFibGVUaXRsZUFuZENvdW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAudGl0bGVhcmVhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNyZXBQZXJQYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2ZpbHRlckJ0bnNBbmRTZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhwb3J0QnRuc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgdGFibGUjcGFnZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC5zd2l0Y2hoZWFkZXJjbGFzcyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMWQxO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZWZmMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0Zm9vdCB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb24tY29udHJvbHMubXktcGFnaW5hdGlvbntcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmN1c3R1bS1yZXBvcnRzLXdlYiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIH0gIiwiLmN1c3R1bS1yZXBvcnRzLXdlYiB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIHNwYW4gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSAuYmFja2J1dHRvbmFyZWEge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUgLmJhY2tidXR0b25hcmVhIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgaW5wdXQjZGF0ZUlucHV0IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXgtaGVpZ2h0OiA0NXB4O1xufVxuXG4uY3VzdHVtLXJlcG9ydHMtbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIHNwYW4gcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIC5iYWNrYnV0dG9uYXJlYSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSAuYmFja2J1dHRvbmFyZWEgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDUwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAxNXB4IDBweCA1MHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAuc2lkZU5hdkNsb3NlQnV0dG9uIHtcbiAgICB6LWluZGV4OiA1MTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgYmFja2dyb3VuZDogIzc0Yjc0MztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAuc2lkZU5hdkNsb3NlQnV0dG9uIGlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgc2NhbGU6IDEuNTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB6LWluZGV4OiA1MjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC50aXRsZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24ge1xuICAgIHNjYWxlOiAxO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDIwMiwgMTk1LCAxOTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uICNyZXBvcnRzUGFuZWwgLnNpbmdsZUl0ZW0gaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigyMDIsIDE5NSwgMTk1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbiAjcmVwb3J0c1BhbmVsIC5zaW5nbGVJdGVtIGlvbi1pdGVtOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzZWQ6aG92ZXIge1xuICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2luZyBpb24taXRlbVtzbG90PWhlYWRlcl0sXG4uY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZCBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSxcbi5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQgaW9uLWl0ZW1bc2xvdD1oZWFkZXJdIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2ggLnNpZGVOYXZCdXR0b24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICM3NGI3NDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2ggLnNpZGVOYXZCdXR0b24gaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBzY2FsZTogMS4zO1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIHNwYW4ge1xuICAgIGJvcmRlcjogc29saWQgMnggb3JhbmdlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2ggaW9uLXNlYXJjaGJhciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2ggaW9uLXNlYXJjaGJhciAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMiU7XG4gICAgbWF4LXdpZHRoOiAxMDIlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4MHB4IDgwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiA5OCU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQtbW9iaWxlLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjdG9wTGV2ZWxGaWx0ZXJzUm93IGlvbi1jb2wjdG9wTGV2ZWxGaWx0ZXJzQ29sIC5maWx0ZXIgaW9uLWl0ZW0udG9wTGV2ZWxJdGVtIHtcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWF4LWhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLW1vYmlsZS5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I3RvcExldmVsRmlsdGVyc1JvdyBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbCAuZmlsdGVyIGlvbi1pdGVtLnRvcExldmVsSXRlbSBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyN0b3BMZXZlbEZpbHRlcnNSb3cgaW9uLWNvbCN0b3BMZXZlbEZpbHRlcnNDb2wgLmZpbHRlciBpb24taXRlbS50b3BMZXZlbEl0ZW0gaW9uaWMtc2VsZWN0YWJsZSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLW1vYmlsZS5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I2Vycm9yTXNnUm93IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQtbW9iaWxlLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjZXJyb3JNc2dSb3cgaW9uLWNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQtbW9iaWxlLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjZmlsdGVyQnV0dG9uc1JvdyBpb24tY29sI2ZpbHRlckJ1dHRvbkNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQtbW9iaWxlLmZpbHRlckdyaWQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgLmhpZGVHcmlkQnRuIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIC5oaWRlR3JpZEJ0biAuaWNvbkFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciAuaGlkZUdyaWRCdG4gLmljb25BcmVhIGlvbi1pY29uIHtcbiAgICBzY2FsZTogMS41O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMzBweCAzMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjaGVhZGVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciAuc3BhbmFyZWEge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciAuc3BhbmFyZWEgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNoZWFkZXIgLmljb25BcmVhIHtcbiAgICB3aWR0aDogOCU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciAuaWNvbkFyZWEgaW9uLWljb24ge1xuICAgIHNjYWxlOiAxLjU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2RpdnNob3cge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2RpdnNob3cgaW9uLWNvbDpoYXMoaW5wdXRbdHlwZT10ZXh0XSkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2RpdnNob3cgaW9uLWNvbDpoYXMoaW5wdXRbdHlwZT10ZXh0XSkgaW5wdXQge1xuICAgIGhlaWdodDogODAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICM3NGI3NDM7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KSwgMjVweCAwcHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNDUpLCAwcHggMjVweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC40NSksIC0yNXB4IDBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCB7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1heC13aWR0aDogOTYlO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjdGFibGVUaXRsZUFuZENvdW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQ5JTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI3RhYmxlVGl0bGVBbmRDb3VudCAudGl0bGVhcmVhIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICN0YWJsZVRpdGxlQW5kQ291bnQgLnRpdGxlYXJlYSBzcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjdGFibGVUaXRsZUFuZENvdW50ICNyZXBQZXJQYWdlIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICNmaWx0ZXJCdG5zQW5kU2VhcmNoIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI2ZpbHRlckJ0bnNBbmRTZWFyY2ggLmV4cG9ydEJ0bnMge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICNmaWx0ZXJCdG5zQW5kU2VhcmNoIC5yZXN1bHRzZWFyY2gge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjZmlsdGVyQnRuc0FuZFNlYXJjaCAucmVzdWx0c2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjNzRiNzQzO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciAuc3dpdGNoaGVhZGVyY2xhc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQxZDE7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciAuc3dpdGNoaGVhZGVyY2xhc3MgaW9uLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGhlYWQgdHIge1xuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGhlYWQgdHIgdGgge1xuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIHRhYmxlI3BhZ2VyIHRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWNlZmYwO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkgdHIge1xuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIHRhYmxlI3BhZ2VyIHRib2R5IHRyIHRkIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGZvb3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGZvb3QgcGFnaW5hdGlvbi1jb250cm9scy5teS1wYWdpbmF0aW9uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLXdlYiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59Il19 */";

/***/ }),

/***/ 61432:
/*!**********************************************************!*\
  !*** ./src/app/pages/mytest/mytest.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"custum-reports-web\" style=\"width: 100%; height: 100%\">\n  <ion-header>\n    <ion-toolbar color=\"primary\" hideBackButton click=\"hideMoreOptions()\">\n      <div class=\"navname\">\n        <div class=\"backbuttonarea\" (click)=\"backPage()\">\n          <img src=\"assets/imgs/ic_back.png\" style=\"height: 25px\" />\n        </div>\n\n        <span><p>Report Engine</p></span>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n<ion-button (click)=\"exportPdf()\" expand=\"block\" fill=\"solid\" shape=\"round\" color=\"success\">\n  Click me\n</ion-button>\n\n\n\n<ion-item class=\"topLevelItem\">\n\n\n  <ionic-selectable id=\"selectable\"\n    item-content\n    [items]=\"people\"\n    itemValueField=\"id\"\n    itemTextField=\"name\"\n    [isMultiple]=\"false\"\n    [canSearch]=\"true\"\n    [canClear]=\"true\"\n    closeButtonSlot=\"end\"\n    placeholder=\"Please Select\"\n    (onChange)=\"changedFilter($event)\"\n  >\n\n\n\n\n    \n  </ionic-selectable>\n\n  \n\n  \n</ion-item>\n\n<ion-button (click)=\"clearSelectable('selectable')\" expand=\"block\" fill=\"solid\" shape=\"round\">\n  Clear the selectable\n</ion-button>\n<ion-button (click)=\"goToPowerBIPage()\" expand=\"block\" fill=\"solid\" shape=\"round\">\n  Go to Power BI\n</ion-button>\n<ion-button (click)=\"goToQuickInsight()\" expand=\"block\" fill=\"solid\" shape=\"round\">\n  Go to Quick Insight\n</ion-button>\n\n\n\n  </ion-content>\n</div>\n\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mytest_mytest_module_ts.js.map