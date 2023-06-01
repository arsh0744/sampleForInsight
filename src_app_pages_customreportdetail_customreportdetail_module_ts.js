"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customreportdetail_customreportdetail_module_ts"],{

/***/ 12043:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/customreportdetail/customreportdetail-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomreportdetailPageRoutingModule": () => (/* binding */ CustomreportdetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _customreportdetail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customreportdetail.page */ 57916);




const routes = [
    {
        path: '',
        component: _customreportdetail_page__WEBPACK_IMPORTED_MODULE_0__.CustomreportdetailPage
    }
];
let CustomreportdetailPageRoutingModule = class CustomreportdetailPageRoutingModule {
};
CustomreportdetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomreportdetailPageRoutingModule);



/***/ }),

/***/ 93260:
/*!***********************************************************************!*\
  !*** ./src/app/pages/customreportdetail/customreportdetail.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomreportdetailPageModule": () => (/* binding */ CustomreportdetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _customreportdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customreportdetail-routing.module */ 12043);
/* harmony import */ var _customreportdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customreportdetail.page */ 57916);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ 92302);
/* harmony import */ var src_app_pipes_filter_by_property_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/filter-by-property.pipe */ 9872);
/* harmony import */ var src_app_pipes_change_text_data_type_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/change-text-data-type.pipe */ 91701);
/* harmony import */ var src_app_pipes_hide_row_by_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/hide-row-by-search.pipe */ 50169);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_app_pipes_split_data_type_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/split-data-type.pipe */ 4927);
/* harmony import */ var src_app_pipes_filterBySearch_filter_by_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/filterBySearch/filter-by-search.pipe */ 81169);
















let CustomreportdetailPageModule = class CustomreportdetailPageModule {
};
CustomreportdetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.NgxPaginationModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_15__.IonicSelectableModule,
            _customreportdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomreportdetailPageRoutingModule,
            src_app_pipes_filter_by_property_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterByPropertyPipe,
            src_app_pipes_change_text_data_type_pipe__WEBPACK_IMPORTED_MODULE_4__.ChangeTextDataTypePipe,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
            src_app_pipes_hide_row_by_search_pipe__WEBPACK_IMPORTED_MODULE_5__.HideRowBySearchPipe,
            src_app_pipes_split_data_type_pipe__WEBPACK_IMPORTED_MODULE_7__.SplitDataTypePipe,
            src_app_pipes_filterBySearch_filter_by_search_pipe__WEBPACK_IMPORTED_MODULE_8__.FilterBySearchPipe
        ],
        declarations: [_customreportdetail_page__WEBPACK_IMPORTED_MODULE_1__.CustomreportdetailPage]
    })
], CustomreportdetailPageModule);



/***/ }),

/***/ 57916:
/*!*********************************************************************!*\
  !*** ./src/app/pages/customreportdetail/customreportdetail.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomreportdetailPage": () => (/* binding */ CustomreportdetailPage)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customreportdetail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customreportdetail.page.html?ngResource */ 2923);
/* harmony import */ var _customreportdetail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customreportdetail.page.scss?ngResource */ 6570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/report/report.service */ 45945);
/* harmony import */ var src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/BaseComp */ 88075);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ 84177);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ 43015);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_components_report_column_selector_report_column_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/report-column-selector/report-column-selector.component */ 87345);















let CustomreportdetailPage = class CustomreportdetailPage extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_4__.BaseComp {
  // For Example Component
  constructor(navCtrl, dataService, loadingCtrl, datePipe, alert, toast, modalCtrl) {
    super();
    this.navCtrl = navCtrl;
    this.dataService = dataService;
    this.loadingCtrl = loadingCtrl;
    this.datePipe = datePipe;
    this.alert = alert;
    this.toast = toast;
    this.modalCtrl = modalCtrl;
    this.isOpen = false;
    this.filters = [];
    this.totalFilters = "";
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({});
    this.tableHeader = [];
    this.tableData = [];
    this.filteredTableData = [];
    this.searchFilteredTableData = [];
    this.filteredTableDataTmp = [];
    this.p = 1;
    this.isMobileLayout = true;
    this.booleanValue = false;
    this.userFilterSelect = [];
    this.userFilterSelectWeb = [];
    this.reportsPerPage = "10";
    this.defaultclsontableheader = "";
    this.isShown = false;
    this.reportDetailsSingle = [];
    this.searchList$ = [];
    this.defaultDateForDatePicker = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(new Date());
    this.allTables = [];
    this.totalAmountForReportMemberWiseMilkBill = 0;
    this.dataService.activeReport.subscribe(m => {
      this.reportId = m.id;
      this.reportName = m.reportname;
    }); //this.reportName="sdfv";

    this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("");

    if (window.screen.width === 360) {
      // 768px portrait
      this.isMobileLayout = true;
    }

    this.getstaticdataforreportsDetail();
  }

  ngOnInit() {
    this.userFilterSelect = [];
    this.errormsg = '';
    this.allReportsInOnePage = 0;
    this.p = 1;
    this.tableHeader = [];
    this.tableData = [];
    this.filteredTableData = [];
    this.searchFilteredTableData = [];
    this.filteredTableDataTmp = [];
    this.filters = [];
    this.totalFilters = "";
    this.plotfilters();
    this.dispTable = false;
    this.dispGrid = true;
    this.totalAmountForReportMemberWiseMilkBill = 0;
  }

  presentPopover(e) {
    this.popover.event = e;
    this.isOpen = true;
  }

  openModal() {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isOpen = false;
      const modal = yield _this.modalCtrl.create({
        component: src_app_components_report_column_selector_report_column_selector_component__WEBPACK_IMPORTED_MODULE_8__.ReportColumnSelectorComponent,
        componentProps: {
          dataToTakeAsInput: _this.reportId
        }
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();

      if (role === 'confirm') {
        if (data.length != 0) {
          const LOADER = _this.loadingCtrl.create({
            message: "Please Wait...",
            animated: true,
            spinner: "crescent"
          });

          (yield LOADER).present();
          let dataForApi = '';
          Array.from(data).forEach(element => {
            dataForApi = element + ',' + dataForApi;
          });
          dataForApi = dataForApi.slice(0, -1);
          let resultOfUpdate = 0;
          resultOfUpdate = yield _this.dataService.updateColumnDetailsForUser(_this.reportId, dataForApi);

          if (resultOfUpdate == data.length) {
            yield _this.getreport(_this.totalFilters);
          }

          (yield LOADER).dismiss();
        }
      }
    })();
  }

  exportAsExcelFile() {
    var _this2 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Loader = _this2.loadingCtrl.create({
        message: "Exporting Data Please Wait...",
        animated: true
      });

      (yield Loader).present();
      let json = [];

      _this2.filteredTableData.forEach(rowData => {
        let singleRow = {};

        _this2.tableHeader.forEach(singleHeader => {
          singleRow = { ...singleRow,
            [singleHeader.columnName]: rowData[singleHeader.columnName]
          };
        });

        json.push(singleRow);
      }); //let excelFileName: string="myexcel"


      const fileName = _this2.reportName + "_" + _this2.datePipe.transform(new Date(), 'yyyy-MM-dd') + ".xlsx";
      const workbook = {
        Sheets: {},
        SheetNames: []
      }; // Add rows with data at the top

      const customData = [];

      if (_this2.getFarmName()) {
        let reportHeader = [];
        reportHeader.push(_this2.getFarmName());
        customData.push(reportHeader);
      }

      if (_this2.getCHCname()) {
        let reportHeader = [];
        reportHeader.push(_this2.getCHCname());
        customData.push(reportHeader);
      }

      if (_this2.getCCname()) {
        let reportHeader = [];
        reportHeader.push(_this2.getCCname());
        customData.push(reportHeader);
      }

      if (_this2.reportName) {
        let reportHeader = [];
        reportHeader.push(_this2.reportName);
        customData.push(reportHeader);
      }

      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.aoa_to_sheet(customData); // Add the custom rows at the top

      for (let rowNum = 0; rowNum < customData.length; rowNum++) {
        const rowData = customData[rowNum];

        for (let colNum = 0; colNum < rowData.length; colNum++) {
          const cell = xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.encode_cell({
            r: rowNum,
            c: colNum
          });
          worksheet[cell] = {
            v: rowData[colNum],
            t: 's'
          };
        }
      } // Append the existing data to the worksheet


      let rowOffset = customData.length + 1;

      for (const rowData of json) {
        const row = [];

        for (const cellData of Object.values(rowData)) {
          row.push(cellData);
        }

        xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.sheet_add_aoa(worksheet, [row], {
          origin: rowOffset
        });
        rowOffset++;
      } // Extract the keys from the first row of data


      const keys = Object.keys(json[0]); // Add the key names as a separate row after the custom data rows

      const keyRowOffset = customData.length;
      const keyRow = keys.map(key => key.toUpperCase());
      xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.sheet_add_aoa(worksheet, [keyRow], {
        origin: keyRowOffset
      }); // Assign the worksheet to the 'data' sheet in the workbook

      workbook.SheetNames.push('data');
      workbook.Sheets['data'] = worksheet;
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_10__.write(workbook, {
        bookType: 'xlsx',
        type: 'buffer'
      });
      yield _this2.saveAsExcelFile(excelBuffer, fileName);
      (yield Loader).dismiss();
    })();
  }

  saveAsExcelFile(buffer, fileName) {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const data = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    (0,file_saver__WEBPACK_IMPORTED_MODULE_7__.saveAs)(data, fileName);
  }

  onExport() {
    var _this3 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ALERT = yield _this3.loadingCtrl.create({
        message: "Generating PDF,Please Wait ...",
        animated: true,
        spinner: "crescent"
      });
      yield ALERT.present();
      const doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'pt', 'a4');
      doc.setLanguage('en');
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(18);
      doc.setTextColor('#333');
      doc.setFillColor('#fff'); // doc.text(this.util.translate('Oright Pvt. Ltd.'), 40, 80);
      // doc.text(this.util.translate('Plot No 5, Vijay Vihar, Sector 30'), 40, 100);
      // doc.text(this.util.translate('Gurgaon, Haryana, 122001'), 40, 120);
      // doc.text(this.util.translate('Email') + ': contact@qboid.io', 40, 140);
      // doc.text(this.util.translate('Phone') + ': 9599198859', 40, 160);
      // doc.text(
      //   this.util.translate('Order') + ' #' + this.id,
      //   doc.internal.pageSize.getWidth() - 100,
      //   80,
      //   {
      //     align: 'right',
      //   }
      // );

      if (_this3.getFarmName()) {
        doc.text(_this3.getFarmName(), doc.internal.pageSize.getWidth() / 2, 50, {
          align: 'center'
        });
      }

      if (_this3.getCHCname()) {
        doc.text(_this3.getCHCname(), doc.internal.pageSize.getWidth() / 2, 75, {
          align: 'center'
        });
      }

      if (_this3.getCCname()) {
        doc.text(_this3.getCCname(), doc.internal.pageSize.getWidth() / 2, 100, {
          align: 'center'
        });
      }

      if (_this3.reportName) {
        doc.text(_this3.reportName, doc.internal.pageSize.getWidth() / 2, 125, {
          align: 'center'
        });
      } // Draw the line
      // const lineXStart = 40;
      // const lineXEnd = doc.internal.pageSize.getWidth() - 40;
      // const lineY = 170;
      // doc.setLineWidth(0.5);
      // doc.setDrawColor(0, 0, 0);
      // doc.line(lineXStart, lineY, lineXEnd, lineY);


      if (_this3.reportId != 176) {
        let headers = [];

        _this3.tableHeader.forEach(header => {
          headers.push(header.columnName.toString());
        }); //let columns=this.tableHeader.length


        let pdfData = [];

        _this3.filteredTableData.forEach(Data => {
          let DataRow = [];

          _this3.tableHeader.forEach(header => {
            DataRow.push(Data[header.columnName]);
          });

          pdfData.push(DataRow);
        });

        var margin = 30; // Margin between the content and the page edges

        var columns = _this3.tableHeader.length; // Number of columns based on the data length

        var columnWidth; // Desired width of each column

        var maxTableWidth = doc.internal.pageSize.getWidth() - 2 * margin; // Maximum width available for the table
        // Check if the desired column width exceeds the maximum available width
        // Reduce the column width to fit within the available space

        columnWidth = maxTableWidth / columns; //columnWidth = columnWidth - (2*margin/ columns);

        var tableConfig = {
          head: [headers],
          body: pdfData,
          tableWidth: maxTableWidth,
          startY: 150,
          theme: 'grid',
          margin: {
            right: margin
          },
          columnStyles: {},
          styles: {
            head: {
              fillColor: '#28a745',
              textColor: '#fff',
              align: 'center'
            },
            body: {
              fillColor: '#fff',
              textColor: '#000'
            },
            font: 'Helvetica',
            fontStyle: 'normal'
          }
        };

        for (var i = 0; i < columns; i++) {
          tableConfig.columnStyles[i] = {
            cellWidth: columnWidth
          };
        }

        doc.autoTable(tableConfig);
      } else if (_this3.reportId == 176) {
        let headers = [];
        let pdfData = [];

        _this3.allTables.forEach(table => {
          if (table.lastHeaderPosition == 0) {
            Array.from(table.Header[0]).forEach(header => {
              headers.push(header.columnName.toString());
            });
            Array.from(table.Data).forEach(data => {
              let DataRow = [];
              Array.from(table.Header[0]).forEach(header => {
                DataRow.push(data[header.columnName]);
              });
              pdfData.push(DataRow);
            });
            var margin = 30; // Margin between the content and the page edges

            var columns = _this3.tableHeader.length; // Number of columns based on the data length

            var columnWidth; // Desired width of each column

            var maxTableWidth = doc.internal.pageSize.getWidth() - 2 * margin; // Maximum width available for the table
            // Check if the desired column width exceeds the maximum available width
            // Reduce the column width to fit within the available space

            columnWidth = maxTableWidth / columns; //columnWidth = columnWidth - (2*margin/ columns);

            var tableConfig = {
              head: [headers],
              body: pdfData,
              tableWidth: maxTableWidth,
              startY: 150,
              theme: 'grid',
              margin: {
                right: margin
              },
              columnStyles: {},
              styles: {
                head: {
                  fillColor: '#28a745',
                  textColor: '#fff',
                  align: 'centre'
                },
                body: {
                  fillColor: '#fff',
                  textColor: '#000'
                },
                font: 'Helvetica',
                fontStyle: 'normal'
              }
            };

            for (var i = 0; i < columns; i++) {
              tableConfig.columnStyles[i] = {
                cellWidth: columnWidth
              };
            }

            doc.autoTable(tableConfig);
          } else if (table.lastHeaderPosition > 0) {
            console.log(table, "table");
            let specialReportData = [];
            let specialReportDataWidths = [];
            let specialReportHeader = [];
            Array.from(table.Header).forEach(singleRowHeader => {
              let rowToBeInsertedForHeader = [];
              let rowToBeInsertedHeaderWidth = [];
              Array.from(singleRowHeader).forEach(singleHeaderFromsingleRowHeader => {
                rowToBeInsertedForHeader.push(singleHeaderFromsingleRowHeader.columnName);
                rowToBeInsertedHeaderWidth.push(singleHeaderFromsingleRowHeader.columnSize);
              });
              specialReportData.push(rowToBeInsertedForHeader);
            });
            let dataCellWidth = 760 / table.Header[table.lastHeaderPosition].length;

            for (let count = 0; count < table.Header[table.lastHeaderPosition].length; count++) {
              specialReportDataWidths.push(dataCellWidth);
              specialReportHeader.push('  ');
            }

            ;
            Array.from(table.Data).forEach(singleRowData => {
              let rowToBeInsertedForData = [];
              let rowToBeInsertedDataWidth = [];
              Array.from(table.Header[table.lastHeaderPosition]).forEach(singleHeaderFromLastHeader => {
                Array.from(singleRowData).forEach(indiv => {
                  if (indiv[singleHeaderFromLastHeader.displayname]) {
                    rowToBeInsertedForData.push(indiv[singleHeaderFromLastHeader.displayname]);
                    rowToBeInsertedDataWidth.push(dataCellWidth);
                  }
                });
              });
              specialReportData.push(rowToBeInsertedForData);
            });
            doc.autoTable({
              head: [specialReportHeader],
              body: specialReportData,
              startY: doc.autoTable.previous.finalY + 30,
              didParseCell: function (data) {
                //const colSpan = specialReportHeader[data.column.index].colspan;
                if (data.section == "head") {// const colWidth = specialReportHeader[data.column.index].width;
                  // data.cell.contentWidth=colWidth
                  // data.cell.styles.cellWidth = colWidth;
                  // data.cell.width=colWidth;
                } else if (data.section == "body") {
                  const colWidthForData = specialReportDataWidths[data.column.index];
                  data.cell.contentWidth = colWidthForData;
                  data.cell.styles.cellWidth = colWidthForData;
                  data.cell.width = colWidthForData;
                } else {}

                data.cell.styles.lineWidth = 1; // Header cell border width

                data.cell.styles.lineColor = [128, 0, 128]; // Header cell border color (same as background)
              }
            });
          }
        });
      } // const deliveryChargeRow = [
      //   {
      //     content: this.util.translate('Transportation Charges'),
      //     colSpan: 6,
      //     styles: { fontStyle: 'bold' },
      //   },
      //   '₹ ' + this.shippingPrice,
      // ];
      // (doc as any).autoTable(
      //   {
      //   head: [headers],
      //   body: pdfData,
      //   startY: 150,
      //   theme: 'grid',
      //   columnStyles:  { },
      //   styles: {
      //     head: {
      //       fillColor: '#28a745',
      //       textColor: '#fff',
      //     },
      //     body: {
      //       fillColor: '#fff',
      //       textColor: '#000',
      //     },
      //     font: 'Helvetica',
      //     fontStyle: 'normal',
      //   },
      // }
      // );
      // const tableEndPosY = (doc as any).autoTableEndPosY();
      // doc.setFont('Helvetica', 'normal');
      // doc.text(
      //   '*' ,
      //   37,
      //   tableEndPosY + 20
      // );
      // doc.setFont('Helvetica', 'normal');
      // doc.setFontSize(10);
      // doc.setTextColor('#777');
      // const output = doc.output();
      // const source = document.getElementById('empty');
      // if (this.isMobile) {
      //   this.downloadFileInAndroid(
      //     this.file,
      //     this.fileOpener,
      //     'invoice.pdf',
      //     'pdf',
      //     output
      //   );
      // } else {


      const fileName = _this3.reportName + "_" + _this3.datePipe.transform(new Date(), 'yyyy-MM-dd') + ".pdf";
      doc.save(fileName); // doc.html(source, {
      //   callback: function (pdf) {
      //     // doc.save('invoice.pdf');
      //     doc.output('dataurlnewwindow',{
      //       filename:fileName
      //     });
      //    // document.getElementById('pdfdownloadcontent').style.display = 'block';
      //   },
      // });

      (yield ALERT).dismiss(); //  }
    })();
  } // Utility function to convert string to ArrayBuffer


  s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);

    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }

    return buf;
  }

  clearSrcBar(id) {
    let srcbar = document.getElementById(id);
    let clearbtn = srcbar.children[0].children[3];
    clearbtn.click();
  }

  changeReport(reportId, reportName) {
    this.reportId = reportId;
    this.reportName = reportName;
    this.openSideNav();
    this.ngOnInit();
  }

  getstaticdataforreportsDetail() {
    let userId = this.getFarmerUserID();
    this.dataService.getStaticReports(this.key, this.DatabaseCode, userId).subscribe(res => {
      this.reportDetailsSingle = res;
    });
  }

  closeReportsList(id) {
    document.getElementById(id).classList.toggle("active");
  }

  openSideNav() {
    document.getElementById("sideNav").classList.toggle("active");
  }

  multiSelectChange(event, id, selectedValues) {
    if (screen.width <= 480) {
      id = id + '-mobile';
    }

    let valueToApply = '';

    if (selectedValues.length != 0) {
      selectedValues.forEach(element => {
        valueToApply = element.value + ',' + valueToApply;
      });
      valueToApply = valueToApply.substring(0, valueToApply.length - 1);
    } else {
      valueToApply = '';
    }

    document.getElementById(id).value = valueToApply;
  }

  singleSelectChange(event, id, selectedValue) {
    if (screen.width <= 480) {
      id = id + '-mobile';
    }

    let valueToApply;

    if (selectedValue != null || selectedValue != undefined) {
      valueToApply = selectedValue.value;
    } else {
      valueToApply = '';
    }

    document.getElementById(id).value = valueToApply;
  }

  hideGrid() {
    document.getElementById("fliterContainerGrid").classList.toggle("active");
    document.getElementById("fliterContainerGrid-mobile").classList.toggle("active");
    this.dispGrid = !this.dispGrid;
  }

  plotfilters() {
    var _this4 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let loading = _this4.loadingCtrl.create({
        message: 'Please Wait....'
      });

      (yield loading).present();

      let userId = _this4.getFarmerUserID();

      let farmId = _this4.getFarmID();

      let chcId = _this4.getCHCUserID();

      let ccId = _this4.getCCUserID();

      let farmerId = _this4.getFarmerID();

      let userType = _this4.getUserType();

      let organization = "0";

      _this4.dataService.plotfilters(_this4.key, _this4.reportId, _this4.DatabaseCode, userId, farmId, chcId, ccId, farmerId, userType, organization).subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this4.filters = res;
          res.forEach(element => {
            _this4.totalFilters = _this4.totalFilters + "," + element.filterName;
          });

          _this4.buildUserFilter();

          yield (yield loading).dismiss();

          _this4.filters.forEach(filter => {
            if (filter.autoSelect == true) {
              document.getElementById(filter.filterName).value = filter.filterTypeObject[0].dropdown[0].value;
            }
          });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  valdidationform(strArray) {
    var missedvalues = "";

    for (var i = 1; i < strArray.length; i++) {
      if (/Android|Windows|Win64|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //console.error("In For",document.getElementById(strArray[i].toString()))
        var chkstr = document.getElementById(strArray[i].toString()).value;
        console;

        if (!chkstr) {
          missedvalues = missedvalues + strArray[i] + " , ";
        }
      } else {
        var chkstr = document.getElementById(strArray[i].toString()).value;

        if (!chkstr) {
          missedvalues = missedvalues + strArray[i] + ",";
        }
      }
    }

    if (!missedvalues) {
      document.getElementById("errormsg").style.display = "none";
      document.getElementById("errormsg-mobile").style.display = "none";
      return 1;
    } else {
      this.errormsg = "Please Fill " + missedvalues.slice(0, -1);
      document.getElementById("errormsg").style.display = "block";
      document.getElementById("errormsg-mobile").style.display = "block";
      return 0;
    }
  }

  daterangevalidation() {
    if (document.getElementById('From Date').value > document.getElementById('To Date').value) {
      return false;
    } else return true;
  }

  getreport(totalFilters) {
    var _this5 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.tableHeader = [];
      _this5.tableData = [];
      _this5.filteredTableData = [];
      _this5.filteredTableDataTmp = [];
      _this5.dispTable = false;
      let offSet = 1;

      if (screen.width <= 480) {
        offSet = 0;
      }

      var strArray = totalFilters.split(",");

      if (offSet == 0) {
        strArray = strArray.map(i => i + "-mobile");
      } else {}

      if (_this5.valdidationform(strArray) == 0) {
        return;
      }

      if (strArray.indexOf('From Date') != -1 && strArray.indexOf('To Date')) {
        if (_this5.daterangevalidation() == false) {
          const TOAST = _this5.toast.create({
            message: "Please Select Correct Date Range",
            duration: 2000
          });

          (yield TOAST).present();
          return;
        }
      }

      let loading = _this5.loadingCtrl.create({
        message: 'Please Wait....'
      });

      (yield loading).present(); // Display array values on page

      var allFilters = [];

      let userId = _this5.getFarmerUserID();

      let reportId = _this5.reportId;
      let organization = "0";

      if (/Android|webOS|Windows|Win64|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var querystringfilters = "{";

        for (var i = 1; i < strArray.length; i++) {
          let valueOfFilter = "";
          valueOfFilter = document.getElementById(strArray[i].toString()).value;

          if (strArray[i] == 'From Date' || strArray[i] == 'To Date' || strArray[i] == 'DailyDate' || strArray[i] == 'Date') {
            valueOfFilter = _this5.dataService.transformDateToYYYYMMdd(valueOfFilter);
          }

          querystringfilters = querystringfilters + '"' + strArray[i] + '":"' + valueOfFilter + '",';
        }

        querystringfilters = querystringfilters + "}"; //Check this for Error
      } else {
        var querystringfilters = "{";

        for (var i = 1; i < strArray.length; i++) {
          querystringfilters = querystringfilters + '"' + strArray[i] + '":"' + document.getElementById(strArray[i].toString()).value + '",';
        }

        querystringfilters = querystringfilters + "}";
        console.error("Query From Else after :", querystringfilters);
      }

      _this5.dataService.plotDataTable(userId, reportId, querystringfilters, _this5.key, _this5.DatabaseCode, organization).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log(res, "res");

          if (!res || !res[0] || !res[0].Data) {
            const alertctrl = _this5.alert.create({
              message: "No Data Found",
              buttons: [{
                text: "Ok",
                role: "Ok"
              }]
            });

            (yield loading).dismiss();
            (yield alertctrl).present();
            return;
          }

          if (res.length == 0 || res[0].Data.length == 0) {
            const alertctrl = _this5.alert.create({
              message: "No Data Found",
              buttons: [{
                text: "Ok",
                role: "Ok"
              }]
            });

            (yield alertctrl).present();
            _this5.dispTable = false;
          } else {
            if (_this5.reportId != 176) {
              _this5.allReportsInOnePage = res[0].Data.length;
              res.forEach( /*#__PURE__*/function () {
                var _ref3 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
                  _this5.tableHeader = element["Header"];
                  _this5.tableData = element["Data"];
                });

                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }());
              _this5.dispTable = true;
              _this5.filteredTableData = _this5.tableData;
              _this5.filteredTableDataTmp = _this5.tableData;
            } else if (_this5.reportId == 176) {
              let tableNumber = 0;
              res.forEach(table => {
                tableNumber++;
                let HeaderArr = [];
                HeaderArr = table.Header;
                let index = 0;
                let ArrayOfHeadersGroupedByParentIDForSingleTable = [];

                if (HeaderArr.length > 0) {
                  while (HeaderArr.length) {
                    let temp = HeaderArr.filter(x => x.parentId == index); //Add this to Table Obj

                    ArrayOfHeadersGroupedByParentIDForSingleTable.push(temp);
                    HeaderArr = HeaderArr.filter(value => !temp.includes(value));
                    index++;
                  }
                }

                if (table.GroupBy == "") {
                  _this5.allTables.push({
                    Header: ArrayOfHeadersGroupedByParentIDForSingleTable,
                    Data: table.Data,
                    lastHeaderPosition: ArrayOfHeadersGroupedByParentIDForSingleTable.length - 1,
                    currentTableNumber: tableNumber
                  });
                } else {
                  let groupByColumn = table.GroupBy;
                  let groupByColumnValues = [];
                  let DataArr = [];
                  let ArrayOfDataGroupedByResultForOneTable = [];
                  DataArr = table.Data;
                  DataArr.forEach(data => {
                    if (data[groupByColumn] != "" || data[groupByColumn] != null) {
                      groupByColumnValues.push(data[groupByColumn]);
                    }
                  });
                  groupByColumnValues = Array.from(new Set(groupByColumnValues));
                  index = 0;

                  while (DataArr.length) {
                    let temp = DataArr.filter(x => x[groupByColumn] == groupByColumnValues[index]);
                    const mergedArray = temp.reduce((acc, obj) => {
                      Object.entries(obj).forEach(([key, value]) => {
                        acc.push({
                          [obj.type + key]: value
                        });
                      });
                      return acc;
                    }, []);
                    ArrayOfDataGroupedByResultForOneTable.push(mergedArray);
                    DataArr = DataArr.filter(value => !temp.includes(value));
                    index++;
                  }

                  _this5.allTables.push({
                    Header: ArrayOfHeadersGroupedByParentIDForSingleTable,
                    Data: ArrayOfDataGroupedByResultForOneTable,
                    lastHeaderPosition: ArrayOfHeadersGroupedByParentIDForSingleTable.length - 1,
                    currentTableNumber: tableNumber
                  });
                }
              });
              Array.from(_this5.allTables[1].Data).forEach(data => {});
            }
          }

          (yield loading).dismiss();
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  sortHeader(header, sortBy, boolean, event, datatype, headerID) {
    if (sortBy === false) {
      return;
    }

    let sortDataType = datatype.split(',')[1];
    /*return this.filteredTableData.sort(function(a, b) {
    var x = a[header]; var y = b[header];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });*/

    Array.from(document.getElementsByClassName(headerID)).forEach(element => {
      if (element != event.target) {
        element.classList.remove("switchheaderclass");
      }
    });
    event.target.classList.toggle("switchheaderclass");

    if (boolean == true) {
      switch (sortDataType) {
        case "int":
          this.filteredTableData.sort((a, b) => Number.parseInt(a[header]) - Number.parseInt(b[header])); // Number.parseInt(a[header]) < Number.parseInt(b[header]) ? 1 : Number.parseInt(a[header]) > Number.parseInt(b[header]) ? -1 : 0) 

          break;

        case "float":
          this.filteredTableData.sort((a, b) => Number.parseFloat(a[header]) - Number.parseFloat(b[header]));
          break;

        case "string":
          this.filteredTableData.sort((a, b) => a[header].localeCompare(b[header]));
          break;

        default:
          break;
      }

      this.booleanValue = !this.booleanValue; // ele1.classList.add('sotheader');
      //this.defaultclsontableheader
    } else {
      switch (sortDataType) {
        case "int":
          this.filteredTableData.sort((a, b) => Number.parseInt(b[header]) - Number.parseInt(a[header])); // Number.parseInt(a[header]) < Number.parseInt(b[header]) ? 1 : Number.parseInt(a[header]) > Number.parseInt(b[header]) ? -1 : 0) 

          break;

        case "float":
          this.filteredTableData.sort((a, b) => Number.parseFloat(b[header]) - Number.parseFloat(a[header]));
          break;

        case "string":
          this.filteredTableData.sort((a, b) => b[header].localeCompare(a[header]));
          break;

        default:
          break;
      }

      this.booleanValue = !this.booleanValue; // target.classList.remove('sotheader');
    }
  }

  filterData(val) {
    this.filteredTableData = this.tableData.filter(data => {
      return data.Name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    });
  }

  custumsearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchinput");
    filter = input.value.toUpperCase();
    table = document.getElementById("pager");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      const tableData = tr[i].getElementsByTagName("td");
      let allTextContent = "";

      for (let ind = 0; ind < tableData.length; ind++) {
        allTextContent += tableData[ind].innerText;
      }

      if (allTextContent) {
        if (allTextContent.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }

    let tempFilteredDataForDefaultStorage = [];
    tempFilteredDataForDefaultStorage = this.filteredTableData;
    let tempFiltered;
  }

  onSearchChangeForMemberWiseTable(event, tableDataAreaID) {
    var input, filter, table, tr, td, i, txtValue;
    input = event.detail.value;
    filter = input.toUpperCase();
    table = document.getElementById(tableDataAreaID);
    tr = table.getElementsByTagName("ion-row");

    for (i = 0; i < tr.length; i++) {
      const tableData = tr[i].getElementsByTagName("ion-col");
      let allTextContent = "";

      for (let ind = 0; ind < tableData.length; ind++) {
        allTextContent += tableData[ind].innerText;
      }

      if (allTextContent) {
        if (allTextContent.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  dataselection(selectedValue, filtername, textToAppend) {
    let existingValue = document.getElementById(filtername).value;

    if (existingValue == undefined || existingValue == '') {
      existingValue = "";
    } else {}

    let selectedvalues = "";
    selectedValue.forEach(element => {
      //(element);
      selectedvalues = selectedvalues + "," + element;
    });
    let finalValue = existingValue + selectedvalues;
    console.error("Final Value after change", finalValue);
    document.getElementById(filtername).value = finalValue;
    const opt = document.getElementById(filtername).children;
    var tempArr = Array.from(opt);
    let textToDisplay = '';

    if (textToAppend != null || textToAppend != undefined) {
      textToAppend.forEach(element => {
        //(element);
        textToDisplay = element + "," + textToDisplay;
      });
      let existDisp = opt[0].innerHTML;

      if (existDisp != '' || existDisp != undefined) {
        if (existDisp == 'Please Select') {
          existDisp = '';
          textToDisplay = textToDisplay + existDisp;
        } else {
          textToDisplay = existDisp + ',' + textToDisplay;
        }
      } else {
        console.error("Unknwon initial Value");
      }

      opt[0].innerHTML = textToDisplay;
    }
  }

  getMultiSelect(optionsList, selectElement) {
    let tempOptions = document.getElementById(optionsList).children;
    let options = Array.from(tempOptions);
    options = options.filter(x => x.className == "item item-block item-md item-checkbox item-checkbox-checked");
    let newArr = [];
    let dispToAppend = [];
    options.forEach(x => {
      let tem = x.firstElementChild;
      newArr.push(tem.value);
      dispToAppend.push(x.children[1].innerText);
    });

    if (newArr.length) {
      this.dataselection(newArr, selectElement, dispToAppend);
    }

    let srcbar = document.getElementById(selectElement + '-search');
    let clearbtn = srcbar.children[0].children[3];
    clearbtn.click();
  }

  dataselectionSingle(selectedValue, filtername, dispName, searchDataModel) {
    document.getElementById(filtername).value = selectedValue;
    const opt = document.getElementById(filtername).children;
    var tempArr = Array.from(opt);

    if (dispName != '' && dispName != undefined) {
      opt[0].innerHTML = dispName;
    }

    let srcbar = document.getElementById(filtername + '-search');
    let clearbtn = srcbar.children[0].children[3];
    clearbtn.click();
  }

  dataselectionweb(selectedValue, filtername) {
    var selectedvalues = "";
    selectedValue.forEach(element => {
      //(element);
      selectedvalues = element + "," + selectedvalues;
    });
    document.getElementById(filtername).value = selectedvalues;
  }

  dataselectionheader(selectedValue) {
    var allselectedvalues = "";
    selectedValue.detail.value.forEach(element => {
      //(element);
      allselectedvalues = element + "," + allselectedvalues;
    }); // (document.getElementById("tableheadermulti") as HTMLInputElement).value =
    //   allselectedvalues;
  }

  buildUserFilter() {
    this.filters && this.filters.forEach((el, index) => {
      // this.userFilterSelect.push('filter_'+el.filterId);
      this.userFilterSelect.push("filter" + el.filterId);
      this.userFilterSelect[index] = "";
    });
  }

  filterexistdataintable() {
    var _this6 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var filteredTableDataNew = [];
      let tableheadermulti = document.getElementById("tableheadermulti").value;
      var headeroperatortable = document.getElementById("headeroperatortable").value;
      var headervaluetable = document.getElementById("headervaluetable").value;

      if (tableheadermulti === undefined || tableheadermulti === '' || headeroperatortable == '' || headeroperatortable == undefined || headervaluetable == '' || headervaluetable == undefined) {
        let TOAST = _this6.toast.create({
          message: "Please Choose Filters",
          duration: 2000
        });

        (yield TOAST).present();
        return;
      }

      let tableheadermultiString = '';

      if (tableheadermulti != undefined) {
        Array.from(tableheadermulti).forEach(element => {
          tableheadermultiString = element + ',' + tableheadermultiString;
        });
      }

      if (tableheadermultiString.length > 0) {
        tableheadermultiString = tableheadermultiString.slice(0, -1);
      }
      /* For multiple filter select*/
      //var tableheadermultiSplit = tableheadermultiString.split(",");
      //tableheadermultiSplit.length
      //tableheadermultiSplit.forEach((element,index) => {


      _this6.filteredTableData.forEach(element => {
        // tableheadermulti.forEach((ele, index) => {
        if (headeroperatortable == "1") {
          if ( // parseInt(element[tableheadermultiSplit[index]]) ==
          // parseInt(headervaluetable)
          Number.parseFloat(element[tableheadermulti]) == Number.parseFloat(headervaluetable)) {
            filteredTableDataNew.push(element);
          }
        }

        if (headeroperatortable == "2") {
          if (Number.parseFloat(element[tableheadermulti]) < Number.parseFloat(headervaluetable)) {
            filteredTableDataNew.push(element);
          }
        }

        if (headeroperatortable == "3") {
          if (Number.parseFloat(element[tableheadermulti]) > Number.parseFloat(headervaluetable)) {
            filteredTableDataNew.push(element);
          }
        }

        if (headeroperatortable == "4") {
          if (Number.parseFloat(element[tableheadermulti]) >= Number.parseFloat(headervaluetable)) {
            filteredTableDataNew.push(element);
          }
        }

        if (headeroperatortable == "5") {
          if (Number.parseFloat(element[tableheadermulti]) <= Number.parseFloat(headervaluetable)) {
            filteredTableDataNew.push(element);
          }
        } // });

      });

      _this6.filteredTableData = filteredTableDataNew; //this.filteredTableData = this.removeduplicate(filteredTableDataNew);
    })();
  }

  removeduplicate(finaldata) {
    const ids = finaldata.map(o => o.SerialNo);
    var tmpDataToPass = finaldata.filter(({
      SerialNo
    }, index) => !ids.includes(SerialNo, index + 1));
    return tmpDataToPass;
  }

  cleartablefilter() {
    this.filteredTableData = this.filteredTableDataTmp;
    let filter1 = document.getElementById("tableheadermulti");
    filter1.selectedIndex = 0;
    let tableheadermulti = document.getElementById("tableheadermulti").value = '';
    document.getElementById("headeroperatortable").value = ''; // (
    //   document.getElementById("headeroperatortable") as HTMLIonSelectElement
    // ).selectedText='Please Select';

    document.getElementById("headervaluetable").value = '';
  }

  toggleShow() {
    this.isShown = !this.isShown;
  }

  backPage() {
    this.navCtrl.pop();
  }

  change(id) {
    var x = document.getElementById(id);
    x.size = 0;
  }

  opendropdown(id, change) {
    var x = document.getElementById(id);

    if (change != "") {
      x.size = x.options.length;
      const temp = x;
      temp.style.background = "white";
      temp.style.overflow = "hidden";
    } else x.size = 0; //x.size = x.options.length;

  }

  valueSelect(target) {
    var x = document.getElementById(target);
    x.size = 0;
  }

  changedFilter(event, selectedfilterID, index) {
    var _this7 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let selectedFilterElement = _this7.filters.find(x => x.filterId == selectedfilterID);

      if (selectedFilterElement.childFilterID == 0) {
        return;
      }

      let elementToActive = _this7.filters.find(x => x.filterId == selectedFilterElement.childFilterID);

      if (!elementToActive) {
        return;
      }

      let itemToActiveIndex = _this7.filters.findIndex(x => x.filterId == elementToActive.filterId);

      _this7.userFilterSelect[itemToActiveIndex] = '';
      document.getElementById(elementToActive.filterName).value = '';

      if (event.value) {
        elementToActive.defaultDisabled = false;
        elementToActive.filterTypeObject = [{}];
        let response = yield _this7.dataService.getFilterDropDownValues(elementToActive, event.value.value);
        elementToActive.filterTypeObject = response[0].filterTypeObject;
      } else {
        elementToActive.filterTypeObject = [{}];
        elementToActive.defaultDisabled = true;
        let counter = false;
        let nextFilterToDisableID = elementToActive.childFilterID;

        while (counter == false) {
          if (nextFilterToDisableID == 0) {
            counter = true;
            return;
          } else {
            let nextFilterToDisable = _this7.filters.find(x => x.filterId == nextFilterToDisableID);

            if (!nextFilterToDisable) {
              return;
            }

            nextFilterToDisable.filterTypeObject = [{}];
            nextFilterToDisable.defaultDisabled = true;
            nextFilterToDisableID = nextFilterToDisable.childFilterID;

            let itemToDisableIndex = _this7.filters.findIndex(x => x.filterId == nextFilterToDisable.filterId);

            _this7.userFilterSelect[itemToDisableIndex] = '';
            document.getElementById(nextFilterToDisable.filterName).value = '';
          }
        }
      }
    })();
  }

};

CustomreportdetailPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
}, {
  type: src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__.ReportService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}];

CustomreportdetailPage.propDecorators = {
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ['popover']
  }]
};
CustomreportdetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-customreportdetail',
  template: _customreportdetail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_customreportdetail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CustomreportdetailPage);


/***/ }),

/***/ 81169:
/*!***************************************************************!*\
  !*** ./src/app/pipes/filterBySearch/filter-by-search.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterBySearchPipe": () => (/* binding */ FilterBySearchPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let FilterBySearchPipe = class FilterBySearchPipe {
    transform(value, tablerowID) {
        console.log(tablerowID, "data");
        let element = document.getElementById('tablerowID');
        console.log(element, "element");
        return tablerowID;
    }
};
FilterBySearchPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterBySearch',
        standalone: true
    })
], FilterBySearchPipe);



/***/ }),

/***/ 4927:
/*!***********************************************!*\
  !*** ./src/app/pipes/split-data-type.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplitDataTypePipe": () => (/* binding */ SplitDataTypePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let SplitDataTypePipe = class SplitDataTypePipe {
    transform(item) {
        return item.split(',')[0];
    }
};
SplitDataTypePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'splitDataType',
        standalone: true
    })
], SplitDataTypePipe);



/***/ }),

/***/ 6570:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/customreportdetail/customreportdetail.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".custum-reports-web {\n  padding-bottom: 50px;\n}\n.custum-reports-web ion-header ion-toolbar .navname {\n  height: 45px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.custum-reports-web ion-header ion-toolbar .navname span p {\n  color: white;\n  font-size: 1.3em;\n}\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea {\n  width: 20%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n}\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea img {\n  position: absolute;\n  left: 10px;\n}\n.custum-reports-web ion-content .sideNav.active {\n  display: block;\n  width: 400px;\n  height: 100%;\n  max-height: 100% !important;\n  margin-top: 5px;\n  margin-bottom: 50px;\n  overflow-y: auto;\n  z-index: 50;\n  position: absolute;\n  background: white;\n  box-shadow: 15px 0px 50px -10px rgba(0, 0, 0, 0.75);\n  overflow-x: visible;\n}\n.custum-reports-web ion-content .sideNav.active .sideNavCloseButton {\n  z-index: 51;\n  width: 50px;\n  height: 30px;\n  position: absolute;\n  right: 0px;\n  top: 20px;\n  z-index: 1000;\n  margin-left: 0px !important;\n  padding: auto;\n  background: #74b743;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  border-radius: 15px 0px 0px 15px;\n}\n.custum-reports-web ion-content .sideNav.active .sideNavCloseButton ion-icon {\n  color: white;\n  scale: 1.5;\n  margin: 5px;\n  z-index: 52;\n  position: absolute;\n}\n.custum-reports-web ion-content .sideNav.active .title {\n  margin-top: 15px;\n  margin-left: 15px;\n}\n.custum-reports-web ion-content .sideNav.active .title span {\n  font-size: 30px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea {\n  width: 85%;\n  margin: 20px auto;\n  margin-bottom: 50px;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav {\n  width: 95%;\n  margin: 5px;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group {\n  width: 100% !important;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion {\n  scale: 1;\n  transition: 0.4s;\n  border: solid 3px rgb(202, 195, 195);\n  border-radius: 10px;\n  cursor: pointer;\n  pointer-events: all;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item {\n  border: solid 3px rgb(202, 195, 195);\n  border-radius: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transform: scale(1);\n  transition: 0.4s;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item:hover {\n  transform: scale(1.01);\n  transition: 0.4s;\n  border: solid 3px #74b743;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded {\n  border: none;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed:hover {\n  border: solid 3px #74b743;\n  transform: scale(1.01);\n  transition: 0.4s;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsing ion-item[slot=header],\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanding ion-item[slot=header],\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-primary-contrast);\n}\n.custum-reports-web ion-content .sideNav {\n  display: none;\n}\n.custum-reports-web ion-content .headnameAndSearch {\n  height: auto;\n  padding: 5px;\n  margin-bottom: 15px;\n}\n.custum-reports-web ion-content .headnameAndSearch .sideNavButton {\n  width: 30px;\n  height: 30px;\n  margin-left: 0px !important;\n  margin-top: 15px;\n  padding: auto;\n  background: #74b743;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  border-radius: 0px 15px 15px 0px;\n}\n.custum-reports-web ion-content .headnameAndSearch .sideNavButton ion-icon {\n  color: white;\n  scale: 1.3;\n  margin: 5px;\n}\n.custum-reports-web ion-content .headnameAndSearch .reportTitleName span {\n  display: flex;\n  max-width: 90%;\n  margin-left: 25px;\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n.custum-reports-web ion-content .headnameAndSearch ion-searchbar {\n  width: 75%;\n  margin-top: 2%;\n  border-radius: 15px;\n  padding: 0px;\n  background: white;\n}\n.custum-reports-web ion-content .headnameAndSearch ion-searchbar .searchbar-input-container {\n  border: none;\n  border-radius: 15px;\n  padding: 0px;\n}\n.custum-reports-web ion-content .headnameAndSearch ion-searchbar .searchbar-input-container input {\n  border: solid 2px grey;\n  border-radius: 15px;\n}\n.custum-reports-web ion-content .filterContainer {\n  width: 102%;\n  max-width: 102%;\n  margin-left: -1%;\n  margin-right: 0px;\n  border-radius: 0px 0px 80px 80px;\n  box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n  margin-top: 0px;\n  padding-top: 5px !important;\n  padding-left: 25px !important;\n  padding-right: 25px !important;\n  padding-bottom: 0px !important;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active {\n  display: block !important;\n  margin-left: 15px;\n  margin-right: 15px;\n  width: 98%;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem {\n  border: solid 3px #74b743;\n  max-height: 45px;\n  height: 45px;\n  max-height: 45px;\n  padding: 0px !important;\n  display: flex;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem .wrapperForDate {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n  align-content: center;\n  width: 100%;\n  height: 100%;\n  max-height: 100% !important;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem .wrapperForDate input {\n  background: inherit;\n  color: #000;\n  border: none;\n  font-size: 18px;\n  width: 80%;\n  height: 40px;\n  max-height: 40px;\n  margin-top: 2.5px;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem input {\n  border: none;\n  margin-top: 0px;\n  height: 40px;\n  max-height: 40px;\n  width: 100% !important;\n  max-width: 100% !important;\n  margin-left: 0px;\n  margin-right: 0px;\n  display: flex;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem ionic-selectable {\n  margin-top: 0px;\n  height: 40px;\n  max-height: 40px;\n  width: 100%;\n  max-width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#errorMsgRow {\n  padding: 5px;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#errorMsgRow ion-col {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#filterButtonsRow ion-col#filterButtonCol {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid {\n  display: none !important;\n}\n.custum-reports-web ion-content .filterContainer .hideGridBtn {\n  width: 50%;\n  margin-left: 25%;\n}\n.custum-reports-web ion-content .filterContainer .hideGridBtn .iconArea {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .filterContainer .hideGridBtn .iconArea ion-icon {\n  scale: 1.5;\n}\n.custum-reports-web ion-content .resultsFilter {\n  border-radius: 0px 0px 30px 30px;\n  width: 80%;\n  margin-left: 10%;\n  height: auto;\n  margin-top: 5px;\n  z-index: -10;\n  box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n  padding: 10px;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header {\n  width: 95%;\n  margin-left: 2.5%;\n  height: 30px;\n  max-height: 30px !important;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header .spanarea {\n  width: 90%;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header .spanarea span {\n  font-size: 20px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header .iconArea {\n  width: 8%;\n  margin-left: 5px;\n  display: flex;\n  flex-direction: row-reverse;\n  margin-top: 5px;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header .iconArea ion-icon {\n  scale: 1.5;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#divshow {\n  width: 90%;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  max-height: 60px !important;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) input {\n  height: 100%;\n  width: 100%;\n  border: solid 2px #74b743;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#divshow ion-col#filterbtnCol {\n  display: flex;\n  flex-direction: row;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results {\n  border-radius: 5px;\n  border: solid 3px burlywood;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding: 5px;\n  padding-bottom: 25px;\n  width: 95%;\n  margin-left: 2.5%;\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.45), 25px 0px 20px -20px rgba(0, 0, 0, 0.45), 0px 25px 20px -20px rgba(0, 0, 0, 0.45), -25px 0px 20px -20px rgba(0, 0, 0, 0.45);\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid {\n  padding: 0px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-content: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount {\n  height: 100%;\n  max-height: 60px;\n  display: flex;\n  align-items: center;\n  width: 45%;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea {\n  height: 100%;\n  width: 40%;\n  display: flex;\n  align-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea span {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  text-align: left;\n  height: 100%;\n  width: auto;\n  margin-left: 0px;\n  font-size: 25px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount #repPerPage {\n  width: 50%;\n  max-width: 300px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch {\n  height: 100%;\n  max-height: 60px;\n  display: flex;\n  align-items: center;\n  width: 50%;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .exportBtns {\n  width: 49%;\n  display: flex;\n  flex-direction: row;\n  align-content: flex-end;\n  align-items: flex-end;\n  padding-left: 10px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch {\n  width: 45%;\n  height: 100%;\n  max-height: 60px;\n  display: flex;\n  align-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch input {\n  width: 90%;\n  height: 45px;\n  border: solid 2px #74b743;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop .reportSettings {\n  margin-right: 0px;\n  display: flex;\n  width: 5%;\n  align-items: center;\n  justify-items: center;\n  align-content: flex-end;\n  justify-content: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager {\n  width: 98%;\n  margin-left: 1%;\n  margin-top: 5px;\n  padding-bottom: 0px;\n  table-layout: fixed;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager .switchheaderclass {\n  background-color: #ad1111;\n  color: #000000;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager .switchheaderclass ion-icon {\n  transform: rotateZ(180deg);\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead {\n  background: #fff;\n  color: #000000;\n  height: 40px;\n  font-size: 15px;\n  margin-bottom: 10px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead tr {\n  border: solid 2px white;\n  padding-left: 2px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead tr th.headerID {\n  border: solid 2px white;\n  padding-left: 5px;\n  background-color: #CDCDCD;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead tr th.headerID.switchheaderclass {\n  border: solid 2px white;\n  padding-left: 5px;\n  background-color: #AAAAAA;\n  color: #000000;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead tr th.headerID.switchheaderclass ion-icon {\n  transform: rotateZ(180deg);\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody {\n  margin-top: 5px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody tr:nth-child(odd) {\n  background: #eceff0;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody tr {\n  border: solid 2px white;\n  height: 30px;\n  margin: 5px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody tr td.dataType-number {\n  font-size: 18px;\n  padding-left: 10px;\n  padding-right: 10px;\n  max-width: 20% !important;\n  overflow: hidden;\n  text-align: right;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody tr td.dataType-string {\n  font-size: 18px;\n  padding-left: 10px;\n  padding-right: 10px;\n  max-width: 20% !important;\n  overflow: hidden;\n  text-align: left;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody tr td.dataType-date {\n  font-size: 18px;\n  padding-left: 10px;\n  padding-right: 10px;\n  max-width: 20% !important;\n  overflow: hidden;\n  text-align: left;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tfoot {\n  margin-bottom: 5px;\n  height: 45px;\n  margin-top: 20px;\n  margin-left: 0px;\n  justify-content: start;\n  align-content: center;\n  align-items: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tfoot pagination-controls.my-pagination {\n  margin: auto;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  height: 45px;\n  width: 500px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid {\n  width: 98%;\n  margin-left: 1%;\n  margin-top: 5px;\n  padding-bottom: 0px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .headersForSingleTable {\n  background: #fff;\n  color: #000000;\n  font-size: 15px;\n  margin-bottom: 10px;\n  height: 20px;\n  max-height: 20px !important;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .headersForSingleTable ion-row {\n  padding-left: 2px;\n  height: 100%;\n  max-height: 50px !important;\n  border: solid 2px white;\n  margin-bottom: 5px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .headersForSingleTable ion-row ion-col {\n  background-color: #CDCDCD;\n  word-wrap: break-word;\n  border: solid 2px white;\n  text-align: center;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .dataForSingleTable {\n  margin-top: 60px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .dataForSingleTable ion-row:nth-child(odd) {\n  background: #eceff0;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .dataForSingleTable ion-row {\n  border: solid 2px white;\n  margin: 5px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .dataForSingleTable ion-row ion-col.dataType-number {\n  font-size: 18px;\n  padding-left: 8px;\n  max-width: 20% !important;\n  overflow: auto;\n  text-overflow: initial;\n  text-align: right;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .dataForSingleTable ion-row ion-col.dataType-string {\n  font-size: 18px;\n  padding-left: 8px;\n  max-width: 20% !important;\n  overflow: auto;\n  text-overflow: initial;\n  text-align: left;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .dataForSingleTable ion-row ion-col .textdata-number {\n  font-size: 18px;\n  max-width: 100% !important;\n  overflow: hidden;\n  text-align: right;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid .dataForSingleTable ion-row ion-col .textdata-string {\n  font-size: 18px;\n  max-width: 100% !important;\n  overflow: hidden;\n  text-align: left;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid #rowForMemberWiseReport {\n  font-weight: bold;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #eceff0;\n  border: solid 2px white;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid #rowForMemberWiseReport #amountCol {\n  display: flex;\n  border: solid 2px white;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid #rowForMemberWiseReport #amountCol #amountColValue {\n  position: absolute;\n  right: 0px;\n  height: 35px;\n  top: 5px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid #rowForMemberWiseReport #remarksCol {\n  display: flex;\n  border: solid 2px white;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid #rowForMemberWiseReport #remarksCol #remarksColValue {\n  position: absolute;\n  right: 0px;\n  height: 35px;\n  top: 5px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid tfoot {\n  margin-bottom: 5px;\n  height: 45px;\n  margin-top: 20px;\n  margin-left: 0px;\n  justify-content: start;\n  align-content: center;\n  align-items: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid tfoot pagination-controls.my-pagination {\n  margin: auto;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  height: 45px;\n  width: 500px;\n}\n.custum-reports-mobile {\n  display: none !important;\n}\n@media only screen and (max-width: 480px) {\n  .custum-reports-mobile {\n    display: block !important;\n    padding-bottom: 50px;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname {\n    height: 45px;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname span p {\n    color: white;\n    font-size: 1.3em;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea {\n    width: 20%;\n    height: 100%;\n    position: absolute;\n    left: 0px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea img {\n    position: absolute;\n    left: 10px;\n  }\n  .custum-reports-mobile ion-content {\n    margin-bottom: 75px;\n    padding-bottom: 50px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active {\n    display: block;\n    width: 400px;\n    height: 100%;\n    max-height: 100% !important;\n    margin-top: 5px;\n    margin-bottom: 50px;\n    overflow-y: auto;\n    z-index: 50;\n    position: absolute;\n    background: white;\n    box-shadow: 15px 0px 50px -10px rgba(0, 0, 0, 0.75);\n    overflow-x: visible;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .sideNavCloseButton {\n    z-index: 51;\n    width: 50px;\n    height: 30px;\n    position: absolute;\n    right: 0px;\n    top: 20px;\n    z-index: 1000;\n    margin-left: 0px !important;\n    padding: auto;\n    background: #74b743;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n    border-radius: 15px 0px 0px 15px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .sideNavCloseButton ion-icon {\n    color: white;\n    scale: 1.5;\n    margin: 5px;\n    z-index: 52;\n    position: absolute;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .title {\n    margin-top: 15px;\n    margin-left: 15px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .title span {\n    font-size: 30px;\n    font-weight: bold;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea {\n    width: 85%;\n    margin: 20px auto;\n    margin-bottom: 50px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav {\n    width: 95%;\n    margin: 5px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group {\n    width: 100% !important;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion {\n    scale: 1;\n    transition: 0.4s;\n    border: solid 3px rgb(202, 195, 195);\n    border-radius: 10px;\n    cursor: pointer;\n    pointer-events: all;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item {\n    border: solid 3px rgb(202, 195, 195);\n    border-radius: 10px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    transform: scale(1);\n    transition: 0.4s;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item:hover {\n    transform: scale(1.01);\n    transition: 0.4s;\n    border: solid 3px #74b743;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded {\n    border: none;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed:hover {\n    border: solid 3px #74b743;\n    transform: scale(1.01);\n    transition: 0.4s;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsing ion-item[slot=header],\n.custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed ion-item[slot=header] {\n    --background: var(--ion-color-light);\n    --color: var(--ion-color-light-contrast);\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanding ion-item[slot=header],\n.custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded ion-item[slot=header] {\n    --background: var(--ion-color-primary);\n    --color: var(--ion-color-primary-contrast);\n  }\n  .custum-reports-mobile ion-content .sideNav {\n    display: none;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch {\n    height: 60px;\n    margin-bottom: 15px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch .sideNavButton {\n    width: 30px;\n    height: 30px;\n    margin-left: 0px !important;\n    margin-top: 15px;\n    padding: auto;\n    background: #74b743;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n    border-radius: 0px 15px 15px 0px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch .sideNavButton ion-icon {\n    color: white;\n    scale: 1.3;\n    margin: 5px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch span {\n    border: solid 2x orange;\n    width: 100%;\n    height: auto;\n    margin-left: 30px;\n    font-size: 1.5em;\n    margin-bottom: 20px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar {\n    width: 75%;\n    margin-top: 2%;\n    border-radius: 15px;\n    padding: 0px;\n    background: white;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar .searchbar-input-container {\n    border: none;\n    border-radius: 15px;\n    padding: 0px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar .searchbar-input-container input {\n    border: solid 2px grey;\n    border-radius: 15px;\n  }\n  .custum-reports-mobile ion-content .filterContainer {\n    width: 102%;\n    max-width: 102%;\n    margin-left: -1%;\n    margin-right: 0px;\n    border-radius: 0px 0px 80px 80px;\n    box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n    margin-top: 0px;\n    padding-top: 5px !important;\n    padding-left: 25px !important;\n    padding-right: 25px !important;\n    padding-bottom: 0px !important;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active {\n    display: block !important;\n    margin-left: 15px;\n    margin-right: 15px;\n    width: 98%;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem {\n    border: solid 3px #74b743;\n    margin-top: 10px;\n    max-height: 45px;\n    height: 45px;\n    max-height: 45px;\n    padding: 0px !important;\n    display: flex;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem input {\n    border: none;\n    margin-top: 0px;\n    height: 40px;\n    max-height: 40px;\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-left: 0px;\n    margin-right: 0px;\n    display: flex;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem ionic-selectable {\n    margin-top: 0px;\n    height: 40px;\n    max-height: 40px;\n    width: 100%;\n    max-width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#errorMsgRow {\n    padding: 5px;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#errorMsgRow ion-col {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#filterButtonsRow ion-col#filterButtonCol {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid {\n    display: none !important;\n  }\n  .custum-reports-mobile ion-content .filterContainer .hideGridBtn {\n    width: 50%;\n    margin-left: 25%;\n  }\n  .custum-reports-mobile ion-content .filterContainer .hideGridBtn .iconArea {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .filterContainer .hideGridBtn .iconArea ion-icon {\n    scale: 1.5;\n  }\n  .custum-reports-mobile ion-content .resultsFilter {\n    border-radius: 0px 0px 30px 30px;\n    width: 80%;\n    margin-left: 10%;\n    height: auto;\n    margin-top: 5px;\n    z-index: -10;\n    box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n    padding: 10px;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header {\n    width: 95%;\n    margin-left: 2.5%;\n    height: 30px;\n    max-height: 30px !important;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .spanarea {\n    width: 90%;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .spanarea span {\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .iconArea {\n    width: 8%;\n    margin-left: 5px;\n    display: flex;\n    flex-direction: row-reverse;\n    margin-top: 5px;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .iconArea ion-icon {\n    scale: 1.5;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#divshow {\n    width: 90%;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) input {\n    height: 80%;\n    width: 100%;\n    border: solid 2px #74b743;\n  }\n  .custum-reports-mobile ion-content .results {\n    border-radius: 5px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    padding: 5px;\n    padding-bottom: 25px;\n    width: 95%;\n    margin-left: 2.5%;\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.45), 25px 0px 20px -20px rgba(0, 0, 0, 0.45), 0px 25px 20px -20px rgba(0, 0, 0, 0.45), -25px 0px 20px -20px rgba(0, 0, 0, 0.45);\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid {\n    padding: 0px;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop {\n    width: 96%;\n    height: 60px;\n    margin-left: 2%;\n    max-width: 96%;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount {\n    height: 100%;\n    max-height: 60px;\n    display: flex;\n    align-items: center;\n    width: 49%;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea {\n    height: 100%;\n    width: 40%;\n    display: flex;\n    align-items: center;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea span {\n    display: flex;\n    align-items: center;\n    align-content: center;\n    text-align: left;\n    height: 100%;\n    width: auto;\n    margin-left: 0px;\n    font-size: 25px;\n    font-weight: bold;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount #repPerPage {\n    width: 60%;\n    max-width: 300px;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch {\n    height: 100%;\n    max-height: 60px;\n    display: flex;\n    align-items: center;\n    width: 50%;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .exportBtns {\n    width: 49%;\n    display: flex;\n    flex-direction: row;\n    align-content: flex-end;\n    align-items: flex-end;\n    padding-left: 10px;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch {\n    width: 49%;\n    height: 100%;\n    max-height: 60px;\n    display: flex;\n    align-items: center;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch input {\n    width: 90%;\n    height: 45px;\n    border: solid 2px #74b743;\n  }\n  .custum-reports-mobile ion-content .results table#pager {\n    width: 98%;\n    margin-left: 1%;\n    margin-top: 5px;\n    padding-bottom: 0px;\n    table-layout: fixed;\n  }\n  .custum-reports-mobile ion-content .results table#pager .switchheaderclass {\n    background-color: #d1d1d1;\n    color: #000000;\n  }\n  .custum-reports-mobile ion-content .results table#pager .switchheaderclass ion-icon {\n    transform: rotateZ(180deg);\n  }\n  .custum-reports-mobile ion-content .results table#pager thead {\n    background: #fff;\n    color: #000000;\n    height: 40px;\n    font-size: 15px;\n    margin-bottom: 10px;\n  }\n  .custum-reports-mobile ion-content .results table#pager thead tr {\n    border: solid 2px white;\n    padding-left: 2px;\n  }\n  .custum-reports-mobile ion-content .results table#pager thead tr th {\n    border: solid 2px white;\n    padding-left: 5px;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody {\n    margin-top: 5px;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody tr:nth-child(odd) {\n    background: #eceff0;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody tr {\n    border: solid 2px white;\n    height: 30px;\n    margin: 5px;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody tr td {\n    font-size: 18px;\n    padding-left: 8px;\n    max-width: 20% !important;\n    overflow: hidden;\n  }\n  .custum-reports-mobile ion-content .results table#pager tfoot {\n    margin-bottom: 5px;\n    height: 45px;\n    margin-top: 20px;\n    margin-left: 0px;\n    justify-content: start;\n    align-content: center;\n    align-items: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .results table#pager tfoot pagination-controls.my-pagination {\n    margin: auto;\n    padding-top: 20px;\n    display: flex;\n    flex-direction: row;\n    height: 45px;\n    width: 500px;\n  }\n  .custum-reports-web {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbXJlcG9ydGRldGFpbC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxPcmlnaHQlMjBBcHAlMjBJb25pYyUyMDYlMjBCdWlsZCUyMDMwJTIwTWFyY2hcXE9yaWdodF92NF9NaW5pQnVpbGRcXHNyY1xcYXBwXFxwYWdlc1xcY3VzdG9tcmVwb3J0ZGV0YWlsXFxjdXN0b21yZXBvcnRkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7QUNBSjtBREtZO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNKaEI7QURPa0I7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNMcEI7QURTZ0I7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDUGxCO0FEUWtCO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDTnBCO0FEa0JRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtBQ2pCWjtBRGtCWTtFQUNFLFdBQUE7RUFVQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQ3pCZDtBREVjO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLGtC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ZUFBQTtFQ3RXZDtFRHdXYztJQUNFLG1CQUFBO0VDdFdoQjtFRHdXYztJQUNFLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUN0V2hCO0VEd1dnQjtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBRUEsZ0JBQUE7RUN2V2xCO0VENFdZO0lBRUUsa0JBQUE7SUFFQSxZQUFBO0lBRUEsZ0JBQUE7SUFDQSxnQkFBQTtJQUdBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VDL1dkO0VEZ1hjO0lBRUUsWUFBQTtJQUNBLGlCQUFBO0lBR0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNqWGhCO0VEOFhJO0lBQ0Usd0JBQUE7RUM1WE47QUFDRiIsImZpbGUiOiJjdXN0b21yZXBvcnRkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3R1bS1yZXBvcnRzLXdlYlxyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGlvbi1oZWFkZXJ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubmF2bmFtZSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYmFja2J1dHRvbmFyZWEge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29udGVudCB7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLnNpZGVOYXYuYWN0aXZlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgei1pbmRleDogNTA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDE1cHggMHB4IDUwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcclxuICAgICAgICAgICAgLnNpZGVOYXZDbG9zZUJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogNTE7XHJcbiAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuNTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNTI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogYXV0bztcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVwb3J0TGlzdEFyZWEge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigyMDIsIDE5NSwgMTk1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjcmVwb3J0c1BhbmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpbmdsZUl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzaW5nIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZCBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2lkZU5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZG5hbWVBbmRTZWFyY2gge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgICAgIC5zaWRlTmF2QnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjM7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgIC5yZXBvcnRUaXRsZU5hbWV7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmlsdGVyQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMiU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMiU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDgwcHggODBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgICAgICAgIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQuZmlsdGVyR3JpZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgXHJcbiAgICAgICAgICAgICAgaW9uLXJvdyN0b3BMZXZlbEZpbHRlcnNSb3d7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbHtcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVye1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbS50b3BMZXZlbEl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud3JhcHBlckZvckRhdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb25pYy1zZWxlY3RhYmxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW9uLXJvdyNlcnJvck1zZ1JvdyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tcm93I2ZpbHRlckJ1dHRvbnNSb3cge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWNvbCNmaWx0ZXJCdXR0b25Db2wge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLmZpbHRlckdyaWQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGlkZUdyaWRCdG4ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgICAuaWNvbkFyZWEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICBzY2FsZTogMS41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlc3VsdHNGaWx0ZXJ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgaW9uLXJvdyNoZWFkZXJ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLnNwYW5hcmVhe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmljb25BcmVhe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1yb3cjZGl2c2hvdyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpb24tY29sOmhhcyhpbnB1dFt0eXBlPSd0ZXh0J10pe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWNvbCNmaWx0ZXJidG5Db2x7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgIFxyXG4gIFxyXG4gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlc3VsQXJlYVdpdGhUYWJsZXtcclxuICAgICAgICAgIC5yZXN1bHRzIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IGJ1cmx5d29vZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAyNXB4IDIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0yNXB4IDBweCAyMHB4IC0yMHB4IHJnYmEoMCwwLDAsMC40NSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLWdyaWQjcmVzdWx0c0dyaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgI3RhYmxlVGl0bGVBbmRDb3VudHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlYXJlYXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmVwUGVyUGFnZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2ZpbHRlckJ0bnNBbmRTZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5leHBvcnRCdG5ze1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXBvcnRTZXR0aW5nc3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICB0YWJsZSNwYWdlciB7XHJcbiAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgLnN3aXRjaGhlYWRlcmNsYXNzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkMTExMTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgICB0aC5oZWFkZXJJRCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NEQ0RDRDtcclxuICAgICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoLmhlYWRlcklELnN3aXRjaGhlYWRlcmNsYXNzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBQUFBO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZWZmMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gIFxyXG4gICAgICAgICAgICAgIHRkLmRhdGFUeXBlLW51bWJlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRkLmRhdGFUeXBlLXN0cmluZyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGQuZGF0YVR5cGUtZGF0ZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRmb290IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb24tY29udHJvbHMubXktcGFnaW5hdGlvbntcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWdyaWQjcGFnZXJHcmlkIHtcclxuICAgICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAuaGVhZGVyc0ZvclNpbmdsZVRhYmxlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50IDtcclxuICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRENEQ0Q7XHJcbiAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGF0YUZvclNpbmdsZVRhYmxlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24tcm93Om50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlZmYwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgLy9oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgXHJcbiAgICAgICAgICAgICAgaW9uLWNvbC5kYXRhVHlwZS1udW1iZXJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvL3doaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW9uLWNvbC5kYXRhVHlwZS1zdHJpbmd7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvL3doaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICAudGV4dGRhdGEtbnVtYmVye1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dGRhdGEtc3RyaW5ne1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3Jvd0Zvck1lbWJlcldpc2VSZXBvcnR7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VmZjA7XHJcbiAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICNhbW91bnRDb2x7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAjYW1vdW50Q29sVmFsdWV7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNyZW1hcmtzQ29se1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgI3JlbWFya3NDb2xWYWx1ZXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0Zm9vdCB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uLWNvbnRyb2xzLm15LXBhZ2luYXRpb257XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuXHJcbiAgICB9XHJcbiBcclxuXHJcblxyXG59XHJcblxyXG4gLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgaW9uLWhlYWRlcntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2bmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5iYWNrYnV0dG9uYXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlvbi1jb250ZW50IHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo3NXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLnNpZGVOYXYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDE1cHggMHB4IDUwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAuc2lkZU5hdkNsb3NlQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgei1pbmRleDogNTE7XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJlcG9ydExpc3RBcmVhIHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigyMDIsIDE5NSwgMTk1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNyZXBvcnRzUGFuZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaW5nbGVJdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzaW5nIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzZWQgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2lkZU5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaGVhZG5hbWVBbmRTZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuc2lkZU5hdkJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAyeCBvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWx0ZXJDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAyJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDgwcHggODBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgaW9uLXJvdyN0b3BMZXZlbEZpbHRlcnNSb3d7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbS50b3BMZXZlbEl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbmljLXNlbGVjdGFibGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1yb3cjZXJyb3JNc2dSb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpb24tcm93I2ZpbHRlckJ1dHRvbnNSb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNvbCNmaWx0ZXJCdXR0b25Db2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5oaWRlR3JpZEJ0biB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgIC5pY29uQXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJlc3VsdHNGaWx0ZXJ7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTEwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGlvbi1yb3cjaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC5zcGFuYXJlYXtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmljb25BcmVhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1yb3cjZGl2c2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1jb2w6aGFzKGlucHV0W3R5cGU9J3RleHQnXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5yZXN1bHRzIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuNDUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggMjVweCAyMHB4IC0yMHB4IHJnYmEoMCwwLDAsMC40NSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBpb24tcm93I3JlcG9ydFRhYmxlVG9wIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NiU7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjdGFibGVUaXRsZUFuZENvdW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAudGl0bGVhcmVhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNyZXBQZXJQYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2ZpbHRlckJ0bnNBbmRTZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhwb3J0QnRuc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgdGFibGUjcGFnZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC5zd2l0Y2hoZWFkZXJjbGFzcyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMWQxO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZWZmMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0Zm9vdCB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb24tY29udHJvbHMubXktcGFnaW5hdGlvbntcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuY3VzdHVtLXJlcG9ydHMtd2ViIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAiLCIuY3VzdHVtLXJlcG9ydHMtd2ViIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUgc3BhbiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIC5iYWNrYnV0dG9uYXJlYSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSAuYmFja2J1dHRvbmFyZWEgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiA1MDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMTVweCAwcHggNTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBvdmVyZmxvdy14OiB2aXNpYmxlO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnNpZGVOYXZDbG9zZUJ1dHRvbiB7XG4gIHotaW5kZXg6IDUxO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMjBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjNzRiNzQzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnNpZGVOYXZDbG9zZUJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgc2NhbGU6IDEuNTtcbiAgbWFyZ2luOiA1cHg7XG4gIHotaW5kZXg6IDUyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC50aXRsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uIHtcbiAgc2NhbGU6IDE7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJvcmRlcjogc29saWQgM3B4IHJnYigyMDIsIDE5NSwgMTk1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uICNyZXBvcnRzUGFuZWwgLnNpbmdsZUl0ZW0gaW9uLWl0ZW0ge1xuICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uICNyZXBvcnRzUGFuZWwgLnNpbmdsZUl0ZW0gaW9uLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkOmhvdmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2luZyBpb24taXRlbVtzbG90PWhlYWRlcl0sXG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZCBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyBpb24taXRlbVtzbG90PWhlYWRlcl0sXG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCAuc2lkZU5hdkJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogYXV0bztcbiAgYmFja2dyb3VuZDogIzc0Yjc0MztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIC5zaWRlTmF2QnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBzY2FsZTogMS4zO1xuICBtYXJnaW46IDVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIC5yZXBvcnRUaXRsZU5hbWUgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgZm9udC1zaXplOiAzZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAycHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDIlO1xuICBtYXgtd2lkdGg6IDEwMiU7XG4gIG1hcmdpbi1sZWZ0OiAtMSU7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDgwcHggODBweDtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQuZmlsdGVyR3JpZC5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB3aWR0aDogOTglO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyN0b3BMZXZlbEZpbHRlcnNSb3cgaW9uLWNvbCN0b3BMZXZlbEZpbHRlcnNDb2wgLmZpbHRlciBpb24taXRlbS50b3BMZXZlbEl0ZW0ge1xuICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xuICBtYXgtaGVpZ2h0OiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1heC1oZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyN0b3BMZXZlbEZpbHRlcnNSb3cgaW9uLWNvbCN0b3BMZXZlbEZpbHRlcnNDb2wgLmZpbHRlciBpb24taXRlbS50b3BMZXZlbEl0ZW0gLndyYXBwZXJGb3JEYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I3RvcExldmVsRmlsdGVyc1JvdyBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbCAuZmlsdGVyIGlvbi1pdGVtLnRvcExldmVsSXRlbSAud3JhcHBlckZvckRhdGUgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDBweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMi41cHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I3RvcExldmVsRmlsdGVyc1JvdyBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbCAuZmlsdGVyIGlvbi1pdGVtLnRvcExldmVsSXRlbSBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjdG9wTGV2ZWxGaWx0ZXJzUm93IGlvbi1jb2wjdG9wTGV2ZWxGaWx0ZXJzQ29sIC5maWx0ZXIgaW9uLWl0ZW0udG9wTGV2ZWxJdGVtIGlvbmljLXNlbGVjdGFibGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I2Vycm9yTXNnUm93IHtcbiAgcGFkZGluZzogNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyNlcnJvck1zZ1JvdyBpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjZmlsdGVyQnV0dG9uc1JvdyBpb24tY29sI2ZpbHRlckJ1dHRvbkNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLmZpbHRlckdyaWQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgLmhpZGVHcmlkQnRuIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciAuaGlkZUdyaWRCdG4gLmljb25BcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciAuaGlkZUdyaWRCdG4gLmljb25BcmVhIGlvbi1pY29uIHtcbiAgc2NhbGU6IDEuNTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDMwcHggMzBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHotaW5kZXg6IC0xMDtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNoZWFkZXIgLnNwYW5hcmVhIHtcbiAgd2lkdGg6IDkwJTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNoZWFkZXIgLnNwYW5hcmVhIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciAuaWNvbkFyZWEge1xuICB3aWR0aDogOCU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciAuaWNvbkFyZWEgaW9uLWljb24ge1xuICBzY2FsZTogMS41O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2RpdnNob3cge1xuICB3aWR0aDogOTAlO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2RpdnNob3cgaW9uLWNvbDpoYXMoaW5wdXRbdHlwZT10ZXh0XSkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNkaXZzaG93IGlvbi1jb2w6aGFzKGlucHV0W3R5cGU9dGV4dF0pIGlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzc0Yjc0Mztcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNkaXZzaG93IGlvbi1jb2wjZmlsdGVyYnRuQ29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggYnVybHl3b29kO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSksIDI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KSwgMHB4IDI1cHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNDUpLCAtMjVweCAwcHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICN0YWJsZVRpdGxlQW5kQ291bnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0NSU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjdGFibGVUaXRsZUFuZENvdW50IC50aXRsZWFyZWEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjdGFibGVUaXRsZUFuZENvdW50IC50aXRsZWFyZWEgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICN0YWJsZVRpdGxlQW5kQ291bnQgI3JlcFBlclBhZ2Uge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI2ZpbHRlckJ0bnNBbmRTZWFyY2gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjZmlsdGVyQnRuc0FuZFNlYXJjaCAuZXhwb3J0QnRucyB7XG4gIHdpZHRoOiA0OSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICNmaWx0ZXJCdG5zQW5kU2VhcmNoIC5yZXN1bHRzZWFyY2gge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjZmlsdGVyQnRuc0FuZFNlYXJjaCAucmVzdWx0c2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjNzRiNzQzO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgLnJlcG9ydFNldHRpbmdzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciAuc3dpdGNoaGVhZGVyY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQxMTExO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciAuc3dpdGNoaGVhZGVyY2xhc3MgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB0aC5oZWFkZXJJRCB7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NEQ0RDRDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB0aC5oZWFkZXJJRC5zd2l0Y2hoZWFkZXJjbGFzcyB7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBQUFBQTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGhlYWQgdHIgdGguaGVhZGVySUQuc3dpdGNoaGVhZGVyY2xhc3MgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlY2VmZjA7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkgdHIge1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB0ciB0ZC5kYXRhVHlwZS1udW1iZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkgdHIgdGQuZGF0YVR5cGUtc3RyaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkgdHIgdGQuZGF0YVR5cGUtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXgtd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIHRhYmxlI3BhZ2VyIHRmb290IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIHRhYmxlI3BhZ2VyIHRmb290IHBhZ2luYXRpb24tY29udHJvbHMubXktcGFnaW5hdGlvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZCB7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZCAuaGVhZGVyc0ZvclNpbmdsZVRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkIC5oZWFkZXJzRm9yU2luZ2xlVGFibGUgaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQgLmhlYWRlcnNGb3JTaW5nbGVUYWJsZSBpb24tcm93IGlvbi1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RDRENEO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZCAuZGF0YUZvclNpbmdsZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQgLmRhdGFGb3JTaW5nbGVUYWJsZSBpb24tcm93Om50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VjZWZmMDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQgLmRhdGFGb3JTaW5nbGVUYWJsZSBpb24tcm93IHtcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gIG1hcmdpbjogNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZCAuZGF0YUZvclNpbmdsZVRhYmxlIGlvbi1yb3cgaW9uLWNvbC5kYXRhVHlwZS1udW1iZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBtYXgtd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbiAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkIC5kYXRhRm9yU2luZ2xlVGFibGUgaW9uLXJvdyBpb24tY29sLmRhdGFUeXBlLXN0cmluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZCAuZGF0YUZvclNpbmdsZVRhYmxlIGlvbi1yb3cgaW9uLWNvbCAudGV4dGRhdGEtbnVtYmVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkIC5kYXRhRm9yU2luZ2xlVGFibGUgaW9uLXJvdyBpb24tY29sIC50ZXh0ZGF0YS1zdHJpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZCAjcm93Rm9yTWVtYmVyV2lzZVJlcG9ydCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZWNlZmYwO1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQgI3Jvd0Zvck1lbWJlcldpc2VSZXBvcnQgI2Ftb3VudENvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZCAjcm93Rm9yTWVtYmVyV2lzZVJlcG9ydCAjYW1vdW50Q29sICNhbW91bnRDb2xWYWx1ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkICNyb3dGb3JNZW1iZXJXaXNlUmVwb3J0ICNyZW1hcmtzQ29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkICNyb3dGb3JNZW1iZXJXaXNlUmVwb3J0ICNyZW1hcmtzQ29sICNyZW1hcmtzQ29sVmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZCB0Zm9vdCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQgdGZvb3QgcGFnaW5hdGlvbi1jb250cm9scy5teS1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5jdXN0dW0tcmVwb3J0cy1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUgc3BhbiBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUgLmJhY2tidXR0b25hcmVhIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIC5iYWNrYnV0dG9uYXJlYSBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogNTA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDE1cHggMHB4IDUwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5zaWRlTmF2Q2xvc2VCdXR0b24ge1xuICAgIHotaW5kZXg6IDUxO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjNzRiNzQzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5zaWRlTmF2Q2xvc2VCdXR0b24gaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBzY2FsZTogMS41O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHotaW5kZXg6IDUyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnRpdGxlIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbiB7XG4gICAgc2NhbGU6IDE7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24gI3JlcG9ydHNQYW5lbCAuc2luZ2xlSXRlbSBpb24taXRlbSB7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDIwMiwgMTk1LCAxOTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uICNyZXBvcnRzUGFuZWwgLnNpbmdsZUl0ZW0gaW9uLWl0ZW06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzaW5nIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSxcbi5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgaW9uLWl0ZW1bc2xvdD1oZWFkZXJdLFxuLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCAuc2lkZU5hdkJ1dHRvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgYmFja2dyb3VuZDogIzc0Yjc0MztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCAuc2lkZU5hdkJ1dHRvbiBpb24taWNvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHNjYWxlOiAxLjM7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2ggc3BhbiB7XG4gICAgYm9yZGVyOiBzb2xpZCAyeCBvcmFuZ2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIGlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAyJTtcbiAgICBtYXgtd2lkdGg6IDEwMiU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDgwcHggODBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLW1vYmlsZS5maWx0ZXJHcmlkLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyN0b3BMZXZlbEZpbHRlcnNSb3cgaW9uLWNvbCN0b3BMZXZlbEZpbHRlcnNDb2wgLmZpbHRlciBpb24taXRlbS50b3BMZXZlbEl0ZW0ge1xuICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQtbW9iaWxlLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjdG9wTGV2ZWxGaWx0ZXJzUm93IGlvbi1jb2wjdG9wTGV2ZWxGaWx0ZXJzQ29sIC5maWx0ZXIgaW9uLWl0ZW0udG9wTGV2ZWxJdGVtIGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLW1vYmlsZS5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I3RvcExldmVsRmlsdGVyc1JvdyBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbCAuZmlsdGVyIGlvbi1pdGVtLnRvcExldmVsSXRlbSBpb25pYy1zZWxlY3RhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQtbW9iaWxlLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjZXJyb3JNc2dSb3cge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyNlcnJvck1zZ1JvdyBpb24tY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyNmaWx0ZXJCdXR0b25zUm93IGlvbi1jb2wjZmlsdGVyQnV0dG9uQ29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciAuaGlkZUdyaWRCdG4ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgLmhpZGVHcmlkQnRuIC5pY29uQXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIC5oaWRlR3JpZEJ0biAuaWNvbkFyZWEgaW9uLWljb24ge1xuICAgIHNjYWxlOiAxLjU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzMHB4IDMwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgei1pbmRleDogLTEwO1xuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNoZWFkZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjaGVhZGVyIC5zcGFuYXJlYSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjaGVhZGVyIC5zcGFuYXJlYSBzcGFuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciAuaWNvbkFyZWEge1xuICAgIHdpZHRoOiA4JTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjaGVhZGVyIC5pY29uQXJlYSBpb24taWNvbiB7XG4gICAgc2NhbGU6IDEuNTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjZGl2c2hvdyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjZGl2c2hvdyBpb24tY29sOmhhcyhpbnB1dFt0eXBlPXRleHRdKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjZGl2c2hvdyBpb24tY29sOmhhcyhpbnB1dFt0eXBlPXRleHRdKSBpbnB1dCB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzc0Yjc0MztcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpLCAyNXB4IDBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC40NSksIDBweCAyNXB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KSwgLTI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWF4LXdpZHRoOiA5NiU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICN0YWJsZVRpdGxlQW5kQ291bnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNDklO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjdGFibGVUaXRsZUFuZENvdW50IC50aXRsZWFyZWEge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI3RhYmxlVGl0bGVBbmRDb3VudCAudGl0bGVhcmVhIHNwYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICN0YWJsZVRpdGxlQW5kQ291bnQgI3JlcFBlclBhZ2Uge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI2ZpbHRlckJ0bnNBbmRTZWFyY2gge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjZmlsdGVyQnRuc0FuZFNlYXJjaCAuZXhwb3J0QnRucyB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI2ZpbHRlckJ0bnNBbmRTZWFyY2ggLnJlc3VsdHNlYXJjaCB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICNmaWx0ZXJCdG5zQW5kU2VhcmNoIC5yZXN1bHRzZWFyY2ggaW5wdXQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlcjogc29saWQgMnB4ICM3NGI3NDM7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIHRhYmxlI3BhZ2VyIC5zd2l0Y2hoZWFkZXJjbGFzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIHRhYmxlI3BhZ2VyIC5zd2l0Y2hoZWFkZXJjbGFzcyBpb24taWNvbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB0aCB7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQ6ICNlY2VmZjA7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB0ciB7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkgdHIgdGQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBtYXgtd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0Zm9vdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0Zm9vdCBwYWdpbmF0aW9uLWNvbnRyb2xzLm15LXBhZ2luYXRpb24ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtd2ViIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 2923:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/customreportdetail/customreportdetail.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n  <div class=\"custum-reports-web\" style=\"width: 100%; height: 100%\">\n    <ion-header>\n      <ion-toolbar color=\"primary\" hideBackButton click=\"hideMoreOptions()\">\n        <div class=\"navname\">\n          <div class=\"backbuttonarea\" (click)=\"backPage()\">\n            <img src=\"assets/imgs/ic_back.png\" style=\"height: 25px\" />\n          </div>\n\n          <span><p>Report Engine</p></span>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div class=\"sideNav\" id=\"sideNav\">\n        <div class=\"sideNavCloseButton\" (click)=\"openSideNav()\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </div>\n        <div class=\"title\">\n          <span>Select Report</span>\n        </div>\n\n        <div class=\"searchArea\">\n          <ion-searchbar placeholder=\"Search Report\" [(ngModel)]=\"search\"\n          \n          show-clear-button=\"focus\"></ion-searchbar>\n        </div>\n\n        <div class=\"reportListArea\" *ngIf=\"reportDetailsSingle && reportDetailsSingle[0]\">\n\n          <ion-row \n              *ngFor=\"let item of reportDetailsSingle[0]['Module'] \"\n                class=\"singleModule-sidenav\">\n              \n              <ion-accordion-group *ngIf=\"reportDetailsSingle[0]['Report'].length!=0\" value=\"\">\n                    <ion-accordion  value=\"{{item.moduleName}}\" >\n                      <ion-item slot=\"header\">\n                        <ion-label>{{item.moduleName}}</ion-label>\n                      </ion-item>\n                      <div class=\"ion-padding\" slot=\"content\" id=\"reportsPanel\">\n                        <div class=\"singleItem\" \n                        *ngFor=\"let report of reportDetailsSingle[0]['Report'] | filter:search\">\n\n                        <ion-item *ngIf=\"item.moduleId == report.moduleId\" lines=\"none\"\n                              id=\"{{item.moduleName}}_{{report.moduleId}}\"\n                              (click)=\"changeReport(report.reportId,report.reportName)\" \n                          >\n                            <ion-label>{{report.reportName}}</ion-label>\n                            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                          </ion-item>\n\n                        </div>\n                      </div>\n                    </ion-accordion>\n                  \n                    \n              </ion-accordion-group>\n            </ion-row>\n\n\n          \n        </div>\n      </div>\n\n      <div class=\"headnameAndSearch\">\n        <div class=\"sideNavButton\" (click)=\"openSideNav()\">\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n        </div>\n        <div class=\"reportTitleName\">\n          <span>{{reportName}}</span>\n        </div>\n        \n\n        \n        \n      </div>\n      <div class=\"filterContainer\">\n        <ion-grid id=\"fliterContainerGrid\" class=\"filterGrid active\">\n          <ion-row id=\"topLevelFiltersRow\">\n            <ion-col size=\"4\" *ngFor=\"let item of filters;let i = index\" id=\"topLevelFiltersCol\"  [hidden]=item.autoSelect>\n              <!-- Filter Type 1 -->\n              <div *ngIf=\"item.filterType == 'Date'\" class=\"filter\">\n               \n                <label  position=\"stacked\"\n                >{{item.filterName}}</label\n              >\n                <ion-item  class=\"topLevelItem\">\n                 \n                  <div class=\"wrapperForDate\"\n                    \n                  >\n                    <input id=\"{{item.filterName}}\"\n                      matInput\n                      [matDatepicker]=\"picker2\"\n                      disabled [value]=\"defaultDateForDatePicker.value\"\n                    />\n                    <mat-datepicker-toggle\n                      style=\"color: #000\"\n                      matIconPrefix\n                      [disableRipple]=\"true\"\n                      [for]=\"picker2\"\n                    ></mat-datepicker-toggle>\n                    <mat-datepicker disabled=\"false\" #picker2 id=\"{{item.filterName}}-datepick\"></mat-datepicker>\n                  </div>\n                </ion-item>\n\n\n              </div>\n              <!-- Filter Type 2 -->\n              <div *ngIf=\"item.filterType == 'Dropdown'\" class=\"filter\">\n                <label>{{item.filterName}}</label>\n\n                <ion-item class=\"topLevelItem\">\n\n\n                  <ionic-selectable id=\"{{item.filterName}}\"\n                    item-content\n                    [items]=\"item.filterTypeObject[0].dropdown\"\n                    [(ngModel)]=\"userFilterSelect[i]\"\n                    itemValueField=\"value\"\n                    itemTextField=\"name\"\n                    [isMultiple]=\"false\"\n                    [canSearch]=\"true\"\n                    (onChange)=\"singleSelectChange($event,item.filterName,userFilterSelect[i])\"\n                    [canClear]=\"true\"\n                    closeButtonSlot=\"end\"\n                    placeholder=\"Please Select\"\n                    disabled=\"{{item.defaultDisabled}}\"\n                    (onChange)=\"changedFilter($event,item.filterId,i)\"\n\n                  >\n                \n                    \n                  </ionic-selectable>\n\n                  \n                </ion-item>\n\n\n              \n\n              </div>\n              <!-- Filter Type 3 -->\n              <div\n                *ngIf=\"item.filterType == 'multipleSelectDropdown'\"\n                class=\"filter\">\n                <label>{{item.filterName}}</label>\n                \n              \n                <ion-item class=\"topLevelItem\">\n                  <!-- <ion-label position=\"stacked\"></ion-label> -->\n                  <ionic-selectable id=\"{{item.filterName}}\"\n                    item-content\n                    [items]=\"item.filterTypeObject[0].dropdown\"\n                    [(ngModel)]=\"userFilterSelect[i]\"\n                    itemValueField=\"value\"\n                    itemTextField=\"name\"\n                    [isMultiple]=\"true\"\n                    [canSearch]=\"true\"\n                    (onChange)=\"multiSelectChange($event,item.filterName,userFilterSelect[i])\"\n                    [canClear]=\"true\"\n                    closeButtonSlot=\"end\"\n                    placeholder=\"Please Select\"\n\n                  >\n                  <!-- <ng-template ionicSelectableValueTemplate let-i=\"value\">\n                    <div class=\"ionic-selectable-value-item\">\n                      {{userFilterSelect[i]}}\n                    </div>\n                  </ng-template> -->\n                    \n                  </ionic-selectable>\n                </ion-item>\n              \n              \n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row id=\"filterButtonsRow\">\n            <ion-col size=\"6\"></ion-col>\n            <ion-col size=\"6\" id=\"filterButtonCol\">\n              <ion-button (click)=\"getreport(totalFilters)\" fill=\"solid\"  color=\"success\">\n                Search\n              </ion-button>\n              \n            </ion-col>\n          </ion-row>\n          <ion-row id=\"errorMsgRow\">\n            <ion-col size=\"12\"\n              ><p id=\"errormsg\" style=\"display: none; color: red\">{{errormsg}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div class=\"hideGridBtn\">\n          <div class=\"iconArea\" (click)=\"hideGrid()\">\n            <ion-icon name=\"chevron-down-outline\" *ngIf=\"dispGrid==false\"></ion-icon>\n            <ion-icon name=\"chevron-up-outline\" *ngIf=\"dispGrid==true\"></ion-icon>\n          </div>\n        </div>\n      </div>\n      <div class=\"resultsFilter\" *ngIf=\"(filteredTableData && filteredTableData.length >0) || dispTable==true\">\n          <ion-row id=\"header\">\n            <div class=\"spanarea\">\n              <span>Select Parameters</span>\n            </div>\n            <div class=\"iconArea\" (click)=\"toggleShow()\">\n              <ion-icon name=\"arrow-up-outline\" *ngIf=\"isShown==true\"></ion-icon>\n              <ion-icon name=\"arrow-down-outline\" *ngIf=\"isShown==false\"></ion-icon>\n            </div>\n\n          </ion-row>\n          <ion-row *ngIf=\"isShown\" class=\"row container-fluid\" id=\"divshow\">\n            <ion-col>\n              <ion-select\n                placeholder=\"Select Headers\"\n                id=\"tableheadermulti\"\n                text-wrap>\n                <ion-select-option\n                  value=\"{{item.columnName}}\"\n                  style=\"color: #000\"\n                  *ngFor=\"let item of tableHeader |filterByProperty\">\n                  {{item.columnName}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col>\n              <label class=\"item item-input\">\n                <ion-select id=\"headeroperatortable\" placeholder=\"Select Operators\">\n                  <ion-select-option value=\"1\">=</ion-select-option>\n                  <ion-select-option value=\"2\"><</ion-select-option>\n                  <ion-select-option value=\"3\">></ion-select-option>\n                  <ion-select-option value=\"4\">>=</ion-select-option>\n                  <ion-select-option value=\"5\"><=</ion-select-option>\n                </ion-select>\n              </label>\n            </ion-col>\n            <ion-col id=\"srcInput\">\n              \n                <input\n                  \n                  type=\"text\"\n                  value=\"\"\n                  id=\"headervaluetable\"\n                  placeholder=\"Enter Value\" />\n              \n            </ion-col>\n            <ion-col id=\"filterbtnCol\">\n              <ion-button (click)=\"cleartablefilter()\" color=\"dark\"  fill=\"outline\">\n                Reset Filters\n              </ion-button>\n              <ion-button (click)=\"filterexistdataintable()\" color=\"success\" fill=\"solid\" >\n                Filter\n              </ion-button>\n              \n            </ion-col>\n          </ion-row>\n\n      </div>\n        <div class=\"resulAreaWithTable\">\n      <div class=\"results\" \n        *ngIf=\"((filteredTableData && filteredTableData.length >0) || dispTable==true )&& reportId!=176\">\n        <ion-grid id=\"resultsGrid\" fixed>\n          <ion-row id=\"reportTableTop\">\n            <div id=\"tableTitleAndCount\">\n              <div class=\"titlearea\">\n                <span>Results</span>\n              </div>\n              \n              \n                <ion-item id=\"repPerPage\">\n                  <ion-label>Results Per Page</ion-label>\n                  <ion-select\n                    [(ngModel)]=\"reportsPerPage\"\n                  >\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option selected=\"true\" value=\"20\">20</ion-select-option>\n                    <ion-select-option value=\"50\">50</ion-select-option>\n                    <ion-select-option value=\"100\">100</ion-select-option>\n                    <ion-select-option value=\"200\">200</ion-select-option>\n                    <ion-select-option value=\"{{allReportsInOnePage}}\">All Data</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              \n            </div>\n            <div  id=\"filterBtnsAndSearch\">\n\n              <div class=\"resultsearch\">\n                <input\n                  type=\"search\"\n                  id=\"searchinput\"\n                  (input)=\"custumsearch()\"\n                  class=\"nosubmit\"\n                  type=\"search\"\n                  placeholder=\"Search Results...\" />\n              </div>\n              \n              <div class=\"exportBtns\">\n                <ion-button   (click)=\"onExport()\"  color=\"dark\" fill=\"outline\" [disabled]=\"filteredTableData.length==0\" >\n                  PDF Export\n                </ion-button>\n                <ion-button (click)=\"exportAsExcelFile()\" color=\"success\" [disabled]=\"filteredTableData.length==0\">\n                  Excel Export\n                </ion-button>\n                \n              </div>\n\n              \n            \n            </div>\n\n            <div class=\"reportSettings\" title=\"Settings\" id=\"open-modal\">\n              <ion-button (click)=\"presentPopover($event)\" fill=\"clear\" color=\"dark\" style=\"border: none; \">\n                <ion-icon slot=\"icon-only\" name=\"settings-outline\" color=\"dark\"></ion-icon>\n              </ion-button>\n              <ion-popover #popover [isOpen]=\"isOpen\" (didDismiss)=\"isOpen = false\">\n                <ng-template>\n                  <ion-content class=\"ion-padding\">\n\n                    <ion-list>\n                      <ion-item>\n                        <ion-label style=\"cursor: pointer;pointer-events: all;\" (click)=\"openModal()\" >\n                          Select Columns\n                        </ion-label>\n                      </ion-item>\n                    </ion-list>\n\n\n\n                  </ion-content>\n                </ng-template>\n              </ion-popover>\n            </div>\n          </ion-row>\n      \n        </ion-grid>\n\n        <table \n          id=\"pager\"\n          class=\"wp-list-table widefat striped posts formobiletable\">\n          <thead>\n            <tr>\n              <th class=\"headerID\"\n                *ngFor=\"let item of tableHeader\"\n                (click)=\"sortHeader(item.columnName,item.sortBy,booleanValue,$event,item.datatype,'headerID')\">\n                {{item.columnName}}\n                <ion-icon name=\"arrow-down\" *ngIf=\"item.sortBy==true  \"></ion-icon>\n                \n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let data of filteredTableData | paginate: { itemsPerPage: reportsPerPage, currentPage: p }\">\n              <td *ngFor=\"let header of tableHeader \" class=\"dataType-{{header.datatype |splitDataType}}\">\n                {{data[header.columnName]}}\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <pagination-controls\n              (pageChange)=\"p = $event\"\n              \n              class=\"my-pagination\">\n            </pagination-controls>\n          </tfoot>\n        </table>\n\n      \n\n      </div>\n    </div>\n    \n      <!-- for member wise  -->\n      <div class=\"resulAreaWithTable\" *ngIf=\"reportId==176\">\n      <div class=\"results\" *ngFor=\"let table of allTables\"\n        >\n        <ion-grid id=\"resultsGrid\">\n          <ion-row id=\"reportTableTop\">\n            <div id=\"tableTitleAndCount\">\n              <div class=\"titlearea\">\n                <span>Results</span>\n              </div>\n              \n              \n                <!-- <ion-item id=\"repPerPage\">\n                  <ion-label>Results Per Page</ion-label>\n                  <ion-select\n                    [(ngModel)]=\"reportsPerPage\"\n                  >\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option selected=\"true\" value=\"20\">20</ion-select-option>\n                    <ion-select-option value=\"50\">50</ion-select-option>\n                    <ion-select-option value=\"100\">100</ion-select-option>\n                    <ion-select-option value=\"200\">200</ion-select-option>\n                    <ion-select-option value=\"{{allReportsInOnePage}}\">All Data</ion-select-option>\n                  </ion-select>\n                </ion-item> -->\n              \n            </div>\n            <div  id=\"filterBtnsAndSearch\">\n\n              <div class=\"resultsearch\">\n             \n              <ion-searchbar placeholder=\"Search\" \n                  (ionChange)=\"onSearchChangeForMemberWiseTable($event,'dataArea'+table.currentTableNumber)\" [debounce]=\"250\" \n                  show-clear-button=\"focus\" >\n              </ion-searchbar>\n\n              </div>\n              \n              <div class=\"exportBtns\" *ngIf=\"table.Header.length==1\">\n                <ion-button   (click)=\"onExport()\"  color=\"dark\" fill=\"outline\"  >\n                  PDF Export\n                </ion-button>\n                <!-- <ion-button (click)=\"exportToExcel()\" color=\"success\" [disabled]=\"filteredTableData.length==0\">\n                  Excel Export\n                </ion-button> -->\n                \n              </div>\n            \n            </div>\n          </ion-row>\n      \n        </ion-grid>\n\n        <ion-grid *ngIf=\"table.Header.length!=1\"\n          id=\"pagerGrid\"  >\n          <div class=\"headersForSingleTable\">\n            <ion-row *ngFor=\"let rowOfHeaders of table.Header\" >\n              <ion-col  size=\"{{header.columnSize}}\"\n              *ngFor=\"let header of rowOfHeaders\"\n             \n                >\n              \n                {{header.columnName}}\n                <ion-icon name=\"arrow-down\" *ngIf=\"header.sortBy==true  \"></ion-icon>          \n                \n              </ion-col>\n            </ion-row>\n          </div>\n          <div class=\"dataForSingleTable\" id=\"dataArea{{table.currentTableNumber}}\">\n            <ion-row \n            *ngFor=\"let data of table.Data  | paginate: { itemsPerPage: reportsPerPage, currentPage: p } \">\n\n            <ion-col *ngFor=\"let header of table.Header[table.lastHeaderPosition]\">\n              <div class=\"textdata-{{header.datatype |splitDataType}}\" \n              *ngFor=\"let text of data\" title=\"{{text[header.displayname]}}\"\n              >\n              {{text[header.displayname]}}\n              </div>\n            </ion-col>\n            </ion-row>\n            \n          </div>\n          <ion-row id=\"rowForMemberWiseReport\">\n            <ion-col size=\"9\" id=\"amountCol\" >Grand Amount :\n              <span id=\"amountColValue\" >\n                  Rs. {{totalAmountForReportMemberWiseMilkBill}}\n              </span>\n            </ion-col>\n            <ion-col size=\"3\" id=\"remarksCol\">Remarks :\n              <span id=\"remarksColValue\">\n\n              </span>\n            </ion-col>\n          </ion-row>\n          <tfoot>\n            <pagination-controls\n              (pageChange)=\"p = $event\"\n              \n              class=\"my-pagination\">\n            </pagination-controls>\n          </tfoot>\n        </ion-grid>\n\n        <ion-grid *ngIf=\"table.Header.length==1\"\n          id=\"pagerGrid\">\n          <div class=\"headersForSingleTable\">\n            <ion-row *ngFor=\"let rowOfHeaders of table.Header\">\n              <ion-col  size=\"{{header.columnSize}}\"\n              *ngFor=\"let header of rowOfHeaders\"\n              \n                >\n              \n                {{header.columnName}}\n                <ion-icon name=\"arrow-down\" *ngIf=\"header.sortBy==true  \"></ion-icon>          \n                \n              </ion-col>\n            </ion-row>\n          </div>\n          <div class=\"dataForSingleTable\" id=\"dataArea{{table.currentTableNumber}}\">\n            <ion-row\n            *ngFor=\"let data of table.Data  | paginate: { itemsPerPage: reportsPerPage, currentPage: p }\">\n\n            <ion-col *ngFor=\"let header of table.Header[table.lastHeaderPosition]\" \n                        title=\"{{data[header.displayname]}}\"\n                        class=\"dataType-{{header.datatype |splitDataType}}\"\n                           >\n              {{data[header.displayname]}}\n            </ion-col>\n            </ion-row>\n          </div>\n          <tfoot>\n            <pagination-controls\n              (pageChange)=\"p = $event\"\n              \n              class=\"my-pagination\">\n            </pagination-controls>\n          </tfoot>\n        </ion-grid>\n\n\n      \n\n      </div>\n      </div>\n\n\n<!--  Modal For Column Selection   -->\n\n<ion-modal #modal trigger=\"open-modal\">\n  <ng-template>\n    <ion-content>\n      <ion-toolbar>\n        <ion-title>Modal</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button color=\"light\" (click)=\"modal.dismiss()\">Close</ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      \n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<!--  Modal for Column Selection Ends Here  -->\n\n<div id=\"empty\"></div>\n\n\n    </ion-content>\n  </div>\n\n  <div class=\"custum-reports-mobile\" style=\"width: 100%; height: 100%\">\n\n    <ion-header>\n      <ion-toolbar color=\"primary\" hideBackButton click=\"hideMoreOptions()\">\n        <div class=\"navname\">\n          <div class=\"backbuttonarea\" (click)=\"backPage()\">\n            <img src=\"assets/imgs/ic_back.png\" style=\"height: 25px\" />\n          </div>\n\n          <span><p>Report Engine</p></span>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div class=\"sideNav\" id=\"sideNav-mobile\">\n        <div class=\"sideNavCloseButton\" (click)=\"openSideNav()\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </div>\n        <div class=\"title\">\n          <span>Select Report</span>\n        </div>\n\n        <div class=\"searchArea\">\n          <ion-searchbar placeholder=\"Search Report\" showCancelButton=\"focus\" [(ngModel)]=\"search\"\n          \n          show-clear-button=\"focus\"></ion-searchbar>\n        </div>\n\n        <div class=\"reportListArea\" *ngIf=\"reportDetailsSingle && reportDetailsSingle[0]\">\n\n          <ion-row \n              *ngFor=\"let item of reportDetailsSingle[0]['Module'] \"\n                class=\"singleModule-sidenav\">\n              \n              <ion-accordion-group *ngIf=\"reportDetailsSingle[0]['Report'].length!=0\" value=\"\">\n                    <ion-accordion  value=\"{{item.moduleName}}\" >\n                      <ion-item slot=\"header\">\n                        <ion-label>{{item.moduleName}}</ion-label>\n                      </ion-item>\n                      <div class=\"ion-padding\" slot=\"content\" id=\"reportsPanel\">\n                        <div class=\"singleItem\" \n                        *ngFor=\"let report of reportDetailsSingle[0]['Report'] | filter:search\">\n\n                        <ion-item *ngIf=\"item.moduleId == report.moduleId\" lines=\"none\"\n                              id=\"{{item.moduleName}}_{{report.moduleId}}\"\n                              (click)=\"changeReport(report.reportId,report.reportName)\" \n                          >\n                            <ion-label>{{report.reportName}}</ion-label>\n                            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                          </ion-item>\n\n                        </div>\n                      </div>\n                    </ion-accordion>\n                  \n                    \n              </ion-accordion-group>\n            </ion-row>\n\n\n          \n        </div>\n      </div>\n\n      <div class=\"headnameAndSearch\">\n        <div class=\"sideNavButton\" (click)=\"openSideNav()\">\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n        </div>\n\n        <span>{{reportName}}</span>\n\n        \n        \n      </div>\n      <div class=\"filterContainer\">\n        <ion-grid id=\"fliterContainerGrid-mobile\" class=\"filterGrid active\">\n          <ion-row id=\"topLevelFiltersRow\">\n            <ion-col size=\"12\" *ngFor=\"let item of filters;let i = index\" id=\"topLevelFiltersCol\">\n              <!-- Filter Type 1 -->\n              <div *ngIf=\"item.filterType == 'Date'\" class=\"filter\">\n                <label>{{item.filterName}}</label>\n                <ion-item class=\"topLevelItem\">\n                  <input\n                  id=\"{{item.filterName}}-mobile\"\n                  type=\"date\"\n                  format=\"yyyy/MM/dd\"\n                  name=\"{{item.filterName}}\" />\n                </ion-item>\n              </div>\n              <!-- Filter Type 2 -->\n              <div *ngIf=\"item.filterType == 'Dropdown'\" class=\"filter\">\n                <label>{{item.filterName}}</label>\n\n                <ion-item class=\"topLevelItem\">\n\n\n                  <ionic-selectable id=\"{{item.filterName}}-mobile\"\n                    item-content\n                    [items]=\"item.filterTypeObject[0].dropdown\"\n                    [(ngModel)]=\"userFilterSelect[i]\"\n                    itemValueField=\"value\"\n                    itemTextField=\"name\"\n                    [isMultiple]=\"false\"\n                    [canSearch]=\"true\"\n                    (onChange)=\"singleSelectChange($event,item.filterName,userFilterSelect[i])\"\n                    [canClear]=\"true\"\n                    closeButtonSlot=\"end\"\n                    placeholder=\"Please Select\"\n\n                  >\n                \n                    \n                  </ionic-selectable>\n\n                  \n                </ion-item>\n\n\n              \n\n              </div>\n              <!-- Filter Type 3 -->\n              <div\n                *ngIf=\"item.filterType == 'multipleSelectDropdown'\"\n                class=\"filter\">\n                <label>{{item.filterName}}</label>\n                \n              \n                <ion-item class=\"topLevelItem\">\n                  <!-- <ion-label position=\"stacked\"></ion-label> -->\n                  <ionic-selectable id=\"{{item.filterName}}-mobile\"\n                    item-content\n                    [items]=\"item.filterTypeObject[0].dropdown\"\n                    [(ngModel)]=\"userFilterSelect[i]\"\n                    itemValueField=\"value\"\n                    itemTextField=\"name\"\n                    [isMultiple]=\"true\"\n                    [canSearch]=\"true\"\n                    (onChange)=\"multiSelectChange($event,item.filterName,userFilterSelect[i])\"\n                    [canClear]=\"true\"\n                    closeButtonSlot=\"end\"\n                    placeholder=\"Please Select\"\n\n                  >\n                  <!-- <ng-template ionicSelectableValueTemplate let-i=\"value\">\n                    <div class=\"ionic-selectable-value-item\">\n                      {{userFilterSelect[i]}}\n                    </div>\n                  </ng-template> -->\n                    \n                  </ionic-selectable>\n                </ion-item>\n              \n              \n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row id=\"filterButtonsRow\">\n            <ion-col size=\"6\"></ion-col>\n            <ion-col size=\"6\" id=\"filterButtonCol\">\n              <ion-button (click)=\"getreport(totalFilters)\" fill=\"solid\"  color=\"success\">\n                Search\n              </ion-button>\n              \n            </ion-col>\n          </ion-row>\n          <ion-row id=\"errorMsgRow\">\n            <ion-col size=\"12\"\n              ><p id=\"errormsg-mobile\" style=\"display: none; color: red\">{{errormsg}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div class=\"hideGridBtn\">\n          <div class=\"iconArea\" (click)=\"hideGrid()\">\n            <ion-icon name=\"chevron-down-outline\" *ngIf=\"dispGrid==false\"></ion-icon>\n            <ion-icon name=\"chevron-up-outline\" *ngIf=\"dispGrid==true\"></ion-icon>\n          </div>\n        </div>\n      </div>\n      <div class=\"resultsFilter\" *ngIf=\"(filteredTableData && filteredTableData.length >0) || dispTable==true\">\n          <ion-row id=\"header\">\n            <div class=\"spanarea\">\n              <span>Select Parameters</span>\n            </div>\n            <div class=\"iconArea\" (click)=\"toggleShow()\">\n              <ion-icon name=\"arrow-up-outline\" *ngIf=\"isShown==true\"></ion-icon>\n              <ion-icon name=\"arrow-down-outline\" *ngIf=\"isShown==false\"></ion-icon>\n            </div>\n\n          </ion-row>\n          <ion-row *ngIf=\"isShown\" class=\"row container-fluid\" id=\"divshow\">\n            <ion-col>\n              <ion-select\n                placeholder=\"Select Headers\"\n                multiple=\"true\"\n                id=\"tableheadermulti\"\n                text-wrap\n                >\n                <ion-select-option\n                  value=\"{{item.columnName}}\"\n                  style=\"color: #000\"\n                  *ngFor=\"let item of tableHeader\">\n                  {{item.columnName}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col>\n              <label class=\"item item-input\">\n                <ion-select id=\"headeroperatortable\" placeholder=\"Select Operators\">\n                  <ion-select-option value=\"1\">=</ion-select-option>\n                  <ion-select-option value=\"2\"><</ion-select-option>\n                  <ion-select-option value=\"3\">></ion-select-option>\n                  <ion-select-option value=\"4\">>=</ion-select-option>\n                  <ion-select-option value=\"5\"><=</ion-select-option>\n                </ion-select>\n              </label>\n            </ion-col>\n            <ion-col>\n              \n                <input\n                  \n                  type=\"text\"\n                  value=\"\"\n                  id=\"headervaluetable\"\n                  placeholder=\"Enter Value\" />\n              \n            </ion-col>\n            <ion-col id=\"filterbtnCol\">\n              <ion-button (click)=\"cleartablefilter()\" color=\"dark\"  fill=\"outline\">\n                Reset Filters\n              </ion-button>\n              <ion-button (click)=\"filterexistdataintable()\" color=\"success\" fill=\"solid\" >\n                Filter\n              </ion-button>\n              \n            </ion-col>\n          </ion-row>\n\n      </div>\n\n      <div class=\"results\"\n        *ngIf=\"(filteredTableData && filteredTableData.length >0) || dispTable==true\">\n        <ion-grid id=\"resultsGrid\">\n          <ion-row id=\"reportTableTop\">\n            <div id=\"tableTitleAndCount\">\n              <div class=\"titlearea\">\n                <span>Reports</span>\n              </div>\n              \n              \n                <ion-item id=\"repPerPage\">\n                  <ion-label>Reports Per Page</ion-label>\n                  <ion-select\n                    [(ngModel)]=\"reportsPerPage\"\n                  >\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option selected=\"true\" value=\"20\">20</ion-select-option>\n                    <ion-select-option value=\"50\">50</ion-select-option>\n                    <ion-select-option value=\"100\">100</ion-select-option>\n                    <ion-select-option value=\"200\">200</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              \n            </div>\n            <div  id=\"filterBtnsAndSearch\">\n\n              <div class=\"resultsearch\">\n                <input\n                  type=\"search\"\n                  id=\"searchinput\"\n                  (input)=\"custumsearch()\"\n                  class=\"nosubmit\"\n                  type=\"search\"\n                  placeholder=\"Search Results...\" />\n              </div>\n              \n              <div class=\"exportBtns\">\n                <ion-button  color=\"dark\" fill=\"outline\"  >\n                  PDF Export\n                </ion-button>\n                <ion-button  color=\"success\">\n                  Excel Export\n                </ion-button>\n                \n              </div>\n            \n            </div>\n          </ion-row>\n      \n        </ion-grid>\n\n        <table\n          id=\"pager\"\n          class=\"wp-list-table widefat striped posts formobiletable\">\n          <thead>\n            <tr>\n              <th\n                *ngFor=\"let item of tableHeader\"\n                (click)=\"sortHeader(item.columnName,item.sortBy,booleanValue,$event,item.datatype,'headerID')\">\n                {{item.columnName}}\n                <ion-icon name=\"arrow-down\" *ngIf=\"item.sortBy==true  \"></ion-icon>\n\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr id='tableRow-{{i}}'\n              *ngFor=\"let data of filteredTableData  | paginate: { itemsPerPage: reportsPerPage, currentPage: p } | filterBySearch:'tableRow-{{i}}' ;let i = index \">\n              <td *ngFor=\"let item of tableHeader\">{{data[item.columnName]}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <pagination-controls\n              (pageChange)=\"p = $event\"\n              \n              class=\"my-pagination\">\n            </pagination-controls>\n          </tfoot>\n        </table>\n      </div>\n    </ion-content>\n\n  </div>\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customreportdetail_customreportdetail_module_ts.js.map