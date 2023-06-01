"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 98433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/BaseComp */ 88075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_sql_sql_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sql/sql.service */ 98420);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/events/events.service */ 11716);
/* harmony import */ var src_app_services_home_message_home_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/home-message/home-message.service */ 39219);
/* harmony import */ var src_app_services_token_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token/token.service */ 38264);
/* harmony import */ var src_app_services_encryption_encryption_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/encryption/encryption.service */ 20442);
/* harmony import */ var src_app_services_accessauthorization_accessauthorization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/accessauthorization/accessauthorization.service */ 67085);















let LoginPage = class LoginPage extends _utils_BaseComp__WEBPACK_IMPORTED_MODULE_3__.BaseComp {
  constructor(navCtrl, loadingCtrl, menu, toastCtrl, http, router, dbProvider, events, platform, TokenService, Encrypt, homeMessage, Auth) {
    super();
    this.navCtrl = navCtrl;
    this.loadingCtrl = loadingCtrl;
    this.menu = menu;
    this.toastCtrl = toastCtrl;
    this.http = http;
    this.router = router;
    this.dbProvider = dbProvider;
    this.events = events;
    this.platform = platform;
    this.TokenService = TokenService;
    this.Encrypt = Encrypt;
    this.homeMessage = homeMessage;
    this.Auth = Auth;
    this.showPassword = false;
    this.login = {
      user_name: 'User Name',
      password: 'Password',
      forgot_password: 'Forgot Password',
      login: 'login',
      no_account_text: "Don't have an account?",
      signup_text: 'Sign up',
      Customer_code: 'Customer Code'
    }; //Dbcode:any ;

    this.Dbcode = '';
    this.english = 'Eng';
    this.Hindi = 'हिंदी';
    this.Tamil = 'தமிழ்';
    this.email = '';
    this.password = '';
    this.password_type = 'password';
    this.showPass = false;
    this.OrightPreferences = [];
    this.DairyFarmConfiguration = [];
    this.dairyLogoPathForCoobranding = [];
    this.getData();
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {// do on back button click
      });
    });
  }

  ngOnInit() {
    this.menu.get().then(menu => {
      menu.swipeGesture = false;
    });
  }

  getData() {
    var selectedLang = this.getItem(this.LANG_SELECTED);
    let url = 'assets/lang/' + selectedLang + '.json'; // let url = "assets/lang/en.json" ;
    // if (this.getItem(this.LANG_SELECTED) == this.HINDI_LANG) {
    //   url = "assets/lang/hn.json" ;
    // }

    this.http.get(url).subscribe(result => {
      try {
        let parsedJSON = JSON.parse(JSON.stringify(result));
        this.login = parsedJSON.login;
      } catch (err) {
        this.presentToast(this.toastCtrl, 'Invalid Credentials');
        console.error(err);
      }
    }, error => {});
  }

  goTotest() {
    this.router.navigate(['/test']);
  }

  getData1(lan) {
    let url = '';

    if (lan == 'hn') {
      this.saveItem(this.LANG_SELECTED, 'hn');
      this.homeMessage.sendMessage('Hindi_language');
      url = 'assets/lang/hn.json';
    } else if (lan == 'en') {
      this.saveItem(this.LANG_SELECTED, 'en');
      this.homeMessage.sendMessage('English_language');
      url = 'assets/lang/en.json';
    } else if (lan == 'tm') {
      this.saveItem(this.LANG_SELECTED, 'tm');
      this.homeMessage.sendMessage('Tamil_language');
      url = 'assets/lang/tm.json';
    }

    this.http.get(url).subscribe(result => {
      try {
        let parsedJSON = JSON.parse(JSON.stringify(result));
        this.login = parsedJSON.login;
      } catch (err) {
        this.presentToast(this.toastCtrl, 'Invalid Credentials');
        console.error(err);
      }
    }, error => {});
  }

  initPage() {
    this.saveItem(this.DEFAULT_LOCALE, this.ENGLISH_LOCALE);

    if (this.getItem(this.DEFAULT_LOCALE) == this.HINDI_LOCALE) {} else if (this.getItem(this.DEFAULT_LOCALE) == this.TAMIL_LOCALE) {}
  }

  openHomePage() {
    this.navCtrl.navigateRoot('/home').then(res => {// this.navCtrl.pop() ;
      // this.navCtrl.push(HomePage) ;
    });
    this.saveItem('rootPage', '/home');
  }

  changeCustomerCode(dbcode) {
    this.saveItem('Db_code', 'null');
    this.saveItem('Db_code', dbcode.trim());
  }

  callLoginAPI(dbcode) {
    var _this = this;

    return (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.saveItem('Db_code', 'null');

      _this.saveItem('Db_code', dbcode.trim()); // this.getCountryList() ;


      if (_this.email != '' || _this.password != '') {
        let loading = yield _this.loadingComp(_this.loadingCtrl);
        loading.present();
        let url = _this.BASE_URL + 'api/servicesAPI/validateuser_mob?UserName=' + _this.email + '&pword=' + _this.password + '&Key=' + _this.key + '&con=' + _this.Dbcode;

        let url_enc = _this.BASE_URL + 'api/servicesAPI/validateuser_mob?UserName=' + _this.email + '&pword=' + _this.Encrypt.EncryptTextWithPublicKey(_this.password, _this.AesSecretIVKey) + '&Key=' + _this.key + '&con=' + _this.Dbcode; // var url = this.LOGIN_URL+"?UserName="+this.email+"&Pword="+this.password ;


        let postData = new FormData();

        _this.http.post(url, postData).subscribe( /*#__PURE__*/function () {
          var _ref = (0,D_Oright_App_Ionic_6_Build_30_March_Oright_v4_MiniBuild_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
            console.log(result, "result");

            try {
              var parsedJSON = JSON.parse(JSON.stringify(result));

              if (parsedJSON[0].UserId != 0) {
                _this.saveItem(_this.LOGIN_USER_DATA, JSON.stringify(result));

                _this.saveItem(_this.IS_LOGIN, '1');

                _this.saveItem('Db_code', _this.Dbcode.trim()); //store the customercode/connectionstring to local storage
                // this.saveItem('Db_code', "ConnectionString") ;
                //Saving Tokens Here


                _this.TokenService.setToken(result[0].token);

                _this.TokenService.setRefreshAccessToken(result[0].refreshToken);

                _this.TokenService.setAuthToken(result[0].refreshAccessToken);

                _this.sendDeviceToken(parsedJSON[0].UserId);

                yield _this.callOrightPrefernceApi(parsedJSON[0]);
                yield _this.callDairyFarmConfigurationApi(parsedJSON[0].UserId);
                yield _this.callDairyLogoPathForCoobrandingApi(parsedJSON[0].Farm_ID);
                loading.dismiss();
                yield _this.GetServices(parsedJSON, parsedJSON[0].UserId);

                _this.dbProvider.createAndInsertUserTable();

                _this.getUserNotifications();

                _this.Auth.startPasswordCheckService(true);

                _this.events.publish('login_done', ''); // this is the main event which call the login

              } else {
                loading.dismiss();

                _this.presentToast(_this.toastCtrl, 'Invalid login credentials');
              }
            } catch (err) {
              loading.dismiss();

              _this.presentToast(_this.toastCtrl, 'Invalid Credentials');
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), error => {
          loading.dismiss();
          console.error('API Error', error);

          _this.somethingWentWrongError(_this.toastCtrl);
        });
      } else {
        _this.presentToast(_this.toastCtrl, 'Please enter fields properly');

        _this.saveItem('Db_code', '');
      }
    })();
  }

  getUserNotifications() {
    let lastrecord_id = 0;
    this.dbProvider.getAllNotificationRecords(this.getFarmerUserID()).then(res => {
      // if (res.rows.length > 0) {//##if farmer not exist
      //   lastrecord_id = res.rows.item(res.rows.length - 1).ID ;
      // }
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

  callNotificationsApi(lastrecord_id) {
    let url = this.BASE_URL + 'api/servicesAPI/getAllUserNotifications?userid=' + this.getFarmerUserID() + '&lastrecod_id=' + lastrecord_id + '&Key=' + this.key + '&con=' + this.Dbcode;
    this.http.get(url).subscribe(result => {
      //loading.dismiss() ;
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

        try {// this.getFailedCC() ;
        } catch (e) {
          console.error(e); //    this.presentToast(this.toastCtrl, "No Data Found") ;
        }
      } catch (e) {
        console.error(e);
      }
    }, error => {
      //loading.dismiss() ;
      console.error('API Error', error); //    this.somethingWentWrongError(this.toastCtrl) ;
    });
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']); // this.navCtrl.push(ForgotPasswordPage);
  }

  showHide() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.password_type = 'text';
    } else {
      this.password_type = 'password';
    }
  }

  signup() {
    //this.navCtrl.push(SignupPage) ;
    this.router.navigate(['/customer-registration']); // this.navCtrl.push(CustomerRegistrationPage);
  }

  getCountryList() {
    var url = 'https://digiversal.info/api/v1/settings/allCountries';
    let postdata = new FormData();
    postdata.append('device_token', '');
    postdata.append('device_name', 'Mi Note 7 Pro');
    postdata.append('device_os', 'android');
    postdata.append('language', 'en');
    postdata.append('location_lant', '234.3343434');
    postdata.append('location_long', '234.3343434');
    postdata.append('login_type', '1');
    this.http.post(url, postdata).subscribe(result => {
      try {} catch (err) {
        console.error(err);
      }
    }, error => {
      console.error('API Error', error);
      this.somethingWentWrongError(this.toastCtrl);
    });
  }

  sendDeviceToken(uid) {
    try {
      var deviceToken = this.getItem('device_token'); // const pushObject: PushObject = this.push.init(this.FirebasePushNotificationOptions) ;
      // pushObject.on('registration').subscribe((data: any) => {
      //   deviceToken=encodeURIComponent(data.registrationId) ;
      //   //TODO - send device token to server
      // }) ;

      let version = this.getItem('AppVersion');
      var FirebaseDeviceModel = [];
      FirebaseDeviceModel.push({
        DeviceToken: deviceToken,
        User_ID: uid,
        Version: version
      });
      var url = this.BASE_URL + 'api/FirebasePushNotificationApi/InsertDeviceToken?FirebaseDeviceModel=' + JSON.stringify(FirebaseDeviceModel) + '&Key=' + this.key + '&con=' + this.Dbcode;
      let postData = new FormData();
      this.http.post(url, postData).subscribe(result => {}, error => {
        console.error('Device token api error ', error);
      });
    } catch (e) {
      console.error('error function sendDeviceToken LoginPage:-', e);
    }
  }

  GetServices(parsedJSON, uid) {
    //var service_ids=[] ;
    return new Promise((resolve, reject) => {
      try {
        this.saveItem('Services', '[]');
        let array = [{
          UesrID: uid
        }];
        var url = this.BASE_URL + 'api/dashboardAPI/GetServices?UID=' + JSON.stringify(array) + '&Key=' + this.key + '&con=' + this.Dbcode; //let postData = new FormData() ;

        this.http.get(url).subscribe(result => {
          try {
            //var parsedJSON = JSON.parse(JSON.stringify(result)) ;
            this.saveItem('Services', JSON.stringify(result)); //save the service ids to windows local storage
            //-------------Redirect the user to respective dashboard if login successful-------------------

            if (parsedJSON[0].userType == '1') {
              //farmer
              this.saveItem(this.IS_LOGIN, '1'); //this.navCtrl.setRoot(FarmerDashboardPage) ;

              this.saveItem('menuOption', '');
              this.navCtrl.navigateRoot('/farmer-dashboard');
              this.saveItem('rootPage', '/farmer-dashboard');
            } else if (parsedJSON[0].userType == '2') {
              //dairy farm
              this.saveItem(this.IS_LOGIN, '1');

              if (parsedJSON[0].Farm_ID.toString() == '19') {
                this.saveItem('menuOption', '');
                this.navCtrl.navigateRoot('/dairy-farm-dbrd-no-amount-no-milktype');
                this.saveItem('rootPage', '/dairy-farm-dbrd-no-amount-no-milktype');
              } else {
                this.saveItem('menuOption', '');
                this.navCtrl.navigateRoot('/dairy-farm-dashboard');
                this.saveItem('rootPage', '/dairy-farm-dashboard');
              }
            } else if (parsedJSON[0].userType == '3') {
              //collection center
              this.saveItem(this.IS_LOGIN, '1');

              if (parsedJSON[0].Farm_ID.toString() == '19') {
                //  check if user is of whyte farm
                this.saveItem('menuOption', '');
                this.navCtrl.navigateRoot('/collector-dbrd-no-amount-no-milktype');
                this.saveItem('rootPage', '/collector-dbrd-no-amount-no-milktype');
              } else if (parsedJSON[0].Farm_ID.toString() == this.GFO_FARMID) {
                //-------------changes 27.09.21-----------------------
                this.saveItem('menuOption', '');
                this.saveItem('rootPage', '/collector2');
                this.navCtrl.navigateRoot('/collector2');
              } else {
                this.saveItem('menuOption', '');
                this.saveItem('rootPage', '/collector');
                this.navCtrl.navigateRoot('/collector');
              }
            } else if (parsedJSON[0].userType == '4') {
              //collection center
              this.saveItem(this.IS_LOGIN, '1');
              this.saveItem('menuOption', ''); //this.navCtrl.setRoot(CustomerDashboardPage) ;

              this.navCtrl.navigateRoot('/customer-qr-scan');
              this.saveItem('rootPage', '/customer-qr-scan');
            } else if (parsedJSON[0].userType == '5') {
              //collection center
              this.saveItem(this.IS_LOGIN, '1');
              this.saveItem('menuOption', '');
              this.navCtrl.navigateRoot('/delivery-boy-scan-bottle');
              this.saveItem('rootPage', '/delivery-boy-scan-bottle');
            } else if (parsedJSON[0].userType == '6') {
              //collection center
              this.saveItem(this.IS_LOGIN, '1');
              this.saveItem('menuOption', '');
              this.saveItem('rootPage', '/delivery-van');
              this.navCtrl.navigateRoot('/delivery-van');
            } else if (parsedJSON[0].userType == '7') {
              //collection center
              this.saveItem(this.IS_LOGIN, '1');
              this.saveItem('menuOption', '');
              this.navCtrl.navigateRoot('/chilling-centre-dashboard');
              this.saveItem('rootPage', '/chilling-centre-dashboard');
            } else if (parsedJSON[0].userType == '8') {
              //collection center
              this.saveItem(this.IS_LOGIN, '1');
              this.saveItem('menuOption', '');
              this.navCtrl.navigateRoot('/oright-dashboard');
              this.saveItem('rootPage', '/oright-dashboard');
            } else if (parsedJSON[0].userType == '9') {
              //collection center
              this.saveItem(this.IS_LOGIN, '1');
              this.saveItem('menuOption', '');
              this.navCtrl.navigateRoot('/delivery-van-outbound-dashboard');
              this.saveItem('rootPage', '/delivery-van-outbound-dashboard');
            } else if (parsedJSON[0].userType == '10') {
              //collection center
              this.saveItem(this.IS_LOGIN, '1');
              this.saveItem('menuOption', '');
              this.navCtrl.navigateRoot('/inbound-transporter-dashboard');
              this.saveItem('rootPage', '/inbound-transporter-dashboard');
            }
          } catch (err) {
            //this.presentToast(this.toastCtrl, "Invalid Credentials") ;
            console.error(err);
          }
        }, error => {
          console.error('API Error', error); //this.somethingWentWrongError(this.toastCtrl) ;
        });
        resolve();
      } catch (e) {
        console.error('error function GetServices LoginPage:-', e);
      }
    });
  }

  callOrightPrefernceApi(json) {
    // let loading = this.loadingComp(this.loadingCtrl) ;
    //loading.present() ;
    return new Promise((resolve, reject) => {
      try {
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
        let url = this.BASE_URL + 'api/servicesAPI/getOrightPreferences?getOrightPreferences=' + JSON.stringify(details) + '&Key=' + this.key + '&con=' + this.Dbcode;
        this.http.get(url).subscribe(result => {
          //loading.dismiss() ;
          try {
            var parsedJSON = JSON.parse(JSON.stringify(result));

            if (parsedJSON.length > 0) {
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
            } else {
              this.saveItem('OrightPreferences', JSON.stringify(this.OrightPreferences));
            }
          } catch (e) {
            console.error(e);
          }
        }, error => {
          //loading.dismiss() ;
          console.error('API Error', error); // this.somethingWentWrongError(this.toastCtrl) ;
        });
        resolve();
      } catch (e) {
        console.error('error function callOrightPrefernceApi LoginPage', e);
      }
    });
  }

  callDairyFarmConfigurationApi(userid) {
    return new Promise((resolve, reject) => {
      try {
        var url = this.BASE_URL + 'api/DairyFarmApi/getAllDairyFarmConfiguration?UserId=' + userid + '&Key=' + this.key + '&con=' + this.Dbcode;
        let postData = new FormData();
        this.http.get(url).subscribe(result => {
          try {
            var parsedJSON = JSON.parse(JSON.stringify(result));

            if (parsedJSON.length > 0) {
              //##only execute if api json data length is more than 0
              for (let i = 0; i < parsedJSON.length; i++) {
                const configuration = {
                  UserId: parsedJSON[i].UserId,
                  FarmConfiguration_ID: parsedJSON[i].FarmConfiguration_ID,
                  Farm_Name: parsedJSON[i].Farm_Name,
                  Parameter: parsedJSON[i].Parameter,
                  Value: parsedJSON[i].Value
                };
                this.DairyFarmConfiguration.push(configuration);
              }

              this.saveItem('DairyFarmConfiguration', JSON.stringify(this.DairyFarmConfiguration));
            } else {
              this.saveItem('DairyFarmConfiguration', JSON.stringify(this.DairyFarmConfiguration));
            }
          } catch (err) {
            console.error(err);
          }
        });
        resolve();
      } catch (e) {
        console.error('error function callDairyFarmConfigurationApi LoginPage:- ', e);
      }
    });
  }

  callDairyLogoPathForCoobrandingApi(dairyId) {
    return new Promise((resolve, reject) => {
      try {
        var url = this.BASE_URL + 'api/DairyFarmApi/getDairyLogoPathForCoobranding?DairyID=' + dairyId + '&Key=' + this.key + '&con=' + this.Dbcode;
        let postData = new FormData();
        this.http.get(url).subscribe(result => {
          try {
            var parsedJSON = JSON.parse(JSON.stringify(result));

            if (parsedJSON.length > 0 && parsedJSON[0].DairyFarm_Id != '0' && parsedJSON[0].Farm_Logo_Path != 'null') {
              //##only execute if api json data length is more than 0
              this.dairyLogoPathForCoobranding = parsedJSON;
              this.saveItem('Farm_Logo', JSON.stringify(this.dairyLogoPathForCoobranding[0].Farm_Logo_base64));
              this.saveItem('Farm_Logo_Path', JSON.stringify(this.dairyLogoPathForCoobranding[0].Farm_Logo_Path));
            } else {
              this.saveItem('Farm_Logo_Path', 'null');
              this.saveItem('Farm_Logo', 'null');
            }
          } catch (err) {
            console.error(err);
          }
        });
        resolve();
      } catch (e) {
        console.error('error function callDairyLogoPathForCoobrandingApi LoginPage:-', e);
      }
    });
  }

  ionViewDidEnter() {
    this.menu.get().then(menu => {
      menu.swipeGesture = false;
    });
  }

  ionViewWillEnter() {
    this.initPage();
  }

  ionViewWillLeave() {
    this.menu.get().then(menu => {
      menu.swipeGesture = true;
    });
  }

};

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _services_sql_sql_service__WEBPACK_IMPORTED_MODULE_4__.SqlService
}, {
  type: src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
}, {
  type: src_app_services_token_token_service__WEBPACK_IMPORTED_MODULE_7__.TokenService
}, {
  type: src_app_services_encryption_encryption_service__WEBPACK_IMPORTED_MODULE_8__.EncryptionService
}, {
  type: src_app_services_home_message_home_message_service__WEBPACK_IMPORTED_MODULE_6__.HomeMessageService
}, {
  type: src_app_services_accessauthorization_accessauthorization_service__WEBPACK_IMPORTED_MODULE_9__.AccessauthorizationService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 98433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div style=\"\r\n      height: 100%;\r\n      display: flex;\r\n      text-align: center;\r\n      align-items: center;\r\n      justify-content: center;\r\n    \">\r\n    <div class=\"web-container login-form__container\">\r\n      <div style=\"width: 50%; margin: 0 auto; min-width: 300px; max-width: 330px\">\r\n        <img style=\"width: 100%; height: auto\" src=\"assets/imgs/logo.png\" />\r\n      </div>\r\n      <div class=\"login-form__inputsAndButtons\">\r\n        <div style=\"padding: 0px; margin: 20px 0\">\r\n          <input class=\"login_input\" placeholder=\"{{login.user_name}}\" type=\"text\" [(ngModel)]=\"email\" />\r\n        </div>\r\n        <div style=\"\r\n            padding: 0px;\r\n            margin: 20px 0;\r\n            display: flex;\r\n            align-items: center;\r\n          \">\r\n          <input *ngIf=\"!showPasswordText\" class=\"login_input\" placeholder=\"{{login.password}}\" type=\"password\"\r\n            [(ngModel)]=\"password\" />\r\n          <input *ngIf=\"showPasswordText\" class=\"login_input\" placeholder=\"{{login.password}}\" type=\"text\"\r\n            [(ngModel)]=\"password\" />\r\n          <button tabindex=\"-1\" style=\"margin-left: -50px\" class=\"login_form__showPasswordBtn\" ion-button item-right\r\n            (click)=\"showPasswordText = !showPasswordText\">\r\n            <ion-icon *ngIf=\"showPasswordText\" name=\"eye\"> </ion-icon>\r\n            <ion-icon *ngIf=\"!showPasswordText\" name=\"eye-off\"></ion-icon>\r\n          </button>\r\n        </div>\r\n        <div style=\"padding: 0px; margin: 20px 0\">\r\n          <input class=\"login_input\" placeholder=\"{{login.Customer_code}}\" type=\"text\"\r\n            (change)=\"changeCustomerCode(Dbcode)\" [(ngModel)]=\"Dbcode\" />\r\n        </div>\r\n        <!-- <ion-input *ngIf=\"!showPasswordText\" class=\"signup_input\" placeholder=\"User Password\" [(ngModel)]=\"UserPassword\" formControlName=\"password\" type=\"password\"></ion-input>\r\n    <ion-input *ngIf=\"showPasswordText\" class=\"signup_input\" placeholder=\"User Password\" [(ngModel)]=\"UserPassword\" formControlName=\"password\" type=\"text\"></ion-input>\r\n    <button style=\"margin-top: -2px ;margin-bottom:-2px ;\"  ion-button clear color=\"dark\" type=\"button\" item-right (click)=\"showPasswordText = !showPasswordText\">\r\n      <ion-icon name=\"eye\"> </ion-icon>\r\n    </button> -->\r\n        <div (click)=\"forgotPassword()\" style=\"text-align: center; margin-top: 10px; padding: 0px\">\r\n          <p style=\"font-family: nexa_bold; color: #666666\">\r\n            {{login.forgot_password}}\r\n          </p>\r\n        </div>\r\n        <div style=\"\r\n            width: 100%;\r\n            display: flex;\r\n            text-align: center;\r\n            justify-content: center;\r\n            align-items: center;\r\n            padding: 0px;\r\n          \">\r\n          <button style=\"\r\n              background-color: #88dd4b;\r\n              width: 98%;\r\n              display: flex;\r\n              text-align: center;\r\n              justify-content: center;\r\n              align-items: center;\r\n              border-radius: 25px;\r\n              height: 52px;\r\n              font-size: 15px;\r\n              font-weight: bolder;\r\n              color: #ffffff;\r\n              font-family: nexa_bold;\r\n            \" (click)=\"callLoginAPI(Dbcode)\">\r\n            {{login.login}}\r\n          </button>\r\n          <!-- <button\r\n          style=\"\r\n            background-color: #88dd4b ;\r\n            width: 98% ;\r\n            display: flex ;\r\n            text-align: center ;\r\n            justify-content: center ;\r\n            align-items: center ;\r\n            border-radius: 25px ;\r\n            height: 52px ;\r\n            font-size: 15px ;\r\n            font-weight: bolder ;\r\n            color: #ffffff ;\r\n            font-family: nexa_bold ;\r\n          \"\r\n          (click)=\"this.edpuserver.webSocketStartServer8889()\"\r\n        >\r\n         test\r\n        </button> -->\r\n          <!-- <div\r\n          (click)=\"callLoginAPI(Dbcode)\"\r\n          style=\"\r\n            display: flex ;\r\n            text-align: center ;\r\n            justify-content: center ;\r\n            align-items: center ;\r\n          \"\r\n        >\r\n          <div\r\n            style=\"\r\n              background-color: #488aff ;\r\n              width: 80% ;\r\n              display: flex ;\r\n              text-align: center ;\r\n              justify-content: center ;\r\n              align-items: center ;\r\n              border-radius: 20px ;\r\n              height: 40px ;\r\n            \"\r\n          >\r\n            <p\r\n              style=\"\r\n                font-size: 15px ;\r\n                font-weight: bolder ;\r\n                color: #ffffff ;\r\n                font-family: nexa_bold ;\r\n              \"\r\n            >\r\n              {{login.login}}\r\n            </p>\r\n          </div>\r\n        </div> -->\r\n        </div>\r\n        <!-- <ion-item (click)=\"signup()\" text-center no-lines style=\"text-align: right ;margin-top: 10px ;\">\r\n      <p style=\"font-family: nexa_bold ;\">{{login.no_account_text}}<b><u style=\"margin-left: 5px ;\">{{login.signup_text}}</u></b></p>\r\n    </ion-item> -->\r\n        <div style=\"padding: 0px\">\r\n          <div style=\"\r\n              display: flex;\r\n              flex-wrap: no-wrap;\r\n              text-align: center;\r\n              align-items: center;\r\n              justify-content: center;\r\n              color: #666666;\r\n            \">\r\n            <p style=\"font-family: nexa_bold\" (click)=\"getData1('en')\">\r\n              <u style=\"margin-left: 5px\">{{english}}</u>\r\n            </p>\r\n            <p style=\"font-family: nexa_bold\" (click)=\"getData1('hn')\">\r\n              <u style=\"margin-left: 5px\">{{Hindi}}</u>\r\n            </p>\r\n\r\n            <p style=\"font-family: nexa_bold\" (click)=\"getData1('tm')\">\r\n              <u style=\"margin-left: 5px\">{{Tamil}}</u>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map