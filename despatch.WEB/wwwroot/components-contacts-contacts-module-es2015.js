(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-contacts-contacts-module"],{

/***/ "ART0":
/*!******************************************************************************************************!*\
  !*** ./src/app/chat/components/contacts/components/contact-dashboard/contact-dashboard.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ContactDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDashboardComponent", function() { return ContactDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-dashboard.component.html */ "SXI2");
/* harmony import */ var _contact_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-dashboard.component.scss */ "nQZ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "PLH8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/base.component */ "qCwG");
/* harmony import */ var src_app_shared_helpers_auth_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/helpers/auth.helper */ "SDTg");
/* harmony import */ var src_app_shared_helpers_room_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/helpers/room.helper */ "22HP");
/* harmony import */ var src_swagger_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/swagger/services */ "yTWy");











let ContactDashboardComponent = class ContactDashboardComponent extends src_app_shared_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"] {
    constructor(keyboard, AppR, router, contactService, authHelper, navController, roomService, roomHelper) {
        super(keyboard, AppR, router, navController);
        this.keyboard = keyboard;
        this.AppR = AppR;
        this.router = router;
        this.contactService = contactService;
        this.authHelper = authHelper;
        this.navController = navController;
        this.roomService = roomService;
        this.roomHelper = roomHelper;
        this.contacts = new Array();
    }
    ngOnInit() {
        this.initData();
    }
    initData() {
        this.colors = new Array();
        if (this.contacts.length === 0) {
            this.getContactsData(null);
        }
    }
    getContactsData(event) {
        const request = {
            skipCount: this.contacts.length,
            userId: this.authHelper.getUser().id
        };
        this.contactService.ContactGetContactData(request).subscribe((result) => {
            console.log(result);
            this.contacts = [...this.contacts, ...result];
            this.contacts.forEach(x => {
                this.colors.push(this.getRandomColor());
            });
            if (event) {
                event.target.complete();
            }
        }, err => {
            console.log(err);
        });
    }
    syncContacts() {
        if (this.contacts.length > 0) {
            return;
        }
        const options = {
            filter: '',
            multiple: true,
            desiredFields: [],
            hasPhoneNumber: true
        };
        navigator.contacts.find(['*'], (contacts) => {
            console.log(contacts);
            const contactsRequest = this.mapContacts(contacts);
            this.contactService.ContactSaveAllFromNative(contactsRequest).subscribe((result) => {
                this.contacts = result;
            }, err => {
                console.log(err);
            });
        }, err => console.log(err), options);
    }
    mapContacts(contacts) {
        const contactsRequest = new Array();
        if (contacts) {
            contacts.forEach(contact => {
                const contactRequest = {
                    userId: this.authHelper.getUser().id,
                    contactData: this.mapContactData(contact),
                };
                contactsRequest.push(contactRequest);
            });
        }
        return contactsRequest;
    }
    mapContactData(contact) {
        const contactData = {
            displayName: contact.displayName,
            firstName: contact.name.givenName,
            lastName: contact.name.familyName,
            middleName: contact.name.middleName,
            honorificPrefix: contact.name.honorificPrefix,
            honorificSuffix: contact.name.honorificSuffix,
            addresses: this.mapAddresses(contact),
            images: this.mapImages(contact),
            organizations: this.mapOrganizations(contact),
            phoneNumbers: this.mapPhoneNumbers(contact),
            urls: this.mapUrls(contact)
        };
        return contactData;
    }
    mapAddresses(contact) {
        const contactAddresses = new Array();
        if (contact.addresses) {
            contact.addresses.forEach(address => {
                const addressRequest = {
                    address: {
                        deviceName: address.streetAddress,
                        type: 0
                    }
                };
                contactAddresses.push(addressRequest);
            });
        }
        return contactAddresses;
    }
    mapImages(contact) {
        const contactImages = new Array();
        if (contact.photos) {
            contact.photos.forEach(image => {
                const imageRequest = {
                    image: {
                        deviceUrl: {
                            path: image.value,
                            type: 3
                        },
                        isMain: true,
                        type: 0
                    }
                };
                contactImages.push(imageRequest);
            });
        }
        return contactImages;
    }
    mapOrganizations(contact) {
        const contactOrganizations = new Array();
        if (contact.organizations) {
            contact.organizations.forEach(organization => {
                const organizationRequest = {
                    organization: {
                        name: organization.name,
                        position: organization.title
                    }
                };
                contactOrganizations.push(organizationRequest);
            });
        }
        return contactOrganizations;
    }
    mapPhoneNumbers(contact) {
        const contactPhoneNumbers = new Array();
        if (contact.phoneNumbers) {
            contact.phoneNumbers.forEach(phoneNumber => {
                const phoneNumberRequest = {
                    phoneNumber: {
                        number: phoneNumber.value
                    }
                };
                contactPhoneNumbers.push(phoneNumberRequest);
            });
        }
        return contactPhoneNumbers;
    }
    mapUrls(contact) {
        const contactUrls = new Array();
        if (contact.urls) {
            contact.urls.forEach(url => {
                const urlRequest = {
                    url: {
                        path: url.value,
                        type: 0
                    }
                };
                contactUrls.push(urlRequest);
            });
        }
        return contactUrls;
    }
    getPhonetic(contact) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let result = '';
        if ((_a = contact.contactData) === null || _a === void 0 ? void 0 : _a.firstName) {
            result += (_b = contact.contactData) === null || _b === void 0 ? void 0 : _b.firstName.charAt(0);
        }
        if ((_c = contact.contactData) === null || _c === void 0 ? void 0 : _c.lastName) {
            result += (_d = contact.contactData) === null || _d === void 0 ? void 0 : _d.lastName.charAt(0);
        }
        if (result.length < 2 && ((_e = contact.contactData) === null || _e === void 0 ? void 0 : _e.middleName)) {
            result += (_f = contact.contactData) === null || _f === void 0 ? void 0 : _f.middleName.charAt(0);
        }
        if (result.length < 1 && ((_g = contact.contactData) === null || _g === void 0 ? void 0 : _g.displayName)) {
            result += (_h = contact.contactData) === null || _h === void 0 ? void 0 : _h.displayName.charAt(0);
        }
        return result;
    }
    joinContactRoom(contact) {
        const request = { contactId: contact.id };
        this.roomService.RoomGetRoomByContact(request).subscribe((response) => {
            const createRequest = JSON.parse(JSON.stringify({ contact }));
            if (!response) {
                this.roomService.RoomCreateFromContact(createRequest).subscribe((response2) => {
                    this.roomHelper.setRoom(response2);
                    this.redirectToRoom();
                });
            }
            else {
                this.roomHelper.setRoom(response);
                this.redirectToRoom();
            }
        });
    }
};
ContactDashboardComponent.ctorParameters = () => [
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_swagger_services__WEBPACK_IMPORTED_MODULE_10__["ContactService"] },
    { type: src_app_shared_helpers_auth_helper__WEBPACK_IMPORTED_MODULE_8__["AuthHelper"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_swagger_services__WEBPACK_IMPORTED_MODULE_10__["RoomService"] },
    { type: src_app_shared_helpers_room_helper__WEBPACK_IMPORTED_MODULE_9__["RoomHelper"] }
];
ContactDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-dashboard',
        template: _raw_loader_contact_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactDashboardComponent);



/***/ }),

/***/ "SXI2":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/components/contacts/components/contact-dashboard/contact-dashboard.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"app-header\">Contacts</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf='contacts.length == 0' class=\"h-100 d-flex\">\n    <div class=\"text-center justify-content-center m-auto\">\n      <ion-img class=' m-auto w-75 h-75 not-have-img' src='assets/img/icons-contacts.png'></ion-img>\n      <ion-label class=\"luckiest-guy-font not-have-label\">You may not have contacts yet.</ion-label>\n      <p class='warning-description'>Do you want to sync them from your device?</p>\n      <ion-button (click)='syncContacts()'>Sync device contact</ion-button>\n    </div>\n  </div>\n  <div *ngIf='contacts.length > 0'>\n    <div *ngFor=\"let contact of contacts; index as i\">\n      <div class=\"item-item\">\n        <div class='d-flex'>\n          <div class='d-flex w-25 item-container-img'>\n            <ion-img *ngIf='contact.contactData?.images[0]?.image?.deviceUrl.path' class=\"w-75 h-75 m-auto item-img\"\n              [src]='sanitizeImage(contact.contactData?.images[0]?.image?.deviceUrl.path)'></ion-img>\n            <div *ngIf='!contact.contactData?.images[0]?.image?.deviceUrl.path'\n              class=\"w-75 h-75 m-auto item-container-img\">\n              <div class=\"d-flex w-100 h-100 item-img\" [ngStyle]=\"{'background-color': colors[i] }\">\n                <div class='item-phonetic'>\n                  {{ getPhonetic(contact) }}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class='w-75 item-data' (click)='joinContactRoom(contact)'>\n            <div class='item-name'>\n              {{ contact.contactData.displayName }}\n            </div>\n            <div class='item-last-message'>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"getContactsData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "koVo":
/*!*********************************************************************!*\
  !*** ./src/app/chat/components/contacts/contacts-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function() { return ContactsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_contact_dashboard_contact_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-dashboard/contact-dashboard.component */ "ART0");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.component */ "vw7n");





const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"],
        children: [
            {
                path: 'dashboard',
                component: _components_contact_dashboard_contact_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ContactDashboardComponent"]
            },
        ]
    },
];
let ContactsRoutingModule = class ContactsRoutingModule {
};
ContactsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactsRoutingModule);



/***/ }),

/***/ "mIjL":
/*!*************************************************************!*\
  !*** ./src/app/chat/components/contacts/contacts.module.ts ***!
  \*************************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_contact_dashboard_contact_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-dashboard/contact-dashboard.component */ "ART0");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-routing.module */ "koVo");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.component */ "vw7n");







let ContactsModule = class ContactsModule {
};
ContactsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"],
            _components_contact_dashboard_contact_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["ContactDashboardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsRoutingModule"]
        ],
        providers: []
    })
], ContactsModule);



/***/ }),

/***/ "nQZ8":
/*!********************************************************************************************************!*\
  !*** ./src/app/chat/components/contacts/components/contact-dashboard/contact-dashboard.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".not-have-label {\n  color: lightsalmon;\n}\n\n@media (min-width: 500px) {\n  .not-have-img {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jb21wb25lbnRzL2NvbnRhY3RzL2NvbXBvbmVudHMvY29udGFjdC1kYXNoYm9hcmQvY29udGFjdC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSTtJQUNJLGFBQWE7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy9jb250YWN0cy9jb21wb25lbnRzL2NvbnRhY3QtZGFzaGJvYXJkL2NvbnRhY3QtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1oYXZlLWxhYmVsIHtcclxuICAgIGNvbG9yOiBsaWdodHNhbG1vbjtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNTAwcHgpIHsgXHJcbiAgICAubm90LWhhdmUtaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "vw7n":
/*!****************************************************************!*\
  !*** ./src/app/chat/components/contacts/contacts.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ContactsComponent = class ContactsComponent {
    constructor() { }
    ngOnInit() { }
};
ContactsComponent.ctorParameters = () => [];
ContactsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacts',
        template: `<ion-router-outlet ></ion-router-outlet>`
    })
], ContactsComponent);



/***/ })

}]);
//# sourceMappingURL=components-contacts-contacts-module-es2015.js.map