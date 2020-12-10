(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "0/6H":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "A36C");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "22HP":
    /*!***********************************************!*\
      !*** ./src/app/shared/helpers/room.helper.ts ***!
      \***********************************************/

    /*! exports provided: RoomHelper */

    /***/
    function HP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoomHelper", function () {
        return RoomHelper;
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


      var src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/swagger/services/auth.service */
      "S5SI");

      var RoomHelper = /*#__PURE__*/function () {
        function RoomHelper(authService, router) {
          _classCallCheck(this, RoomHelper);

          this.authService = authService;
          this.router = router;
          this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('current-room')));
          this.user = this.currentUser.asObservable();
        }

        _createClass(RoomHelper, [{
          key: "setRoom",
          value: function setRoom(model) {
            localStorage.setItem('current-room', JSON.stringify(model));
            this.currentUser.next(model);
          }
        }, {
          key: "getRoom",
          value: function getRoom() {
            return this.currentUser.value;
          }
        }]);

        return RoomHelper;
      }();

      RoomHelper.ctorParameters = function () {
        return [{
          type: src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      RoomHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RoomHelper);
      /***/
    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "O8Kr":
    /*!**********************************************!*\
      !*** ./src/swagger/services/file.service.ts ***!
      \**********************************************/

    /*! exports provided: FileService */

    /***/
    function O8Kr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileService", function () {
        return FileService;
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


      var FileService = /*#__PURE__*/function (_base_service__WEBPAC) {
        _inherits(FileService, _base_service__WEBPAC);

        var _super = _createSuper(FileService);

        function FileService(config, http) {
          _classCallCheck(this, FileService);

          return _super.call(this, config, http);
        }
        /**
         * @param request undefined
         */


        _createClass(FileService, [{
          key: "FileDownloadResponse",
          value: function FileDownloadResponse(request) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = request;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/File/Download", __body, {
              headers: __headers,
              params: __params,
              responseType: 'blob'
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
          key: "FileDownload",
          value: function FileDownload(request) {
            return this.FileDownloadResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
        }]);

        return FileService;
      }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

      FileService.FileDownloadPath = '/api/File/Download';

      FileService.ctorParameters = function () {
        return [{
          type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      FileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FileService);
      /***/
    },

    /***/
    "UhIE":
    /*!**********************************************!*\
      !*** ./src/swagger/services/room.service.ts ***!
      \**********************************************/

    /*! exports provided: RoomService */

    /***/
    function UhIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoomService", function () {
        return RoomService;
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


      var RoomService = /*#__PURE__*/function (_base_service__WEBPAC2) {
        _inherits(RoomService, _base_service__WEBPAC2);

        var _super2 = _createSuper(RoomService);

        function RoomService(config, http) {
          _classCallCheck(this, RoomService);

          return _super2.call(this, config, http);
        }
        /**
         * @param model undefined
         */


        _createClass(RoomService, [{
          key: "RoomCreateResponse",
          value: function RoomCreateResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = model;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Room/Create", __body, {
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
          key: "RoomCreate",
          value: function RoomCreate(model) {
            return this.RoomCreateResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "RoomCreateFromContactResponse",
          value: function RoomCreateFromContactResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = model;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Room/CreateFromContact", __body, {
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
          key: "RoomCreateFromContact",
          value: function RoomCreateFromContact(model) {
            return this.RoomCreateFromContactResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param request undefined
           */

        }, {
          key: "RoomGetRoomByContactResponse",
          value: function RoomGetRoomByContactResponse(request) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = request;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Room/GetRoomByContact", __body, {
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
          key: "RoomGetRoomByContact",
          value: function RoomGetRoomByContact(request) {
            return this.RoomGetRoomByContactResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param request undefined
           */

        }, {
          key: "RoomGetUserRoomsResponse",
          value: function RoomGetUserRoomsResponse(request) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = request;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Room/GetUserRooms", __body, {
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
          key: "RoomGetUserRooms",
          value: function RoomGetUserRooms(request) {
            return this.RoomGetUserRoomsResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param request undefined
           */

        }, {
          key: "RoomGetRoomContactsResponse",
          value: function RoomGetRoomContactsResponse(request) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = request;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Room/GetRoomContacts", __body, {
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
          key: "RoomGetRoomContacts",
          value: function RoomGetRoomContacts(request) {
            return this.RoomGetRoomContactsResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
        }]);

        return RoomService;
      }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

      RoomService.RoomCreatePath = '/api/Room/Create';
      RoomService.RoomCreateFromContactPath = '/api/Room/CreateFromContact';
      RoomService.RoomGetRoomByContactPath = '/api/Room/GetRoomByContact';
      RoomService.RoomGetUserRoomsPath = '/api/Room/GetUserRooms';
      RoomService.RoomGetRoomContactsPath = '/api/Room/GetRoomContacts';

      RoomService.ctorParameters = function () {
        return [{
          type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      RoomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RoomService);
      /***/
    },

    /***/
    "XDyB":
    /*!*************************************************!*\
      !*** ./src/swagger/services/contact.service.ts ***!
      \*************************************************/

    /*! exports provided: ContactService */

    /***/
    function XDyB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactService", function () {
        return ContactService;
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


      var ContactService = /*#__PURE__*/function (_base_service__WEBPAC3) {
        _inherits(ContactService, _base_service__WEBPAC3);

        var _super3 = _createSuper(ContactService);

        function ContactService(config, http) {
          _classCallCheck(this, ContactService);

          return _super3.call(this, config, http);
        }
        /**
         * @param model undefined
         */


        _createClass(ContactService, [{
          key: "ContactSaveAllFromNativeResponse",
          value: function ContactSaveAllFromNativeResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = model;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Contact/SaveAllFromNative", __body, {
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
          key: "ContactSaveAllFromNative",
          value: function ContactSaveAllFromNative(model) {
            return this.ContactSaveAllFromNativeResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
          /**
           * @param model undefined
           */

        }, {
          key: "ContactGetContactDataResponse",
          value: function ContactGetContactDataResponse(model) {
            var __params = this.newParams();

            var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            var __body = null;
            __body = model;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/api/Contact/GetContactData", __body, {
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
          key: "ContactGetContactData",
          value: function ContactGetContactData(model) {
            return this.ContactGetContactDataResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
              return _r.body;
            }));
          }
        }]);

        return ContactService;
      }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

      ContactService.ContactSaveAllFromNativePath = '/api/Contact/SaveAllFromNative';
      ContactService.ContactGetContactDataPath = '/api/Contact/GetContactData';

      ContactService.ctorParameters = function () {
        return [{
          type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ContactService);
      /***/
    },

    /***/
    "ZaV5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function ZaV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context2.abrupt("return", el);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "qCwG":
    /*!******************************************!*\
      !*** ./src/app/shared/base.component.ts ***!
      \******************************************/

    /*! exports provided: BaseComponent */

    /***/
    function qCwG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
        return BaseComponent;
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


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "PLH8");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var BaseComponent = /*#__PURE__*/function () {
        function BaseComponent(keyboard, cdr, router, navController) {
          var _this = this;

          _classCallCheck(this, BaseComponent);

          this.keyboard = keyboard;
          this.cdr = cdr;
          this.router = router;
          this.navController = navController;
          this.isKeyboardActive = false;
          this.window = window;
          this.colors = new Array();
          keyboard.onKeyboardShow().subscribe(function (result) {
            _this.isKeyboardActive = true;
            cdr.tick();
          });
          keyboard.onKeyboardHide().subscribe(function (result) {
            _this.isKeyboardActive = false;
            cdr.tick();
          });
          document.addEventListener('ionBackButton', function (ev) {
            _this.navController.pop();
          });
        } // ------------- ACCOUNT -------------
        // redirect to register page


        _createClass(BaseComponent, [{
          key: "redirectToRegister",
          value: function redirectToRegister() {
            this.router.navigate(['account', 'register']);
          } // redirect to login page

        }, {
          key: "redirectToLogin",
          value: function redirectToLogin() {
            this.router.navigate(['account', 'login']);
          } // ------------- CHAT -------------
          // ------------- ROOM -------------
          // redirect to rooms list

        }, {
          key: "redirectToRooms",
          value: function redirectToRooms() {
            this.router.navigate(['chat', 'rooms', 'dashboard']);
          } // redirect to create room

        }, {
          key: "redirectToCreateRoom",
          value: function redirectToCreateRoom() {
            this.router.navigate(['chat', 'rooms', 'new']);
          } // redirect to create room

        }, {
          key: "redirectToRoom",
          value: function redirectToRoom() {
            this.router.navigate(['chat', 'rooms', 'room']);
          } // redirect to room-contacts list

        }, {
          key: "redirectToRoomContacts",
          value: function redirectToRoomContacts() {
            this.router.navigate(['chat', 'rooms', 'contacts']);
          } // ------------- CONTACTS -------------

        }, {
          key: "redirectToContacts",
          value: function redirectToContacts() {
            this.router.navigate(['chat', 'contacts', 'dashboard']);
          }
        }, {
          key: "getRandomColor",
          value: function getRandomColor() {
            var colors = ['#3880ff', '#3171e0', '#4c8dff', '#3dc2ff', '#36abe0', '#50c8ff', '#5260ff', '#4854e0', '#6370ff'];
            var random = Math.floor(Math.random() * 9);
            return colors[random];
          }
        }, {
          key: "sanitizeImage",
          value: function sanitizeImage(value) {
            if (!value) {
              return;
            }

            var result = this.window.Ionic.WebView.convertFileSrc(value);
            return result;
          }
        }]);

        return BaseComponent;
      }();

      BaseComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      BaseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-component',
        template: ""
      })], BaseComponent);
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "yTWy":
    /*!*********************************!*\
      !*** ./src/swagger/services.ts ***!
      \*********************************/

    /*! exports provided: AuthService, ContactService, FileService, RoomService */

    /***/
    function yTWy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/auth.service */
      "S5SI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"];
      });
      /* harmony import */


      var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/contact.service */
      "XDyB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ContactService", function () {
        return _services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"];
      });
      /* harmony import */


      var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/file.service */
      "O8Kr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileService", function () {
        return _services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"];
      });
      /* harmony import */


      var _services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/room.service */
      "UhIE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RoomService", function () {
        return _services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"];
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map