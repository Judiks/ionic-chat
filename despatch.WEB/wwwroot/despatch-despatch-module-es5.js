(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["despatch-despatch-module"], {
    /***/
    "Bh95":
    /*!*******************************************************************************!*\
      !*** ./src/app/despatch/componnents/download-apk/download-apk.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Bh95(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".download-container {\n  flex-direction: column;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzcGF0Y2gvY29tcG9ubmVudHMvZG93bmxvYWQtYXBrL2Rvd25sb2FkLWFway5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Rlc3BhdGNoL2NvbXBvbm5lbnRzL2Rvd25sb2FkLWFway9kb3dubG9hZC1hcGsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bmxvYWQtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "Iab2":
    /*!*******************************************************!*\
      !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Iab2(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      (function (a, b) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
      })(this, function () {
        "use strict";

        function b(a, b) {
          return "undefined" == typeof b ? b = {
            autoBom: !1
          } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
          }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
            type: a.type
          }) : a;
        }

        function c(a, b, c) {
          var d = new XMLHttpRequest();
          d.open("GET", a), d.responseType = "blob", d.onload = function () {
            g(d.response, b, c);
          }, d.onerror = function () {
            console.error("could not download file");
          }, d.send();
        }

        function d(a) {
          var b = new XMLHttpRequest();
          b.open("HEAD", a, !1);

          try {
            b.send();
          } catch (a) {}

          return 200 <= b.status && 299 >= b.status;
        }

        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent("click"));
          } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
          }
        }

        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
            a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
            g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
          var i = f.URL || f.webkitURL,
              j = document.createElement("a");
          g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
            i.revokeObjectURL(j.href);
          }, 4E4), setTimeout(function () {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
          if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function () {
              e(i);
            });
          }
        } : function (b, d, e, g) {
          if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
          var h = "application/octet-stream" === b.type,
              i = /constructor/i.test(f.HTMLElement) || f.safari,
              j = /CriOS\/[\d]+/.test(navigator.userAgent);

          if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function () {
              var a = k.result;
              a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
            }, k.readAsDataURL(b);
          } else {
            var l = f.URL || f.webkitURL,
                m = l.createObjectURL(b);
            g ? g.location = m : location.href = m, g = null, setTimeout(function () {
              l.revokeObjectURL(m);
            }, 4E4);
          }
        });
        f.saveAs = g.saveAs = g, true && (module.exports = g);
      }); //# sourceMappingURL=FileSaver.min.js.map

      /***/

    },

    /***/
    "XmpO":
    /*!************************************************!*\
      !*** ./src/app/despatch/despatch.component.ts ***!
      \************************************************/

    /*! exports provided: DespatchComponent */

    /***/
    function XmpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DespatchComponent", function () {
        return DespatchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DespatchComponent = /*#__PURE__*/function () {
        function DespatchComponent() {
          _classCallCheck(this, DespatchComponent);
        }

        _createClass(DespatchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DespatchComponent;
      }();

      DespatchComponent.ctorParameters = function () {
        return [];
      };

      DespatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-browser',
        template: "<ion-router-outlet ></ion-router-outlet>"
      })], DespatchComponent);
      /***/
    },

    /***/
    "aF7C":
    /*!*****************************************************************************!*\
      !*** ./src/app/despatch/componnents/download-apk/download-apk.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: DownloadApkComponent */

    /***/
    function aF7C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DownloadApkComponent", function () {
        return DownloadApkComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_download_apk_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./download-apk.component.html */
      "bvSx");
      /* harmony import */


      var _download_apk_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./download-apk.component.scss */
      "Bh95");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_swagger_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/swagger/services */
      "yTWy");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");

      var DownloadApkComponent = /*#__PURE__*/function () {
        function DownloadApkComponent(device, fileService) {
          _classCallCheck(this, DownloadApkComponent);

          this.device = device;
          this.fileService = fileService;
        }

        _createClass(DownloadApkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "downloadApk",
          value: function downloadApk() {
            var request = {
              uri: '/assets/apk/despatch.apk',
              title: 'Despatch',
              notificationVisibility: 0
            };

            if (this.device.platform === 'Android') {
              request.uri = location.origin + request.uri, cordova.plugins.Downloader.download(request, function (location) {
                alert('File is downloaded at' + location);
              }, function (err) {
                alert(err);
              });
            } else {
              this.fileService.FileDownload(request).subscribe(function (response) {
                console.log(response);
                Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(response);
              });
            }
          }
        }]);

        return DownloadApkComponent;
      }();

      DownloadApkComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"]
        }, {
          type: src_swagger_services__WEBPACK_IMPORTED_MODULE_4__["FileService"]
        }];
      };

      DownloadApkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-download-apk',
        template: _raw_loader_download_apk_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_download_apk_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DownloadApkComponent);
      /***/
    },

    /***/
    "bvSx":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/despatch/componnents/download-apk/download-apk.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bvSx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class='d-flex m-auto download-container'>\n  <div class='m-auto'>\n    <p p class='luckiest-guy-font'>Despatch App!</p>\n  </div>\n{{this.device.platform}}\n  <div class='m-auto'>\n    <ion-button (click)='downloadApk()'>\n      Download\n    </ion-button>\n  </div>\n</div>";
      /***/
    },

    /***/
    "qbgt":
    /*!*********************************************!*\
      !*** ./src/app/despatch/despatch.module.ts ***!
      \*********************************************/

    /*! exports provided: DespatchModule */

    /***/
    function qbgt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DespatchModule", function () {
        return DespatchModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _componnents_download_apk_download_apk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./componnents/download-apk/download-apk.component */
      "aF7C");
      /* harmony import */


      var _despatch_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./despatch-routing.module */
      "r3uR");
      /* harmony import */


      var _despatch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./despatch.component */
      "XmpO");

      var DespatchModule = function DespatchModule() {
        _classCallCheck(this, DespatchModule);
      };

      DespatchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_despatch_component__WEBPACK_IMPORTED_MODULE_7__["DespatchComponent"], _componnents_download_apk_download_apk_component__WEBPACK_IMPORTED_MODULE_5__["DownloadApkComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _despatch_routing_module__WEBPACK_IMPORTED_MODULE_6__["DespatchRoutingModule"]],
        providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"]]
      })], DespatchModule);
      /***/
    },

    /***/
    "r3uR":
    /*!*****************************************************!*\
      !*** ./src/app/despatch/despatch-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: DespatchRoutingModule */

    /***/
    function r3uR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DespatchRoutingModule", function () {
        return DespatchRoutingModule;
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


      var _componnents_download_apk_download_apk_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./componnents/download-apk/download-apk.component */
      "aF7C");
      /* harmony import */


      var _despatch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./despatch.component */
      "XmpO");

      var routes = [{
        path: '',
        redirectTo: 'download-apk',
        pathMatch: 'full'
      }, {
        path: '',
        component: _despatch_component__WEBPACK_IMPORTED_MODULE_4__["DespatchComponent"],
        children: [{
          path: 'download-apk',
          component: _componnents_download_apk_download_apk_component__WEBPACK_IMPORTED_MODULE_3__["DownloadApkComponent"]
        }]
      }];

      var DespatchRoutingModule = function DespatchRoutingModule() {
        _classCallCheck(this, DespatchRoutingModule);
      };

      DespatchRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DespatchRoutingModule);
      /***/
    },

    /***/
    "xS7M":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js ***!
      \*********************************************************************/

    /*! exports provided: Device */

    /***/
    function xS7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return Device;
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


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "C6fG");

      var Device =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Device, _super);

        function Device() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Object.defineProperty(Device.prototype, "cordova", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "cordova");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "cordova", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "model", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "model");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "model", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "platform", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "platform");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "platform", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "uuid", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "uuid");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "uuid", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "version", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "version");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "version", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "manufacturer", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "manufacturer");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "manufacturer", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "isVirtual", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "isVirtual");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "isVirtual", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "serial", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "serial");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "serial", value);
          },
          enumerable: true,
          configurable: true
        });
        Device.pluginName = "Device";
        Device.plugin = "cordova-plugin-device";
        Device.pluginRef = "device";
        Device.repo = "https://github.com/apache/cordova-plugin-device";
        Device.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];

        Device.ɵfac = function Device_Factory(t) {
          return ɵDevice_BaseFactory(t || Device);
        };

        Device.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: Device,
          factory: function factory(t) {
            return Device.ɵfac(t);
          }
        });

        var ɵDevice_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Device);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Device, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return Device;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZGV2aWNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDZEQUE4QyxNQUFNLG9CQUFvQixDQUFDOztBQUNoRjtBQUllLElBd0JhLDBCQUFpQjtBQUFDO0FBQ3hCO0FBRVA7QUFFZCwwQkFGQywyQkFBTztBQUFJO0FBR2dEO0FBQ1g7QUFBMEI7QUFFckU7QUFBUSwwQkFDYix5QkFBSztBQUFJO0FBR0s7QUFHbUM7QUFDdEM7QUFHWDtBQUFRLDBCQU5SLDRCQUFRO0FBQUk7QUFHVjtBQUlEO0FBQ0s7QUFFTztBQUFRLDBCQU5yQix3QkFBSTtBQUFJO0FBSVY7QUFHZ0I7QUFDSztBQUVFO0FBQVEsMEJBTjdCLDJCQUFPO0FBQUk7QUFJUDtBQUdEO0FBQ0s7QUFFSTtBQUFRLDBCQU5wQixnQ0FBWTtBQUFJO0FBR0Q7QUFJUjtBQUNLO0FBRU87QUFBUSwwQkFOM0IsNkJBQVM7QUFBSTtBQUdLO0FBR3dDO0FBQTBCO0FBQTJCO0FBQVEsMEJBRnZILDBCQUFNO0FBQUk7QUFFcUQ7QUFBOEU7QUFBMEI7QUFBMkI7QUFBUTtBQUFrQztBQUE2QztBQUFpQztBQUFxRTtJQXBDcFgsTUFBTSx3QkFEbEIsVUFBVSxFQUFFLFFBQ0EsTUFBTTs7Ozs7MEJBQUU7QUFBQyxpQkE5QnRCO0FBQUUsRUE4QjBCLGlCQUFpQjtBQUM1QyxTQURZLE1BQU07QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgRGV2aWNlXG4gKiBAcHJlbWllciBkZXZpY2VcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1bmRlcmx5aW5nIGRldmljZSBhbmQgcGxhdGZvcm0uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZXZpY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlOiBEZXZpY2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnNvbGUubG9nKCdEZXZpY2UgVVVJRCBpczogJyArIHRoaXMuZGV2aWNlLnV1aWQpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGV2aWNlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcbiAgcGx1Z2luUmVmOiAnZGV2aWNlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXZpY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKiBHZXQgdGhlIHZlcnNpb24gb2YgQ29yZG92YSBydW5uaW5nIG9uIHRoZSBkZXZpY2UuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBjb3Jkb3ZhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkZXZpY2UubW9kZWwgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgZGV2aWNlJ3MgbW9kZWwgb3IgcHJvZHVjdC4gVGhlIHZhbHVlIGlzIHNldFxuICAgKiBieSB0aGUgZGV2aWNlIG1hbnVmYWN0dXJlciBhbmQgbWF5IGJlIGRpZmZlcmVudCBhY3Jvc3MgdmVyc2lvbnMgb2YgdGhlIHNhbWUgcHJvZHVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBtb2RlbDogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIG9wZXJhdGluZyBzeXN0ZW0gbmFtZS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHBsYXRmb3JtOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlJ3MgVW5pdmVyc2FsbHkgVW5pcXVlIElkZW50aWZpZXIgKFVVSUQpLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdXVpZDogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIG9wZXJhdGluZyBzeXN0ZW0gdmVyc2lvbi4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHZlcnNpb246IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBtYW51ZmFjdHVyZXIuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcblxuICAvKiogV2hldGhlciB0aGUgZGV2aWNlIGlzIHJ1bm5pbmcgb24gYSBzaW11bGF0b3IuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpc1ZpcnR1YWw6IGJvb2xlYW47XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlIGhhcmR3YXJlIHNlcmlhbCBudW1iZXIuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBzZXJpYWw6IHN0cmluZztcbn1cbiJdfQ==

      /***/

    }
  }]);
})();
//# sourceMappingURL=despatch-despatch-module-es5.js.map