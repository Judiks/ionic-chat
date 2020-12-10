(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-rooms-rooms-module"],{

/***/ "+OVt":
/*!*********************************************************************************************!*\
  !*** ./src/app/chat/components/rooms/components/room-dashboard/room-dashboard.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RoomsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsDashboardComponent", function() { return RoomsDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_room_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./room-dashboard.component.html */ "ivFO");
/* harmony import */ var _room_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-dashboard.component.scss */ "0Syt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "PLH8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/base.component */ "qCwG");
/* harmony import */ var src_app_shared_helpers_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/helpers/auth.helper */ "SDTg");
/* harmony import */ var src_app_shared_helpers_room_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/helpers/room.helper */ "22HP");
/* harmony import */ var src_swagger_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/swagger/services */ "yTWy");











let RoomsDashboardComponent = class RoomsDashboardComponent extends src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"] {
    constructor(keyboard, AppR, router, cd, roomService, navController, authHelper, roomHelper) {
        super(keyboard, AppR, router, navController);
        this.keyboard = keyboard;
        this.AppR = AppR;
        this.router = router;
        this.cd = cd;
        this.roomService = roomService;
        this.navController = navController;
        this.authHelper = authHelper;
        this.roomHelper = roomHelper;
        this.rooms = new Array();
    }
    ionViewWillEnter() {
        this.rooms = new Array();
        this.getRoomsData(null);
    }
    getRoomsData(event) {
        const request = {
            skipCount: this.rooms.length,
            userId: this.authHelper.getUser().id
        };
        this.roomService.RoomGetUserRooms(request).subscribe((result) => {
            console.log(result);
            this.rooms = [...this.rooms, ...result];
            this.rooms.forEach(x => {
                this.colors.push(this.getRandomColor());
            });
            if (event) {
                event.target.complete();
            }
        }, err => {
            console.log(err);
        });
    }
    joinRoom(room) {
        this.roomHelper.setRoom(room);
        this.redirectToRoom();
    }
};
RoomsDashboardComponent.ctorParameters = () => [
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: src_swagger_services__WEBPACK_IMPORTED_MODULE_10__["RoomService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_shared_helpers_auth_helper__WEBPACK_IMPORTED_MODULE_8__["AuthHelper"] },
    { type: src_app_shared_helpers_room_helper__WEBPACK_IMPORTED_MODULE_9__["RoomHelper"] }
];
RoomsDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rooms-dashboard',
        template: _raw_loader_room_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_room_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoomsDashboardComponent);



/***/ }),

/***/ "0Syt":
/*!***********************************************************************************************!*\
  !*** ./src/app/chat/components/rooms/components/room-dashboard/room-dashboard.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-icon-container {\n  position: absolute;\n  right: 5%;\n  bottom: 5%;\n}\n\n.add-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 4vh;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.add-icon {\n  margin: 2vh;\n  font-size: 4vh;\n}\n\n.app-header {\n  font-size: 2.5vh;\n  padding: 2vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jb21wb25lbnRzL3Jvb21zL2NvbXBvbmVudHMvcm9vbS1kYXNoYm9hcmQvcm9vbS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDZDs7QUFFRTtFQUNFLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLFlBQVk7RUFDWiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFRTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2xCOztBQUVFO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NvbXBvbmVudHMvcm9vbXMvY29tcG9uZW50cy9yb29tLWRhc2hib2FyZC9yb29tLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtaWNvbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLmFkZC1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA0dmg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLmFkZC1pY29uIHtcclxuICAgIG1hcmdpbjogMnZoO1xyXG4gICAgZm9udC1zaXplOiA0dmg7XHJcbiAgfVxyXG5cclxuICAuYXBwLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIuNXZoO1xyXG4gICAgcGFkZGluZzogMnZoO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "81hW":
/*!*************************************************************************!*\
  !*** ./src/app/chat/components/rooms/components/room/room.component.ts ***!
  \*************************************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_room_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./room.component.html */ "iCdC");
/* harmony import */ var _room_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room.component.scss */ "Alr6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_helpers_room_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/room.helper */ "22HP");
/* harmony import */ var src_swagger_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/swagger/services */ "yTWy");






let RoomComponent = class RoomComponent {
    constructor(roomHelper, authService, roomService) {
        this.roomHelper = roomHelper;
        this.authService = authService;
        this.roomService = roomService;
        this.room = {};
        this.isAutoGrow = true;
        this.isActiveRoom = false;
    }
    ionViewWillEnter() {
        this.initData();
    }
    initData() {
        const result = this.roomHelper.getRoom();
        this.room = JSON.parse(JSON.stringify(result));
        const request = {
            roomId: this.room.id
        };
        this.roomService.RoomGetRoomContacts(request).subscribe((response) => {
            this.room.contacts = response.contacts;
        });
    }
    checkCols(event) {
        if (event.target.clientHeight > 130) {
            this.isAutoGrow = false;
        }
    }
    getTextareaPlaceholder() {
        if (this.isActiveRoom) {
            return 'Message';
        }
        else {
            return 'User is inactive';
        }
    }
    sendInvitationSMS() {
        const request = {
            contactId: this.room.contacts[0].id
        };
        this.authService.AuthSendInvitationSMS(request).subscribe();
    }
};
RoomComponent.ctorParameters = () => [
    { type: src_app_shared_helpers_room_helper__WEBPACK_IMPORTED_MODULE_4__["RoomHelper"] },
    { type: src_swagger_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_swagger_services__WEBPACK_IMPORTED_MODULE_5__["RoomService"] }
];
RoomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-room',
        template: _raw_loader_room_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_room_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoomComponent);



/***/ }),

/***/ "87Dr":
/*!*******************************************************************************************!*\
  !*** ./src/app/chat/components/rooms/components/room-contacts/room-contacts.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RoomsContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsContactsComponent", function() { return RoomsContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_room_contacts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./room-contacts.component.html */ "Ob1X");
/* harmony import */ var _room_contacts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-contacts.component.scss */ "ybZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "PLH8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/base.component */ "qCwG");
/* harmony import */ var src_swagger_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/swagger/services */ "yTWy");









let RoomsContactsComponent = class RoomsContactsComponent extends src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"] {
    constructor(keyboard, AppR, router, cd, contactService, navController) {
        super(keyboard, AppR, router, navController);
        this.keyboard = keyboard;
        this.AppR = AppR;
        this.router = router;
        this.cd = cd;
        this.contactService = contactService;
        this.navController = navController;
    }
    ngOnInit() {
    }
};
RoomsContactsComponent.ctorParameters = () => [
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: src_swagger_services__WEBPACK_IMPORTED_MODULE_8__["ContactService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
RoomsContactsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rooms-contacts',
        template: _raw_loader_room_contacts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_room_contacts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoomsContactsComponent);



/***/ }),

/***/ "8Jm/":
/*!*******************************************************************************************!*\
  !*** ./src/app/chat/components/rooms/components/room-creating/room-creating.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RoomCreatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomCreatingComponent", function() { return RoomCreatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_room_creating_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./room-creating.component.html */ "q0G9");
/* harmony import */ var _room_creating_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-creating.component.scss */ "nGTW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_swagger_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/swagger/services */ "yTWy");





let RoomCreatingComponent = class RoomCreatingComponent {
    constructor(roomService) {
        this.roomService = roomService;
        this.roomRequest = {};
    }
    ngOnInit() { }
};
RoomCreatingComponent.ctorParameters = () => [
    { type: src_swagger_services__WEBPACK_IMPORTED_MODULE_4__["RoomService"] }
];
RoomCreatingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-room-creating',
        template: _raw_loader_room_creating_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_room_creating_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoomCreatingComponent);



/***/ }),

/***/ "Alr6":
/*!***************************************************************************!*\
  !*** ./src/app/chat/components/rooms/components/room/room.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message-textarea {\n  background-color: #f4f3f7;\n}\n\n.not-join-p {\n  color: var(--ion-color-warning);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jb21wb25lbnRzL3Jvb21zL2NvbXBvbmVudHMvcm9vbS9yb29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQW9DO0FBQXhDOztBQUdBO0VBQ0ksK0JBQStCO0FBQW5DIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jb21wb25lbnRzL3Jvb21zL2NvbXBvbmVudHMvcm9vbS9yb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtdGV4dGFyZWEge1xyXG4gICAgLy9oZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQzLCAyNDcpO1xyXG59XHJcblxyXG4ubm90LWpvaW4tcCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG59Il19 */");

/***/ }),

/***/ "Ob1X":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/components/rooms/components/room-contacts/room-contacts.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Psp7":
/*!*******************************************************!*\
  !*** ./src/app/chat/components/rooms/rooms.module.ts ***!
  \*******************************************************/
/*! exports provided: RoomsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsModule", function() { return RoomsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _rooms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms.component */ "UOZM");
/* harmony import */ var _rooms_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms-routing.module */ "pTzW");
/* harmony import */ var _components_room_dashboard_room_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/room-dashboard/room-dashboard.component */ "+OVt");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/room/room.component */ "81hW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_room_contacts_room_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/room-contacts/room-contacts.component */ "87Dr");









let RoomsModule = class RoomsModule {
};
RoomsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _rooms_component__WEBPACK_IMPORTED_MODULE_3__["RoomsComponent"],
            _components_room_room_component__WEBPACK_IMPORTED_MODULE_6__["RoomComponent"],
            _components_room_dashboard_room_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["RoomsDashboardComponent"],
            _components_room_contacts_room_contacts_component__WEBPACK_IMPORTED_MODULE_8__["RoomsContactsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(),
            _rooms_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoomsRoutingModule"]
        ]
    })
], RoomsModule);



/***/ }),

/***/ "UOZM":
/*!**********************************************************!*\
  !*** ./src/app/chat/components/rooms/rooms.component.ts ***!
  \**********************************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let RoomsComponent = class RoomsComponent {
    constructor() { }
    ngOnInit() { }
};
RoomsComponent.ctorParameters = () => [];
RoomsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rooms',
        template: `<ion-router-outlet ></ion-router-outlet>`
    })
], RoomsComponent);



/***/ }),

/***/ "iCdC":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/components/rooms/components/room/room.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"app-header\">{{ room.name }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div *ngIf='!isActiveRoom'>\r\n  <div class=\"text-center justify-content-center m-auto\">\r\n    <ion-img class=\"w-50  m-auto \" src='assets/svg/device-messaging.svg'>\r\n    </ion-img>\r\n    <div class='mt-4'>\r\n      <p class='luckiest-guy-font not-join-p'>User has not joined Despatch yet :c</p>\r\n      <p class='warning-description'>Do you want to send an invitation to join the conversation.</p>\r\n      <ion-button (click)='sendInvitationSMS()'>Send invitation SMS</ion-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ion-content *ngIf='isActiveRoom'>\r\n  <!-- <div *ngIf='contacts.length == 0' class=\"h-100 d-flex\">\r\n      <div class=\"text-center justify-content-center m-auto\">\r\n        <ion-img class=' m-auto w-75 h-75 not-have-img' src='assets/img/icons-contacts.png'></ion-img>\r\n        <ion-label class=\"luckiest-guy-font not-have-label\">You may not have contacts yet.</ion-label>\r\n        <p class='not-have-p'>Do you want to sync them from your device?</p>\r\n        <ion-button (click)='syncContacts()'>Sync device contact</ion-button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf='contacts.length > 0'>\r\n      <div *ngFor=\"let contact of contacts; index as i\">\r\n        <div class=\"item-item\">\r\n          <div class='d-flex'>\r\n            <div class='d-flex w-25 item-container-img'>\r\n              <ion-img *ngIf='contact.contactData?.images[0]?.image?.deviceUrl.path' class=\"w-75 h-75 m-auto item-img\"\r\n                [src]='sanitizeImage(contact.contactData?.images[0]?.image?.deviceUrl.path)'></ion-img>\r\n              <div *ngIf='!contact.contactData?.images[0]?.image?.deviceUrl.path'\r\n                class=\"w-75 h-75 m-auto item-container-img\">\r\n                <div class=\"d-flex w-100 h-100 item-img\" [ngStyle]=\"{'background-color': colors[i] }\">\r\n                  <div class='item-phonetic'>\r\n                    {{ getPhonetic(contact) }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class='w-75 item-data' (click)='joinContactRoom(contact)'>\r\n              <div class='item-name'>\r\n                {{ contact.contactData.displayName }}\r\n              </div>\r\n              <div class='item-last-message'>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"getContactsData($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll> -->\r\n</ion-content>\r\n<ion-footer class=\"message-textarea\">\r\n  <ion-textarea [disabled]='!isActiveRoom' [placeholder]=\"getTextareaPlaceholder()\" spellcheck='true' rows='1'\r\n    [autoGrow]='isAutoGrow' (ionInput)='checkCols($event)'>\r\n\r\n  </ion-textarea>\r\n</ion-footer>");

/***/ }),

/***/ "ivFO":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/components/rooms/components/room-dashboard/room-dashboard.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"app-header\">Rooms</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf='rooms.length > 0'>\n    <div *ngFor=\"let room of rooms; index as i\">\n      <div class=\"item-item\">\n        <div class='d-flex'>\n          <div class='d-flex w-25 item-container-img'>\n            <ion-img *ngIf='room.images[0]?.deviceUrl.path' class=\"w-75 h-75 m-auto item-img\"\n              [src]='sanitizeImage(room.images[0]?.deviceUrl.path)'></ion-img>\n            <div *ngIf='!room.images[0]?.deviceUrl.path'\n              class=\"w-75 h-75 m-auto item-container-img\">\n              <div class=\"d-flex w-100 h-100 item-img\" [ngStyle]=\"{'background-color': colors[i] }\">\n                <div class='item-phonetic'>\n                  {{ room.name[0] }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class='w-75 item-data' (click)='joinRoom(room)'>\n            <div class='item-name'>\n              {{ room.name }}\n            </div>\n            <div class='item-last-message'>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"getRoomsData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<div class=\"add-icon-container\">\n  <ion-button class=\"add-button\" icon-only shape=\"round\">\n    <ion-icon class=\"add-icon\" name=\"pencil\"></ion-icon>\n  </ion-button>\n</div>");

/***/ }),

/***/ "nGTW":
/*!*********************************************************************************************!*\
  !*** ./src/app/chat/components/rooms/components/room-creating/room-creating.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy9yb29tcy9jb21wb25lbnRzL3Jvb20tY3JlYXRpbmcvcm9vbS1jcmVhdGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pTzW":
/*!***************************************************************!*\
  !*** ./src/app/chat/components/rooms/rooms-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RoomsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsRoutingModule", function() { return RoomsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_room_contacts_room_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/room-contacts/room-contacts.component */ "87Dr");
/* harmony import */ var _components_room_creating_room_creating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/room-creating/room-creating.component */ "8Jm/");
/* harmony import */ var _components_room_dashboard_room_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/room-dashboard/room-dashboard.component */ "+OVt");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/room/room.component */ "81hW");
/* harmony import */ var _rooms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rooms.component */ "UOZM");








const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _rooms_component__WEBPACK_IMPORTED_MODULE_7__["RoomsComponent"],
        children: [
            {
                path: 'dashboard',
                component: _components_room_dashboard_room_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["RoomsDashboardComponent"]
            },
            {
                path: 'room',
                component: _components_room_room_component__WEBPACK_IMPORTED_MODULE_6__["RoomComponent"]
            },
            {
                path: 'new',
                component: _components_room_creating_room_creating_component__WEBPACK_IMPORTED_MODULE_4__["RoomCreatingComponent"]
            },
            {
                path: 'contacts',
                component: _components_room_contacts_room_contacts_component__WEBPACK_IMPORTED_MODULE_3__["RoomsContactsComponent"]
            },
        ]
    },
];
let RoomsRoutingModule = class RoomsRoutingModule {
};
RoomsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RoomsRoutingModule);



/***/ }),

/***/ "q0G9":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/components/rooms/components/room-creating/room-creating.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  \n</div>");

/***/ }),

/***/ "ybZK":
/*!*********************************************************************************************!*\
  !*** ./src/app/chat/components/rooms/components/room-contacts/room-contacts.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy9yb29tcy9jb21wb25lbnRzL3Jvb20tY29udGFjdHMvcm9vbS1jb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=components-rooms-rooms-module-es2015.js.map