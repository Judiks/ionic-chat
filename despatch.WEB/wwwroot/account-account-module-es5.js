(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "8YqA":
    /*!*******************************************************************!*\
      !*** ./src/app/account/components/register/register.component.ts ***!
      \*******************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function YqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "OzeL");
      /* harmony import */


      var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.scss */
      "bYWe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "PLH8");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/base.component */
      "qCwG");
      /* harmony import */


      var src_app_shared_helpers_pipe_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/helpers/pipe.helper */
      "qZUN");
      /* harmony import */


      var src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/swagger/services/auth.service */
      "S5SI");

      var RegisterComponent = /*#__PURE__*/function (_src_app_shared_base_) {
        _inherits(RegisterComponent, _src_app_shared_base_);

        var _super = _createSuper(RegisterComponent);

        function RegisterComponent(platform, accountService, keyboard, AppR, router, navController, cd) {
          var _this;

          _classCallCheck(this, RegisterComponent);

          _this = _super.call(this, keyboard, AppR, router, navController);
          _this.platform = platform;
          _this.accountService = accountService;
          _this.keyboard = keyboard;
          _this.AppR = AppR;
          _this.router = router;
          _this.navController = navController;
          _this.cd = cd;
          _this.pipeHelper = src_app_shared_helpers_pipe_helper__WEBPACK_IMPORTED_MODULE_9__["PipeHelper"];

          _this.initData();

          _this.executePlugins();

          return _this;
        }

        _createClass(RegisterComponent, [{
          key: "initData",
          value: function initData() {
            this.codeSended = false;
            this.isVerify = false;
            this.phoneRequestCompleat = false;
            this.code = '';
            this.smsCode = '';
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[+][0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}.|[+][0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}')]),
              code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
              userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')])
            });
            this.sendSmsModel = {
              phoneNumber: '',
              hash: ''
            };
            this.user = {
              password: '',
              userName: '',
              phoneNumber: '',
              confirmPassword: '',
              email: '',
              role: 0
            };
          }
        }, {
          key: "executePlugins",
          value: function executePlugins() {
            var _this2 = this;

            this.platform.ready().then(function () {
              // get phone number
              cordova.plugins.PhoneData.getData(function (result) {
                _this2.sendSmsModel.phoneNumber = src_app_shared_helpers_pipe_helper__WEBPACK_IMPORTED_MODULE_9__["PipeHelper"].phoneMask(result, '');
                _this2.user.phoneNumber = _this2.sendSmsModel.phoneNumber;

                _this2.form.controls.phoneNumber.setValue(_this2.sendSmsModel.phoneNumber);

                _this2.refresh();
              }, function (err) {
                _this2.phoneRequestCompleat = true;
                console.log(err);
              }); // get app hash

              SMSRetriever.getHashString(function (hash) {
                _this2.sendSmsModel.hash = hash;
              }, function (err) {
                console.log(err);
              });
            });
          }
        }, {
          key: "onSendSms",
          value: function onSendSms() {
            var _this3 = this;

            // send sms with verification code
            this.accountService.AuthSendRegisterSMS(this.sendSmsModel).subscribe(function (code) {
              _this3.code = code;
              _this3.codeSended = true; // start scan incoming sms

              SMSRetriever.startWatch(function (message) {
                if (message.match(/\d{6}/g)) {
                  _this3.smsCode = message.match(/\d{6}/)[0];

                  _this3.form.controls.code.setValue(_this3.smsCode);

                  _this3.refresh();
                }
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "checkUserName",
          value: function checkUserName() {
            var _this4 = this;

            if (!this.user.userName) {
              return;
            }

            var subscription = this.accountService.AuthCheckUserName(this.user.userName).subscribe(function (result) {
              if (!result) {
                _this4.form.controls.userName.setErrors({
                  incorrect: true
                });
              } else {
                _this4.form.controls.userName.setErrors(null);
              }

              _this4.refresh();

              subscription.unsubscribe();
            });
          }
        }, {
          key: "checkEmail",
          value: function checkEmail() {
            var _this5 = this;

            if (!this.user.email) {
              return;
            }

            var subscription = this.accountService.AuthCheckUserEmail(this.user.email).subscribe(function (result) {
              if (!result) {
                _this5.form.controls.email.setErrors({
                  incorrect: true
                });
              } else {
                _this5.form.controls.email.setErrors(null);
              }

              _this5.refresh();

              subscription.unsubscribe();
            });
          }
        }, {
          key: "onCheckSmsCode",
          value: function onCheckSmsCode() {
            if (this.smsCode === this.code) {
              this.isVerify = true;
            } else {
              this.form.controls.code.setErrors({
                incorrect: true
              });
            }

            this.refresh();
          }
        }, {
          key: "checkPassword",
          value: function checkPassword() {
            if (this.user.password === this.user.confirmPassword) {
              this.form.controls.password.setErrors(null);
              this.form.controls.confirmPassword.setErrors(null);
            } else {
              this.form.controls.password.setErrors({
                incorrect: true
              });
              this.form.controls.confirmPassword.setErrors({
                incorrect: true
              });
            }

            this.refresh();
          }
        }, {
          key: "onSignUpClick",
          value: function onSignUpClick() {
            var _this6 = this;

            this.accountService.AuthRegister(this.user).subscribe(function (user) {
              _this6.redirectToLogin();
            });
          } // refresh HTML directives

        }, {
          key: "refresh",
          value: function refresh() {
            this.cd.detectChanges();
          }
        }]);

        return RegisterComponent;
      }(src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"]);

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterComponent);
      /***/
    },

    /***/
    "Od+1":
    /*!***************************************************************!*\
      !*** ./src/app/account/components/login/login.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function Od1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media (orientation: landscape) {\n  .logo-path {\n    display: flex;\n    width: 50%;\n    height: 100vh;\n    padding: 5%;\n    border-right: 2px solid var(--ion-color-primary);\n  }\n  .login-path {\n    height: 100%;\n    display: flex;\n    max-width: 100%;\n    width: 50%;\n    margin: auto;\n  }\n  .login-path-keyboard-active {\n    width: 100% !important;\n    height: 100vh !important;\n  }\n  .keyboard-login-container-setting {\n    width: 100% !important;\n    padding-top: 0% !important;\n  }\n  .login-container {\n    width: 70%;\n    margin: auto;\n    padding-top: 5%;\n  }\n  .login-img {\n    margin: auto;\n    vertical-align: middle;\n    height: 100%;\n    max-width: 100%;\n  }\n  .login-button-keyboard-active {\n    font-size: 6vh !important;\n  }\n  .login-button {\n    font-size: 3vh;\n  }\n  .login-small-text-keyboard-active {\n    font-size: 6vh !important;\n  }\n  .login-small-text {\n    font-size: 3vh;\n  }\n  .login-title-keyboard-active {\n    font-size: 9vh !important;\n  }\n  .login-title {\n    font-size: 6vh;\n    color: var(--primary);\n  }\n  .login-page {\n    height: 100%;\n    width: 100vw;\n    display: inline-flex;\n  }\n}\n\n@media (orientation: portrait) {\n  .login-container {\n    width: 80%;\n    margin: auto;\n    padding-top: 5%;\n  }\n  .login-path {\n    height: 100vh;\n  }\n  .logo-path {\n    padding-left: 25%;\n    padding-right: 25%;\n    padding-top: 10%;\n    padding-bottom: 10%;\n    border-bottom: 2px solid var(--ion-color-primary);\n  }\n  .login-footer {\n    margin-top: 20%;\n  }\n  .login-img {\n    margin: auto;\n    height: 20vh;\n    max-width: 100%;\n  }\n  .login-button {\n    font-size: 4vw;\n  }\n  .login-small-text {\n    font-size: 4vw;\n  }\n  .login-title {\n    font-size: 7vw;\n    color: var(--primary);\n  }\n}\n\nion-slides div.swiper-wrapper {\n  justify-content: center !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0RBQWdEO0VBQXREO0VBR0U7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtFQURsQjtFQUlFO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtFQUY5QjtFQUtFO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtFQUhoQztFQU1FO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0VBSnJCO0VBT0U7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0VBTHJCO0VBUUU7SUFDSSx5QkFBeUI7RUFOL0I7RUFTRTtJQUNJLGNBQWM7RUFQcEI7RUFVRTtJQUNJLHlCQUF5QjtFQVIvQjtFQVdFO0lBQ0ksY0FBYztFQVRwQjtFQVlFO0lBQ0kseUJBQXlCO0VBVi9CO0VBYUU7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0VBWDNCO0VBY0U7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtFQVoxQjtBQUNGOztBQWVBO0VBQ0k7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7RUFackI7RUFlRTtJQUNJLGFBQWE7RUFibkI7RUFnQkU7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaURBQWlEO0VBZHZEO0VBaUJFO0lBQ0ksZUFBZTtFQWZyQjtFQWtCRTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtFQWhCckI7RUFtQkU7SUFDSSxjQUFjO0VBakJwQjtFQW9CRTtJQUNJLGNBQWM7RUFsQnBCO0VBcUJFO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtFQW5CM0I7QUFDRjs7QUF3QkE7RUFDSSxrQ0FBa0M7QUFyQnRDIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHJcbiAgICAubG9nby1wYXRoIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLXBhdGgge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tcGF0aC1rZXlib2FyZC1hY3RpdmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5rZXlib2FyZC1sb2dpbi1jb250YWluZXItc2V0dGluZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWltZyB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tYnV0dG9uLWtleWJvYXJkLWFjdGl2ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2dmggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLXNtYWxsLXRleHQta2V5Ym9hcmQtYWN0aXZlIHtcclxuICAgICAgICBmb250LXNpemU6IDZ2aCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1zbWFsbC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDN2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luLXRpdGxlLWtleWJvYXJkLWFjdGl2ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5dmggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnZoO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tcGFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1wYXRoIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvLXBhdGgge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWltZyB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMjB2aDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbi1zbWFsbC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDd2dztcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmlvbi1zbGlkZXMgZGl2LnN3aXBlci13cmFwcGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "OzeL":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/components/register/register.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OzeL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-nav class='app-page'>\r\n  <ion-item lines=\"none\" [ngClass]='{\"keyboard-none-setting\":isKeyboardActive}' class='logo-path'>\r\n    <ion-img class='app-img' src='assets/img/logo_despatch.jpg'></ion-img>\r\n  </ion-item>\r\n  <div class='app-path' [ngClass]='{\"app-path-keyboard-active\":isKeyboardActive}'>\r\n    <div [formGroup]='form'\r\n      [ngClass]='{\"keyboard-app-container-setting\":isKeyboardActive, \"app-container\": !isKeyboardActive}'>\r\n      <div>\r\n        <ion-title\r\n          [ngClass]='{\"app-title-keyboard-active\":isKeyboardActive, \"keyboard-none-setting\": isKeyboardActive && isVerify}'\r\n          class='app-title' slot='primary'>Sign Up\r\n        </ion-title>\r\n      </div>\r\n\r\n      <div *ngIf='!codeSended'>\r\n        <ion-item class='mt-2'>\r\n          <ion-label [ngClass]='{\"app-small-text-keyboard-active\":isKeyboardActive}' class='app-small-text'\r\n            position=\"floating\">Phone Number</ion-label>\r\n          <ion-input [ngModel]='sendSmsModel.phoneNumber' class='mask-phone' formControlName='phoneNumber' type='text'\r\n            (input)='$event.target.value = pipeHelper.phoneMask($event.target.value, sendSmsModel.phoneNumber);\r\n           sendSmsModel.phoneNumber = pipeHelper.phoneMask($event.target.value, sendSmsModel.phoneNumber);'>\r\n          </ion-input>\r\n        </ion-item>\r\n        <div lines='none' class='mt-2 d-flex justify-content-end'>\r\n          <ion-button [disabled]='form.controls[\"phoneNumber\"].invalid' class='app-button'\r\n            [ngClass]='{\"app-button-keyboard-active\":isKeyboardActive}' (click)='onSendSms()' icon-only shape=\"round\">\r\n            <ion-icon class='app-icon-arrow' name='arrow-forward'></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf='codeSended && !isVerify'>\r\n        <ion-item class='mt-2'>\r\n          <ion-label [ngClass]='{\"app-small-text-keyboard-active\":isKeyboardActive}' class='app-small-text'\r\n            position=\"floating\">You Verification Code</ion-label>\r\n          <ion-input [(ngModel)]='smsCode' (appDebounce)='onCheckSmsCode()' class='mask-phone' formControlName='code'\r\n            type='text' id='smsCode'>\r\n          </ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div *ngIf='isVerify'>\r\n        <ion-item class='mt-2'>\r\n          <ion-label [ngClass]='{\"app-small-text-keyboard-active\":isKeyboardActive}' class='app-small-text'\r\n            position=\"floating\">User Name</ion-label>\r\n          <ion-input [(ngModel)]='user.userName' (ngModelChange)='checkUserName()' formControlName='userName' type='text'>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item class='mt-2'>\r\n          <ion-label [ngClass]='{\"app-small-text-keyboard-active\":isKeyboardActive}' class='app-small-text'\r\n            position=\"floating\">Email</ion-label>\r\n          <ion-input [(ngModel)]='user.email' (ngModelChange)='checkEmail()' formControlName='email' type='text'>\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item class='mt-2'>\r\n          <ion-label [ngClass]='{\"app-small-text-keyboard-active\":isKeyboardActive}' class='app-small-text'\r\n            position=\"floating\">Password</ion-label>\r\n          <ion-input [(ngModel)]='user.password' formControlName='password' type='password'  (ngModelChange)='checkPassword()'>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item class='mt-2'>\r\n          <ion-label [ngClass]='{\"app-small-text-keyboard-active\":isKeyboardActive}' class='app-small-text'\r\n            position=\"floating\">Confirm Password</ion-label>\r\n          <ion-input [(ngModel)]='user.confirmPassword' formControlName='confirmPassword' type='password' (ngModelChange)='checkPassword()'>\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <div lines='none' class='mt-2 d-flex justify-content-end'>\r\n          <ion-button class='app-button' [ngClass]='{\"app-button-keyboard-active\":isKeyboardActive}'\r\n            (click)='onSignUpClick()' icon-only shape=\"round\" [disabled]='form.invalid'>\r\n            <ion-icon class='app-icon-arrow' name='arrow-forward'></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-nav>";
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./directives/debounce.directive */
      "RcLV");
      /* harmony import */


      var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./base.component */
      "qCwG");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_directives_debounce_directive__WEBPACK_IMPORTED_MODULE_2__["DebounceDirective"], _base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]],
        imports: [],
        entryComponents: [],
        exports: [_directives_debounce_directive__WEBPACK_IMPORTED_MODULE_2__["DebounceDirective"]],
        providers: []
      })], SharedModule);
      /***/
    },

    /***/
    "Q+c/":
    /*!*************************************************************!*\
      !*** ./src/app/account/components/login/login.component.ts ***!
      \*************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "auXv");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.scss */
      "Od+1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "PLH8");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/base.component */
      "qCwG");
      /* harmony import */


      var src_app_shared_helpers_auth_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/helpers/auth.helper */
      "SDTg");
      /* harmony import */


      var src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/swagger/services/auth.service */
      "S5SI");

      var LoginComponent = /*#__PURE__*/function (_src_app_shared_base_2) {
        _inherits(LoginComponent, _src_app_shared_base_2);

        var _super2 = _createSuper(LoginComponent);

        function LoginComponent(keyboard, AppR, router, cd, authService, authHelper, navController) {
          var _this7;

          _classCallCheck(this, LoginComponent);

          _this7 = _super2.call(this, keyboard, AppR, router, navController);
          _this7.keyboard = keyboard;
          _this7.AppR = AppR;
          _this7.router = router;
          _this7.cd = cd;
          _this7.authService = authService;
          _this7.authHelper = authHelper;
          _this7.navController = navController;
          _this7.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
          });
          _this7.loginRequest = {
            password: null,
            login: null
          };
          return _this7;
        }

        _createClass(LoginComponent, [{
          key: "onSignInClick",
          value: function onSignInClick() {
            var _this8 = this;

            this.authService.AuthLogin(this.loginRequest).subscribe(function (result) {
              _this8.authHelper.setUserOnLogin(result);

              _this8.redirectToRooms();
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return LoginComponent;
      }(src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"]);

      LoginComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
        }, {
          type: src_app_shared_helpers_auth_helper__WEBPACK_IMPORTED_MODULE_9__["AuthHelper"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "RcLV":
    /*!*********************************************************!*\
      !*** ./src/app/shared/directives/debounce.directive.ts ***!
      \*********************************************************/

    /*! exports provided: DebounceDirective */

    /***/
    function RcLV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DebounceDirective", function () {
        return DebounceDirective;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var DebounceDirective = /*#__PURE__*/function () {
        function DebounceDirective(model) {
          _classCallCheck(this, DebounceDirective);

          this.model = model;
          this.appDebounce = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-next-line: no-input-rename

          this.debounceTime = 500;
        }

        _createClass(DebounceDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.subscription = this.model.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounceTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (modelValue) {
              _this9.appDebounce.emit(modelValue);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return DebounceDirective;
      }();

      DebounceDirective.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]
        }];
      };

      DebounceDirective.propDecorators = {
        appDebounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        debounceTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['debounceTime']
        }]
      };
      DebounceDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngModel][appDebounce]'
      })], DebounceDirective);
      /***/
    },

    /***/
    "auXv":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/components/login/login.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function auXv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div #component class='login-page'>\r\n    <ion-item lines=\"none\" [ngClass]='{\"keyboard-none-setting\":isKeyboardActive}' class='logo-path'>\r\n        <ion-img class='login-img' src='assets/img/logo_despatch.jpg'></ion-img>\r\n    </ion-item>\r\n    <div [formGroup]='form' class='login-path' [ngClass]='{\"login-path-keyboard-active\":isKeyboardActive}'>\r\n        <div class='login-container' [ngClass]='{\"keyboard-login-container-setting\":isKeyboardActive}'>\r\n            <div>\r\n                <ion-title [ngClass]='{\"login-title-keyboard-active\":isKeyboardActive}' class='login-title'\r\n                    slot='primary'>Sign In</ion-title>\r\n            </div>\r\n            <ion-item class='mt-2'>\r\n                <ion-label [ngClass]='{\"login-small-text-keyboard-active\":isKeyboardActive}' class='login-small-text'\r\n                    position=\"floating\">Login</ion-label>\r\n                <ion-input [(ngModel)]='loginRequest.login' formControlName='login' type='text'></ion-input>\r\n            </ion-item>\r\n            <ion-item class='mt-2'>\r\n                <ion-label [ngClass]='{\"login-small-text-keyboard-active\":isKeyboardActive}' class='login-small-text'\r\n                    position=\"floating\">Password</ion-label>\r\n                <ion-input [(ngModel)]='loginRequest.password' formControlName='password' type='password'></ion-input>\r\n            </ion-item>\r\n            <div lines='none' class='mt-2 text-center'>\r\n                <ion-button [ngClass]='{\"login-button-keyboard-active\":isKeyboardActive}' class='login-button'\r\n                    size='large' expand=\"block\" (click)='onSignInClick()' icon-only [disabled]='form.invalid'>\r\n                    Sign In\r\n                </ion-button>\r\n            </div>\r\n            <div lines='none' class='mt-2 text-center'>\r\n                <ion-button [ngClass]='{\"login-button-keyboard-active\":isKeyboardActive}' class='login-button'\r\n                    size='small' (click)='redirectToRegister()' color='secondary'>Sign Up</ion-button>\r\n                <ion-button [ngClass]='{\"login-button-keyboard-active\":isKeyboardActive}' class='login-button'\r\n                    size='small' (click)='onSignInClick()' icon-only color=\"tertiary\">\r\n                    <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n                </ion-button>\r\n            </div>\r\n            <div [ngClass]='{\"keyboard-none-setting\":isKeyboardActive}' class='login-footer  text-center mt-2'>\r\n                <a class='login-small-text'> Forgot password?</a>\r\n            </div>\r\n            <ion-slides direction=\"vertical\" lines='none' class='mt-2 text-center'>\r\n                <ion-button fill='outline' [ngClass]='{\"keyboard-none-setting\":isKeyboardActive}' class='login-button'\r\n                    size='small' icon-only>\r\n                    <ion-icon name=\"logo-google\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button fill='outline' [ngClass]='{\"keyboard-none-setting\":isKeyboardActive}' class='login-button'\r\n                    size='small' icon-only>\r\n                    <ion-icon name=\"logo-facebook\"></ion-icon>\r\n                </ion-button>\r\n            </ion-slides>\r\n        </div>\r\n    </div>";
      /***/
    },

    /***/
    "bYWe":
    /*!*********************************************************************!*\
      !*** ./src/app/account/components/register/register.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function bYWe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "heGf":
    /*!**********************************************!*\
      !*** ./src/app/account/account.component.ts ***!
      \**********************************************/

    /*! exports provided: AccountComponent */

    /***/
    function heGf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
        return AccountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AccountComponent = /*#__PURE__*/function () {
        function AccountComponent() {
          _classCallCheck(this, AccountComponent);
        }

        _createClass(AccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AccountComponent;
      }();

      AccountComponent.ctorParameters = function () {
        return [];
      };

      AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: "<ion-router-outlet class='position-absolute'></ion-router-outlet>"
      })], AccountComponent);
      /***/
    },

    /***/
    "jcJX":
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /*! exports provided: AccountModule */

    /***/
    function jcJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
        return AccountModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "sGj0");
      /* harmony import */


      var _account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.component */
      "heGf");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/login/login.component */
      "Q+c/");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/register/register.component */
      "8YqA");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");

      var AccountModule = function AccountModule() {
        _classCallCheck(this, AccountModule);
      };

      AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]],
        providers: []
      })], AccountModule);
      /***/
    },

    /***/
    "kl6M":
    /*!********************************************!*\
      !*** ./src/app/shared/guards/auth.guar.ts ***!
      \********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function kl6M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "qZUN":
    /*!***********************************************!*\
      !*** ./src/app/shared/helpers/pipe.helper.ts ***!
      \***********************************************/

    /*! exports provided: PipeHelper */

    /***/
    function qZUN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipeHelper", function () {
        return PipeHelper;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var PipeHelper = /*#__PURE__*/function () {
        function PipeHelper() {
          _classCallCheck(this, PipeHelper);
        }

        _createClass(PipeHelper, null, [{
          key: "blurHelper",
          value: function blurHelper(newValue, oldValue, type) {
            if (newValue === '') {
              switch (type) {
                case 0:
                  {
                    return new Intl.NumberFormat('en-US', {
                      style: 'percent'
                    }).format(oldValue);
                  }

                case 1:
                  {
                    return new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      currencyDisplay: 'symbol'
                    }).format(oldValue);
                  }

                case 2:
                  {
                    return new Intl.NumberFormat('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }).format(oldValue);
                  }
              }
            } else {
              return newValue;
            }
          }
        }, {
          key: "currencyHelper",
          value: function currencyHelper(value, oldValue) {
            if (value === '') {
              return Number(oldValue);
            } else {
              return Number(value);
            }
          }
        }, {
          key: "calibrationPipeHelper",
          value: function calibrationPipeHelper(value, oldValue) {
            if (value === new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).format(oldValue)) {
              return oldValue;
            }

            if (value === '') {
              return Number(oldValue);
            } else {
              return Number(value);
            }
          }
        }, {
          key: "percentHelper",
          value: function percentHelper(value, oldValue) {
            if (value === '') {
              return Number(oldValue) / 100;
            } else {
              return Number(value) / 100;
            }
          }
        }, {
          key: "phoneMask",
          value: function phoneMask(value, prevValue) {
            var result = '+';
            var letters = '';

            if (value.length < prevValue.length) {
              if (value[value.length] === ' ') {
                return value.slice(value.length - 1, value.length);
              } else {
                return value;
              }
            }

            value = value.replace(/\s/g, '');
            value = value.split('-').join('');
            value = value.split('+').join('');

            if (value.length > 0) {
              result += value.slice(0, 3) + ' ';
              letters = value.slice(3, value.length);
            }

            if (value.length > 4) {
              result += value.slice(3, 5) + ' ';
              letters = value.slice(5, value.length);
            }

            if (value.length > 6) {
              result += value.slice(5, 8) + ' ';
              letters = value.slice(8, value.length);
            }

            if (value.length > 11) {
              result += value.slice(8, 12);
              return result;
            }

            return result + letters;
          }
        }]);

        return PipeHelper;
      }();

      PipeHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PipeHelper);
      /***/
    },

    /***/
    "sGj0":
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AccountRoutingModule */

    /***/
    function sGj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
        return AccountRoutingModule;
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


      var _shared_guards_auth_guar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/guards/auth.guar */
      "kl6M");
      /* harmony import */


      var _account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./account.component */
      "heGf");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/login/login.component */
      "Q+c/");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/register/register.component */
      "8YqA");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"],
        children: [{
          path: 'login',
          component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
          canActivate: [_shared_guards_auth_guar__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }, {
          path: 'register',
          component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
          canActivate: [_shared_guards_auth_guar__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }]
      }];

      var AccountRoutingModule = function AccountRoutingModule() {
        _classCallCheck(this, AccountRoutingModule);
      };

      AccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map