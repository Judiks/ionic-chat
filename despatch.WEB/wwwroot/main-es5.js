(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\User\source\repos\despatch\despatch.WEB\app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiURL: 'https://192.168.31.223:44364'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CqPs":
    /*!*************************************************!*\
      !*** ./src/app/shared/helpers/toasts.helper.ts ***!
      \*************************************************/

    /*! exports provided: ToastsHelper */

    /***/
    function CqPs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastsHelper", function () {
        return ToastsHelper;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ToastsHelper = /*#__PURE__*/function () {
        function ToastsHelper(toast) {
          _classCallCheck(this, ToastsHelper);

          this.toast = toast;
        }

        _createClass(ToastsHelper, [{
          key: "error",
          value: function error(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toast.create({
                        message: message,
                        duration: 2000,
                        color: 'danger'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "success",
          value: function success(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        message: message,
                        duration: 2000,
                        color: 'success'
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ToastsHelper;
      }();

      ToastsHelper.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastsHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastsHelper);
      /***/
    },

    /***/
    "S5SI":
    /*!**********************************************!*\
      !*** ./src/swagger/services/auth.service.ts ***!
      \**********************************************/

    /*! exports provided: AuthService */

    /***/
    function S5SI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../base-service */
      "zEC6");
      /* harmony import */


      var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api-configuration */
      "UoTm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:disable */


      var AuthService = /*#__PURE__*/function (_base_service__WEBPAC) {
        _inherits(AuthService, _base_service__WEBPAC);

        var _super = _createSuper(AuthService);

        function AuthService(config, http) {
          _classCallCheck(this, AuthService);

          return _super.call(this, config, http);
        }
        /**
         * @param model undefined
         */


        _createClass(AuthService, [{
          key: "AuthRegisterResponse",
          value: function AuthRegisterResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = model;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Auth/Register", __body, {
              headers: __headers,
              params: __params,
              responseType: 'json'
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
              return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthRegister",
          value: function AuthRegister(model) {
            return this.AuthRegisterResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthLoginResponse",
          value: function AuthLoginResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = model;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Auth/Login", __body, {
              headers: __headers,
              params: __params,
              responseType: 'json'
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
              return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthLogin",
          value: function AuthLogin(model) {
            return this.AuthLoginResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthSendRegisterSMSResponse",
          value: function AuthSendRegisterSMSResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = model;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Auth/SendRegisterSMS", __body, {
              headers: __headers,
              params: __params,
              responseType: 'text'
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
              return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthSendRegisterSMS",
          value: function AuthSendRegisterSMS(model) {
            return this.AuthSendRegisterSMSResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthSendInvitationSMSResponse",
          value: function AuthSendInvitationSMSResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = model;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Auth/SendInvitationSMS", __body, {
              headers: __headers,
              params: __params,
              responseType: 'text'
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
              return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthSendInvitationSMS",
          value: function AuthSendInvitationSMS(model) {
            return this.AuthSendInvitationSMSResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthCheckUserNameResponse",
          value: function AuthCheckUserNameResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            if (model != null) __params = __params.set('model', model.toString());
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Auth/CheckUserName", __body, {
              headers: __headers,
              params: __params,
              responseType: 'text'
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
              return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.clone({
                body: _r.body === 'true'
              });
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthCheckUserName",
          value: function AuthCheckUserName(model) {
            return this.AuthCheckUserNameResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthCheckUserEmailResponse",
          value: function AuthCheckUserEmailResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            if (model != null) __params = __params.set('model', model.toString());
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Auth/CheckUserEmail", __body, {
              headers: __headers,
              params: __params,
              responseType: 'text'
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
              return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.clone({
                body: _r.body === 'true'
              });
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "AuthCheckUserEmail",
          value: function AuthCheckUserEmail(model) {
            return this.AuthCheckUserEmailResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param request undefined
           */

        }, {
          key: "AuthRefreshTokenResponse",
          value: function AuthRefreshTokenResponse(request) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = request;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Auth/RefreshToken", __body, {
              headers: __headers,
              params: __params,
              responseType: 'json'
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
              return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r;
            }));
          }
          /**
           * @param request undefined
           */

        }, {
          key: "AuthRefreshToken",
          value: function AuthRefreshToken(request) {
            return this.AuthRefreshTokenResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
        }, {
          key: "AuthLogoutResponse",
          value: function AuthLogoutResponse() {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Auth/Logout", __body, {
              headers: __headers,
              params: __params,
              responseType: 'json'
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) {
              return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r;
            }));
          }
        }, {
          key: "AuthLogout",
          value: function AuthLogout() {
            return this.AuthLogoutResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
        }]);

        return AuthService;
      }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

      AuthService.AuthRegisterPath = '/api/Auth/Register';
      AuthService.AuthLoginPath = '/api/Auth/Login';
      AuthService.AuthSendRegisterSMSPath = '/api/Auth/SendRegisterSMS';
      AuthService.AuthSendInvitationSMSPath = '/api/Auth/SendInvitationSMS';
      AuthService.AuthCheckUserNamePath = '/api/Auth/CheckUserName';
      AuthService.AuthCheckUserEmailPath = '/api/Auth/CheckUserEmail';
      AuthService.AuthRefreshTokenPath = '/api/Auth/RefreshToken';
      AuthService.AuthLogoutPath = '/api/Auth/Logout';

      AuthService.ctorParameters = function () {
        return [{
          type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "SDTg":
    /*!***********************************************!*\
      !*** ./src/app/shared/helpers/auth.helper.ts ***!
      \***********************************************/

    /*! exports provided: AuthHelper */

    /***/
    function SDTg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthHelper", function () {
        return AuthHelper;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/swagger/services/auth.service */
      "S5SI");

      var AuthHelper = /*#__PURE__*/function () {
        function AuthHelper(authService, router) {
          _classCallCheck(this, AuthHelper);

          this.authService = authService;
          this.router = router;
          this.isRefreshing = false;
          this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('current-user')));
          this.user = this.currentUser.asObservable();
        }

        _createClass(AuthHelper, [{
          key: "setUser",
          value: function setUser(model) {
            localStorage.setItem('current-user', JSON.stringify(model));
            this.currentUser.next(model);
          }
        }, {
          key: "setUserOnRefreshToken",
          value: function setUserOnRefreshToken(model) {
            this.currentUser.next({
              email: model.email,
              phoneNumber: model.phoneNumber,
              role: model.role,
              userName: model.userName,
              authToken: model.authToken,
              refreshToken: model.refreshToken
            });
            localStorage.setItem('current-user', JSON.stringify(model));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.currentUser.value;
          }
        }, {
          key: "setUserOnLogin",
          value: function setUserOnLogin(model) {
            this.currentUser.next({
              id: model.id,
              userName: model.userName,
              phoneNumber: model.phoneNumber,
              email: model.email,
              role: model.role,
              refreshToken: model.refreshToken,
              authToken: model.authToken
            });
            localStorage.setItem('auth-token', model.authToken);
            localStorage.setItem('refresh-token', model.refreshToken);
            localStorage.setItem('current-user', JSON.stringify(model));
          }
        }, {
          key: "handle401withRefresh",
          value: function handle401withRefresh(request, next) {
            var _this = this;

            if (!this.isRefreshing) {
              this.isRefreshing = true;
              this.refreshTokenSubject.next(null);
              var requestToken = {
                refreshToken: this.getUser().refreshToken
              };
              return this.authService.AuthRefreshToken(requestToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
                if (user) {
                  _this.setUserOnRefreshToken(user);

                  _this.refreshTokenSubject.next(user.refreshToken);

                  return next.handle(_this.addToken(request, user.authToken));
                }

                _this.authService.AuthLogout();

                _this.isRefreshing = false;
              }));
            }

            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (token) {
              return token != null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (jwt) {
              return next.handle(_this.addToken(request, jwt));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
          }
        }, {
          key: "addToken",
          value: function addToken(request, token) {
            return request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this2 = this;

            this.authService.AuthLogout().subscribe(function () {
              localStorage.removeItem('currentUser');

              _this2.currentUser.next(null);

              _this2.router.navigate(['account']);
            });
          }
        }]);

        return AuthHelper;
      }();

      AuthHelper.ctorParameters = function () {
        return [{
          type: src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthHelper);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shared_helpers_permission_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/helpers/permission.helper */
      "qnkB");

      var AppComponent = function AppComponent(platform, permissionHelper, permission) {
        var _this3 = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.permissionHelper = permissionHelper;
        this.permission = permission;
        platform.ready().then(function () {
          permissionHelper.checkPermissionMethod(_this3.permission.PERMISSION.READ_PHONE_STATE);
          permissionHelper.checkPermissionMethod(_this3.permission.PERMISSION.READ_SMS);
          permissionHelper.checkPermissionMethod(_this3.permission.PERMISSION.RECEIVE_SMS);
          permissionHelper.checkPermissionMethod('android.permission.READ_PHONE_NUMBERS');
        });
      };

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _shared_helpers_permission_helper__WEBPACK_IMPORTED_MODULE_6__["PermissionHelper"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "UoTm":
    /*!******************************************!*\
      !*** ./src/swagger/api-configuration.ts ***!
      \******************************************/

    /*! exports provided: ApiConfiguration */

    /***/
    function UoTm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiConfiguration", function () {
        return ApiConfiguration;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* tslint:disable */

      /**
       * Global configuration for Api services
       */


      var ApiConfiguration = function ApiConfiguration() {
        _classCallCheck(this, ApiConfiguration);

        this.rootUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
      };

      ApiConfiguration = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiConfiguration);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-router-outlet></ion-router-outlet>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "PLH8");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./shared/interceptors/error.interceptor */
      "mfuP");
      /* harmony import */


      var _shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/interceptors/jwt.interceptor */
      "rcxU");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "mfuP":
    /*!**********************************************************!*\
      !*** ./src/app/shared/interceptors/error.interceptor.ts ***!
      \**********************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function mfuP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../helpers/auth.helper */
      "SDTg");
      /* harmony import */


      var _helpers_toasts_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../helpers/toasts.helper */
      "CqPs");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authHelper, toasts, spinner) {
          _classCallCheck(this, ErrorInterceptor);

          this.authHelper = authHelper;
          this.toasts = toasts;
          this.spinner = spinner;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this4 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              _this4.spinner.hide();

              var isTokenExpired = err.headers.has('token-expired');
              var isRefreshTokenInvalid = err.headers.has('invalid-refresh-token');

              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401 && isTokenExpired && !isRefreshTokenInvalid) {
                return _this4.authHelper.handle401withRefresh(request, next);
              }

              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401 && (!isTokenExpired || isRefreshTokenInvalid)) {
                _this4.authHelper.logout();
              }

              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 403) {
                _this4.toasts.error('You have not permission for this page');
              }

              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 400) {
                _this4.toasts.error('Internal server error');
              }

              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 500) {
                _this4.toasts.error(err.error);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ctorParameters = function () {
        return [{
          type: _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_6__["AuthHelper"]
        }, {
          type: _helpers_toasts_helper__WEBPACK_IMPORTED_MODULE_7__["ToastsHelper"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
        }];
      };

      ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ErrorInterceptor);
      /***/
    },

    /***/
    "qnkB":
    /*!*****************************************************!*\
      !*** ./src/app/shared/helpers/permission.helper.ts ***!
      \*****************************************************/

    /*! exports provided: PermissionHelper */

    /***/
    function qnkB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionHelper", function () {
        return PermissionHelper;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _dto_permission_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../dto/permission.dto */
      "yfIC");

      var PermissionHelper = /*#__PURE__*/function () {
        function PermissionHelper(platform) {
          var _this5 = this;

          _classCallCheck(this, PermissionHelper);

          this.platform = platform;
          this.checkPermissionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.requestQueue = [];
          this.requests = [];
          this.getPermission().subscribe(function (result) {
            if (!result.isActive) {
              _this5.addRequestToQueue(result);
            }

            _this5.checkRequestsCount();
          });
        }

        _createClass(PermissionHelper, [{
          key: "addRequestToQueue",
          value: function addRequestToQueue(model) {
            this.requestQueue.push(model.permission);
          }
        }, {
          key: "checkRequestsCount",
          value: function checkRequestsCount() {
            if (this.requests.length > 0) {
              this.requests.shift();
            }

            if (this.requests.length === 0) {
              this.requestPermission(this.requestQueue, Math.random() * 100);
            }
          }
        }, {
          key: "checkPermissionMethod",
          value: function checkPermissionMethod(permission) {
            var _this6 = this;

            this.platform.ready().then(function () {
              _this6.requests.push(cordova.plugins.PermissionProvider.checkPermission(permission, function (result) {
                _this6.checkPermissionSubject.next(new _dto_permission_dto__WEBPACK_IMPORTED_MODULE_4__["PermissionDto"](true, permission));
              }, function (err) {
                _this6.checkPermissionSubject.next(new _dto_permission_dto__WEBPACK_IMPORTED_MODULE_4__["PermissionDto"](false, permission));
              }));
            });
          }
        }, {
          key: "requestPermission",
          value: function requestPermission(permissions, code) {
            this.platform.ready().then(function () {
              cordova.plugins.PermissionProvider.requestPermission(permissions, code, function (result) {
                console.log('Permission request was sended');
              }, function (err) {
                console.log('Something went wrong');
              });
            });
          }
        }, {
          key: "getPermission",
          value: function getPermission() {
            return this.checkPermissionSubject.asObservable();
          }
        }]);

        return PermissionHelper;
      }();

      PermissionHelper.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      PermissionHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PermissionHelper);
      /***/
    },

    /***/
    "rcxU":
    /*!********************************************************!*\
      !*** ./src/app/shared/interceptors/jwt.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function rcxU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../helpers/auth.helper */
      "SDTg");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authHelper, spinner) {
          _classCallCheck(this, JwtInterceptor);

          this.authHelper = authHelper;
          this.spinner = spinner;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this7 = this;

            if (request instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]) {
              this.spinner.show();
            }

            var currentUser = this.authHelper.getUser();
            var isLoggedIn = currentUser && currentUser.authToken;
            var isApiUrl = request.url.startsWith(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL);

            if (isLoggedIn && isApiUrl) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.authToken)
                }
              });
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this7.spinner.hide();
              }
            }));
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ctorParameters = function () {
        return [{
          type: _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_5__["AuthHelper"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }];
      };

      JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var routes = [{
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | account-account-module */
          [__webpack_require__.e("common"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null,
          /*! ./account/account.module */
          "jcJX")).then(function (m) {
            return m.AccountModule;
          });
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | chat-chat-module */
          [__webpack_require__.e("common"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null,
          /*! ./chat/chat.module */
          "2yxt")).then(function (m) {
            return m.ChatModule;
          });
        }
      }, {
        path: 'despatch',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | despatch-despatch-module */
          [__webpack_require__.e("common"), __webpack_require__.e("despatch-despatch-module")]).then(__webpack_require__.bind(null,
          /*! ./despatch/despatch.module */
          "qbgt")).then(function (m) {
            return m.DespatchModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "yfIC":
    /*!**********************************************!*\
      !*** ./src/app/shared/dto/permission.dto.ts ***!
      \**********************************************/

    /*! exports provided: PermissionDto */

    /***/
    function yfIC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionDto", function () {
        return PermissionDto;
      });

      var PermissionDto = function PermissionDto(isActive, permission) {
        _classCallCheck(this, PermissionDto);

        this.isActive = isActive;
        this.permission = permission;
      };
      /***/

    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "zEC6":
    /*!*************************************!*\
      !*** ./src/swagger/base-service.ts ***!
      \*************************************/

    /*! exports provided: BaseService */

    /***/
    function zEC6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseService", function () {
        return BaseService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* tslint:disable */

      /**
       * Custom parameter codec to correctly handle the plus sign in parameter
       * values. See https://github.com/angular/angular/issues/18261
       */


      var ParameterCodec = /*#__PURE__*/function () {
        function ParameterCodec() {
          _classCallCheck(this, ParameterCodec);
        }

        _createClass(ParameterCodec, [{
          key: "encodeKey",
          value: function encodeKey(key) {
            return encodeURIComponent(key);
          }
        }, {
          key: "encodeValue",
          value: function encodeValue(value) {
            return encodeURIComponent(value);
          }
        }, {
          key: "decodeKey",
          value: function decodeKey(key) {
            return decodeURIComponent(key);
          }
        }, {
          key: "decodeValue",
          value: function decodeValue(value) {
            return decodeURIComponent(value);
          }
        }]);

        return ParameterCodec;
      }();

      var PARAMETER_CODEC = new ParameterCodec();
      /**
       * Base class for API services
       */

      var BaseService = /*#__PURE__*/function () {
        function BaseService(config, http) {
          _classCallCheck(this, BaseService);

          this.config = config;
          this.http = http;
          this._rootUrl = '';
        }
        /**
         * Returns the root url for API operations. If not set directly in this
         * service, will fallback to ApiConfiguration.rootUrl.
         */


        _createClass(BaseService, [{
          key: "newParams",

          /**
           * Creates a new `HttpParams` with the correct codec
           */
          value: function newParams() {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
              encoder: PARAMETER_CODEC
            });
          }
        }, {
          key: "rootUrl",
          get: function get() {
            return this._rootUrl || this.config.rootUrl;
          }
          /**
           * Sets the root URL for API operations in this service.
           */
          ,
          set: function set(rootUrl) {
            this._rootUrl = rootUrl;
          }
        }]);

        return BaseService;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map