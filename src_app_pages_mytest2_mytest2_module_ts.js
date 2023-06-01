"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mytest2_mytest2_module_ts"],{

/***/ 66060:
/*!*********************************************************!*\
  !*** ./src/app/pages/mytest2/mytest2-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mytest2PageRoutingModule": () => (/* binding */ Mytest2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mytest2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mytest2.page */ 59776);




const routes = [
    {
        path: '',
        component: _mytest2_page__WEBPACK_IMPORTED_MODULE_0__.Mytest2Page
    }
];
let Mytest2PageRoutingModule = class Mytest2PageRoutingModule {
};
Mytest2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Mytest2PageRoutingModule);



/***/ }),

/***/ 47478:
/*!*************************************************!*\
  !*** ./src/app/pages/mytest2/mytest2.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mytest2PageModule": () => (/* binding */ Mytest2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mytest2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mytest2-routing.module */ 66060);
/* harmony import */ var _mytest2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mytest2.page */ 59776);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 92302);
/* harmony import */ var src_app_pipes_filter_by_property_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/filter-by-property.pipe */ 9872);











let Mytest2PageModule = class Mytest2PageModule {
};
Mytest2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_9__.IonicSelectableModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _mytest2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Mytest2PageRoutingModule,
            src_app_pipes_filter_by_property_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterByPropertyPipe,
        ],
        declarations: [_mytest2_page__WEBPACK_IMPORTED_MODULE_1__.Mytest2Page]
    })
], Mytest2PageModule);



/***/ }),

/***/ 59776:
/*!***********************************************!*\
  !*** ./src/app/pages/mytest2/mytest2.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mytest2Page": () => (/* binding */ Mytest2Page)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mytest2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mytest2.page.html?ngResource */ 79793);
/* harmony import */ var _mytest2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mytest2.page.scss?ngResource */ 46013);
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















let Mytest2Page = class Mytest2Page extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_4__.BaseComp {
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
    this.allTables = [];
    this.totalAmount = 0;
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
    this.filteredTableDataTmp = [];
    this.filters = [];
    this.totalFilters = "";
    this.plotfilters();
    this.dispTable = false;
    this.dispGrid = true;
    this.totalAmount = 0;
  }

  exportAsExcelFile() {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Loader = _this.loadingCtrl.create({
        message: "Exporting Data Please Wait...",
        animated: true
      });

      (yield Loader).present();
      let json = [];

      _this.filteredTableData.forEach(rowData => {
        let singleRow = {};

        _this.tableHeader.forEach(singleHeader => {
          singleRow = { ...singleRow,
            [singleHeader.columnName]: rowData[singleHeader.columnName]
          };
        });

        json.push(singleRow);
      }); //let excelFileName: string="myexcel"


      const fileName = _this.reportName + "_" + _this.datePipe.transform(new Date(), 'yyyy-MM-dd') + ".xlsx";
      const workbook = {
        Sheets: {},
        SheetNames: []
      }; // Add rows with data at the top

      const customData = [];

      if (_this.getFarmName()) {
        let reportHeader = [];
        reportHeader.push(_this.getFarmName());
        customData.push(reportHeader);
      }

      if (_this.getCHCname()) {
        let reportHeader = [];
        reportHeader.push(_this.getCHCname());
        customData.push(reportHeader);
      }

      if (_this.getCCname()) {
        let reportHeader = [];
        reportHeader.push(_this.getCCname());
        customData.push(reportHeader);
      }

      if (_this.reportName) {
        let reportHeader = [];
        reportHeader.push(_this.reportName);
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
      yield _this.saveAsExcelFile(excelBuffer, fileName);
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

  presentPopover(e) {
    this.popover.event = e;
    this.isOpen = true;
  }

  openModal() {
    var _this2 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isOpen = false;
      const modal = yield _this2.modalCtrl.create({
        component: src_app_components_report_column_selector_report_column_selector_component__WEBPACK_IMPORTED_MODULE_8__.ReportColumnSelectorComponent
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

        _this3.tableData.forEach(Data => {
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
            }); //console.log(table.Header[table.lastHeaderPosition].length,"Lenght of last header");

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
                  } // console.log(rowToBeInserted,"rowToBeInserted outside loop1")

                });
              });
              specialReportData.push(rowToBeInsertedForData);
            }); // console.log(specialReportHeader,"specialReportHeader");
            // console.log(specialReportData,"specialReportData");
            // console.log(specialReportDataWidths,"specialReportDataWidths");

            const doctor = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'pt', 'a4');
            const element = document.getElementById('pagerGrid2'); // Replace 'divToExport' with the ID of your <div> element

            const options = {
              callback: function (pdf) {
                const pageSize = pdf.internal.pageSize;
                const pageWidth = pageSize.width;
                const pageHeight = pageSize.height;
                const elementWidth = element.offsetWidth;
                const elementHeight = element.offsetHeight;
                const scaleX = pageWidth / elementWidth;
                const scaleY = pageHeight / elementHeight;
                const scale = Math.min(scaleX, scaleY);
                console.log(element, "element", scaleX, "scaleX", scaleY, "scaleY", scale, "scale", pageWidth, "pageWidth", pageHeight, "pageHeight");
                pdf.scale(scale);
                pdf.save('sample PDF Ab Waali.pdf');
              }
            };
            doctor.html(element, options);
            doc.autoTable({
              head: [specialReportHeader],
              body: specialReportData,
              startY: doc.autoTable.previous.finalY + 30,
              didParseCell: function (data) {
                //const colSpan = specialReportHeader[data.column.index].colspan;
                if (data.section == "head") {// console.log("In Head")
                  // const colWidth = specialReportHeader[data.column.index].width;
                  // data.cell.contentWidth=colWidth
                  // data.cell.styles.cellWidth = colWidth;
                  // data.cell.width=colWidth;
                } else if (data.section == "body") {
                  const colWidthForData = specialReportDataWidths[data.column.index];
                  data.cell.contentWidth = colWidthForData;
                  data.cell.styles.cellWidth = colWidthForData;
                  data.cell.width = colWidthForData;
                } else {} // console.log(data,"from did parsecell func")


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


      const fileName = _this3.reportName + "_" + _this3.datePipe.transform(new Date(), 'yyyy-MM-dd') + ".pdf"; //doc.save(fileName);
      // doc.html(source, {
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

  filter() {
    let accordions = document.getElementsByTagName('ion-accordion-group');
    Array.from(accordions).forEach(x => {
      if (this.search == '' || this.search == null || this.search == undefined) {
        return;
      } else {
        x.value = x.firstChild.value;
      }
    });
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
          //console.log(res,"Filters")
          _this4.filters = res;
          res.forEach(element => {
            _this4.totalFilters = _this4.totalFilters + "," + element.filterName;
          });

          _this4.buildUserFilter();

          yield (yield loading).dismiss(); // const dateControl = document.getElementById('Daily Date') as HTMLInputElement;

          const date = document.querySelectorAll('input[type="date"]');
          let dateArr = Array.from(date);
          dateArr.forEach(x => {
            let temp = x;
            temp.defaultValue = _this4.datePipe.transform(new Date(), "yyyy-MM-dd");
          }); //yyy this.datePipe.transform( new Date().toLocaleDateString());
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  } // alert(this.getReportID());


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
          querystringfilters = querystringfilters + '"' + strArray[i] + '":"' + document.getElementById(strArray[i].toString()).value + '",';
        }

        querystringfilters = querystringfilters + "}"; //Check this for Error

        console.log("Query from if after replace remove:", querystringfilters);
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
              console.log(_this5.allTables, "All Tables");
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
          element[tableheadermulti] == headervaluetable) {
            filteredTableDataNew.push(element);
          }
        }

        if (headeroperatortable == "2") {
          if (element[tableheadermulti] < headervaluetable) {
            filteredTableDataNew.push(element);
          }
        }

        if (headeroperatortable == "3") {
          if (element[tableheadermulti] > headervaluetable) {
            filteredTableDataNew.push(element);
          }
        }

        if (headeroperatortable == "4") {
          if (element[tableheadermulti] >= headervaluetable) {
            filteredTableDataNew.push(element);
          }
        }

        if (headeroperatortable == "5") {
          if (element[tableheadermulti] <= headervaluetable) {
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

};

Mytest2Page.ctorParameters = () => [{
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

Mytest2Page.propDecorators = {
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ['popover']
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ['content', {
      static: false
    }]
  }],
  pdfTable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ['pagerGrid']
  }]
};
Mytest2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-mytest2',
  template: _mytest2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_mytest2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Mytest2Page);


/***/ }),

/***/ 46013:
/*!************************************************************!*\
  !*** ./src/app/pages/mytest2/mytest2.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".custum-reports-web {\n  padding-bottom: 50px;\n}\n.custum-reports-web ion-header ion-toolbar .navname {\n  height: 45px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.custum-reports-web ion-header ion-toolbar .navname span p {\n  color: white;\n  font-size: 1.3em;\n}\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea {\n  width: 20%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n}\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea img {\n  position: absolute;\n  left: 10px;\n}\n.custum-reports-web ion-content .sideNav.active {\n  display: block;\n  width: 400px;\n  height: 100%;\n  max-height: 100% !important;\n  margin-top: 5px;\n  margin-bottom: 50px;\n  overflow-y: auto;\n  z-index: 50;\n  position: absolute;\n  background: white;\n  box-shadow: 15px 0px 50px -10px rgba(0, 0, 0, 0.75);\n  overflow-x: visible;\n}\n.custum-reports-web ion-content .sideNav.active .sideNavCloseButton {\n  z-index: 51;\n  width: 50px;\n  height: 30px;\n  position: absolute;\n  right: 0px;\n  top: 20px;\n  z-index: 1000;\n  margin-left: 0px !important;\n  padding: auto;\n  background: #74b743;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  border-radius: 15px 0px 0px 15px;\n}\n.custum-reports-web ion-content .sideNav.active .sideNavCloseButton ion-icon {\n  color: white;\n  scale: 1.5;\n  margin: 5px;\n  z-index: 52;\n  position: absolute;\n}\n.custum-reports-web ion-content .sideNav.active .title {\n  margin-top: 15px;\n  margin-left: 15px;\n}\n.custum-reports-web ion-content .sideNav.active .title span {\n  font-size: 30px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea {\n  width: 85%;\n  margin: 20px auto;\n  margin-bottom: 50px;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav {\n  width: 95%;\n  margin: 5px;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group {\n  width: 100% !important;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion {\n  scale: 1;\n  transition: 0.4s;\n  border: solid 3px rgb(202, 195, 195);\n  border-radius: 10px;\n  cursor: pointer;\n  pointer-events: all;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item {\n  border: solid 3px rgb(202, 195, 195);\n  border-radius: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transform: scale(1);\n  transition: 0.4s;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item:hover {\n  transform: scale(1.01);\n  transition: 0.4s;\n  border: solid 3px #74b743;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded {\n  border: none;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed:hover {\n  border: solid 3px #74b743;\n  transform: scale(1.01);\n  transition: 0.4s;\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsing ion-item[slot=header],\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanding ion-item[slot=header],\n.custum-reports-web ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-primary-contrast);\n}\n.custum-reports-web ion-content .sideNav {\n  display: none;\n}\n.custum-reports-web ion-content .headnameAndSearch {\n  height: auto;\n  padding: 5px;\n  margin-bottom: 15px;\n}\n.custum-reports-web ion-content .headnameAndSearch .sideNavButton {\n  width: 30px;\n  height: 30px;\n  margin-left: 0px !important;\n  margin-top: 15px;\n  padding: auto;\n  background: #74b743;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  border-radius: 0px 15px 15px 0px;\n}\n.custum-reports-web ion-content .headnameAndSearch .sideNavButton ion-icon {\n  color: white;\n  scale: 1.3;\n  margin: 5px;\n}\n.custum-reports-web ion-content .headnameAndSearch .reportTitleName span {\n  display: flex;\n  max-width: 90%;\n  margin-left: 25px;\n  font-size: 3em;\n  margin-bottom: 20px;\n}\n.custum-reports-web ion-content .headnameAndSearch ion-searchbar {\n  width: 75%;\n  margin-top: 2%;\n  border-radius: 15px;\n  padding: 0px;\n  background: white;\n}\n.custum-reports-web ion-content .headnameAndSearch ion-searchbar .searchbar-input-container {\n  border: none;\n  border-radius: 15px;\n  padding: 0px;\n}\n.custum-reports-web ion-content .headnameAndSearch ion-searchbar .searchbar-input-container input {\n  border: solid 2px grey;\n  border-radius: 15px;\n}\n.custum-reports-web ion-content .filterContainer {\n  width: 102%;\n  max-width: 102%;\n  margin-left: -1%;\n  margin-right: 0px;\n  border-radius: 0px 0px 80px 80px;\n  box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n  margin-top: 0px;\n  padding-top: 5px !important;\n  padding-left: 25px !important;\n  padding-right: 25px !important;\n  padding-bottom: 0px !important;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active {\n  display: block !important;\n  margin-left: 15px;\n  margin-right: 15px;\n  width: 98%;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem {\n  border: solid 3px #74b743;\n  margin-top: 10px;\n  max-height: 45px;\n  height: 45px;\n  max-height: 45px;\n  padding: 0px !important;\n  display: flex;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem input {\n  border: none;\n  margin-top: 0px;\n  height: 40px;\n  max-height: 40px;\n  width: 100% !important;\n  max-width: 100% !important;\n  margin-left: 0px;\n  margin-right: 0px;\n  display: flex;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem ionic-selectable {\n  margin-top: 0px;\n  height: 40px;\n  max-height: 40px;\n  width: 100%;\n  max-width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#errorMsgRow {\n  padding: 5px;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#errorMsgRow ion-col {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid.active ion-row#filterButtonsRow ion-col#filterButtonCol {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.custum-reports-web ion-content .filterContainer ion-grid#fliterContainerGrid.filterGrid {\n  display: none !important;\n}\n.custum-reports-web ion-content .filterContainer .hideGridBtn {\n  width: 50%;\n  margin-left: 25%;\n}\n.custum-reports-web ion-content .filterContainer .hideGridBtn .iconArea {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .filterContainer .hideGridBtn .iconArea ion-icon {\n  scale: 1.5;\n}\n.custum-reports-web ion-content .resultsFilter {\n  border-radius: 0px 0px 30px 30px;\n  width: 80%;\n  margin-left: 10%;\n  height: auto;\n  margin-top: 5px;\n  z-index: -10;\n  box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n  padding: 10px;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header {\n  width: 95%;\n  margin-left: 2.5%;\n  height: 30px;\n  max-height: 30px !important;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header .spanarea {\n  width: 90%;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header .spanarea span {\n  font-size: 20px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header .iconArea {\n  width: 8%;\n  margin-left: 5px;\n  display: flex;\n  flex-direction: row-reverse;\n  margin-top: 5px;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#header .iconArea ion-icon {\n  scale: 1.5;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#divshow {\n  width: 90%;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  max-height: 60px !important;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) input {\n  height: 100%;\n  width: 100%;\n  border: solid 2px #74b743;\n}\n.custum-reports-web ion-content .resultsFilter ion-row#divshow ion-col#filterbtnCol {\n  display: flex;\n  flex-direction: row;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results {\n  border-radius: 5px;\n  border: solid 3px burlywood;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding: 5px;\n  padding-bottom: 25px;\n  width: 95%;\n  margin-left: 2.5%;\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.45), 25px 0px 20px -20px rgba(0, 0, 0, 0.45), 0px 25px 20px -20px rgba(0, 0, 0, 0.45), -25px 0px 20px -20px rgba(0, 0, 0, 0.45);\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid {\n  padding: 0px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-content: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount {\n  height: 100%;\n  max-height: 60px;\n  display: flex;\n  align-items: center;\n  width: 45%;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea {\n  height: 100%;\n  width: 40%;\n  display: flex;\n  align-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea span {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  text-align: left;\n  height: 100%;\n  width: auto;\n  margin-left: 0px;\n  font-size: 25px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount #repPerPage {\n  width: 50%;\n  max-width: 300px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch {\n  height: 100%;\n  max-height: 60px;\n  display: flex;\n  align-items: center;\n  width: 50%;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .exportBtns {\n  width: 49%;\n  display: flex;\n  flex-direction: row;\n  align-content: flex-end;\n  align-items: flex-end;\n  padding-left: 10px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch {\n  width: 45%;\n  height: 100%;\n  max-height: 60px;\n  display: flex;\n  align-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch input {\n  width: 90%;\n  height: 45px;\n  border: solid 2px #74b743;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#resultsGrid ion-row#reportTableTop .reportSettings {\n  margin-right: 0px;\n  display: flex;\n  width: 5%;\n  align-items: center;\n  justify-items: center;\n  align-content: flex-end;\n  justify-content: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager {\n  width: 98%;\n  margin-left: 1%;\n  margin-top: 5px;\n  padding-bottom: 0px;\n  table-layout: fixed;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager .switchheaderclass {\n  background-color: #ad1111;\n  color: #000000;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager .switchheaderclass ion-icon {\n  transform: rotateZ(180deg);\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead {\n  background: #fff;\n  color: #000000;\n  height: 40px;\n  font-size: 15px;\n  margin-bottom: 10px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead tr {\n  border: solid 2px white;\n  padding-left: 2px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead tr th.headerID {\n  border: solid 2px white;\n  padding-left: 5px;\n  background-color: #CDCDCD;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead tr th.headerID.switchheaderclass {\n  border: solid 2px white;\n  padding-left: 5px;\n  background-color: #AAAAAA;\n  color: #000000;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager thead tr th.headerID.switchheaderclass ion-icon {\n  transform: rotateZ(180deg);\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody {\n  margin-top: 5px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody tr:nth-child(odd) {\n  background: #eceff0;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody tr {\n  border: solid 2px white;\n  height: 30px;\n  margin: 5px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tbody tr td {\n  font-size: 18px;\n  padding-left: 8px;\n  max-width: 20% !important;\n  overflow: hidden;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tfoot {\n  margin-bottom: 5px;\n  height: 45px;\n  margin-top: 20px;\n  margin-left: 0px;\n  justify-content: start;\n  align-content: center;\n  align-items: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results table#pager tfoot pagination-controls.my-pagination {\n  margin: auto;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  height: 45px;\n  width: 500px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 {\n  width: 98%;\n  margin-left: 1%;\n  margin-top: 5px;\n  padding-bottom: 0px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 .headersForSingleTable, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 .headersForSingleTable {\n  background: #fff;\n  color: #000000;\n  font-size: 15px;\n  margin-bottom: 10px;\n  height: 20px;\n  max-height: 20px !important;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 .headersForSingleTable ion-row, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 .headersForSingleTable ion-row {\n  padding-left: 2px;\n  height: 100%;\n  max-height: 50px !important;\n  border: solid 2px white;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 .headersForSingleTable ion-row ion-col, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 .headersForSingleTable ion-row ion-col {\n  background-color: #CDCDCD;\n  word-wrap: break-word;\n  border: solid 2px white;\n  text-align: center;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 .dataForSingleTable, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 .dataForSingleTable {\n  margin-top: 60px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 .dataForSingleTable ion-row:nth-child(odd), .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 .dataForSingleTable ion-row:nth-child(odd) {\n  background: #eceff0;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 .dataForSingleTable ion-row, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 .dataForSingleTable ion-row {\n  border: solid 2px white;\n  margin: 5px;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 .dataForSingleTable ion-row ion-col, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 .dataForSingleTable ion-row ion-col {\n  font-size: 18px;\n  padding-left: 8px;\n  max-width: 20% !important;\n  overflow: auto;\n  text-overflow: initial;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 #rowForMemberWiseReport, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 #rowForMemberWiseReport {\n  font-weight: bold;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #eceff0;\n  border: solid 2px white;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 #rowForMemberWiseReport #amountCol, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 #rowForMemberWiseReport #amountCol {\n  display: flex;\n  border: solid 2px white;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 #rowForMemberWiseReport #amountCol #amountColValue, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 #rowForMemberWiseReport #amountCol #amountColValue {\n  position: absolute;\n  right: 0px;\n  height: 35px;\n  top: 5px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 #rowForMemberWiseReport #remarksCol, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 #rowForMemberWiseReport #remarksCol {\n  display: flex;\n  border: solid 2px white;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 #rowForMemberWiseReport #remarksCol #remarksColValue, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 #rowForMemberWiseReport #remarksCol #remarksColValue {\n  position: absolute;\n  right: 0px;\n  height: 35px;\n  top: 5px;\n  font-weight: bold;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 tfoot, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 tfoot {\n  margin-bottom: 5px;\n  height: 45px;\n  margin-top: 20px;\n  margin-left: 0px;\n  justify-content: start;\n  align-content: center;\n  align-items: center;\n  justify-items: center;\n}\n.custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid1 tfoot pagination-controls.my-pagination, .custum-reports-web ion-content .resulAreaWithTable .results ion-grid#pagerGrid2 tfoot pagination-controls.my-pagination {\n  margin: auto;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  height: 45px;\n  width: 500px;\n}\n.custum-reports-mobile {\n  display: none !important;\n}\n@media only screen and (max-width: 480px) {\n  .custum-reports-mobile {\n    display: block !important;\n    padding-bottom: 50px;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname {\n    height: 45px;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname span p {\n    color: white;\n    font-size: 1.3em;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea {\n    width: 20%;\n    height: 100%;\n    position: absolute;\n    left: 0px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea img {\n    position: absolute;\n    left: 10px;\n  }\n  .custum-reports-mobile ion-content {\n    margin-bottom: 75px;\n    padding-bottom: 50px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active {\n    display: block;\n    width: 400px;\n    height: 100%;\n    max-height: 100% !important;\n    margin-top: 5px;\n    margin-bottom: 50px;\n    overflow-y: auto;\n    z-index: 50;\n    position: absolute;\n    background: white;\n    box-shadow: 15px 0px 50px -10px rgba(0, 0, 0, 0.75);\n    overflow-x: visible;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .sideNavCloseButton {\n    z-index: 51;\n    width: 50px;\n    height: 30px;\n    position: absolute;\n    right: 0px;\n    top: 20px;\n    z-index: 1000;\n    margin-left: 0px !important;\n    padding: auto;\n    background: #74b743;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n    border-radius: 15px 0px 0px 15px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .sideNavCloseButton ion-icon {\n    color: white;\n    scale: 1.5;\n    margin: 5px;\n    z-index: 52;\n    position: absolute;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .title {\n    margin-top: 15px;\n    margin-left: 15px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .title span {\n    font-size: 30px;\n    font-weight: bold;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea {\n    width: 85%;\n    margin: 20px auto;\n    margin-bottom: 50px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav {\n    width: 95%;\n    margin: 5px;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group {\n    width: 100% !important;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion {\n    scale: 1;\n    transition: 0.4s;\n    border: solid 3px rgb(202, 195, 195);\n    border-radius: 10px;\n    cursor: pointer;\n    pointer-events: all;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item {\n    border: solid 3px rgb(202, 195, 195);\n    border-radius: 10px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    transform: scale(1);\n    transition: 0.4s;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion #reportsPanel .singleItem ion-item:hover {\n    transform: scale(1.01);\n    transition: 0.4s;\n    border: solid 3px #74b743;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded {\n    border: none;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed:hover {\n    border: solid 3px #74b743;\n    transform: scale(1.01);\n    transition: 0.4s;\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsing ion-item[slot=header],\n.custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-collapsed ion-item[slot=header] {\n    --background: var(--ion-color-light);\n    --color: var(--ion-color-light-contrast);\n  }\n  .custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanding ion-item[slot=header],\n.custum-reports-mobile ion-content .sideNav.active .reportListArea ion-row.singleModule-sidenav ion-accordion-group ion-accordion.accordion-expanded ion-item[slot=header] {\n    --background: var(--ion-color-primary);\n    --color: var(--ion-color-primary-contrast);\n  }\n  .custum-reports-mobile ion-content .sideNav {\n    display: none;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch {\n    height: 60px;\n    margin-bottom: 15px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch .sideNavButton {\n    width: 30px;\n    height: 30px;\n    margin-left: 0px !important;\n    margin-top: 15px;\n    padding: auto;\n    background: #74b743;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n    border-radius: 0px 15px 15px 0px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch .sideNavButton ion-icon {\n    color: white;\n    scale: 1.3;\n    margin: 5px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch span {\n    border: solid 2x orange;\n    width: 100%;\n    height: auto;\n    margin-left: 30px;\n    font-size: 1.5em;\n    margin-bottom: 20px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar {\n    width: 75%;\n    margin-top: 2%;\n    border-radius: 15px;\n    padding: 0px;\n    background: white;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar .searchbar-input-container {\n    border: none;\n    border-radius: 15px;\n    padding: 0px;\n  }\n  .custum-reports-mobile ion-content .headnameAndSearch ion-searchbar .searchbar-input-container input {\n    border: solid 2px grey;\n    border-radius: 15px;\n  }\n  .custum-reports-mobile ion-content .filterContainer {\n    width: 102%;\n    max-width: 102%;\n    margin-left: -1%;\n    margin-right: 0px;\n    border-radius: 0px 0px 80px 80px;\n    box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n    margin-top: 0px;\n    padding-top: 5px !important;\n    padding-left: 25px !important;\n    padding-right: 25px !important;\n    padding-bottom: 0px !important;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active {\n    display: block !important;\n    margin-left: 15px;\n    margin-right: 15px;\n    width: 98%;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem {\n    border: solid 3px #74b743;\n    margin-top: 10px;\n    max-height: 45px;\n    height: 45px;\n    max-height: 45px;\n    padding: 0px !important;\n    display: flex;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem input {\n    border: none;\n    margin-top: 0px;\n    height: 40px;\n    max-height: 40px;\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-left: 0px;\n    margin-right: 0px;\n    display: flex;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#topLevelFiltersRow ion-col#topLevelFiltersCol .filter ion-item.topLevelItem ionic-selectable {\n    margin-top: 0px;\n    height: 40px;\n    max-height: 40px;\n    width: 100%;\n    max-width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#errorMsgRow {\n    padding: 5px;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#errorMsgRow ion-col {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid.active ion-row#filterButtonsRow ion-col#filterButtonCol {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .custum-reports-mobile ion-content .filterContainer ion-grid#fliterContainerGrid-mobile.filterGrid {\n    display: none !important;\n  }\n  .custum-reports-mobile ion-content .filterContainer .hideGridBtn {\n    width: 50%;\n    margin-left: 25%;\n  }\n  .custum-reports-mobile ion-content .filterContainer .hideGridBtn .iconArea {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .filterContainer .hideGridBtn .iconArea ion-icon {\n    scale: 1.5;\n  }\n  .custum-reports-mobile ion-content .resultsFilter {\n    border-radius: 0px 0px 30px 30px;\n    width: 80%;\n    margin-left: 10%;\n    height: auto;\n    margin-top: 5px;\n    z-index: -10;\n    box-shadow: 0px 15px 10px -10px rgba(0, 0, 0, 0.75);\n    padding: 10px;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header {\n    width: 95%;\n    margin-left: 2.5%;\n    height: 30px;\n    max-height: 30px !important;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .spanarea {\n    width: 90%;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .spanarea span {\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .iconArea {\n    width: 8%;\n    margin-left: 5px;\n    display: flex;\n    flex-direction: row-reverse;\n    margin-top: 5px;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#header .iconArea ion-icon {\n    scale: 1.5;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#divshow {\n    width: 90%;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .resultsFilter ion-row#divshow ion-col:has(input[type=text]) input {\n    height: 80%;\n    width: 100%;\n    border: solid 2px #74b743;\n  }\n  .custum-reports-mobile ion-content .results {\n    border-radius: 5px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    padding: 5px;\n    padding-bottom: 25px;\n    width: 95%;\n    margin-left: 2.5%;\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.45), 25px 0px 20px -20px rgba(0, 0, 0, 0.45), 0px 25px 20px -20px rgba(0, 0, 0, 0.45), -25px 0px 20px -20px rgba(0, 0, 0, 0.45);\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid {\n    padding: 0px;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop {\n    width: 96%;\n    height: 60px;\n    margin-left: 2%;\n    max-width: 96%;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount {\n    height: 100%;\n    max-height: 60px;\n    display: flex;\n    align-items: center;\n    width: 49%;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea {\n    height: 100%;\n    width: 40%;\n    display: flex;\n    align-items: center;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount .titlearea span {\n    display: flex;\n    align-items: center;\n    align-content: center;\n    text-align: left;\n    height: 100%;\n    width: auto;\n    margin-left: 0px;\n    font-size: 25px;\n    font-weight: bold;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #tableTitleAndCount #repPerPage {\n    width: 60%;\n    max-width: 300px;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch {\n    height: 100%;\n    max-height: 60px;\n    display: flex;\n    align-items: center;\n    width: 50%;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .exportBtns {\n    width: 49%;\n    display: flex;\n    flex-direction: row;\n    align-content: flex-end;\n    align-items: flex-end;\n    padding-left: 10px;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch {\n    width: 49%;\n    height: 100%;\n    max-height: 60px;\n    display: flex;\n    align-items: center;\n  }\n  .custum-reports-mobile ion-content .results ion-grid#resultsGrid ion-row#reportTableTop #filterBtnsAndSearch .resultsearch input {\n    width: 90%;\n    height: 45px;\n    border: solid 2px #74b743;\n  }\n  .custum-reports-mobile ion-content .results table#pager {\n    width: 98%;\n    margin-left: 1%;\n    margin-top: 5px;\n    padding-bottom: 0px;\n    table-layout: fixed;\n  }\n  .custum-reports-mobile ion-content .results table#pager .switchheaderclass {\n    background-color: #d1d1d1;\n    color: #000000;\n  }\n  .custum-reports-mobile ion-content .results table#pager .switchheaderclass ion-icon {\n    transform: rotateZ(180deg);\n  }\n  .custum-reports-mobile ion-content .results table#pager thead {\n    background: #fff;\n    color: #000000;\n    height: 40px;\n    font-size: 15px;\n    margin-bottom: 10px;\n  }\n  .custum-reports-mobile ion-content .results table#pager thead tr {\n    border: solid 2px white;\n    padding-left: 2px;\n  }\n  .custum-reports-mobile ion-content .results table#pager thead tr th {\n    border: solid 2px white;\n    padding-left: 5px;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody {\n    margin-top: 5px;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody tr:nth-child(odd) {\n    background: #eceff0;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody tr {\n    border: solid 2px white;\n    height: 30px;\n    margin: 5px;\n  }\n  .custum-reports-mobile ion-content .results table#pager tbody tr td {\n    font-size: 18px;\n    padding-left: 8px;\n    max-width: 20% !important;\n    overflow: hidden;\n  }\n  .custum-reports-mobile ion-content .results table#pager tfoot {\n    margin-bottom: 5px;\n    height: 45px;\n    margin-top: 20px;\n    margin-left: 0px;\n    justify-content: start;\n    align-content: center;\n    align-items: center;\n    justify-items: center;\n  }\n  .custum-reports-mobile ion-content .results table#pager tfoot pagination-controls.my-pagination {\n    margin: auto;\n    padding-top: 20px;\n    display: flex;\n    flex-direction: row;\n    height: 45px;\n    width: 500px;\n  }\n  .custum-reports-web {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15dGVzdDIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcT3JpZ2h0JTIwQXBwJTIwSW9uaWMlMjA2JTIwQnVpbGQlMjAzMCUyME1hcmNoXFxPcmlnaHRfdjRfTWluaUJ1aWxkXFxzcmNcXGFwcFxccGFnZXNcXG15dGVzdDJcXG15dGVzdDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7QUNBSjtBREtZO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNKaEI7QURPa0I7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNMcEI7QURTZ0I7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDUGxCO0FEUWtCO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDTnBCO0FEa0JRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtBQ2pCWjtBRGtCWTtFQUNFLFdBQUE7RUFVQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQ3pCZDtBREVjO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0FDRGhCO0FEb0JZO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ2xCZDtBRG1CYztFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2pCaEI7QURvQlk7RUFFRSxVQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtBQ3BCZDtBRHNCZ0I7RUFFSSxVQUFBO0VBQ0EsV0FBQTtBQ3JCcEI7QURzQm9CO0VBR0ksc0JBQUE7QUN0QnhCO0FEeUJ3QjtFQUNJLFFBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUN2QjVCO0FENEJ3QztFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDMUI1QztBRDRCd0M7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUMxQjVDO0FEZ0N3QjtFQUNJLFlBQUE7QUM5QjVCO0FEa0N3QjtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ2hDNUI7QURtQ3dCOztFQUVBLG9DQUFBO0VBQ0Esd0NBQUE7QUNqQ3hCO0FEb0N3Qjs7RUFFQSxzQ0FBQTtFQUNBLDBDQUFBO0FDbEN4QjtBRDhDVTtFQUNFLGFBQUE7QUM1Q1o7QUQ4Q1U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDNUNaO0FEOENZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUM1Q2hCO0FENkNnQjtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzNDbEI7QURpRGdCO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQy9DbEI7QURvRFk7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0FDbkRkO0FEcURjO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ25EaEI7QURvRGdCO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQ2xEbEI7QUR1RFU7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQ0FBQTtFQUNBLG1EQUFBO0VBRUEsZUFBQTtFQUdBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDMURaO0FENERZO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQzFEZDtBRCtEc0I7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUM3RHhCO0FEK0R3QjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDN0Q1QjtBRGdFd0I7RUFFSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDL0Q1QjtBRHdFYztFQUNFLFlBQUE7QUN0RWhCO0FEdUVnQjtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNyRWxCO0FEMkVnQjtFQUVJLGFBQUE7RUFDQSwyQkFBQTtBQzFFcEI7QUQ4RVk7RUFDRSx3QkFBQTtBQzVFZDtBRDhFWTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQzVFZDtBRDZFYztFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUMzRWhCO0FENEVnQjtFQUNFLFVBQUE7QUMxRWxCO0FEK0VVO0VBRUUsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtFQUNBLGFBQUE7QUM5RVo7QUQrRVk7RUFFRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUM5RWQ7QUQrRWdCO0VBRUUsVUFBQTtBQzlFbEI7QUQrRW9CO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDN0V0QjtBRGdGZ0I7RUFFRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDL0VsQjtBRGdGa0I7RUFDRSxVQUFBO0FDOUVwQjtBRGtGWTtFQUNJLFVBQUE7QUNoRmhCO0FEb0ZnQjtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNuRnBCO0FEb0ZvQjtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNuRnhCO0FEd0ZnQjtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ3RGbEI7QURrR1U7RUFFRSxrQkFBQTtFQUNBLDJCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJLQUFBO0FDbEdaO0FEdUdZO0VBQ0UsWUFBQTtBQ3JHZDtBRHNHWTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNyR2hCO0FEdUdnQjtFQUdJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUN2R3BCO0FEeUdnQjtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDeEdwQjtBRHlHb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3hHeEI7QUQ2R3dCO0VBRUMsVUFBQTtFQUNBLGdCQUFBO0FDNUd6QjtBRGdIZ0I7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDL0dwQjtBRGlIb0I7RUFHSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDakh4QjtBRDJIb0I7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNELG1CQUFBO0FDekh2QjtBRDRId0I7RUFFSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDM0g1QjtBRGlJZ0I7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUMvSG5CO0FEd0ljO0VBQ0osVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3RJVjtBRDBJVTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ3hJWjtBRHlJWTtFQUVFLDBCQUFBO0FDeElkO0FENElVO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzFJWjtBRDZJWTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUMzSWQ7QUQ0SWM7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUMxSWhCO0FEOEljO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQzVJaEI7QUQ2SWdCO0VBRUUsMEJBQUE7QUM1SWxCO0FEa0pVO0VBRUUsZUFBQTtBQ2pKWjtBRG1KWTtFQUNFLG1CQUFBO0FDakpkO0FEbUpZO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2pKZDtBRG1KYztFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7QUNsSmhCO0FEdUpVO0VBRUUsa0JBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDMUpaO0FEMkpZO0VBRUUsWUFBQTtFQUNBLGlCQUFBO0VBR0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUM1SmQ7QURrS1E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2hLVjtBRHFLVTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ25LWjtBRHNLWTtFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUNyS2Q7QURzS2M7RUFFRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDcktoQjtBRDJLVTtFQUVFLGdCQUFBO0FDMUtaO0FENEtZO0VBQ0UsbUJBQUE7QUMxS2Q7QUQ0S1k7RUFDRSx1QkFBQTtFQUVBLFdBQUE7QUMzS2Q7QUQ2S2M7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7RUFDQSxzQkFBQTtBQzVLaEI7QURtTFU7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNDLG1CQUFBO0VBQ0EsdUJBQUE7QUNsTGI7QURtTGdCO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDakxsQjtBRGtMa0I7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FDaExsQjtBRG9MZ0I7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNsTGxCO0FEbUxrQjtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUNqTHBCO0FEc0xVO0VBRUUsa0JBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDekxaO0FEMExZO0VBRUUsWUFBQTtFQUNBLGlCQUFBO0VBR0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUMzTGQ7QUQ0TUM7RUFDSyx3QkFBQTtBQ3pNTjtBRDZNSTtFQUNFO0lBQ0UseUJBQUE7SUFFQSxvQkFBQTtFQzNNTjtFRGdOYztJQUVJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VDL01sQjtFRGtOb0I7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUNoTnRCO0VEb05rQjtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7RUNsTnBCO0VEbU5vQjtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtFQ2pOdEI7RUR5Tk07SUFFUSxtQkFBQTtJQUNBLG9CQUFBO0VDeE5kO0VEME5VO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUVBLGlCQUFBO0lBQ0EsbURBQUE7SUFDQSxtQkFBQTtFQ3pOZDtFRDBOYztJQUNFLFdBQUE7SUFVQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQ0FBQTtFQ2pPaEI7RUQwTWdCO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBRUEsV0FBQTtJQUNBLGtCQUFBO0VDek1sQjtFRDROYztJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUMxTmhCO0VEMk5nQjtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ3pObEI7RUQ0TmM7SUFFRSxVQUFBO0lBQ0EsaUJBQUE7SUFFQSxtQkFBQTtFQzVOaEI7RUQ4TmtCO0lBRUksVUFBQTtJQUNBLFdBQUE7RUM3TnRCO0VEOE5zQjtJQUdJLHNCQUFBO0VDOU4xQjtFRGlPMEI7SUFDSSxRQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDL045QjtFRG9PMEM7SUFDSSxvQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ2xPOUM7RURvTzBDO0lBQ0ksc0JBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VDbE85QztFRHdPMEI7SUFDSSxZQUFBO0VDdE85QjtFRDBPMEI7SUFDSSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUN4TzlCO0VEMk8wQjs7SUFFQSxvQ0FBQTtJQUNBLHdDQUFBO0VDek8xQjtFRDRPMEI7O0lBRUEsc0NBQUE7SUFDQSwwQ0FBQTtFQzFPMUI7RURzUFk7SUFDRSxhQUFBO0VDcFBkO0VEc1BZO0lBQ0UsWUFBQTtJQUVBLG1CQUFBO0VDclBkO0VEdVBjO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0NBQUE7RUNyUGxCO0VEc1BrQjtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQ3BQcEI7RUR3UGM7SUFDRSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDdFBoQjtFRHlQYztJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBRUEsaUJBQUE7RUN4UGhCO0VEMFBnQjtJQUNFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUN4UGxCO0VEeVBrQjtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUN2UHBCO0VENFBZO0lBQ0UsV0FBQTtJQUVBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBRUEsZ0NBQUE7SUFDQSxtREFBQTtJQUVBLGVBQUE7SUFHQSwyQkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7SUFDQSw4QkFBQTtFQy9QZDtFRGlRYztJQUNFLHlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUMvUGhCO0VEb1F3QjtJQUNFLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0lBQ0EsYUFBQTtFQ2xRMUI7RURvUTBCO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUNsUTlCO0VEcVEwQjtJQUVJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUNwUTlCO0VENlFnQjtJQUNFLFlBQUE7RUMzUWxCO0VENFFrQjtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7RUMxUXBCO0VEZ1JrQjtJQUVJLGFBQUE7SUFDQSwyQkFBQTtFQy9RdEI7RURtUmM7SUFDRSx3QkFBQTtFQ2pSaEI7RURtUmM7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUNqUmhCO0VEa1JnQjtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7RUNoUmxCO0VEaVJrQjtJQUNFLFVBQUE7RUMvUXBCO0VEb1JZO0lBRUUsZ0NBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxtREFBQTtJQUNBLGFBQUE7RUNuUmQ7RURvUmM7SUFFRSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7RUNuUmhCO0VEb1JrQjtJQUVFLFVBQUE7RUNuUnBCO0VEb1JzQjtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ2xSeEI7RURxUmtCO0lBRUUsU0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtFQ3BScEI7RURxUm9CO0lBQ0UsVUFBQTtFQ25SdEI7RUR1UmM7SUFDSSxVQUFBO0VDclJsQjtFRHVSa0I7SUFFSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFQ3RSdEI7RUR1UnNCO0lBRUksV0FBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtFQ3RSMUI7RURtU1k7SUFFRSxrQkFBQTtJQUVBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSwyS0FBQTtFQ25TZDtFRHdTYztJQUNFLFlBQUE7RUN0U2hCO0VEdVNnQjtJQUVFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUN0U2xCO0VEeVNrQjtJQUdJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUN6U3RCO0VEMlNrQjtJQUVJLFlBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VDMVN0QjtFRDJTc0I7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUVBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQzFTMUI7RUQrUzBCO0lBRUMsVUFBQTtJQUNBLGdCQUFBO0VDOVMzQjtFRGtUa0I7SUFFSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VDalR0QjtFRG9Uc0I7SUFHSSxVQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0VDcFQxQjtFRDJUc0I7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNELG1CQUFBO0VDelR6QjtFRDRUMEI7SUFFSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0VDM1Q5QjtFRHNVZ0I7SUFDSixVQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VDcFVaO0VEd1VZO0lBQ0UseUJBQUE7SUFDQSxjQUFBO0VDdFVkO0VEdVVjO0lBRUUsMEJBQUE7RUN0VWhCO0VEMFVZO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQ3hVZDtFRDJVYztJQUNFLHVCQUFBO0lBQ0EsaUJBQUE7RUN6VWhCO0VEMFVnQjtJQUNFLHVCQUFBO0lBQ0EsaUJBQUE7RUN4VWxCO0VEOFVZO0lBRUUsZUFBQTtFQzdVZDtFRCtVYztJQUNFLG1CQUFBO0VDN1VoQjtFRCtVYztJQUNFLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUM3VWhCO0VEK1VnQjtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBRUEsZ0JBQUE7RUM5VWxCO0VEbVZZO0lBRUUsa0JBQUE7SUFFQSxZQUFBO0lBRUEsZ0JBQUE7SUFDQSxnQkFBQTtJQUdBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VDdFZkO0VEdVZjO0lBRUUsWUFBQTtJQUNBLGlCQUFBO0lBR0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUN4VmhCO0VEcVdJO0lBQ0Usd0JBQUE7RUNuV047QUFDRiIsImZpbGUiOiJteXRlc3QyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0dW0tcmVwb3J0cy13ZWJcclxue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBpb24taGVhZGVye1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLm5hdm5hbWUge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmJhY2tidXR0b25hcmVhIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIC5zaWRlTmF2LmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxNXB4IDBweCA1MHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbiAgICAgICAgICAgIC5zaWRlTmF2Q2xvc2VCdXR0b24ge1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDUxO1xyXG4gICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAxLjU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICBcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDUyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzc0Yjc0MztcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlcG9ydExpc3RBcmVhIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLWdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3JlcG9ydHNQYW5lbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaW5nbGVJdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDIwMiwgMTk1LCAxOTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZDpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2luZyBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzZWQgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNpZGVOYXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRuYW1lQW5kU2VhcmNoIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAuc2lkZU5hdkJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICBzY2FsZTogMS4zO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAucmVwb3J0VGl0bGVOYW1le1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBncmV5O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZpbHRlckNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDIlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDIlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTElO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4MHB4IDgwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgICAgICAgICBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLmZpbHRlckdyaWQuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gIFxyXG4gICAgICAgICAgICAgIGlvbi1yb3cjdG9wTGV2ZWxGaWx0ZXJzUm93e1xyXG4gICAgICAgICAgICAgICAgICBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbHtcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW0udG9wTGV2ZWxJdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb25pYy1zZWxlY3RhYmxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW9uLXJvdyNlcnJvck1zZ1JvdyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tcm93I2ZpbHRlckJ1dHRvbnNSb3cge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWNvbCNmaWx0ZXJCdXR0b25Db2wge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLmZpbHRlckdyaWQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGlkZUdyaWRCdG4ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgICAuaWNvbkFyZWEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICBzY2FsZTogMS41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlc3VsdHNGaWx0ZXJ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgaW9uLXJvdyNoZWFkZXJ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLnNwYW5hcmVhe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmljb25BcmVhe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1yb3cjZGl2c2hvdyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpb24tY29sOmhhcyhpbnB1dFt0eXBlPSd0ZXh0J10pe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWNvbCNmaWx0ZXJidG5Db2x7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgIFxyXG4gIFxyXG4gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlc3VsQXJlYVdpdGhUYWJsZXtcclxuICAgICAgICAgIC5yZXN1bHRzIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IGJ1cmx5d29vZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAyNXB4IDIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0yNXB4IDBweCAyMHB4IC0yMHB4IHJnYmEoMCwwLDAsMC40NSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLWdyaWQjcmVzdWx0c0dyaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgI3RhYmxlVGl0bGVBbmRDb3VudHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlYXJlYXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmVwUGVyUGFnZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2ZpbHRlckJ0bnNBbmRTZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5leHBvcnRCdG5ze1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXBvcnRTZXR0aW5nc3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICB0YWJsZSNwYWdlciB7XHJcbiAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgLnN3aXRjaGhlYWRlcmNsYXNzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkMTExMTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgICB0aC5oZWFkZXJJRCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NEQ0RDRDtcclxuICAgICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoLmhlYWRlcklELnN3aXRjaGhlYWRlcmNsYXNzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBQUFBO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZWZmMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gIFxyXG4gICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGZvb3Qge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbi1jb250cm9scy5teS1wYWdpbmF0aW9ue1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tZ3JpZCNwYWdlckdyaWQxICwgaW9uLWdyaWQjcGFnZXJHcmlkMiB7XHJcbiAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICBcclxuICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgLmhlYWRlcnNGb3JTaW5nbGVUYWJsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHggIWltcG9ydGFudCA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRENEQ0Q7XHJcbiAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGF0YUZvclNpbmdsZVRhYmxlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24tcm93Om50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlZmYwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgLy9oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgXHJcbiAgICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC8vd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjcm93Rm9yTWVtYmVyV2lzZVJlcG9ydHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZWZmMDtcclxuICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgI2Ftb3VudENvbHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICNhbW91bnRDb2xWYWx1ZXtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI3JlbWFya3NDb2x7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAjcmVtYXJrc0NvbFZhbHVle1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRmb290IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb24tY29udHJvbHMubXktcGFnaW5hdGlvbntcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG5cclxuICAgIH1cclxuIFxyXG5cclxuXHJcbn1cclxuXHJcbiAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICBpb24taGVhZGVye1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZuYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmJhY2tidXR0b25hcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaW9uLWNvbnRlbnQge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjc1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAuc2lkZU5hdi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTVweCAwcHggNTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIC5zaWRlTmF2Q2xvc2VCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MTtcclxuICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NGI3NDM7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmVwb3J0TGlzdEFyZWEge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi1ncm91cHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDIwMiwgMTk1LCAxOTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3JlcG9ydHNQYW5lbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpbmdsZUl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigyMDIsIDE5NSwgMTk1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzZWQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNpbmcgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZCBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zaWRlTmF2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5oZWFkbmFtZUFuZFNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5zaWRlTmF2QnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJ4IG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpbHRlckNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAyJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggODBweCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLW1vYmlsZS5maWx0ZXJHcmlkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBpb24tcm93I3RvcExldmVsRmlsdGVyc1Jvd3tcclxuICAgICAgICAgICAgICAgICAgICAgIGlvbi1jb2wjdG9wTGV2ZWxGaWx0ZXJzQ29se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pdGVtLnRvcExldmVsSXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uaWMtc2VsZWN0YWJsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaW9uLXJvdyNlcnJvck1zZ1JvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1yb3cjZmlsdGVyQnV0dG9uc1JvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpb24tY29sI2ZpbHRlckJ1dHRvbkNvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLW1vYmlsZS5maWx0ZXJHcmlkIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhpZGVHcmlkQnRuIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgLmljb25BcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucmVzdWx0c0ZpbHRlcntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLXJvdyNoZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNwYW5hcmVhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbkFyZWF7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLXJvdyNkaXZzaG93IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNvbDpoYXMoaW5wdXRbdHlwZT0ndGV4dCddKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjNzRiNzQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJlc3VsdHMge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwwLDAsMC40NSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjVweCAwcHggMjBweCAtMjBweCByZ2JhKDAsMCwwLDAuNDUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAyNXB4IDIwcHggLTIwcHggcmdiYSgwLDAsMCwwLjQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMjVweCAwcHggMjBweCAtMjBweCByZ2JhKDAsMCwwLDAuNDUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWdyaWQjcmVzdWx0c0dyaWQge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1yb3cjcmVwb3J0VGFibGVUb3Age1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk2JTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICN0YWJsZVRpdGxlQW5kQ291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZWFyZWF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3JlcFBlclBhZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjZmlsdGVyQnRuc0FuZFNlYXJjaHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5leHBvcnRCdG5ze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3VsdHNlYXJjaHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4ICM3NGI3NDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB0YWJsZSNwYWdlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgLnN3aXRjaGhlYWRlcmNsYXNzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQxZDE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlZmYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRmb290IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbi1jb250cm9scy5teS1wYWdpbmF0aW9ue1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5jdXN0dW0tcmVwb3J0cy13ZWIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICIsIi5jdXN0dW0tcmVwb3J0cy13ZWIge1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSB7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSBzcGFuIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUgLmJhY2tidXR0b25hcmVhIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIC5iYWNrYnV0dG9uYXJlYSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHotaW5kZXg6IDUwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxNXB4IDBweCA1MHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAuc2lkZU5hdkNsb3NlQnV0dG9uIHtcbiAgei1pbmRleDogNTE7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAyMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGJhY2tncm91bmQ6ICM3NGI3NDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDE1cHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAuc2lkZU5hdkNsb3NlQnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBzY2FsZTogMS41O1xuICBtYXJnaW46IDVweDtcbiAgei1pbmRleDogNTI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnRpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24ge1xuICBzY2FsZTogMTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDIwMiwgMTk1LCAxOTUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24gI3JlcG9ydHNQYW5lbCAuc2luZ2xlSXRlbSBpb24taXRlbSB7XG4gIGJvcmRlcjogc29saWQgM3B4IHJnYigyMDIsIDE5NSwgMTk1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24gI3JlcG9ydHNQYW5lbCAuc2luZ2xlSXRlbSBpb24taXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzZWQ6aG92ZXIge1xuICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzaW5nIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSxcbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSxcbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQgaW9uLWl0ZW1bc2xvdD1oZWFkZXJdIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnNpZGVOYXYge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2gge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIC5zaWRlTmF2QnV0dG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjNzRiNzQzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2ggLnNpZGVOYXZCdXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHNjYWxlOiAxLjM7XG4gIG1hcmdpbjogNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2ggLnJlcG9ydFRpdGxlTmFtZSBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBmb250LXNpemU6IDNlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIGlvbi1zZWFyY2hiYXIge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIGlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIGlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDJweCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMiU7XG4gIG1heC13aWR0aDogMTAyJTtcbiAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggODBweCA4MHB4O1xuICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC5maWx0ZXJHcmlkLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA5OCU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I3RvcExldmVsRmlsdGVyc1JvdyBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbCAuZmlsdGVyIGlvbi1pdGVtLnRvcExldmVsSXRlbSB7XG4gIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWF4LWhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I3RvcExldmVsRmlsdGVyc1JvdyBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbCAuZmlsdGVyIGlvbi1pdGVtLnRvcExldmVsSXRlbSBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjdG9wTGV2ZWxGaWx0ZXJzUm93IGlvbi1jb2wjdG9wTGV2ZWxGaWx0ZXJzQ29sIC5maWx0ZXIgaW9uLWl0ZW0udG9wTGV2ZWxJdGVtIGlvbmljLXNlbGVjdGFibGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I2Vycm9yTXNnUm93IHtcbiAgcGFkZGluZzogNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyNlcnJvck1zZ1JvdyBpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjZmlsdGVyQnV0dG9uc1JvdyBpb24tY29sI2ZpbHRlckJ1dHRvbkNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLmZpbHRlckdyaWQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgLmhpZGVHcmlkQnRuIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciAuaGlkZUdyaWRCdG4gLmljb25BcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciAuaGlkZUdyaWRCdG4gLmljb25BcmVhIGlvbi1pY29uIHtcbiAgc2NhbGU6IDEuNTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDMwcHggMzBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHotaW5kZXg6IC0xMDtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNoZWFkZXIgLnNwYW5hcmVhIHtcbiAgd2lkdGg6IDkwJTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNoZWFkZXIgLnNwYW5hcmVhIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciAuaWNvbkFyZWEge1xuICB3aWR0aDogOCU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciAuaWNvbkFyZWEgaW9uLWljb24ge1xuICBzY2FsZTogMS41O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2RpdnNob3cge1xuICB3aWR0aDogOTAlO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2RpdnNob3cgaW9uLWNvbDpoYXMoaW5wdXRbdHlwZT10ZXh0XSkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNkaXZzaG93IGlvbi1jb2w6aGFzKGlucHV0W3R5cGU9dGV4dF0pIGlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzc0Yjc0Mztcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNkaXZzaG93IGlvbi1jb2wjZmlsdGVyYnRuQ29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggYnVybHl3b29kO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSksIDI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KSwgMHB4IDI1cHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNDUpLCAtMjVweCAwcHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICN0YWJsZVRpdGxlQW5kQ291bnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0NSU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjdGFibGVUaXRsZUFuZENvdW50IC50aXRsZWFyZWEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjdGFibGVUaXRsZUFuZENvdW50IC50aXRsZWFyZWEgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICN0YWJsZVRpdGxlQW5kQ291bnQgI3JlcFBlclBhZ2Uge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI2ZpbHRlckJ0bnNBbmRTZWFyY2gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjZmlsdGVyQnRuc0FuZFNlYXJjaCAuZXhwb3J0QnRucyB7XG4gIHdpZHRoOiA0OSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICNmaWx0ZXJCdG5zQW5kU2VhcmNoIC5yZXN1bHRzZWFyY2gge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjZmlsdGVyQnRuc0FuZFNlYXJjaCAucmVzdWx0c2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjNzRiNzQzO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgLnJlcG9ydFNldHRpbmdzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciAuc3dpdGNoaGVhZGVyY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQxMTExO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciAuc3dpdGNoaGVhZGVyY2xhc3MgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB0aC5oZWFkZXJJRCB7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NEQ0RDRDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB0aC5oZWFkZXJJRC5zd2l0Y2hoZWFkZXJjbGFzcyB7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBQUFBQTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGhlYWQgdHIgdGguaGVhZGVySUQuc3dpdGNoaGVhZGVyY2xhc3MgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlY2VmZjA7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkgdHIge1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB0ciB0ZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGZvb3Qge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGZvb3QgcGFnaW5hdGlvbi1jb250cm9scy5teS1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNTAwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMSwgLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZDIge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQxIC5oZWFkZXJzRm9yU2luZ2xlVGFibGUsIC5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQyIC5oZWFkZXJzRm9yU2luZ2xlVGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQxIC5oZWFkZXJzRm9yU2luZ2xlVGFibGUgaW9uLXJvdywgLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZDIgLmhlYWRlcnNGb3JTaW5nbGVUYWJsZSBpb24tcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQxIC5oZWFkZXJzRm9yU2luZ2xlVGFibGUgaW9uLXJvdyBpb24tY29sLCAuY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMiAuaGVhZGVyc0ZvclNpbmdsZVRhYmxlIGlvbi1yb3cgaW9uLWNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRENEQ0Q7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMSAuZGF0YUZvclNpbmdsZVRhYmxlLCAuY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMiAuZGF0YUZvclNpbmdsZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQxIC5kYXRhRm9yU2luZ2xlVGFibGUgaW9uLXJvdzpudGgtY2hpbGQob2RkKSwgLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZDIgLmRhdGFGb3JTaW5nbGVUYWJsZSBpb24tcm93Om50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VjZWZmMDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQxIC5kYXRhRm9yU2luZ2xlVGFibGUgaW9uLXJvdywgLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZDIgLmRhdGFGb3JTaW5nbGVUYWJsZSBpb24tcm93IHtcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gIG1hcmdpbjogNXB4O1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZDEgLmRhdGFGb3JTaW5nbGVUYWJsZSBpb24tcm93IGlvbi1jb2wsIC5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQyIC5kYXRhRm9yU2luZ2xlVGFibGUgaW9uLXJvdyBpb24tY29sIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRleHQtb3ZlcmZsb3c6IGluaXRpYWw7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMSAjcm93Rm9yTWVtYmVyV2lzZVJlcG9ydCwgLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZDIgI3Jvd0Zvck1lbWJlcldpc2VSZXBvcnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2VjZWZmMDtcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMSAjcm93Rm9yTWVtYmVyV2lzZVJlcG9ydCAjYW1vdW50Q29sLCAuY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMiAjcm93Rm9yTWVtYmVyV2lzZVJlcG9ydCAjYW1vdW50Q29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMSAjcm93Rm9yTWVtYmVyV2lzZVJlcG9ydCAjYW1vdW50Q29sICNhbW91bnRDb2xWYWx1ZSwgLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZDIgI3Jvd0Zvck1lbWJlcldpc2VSZXBvcnQgI2Ftb3VudENvbCAjYW1vdW50Q29sVmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZDEgI3Jvd0Zvck1lbWJlcldpc2VSZXBvcnQgI3JlbWFya3NDb2wsIC5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQyICNyb3dGb3JNZW1iZXJXaXNlUmVwb3J0ICNyZW1hcmtzQ29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMSAjcm93Rm9yTWVtYmVyV2lzZVJlcG9ydCAjcmVtYXJrc0NvbCAjcmVtYXJrc0NvbFZhbHVlLCAuY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMiAjcm93Rm9yTWVtYmVyV2lzZVJlcG9ydCAjcmVtYXJrc0NvbCAjcmVtYXJrc0NvbFZhbHVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRvcDogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQxIHRmb290LCAuY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IC5yZXN1bEFyZWFXaXRoVGFibGUgLnJlc3VsdHMgaW9uLWdyaWQjcGFnZXJHcmlkMiB0Zm9vdCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWNvbnRlbnQgLnJlc3VsQXJlYVdpdGhUYWJsZSAucmVzdWx0cyBpb24tZ3JpZCNwYWdlckdyaWQxIHRmb290IHBhZ2luYXRpb24tY29udHJvbHMubXktcGFnaW5hdGlvbiwgLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24tY29udGVudCAucmVzdWxBcmVhV2l0aFRhYmxlIC5yZXN1bHRzIGlvbi1ncmlkI3BhZ2VyR3JpZDIgdGZvb3QgcGFnaW5hdGlvbi1jb250cm9scy5teS1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5jdXN0dW0tcmVwb3J0cy1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUgc3BhbiBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUgLmJhY2tidXR0b25hcmVhIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIC5iYWNrYnV0dG9uYXJlYSBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogNTA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDE1cHggMHB4IDUwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5zaWRlTmF2Q2xvc2VCdXR0b24ge1xuICAgIHotaW5kZXg6IDUxO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjNzRiNzQzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDBweCAxNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5zaWRlTmF2Q2xvc2VCdXR0b24gaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBzY2FsZTogMS41O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHotaW5kZXg6IDUyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnRpdGxlIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbiB7XG4gICAgc2NhbGU6IDE7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjAyLCAxOTUsIDE5NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24gI3JlcG9ydHNQYW5lbCAuc2luZ2xlSXRlbSBpb24taXRlbSB7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDIwMiwgMTk1LCAxOTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uICNyZXBvcnRzUGFuZWwgLnNpbmdsZUl0ZW0gaW9uLWl0ZW06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjNzRiNzQzO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2LmFjdGl2ZSAucmVwb3J0TGlzdEFyZWEgaW9uLXJvdy5zaW5nbGVNb2R1bGUtc2lkZW5hdiBpb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZDpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggIzc0Yjc0MztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzaW5nIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSxcbi5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnNpZGVOYXYuYWN0aXZlIC5yZXBvcnRMaXN0QXJlYSBpb24tcm93LnNpbmdsZU1vZHVsZS1zaWRlbmF2IGlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgaW9uLWl0ZW1bc2xvdD1oZWFkZXJdLFxuLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuc2lkZU5hdi5hY3RpdmUgLnJlcG9ydExpc3RBcmVhIGlvbi1yb3cuc2luZ2xlTW9kdWxlLXNpZGVuYXYgaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5zaWRlTmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCAuc2lkZU5hdkJ1dHRvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgYmFja2dyb3VuZDogIzc0Yjc0MztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCAuc2lkZU5hdkJ1dHRvbiBpb24taWNvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHNjYWxlOiAxLjM7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuaGVhZG5hbWVBbmRTZWFyY2ggc3BhbiB7XG4gICAgYm9yZGVyOiBzb2xpZCAyeCBvcmFuZ2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmhlYWRuYW1lQW5kU2VhcmNoIGlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5oZWFkbmFtZUFuZFNlYXJjaCBpb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAyJTtcbiAgICBtYXgtd2lkdGg6IDEwMiU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDgwcHggODBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLW1vYmlsZS5maWx0ZXJHcmlkLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyN0b3BMZXZlbEZpbHRlcnNSb3cgaW9uLWNvbCN0b3BMZXZlbEZpbHRlcnNDb2wgLmZpbHRlciBpb24taXRlbS50b3BMZXZlbEl0ZW0ge1xuICAgIGJvcmRlcjogc29saWQgM3B4ICM3NGI3NDM7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQtbW9iaWxlLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjdG9wTGV2ZWxGaWx0ZXJzUm93IGlvbi1jb2wjdG9wTGV2ZWxGaWx0ZXJzQ29sIC5maWx0ZXIgaW9uLWl0ZW0udG9wTGV2ZWxJdGVtIGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciBpb24tZ3JpZCNmbGl0ZXJDb250YWluZXJHcmlkLW1vYmlsZS5maWx0ZXJHcmlkLmFjdGl2ZSBpb24tcm93I3RvcExldmVsRmlsdGVyc1JvdyBpb24tY29sI3RvcExldmVsRmlsdGVyc0NvbCAuZmlsdGVyIGlvbi1pdGVtLnRvcExldmVsSXRlbSBpb25pYy1zZWxlY3RhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIGlvbi1ncmlkI2ZsaXRlckNvbnRhaW5lckdyaWQtbW9iaWxlLmZpbHRlckdyaWQuYWN0aXZlIGlvbi1yb3cjZXJyb3JNc2dSb3cge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyNlcnJvck1zZ1JvdyBpb24tY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZC5hY3RpdmUgaW9uLXJvdyNmaWx0ZXJCdXR0b25zUm93IGlvbi1jb2wjZmlsdGVyQnV0dG9uQ29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgaW9uLWdyaWQjZmxpdGVyQ29udGFpbmVyR3JpZC1tb2JpbGUuZmlsdGVyR3JpZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLmZpbHRlckNvbnRhaW5lciAuaGlkZUdyaWRCdG4ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5maWx0ZXJDb250YWluZXIgLmhpZGVHcmlkQnRuIC5pY29uQXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAuZmlsdGVyQ29udGFpbmVyIC5oaWRlR3JpZEJ0biAuaWNvbkFyZWEgaW9uLWljb24ge1xuICAgIHNjYWxlOiAxLjU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzMHB4IDMwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgei1pbmRleDogLTEwO1xuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHNGaWx0ZXIgaW9uLXJvdyNoZWFkZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjaGVhZGVyIC5zcGFuYXJlYSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjaGVhZGVyIC5zcGFuYXJlYSBzcGFuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0c0ZpbHRlciBpb24tcm93I2hlYWRlciAuaWNvbkFyZWEge1xuICAgIHdpZHRoOiA4JTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjaGVhZGVyIC5pY29uQXJlYSBpb24taWNvbiB7XG4gICAgc2NhbGU6IDEuNTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjZGl2c2hvdyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjZGl2c2hvdyBpb24tY29sOmhhcyhpbnB1dFt0eXBlPXRleHRdKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzRmlsdGVyIGlvbi1yb3cjZGl2c2hvdyBpb24tY29sOmhhcyhpbnB1dFt0eXBlPXRleHRdKSBpbnB1dCB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzc0Yjc0MztcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpLCAyNXB4IDBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC40NSksIDBweCAyNXB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KSwgLTI1cHggMHB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWF4LXdpZHRoOiA5NiU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICN0YWJsZVRpdGxlQW5kQ291bnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNDklO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjdGFibGVUaXRsZUFuZENvdW50IC50aXRsZWFyZWEge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI3RhYmxlVGl0bGVBbmRDb3VudCAudGl0bGVhcmVhIHNwYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICN0YWJsZVRpdGxlQW5kQ291bnQgI3JlcFBlclBhZ2Uge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI2ZpbHRlckJ0bnNBbmRTZWFyY2gge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgaW9uLWdyaWQjcmVzdWx0c0dyaWQgaW9uLXJvdyNyZXBvcnRUYWJsZVRvcCAjZmlsdGVyQnRuc0FuZFNlYXJjaCAuZXhwb3J0QnRucyB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIGlvbi1ncmlkI3Jlc3VsdHNHcmlkIGlvbi1yb3cjcmVwb3J0VGFibGVUb3AgI2ZpbHRlckJ0bnNBbmRTZWFyY2ggLnJlc3VsdHNlYXJjaCB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyBpb24tZ3JpZCNyZXN1bHRzR3JpZCBpb24tcm93I3JlcG9ydFRhYmxlVG9wICNmaWx0ZXJCdG5zQW5kU2VhcmNoIC5yZXN1bHRzZWFyY2ggaW5wdXQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlcjogc29saWQgMnB4ICM3NGI3NDM7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIHRhYmxlI3BhZ2VyIC5zd2l0Y2hoZWFkZXJjbGFzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IC5yZXN1bHRzIHRhYmxlI3BhZ2VyIC5zd2l0Y2hoZWFkZXJjbGFzcyBpb24taWNvbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0aGVhZCB0ciB0aCB7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQ6ICNlY2VmZjA7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0Ym9keSB0ciB7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWNvbnRlbnQgLnJlc3VsdHMgdGFibGUjcGFnZXIgdGJvZHkgdHIgdGQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBtYXgtd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0Zm9vdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24tY29udGVudCAucmVzdWx0cyB0YWJsZSNwYWdlciB0Zm9vdCBwYWdpbmF0aW9uLWNvbnRyb2xzLm15LXBhZ2luYXRpb24ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtd2ViIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 79793:
/*!************************************************************!*\
  !*** ./src/app/pages/mytest2/mytest2.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"custum-reports-web\" style=\"width: 100%; height: 100%\">\n  <ion-header>\n    <ion-toolbar color=\"primary\" hideBackButton click=\"hideMoreOptions()\">\n      <div class=\"navname\">\n        <div class=\"backbuttonarea\" (click)=\"backPage()\">\n          <img src=\"assets/imgs/ic_back.png\" style=\"height: 25px\" />\n        </div>\n\n        <span><p>Report Engine</p></span>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <div class=\"sideNav\" id=\"sideNav\">\n      <div class=\"sideNavCloseButton\" (click)=\"openSideNav()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </div>\n      <div class=\"title\">\n        <span>Select Report</span>\n      </div>\n\n      <div class=\"searchArea\">\n        <ion-searchbar placeholder=\"Search Report\" [(ngModel)]=\"search\"\n        (ionChange)=\"filter()\"\n        show-clear-button=\"focus\"></ion-searchbar>\n      </div>\n\n      <div class=\"reportListArea\" *ngIf=\"reportDetailsSingle && reportDetailsSingle[0]\">\n\n        <ion-row \n            *ngFor=\"let item of reportDetailsSingle[0]['Module'] \"\n              class=\"singleModule-sidenav\">\n            \n            <ion-accordion-group *ngIf=\"reportDetailsSingle[0]['Report'].length!=0\" value=\"\">\n                  <ion-accordion  value=\"{{item.moduleName}}\" >\n                    <ion-item slot=\"header\">\n                      <ion-label>{{item.moduleName}}</ion-label>\n                    </ion-item>\n                    <div class=\"ion-padding\" slot=\"content\" id=\"reportsPanel\">\n                      <div class=\"singleItem\" \n                      *ngFor=\"let report of reportDetailsSingle[0]['Report'] | filter:search\">\n\n                      <ion-item *ngIf=\"item.moduleId == report.moduleId\" lines=\"none\"\n                            id=\"{{item.moduleName}}_{{report.moduleId}}\"\n                            (click)=\"changeReport(report.reportId,report.reportName)\" \n                        >\n                          <ion-label>{{report.reportName}}</ion-label>\n                          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                        </ion-item>\n\n                      </div>\n                    </div>\n                  </ion-accordion>\n                \n                  \n            </ion-accordion-group>\n          </ion-row>\n\n\n        \n      </div>\n    </div>\n\n    <div class=\"headnameAndSearch\">\n      <div class=\"sideNavButton\" (click)=\"openSideNav()\">\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </div>\n      <div class=\"reportTitleName\">\n        <span>{{reportName}}</span>\n      </div>\n      \n\n      \n      \n    </div>\n    <div class=\"filterContainer\">\n      <ion-grid id=\"fliterContainerGrid\" class=\"filterGrid active\">\n        <ion-row id=\"topLevelFiltersRow\">\n          <ion-col size=\"4\" *ngFor=\"let item of filters;let i = index\" id=\"topLevelFiltersCol\">\n            <!-- Filter Type 1 -->\n            <div *ngIf=\"item.filterType == 'Date'\" class=\"filter\">\n              <label>{{item.filterName}}</label>\n              <ion-item class=\"topLevelItem\">\n                <input\n                id=\"{{item.filterName}}\"\n                min=\"{{item.filterTypeObject[0].date[0].min}}\"\n                max=\"{{item.filterTypeObject[0].date[0].max}}\"\n                type=\"date\"\n                format=\"yyyy/MM/dd\"\n                name=\"{{item.filterName}}\" />\n              </ion-item>\n            </div>\n            <!-- Filter Type 2 -->\n            <div *ngIf=\"item.filterType == 'Dropdown'\" class=\"filter\">\n              <label>{{item.filterName}}</label>\n\n              <ion-item class=\"topLevelItem\">\n\n\n                <ionic-selectable id=\"{{item.filterName}}\"\n                  item-content\n                  [items]=\"item.filterTypeObject[0].dropdown\"\n                  [(ngModel)]=\"userFilterSelect[i]\"\n                  itemValueField=\"value\"\n                  itemTextField=\"name\"\n                  [isMultiple]=\"false\"\n                  [canSearch]=\"true\"\n                  (onChange)=\"singleSelectChange($event,item.filterName,userFilterSelect[i])\"\n                  [canClear]=\"true\"\n                  closeButtonSlot=\"end\"\n                  placeholder=\"Please Select\"\n\n                >\n              \n                  \n                </ionic-selectable>\n\n                \n              </ion-item>\n\n\n            \n\n            </div>\n            <!-- Filter Type 3 -->\n            <div\n              *ngIf=\"item.filterType == 'multipleSelectDropdown'\"\n              class=\"filter\">\n              <label>{{item.filterName}}</label>\n              \n            \n              <ion-item class=\"topLevelItem\">\n                <!-- <ion-label position=\"stacked\"></ion-label> -->\n                <ionic-selectable id=\"{{item.filterName}}\"\n                  item-content\n                  [items]=\"item.filterTypeObject[0].dropdown\"\n                  [(ngModel)]=\"userFilterSelect[i]\"\n                  itemValueField=\"value\"\n                  itemTextField=\"name\"\n                  [isMultiple]=\"true\"\n                  [canSearch]=\"true\"\n                  (onChange)=\"multiSelectChange($event,item.filterName,userFilterSelect[i])\"\n                  [canClear]=\"true\"\n                  closeButtonSlot=\"end\"\n                  placeholder=\"Please Select\"\n\n                >\n                <!-- <ng-template ionicSelectableValueTemplate let-i=\"value\">\n                  <div class=\"ionic-selectable-value-item\">\n                    {{userFilterSelect[i]}}\n                  </div>\n                </ng-template> -->\n                  \n                </ionic-selectable>\n              </ion-item>\n            \n            \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row id=\"filterButtonsRow\">\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"6\" id=\"filterButtonCol\">\n            <ion-button (click)=\"getreport(totalFilters)\" fill=\"solid\"  color=\"success\">\n              Search\n            </ion-button>\n            \n          </ion-col>\n        </ion-row>\n        <ion-row id=\"errorMsgRow\">\n          <ion-col size=\"12\"\n            ><p id=\"errormsg\" style=\"display: none; color: red\">{{errormsg}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class=\"hideGridBtn\">\n        <div class=\"iconArea\" (click)=\"hideGrid()\">\n          <ion-icon name=\"chevron-down-outline\" *ngIf=\"dispGrid==false\"></ion-icon>\n          <ion-icon name=\"chevron-up-outline\" *ngIf=\"dispGrid==true\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"resultsFilter\" *ngIf=\"(filteredTableData && filteredTableData.length >0) || dispTable==true\">\n        <ion-row id=\"header\">\n          <div class=\"spanarea\">\n            <span>Select Parameters</span>\n          </div>\n          <div class=\"iconArea\" (click)=\"toggleShow()\">\n            <ion-icon name=\"arrow-up-outline\" *ngIf=\"isShown==true\"></ion-icon>\n            <ion-icon name=\"arrow-down-outline\" *ngIf=\"isShown==false\"></ion-icon>\n          </div>\n\n        </ion-row>\n        <ion-row *ngIf=\"isShown\" class=\"row container-fluid\" id=\"divshow\">\n          <ion-col>\n            <ion-select\n              placeholder=\"Select Headers\"\n              id=\"tableheadermulti\"\n              text-wrap>\n              <ion-select-option\n                value=\"{{item.columnName}}\"\n                style=\"color: #000\"\n                *ngFor=\"let item of tableHeader |filterByProperty\">\n                {{item.columnName}}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col>\n            <label class=\"item item-input\">\n              <ion-select id=\"headeroperatortable\" placeholder=\"Select Operators\">\n                <ion-select-option value=\"1\">=</ion-select-option>\n                <ion-select-option value=\"2\"><</ion-select-option>\n                <ion-select-option value=\"3\">></ion-select-option>\n                <ion-select-option value=\"4\">>=</ion-select-option>\n                <ion-select-option value=\"5\"><=</ion-select-option>\n              </ion-select>\n            </label>\n          </ion-col>\n          <ion-col id=\"srcInput\">\n            \n              <input\n                \n                type=\"text\"\n                value=\"\"\n                id=\"headervaluetable\"\n                placeholder=\"Enter Value\" />\n            \n          </ion-col>\n          <ion-col id=\"filterbtnCol\">\n            <ion-button (click)=\"cleartablefilter()\" color=\"dark\"  fill=\"outline\">\n              Reset Filters\n            </ion-button>\n            <ion-button (click)=\"filterexistdataintable()\" color=\"success\" fill=\"solid\" >\n              Filter\n            </ion-button>\n            \n          </ion-col>\n        </ion-row>\n\n    </div>\n      <div class=\"resulAreaWithTable\">\n    <div class=\"results\" \n      *ngIf=\"((filteredTableData && filteredTableData.length >0) || dispTable==true )&& reportId!=176\">\n      <ion-grid id=\"resultsGrid\" fixed>\n        <ion-row id=\"reportTableTop\">\n          <div id=\"tableTitleAndCount\">\n            <div class=\"titlearea\">\n              <span>Results</span>\n            </div>\n            \n            \n              <ion-item id=\"repPerPage\">\n                <ion-label>Results Per Page</ion-label>\n                <ion-select\n                  [(ngModel)]=\"reportsPerPage\"\n                >\n                  <ion-select-option value=\"10\">10</ion-select-option>\n                  <ion-select-option selected=\"true\" value=\"20\">20</ion-select-option>\n                  <ion-select-option value=\"50\">50</ion-select-option>\n                  <ion-select-option value=\"100\">100</ion-select-option>\n                  <ion-select-option value=\"200\">200</ion-select-option>\n                  <ion-select-option value=\"{{allReportsInOnePage}}\">All Data</ion-select-option>\n                </ion-select>\n              </ion-item>\n            \n          </div>\n          <div  id=\"filterBtnsAndSearch\">\n\n            <div class=\"resultsearch\">\n              <input\n                type=\"search\"\n                id=\"searchinput\"\n                (input)=\"custumsearch()\"\n                class=\"nosubmit\"\n                type=\"search\"\n                placeholder=\"Search Results...\" />\n            </div>\n            \n            <div class=\"exportBtns\">\n              <ion-button   (click)=\"onExport()\"  color=\"dark\" fill=\"outline\" [disabled]=\"filteredTableData.length==0\" >\n                PDF Export\n              </ion-button>\n              <ion-button (click)=\"exportAsExcelFile()\" color=\"success\" [disabled]=\"filteredTableData.length==0\">\n                Excel Export\n              </ion-button>\n              \n            </div>\n\n            \n          \n          </div>\n\n          <div class=\"reportSettings\" title=\"Settings\" id=\"open-modal\">\n            <ion-button (click)=\"presentPopover($event)\" fill=\"clear\" color=\"dark\" style=\"border: none; \">\n              <ion-icon slot=\"icon-only\" name=\"settings-outline\" color=\"dark\"></ion-icon>\n            </ion-button>\n            <ion-popover #popover [isOpen]=\"isOpen\" (didDismiss)=\"isOpen = false\">\n              <ng-template>\n                <ion-content class=\"ion-padding\">\n\n                  <ion-list>\n                    <ion-item>\n                      <ion-label style=\"cursor: pointer;pointer-events: all;\" (click)=\"openModal()\" >\n                        Select Columns\n                      </ion-label>\n                    </ion-item>\n                  </ion-list>\n\n                </ion-content>\n              </ng-template>\n            </ion-popover>\n          </div>\n        </ion-row>\n    \n      </ion-grid>\n\n      <table \n        id=\"pager\"\n        class=\"wp-list-table widefat striped posts formobiletable\">\n        <thead>\n          <tr>\n            <th class=\"headerID\"\n              *ngFor=\"let item of tableHeader\"\n              (click)=\"sortHeader(item.columnName,item.sortBy,booleanValue,$event,item.datatype,'headerID')\">\n              {{item.columnName}}\n              <ion-icon name=\"arrow-down\" *ngIf=\"item.sortBy==true  \"></ion-icon>\n              \n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let data of filteredTableData | paginate: { itemsPerPage: reportsPerPage, currentPage: p }\">\n            <td *ngFor=\"let header of tableHeader \">{{data[header.columnName]}}</td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <pagination-controls\n            (pageChange)=\"p = $event\"\n            \n            class=\"my-pagination\">\n          </pagination-controls>\n        </tfoot>\n      </table>\n\n    \n\n    </div>\n  </div>\n  \n    <!-- for member wise  -->\n    <div class=\"resulAreaWithTable\" *ngIf=\"reportId==176\">\n    <div class=\"results\" *ngFor=\"let table of allTables\"\n      >\n      <ion-grid id=\"resultsGrid\">\n        <ion-row id=\"reportTableTop\">\n          <div id=\"tableTitleAndCount\">\n            <div class=\"titlearea\">\n              <span>Results</span>\n            </div>\n            \n            \n              <!-- <ion-item id=\"repPerPage\">\n                <ion-label>Results Per Page</ion-label>\n                <ion-select\n                  [(ngModel)]=\"reportsPerPage\"\n                >\n                  <ion-select-option value=\"10\">10</ion-select-option>\n                  <ion-select-option selected=\"true\" value=\"20\">20</ion-select-option>\n                  <ion-select-option value=\"50\">50</ion-select-option>\n                  <ion-select-option value=\"100\">100</ion-select-option>\n                  <ion-select-option value=\"200\">200</ion-select-option>\n                  <ion-select-option value=\"{{allReportsInOnePage}}\">All Data</ion-select-option>\n                </ion-select>\n              </ion-item> -->\n            \n          </div>\n          <div  id=\"filterBtnsAndSearch\">\n\n            <div class=\"resultsearch\">\n           \n            <ion-searchbar placeholder=\"Search\" \n                (ionChange)=\"onSearchChangeForMemberWiseTable($event,'dataArea'+table.currentTableNumber)\" [debounce]=\"250\" \n                show-clear-button=\"focus\" >\n            </ion-searchbar>\n\n            </div>\n            \n            <div class=\"exportBtns\" *ngIf=\"table.Header.length==1\">\n              <ion-button   (click)=\"onExport()\"  color=\"dark\" fill=\"outline\"  >\n                PDF Export\n              </ion-button>\n              <!-- <ion-button (click)=\"exportToExcel()\" color=\"success\" [disabled]=\"filteredTableData.length==0\">\n                Excel Export\n              </ion-button> -->\n              \n            </div>\n          \n          </div>\n        </ion-row>\n    \n      </ion-grid>\n\n      <ion-grid *ngIf=\"table.Header.length!=1\" #content\n        id=\"pagerGrid{{table.currentTableNumber}}\" #pagerGrid=\"\"  >\n        <div class=\"headersForSingleTable\">\n          <ion-row *ngFor=\"let rowOfHeaders of table.Header\" >\n            <ion-col  size=\"{{header.columnSize}}\"\n            *ngFor=\"let header of rowOfHeaders\"\n\n              >\n            \n              {{header.columnName}}\n              <ion-icon name=\"arrow-down\" *ngIf=\"header.sortBy==true  \"></ion-icon>          \n              \n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"dataForSingleTable\" id=\"dataArea{{table.currentTableNumber}}\">\n          <ion-row \n          *ngFor=\"let data of table.Data  | paginate: { itemsPerPage: reportsPerPage, currentPage: p } \">\n\n          <ion-col *ngFor=\"let header of table.Header[table.lastHeaderPosition]\">\n            <div class=\"textdata\"\n            *ngFor=\"let text of data\" title=\"{{text[header.displayname]}}\"\n            >\n            {{text[header.displayname]}}\n            </div>\n          </ion-col>\n          </ion-row>\n          \n        </div>\n        <ion-row id=\"rowForMemberWiseReport\">\n          <ion-col size=\"9\" id=\"amountCol\" >Grand Amount :\n            <span id=\"amountColValue\" >\n                Rs. 400\n            </span>\n          </ion-col>\n          <ion-col size=\"3\" id=\"remarksCol\">Remarks :\n            <span id=\"remarksColValue\">\n\n            </span>\n          </ion-col>\n        </ion-row>\n        <tfoot>\n          <pagination-controls\n            (pageChange)=\"p = $event\"\n            \n            class=\"my-pagination\">\n          </pagination-controls>\n        </tfoot>\n      </ion-grid>\n\n      <ion-grid *ngIf=\"table.Header.length==1\"\n        id=\"pagerGrid{{table.currentTableNumber}}\">\n        <div class=\"headersForSingleTable\">\n          <ion-row *ngFor=\"let rowOfHeaders of table.Header\">\n            <ion-col  size=\"{{header.columnSize}}\"\n            *ngFor=\"let header of rowOfHeaders\"\n            \n              >\n            \n              {{header.columnName}}\n              <ion-icon name=\"arrow-down\" *ngIf=\"header.sortBy==true  \"></ion-icon>          \n              \n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"dataForSingleTable\" id=\"dataArea{{table.currentTableNumber}}\">\n          <ion-row\n          *ngFor=\"let data of table.Data  | paginate: { itemsPerPage: reportsPerPage, currentPage: p }\">\n\n          <ion-col *ngFor=\"let header of table.Header[table.lastHeaderPosition]\" title=\"{{data[header.displayname]}}\" >\n            {{data[header.displayname]}}\n          </ion-col>\n          </ion-row>\n        </div>\n        <tfoot>\n          <pagination-controls\n            (pageChange)=\"p = $event\"\n            \n            class=\"my-pagination\">\n          </pagination-controls>\n        </tfoot>\n      </ion-grid>\n\n\n    \n\n    </div>\n    </div>\n\n\n<!--  Modal For Column Selection   -->\n\n<ion-modal #modal trigger=\"open-modal\">\n<ng-template>\n  <ion-content>\n    <ion-toolbar>\n      <ion-title>Modal</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"light\" (click)=\"modal.dismiss()\">Close</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-list>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-img src=\"https://i.pravatar.cc/300?u=b\"></ion-img>\n        </ion-avatar>\n        <ion-label>\n          <h2>Connor Smith</h2>\n          <p>Sales Rep</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-img src=\"https://i.pravatar.cc/300?u=a\"></ion-img>\n        </ion-avatar>\n        <ion-label>\n          <h2>Daniel Smith</h2>\n          <p>Product Designer</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-img src=\"https://i.pravatar.cc/300?u=d\"></ion-img>\n        </ion-avatar>\n        <ion-label>\n          <h2>Greg Smith</h2>\n          <p>Director of Operations</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-img src=\"https://i.pravatar.cc/300?u=e\"></ion-img>\n        </ion-avatar>\n        <ion-label>\n          <h2>Zoey Smith</h2>\n          <p>CEO</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ng-template>\n</ion-modal>\n\n<!--  Modal for Column Selection Ends Here  -->\n\n<div id=\"empty\"></div>\n\n\n  </ion-content>\n</div>\n\n<div class=\"custum-reports-mobile\" style=\"width: 100%; height: 100%\">\n\n  <ion-header>\n    <ion-toolbar color=\"primary\" hideBackButton click=\"hideMoreOptions()\">\n      <div class=\"navname\">\n        <div class=\"backbuttonarea\" (click)=\"backPage()\">\n          <img src=\"assets/imgs/ic_back.png\" style=\"height: 25px\" />\n        </div>\n\n        <span><p>Report Engine</p></span>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <div class=\"sideNav\" id=\"sideNav-mobile\">\n      <div class=\"sideNavCloseButton\" (click)=\"openSideNav()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </div>\n      <div class=\"title\">\n        <span>Select Report</span>\n      </div>\n\n      <div class=\"searchArea\">\n        <ion-searchbar placeholder=\"Search Report\" showCancelButton=\"focus\" [(ngModel)]=\"search\"\n        (ionChange)=\"filter()\"\n        show-clear-button=\"focus\"></ion-searchbar>\n      </div>\n\n      <div class=\"reportListArea\" *ngIf=\"reportDetailsSingle && reportDetailsSingle[0]\">\n\n        <ion-row \n            *ngFor=\"let item of reportDetailsSingle[0]['Module'] \"\n              class=\"singleModule-sidenav\">\n            \n            <ion-accordion-group *ngIf=\"reportDetailsSingle[0]['Report'].length!=0\" value=\"\">\n                  <ion-accordion  value=\"{{item.moduleName}}\" >\n                    <ion-item slot=\"header\">\n                      <ion-label>{{item.moduleName}}</ion-label>\n                    </ion-item>\n                    <div class=\"ion-padding\" slot=\"content\" id=\"reportsPanel\">\n                      <div class=\"singleItem\" \n                      *ngFor=\"let report of reportDetailsSingle[0]['Report'] | filter:search\">\n\n                      <ion-item *ngIf=\"item.moduleId == report.moduleId\" lines=\"none\"\n                            id=\"{{item.moduleName}}_{{report.moduleId}}\"\n                            (click)=\"changeReport(report.reportId,report.reportName)\" \n                        >\n                          <ion-label>{{report.reportName}}</ion-label>\n                          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                        </ion-item>\n\n                      </div>\n                    </div>\n                  </ion-accordion>\n                \n                  \n            </ion-accordion-group>\n          </ion-row>\n\n\n        \n      </div>\n    </div>\n\n    <div class=\"headnameAndSearch\">\n      <div class=\"sideNavButton\" (click)=\"openSideNav()\">\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </div>\n\n      <span>{{reportName}}</span>\n\n      \n      \n    </div>\n    <div class=\"filterContainer\">\n      <ion-grid id=\"fliterContainerGrid-mobile\" class=\"filterGrid active\">\n        <ion-row id=\"topLevelFiltersRow\">\n          <ion-col size=\"12\" *ngFor=\"let item of filters;let i = index\" id=\"topLevelFiltersCol\">\n            <!-- Filter Type 1 -->\n            <div *ngIf=\"item.filterType == 'Date'\" class=\"filter\">\n              <label>{{item.filterName}}</label>\n              <ion-item class=\"topLevelItem\">\n                <input\n                id=\"{{item.filterName}}-mobile\"\n                min=\"{{item.filterTypeObject[0].date[0].min}}\"\n                max=\"{{item.filterTypeObject[0].date[0].max}}\"\n                type=\"date\"\n                format=\"yyyy/MM/dd\"\n                name=\"{{item.filterName}}\" />\n              </ion-item>\n            </div>\n            <!-- Filter Type 2 -->\n            <div *ngIf=\"item.filterType == 'Dropdown'\" class=\"filter\">\n              <label>{{item.filterName}}</label>\n\n              <ion-item class=\"topLevelItem\">\n\n\n                <ionic-selectable id=\"{{item.filterName}}-mobile\"\n                  item-content\n                  [items]=\"item.filterTypeObject[0].dropdown\"\n                  [(ngModel)]=\"userFilterSelect[i]\"\n                  itemValueField=\"value\"\n                  itemTextField=\"name\"\n                  [isMultiple]=\"false\"\n                  [canSearch]=\"true\"\n                  (onChange)=\"singleSelectChange($event,item.filterName,userFilterSelect[i])\"\n                  [canClear]=\"true\"\n                  closeButtonSlot=\"end\"\n                  placeholder=\"Please Select\"\n\n                >\n              \n                  \n                </ionic-selectable>\n\n                \n              </ion-item>\n\n\n            \n\n            </div>\n            <!-- Filter Type 3 -->\n            <div\n              *ngIf=\"item.filterType == 'multipleSelectDropdown'\"\n              class=\"filter\">\n              <label>{{item.filterName}}</label>\n              \n            \n              <ion-item class=\"topLevelItem\">\n                <!-- <ion-label position=\"stacked\"></ion-label> -->\n                <ionic-selectable id=\"{{item.filterName}}-mobile\"\n                  item-content\n                  [items]=\"item.filterTypeObject[0].dropdown\"\n                  [(ngModel)]=\"userFilterSelect[i]\"\n                  itemValueField=\"value\"\n                  itemTextField=\"name\"\n                  [isMultiple]=\"true\"\n                  [canSearch]=\"true\"\n                  (onChange)=\"multiSelectChange($event,item.filterName,userFilterSelect[i])\"\n                  [canClear]=\"true\"\n                  closeButtonSlot=\"end\"\n                  placeholder=\"Please Select\"\n\n                >\n                <!-- <ng-template ionicSelectableValueTemplate let-i=\"value\">\n                  <div class=\"ionic-selectable-value-item\">\n                    {{userFilterSelect[i]}}\n                  </div>\n                </ng-template> -->\n                  \n                </ionic-selectable>\n              </ion-item>\n            \n            \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row id=\"filterButtonsRow\">\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"6\" id=\"filterButtonCol\">\n            <ion-button (click)=\"getreport(totalFilters)\" fill=\"solid\"  color=\"success\">\n              Search\n            </ion-button>\n            \n          </ion-col>\n        </ion-row>\n        <ion-row id=\"errorMsgRow\">\n          <ion-col size=\"12\"\n            ><p id=\"errormsg-mobile\" style=\"display: none; color: red\">{{errormsg}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class=\"hideGridBtn\">\n        <div class=\"iconArea\" (click)=\"hideGrid()\">\n          <ion-icon name=\"chevron-down-outline\" *ngIf=\"dispGrid==false\"></ion-icon>\n          <ion-icon name=\"chevron-up-outline\" *ngIf=\"dispGrid==true\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"resultsFilter\" *ngIf=\"(filteredTableData && filteredTableData.length >0) || dispTable==true\">\n        <ion-row id=\"header\">\n          <div class=\"spanarea\">\n            <span>Select Parameters</span>\n          </div>\n          <div class=\"iconArea\" (click)=\"toggleShow()\">\n            <ion-icon name=\"arrow-up-outline\" *ngIf=\"isShown==true\"></ion-icon>\n            <ion-icon name=\"arrow-down-outline\" *ngIf=\"isShown==false\"></ion-icon>\n          </div>\n\n        </ion-row>\n        <ion-row *ngIf=\"isShown\" class=\"row container-fluid\" id=\"divshow\">\n          <ion-col>\n            <ion-select\n              placeholder=\"Select Headers\"\n              multiple=\"true\"\n              id=\"tableheadermulti\"\n              text-wrap\n              >\n              <ion-select-option\n                value=\"{{item.columnName}}\"\n                style=\"color: #000\"\n                *ngFor=\"let item of tableHeader\">\n                {{item.columnName}}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col>\n            <label class=\"item item-input\">\n              <ion-select id=\"headeroperatortable\" placeholder=\"Select Operators\">\n                <ion-select-option value=\"1\">=</ion-select-option>\n                <ion-select-option value=\"2\"><</ion-select-option>\n                <ion-select-option value=\"3\">></ion-select-option>\n                <ion-select-option value=\"4\">>=</ion-select-option>\n                <ion-select-option value=\"5\"><=</ion-select-option>\n              </ion-select>\n            </label>\n          </ion-col>\n          <ion-col>\n            \n              <input\n                \n                type=\"text\"\n                value=\"\"\n                id=\"headervaluetable\"\n                placeholder=\"Enter Value\" />\n            \n          </ion-col>\n          <ion-col id=\"filterbtnCol\">\n            <ion-button (click)=\"cleartablefilter()\" color=\"dark\"  fill=\"outline\">\n              Reset Filters\n            </ion-button>\n            <ion-button (click)=\"filterexistdataintable()\" color=\"success\" fill=\"solid\" >\n              Filter\n            </ion-button>\n            \n          </ion-col>\n        </ion-row>\n\n    </div>\n\n    <div class=\"results\"\n      *ngIf=\"(filteredTableData && filteredTableData.length >0) || dispTable==true\">\n      <ion-grid id=\"resultsGrid\">\n        <ion-row id=\"reportTableTop\">\n          <div id=\"tableTitleAndCount\">\n            <div class=\"titlearea\">\n              <span>Reports</span>\n            </div>\n            \n            \n              <ion-item id=\"repPerPage\">\n                <ion-label>Reports Per Page</ion-label>\n                <ion-select\n                  [(ngModel)]=\"reportsPerPage\"\n                >\n                  <ion-select-option value=\"10\">10</ion-select-option>\n                  <ion-select-option selected=\"true\" value=\"20\">20</ion-select-option>\n                  <ion-select-option value=\"50\">50</ion-select-option>\n                  <ion-select-option value=\"100\">100</ion-select-option>\n                  <ion-select-option value=\"200\">200</ion-select-option>\n                </ion-select>\n              </ion-item>\n            \n          </div>\n          <div  id=\"filterBtnsAndSearch\">\n\n            <div class=\"resultsearch\">\n              <input\n                type=\"search\"\n                id=\"searchinput\"\n                (input)=\"custumsearch()\"\n                class=\"nosubmit\"\n                type=\"search\"\n                placeholder=\"Search Results...\" />\n            </div>\n            \n            <div class=\"exportBtns\">\n              <ion-button  color=\"dark\" fill=\"outline\"  >\n                PDF Export\n              </ion-button>\n              <ion-button  color=\"success\">\n                Excel Export\n              </ion-button>\n              \n            </div>\n          \n          </div>\n        </ion-row>\n    \n      </ion-grid>\n\n      <table\n        id=\"pager\"\n        class=\"wp-list-table widefat striped posts formobiletable\">\n        <thead>\n          <tr>\n            <th\n              *ngFor=\"let item of tableHeader\"\n              (click)=\"sortHeader(item.columnName,item.sortBy,booleanValue,$event,item.datatype,'headerID')\">\n              {{item.columnName}}\n              <ion-icon name=\"arrow-down\" *ngIf=\"item.sortBy==true  \"></ion-icon>\n\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let data of filteredTableData | paginate: { itemsPerPage: reportsPerPage, currentPage: p }\">\n            <td *ngFor=\"let item of tableHeader\">{{data[item.columnName]}}</td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <pagination-controls\n            (pageChange)=\"p = $event\"\n            \n            class=\"my-pagination\">\n          </pagination-controls>\n        </tfoot>\n      </table>\n    </div>\n  </ion-content>\n\n</div>\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mytest2_mytest2_module_ts.js.map