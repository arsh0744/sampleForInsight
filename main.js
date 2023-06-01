(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_report_dashboard_power_bi_report_dashboard_power_bi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/report-dashboard-power-bi/report-dashboard-power-bi.component */ 51918);
/* harmony import */ var _components_quickinsight_quickinsight_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/quickinsight/quickinsight.component */ 83979);





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'dairy-farm-dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mymainpage_mymainpage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mymainpage/mymainpage.module */ 15705)).then((m) => m.MymainpagePageModule),
    },
    {
        path: 'farmer-dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mymainpage_mymainpage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mymainpage/mymainpage.module */ 15705)).then((m) => m.MymainpagePageModule),
    },
    {
        path: 'collector',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mymainpage_mymainpage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mymainpage/mymainpage.module */ 15705)).then((m) => m.MymainpagePageModule),
    },
    {
        path: 'multiple-select-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_multiple-select-modal_multiple-select-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/multiple-select-modal/multiple-select-modal.module */ 42355)).then((m) => m.MultipleSelectModalPageModule),
    },
    {
        path: 'single-select-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_single-select-modal_single-select-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/single-select-modal/single-select-modal.module */ 91657)).then((m) => m.SingleSelectModalPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then((m) => m.LoginPageModule),
    },
    // {
    //   path: 'login',
    //   loadChildren: () =>
    //     import('./pages/mymainpage/mymainpage.module').then((m) => m.MymainpagePageModule),
    // },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgot-password/forgot-password.module */ 65638)).then((m) => m.ForgotPasswordPageModule),
    },
    {
        path: 'chilling-centre-dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mymainpage_mymainpage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mymainpage/mymainpage.module */ 15705)).then((m) => m.MymainpagePageModule),
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 17110)).then((m) => m.SignupPageModule),
    },
    {
        path: 'customreports',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_customreports_customreports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customreports/customreports.module */ 21643)).then(m => m.CustomreportsPageModule),
    },
    {
        path: 'customreportdetail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic-selectable___ivy_ngcc___esm2015_src_app_components_ionic-selectabl-b30893"), __webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("src_app_pages_customreportdetail_customreportdetail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customreportdetail/customreportdetail.module */ 93260)).then(m => m.CustomreportdetailPageModule)
    },
    {
        path: 'mytest',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic-selectable___ivy_ngcc___esm2015_src_app_components_ionic-selectabl-b30893"), __webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("src_app_pages_mytest_mytest_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mytest/mytest.module */ 47124)).then(m => m.MytestPageModule)
    },
    {
        path: 'mytest2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic-selectable___ivy_ngcc___esm2015_src_app_components_ionic-selectabl-b30893"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("src_app_pages_mytest2_mytest2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mytest2/mytest2.module */ 47478)).then(m => m.Mytest2PageModule)
    },
    {
        path: 'powerbi',
        component: _components_report_dashboard_power_bi_report_dashboard_power_bi_component__WEBPACK_IMPORTED_MODULE_0__.ReportDashboardPowerBIComponent
    },
    {
        path: 'quick',
        component: _components_quickinsight_quickinsight_component__WEBPACK_IMPORTED_MODULE_1__.QuickinsightComponent
    }
    // {
    //   path: 'powerbi',
    //   loadChildren: () => import('./pages/powerbi/powerbi.module').then( m => m.PowerbiPageModule)
    // }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules,
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/utils/BaseComp */ 88075);
/* harmony import */ var _app_services_home_message_home_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/services/home-message/home-message.service */ 39219);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/push/ngx */ 18982);
/* harmony import */ var _app_services_network_service_network_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/services/network-service/network-service.service */ 41138);
/* harmony import */ var _app_services_sql_sql_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/services/sql/sql.service */ 98420);
/* harmony import */ var _app_services_start_uploading_serivice_start_uploading_serivice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/services/start-uploading-serivice/start-uploading-serivice.service */ 35839);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ 21512);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/market/ngx */ 68538);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17265);
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ 16386);
/* harmony import */ var _app_services_edpu_server_edpu_server_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/services/edpu-server/edpu-server.service */ 86603);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _app_services_dcf_data_transfer_over_local_network_dcf_data_transfer_over_local_network_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/services/dcf-data-transfer-over-local-network/dcf-data-transfer-over-local-network.service */ 89087);
/* harmony import */ var _services_events_events_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/events/events.service */ 11716);
/* harmony import */ var _components_pop_up_notification_pop_up_notification_pop_up_notification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pop-up-notification/pop-up-notification/pop-up-notification.component */ 98025);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 74701);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_token_token_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/token/token.service */ 38264);
/* harmony import */ var _services_accessauthorization_accessauthorization_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/accessauthorization/accessauthorization.service */ 67085);






























let AppComponent = class AppComponent extends _app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_5__.BaseComp {
  constructor(dbProvider, uploadService, dcfDataTransfer, edpuserver, sanitizer, changeDetectorRef, networkService, modalController, toastCtrl, localNotifications, market, openNativeSettings, appVersion, push, alertCtrl, platform, statusBar, device, splashScreen, homeMessage, http, nativeAudio, events, route, nav, token, Auth) {
    var _this;

    super();
    _this = this;
    this.dbProvider = dbProvider;
    this.uploadService = uploadService;
    this.dcfDataTransfer = dcfDataTransfer;
    this.edpuserver = edpuserver;
    this.sanitizer = sanitizer;
    this.changeDetectorRef = changeDetectorRef;
    this.networkService = networkService;
    this.modalController = modalController;
    this.toastCtrl = toastCtrl;
    this.localNotifications = localNotifications;
    this.market = market;
    this.openNativeSettings = openNativeSettings;
    this.appVersion = appVersion;
    this.push = push;
    this.alertCtrl = alertCtrl;
    this.platform = platform;
    this.statusBar = statusBar;
    this.device = device;
    this.splashScreen = splashScreen;
    this.homeMessage = homeMessage;
    this.http = http;
    this.nativeAudio = nativeAudio;
    this.events = events;
    this.route = route;
    this.nav = nav;
    this.token = token;
    this.Auth = Auth;
    this.submenuVisible = false;
    this.is_collector = false;
    this.is_farmer = false;
    this.is_dairy_farm = false;
    this.is_customer = false;
    this.is_delivery_boy = false;
    this.is_delivery_van = false;
    this.is_chilling_centre = false;
    this.is_oright = false;
    this.is_deliveryVan_outbound = false;
    this.is_inbound_transporter = false;
    this.OrderToggle = true; //orderchanges

    this.app = {
      Dashboard: 'Dashboard',
      Testing_Dashboard: 'Testing Status',
      Cleaning_Dashboard: 'Cleaning Status',
      View_Profile: 'View Profile',
      add_farmer: 'Add Farmer',
      add_expected_volume: 'Add Expected Volume',
      switch_language: 'Switch Language',
      change_password: 'Change Password',
      logout: 'Logout',
      Payments: 'Payments',
      Collection_Centers: 'Collection Centers',
      Scan: 'Scan',
      About_us: 'About Us',
      User_Management: 'User Management',
      Contact_us: 'Contact Us',
      Package: 'Package',
      EDPU: 'e-DPU',
      Edpu_testing: 'e-DPU Testing',
      Reports: 'Reports',
      Pin_Generate: 'Pin Generate',
      OutBound_Report: 'OutBound Report',
      Delivery_Report: 'Delivery Report',
      rmrd_collection_transaction_report: 'RMRD Transaction',
      Provenance_Report: 'Provenance Report',
      TransporterDataSync: 'Transporter Data sync',
      TransporterSummary: 'Transporter Summary',
      Correction_Report: 'Correction Report',
      DeviationReport: 'Deviation Report',
      TransporterTracking: 'Transporter Tracking',
      FarmerTranche: 'Farmer Tranche',
      Transporter: 'Transporter',
      Dispatch: 'Dispatch',
      OfflineEdpuDataSync: 'Offline Edpu Data Sync',
      Adulteration_correction: 'Adulteration Correction',
      Preferences: 'Preferences',
      Data_Push_Register: 'Data Push Register',
      Hindi: 'हिंदी',
      English: 'English',
      Tamil: 'தமிழ்',
      Order_Management: 'Order Management',
      Sell_Product: 'Order Item',
      Order_Summary: 'Order Summary',
      Settings: 'Settings',
      Farmer_Data_Upload: 'Farmer Data Upload',
      AI_Engine: 'AI Engine',
      Masters: 'Masters',
      ChillingCentreMaster: 'Chilling Centre Master',
      CollectionCentreMaster: 'Collection Centre Master',
      FarmerMaster: 'Farmer Master',
      User_Master: 'User Master',
      IOT_Master: 'IOT Master',
      Dairy_Summary_Report: 'Dairy Summary Report',
      Calibration_Report: 'Calibration ',
      Cleaning_Report: 'Cleaning ',
      Calibration_OfflineRecords: 'Calibration Offline',
      Cleaning_OfflineRecords: 'Cleaning Offline',
      Price_Profile_Master: 'Price Profile Master',
      Manual_correction: 'Manual Correction',
      CustomNotification: 'Custom Notification',
      Dispatch_Summary: 'Dispatch Summary',
      Milk_Bill_Summary: 'Milk Bill Summary',
      Provisional_Milk_Bill_Report: 'Milk Bill Details',
      PouringNotPouringReport: 'Not Pouring Report',
      RmrdWeighingLabReport: 'Weighing & Lab ',
      RmrdCollectionTimingsReport: 'Collection timings ',
      Synopsis: 'Synopsis Reports',
      ChillingCentre: 'Chilling Centre',
      CollectionCentre: 'Collection Centre',
      Farmer: 'Farmer',
      Dairy: 'Dairy',
      adminLocalSale: 'Admin Local Sale'
    };
    this.service_id = [];
    this.EdpuToggle = true;
    this.ReportToggle = true;
    this.TransporterToggle = true;
    this.LangToggle = true;
    this.Farm_Logo_Path = 'null';
    this.show_farm_logo = false;
    this.userFullName = '';
    this.CurrentVersion = '';
    this.oldVersion = '';
    this.modelActive = false;
    this.OrightPreferences = [];
    this.DairyFarmConfiguration = [];
    this.dairyLogoPathForCoobranding = [];
    this.showMasterSectionInMenu = false;
    this.SynopsisToggle = false; // window.console.warn = function(){}; // for production only
    // window.console.error = function(){}; // for production only
    // window.console.exception = function(){}; // for production only

    this.saveItem('isEdpuTestingClickEventSubscribed', '0');
    platform.ready().then( /*#__PURE__*/(0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Okay, so the platform is ready and our plugins are available
        // Here you can do any higher level native things you might need
        _this.dcfDataTransfer.subscribeDcfUnploadedDataTransfer();

        _this.InternetConnection();

        statusBar.backgroundColorByHexString('#74b743');
        _this.oldVersion = _this.getItem('AppVersion');
        statusBar.styleDefault();
        yield _this.appVersion.getVersionNumber().then(version => {
          return _this.CheckDB(version);
        }).catch(er => {
          return _this.CheckDB('0.0.0');
        });

        _this.soundLoad();

        _this.checkAppVersion(); // this.edpuserver.startServer8888();
        // this.edpuserver.startServer8889();
        // if(this.getItem(this.IS_LOGIN)=="1"){
        //   this.rootPage=CollectorPage;
        // }else{
        //   this.rootPage=LoginPage;
        // }
        // this.rootPage=DairyFarmDashboardPage;


        if (_this.getItem('IS_LOGIN') == '1') {
          try {
            _this.startOfflineRecordsHitService(_this.networkService.status);

            _this.Farm_Logo_Path = _this.getFarm_Logo_Path();

            _this.getFarmLogoToShow();

            var parsedJSON = _this.getItem('LOGIN_USER_DATA');

            _this.callOrightPrefernceApi(parsedJSON[0]);

            _this.callDairyFarmConfigurationApi(parsedJSON[0].UserId);

            _this.callDairyLogoPathForCoobrandingApi(parsedJSON[0].Farm_ID);

            _this.GetServices(parsedJSON, parsedJSON[0].UserId);
          } catch (e) {
            console.error('err constructor app component page:-', e);
          }
        }

        events.subscribe('login_done', data => {
          _this.DatabaseCode = _this.getItem('Db_code');

          _this.checkMenuOption();
        });
        events.subscribe('lang_changed', data => {
          _this.getData();
        });
        events.subscribe('logout_done', data => {
          console.log("Logged Out hululul ");

          _this.removeItem('Db_code');

          _this.removeItem(_this.LOGIN_USER_DATA);

          _this.removeItem(_this.IS_LOGIN);

          _this.Auth.startPasswordCheckService(false); // this.rootPage = 'login';


          _this.nav.navigateRoot('login');
        }); // this.edpuserver.webSocketStartServer8889();

        if ((_this.platform.is('android') || _this.platform.is('ios')) && !_this.platform.is('mobileweb') && !_this.platform.is('desktop')) {
          _this.edpuserver.startWebScoketServer();
        } // setTimeout(() => {
        //   this.edpuserver.webSocketStopServer();
        // }, 10000);


        events.subscribe('networkStatus_changed', data => {
          _this.startOfflineRecordsHitService(data);
        }); //   this.platform.pause.subscribe(() => {
        // });
        // this.platform.resume.subscribe(() => {
        // });
        // this.edpuserver.webSocketStartServer8890();
        // this.platform.pause.subscribe(() => {
        //   //inside the app
        //   //what you need to do
        //   this.edpuserver.webSocketCloseConn();
        //   });
        //   this.platform.resume.subscribe(() => {
        //     this.edpuserver.webSocketStartServer8889();
        //    // this.edpuserver.webSocketStartServer8890();
        // });
      } catch (err) {
        console.error('error in app component platform.ready():');
      }
    }));
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {// do on back button click
      });
    });
    this.splashScreen.hide();

    if (this.getItem(this.LOGIN_USER_DATA)) {
      console.log("User Exists");
      Auth.startPasswordCheckService(true);
    } else {
      console.log("User Does Not Exists");
      Auth.startPasswordCheckService(false);
    }
  }

  getData() {
    var selectedLang = this.getItem(this.LANG_SELECTED);
    let url = 'assets/lang/' + selectedLang + '.json'; // let url = "assets/lang/en.json";
    // if (this.getItem(this.LANG_SELECTED) == this.HINDI_LANG) {
    //   url = "assets/lang/hn.json";
    // }

    this.http.get(url).subscribe(result => {
      try {
        let parsedJSON = JSON.parse(JSON.stringify(result));
        this.app = parsedJSON.app;
      } catch (err) {
        console.error(err);
      }
    }, error => {});
  }

  startOfflineRecordsHitService(networkStatus) {
    if (this.getItem('IS_LOGIN') == '1') {
      if (networkStatus == 0) {
        this.uploadService.HitAllDcfOfflineRecords().then(() => {
          this.uploadService.HitAllOfflineRecords();
        });
        this.uploadService.GetWeightRecords();
        this.uploadService.hitAllChemicalTestingOfflineRecords();
        this.uploadService.HitAllDeliveryBoyDeliveriesOfflineRecords();
        this.uploadService.hitAllSourMilkTestingOfflineRecords();
      }
    }
  }

  getUserNotifications() {
    let lastrecord_id = 0;
    this.dbProvider.getAllNotificationRecords(this.getFarmerUserID()).then(res => {
      if (res.rows.length == 0) {
        this.callNotificationsApi(lastrecord_id);
      } else {
        for (let i = 0; i < res.rows.length; i++) {
          if (lastrecord_id < res.rows.item(i).ID) {
            //##if farmer not exist
            lastrecord_id = res.rows.item(i).ID;
          }

          if (i == res.rows.length - 1) {
            this.callNotificationsApi(lastrecord_id);
          }
        }
      }
    }, error => {
      console.error('getNotificationList error: ', error);
    });
  }

  CheckDB(version) {
    var _this2 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.error("Here 1");

      if (version != _this2.oldVersion) {
        _this2.saveItem('AppVersion', version);
      }

      try {
        yield _this2.dbProvider.VersionDatabase(_this2.oldVersion).then(item => {}).catch(er => {
          console.error('er', er);
        });
      } catch (err) {
        console.error('checkDB error', err);
      }

      if ((_this2.platform.is('android') || _this2.platform.is('ios')) && !_this2.platform.is('mobileweb') && !_this2.platform.is('desktop') && _this2.getItem(_this2.IS_LOGIN) == '1') {
        yield _this2.CheckUserLoginStatus().then(data => {}).catch(er => {
          console.error('1');
        });
      } // if ((this.platform.is("android") || this.platform.is("ios")) &&
      // !this.platform.is("mobileweb") && !this.platform.is("core") ) {
      // await  this.CheckUserLoginStatus().then((data)=>{
      // }).catch((er)=>{
      // });
      // }


      console.error("Here 2");
      _this2.CurrentVersion = version.toString();

      _this2.initPushNotification();

      yield _this2.getData();

      if ( // ((this.platform.is('android') || this.platform.is('ios')) &&
      //   !this.platform.is('mobileweb') &&
      //   !this.platform.is('desktop') &&
      //   this.CheckUserLoginStatus()) ||
      // (!(
      //   (this.platform.is('android') || this.platform.is('ios')) &&
      //   !this.platform.is('mobileweb') &&
      //   !this.platform.is('desktop')
      // ) &&
      _this2.getItem(_this2.IS_LOGIN) == '1') {
        let user_data = _this2.getItem(_this2.LOGIN_USER_DATA);

        let parsedJSON = user_data; // this.navCtrl.push(CollectorPage);

        yield _this2.getUserNotifications();

        if (parsedJSON[0].userType == '1') {
          // farmer
          _this2.is_farmer = true;
          _this2.is_collector = false;
          _this2.is_dairy_farm = false;
          _this2.is_customer = false;
          _this2.is_delivery_boy = false;
          _this2.is_delivery_van = false;
          _this2.is_chilling_centre = false;
          _this2.is_oright = false;
          _this2.is_deliveryVan_outbound = false;
          _this2.is_inbound_transporter = false;
          _this2.userOrganizationName = parsedJSON[0].CollectionCentre_Name;
          _this2.userLocalCode = parsedJSON[0].LocalFarmer_ID;
          _this2.userFullName = parsedJSON[0].UserFullName;

          _this2.nav.navigateRoot('farmer-dashboard');

          _this2.splashScreen.hide();
        } else if (parsedJSON[0].userType == '2') {
          //dairy farm
          _this2.is_farmer = false;
          _this2.is_collector = false;
          _this2.is_dairy_farm = true;
          _this2.is_customer = false;
          _this2.is_delivery_boy = false;
          _this2.is_delivery_van = false;
          _this2.is_chilling_centre = false;
          _this2.is_oright = false;
          _this2.is_deliveryVan_outbound = false;
          _this2.is_inbound_transporter = false;
          _this2.userOrganizationName = parsedJSON[0].Farm_Name;
          _this2.userLocalCode = '';
          _this2.userFullName = parsedJSON[0].UserFullName;

          if (parsedJSON[0].Farm_ID.toString() == '19') {
            // this.rootPage = 'dairy-farm-dbrd-no-amount-no-milktype';
            _this2.nav.navigateRoot('dairy-farm-dbrd-no-amount-no-milktype');

            _this2.splashScreen.hide();
          } else {
            // this.rootPage = 'dairy-farm-dashboard';
            _this2.nav.navigateRoot('dairy-farm-dashboard');

            _this2.splashScreen.hide();
          }
        } else if (parsedJSON[0].userType == '3') {
          //collection center
          _this2.is_farmer = false;
          _this2.is_collector = true;
          _this2.is_dairy_farm = false;
          _this2.is_customer = false;
          _this2.is_delivery_boy = false;
          _this2.is_delivery_van = false;
          _this2.is_chilling_centre = false;
          _this2.is_oright = false;
          _this2.is_deliveryVan_outbound = false;
          _this2.is_inbound_transporter = false;
          _this2.userOrganizationName = parsedJSON[0].CollectionCentre_Name;
          _this2.userLocalCode = parsedJSON[0].LocalChillingCentre_ID === '0' ? parsedJSON[0].LocalCollectionCentre_ID : parsedJSON[0].LocalChillingCentre_ID + parsedJSON[0].LocalCollectionCentre_ID;
          _this2.userFullName = parsedJSON[0].UserFullName ? parsedJSON[0].UserFullName.substring(0, 28) : '';
          _this2.userFullName = parsedJSON[0].UserFullName.length > 28 ? `${_this2.userFullName}...` : _this2.userFullName;

          if (parsedJSON[0].Farm_ID.toString() == '19') {
            // this.rootPage = 'collector-dbrd-no-amount-no-milktype';
            _this2.nav.navigateRoot('collector-dbrd-no-amount-no-milktype');

            _this2.splashScreen.hide();
          } else if (parsedJSON[0].Farm_ID.toString() == _this2.GFO_FARMID) {
            // this.rootPage = 'collector2';
            _this2.nav.navigateRoot('collector2');

            _this2.splashScreen.hide();
          } else {
            // this.rootPage = 'collector';
            _this2.nav.navigateRoot('collector');

            _this2.splashScreen.hide();
          }
        } else if (parsedJSON[0].userType == '4') {
          //collection center
          _this2.is_farmer = false;
          _this2.is_collector = false;
          _this2.is_dairy_farm = false;
          _this2.is_customer = true;
          _this2.is_delivery_boy = false;
          _this2.is_delivery_van = false;
          _this2.is_chilling_centre = false;
          _this2.is_oright = false;
          _this2.is_deliveryVan_outbound = false;
          _this2.is_inbound_transporter = false;
          _this2.userOrganizationName = '';
          _this2.userLocalCode = '';
          _this2.userFullName = parsedJSON[0].UserFullName;
          _this2.userOrganizationName = parsedJSON[0].UserFullName; // this.rootPage = CustomerDashboardPage;
          // this.rootPage = 'customer-qr-scan';

          _this2.nav.navigateRoot('customer-qr-scan');

          _this2.splashScreen.hide();
        } else if (parsedJSON[0].userType == '5') {
          //collection center
          _this2.is_farmer = false;
          _this2.is_collector = false;
          _this2.is_dairy_farm = false;
          _this2.is_customer = false;
          _this2.is_delivery_boy = true;
          _this2.is_delivery_van = false;
          _this2.is_chilling_centre = false;
          _this2.is_oright = false;
          _this2.is_deliveryVan_outbound = false;
          _this2.is_inbound_transporter = false;
          _this2.userOrganizationName = parsedJSON[0].UserFullName;
          _this2.userLocalCode = '';
          _this2.userFullName = ''; // this.rootPage = 'delivery-boy-scan-bottle';

          _this2.nav.navigateRoot('delivery-boy-scan-bottle');

          _this2.splashScreen.hide();
        } else if (parsedJSON[0].userType == '6') {
          //collection center
          _this2.is_farmer = false;
          _this2.is_collector = false;
          _this2.is_dairy_farm = false;
          _this2.is_customer = false;
          _this2.is_delivery_boy = false;
          _this2.is_delivery_van = true;
          _this2.is_chilling_centre = false;
          _this2.is_oright = false;
          _this2.is_deliveryVan_outbound = false;
          _this2.is_inbound_transporter = false;
          _this2.userOrganizationName = parsedJSON[0].UserFullName;
          _this2.userLocalCode = '';
          _this2.userFullName = '';

          _this2.nav.navigateRoot('delivery-van');

          _this2.splashScreen.hide();
        } else if (parsedJSON[0].userType == '7') {
          //Chilling Centre
          _this2.is_farmer = false;
          _this2.is_collector = false;
          _this2.is_dairy_farm = false;
          _this2.is_customer = false;
          _this2.is_delivery_boy = false;
          _this2.is_delivery_van = false;
          _this2.is_chilling_centre = true;
          _this2.is_oright = false;
          _this2.is_deliveryVan_outbound = false;
          _this2.is_inbound_transporter = false;
          _this2.userOrganizationName = parsedJSON[0].ChillingCentre_Name; // this.rootPage = 'chilling-centre-dashboard';

          _this2.userLocalCode = parsedJSON[0].LocalChillingCentre_ID;
          _this2.userFullName = parsedJSON[0].UserFullName;

          _this2.nav.navigateRoot('chilling-centre-dashboard');

          _this2.splashScreen.hide();
        } else if (parsedJSON[0].userType == '8') {
          //Oright dashboard
          _this2.is_farmer = false;
          _this2.is_collector = false;
          _this2.is_dairy_farm = false;
          _this2.is_customer = false;
          _this2.is_delivery_boy = false;
          _this2.is_delivery_van = false;
          _this2.is_chilling_centre = false;
          _this2.is_oright = true;
          _this2.is_deliveryVan_outbound = false;
          _this2.is_inbound_transporter = false;
          _this2.userOrganizationName = parsedJSON[0].UserFullName;
          _this2.userLocalCode = '';
          _this2.userFullName = '';

          _this2.nav.navigateRoot('oright-dashboard');

          _this2.splashScreen.hide();
        } else if (parsedJSON[0].userType == '9') {
          //Delivery Van Outbound
          _this2.is_farmer = false;
          _this2.is_collector = false;
          _this2.is_dairy_farm = false;
          _this2.is_customer = false;
          _this2.is_delivery_boy = false;
          _this2.is_delivery_van = false;
          _this2.is_chilling_centre = false;
          _this2.is_oright = false;
          _this2.is_deliveryVan_outbound = true;
          _this2.is_inbound_transporter = false;
          _this2.userOrganizationName = parsedJSON[0].UserFullName;
          _this2.userLocalCode = '';
          _this2.userFullName = '';

          _this2.nav.navigateRoot('delivery-van-outbound-dashboard');

          _this2.splashScreen.hide();
        } else if (parsedJSON[0].userType == '10') {
          //Inbound Transporter
          _this2.is_farmer = false;
          _this2.is_collector = false;
          _this2.is_dairy_farm = false;
          _this2.is_customer = false;
          _this2.is_delivery_boy = false;
          _this2.is_delivery_van = false;
          _this2.is_chilling_centre = false;
          _this2.is_oright = false;
          _this2.is_deliveryVan_outbound = false;
          _this2.is_inbound_transporter = true;
          _this2.userOrganizationName = parsedJSON[0].UserFullName;
          _this2.userLocalCode = '';
          _this2.userFullName = '';

          _this2.nav.navigateRoot('inbound-transporter-dashboard');

          _this2.splashScreen.hide();
        }
      } else {
        _this2.nav.navigateRoot('login');

        _this2.splashScreen.hide(); // this.rootPage = 'login';

      }

      return true;
    })();
  }

  callNotificationsApi(lastrecord_id) {
    let url = this.BASE_URL + 'api/servicesAPI/getAllUserNotifications?userid=' + this.getFarmerUserID() + '&lastrecod_id=' + lastrecord_id + '&Key=' + this.key + '&con=' + this.DatabaseCode;
    this.http.get(url).subscribe(result => {
      //loading.dismiss();
      try {
        var parsedJSON = JSON.parse(JSON.stringify(result));

        if (parsedJSON.length > 0) {
          //##only execute if api json data length is more than 0
          for (let i = 0; i < parsedJSON.length; i++) {
            if (parsedJSON[i].Notifications_id != 0) {
              const NotificationApilist = {
                Notifications_id: parsedJSON[i].Notifications_id,
                Notification_Title: parsedJSON[i].Notification_Title,
                Notification_Body: parsedJSON[i].Notification_Body,
                Notification_Data: parsedJSON[i].Notification_Data,
                Notification_Date: parsedJSON[i].Notification_Date,
                Notification_Seen: parsedJSON[i].Notification_Seen
              };
              this.dbProvider.createAndInsertNotificationTable(NotificationApilist.Notifications_id, this.getFarmerUserID(), NotificationApilist.Notification_Title, NotificationApilist.Notification_Body, NotificationApilist.Notification_Data, NotificationApilist.Notification_Seen, NotificationApilist.Notification_Date);
            }
          }
        }

        try {// this.getFailedCC();
        } catch (e) {
          console.error(e); //    this.presentToast(this.toastCtrl, "No Data Found");
        }
      } catch (e) {
        console.error(e);
      }
    }, error => {
      //loading.dismiss();
      console.error('API Error', error); //    this.somethingWentWrongError(this.toastCtrl);
    });
  }

  InternetConnection() {
    // this.platform.ready().then(() => {
    this.networkService.initializeNetworkEvents(); //     this.networkService.getNetworkStatus().subscribe((data) => {
    //         "connection status InternetStatus: ",
    //         this.getItem("InternetStatus")
    //       );
    //       // if (this.networkService.status == 0) {
    //       //   this.uploadService.HitAllDcfOfflineRecords();
    //       //   this.uploadService.GetWeightRecords();
    //       //   this.uploadService.hitAllChemicalTestingOfflineRecords();
    //       //   this.uploadService.HitAllDeliveryBoyDeliveriesOfflineRecords();
    //       //   this.uploadService.HitAllOfflineRecords();
    //       //   this.uploadService.hitAllSourMilkTestingOfflineRecords();
    //       // }
    //       // this.toast.create ({
    //       //   message: data + ' ' +  this.networkService.getNetworkType(),
    //       //   duration: 3000,
    //       // }).present();
    //     });
    //  // });
  }

  onNotificationOpen() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_23__.Observable(observer => {
      window.FirebasePlugin.onMessageReceived(response => {
        observer.next(response);
      });
    });
  } // initPushNotification() {
  //   if (!this.platform.is('cordova')) {
  //     console.warn(
  //       'Push notifications not initialized. Cordova is not available - Run in physical device'
  //     );
  //     return;
  //   }
  //   const pushObject: PushObject = this.push.init(
  //     this.FirebasePushNotificationOptions
  //   );
  //   pushObject.on('registration').subscribe((data: any) => {
  //     this.saveItem('device_token', data.registrationId);
  //     //TODO - send device token to server
  //   });
  //   pushObject.on('notification').subscribe(async (data: any) => {
  //     //if user using app and push notification comes
  //     if (data.title == 'Update Available') {
  //       if (data.additionalData.foreground) {
  //         // if application open, show popup
  //         let confirmAlert = await this.alertCtrl.create({
  //           header: data.title,
  //           mode: 'ios',
  //           message: data.message,
  //           buttons: [
  //             {
  //               text: 'Ok',
  //               role: 'ok',
  //             },
  //             // , {
  //             //   text: 'View',
  //             //   handler: () => {
  //             //     //TODO: Your logic here
  //             //    // this.nav.push(DetailsPage, { message: data.message });
  //             //   }
  //             // }
  //           ],
  //         });
  //         confirmAlert.present();
  //       } else {
  //         let confirmAlert = await this.alertCtrl.create({
  //           header: data.title,
  //           mode: 'ios',
  //           message: data.message,
  //           buttons: [
  //             {
  //               text: 'Ok',
  //               role: 'ok',
  //             },
  //             // , {
  //             //   text: 'View',
  //             //   handler: () => {
  //             //     //TODO: Your logic here
  //             //    // this.nav.push(DetailsPage, { message: data.message });
  //             //   }
  //             // }
  //           ],
  //         });
  //         confirmAlert.present();
  //         //if user NOT using app and push notification comes
  //         //TODO: Your logic on click of push notification directly
  //         //this.nav.push(DetailsPage, { message: data.message });
  //     }
  //     if (data.additionalData.foreground) {
  //       if (this.platform.is('android')) {
  //         this.foreNotif(data.title, data.message);
  //       } else {
  //         if (data.additionalData.text != undefined) {
  //           //this.showtoast(data.additionalData.text);
  //           if ((data.additionalData.progressBar.enabled = false)) {
  //             this.presentModal(
  //               data.additionalData.title,
  //               data.additionalData.text
  //             );
  //           }
  //         } else {
  //           //this.showtoast(data.message);
  //           this.presentModal(data.title, data.message);
  //         }
  //       }
  //     }
  //   });
  //   pushObject
  //     .on('error')
  //     .subscribe((error) => console.error('Error with Push plugin' + error));
  // }


  initPushNotification() {
    var _this3 = this;

    console.error("Here 3");
    return new Promise((resolve, reject) => {
      if (!this.platform.is('cordova')) {
        console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
        resolve('');
      }

      let deviceDetails = {
        appVersion: this.getItem('AppVersion'),
        manufacturer: this.device.manufacturer,
        model: this.device.model,
        deviceVersion: this.device.version,
        platform: this.device.platform,
        serial: this.device.serial,
        uuid: this.device.uuid,
        cordova: this.device.cordova,
        isVirtual: this.device.isVirtual
      };
      this.saveItem('Device_details', JSON.stringify(deviceDetails));

      try {
        this.onNotificationOpen().subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            //if user using app and push notification comes
            if (data.title == 'Update Available') {
              if (!data.show_notification) {
                // if application open, show popup
                let confirmAlert = _this3.alertCtrl.create({
                  header: data.title,
                  mode: 'ios',
                  message: data.body,
                  buttons: [{
                    text: 'Ok',
                    role: 'ok'
                  }]
                });

                (yield confirmAlert).present();
              } else {
                let confirmAlert = yield _this3.alertCtrl.create({
                  header: data.title,
                  mode: 'ios',
                  message: data.body,
                  buttons: [{
                    text: 'Ok',
                    role: 'ok'
                  }]
                });
                confirmAlert.present();
              }
            }

            if (data.show_notification) {
              if (_this3.platform.is('android')) {
                _this3.foreNotif(data.title, data.body);
              } else {
                // if (data.body != undefined) {
                //   //this.showtoast(data.additionalData.text);
                //   // if ((data.additionalData.progressBar.enabled = false)) {
                //   //   this.presentModal(
                //   //     data.title,
                //   //     data.additionalData.text
                //   //   );
                //   // }
                // } else {
                _this3.presentModal(data.title, data.body); // }

              }
            }
          });

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      } catch (err) {
        console.error('this.onNotificationOpen() error', err);
      }

      console.error("Here 4");
      window.FirebasePlugin.getToken(token => {
        console.error(token, "recieved token");
        this.saveItem('device_token', token);
        resolve(token);
      }, error => {
        reject(error);
        console.error(error, "in this error");
      });
    });
  }

  showtoast(msg) {
    var _this4 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastCtrl.create({
        message: msg,
        duration: 20000,
        cssClass: 'toast_notification',
        position: 'top',
        buttons: [{
          text: 'Done',
          role: 'cancel',
          handler: () => {}
        }] // showCloseButton: true,
        // closeButtonText: " ",

      });
      toast.present();
    })();
  }

  presentModal(title, text) {
    var _this5 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.modelActive) {
        _this5.modal.dismiss();
      }

      _this5.modal = yield _this5.modalController.create({
        component: _components_pop_up_notification_pop_up_notification_pop_up_notification_component__WEBPACK_IMPORTED_MODULE_19__.PopUpNotificationComponent,
        componentProps: {
          title: title,
          text: text
        },
        cssClass: 'notification-card' // enterAnimation: "modal-scale-up-enter",
        // leaveAnimation: "modal-scale-up-leave",

      });

      _this5.modal.onDidDismiss(data => {
        _this5.modelActive = false;
      });

      _this5.modelActive = true;
      return yield _this5.modal.present();
    })();
  }

  getFarmLogoToShow() {
    try {
      if (this.Farm_Logo_Path != 'null') {
        this.base64Data = this.getItem('Farm_Logo').replace(/['"]+/g, '');
        this.converted_image = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.base64Data);
        this.show_farm_logo = true;
        this.changeDetectorRef.detectChanges();
      }
    } catch (e) {
      console.error('error function getFarmLogoToShow AppComponent Page:- ,', e);
    }
  }

  checkMenuOption() {
    try {
      if (this.getItem(this.IS_LOGIN) == '1') {
        this.service_id = [];
        this.Farm_Logo_Path = this.getFarm_Logo_Path();
        this.getFarmLogoToShow();
        let service_obj = this.getItem('Services');

        if (service_obj != null) {
          this.service_id = service_obj.map(a => a.val_id);
        } else {
          this.service_id = [];
        }

        let user_data = this.getItem(this.LOGIN_USER_DATA);
        let parsedJSON = user_data; // this.navCtrl.push(CollectorPage);

        if (parsedJSON[0].userType == '1') {
          //farmer
          this.is_farmer = true;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = parsedJSON[0].LocalFarmer_ID;
          this.userFullName = parsedJSON[0].UserFullName;
        } else if (parsedJSON[0].userType == '2') {
          //dairy farm
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = true;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].Farm_Name;
          this.userLocalCode = '';
          this.userFullName = parsedJSON[0].UserFullName;
        } else if (parsedJSON[0].userType == '3') {
          //collection center
          this.is_farmer = false;
          this.is_collector = true;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].CollectionCentre_Name;
          this.userLocalCode = parsedJSON[0].LocalChillingCentre_ID === '0' ? parsedJSON[0].LocalCollectionCentre_ID : parsedJSON[0].LocalChillingCentre_ID + parsedJSON[0].LocalCollectionCentre_ID;
          this.userFullName = parsedJSON[0].UserFullName ? parsedJSON[0].UserFullName.substring(0, 28) : '';
          this.userFullName = parsedJSON[0].UserFullName.length > 28 ? `${this.userFullName}...` : this.userFullName;
        } else if (parsedJSON[0].userType == '4') {
          //customer
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = true;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = parsedJSON[0].UserFullName;
        } else if (parsedJSON[0].userType == '5') {
          //delivery boy
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = true;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        } else if (parsedJSON[0].userType == '6') {
          //delivery van
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = true;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        } else if (parsedJSON[0].userType == '7') {
          //chilling center
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = true;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].ChillingCentre_Name;
          this.userLocalCode = parsedJSON[0].LocalChillingCentre_ID;
          this.userFullName = parsedJSON[0].UserFullName;
        } else if (parsedJSON[0].userType == '8') {
          //chilling center
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = true;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        } else if (parsedJSON[0].userType == '9') {
          //Delivery Van Outbound
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = true;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        } else if (parsedJSON[0].userType == '10') {
          //Inbound Transporter
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = true;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        }

        if (this.getItem('menuOption') == 'farmer') {
          //farmer
          this.is_farmer = true;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = parsedJSON[0].LocalFarmer_ID;
          this.userFullName = parsedJSON[0].UserFullName;
        } else if (this.getItem('menuOption') == 'dairy farm') {
          //dairy farm
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = true;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].Farm_Name;
          this.userLocalCode = '';
          this.userFullName = parsedJSON[0].UserFullName;
        } else if (this.getItem('menuOption') == 'collection center') {
          //collection center
          this.is_farmer = false;
          this.is_collector = true;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].CollectionCentre_Name;
          this.userLocalCode = parsedJSON[0].LocalChillingCentre_ID === '0' ? parsedJSON[0].LocalCollectionCentre_ID : parsedJSON[0].LocalChillingCentre_ID + parsedJSON[0].LocalCollectionCentre_ID;
          this.userFullName = parsedJSON[0].UserFullName ? parsedJSON[0].UserFullName.substring(0, 28) : '';
          this.userFullName = parsedJSON[0].UserFullName.length > 28 ? `${this.userFullName}...` : this.userFullName;
        } else if (this.getItem('menuOption') == 'customer') {
          //customer
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = true;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = parsedJSON[0].UserFullName;
        } else if (this.getItem('menuOption') == 'delivery boy') {
          //delivery boy
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = true;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        } else if (this.getItem('menuOption') == 'delivery van') {
          //delivery van
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = true;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        } else if (this.getItem('menuOption') == 'chilling center') {
          //chilling center
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = true;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].ChillingCentre_Name;
          this.userLocalCode = parsedJSON[0].LocalChillingCentre_ID;
          this.userFullName = parsedJSON[0].UserFullName;
        } else if (this.getItem('menuOption') == 'oright') {
          //oright
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = true;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        } else if (this.getItem('menuOption') == 'DeliveryVan Outbound') {
          //oright
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = true;
          this.is_inbound_transporter = false;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        } else if (this.getItem('menuOption') == 'Inbound Transporter') {
          //Inbound Transporter
          this.is_farmer = false;
          this.is_collector = false;
          this.is_dairy_farm = false;
          this.is_customer = false;
          this.is_delivery_boy = false;
          this.is_delivery_van = false;
          this.is_chilling_centre = false;
          this.is_oright = false;
          this.is_deliveryVan_outbound = false;
          this.is_inbound_transporter = true;
          this.userOrganizationName = parsedJSON[0].UserFullName;
          this.userLocalCode = '';
          this.userFullName = '';
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  CheckUserLoginStatus() {
    var _this6 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let self_ = _this6;
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          let rs = true;
          var deviceToken = encodeURIComponent(self_.getItem('device_token'));
          let url = self_.BASE_URL + 'api/servicesApi/CheckUserLoginStatus?userid=' + self_.getFarmerUserID() + '&deviceToken=' + deviceToken + '&Key=' + self_.key + '&con=' + self_.DatabaseCode;
          self_.http.get(url).subscribe(result => {
            try {
              if (result == false) {
                self_.events.publish('logout_done', '');
                rs = false;
              }
            } catch (e) {
              console.error(e);
            }
          }, error => {
            console.error('API Error', error);
          });
          resolve(rs);
        });

        return function (_x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }

  checkAppVersion() {
    let appName = '';
    let appVersion = '';

    try {
      this.appVersion.getAppName().then(name => {
        appName = name;
        this.saveItem('appName', name);
        let url = this.BASE_URL + 'api/ApiCodeApi/getLatestApplicationVersion?applicationName=' + appName + '&Key=' + this.key + '&con=' + this.DatabaseCode;
        this.http.get(url).subscribe(result => {
          try {
            var parsedJSON = JSON.parse(JSON.stringify(result));

            if (parsedJSON.length > 0) {
              const mobileAppDetails = {
                AppName: parsedJSON[0].AppName,
                VersionCode: parsedJSON[0].VersionCode,
                VersionNumber: parsedJSON[0].VersionNumber,
                PackageName: parsedJSON[0].PackageName,
                Link: parsedJSON[0].Link
              };
              this.appVersion.getVersionNumber().then(version => {
                appVersion = version;

                if (mobileAppDetails.AppName == appName && mobileAppDetails.VersionNumber != appVersion) {
                  this.alertAppUpdate();
                }
              }, error => {
                console.error('appVersion error ', error);
              });
            }
          } catch (e) {
            console.error(e);
          }
        }, error => {
          console.error('API Error', error);
        });
      }, error => {
        console.error('appName error ', error);
      }).catch(er => {
        console.error('er', er);
      });
    } catch (err) {
      console.error('error in app component method checkAppVersion :-', this.checkAppVersion);
    }
  }

  alertAppUpdate() {
    this.updateAlert = this.alertCtrl.create({
      header: 'Update Available',
      mode: 'ios',
      subHeader: 'New Update is available, Please Update the App.',
      buttons: [{
        text: 'Update',
        handler: () => {
          this.appVersion.getPackageName().then(packageName => {
            //this.market.open("com.oright.app");
            this.market.open(packageName);
            navigator['app'].exitApp();
          }, error => {
            console.error('pakagename error ', error);
          }); //this.openNativeSettings.open("store");
        }
      }],
      backdropDismiss: false
    });
    this.updateAlert.present();
  }

  menuClicked(data) {
    this.homeMessage.sendMessage(data);
  }

  callOrightPrefernceApi(json) {
    var Organization_id = '0';

    if (json.userType == '3') {
      Organization_id = json.CollectionCentre_ID;
    } else if (json.userType == '7') {
      Organization_id = json.ChillingCentre_ID;
    } else if (json.userType == '2') {
      Organization_id = json.Farm_ID;
    }

    let details = [{
      Organization_id: Organization_id,
      Usertype_id: json.userType,
      ParameterKey: '0'
    }];
    let url = this.BASE_URL + 'api/servicesAPI/getOrightPreferences?getOrightPreferences=' + JSON.stringify(details) + '&Key=' + this.key + '&con=' + this.DatabaseCode;
    this.http.get(url).subscribe(result => {
      try {
        var parsedJSON = JSON.parse(JSON.stringify(result));

        if (parsedJSON.length > 0) {
          if (parsedJSON[0].Organization_id != 0 && parsedJSON[0].Organization_id != null) {
            //##only execute if api json data length is more than 0
            for (let i = 0; i < parsedJSON.length; i++) {
              const OrightPreferences = {
                Organization_id: parsedJSON[i].Organization_id,
                OrightPreference_id: parsedJSON[i].OrightPreference_id,
                ParameterKey: parsedJSON[i].ParameterKey,
                ParameterValue: parsedJSON[i].ParameterValue,
                Usertype_id: parsedJSON[i].Usertype_id,
                UserEditableStatus: parsedJSON[i].UserEditableStatus,
                IsBoolean: parsedJSON[i].IsBoolean,
                ShowToUserStatus: parsedJSON[i].ShowToUserStatus,
                ParameterName: parsedJSON[i].ParameterName
              };
              this.OrightPreferences.push(OrightPreferences);
            }

            this.saveItem('OrightPreferences', JSON.stringify(this.OrightPreferences));
          }
        }
      } catch (e) {
        console.error(e);
      }
    }, error => {
      console.error('API Error', error);
    });
  }

  callDairyFarmConfigurationApi(userid) {
    var url = this.BASE_URL + 'api/DairyFarmApi/getAllDairyFarmConfiguration?UserId=' + userid + '&Key=' + this.key + '&con=' + this.DatabaseCode;
    let postData = new FormData();
    this.http.get(url).subscribe(result => {
      try {
        var parsedJSON = JSON.parse(JSON.stringify(result));

        if (parsedJSON.length > 0) {
          for (let i = 0; i < parsedJSON.length; i++) {
            const configuration = {
              UserId: parsedJSON[i].UserId,
              FarmConfiguration_ID: parsedJSON[i].FarmConfiguration_ID,
              Farm_Name: parsedJSON[i].Farm_Name,
              Parameter: parsedJSON[i].Parameter,
              Value: parsedJSON[i].Value
            };
            this.DairyFarmConfiguration.push(configuration);
            this.saveItem('DairyFarmConfiguration', JSON.stringify(this.DairyFarmConfiguration));
          }
        }
      } catch (err) {
        console.error(err);
      }
    });
  }

  callDairyLogoPathForCoobrandingApi(dairyId) {
    var url = this.BASE_URL + 'api/DairyFarmApi/getDairyLogoPathForCoobranding?DairyID=' + dairyId + '&Key=' + this.key + '&con=' + this.DatabaseCode;
    let postData = new FormData();
    this.http.get(url).subscribe(result => {
      try {
        var parsedJSON = JSON.parse(JSON.stringify(result));

        if (parsedJSON.length > 0 && parsedJSON[0].DairyFarm_Id != '0' && parsedJSON[0].Farm_Logo_Path != 'null') {
          this.dairyLogoPathForCoobranding = parsedJSON;
          this.saveItem('Farm_Logo', JSON.stringify(this.dairyLogoPathForCoobranding[0].Farm_Logo_base64));
          this.saveItem('Farm_Logo_Path', JSON.stringify(this.dairyLogoPathForCoobranding[0].Farm_Logo_Path));
        } else {
          this.saveItem('Farm_Logo_Path', 'null');
          this.saveItem('Farm_Logo', 'null');
        }
      } catch (err) {}
    });
  }

  GetServices(parsedJSON, uid) {
    let array = [{
      UesrID: uid
    }];
    var url = this.BASE_URL + 'api/dashboardAPI/GetServices?UID=' + JSON.stringify(array) + '&Key=' + this.key + '&con=' + this.DatabaseCode;
    this.http.get(url).subscribe(result => {
      try {
        this.saveItem('Services', JSON.stringify(result));
      } catch (err) {
        console.error(err);
      }
    }, error => {
      console.error('API Error', error);
    });
  }

  toggleEdpulist() {
    this.EdpuToggle = !this.EdpuToggle;

    if (this.EdpuToggle == true) {
      this.EdpuDegreeStyle = 'rotate(0deg)';
    } else {
      this.EdpuDegreeStyle = 'rotate(90deg)';
    }
  }

  toggleMasterSection() {
    this.showMasterSectionInMenu = !this.showMasterSectionInMenu;

    if (this.showMasterSectionInMenu) {
      this.masterSectionInMenuDegreeStyle = 'rotate(90deg)';
    } else {
      this.masterSectionInMenuDegreeStyle = 'rotate(0deg)';
    }
  }

  toggleSynopsislist() {
    this.SynopsisToggle = !this.SynopsisToggle;

    if (this.SynopsisToggle == true) {
      this.SynopsisDegreeStyle = 'rotate(0deg)';
    } else {
      this.EdpuDegreeStyle = 'rotate(90deg)';
    }
  }

  toggleReportlist() {
    this.ReportToggle = !this.ReportToggle;

    if (this.ReportToggle == true) {
      this.ReportDegreeStyle = 'rotate(0deg)';
    } else {
      this.ReportDegreeStyle = 'rotate(90deg)';
    }
  }

  toggleTransporterlist() {
    this.TransporterToggle = !this.TransporterToggle;

    if (this.ReportToggle == true) {
      this.TransporterDegreeStyle = 'rotate(0deg)';
    } else {
      this.TransporterDegreeStyle = 'rotate(90deg)';
    }
  }

  toggleLanguageList() {
    this.LangToggle = !this.LangToggle;

    if (this.LangToggle == true) {
      this.LangDegreeStyle = 'rotate(0deg)';
    } else {
      this.LangDegreeStyle = 'rotate(90deg)';
    }
  }

  toggleOrderMgmtList() {
    this.OrderToggle = !this.OrderToggle;

    if (this.OrderToggle == true) {
      this.OrderDegreeStyle = 'rotate(0deg)';
    } else {
      this.OrderDegreeStyle = 'rotate(90deg)';
    }
  }

  showToggleMenu(...id) {
    let flag = false;

    for (let i of id) {
      if (this.service_id.indexOf(i) != -1) {
        flag = true;
      }
    }

    return flag;
  }

  goToReportEngine() {
    this.route.navigateByUrl('customreports');
  }

  reportSubMenu() {
    if (this.submenuVisible) {
      this.submenuVisible = false;
    } else {
      this.submenuVisible = true;
    }
  }

  soundLoad() {
    try {
      this.nativeAudio.preloadSimple('ios', 'assets/audio/ios_notofication.mp3').then(success => {}, error => {
        console.error(error);
      });
      this.nativeAudio.preloadSimple('android', 'assets/audio/android_notifiication.mp3').then(success => {}, error => {
        console.error(error);
      });
      this.nativeAudio.preloadSimple('Silence', 'assets/audio/Silence.mp3').then(success => {}, error => {
        console.error(error);
      });
      this.nativeAudio.preloadSimple('beep', 'assets/audio/beep.mp3').then(success => {}, error => {
        console.error(error);
      });
    } catch (er) {
      console.error('error in app component method soundLoad', er);
    }
  }

  foreNotif(title, msg) {
    this.localNotifications.schedule({
      id: 1,
      title: title,
      text: msg,
      data: {
        secret: 'secret'
      },
      foreground: true
    });
  }

};

AppComponent.ctorParameters = () => [{
  type: _app_services_sql_sql_service__WEBPACK_IMPORTED_MODULE_9__.SqlService
}, {
  type: _app_services_start_uploading_serivice_start_uploading_serivice_service__WEBPACK_IMPORTED_MODULE_10__.StartUploadingSeriviceService
}, {
  type: _app_services_dcf_data_transfer_over_local_network_dcf_data_transfer_over_local_network_service__WEBPACK_IMPORTED_MODULE_17__.DcfDataTransferOverLocalNetworkService
}, {
  type: _app_services_edpu_server_edpu_server_service__WEBPACK_IMPORTED_MODULE_16__.EdpuServerService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.DomSanitizer
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ChangeDetectorRef
}, {
  type: _app_services_network_service_network_service_service__WEBPACK_IMPORTED_MODULE_8__.NetworkServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ToastController
}, {
  type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__.LocalNotifications
}, {
  type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_13__.Market
}, {
  type: _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_12__.OpenNativeSettings
}, {
  type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__.AppVersion
}, {
  type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_7__.Push
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.Platform
}, {
  type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
}, {
  type: _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_20__.Device
}, {
  type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen
}, {
  type: _app_services_home_message_home_message_service__WEBPACK_IMPORTED_MODULE_6__.HomeMessageService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClient
}, {
  type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__.NativeAudio
}, {
  type: _services_events_events_service__WEBPACK_IMPORTED_MODULE_18__.EventsService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_28__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.NavController
}, {
  type: _services_token_token_service__WEBPACK_IMPORTED_MODULE_21__.TokenService
}, {
  type: _services_accessauthorization_accessauthorization_service__WEBPACK_IMPORTED_MODULE_22__.AccessauthorizationService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ 16386);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ 2991);
/* harmony import */ var _ionic_native_web_server_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/web-server/ngx */ 21809);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ 44719);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 82820);
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ 75821);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17265);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ 21512);
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/market/ngx */ 68538);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 55846);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/sms/ngx */ 97864);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 96772);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/push/ngx */ 18982);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 40287);
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ 9128);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/insomnia/ngx */ 87079);
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ 44801);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 59076);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 23081);
/* harmony import */ var _components_pop_up_notification_pop_up_notification_pop_up_notification_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/pop-up-notification/pop-up-notification/pop-up-notification.component */ 98025);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 49056);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 71695);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 74701);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_accessauthorization_accessauthorization_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/accessauthorization/accessauthorization.service */ 67085);
/* harmony import */ var _pipes_CustomKeyValue_customkeyvalue_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/CustomKeyValue/customkeyvalue.pipe */ 4904);
/* harmony import */ var _class_datatree_datatree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./class/datatree/datatree */ 50305);
/* harmony import */ var _pipes_filter_by_property_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipes/filter-by-property.pipe */ 9872);
/* harmony import */ var _pipes_change_text_data_type_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipes/change-text-data-type.pipe */ 91701);
/* harmony import */ var _pipes_hide_row_by_search_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/hide-row-by-search.pipe */ 50169);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _components_report_column_selector_report_column_selector_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/report-column-selector/report-column-selector.module */ 23775);
/* harmony import */ var powerbi_client_angular__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! powerbi-client-angular */ 45645);
/* harmony import */ var _components_report_dashboard_power_bi_report_dashboard_power_bi_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/report-dashboard-power-bi/report-dashboard-power-bi.module */ 64059);



















































let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_41__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_42__.NgModule)({
        declarations: [_components_pop_up_notification_pop_up_notification_pop_up_notification_component__WEBPACK_IMPORTED_MODULE_29__.PopUpNotificationComponent, _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_43__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_44__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_45__.HttpClientModule,
            _pipes_CustomKeyValue_customkeyvalue_pipe__WEBPACK_IMPORTED_MODULE_34__.MyKeyvaluePipe,
            _pipes_filter_by_property_pipe__WEBPACK_IMPORTED_MODULE_36__.FilterByPropertyPipe,
            _pipes_change_text_data_type_pipe__WEBPACK_IMPORTED_MODULE_37__.ChangeTextDataTypePipe,
            _pipes_hide_row_by_search_pipe__WEBPACK_IMPORTED_MODULE_38__.HideRowBySearchPipe,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__.BrowserAnimationsModule,
            _components_report_column_selector_report_column_selector_module__WEBPACK_IMPORTED_MODULE_39__.ReportColumnSelectorModule,
            powerbi_client_angular__WEBPACK_IMPORTED_MODULE_47__.PowerBIEmbedModule,
            _components_report_dashboard_power_bi_report_dashboard_power_bi_module__WEBPACK_IMPORTED_MODULE_40__.ReportDashboardPowerBIModule,
        ],
        providers: [
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__.SocialSharing,
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__.SQLite,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_20__.SplashScreen,
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_28__.FileOpener,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__.HTTP,
            _class_datatree_datatree__WEBPACK_IMPORTED_MODULE_35__.Datatree,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_48__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_44__.IonicRouteStrategy,
            },
            _ionic_native_web_server_ngx__WEBPACK_IMPORTED_MODULE_6__.WebServer,
            _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_32__.Device,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__.Geolocation,
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_30__.Keyboard,
            _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_25__.Insomnia,
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__.AppVersion,
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_27__.Vibration,
            _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_13__.OpenNativeSettings,
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_23__.NativeStorage,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_24__.NativeGeocoder,
            _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__.BluetoothSerial,
            // BarcodeScanner,
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeAudio,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_45__.HttpClient,
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__.ScreenOrientation,
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_5__.LaunchNavigator,
            _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_14__.Market,
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_15__.LocationAccuracy,
            _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_21__.Push,
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__.SMS,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_16__.AndroidPermissions,
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__.LocalNotifications,
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__.Network,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File,
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_26__.QRScanner,
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_31__.FirebaseX,
            _angular_common__WEBPACK_IMPORTED_MODULE_49__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_49__.KeyValuePipe, _pipes_CustomKeyValue_customkeyvalue_pipe__WEBPACK_IMPORTED_MODULE_34__.MyKeyvaluePipe,
            _services_accessauthorization_accessauthorization_service__WEBPACK_IMPORTED_MODULE_33__.AccessauthorizationService,
            powerbi_client_angular__WEBPACK_IMPORTED_MODULE_47__.PowerBIEmbedModule
            //    {
            //   provide:HTTP_INTERCEPTORS,useClass: InterceptorService,multi:true
            // },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_42__.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);



/***/ }),

/***/ 50305:
/*!********************************************!*\
  !*** ./src/app/class/datatree/datatree.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Datatree": () => (/* binding */ Datatree)
/* harmony export */ });
class Datatree {
}


/***/ }),

/***/ 98025:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/pop-up-notification/pop-up-notification/pop-up-notification.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopUpNotificationComponent": () => (/* binding */ PopUpNotificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pop_up_notification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up-notification.component.html?ngResource */ 80838);
/* harmony import */ var _pop_up_notification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-up-notification.component.scss?ngResource */ 10674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);
/* harmony import */ var src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/BaseComp */ 88075);
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ 16386);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 59076);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










let PopUpNotificationComponent = class PopUpNotificationComponent extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__.BaseComp {
    constructor(appVersion, navCtrl, nativeAudio, viewCtrl, platform, vibration, route) {
        super();
        this.appVersion = appVersion;
        this.navCtrl = navCtrl;
        this.nativeAudio = nativeAudio;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.vibration = vibration;
        this.route = route;
        this.title = '';
        this.text = '';
    }
    initPage() {
        console.log('ionViewDidLoad NotificationPopupPage');
        if (this.platform.is('android')) {
            this.playAndrooidSound();
        }
        else {
            this.playIosSound();
        }
        this.vibration.vibrate(1000);
        this.route.queryParams.subscribe((params) => {
            console.log('params constructor: ', params);
            if (params && params.title) {
                this.title = JSON.parse(params.title);
                console.log('title constructor: ' + this.title);
            }
            if (params && params.text) {
                this.text = JSON.parse(params.text);
                console.log('text constructor: ' + this.text);
            }
        });
        console.log('text', this.text);
        console.log('title', this.title);
        setTimeout(() => {
            this.dismiss();
        }, 4000);
    }
    dismiss() {
        this.viewCtrl.dismiss('dismissed');
    }
    ionViewWillEnter() {
        this.initPage();
        this.appname = this.getItem('appName');
        // this.soundLoad() ;
    }
    // soundLoad(){
    //   this.nativeAudio.preloadSimple('ios', 'assets/audio/ios_notofication.mp3').then((success)=>{
    //     console.log("success") ;
    //   },(error)=>{
    //     console.log(error) ;
    //   }) ;
    //   this.nativeAudio.preloadSimple('android', 'assets/audio/android_notifiication.mp3').then((success)=>{
    //     console.log("success") ;
    //   },(error)=>{
    //     console.log(error) ;
    //   }) ;
    // }
    playIosSound() {
        try {
            this.nativeAudio.play('ios').then((success) => {
                console.log('success playing');
            }, (error) => {
                console.log(error);
            });
        }
        catch (e) {
            console.log('playSound error', e);
        }
    }
    playAndrooidSound() {
        try {
            this.nativeAudio.play('android').then((success) => {
                console.log('success playing');
            }, (error) => {
                console.log(error);
            });
        }
        catch (e) {
            console.log('playSound error', e);
        }
    }
    ngOnInit() { }
};
PopUpNotificationComponent.ctorParameters = () => [
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__.AppVersion },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeAudio },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__.Vibration },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
PopUpNotificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-pop-up-notification',
        template: _pop_up_notification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pop_up_notification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopUpNotificationComponent);



/***/ }),

/***/ 83979:
/*!*******************************************************************!*\
  !*** ./src/app/components/quickinsight/quickinsight.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickinsightComponent": () => (/* binding */ QuickinsightComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _quickinsight_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickinsight.component.html?ngResource */ 78315);
/* harmony import */ var _quickinsight_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickinsight.component.scss?ngResource */ 62161);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);







let QuickinsightComponent = class QuickinsightComponent {
    constructor(http, navCtrl, sanitizer) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.embedURL = 'https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/098951070882/dashboards/a55af299-10df-425e-a1fd-d850683f8e14?directory_alias=arsh';
        this.unsafereportUrl = 'https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/098951070882/dashboards/a55af299-10df-425e-a1fd-d850683f8e14?directory_alias=arsh';
        this.reportUrl = '';
    }
    ngOnInit() {
        // Call the QuickSightEmbedService to embed the dashboard
        const embedUrl = 'https://us-east-1.quicksight.aws.amazon.com/sn/accounts/098951070882/dashboards/a55af299-10df-425e-a1fd-d850683f8e14?directory_alias=arsh'; // Replace with your embed URL
        const containerId = 'dashboardContainer'; // Replace with the ID of the container element in your template
        // this.embedDashboard(embedUrl, containerId);
        this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafereportUrl);
    }
    embedDashboard(embedUrl, containerId) {
        const options = {
            url: embedUrl,
            container: document.getElementById(containerId),
            scrolling: 'no',
            height: '100%',
            width: '100%'
        };
        // const dashboard = QuickSightEmbedding.embedDashboard(options);
        // dashboard.on('error', (payload: any) => {
        //   console.error('Embedding error:', payload);
        // });
    }
    backPage() {
        this.navCtrl.pop();
    }
};
QuickinsightComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer }
];
QuickinsightComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-quickinsight',
        template: _quickinsight_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_quickinsight_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuickinsightComponent);



/***/ }),

/***/ 87345:
/*!***************************************************************************************!*\
  !*** ./src/app/components/report-column-selector/report-column-selector.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportColumnSelectorComponent": () => (/* binding */ ReportColumnSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _report_column_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-column-selector.component.html?ngResource */ 22332);
/* harmony import */ var _report_column_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-column-selector.component.scss?ngResource */ 60081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/report/report.service */ 45945);






let ReportColumnSelectorComponent = class ReportColumnSelectorComponent {
    constructor(modalCtrl, reportService) {
        this.modalCtrl = modalCtrl;
        this.reportService = reportService;
        this.counterForSequence = 0;
        this.listForHeaderSelection = [];
        this.dataToReturnForHeaderSelection = [];
        this.sequenceOfSelection = [];
    }
    ngOnInit() {
        this.reportService.getAllColumnsForReport(this.dataToTakeAsInput).subscribe((res) => {
            res.forEach((header) => {
                header['selectionSeq'] = -1;
                this.listForHeaderSelection.push(header);
            });
        });
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
    confirm() {
        let tempDataArray = [];
        Array.from(document.getElementsByTagName('ion-checkbox')).forEach((singleCheckBox) => {
            let tempCheckBox = singleCheckBox;
            if (tempCheckBox.checked) {
                tempDataArray.push({ value: tempCheckBox.value, serial: tempCheckBox.id });
            }
        });
        tempDataArray = tempDataArray.sort((a, b) => Number.parseInt(b.serial) - Number.parseInt(a.serial));
        tempDataArray.forEach((object) => {
            this.dataToReturnForHeaderSelection.push(object.value);
        });
        //this.dataToReturnForHeaderSelection=this.dataToReturnForHeaderSelection.reverse();
        return this.modalCtrl.dismiss(this.dataToReturnForHeaderSelection, 'confirm');
    }
    change(event) {
        let selectedCheckBoxes = [];
        Array.from(document.getElementsByTagName('ion-checkbox')).forEach((singleCheckBox) => {
            let tempCheckBox = singleCheckBox;
            if (tempCheckBox.checked) {
                selectedCheckBoxes.push(tempCheckBox);
            }
        });
        if (event.detail.checked == true) {
            let changedItem = this.listForHeaderSelection.find(x => x.AID == event.target.value);
            changedItem.selectionSeq = selectedCheckBoxes.length;
        }
        else {
            let changedItem = this.listForHeaderSelection.find(x => x.AID == event.target.value);
            let tempItemSFromHeaderList = [];
            tempItemSFromHeaderList = this.listForHeaderSelection.filter(x => x.selectionSeq > changedItem.selectionSeq);
            tempItemSFromHeaderList.forEach((item) => {
                item.selectionSeq -= 1;
            });
            changedItem.selectionSeq = -1;
        }
    }
};
ReportColumnSelectorComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__.ReportService }
];
ReportColumnSelectorComponent.propDecorators = {
    dataToTakeAsInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ReportColumnSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-report-column-selector',
        template: _report_column_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_report_column_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportColumnSelectorComponent);



/***/ }),

/***/ 23775:
/*!************************************************************************************!*\
  !*** ./src/app/components/report-column-selector/report-column-selector.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportColumnSelectorModule": () => (/* binding */ ReportColumnSelectorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _report_column_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-column-selector.component */ 87345);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ReportColumnSelectorModule = class ReportColumnSelectorModule {
};
ReportColumnSelectorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_report_column_selector_component__WEBPACK_IMPORTED_MODULE_0__.ReportColumnSelectorComponent],
        exports: [_report_column_selector_component__WEBPACK_IMPORTED_MODULE_0__.ReportColumnSelectorComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule],
    })
], ReportColumnSelectorModule);



/***/ }),

/***/ 51918:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/report-dashboard-power-bi/report-dashboard-power-bi.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDashboardPowerBIComponent": () => (/* binding */ ReportDashboardPowerBIComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _report_dashboard_power_bi_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-dashboard-power-bi.component.html?ngResource */ 40895);
/* harmony import */ var _report_dashboard_power_bi_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-dashboard-power-bi.component.scss?ngResource */ 92360);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var powerbi_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! powerbi-client */ 29940);
/* harmony import */ var powerbi_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(powerbi_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var powerbi_client_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! powerbi-client-angular */ 45645);









let ReportDashboardPowerBIComponent = class ReportDashboardPowerBIComponent {
    constructor(navCtrl, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.sanitizer = sanitizer;
        this.reportConfig = {
            type: 'report',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=0c5b7987-f17b-46a2-ad51-c27dd00a43eb',
            tokenType: powerbi_client__WEBPACK_IMPORTED_MODULE_2__.models.TokenType.Embed,
            accessToken: undefined,
            settings: undefined,
        };
        this.phasedEmbeddingFlag = true;
        this.reportClass = 'report-container';
        this.eventHandlersMap = new Map([
            ['loaded', () => {
                    const report = this.reportObj.getReport();
                    report.setComponentTitle('Embedded report');
                    console.log('Report has loaded');
                },
            ],
            ['rendered', () => console.log('Report has rendered')],
            ['error', (event) => {
                    if (event) {
                        console.error(event.detail);
                    }
                },
            ],
            ['visualClicked', () => console.log('visual clicked')],
            ['pageChanged', (event) => console.log(event)],
        ]);
    }
    ngOnInit() {
        this.embedPowerBIReport();
    }
    sanitize(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    ngAfterViewInit() {
        console.log(this.reportObj, "reportobj");
    }
    backPage() {
        this.navCtrl.pop();
    }
    embedPowerBIReport() {
        /*-----------------------------------------------------------------------------------+
        |    Don't change these values here: access token, embed URL and report ID.          |
        |    To make changes to these values:                                                |
        |    1. Save any other code changes to a text editor, as these will be lost.         |
        |    2. Select 'Start over' from the ribbon.                                         |
        |    3. Select a report or use an embed token.                                       |
        +-----------------------------------------------------------------------------------*/
        // Read embed application token
        let accessToken = "arsh";
        // Read embed URL
        let embedUrl = "https://app.powerbi.com/reportEmbed?reportId=0c5b7987-f17b-46a2-ad51-c27dd00a43eb";
        // Read report Id
        let embedReportId = "0c5b7987-f17b-46a2-ad51-c27dd00a43eb";
        // Read embed type from radio
        let tokenType = "1";
        // We give All permissions to demonstrate switching between View and Edit mode and saving report.
        let permissions = powerbi_client__WEBPACK_IMPORTED_MODULE_2__.models.Permissions.All;
        // Create the embed configuration object for the report
        // For more information see https://go.microsoft.com/fwlink/?linkid=2153590
        let config = {
            type: 'report',
            tokenType: tokenType == '0' ? powerbi_client__WEBPACK_IMPORTED_MODULE_2__.models.TokenType.Aad : powerbi_client__WEBPACK_IMPORTED_MODULE_2__.models.TokenType.Embed,
            accessToken: accessToken,
            embedUrl: embedUrl,
            id: embedReportId,
            permissions: permissions,
            settings: {
                panes: {
                    filters: {
                        visible: true
                    },
                    pageNavigation: {
                        visible: true
                    }
                }
            }
        };
        ;
        // Get a reference to the embedded report HTML element
        //let embedContainer = $('#embedContainer')[0];
        let embedContainer = document.getElementById('embedContainer');
        console.log(embedContainer, "embedContainer");
        // Embed the report.
        let report = powerbi.embed(embedContainer, config);
        // Embed the report and display it within the div container.
        report = powerbi.embed(embedContainer, config);
        // report.off removes all event handlers for a specific event
        report.off("loaded");
        // report.on will add an event handler
        report.on("loaded", function () {
            loadedResolve();
            report.off("loaded");
        });
        // report.off removes all event handlers for a specific event
        report.off("error");
        report.on("error", function (event) {
            console.log(event.detail);
        });
        // report.off removes all event handlers for a specific event
        report.off("rendered");
        // report.on will add an event handler
        report.on("rendered", function () {
            renderedResolve();
            report.off("rendered");
        });
    }
};
ReportDashboardPowerBIComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer }
];
ReportDashboardPowerBIComponent.propDecorators = {
    reportObj: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [powerbi_client_angular__WEBPACK_IMPORTED_MODULE_7__.PowerBIReportEmbedComponent,] }]
};
ReportDashboardPowerBIComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-report-dashboard-power-bi',
        template: _report_dashboard_power_bi_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_report_dashboard_power_bi_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportDashboardPowerBIComponent);

function loadedResolve() {
    throw new Error('Function not implemented.');
}
function renderedResolve() {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 64059:
/*!******************************************************************************************!*\
  !*** ./src/app/components/report-dashboard-power-bi/report-dashboard-power-bi.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDashboardPowerBIModule": () => (/* binding */ ReportDashboardPowerBIModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _report_dashboard_power_bi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-dashboard-power-bi.component */ 51918);
/* harmony import */ var powerbi_client_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! powerbi-client-angular */ 45645);






let ReportDashboardPowerBIModule = class ReportDashboardPowerBIModule {
};
ReportDashboardPowerBIModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_report_dashboard_power_bi_component__WEBPACK_IMPORTED_MODULE_0__.ReportDashboardPowerBIComponent],
        exports: [_report_dashboard_power_bi_component__WEBPACK_IMPORTED_MODULE_0__.ReportDashboardPowerBIComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, powerbi_client_angular__WEBPACK_IMPORTED_MODULE_5__.PowerBIEmbedModule],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA]
    })
], ReportDashboardPowerBIModule);



/***/ }),

/***/ 37374:
/*!***************************************************************************!*\
  !*** ./src/app/pages/multiple-select-modal/multiple-select-modal.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleSelectModalPage": () => (/* binding */ MultipleSelectModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _multiple_select_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-select-modal.page.html?ngResource */ 83741);
/* harmony import */ var _multiple_select_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-select-modal.page.scss?ngResource */ 79687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let MultipleSelectModalPage = class MultipleSelectModalPage {
    constructor(navCtrl, viewCtrl, route) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.route = route;
        this.searchPlaceholder = 'search';
        this.searchedText = '';
        this.arrayList = [];
        this.orignalArrayList = [];
        this.shownArrayList = [];
        this.selectAllChecked = false;
    }
    ionViewWillEnter() {
        this.initPage();
    }
    initPage() {
        console.log('ionViewDidLoad MultipleSelectModalPage');
        this.route.queryParams.subscribe((params) => {
            console.log('params constructor: ', params);
            this.arrayList = JSON.parse(params.list);
            this.searchPlaceholder = params.searchPlaceholder;
            this.orignalSelected = params.selectedItem;
            this.labelKey = params.labelKey;
            this.valueKey = params.valueKey;
        });
        this.arrayList.forEach((element) => {
            let selectedDataArray = this.orignalSelected.split(',');
            let flag = false;
            if (selectedDataArray.indexOf(element[this.valueKey]) != -1) {
                flag = true;
            }
            this.orignalArrayList.push({
                label: element[this.labelKey],
                value: element[this.valueKey],
                checked: flag,
            });
        });
        this.shownArrayList = this.orignalArrayList;
    }
    ngOnInit() { }
    filterSearch(text) {
        this.shownArrayList = this.orignalArrayList.filter((item) => {
            return item.label.toLowerCase().includes(text.toLowerCase());
        });
    }
    dismiss(selectedItem, flag) {
        if (flag == 'cancel') {
            this.viewCtrl.dismiss(selectedItem);
        }
        if (flag == 'ok') {
            let checkedArray = [];
            this.shownArrayList.forEach((element) => {
                if (element.checked) {
                    checkedArray.push(element.value);
                }
            });
            this.viewCtrl.dismiss(checkedArray.join(','));
        }
    }
    selectAll(checked) {
        console.log('checked', checked);
        this.shownArrayList.forEach((element) => {
            element.checked = checked;
        });
    }
};
MultipleSelectModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
MultipleSelectModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-multiple-select-modal',
        template: _multiple_select_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_multiple_select_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MultipleSelectModalPage);



/***/ }),

/***/ 12868:
/*!***********************************************************************!*\
  !*** ./src/app/pages/single-select-modal/single-select-modal.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleSelectModalPage": () => (/* binding */ SingleSelectModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _single_select_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-select-modal.page.html?ngResource */ 40310);
/* harmony import */ var _single_select_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-select-modal.page.scss?ngResource */ 18032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let SingleSelectModalPage = class SingleSelectModalPage {
    constructor(navCtrl, route, viewCtrl) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.viewCtrl = viewCtrl;
        this.arrayList = [];
        this.searchPlaceholder = 'search';
        this.searchedText = '';
        this.orignalArrayList = [];
        this.shownArrayList = [];
    }
    ionViewWillEnter() {
        this.initPage();
    }
    initPage() {
        console.log('ionViewDidLoad SingleSelectModalPage');
        this.route.queryParams.subscribe((params) => {
            console.log('params constructor: ', params);
            this.arrayList = JSON.parse(params.arrayList);
            this.arrayList = params.list;
            this.searchPlaceholder = params.searchPlaceholder;
            this.orignalSelected = params.selectedItem;
            this.labelKey = params.labelKey;
            this.valueKey = params.valueKey;
        });
        this.selectedItem = this.orignalSelected;
        this.arrayList.forEach((element) => {
            this.orignalArrayList.push({
                label: element[this.labelKey],
                value: element[this.valueKey],
            });
        });
        this.shownArrayList = this.orignalArrayList;
    }
    filterSearch(text) {
        this.shownArrayList = this.orignalArrayList.filter((item) => {
            return item.label.toLowerCase().includes(text.toLowerCase());
        });
    }
    dismiss(selectedItem) {
        this.viewCtrl.dismiss(selectedItem);
    }
    ngOnInit() { }
};
SingleSelectModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
SingleSelectModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-single-select-modal',
        template: _single_select_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_single_select_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SingleSelectModalPage);



/***/ }),

/***/ 4904:
/*!*************************************************************!*\
  !*** ./src/app/pipes/CustomKeyValue/customkeyvalue.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyKeyvaluePipe": () => (/* binding */ MyKeyvaluePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let MyKeyvaluePipe = class MyKeyvaluePipe {
    /**
     * Takes an Object and returns an array of Key Value Pairs.
     */
    transform(value) {
        let keys = [];
        for (let key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    }
};
MyKeyvaluePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'mykeyvalue',
        standalone: true,
    })
], MyKeyvaluePipe);



/***/ }),

/***/ 91701:
/*!*****************************************************!*\
  !*** ./src/app/pipes/change-text-data-type.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeTextDataTypePipe": () => (/* binding */ ChangeTextDataTypePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ChangeTextDataTypePipe = class ChangeTextDataTypePipe {
    transform(item, currentHeader, currentData) {
        // Check if the items array is defined
        if (!item) {
            return [];
        }
        let DataType = currentHeader.datatype.split(',')[1];
        switch (DataType) {
            case "int":
                item = Number.parseInt(item);
                break;
            case "float":
                item = Number.parseFloat(item).toFixed(2);
                break;
            case "string": break;
            default: break;
        }
        return item;
    }
};
ChangeTextDataTypePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'changeTextDataType',
        standalone: true
    })
], ChangeTextDataTypePipe);



/***/ }),

/***/ 9872:
/*!**************************************************!*\
  !*** ./src/app/pipes/filter-by-property.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterByPropertyPipe": () => (/* binding */ FilterByPropertyPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let FilterByPropertyPipe = class FilterByPropertyPipe {
    transform(items) {
        // Check if the items array is defined
        if (!items) {
            return [];
        }
        let propertyValue = ['date', 'number'];
        let res = [];
        items.forEach((item) => {
            let property = (item.datatype).split(',')[0];
            if (propertyValue.indexOf(property) != -1) {
                res.push(item);
            }
        });
        // Filter the items array based on the property value
        return res;
    }
};
FilterByPropertyPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterByProperty',
        standalone: true
    })
], FilterByPropertyPipe);



/***/ }),

/***/ 50169:
/*!**************************************************!*\
  !*** ./src/app/pipes/hide-row-by-search.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideRowBySearchPipe": () => (/* binding */ HideRowBySearchPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let HideRowBySearchPipe = class HideRowBySearchPipe {
    transform(dataRow, reportAreaId) {
        console.log(dataRow, "dataRow", reportAreaId, "reportAreaId");
        return dataRow;
    }
};
HideRowBySearchPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'hideRowBySearch',
        standalone: true
    })
], HideRowBySearchPipe);



/***/ }),

/***/ 67085:
/*!*****************************************************************************!*\
  !*** ./src/app/services/accessauthorization/accessauthorization.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessauthorizationService": () => (/* binding */ AccessauthorizationService)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/BaseComp */ 88075);
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../token/token.service */ 38264);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);








let AccessauthorizationService = class AccessauthorizationService extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_1__.BaseComp {
  constructor(http, token, alertCtrl, nav) {
    super();
    this.http = http;
    this.token = token;
    this.alertCtrl = alertCtrl;
    this.nav = nav;
    this.acessAuthUrlIdentifier = `api/servicesAPI/testaccess`;
  }

  checkServiceAcessFunction(serviceIdinput) {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        id: 1
      };

      if (serviceIdinput == null || serviceIdinput == undefined) {
        return;
      } else {
        let url_accessAuthCheck = _this.BASE_URL + _this.acessAuthUrlIdentifier + '?UserId=' + _this.getFarmerUserID() + '&serviceId=' + serviceIdinput + '&Key=' + _this.key + '&con=' + _this.DatabaseCode;

        yield _this.http.post(url_accessAuthCheck, body).subscribe( /*#__PURE__*/function () {
          var _ref = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (m) {
            if (m == 0) {
              const alert = _this.alertCtrl.create({
                message: "Restricted Resource,Contact Administrator",
                buttons: [{
                  text: "Ok",
                  role: "Ok"
                }]
              });

              (yield alert).present();
              return _this.nav.pop();
            } else if (m == 1) {} else console.error("Service Check Failed");
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    })();
  }

  checkForPasswordChangeFunction() {
    var _this2 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Checking For Pass Change");
      const identifier = 'api/servicesAPI/checkForPassChange';
      let url_check_For_Password_Change = _this2.BASE_URL + identifier + '?UserId=' + _this2.getFarmerUserID() + '&Key=' + _this2.key + '&con=' + (yield _this2.getItem('Db_code'));
      let data = {};
      return new Promise((resolve, reject) => {
        _this2.http.get(url_check_For_Password_Change, data).subscribe(m => {
          if (m["ErrorCode"] == 401) {
            reject(m["ErrorMessage"]);
          }

          resolve(m["toLogout"]);
        });
      });
    })();
  }

  startPasswordCheckService(start) {
    var _this3 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (start == true) {
        _this3.passCheck = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(_this3.check_For_PassChange_interval).subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (x) {
            try {
              let passChecked = yield _this3.checkForPasswordChangeFunction();

              if (passChecked) {
                _this3.token.removeToken();

                _this3.token.removeAuthToken();

                _this3.token.removeRefreshAccessToken();

                _this3.removeItem('Db_code');

                _this3.removeItem(_this3.LOGIN_USER_DATA);

                _this3.removeItem(_this3.IS_LOGIN);

                const alert = yield _this3.alertCtrl.create({
                  message: "You Have Been Logged Out , Login Again",
                  buttons: ["Ok"]
                });
                yield alert.present();

                _this3.nav.navigateRoot('login');

                if (_this3.passCheck) {
                  _this3.passCheck.unsubscribe();

                  _this3.passCheck.remove(_this3.passCheck);
                }
              } else {}
            } catch (error) {
              console.error("Unable To Check for Password Change", error);
            }
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      } else {
        if (_this3.passCheck) {
          _this3.passCheck.unsubscribe();

          _this3.passCheck.remove(_this3.passCheck);
        }
      }
    })();
  }

};

AccessauthorizationService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _token_token_service__WEBPACK_IMPORTED_MODULE_2__.TokenService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}];

AccessauthorizationService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], AccessauthorizationService);


/***/ }),

/***/ 89087:
/*!***************************************************************************************************************!*\
  !*** ./src/app/services/dcf-data-transfer-over-local-network/dcf-data-transfer-over-local-network.service.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcfDataTransferOverLocalNetworkService": () => (/* binding */ DcfDataTransferOverLocalNetworkService)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _sql_sql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sql/sql.service */ 98420);
/* harmony import */ var _edpu_server_edpu_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edpu-server/edpu-server.service */ 86603);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/BaseComp */ 88075);
/* harmony import */ var _local_notification_local_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-notification/local-notification.service */ 44585);









let DcfDataTransferOverLocalNetworkService = class DcfDataTransferOverLocalNetworkService extends _utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__.BaseComp {
  constructor(http, dbProvider, edpuserver, alertCtrl, edpuServer, localNotification) {
    super();
    this.http = http;
    this.dbProvider = dbProvider;
    this.edpuserver = edpuserver;
    this.alertCtrl = alertCtrl;
    this.edpuServer = edpuServer;
    this.localNotification = localNotification;
    console.log("Hello DcfDataTransferOverLocalNetworkProvider Provider");
  }

  subscribeDcfUnploadedDataTransfer() {// this.events.subscribe("DcfUnploadedDataTransfer", (uuid) => {
    //   console.log("DcfUnploadedDataTransfer:-" + uuid);
    //   this.getdcfdata(uuid);
    // });
  }

  getdcfdata(uuid) {
    // this.DcfofflineRecords = [] ;
    // this.Progressvalue = 0 ;
    // this.notgetUploded = 0 ;
    // this.Uplodedsuccessfully = 0 ;
    let records;
    this.dbProvider.getAllDCFunuplodedRecordsForOfflineUpload().then(res => {
      console.log("db getAllDCFunuplodedRecordsForOfflineUpload in dcf transfer: " + res);
      console.log("db dcf.rows.length : " + res.rows.length);
      records = res;

      if (records.rows.length > 0) {
        this.pendingUnuploadedDCFdataAlert(records, uuid);
      } // this.gaugemax = res.rows.length ;
      // this.gaugeAllRecordvalue = res.rows.length ;

    }, error => {
      console.log("getDcf_data error: ", error);
    });
  }

  pendingUnuploadedDCFdataAlert(records, uuid) {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let alert = yield _this.alertCtrl.create({
        header: "Un-sync Data",
        mode: "ios",
        subHeader: "You have un-sync data, Do you want to sync?",
        buttons: [{
          text: "Yes",
          handler: () => {
            _this.startSendingRecords(records, uuid);

            console.log("Yes clicked");
          }
        }, {
          text: "No",
          role: "cancel",
          handler: () => {
            console.log("cancel clicked");
          }
        }]
      });
      alert.present();
    })();
  }

  startSendingRecords(res, uuid) {
    var _this2 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.DcfofflineRecords = [] ;
      // this.Progressvalue = 0 ;
      // this.notgetUploded = 0 ;
      // this.Uplodedsuccessfully = 0 ;
      // this.db.getAllDCFunuplodedRecordsForOfflineUpload()
      console.log("db dcf: " + res);
      console.log("db dcf.rows.length : " + res.rows.length);

      for (let i = 0; i < res.rows.length; i++) {
        const Dcf_Json = JSON.parse(res.rows.item(i).json);
        console.log("json parse: ", Dcf_Json);
        const OfflineData = {
          Dcf_id: res.rows.item(i).ID,
          json: res.rows.item(i).json,
          User_id: res.rows.item(i).User_id,
          url: res.rows.item(i).url,
          uploded: res.rows.item(i).uploded,
          fedrationId: res.rows.item(i).fedrationId,
          key: res.rows.item(i).key,
          DatabaseCode: res.rows.item(i).dbcode
        };
        console.log("OfflineData ", OfflineData); //this.DcfofflineRecords.push(OfflineData) ;

        yield _this2.callDataTransferApi(OfflineData, i + 1, res.rows.length, uuid);
      }
    })();
  }

  callDataTransferApi(OfflineData, sended, total, uuid) {
    var _this3 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = "Transporter@OfflineDcfDataTransfer@" + OfflineData.json + "@" + OfflineData.fedrationId + "@" + OfflineData.uploded + "@" + OfflineData.key + "@" + OfflineData.DatabaseCode + "@" + OfflineData.url + "@" + OfflineData.User_id + "@" + sended + "@" + total;

      _this3.edpuServer.websocket8889SendData(uuid, data);

      if (sended != total) {
        _this3.localNotification.showProgressNotification(sended, total, 3, "Data Sync", "Data syncing in progress");
      } else {
        _this3.localNotification.showProgressNotification(sended, total, 3, "Data Sync", "Data syncing in progress");

        setTimeout(() => {
          _this3.localNotification.clearNotificationBanner(3);

          _this3.localNotification.foreNotif("Data Sync", "Data Sync completed!", 2);
        }, 500);
      }
    })();
  }

};

DcfDataTransferOverLocalNetworkService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: _sql_sql_service__WEBPACK_IMPORTED_MODULE_1__.SqlService
}, {
  type: _edpu_server_edpu_server_service__WEBPACK_IMPORTED_MODULE_2__.EdpuServerService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _edpu_server_edpu_server_service__WEBPACK_IMPORTED_MODULE_2__.EdpuServerService
}, {
  type: _local_notification_local_notification_service__WEBPACK_IMPORTED_MODULE_4__.LocalNotificationService
}];

DcfDataTransferOverLocalNetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], DcfDataTransferOverLocalNetworkService);


/***/ }),

/***/ 86603:
/*!*************************************************************!*\
  !*** ./src/app/services/edpu-server/edpu-server.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdpuServerService": () => (/* binding */ EdpuServerService)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_native_web_server_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/web-server/ngx */ 21809);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _utils_BaseComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/BaseComp */ 88075);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var websocket_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! websocket-ts */ 11299);
/* harmony import */ var websocket_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(websocket_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sql_sql_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sql/sql.service */ 98420);
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/events.service */ 11716);











let EdpuServerService = class EdpuServerService extends _utils_BaseComp__WEBPACK_IMPORTED_MODULE_2__.BaseComp {
  constructor(http, toastCtrl, // private WebsocketBuilder:WebsocketBuilder,
  dbProvider, alertCtrl, webServer, loadingCtrl, webServer1, plt, events, webServer2) {
    super();
    this.http = http;
    this.toastCtrl = toastCtrl;
    this.dbProvider = dbProvider;
    this.alertCtrl = alertCtrl;
    this.webServer = webServer;
    this.loadingCtrl = loadingCtrl;
    this.webServer1 = webServer1;
    this.plt = plt;
    this.events = events;
    this.webServer2 = webServer2;
    this.Request = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.Request8889 = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.Request8888 = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.WebSocketRequest = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.WebSocketClientRequest = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.isForeground = true; //======================Web socket Server ==================================================

    this.isTransporterConnected = false;
    this.ActiveClient = [];
    this.ActiveClientSendConnected = [];
    this.ActiveWeighingClientSendConnected = [];
    this.webSocketAlreadyStart8889 = false;
    this.OrightSenseWeighingConnected = false;
    console.log('Hello EdpuServerProvider Provider');

    try {
      this.plt.pause.subscribe(() => {
        console.log('****Page PAUSED****');
        this.isForeground = false;
        let i = 0;

        while (i < 5) {
          setTimeout(() => {
            this.websocket8889SendData(this.getItem('OrightEkobondDpuuuid'), 'inactive');
          }, 200);
          i++;
        }
      });
      this.plt.resume.subscribe(() => {
        console.log('****Page Resume****');
        this.isForeground = true;
        let i = 0;

        while (i < 5) {
          setTimeout(() => {
            this.websocket8889SendData(this.getItem('OrightEkobondDpuuuid'), 'active');
          }, 200);
          i++;
        }
      });
    } catch (e) {
      console.log('foreground service error', e);
    }
  } //============================================Web Server=================================


  startServer(port) {
    this.webServer.onRequest().subscribe(request => {
      this.Request.next({
        data: request
      });
    });
    this.webServer.start(port).catch(error => console.error(error));
    return this.Request.asObservable();
  }

  stopServer() {
    console.log('serverStop');
    this.webServer.stop();
  }

  startServer8889() {
    this.webServer1.onRequest().subscribe(request => {
      this.Request8889.next({
        data: request
      });
      console.log('server8889request', request);
    });
    this.webServer1.start(8888).catch(error => console.error(error));
  }

  stopServer8889() {
    console.log('server8889stop');
    this.webServer1.stop();
  }

  startServer8888() {
    this.webServer2.onRequest().subscribe(request => {
      this.Request8888.next({
        data: request
      });
      console.log('server8888request', request);
    });
    this.webServer2.start(8888).catch(error => console.error(error));
  }

  stopServer8888() {
    console.log('server8888stop');
    this.webServer2.stop();
  }

  getServerData(port) {
    switch (port) {
      case 8888:
        return this.Request8889.asObservable();

      case 8888:
        return this.Request8888.asObservable();
    }
  }

  startWebScoketServer() {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('web socket 1');
      _this.loading = yield _this.loadingInitializeComp(_this.loadingCtrl);

      _this.loading.present();

      _this.webSocketStartServer8889();
    })();
  }

  webSocketStartServer8889() {
    //this.wsserver = cordova.plugins.wsserver
    //if (!this.webSocketAlreadyStart8889) {
    console.log('web socket 2');
    this.wsserver = cordova.plugins.wsserver;
    console.log('web socket 3');
    this.webSocketAlreadyStart8889 = true;
    var wgt = '';

    try {
      this.wsserver.start(8889, {
        // WebSocket Server handlers
        onFailure: (addr, port, reason) => {
          console.log('Stopped listening on %s:%d. Reason: %s', addr, port, reason); // this.presentToast(this.toastCtrl, "Stopped listening on %s:%d. Reason: %s "+
          // addr+
          // port+
          // reason);

          setTimeout(() => {
            this.webSocketStartServer8889();
          }, 3000);
        },
        // WebSocket Connection handlers
        onOpen: conn => {
          /* conn: {
          'uuid' : '8e176b14-a1af-70a7-3e3d-8b341977a16e',
          'remoteAddr' : '192.168.1.10',
          'httpFields' : {...},
          'resource' : '/?param1=value1&param2=value2'
          } */
          console.log('A user connected from %s', conn.remoteAddr);
          let index = this.ActiveClient.indexOf(conn.uuid);

          if (index == -1) {
            this.ActiveClient.push(conn.uuid);
          }

          if (this.getItem('MilkoReaderipAddress') == conn.remoteAddr) {
            this.saveItem('MilkoReaderuuid', conn.uuid);
          }

          if (this.getItem('OrightEkobondDpuipAddress') == conn.remoteAddr) {
            this.saveItem('OrightEkobondDpuuuid', conn.uuid);
          }

          this.saveItem('WebSocketActiveClientsAddress', this.ActiveClient); //  this.saveItem("OrightWeighinguuid",conn.uuid);
          //  console.log("OrightWeighing IP: " + JSON.stringify(conn.remoteAddr));
          //  console.log("OrightWeighing uuid: " + this.getItem("OrightWeighinguuid"));
          //  this.websocket8889SendData(this.getItem("OrightWeighinguuid"),"Weighingdata@connected");
        },
        onMessage: (conn, msg) => {
          console.log(conn, msg); // msg can be a String (text message) or ArrayBuffer (binary message)
          //wgt = msg;

          this.websocket8889SendData(conn.uuid, 'ok');
          var splitted = msg.split('@');

          if (splitted[0] == 'OrightWeighing') {
            console.log('OrightWeighing IP: ' + JSON.stringify(splitted[1]));
            console.log('OrightWeighing uuid: ' + this.getItem('OrightWeighinguuid'));
            let index = this.ActiveClientSendConnected.indexOf(conn.uuid);

            if (index == -1) {
              this.saveItem('OrightWeighingipAddress', splitted[1]);
              this.saveItem('OrightWeighinguuid', conn.uuid); //this.websocket8889SendData(conn.uuid,"Weighingdata@connected");

              this.ActiveClientSendConnected.push(conn.uuid);
            }
          }

          if (splitted[0] == 'OrightRDU') {
            console.log('RDU IP: ' + JSON.stringify(splitted[1]));
            console.log('RDU uuid: ' + JSON.stringify(this.getItem('OrightRDUuuid')));
            let index = this.ActiveClientSendConnected.indexOf(conn.uuid);

            if (index == -1) {
              this.saveItem('OrightRDUipAddress', splitted[1]);
              this.saveItem('OrightRDUuuid', conn.uuid); //this.websocket8889SendData(this.getItem("OrightRDUuuid"),"RDUdata@connected");

              this.ActiveClientSendConnected.push(conn.uuid);
            }
          }

          if (splitted[0] == 'MilkoReader') {
            console.log('MilkoReader IP: ' + JSON.stringify(splitted[2]));
            this.saveItem('MilkoReaderipAddress', conn.remoteAddr);
            this.saveItem('MilkoReaderuuid', conn.uuid);
            console.log('MilkoReader uuid: ' + this.getItem('MilkoReaderuuid'));
            let index = this.ActiveClientSendConnected.indexOf(conn.uuid);

            if (index == -1) {
              this.saveItem('MilkoReaderipAddress', splitted[2]);
              this.saveItem('MilkoReaderuuid', conn.uuid); //this.websocket8889SendData(conn.uuid,"Weighingdata@connected") ;

              this.ActiveClientSendConnected.push(conn.uuid);
            }

            if (splitted[19] == 'OrightEkobondDpu') {
              this.saveItem('OrightEkobondDpuipAddress', conn.remoteAddr);
              this.saveItem('OrightEkobondDpuuuid', conn.uuid);
              this.saveItem('OrightEkobondDpuMacAddress', splitted[4]);
              this.saveItem('OrightEkobondDpuVersion', splitted[2]);
            }
          }

          if (splitted[0] == 'OrightEkobondDpu') {
            console.log('OrightEkobondDpu IP: ' + JSON.stringify(splitted[1]));
            this.saveItem('OrightEkobondDpuipAddress', conn.remoteAddr);
            this.saveItem('OrightEkobondDpuuuid', conn.uuid);
            this.saveItem('OrightEkobondDpuMacAddress', splitted[2]);
            this.saveItem('OrightEkobondDpuVersion', splitted[3]);
            this.saveItem('MilkoReaderipAddress', conn.remoteAddr);
            this.saveItem('MilkoReaderuuid', conn.uuid);
            console.log('OrightEkobondDpu uuid: ' + this.getItem('OrightEkobondDpuuuid'));
            let index = this.ActiveClientSendConnected.indexOf(conn.uuid);

            if (index == -1) {
              this.saveItem('OrightEkobondDpuipAddress', splitted[1]);
              this.saveItem('OrightEkobondDpuuuid', conn.uuid); //this.websocket8889SendData(conn.uuid,"Weighingdata@connected")

              this.ActiveClientSendConnected.push(conn.uuid);
            }

            if (this.isForeground) {
              let i = 0;

              while (i < 5) {
                setTimeout(() => {
                  this.websocket8889SendData(this.getItem('OrightEkobondDpuuuid'), 'active');
                }, 200);
                i++;
              }
            }
          }
          /*
           ORight Sense that enable external printers Iot enables will send this string:
           OrightPrinter@ipAdress
          */


          if (splitted[0] == 'OrightPrinter') {
            console.log('OrightPrinter IP: ' + JSON.stringify(splitted[1]));
            console.log('OrightPrinter uuid: ' + this.getItem('OrightPrinter'));
            let index = this.ActiveClientSendConnected.indexOf(conn.uuid);

            if (index == -1) {
              this.saveItem('OrightPrinteripAddress', splitted[1]);
              this.saveItem('OrightPrinteruuid', conn.uuid); //this.websocket8889SendData(conn.uuid,"Weighingdata@connected")

              this.ActiveClientSendConnected.push(conn.uuid);
            }
          }

          if (splitted[1] == 'Cleaning') {
            console.log('Gone inside cleaning ......');
            this.events.publish('Cleaning_done', splitted);
            let index = this.ActiveClientSendConnected.indexOf(conn.uuid);

            if (index == -1) {
              this.ActiveClientSendConnected.push(conn.uuid);
            }
          }

          if (splitted[1] == 'Calibration') {
            console.log('Gone inside Calibration ......');
            this.events.publish('Calibration_done', splitted);
            let index = this.ActiveClientSendConnected.indexOf(conn.uuid);

            if (index == -1) {
              this.ActiveClientSendConnected.push(conn.uuid);
            }
          }

          if (splitted[0] == 'Transporter') {
            console.log('Transporter IP: ' + JSON.stringify(conn.remoteAddr));
            console.log('Transporter uuid: ' + this.getItem('Transporteruuid'));
            let index = this.ActiveClientSendConnected.indexOf(conn.uuid);

            if (index == -1) {
              this.saveItem('TransporteripAddress', conn.remoteAddr);
              this.saveItem('Transporteruuid', conn.uuid); //this.websocket8889SendData(conn.uuid,"Weighingdata@connected");

              this.ActiveClientSendConnected.push(conn.uuid);
            }

            if (splitted[1] == 'ConnectionRequest') {
              if (this.getTestingsource() == 'collectioncenter' && splitted[2] == this.getCCUserID() || this.getTestingsource() == 'cillingcenter' && splitted[2] == this.getCHCUserID()) {
                this.websocket8889SendData(conn.uuid, 'Transporter@ConnectionTrue');
                this.events.publish('DcfUnploadedDataTransfer', conn.uuid);
                this.isTransporterConnected = true;
              } else {
                this.websocket8889SendData(conn.uuid, 'Transporter@ConnectionFalse');
                this.isTransporterConnected = false;
              }
            }
          } //  if(splitted[0] != "OrightRDU" && splitted[0] != "OrightWeighing"){
          //  let weighinIndex=this.ActiveWeighingClientSendConnected.indexOf(conn.uuid)
          //  if(weighinIndex==-1){
          //   this.OrightSenseWeighingConnected=true;
          //   this.ActiveWeighingClientSendConnected.push(conn.uuid);
          //   this.saveItem("OrightWeighinguuid",conn.uuid);
          //  }
          //  this.sendAcknowledgementToOrightSense();
          // }


          this.WebSocketRequest.next({
            data: msg
          });
        },
        onClose: (conn, code, reason, wasClean) => {
          console.log('A user disconnected from %s', conn.remoteAddr);
          let index = this.ActiveClient.indexOf(conn.uuid);
          let indexSendConncected = this.ActiveClientSendConnected.indexOf(conn.uuid);
          let weighinIndex = this.ActiveWeighingClientSendConnected.indexOf(conn.uuid);
          this.ActiveClient.splice(index, 1);
          this.ActiveClientSendConnected.splice(indexSendConncected, 1);

          if (weighinIndex != -1) {
            this.ActiveWeighingClientSendConnected.splice(weighinIndex, 1);
            this.OrightSenseWeighingConnected = false;
          }

          if (conn.remoteAddr == this.getItem('OrightWeighingipAddress')) {
            this.saveItem('OrightWeighinguuid', 'null');
          }
        } // Other options
        //  'origins' : [ 'file://','http://','https://' ], // validates the 'Origin' HTTP Header.
        // 'protocols' : [ 'my-protocol-v1', 'my-protocol-v2' ], // validates the 'Sec-WebSocket-Protocol' HTTP Header.
        //  'tcpNoDelay' : true // disables Nagle's algorithm.

      }, (addr, port) => {
        console.log('Listening on %s:%d', addr, port); //this.presentToast(this.toastCtrl,"Listening on %s:%d"+addr + port);

        this.loading.dismiss();
      }, reason => {
        console.log('Did not start. Reason: %s', reason); // this.presentToast(this.toastCtrl,"Did not start. Reason: %s "+ reason);
        // setTimeout(() => {
        //   this.webSocketStartServer8889();
        // }, 1000);
      });
    } catch (er) {
      console.log('web socket er', er);
    } //}

  }

  sendAcknowledgementToOrightSense() {
    setInterval(() => {
      if (this.OrightSenseWeighingConnected) {
        console.log('Oright@Acknowledge');
        this.websocket8889SendData(this.getItem('OrightWeighinguuid'), 'Oright@Acknowledge');
      }
    }, 1000);
  }

  webSocket8889Close() {
    this.wsserver.stop();
    console.log('wsserver stop');
  }

  websocket8889SendData(uuid, data) {
    try {
      console.log('websocket8889SendData', {
        uuid: uuid
      } + ' ' + data);
      this.wsserver.send({
        uuid: uuid
      }, data);
    } catch (ex) {
      console.log('send ex', ex);
    }
  }

  getWebSocket8889Message() {
    return this.WebSocketRequest.asObservable();
  }

  webSocketClient8889Connect(ipAddress, dataString) {
    console.log('websocketclient', ipAddress, dataString);
    this.wsserverClient = new websocket_ts__WEBPACK_IMPORTED_MODULE_3__.WebsocketBuilder('ws://' + ipAddress + ':8889').onOpen((i, ev) => {
      console.log('opened websocket');
      this.wsserverClient.send(dataString);
    }).onClose((i, ev) => {
      console.log('closed');
    }).onError((i, ev) => {
      console.log('error', ev, i);
    }).onMessage((i, ev) => {
      console.log('message ', ev);
      console.log('message text: ', ev.data);
      this.WebSocketClientRequest.next({
        data: ev.data
      });
    }).onRetry((i, ev) => {
      console.log('retry');
    }).build();
  }

  sendWebSocket8889Client(dataString) {
    this.wsserverClient.send(dataString);
  }

  closeWebSocket8889Client() {//this.wsserverClient.close();
  }

  getWebSocket8889ClientMessage() {
    return this.WebSocketClientRequest.asObservable();
  } //=======================end web socket client=======================================
  //  getdcfdata(uuid) {
  //   // this.DcfofflineRecords = [];
  //   // this.Progressvalue = 0;
  //   // this.notgetUploded = 0;
  //   // this.Uplodedsuccessfully = 0;
  //   let records:any;
  //   this.dbProvider.getAllDCFunuplodedRecordsForOfflineUpload().then((res: any) => {
  //     console.log("db dcf: " + res);
  //     console.log("db dcf.rows.length : " + res.rows.length);
  //      records = res;
  //      this.pendingUnuploadedDCFdataAlert(records,uuid);
  //     // this.gaugemax = res.rows.length;
  //     // this.gaugeAllRecordvalue = res.rows.length;
  //   }, error => { console.log("getDcf_data error: ", error) });
  // }
  // pendingUnuploadedDCFdataAlert(records,uuid){
  //     let alert = this.alertCtrl.create({
  //       title: "Un-sync Data",
  //       mode: "ios",
  //       subTitle: "You have un-sync data, Do you want to sync?",
  //       buttons: [
  //         {
  //           text: "Yes",
  //           handler: () => {
  //             this.startSendingRecords(records,uuid);
  //             console.log("Yes clicked");
  //           },
  //         },
  //         {
  //           text: "No",
  //           role: "cancel",
  //           handler: () => {
  //             console.log("cancel clicked");
  //           },
  //         },
  //       ],
  //     });
  //     alert.present();
  // }
  // async startSendingRecords(res,uuid) {
  //   // this.DcfofflineRecords = [];
  //   // this.Progressvalue = 0;
  //   // this.notgetUploded = 0;
  //   // this.Uplodedsuccessfully = 0;
  //   // this.db.getAllDCFunuplodedRecordsForOfflineUpload()
  //     console.log("db dcf: " + res);
  //     console.log("db dcf.rows.length : " + res.rows.length);
  //     for (let i = 0; i < res.rows.length; i++) {
  //       const Dcf_Json: DCF_Data = JSON.parse(res.rows.item(i).json);
  //       console.log("json parse: ", Dcf_Json);
  //       const OfflineData: dcfoffline_data = {
  //         Dcf_id: res.rows.item(i).ID,
  //         json: res.rows.item(i).json,
  //         User_id: res.rows.item(i).User_id,
  //         url: res.rows.item(i).url,
  //         uploded: res.rows.item(i).uploded,
  //         fedrationId: res.rows.item(i).fedrationId,
  //         key: res.rows.item(i).key,
  //         DatabaseCode: res.rows.item(i).dbcode
  //       }
  //       console.log("OfflineData ", OfflineData);
  //       //this.DcfofflineRecords.push(OfflineData);
  //         await this.callDataTransferApi(OfflineData,i + 1, res.rows.length,uuid)
  //     }
  //     // if (res.rows.length > 0) {
  //     //   if (this.notgetUploded < res.rows.length && this.notgetUploded > 0 && this.Uplodedsuccessfully > 0) {
  //     //     cordova.plugins.notification.local.clear(2);
  //     //     this.foreNotif("Transfer successfull",
  //     //       "" + (this.Uplodedsuccessfully) + " records transfered successfully. Try again for others after some time")
  //     //   }
  //     //   else if (this.notgetUploded == 0 && this.Uplodedsuccessfully > 0) {
  //     //     cordova.plugins.notification.local.clear(2);
  //     //     this.foreNotif("Transfer successfull",
  //     //       "" + (this.Uplodedsuccessfully) + " records transfered successfully.")
  //     //   }
  //     //   else {
  //     //     cordova.plugins.notification.local.clear(2);
  //     //     this.foreNotif("Try again after some time",
  //     //       "" + (res.rows.length - this.Uplodedsuccessfully) + " records get failed to transfer. Try again after some time");
  //     //   }
  //     // }
  // }
  // async callDataTransferApi(OfflineData:dcfoffline_data, sended, total,uuid) {
  //   let data="Transporter@OfflineDcfDataTransfer@" + OfflineData.json + "@" + OfflineData.fedrationId +
  //   "@" + OfflineData.uploded + "@" + OfflineData.key + "@" + OfflineData.DatabaseCode + "@" + OfflineData.url +
  //   "@" + OfflineData.User_id + "@" + sended + "@" + total;
  // this.websocket8889SendData(uuid,data);
  // }


  webSocketStopServer() {
    this.wsserver.stop(function onStop(addr, port) {
      console.log('Stopped listening on %s:%d', addr, port);
    });
    this.webSocketAlreadyStart8889 = false; //  this.wsserver8890.stop(function onStop(addr, port) {
    //   console.log('Stopped listening on %s:%d', addr, port);
    // });
    // this.webSocketAlreadyStart8890=false;
  }

  webSocketCloseConn() {
    this.ActiveClient.forEach(item => {
      console.log('close websocket conn for', item);
      this.wsserver.close({
        uuid: item
      }, 4000, 'my conn close');
    });
  }

};

EdpuServerService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _sql_sql_service__WEBPACK_IMPORTED_MODULE_4__.SqlService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _ionic_native_web_server_ngx__WEBPACK_IMPORTED_MODULE_1__.WebServer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_native_web_server_ngx__WEBPACK_IMPORTED_MODULE_1__.WebServer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: _events_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService
}, {
  type: _ionic_native_web_server_ngx__WEBPACK_IMPORTED_MODULE_1__.WebServer
}];

EdpuServerService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
  providedIn: 'root'
})], EdpuServerService);


/***/ }),

/***/ 20442:
/*!***********************************************************!*\
  !*** ./src/app/services/encryption/encryption.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncryptionService": () => (/* binding */ EncryptionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsencrypt */ 57095);
/* harmony import */ var src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/BaseComp */ 88075);





let EncryptionService = class EncryptionService extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_2__.BaseComp {
    constructor() {
        super();
    }
    Encrypt(value) {
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse(this.AesSecretIVKey);
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse(this.AesSecretIVKey);
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse(value.toString()), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_0__.mode.CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_0__.pad.Pkcs7
        });
        return encrypted.toString().replace(/[/\ : ]/g, 'Por21Ld').replace(/[+ : ]/g, '!');
    }
    //The get method is used to decrypt the value.
    Decrypt(value) {
        value = value.replace(/Por21Ld/g, '/').replace(/!/g, '+');
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse(this.AesSecretIVKey);
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse(this.AesSecretIVKey);
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_0__.mode.CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_0__.pad.Pkcs7
        });
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
    }
    EncryptTextWithPublicKey(text, publicKey) {
        let encrypt = new jsencrypt__WEBPACK_IMPORTED_MODULE_1__.JSEncrypt();
        encrypt.setPublicKey(publicKey);
        return encrypt.encrypt(text);
    }
};
EncryptionService.ctorParameters = () => [];
EncryptionService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EncryptionService);



/***/ }),

/***/ 11716:
/*!***************************************************!*\
  !*** ./src/app/services/events/events.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let EventsService = class EventsService {
    constructor() {
        this._channels = [];
    }
    /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param {string} topic the topic to subscribe to
     * @param {function} handler the event handler
     */
    subscribe(topic, ...handlers) {
        if (!this._channels[topic]) {
            this._channels[topic] = [];
        }
        handlers.forEach((handler) => {
            this._channels[topic].push(handler);
        });
    }
    /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param {string} topic the topic to unsubscribe from
     * @param {function} handler the event handler
     *
     * @return true if a handler was removed
     */
    unsubscribe(topic, handler = null) {
        let t = this._channels[topic];
        if (!t) {
            // Wasn't found, wasn't removed
            return false;
        }
        if (!handler) {
            // Remove all handlers for this topic
            delete this._channels[topic];
            return true;
        }
        // We need to find and remove a specific handler
        let i = t.indexOf(handler);
        if (i < 0) {
            // Wasn't found, wasn't removed
            return false;
        }
        t.splice(i, 1);
        // If the channel is empty now, remove it from the channel map
        if (!t.length) {
            delete this._channels[topic];
        }
        return true;
    }
    /**
     * Publish an event to the given topic.
     *
     * @param {string} topic the topic to publish to
     * @param {any} eventData the data to send as the event
     */
    publish(topic, ...args) {
        var t = this._channels[topic];
        if (!t) {
            return null;
        }
        let responses = [];
        t.forEach((handler) => {
            responses.push(handler(...args));
        });
        return responses;
    }
};
EventsService.ctorParameters = () => [];
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], EventsService);



/***/ }),

/***/ 39219:
/*!***************************************************************!*\
  !*** ./src/app/services/home-message/home-message.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeMessageService": () => (/* binding */ HomeMessageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);



let HomeMessageService = class HomeMessageService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    sendMessage(message) {
        this.subject.next({ data: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
};
HomeMessageService.ctorParameters = () => [];
HomeMessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], HomeMessageService);



/***/ }),

/***/ 44585:
/*!***************************************************************************!*\
  !*** ./src/app/services/local-notification/local-notification.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotificationService": () => (/* binding */ LocalNotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _utils_BaseComp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/BaseComp */ 88075);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17265);





let LocalNotificationService = class LocalNotificationService extends _utils_BaseComp__WEBPACK_IMPORTED_MODULE_0__.BaseComp {
    constructor(http, localNotifications) {
        super();
        this.http = http;
        this.localNotifications = localNotifications;
        // for progress bar in notification
        this.Progressvalue = 0;
        console.log('Hello LocalNotificationProvider Provider');
    }
    // to show simple notification
    foreNotif(title, msg, id) {
        this.localNotifications.schedule({
            id: id,
            title: title,
            text: msg,
            data: { secret: 'secret' },
            smallIcon: 'res://mipmap-ldpi/ic_launcher.png',
            foreground: false,
        });
    }
    showProgressNotification(uploded, total, id, title, text) {
        this.Progressvalue = parseInt(((uploded / total) * 100).toFixed(0));
        if (uploded == 1) {
            cordova.plugins.notification.local.schedule({
                id: id,
                title: title,
                text: text,
                sound: false,
                smallIcon: 'res://mipmap-ldpi/ic_launcher.png',
                progressBar: { value: this.Progressvalue },
            });
        }
        else {
            var updateObject = {
                id: id,
                title: title,
                text: text,
                sound: false,
                smallIcon: 'res://mipmap-ldpi/ic_launcher.png',
                progressBar: { value: this.Progressvalue },
            };
            cordova.plugins.notification.local.update(updateObject);
        }
    }
    // clear notification banner
    clearNotificationBanner(id) {
        cordova.plugins.notification.local.clear(id);
    }
};
LocalNotificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_1__.LocalNotifications }
];
LocalNotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], LocalNotificationService);



/***/ }),

/***/ 41138:
/*!*********************************************************************!*\
  !*** ./src/app/services/network-service/network-service.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionStatus": () => (/* binding */ ConnectionStatus),
/* harmony export */   "NetworkServiceService": () => (/* binding */ NetworkServiceService)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _utils_BaseComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/BaseComp */ 88075);
/* harmony import */ var _start_uploading_serivice_start_uploading_serivice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../start-uploading-serivice/start-uploading-serivice.service */ 35839);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17265);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/events.service */ 11716);
/* harmony import */ var src_app_components_pop_up_notification_pop_up_notification_pop_up_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/pop-up-notification/pop-up-notification/pop-up-notification.component */ 98025);












var ConnectionStatus;

(function (ConnectionStatus) {
  ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
  ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
})(ConnectionStatus || (ConnectionStatus = {}));

let NetworkServiceService = class NetworkServiceService extends _utils_BaseComp__WEBPACK_IMPORTED_MODULE_2__.BaseComp {
  constructor(localNotifications, network, modalController, UploadingSerivice, http, toastCtrl, events) {
    super();
    this.localNotifications = localNotifications;
    this.network = network;
    this.modalController = modalController;
    this.UploadingSerivice = UploadingSerivice;
    this.http = http;
    this.toastCtrl = toastCtrl;
    this.events = events;
    this._status = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    this.modelActive = false;
    this.status = ConnectionStatus.Online;
  }

  initializeNetworkEvents() {
    /* OFFLINE */
    this.network.onDisconnect().subscribe(() => {
      if (this.status === ConnectionStatus.Online) {
        this.setStatus(ConnectionStatus.Offline); // this.foreNotif("Internet disconnected");

        this.presentModal('', 'Internet disconnected');
        this.events.publish('networkStatus_changed', 1);
      }
    });
    /* ONLINE */

    this.network.onConnect().subscribe(() => {
      this.isConnectedToInternet().then(value => {
        if (value) {
          if (this.status === ConnectionStatus.Offline) {
            //this.foreNotif("Internet Connected") ;
            this.setStatus(ConnectionStatus.Online);
            this.presentModal("", "Internet Connected");
            this.events.publish("networkStatus_changed", 0);
          }
        } else {
          this.setStatus(ConnectionStatus.Offline);
          this.presentModal("", "Network does not have internet connection");
          this.events.publish("networkStatus_changed", 1);
        }
      });
    });
  }
  /**
   * This method calls an api and if api returns any value then user is connected to
   * interent, else not
   * @returns boolean (if connected then true else false)
   */


  isConnectedToInternet() {
    return new Promise((resolve, reject) => {
      const url = this.BASE_URL + 'api/GeneralDataApi/getInternetConnectionStatus';
      this.http.get(url).subscribe(result => {
        resolve(result);
      }, error => {
        console.error('error in check internet:', error);
        resolve(false);
      });
    }); // try {
    //   const url =
    //     this.BASE_URL + "api/GeneralDataApi/getInternetConnectionStatus";
    //   const response = await this.http.get(url).toPromise();
    //   return true;
    // } catch (err) {
    //   this.somethingWentWrongError(this.toastCtrl);
    //   return false;
    // }
  }

  presentModal(title, text) {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.modelActive && _this.modal) {
        _this.modal.dismiss();
      }

      _this.modal = yield _this.modalController.create({
        component: src_app_components_pop_up_notification_pop_up_notification_pop_up_notification_component__WEBPACK_IMPORTED_MODULE_6__.PopUpNotificationComponent,
        componentProps: {
          title: title,
          text: text
        },
        cssClass: 'notification-card' // enterAnimation: "modal-scale-up-enter",
        // leaveAnimation: "modal-scale-up-leave",

      }); // this.modal = await this.modalController.create(
      //   NotificationPopupPage,
      //   {
      //     title: title,
      //     text: text,
      //   },
      //   {
      //     cssClass: "notification-card",
      //     enterAnimation: "modal-scale-up-enter",
      //     leaveAnimation: "modal-scale-up-leave",
      //   }
      // );

      _this.modal.onDidDismiss(data => {
        _this.modelActive = false;
      });

      _this.modelActive = true;
      return yield _this.modal.present();
    })();
  }

  foreNotif(msg) {
    cordova.plugins.notification.local.schedule({
      id: 1,
      text: msg,
      data: {
        secret: 'secret'
      },
      smallIcon: 'res://mipmap-ldpi/ic_launcher.png',
      foreground: true,
      sound: false
    });
  }

  getNetworkType() {
    return this.network.type;
  }

  getNetworkDownSpeed() {
    return this.network.downlinkMax;
  }

  getNetworkStatus() {
    return this._status.asObservable();
  }

  setStatus(status) {
    this.status = status;
    this.saveItem("InternetStatus", this.status);

    this._status.next(this.status);
  }

};

NetworkServiceService.ctorParameters = () => [{
  type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__.LocalNotifications
}, {
  type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_1__.Network
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _start_uploading_serivice_start_uploading_serivice_service__WEBPACK_IMPORTED_MODULE_3__.StartUploadingSeriviceService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _events_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService
}];

NetworkServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})], NetworkServiceService);


/***/ }),

/***/ 45945:
/*!***************************************************!*\
  !*** ./src/app/services/report/report.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/BaseComp */ 88075);







let ReportService = class ReportService extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_1__.BaseComp {
  constructor(http) {
    super();
    this.http = http;
    this.reportToDisplay = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
      id: '',
      reportname: ''
    });
    this.activeReport = this.reportToDisplay.asObservable();
    this.reportToDisplayArray = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([{
      id: '',
      reportname: ''
    }]);
    this.activeReportArray = this.reportToDisplayArray.asObservable();
  }

  changeActiveReportFunction({
    id,
    reportname
  }) {
    this.reportToDisplay.next({
      id,
      reportname
    });
  }

  changeActiveReportArrayFunction(change) {
    console.log("Changing Reports");
    this.reportToDisplayArray.next(change);
  }

  getStaticReports(key, DatabaseCode, userId) {
    let url = this.BASE_URL + 'api/ReportApi/getAllMappedReportByUserid?Userid=' + userId + "&Key=" + key + "&con=" + DatabaseCode; // let url_encrypted = this.BASE_URL+'api/ReportApi/getAllMappedReportByUserid?Userid='+this.EncryptionService.Encrypt(userId)+ "&Key=" +
    // this.EncryptionService.Encrypt(key) +
    // "&con=" + this.EncryptionService.Encrypt(DatabaseCode);

    return this.http.get(url);
  }

  plotfilters(key, reportId, DatabaseCode, userId, farmId, chcId, ccId, farmerId, userType, organization) {
    const identifier = 'api/ReportApi/getReportFilterDetailsByReportidAndUserid';
    let url_getReportFilterDetailsByReportidAndUserid = this.BASE_URL + identifier + '?Userid=' + userId + "&Reportid=" + reportId + "&farmId=" + farmId + "&chcId=" + chcId + "&ccId=" + ccId + "&farmerId=" + farmerId + "&userType=" + userType + "&organization=" + organization + "&Key=" + key + "&con=" + DatabaseCode;
    return this.http.get(url_getReportFilterDetailsByReportidAndUserid); // return this.http.get('http://localhost:8100/assets/data/api2.json');
  }

  plotDataTable(userId, reportId, querystr, key, DatabaseCode, organization) {
    const identifier = 'api/ReportAPI/getReportDataByReportidAndUserid';
    let url_getReportDataByReportidAndUserid = this.BASE_URL + identifier + '?Userid=' + userId + "&Reportid=" + reportId + "&FilterDetails=" + querystr + "&organization=" + organization + "&Key=" + key + "&con=" + DatabaseCode;
    return this.http.get(url_getReportDataByReportidAndUserid);
  }

  getStaticProductsFromRegister() {
    const url_getStaticProductsFromRegister = "https://localhost:44336/api/ManualProducts/getManualProducts";
    return this.http.get(url_getStaticProductsFromRegister);
  }

  transformDateToYYYYMMdd(inputDate) {
    // let tempStrArry = inputDate.split('-')
    // let convertedDate=""
    // for (let i=0;i<tempStrArry.length;i++){
    //     convertedDate=tempStrArry[i]+'-'+convertedDate
    // }
    // convertedDate=convertedDate.slice(0,-1);
    let convertedDate = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe('en-US').transform(inputDate, 'yyyy-MM-dd');
    return convertedDate;
  }

  getAllColumnsForReport(reportID) {
    let url_getAllColumnsForReport = this.BASE_URL + 'api/ReportApi/getAllColumnsForReport?ReportID=' + reportID + '&Key=' + this.key + '&con=' + this.DatabaseCode;
    return this.http.get(url_getAllColumnsForReport);
  }

  updateColumnDetailsForUser(reportID, ColumnIDs) {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url_updatecolumnDetailsForUser = _this.BASE_URL + 'api/ReportApi/updateReportColumnDetailsByUserID?UserId=' + _this.getFarmerUserID() + '&ReportID=' + reportID + '&columnIDs=' + ColumnIDs + '&Key=' + _this.key + '&con=' + _this.DatabaseCode;

      const formDataa = new FormData();
      let resultOfUpdate = 0;
      yield _this.http.post(url_updatecolumnDetailsForUser, formDataa).toPromise().then(m => {
        resultOfUpdate = m.length;
      });
      return resultOfUpdate;
    })();
  }

  getFilterDropDownValues(filter, inputField) {
    var _this2 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let chcID = 0;
      let ccID = 0;
      let farmerID = 0;

      switch (filter.filterName) {
        case 'Chilling Center':
          break;

        case 'Collection Center':
          chcID = inputField;
          break;

        case 'Farmer ID':
          ccID = inputField;
          break;

        default:
          return;
      }

      let dataForDropdown = [];

      const url_getFilterDetailsByFilterID = _this2.BASE_URL + 'api/ReportApi/getReportFilterDetailsByFilterId?Userid=' + _this2.getFarmerUserID() + '&FilterId=' + filter.filterId + '&farmId=' + _this2.getFarmID() + '&chcId=' + chcID + '&ccId=' + ccID + '&farmerId=' + farmerID + '&userType=' + _this2.getUserType() + '&organization=0' + '&Key=' + _this2.key + '&con=' + _this2.DatabaseCode;

      yield _this2.http.get(url_getFilterDetailsByFilterID).toPromise().then(res => {
        dataForDropdown = res;
      });
      return dataForDropdown;
    })();
  }

};

ReportService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}];

ReportService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], ReportService);


/***/ }),

/***/ 98420:
/*!*********************************************!*\
  !*** ./src/app/services/sql/sql.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlService": () => (/* binding */ SqlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 82820);
/* harmony import */ var _utils_BaseComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/BaseComp */ 88075);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/events.service */ 11716);







let SqlService = class SqlService extends _utils_BaseComp__WEBPACK_IMPORTED_MODULE_1__.BaseComp {
    constructor(http, appVersion, sqlite, events) {
        super();
        this.http = http;
        this.appVersion = appVersion;
        this.sqlite = sqlite;
        this.events = events;
        this.OfflineDataTables = [
            {
                TableName: "InboundTransporterRouteStopSend",
                Table_IdColumn: "InboundTransporterRouteRouteStopSend_ID",
                Table_UploadedColumn: "Uploaded",
                Table_UrlColumn: "url",
            },
            {
                TableName: "InboundTransporterRouteStopRecieve",
                Table_IdColumn: "InboundTransporterRouteRouteStopRecieve_ID",
                Table_UploadedColumn: "Uploaded",
                Table_UrlColumn: "url",
            },
            {
                TableName: "SftpPushData",
                Table_IdColumn: "SftpPushData_ID",
                Table_UploadedColumn: "Uploaded",
                Table_UrlColumn: "url",
            },
            {
                TableName: "CalibrationRecords",
                Table_IdColumn: "Calibration_ID",
                Table_UploadedColumn: "Uploaded",
                Table_UrlColumn: "url",
            },
            {
                TableName: "CleaningRecords",
                Table_IdColumn: "Cleaning_ID",
                Table_UploadedColumn: "Uploaded",
                Table_UrlColumn: "url",
            },
            {
                TableName: "orssynclog",
                Table_IdColumn: "log_ID",
                Table_UploadedColumn: "Uploaded",
                Table_UrlColumn: "url",
            },
            {
                TableName: "master_data_ors",
                Table_IdColumn: "master_data_ors_id",
                Table_UploadedColumn: "Uploaded",
                Table_UrlColumn: "url",
            },
            {
                TableName: "testing_data_dcf",
                Table_IdColumn: "testing_data_dcf",
                Table_UploadedColumn: "Uploaded",
                Table_UrlColumn: "url",
            },
        ];
        console.log('Hello SqlProvider Provider');
        //this.createDatabase() ;
    }
    createDatabase() {
        try {
            return this.sqlite
                .create({
                name: "Qboid.db",
                location: "default",
            })
                .then((db) => {
                this.dbName = db;
            }, (error) => {
                console.error("createDatabase error: ", error);
            });
        }
        catch (er) {
            console.log("createDatabase error: ", er);
        }
    }
    VersionDatabase(version) {
        try {
            return this.sqlite
                .create({
                name: "Qboid.db",
                location: "default",
            })
                .then((db) => {
                this.dbName = db;
                console.log("dbName error: ", this.dbName);
                this.checkAppVersion(version, db);
            }, (error) => {
                console.error("createDatabase error: ", error);
            });
        }
        catch (er) {
            console.error("createDatabase error: ", er);
        }
    }
    //## check api version and add changes data
    checkAppVersion(version, db) {
        switch (version) {
            case "1.0.6":
            case "1.0.7":
            case "1.0.8":
            case "1.0.9":
            case "1.0.10": {
                let query = [
                    "DROP TABLE DCF",
                    "DROP TABLE WeightRecords",
                    "DROP TABLE Farmer",
                    "DROP TABLE PriceProfile",
                    "DROP TABLE CollectionCentre",
                ];
                this.alterTableComands(query);
                break;
            }
            case "1.2.3":
            case "1.2.4":
            case "1.2.5": {
                let query = [
                    "DROP TABLE DCF",
                    "DROP TABLE WeightRecords",
                    "DROP TABLE Farmer",
                    "DROP TABLE PriceProfile",
                    "DROP TABLE CollectionCentre",
                    "DROP TABLE priceprofileorganizationmapping",
                ];
                this.alterTableComands(query);
                break;
            }
            case "1.2.9":
            case "1.3.0": {
                let query = [
                    "DROP TABLE DCF",
                    "DROP TABLE WeightRecords",
                    "DROP TABLE Farmer",
                    "DROP TABLE PriceProfile",
                    "DROP TABLE CollectionCentre",
                    "DROP TABLE priceprofileorganizationmapping",
                ];
                this.alterTableComands(query);
                break;
            }
            case "1.3.1":
            case "1.3.2":
            case "1.3.3":
            case "1.3.4":
            case "1.3.5": {
                let query = [
                    "DROP TABLE priceprofileorganizationmapping",
                    "DROP TABLE Farmer",
                ];
                this.alterTableComands(query);
                break;
            }
            case "1.3.7":
            case "1.4.0":
            case "1.5.2": {
                let query = [
                    "DROP TABLE Dispatch",
                    "DROP TABLE priceprofileorganizationmapping",
                    "DROP TABLE Farmer",
                ];
                this.alterTableComands(query);
                break;
            }
            case "1.5.3":
            case "1.5.4":
            case "1.5.5":
            case "1.5.6":
            case "1.5.7": {
                let query = [
                    "DROP TABLE priceprofileorganizationmapping",
                    "DROP TABLE Farmer",
                ];
                this.alterTableComands(query);
                break;
            }
            default: {
                this.createTable();
                break;
            }
        }
    }
    alterTableComands(query) {
        try {
            this.dbName.open().then((res) => {
                this.dbName.sqlBatch(query).then((res) => {
                    console.log(res);
                    this.createTable();
                }, (error) => {
                    console.log("TABLE error: ", error);
                    this.createTable();
                });
            });
        }
        catch (er) {
            console.log("TABLE error: ", er);
            this.createTable();
        }
    }
    //##To Create Default tables and insert user login date for a paticular user
    createTable() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'PriceProfile' (PriceProfileID INTEGER,UserID INTEGER,Name text,StartDate text,EndDate text,CollectionCentre_Name text,AdditionalPrice text,LeastFat text,PriceParLitre text,PriceParKg text,TypeOfMilk text,InsertedDate date,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'PriceProfileFatRange' (PriceProfileID INTEGER,UserID INTEGER,fat text,snf text,price text,Fat_Max text,InsertedDate date)",
                        "CREATE INDEX IF NOT EXISTS PriceProfileID ON 'PriceProfileFatRange' (PriceProfileID)",
                        "CREATE INDEX IF NOT EXISTS fat ON 'PriceProfileFatRange' (fat)",
                        "CREATE TABLE IF NOT EXISTS 'USER_LOGIN' (UserLoginID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER, UserType_Id text,timestamp datetime)",
                        `CREATE TABLE IF NOT EXISTS 'Farmer' 
        (
          Farmer_ID INTEGER,UserID INTEGER,FarmerUserID text,FarmerName text,Validate text,status text,Address text,FarmerQRCode text,
          AccountName text,FirstName text,MiddleName text,LastName text,ZipCode text,Location_ID text,Phone text,
          PAN text,RFID text,Aadhar text,Active text,Farm_ID text,Farm_Name text,CollectionCentre_ID text,CollectionCentre_Name text,
          CattleCowNo text,CalvesCowNo text,CattleBuffaloNo text,CalvesBuffaloNo text,CattleDesiCowNo text,
          CalvesDesiCowNo text,SpecialPrice text,CattleCow text,SpecialPrice_C text,ValidFrom_C text,ValidTill_C text,
          CattleBuffalo text,SpecialPrice_B text,ValidFrom_B text,ValidTill_B text,CattleDesiCow text,SpecialPrice_D text,
          ValidFrom_D text,ValidTill_D text,Userloginname text,Email_id text,gender text,MPCODE text,MNAM text,
          PLANTCODE text,MADD text,PPCODE text,Member_type text,MSEX text,MDOB text,
          AGEY text,CAST text,Member_pnumber text,STATECODE text,DISTCODE text,TAHSILCODE text,VILLAGECODE text,
          HAMLETCODE text,ISACTIVE text,InsertedDate date,InsertedTime text,TransportationCostMethod INTEGER,BankName text,BankBranchName text, BankIfscCode text,BankAccountNumber text,BankAccountHolderFullName text,PreferredSmsLanguage text,
          ReceiveNotification text,ReceiveSms text
        )`,
                        `CREATE TABLE IF NOT EXISTS 'NOTIFICATION' 
        (
          ID INTEGER ,User_id INTEGER,title text,body text,json text,seen text,deleted text,date text,inserted_date text,inserted_time text
        )`,
                        `CREATE TABLE IF NOT EXISTS 'CollectionCentre' 
        (
          CollectionCentre_ID INTEGER,UserID INTEGER,CollectionCentre_Name text,CollectionCentre_Type text,
          Farm_ID text,Address text,Zip_Code text,City_ID text,
          Owner_ID text,SupervisorName text,PCollectionCentre_ID text,ExpectedMilkCowAM text,
          ExpectedMilkCowPM text,ExpectedMilkBuffowAM text,ExpectedMilkBuffowPM text,
          ExpectedMilkDesiAM text,ExpectedMilkDesiPM text,AMExpectedMilk text,PMExpectedMilk text,
          TotalExpectedMilk text,CollectionCentreQRCode text,CollectionCentreCode text,
          Modified_By text,Modified_On text,Created_By text,Created_On text,
          Mcc_Code text,Mcc_Route text,
          Mcc_Name text,Plant_ID text,Mcc_Employee text,Mcc_State text,Mcc_District text,Mcc_Tehsil text,
          Mcc_Village text,Mcc_Hamlet text,Pin_Code text,Is_mccactive text,Mcc_phone text,Mcc_Address text,
          Mcc_refCode text,Milktype text,Bmc_Code text,InsertedDate date,InsertedTime text
        )`,
                        `CREATE TABLE IF NOT EXISTS 'CalibrationRecords'(Calibration_ID INTEGER PRIMARY KEY AUTOINCREMENT,Unique_Identifier text UNIQUE,
          url text, Uploaded text, UserId INTEGER, InsertedDateTime text)`,
                        `CREATE TABLE IF NOT EXISTS 'CleaningRecords'(Cleaning_ID INTEGER PRIMARY KEY AUTOINCREMENT,
           Unique_Identifier text UNIQUE,
            url text, Uploaded text, UserId INTEGER, InsertedDateTime text)`,
                        `CREATE TABLE IF NOT EXISTS 'WeightRecords' 
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,fedrationId text,url text,uploded text,key text,dbcode text,inserted_date text,inserted_time text,Shift text
        )`,
                        "CREATE TABLE IF NOT EXISTS 'DeliveryBoyDeliveryUpload' (Delivery_ID INTEGER PRIMARY KEY AUTOINCREMENT ,json text,Uploaded text,UserID INTEGER,InsertedDate date,key text,dbcode text)",
                        "CREATE TABLE IF NOT EXISTS 'IotDevice' (Device_ID INTEGER,UserID INTEGER,Device_Name text,Device_Code text,mac_address text,Device_Type text,InsertedDate date)",
                        "CREATE TABLE IF NOT EXISTS 'DeliveryBoyDelivery' (Delivery_ID INTEGER PRIMARY KEY AUTOINCREMENT ,Deliveries_Json text,Delivered text,Delivered_Time text,UserID INTEGER,InsertedDate date)",
                        `CREATE TABLE IF NOT EXISTS 'DCF' 
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,fedrationId text,url text,uploded text,key text,dbcode text,inserted_date text,inserted_time text, shift text
        )`,
                        `CREATE TABLE IF NOT EXISTS 'ChemicalTesting'(ID INTEGER PRIMARY KEY AUTOINCREMENT, json text, User_id INTEGER, fedrationId text, url text, uploaded text, key text, dbcode text, inserted_date text, inserted_time text)`,
                        `CREATE TABLE IF NOT EXISTS 'Dispatch' 
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,fedrationId text,url text,uploded text,key text,dbcode text,inserted_date text,inserted_time text, shift text, verified text,ReasonForManualDispatch text
        )`,
                        "CREATE TABLE IF NOT EXISTS 'InboundTransporterRoute' (InboundTransporterRoute_ID INTEGER PRIMARY KEY AUTOINCREMENT ,Routes_Json text,UserID INTEGER,InsertedDate date)",
                        "CREATE TABLE IF NOT EXISTS 'InboundTransporterRouteStopRecieve' (InboundTransporterRouteRouteStopRecieve_ID INTEGER PRIMARY KEY AUTOINCREMENT ,StopRecievedData_Json text,StopData_Json text,UserID INTEGER,InboundRouteId INTEGER,InboundRouteStopId INTEGER,StopOrganizationId INTEGER,StopRecievedDataStatus text,Uploaded text,url text,key text,dbcode text,shift text,Transfered text,InsertedDate text,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'InboundTransporterRouteStopSend' (InboundTransporterRouteRouteStopSend_ID INTEGER PRIMARY KEY AUTOINCREMENT  ,StopData_Json text,UserID INTEGER,InboundRouteId INTEGER,InboundRouteStopId INTEGER,StopOrganizationId INTEGER,StopRecievedDataStatus text,Uploaded text,url text,key text,dbcode text,shift text,InsertedDate text,InsertedTime text)",
                        `CREATE TABLE IF NOT EXISTS 'FatSnfCorrection' 
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,url text,uploded text,key text,dbcode text,inserted_date text,inserted_time text
        )`,
                        `CREATE TABLE IF NOT EXISTS 'MultipleMachineMacAddress' 
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,inserted_date text,inserted_time text, shift text
        )`,
                        "CREATE TABLE IF NOT EXISTS 'ManualWeighingRegister' (ID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER, Shift text, Date text,MaualWeighingFlag text,timestamp datetime)",
                        `CREATE TABLE IF NOT EXISTS 'SourMilkTesting'(ID INTEGER PRIMARY KEY AUTOINCREMENT, json text, User_id INTEGER, fedrationId text, url text, uploaded text, key text, dbcode text, inserted_date text, inserted_time text)`,
                        "CREATE TABLE IF NOT EXISTS 'BmcNew' (UID INTEGER PRIMARY KEY AUTOINCREMENT,BMCId INTEGER, BMCName text,DFID text,CCID text)",
                        "CREATE TABLE IF NOT EXISTS 'mlmodel' (model_Id INTEGER PRIMARY KEY ,modelName text,modelType_Id text,modelJson text,modelLastTrained_On text,modelActive_Status text,modelConsidered_Status text,modelSoftDelete_Status text,modelCreated_On text,modelModified_On text,UserID INTEGER,InsertedDate text,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'mltrainingregister' (model_Id INTEGER ,trainingName text,training_Id text,trainingConsidered_Status text,trainingSoftDelete_Status text,modelTrainingCreated_On text,modelTrainingModified_On text,InsertedDate text,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'mltrainingdataregister' (model_Id INTEGER ,training_Id text,trainingData_Id text,trainingDataJson text,trainingDataConsidered_Status text,trainingDataSoftDelete_Status text,modelTrainingDataCreated_On text,modelTrainingDataModified_On text,InsertedDate text,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'mlmodeluploaded' (mlModelUploaded_Id INTEGER PRIMARY KEY AUTOINCREMENT  ,Json text,UserID INTEGER,Uploaded text,url text,key text,dbcode text,InsertedDate text,InsertedTime text,UpdatedDate text, UpdatedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'priceprofile2' (PriceProfileID INTEGER,parent_Id INTEGER, child_Id INTEGER,Name text,TypeOfMilk text,PriceParLitre text,PriceParKg text,LeastFat text,AdditionalPrice text,MaxFat text,MaxSnf text,Status text, Is_MaxPriceAllowed text,UserID INTEGER,InsertedDate date,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'priceprofilematrix' (PriceProfile_Id INTEGER,priceprofileparent_Id INTEGER,Fat text,Snf text,Price text,Fat_Max text,UserID INTEGER,InsertedDate date,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'priceprofileorganizationmapping' (PriceProfileOrganizationMapping_Id,PriceProfileChild_Id INTEGER,usertype_id INTEGER,organization_id INTEGER,startDate text,endDate text,startShiftTime text,endShiftTime text,TypeOfMilk text,status text,UserID INTEGER,InsertedDate date,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'SftpPushData' (SftpPushData_ID INTEGER PRIMARY KEY AUTOINCREMENT, url text,Uploaded text,UserId INTEGER, InsertedDateTime text)",
                        "CREATE TABLE IF NOT EXISTS 'priceprofilescheme' (SchemeID INTEGER,SchemeName text,SchemeType text, SchemeDescription text, BenefitPerLitre text, DeductionPerLitre text, Status text,UserID INTEGER,InsertedDate date,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'priceprofileschemeorganizationmapping' (scheme_ID INTEGER,usertype_id INTEGER,organization_id INTEGER,startDate text,endDate text,startShiftTime text,endShiftTime text,status text,UserID INTEGER,InsertedDate date,InsertedTime text)",
                        "CREATE INDEX IF NOT EXISTS parent_Id ON 'priceprofile2' (parent_Id)",
                        "CREATE INDEX IF NOT EXISTS fat ON 'priceprofilematrix' (fat)",
                        "CREATE TABLE IF NOT EXISTS 'priceprofilesynclog' (priceprofilesynclog_ID INTEGER PRIMARY KEY AUTOINCREMENT,Collectioncentre_ID text,Chillingcentre_ID text, Dairyfarm_ID text, Pp_ID text,UserID INTEGER,InsertedDate date,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'InboundTransporterDetails' (InboundTransporterDetails_ID INTEGER PRIMARY KEY AUTOINCREMENT, json text,UserId INTEGER,InsertedDateTime text)",
                        "CREATE TABLE IF NOT EXISTS 'orssynclog' (log_ID INTEGER PRIMARY KEY AUTOINCREMENT,master_data_ors_id text,Json text,log_type text, device_type text,UserID INTEGER, url text, Uploaded text,Unique_Identifier text UNIQUE,InsertedDate date,InsertedTime text)",
                        "CREATE TABLE IF NOT EXISTS 'master_data_ors' (master_data_ors_id text PRIMARY KEY,data text,json text,UserID INTEGER, url text, Uploaded text, InsertedDate date,InsertedTime text,shift text,testDate text)",
                        "CREATE TABLE IF NOT EXISTS 'testing_data_dcf' (testing_data_id text PRIMARY KEY ,master_data_ors_id text,JSON text,recordResponse text,softDelete text, UserID INTEGER, url text, Uploaded text,InsertedDate date,InsertedTime text,shift text,testDate text)",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                        this.DeleteTableData();
                        console.log("Delete records");
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertUserTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertUserTable error: ", er);
        }
    }
    DeleteTableData() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        // "DELETE FROM DCF where uploded='true' AND inserted_date >='" + this.setPreviousDate(7) + "' AND User_id=" + this.getFarmerUserID() + "",
                        "DELETE FROM DCF where inserted_date <='" +
                            this.setPreviousDate(10) +
                            "'",
                        "DELETE FROM DCF where uploded='true' AND inserted_date <='" +
                            this.setPreviousDate(7) +
                            "'",
                        "DELETE FROM orssynclog where Uploaded='true' AND InsertedDate <='" +
                            this.setPreviousDate(1) +
                            "'",
                        "DELETE FROM orssynclog where InsertedDate <='" +
                            this.setPreviousDate(3) +
                            "'",
                        "DELETE FROM testing_data_dcf where  InsertedDate <='" +
                            this.setPreviousDate(7) +
                            "'",
                        "DELETE FROM testing_data_dcf where softDelete='1' AND InsertedDate <='" +
                            this.setPreviousDate(1) +
                            "'",
                        "DELETE FROM testing_data_dcf where recordResponse='Success' AND InsertedDate <='" +
                            this.setPreviousDate(3) +
                            "'",
                        "DELETE FROM master_data_ors where  InsertedDate <='" +
                            this.setPreviousDate(7) +
                            "'",
                        // "DELETE FROM Dispatch where uploded='true' AND inserted_date >='" + this.setPreviousDate(7) + "' AND User_id=" + this.getFarmerUserID() + "",
                        "DELETE FROM Dispatch where inserted_date <='" +
                            this.setPreviousDate(7) +
                            "'",
                        // "DELETE FROM InboundTransporterRouteStopRecieve where Uploaded='true' AND InsertedDate >='" + this.setPreviousDate(7) + "' AND UserID=" + this.getFarmerUserID() + "",
                        "DELETE FROM InboundTransporterRouteStopRecieve where InsertedDate <='" +
                            this.setPreviousDate(7) +
                            "'",
                        //"DELETE FROM InboundTransporterRouteStopSend where Uploaded='true' AND InsertedDate >='" + this.setPreviousDate(7) + "' AND UserID=" + this.getFarmerUserID() + "",
                        "DELETE FROM InboundTransporterRouteStopSend where InsertedDate <='" +
                            this.setPreviousDate(7) +
                            "'",
                        //"DELETE FROM WeightRecords where uploded='true' AND inserted_date >='" + this.setPreviousDate(7) + "' AND User_id=" + this.getFarmerUserID() + "",
                        "DELETE FROM WeightRecords where inserted_date <='" +
                            this.setPreviousDate(10) +
                            "'",
                        "DELETE FROM WeightRecords where uploded='true' AND inserted_date <='" +
                            this.setPreviousDate(7) +
                            "'",
                        "DELETE FROM NOTIFICATION where date >='" +
                            this.setPreviousDate(30) +
                            "'",
                        // "DELETE FROM DeliveryBoyDeliveryUpload where Uploaded='true' AND InsertedDate >='" + this.setPreviousDate(7) + "' AND UserID=" + this.getFarmerUserID() + "",
                        "DELETE FROM DeliveryBoyDeliveryUpload where InsertedDate <='" +
                            this.setPreviousDate(7) +
                            "'",
                        // "DELETE FROM FatSnfCorrection where uploded='true' AND inserted_date >='" + this.setPreviousDate(7) + "' AND User_id=" + this.getFarmerUserID() + "",
                        "DELETE FROM FatSnfCorrection where inserted_date <='" +
                            this.setPreviousDate(7) +
                            "'",
                        "DELETE FROM ManualWeighingRegister where Date <='" +
                            this.setPreviousDate(7) +
                            "'",
                        "DELETE FROM priceprofileorganizationmapping where status=0 or (datetime(endDate,endShiftTime) <= datetime('" +
                            this.SetDCFtestDate() +
                            "','" +
                            this.GetcurrentTime() +
                            "'))",
                        "DELETE FROM priceprofile2 where child_Id NOT IN (select DISTINCT PriceProfileChild_Id from priceprofileorganizationmapping where status=1)",
                        "DELETE FROM priceprofilematrix where priceprofileparent_Id NOT IN (select DISTINCT parent_Id from priceprofile2 )",
                        "DELETE FROM priceprofileschemeorganizationmapping where status=0 or (datetime(endDate,endShiftTime) <= datetime('" +
                            this.GetDCFtestDate() +
                            "','" +
                            this.GetcurrentTime() +
                            "'))",
                        "DELETE FROM priceprofilescheme where SchemeID NOT IN (select DISTINCT SchemeID from priceprofileschemeorganizationmapping where status=1)",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        console.log("DELETE FROM priceprofileorganizationmapping where status=0 or (datetime(endDate,endShiftTime) <= datetime('" +
                            this.SetDCFtestDate() +
                            "','" +
                            this.GetcurrentTime() +
                            "'))");
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteTableData error: ", er);
        }
    }
    createAndInsertUserTable() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'USER_LOGIN' (UserLoginID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER, UserType_Id text,timestamp datetime)",
                        "INSERT INTO 'USER_LOGIN' (UserID, UserType_Id,timestamp) VALUES ('" +
                            this.getFarmerUserID() +
                            "'," +
                            this.getUserType() +
                            ",datetime('now','localtime'))",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertUserTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertUserTable error: ", er);
        }
    }
    //==================================For PriceProfileScheme Data=================================================
    //##To Get All Records of PriceProfileScheme table for a paticular user
    getAllPriceProfileSchemesTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT  pps.SchemeID , pps.SchemeName ,pps.SchemeType , pps.SchemeDescription , pps.BenefitPerLitre , pps.DeductionPerLitre , ppoms.status,ppoms.usertype_id ,ppoms.organization_id ,ppoms.startDate ,ppoms.endDate ,ppoms.startShiftTime ,ppoms.endShiftTime   FROM 'priceprofilescheme' pps  inner join priceprofileschemeorganizationmapping ppoms on ppoms.scheme_ID = pps.SchemeID where  pps.UserID=" +
                        userid +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfile2TableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfile2TableData error: ", er);
        }
    }
    //##To Get All Records of PriceProfileScheme table for a paticular user
    getAllPriceProfileOrganizationMappingToDeleteTableData() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "select * FROM priceprofileorganizationmapping where status=0 or (datetime(endDate,endShiftTime) <= datetime('" +
                        this.GetDCFtestDate() +
                        "','" +
                        this.GetcurrentTime() +
                        "'))";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllPriceProfileOrganizationMappingToDeleteTableData: ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfileOrganizationMappingToDeleteTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfileOrganizationMappingToDeleteTableData error: ", er);
        }
    }
    //===================================For Priceprofileapilog============================================
    //##To Get All Records of priceprofilematrix table for a paticular user
    getAllpriceprofilematrixTableDataByParentID(priceprofileparent_Id) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT  *  FROM 'priceprofilematrix'   where  priceprofileparent_Id=" +
                        priceprofileparent_Id +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfile2TableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfile2TableData error: ", er);
        }
    }
    //##To Get All Records of priceprofilematrix table for a paticular user
    getAllpriceprofilDetailsToSendORS(ccid, date, time, chcid, farmid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = `select parent_Id,child_Id,name,TypeOfMilk,endDate, endShiftTime endTime,
              leastFat,maxFat,maxSnf,Is_MaxPriceAllowed,priceParLitre pricePerLitre,additionalPrice
               from (select pp.parent_Id,pp.child_Id,pp.name,pp.TypeOfMilk,
              ifnull(ppom1.enddate,ifnull(ppom2.enddate,ppom3.endDate)) endDate,  
              ifnull(ppom1.endShiftTime,ifnull(ppom2.endShiftTime,ppom3.endShiftTime)) endShiftTime,
              pp.LeastFat,pp.MaxFat,pp.MaxSnf,pp.Is_MaxPriceAllowed,pp.PriceParLitre,pp.AdditionalPrice
              from priceprofile2 pp 
                         left join priceprofileorganizationmapping ppom1 on ppom1.usertype_id=3 and ppom1.organization_id =?
                     and ppom1.TypeOfMilk=pp.TypeOfMilk and ppom1.Status=1 and 
                         datetime(ppom1.startDate,ppom1.startShiftTime) <= datetime(?,?) and
                         ppom1.PriceProfileChild_Id=pp.child_id
                         left join priceprofileorganizationmapping ppom2 on ppom2.usertype_id=7 and ppom2.organization_id =?
                     and ppom2.TypeOfMilk=pp.TypeOfMilk and ppom2.Status=1 and 
                         datetime(ppom2.startDate,ppom2.startShiftTime) <= datetime(?,?) and
                         ppom2.PriceProfileChild_Id=pp.child_id
                         left join priceprofileorganizationmapping ppom3 on ppom3.usertype_id=2 and ppom3.organization_id =?
                     and ppom3.TypeOfMilk=pp.TypeOfMilk and ppom3.Status=1 and 
                         datetime(ppom3.startDate,ppom3.startShiftTime) <= datetime(?,?) and
                        ppom3.PriceProfileChild_Id=pp.child_id
                        where pp.Status=1
                    group by parent_Id,child_Id,name,pp.TypeOfMilk,
              ifnull(ppom1.enddate,ifnull(ppom2.enddate,ppom3.endDate)) ,  
              ifnull(ppom1.endShiftTime,ifnull(ppom2.endShiftTime,ppom3.endShiftTime)),LeastFat,MaxFat,MaxSnf,
                    Is_MaxPriceAllowed,PriceParLitre,AdditionalPrice
                    ) a
                    order by a.TypeOfMilk,datetime(a.endDate,a.endShiftTime),a.parent_Id,a.child_Id;`;
                    this.dbName
                        .executeSql(query, [
                        ccid,
                        date,
                        time,
                        chcid,
                        date,
                        time,
                        farmid,
                        date,
                        time,
                    ])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfile2TableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfile2TableData error: ", er);
        }
    }
    getlastpriceprofilesynclogData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT  *  FROM 'priceprofilesynclog'  where  UserID=" +
                        userid +
                        " ORDER BY priceprofilesynclog_ID DESC LIMIT 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfile2TableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfile2TableData error: ", er);
        }
    }
    //==================================For PriceProfile2 Data=================================================
    //##To Get All Records of PriceProfile2 table for a paticular user
    getAllPriceProfile2TableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT  pp.parent_Id , pp.child_Id ,pp.Name ,pp.TypeOfMilk ,pp.PriceParLitre ,pp.PriceParKg ,pp.LeastFat ,pp.AdditionalPrice ,pp.MaxFat ,pp.MaxSnf ,ppom.status , pp.Is_MaxPriceAllowed ,ppom.PriceProfileOrganizationMapping_Id,ppom.usertype_id ,ppom.organization_id ,ppom.startDate ,ppom.endDate ,ppom.startShiftTime ,ppom.endShiftTime  FROM 'PriceProfile2' pp  inner join priceprofileorganizationmapping ppom on ppom.PriceProfileChild_Id = pp.child_Id where  pp.UserID=" +
                        userid +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfile2TableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfile2TableData error: ", er);
        }
    }
    //=============================================For Calculate Price==============================================================
    CalculateDCFPrice(fid, date, time, type, fat, snf, ccid, dfid, chcid, userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = `
            select printf("%.2f",(ifnull((ifnull(case when dcf.type='C' then fsp.SpecialPrice_C when dcf.type='B' then fsp.SpecialPrice_B when dcf.type='D' then fsp.SpecialPrice_D end,
           case when cast(dcf.fat as decimal(18,1))<cast(pp.LeastFat as decimal(18,1)) then pp.AdditionalPrice else ifnull(ppm.Price,pp.PriceParLitre)end ) ),0)+ ifnull(sum(pps.BenefitPerLitre),0) - ifnull(sum(pps.DeductionPerLitre),0))) finalUnitPrice
           from (select ? fat, ? snf, ? type,? Farmer_ID, ? CollectionCentre_ID, ? Farm_ID, ?  date, ? time) dcf
           
           inner join (select ? CollectionCentre_ID, ? PCollectionCentre_ID, ? Farm_ID) cc on cc.collectioncentre_id=dcf.collectioncentre_id 
           
           left join farmer fsp on fsp.Farmer_id=dcf.Farmer_id and fsp.Status="true" and   dcf.date BETWEEN(case
              when dcf.Type = 'C' and fsp.CattleCow = 1 then  fsp.ValidFrom_C
              when dcf.Type = 'B' and fsp.CattleBuffalo = 1 then  fsp.ValidFrom_B
              when dcf.Type = 'D' and fsp.CattleDesiCow = 1 then fsp.ValidFrom_D
              end)
              AND(case
              when dcf.Type = 'C' and fsp.CattleCow = 1 then  fsp.ValidTill_C
              when dcf.Type = 'B' and fsp.CattleBuffalo = 1 then  fsp.ValidTill_B
              when dcf.Type = 'D' and fsp.CattleDesiCow = 1 then  fsp.ValidTill_D
              end)
           
           left join priceprofileorganizationmapping ppom1 on ppom1.usertype_id=3 and dcf.collectioncentre_id=ppom1.organization_id and ppom1.TypeOfMilk=dcf.type and ppom1.Status=1 and 
           datetime(ppom1.startDate,ppom1.startShiftTime) <= datetime(dcf.date,dcf.Time) and
           datetime(ppom1.endDate,ppom1.endShiftTime) >= datetime(dcf.date,dcf.Time)
           left join priceprofileorganizationmapping ppom2 on ppom2.usertype_id=7 and cc.pcollectioncentre_id=ppom2.organization_id and ppom2.TypeOfMilk=dcf.type and ppom2.Status=1 and 
           datetime(ppom2.startDate,ppom2.startShiftTime) <= datetime(dcf.date,dcf.Time) and
           datetime(ppom2.endDate,ppom2.endShiftTime) >= datetime(dcf.date,dcf.Time)
           left join priceprofileorganizationmapping ppom3 on ppom3.usertype_id=2 and cc.Farm_ID=ppom3.organization_id and ppom3.TypeOfMilk=dcf.type and ppom3.Status=1 and 
           datetime(ppom3.startDate,ppom3.startShiftTime) <= datetime(dcf.date,dcf.Time) and
           datetime(ppom3.endDate,ppom3.endShiftTime) >= datetime(dcf.date,dcf.Time)
           left join priceprofile2 pp on pp.child_id=ifnull(ppom1.PriceProfileChild_Id,ifnull(ppom2.PriceProfileChild_Id,ppom3.PriceProfileChild_Id)) and pp.TypeOfMilk=dcf.type and pp.Status=1
           left join priceprofilematrix ppm on ppm.priceprofileparent_Id=pp.parent_Id and case when cast(dcf.fat as decimal(18,1)) <=cast(pp.MaxFat as decimal(18,1)) then 
           case when cast(dcf.snf as decimal(18,1))<=cast(pp.MaxSnf as decimal(18,1)) then cast(dcf.fat as decimal(18,1)) between cast(ppm.Fat as decimal(18,1)) and cast(ppm.Fat_Max as decimal(18,1)) and cast(ppm.Snf as decimal(18,1)) = cast(dcf.snf as decimal(18,1)) else
            cast(dcf.fat as decimal(18,1)) between cast(ppm.Fat as decimal(18,1)) and cast(ppm.Fat_Max as decimal(18,1)) and cast(ppm.Snf as decimal(18,1)) = cast(MaxSnf as decimal(18,1)) and pp.Is_MaxPriceAllowed=1 end else
           case when cast(dcf.snf as decimal(18,1))<=cast(pp.MaxSnf as decimal(18,1)) then cast(pp.MaxFat as decimal(18,1)) between cast(ppm.Fat as decimal(18,1)) and cast(ppm.Fat_Max as decimal(18,1)) and cast(ppm.Snf as decimal(18,1)) = cast(dcf.snf as decimal(18,1)) and pp.Is_MaxPriceAllowed=1 else
           ppm.priceprofileparent_Id=pp.parent_Id and cast(pp.MaxFat as decimal(18,1)) between cast(ppm.Fat as decimal(18,1)) and cast(ppm.Fat_Max as decimal(18,1)) and cast(ppm.Snf as decimal(18,1)) = cast(MaxSnf as decimal(18,1)) and pp.Is_MaxPriceAllowed=1 end
           end
           
           
           
           left join priceprofileschemeorganizationmapping ppsom1 on ppsom1.usertype_id=3 and dcf.collectioncentre_id=ppsom1.organization_id and ppsom1.Status="1" and 
           datetime(ppsom1.startDate,ppsom1.startShiftTime) <= datetime(dcf.date,dcf.Time) and
           datetime(ppsom1.endDate,ppsom1.endShiftTime) >= datetime(dcf.date,dcf.Time)
           left join priceprofileschemeorganizationmapping ppsom2 on ppsom2.usertype_id=7 and cc.pcollectioncentre_id=ppsom2.organization_id and ppsom2.Status="1" and 
           datetime(ppsom2.startDate,ppsom2.startShiftTime) <= datetime(dcf.date,dcf.Time) and
           datetime(ppsom2.endDate,ppsom2.endShiftTime) >= datetime(dcf.date,dcf.Time)
           left join priceprofileschemeorganizationmapping ppsom3 on ppsom3.usertype_id=2 and cc.Farm_ID=ppsom3.organization_id and ppsom3.Status="1" and 
           datetime(ppsom3.startDate,ppsom3.startShiftTime) <= datetime(dcf.date,dcf.Time) and
           datetime(ppsom3.endDate,ppsom3.endShiftTime) >= datetime(dcf.date,dcf.Time)
           left join priceprofilescheme pps on pps.SchemeID=ifnull(ppsom1.Scheme_ID,ifnull(ppsom2.Scheme_ID,ppsom3.Scheme_ID)) and pps.Status="1"
          
              group by dcf.farmer_id,dcf.type,dcf.fat ,dcf.snf ,pp.child_Id,pp.parent_Id ;
           
           `;
                    // console.log("query", query);
                    console.log("query prams", [
                        fat,
                        snf,
                        type,
                        fid,
                        ccid,
                        dfid,
                        date,
                        time,
                        ccid,
                        chcid,
                        dfid,
                    ]);
                    this.dbName
                        .executeSql(query, [
                        fat,
                        snf,
                        type,
                        fid,
                        ccid,
                        dfid,
                        date,
                        time,
                        ccid,
                        chcid,
                        dfid,
                    ])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getFarmerPriceData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getFarmerPriceData error: ", er);
        }
    }
    //==================================For PriceProfile Data==================================================
    //##To Insert records in PriceProfile table for a paticular user
    createAndInsertPriceProfileTable(PriceProfileID, UserID, Name, StartDate, EndDate, CollectionCentre_Name, AdditionalPrice, LeastFat, PriceParLitre, PriceParKg, TypeOfMilk) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'PriceProfile' (PriceProfileID INTEGER,UserID INTEGER,Name text,StartDate text,EndDate text,CollectionCentre_Name text,AdditionalPrice text,LeastFat text,PriceParLitre text,PriceParKg text,TypeOfMilk text,InsertedDate date,InsertedTime text)",
                        [
                            `INSERT INTO 'PriceProfile' VALUES (?,?,?,?,?,?,?,?,?,?,?,date(datetime('now','localtime')),?)`,
                            [
                                PriceProfileID,
                                UserID,
                                Name,
                                StartDate,
                                EndDate,
                                CollectionCentre_Name,
                                AdditionalPrice,
                                LeastFat,
                                PriceParLitre,
                                PriceParKg,
                                TypeOfMilk,
                                this.GetcurrentTime(),
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertPriceProfileTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertPriceProfileTable error: ", er);
        }
    }
    //##To Insert records in PriceProfileFatRange table for a paticular user
    createAndInsertPriceProfileFatRangeTable(PriceProfileID, UserID, fat, snf, price, Fat_Max) {
        try {
            return new Promise((resolve, reject) => {
                //  this.dbName.open().then((res) => {
                let query = [
                    "CREATE TABLE IF NOT EXISTS 'PriceProfileFatRange' (PriceProfileID INTEGER,UserID INTEGER,fat text,snf text,price text,Fat_Max text,InsertedDate date)",
                    [
                        `INSERT INTO 'PriceProfileFatRange' VALUES (?,?,?,?,?,?,date(datetime('now','localtime')))`,
                        [PriceProfileID, UserID, fat, snf, price, Fat_Max],
                    ],
                ];
                this.dbName
                    .sqlBatch(query)
                    .then((res) => {
                    console.log(res);
                    resolve(res);
                })
                    .catch((err) => {
                    console.log(err);
                    reject(err);
                });
                //}, error => { console.log("createAndInsertPriceProfileFatRangeTable error: ", error) }) ;
            });
        }
        catch (er) {
            console.log("createAndInsertPriceProfileFatRangeTable error: ", er);
        }
    }
    //  //##To Insert bulk records in master_data table (master_data_ors)
    createAndInsertOrsSyncMasterData(masterDataId, data, json, uId, calDataUrl, Uploaded) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'master_data_ors' (master_data_ors_id text PRIMARY KEY,data text,json text,UserID INTEGER,url text, Uploaded text, InsertedDate date,InsertedTime text,shift text, testDate text)`,
                        [
                            `INSERT INTO 'master_data_ors' (master_data_ors_id,data,json,UserID,url,Uploaded,shift,testDate,InsertedDate,InsertedTime) VALUES (?,?,?,?,?,?,?,?,date(datetime('now','localtime')),time(datetime('now','localtime')))`,
                            [
                                masterDataId,
                                data,
                                json,
                                uId,
                                calDataUrl,
                                Uploaded,
                                this.getTestingShift(),
                                this.SetDCFtestDate(),
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((data) => {
                        console.log("ORS master data table", data);
                        resolve(data);
                    })
                        .catch((err) => {
                        console.log("Ors master data table err", err);
                        reject(err);
                    });
                });
            });
        }
        catch (er) {
            console.log("createAndInsertBulkDataInMasterDataTable error: ", er);
        }
    }
    //##To Get Records of testing_data_dcf table for a paticular user
    getOrsMasterSyncDataByTestDateAndTestShift(userid, testDate, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT  *  FROM 'master_data_ors' where  UserID=" +
                        userid +
                        " AND testDate='" +
                        testDate +
                        "' AND shift='" +
                        shift +
                        "' ";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfile2TableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfile2TableData error: ", er);
        }
    }
    //##To Insert bulk records in testing_data_ors table (testing_data_dcf)
    createAndInsertOrstestingDcfData(testingId, masterDataId, json, recordResponse, userId, calDataUrl, Uploaded) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'testing_data_dcf' (testing_data_id text PRIMARY KEY,master_data_ors_id text,JSON text,recordResponse text,softDelete text, UserID INTEGER, url text, Uploaded text,InsertedDate date,InsertedTime text,shift text,testDate text)`,
                        [
                            `INSERT INTO 'testing_data_dcf' (testing_data_id,master_data_ors_id,JSON,recordResponse ,UserID,url,Uploaded,softDelete,shift,testDate,InsertedDate,InsertedTime) VALUES (?,?,?,?,?,?,?,"0",?,?,date(datetime('now','localtime')),time(datetime('now','localtime')))`,
                            [
                                testingId,
                                masterDataId,
                                json,
                                recordResponse,
                                userId,
                                calDataUrl,
                                Uploaded,
                                this.getTestingShift(),
                                this.SetDCFtestDate(),
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((data) => {
                        console.log("ORS testing dcf data table", data);
                        resolve(data);
                    })
                        .catch((err) => {
                        console.log("Ors testing dcf data table err", err);
                        reject(err);
                    });
                });
            });
        }
        catch (er) {
            console.log("createAndInsertBulkDataInTestingDcfDataTable error: ", er);
        }
    }
    updateOrstestingDcfData(testingId, json, recordResponse, userId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    // let query = "UPDATE 'DCF' set json="+json+" ,User_id ="+User_id+", fedrationId="+fedrationId+" ,url="+url+" ,uploded="+uploded+" ,key="+key+" ,dbcode="+dbcode+" ,inserted_date="+date+" ,inserted_time="+time(datetime('now','localtime'))+",shift="+shift+"" ;
                    let query = "UPDATE 'testing_data_dcf' set json='" +
                        json +
                        "', recordResponse='" +
                        recordResponse +
                        "' where testing_data_id='" +
                        testingId +
                        "'  AND UserID = " +
                        userId +
                        " ";
                    // console.log("query", query);
                    this.dbName
                        .executeSql(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertDCFTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertDCFTable error: ", er);
        }
    }
    //##To Get Records of testing_data_dcf table for a paticular user
    getOrsSyncTestingDataSucessAndUnkownFarmerByMasterSyncid(userid, master_data_ors_id) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT  *  FROM 'testing_data_dcf' where  UserID=" +
                        userid +
                        " AND master_data_ors_id='" +
                        master_data_ors_id +
                        "' AND softDelete='0' AND (recordResponse='Success' OR recordResponse='Please register Unkown Farmer' OR recordResponse='Already Exist')";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfile2TableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfile2TableData error: ", er);
        }
    }
    //##To Get Records of testing_data_dcf table for a paticular user
    getOrsSyncTestingDataUnkownFarmer(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT  *  FROM 'testing_data_dcf' where  UserID=" +
                        userid +
                        " AND softDelete='0' AND recordResponse='Please register Unkown Farmer'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfile2TableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfile2TableData error: ", er);
        }
    }
    markOrstestingDcfDataSoftDelete(testingId, userId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    // let query = "UPDATE 'DCF' set json="+json+" ,User_id ="+User_id+", fedrationId="+fedrationId+" ,url="+url+" ,uploded="+uploded+" ,key="+key+" ,dbcode="+dbcode+" ,inserted_date="+date+" ,inserted_time="+time(datetime('now','localtime'))+",shift="+shift+"" ;
                    let query = "UPDATE 'testing_data_dcf' set softDelete='1' where testing_data_id='" +
                        testingId +
                        "'  AND UserID = " +
                        userId +
                        " ";
                    // console.log("query", query);
                    this.dbName
                        .executeSql(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        resolve(err);
                    });
                }, (error) => {
                    console.log("markOrstestingDcfDataSoftDelete error: ", error);
                });
            });
        }
        catch (er) {
            console.log("markOrstestingDcfDataSoftDelete error: ", er);
        }
    }
    //##To Insert bulk records in Log table (orssynclog)
    createAndInsertOrsSyncLogData(masterDataId, json, log_type, device_type, UserId, calDataUrl, Uploaded, Unique_ID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'orssynclog'(log_ID INTEGER PRIMARY KEY AUTOINCREMENT,master_data_ors_id text,Json text,log_type text, device_type text,UserID INTEGER,url text, Uploaded text,Unique_Identifier text UNIQUE,InsertedDate date,InsertedTime text)`,
                        [
                            `INSERT INTO 'orssynclog' (master_data_ors_id,Json,log_type, device_type,UserID,url,Uploaded,Unique_Identifier,InsertedDate,InsertedTime) values (?,?,?,?,?,?,?,?,date(datetime('now','localtime')),time(datetime('now','localtime')))`,
                            [
                                masterDataId,
                                json,
                                log_type,
                                device_type,
                                UserId,
                                calDataUrl,
                                Uploaded,
                                Unique_ID,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((data) => {
                        console.log("ORS Log table", data);
                        resolve(data);
                    })
                        .catch((err) => {
                        console.log("Ors Log table err", err);
                        reject(err);
                    });
                });
            });
        }
        catch (er) {
            console.log("createAndInsertBulkDataInLogTable error: ", er);
        }
    }
    getAllOrsLogData(unique) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'orssynclog'where Unique_Identifier='" +
                        unique +
                        "' LIMIT 1";
                    console.log(query);
                    this.dbName
                        .executeSql(query, [])
                        .then((data) => {
                        console.log(data);
                        resolve(data);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllOrsLogDataTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getOrsLogDataTableData error: ", er);
        }
    }
    getMasterDataUniqueId() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT master_data_ors_id FROM 'master_data_ors'";
                    this.dbName
                        .executeSql(query, [])
                        .then((data) => {
                        console.log(data);
                        resolve(data);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllOrsMasterDataTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getOrsMasterDataTableData error: ", er);
        }
    }
    //##To Insert bulk records in PriceProfileFatRange table for a paticular user
    createAndInsertBulkDataInTable(query) {
        try {
            return new Promise((resolve, reject) => {
                //  this.dbName.open().then((res) => {
                this.dbName
                    .sqlBatch(query)
                    .then((res) => {
                    console.log(res);
                    resolve(res);
                })
                    .catch((err) => {
                    console.log(err);
                    reject(err);
                });
                //}, error => { console.log("createAndInsertPriceProfileFatRangeTable error: ", error) }) ;
            });
        }
        catch (er) {
            console.log("createAndInsertBulkDataInTable error: ", er);
        }
    }
    //##To Get only one Record of PriceProfile table for a paticular user, basically used to check if there any record exists or not.
    getTop1PriceProfileTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'PriceProfile' where UserID=" +
                        userid +
                        " LIMIT 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1PriceProfileTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1PriceProfileTableData error: ", er);
        }
    }
    //##To Get All Records of PriceProfile table for a paticular user
    getAllPriceProfileTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'PriceProfile' where UserID=" + userid + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfileTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfileTableData error: ", er);
        }
    }
    //##To Get All Records of PriceProfileFatRange table for a paticular user
    getAllPriceProfileFatRangeTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'PriceProfileFatRange' where UserID=" +
                        userid +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPriceProfileFatRangeTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPriceProfileFatRangeTableData error: ", er);
        }
    }
    DeleteAllexistingRowsPriceProfileFatRangeAndPriceProfileTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'PriceProfileFatRange' where UserID=" + UserID + "",
                        "DELETE FROM 'PriceProfile' where UserID=" + UserID + "",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsPriceProfileFatRangeAndPriceProfileTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsPriceProfileFatRangeAndPriceProfileTable error: ", er);
        }
    }
    //##To Delete All Records of PriceProfile and PriceProfileFatRange table for a paticular user
    DeleteAllRowsPriceProfileFatRangeAndPriceProfileTable(UserID, PriceProfile_ids) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'PriceProfileFatRange' where UserID=" +
                            UserID +
                            " AND PriceProfileID NOT IN " +
                            PriceProfile_ids +
                            "",
                        "DELETE FROM 'PriceProfile' where UserID=" +
                            UserID +
                            " AND PriceProfileID NOT IN " +
                            PriceProfile_ids +
                            "",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsPriceProfileFatRangeAndPriceProfileTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsPriceProfileFatRangeAndPriceProfileTable error: ", er);
        }
    }
    //##To Get only one Record of PriceProfile table for a paticular user, basically used to check if there any record exists or not.
    getFarmerPriceData(farmerid, date, Type, FAT, SNF) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = `SELECT IFNULL((case when  pt.SpecialPrice = 'true' and
      ? BETWEEN(case
      when ? = 'C' and pt.CattleCow = 1 then  pt.ValidFrom_C
      when ? = 'B' and pt.CattleBuffalo = 1 then  pt.ValidFrom_B
      when ? = 'D' and pt.CattleDesiCow = 1 then pt.ValidFrom_D
      end)
      AND(case
      when ? = 'C' and pt.CattleCow = 1 then  pt.ValidTill_C
      when ? = 'B' and pt.CattleBuffalo = 1 then  pt.ValidTill_B
      when ? = 'D' and pt.CattleDesiCow = 1 then  pt.ValidTill_D
      end)
      then(case
         when ? = 'C' and pt.CattleCow = 1 then  CAST(pt.SpecialPrice_C  AS DECIMAL(18,2))
         when ? = 'B' and pt.CattleBuffalo = 1 then  CAST(pt.SpecialPrice_B  AS DECIMAL(18,2))
         when ? = 'D' and pt.CattleDesiCow = 1 then  CAST(pt.SpecialPrice_D  AS DECIMAL(18,2))
         end)
      else((CASE
         WHEN CAST(? AS DECIMAL(18,2)) >=  CAST(P.LeastFat AS DECIMAL(18,2))  and  CAST(? AS DECIMAL(18,2)) between  CAST(ppm.Fat AS DECIMAL(18,2)) and  CAST(ppm.Fat_Max AS DECIMAL(18,2)) and CAST(ppm.Snf AS DECIMAL(18,2)) = CAST(? AS DECIMAL(18,2)) then ppm.Price
         ELSE P.AdditionalPrice
         END))
      end),0.0) AS PriceParLitre from Farmer pt 
      left join PriceProfile p on p.TypeOfMilk=? AND p.UserID=?
      left join PriceProfileFatRange ppm on ppm.PriceProfileID = P.PriceProfileID and  CAST(? AS DECIMAL(18,2)) between CAST(ppm.Fat AS DECIMAL(18,2)) and CAST(ppm.Fat_Max AS DECIMAL(18,2)) and CAST(ppm.Snf AS DECIMAL(18,2)) = CAST(? AS DECIMAL(18,2))
      where Farmer_ID=?`;
                    this.dbName
                        .executeSql(query, [
                        date,
                        Type,
                        Type,
                        Type,
                        Type,
                        Type,
                        Type,
                        Type,
                        Type,
                        Type,
                        FAT,
                        FAT,
                        SNF,
                        Type,
                        this.getFarmerUserID(),
                        FAT,
                        SNF,
                        farmerid,
                    ])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getFarmerPriceData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getFarmerPriceData error: ", er);
        }
    }
    //==================================For Farmer Data==================================================
    //##To Insert records in Farmer table for a paticular user
    createAndInsertFarmerTable(Farmer_ID, UserID, FarmerUserID, FarmerName, Validate, status, Address, FarmerQRCode, AccountName, FirstName, MiddleName, LastName, ZipCode, Location_ID, Phone, PAN, RFID, Aadhar, Active, Farm_ID, Farm_Name, CollectionCentre_ID, CollectionCentre_Name, CattleCowNo, CalvesCowNo, CattleBuffaloNo, CalvesBuffaloNo, CattleDesiCowNo, CalvesDesiCowNo, SpecialPrice, CattleCow, SpecialPrice_C, ValidFrom_C, ValidTill_C, CattleBuffalo, SpecialPrice_B, ValidFrom_B, ValidTill_B, CattleDesiCow, SpecialPrice_D, ValidFrom_D, ValidTill_D, Userloginname, Email_id, gender, MPCODE, MNAM, PLANTCODE, MADD, PPCODE, Member_type, MSEX, MDOB, AGEY, CAST, Member_pnumber, STATECODE, DISTCODE, TAHSILCODE, VILLAGECODE, HAMLETCODE, ISACTIVE, TransportationCostMethod, BankName, BankBranchName, BankIfscCode, BankAccountNumber, BankAccountHolderName, PreferredSmsLang, ReceiveNotification, ReceiveSms) {
        try {
            //console.log("farmer table to insert ", Farmer_ID)
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'Farmer' 
        (
          Farmer_ID INTEGER,UserID INTEGER,FarmerUserID text,FarmerName text,Validate text,status text,Address text,FarmerQRCode text,
          AccountName text,FirstName text,MiddleName text,LastName text,ZipCode text,Location_ID text,Phone text,
          PAN text,RFID text,Aadhar text,Active text,Farm_ID text,Farm_Name text,CollectionCentre_ID text,CollectionCentre_Name text,
          CattleCowNo text,CalvesCowNo text,CattleBuffaloNo text,CalvesBuffaloNo text,CattleDesiCowNo text,
          CalvesDesiCowNo text,SpecialPrice text,CattleCow text,SpecialPrice_C text,ValidFrom_C text,ValidTill_C text,
          CattleBuffalo text,SpecialPrice_B text,ValidFrom_B text,ValidTill_B text,CattleDesiCow text,SpecialPrice_D text,
          ValidFrom_D text,ValidTill_D text,Userloginname text,Email_id text,gender text,MPCODE text,MNAM text,
          PLANTCODE text,MADD text,PPCODE text,Member_type text,MSEX text,MDOB text,
          AGEY text,CAST text,Member_pnumber text,STATECODE text,DISTCODE text,TAHSILCODE text,VILLAGECODE text,
          HAMLETCODE text,ISACTIVE text,InsertedDate date,InsertedTime text,TransportationCostMethod INTEGER,BankName text,BankBranchName text, BankIfscCode text,BankAccountNumber text,BankAccountHolderFullName text,PreferredSmsLanguage text,
          ReceiveNotification text,ReceiveSms text
        )`,
                        [
                            `INSERT INTO 'Farmer' VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
          ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,date(datetime('now','localtime')),?,?,?,?,?,?,?,?,?,?)`,
                            [
                                Farmer_ID,
                                UserID,
                                FarmerUserID,
                                FarmerName,
                                Validate,
                                status,
                                Address,
                                FarmerQRCode,
                                AccountName,
                                FirstName,
                                MiddleName,
                                LastName,
                                ZipCode,
                                Location_ID,
                                Phone,
                                PAN,
                                RFID,
                                Aadhar,
                                Active,
                                Farm_ID,
                                Farm_Name,
                                CollectionCentre_ID,
                                CollectionCentre_Name,
                                CattleCowNo,
                                CalvesCowNo,
                                CattleBuffaloNo,
                                CalvesBuffaloNo,
                                CattleDesiCowNo,
                                CalvesDesiCowNo,
                                SpecialPrice,
                                CattleCow,
                                SpecialPrice_C,
                                ValidFrom_C,
                                ValidTill_C,
                                CattleBuffalo,
                                SpecialPrice_B,
                                ValidFrom_B,
                                ValidTill_B,
                                CattleDesiCow,
                                SpecialPrice_D,
                                ValidFrom_D,
                                ValidTill_D,
                                Userloginname,
                                Email_id,
                                gender,
                                MPCODE,
                                MNAM,
                                PLANTCODE,
                                MADD,
                                PPCODE,
                                Member_type,
                                MSEX,
                                MDOB,
                                AGEY,
                                CAST,
                                Member_pnumber,
                                STATECODE,
                                DISTCODE,
                                TAHSILCODE,
                                VILLAGECODE,
                                HAMLETCODE,
                                ISACTIVE,
                                this.GetcurrentTime(),
                                TransportationCostMethod,
                                BankName,
                                BankBranchName,
                                BankIfscCode,
                                BankAccountNumber,
                                BankAccountHolderName,
                                PreferredSmsLang,
                                ReceiveNotification,
                                ReceiveSms,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertFarmerTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertFarmerTable error: ", er);
        }
    }
    //##To Get only one Record of Farmer table for a paticular user, basically used to check if there any record exists or not.
    getTop1FarmerTableData(userid) {
        try {
            console.log("dbName error: ", this.dbName);
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Farmer' where UserID=" + userid + " LIMIT 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1FarmerTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1FarmerTableData error: ", er);
        }
    }
    //##To Get All Records of Farmer table for a paticular user
    getAllFarmerTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Farmer' where UserID=" + userid + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllFarmerTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllFarmerTableData error: ", er);
        }
    }
    //##To Get All Records of Farmer table for a paticular user
    getFarmerTableDataByCcidAndLocalFarmerId(ccid, localfarmerid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Farmer' where CAST(MPCODE As INTEGER)='" +
                        parseInt(localfarmerid) +
                        "' AND UserID='" +
                        this.getFarmerUserID() +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllFarmerTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllFarmerTableData error: ", er);
        }
    }
    //##To Delete All Records of farmer table for a paticular user
    DeleteAllRowsFarmerTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = ["DELETE FROM 'Farmer' where UserID=" + UserID + ""];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsFarmerTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsFarmerTable error: ", er);
        }
    }
    getFarmerDetailsById(UserID, Farmer_id) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Farmer' where UserID=" +
                        UserID +
                        " AND Farmer_ID=" +
                        Farmer_id +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getFarmerDetailsById error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getFarmerDetailsById error: ", er);
        }
    }
    //==================================For collectionCentre Data==================================================
    //##To Insert records in CollectionCentre table for a paticular user
    createAndInsertCollectionCentreTable(CollectionCentre_ID, UserID, CollectionCentre_Name, CollectionCentre_Type, Farm_ID, Address, Zip_Code, City_ID, Owner_ID, SupervisorName, PCollectionCentre_ID, ExpectedMilkCowAM, ExpectedMilkCowPM, ExpectedMilkBuffowAM, ExpectedMilkBuffowPM, ExpectedMilkDesiAM, ExpectedMilkDesiPM, AMExpectedMilk, PMExpectedMilk, TotalExpectedMilk, CollectionCentreQRCode, CollectionCentreCode, Modified_By, Modified_On, Created_By, Created_On, Mcc_Code, Mcc_Route, Mcc_Name, Plant_ID, Mcc_Employee, Mcc_State, Mcc_District, Mcc_Tehsil, Mcc_Village, Mcc_Hamlet, Pin_Code, Is_mccactive, Mcc_phone, Mcc_Address, Mcc_refCode, Milktype, Bmc_Code) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'CollectionCentre' 
        (
          CollectionCentre_ID INTEGER,UserID INTEGER,CollectionCentre_Name text,CollectionCentre_Type text,
          Farm_ID text,Address text,Zip_Code text,City_ID text,
          Owner_ID text,SupervisorName text,PCollectionCentre_ID text,ExpectedMilkCowAM text,
          ExpectedMilkCowPM text,ExpectedMilkBuffowAM text,ExpectedMilkBuffowPM text,
          ExpectedMilkDesiAM text,ExpectedMilkDesiPM text,AMExpectedMilk text,PMExpectedMilk text,
          TotalExpectedMilk text,CollectionCentreQRCode text,CollectionCentreCode text,
          Modified_By text,Modified_On text,Created_By text,Created_On text,
          Mcc_Code text,Mcc_Route text,
          Mcc_Name text,Plant_ID text,Mcc_Employee text,Mcc_State text,Mcc_District text,Mcc_Tehsil text,
          Mcc_Village text,Mcc_Hamlet text,Pin_Code text,Is_mccactive text,Mcc_phone text,Mcc_Address text,
          Mcc_refCode text,Milktype text,Bmc_Code text,InsertedDate date,InsertedTime text
        )`,
                        [
                            `INSERT INTO 'CollectionCentre' VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
          ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,date(datetime('now','localtime')),?)`,
                            [
                                CollectionCentre_ID,
                                UserID,
                                CollectionCentre_Name,
                                CollectionCentre_Type,
                                Farm_ID,
                                Address,
                                Zip_Code,
                                City_ID,
                                Owner_ID,
                                SupervisorName,
                                PCollectionCentre_ID,
                                ExpectedMilkCowAM,
                                ExpectedMilkCowPM,
                                ExpectedMilkBuffowAM,
                                ExpectedMilkBuffowPM,
                                ExpectedMilkDesiAM,
                                ExpectedMilkDesiPM,
                                AMExpectedMilk,
                                PMExpectedMilk,
                                TotalExpectedMilk,
                                CollectionCentreQRCode,
                                CollectionCentreCode,
                                Modified_By,
                                Modified_On,
                                Created_By,
                                Created_On,
                                Mcc_Code,
                                Mcc_Route,
                                Mcc_Name,
                                Plant_ID,
                                Mcc_Employee,
                                Mcc_State,
                                Mcc_District,
                                Mcc_Tehsil,
                                Mcc_Village,
                                Mcc_Hamlet,
                                Pin_Code,
                                Is_mccactive,
                                Mcc_phone,
                                Mcc_Address,
                                Mcc_refCode,
                                Milktype,
                                Bmc_Code,
                                this.GetcurrentTime(),
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertFarmerTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertFarmerTable error: ", er);
        }
    }
    //##To Get only one Record of CollectionCentrer table for a paticular user, basically used to check if there any record exists or not.
    getTop1CollectionCentreTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'CollectionCentre' where UserID=" +
                        userid +
                        " LIMIT 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1CollectionCentreTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1CollectionCentreTableData error: ", er);
        }
    }
    //##To Get All Records of CollectionCentre table for a paticular user
    getAllCollectionCentreTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'CollectionCentre' where UserID=" + userid + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllCollectionCentreTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllCollectionCentreTableData error: ", er);
        }
    }
    //##To Delete All Records of CollectionCentre table for a paticular user
    DeleteAllRowsCollectionCentreTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'CollectionCentre' where UserID=" + UserID + "",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsCollectionCentreTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsCollectionCentreTable error: ", er);
        }
    }
    getCollectionCentreDetailsById(UserID, CollectionCentre_ID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'CollectionCentre' where UserID=" +
                        UserID +
                        " AND CollectionCentre_ID=" +
                        CollectionCentre_ID +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getCollectionCentreDetailsById error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getCollectionCentreDetailsById error: ", er);
        }
    }
    getCollectionCentreDetailsByMccid(UserID, Mcc_Code) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'CollectionCentre' where UserID=" +
                        UserID +
                        " AND Mcc_Code=" +
                        Mcc_Code +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getCollectionCentreDetailsById error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getCollectionCentreDetailsById error: ", er);
        }
    }
    //==================================For IotDevice Data==================================================
    //##To Insert records in IotDevice table for a paticular user
    createAndInsertIotDeviceTable(UserID, Device_ID, Device_Name, Device_Code, mac_address, Device_Type) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'IotDevice' (Device_ID INTEGER,UserID INTEGER,Device_Name text,Device_Code text,mac_address text,Device_Type text,InsertedDate date)",
                        [
                            `INSERT INTO 'IotDevice' VALUES (?,?,?,?,?,?,date(datetime('now','localtime')))`,
                            [
                                Device_ID,
                                UserID,
                                Device_Name,
                                Device_Code,
                                mac_address,
                                Device_Type,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertIotDeviceTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertIotDeviceTable error: ", er);
        }
    }
    //##To Get only one Record of IotDevice table for a paticular user, basically used to check if there any record exists or not.
    getTop1IotDeviceTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'IotDevice' where UserID=" + userid + " LIMIT 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1IotDeviceTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1IotDeviceTableData error: ", er);
        }
    }
    //##To Get All Records of IotDevice table for a paticular user
    getAllIotDeviceTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'IotDevice' where UserID=" + userid + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllIotDeviceTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllIotDeviceTableData error: ", er);
        }
    }
    //##To Delete All Records of IotDevice table for a paticular user
    DeleteAllRowsIotDeviceTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = ["DELETE FROM 'IotDevice' where UserID=" + UserID + ""];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsIotDeviceTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsIotDeviceTable error: ", er);
        }
    }
    //==================================For ManualWeighing==================================================
    createAndInsertManualWeighingRegisterTable(shift, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'ManualWeighingRegister' (ID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER, Shift text, Date text,MaualWeighingFlag text,timestamp datetime)",
                        [
                            "INSERT INTO 'ManualWeighingRegister' (UserID, Shift, Date,MaualWeighingFlag,timestamp) VALUES (" +
                                this.getFarmerUserID() +
                                ",?,?,'true',datetime('now','localtime'))",
                            [shift, date],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertManualWeighingRegisterTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertManualWeighingRegisterTable error: ", er);
        }
    }
    getManualWeighingRegisterFlagById(UserID, shift, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'ManualWeighingRegister' where UserID=" +
                        UserID +
                        " AND Shift='" +
                        shift +
                        "' AND Date='" +
                        date +
                        "' AND MaualWeighingFlag='true'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getManualWeighingRegisterFlagById error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getManualWeighingRegisterFlagById error: ", er);
        }
    }
    //==================================For Dispatch==================================================
    //##To Insert testJSON record in Dispatch table for a paticular user
    createAndInsertDispatchTable(json, User_id, fedrationId, url, uploded, key, dbcode, shift, verified, reasonForManualDispatch) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'Dispatch' 
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,fedrationId text,url text,uploded text,key text,dbcode text,inserted_date text,inserted_time text, shift text, verified text,ReasonForManualDispatch text
        )`,
                        [
                            `INSERT INTO 'Dispatch' (json ,User_id , fedrationId ,url ,uploded ,key ,dbcode ,inserted_date ,inserted_time,shift, verified,reasonForManualDispatch ) VALUES (?,?,?,?,?,?,?,date(datetime('now','localtime')),time(datetime('now','localtime')),?,?,?)`,
                            [
                                json,
                                User_id,
                                fedrationId,
                                url,
                                uploded,
                                key,
                                dbcode,
                                shift,
                                verified,
                                reasonForManualDispatch,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertDispatchTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertDispatchTable error: ", er);
        }
    }
    UpdateInsertedDispatchTable(json, User_id, fedrationId, url, uploded, key, dbcode, shift, verified, reasonForManualDispatch) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    // let query = "UPDATE 'DCF' set json="+json+" ,User_id ="+User_id+", fedrationId="+fedrationId+" ,url="+url+" ,uploded="+uploded+" ,key="+key+" ,dbcode="+dbcode+" ,inserted_date="+date+" ,inserted_time="+time(datetime('now','localtime'))+",shift="+shift+"" ;
                    let query = "UPDATE 'Dispatch' set verified='" +
                        verified +
                        "' where json='" +
                        json +
                        "' and User_id = " +
                        User_id +
                        " ";
                    // console.log("query", query);
                    this.dbName
                        .executeSql(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertDCFTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertDCFTable error: ", er);
        }
    }
    getAllDispatchRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Dispatch' where User_id=" + UserID + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchRecords error: ", er);
        }
    }
    getAllDispatchRecordsByDate(UserID, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Dispatch' where User_id=" +
                        UserID +
                        " AND inserted_date='" +
                        date +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDispatchRecordsByDate ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchRecordsByDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchRecords error: ", er);
        }
    }
    getAllDispatchVerifiedRecordsForLastDispatch(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Dispatch' where verified='true' AND User_id=" +
                        UserID +
                        " AND inserted_date=(select inserted_date from 'Dispatch' order by ID desc limit 1) AND shift=(select shift from 'Dispatch' order by ID desc limit 1)";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDispatchVerifiedRecordsFromLastDispatch ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchVerifiedRecordsFromLastDispatch error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchVerifiedRecordsFromLastDispatch error: ", er);
        }
    }
    getLastDispatchVerifiedRecord(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Dispatch' where verified='true' AND User_id=" +
                        UserID +
                        " order by ID desc limit 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDispatchVerifiedRecordsFromLastDispatch ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchVerifiedRecordsFromLastDispatch error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchVerifiedRecordsFromLastDispatch error: ", er);
        }
    }
    getAllDispatchunuplodedRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Dispatch' where User_id=" +
                        UserID +
                        " AND uploded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchunuplodedRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchunuplodedRecords error: ", er);
        }
    }
    getAllDispatchuplodedRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Dispatch' where User_id=" +
                        UserID +
                        " AND uploded='true'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchuplodedRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchuplodedRecords error: ", er);
        }
    }
    getAllDispatchunuplodedRecordsForOfflineUpload() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Dispatch' where uploded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    updateDispatchOfflineUploadTrue(DispatchID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'Dispatch' SET uploded='true' where ID=" +
                        DispatchID +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    updateDispatchOfflineUploadTrueBasedOnJsonString(json, userId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    console.log("json of dispatch to be updated:", json);
                    let query = "UPDATE 'Dispatch' SET uploded='true' where json='" +
                        json +
                        "' and User_id=" +
                        userId +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    getAllDCFRows(UserID, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND datetime(inserted_date,case when shift='morning' then '15:00:00' else '03:00:00' end) != datetime('" +
                        date +
                        "',case when '" +
                        shift +
                        "'='morning' then '15:00:00' else '03:00:00' end)";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDispatchRecordsByDate ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchRecordsByDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchRecords error: ", er);
        }
    }
    getAllDispatchVerifiedRecordsByDateAndShift(UserID, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Dispatch' where verified='true' AND User_id=" +
                        UserID +
                        " AND datetime(inserted_date,inserted_time) > (select datetime(inserted_date,inserted_time) from 'DCF' where User_id=" +
                        UserID +
                        " AND datetime(inserted_date,case when shift='morning' then '15:00:00' else '03:00:00' end) != datetime('" +
                        date +
                        "',case when '" +
                        shift +
                        "'='morning' then '15:00:00' else '03:00:00' end) order by ID desc limit 1)";
                    console.log(query, "query");
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDispatchRecordsByDate ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchRecordsByDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchRecords error: ", er);
        }
    }
    getJsonFromDispatchRecordsByDateAndShift(UserID, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT json FROM 'Dispatch' where User_id=" +
                        UserID +
                        " AND inserted_date='" +
                        date +
                        "' AND shift='" +
                        shift +
                        "'";
                    console.log(query, "query");
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDispatchRecordsByDate ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatchRecordsByDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatchRecords error: ", er);
        }
    }
    deleteDispatchUploadedDataByDateAndShift(userId, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "DELETE from 'Dispatch' where uploded='true' and inserted_date='" +
                        date +
                        "' and shift='" +
                        shift +
                        "' and User_id=" +
                        userId +
                        "";
                    console.log("query:", query);
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("deleteDispatchUploadedDataByDateAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("deleteDispatchUploadedDataByDateAndShift error: ", er);
        }
    }
    //==================================For Inbound Transporter Route Data==================================================
    //##To Insert records in InboundTransporterRoute table for a paticular user
    createAndInsertInboundTransporterRouteTable(UserID, json) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'InboundTransporterRoute' (InboundTransporterRoute_ID INTEGER PRIMARY KEY AUTOINCREMENT ,Routes_Json text,UserID INTEGER,InsertedDate date)",
                        [
                            `INSERT INTO 'InboundTransporterRoute' (Routes_Json ,UserID ,InsertedDate ) VALUES (?,?,date(datetime('now','localtime')))`,
                            [json, UserID],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertInboundTransporterRouteTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertInboundTransporterRouteTable error: ", er);
        }
    }
    //##To Get only one Record of InboundTransporterRoute table for a paticular user, basically used to check if there any record exists or not.
    getTop1InboundTransporterRouteDatabyDate(userid, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRoute' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' LIMIT 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1InboundTransporterRouteDatabyDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1InboundTransporterRouteDatabyDate error: ", er);
        }
    }
    //##To Get All Records of InboundTransporterRoute table for a paticular user
    getAllInboundTransporterRouteTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRoute' where UserID=" +
                        userid +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDeliveryBoyDeliveryTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDeliveryBoyDeliveryTableData error: ", er);
        }
    }
    //##To Delete All Records of InboundTransporterRoute table for a paticular user
    DeleteAllRowsInboundTransporterRouteTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'InboundTransporterRoute' where UserID=" +
                            UserID +
                            "",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsInboundTransporterRouteTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsInboundTransporterRouteTable error: ", er);
        }
    }
    //==================================For Inbound Transporter Route Stop Recieve Data==================================================
    //##To Insert records in InboundTransporterRouteStopRecieve table for a paticular user
    createAndInsertInboundTransporterRouteStopRecieveTable(UserID, RecievedDatajson, StopDataJson, InboundRouteId, InboundRouteStopId, StopOrganizationId, StopRecievedDataStatus, Uploaded, url, key, dbcode, shift, InsertedDate, InsertedTime) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'InboundTransporterRouteStopRecieve' (InboundTransporterRouteRouteStopRecieve_ID INTEGER PRIMARY KEY AUTOINCREMENT ,StopRecievedData_Json text,StopData_Json text,UserID INTEGER,InboundRouteId INTEGER,InboundRouteStopId INTEGER,StopOrganizationId INTEGER,StopRecievedDataStatus text,Uploaded text,url text,key text,dbcode text,shift text,Transfered text,InsertedDate text,InsertedTime text)",
                        [
                            `INSERT INTO 'InboundTransporterRouteStopRecieve' (StopRecievedData_Json ,StopData_Json,UserID ,InboundRouteId,InboundRouteStopId,StopOrganizationId,StopRecievedDataStatus,Uploaded,url ,key ,dbcode,shift ,Transfered,InsertedDate,InsertedTime ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                            [
                                RecievedDatajson,
                                StopDataJson,
                                UserID,
                                InboundRouteId,
                                InboundRouteStopId,
                                StopOrganizationId,
                                StopRecievedDataStatus,
                                Uploaded,
                                url,
                                key,
                                dbcode,
                                shift,
                                "false",
                                InsertedDate,
                                InsertedTime,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertInboundTransporterRouteStopRecieve Table error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertInboundTransporterRouteStopRecieve Table error: ", er);
        }
    }
    //##To Get only one Record of InboundTransporterRouteStopRecieve  table for a paticular user, basically used to check if there any record exists or not.
    getTop1InboundTransporterRouteStopRecieveDatabyDate(userid, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopRecieve' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' LIMIT 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1InboundTransporterRouteStopRecieveDatabyDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1InboundTransporterRouteStopRecieveDatabyDate error: ", er);
        }
    }
    //##To Get All Records of InboundTransporterRouteStopRecieve table for a paticular user
    getAllInboundTransporterRouteStopRecieveTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopRecieve' where UserID=" +
                        userid +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllInboundTransporterRouteStopRecieveTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllInboundTransporterRouteStopRecieveTableData error: ", er);
        }
    }
    //##To Get All Record of InboundTransporterRouteStopRecieve table for a paticular user where StopRecievedDataStatus=accepted
    getAllAcceptedInboundTransporterRouteStopRecieveDatabyDate(userid, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopRecieve' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' AND StopRecievedDataStatus='accepted'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllAcceptedInboundTransporterRouteStopRecieveDatabyDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllAcceptedInboundTransporterRouteStopRecieveDatabyDate error: ", er);
        }
    }
    //##To Get All untransfered Record of InboundTransporterRouteStopRecieve table for a paticular user where StopRecievedDataStatus=accepted
    getAllAcceptedUntransferedInboundTransporterRouteStopRecieveDatabyDate(userid, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopRecieve' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' AND StopRecievedDataStatus='accepted' AND Transfered='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllAcceptedUntransferedInboundTransporterRouteStopRecieveDatabyDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllAcceptedUntransferedInboundTransporterRouteStopRecieveDatabyDate error: ", er);
        }
    }
    //##To Get All untransfered Record of InboundTransporterRouteStopRecieve table for a paticular user where StopRecievedDataStatus=accepted
    getAllAcceptedUntransferedInboundTransporterRouteStopRecieveDatabyDateAndRouteAndShift(userid, date, routeid, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopRecieve' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' AND StopRecievedDataStatus='accepted' AND Transfered='false' AND InboundRouteId=" +
                        routeid +
                        " AND shift='" +
                        shift +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllAcceptedUntransferedInboundTransporterRouteStopRecieveDatabyDateAndRouteAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllAcceptedUntransferedInboundTransporterRouteStopRecieveDatabyDateAndRouteAndShift error: ", er);
        }
    }
    //##To Get All Record of InboundTransporterRouteStopRecieve table for a paticular user and route and shift
    getAllInboundTransporterRouteStopRecieveDatabyDateAndRouteidAndShift(userid, routeid, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopRecieve' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' AND InboundRouteId=" +
                        routeid +
                        " AND shift='" +
                        shift +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllInboundTransporterRouteStopRecieveDatabyDateAndRouteidAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllInboundTransporterRouteStopRecieveDatabyDateAndRouteidAndShift error: ", er);
        }
    }
    //##To Get All Record of InboundTransporterRouteStopRecieve table for a paticular user and route where StopRecievedDataStatus=accepted
    getAllAcceptedInboundTransporterRouteStopRecieveDatabyDateAndRouteidAndShift(userid, routeid, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopRecieve' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' AND InboundRouteId=" +
                        routeid +
                        " AND StopRecievedDataStatus='accepted' AND shift='" +
                        shift +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllAcceptedInboundTransporterRouteStopRecieveDatabyDateAndRouteidAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllAcceptedInboundTransporterRouteStopRecieveDatabyDateAndRouteidAndShift error: ", er);
        }
    }
    //##To Get All Record of InboundTransporterRouteStopRecieve table for a paticular user , route and routestipid where StopRecievedDataStatus=accepted
    getAllAcceptedInboundTransporterRouteStopRecieveDatabyDateAndRouteidAndShiftAndRouteStopid(userid, routeid, date, shift, routestopid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopRecieve' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' AND InboundRouteId=" +
                        routeid +
                        " AND StopRecievedDataStatus='accepted' AND shift='" +
                        shift +
                        "' AND InboundRouteStopId=" +
                        routestopid +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllAcceptedInboundTransporterRouteStopRecieveDatabyDateAndRouteidAndShiftAndRouteStopid error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllAcceptedInboundTransporterRouteStopRecieveDatabyDateAndRouteidAndShiftAndRouteStopid error: ", er);
        }
    }
    //##To Delete All Records of InboundTransporterRouteStopRecieve table for a paticular user
    DeleteAllRowsInboundTransporterRouteStopRecieveTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'InboundTransporterRouteStopRecieve' where UserID=" +
                            UserID +
                            "",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsInboundTransporterRouteStopRecieveTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsInboundTransporterRouteStopRecieveTable error: ", er);
        }
    }
    updateInboundTransporterRouteStopRecieveTransferedTrue(ID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'InboundTransporterRouteStopRecieve' SET Transfered='true' where InboundTransporterRouteRouteStopRecieve_ID=" +
                        ID +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateInboundTransporterRouteStopRecieveTransferedTrue error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateInboundTransporterRouteStopRecieveTransferedTrue error: ", er);
        }
    }
    updateInboundTransporterRouteStopRecieveUploadTrue(ID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'InboundTransporterRouteStopRecieve' SET Uploaded='true' where InboundTransporterRouteRouteStopRecieve_ID=" +
                        ID +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateDeliveryBoyDeliveryTrue error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateDeliveryBoyDeliveryTrue error: ", er);
        }
    }
    getAllInboundTransporterRouteStopRecieveunuplodedRecordsForOfflineUpload(date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopRecieve' where Uploaded='false' AND InsertedDate='" +
                        date +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDeliveryBoyDeliveryunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDeliveryBoyDeliveryunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    //==================================For Inbound Transporter Route Stop Send Data==================================================
    //##To Insert records in InboundTransporterRouteStopSend table for a paticular user
    createAndInsertInboundTransporterRouteStopSendTable(UserID, StopDataJson, InboundRouteId, InboundRouteStopId, StopOrganizationId, StopRecievedDataStatus, Uploaded, url, key, dbcode, shift, InsertedDate, InsertedTime) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'InboundTransporterRouteStopSend' (InboundTransporterRouteRouteStopSend_ID INTEGER PRIMARY KEY AUTOINCREMENT  ,StopData_Json text,UserID INTEGER,InboundRouteId INTEGER,InboundRouteStopId INTEGER,StopOrganizationId INTEGER,StopRecievedDataStatus text,Uploaded text,url text,key text,dbcode text,shift text,InsertedDate text,InsertedTime text)",
                        [
                            `INSERT INTO 'InboundTransporterRouteStopSend' ( StopData_Json,UserID ,InboundRouteId,InboundRouteStopId,StopOrganizationId,StopRecievedDataStatus,Uploaded,url ,key ,dbcode ,shift,InsertedDate,InsertedTime ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                            [
                                StopDataJson,
                                UserID,
                                InboundRouteId,
                                InboundRouteStopId,
                                StopOrganizationId,
                                StopRecievedDataStatus,
                                Uploaded,
                                url,
                                key,
                                dbcode,
                                shift,
                                InsertedDate,
                                InsertedTime,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertInboundTransporterRouteStopSendTable Table error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertInboundTransporterRouteStopSendTable Table error: ", er);
        }
    }
    //##To Get only one Record of InboundTransporterRouteStopSend table for a paticular user, basically used to check if there any record exists or not.
    getTop1InboundTransporterRouteStopSendDatabyDate(userid, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopSend' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' LIMIT 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1InboundTransporterRouteStopSendDatabyDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1InboundTransporterRouteStopSendDatabyDate error: ", er);
        }
    }
    //##To Get All Records of InboundTransporterRouteStopSend table for a paticular user
    getAllInboundTransporterRouteStopSendTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopSend' where UserID=" +
                        userid +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllInboundTransporterRouteStopSendTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllInboundTransporterRouteStopSendTableData error: ", er);
        }
    }
    //##To Get All Record of InboundTransporterRouteStopSend table for a paticular user
    getAllInboundTransporterRouteStopSendDatabyDate(userid, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopSend' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllInboundTransporterRouteStopSendDatabyDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllInboundTransporterRouteStopSendDatabyDate error: ", er);
        }
    }
    //##To Get All Record of InboundTransporterRouteStopSend table for a paticular user and route and shift
    getAllInboundTransporterRouteStopSendDatabyDateAndRouteidAndShift(userid, routeid, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopSend' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' AND InboundRouteId=" +
                        routeid +
                        " AND shift='" +
                        shift +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllInboundTransporterRouteStopSendDatabyDateAndRouteidAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllInboundTransporterRouteStopSendDatabyDateAndRouteidAndShift error: ", er);
        }
    }
    //##To Get Record of InboundTransporterRouteStopSend table for a paticular user and route and routestoporganizationid
    getInboundTransporterRouteStopSendDatabyDateAndRouteidAndShiftAndRouteStopOrganizationid(userid, routeid, date, shift, routestoporganizationid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopSend' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' AND InboundRouteId=" +
                        routeid +
                        " AND shift='" +
                        shift +
                        "' And StopOrganizationId=" +
                        routestoporganizationid +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getInboundTransporterRouteStopSendDatabyDateAndRouteidAndShiftAndRouteStopOrganizationid error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getInboundTransporterRouteStopSendDatabyDateAndRouteidAndShiftAndRouteStopOrganizationid error: ", er);
        }
    }
    //##To Delete All Records of InboundTransporterRouteStopSend table for a paticular user
    DeleteAllRowsInboundTransporterRouteStopSendTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'InboundTransporterRouteStopSend' where UserID=" +
                            UserID +
                            "",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsInboundTransporterRouteStopSendTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsInboundTransporterRouteStopSendTable error: ", er);
        }
    }
    updateInboundTransporterRouteStopSendUploadTrue(ID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'InboundTransporterRouteStopSend' SET Uploaded='true' where InboundTransporterRouteRouteStopSend_ID=" +
                        ID +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateInboundTransporterRouteStopSendUploadTrue error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateInboundTransporterRouteStopSendUploadTrue error: ", er);
        }
    }
    getAllInboundTransporterRouteStopSendunuplodedRecordsForOfflineUpload(date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'InboundTransporterRouteStopSend' where Uploaded='false' AND InsertedDate='" +
                        date +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllInboundTransporterRouteStopSendunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllInboundTransporterRouteStopSendunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    //==================================For Delivery Boy Delivery Data==================================================
    //##To Insert records in DeliveryBoyDelivery table for a paticular user
    createAndInsertDeliveryBoyDeliveryTable(UserID, json, Delivered, DeliveredTime) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'DeliveryBoyDelivery' (Delivery_ID INTEGER PRIMARY KEY AUTOINCREMENT ,Deliveries_Json text,Delivered text,Delivered_Time text,UserID INTEGER,InsertedDate date)",
                        [
                            `INSERT INTO 'DeliveryBoyDelivery' (Deliveries_Json ,Delivered  ,Delivered_Time ,UserID ,InsertedDate ) VALUES (?,?,?,?,date(datetime('now','localtime')))`,
                            [json, Delivered, DeliveredTime, UserID],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertIotDeviceTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertIotDeviceTable error: ", er);
        }
    }
    //##To Get only one Record of DeliveryBoyDelivery table for a paticular user, basically used to check if there any record exists or not.
    getTop1DeliveryBoyDeliveryTableDatabyData(userid, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DeliveryBoyDelivery' where UserID=" +
                        userid +
                        " AND InsertedDate='" +
                        date +
                        "' LIMIT 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1DeliveryBoyDeliveryTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1DeliveryBoyDeliveryTableData error: ", er);
        }
    }
    //##To Get All Records of DeliveryBoyDelivery table for a paticular user
    getAllDeliveryBoyDeliveryTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DeliveryBoyDelivery' where UserID=" + userid + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDeliveryBoyDeliveryTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDeliveryBoyDeliveryTableData error: ", er);
        }
    }
    //##To Get All Pending Records of DeliveryBoyDelivery table for a paticular user
    getAllPendingDeliveryBoyDeliveryTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DeliveryBoyDelivery' where UserID=" +
                        userid +
                        " AND Delivered='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllPendingDeliveryBoyDeliveryTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllPendingDeliveryBoyDeliveryTableData error: ", er);
        }
    }
    //##To Get All Delivered Records of DeliveryBoyDelivery table for a paticular user
    getAllDeliveredDeliveryBoyDeliveryTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DeliveryBoyDelivery' where UserID=" +
                        userid +
                        " AND Delivered='true'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDeliveredDeliveryBoyDeliveryTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDeliveredDeliveryBoyDeliveryTableData error: ", er);
        }
    }
    //##To Delete All Records of DeliveryBoyDelivery table for a paticular user
    DeleteAllRowsDeliveryBoyDeliveryTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'DeliveryBoyDelivery' where UserID=" + UserID + "",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsDeliveryBoyDeliveryTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsDeliveryBoyDeliveryTable error: ", er);
        }
    }
    updateDeliveryBoyDeliveryTrue(ID, time) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'DeliveryBoyDelivery' SET Delivered='true',Delivered_Time='" +
                        time +
                        "' where Delivery_ID=" +
                        ID +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateDeliveryBoyDeliveryTrue error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateDeliveryBoyDeliveryTrue error: ", er);
        }
    }
    //==================================For Delivery Boy Delivery upload Data==================================================
    //##To Insert records in DeliveryBoyDeliveryUpload table for a paticular user
    createAndInsertDeliveryBoyDeliveryuploadTable(UserID, json, Uploaded, key, dbcode) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'DeliveryBoyDeliveryUpload' (Delivery_ID INTEGER PRIMARY KEY AUTOINCREMENT ,json text,Uploaded text,UserID INTEGER,InsertedDate date,key text,dbcode text)",
                        [
                            `INSERT INTO 'DeliveryBoyDeliveryUpload' (json ,Uploaded ,UserID,key,dbcode ,InsertedDate ) VALUES (?,?,?,?,?,date(datetime('now','localtime')))`,
                            [json, Uploaded, UserID, key, dbcode],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertDeliveryBoyDeliveryuploadTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertDeliveryBoyDeliveryuploadTable error: ", er);
        }
    }
    //##To Get All Records of DeliveryBoyDeliveryUpload table for a paticular user
    getAllDeliveryBoyDeliveryUploadTableData(userid) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DeliveryBoyDeliveryUpload' where UserID=" +
                        userid +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDeliveryBoyDeliveryUploadTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDeliveryBoyDeliveryUploadTableData error: ", er);
        }
    }
    //##To Delete All Records of DeliveryBoyDeliveryUpload table for a paticular user
    DeleteAllRowsDeliveryBoyDeliveryUploadTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'DeliveryBoyDeliveryUpload' where UserID=" +
                            UserID +
                            "",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllRowsDeliveryBoyDeliveryUploadTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllRowsDeliveryBoyDeliveryUploadTable error: ", er);
        }
    }
    updateDeliveryBoyDeliveryUploadTrue(ID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'DeliveryBoyDeliveryUpload' SET Uploaded='true' where Delivery_ID=" +
                        ID +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateDeliveryBoyDeliveryTrue error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateDeliveryBoyDeliveryTrue error: ", er);
        }
    }
    getAllDeliveryBoyDeliveryunuplodedRecordsForOfflineUpload(date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DeliveryBoyDeliveryUpload' where Uploaded='false' AND InsertedDate='" +
                        date +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDeliveryBoyDeliveryunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDeliveryBoyDeliveryunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    //==================================For Weight Collection==================================================
    //##To Insert Weight record in WeightRecords table for a paticular user
    AddWeightRecords(json, User_id, fedrationId, url, uploded, key, dbcode, date, Shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'WeightRecords' 
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,fedrationId text,url text,uploded text,key text,dbcode text,inserted_date text,inserted_time text,Shift text
        )`,
                        [
                            `INSERT INTO 'WeightRecords' (json ,User_id , fedrationId ,url ,uploded ,key ,dbcode ,Shift ,inserted_date ,inserted_time ) VALUES (?,?,?,?,?,?,?,?,?,time(datetime('now','localtime')))`,
                            [
                                json,
                                User_id,
                                fedrationId,
                                url,
                                uploded,
                                key,
                                dbcode,
                                Shift,
                                date,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("AddWeightRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("AddWeightRecords error: ", er);
        }
    }
    UpdateInsertedWeightRecordsTable(json, User_id, fedrationId, url, uploded, key, dbcode, date, Shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    // let query = "UPDATE 'DCF' set json="+json+" ,User_id ="+User_id+", fedrationId="+fedrationId+" ,url="+url+" ,uploded="+uploded+" ,key="+key+" ,dbcode="+dbcode+" ,inserted_date="+date+" ,inserted_time="+time(datetime('now','localtime'))+",shift="+shift+"" ;
                    let query = "UPDATE 'WeightRecords' set json='" +
                        json +
                        "' ,User_id =" +
                        User_id +
                        ", fedrationId=" +
                        fedrationId +
                        " ,url='" +
                        url +
                        "' ,uploded='" +
                        uploded +
                        "' ,key='" +
                        key +
                        "' ,dbcode='" +
                        dbcode +
                        "' ,inserted_date='" +
                        date +
                        "' ,inserted_time=time(datetime('now','localtime')),Shift='" +
                        Shift +
                        "' where json='" +
                        json +
                        "' and User_id =" +
                        User_id +
                        " and inserted_date='" +
                        date +
                        "' ";
                    // console.log("query", query);
                    this.dbName
                        .executeSql(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("UpdateInsertedWeightRecordsTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("UpdateInsertedWeightRecordsTable error: ", er);
        }
    }
    GetWeightRecords(UserID, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'WeightRecords' where User_id=" +
                        UserID +
                        " AND inserted_date='" +
                        date +
                        "'";
                    //let query = "SELECT * FROM 'WeightRecords' where User_id="+UserID+"" ;
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("GetWeightRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("GetWeightRecords error: ", er);
        }
    }
    UpdateWeightRecords(ID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'WeightRecords' SET uploded='true' where ID=" + ID + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("error: ", error);
                });
            });
        }
        catch (er) {
            console.log("error: ", er);
        }
    }
    Get_Unuploaded_WeightRecords() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'WeightRecords' where uploded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("error: ", error);
                });
            });
        }
        catch (er) {
            console.log(" error: ", er);
        }
    }
    GetWeightRecordsWithDateAndShift(UserID, date, Shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'WeightRecords' where User_id=" +
                        UserID +
                        " AND Shift='" +
                        Shift +
                        "' AND inserted_date='" +
                        date +
                        "'";
                    //let query = "SELECT * FROM 'WeightRecords' where User_id="+UserID+" AND inserted_date='"+date+"'" ;
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("GetWeightRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("GetWeightRecords error: ", er);
        }
    }
    //==================================For Notification==================================================
    //##To Insert Notification record in Notification table for a paticular user
    createAndInsertNotificationTable(id, User_id, title, body, json, seen, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'NOTIFICATION' 
        (
          ID INTEGER ,User_id INTEGER,title text,body text,json text,seen text,deleted text,date text,inserted_date text,inserted_time text
        )`,
                        [
                            `INSERT into 'NOTIFICATION' (ID,User_id ,title,body,json,seen ,deleted,date,inserted_date ,inserted_time ) VALUES (?,?,?,?,?,?,'false',?,date(datetime('now','localtime')),time(datetime('now','localtime')))`,
                            [id, User_id, title, body, json, seen, date],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertNotificationTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertNotificationTable error: ", er);
        }
    }
    getAllNotificationRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Notification' where User_id=" + UserID + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllNotificationRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllNotificationRecords error: ", er);
        }
    }
    getAllNotMarkedDeletedNotificationRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Notification' where User_id=" +
                        UserID +
                        " AND deleted='false' order by date asc";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllNotificationRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllNotificationRecords error: ", er);
        }
    }
    getAllUnseenNotificationRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'Notification' where seen='false' AND User_id=" +
                        UserID +
                        " AND deleted='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllUnseenNotificationRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllUnseenNotificationRecords error: ", er);
        }
    }
    updateNotificationSeenTrue(ID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'Notification' SET seen='true' where ID=" + ID + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("NotificationSeen error: ", error);
                });
            });
        }
        catch (er) {
            console.log("NotificationSeen error: ", er);
        }
    }
    //##To Delete a Record of Notifications table for a paticular user
    MarkDeleteNotificationByUser(ID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'Notification' SET deleted='true' where ID=" + ID + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("MarkDeleteNotificationByUser error: ", error);
                });
            });
        }
        catch (er) {
            console.log("MarkDeleteNotificationByUser error: ", er);
        }
    }
    //##To Delete All Records of Notifications table for a paticular user
    DeleteAllNotificationTable(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'Notification' where User_id=" + UserID + "",
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("DeleteAllNotificationTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("DeleteAllNotificationTable error: ", er);
        }
    }
    //=======================================For storing macaddress of connected devices in multiple machine module=================
    createAndInsertMultipleMachineMacAddressTable(json, User_id, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'MultipleMachineMacAddress' 
      (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,inserted_date text,inserted_time text, shift text
      )`,
                        `Delete from 'MultipleMachineMacAddress' `,
                        [
                            `INSERT INTO 'MultipleMachineMacAddress' (json ,User_id , inserted_date ,inserted_time,shift ) VALUES (?,?,?,time(datetime('now','localtime')),?)`,
                            [json, User_id, date, shift],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertMultipleMachineMacAddressTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertMultipleMachineMacAddressTable error: ", er);
        }
    }
    getAllMultipleMachineMacAddressByDateAndShift(UserID, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'MultipleMachineMacAddress' where User_id=" +
                        UserID +
                        " AND inserted_date='" +
                        date +
                        "' AND shift='" +
                        shift +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllMultipleMachineMacAddressByDateAndShift ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllMultipleMachineMacAddressByDateAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllMultipleMachineMacAddressByDateAndShift error: ", er);
        }
    }
    //==================================For DCF==================================================
    //##To Insert testJSON record in DCF table for a paticular user
    createAndInsertDCFTable(json, User_id, fedrationId, url, uploded, key, dbcode, date, shift, time) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'DCF' 
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,fedrationId text,url text,uploded text,key text,dbcode text,inserted_date text,inserted_time text, shift text
        )`,
                        [
                            `INSERT INTO 'DCF' (json ,User_id , fedrationId ,url ,uploded ,key ,dbcode ,inserted_date ,inserted_time,shift ) VALUES (?,?,?,?,?,?,?,?,?,?)`,
                            [
                                json,
                                User_id,
                                fedrationId,
                                url,
                                uploded,
                                key,
                                dbcode,
                                date,
                                time,
                                shift,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        // console.log("query", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log("err", err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertDCFTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertDCFTable error: ", er);
        }
    }
    createAndInsertDCFTableWithDuplicateCheck(json, User_id, fedrationId, url, uploded, key, dbcode, date, shift, time) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'DCF' 
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,fedrationId text,url text,uploded text,key text,dbcode text,inserted_date text,inserted_time text, shift text
        )`,
                        [
                            `INSERT INTO 'DCF' (json ,User_id , fedrationId ,url ,uploded ,key ,dbcode ,inserted_date ,inserted_time,shift ) select ?,?,?,?,?,?,?,?,?,? where not exists (select 1 from 'DCF' where json=?)`,
                            [
                                json,
                                User_id,
                                fedrationId,
                                url,
                                uploded,
                                key,
                                dbcode,
                                date,
                                time,
                                shift,
                                json,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        this.events.publish("DcfRecordsChange", "");
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertDCFTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertDCFTable error: ", er);
        }
    }
    UpdateInsertedDCFTable(json, User_id, fedrationId, url, uploded, key, dbcode, date, shift, time) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    // let query = "UPDATE 'DCF' set json="+json+" ,User_id ="+User_id+", fedrationId="+fedrationId+" ,url="+url+" ,uploded="+uploded+" ,key="+key+" ,dbcode="+dbcode+" ,inserted_date="+date+" ,inserted_time="+time(datetime('now','localtime'))+",shift="+shift+"" ;
                    let query = "UPDATE 'DCF' set json='" +
                        json +
                        "' ,User_id =" +
                        User_id +
                        ", fedrationId=" +
                        fedrationId +
                        " ,url='" +
                        url +
                        "' ,uploded='" +
                        uploded +
                        "' ,key='" +
                        key +
                        "' ,dbcode='" +
                        dbcode +
                        "' ,inserted_date='" +
                        date +
                        "' ,inserted_time='" +
                        time +
                        "',shift='" +
                        shift +
                        "' where json='" +
                        json +
                        "' and User_id =" +
                        User_id +
                        "";
                    // console.log("query", query);
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        this.events.publish("DcfRecordsChange", "");
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log("UpdateInsertedDCFTable err", err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("UpdateInsertedDCFTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("UpdateInsertedDCFTable error: ", er);
        }
    }
    getAllDCFRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" + UserID + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecords error: ", er);
        }
    }
    getAllDCFRecordsByDesc(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " ORDER BY ID DESC";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecords error: ", er);
        }
    }
    getAllDCFRecordsByDate(UserID, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND inserted_date='" +
                        date +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDCFRecordsByDate ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecordsByDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecords error: ", er);
        }
    }
    getAllDCFRecordsByDateOrderByDesc(UserID, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND inserted_date='" +
                        date +
                        "' ORDER BY ID DESC";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDCFRecordsByDate ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecordsByDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecords error: ", er);
        }
    }
    getAllDCFRecordsByDateAndShift(UserID, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND inserted_date='" +
                        date +
                        "' AND shift='" +
                        shift +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDCFRecordsByDate ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecordsByDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecords error: ", er);
        }
    }
    getAllDCFRecordsFromTillDateAndShift(UserID, fromDate, tillDate, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND inserted_date >='" +
                        fromDate +
                        "' AND inserted_date <='" +
                        tillDate +
                        "'  AND ('" +
                        shift +
                        "'='0' OR ('" +
                        shift +
                        "'!='0' AND shift='" +
                        shift +
                        "' )) ";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecords error: ", er);
        }
    }
    getAllDCFRecordsAfterLastDispatch(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND ID> IFNULL((select ID from 'DCF' where User_id=" +
                        UserID +
                        " AND inserted_date=(select inserted_date from 'Dispatch' where User_id=" +
                        UserID +
                        " order by ID desc limit 1) AND shift=(select shift from 'Dispatch' where User_id=" +
                        UserID +
                        " order by ID desc limit 1) order by ID desc limit 1),0)";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDCFRecordsAfterPaticularDateAndShift ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecordsAfterPaticularDateAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecordsAfterPaticularDateAndShift error: ", er);
        }
    }
    getAllDCFRecordsForLastDispatch(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = `SELECT * FROM 'DCF' 
          where User_id=` +
                        UserID +
                        ` AND 
          ID<= IFNULL((select ID from 'DCF' where User_id=` +
                        UserID +
                        ` AND 
          inserted_date=(select inserted_date from 
          (select inserted_date, shift, case when shift='morning' then 1 else 2 end as shift_code 
          from 'Dispatch' 
          where User_id=` +
                        UserID +
                        ` group by inserted_date, shift, shift_code 
          order by inserted_date,shift_code desc limit 1)) AND 
          shift=(select shift from 
          (select inserted_date, shift, case when shift='morning' then 1 else 2 end as shift_code 
          from 'Dispatch' 
          where User_id=` +
                        UserID +
                        ` group by inserted_date, shift, shift_code 
          order by inserted_date,shift_code desc limit 1)) 
          order by ID desc limit 1),0) AND
          ID> IFNULL((select ID from 'DCF' where User_id=` +
                        UserID +
                        ` AND 
          inserted_date=(select inserted_date from 
          (select inserted_date, shift, case when shift='morning' then 1 else 2 end as shift_code 
          from 'Dispatch' 
          where User_id=` +
                        UserID +
                        ` group by inserted_date, shift, shift_code 
          order by inserted_date,shift_code desc limit 1 OFFSET 1)) AND 
          shift=(select shift from 
          (select inserted_date, shift, case when shift='morning' then 1 else 2 end as shift_code 
          from 'Dispatch' 
          where User_id=` +
                        UserID +
                        ` group by inserted_date, shift, shift_code 
          order by inserted_date,shift_code desc limit 1 OFFSET 1)) 
          order by ID desc limit 1),0)`;
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDCFRecordsAfterPaticularDateAndShift ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecordsAfterPaticularDateAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecordsAfterPaticularDateAndShift error: ", er);
        }
    }
    getAllDCFRecordsForLastDispatchv2(UserID, date, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    //   let query =
                    //     `SELECT * FROM 'DCF'
                    // where User_id=` +
                    //     UserID +
                    //     ` AND
                    // ID<= IFNULL((select ID from 'DCF' where User_id=` +
                    //     UserID +
                    //     ` AND
                    // inserted_date=(select inserted_date from
                    // (select inserted_date, shift, case when shift='morning' then 1 else 2 end as shift_code
                    // from 'Dispatch'
                    // where User_id=` +
                    //     UserID +
                    //     ` group by inserted_date, shift, shift_code
                    // order by inserted_date,shift_code desc limit 1)) AND
                    // shift=(select shift from
                    // (select inserted_date, shift, case when shift='morning' then 1 else 2 end as shift_code
                    // from 'Dispatch'
                    // where User_id=` +
                    //     UserID +
                    //     ` group by inserted_date, shift, shift_code
                    // order by inserted_date,shift_code desc limit 1))
                    // order by ID desc limit 1),0) AND
                    // ID> IFNULL((select ID from 'DCF' where User_id=` +
                    //     UserID +
                    //     ` AND
                    // inserted_date=(select inserted_date from
                    // (select inserted_date, shift, case when shift='morning' then 1 else 2 end as shift_code
                    // from 'Dispatch'
                    // where User_id=` +
                    //     UserID +
                    //     ` group by inserted_date, shift, shift_code
                    // order by inserted_date,shift_code desc limit 1 OFFSET 1)) AND
                    // shift=(select shift from
                    // (select inserted_date, shift, case when shift='morning' then 1 else 2 end as shift_code
                    // from 'Dispatch'
                    // where User_id=` +
                    //     UserID +
                    //     ` group by inserted_date, shift, shift_code
                    // order by inserted_date,shift_code desc limit 1 OFFSET 1))
                    // order by ID desc limit 1),0)` ;
                    // let query =
                    // "SELECT * FROM 'Dispatch' where verified='true' AND User_id=" +
                    // UserID +
                    // " AND datetime(inserted_date,inserted_time) > (select datetime(inserted_date,inserted_time) from 'DCF' where User_id=" +
                    // UserID +
                    // " AND datetime(inserted_date,case when shift='morning' then '15:00:00' else '03:00:00' end) != datetime('" +
                    // date +
                    // "',case when '" +
                    // shift +
                    // "'='morning' then '15:00:00' else '03:00:00' end) order by ID desc limit 1)" ;
                    // let query =
                    // "SELECT * FROM 'DCF' where datetime(inserted_date,inserted_time)>datetime(ifnull((select datetime(inserted_date,inserted_time)  from 'Dispatch' where verified='true' AND User_id=" +
                    // UserID + " AND datetime(inserted_date,case when shift='morning' then '15:00:00' else '03:00:00' end) != datetime('" +
                    // date +
                    // "',case when '" +
                    // shift +
                    // "'='morning' then '15:00:00' else '03:00:00' end) order by ID desc limit 1),datetime('" +
                    // date +
                    // "',case when '" +
                    // shift +
                    // "'='morning' then '03:00:00' else '15:00:00' end))) AND datetime(inserted_date,inserted_time)<= datetime(ifnull((select datetime(inserted_date,inserted_time) from 'Dispatch' where verified='true' AND User_id=" +
                    // UserID + " order by ID desc limit 1),datetime('" +
                    // date +
                    // "',case when '" +
                    // shift +
                    // "'='morning' then '15:00:00' else '03:00:00' end)))"
                    let query = "SELECT * FROM 'DCF' where datetime(inserted_date,inserted_time)>datetime(ifnull((select datetime(inserted_date,inserted_time)  from 'Dispatch' where verified='true' AND User_id=" +
                        UserID +
                        " AND datetime(inserted_date,case when shift='morning' then '15:00:00' else '03:00:00' end) != datetime((select datetime(inserted_date,case when shift='morning' then '15:00:00' else '03:00:00' end) from 'Dispatch' where verified='true' AND User_id=" +
                        UserID +
                        " order by ID desc limit 1 )) order by ID desc limit 1),datetime('1993-01-01','00:00:00'))) AND datetime(inserted_date,inserted_time)<= datetime((select datetime(inserted_date,inserted_time) from 'Dispatch' where verified='true' AND User_id=" +
                        UserID +
                        " order by ID desc limit 1))";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllDCFRecordsAfterPaticularDateAndShift ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecordsAfterPaticularDateAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecordsAfterPaticularDateAndShift error: ", er);
        }
    }
    getAllDCFunuplodedRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND uploded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFunuplodedRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFunuplodedRecords error: ", er);
        }
    }
    getAllDCFunuplodedRecordsFromTillDateAndShift(UserID, fromDate, tillDate, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND inserted_date >='" +
                        fromDate +
                        "' AND inserted_date <='" +
                        tillDate +
                        "'  AND ('" +
                        shift +
                        "'='0' OR ('" +
                        shift +
                        "'!='0' AND shift='" +
                        shift +
                        "' )) AND uploded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("ggetAllDCFunuplodedRecordsFromTillDateAndShift error: ", error);
                });
            });
        }
        catch (er) {
            console.log("ggetAllDCFunuplodedRecordsFromTillDateAndShift error: ", er);
        }
    }
    getAllDCFuplodedRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND uploded='true'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFuplodedRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFuplodedRecords error: ", er);
        }
    }
    getAllDCFuplodedRecordsFromTillDateAndShift(UserID, fromDate, tillDate, shift) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where User_id=" +
                        UserID +
                        " AND inserted_date >='" +
                        fromDate +
                        "' AND inserted_date <='" +
                        tillDate +
                        "'  AND ('" +
                        shift +
                        "'='0' OR ('" +
                        shift +
                        "'!='0' AND shift='" +
                        shift +
                        "' ))  AND uploded='true'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFRecords error: ", er);
        }
    }
    getAllDCFunuplodedRecordsForOfflineUpload() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCF' where uploded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    updateDCFOfflineUploadTrue(DCFID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'DCF' SET uploded='true' where ID=" + DCFID + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        this.events.publish("DcfRecordsChange", "");
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    //============================to inser in dcf witout json============================
    //##To Insert records in DCFwithOutJSON table for a paticular user
    createAndInsertDCFwithOutJSONTable(tag, DeviceID, MacAddress, DirectoryName, FileName, m_type, ShownResult, Date, Time, m_milktype, volume, Farmer_ID, fatinmilk, snfinmilk, Density, Protein, Lactose, SaltInMilk, Freezingpoint, SerialNo, AddedWater, Temperature, Ph, Co, Unique_Identifier, Milk_Accepted, Retest, Retest_Uid, ExptExl, TestingSource, CollectionCentre_ID, Today_FirstData, User_id, TimeStamp, Sequence_number, url, uploded, key, dbcode) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'DCFwithOutJSON' 
        (
          tag text,DeviceID text,MacAddress text,DirectoryName text,FileName text,m_type text,ShownResult text,Date text,
          Time text,m_milktype text,volume text,Farmer_ID text,fatinmilk text,snfinmilk text,Density text,
          Protein text,Lactose text,SaltInMilk text,Freezingpoint text,SerialNo text,AddedWater text,Temperature text,Ph text,
          Co text,Unique_Identifier text,Milk_Accepted text,Retest text,Retest_Uid text,
          ExptExl text,TestingSource text,CollectionCentre_ID text,Today_FirstData text,User_id INTEGER,TimeStamp text,
          Sequence_number text,url text,uploded text,key text,dbcode text,inserted_datetime datetime
        )`,
                        [
                            `INSERT INTO 'DCFwithOutJSON' VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
          ?,?,?,?,?,datetime('now','localtime'))`,
                            [
                                tag,
                                DeviceID,
                                MacAddress,
                                DirectoryName,
                                FileName,
                                m_type,
                                ShownResult,
                                Date,
                                Time,
                                m_milktype,
                                volume,
                                Farmer_ID,
                                fatinmilk,
                                snfinmilk,
                                Density,
                                Protein,
                                Lactose,
                                SaltInMilk,
                                Freezingpoint,
                                SerialNo,
                                AddedWater,
                                Temperature,
                                Ph,
                                Co,
                                Unique_Identifier,
                                Milk_Accepted,
                                Retest,
                                Retest_Uid,
                                ExptExl,
                                TestingSource,
                                CollectionCentre_ID,
                                Today_FirstData,
                                User_id,
                                TimeStamp,
                                Sequence_number,
                                url,
                                uploded,
                                key,
                                dbcode,
                            ],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertDCFwithOutJSONTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertDCFwithOutJSONTable error: ", er);
        }
    }
    getAllDCFwithOutJSONRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCFwithOutJSON' where User_id=" + UserID + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFwithOutJSONRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFwithOutJSONRecords error: ", er);
        }
    }
    getAllDCFwithOutJSONunuplodedRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCFwithOutJSON' where User_id=" +
                        UserID +
                        " AND uploded=false";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFwithOutJSONunuplodedRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFwithOutJSONunuplodedRecords error: ", er);
        }
    }
    getAllDCFwithOutJSONuplodedRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'DCFwithOutJSON' where User_id=" +
                        UserID +
                        " AND uploded=true";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDCFwithOutJSONuplodedRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDCFwithOutJSONuplodedRecords error: ", er);
        }
    }
    //===========================================================================================
    //===================================For Fat Snf Correction==================================
    createAndInsertFatSnfCorrectionTable(json, User_id, url, uploded, key, dbcode) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'FatSnfCorrection' 
      (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,json text,User_id INTEGER,url text,uploded text,key text,dbcode text,inserted_date text,inserted_time text
      )`,
                        [
                            `INSERT INTO 'FatSnfCorrection' (json ,User_id ,url ,uploded ,key ,dbcode ,inserted_date ,inserted_time ) VALUES (?,?,?,?,?,?,date(datetime('now','localtime')),time(datetime('now','localtime')))`,
                            [json, User_id, url, uploded, key, dbcode],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertFatSnfCorrectionTable error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertFatSnfCorrectionTable error: ", er);
        }
    }
    getAllFatSnfCorrectionRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'FatSnfCorrection' where User_id=" + UserID + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllFatSnfCorrectionRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllFatSnfCorrectionRecords error: ", er);
        }
    }
    getAllFatSnfCorrectionRecordsByDate(UserID, date) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'FatSnfCorrection' where User_id=" +
                        UserID +
                        " AND inserted_date='" +
                        date +
                        "'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("getAllFatSnfCorrectionRecordsByDate ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllFatSnfCorrectionRecordsByDate error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllFatSnfCorrectionRecords error: ", er);
        }
    }
    getAllFatSnfCorrectionunuplodedRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'FatSnfCorrection' where User_id=" +
                        UserID +
                        " AND uploded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllFatSnfCorrectionunuplodedRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllFatSnfCorrectionunuplodedRecords error: ", er);
        }
    }
    getAllFatSnfCorrectionuplodedRecords(UserID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'FatSnfCorrection' where User_id=" +
                        UserID +
                        " AND uploded='true'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllFatSnfCorrectionuplodedRecords error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllFatSnfCorrectionuplodedRecords error: ", er);
        }
    }
    getAllFatSnfCorrectionunuplodedRecordsForOfflineUpload() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'FatSnfCorrection' where uploded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllFatSnfCorrectionunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllFatSnfCorrectionunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    updateFatSnfCorrectionOfflineUploadTrue(FatSnfCorrectionID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'FatSnfCorrection' SET uploded='true' where ID=" +
                        FatSnfCorrectionID +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllFatSnfCorrectionunuplodedRecordsForOfflineUpload error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllFatSnfCorrectionunuplodedRecordsForOfflineUpload error: ", er);
        }
    }
    //=================================chemical testing=======================================
    createAndInsertChemicalTestingTable(json, User_id, fedrationId, url, uploaded, key, dbcode) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'ChemicalTesting'(ID INTEGER PRIMARY KEY AUTOINCREMENT, json text, User_id INTEGER, fedrationId text, url text, uploaded text, key text, dbcode text, inserted_date text, inserted_time text)`,
                        [
                            `INSERT INTO 'ChemicalTesting'(json,User_id,fedrationId,url,uploaded,key,dbcode,inserted_date,inserted_time) VALUES(?,?,?,?,?,?,?,date (datetime('now','localtime')),time(datetime('now','localtime')))`,
                            [json, User_id, fedrationId, url, uploaded, key, dbcode],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                });
            });
        }
        catch (err) {
            console.log("createAndInsertChemicalTestingTable error: ", err);
        }
    }
    getAllChemicalTestsUnuploadedRecordsForOfflineUpload() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'ChemicalTesting' WHERE uploaded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        // console.log(res) ;
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                });
            });
        }
        catch (err) {
            console.log("getAllChemicalTestsUnuploadedRecordsForOfflineUpload error", err);
        }
    }
    updateChemicalTestingOfflineUploadTrue(chemicalTestId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'ChemicalTesting' SET uploaded='true' where ID=" +
                        chemicalTestId +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("updating chemical testing result: ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateChemicalTestingOfflineUploadTrue error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateChemicalTestingOfflineUploadTrue error: ", er);
        }
    }
    changeChemicalTestedStatus(dcfId, json) {
        console.log("this is data :", dcfId, json);
        try {
            return new Promise((resolve, reject) => {
                this.dbName
                    .open()
                    .then(() => {
                    let query = "UPDATE 'DCF' SET json='" + json + "' " + "where ID=" + dcfId;
                    console.log("this is query", query);
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("changing chemical tested status: ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }
                // ,
                // (error) => {
                //   console.log(" error: ", error) ;
                // }
                )
                    .catch((err) => {
                    console.log(err);
                });
            });
        }
        catch (er) {
            console.log(" error: ", er);
        }
    }
    //=================================sour milk testing--start================================
    createAndInsertSourMilkTestingTable(json, User_id, fedrationId, url, uploaded, key, dbcode) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'SourMilkTesting'(ID INTEGER PRIMARY KEY AUTOINCREMENT, json text, User_id INTEGER, fedrationId text, url text, uploaded text, key text, dbcode text, inserted_date text, inserted_time text)`,
                        [
                            `INSERT INTO 'SourMilkTesting'(json,User_id,fedrationId,url,uploaded,key,dbcode,inserted_date,inserted_time) VALUES(?,?,?,?,?,?,?,date (datetime('now','localtime')),time(datetime('now','localtime')))`,
                            [json, User_id, fedrationId, url, uploaded, key, dbcode],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                });
            });
        }
        catch (err) {
            console.log("createAndInsertChemicalTestingTable error: ", err);
        }
    }
    updateSourMilkTestingOfflineUploadTrue(sourMilkTestId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'SourMilkTesting' SET uploaded='true' where ID=" +
                        sourMilkTestId +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("updating sour milk testing result: ", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateSourMilkTestingOfflineUploadTrue error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateSourMilkTestingOfflineUploadTrue error: ", er);
        }
    }
    getAllSourMilkTestsUnuploadedRecordsForOfflineUpload() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'SourMilkTesting' WHERE uploaded='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        // console.log(res) ;
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                });
            });
        }
        catch (err) {
            console.log("getAllSourMilkTestsUnuploadedRecordsForOfflineUpload error", err);
        }
    }
    //=================================sour milk testing--end==================================
    //==========================================upload offline data===========================================
    getUploadOfflineData(tablename, urlColumn, uploadedColumn, idColumn) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT " +
                        idColumn +
                        "," +
                        urlColumn +
                        " FROM " +
                        tablename +
                        " where " +
                        uploadedColumn +
                        "='false'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getUploadOfflineData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getUploadOfflineData error: ", er);
        }
    }
    UploadOfflineDataTrue(tablename, uploadedColumn, idColumn, idValue) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE " +
                        tablename +
                        " set " +
                        uploadedColumn +
                        "='true' where " +
                        idColumn +
                        "=" +
                        idValue +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("UploadOfflineDataTrue error: ", error);
                });
            });
        }
        catch (er) {
            console.log("UploadOfflineDataTrue error: ", er);
        }
    }
    //========================================================================================================
    getUserTableData() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'USER_LOGIN'";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getUserTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getUserTableData error: ", er);
        }
    }
    insertData(name, age) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "INSERT INTO 'TESTINGDATA' (name, age) VALUES ('" +
                        name +
                        "'," +
                        age +
                        ")";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                });
            });
        }
        catch (er) {
            console.log("insertData error: ", er);
        }
    }
    updateData(name, age) {
        return new Promise((resolve, reject) => {
            this.dbName.open().then(() => {
                let query = "UPDATE 'TESTINGDATA' SET name='No name', age=19 WHERE name='" +
                    name +
                    "' and age =" +
                    age;
                this.dbName
                    .executeSql(query, [])
                    .then((res) => {
                    console.log(res);
                    resolve(res);
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    deleteData(name, age) {
        return new Promise((resolve, reject) => {
            this.dbName.open().then(() => {
                let query = "DELETE FROM 'TESTINGDATA' WHERE name='" + name + "' and age=" + age;
                this.dbName
                    .executeSql(query, [])
                    .then((res) => {
                    console.log(res);
                    resolve(res);
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    deleteAllRows() {
        return new Promise((resolve, reject) => {
            this.dbName.open().then(() => {
                let query = "DELETE FROM 'TESTINGDATA'";
                this.dbName
                    .executeSql(query, [])
                    .then((res) => {
                    console.log(res);
                    resolve(res);
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    getData() {
        return new Promise((resolve, reject) => {
            this.dbName.open().then(() => {
                let query = "SELECT * FROM 'TESTINGDATA'";
                this.dbName
                    .executeSql(query, [])
                    .then((res) => {
                    console.log(res);
                    resolve(res);
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    //=======bmc list (gfo) in local db======
    createAndInsertBmcList(BMCId, BMCName, DFID, CCID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'BmcNew' (UID INTEGER PRIMARY KEY AUTOINCREMENT,BMCId INTEGER, BMCName text,DFID text,CCID text)",
                        [
                            `INSERT INTO 'BmcNew' (BMCId,BMCName,DFID,CCID) VALUES (?,?,?,?)`,
                            [BMCId, BMCName, DFID, CCID],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertBmcList error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertBmcList error: ", er);
        }
    }
    deleteRowsFromBmcList(DFID, CCID) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = "DELETE FROM 'BmcNew' WHERE DFID=" +
                        DFID +
                        " AND CCID=" +
                        CCID +
                        "";
                    this.dbName
                        .executeSql(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("deleteRowsFromBmcList error: ", error);
                });
            });
        }
        catch (er) {
            console.log("deleteRowsFromBmcList error: ", er);
        }
    }
    getAllBmc(dfId, ccId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * FROM 'BmcNew' where DFID=" +
                        dfId +
                        " AND CCID=" +
                        ccId +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllBmc error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllBmc error: ", er);
        }
    }
    //=======bmc list (gfo) in local db end======
    //===========sftp push data start======================
    createAndInsertSftpPushData(sftpUrl, Uploaded, UserId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'SftpPushData' (SftpPushData_ID INTEGER PRIMARY KEY AUTOINCREMENT, url text,Uploaded text,UserId INTEGER,InsertedDateTime text)",
                        [
                            `INSERT INTO 'SftpPushData' (InsertedDateTime,url,Uploaded,UserId) VALUES (datetime('now','localtime'),?,?,?)`,
                            [sftpUrl, Uploaded, UserId],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertBmcList error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertBmcList error: ", er);
        }
    }
    updateSftpPushData(sftpUrl, UserId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'SftpPushData' SET Uploaded='true' where url='" +
                        sftpUrl +
                        "' and UserId=" +
                        UserId +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateSftpPushData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateSftpPushData error: ", er);
        }
    }
    //===========sftp push data end======================
    //===========get transporters based on userid start======================
    createAndInsertInboundTransporterDetails(json, UserId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "CREATE TABLE IF NOT EXISTS 'InboundTransporterDetails' (InboundTransporterDetails_ID INTEGER PRIMARY KEY AUTOINCREMENT, json text,UserId INTEGER,InsertedDateTime text)",
                        [
                            `INSERT INTO 'InboundTransporterDetails' (InsertedDateTime,json,UserId) VALUES (datetime('now','localtime'),?,?)`,
                            [json, UserId],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("createAndInsertBmcList error: ", error);
                });
            });
        }
        catch (er) {
            console.log("createAndInsertBmcList error: ", er);
        }
    }
    deleteInboundTransporterDetails(userId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        "DELETE FROM 'InboundTransporterDetails' WHERE UserId=" + userId,
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                }, (error) => {
                    console.log("deleteInboundTransporterDetails error: ", error);
                });
            });
        }
        catch (er) {
            console.log("deleteInboundTransporterDetails error: ", er);
        }
    }
    getInboundTransporterDetailsByUserId(userId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT json from 'InboundTransporterDetails' where UserID=" +
                        userId +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getInboundTransporterDetailsByUserId error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getInboundTransporterDetailsByUserId error: ", er);
        }
    }
    //===========get transporters based on userid end======================
    getAllDispatch() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * from 'Dispatch'" + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllDispatch error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllDispatch error: ", er);
        }
    }
    getAllSftpPush() {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "SELECT * from 'SftpPushData'" + "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getAllSftpPush error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getAllSftpPush error: ", er);
        }
    }
    //====================================for calibration report==============================
    createAndInsertCalibrationData(uid, calDataUrl, Uploaded, UserId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'CalibrationRecords'
              (Calibration_ID INTEGER PRIMARY KEY AUTOINCREMENT,
                Unique_Identifier text UNIQUE,
                 url text, Uploaded text, UserId INTEGER, 
                 InsertedDateTime text)`,
                        [
                            `INSERT INTO 'CalibrationRecords'
                (InsertedDateTime,Unique_Identifier,url,Uploaded,UserId) 
              VALUES(datetime('now','localtime'),?,?,?,?)`,
                            [uid, calDataUrl, Uploaded, UserId],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
                });
            });
        }
        catch (err) {
            console.log("createAndInsertCalibrationData error: ", err);
        }
    }
    updateCalibrationData(calDataUrl, UserId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'CalibrationRecords' SET Uploaded='true' where url='" +
                        calDataUrl +
                        "' and UserId=" +
                        UserId +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateCalibrationData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateCalibrationData error: ", er);
        }
    }
    getCalibrationData(userid, uploaded) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query;
                    if (uploaded != "0") {
                        console.log("Calibration uploaded", uploaded);
                        query =
                            "SELECT * FROM 'CalibrationRecords' where UserId=" +
                                userid +
                                " AND Uploaded='" +
                                uploaded +
                                "'";
                    }
                    else {
                        // query= "SELECT * FROM 'Cleaninglog' where UserID=" + userid "" ;
                        query =
                            "SELECT * FROM 'CalibrationRecords' where UserID=" +
                                userid +
                                "";
                    }
                    // let query = "SELECT * FROM 'Cleaninglog' where UserID=" + userid ;
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("This  is calibration data");
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1PriceProfileTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1PriceProfileTableData error: ", er);
        }
    }
    //====================================for cleaning report==============================
    createAndInsertCleaningData(uid, calDataUrl, Uploaded, UserId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'CleaningRecords'(Cleaning_ID INTEGER PRIMARY KEY AUTOINCREMENT,
                Unique_Identifier text UNIQUE,
                 url text, Uploaded text, UserId INTEGER, InsertedDateTime text)`,
                        [
                            `INSERT INTO 'CleaningRecords'(InsertedDateTime,Unique_Identifier,url,Uploaded,UserId) 
              VALUES(datetime('now','localtime'),?,?,?,?)`,
                            [uid, calDataUrl, Uploaded, UserId],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log("Cleaning table", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log("Cleaning table err", err);
                        reject(err);
                    });
                });
            });
        }
        catch (err) {
            console.log("createAndInsertCleaningData error: ", err);
        }
    }
    createAndInsertCleaningData2(UserId, date, time) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then((res) => {
                    let query = [
                        `CREATE TABLE IF NOT EXISTS 'CleaningRecords'(Cleaning_ID INTEGER PRIMARY KEY AUTOINCREMENT,
                Unique_Identifier text UNIQUE,
                 url text, Uploaded text, UserId INTEGER, InsertedDateTime text)`,
                        [
                            `INSERT INTO 'CleaningRecords'(InsertedDateTime,Unique_Identifier,url,Uploaded,UserId) 
              VALUES(datetime("${date} ${time}"),"","","true",?)`,
                            [UserId],
                        ],
                    ];
                    this.dbName
                        .sqlBatch(query)
                        .then((res) => {
                        console.log("Cleaning table", res);
                        resolve(res);
                    })
                        .catch((err) => {
                        console.log("Cleaning table err", err);
                        reject(err);
                    });
                });
            });
        }
        catch (err) {
            console.log("createAndInsertCleaningData error: ", err);
        }
    }
    getCleaningData(userid, uploaded) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query;
                    if (uploaded != "0") {
                        console.log("Cleaning uploaded", uploaded);
                        query =
                            "SELECT * FROM 'CleaningRecords' where UserId=" +
                                userid +
                                " AND Uploaded='" +
                                uploaded +
                                "'";
                    }
                    else {
                        // query= "SELECT * FROM 'Cleaninglog' where UserID=" + userid "" ;
                        query =
                            "SELECT * FROM 'CleaningRecords' where UserID=" + userid + "";
                    }
                    // let query = "SELECT * FROM 'Cleaninglog' where UserID=" + userid ;
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("This  is cleaning data");
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1PriceProfileTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1PriceProfileTableData error: ", er);
        }
    }
    updateCleaningData(calDataUrl, UserId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "UPDATE 'CleaningRecords' SET Uploaded='true' where url='" +
                        calDataUrl +
                        "' and UserId=" +
                        UserId +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("updateCleaningData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("updateCleaningData error: ", er);
        }
    }
    deleteCleaningData(UserId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query = "DELETE FROM 'CleaningRecords' where Uploaded='true' and" +
                        " UserId=" +
                        UserId +
                        "";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("deleteCleaningData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("deleteCleaningData error: ", er);
        }
    }
    getCleaningDataOfMaxDate(userId) {
        try {
            return new Promise((resolve, reject) => {
                this.dbName.open().then(() => {
                    let query;
                    query =
                        "SELECT * FROM 'CleaningRecords' where UserId=" +
                            userId +
                            " order by InsertedDateTime desc limit 1";
                    this.dbName
                        .executeSql(query, [])
                        .then((res) => {
                        console.log("This is cleaning data");
                        console.log(res);
                        resolve(res);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                }, (error) => {
                    console.log("getTop1PriceProfileTableData error: ", error);
                });
            });
        }
        catch (er) {
            console.log("getTop1PriceProfileTableData error: ", er);
        }
    }
};
SqlService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__.AppVersion },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite },
    { type: _events_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService }
];
SqlService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], SqlService);



/***/ }),

/***/ 35839:
/*!***************************************************************************************!*\
  !*** ./src/app/services/start-uploading-serivice/start-uploading-serivice.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartUploadingSeriviceService": () => (/* binding */ StartUploadingSeriviceService)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _utils_BaseComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/BaseComp */ 88075);
/* harmony import */ var _sql_sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sql/sql.service */ 98420);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17265);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);






 // import { WeightRecords } from 'src/app/pages/edpu-startweightcollection/edpu-startweightcollection.page';


let StartUploadingSeriviceService = class StartUploadingSeriviceService extends _utils_BaseComp__WEBPACK_IMPORTED_MODULE_1__.BaseComp {
  constructor(localNotifications, http, db, toastCtrl, loadingCtrl) {
    super();
    this.localNotifications = localNotifications;
    this.http = http;
    this.db = db;
    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.DcfofflineRecords = [];
    this.notgetUploded = 0;
    this.Uplodedsuccessfully = 0;
    this.chemicalTestingOfflineRecords = [];
    this.sourMilkTestingOfflineRecords = []; //===================================================priceprofile and priceprofilesceme====================================================

    this.priceProfile2_List = []; //=======================================================================================================

    this.priceProfileScheme_List = []; // for progress bar in notification

    this.Progressvalue = 0;
    console.log('Hello StartUploadingSeriviceProvider Provider'); // events.subscribe("login_done", (data) => {
    //   console.log("login_done:-" + data);
    //   this.DatabaseCode = this.getItem("Db_code");
    // });
  }

  DCFOfflineApi(json, fedrationId, Dcf_id, key, dbcode, uploded, total) {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (fedrationId) {
        case 6:
          {
            yield _this.callDcfOfflineApiForGyan(json, Dcf_id, key, dbcode, uploded, total);
            break;
          }

        default:
          {
            yield _this.callDcfOfflineApi(json, Dcf_id, key, dbcode, uploded, total);
            break;
          }
      }
    })();
  }

  callDcfOfflineApi(json, Dcf_id, key, dbcode, uploded, total) {
    var _this2 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let postData = new FormData(); // let ApiUrl="api/DataCollectionFarmerApi/DCFoffline?dataCollectionFarmerModelDetail=" ;

      let url = _this2.BASE_URL + 'api/DataCollectionFarmerApi/DCFoffline?dataCollectionFarmerModelDetail=' + JSON.stringify(json) + '&Key=' + key + '&con=' + dbcode;
      console.log('url:-' + url);

      try {
        if (_this2.getItem('InternetStatus') == '1') {
          console.log('no internet connectivity'); //this.localNotifications.clear(2) ;
          // this.foreNotif("Uploding Intrrupted","Inernet connectivity get lost")

          console.log('network status 1 means offline: ', _this2.getItem('InternetStatus'));
        } else {
          yield _this2.http.post(url, postData).toPromise().then(result => {
            //loading.dismiss() ;
            try {
              console.log('result:-' + JSON.stringify(result));
              var result = result;

              if (result == 'True' || result == 'Already Exist' || result == 'Insert Successfully') {
                _this2.db.updateDCFOfflineUploadTrue(Dcf_id);

                _this2.Uplodedsuccessfully += 1;

                _this2.progressNotif(_this2.Uplodedsuccessfully, total, 2);

                console.log(uploded, ' , ', total);
              } else {
                _this2.notgetUploded += 1;
              }
            } catch (e) {
              console.log(e);
              _this2.notgetUploded += 1;
            }
          }, error => {
            //loading.dismiss() ;
            console.log('API Error', error);
            _this2.notgetUploded += 1; // this.somethingWentWrongError(this.toastCtrl) ;
          });
        }
      } catch (er) {
        console.log('DCF offline api error', er);
      }
    })();
  }

  callDcfOfflineApiForGyan(json, Dcf_id, key, dbcode, uploded, total) {
    var _this3 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // insert Gyan integration api here example if dATA NEED to send at everest server then isert that api here
      yield _this3.callDcfOfflineApi(json, Dcf_id, key, dbcode, uploded, total); // call api to insert data in qboid db
    })();
  }

  HitAllDcfOfflineRecords() {
    var _this4 = this;

    console.log('HitAllDcfOfflineRecords start-uploading');
    this.DcfofflineRecords = [];
    this.Progressvalue = 0;
    this.notgetUploded = 0;
    this.Uplodedsuccessfully = 0; // this.db.getAllDCFunuplodedRecordsForOfflineUpload()

    return new Promise((resolve, reject) => {
      this.db.getAllDCFunuplodedRecordsForOfflineUpload().then( /*#__PURE__*/function () {
        var _ref = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log('db dcf: ' + res);
          console.log('db dcf.rows.length : ' + res.rows.length);

          for (let i = 0; i < res.rows.length; i++) {
            const Dcf_Json = JSON.parse(res.rows.item(i).json);
            console.log('json parse: ', Dcf_Json);
            const OfflineData = {
              Dcf_id: res.rows.item(i).ID,
              json: Dcf_Json,
              uploded: res.rows.item(i).uploded,
              fedrationId: res.rows.item(i).fedrationId,
              key: res.rows.item(i).key,
              DatabaseCode: res.rows.item(i).dbcode
            };

            _this4.DcfofflineRecords.push(OfflineData);

            if (_this4.getItem('InternetStatus') == '1') {
              break;
            } else {
              yield _this4.DCFOfflineApi(OfflineData.json, OfflineData.fedrationId, OfflineData.Dcf_id, OfflineData.key, OfflineData.DatabaseCode, i + 1, res.rows.length);
            }
          }

          if (res.rows.length > 0) {
            if (_this4.notgetUploded < res.rows.length && _this4.notgetUploded > 0 && _this4.Uplodedsuccessfully > 0) {
              cordova.plugins.notification.local.clear(2);

              _this4.foreNotif('Upload successfully', '' + _this4.Uplodedsuccessfully + ' records uploded successfully. Try manual sink for others after some time', 1);
            } else if (_this4.notgetUploded == 0 && _this4.Uplodedsuccessfully > 0) {
              cordova.plugins.notification.local.clear(2);

              _this4.foreNotif('Upload successfully', '' + _this4.Uplodedsuccessfully + ' records uploded successfully.', 1);
            } else {
              cordova.plugins.notification.local.clear(2);

              _this4.foreNotif('Try Manual sink after some time', '' + (res.rows.length - _this4.Uplodedsuccessfully) + ' records get failed to upload. Try manual sink after some time', 1);
            }
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).then(() => {
        resolve(1);
      }).catch(error => {
        console.log('getany error: ', error);
        reject();
      });
    });
  } //====================================Delivery Boy==========================================


  UploadDeliveryBoyDeliveriesApi(id, json, key, dbcode, uploded, total) {
    var _this5 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let postData = new FormData(); // let ApiUrl="api/DataCollectionFarmerApi/DCFoffline?dataCollectionFarmerModelDetail=" ;

      let url = _this5.BASE_URL + 'api/ProvenanceApi/addDelivered?MilkDetail=' + json + '&Key=' + key + '&con=' + dbcode;
      console.log('url:-' + url);

      if (_this5.getItem('InternetStatus') == '1') {
        console.log('no internet connectivity'); //this.localNotifications.clear(2);
        // this.foreNotif("Uploding Intrrupted","Inernet connectivity get lost")

        console.log('network status 1 means offline: ', _this5.getItem('InternetStatus'));
      } else {
        yield _this5.http.get(url).toPromise().then(result => {
          //loading.dismiss() ;
          try {
            // console.log("data:-" + JSON.stringify(result)) ;
            var parsedJSON = JSON.parse(JSON.stringify(result));

            if (parsedJSON[0].ErrorCode == '1000' || parsedJSON[0].ErrorCode == '1011') {
              _this5.db.updateDeliveryBoyDeliveryUploadTrue(id);

              _this5.Uplodedsuccessfully += 1;

              _this5.progressNotif(_this5.Uplodedsuccessfully, total, 2);

              console.log(uploded, ' , ', total);
            } else {
              _this5.notgetUploded += 1;
            }
          } catch (e) {
            console.log(e);
            _this5.notgetUploded += 1;
          }
        }, error => {
          //loading.dismiss() ;
          console.log('API Error', error);
          _this5.notgetUploded += 1; // this.somethingWentWrongError(this.toastCtrl) ;
        });
      }
    })();
  }

  HitAllDeliveryBoyDeliveriesOfflineRecords() {
    var _this6 = this;

    this.Progressvalue = 0;
    this.notgetUploded = 0;
    this.Uplodedsuccessfully = 0; // this.db.getAllDCFunuplodedRecordsForOfflineUpload()

    this.db.getAllDeliveryBoyDeliveryunuplodedRecordsForOfflineUpload(this.setDate()).then( /*#__PURE__*/function () {
      var _ref2 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('db DeliveryBoyDelivery: ' + res);
        console.log('db DeliveryBoyDelivery.rows.length : ' + res.rows.length);

        for (let i = 0; i < res.rows.length; i++) {
          if (_this6.getItem('InternetStatus') == '1') {
            break;
          } else {
            yield _this6.UploadDeliveryBoyDeliveriesApi(res.rows.item(i).Delivery_ID, res.rows.item(i).json, res.rows.item(i).key, res.rows.item(i).dbcode, i + 1, res.rows.length);
          }
        }

        if (res.rows.length > 0) {
          if (_this6.notgetUploded < res.rows.length && _this6.notgetUploded > 0 && _this6.Uplodedsuccessfully > 0) {
            cordova.plugins.notification.local.clear(2);

            _this6.foreNotif('Upload successfully', '' + _this6.Uplodedsuccessfully + ' records uploded successfully. Try manual sink for others after some time', 1);
          } else if (_this6.notgetUploded == 0 && _this6.Uplodedsuccessfully > 0) {
            cordova.plugins.notification.local.clear(2);

            _this6.foreNotif('Upload successfully', '' + _this6.Uplodedsuccessfully + ' records uploded successfully.', 1);
          } else {
            cordova.plugins.notification.local.clear(2);

            _this6.foreNotif('Try Manual sink after some time', '' + (res.rows.length - _this6.Uplodedsuccessfully) + ' records get failed to upload. Try manual sink after some time', 1);
          }
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), error => {
      console.log('DeliveryBoyDeliveryoffline error: ', error);
    });
  } //========================================weighing==========================================
  // WeightOffline: WeightOffline[] = [];


  GetWeightRecords() {
    var _this7 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield _this7.db.Get_Unuploaded_WeightRecords();
        console.log('db weight: ' + res);
        console.log('db weight.rows.length : ' + res.rows.length); // for (let i = 0; i < res.rows.length; i++) {
        //   const Weight_Json: WeightRecords = JSON.parse(res.rows.item(i).json);
        //   console.log('json parse weight: ', Weight_Json);
        //   const OfflineData: WeightOffline = {
        //     Dcf_id: res.rows.item(i).ID,
        //     json: Weight_Json,
        //     uploded: res.rows.item(i).uploded,
        //     fedrationId: res.rows.item(i).fedrationId,
        //     key: res.rows.item(i).key,
        //     url: res.rows.item(i).url,
        //     DatabaseCode: res.rows.item(i).dbcode,
        //   };
        //   this.WeightOffline.push(OfflineData);
        //   if (this.getItem('InternetStatus') == '1') {
        //     break;
        //   } else {
        //     await this.CallWeightOfflineApi(
        //       OfflineData.json,
        //       OfflineData.Dcf_id,
        //       OfflineData.key,
        //       OfflineData.url,
        //       OfflineData.DatabaseCode,
        //       i + 1,
        //       res.rows.length
        //     );
        //   }
        // }

        if (res.rows.length > 0) {
          if (_this7.notgetUploded < res.rows.length && _this7.notgetUploded > 0 && _this7.Uplodedsuccessfully > 0) {
            cordova.plugins.notification.local.clear(3);

            _this7.foreNotif('Upload successfully', '' + _this7.Uplodedsuccessfully + ' records uploded successfully. Try manual sink for others after some time', 4);
          } else if (_this7.notgetUploded == 0 && _this7.Uplodedsuccessfully > 0) {
            cordova.plugins.notification.local.clear(2);

            _this7.foreNotif('Upload successfully', '' + _this7.Uplodedsuccessfully + ' records uploded successfully.', 4);
          } else {
            cordova.plugins.notification.local.clear(3);

            _this7.foreNotif('Try Manual sink after some time', '' + (res.rows.length - _this7.Uplodedsuccessfully) + ' records get failed to upload. Try manual sink after some time', 4);
          }
        }
      } catch (err) {
        console.log('getany error: ', err);
      }
    })();
  } // CallWeightOfflineApi(
  //   json: WeightRecords,
  //   id,
  //   key,
  //   Apiurl,
  //   dbcode,
  //   uploded,
  //   total
  // ) {
  //   let postData = new FormData();
  //   let url =
  //     this.BASE_URL +
  //     Apiurl +
  //     '[' +
  //     JSON.stringify(json) +
  //     ']&Key=' +
  //     key +
  //     '&con=' +
  //     dbcode;
  //   console.log('url:-' + url);
  //   if (this.getItem('InternetStatus') == '0') {
  //     return this.http
  //       .post(url, postData)
  //       .toPromise()
  //       .then((result) => {
  //         //loading.dismiss();
  //         try {
  //           console.log('result:-' + JSON.stringify(result));
  //           var result = result;
  //           if (
  //             result == 'true' ||
  //             result == 'True' ||
  //             result == 'Already Exist' ||
  //             result == 'Insert Successfully' ||
  //             result == true
  //           ) {
  //             this.db.UpdateWeightRecords(id);
  //             this.Uplodedsuccessfully += 1;
  //             this.progressNotif(this.Uplodedsuccessfully, total, 3);
  //             console.log(uploded, ' , ', total);
  //           } else {
  //             this.notgetUploded += 1;
  //           }
  //         } catch (e) {
  //           console.log(e);
  //           this.notgetUploded += 1;
  //         }
  //       })
  //       .catch((error) => {
  //         //loading.dismiss();
  //         console.log('API Error', error);
  //         this.notgetUploded += 1;
  //         // this.somethingWentWrongError(this.toastCtrl);
  //       });
  //   } else {
  //     console.log('no internet connectivity');
  //     console.log(
  //       'network status 1 means offline: ',
  //       this.getItem('InternetStatus')
  //     );
  //   }
  // }
  //===================================================Chemical Testing=====================================


  chemicalTestOfflineApi(json, fedrationId, chemicalTestId, key, dbCode, uploaded, total) {
    var _this8 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.callChemicalTestingOfflineApi(json, chemicalTestId, key, dbCode, uploaded, total);
    })();
  }

  callChemicalTestingOfflineApi(json, chemicalTestId, key, dbcode, uploaded, total) {
    var _this9 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const postData = new FormData();
      const dataArray = [];
      json.tag = 'offline';
      dataArray.push(json);
      const url = _this9.BASE_URL + 'api/DataCollectionFarmerApi/addChemicalTest' + '?ChemicalTestDetails=' + JSON.stringify(dataArray) + '&key=' + key + '&con=' + dbcode;
      console.log('url: ', url);
      console.log('called from offline chemical testing function...');

      if (_this9.getItem('InternetStatus') == '1') {
        console.log('no internet connectivity'); //this.localNotifications.clear(2);
        // this.foreNotif("Uploding Intrrupted","Inernet connectivity get lost")

        console.log('network status 1 means offline: ', _this9.getItem('InternetStatus'));
      } else {
        yield _this9.http.post(url, postData).toPromise().then( /*#__PURE__*/function () {
          var _ref3 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            try {
              console.log('result: ', JSON.stringify(res));
              let result = res;

              if (result == 'True' || result == 'Already Exist' || result == 'Insert Successfully') {
                yield _this9.db.updateChemicalTestingOfflineUploadTrue(chemicalTestId);
                _this9.Uplodedsuccessfully = _this9.Uplodedsuccessfully + 1;
                console.log('##########uploaded succesfully: ', _this9.Uplodedsuccessfully, '###########');

                _this9.progressNotif(_this9.Uplodedsuccessfully, total, 3);

                console.log('uploaded ', uploaded, 'out of', total);
              } else {
                _this9.notgetUploded += 1;
              }
            } catch (err) {
              console.log(err);
              _this9.notgetUploded += 1;
            }
          });

          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }(), error => {
          //loading.dismiss() ;
          console.log('API Error', error);
          _this9.notgetUploded += 1; // this.somethingWentWrongError(this.toastCtrl) ;
        }).catch(err => {});
      }
    })();
  }

  hitAllChemicalTestingOfflineRecords() {
    var _this10 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.chemicalTestingOfflineRecords = [];
      _this10.Progressvalue = 0;
      _this10.notgetUploded = 0;
      _this10.Uplodedsuccessfully = 0;

      _this10.db.getAllChemicalTestsUnuploadedRecordsForOfflineUpload().then( /*#__PURE__*/function () {
        var _ref4 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log('db chemical testing: ', res);
          console.log('db chemical testing.rows.length : ' + res.rows.length);

          for (let i = 0; i < res.rows.length; i++) {
            const chemicalTestingJson = JSON.parse(res.rows.item(i).json);
            console.log('json parse: ', chemicalTestingJson);
            const OfflineData = {
              chemicalTest_Id: res.rows.item(i).ID,
              json: chemicalTestingJson,
              uploded: res.rows.item(i).uploded,
              fedrationId: res.rows.item(i).fedrationId,
              key: res.rows.item(i).key,
              DatabaseCode: res.rows.item(i).dbcode
            };

            _this10.chemicalTestingOfflineRecords.push(OfflineData);

            if (_this10.getItem('InternetStatus') == '1') {
              break;
            } else {
              _this10.chemicalTestOfflineApi(OfflineData.json, OfflineData.fedrationId, OfflineData.chemicalTest_Id, OfflineData.key, OfflineData.DatabaseCode, i + 1, res.rows.length).then(result => {
                if (res.rows.length > 0) {
                  console.log('notgetUploaded: ', _this10.notgetUploded, ' uploadSuccessfully: ', _this10.Uplodedsuccessfully);

                  if (_this10.notgetUploded < res.rows.length && _this10.notgetUploded > 0 && _this10.Uplodedsuccessfully > 0) {
                    cordova.plugins.notification.local.clear(2);

                    _this10.foreNotif('Upload Successfully', '' + _this10.Uplodedsuccessfully + ' records uploaded successfully. Try manual sink for others after some time', 3);
                  } else if (_this10.notgetUploded == 0 && _this10.Uplodedsuccessfully > 0) {
                    cordova.plugins.notification.local.clear(2);

                    _this10.foreNotif('Upload successfully', '' + _this10.Uplodedsuccessfully + ' records uploded successfully.', 3);
                  } else {
                    cordova.plugins.notification.local.clear(2);

                    _this10.foreNotif('Try Manual sink after some time', '' + (res.rows.length - _this10.Uplodedsuccessfully) + ' records get failed to upload. Try manual sink after some time', 3);
                  }
                }
              });
            }
          }
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }()).catch(err => {
        console.log('hit all chemical testing offline records error: ', err);
      });
    })();
  } //==============================================upload offline records=====================================


  UploadOfflineRecordsApi(url, tablename, uploadedColumn, idColumn, idValue) {
    var _this11 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let postData = new FormData();
      console.log('url:-' + url);

      if (_this11.getItem('InternetStatus') == '1') {
        console.log('no internet connectivity'); //this.localNotifications.clear(2);
        // this.foreNotif("Uploding Intrrupted","Inernet connectivity get lost")

        console.log('network status 1 means offline: ', _this11.getItem('InternetStatus'));
      } else {
        yield _this11.http.get(url).toPromise().then(result => {
          //loading.dismiss() ;
          try {
            console.log('data:-' + JSON.stringify(result));
            var parsedJSON = JSON.parse(JSON.stringify(result));

            if (result == 'True' || result === 'true' || result == 'Already Exist' || result == 'Insert Successfully' || result == true || parsedJSON[0].ErrorCode == '1000' || parsedJSON[0].ErrorCode == '1011') {
              _this11.db.UploadOfflineDataTrue(tablename, uploadedColumn, idColumn, idValue);
            } else {}
          } catch (e) {
            console.log(e);
          }
        }, error => {
          //loading.dismiss() ;
          console.log('API Error', error);
          _this11.notgetUploded += 1; // this.somethingWentWrongError(this.toastCtrl) ;
        });
      }
    })();
  }

  HitAllOfflineRecords() {
    console.log('this ran!!');
    this.db.OfflineDataTables.forEach(item => {
      var TableName = item.TableName;
      var Table_UrlColumn = item.Table_UrlColumn;
      var Table_UploadedColumn = item.Table_UploadedColumn;
      var Table_IdColumn = item.Table_IdColumn;
      const InboundTransporterRouteStopRecieveTableName = 'InboundTransporterRouteStopRecieve';
      const SftpPushDataTableName = 'SftpPushData';

      if (TableName === InboundTransporterRouteStopRecieveTableName || TableName === SftpPushDataTableName) {
        this.checkIfUnuploadedDcfDataExists().then(res => {
          if (!res) {
            console.log('CALL THE API of this table, CONTINUE'); // CALL THE API of this table, CONTINUE

            this.getOfflineDataAndUploadRecords(TableName, Table_UrlColumn, Table_UploadedColumn, Table_IdColumn);
            return 'done';
          } else {
            console.log("DON'T CALL THE API of this table and hit dcf data"); // DON'T CALL THE API of this table and hit dcf data

            return this.HitAllDcfOfflineRecords();
          }
        }).then(response => {
          console.log('response in second then: ', response);

          if (response !== 'done') {
            console.log('CHECK AGAIN IF DCF DATA EXISTS'); // CHECK AGAIN IF DCF DATA EXISTS

            return this.checkIfUnuploadedDcfDataExists();
          } else {
            console.log('return done');
            return 'done';
          }
        }).then(response => {
          // AND IF NO UNUPLOADED DATA EXISTS THEN CALL THE API OF THIS TABLE AND CONTINUE ELSE HIT DCF DATA
          if (response === 'done') {
            console.log('return done');
            return 'done';
          } else {
            if (!response) {
              console.log('hit table records and return done');
              this.getOfflineDataAndUploadRecords(TableName, Table_UrlColumn, Table_UploadedColumn, Table_IdColumn);
              return 'done';
            } else {
              console.log('hit dcf records');
              return this.HitAllDcfOfflineRecords();
            }
          }
        }).then(response => {
          // CALL THE API OF THIS TABLE REGARDLESS
          console.log('response in last then: ', response);

          if (response === 'done') {
            console.log('response was done');
            this.getOfflineDataAndUploadRecords(TableName, Table_UrlColumn, Table_UploadedColumn, Table_IdColumn);
          } else {
            console.log('response was not done');
            this.getOfflineDataAndUploadRecords(TableName, Table_UrlColumn, Table_UploadedColumn, Table_IdColumn);
          }
        }).catch(err => {
          console.log('error in HitAllOfflineRecords', err);
        });
      } else {
        this.getOfflineDataAndUploadRecords(TableName, Table_UrlColumn, Table_UploadedColumn, Table_IdColumn);
      }
    });
    this.HitAllDcfOfflineRecords();
  }

  getOfflineDataAndUploadRecords(TableName, Table_UrlColumn, Table_UploadedColumn, Table_IdColumn) {
    var _this12 = this;

    this.db.getUploadOfflineData(TableName, Table_UrlColumn, Table_UploadedColumn, Table_IdColumn).then( /*#__PURE__*/function () {
      var _ref5 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('db getUploadOfflineData: ' + res);
        console.log('db getUploadOfflineData.rows.length : ' + res.rows.length);

        for (let i = 0; i < res.rows.length; i++) {
          if (_this12.getItem('InternetStatus') == '1') {
            break;
          } else {
            yield _this12.UploadOfflineRecordsApi(res.rows.item(i)[Table_UrlColumn], TableName, Table_UploadedColumn, Table_IdColumn, res.rows.item(i)[Table_IdColumn]);
          }
        }
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }(), error => {
      console.log('getUploadOfflineData error: ', error);
    });
  }

  checkIfUnuploadedDcfDataExists() {
    return new Promise((resolve, reject) => {
      this.getUnuploadedDcfDataOfDateAndShift(this.getCurrentDateYYYYMMDD(), this.getTestingShift()).then(data => {
        resolve(data.rows.length > 0);
      }).catch(err => {
        reject(err);
      });
    });
  }

  getUnuploadedDcfDataOfDateAndShift(date, shift) {
    return new Promise((resolve, reject) => {
      this.db.getAllDCFunuplodedRecordsFromTillDateAndShift(this.getFarmerUserID(), date, date, shift).then(data => {
        resolve(data); // const parsedData = JSON.parse(JSON.stringify(data)) ;
        // console.log("parsed data from dispatch: ", parsedData) ;
      }).catch(err => {
        reject(err);
        console.log('error in manualDispatch :', err);
      });
    });
  } //======================================Sour Milk Testing===================================


  sourMilkTestingOfflineApi(json, fedrationId, sourMilkTestId, key, dbCode, uploaded, total) {
    var _this13 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this13.callSourMilkTestingOfflineApi(json, sourMilkTestId, key, dbCode, uploaded, total);
    })();
  }

  callSourMilkTestingOfflineApi(json, sourMilkTestId, key, dbcode, uploaded, total) {
    var _this14 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const postData = new FormData();
      const dataArray = []; // json.tag = "offline" ;

      dataArray.push(json);
      const url = _this14.BASE_URL + 'api/DataCollectionFarmerApi/addSourMilkTest' + '?SourMilkTestDetails=' + JSON.stringify(dataArray) + '&key=' + key + '&con=' + dbcode;
      console.log('url: ', url);
      console.log('called from offline sour milk testing function...');

      if (_this14.getItem('InternetStatus') == '1') {
        console.log('no internet connectivity'); //this.localNotifications.clear(2);
        // this.foreNotif("Uploding Intrrupted","Inernet connectivity get lost")

        console.log('network status 1 means offline: ', _this14.getItem('InternetStatus'));
      } else {
        yield _this14.http.post(url, postData).toPromise().then( /*#__PURE__*/function () {
          var _ref6 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            try {
              console.log('result: ', JSON.stringify(res));
              let result = res;

              if (result == 'True' || result == 'Already Exist' || result == 'Insert Successfully') {
                yield _this14.db.updateSourMilkTestingOfflineUploadTrue(sourMilkTestId);
                _this14.Uplodedsuccessfully = _this14.Uplodedsuccessfully + 1;
                console.log('##########uploaded succesfully: ', _this14.Uplodedsuccessfully, '###########');

                _this14.progressNotif(_this14.Uplodedsuccessfully, total, 3);

                console.log('uploaded ', uploaded, 'out of', total);
              } else {
                _this14.notgetUploded += 1;
              }
            } catch (err) {
              console.log(err);
              _this14.notgetUploded += 1;
            }
          });

          return function (_x6) {
            return _ref6.apply(this, arguments);
          };
        }(), error => {
          //loading.dismiss() ;
          console.log('API Error', error);
          _this14.notgetUploded += 1; // this.somethingWentWrongError(this.toastCtrl) ;
        }).catch(err => {});
      }
    })();
  }

  hitAllSourMilkTestingOfflineRecords() {
    var _this15 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this15.chemicalTestingOfflineRecords = [];
      _this15.Progressvalue = 0;
      _this15.notgetUploded = 0;
      _this15.Uplodedsuccessfully = 0;

      _this15.db.getAllSourMilkTestsUnuploadedRecordsForOfflineUpload().then( /*#__PURE__*/function () {
        var _ref7 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log('db sour milk testing: ', res);
          console.log('db sour milk testing.rows.length : ' + res.rows.length);
          const totalRowsToShow = res.rows.filter(r => r.ShowRecord === 'true');

          for (let i = 0; i < res.rows.length; i++) {
            const sourMilkTestJson = JSON.parse(res.rows.item(i).json);
            console.log('json parse: ', sourMilkTestJson);
            const OfflineData = {
              sourMilkTest_Id: res.rows.item(i).ID,
              json: sourMilkTestJson,
              uploded: res.rows.item(i).uploded,
              fedrationId: res.rows.item(i).fedrationId,
              key: res.rows.item(i).key,
              DatabaseCode: res.rows.item(i).dbcode
            };

            _this15.sourMilkTestingOfflineRecords.push(OfflineData);

            if (_this15.getItem('InternetStatus') == '1') {
              break;
            } else {
              // this.sourMilkTestingOfflineApi(
              //   OfflineData.json,
              //   OfflineData.fedrationId,
              //   OfflineData.sourMilkTest_Id,
              //   OfflineData.key,
              //   OfflineData.DatabaseCode,
              //   i + 1,
              //   res.rows.length
              // )
              _this15.sourMilkTestingOfflineApi(OfflineData.json, OfflineData.fedrationId, OfflineData.sourMilkTest_Id, OfflineData.key, OfflineData.DatabaseCode, i + 1, res.rows.length).then(result => {
                if (res.rows.length > 0) {
                  console.log('notgetUploaded: ', _this15.notgetUploded, ' uploadSuccessfully: ', _this15.Uplodedsuccessfully);

                  if (_this15.notgetUploded < res.rows.length && _this15.notgetUploded > 0 && _this15.Uplodedsuccessfully > 0) {
                    cordova.plugins.notification.local.clear(2);

                    _this15.foreNotif('Upload Successfully', '' + _this15.Uplodedsuccessfully + ' records uploaded successfully. Try manual sink for others after some time', 3);
                  } else if (_this15.notgetUploded == 0 && _this15.Uplodedsuccessfully > 0) {
                    cordova.plugins.notification.local.clear(2);

                    _this15.foreNotif('Upload successfully', '' + _this15.Uplodedsuccessfully + ' records uploded successfully.', 3);
                  } else {
                    cordova.plugins.notification.local.clear(2);

                    _this15.foreNotif('Try Manual sink after some time', '' + (res.rows.length - _this15.Uplodedsuccessfully) + ' records get failed to upload. Try manual sink after some time', 3);
                  }
                }
              });
            }
          }
        });

        return function (_x7) {
          return _ref7.apply(this, arguments);
        };
      }()).catch(err => {
        console.log('hit all sour milk testing offline records error: ', err);
      });
    })();
  }

  getStoredPriceProfiles(ccid, chcid, did) {
    var _this16 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this16.getItem('InternetStatus') == '1') {
        console.log('no internet connectivity'); //this.localNotifications.clear(2);
        // this.foreNotif("Uploding Intrrupted","Inernet connectivity get lost")

        console.log('network status 1 means offline: ', _this16.getItem('InternetStatus'));
      } else {
        let loadingf = yield _this16.loadingComp(_this16.loadingCtrl);
        loadingf.present();
        _this16.priceProfile2_List = [];
        let childIdAray = [];

        _this16.db.getAllPriceProfile2TableData(_this16.getFarmerUserID()).then(res => {
          loadingf.dismiss();
          console.log('db getAllPriceProfile2TableData: ' + res);
          console.log('db getAllPriceProfile2TableData.rows.length : ' + res.rows.length);

          if (res.rows.length > 0) {
            //##if farmer not exist
            for (let i = 0; i < res.rows.length; i++) {
              _this16.priceProfile2_List.push(res.rows.item(i));

              childIdAray.push(res.rows.item(i).child_Id);
            }
          } else {
            childIdAray.push('0');
          }

          _this16.callPriceProfileForCollectioncentre(ccid, chcid, did, childIdAray.join(','));
        }, error => {
          loadingf.dismiss();
          console.log('getFarmerList error: ', error);
        }).catch(er => {
          loadingf.dismiss();
          console.log(' error: ', er);
        });
      }
    })();
  }

  callPriceProfileForCollectioncentre(ccid, chcid, did, ppid) {
    var _this17 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let loading = _this17.loadingComp(_this17.loadingCtrl);

      (yield loading).present();

      try {
        let url = _this17.BASE_URL + 'api/PriceProfileApi/getPriceProfilesForCollectioncentre?UserID=' + _this17.getFarmerUserID() + '&Ccid=' + ccid + '&Chcid=' + chcid + '&Did=' + did + '&Ppid=' + ppid + '&Key=' + _this17.key + '&con=' + _this17.DatabaseCode;

        let priceProfile2InsertRows = [];
        let priceProfileorganizationmappingInsertRows = [];
        let priceProfilematrixInsertRows1 = [];
        let priceProfilematrixInsertRows2 = [];
        let priceProfilematrixInsertRows3 = [];
        let priceProfilematrixInsertRows4 = [];
        let priceProfilematrixInsertRows5 = [];
        console.log('url:-' + url);

        if (_this17.getItem('InternetStatus') == '1') {
          (yield loading).dismiss();
          console.log('no internet connectivity'); //this.localNotifications.clear(2);
          // this.foreNotif("Uploding Intrrupted","Inernet connectivity get lost")

          console.log('network status 1 means offline: ', _this17.getItem('InternetStatus'));
        } else {
          _this17.http.get(url).subscribe( /*#__PURE__*/function () {
            var _ref8 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
              if (loading) (yield loading).dismiss();

              let initializeLoadingf = _this17.loadingInitializeComp(_this17.loadingCtrl);

              (yield initializeLoadingf).present();

              try {
                console.log('result:-' + JSON.stringify(result));
                var parsedJSON = JSON.parse(JSON.stringify(result));
                console.log('callPriceProfileForCollectioncentre parsedJSON ' + parsedJSON);
                console.log('callPriceProfileForCollectioncentre parsedJSON.length ' + parsedJSON.length);

                if (parsedJSON.length > 0 && parsedJSON[0].parent_Id != 0) {
                  console.log('priceprofile priceProfile2_List', _this17.priceProfile2_List);

                  if (_this17.priceProfile2_List.length > 0) {
                    parsedJSON.forEach(item => {
                      // let filterList = this.priceProfile2_List.filter((el)=>{
                      //   el.child_id==item.child_Id
                      // })
                      let filterList = [];

                      _this17.priceProfile2_List.forEach(i => {
                        if (item.PriceProfileOrganizationMapping_Id == i.PriceProfileOrganizationMapping_Id) {
                          filterList.push(i);
                        }
                      });

                      console.log('filterList', filterList);

                      if (filterList.length > 0) {
                        console.log('priceprofile update');

                        if (filterList[0].endDate != item.endDate || filterList[0].endShiftTime != item.endShiftTime || filterList[0].status != item.status) {
                          priceProfile2InsertRows.push([//        'UPDATE priceprofile2   set Status=? where child_Id=?',
                          //        [item.status,item.child_Id]
                          //      ],
                          // [
                          'UPDATE priceprofileorganizationmapping  set status=?, endDate=?, endShiftTime=? where PriceProfileOrganizationMapping_Id=?', [item.status, item.endDate, item.endShiftTime, item.PriceProfileOrganizationMapping_Id]]);
                        }
                      } else {
                        //insert
                        priceProfile2InsertRows.push(['INSERT INTO priceprofile2 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [item.PriceProfileID, item.parent_Id, item.child_Id, item.Name, item.TypeOfMilk, item.PriceParLitre, item.PriceParKg, item.LeastFat, item.AdditionalPrice, item.MaxFat, item.MaxSnf, item.status, item.Is_MaxPriceAllowed, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]); //let b="'priceprofileorganizationmapping' (PriceProfileChild_Id INTEGER,usertype_id INTEGER,organization_id INTEGER,startDate text,endDate text,startShiftTime text,endShiftTime text,TypeOfMilk text,status text,UserID INTEGER,InsertedDate date,InsertedTime text)" ;

                        priceProfileorganizationmappingInsertRows.push(['INSERT INTO priceprofileorganizationmapping VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [item.PriceProfileOrganizationMapping_Id, item.child_Id, item.usertype_id, item.organization_id, item.startDate, item.endDate, item.startShiftTime, item.endShiftTime, item.TypeOfMilk, item.status, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);

                        if (item.PriceProfileMatrixModel_lst != null) {
                          let n = 0;
                          item.PriceProfileMatrixModel_lst.forEach(items => {
                            // let c="'priceprofilematrix' (PriceProfile_Id INTEGER,priceprofileparent_Id INTEGER,Fat text,Snf text,Price text,Fat_Max text,UserID INTEGER,InsertedDate date,InsertedTime text)" ;
                            n += 1;

                            if (n <= 24000) {
                              priceProfilematrixInsertRows1.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                            } else if (n > 24000 && n <= 48000) {
                              priceProfilematrixInsertRows2.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                            } else if (n > 48000 && n <= 72000) {
                              priceProfilematrixInsertRows3.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                            } else if (n > 72000 && n <= 96000) {
                              priceProfilematrixInsertRows4.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                            } else if (n > 96000 && n <= 120000) {
                              priceProfilematrixInsertRows5.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                            }
                          });
                        }
                      }
                    });
                    console.log('query ' + JSON.stringify(priceProfile2InsertRows));

                    if (priceProfile2InsertRows.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfile2InsertRows);
                    }

                    if (priceProfileorganizationmappingInsertRows.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfileorganizationmappingInsertRows);
                    }

                    if (priceProfilematrixInsertRows1.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows1);
                    }

                    if (priceProfilematrixInsertRows2.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows2);
                    }

                    if (priceProfilematrixInsertRows3.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows3);
                    }

                    if (priceProfilematrixInsertRows4.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows4);
                    }

                    if (priceProfilematrixInsertRows5.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows5);
                    }

                    if (initializeLoadingf) (yield initializeLoadingf).dismiss();
                    console.log('priceProfileList>0, done insert');
                  } else {
                    //insert
                    parsedJSON.forEach(item => {
                      priceProfile2InsertRows.push(['INSERT INTO priceprofile2 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [item.PriceProfileID, item.parent_Id, item.child_Id, item.Name, item.TypeOfMilk, item.PriceParLitre, item.PriceParKg, item.LeastFat, item.AdditionalPrice, item.MaxFat, item.MaxSnf, item.status, item.Is_MaxPriceAllowed, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]); //let b="'priceprofileorganizationmapping' (PriceProfileChild_Id INTEGER,usertype_id INTEGER,organization_id INTEGER,startDate text,endDate text,startShiftTime text,endShiftTime text,TypeOfMilk text,status text,UserID INTEGER,InsertedDate date,InsertedTime text)" ;

                      priceProfileorganizationmappingInsertRows.push(['INSERT INTO priceprofileorganizationmapping VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [item.PriceProfileOrganizationMapping_Id, item.child_Id, item.usertype_id, item.organization_id, item.startDate, item.endDate, item.startShiftTime, item.endShiftTime, item.TypeOfMilk, item.status, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);

                      if (item.PriceProfileMatrixModel_lst != null) {
                        let n = 0;
                        item.PriceProfileMatrixModel_lst.forEach(items => {
                          // let c="'priceprofilematrix' (PriceProfile_Id INTEGER,priceprofileparent_Id INTEGER,Fat text,Snf text,Price text,Fat_Max text,UserID INTEGER,InsertedDate date,InsertedTime text)" ;
                          n += 1;

                          if (n <= 24000) {
                            priceProfilematrixInsertRows1.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                          } else if (n > 24000 && n <= 48000) {
                            priceProfilematrixInsertRows2.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                          } else if (n > 48000 && n <= 72000) {
                            priceProfilematrixInsertRows3.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                          } else if (n > 72000 && n <= 96000) {
                            priceProfilematrixInsertRows4.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                          } else if (n > 96000 && n <= 120000) {
                            priceProfilematrixInsertRows5.push(['INSERT INTO priceprofilematrix VALUES (?,?,?,?,?,?,?,?,?)', [items.PriceProfile_Id, items.priceprofileparent_Id, items.fat, items.snf, items.price, items.Fat_Max, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                          }
                        });
                      }
                    });
                    console.log('query ' + JSON.stringify(priceProfile2InsertRows));

                    if (priceProfile2InsertRows.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfile2InsertRows);
                    }

                    if (priceProfileorganizationmappingInsertRows.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfileorganizationmappingInsertRows);
                    }

                    if (priceProfilematrixInsertRows1.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows1);
                    }

                    if (priceProfilematrixInsertRows2.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows2);
                    }

                    if (priceProfilematrixInsertRows3.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows3);
                    }

                    if (priceProfilematrixInsertRows4.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows4);
                    }

                    if (priceProfilematrixInsertRows5.length > 0) {
                      yield _this17.db.createAndInsertBulkDataInTable(priceProfilematrixInsertRows5);
                    }

                    if (initializeLoadingf) (yield initializeLoadingf).dismiss();
                    console.log('priceProfileList=0, done insert');
                  }
                } else {
                  if (initializeLoadingf) (yield initializeLoadingf).dismiss();
                  console.log('priceprofile json=0, no insert');
                }

                let priceprofilesynclog = [];
                priceprofilesynclog.push(['INSERT INTO priceprofilesynclog (Collectioncentre_ID ,Chillingcentre_ID , Dairyfarm_ID , Pp_ID ,UserID ,InsertedDate ,InsertedTime ) VALUES (?,?,?,?,?,?,?)', [ccid, chcid, did, ppid, _this17.getFarmerUserID(), _this17.setDate(), _this17.setTime()]]);
                yield _this17.db.createAndInsertBulkDataInTable(priceprofilesynclog);
              } catch (e) {
                (yield initializeLoadingf).dismiss();
                console.log(e);
              }
            });

            return function (_x8) {
              return _ref8.apply(this, arguments);
            };
          }(), /*#__PURE__*/function () {
            var _ref9 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
              (yield loading).dismiss();

              _this17.presentToast(_this17.toastCtrl, 'Error, Rate chart not gets updated.');

              console.log('API Error', error); // this.somethingWentWrongError(this.toastCtrl) ;
            });

            return function (_x9) {
              return _ref9.apply(this, arguments);
            };
          }());
        }
      } catch (er) {
        (yield loading).dismiss();
        console.log(' error: ', er);
      }
    })();
  }

  getStoredPriceProfileSchemes(ccid, chcid, did) {
    var _this18 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this18.getItem('InternetStatus') == '1') {
        console.log('no internet connectivity'); //this.localNotifications.clear(2);
        // this.foreNotif("Uploding Intrrupted","Inernet connectivity get lost")

        console.log('network status 1 means offline: ', _this18.getItem('InternetStatus'));
      } else {
        let loadingf = yield _this18.loadingComp(_this18.loadingCtrl);
        loadingf.present();
        _this18.priceProfileScheme_List = [];
        let schemeidAray = [];

        _this18.db.getAllPriceProfileSchemesTableData(_this18.getFarmerUserID()).then(res => {
          loadingf.dismiss();
          console.log('db getAllPriceProfileSchemesTableData: ' + res);
          console.log('db getAllPriceProfileSchemesTableData.rows.length : ' + res.rows.length);

          if (res.rows.length > 0) {
            //##if farmer not exist
            for (let i = 0; i < res.rows.length; i++) {
              _this18.priceProfileScheme_List.push(res.rows.item(i));

              schemeidAray.push(res.rows.item(i).SchemeID);
            }
          } else {
            schemeidAray.push('0');
          }

          console.log('this.priceProfileScheme_List', _this18.priceProfileScheme_List);

          _this18.callPriceProfileSchemesForCollectioncentre(ccid, chcid, did, schemeidAray.join(','));
        }, error => {
          loadingf.dismiss();
          console.log('getFarmerList error: ', error);
        }).catch(er => {
          loadingf.dismiss();
          console.log('getFarmerList error: ', er);
        });
      }
    })();
  }

  callPriceProfileSchemesForCollectioncentre(ccid, chcid, did, ppsid) {
    var _this19 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let loading = _this19.loadingComp(_this19.loadingCtrl);

      (yield loading).present();

      try {
        let url = _this19.BASE_URL + 'api/PriceProfileApi/getPriceProfileSchemesForCollectioncentre?UserID=' + _this19.getFarmerUserID() + '&Ccid=' + ccid + '&Chcid=' + chcid + '&Did=' + did + '&Ppid=' + ppsid + '&Key=' + _this19.key + '&con=' + _this19.DatabaseCode;

        let priceProfileSchemeInsertRows = [];
        let priceProfileSchemesorganizationmappingInsertRows = [];
        console.log('url:-' + url);

        if (_this19.getItem('InternetStatus') == '1') {
          (yield loading).dismiss();
          console.log('no internet connectivity'); //this.localNotifications.clear(2);
          // this.foreNotif("Uploding Intrrupted","Inernet connectivity get lost")

          console.log('network status 1 means offline: ', _this19.getItem('InternetStatus'));
        } else {
          _this19.http.get(url).subscribe( /*#__PURE__*/function () {
            var _ref10 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
              if (loading) (yield loading).dismiss();

              let initializeLoadingf = _this19.loadingInitializeComp(_this19.loadingCtrl);

              (yield initializeLoadingf).present();

              try {
                console.log('result:-' + JSON.stringify(result));
                var parsedJSON = JSON.parse(JSON.stringify(result));
                console.log('callPriceProfileSchemesForCollectioncentre parsedJSON ' + parsedJSON);
                console.log('callPriceProfileSchemesForCollectioncentre parsedJSON.length ' + parsedJSON.length);

                if (parsedJSON.length > 0 && parsedJSON[0].SchemeID != 0) {
                  console.log('this.priceProfileScheme_List.length', _this19.priceProfileScheme_List.length);

                  if (_this19.priceProfileScheme_List.length > 0) {
                    parsedJSON.forEach(item => {
                      // let filterList = this.priceProfileScheme_List.filter((el)=>{
                      //   el.SchemeID == item.SchemeID
                      // })
                      let filterList = [];

                      _this19.priceProfileScheme_List.forEach(i => {
                        if (item.SchemeID == i.SchemeID) {
                          filterList.push(i);
                        }
                      });

                      console.log('filterList scheme', filterList);

                      if (filterList.length > 0) {
                        console.log('priceprofilescheme update');

                        if (filterList[0].endDate != item.endDate || filterList[0].endShiftTime != item.endShiftTime || filterList[0].status != item.Status) {
                          priceProfileSchemeInsertRows.push([//       'UPDATE priceprofilescheme set Status=? where SchemeID=?',
                          //     [item.Status, item.SchemeID]
                          //  ],
                          //[
                          'UPDATE priceprofileschemeorganizationmapping  set status=?, endDate=?, endShiftTime=? where Scheme_ID=?', [item.Status, item.endDate, item.endShiftTime, item.SchemeID]]);
                        }
                      } else {
                        //insert
                        //  let a="'priceprofilescheme' (SchemeID INTEGER,SchemeName text,SchemeType text, SchemeDescription text, BenefitPerLitre text, DeductionPerLitre text, Status text,UserID INTEGER,InsertedDate date,InsertedTime text)" ;
                        priceProfileSchemeInsertRows.push(['INSERT INTO priceprofilescheme VALUES (?,?,?,?,?,?,?,?,?,?)', [item.SchemeID, item.SchemeName, item.SchemeType, item.SchemeDescription, item.BenefitPerLitre, item.DeductionPerLitre, item.Status, _this19.getFarmerUserID(), _this19.setDate(), _this19.setTime()]]); //let b="'priceprofileschemeorganizationmapping' (scheme_ID INTEGER,usertype_id INTEGER,organization_id INTEGER,startDate text,endDate text,startShiftTime text,endShiftTime text,status text,UserID INTEGER,InsertedDate date,InsertedTime text)" ;

                        priceProfileSchemesorganizationmappingInsertRows.push(['INSERT INTO priceprofileschemeorganizationmapping VALUES (?,?,?,?,?,?,?,?,?,?,?)', [item.SchemeID, item.usertype_id, item.organization_id, item.startDate, item.endDate, item.startShiftTime, item.endShiftTime, item.Status, _this19.getFarmerUserID(), _this19.setDate(), _this19.setTime()]]);
                      }
                    });
                    console.log('query ' + JSON.stringify(priceProfileSchemeInsertRows));
                    yield _this19.db.createAndInsertBulkDataInTable(priceProfileSchemeInsertRows);
                    yield _this19.db.createAndInsertBulkDataInTable(priceProfileSchemesorganizationmappingInsertRows);
                    if (initializeLoadingf) (yield initializeLoadingf).dismiss();
                    console.log('priceProfileschemeList>0, done insert');
                  } else {
                    //insert
                    parsedJSON.forEach(item => {
                      //insert
                      // let a="'priceprofilescheme' (SchemeID INTEGER,SchemeName text,SchemeType text, SchemeDescription text, BenefitPerLitre text, DeductionPerLitre text, Status text,UserID INTEGER,InsertedDate date,InsertedTime text)" ;
                      priceProfileSchemeInsertRows.push(['INSERT INTO priceprofilescheme VALUES (?,?,?,?,?,?,?,?,?,?)', [item.SchemeID, item.SchemeName, item.SchemeType, item.SchemeDescription, item.BenefitPerLitre, item.DeductionPerLitre, item.Status, _this19.getFarmerUserID(), _this19.setDate(), _this19.setTime()]]); // let b="'priceprofileschemeorganizationmapping' (scheme_ID INTEGER,usertype_id INTEGER,organization_id INTEGER,startDate text,endDate text,startShiftTime text,endShiftTime text,status text,UserID INTEGER,InsertedDate date,InsertedTime text)" ;

                      priceProfileSchemesorganizationmappingInsertRows.push(['INSERT INTO priceprofileschemeorganizationmapping VALUES (?,?,?,?,?,?,?,?,?,?,?)', [item.SchemeID, item.usertype_id, item.organization_id, item.startDate, item.endDate, item.startShiftTime, item.endShiftTime, item.Status, _this19.getFarmerUserID(), _this19.setDate(), _this19.setTime()]]);
                    });
                    console.log('query ' + JSON.stringify(priceProfileSchemeInsertRows));
                    yield _this19.db.createAndInsertBulkDataInTable(priceProfileSchemeInsertRows);
                    yield _this19.db.createAndInsertBulkDataInTable(priceProfileSchemesorganizationmappingInsertRows);
                    if (initializeLoadingf) (yield initializeLoadingf).dismiss();
                    console.log('priceProfileschemeList=0, done insert');
                  }
                } else {
                  if (initializeLoadingf) (yield initializeLoadingf).dismiss();
                  console.log('priceProfilescheme json=0, no insert');
                } // console.log("query " + JSON.stringify(priceProfileSchemeInsertRows)) ;
                // await this.db.createAndInsertBulkDataInTable(priceProfileSchemeInsertRows) ;
                // await this.db.createAndInsertBulkDataInTable(priceProfileSchemesorganizationmappingInsertRows) ;

              } catch (e) {
                (yield initializeLoadingf).dismiss();
                console.log(e);
              }
            });

            return function (_x10) {
              return _ref10.apply(this, arguments);
            };
          }(), /*#__PURE__*/function () {
            var _ref11 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
              (yield loading).dismiss();
              console.log('API Error', error); // this.somethingWentWrongError(this.toastCtrl) ;
            });

            return function (_x11) {
              return _ref11.apply(this, arguments);
            };
          }());
        }
      } catch (er) {
        (yield loading).dismiss();
        console.log(' error: ', er);
      }
    })();
  } //===================price profile scheme========================================================
  // to show simple notification


  foreNotif(title, msg, id) {
    this.localNotifications.schedule({
      id: id,
      title: title,
      text: msg,
      data: {
        secret: 'secret'
      },
      smallIcon: 'res://mipmap-ldpi/ic_launcher.png',
      foreground: false
    });
  }

  progressNotif(uploded, total, id) {
    this.Progressvalue = parseInt((uploded / total * 100).toFixed(0));

    if (uploded == 1) {
      cordova.plugins.notification.local.schedule({
        id: id,
        title: 'Sync in progress',
        text: 'Uploaded ' + uploded + ' of ' + total + ' Records',
        sound: false,
        smallIcon: 'res://mipmap-ldpi/ic_launcher.png',
        progressBar: {
          value: this.Progressvalue
        }
      });
    } else {
      var updateObject = {
        id: id,
        title: 'Sync in progress',
        text: 'Uploaded ' + uploded + ' of ' + total + ' Records',
        sound: false,
        smallIcon: 'res://mipmap-ldpi/ic_launcher.png',
        progressBar: {
          value: this.Progressvalue
        }
      };
      cordova.plugins.notification.local.update(updateObject);
    }
  }

};

StartUploadingSeriviceService.ctorParameters = () => [{
  type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__.LocalNotifications
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _sql_sql_service__WEBPACK_IMPORTED_MODULE_2__.SqlService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

StartUploadingSeriviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], StartUploadingSeriviceService);
 // export interface WeightOffline {
//   Dcf_id: number;
//   json: WeightRecords;
//   uploded: string;
//   fedrationId: string;
//   key: string;
//   url: string;
//   DatabaseCode: string;
// }

/***/ }),

/***/ 38264:
/*!*************************************************!*\
  !*** ./src/app/services/token/token.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/BaseComp */ 88075);
/* harmony import */ var _encryption_encryption_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../encryption/encryption.service */ 20442);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






let TokenService = class TokenService extends src_app_utils_BaseComp__WEBPACK_IMPORTED_MODULE_0__.BaseComp {
    // url_getRefreshAccessToken_forTest=this.BASE_URL+this.refreshTokenUrlIdentifier+'?UserName='+this.getusername()
    //                          +'&accessToken='+'test.test.test'+'&refreshAuthToken='+'try.try.try'+
    //                          '&Key='+this.key+'&con='+this.DatabaseCode
    constructor(http, Encrypt, route) {
        super();
        this.http = http;
        this.Encrypt = Encrypt;
        this.route = route;
        this.refreshTokenUrlIdentifier = `api/servicesAPI/GetTokenByRefereshToken`;
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    setToken(token) {
        if (token) {
            let finalTk;
            let tokenArr = token.split('.');
            let tk2 = this.Encrypt.EncryptTextWithPublicKey(tokenArr[2], this.AesSecretIVKey);
            finalTk = tokenArr[0] + '.' + tokenArr[1] + '.' + tk2;
            localStorage.setItem('access_token', finalTk);
        }
        else {
            console.error("No Access Token Found,Setting Default");
        }
    }
    removeToken() {
        return localStorage.removeItem('access_token');
    }
    refreshTokenFunction() {
        // this.removeToken();
        // this.removeRefreshAccessToken()
        // // // //  this.removeAuthToken();
        //  this.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im9ydXNlciIsIm5iZiI6MTY4MTExMDY3OSwiZXhwIjoxNjgxMTEwNzM5LCJpYXQiOjE2ODExMTA2NzksImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAyNSJ9.KgA_O1VOzhNOv325WZ1lQUOZalBf-o5Os4vfQVjbsuQ')
        // this.setRefreshAccessToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im9ydXNlciIsIm5iZiI6MTY4MTExMTAyOSwiZXhwIjoxNjgxMTExMTQ5LCJpYXQiOjE2ODExMTEwMjksImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAyNSJ9.I02J8Inz8FH2xkNUIlrT4lXh7uigR8N1z2I5QTPfH40')
        // // // this.setAuthToken('test.test.test')
        let url_getRefreshAccessToken = this.BASE_URL + this.refreshTokenUrlIdentifier + '?UserName=' + this.getusername()
            + '&accessToken=' + this.getToken() + '&refreshAccessToken=' + this.getRefreshAccessToken()
            + '&refreshAuthToken=' + this.getAuthToken() +
            '&Key=' + this.key + '&con=' + this.DatabaseCode;
        if (this.getToken() && this.getAuthToken()) {
            let data = { data: '' };
            return this.http.post(url_getRefreshAccessToken, data);
        }
        else {
            console.error("Something is Empty");
            this.route.navigateByUrl('login');
        }
    }
    getRefreshAccessToken() {
        return localStorage.getItem('refresh_access_token');
    }
    setRefreshAccessToken(token) {
        if (token) {
            let finalrTk;
            let tokenArr = token.split('.');
            let tk2 = this.Encrypt.EncryptTextWithPublicKey(tokenArr[2], this.AesSecretIVKey);
            finalrTk = tokenArr[0] + '.' + tokenArr[1] + '.' + tk2;
            localStorage.setItem('refresh_access_token', finalrTk);
        }
        else {
            console.error("No Refresh Access Token Setting Default");
            // localStorage.setItem('refresh_access_token','def.def.def')
        }
    }
    removeRefreshAccessToken() {
        return localStorage.removeItem('refresh_access_token');
    }
    getAuthToken() {
        return localStorage.getItem('auth_token');
    }
    setAuthToken(token) {
        if (token) {
            localStorage.setItem('auth_token', token);
        }
        else {
            console.error("No Auth Token Setting Default");
        }
    }
    removeAuthToken() {
        return localStorage.removeItem('auth_token');
    }
    decodeToken() {
        if (this.jwtToken) {
            // this.decodedToken = jwt_decode(this.jwtToken);
        }
    }
    getDecodeToken() {
        // return jwt_decode(this.jwtToken);
    }
    getUser() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.displayname : null;
    }
    getEmailId() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.email : null;
    }
    getExpiryTime() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.exp : null;
    }
    isTokenExpired() {
        const expiryTime = Number.parseInt(this.getExpiryTime());
        if (expiryTime) {
            return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
        }
        else {
            return false;
        }
    }
};
TokenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _encryption_encryption_service__WEBPACK_IMPORTED_MODULE_1__.EncryptionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TokenService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], TokenService);



/***/ }),

/***/ 88075:
/*!***********************************!*\
  !*** ./src/app/utils/BaseComp.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComp": () => (/* binding */ BaseComp)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _StringContants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StringContants */ 77957);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_multiple_select_modal_multiple_select_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/multiple-select-modal/multiple-select-modal.page */ 37374);
/* harmony import */ var _pages_single_select_modal_single_select_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/single-select-modal/single-select-modal.page */ 12868);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ 84177);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ 43015);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);







class BaseComp extends _StringContants__WEBPACK_IMPORTED_MODULE_1__.StringConstants {
  constructor() {
    super(...arguments); // BASE_URL = "https://www.oright.in/services/"; //live

    this.BASE_URL = "http://localhost:43726/"; //BASE_URL_ARSH_SERVER ="https://localhost:44336/"
    // BAANI_BASE_URL = "http://103.228.113.59:8093/" ; //testing
    // BAANI_BASE_URL = "http://milknet.baanimilk.org/qboid/" ; //live
    // BASE_URL = 'http://103.228.113.59:8091/'; //testing
    //BASE_URL = 'http://103.228.113.59:8088/';//testing for VAPT
    //BAANI_BASE_URL = "http://103.228.113.59:8093/" ; //testing

    this.BAANI_BASE_URL = 'http://milknet.baanimilk.org/qboid/'; //live
    //BASE_URL = "http://103.228.113.59:8091/" ; //testing
    //BASE_URL = "http://192.168.43.139/" ; //testing
    // BASE_URL = "http://192.168.68.118/" ; //testing

    this.IMAGE_BASE_URL = 'http://127.0.0.1/dairy/uploads/'; //BASE_URL_Qboid = "https://www.oright.in/" ;

    this.BASE_URL_Qboid = 'https://www.oright.in/';
    this.LOGIN_URL = this.BASE_URL + 'api/servicesAPI/validateuser_mob';
    this.FARMER_DASHBOARD_URL = this.BASE_URL + 'api/servicesAPI/getFarmerDashboardDetail';
    this.LANG_SELECTED = 'LANG_SELECTED';
    this.HINDI_LANG = 'HINDI_LANG';
    this.TAMIL_LANG = 'TAMIL_LANG';
    this.LOGIN_USER_ID = 'LOGIN_USER_ID';
    this.LOGIN_USER_DATA = 'LOGIN_USER_DATA';
    this.IS_LOGIN = 'IS_LOGIN';
    this.DEFAULT_LOCALE = 'DEFAULT_LOCALE';
    this.HINDI_LOCALE = 'HINDI_LOCALE';
    this.ENGLISH_LOCALE = 'ENGLISH_LOCALE';
    this.TAMIL_LOCALE = 'TAMIL_LOCALE';
    this.MilkoMeterDefaultResult = ['NA', 'Pure', 'Water', 'CaSo', 'Urea', 'SO/DE/AS/Sa', '1', '2', '3'];
    this.MilkoMeterDefaultResult_LowerCase = ['na', 'pure', 'water', 'caso', 'urea', 'so/de/as/sa', '1', '2', '3'];
    this.NO_DATA_FOUND = 'No Data Found';
    this.NO_DATA_FOUND_hn = 'कोई डेटा नहीं मिला';
    this.NO_DATA_FOUND_tm = 'வேறு தகவல்கள் இல்லை';
    this.key = 'YodXlRKtvYX%2BtkGhmS1IXwKjKrovRpi4bZeVp0j7jHA%3D';
    this.DatabaseCode = this.getItem('Db_code');
    this.GFO_FARMID = '32'; //webSocketAlreadyStart8889:boolean=false ;

    this.FirebasePushNotificationOptions = {
      android: {
        senderID: '562910858536' //live
        //senderID: "707188925583", //testing

      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true'
      },
      windows: {}
    };
    this.textNameForOnesPosition = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    this.textNameForTenthPosition = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    this.validationErrorCodes = {
      lengthError: '0',
      specialCharacterError: '1',
      specialCharaError: '2',
      alphaNumericError: '3',
      numericError: '4',
      negativeNumberError: '5',
      ZeroNumberError: '6',
      spaceError: '7',
      PasswordError: '8',
      userNameError: '9',
      phoneNumberExistingError: '10',
      numberAfterDecimal: '11',
      emptyError: '12',
      alphabets: '13',
      phoneNumberError: '14',
      CharError: '15'
    };
    this.AesSecretIVKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPyThU97Uv2cC8fqZIqzgflNLngvzAH2c3rGb1I9BTrg1/XD7SlyJCTbhXfiDO8tH+7GA0nmNY+ydfr+X3C0KrC+FNtUuOHRcSAoxTnSWu6723OIMWeWUoN0OBrwaENGiqlC4YdFJiYHRaWbakQrd14V990nU04Co4i/SXGiFnBQIDAQAB';
    this.check_For_PassChange_interval = 1800000;

    this.encryptAES = text => {
      const key = 'ShVmYq3t6v9y$B&E)H@McQfTjWnZr4u7'; // return CryptoJS.AES.encrypt(text, key).toString(); //To enable encryption uncomment it...

      return text;
    };

    this.qrEncryptionKeySize = 128;
    this.qrEncryptioniterations = 8192;
    this.qrEncryptionpassword = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().enc.Latin1.parse('4+1f/xz9cpx+3o3d4ixix/x+kx/r0bxw11vx02l/ax+x');
    this.qrEncryptionSalt = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().enc.Latin1.parse('SALT_VALUE');
    this.qrEncryptionIV = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().enc.Latin1.parse('IV_VALUE_16_BYTE');

    this.trainTestSplit = (() => {
      const shuffle = a => {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }

        return a;
      };

      return (data, train, indices = false) => {
        let arr = [...data];

        if (indices) {
          let i = 0;
          arr = arr.map(el => i++);
        } // If train < 1, assume percentage


        if (train < 1) {
          train = Math.ceil(train * arr.length);
        }

        const shuffled = shuffle([...arr]);
        const testSet = shuffled.splice(0, arr.length - train);
        const trainSet = shuffled;
        return [trainSet, testSet];
      };
    })();

    this.minDeltaY = 100; //=================================================================================
  }

  validateLength(value, start, end) {
    if (value.match('^.{' + start + ',' + end + '}$')) {
      return true;
    } else {
      return false;
    }
  }

  formatString(str, args) {
    return str.replace(/{([0-9]+)}/g, (match, index) => {
      return typeof args[index] == 'undefined' ? match : args[index];
    });
  }

  getNoDataFound() {
    if (this.getItem(this.LANG_SELECTED) == this.HINDI_LANG) {
      return this.NO_DATA_FOUND_hn;
    }

    if (this.getItem(this.LANG_SELECTED) == this.TAMIL_LANG) {
      return this.NO_DATA_FOUND_tm;
    } else {
      return this.NO_DATA_FOUND;
    }
  }

  presentToast(toastCtrl, message) {
    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let toast = yield toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    })();
  }

  noDataToast(toastCtrl) {
    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let toast = yield toastCtrl.create({
        message: 'No Data',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    })();
  }

  somethingWentWrongError(toastCtrl) {// let toast = toastCtrl.create({
    //   message: "Something went wrong",
    //   duration: 2000,
    //   position: "bottom",
    // }) ;
    // toast.present() ;
  }

  loadingCompMsg(loadingCtrl, msg) {
    let loading = loadingCtrl.create({
      message: msg,
      duration: 100000
    });
    return loading;
  }

  loaderCompMsg(loadingCtrl, msg) {
    let loading = loadingCtrl.create({
      message: msg,
      duration: 300000
    });
    return loading;
  }

  loadingComp(loadingCtrl) {
    let loading = loadingCtrl.create({
      message: 'Please wait...'
    });
    return loading;
  }

  loadingInitializeComp(loadingCtrl) {
    let loading = loadingCtrl.create({
      message: 'Initializing...' //duration: 150000,

    });
    return loading;
  }

  loadingSyncComp(loadingCtrl) {
    let loading = loadingCtrl.create({
      message: 'Sync...',
      duration: 50000
    });
    return loading;
  }

  saveItem(key, value) {
    try {
      if (value == null || value == undefined) {
        value = '';
      }

      if (typeof value != 'string') {
        value = JSON.stringify(value);
      }

      let encKey, encValue;
      encKey = this.encryptAES(key);
      encValue = this.encryptAES(value);
      window.localStorage.setItem(encKey, encValue);
    } catch (e) {
      console.log('saveItem me error', e);
    }
  }

  removeItem(key) {
    try {
      let encKey;
      encKey = this.encryptAES(key);
      window.localStorage.removeItem(this.searchItemInLocalDB(key));
    } catch (e) {
      console.log('removeItem me error', e);
    }
  }
  /**
   * @description Get item from local storage based on key
   * @param {string} key key
   * @returns {string}
   */


  getItem(key) {
    const encryptedVal = window.localStorage.getItem(this.searchItemInLocalDB(key));

    if (encryptedVal == null || encryptedVal == undefined) {
      return '';
    }

    const value = this.decryptAES(encryptedVal);

    try {
      const parsedValue = JSON.parse(value);
      return parsedValue;
    } catch (e) {
      return value;
    }
  }

  searchItemInLocalDB(value) {
    const keys = Object.keys(window.localStorage);

    for (const key of keys) {
      if (this.decryptAES(key) === value) {
        return key;
      }
    }

    return '';
  }
  /**
   * Decrypt an encrypted message
   * @param encryptedBase64 encrypted data in base64 format
   * @return The decrypted content
   */


  decryptAES(encryptedBase64) {
    const key = 'ShVmYq3t6v9y$B&E)H@McQfTjWnZr4u7'; // const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key);
    // if (decrypted) {
    //   try {
    //     const str = decrypted.toString(CryptoJS.enc.Utf8);
    //     if (str.length > 0) {
    //       return str;
    //     } else {
    //       return 'error 1';
    //     }
    //   } catch (e) {
    //     return 'error 2';
    //   }
    // }

    return encryptedBase64;
  }

  printKeyValuePairs(url, postdata) {
    console.log('url:-' + url);
    console.log('--------------FORM DATA---------------');
    let data = '';
    postdata.forEach((value, key) => {
      // console.log(key + ':' + value)
      data += key + ':' + value + '\n';
    });
    console.log(data);
    console.log('--------------FORM DATA---------------');
  }

  getCurrentDateYYYYMMDD() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var day_str = '';

    if (day < 10) {
      day_str = '0' + day;
    } else {
      day_str = '' + day;
    }

    var month_str = '';

    if (month < 10) {
      month_str = '0' + month;
    } else {
      month_str = '' + month;
    }

    let date_str = year + '-' + month_str + '-' + day_str;
    return date_str;
  }

  getDifferenceBtwTwoDates(date_str_1, date_str_2) {
    var date1 = new Date(date_str_1);
    var date2 = new Date(date_str_2);
    var Difference_In_Days = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
    return Difference_In_Days;
  }

  getOnlyDate(date) {
    return date.split(' ')[0];
  }

  getUserId() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].UserFarmerId;
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getFedrationId() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].Fedration_Id;
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getusername() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].UserFullName;
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getLocalCCUserID() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].LocalCollectionCentre_ID.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getLocalCHCUserID() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].LocalChillingCentre_ID.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getLocalFarmerUserID() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].LocalFarmer_Id.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getCCUserID() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].CollectionCentre_ID.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getCCname() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].CollectionCentre_Name.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getCHCUserID() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].ChillingCentre_ID.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getCHCname() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].ChillingCentre_Name.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getUserType() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].userType.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getTestingsource() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      let userType = json[0].userType.toString();

      if (userType == '3') {
        return 'collectioncenter';
      } else if (userType == '7') {
        return 'cillingcenter';
      }
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getFarmName() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].Farm_Name.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getFarmID() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);

      if (this.getUserType() == '8') {
        return this.getItem(this.Farm_ID);
      } else {
        return json[0].Farm_ID.toString();
      }
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getFarmerID() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].Farmer_ID.toString();
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getFarmerUserID() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].UserId;
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getFarmerCCID() {
    try {
      let json = this.getItem(this.LOGIN_USER_DATA);
      return json[0].CollectionCentre_ID;
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getDairyFarmConfigurationValue(key) {
    try {
      let json = this.getItem('DairyFarmConfiguration'); //console.log("json",json) ;

      json = json.filter(item => {
        return item.Parameter.toLowerCase() == key.toLowerCase();
      }); // console.log("json1",json) ;

      if (json.length > 0) {
        return json[0].Value;
      } else {
        return 'no';
      }
    } catch (e) {
      console.log(e);
      return 'no';
    }
  }

  exportPdfmultipledata(dataToExport, filename = 'doc.pdf') {
    if (!dataToExport && dataToExport.length === 0) {
      return null;
    }

    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'pt', 'a4');
    let headings = [];
    dataToExport.forEach((data, index) => {
      const objWithHeading = data.find(item => !!item.heading);
      const objWithoutHeading = data.filter(item => !item.heading);
      headings.push(objWithHeading.heading);
      dataToExport[index] = objWithoutHeading;
    });

    for (let i = 0; i < dataToExport.length; ++i) {
      const rows = dataToExport[i].map(item => Object.values(item));
      const columns = Object.keys(dataToExport[i][0]);
      let yPos = 35;
      if (i !== 0) yPos = doc.autoTable.previous.finalY + 15;
      doc.text(headings[i], 40, yPos);

      if (i === 0) {
        doc.autoTable(columns, rows, {
          styles: {
            overflow: 'linebreak',
            cellWidth: 'wrap'
          }
        });
      } else {
        doc.autoTable(columns, rows, {
          styles: {
            overflow: 'linebreak',
            cellWidth: 'wrap'
          },
          margin: {
            bottom: 100
          }
        });
      }
    }

    doc.save(filename);
    doc.close();
  }

  exportPdf(dataToExport, filename = 'doc.pdf') {
    if (!dataToExport && dataToExport.length === 0) {
      return null;
    }

    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'pt', 'a4');
    jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
      head: [Object.keys(dataToExport[0])],
      body: [...dataToExport.map(item => Object.values(item))]
    });
    doc.save(filename);
  }

  getFarmCowMilkTypeLabel() {
    try {
      let json = this.getItem('DairyFarmConfiguration'); //console.log("json",json) ;

      json = json.filter(item => {
        return item.Parameter.toLowerCase() == 'cowmilk_title';
      }); // console.log("json1",json) ;

      if (json.length > 0) {
        return json[0].Value;
      } else {
        return 'Cow';
      }
    } catch (e) {
      console.log(e);
      return 'Cow';
    }
  }

  getFarmBuffaloMilkTypeLabel() {
    try {
      let json = this.getItem('DairyFarmConfiguration');
      json = json.filter(item => {
        return item.Parameter.toLowerCase() == 'buffalomilk_title';
      });

      if (json.length > 0) {
        return json[0].Value;
      } else {
        return 'Buffalo';
      }
    } catch (e) {
      console.log(e);
      return 'Buffalo';
    }
  }

  getFarmDesiMilkTypeLabel() {
    try {
      let json = this.getItem('DairyFarmConfiguration');
      json = json.filter(item => {
        return item.Parameter.toLowerCase() == 'desimilk_title';
      });

      if (json.length > 0) {
        return json[0].Value;
      } else {
        return 'Mix';
      }
    } catch (e) {
      console.log(e);
      return 'Mix';
    }
  }

  getFarm_Logo_Path() {
    try {
      let str = this.getItem('Farm_Logo_Path');
      return str.toString();
    } catch (e) {
      console.log(e);
    }

    return 'null';
  }

  getFarm_Logo_base64() {
    try {
      let str = this.getItem('Farm_Logo');
      return str.toString();
    } catch (e) {
      console.log(e);
    }

    return 'null';
  }

  setMenuOption(value) {
    try {
      this.saveItem(this.Menu_option, value);
    } catch (e) {
      console.log(e);
    }
  }

  getMenuOption() {
    try {
      return this.getItem(this.Menu_option);
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  getDatabaseCode() {
    try {
      return this.getItem('Db_code');
    } catch (e) {
      console.log(e);
    }

    return '';
  }

  setYearMonth() {
    var d = new Date(); // d.setHours(d.getHours() + 10) ;

    let month = this.properFormatNumber(d.getMonth() + 1);
    let year = d.getFullYear(); // let hour = this.properFormatNumber(d.getHours()) ;
    // let minutes = this.properFormatNumber(d.getMinutes()) ;
    // let sec = this.properFormatNumber(d.getSeconds()) ;
    // console.log("hourse:-" + hour + ":" + minutes + ":" + sec) ;

    let finalDate = year + '-' + month;
    return finalDate;
  }

  threeMonthAgoDate() {
    var d = new Date(); // d.setHours(d.getHours() + 10) ;

    let date = this.properFormatNumber(d.getDate());
    let month = this.properFormatNumber(d.getMonth() - 2);
    let year = d.getFullYear(); // let hour = this.properFormatNumber(d.getHours()) ;
    // let minutes = this.properFormatNumber(d.getMinutes()) ;
    // let sec = this.properFormatNumber(d.getSeconds()) ;
    // console.log("hourse:-" + hour + ":" + minutes + ":" + sec) ;

    let finalDate = year + '-' + month + '-' + date;
    return finalDate;
  }

  setDate() {
    var d = new Date(); // d.setHours(d.getHours() + 10) ;

    let date = this.properFormatNumber(d.getDate());
    let month = this.properFormatNumber(d.getMonth() + 1);
    let year = d.getFullYear(); // let hour = this.properFormatNumber(d.getHours()) ;
    // let minutes = this.properFormatNumber(d.getMinutes()) ;
    // let sec = this.properFormatNumber(d.getSeconds()) ;
    // console.log("hourse:-" + hour + ":" + minutes + ":" + sec) ;

    let finalDate = year + '-' + month + '-' + date;
    return finalDate;
  }

  setTime() {
    var d = new Date(); // d.setHours(d.getHours() + 10) ;

    let date = this.properFormatNumber(d.getDate());
    let month = this.properFormatNumber(d.getMonth() + 1);
    let year = d.getFullYear();
    var hr = ('0' + d.getHours()).slice(-2); // => 9

    var min = ('0' + d.getMinutes()).slice(-2); // =>  30

    var sec = ('0' + d.getSeconds()).slice(-2); // => 51

    var time = hr + ':' + min + ':' + sec; // let hour = this.properFormatNumber(d.getHours()) ;
    // let minutes = this.properFormatNumber(d.getMinutes()) ;
    // let sec = this.properFormatNumber(d.getSeconds()) ;

    console.log('time:-', time); // let finalDate = year + "-" + month + "-" + date ;

    return time;
  }

  setMonth() {
    var d = new Date(); // d.setHours(d.getHours() + 10) ;

    let date = this.properFormatNumber(d.getDate());
    let month = this.properFormatNumber(d.getMonth() + 1);
    let year = d.getFullYear(); // let hour = this.properFormatNumber(d.getHours()) ;
    // let minutes = this.properFormatNumber(d.getMinutes()) ;
    // let sec = this.properFormatNumber(d.getSeconds()) ;
    // console.log("hourse:-" + hour + ":" + minutes + ":" + sec) ;

    let finalDate = year + '-' + month;
    return finalDate;
  }

  setPreviousDate(days) {
    // Days you want to subtract
    var date = new Date();
    var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
    var day = this.properFormatNumber(last.getDate());
    var month = this.properFormatNumber(last.getMonth() + 1);
    var year = last.getFullYear();
    let finalDate = year + '-' + month + '-' + day;
    return finalDate;
  }

  setPreviousDateFromGivenDate(givenDate, days) {
    // Days you want to subtract
    var date = new Date(givenDate);
    var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
    var day = this.properFormatNumber(last.getDate());
    var month = this.properFormatNumber(last.getMonth() + 1);
    var year = last.getFullYear();
    let finalDate = year + '-' + month + '-' + day;
    return finalDate;
  }

  setFutureDate(days) {
    // Days you want to add
    var date = new Date();
    var last = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    var day = this.properFormatNumber(last.getDate());
    var month = this.properFormatNumber(last.getMonth() + 1);
    var year = last.getFullYear();
    let finalDate = year + '-' + month + '-' + day;
    return finalDate;
  }

  setFutureDateFromGivenDate(givenDate, days) {
    var date = new Date(givenDate);
    var last = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    var day = this.properFormatNumber(last.getDate());
    var month = this.properFormatNumber(last.getMonth() + 1);
    var year = last.getFullYear();
    let finalDate = year + '-' + month + '-' + day;
    return finalDate;
  }
  /**
   *
   * @param firstDate
   * @param secondDate
   * @return if firstDate > secondDate = 1
   *         else if firstDate == secondDate = 0
   *         else if firstDate < secondDate = -1
   *         else if error = null
   */


  compareDates(firstDate, secondDate) {
    try {
      const firstDateDate = new Date(firstDate);
      const secondDateDate = new Date(secondDate);
      const difference = firstDateDate - secondDateDate;
      if (difference > 0) return 1;else if (difference < 0) return -1;else if (difference === 0) return 0;
    } catch (err) {
      return null;
    }
  }

  properFormatNumber(number) {
    let numString = '';

    if (number < 10) {
      numString = '0' + number;
    } else {
      numString = number + '';
    }

    return numString;
  }

  properFormatNumberFromString(numberString) {
    let number = parseInt(numberString);
    let numString = '';

    if (number < 10) {
      numString = '0' + number;
    } else {
      numString = number + '';
    }

    return numString;
  }

  getMonthName(monthIndex) {
    switch (monthIndex) {
      case '01':
        return 'Jan';

      case '02':
        return 'Feb';

      case '03':
        return 'Mar';

      case '04':
        return 'Apr';

      case '05':
        return 'May';

      case '06':
        return 'Jun';

      case '07':
        return 'Jul';

      case '08':
        return 'Aug';

      case '09':
        return 'Sep';

      case '10':
        return 'Oct';

      case '11':
        return 'Nov';

      case '12':
        return 'Dec';
    }

    return '';
  }

  getMonthNumber(monthIndex) {
    switch (monthIndex) {
      case 'Jan':
        return '1';

      case 'Feb':
        return '2';

      case 'Mar':
        return '3';

      case 'Apr':
        return '4';

      case 'May':
        return '5';

      case 'Jun':
        return '6';

      case 'Jul':
        return '7';

      case 'Aug':
        return '8';

      case 'Sep':
        return '9';

      case 'Oct':
        return '10';

      case 'Nov':
        return '11';

      case 'Dec':
        return '12';
    }

    return '';
  }

  getMonthName0(monthIndex) {
    switch (monthIndex) {
      case '1':
        return 'Jan';

      case '2':
        return 'Feb';

      case '3':
        return 'Mar';

      case '4':
        return 'Apr';

      case '5':
        return 'May';

      case '6':
        return 'Jun';

      case '7':
        return 'Jul';

      case '8':
        return 'Aug';

      case '9':
        return 'Sep';

      case '10':
        return 'Oct';

      case '11':
        return 'Nov';

      case '12':
        return 'Dec';
    }

    return '';
  }

  qrEncryption(msg) {
    try {
      var key = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().PBKDF2(this.qrEncryptionpassword, this.qrEncryptionSalt, {
        keySize: this.qrEncryptionKeySize / 32,
        iterations: this.qrEncryptioniterations
      });
      var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().AES.encrypt(msg, key, {
        iv: this.qrEncryptionIV,
        padding: (crypto_js__WEBPACK_IMPORTED_MODULE_2___default().pad.Pkcs7),
        mode: (crypto_js__WEBPACK_IMPORTED_MODULE_2___default().mode.CBC)
      });
      console.log('Encrypted: ' + encrypted);
      var transitmessage = encrypted.toString();
      return transitmessage;
    } catch (er) {
      return 'error';
    }
  }

  qrDecryption(msg) {
    var encrypted = msg;

    try {
      var key = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().PBKDF2(this.qrEncryptionpassword, this.qrEncryptionSalt, {
        keySize: this.qrEncryptionKeySize / 32,
        iterations: this.qrEncryptioniterations
      });
      var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2___default().AES.decrypt(encrypted, key, {
        iv: this.qrEncryptionIV,
        padding: (crypto_js__WEBPACK_IMPORTED_MODULE_2___default().pad.Pkcs7),
        mode: (crypto_js__WEBPACK_IMPORTED_MODULE_2___default().mode.CBC)
      });
      console.log('Decrypted: ' + decrypted.toString((crypto_js__WEBPACK_IMPORTED_MODULE_2___default().enc.Utf8)));
      return decrypted.toString((crypto_js__WEBPACK_IMPORTED_MODULE_2___default().enc.Utf8));
    } catch (er) {
      return 'error';
    }
  }

  GetDCFtestDate() {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = new Date();
    var hr = d.getHours();

    if (hr <= 2) {
      d = new Date(d.getTime() - 1 * 24 * 60 * 60 * 1000);
    }

    var dd = ('0' + d.getDate()).slice(-2);
    var mm = monthNames[d.getMonth()];
    var yyyy = d.getFullYear();
    var myDateString = dd + '-' + mm + '-' + yyyy;
    return myDateString;
  }

  SetDCFtestDate() {
    var d = new Date();
    var hr = d.getHours();

    if (hr <= 2) {
      d = new Date(d.getTime() - 1 * 24 * 60 * 60 * 1000);
    }

    var dd = ('0' + d.getDate()).slice(-2);
    var mm = this.properFormatNumber(d.getMonth() + 1);
    var yyyy = d.getFullYear();
    var myDateString = yyyy + '-' + mm + '-' + dd;
    return myDateString;
  }

  GetcurrentTime() {
    var d = new Date();
    var hr = ('0' + d.getHours()).slice(-2); // => 9

    var min = ('0' + d.getMinutes()).slice(-2); // =>  30

    var sec = ('0' + d.getSeconds()).slice(-2); // => 51

    var timeNow = hr + ':' + min + ':' + sec;
    return timeNow;
  }

  GetcurrentTestDateTime() {
    var d = new Date();
    var day = this.properFormatNumber(d.getDate());
    var month = this.properFormatNumber(d.getMonth() + 1);
    var year = d.getFullYear();
    var hr = ('0' + d.getHours()).slice(-2); // => 9

    var min = ('0' + d.getMinutes()).slice(-2); // =>  30

    var sec = ('0' + d.getSeconds()).slice(-2); // => 51

    var timeNow = year + '-' + month + '-' + day + ' ' + hr + ':' + min + ':' + sec;
    return timeNow;
  }

  GetDCFtestTimeWithMiliSeconds() {
    var d = new Date();
    var hr = ('0' + d.getHours()).slice(-2); // => 9

    var min = ('0' + d.getMinutes()).slice(-2); // =>  30

    var sec = ('0' + d.getSeconds()).slice(-2); // => 51

    var mili = ('0' + d.getMilliseconds()).slice(-2);
    var timeNow = hr + ':' + min + ':' + sec + ':' + mili;
    return timeNow;
  }

  GetTimeWithMiliSeconds() {
    var d = new Date();
    var hr = ('0' + d.getHours()).slice(-2); // => 9

    var min = ('0' + d.getMinutes()).slice(-2); // =>  30

    var sec = ('0' + d.getSeconds()).slice(-2); // => 51

    var mili = ('0' + d.getMilliseconds()).slice(-2);
    var timeNow = hr + min + sec + mili;
    return timeNow;
  }

  getTestingShift() {
    let d = new Date();
    let hr = d.getHours();
    let shift = 'morning';

    if (hr > 14 || hr < 3) {
      shift = 'evening';
    }

    return shift;
  }

  setDatefromTestingData(dcfDate, dcfTime) {
    let v = dcfDate.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month = monthNames.indexOf(v[1]);
    var d = new Date(v[2] + '-' + this.properFormatNumber(month + 1) + '-' + v[0] + ' ' + dcfTime);
    var hr = d.getHours();

    if (hr <= 2) {
      d = new Date(d.getTime() - 1 * 24 * 60 * 60 * 1000);
    }

    var dd = ('0' + d.getDate()).slice(-2);
    var mm = this.properFormatNumber(d.getMonth() + 1);
    var yyyy = d.getFullYear();
    var myDateString = yyyy + '-' + mm + '-' + dd;
    return myDateString;
  }

  getOrightPreferenceValue(key) {
    let returnvalue = 'no'; //console.log("OrightPreferences ", this.getItem("OrightPreferences")) ;

    let OrightPreferences = this.getItem('OrightPreferences');

    if (OrightPreferences.length > 0) {
      for (let i = 0; i < OrightPreferences.length; i++) {
        if (OrightPreferences[i].ParameterKey == key) {
          returnvalue = OrightPreferences[i].ParameterValue;
        }
      }
    }

    return returnvalue;
  }

  mlScore(y_pred, y_test) {
    const correct = y_pred.reduce((prev, value, index) => {
      return value === y_test[index] ? prev + 1 : prev;
    }, 0);
    let score = correct / y_pred.length;
    return score;
  } // ionPull event handler


  ionRefreshPullHandler(refresher, slidesComp) {
    try {
      let scrollTop;

      if (slidesComp) {
        scrollTop = slidesComp._slides[0].scrollTop;
      } else {
        scrollTop = 0;
      }

      if (scrollTop > 0) {
        console.log('cancel refresh operation');
        refresher.disabled = true;
        refresher.cancel();
      } else {
        refresher.disabled = false;
      }
    } catch (err) {
      refresher.cancel();
      console.log('some error occured', err);
    }
  } // ionRefresh event handler


  runRefresh(refresher, slidesComp, httpSubs) {
    try {
      const deltaY = refresher.deltaY;

      if (deltaY >= this.minDeltaY) {
        // if (httpSubs[0].loading) {
        //   httpSubs.loading.present() ;
        // }
        console.log('Begin refreshing...');

        if (slidesComp) {
          // console.log(slidesComp) ;
          const activeIndex = slidesComp._activeIndex;
          const httpSubForCurrentSlide = httpSubs.find(h => h.slideIndex === activeIndex);

          if (!!httpSubForCurrentSlide.promise) {
            httpSubForCurrentSlide.promise().then(() => {
              refresher.complete();
            }).catch(err => {
              console.log(err);
              refresher.cancel();
            });
          } else {
            httpSubForCurrentSlide.observable().subscribe(data => {
              httpSubForCurrentSlide.observerSuccess(data);
              refresher.complete();
            }, err => {
              httpSubForCurrentSlide.observerError(err);
              refresher.cancel();
            });
          }
        } else {
          if (!!httpSubs[0].promise) {
            httpSubs[0].promise().then(data => {
              console.log('this is promise data:', data);
              console.log('this is called');
              refresher.complete();
            }).catch(err => {
              console.log(err);
              refresher.cancel();
            });
          } else {
            if (!!httpSubs[0].loadingComp) {
              httpSubs[0].loadingComp.present();
            }

            httpSubs[0].observable().subscribe(data => {
              httpSubs[0].observerSuccess(data);
              refresher.complete();
              httpSubs[0].loadingComp.dismiss();
            }, err => {
              httpSubs[0].observerError(err);
              refresher.cancel();
              httpSubs[0].loadingComp.dismiss();
            });
          }
        } // if (httpSubs[0].loading) {
        //   httpSubs.loading.dismiss() ;
        // }

      } else {
        console.log('deltaY less than 80');
      }
    } catch (error) {
      refresher.cancel();
      console.log('some error occured', error);
    }
  }

  validationalert(msg, validationalert) {
    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let valert = validationalert.create({
        message: msg,
        cssClass: 'alertMsg',
        buttons: [{
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked');
          }
        }],
        backdropDismiss: true
      });
      (yield valert).present();
      return valert;
    })();
  }

  inWords(num) {
    let numwords;
    console.log('Inwords function call');
    if ((num = num.toString()).length > 9) return 'Maximum amount for payment is ₹ 1,00,00,000';
    this.indexForPriceTextName = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!this.indexForPriceTextName) return;
    var str = '';
    str += this.indexForPriceTextName[1] != 0 ? (this.textNameForOnesPosition[Number(this.indexForPriceTextName[1])] || this.textNameForTenthPosition[this.indexForPriceTextName[1][0]] + ' ' + this.textNameForOnesPosition[this.indexForPriceTextName[1][1]]) + 'crore ' : '';
    str += this.indexForPriceTextName[2] != 0 ? (this.textNameForOnesPosition[Number(this.indexForPriceTextName[2])] || this.textNameForTenthPosition[this.indexForPriceTextName[2][0]] + ' ' + this.textNameForOnesPosition[this.indexForPriceTextName[2][1]]) + 'lakh ' : '';
    str += this.indexForPriceTextName[3] != 0 ? (this.textNameForOnesPosition[Number(this.indexForPriceTextName[3])] || this.textNameForTenthPosition[this.indexForPriceTextName[3][0]] + ' ' + this.textNameForOnesPosition[this.indexForPriceTextName[3][1]]) + 'thousand ' : '';
    str += this.indexForPriceTextName[4] != 0 ? (this.textNameForOnesPosition[Number(this.indexForPriceTextName[4])] || this.textNameForTenthPosition[this.indexForPriceTextName[4][0]] + ' ' + this.textNameForOnesPosition[this.indexForPriceTextName[4][1]]) + 'hundred ' : '';
    str += this.indexForPriceTextName[5] != 0 ? (str != '' ? 'and ' : '') + (this.textNameForOnesPosition[Number(this.indexForPriceTextName[5])] || this.textNameForTenthPosition[this.indexForPriceTextName[5][0]] + ' ' + this.textNameForOnesPosition[this.indexForPriceTextName[5][1]]) + 'only ' : '';
    numwords = str;
    console.log('AmountInWords', numwords);
    return numwords;
  }

  export2CSV(data, filename, platform, file, alertCtrl) {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!data || data.length === 0) {
        const alert = yield alertCtrl.create({
          message: 'No data Found',
          buttons: [{
            text: 'Ok',
            role: 'ok'
          }]
        });
        alert.present();
        return false;
      }

      const result = _this.convertDataToCSV(data);

      _this.downloadCSV(result, filename, platform, file, alertCtrl);
    })();
  }

  convertDataToCSV(data) {
    const lineDelimiter = '\n';
    let fields = [];
    console.log(data); // remove null or empty keys from all the objects

    data.forEach(item => {
      // console.log("item", item) ;
      for (const key in item) {
        if (item[key] == null || item[key] == '') {
          item[key] = ' ';
        } // console.log("item1", item[key]) ;

      }
    }); // check if any property of the object is an object or not

    for (const key in data[0]) {
      if ('object' === typeof data[0][key]) {
        if (data[0][key] == null) {
          data[0][key] = ' ';
        }

        const subFields = Object.keys(data[0][key]).map(k => key + '.' + k);
        fields = fields.concat(subFields);
      } else {
        fields.push(key);
      }
    }

    console.log('excel export fields: ', fields);
    let result = '';
    result += fields.map(field => field.toUpperCase()).join(',');
    result += lineDelimiter;
    data.forEach(function (item) {
      let ctr = 0;
      fields.forEach(function (key) {
        if (ctr > 0) {
          result += ',';
        }

        if (item[key]) {
          result += item[key];
        } else {
          const subKeys = key.split('.');
          result += item[subKeys[0]][subKeys[1]];
          console.log('result:', item[subKeys[0]][subKeys[1]]);
        }

        ctr++;
      });
      result += lineDelimiter;
    });
    return result;
  }

  exportToCSVForMultipleDataWithHeading(data, filename, platform, file, alertCtrl) {
    const result = this.convertMultipleDataWithHeadingToCSV(data);
    this.downloadCSV(result, filename, platform, file, alertCtrl);
  }

  convertMultipleDataWithHeadingToCSV(dataArray) {
    const lineDelimiter = '\n';
    let result = '';
    dataArray.forEach(data => {
      result += this.convertDataToCSVWithHeading(data);
      result += lineDelimiter;
    });
    return result;
  }

  convertDataToCSVWithHeading(data) {
    const lineDelimiter = '\n';
    let fields = [];
    let headings = []; // replace null or empty values to one white space from all the
    // objects in the array

    data.forEach(item => {
      for (const key in item) {
        if (item[key] == null || item[key] == '') {
          item[key] = ' ';
        }
      }
    }); // extract headings from data

    headings = data.filter(item => !!item.heading);
    data = data.filter(item => !item.heading); // check if any property of the object is an object or not

    for (const key in data[0]) {
      // check if any property is an object
      if ('object' === typeof data[0][key]) {
        // check if value at that key is null
        if (data[0][key] == null) {
          // if yes then set key to white space
          data[0][key] = ' ';
        }

        let subFields = Object.keys(data[0][key]).map(k => key + '.' + k);
        fields = fields.concat(subFields);
      } else {
        fields.push(key);
      }
    }

    let result = '';
    result += headings.map(h => h.heading.toUpperCase());
    result += lineDelimiter;
    result += fields.map(field => field.toUpperCase()).join(',');
    result += lineDelimiter;
    data.forEach(function (item) {
      let ctr = 0;
      fields.forEach(function (key) {
        if (ctr > 0) {
          result += ',';
        }

        if (item[key]) {
          result += item[key];
        } else {
          const subKeys = key.split('.');
          result += item[subKeys[0]][subKeys[1]];
        }

        ctr++;
      });
      result += lineDelimiter;
    });
    return result;
  }

  downloadCSV(csvdata, filename = 'Excel.csv', platform, file, alertCtrl) {
    if (!csvdata.match(/^data:text\/csv/i)) {
      csvdata = 'data:text/csv ;charset=utf-8,' + csvdata;
      csvdata = csvdata;
    }

    if (platform.is('desktop')) {
      const data = encodeURI(csvdata);
      const link = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', filename);
      link.click();
      return;
    }

    let path = null;

    if (platform.is('ios')) {
      path = file.documentsDirectory;
    } else if (platform.is('android')) {
      path = file.externalRootDirectory;
    } //alert(this.qrEncryption(csvdata) + "This is string:\n" + csvdata) ;


    file.writeFile(path, filename, csvdata, {
      replace: true
    }).then(() => {
      let alertMsg = alertCtrl.create({
        header: 'File Downloaded Successfully',
        subHeader: 'Your file is downloaded at ' + path + filename,
        buttons: ['Ok']
      }); //  this.EncryptExcel(path)
      // this.ShareCsvFile(path + 'data.des') ;
      //alertMsg.present() ;
    }).catch(error => {
      alert(JSON.stringify(error));
    });
  }

  getTimeBasedOnShift(shift) {
    if (shift === 'morning') {
      return '07:00:00';
    } else if (shift === 'evening') {
      return '19:00:00';
    }
  }

  checkstatusToSendForManualCorrection(action, role) {
    let statusValue;

    if (action == 'Add' || action == 'EditDCF') {
      if (role == '0-0') {
        statusValue = 'Approved';
      } else if (role == '1-0') {
        statusValue = 'Waiting for Final Approval';
      } else if (role == '2-0') {
        statusValue = 'Waiting for 1st level Approval';
      }
    } else if (action == 'Approve') {
      if (role == '2-1') {
        statusValue = 'Waiting for Final Approval';
      } else if (role == '1or2-2') {
        statusValue = 'Approved';
      }
    } else if (action == 'Reject') {
      if (role == '2-1') {
        statusValue = 'Rejected by 1st level Approver';
      } else if (role == '1or2-2') {
        statusValue = 'Rejected by Final Approver';
      }
    }

    return statusValue;
  }

  GetDCFtestDate1(d1) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = new Date(d1);
    var hr = d.getHours();

    if (hr <= 2) {
      d = new Date(d.getTime() - 1 * 24 * 60 * 60 * 1000);
    }

    var dd = ('0' + d.getDate()).slice(-2);
    var mm = monthNames[d.getMonth()];
    console.log('Month name', d.getMonth());
    console.log('Month name', mm);
    var yyyy = d.getFullYear();
    var myDateString = dd + '-' + mm + '-' + yyyy;
    return myDateString;
  }

  debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  /**
   *
   * @param time this is in the format HH:MM:ss
   * @param returnFull return morning/evening if true else returns 1/2
   * @return "morning"/"evening" or 1/2
   */


  getShiftFromTime(time, returnFull = true) {
    try {
      const splittedTime = time.split(':');
      const MORNING_HOUR = 3;
      const EVENING_HOUR = 15;
      const hour = parseInt(splittedTime[0]);

      if (hour < MORNING_HOUR && hour > EVENING_HOUR) {
        if (returnFull) {
          return 'morning';
        } else {
          return 'evening';
        }
      } else {
        if (returnFull) {
          return 1;
        } else {
          return 2;
        }
      }
    } catch (err) {
      throw err;
    }
  }
  /**
   *
   * @param num string : number to be formatted (if number is null then it will become 0)
   * @param options FormatNumberOptions : { maxLength: maximum length of the number, digitsAfterDecimal: number of characters after decimal  }
   * @returns string : formatted number according to the options
   */


  formatNumber(num, options) {
    try {
      if (!num || typeof num !== 'string') {
        num = '0';
      }

      if (!options.maxLength) {
        throw new Error('maxLength option is required');
      }

      if (!options.digitsAfterDecimal) {
        throw new Error('maxLength option is required');
      }

      const splittedNum = num.split('.');
      const numBeforeDecimal = splittedNum[0];
      const numAfterDecimal = splittedNum[1];
      const numBeforeDecimalLength = numBeforeDecimal.length;
      let numAfterDecimalLength;
      if (numAfterDecimal) numAfterDecimalLength = numAfterDecimal.length; // if num Before Decimal's Length > max length then
      // return truncate that number to max length without decimal

      if (numBeforeDecimalLength + options.digitsAfterDecimal + 1 > options.maxLength) {
        return numBeforeDecimal.substring(0, options.maxLength);
      } else if (numAfterDecimal && numAfterDecimalLength >= options.digitsAfterDecimal) {
        return numBeforeDecimal + '.' + numAfterDecimal.substring(0, options.digitsAfterDecimal);
      } else if (numAfterDecimal && numAfterDecimalLength < options.digitsAfterDecimal) {
        let formattedNumAfterDecimal = numAfterDecimal.substring(0, options.digitsAfterDecimal);

        while (formattedNumAfterDecimal.length !== options.digitsAfterDecimal) {
          formattedNumAfterDecimal = formattedNumAfterDecimal + '0';
        }

        return numBeforeDecimal + '.' + formattedNumAfterDecimal;
      } else {
        return numBeforeDecimal.substring(0, options.maxLength);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  /**
   * return the changed datatype of a value
   * @param value the value of which datatype is to be changed
   * @param toDataType target data type
   * @returns value with changed data type
   */


  changeDataType(value, toDataType) {
    try {
      const dataTypeParserMappings = {
        int: 'parseInt',
        float: 'parseFloat'
      };
      if (toDataType === 'string') return value.toString().toLowerCase();
      return window[dataTypeParserMappings[toDataType]].apply(null, [value]);
    } catch (err) {
      console.log(err);
      return value;
    }
  }
  /**
   * Return a particular value from an object (the value can be nested)
   * e.g. in an object x = {id:1, bio: {name:"...",age:22}} to get value of age
   * obj = x, pathToValue = "bio.age"
   * @param obj the object from which value is to be cherry picked
   * @param pathToValue path to that value
   * @returns value from the object
   */


  getValueFromObject(obj, pathToValue) {
    try {
      const splittedPathToValue = pathToValue.split('.');
      let finalValue = obj;
      splittedPathToValue.forEach(item => {
        if (finalValue[item] == undefined) throw new Error('wrong path');
        finalValue = finalValue[item];
      });
      return finalValue;
    } catch (err) {
      console.log(err);
      return '';
    }
  }
  /**
   * This function sorts array of objects based on a property of the object
   * @param arToSort array to be sorted
   * @param propertyToSortBy path To The Property using which array will be sorted
   * @param options options can contain two values isAscending and toggleAscDesc
   * toggleAscDesc = if the array is in ascending order it will be converted to descending order and vice versa
   * isAscending = fixed order in which to keep the array (true = asc, false = desc)
   * isDate = true if propertyToSortBy is date else false
   * dataType = data type of the propertyToSortBy valid values = "string","int","float"
   * Note: if data type is date then set isDate = true and don't set dataType
   * @returns sorted array if no error else null
   */


  sortArrayOfObject(arToSort, propertyToSortBy, options = {}) {
    try {
      let {
        isAscending,
        toggleAscDesc,
        isDate,
        dataType
      } = options;
      dataType = dataType || 'string';

      if (toggleAscDesc && !isDate) {
        if (this.compareValuesFunc(this.getValueFromObject(arToSort[0], propertyToSortBy), this.getValueFromObject(arToSort[arToSort.length - 1], propertyToSortBy), dataType, true) !== -1) {
          isAscending = true;
        } else {
          isAscending = false;
        }
      }

      if (toggleAscDesc && isDate) {
        const dateOfFirstElement = new Date(this.getValueFromObject(arToSort[0], propertyToSortBy));
        const dateOfLastElement = new Date(this.getValueFromObject(arToSort[arToSort.length - 1], propertyToSortBy));

        if (dateOfLastElement - dateOfFirstElement > 0) {
          isAscending = true;
        } else {
          isAscending = false;
        }
      }

      if (isDate) return arToSort.sort((a, b) => this.compareDateValues(new Date(this.getValueFromObject(a, propertyToSortBy)), new Date(this.getValueFromObject(b, propertyToSortBy)), isAscending));else {
        return arToSort.sort((a, b) => this.compareValuesFunc(this.getValueFromObject(a, propertyToSortBy), this.getValueFromObject(b, propertyToSortBy), dataType, isAscending));
      }
    } catch (err) {
      console.log('error in sorting:', err);
      return null;
    }
  } // sortArrayOfObject function uses this function


  compareValuesFunc(property1, property2, toDataType, isAsc) {
    const property1WithChangedDataType = this.changeDataType(property1, toDataType);
    const property2WithChangedDataType = this.changeDataType(property2, toDataType);
    if (property1WithChangedDataType < property2WithChangedDataType) return isAsc ? -1 : 1;else if (property1WithChangedDataType > property2WithChangedDataType) return isAsc ? 1 : -1;else return 0;
  }

  compareDateValues(date1, date2, isAsc) {
    const date1Time = date1.getTime();
    const date2Time = date2.getTime();
    if (date1Time < date2Time) return isAsc ? -1 : 1;else if (date1Time > date2Time) return isAsc ? 1 : -1;else return 0;
  } //================ Validation functions Start ========================


  isInt(value) {
    return !isNaN(value) && function (x) {
      return (x | 0) === x;
    }(parseFloat(value));
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

  checkFileExtension(fileName, validExtensions) {
    if (fileName) {
      const extension = fileName.slice((Math.max(0, fileName.lastIndexOf('.')) || Infinity) + 1);
      return validExtensions.indexOf(extension) > -1;
    } else {
      return false;
    }
  }

  isEmpty(val) {
    val = val.toString();
    if (val) return val.trim() === '';else return true;
  }

  checkEmpty(val) {
    try {
      if (val === '' || !val) {
        return '--';
      } else {
        return val;
      }
    } catch (err) {
      console.log('some error occured: ', err);
      return '--';
    }
  }

  checkLength(val, options = {}) {
    try {
      if (val.toString() == null || val.toString() == undefined) {
        throw new Error('val is not string');
      }

      let result = true;
      val = val.trim();

      if (options.max != null || options.max != undefined) {
        if (val.length <= options.max) result = true;else result = false;
      }

      if (options.min != null || options.min != undefined) {
        if (val.length >= options.min) result = result && true;else result = result && false;
      }

      return result;
    } catch (err) {
      throw err;
    }
  }
  /**
   *
   * @param val
   * @param regex
   * for testing true for everything except some characters
   * "^(?!.*[!@#\$%\^&\*\-_]).*$"
   * @returns
   */


  checkRegEx(val, regex) {
    try {
      if (!val || !regex) return false;
      const re = new RegExp(regex);
      const ok = re.test(val);
      return ok;
    } catch (err) {
      throw err;
    }
  }

  isAlphaNumeric(val) {
    try {
      return this.checkRegEx(val, '^[A-Za-z0-9]+$');
    } catch (err) {
      throw err;
    }
  }

  isAlphabets(val) {
    try {
      return this.checkRegEx(val, '^[A-Za-z]+$');
    } catch (err) {
      throw err;
    }
  } //================ Validation functions End ==========================
  //================ Sanitization functions Start ======================


  addZeroBeforeDecimal(num) {
    let q0;
    q0 = num.toString();

    if (q0.startsWith('.')) {
      q0 = '0' + q0;
    }

    return q0;
  }

  removeLeadingZeroes(num, returnZeroIfStringIsZero = false) {
    if (returnZeroIfStringIsZero && parseInt(num) === 0) return '0';
    num = num.replace(/^0+/, '');
    return num;
  }

  removeLeadingSpace(num) {
    num = num.replace(/^ +/, '');
    console.log('Num length', num.length);
    return num;
  }

  roundTo(num, places) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  }

  twoDecimalNumericPattern(val) {
    if (val.toString() == null || val.toString() == undefined) {
      throw new Error('val is not string');
    }

    if (val && val !== '') {
      let pattern = /^\d{0,7}(\.\d{1,2})?$/;
      let result = pattern.test(val.trim());
      return result;
    } else {
      return false;
    }
  }

  changeDateFormat(date) {
    try {
      let year = date.split('-')[2];
      let month = date.split('-')[1];
      let monthval = this.properFormatNumberFromString(this.getMonthNumber(month));
      let dateval = date.split('-')[0];
      let finalDate = year + '-' + monthval + '-' + dateval;
      return finalDate;
    } catch (e) {
      console.log(e);
    }
  }

  formatDate(date) {
    try {
      date = date.split('-')[2] + '-' + date.split('-')[1] + '-' + date.split('-')[0];
      return date;
    } catch (e) {
      console.log(e);
    }

    return date;
  }

  formatDate1(date) {
    try {
      date = date.split('-')[2] + '-' + this.getMonthName(date.split('-')[1].toString()) + '-' + date.split('-')[0];
      return date;
    } catch (e) {
      console.log(e);
    }

    return date;
  } // date input format should be : mm/dd/yyyy,output format will be dd-mmm-yyyy


  formatDate2(date, separator) {
    let resDate = '';

    try {
      const splittedDate = date.split(separator);
      resDate = splittedDate[1] + '-' + this.getMonthName(splittedDate[0]) + '-' + splittedDate[2];
    } catch (e) {
      console.log(e);
    }

    return resDate;
  }

  formatDate3(date) {
    try {
      let year = date.split('-')[0];
      let month = date.split('-')[1];
      let monthval = this.getMonthName(month);
      console.log('Month value', month);
      console.log('Month value', monthval);
      let dateval = date.split('-')[2];
      let finalDate = dateval + '-' + monthval + '-' + year;
      console.log('dateval value', dateval);
      console.log('year value', year);
      console.log('finalDate value', finalDate);
      return finalDate;
    } catch (e) {
      console.log(e);
    }
  }

  truncateToDecimals(num, dec = 2) {
    const calcDec = Math.pow(10, dec);
    return Math.trunc(num * calcDec) / calcDec;
  }

  padStart(padding_length, padding_char, variable) {
    let padding = '';

    for (let i = 0; i < padding_length; i++) {
      padding += padding_char;
    }

    let paddedVariable = padding + variable;
    return paddedVariable.substr(paddedVariable.length - padding_length);
  }

  replaceComma(str) {
    return str.replace(',', '');
  }

  formatCurrency(x) {
    if (x != null && x != undefined) {
      x = x.toString();
      var afterPoint = '';
      if (x.indexOf('.') > 0) afterPoint = x.substring(x.indexOf('.'), x.length);
      x = Math.floor(x);
      x = x.toString();
      var lastThree = x.substring(x.length - 3);
      var otherNumbers = x.substring(0, x.length - 3);
      if (otherNumbers != '') lastThree = ',' + lastThree;
      var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint;
      return res;
    } else {
      return x;
    }
  }

  addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }

    return x1 + x2;
  }

  breakText(text) {
    if (text.length > 7) {
      text = text.substring(0, 6) + ' ' + text.substring(7, text.length);
    }

    return text;
  }

  addPadding(string, len, paddingStr) {
    let arr = string.split('.');

    for (let i = 0; i < len; i++) {
      if (arr[0].length < len) {
        arr[0] = paddingStr + arr[0];
      }
    }

    return arr.join('.');
  }

  setYear() {
    var d = new Date();
    let year = d.getFullYear();
    let finalDate = year;
    return finalDate;
  }

  Generatepin(id) {
    var sum = 0;
    var d = new Date();
    var day = this.properFormatNumber(d.getDate());
    var month = this.properFormatNumber(d.getMonth() + 1);
    var year = this.properFormatNumber(d.getFullYear());
    var hr = this.properFormatNumber(d.getHours()); // => 9

    var min = this.properFormatNumber(d.getMinutes()); // =>  30

    var sec = this.properFormatNumber(d.getSeconds()); // => 51

    var mili = this.properFormatNumber(d.getMilliseconds());
    var shift = 'morning';

    if (parseInt(hr) > 15 || parseInt(hr) < 3) {
      shift = 'evening';
    }

    console.log('id', id.toString());
    console.log('day', day.toString());
    console.log('month', month.toString());
    console.log('year', year.toString());
    console.log('hr', hr.toString());
    console.log('shift', shift.toString());
    var str = id.toString() + day.toString() + month.toString() + year.toString() + hr.toString() + shift.toString();
    var encodedString = this.qrEncryption(str);

    for (var i = 0; i < encodedString.length; i++) {
      sum += encodedString.charCodeAt(i);
      console.log(encodedString.charCodeAt(i));
    }

    return sum;
  } //================ Sanitization functions End ========================
  ///=================== printer utility functions - START =========================

  /**
   *
   * @param data = string which is to be printed
   * @param printerRowLength = Length of the printer slip row
   * @param emptyCharacter = Length of the printer slip row
   * @returns data placed in center according the parameters
   */


  placeInCenter(data, printerRowLength, emptyCharacter = ' ') {
    const len = data.length;
    const dif = printerRowLength - len;
    let res = '';

    for (let i = 0; i < Math.ceil(dif / 2); ++i) {
      res += emptyCharacter;
    }

    res += data;

    for (let i = 0; i < Math.floor(dif / 2); ++i) {
      res += emptyCharacter;
    }

    res += '\n';
    return res;
  }
  /**
   *
   * @param data = string which is to be printed
   * @param printerRowLength = Length of the printer slip row
   * @param emptyCharacter = Length of the printer slip row
   * @returns data placed in left according the parameters
   */


  placeInLeft(data, printerRowLength, emptyCharacter = ' ') {
    const len = data.length;
    const dif = printerRowLength - len;
    let res = data;

    for (let i = 0; i < dif; ++i) {
      res += ' ';
    }

    res += '\n';
    return res;
  }
  /**
   *
   * @param str1 string one to be placed on left hand side
   * @param str2 string two to be placed on right hand side
   * @param printerRowLength Length of the printer slip row
   */


  placeTwoStringsSpaceBetween(str1, str2, printerRowLength) {
    const str2Len = str2.length;
    return this.addParsedSummaryDataToPrint(str1, str2, printerRowLength, printerRowLength - str2Len);
  }
  /**
   *
   * @param str string to be repeated
   * @param count number of time the str to be repeated
   * @returns concatenated repeated str
   */


  repeatedStr(str, count) {
    let res = '';

    for (let i = 0; i < count; ++i) res += str;

    return res;
  }
  /**
   *
   * @param label string to be placed in left hand side
   * @param value string to be placed in right hand side
   * @param printerRowLength Length of the printer slip row
   * @param valueStartIndex start index of the printer slip row to start value string
   * @returns
   */


  addParsedSummaryDataToPrint(label, value, printerRowLength, valueStartIndex) {
    const labelLen = label.length;

    if (labelLen > valueStartIndex) {
      throw Error('Max length exceeded of some column in printing report data');
    }

    let result = label; // add gap between label and value

    result += this.repeatedStr(' ', valueStartIndex - labelLen);
    result += value;
    return this.placeInLeft(result, printerRowLength);
  }

  getIsBluetoothPrinterServiceMapped() {
    let returnVar = true;

    try {
      if (this.getOrightPreferenceValue('SendMilkoreaderPrintData') != 'no' || this.getOrightPreferenceValue('sendOrightPrintData') != 'no') {
        returnVar = false;
      }
    } catch (e) {
      console.log(e);
    }

    return returnVar;
  }

  getIs2inchPrinterFormatServiceMapped() {
    let returnVar = false;

    try {
      if (this.getOrightPreferenceValue('bluetoothPrnt2inch') != 'no' || this.getOrightPreferenceValue('BluetoothPrint2InchForAnanda') != 'no') {
        returnVar = true;
      }
    } catch (e) {
      console.log(e);
    }

    return returnVar;
  }

  asyncFunc(val) {
    var _this2 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.delay(val);
    })();
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  printDataInWebBrowser(classNameOfDataToPrint) {
    var printWindow = window.open(); // printWindow.document.write(
    //   '<link rel="stylesheet" href="build/main.css"/><style>*{print-color-adjust:exact;overflow:visible;}</style>'
    // );

    printWindow.document.write(document.querySelector(`.${classNameOfDataToPrint}`).innerHTML);
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 200);
  } ///=================== printer utility functions - END =========================
  //============================ multiple select modal =============================

  /**
          *
          * @param list array of object on which select menu has to be displayed
          * @param searchPlaceholder value which will be appear in search bar placeholder
          * @param selectedItem  default selected item value
          * @param labelKey   name of the key in the above array of objectwhich will be used as label
          * @param valueKey  name of the key in the above array of objectwhich will be used as value
          * @param modalController  object of ModalController
          * @returns user selected value
          *
          * Example
          *     multiselectData:string=this.list[0].value;
                async callmultipleselectmodalForlist(){
                  await this.multipleSelectModal(this.list,'search farmer',this.multiselectData,'label','value',this.modalController).then((data:string)=>{
                    this.multiselectData=data;
                  }).catch((er)=>{
                    console.log(er);
                  });
                }
          *
          
          */


  multipleSelectModal(list, searchPlaceholder, selectedItem, labelKey, valueKey, modalController) {
    var _this3 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let self_ = _this3;
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          let modal;
          modal = yield modalController.create({
            component: _pages_multiple_select_modal_multiple_select_modal_page__WEBPACK_IMPORTED_MODULE_3__.MultipleSelectModalPage,
            componentProps: {
              list: list,
              searchPlaceholder: searchPlaceholder,
              selectedItem: selectedItem,
              labelKey: labelKey,
              valueKey: valueKey
            },
            cssClass: 'notification-card'
          });
          modal.onDidDismiss(data => {
            console.log(data);
            resolve(data);
          });
          modal.present();
        });

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  } //============================ multiple select modal END =============================
  //============================ single select modal =============================

  /**
          *
          * @param list array of object on which select menu has to be displayed
          * @param searchPlaceholder value which will be appear in search bar placeholder
          * @param selectedItem  default selected item value
          * @param labelKey   name of the key in the above array of objectwhich will be used as label
          * @param valueKey  name of the key in the above array of objectwhich will be used as value
          * @param modalController  object of ModalController
          * @returns user selected value
          *
          * Example
          *   selectedItem:string=this.list[0].value;
              async callsingleselectmodalForlist(){
                await this.singleSelectModal(this.list,'search farmer',this.selectedItem,'label','value',this.modalController).then((data:string)=>{
                  this.selectedItem=data;
                }).catch((er)=>{
                  console.log(er);
                });
              }
          *
          
          */


  singleSelectModal(list, searchPlaceholder, selectedItem, labelKey, valueKey, modalController) {
    var _this4 = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let self_ = _this4;
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          let modal;
          modal = yield modalController.create({
            component: _pages_single_select_modal_single_select_modal_page__WEBPACK_IMPORTED_MODULE_4__.SingleSelectModalPage,
            componentProps: {
              list: list,
              searchPlaceholder: searchPlaceholder,
              selectedItem: selectedItem,
              labelKey: labelKey,
              valueKey: valueKey
            },
            cssClass: 'notification-card' // enterAnimation: 'modal-scale-up-enter',
            // leaveAnimation: 'modal-scale-up-leave',

          });
          modal.onDidDismiss(data => {
            console.log(data);
            resolve(data);
          });
          modal.present();
        });

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  } //============================ single select modal END =============================
  //============================Calculating Farmer Bonus=============================


  getFarmerBonus(farmerid, farmername, milk, quantity, result, fat, snf, unit, amount, shift, date, time) {
    let bonus = 0;
    let farmerBonusOnMilkProuring = this.getOrightPreferenceValue('FarmerBonusOnMilkProuring');

    if (farmerBonusOnMilkProuring != 'no') {
      bonus = eval(farmerBonusOnMilkProuring);
    }

    return bonus.toFixed(2);
  }

}

/***/ }),

/***/ 77957:
/*!*****************************************!*\
  !*** ./src/app/utils/StringContants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringConstants": () => (/* binding */ StringConstants)
/* harmony export */ });
class StringConstants {
    constructor() {
        this.FORGOT_PASSWORD = 'Forgot Password?';
        this.LOGIN_DONT_HAVE_ACCOUNT = "Don't have an account?";
        this.SIGNUP = 'Sign up';
        this.LOGIN = 'Log In';
        //farmer_dashboard
        this.Dashboard = 'Dashboard';
        this.Milk = 'Milk';
        this.Fat_SNF = 'Fat / SNF';
        this.Amount = 'Amount';
        this.todays_milk_detail = "Today's Milk Details";
        this.Type = 'Type';
        this.Quantity = 'Quantity';
        this.Fat_SNF_TITLE = 'Fat/SNF';
        this.Unit_Price_title = 'Unit Price';
        this.tranches_details = 'Tranche Details';
        this.date_title = 'Date';
        this.Amount_Due_title = 'Amount Due';
        this.Receive = 'Receive';
        //farmer profile text
        this.fp_Profile_text = 'Profile';
        this.fp_First_Name_text = 'First Name';
        this.fp_Last_Name_text = 'Last Name';
        this.fp_Phone_text = 'Phone';
        this.fp_Collection_Center_text = 'Collection Center';
        this.fp_Milk_Farm_text = 'Milk Farm';
        this.fp_Cattle_Cow_text = 'Cattle Cow';
        this.fp_Calves_Cow_text = 'Calves Cow';
        this.fp_Cattle_Buffalo_text = 'Cattle Buffalo';
        this.fp_Calves_Buffalo_text = 'Calves Buffalo';
        this.fp_Cattle_Desi_text = 'Cattle Mix';
        this.fp_Calves_Desi_text = 'Calves Mix';
        this.fp_CANCEL_text = 'CANCEL';
        this.fp_UPDATE_text = 'UPDATE';
        //fp receive payment text
        this.fpay_Recieve_Payment_text = 'Recieve Payment';
        this.fpay_Month_Year_text = 'Month Year';
        this.fpay_Quantity_text = 'Quantity';
        this.fpay_Payment_text = 'Payment';
        this.fpay_Due_text = 'Due';
        this.fpay_Recieved_text = 'Recieved';
        //change password text
        this.cp_change_password_text = 'Change Password';
        this.cp_old_password_text = 'Old password';
        this.cp_new_password_text = 'New Password';
        this.cp_confirm_password_text = 'Confirm Password';
        this.cp_cancel_text = 'Cancel';
        this.cp_change_text = 'Change';
        //cc dashboard
        this.ccd_Dashboard_text = 'Dashboard';
        this.ccd_Collection_Center_text = 'Collection Center';
        this.ccd_Full_Day_text = 'Full Day';
        this.ccd_AM_text = 'AM';
        this.ccd_PM_text = 'PM';
        this.ccd_All_text = 'All';
        this.ccd_Cow_text = 'Cow';
        this.ccd_Buffalo_text = 'Buffalo';
        this.ccd_Desi_text = 'Mix';
        this.ccd_Received_Expected_text = 'Received / Expected';
        this.ccd_Milk_text = 'Milk';
        this.ccd_Amount_text = 'Amount';
        this.ccd_Fat_SNF_text = 'Fat/SNF';
        this.ccd_Present_Total_text = 'Present / Total';
        this.ccd_Farmers_text = 'Farmers';
        this.ccd_See_All_text = 'See All';
        this.ccd_Farmer_text = 'Farmer';
        this.ccd_Quantity_text = 'Quantity';
        this.ccd_Price_text = 'Price';
        this.ccd_Unit_text = 'Unit';
        this.ccd_Total_text = 'Total';
        //collection center profile
        this.ccp_Update_Profile = 'Profile';
        this.ccp_Business_name = 'Business name';
        this.ccp_Supervisor_Name = 'Supervisor Name';
        this.ccp_Exp_Cow_Milk_AM = 'Exp. Cow Milk AM';
        this.ccp_Exp_Cow_Milk_PM = 'Exp. Cow Milk PM';
        this.ccp_Exp_Cow_Buffalo_AM = 'Exp. Buffalo Milk AM';
        this.ccp_Exp_Cow_Buffalo_PM = 'Exp. Buffalo Milk PM';
        this.ccp_Exp_Cow_Desi_AM = 'Exp. Mix Milk AM';
        this.ccp_Exp_Cow_Desi_PM = 'Exp. Mix Milk PM';
        this.ccp_Address = 'Address';
        this.ccp_Zip_Code = 'Pin Code';
        this.ccp_CANCEL = 'CANCEL';
        this.ccp_UPDATE = 'UPDATE';
        //add farmer
        this.ccadf_Add_Farmer = 'Add Farmer';
        this.ccadf_Enter_Name = 'Enter Name';
        this.ccadf_Phone = 'Phone';
        this.dd_Dashboard = 'Dashboard';
        this.dd_Dairy_Farm = 'Dairy Farm';
        this.dd_Full_Day = 'Full Day';
        this.dd_AM = 'AM';
        this.dd_PM = 'PM';
        this.dd_All = 'All';
        this.dd_Cow = 'Cow';
        this.dd_Buffalo = 'Buffalo';
        this.dd_Desi = 'Mix';
        this.dd_Received_Expected = 'Received / Expected';
        this.dd_Milk = 'Milk';
        this.dd_Amount = 'Amount';
        this.dd_Quantity_Adultrated = 'Quantity Adultrated';
        this.dd_Fat_SNF = 'Fat / SNF';
        this.dd_Present_Total = 'Present / Total';
        this.dd_Failed_CC = 'Failed CC';
        this.dd_Collection_Centers = 'Collection Centers';
        this.dd_Name = 'Name';
        this.dd_Quantity = 'Quantity';
        this.dd_milk_type = 'Milk Type :';
        this.FORGOT_PASSWORD_hindi = 'पासवर्ड भूल गए ?';
        this.LOGIN_DONT_HAVE_ACCOUNT_hindi = 'खाता नहीं है ?';
        this.SIGNUP_hindi = 'साइन अप करें';
        this.LOGIN_hindi = 'लॉग इन करें';
        this.Dashboard_hindi = 'डैशबोर्ड';
        this.Milk_hindi = 'दूध';
        this.Fat_SNF_hindi = 'वसा / एसएनएफ';
        this.Amount_hindi = 'रकम';
        this.todays_milk_detail_hindi = 'आज का दूध का विवरण';
        this.Type_hindi = 'प्रकार';
        this.Quantity_hindi = 'मात्रा';
        this.Fat_SNF_TITLE_hindi = 'वसा/एसएनएफ';
        this.Unit_Price_title_hindi = 'यूनिट मूल्य';
        this.tranches_details_hindi = 'ट्रेन्च विवरण';
        this.date_title_hindi = 'दिनांक';
        this.Amount_Due_title_hindi = 'देय राशि';
        this.Receive_hindi = 'प्राप्त करना';
    }
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 10674:
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/pop-up-notification/pop-up-notification/pop-up-notification.component.scss?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3AtdXAtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 62161:
/*!********************************************************************************!*\
  !*** ./src/app/components/quickinsight/quickinsight.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#dashboardContainer {\n  width: 100%;\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aWNraW5zaWdodC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE9yaWdodCUyMEFwcCUyMElvbmljJTIwNiUyMEJ1aWxkJTIwMzAlMjBNYXJjaFxcT3JpZ2h0X3Y0X01pbmlCdWlsZFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHF1aWNraW5zaWdodFxccXVpY2tpbnNpZ2h0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJxdWlja2luc2lnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGFzaGJvYXJkQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG59IiwiI2Rhc2hib2FyZENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 60081:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/report-column-selector/report-column-selector.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  display: flex;\n  text-align: center;\n}\n\nion-content ion-list ion-item ion-label {\n  display: flex;\n  flex-direction: row;\n}\n\nion-content ion-list ion-item ion-label span {\n  border: solid 2px red;\n  color: white;\n  background: rgb(6, 243, 6);\n  margin-left: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid white;\n  padding: 2px;\n  position: absolute;\n  right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxPcmlnaHQlMjBBcHAlMjBJb25pYyUyMDYlMjBCdWlsZCUyMDMwJTIwTWFyY2hcXE9yaWdodF92NF9NaW5pQnVpbGRcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxyZXBvcnQtY29sdW1uLXNlbGVjdG9yXFxyZXBvcnQtY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FES1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNGaEI7O0FER2dCO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0Z4QiIsImZpbGUiOiJyZXBvcnQtY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tbGlzdHtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDYsIDI0MywgNik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHggO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0IDo1MHB4XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW4ge1xuICBib3JkZXI6IHNvbGlkIDJweCByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiKDYsIDI0MywgNik7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MHB4O1xufSJdfQ== */";

/***/ }),

/***/ 92360:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/report-dashboard-power-bi/report-dashboard-power-bi.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".custum-reports-web {\n  padding-bottom: 50px;\n}\n.custum-reports-web ion-header ion-toolbar .navname {\n  height: 45px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.custum-reports-web ion-header ion-toolbar .navname span p {\n  color: white;\n  font-size: 1.3em;\n}\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea {\n  width: 20%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n}\n.custum-reports-web ion-header ion-toolbar .navname .backbuttonarea img {\n  position: absolute;\n  left: 10px;\n}\n.custum-reports-web ion-content powerbi-report {\n  height: 75%;\n  width: 100%;\n}\n.custum-reports-mobile {\n  display: none !important;\n}\n@media only screen and (max-width: 480px) {\n  .custum-reports-mobile {\n    display: block !important;\n    padding-bottom: 50px;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname {\n    height: 45px;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname span p {\n    color: white;\n    font-size: 1.3em;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea {\n    width: 20%;\n    height: 100%;\n    position: absolute;\n    left: 0px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    justify-items: center;\n    justify-content: center;\n  }\n  .custum-reports-mobile ion-header ion-toolbar .navname .backbuttonarea img {\n    position: absolute;\n    left: 10px;\n  }\n  .custum-reports-mobile ion-content {\n    margin-bottom: 75px;\n    padding-bottom: 50px;\n  }\n  .custum-reports-web {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1kYXNoYm9hcmQtcG93ZXItYmkuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxPcmlnaHQlMjBBcHAlMjBJb25pYyUyMDYlMjBCdWlsZCUyMDMwJTIwTWFyY2hcXE9yaWdodF92NF9NaW5pQnVpbGRcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxyZXBvcnQtZGFzaGJvYXJkLXBvd2VyLWJpXFxyZXBvcnQtZGFzaGJvYXJkLXBvd2VyLWJpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7QUNBSjtBREtZO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNKaEI7QURPa0I7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNMcEI7QURTZ0I7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDUGxCO0FEUWtCO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDTnBCO0FEa0JNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNoQlI7QURnQ0M7RUFDSyx3QkFBQTtBQzdCTjtBRGlDSTtFQUNFO0lBQ0UseUJBQUE7SUFFQSxvQkFBQTtFQy9CTjtFRG9DYztJQUVJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VDbkNsQjtFRHNDb0I7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUNwQ3RCO0VEd0NrQjtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7RUN0Q3BCO0VEdUNvQjtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtFQ3JDdEI7RUQ2Q007SUFFUSxtQkFBQTtJQUNBLG9CQUFBO0VDNUNkO0VEc0RJO0lBQ0Usd0JBQUE7RUNwRE47QUFDRiIsImZpbGUiOiJyZXBvcnQtZGFzaGJvYXJkLXBvd2VyLWJpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3R1bS1yZXBvcnRzLXdlYlxyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGlvbi1oZWFkZXJ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubmF2bmFtZSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYmFja2J1dHRvbmFyZWEge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29udGVudCB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgXHJcbiAgICAgIHBvd2VyYmktcmVwb3J0e1xyXG4gICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICBcclxuICBcclxuXHJcbiAgICB9XHJcbiBcclxuXHJcblxyXG59XHJcblxyXG4gLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgaW9uLWhlYWRlcntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2bmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5iYWNrYnV0dG9uYXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlvbi1jb250ZW50IHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo3NXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5jdXN0dW0tcmVwb3J0cy13ZWIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9ICIsIi5jdXN0dW0tcmVwb3J0cy13ZWIge1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSB7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jdXN0dW0tcmVwb3J0cy13ZWIgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSBzcGFuIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLm5hdm5hbWUgLmJhY2tidXR0b25hcmVhIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmN1c3R1bS1yZXBvcnRzLXdlYiBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIC5iYWNrYnV0dG9uYXJlYSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG59XG4uY3VzdHVtLXJlcG9ydHMtd2ViIGlvbi1jb250ZW50IHBvd2VyYmktcmVwb3J0IHtcbiAgaGVpZ2h0OiA3NSU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdHVtLXJlcG9ydHMtbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIHNwYW4gcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gIH1cbiAgLmN1c3R1bS1yZXBvcnRzLW1vYmlsZSBpb24taGVhZGVyIGlvbi10b29sYmFyIC5uYXZuYW1lIC5iYWNrYnV0dG9uYXJlYSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy1tb2JpbGUgaW9uLWhlYWRlciBpb24tdG9vbGJhciAubmF2bmFtZSAuYmFja2J1dHRvbmFyZWEgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICAuY3VzdHVtLXJlcG9ydHMtbW9iaWxlIGlvbi1jb250ZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB9XG4gIC5jdXN0dW0tcmVwb3J0cy13ZWIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 79687:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/multiple-select-modal/multiple-select-modal.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".multipleSelectmodal {\n  max-height: 700px;\n  max-width: 300px;\n}\n\n.centered-element {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.container {\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpcGxlLXNlbGVjdC1tb2RhbC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxPcmlnaHQlMjBBcHAlMjBJb25pYyUyMDYlMjBCdWlsZCUyMDMwJTIwTWFyY2hcXE9yaWdodF92NF9NaW5pQnVpbGRcXHNyY1xcYXBwXFxwYWdlc1xcbXVsdGlwbGUtc2VsZWN0LW1vZGFsXFxtdWx0aXBsZS1zZWxlY3QtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoibXVsdGlwbGUtc2VsZWN0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aXBsZVNlbGVjdG1vZGFsIHtcclxuICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uY2VudGVyZWQtZWxlbWVudCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIiwiLm11bHRpcGxlU2VsZWN0bW9kYWwge1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLmNlbnRlcmVkLWVsZW1lbnQge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 18032:
/*!************************************************************************************!*\
  !*** ./src/app/pages/single-select-modal/single-select-modal.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".singleSelectmodal {\n  max-height: 700px;\n  max-width: 300px;\n}\n\n.centered-element {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.container {\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1zZWxlY3QtbW9kYWwucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcT3JpZ2h0JTIwQXBwJTIwSW9uaWMlMjA2JTIwQnVpbGQlMjAzMCUyME1hcmNoXFxPcmlnaHRfdjRfTWluaUJ1aWxkXFxzcmNcXGFwcFxccGFnZXNcXHNpbmdsZS1zZWxlY3QtbW9kYWxcXHNpbmdsZS1zZWxlY3QtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic2luZ2xlLXNlbGVjdC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlU2VsZWN0bW9kYWwge1xyXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC1lbGVtZW50IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iLCIuc2luZ2xlU2VsZWN0bW9kYWwge1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLmNlbnRlcmVkLWVsZW1lbnQge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-menu contentId=\"content\">\r\n    <ion-content>\r\n      <div style=\"\r\n          display: block;\r\n          text-align: center;\r\n          align-items: center;\r\n          justify-content: center;\r\n          padding-top: 20px;\r\n        \">\r\n        <!-- <ion-avatar item-start> -->\r\n        <div style=\"display: flex; justify-content: space-around\"\r\n          *ngIf=\"this.Farm_Logo_Path!='null' && this.Farm_Logo_Path!=null\">\r\n          <img style=\"max-height: 100px\" *ngIf=\"show_farm_logo==true\" [src]=\"converted_image\" />\r\n        </div>\r\n        <img *ngIf=\"show_farm_logo!=true || (this.Farm_Logo_Path=='null' || this.Farm_Logo_Path==null)\"\r\n          style=\"height: 50px; background-color: transparent\" src=\"assets/imgs/logo.png\" />\r\n        <!-- </ion-avatar> -->\r\n        <!--      <p style=\"font-weight: 900;font-size: 17px;color: #757575;margin: 15px;\">Username</p>-->\r\n\r\n        <p style=\"\r\n            margin-left: 20px;\r\n            font-size: 15px;\r\n            color: #757575;\r\n            font-family: nexa_bold;\r\n            font-weight: 900;\r\n          \">\r\n          {{userFullName}}\r\n        </p>\r\n        <p style=\"\r\n            margin-left: 20px;\r\n            font-size: 15px;\r\n            color: #757575;\r\n            font-family: nexa_bold;\r\n            font-weight: 900;\r\n          \">\r\n          {{userOrganizationName}}\r\n          <span *ngIf=\"userLocalCode !== ''\">({{userLocalCode}})</span>\r\n        </p>\r\n\r\n        <div style=\"border: 1px solid #eeeeee\"></div>\r\n      </div>\r\n\r\n      <ion-list *ngIf=\"is_collector\">\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('view_profile')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img\r\n                style=\"width: 25px; height: 25px; margin-left: 20px\"\r\n                src=\"assets/imgs/ic_user_profile.png\" />\r\n              <p\r\n                style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.View_Profile}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <ion-item *ngIf=\"service_id.indexOf(75)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('FarmerTranche')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_user_profile.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.FarmerTranche}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <!-- *ngIf=\"service_id.indexOf(75)!=-1\" -->\r\n        <ion-item *ngIf=\"service_id.indexOf(128)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('CustomNotification')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/notification.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.CustomNotification}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"showToggleMenu(52,57,51,74,107,108)\" (click)=\"toggleEdpulist()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_edpu.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.EDPU}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"EdpuDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"EdpuToggle\">\r\n          <ion-list>\r\n            <ion-item *ngIf=\"service_id.indexOf(52)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('add_farmer')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.add_farmer}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(57)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Edpu_testing')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Edpu_testing}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(74)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Dispatch')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Dispatch}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(51)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('scan')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Package}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <!-- <ion-item\r\n              *ngIf=\"service_id.indexOf(57)!=-1\"\r\n             \r\n              lines=\"none\"\r\n              class=\"item-icon-left\"\r\n              \r\n              (click)=\"menuClicked('Calibration_OfflineRecords')\"\r\n            > -->\r\n            <ion-item *ngIf=\"service_id.indexOf(108)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Calibration_OfflineRecords')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Calibration_OfflineRecords}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <!-- <ion-item\r\n              *ngIf=\"service_id.indexOf(57)!=-1\"\r\n             \r\n              lines=\"none\"\r\n              class=\"item-icon-left\"\r\n              \r\n              (click)=\"menuClicked('Cleaning_OfflineRecords')\"\r\n            > -->\r\n            <ion-item *ngIf=\"service_id.indexOf(107)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Cleaning_OfflineRecords')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Cleaning_OfflineRecords}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <ion-item (click)=\"toggleSynopsislist()\" *ngIf=\"showToggleMenu(135)\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/synopsis_report.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Synopsis}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"SynopsisDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"!SynopsisToggle\">\r\n          <ion-list>\r\n            <ion-item *ngIf=\"service_id.indexOf(135)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('CollectionCentreSynopsis')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.CollectionCentre}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <!-- <ion-item\r\n             \r\n              lines=\"none\"\r\n              class=\"item-icon-left\"\r\n              \r\n              (click)=\"menuClicked('FarmerSynopsis')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img\r\n                    style=\"width: 25px; height: 25px; margin-left: 30px\"\r\n                    src=\"assets/imgs/ic_line.png\" />\r\n                  <p\r\n                    style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Farmer}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item> -->\r\n          </ion-list>\r\n        </div>\r\n        <!-- <ion-item\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('Manual_correction')\"\r\n        >\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img\r\n                style=\"width: 25px; height: 25px; margin-left: 20px\"\r\n                src=\"assets/imgs/manualcorrection.png\"\r\n              />\r\n              <p\r\n                style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \"\r\n              >\r\n                {{app.Manual_correction}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n\r\n        <ion-item (click)=\"toggleMasterSection()\" *ngIf=\"showToggleMenu(111,112,113,114,115,116)\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_edpu.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Masters}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"masterSectionInMenuDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <div [hidden]=\"!showMasterSectionInMenu\">\r\n          <ion-list>\r\n            <ion-item *ngIf=\"service_id.indexOf(112)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('ChillingCentreMaster')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.ChillingCentreMaster}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <!-- <ion-item\r\n          *ngIf=\"service_id.indexOf(99)!=-1\"\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('Farmer_Data_Upload')\"\r\n        > -->\r\n            <ion-item *ngIf=\"service_id.indexOf(111)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('CollectionCentreMaster')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.CollectionCentreMaster}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('FarmerMaster')\"\r\n              *ngIf=\"service_id.indexOf(113)!=-1\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.FarmerMaster}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n\r\n            <ion-item *ngIf=\"service_id.indexOf(115)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('User_Master')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.User_Master}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(114)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('IOT_Master')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.IOT_Master}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(116)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('priceProfileMaster')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Price_Profile_Master}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <!-- <ion-item (click)=\"toggleReportlist()\" lines=\"none\">\r\n        <ion-row><ion-col size=\"11\"><p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.Reports}}</p>\r\n        </ion-col><ion-col size=\"1\"><ion-icon name=\"chevron-forward-outline\" [style.transform]=\"ReportDegreeStyle\"></ion-icon></ion-col></ion-row>\r\n      </ion-item> -->\r\n\r\n        <!-- *ngIf=\"showToggleMenu(53,54,50,59,61,67)\" -->\r\n        <ion-item *ngIf=\"showToggleMenu(53,54,50,59,61,67,125,126,129)\" (click)=\"toggleReportlist()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Reports}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"ReportDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"ReportToggle\">\r\n          <ion-item *ngIf=\"service_id.indexOf(125)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Milk_Bill_Summary')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Testing_dashboard')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Milk_Bill_Summary}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(126)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Provisional_Milk_Bill_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Testing_dashboard')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Provisional_Milk_Bill_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(53)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Testing_dashboard')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Testing_dashboard')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Testing_Dashboard}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(54)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Cleaning_dashboard')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Cleaning_dashboard')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Cleaning_Dashboard}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(50)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('add_expected_volume')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('add_expected_volume')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.add_expected_volume}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(59)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Delivery_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('add_expected_volume')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Delivery_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(61)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Provenance_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Provenance_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(67)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Correction_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Correction_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(129)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('dispatchSummary')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Dispatch_Summary}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n        <ion-grid>\r\n          <ion-row class=\"center_item\">\r\n            <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n            <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item> -->\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(98)!=-1\" (click)=\"toggleOrderMgmtList()\" lines=\"none\">\r\n          <!-- <ion-item   (click)=\"toggleOrderMgmtList()\" lines=\"none\">  -->\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ordermgmt.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Order_Management}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"OrderDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"OrderToggle\">\r\n          <!-- orderchanges -->\r\n\r\n          <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Sell_Product')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Sell_Product}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Order_Summary')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Order_Summary}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(101)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('AI_Engine')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_chip.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.AI_Engine}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(88)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('Settings')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_setting.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Preferences}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item\r\n       \r\n        lines=\"none\"\r\n        class=\"item-icon-left\"\r\n        \r\n        (click)=\"menuClicked('SOS')\"\r\n      >\r\n        <ion-grid>\r\n          <ion-row class=\"center_item\">\r\n            <img\r\n              style=\"width: 25px; height: 25px; margin-left: 20px\"\r\n              src=\"assets/imgs/sos.png\"\r\n            />\r\n            <p\r\n              style=\"\r\n                margin-left: 20px;\r\n                font-size: 15px;\r\n                color: #757575;\r\n                font-family: nexa_bold;\r\n                font-weight: 900;\r\n              \"\r\n            >\r\n              SOS\r\n            </p>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item> -->\r\n\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"is_farmer\">\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <!-- <ion-item\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('view_profile')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img\r\n                style=\"width: 25px; height: 25px; margin-left: 20px\"\r\n                src=\"assets/imgs/ic_user_profile.png\" />\r\n              <p\r\n                style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.View_Profile}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n              <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(56)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('payments')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_payments.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Payments}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <!--      <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"reportSubMenu()\">-->\r\n        <!--        <ion-grid>-->\r\n        <!--          <ion-row class=\"center_item\">-->\r\n        <!--            <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_report.png\">-->\r\n        <!--            <p style=\"margin-left: 20px;font-size: 15px;color:#757575;\">Reports</p>-->\r\n        <!--          </ion-row>-->\r\n        <!--        </ion-grid>-->\r\n        <!--      </ion-item>-->\r\n\r\n        <!--      <div lines=\"none\" *ngIf=\"submenuVisible\" class=\"item-icon-left\" -->\r\n        <!--           style=\"padding-left: 15px;margin-top: -7px;\">-->\r\n        <!--        <ion-item lines=\"none\" style=\"margin-left: 23px;margin-top: -7px;\">-->\r\n        <!--          <ion-grid>-->\r\n        <!--            <ion-row (click)=\"menuClicked('assignment_in_process')\">-->\r\n        <!--              <ion-col class=\"center_item\">-->\r\n        <!--                <img style=\"width: 20px;height: 20px;\" src=\"assets/imgs/ic_calendar.png\">-->\r\n        <!--                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;\">Daily</p>-->\r\n        <!--              </ion-col>-->\r\n        <!--            </ion-row>-->\r\n        <!--          </ion-grid>-->\r\n        <!--        </ion-item>-->\r\n        <!--        <ion-item lines=\"none\" style=\"margin-left: 23px;margin-top: -7px;\">-->\r\n        <!--          <ion-grid>-->\r\n        <!--            <ion-row (click)=\"menuClicked('assignment_enquiries')\">-->\r\n        <!--              <ion-col class=\"center_item\">-->\r\n        <!--                <img style=\"width: 20px;height: 20px;\" src=\"assets/imgs/ic_calendar.png\">-->\r\n        <!--                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;\">Weekly</p>-->\r\n        <!--              </ion-col>-->\r\n        <!--            </ion-row>-->\r\n        <!--          </ion-grid>-->\r\n        <!--        </ion-item>-->\r\n        <!--        <ion-item lines=\"none\" style=\"margin-left: 23px;margin-top: -7px;\">-->\r\n        <!--          <ion-grid>-->\r\n        <!--            <ion-row (click)=\"menuClicked('assignment_delivered')\">-->\r\n        <!--              <ion-col class=\"center_item\">-->\r\n        <!--                <img style=\"width: 20px;height: 20px;\" src=\"assets/imgs/ic_calendar.png\">-->\r\n        <!--                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;\">Monthly</p>-->\r\n        <!--              </ion-col>-->\r\n        <!--            </ion-row>-->\r\n        <!--          </ion-grid>-->\r\n        <!--        </ion-item>-->\r\n        <!--        <ion-item lines=\"none\" style=\"margin-left: 23px;margin-top: -7px;\">-->\r\n        <!--          <ion-grid>-->\r\n        <!--            <ion-row (click)=\"menuClicked('assignment_expired')\">-->\r\n        <!--              <ion-col class=\"center_item\">-->\r\n        <!--                <img style=\"width: 20px;height: 20px;\" src=\"assets/imgs/ic_calendar.png\">-->\r\n        <!--                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;\">Yearly</p>-->\r\n        <!--              </ion-col>-->\r\n        <!--            </ion-row>-->\r\n        <!--          </ion-grid>-->\r\n        <!--        </ion-item>-->\r\n        <!--      </div>-->\r\n\r\n        <!--      <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('setting')\"-->\r\n        <!--                style=\"margin-top: -7px;\">-->\r\n        <!--        <ion-grid>-->\r\n        <!--          <ion-row class=\"center_item\">-->\r\n        <!--            <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_setting.png\">-->\r\n        <!--            <p style=\"margin-left: 20px;font-size: 15px;color:#757575;\">Settings</p>-->\r\n        <!--          </ion-row>-->\r\n        <!--        </ion-grid>-->\r\n        <!--      </ion-item>-->\r\n\r\n        <!--      <ion-item lines=\"none\" class=\"item-icon-left\" -->\r\n        <!--                style=\"margin-top: -7px;\">-->\r\n        <!--        <ion-grid>-->\r\n        <!--          <ion-row class=\"center_item\">-->\r\n        <!--            <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_logout.png\">-->\r\n        <!--            <p style=\"margin-left: 20px;font-size: 15px;color:#757575;\">Logout</p>-->\r\n        <!--          </ion-row>-->\r\n        <!--        </ion-grid>-->\r\n        <!--      </ion-item>-->\r\n      </ion-list>\r\n      <ion-list *ngIf=\"is_dairy_farm\">\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"service_id.indexOf(117)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('TransporterDataSync')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/transporter.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.TransporterDataSync}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"service_id.indexOf(128)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('CustomNotification')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/notification.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.CustomNotification}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item (click)=\"toggleSynopsislist()\" *ngIf=\"showToggleMenu(135)\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/synopsis_report.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Synopsis}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"SynopsisDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"!SynopsisToggle\">\r\n          <ion-list>\r\n            <!-- <ion-item\r\n             \r\n              lines=\"none\"\r\n              class=\"item-icon-left\"\r\n              \r\n              (click)=\"menuClicked('DairySynopsis')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img\r\n                    style=\"width: 25px; height: 25px; margin-left: 30px\"\r\n                    src=\"assets/imgs/ic_line.png\" />\r\n                  <p\r\n                    style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Dairy}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item\r\n             \r\n              lines=\"none\"\r\n              class=\"item-icon-left\"\r\n              \r\n              (click)=\"menuClicked('ChillingCentreSynopsis')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img\r\n                    style=\"width: 25px; height: 25px; margin-left: 30px\"\r\n                    src=\"assets/imgs/ic_line.png\" />\r\n                  <p\r\n                    style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.ChillingCentre}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item> -->\r\n            <ion-item *ngIf=\"service_id.indexOf(135)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('CollectionCentreSynopsis')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.CollectionCentre}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <!-- <ion-item\r\n             \r\n              lines=\"none\"\r\n              class=\"item-icon-left\"\r\n              \r\n              (click)=\"menuClicked('FarmerSynopsis')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img\r\n                    style=\"width: 25px; height: 25px; margin-left: 30px\"\r\n                    src=\"assets/imgs/ic_line.png\" />\r\n                  <p\r\n                    style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Farmer}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item> -->\r\n          </ion-list>\r\n        </div>\r\n        <ion-item (click)=\"toggleMasterSection()\" *ngIf=\"showToggleMenu(111,112,113,114,115,116)\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_edpu.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Masters}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"masterSectionInMenuDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <div [hidden]=\"!showMasterSectionInMenu\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" *ngIf=\"service_id.indexOf(112)!=-1\"\r\n              (click)=\"menuClicked('ChillingCentreMaster')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.ChillingCentreMaster}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <!-- <ion-item\r\n          *ngIf=\"service_id.indexOf(99)!=-1\"\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('Farmer_Data_Upload')\"\r\n        > -->\r\n            <ion-item *ngIf=\"service_id.indexOf(111)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('CollectionCentreMaster')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.CollectionCentreMaster}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(113)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('FarmerMaster')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.FarmerMaster}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(115)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('User_Master')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.User_Master}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(114)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('IOT_Master')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.IOT_Master}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(116)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('priceProfileMaster')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Price_Profile_Master}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(118)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('Manual_correction')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Manual_correction}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <!-- <ion-item\r\n        *ngIf=\"showToggleMenu(67,109,110)\"\r\n        (click)=\"toggleReportlist()\"\r\n        lines=\"none\"\r\n       \r\n      > -->\r\n\r\n        <ion-item *ngIf=\"showToggleMenu(67,109,110,129,131,134,132,94)\" (click)=\"toggleReportlist()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Reports}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"ReportDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"ReportToggle\">\r\n          <ion-item *ngIf=\"service_id.indexOf(94)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Dairy_Summary_Report')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Dairy_Summary_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(134)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('rmrd_collection_transaction_report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.rmrd_collection_transaction_report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(67)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Correction_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Correction_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(109)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Calibration_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Calibration_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(110)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Cleaning_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Cleaning_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(129)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('dispatchSummary')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Dispatch_Summary}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(131)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('rmrdWeighingLabDataReportPage')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.RmrdWeighingLabReport}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(132)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('rmrdCollectionTimingsReportPage')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.RmrdCollectionTimingsReport}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(55)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('Testing_dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Testing_Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(101)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('AI_Engine')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_chip.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.AI_Engine}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n              <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('view_profile')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_user_profile.png\">\r\n              <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">View Profile</p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('payments')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_payments.png\">\r\n              <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">Payments</p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('cc_list')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_payments.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Collection_Centers}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('add_farmer')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_add_farmer.png\">\r\n              <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">Add Farmer</p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"is_chilling_centre\">\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" *ngIf=\"service_id.indexOf(133)!=-1\"\r\n          (click)=\"menuClicked('pinGenerate')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-icon style=\"width: 25px; height: 25px; margin-left: 20px\" ios=\"ios-key\" md=\"md-key\"></ion-icon>\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Pin_Generate}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"showToggleMenu(69,70)\" (click)=\"toggleTransporterlist()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/transporter.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Transporter}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"TransporterDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"TransporterToggle\">\r\n          <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('TransporterDataSync')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_line.png\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.TransporterDataSync}}</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>       -->\r\n          <ion-item lines=\"none\" *ngIf=\"service_id.indexOf(69)!=-1\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('DeviationReport')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.DeviationReport}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" *ngIf=\"service_id.indexOf(70)!=-1\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('TransporterTracking')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.TransporterTracking}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </div>\r\n        <ion-item (click)=\"toggleSynopsislist()\" *ngIf=\"showToggleMenu(135)\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/synopsis_report.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Synopsis}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"SynopsisDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"!SynopsisToggle\">\r\n          <ion-list>\r\n            <ion-item *ngIf=\"service_id.indexOf(135)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('CollectionCentreSynopsis')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.CollectionCentre}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <!-- <ion-item\r\n             \r\n              lines=\"none\"\r\n              class=\"item-icon-left\"\r\n              \r\n              (click)=\"menuClicked('FarmerSynopsis')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img\r\n                    style=\"width: 25px; height: 25px; margin-left: 30px\"\r\n                    src=\"assets/imgs/ic_line.png\" />\r\n                  <p\r\n                    style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Farmer}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item> -->\r\n          </ion-list>\r\n        </div>\r\n        <ion-item *ngIf=\"showToggleMenu(111,112,113,114,115,116)\" (click)=\"toggleMasterSection()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_edpu.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Masters}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"masterSectionInMenuDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <div [hidden]=\"!showMasterSectionInMenu\">\r\n          <ion-list>\r\n            <ion-item *ngIf=\"service_id.indexOf(112)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('ChillingCentreMaster')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.ChillingCentreMaster}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <!-- <ion-item\r\n          *ngIf=\"service_id.indexOf(99)!=-1\"\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('Farmer_Data_Upload')\"\r\n        > -->\r\n            <ion-item *ngIf=\"service_id.indexOf(111)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('CollectionCentreMaster')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.CollectionCentreMaster}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(113)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('FarmerMaster')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.FarmerMaster}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(115)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('User_Master')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.User_Master}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(114)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('IOT_Master')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.IOT_Master}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(116)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('priceProfileMaster')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Price_Profile_Master}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(128)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('CustomNotification')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/notification.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.CustomNotification}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"service_id.indexOf(118)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('Manual_correction')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Manual_correction}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"showToggleMenu(57,85,99,89,107,108)\" (click)=\"toggleEdpulist()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_edpu.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.EDPU}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"EdpuDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"EdpuToggle\">\r\n          <ion-list>\r\n            <ion-item *ngIf=\"service_id.indexOf(57)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Edpu_testing')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Edpu_testing}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(99)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Farmer_Data_Upload')\">\r\n              <!-- <ion-item\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('Farmer_Data_Upload')\"\r\n        > -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Farmer_Data_Upload}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(85)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Adulteration_correction_Baani')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Adulteration_correction}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(89)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Baani_data_push')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Adulteration_correction_Baani')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Data_Push_Register}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"service_id.indexOf(108)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Calibration_OfflineRecords')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p class=\"ion-text-wrap\" style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Calibration_OfflineRecords}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <!-- <ion-item\r\n              *ngIf=\"service_id.indexOf(57)!=-1\"\r\n             \r\n              lines=\"none\"\r\n              class=\"item-icon-left\"\r\n              \r\n              (click)=\"menuClicked('Cleaning_OfflineRecords')\"\r\n            > -->\r\n            <ion-item *ngIf=\"service_id.indexOf(107)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n              (click)=\"menuClicked('Cleaning_OfflineRecords')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Cleaning_OfflineRecords}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <!-- *ngIf=\"showToggleMenu(53,54,67,109,110)\" -->\r\n        <ion-item *ngIf=\"showToggleMenu(53,54,67,109,110,129,131)\" (click)=\"toggleReportlist()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Reports}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"ReportDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"ReportToggle\">\r\n          <ion-item *ngIf=\"service_id.indexOf(53)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Testing_dashboard')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Testing_Dashboard}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(54)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Cleaning_dashboard')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Cleaning_Dashboard}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(67)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Correction_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Correction_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(109)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Calibration_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Calibration_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(110)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('Cleaning_Report')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Cleaning_Report}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(129)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('dispatchSummary')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.Dispatch_Summary}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"service_id.indexOf(131)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n            (click)=\"menuClicked('rmrdWeighingLabDataReportPage')\">\r\n            <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Provenance_Report')\"> -->\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px; height: 25px; margin-left: 40px\" src=\"assets/imgs/ic_line.png\" />\r\n                <p style=\"\r\n                    margin-left: 20px;\r\n                    font-size: 15px;\r\n                    color: #757575;\r\n                    font-family: nexa_bold;\r\n                    font-weight: 900;\r\n                  \">\r\n                  {{app.RmrdWeighingLabReport}}\r\n                </p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(86)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('User_Management')\">\r\n          <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('User_Management')\"> -->\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/user.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.User_Management}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"service_id.indexOf(101)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('AI_Engine')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_chip.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.AI_Engine}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n              <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('view_profile')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_user_profile.png\">\r\n              <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">View Profile</p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('payments')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_payments.png\">\r\n              <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">Payments</p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('cc_list')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_payments.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Collection_Centers}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"service_id.indexOf(88)!=-1\" lines=\"none\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('Settings')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_setting.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Preferences}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list *ngIf=\"is_delivery_boy\">\r\n        <!--  <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('dashboard')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_dashboard.png\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">Dashboard</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n           <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('view_profile')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_user_profile.png\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">View Profile</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n           <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('payments')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_payments.png\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">Payments</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item> \r\n          <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('cc_list')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_payments.png\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">Collection Centers</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n    \r\n          <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('delivery-boy-scan-bottle')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/blackberry.png\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">Scan QR</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item> \r\n    \r\n          <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('out-for-delivery')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/scan.png\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">Out For Delivery</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>-->\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item> -->\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"is_customer\">\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <!-- <ion-item\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('view_profile')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img\r\n                style=\"width: 25px; height: 25px; margin-left: 20px\"\r\n                src=\"assets/imgs/ic_user_profile.png\" />\r\n              <p\r\n                style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.View_Profile}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item> -->\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"is_delivery_van\">\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <!-- <ion-item\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('view_profile')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img\r\n                style=\"width: 25px; height: 25px; margin-left: 20px\"\r\n                src=\"assets/imgs/ic_user_profile.png\" />\r\n              <p\r\n                style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.View_Profile}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item> -->\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"is_oright\">\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <!-- <ion-item\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('view_profile')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img\r\n                style=\"width: 25px; height: 25px; margin-left: 20px\"\r\n                src=\"assets/imgs/ic_user_profile.png\" />\r\n              <p\r\n                style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.View_Profile}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item> -->\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"is_deliveryVan_outbound\">\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <!-- <ion-item\r\n         \r\n          lines=\"none\"\r\n          class=\"item-icon-left\"\r\n          \r\n          (click)=\"menuClicked('view_profile')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img\r\n                style=\"width: 25px; height: 25px; margin-left: 20px\"\r\n                src=\"assets/imgs/ic_user_profile.png\" />\r\n              <p\r\n                style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.View_Profile}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item> -->\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('OutBound_Report')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_report.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.OutBound_Report}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item> -->\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"is_inbound_transporter\">\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('dashboard')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_dashboard.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Dashboard}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" *ngIf=\"service_id.indexOf(72)!=-1\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('TransporterTracking')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/transporter.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.TransporterSummary}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" *ngIf=\"service_id.indexOf(73)!=-1\" class=\"item-icon-left\"\r\n          (click)=\"menuClicked('OfflineEdpuDataSync')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/transporter.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.OfflineEdpuDataSync}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('view_profile')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/ic_user_profile.png\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.View_Profile}}</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item> -->\r\n        <!-- <ion-item lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('switch_language')\">\r\n            <ion-grid>\r\n              <ion-row class=\"center_item\">\r\n                <img style=\"width: 25px;height: 25px;margin-left: 20px;\" src=\"assets/imgs/translation.svg\">\r\n                <p style=\"margin-left: 20px;font-size: 15px;color:#757575;font-family: nexa_bold;font-weight: 900;\">{{app.switch_language}}</p>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item> -->\r\n        <ion-item (click)=\"toggleLanguageList()\" lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <ion-col size=\"11\">\r\n                <ion-row>\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/translation.svg\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.switch_language}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"1\">\r\n                <ion-icon style=\"float: right; margin-right: 10px\" name=\"chevron-forward-outline\"\r\n                  [style.transform]=\"LangDegreeStyle\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <div [hidden]=\"LangToggle\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Hindi_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Hindi}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('English_language')\">\r\n              <!-- <ion-item  lines=\"none\" class=\"item-icon-left\"  (click)=\"menuClicked('Edpu_testing')\"> -->\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.English}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Tamil_language')\">\r\n              <ion-grid>\r\n                <ion-row class=\"center_item\">\r\n                  <img style=\"width: 25px; height: 25px; margin-left: 30px\" src=\"assets/imgs/ic_line.png\" />\r\n                  <p style=\"\r\n                      margin-left: 20px;\r\n                      font-size: 15px;\r\n                      color: #757575;\r\n                      font-family: nexa_bold;\r\n                      font-weight: 900;\r\n                    \">\r\n                    {{app.Tamil}}\r\n                  </p>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('change_password')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_change_password.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.change_password}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('Contact')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/mail.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.Contact_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"goToReportEngine()\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                Report Engine\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\" (click)=\"menuClicked('About')\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/about.jpg\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.About_us}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-icon-left\">\r\n          <ion-grid>\r\n            <ion-row class=\"center_item\">\r\n              <img style=\"width: 25px; height: 25px; margin-left: 20px\" src=\"assets/imgs/ic_logout.png\" />\r\n              <p style=\"\r\n                  margin-left: 20px;\r\n                  font-size: 15px;\r\n                  color: #757575;\r\n                  font-family: nexa_bold;\r\n                  font-weight: 900;\r\n                \">\r\n                {{app.logout}}\r\n              </p>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n    <ion-footer>\r\n      <!-- <div style=\"display: flex;justify-content: space-around;\" *ngIf=\"this.Farm_Logo_Path!='null' && this.Farm_Logo_Path!=null\" >\r\n    \r\n          <img style=\"max-height: 50px;\" *ngIf=\"show_farm_logo==true\" [src]=\"converted_image\"/>\r\n    \r\n      </div> -->\r\n      <div style=\"display: flex; justify-content: space-around\"\r\n        *ngIf=\"this.Farm_Logo_Path!='null' && this.Farm_Logo_Path!=null\">\r\n        <img style=\"max-height: 50px\" *ngIf=\"show_farm_logo==true\" src=\"assets/imgs/logo.png\" />\r\n      </div>\r\n      <p style=\"font-size: 12px; color: #757575; margin-left: 15px\">\r\n        &#169; {{year}} Qboid Iotech.Pvt.Ltd. All rights reserved.\r\n      </p>\r\n      <p style=\"font-size: 10px; color: #757575; margin-left: 15px\">\r\n        <i>V {{CurrentVersion}}</i>\r\n      </p>\r\n    </ion-footer>\r\n  </ion-menu>\r\n  <!-- <ion-nav [root]=\"rootPage\" #content></ion-nav> -->\r\n  <ion-router-outlet id=\"content\"></ion-router-outlet>\r\n</ion-app>";

/***/ }),

/***/ 80838:
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/pop-up-notification/pop-up-notification/pop-up-notification.component.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--\r\n  Generated template for the NotificationPopupPage page.\r\n\r\n  See http://ionicframework.com/docs/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n<div class=\"notification-card\" (click)=\"dismiss()\" style=\"margin-top: env(safe-area-inset-top)\">\r\n  <ion-card class=\"ion-no-padding\">\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 5px\">\r\n        <ion-col size=\"1\">\r\n          <img src=\"../../../assets/imgs/icon.png\" style=\"height: 16px; width: 16px; border-radius: 4px\" />\r\n        </ion-col>\r\n        <ion-col size=\"9\" style=\"color: rgba(255, 255, 255, 0.911); text-align: left\">\r\n          {{appname}}\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"\r\n            color: rgba(216, 216, 216, 0.74);\r\n            text-align: right;\r\n            font-weight: 600;\r\n          \">\r\n          now\r\n        </ion-col>\r\n      </ion-row>\r\n      <p style=\"font-weight: bolder; color: white; margin-left: 10px\">\r\n        {{title}}\r\n      </p>\r\n      <p style=\"\r\n          color: white;\r\n          font-weight: 400;\r\n          margin-bottom: 10px;\r\n          margin-left: 10px;\r\n        \">\r\n        {{text}}\r\n      </p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>";

/***/ }),

/***/ 78315:
/*!********************************************************************************!*\
  !*** ./src/app/components/quickinsight/quickinsight.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<div class=\"custum-reports-web\" style=\"width: 100%; height: 100%\">\n  <ion-header>\n    <ion-toolbar color=\"primary\" hideBackButton click=\"hideMoreOptions()\">\n      <div class=\"navname\">\n        <div class=\"backbuttonarea\" (click)=\"backPage()\">\n          <img src=\"assets/imgs/ic_back.png\" style=\"height: 25px\" />\n        </div>\n\n        <span><p>Report Engine</p></span>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n<!-- \n    <div id=\"dashboardContainer\"></div> -->\n\n    <div id=\"dashboardContainer\">\n      <iframe [src]=\"reportUrl\" frameborder=\"0\" width=\"100%\" height=\"100%\"></iframe>\n    </div>\n    \n\n\n     \n  </ion-content>\n</div>\n\n\n\n\n\n";

/***/ }),

/***/ 22332:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/report-column-selector/report-column-selector.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"medium\" (click)=\"cancel()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Choose Columns And Sequence</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirm</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-list lines=\"none\" (ionChange)=\"change($event)\">\n\n    <ion-item *ngFor=\"let singleHeader of listForHeaderSelection\">\n      <ion-checkbox slot=\"start\" value=\"{{singleHeader.AID}}\" id=\"{{singleHeader.selectionSeq}}\"></ion-checkbox>\n      <ion-label>{{singleHeader.columnName}}\n        <span *ngIf=\"singleHeader.selectionSeq!=-1\">{{singleHeader.selectionSeq}}</span>\n      </ion-label>\n    </ion-item>\n  \n  </ion-list>\n</ion-content>";

/***/ }),

/***/ 40895:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/report-dashboard-power-bi/report-dashboard-power-bi.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n\r\n<div class=\"custum-reports-web\" style=\"width: 100%; height: 100%\">\r\n    <ion-header>\r\n      <ion-toolbar color=\"primary\" hideBackButton click=\"hideMoreOptions()\">\r\n        <div class=\"navname\">\r\n          <div class=\"backbuttonarea\" (click)=\"backPage()\">\r\n            <img src=\"assets/imgs/ic_back.png\" style=\"height: 25px\" />\r\n          </div>\r\n  \r\n          <span><p>Report Engine</p></span>\r\n        </div>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n  \r\n \r\n        <!-- <powerbi-report [embedConfig]=\"reportConfig\"  [cssClassName]=\"reportClass\" [phasedEmbedding]=\"phasedEmbeddingFlag\" [eventHandlers]=\"eventHandlersMap\">\r\n\r\n        </powerbi-report>  -->\r\n\r\n        <!-- <div id=\"embedContainer\"></div> -->\r\n\r\n        <iframe title=\"Collection Report\" width=\"1140\" height=\"541.25\" src=\"https://app.powerbi.com/reportEmbed?reportId=0c5b7987-f17b-46a2-ad51-c27dd00a43eb&autoAuth=true&embeddedDemo=true\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>\r\n  \r\n    </ion-content>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n";

/***/ }),

/***/ 83741:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/multiple-select-modal/multiple-select-modal.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\r\n  <ion-card class=\"multipleSelectmodal centered-element ion-no-padding\" mx-auto my-auto>\r\n\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" [placeholder]=\"searchPlaceholder\" [(ngModel)]=\"searchedText\"\r\n            (ionChange)=\"filterSearch(searchedText)\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label class=\"ion-text-wrap\">Select All</ion-label>\r\n          <ion-checkbox [(ngModel)]=\"selectAllChecked\" (ionChange)=\"selectAll(selectAllChecked)\"></ion-checkbox>\r\n        </ion-item>\r\n        <ion-item *ngFor=\"let item of shownArrayList;let i=index;\">\r\n          <ion-label class=\"ion-text-wrap\">{{item.label}}</ion-label>\r\n          <ion-checkbox slot=\"end\" [(ngModel)]=\"item.checked\"></ion-checkbox>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-item style=\"text-align:right;\">\r\n        <span style=\"color: #74b743;\" (click)=\"dismiss(orignalSelected,'cancel')\">CANCEL</span> &nbsp;&nbsp;\r\n        <span style=\"color: #74b743;\" (click)=\"dismiss(selectedItem,'ok')\">Ok</span>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>";

/***/ }),

/***/ 40310:
/*!************************************************************************************!*\
  !*** ./src/app/pages/single-select-modal/single-select-modal.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\r\n  <ion-card class=\"singleSelectmodal centered-element ion-no-padding\" mx-auto my-auto>\r\n\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-radio-group [(ngModel)]=\"selectedItem\">\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" [placeholder]=\"searchPlaceholder\" [(ngModel)]=\"searchedText\"\r\n            (ionChange)=\"filterSearch(searchedText)\"></ion-input>\r\n        </ion-item>\r\n        <ion-item *ngFor=\"let item of shownArrayList;let i=index;\">\r\n          <ion-label class=\"ion-text-wrap\">{{item.label}}</ion-label>\r\n          <ion-radio [value]=\"item.value\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n      <ion-item style=\"text-align:right;\">\r\n        <span style=\"color: #74b743;\" (click)=\"dismiss(orignalSelected)\">CANCEL</span> &nbsp;&nbsp;\r\n        <span style=\"color: #74b743;\" (click)=\"dismiss(selectedItem)\">Ok</span>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>";

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map