(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.component.html */ "mTh2");
/* harmony import */ var _chat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component.scss */ "DsRI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "PLH8");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/base.component */ "qCwG");
/* harmony import */ var _shared_helpers_auth_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/helpers/auth.helper */ "SDTg");
/* harmony import */ var _shared_helpers_menu_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/helpers/menu.helper */ "VCbr");












let ChatComponent = class ChatComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"] {
    constructor(keyboard, AppR, router, cd, platform, splashScreen, statusBar, authHelper, menuHelper, navController) {
        super(keyboard, AppR, router, navController);
        this.keyboard = keyboard;
        this.AppR = AppR;
        this.router = router;
        this.cd = cd;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authHelper = authHelper;
        this.menuHelper = menuHelper;
        this.navController = navController;
        this.selectedIndex = 0;
        this.initializeApp();
        this.user = this.authHelper.getUser();
        this.navigate = this.menuHelper.getPages();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    ngOnInit() {
        const path = window.location.pathname;
        if (path !== undefined) {
            this.selectedIndex = this.navigate.findIndex(page => page.url === path.toLowerCase());
        }
    }
};
ChatComponent.ctorParameters = () => [
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _shared_helpers_auth_helper__WEBPACK_IMPORTED_MODULE_10__["AuthHelper"] },
    { type: _shared_helpers_menu_helper__WEBPACK_IMPORTED_MODULE_11__["MenuHelper"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
];
ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatComponent);



/***/ }),

/***/ "2yxt":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-routing.module */ "cC0O");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.component */ "+XlM");






let ChatModule = class ChatModule {
};
ChatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChatRoutingModule"],
        ],
        providers: []
    })
], ChatModule);



/***/ }),

/***/ "DsRI":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-menu {\n  --width: 70%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkVBQWE7QUFDakI7O0FBRUU7RUFDRSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxtQkFBYztFQUNkLHNCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGVBQWU7QUFDbkI7O0FBRUU7RUFDRSxtQkFBbUI7QUFDdkI7O0FBRUU7O0VBRUUsa0JBQWtCO0FBQ3RCOztBQUVFO0VBQ0UsMkRBQTJEO0FBQy9EOztBQUVFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUVoQixnQkFBZ0I7QUFBcEI7O0FBR0U7RUFDRSxlQUFlO0VBRWYsbUJBQW1CO0VBRW5CLGNBQWM7RUFFZCxnQkFBZ0I7QUFIcEI7O0FBTUU7RUFDRSxxQkFBZ0I7RUFDaEIsbUJBQWM7RUFDZCxrQkFBa0I7QUFIdEI7O0FBTUU7RUFDRSxzREFBYTtBQUhqQjs7QUFNRTtFQUNFLCtCQUErQjtBQUhuQzs7QUFNRTtFQUNFLGNBQWM7QUFIbEI7O0FBTUU7RUFDRSxnQkFBZ0I7QUFIcEI7O0FBTUU7RUFDRSxzQkFBaUI7QUFIckI7O0FBTUU7RUFDRSxtQkFBbUI7QUFIdkI7O0FBTUU7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBSHZCOztBQU1FO0VBQ0UscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2Qsa0JBQWE7QUFIakI7O0FBTUU7RUFDRSwrQkFBK0I7QUFIbkM7O0FBTUU7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUhsQjs7QUFNRTtFQUNFLGtCQUFrQjtBQUh0Qjs7QUFNRTs7RUFFRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBSHZCOztBQU1FO0VBQ0Usa0JBQWtCO0FBSHRCOztBQU1FO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFFZixvQ0FBb0M7QUFKeEM7O0FBT0U7RUFDRSxpQ0FBUTtBQUpaOztBQU9FO0VBQ0UsWUFBUTtBQUpaIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgXHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICBcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gIFxyXG4gICAgbWluLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzYxNmU3ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM3Mzg0OWE7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbm90ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnV7XHJcbiAgICAtLXdpZHRoOiA3MCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "VCbr":
/*!***********************************************!*\
  !*** ./src/app/shared/helpers/menu.helper.ts ***!
  \***********************************************/
/*! exports provided: MenuHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuHelper", function() { return MenuHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let MenuHelper = class MenuHelper {
    constructor() {
        this.appPages = [
            {
                title: 'Rooms',
                url: '/chat/rooms/dashboard',
                icon: 'mail'
            },
            {
                title: 'Contacts',
                url: '/chat/contacts/dashboard',
                icon: 'people'
            },
            {
                title: 'Download',
                url: '/despatch/download-apk',
                icon: 'cloud-download'
            }
        ];
    }
    getPages() {
        return this.appPages;
    }
};
MenuHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MenuHelper);



/***/ }),

/***/ "cC0O":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component */ "+XlM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [
    {
        path: '',
        redirectTo: 'rooms',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"],
        children: [
            {
                path: 'rooms',
                loadChildren: () => Promise.all(/*! import() | components-rooms-rooms-module */[__webpack_require__.e("common"), __webpack_require__.e("components-rooms-rooms-module")]).then(__webpack_require__.bind(null, /*! ./components/rooms/rooms.module */ "Psp7")).then(m => m.RoomsModule)
            },
            {
                path: 'contacts',
                loadChildren: () => Promise.all(/*! import() | components-contacts-contacts-module */[__webpack_require__.e("common"), __webpack_require__.e("components-contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./components/contacts/contacts.module */ "mIjL")).then(m => m.ContactsModule)
            }
        ]
    },
];
let ChatRoutingModule = class ChatRoutingModule {
};
ChatRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ChatRoutingModule);



/***/ }),

/***/ "mTh2":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main\">\n    <ion-menu contentId=\"main\" type=\"overlay\">\n      <ion-content main>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>Despatch</ion-list-header>\n          <ion-note>{{user.userName}}</ion-note>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of navigate; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"forward\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n      <!-- <ion-list id=\"labels-list\">\n        <ion-list-header>Labels</ion-list-header>\n\n        <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n          <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n          <ion-label>{{ label }}</ion-label>\n        </ion-item>\n      </ion-list> -->\n      <ion-footer>\n        <ion-item>\n          Exit\n        </ion-item>\n      </ion-footer>\n    </ion-menu>\n    <!-- menu -->\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n    <!-- menu -->\n  </ion-split-pane>\n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map