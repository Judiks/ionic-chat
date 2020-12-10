(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "22HP":
/*!***********************************************!*\
  !*** ./src/app/shared/helpers/room.helper.ts ***!
  \***********************************************/
/*! exports provided: RoomHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomHelper", function() { return RoomHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/swagger/services/auth.service */ "S5SI");





let RoomHelper = class RoomHelper {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('current-room')));
        this.user = this.currentUser.asObservable();
    }
    setRoom(model) {
        localStorage.setItem('current-room', JSON.stringify(model));
        this.currentUser.next(model);
    }
    getRoom() {
        return this.currentUser.value;
    }
};
RoomHelper.ctorParameters = () => [
    { type: src_swagger_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RoomHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoomHelper);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "O8Kr":
/*!**********************************************!*\
  !*** ./src/swagger/services/file.service.ts ***!
  \**********************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "zEC6");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "UoTm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

/* tslint:disable */





let FileService = class FileService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param request undefined
     */
    FileDownloadResponse(request) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = request;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/File/Download`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'blob'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param request undefined
     */
    FileDownload(request) {
        return this.FileDownloadResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
FileService.FileDownloadPath = '/api/File/Download';
FileService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], FileService);



/***/ }),

/***/ "UhIE":
/*!**********************************************!*\
  !*** ./src/swagger/services/room.service.ts ***!
  \**********************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "zEC6");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "UoTm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

/* tslint:disable */





let RoomService = class RoomService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param model undefined
     */
    RoomCreateResponse(model) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = model;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Room/Create`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param model undefined
     */
    RoomCreate(model) {
        return this.RoomCreateResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param model undefined
     */
    RoomCreateFromContactResponse(model) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = model;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Room/CreateFromContact`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param model undefined
     */
    RoomCreateFromContact(model) {
        return this.RoomCreateFromContactResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param request undefined
     */
    RoomGetRoomByContactResponse(request) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = request;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Room/GetRoomByContact`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param request undefined
     */
    RoomGetRoomByContact(request) {
        return this.RoomGetRoomByContactResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param request undefined
     */
    RoomGetUserRoomsResponse(request) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = request;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Room/GetUserRooms`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param request undefined
     */
    RoomGetUserRooms(request) {
        return this.RoomGetUserRoomsResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param request undefined
     */
    RoomGetRoomContactsResponse(request) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = request;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Room/GetRoomContacts`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param request undefined
     */
    RoomGetRoomContacts(request) {
        return this.RoomGetRoomContactsResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
RoomService.RoomCreatePath = '/api/Room/Create';
RoomService.RoomCreateFromContactPath = '/api/Room/CreateFromContact';
RoomService.RoomGetRoomByContactPath = '/api/Room/GetRoomByContact';
RoomService.RoomGetUserRoomsPath = '/api/Room/GetUserRooms';
RoomService.RoomGetRoomContactsPath = '/api/Room/GetRoomContacts';
RoomService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RoomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], RoomService);



/***/ }),

/***/ "XDyB":
/*!*************************************************!*\
  !*** ./src/swagger/services/contact.service.ts ***!
  \*************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "zEC6");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "UoTm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

/* tslint:disable */





let ContactService = class ContactService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param model undefined
     */
    ContactSaveAllFromNativeResponse(model) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = model;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Contact/SaveAllFromNative`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param model undefined
     */
    ContactSaveAllFromNative(model) {
        return this.ContactSaveAllFromNativeResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
    /**
     * @param model undefined
     */
    ContactGetContactDataResponse(model) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let __body = null;
        __body = model;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + `/api/Contact/GetContactData`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * @param model undefined
     */
    ContactGetContactData(model) {
        return this.ContactGetContactDataResponse(model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_r => _r.body));
    }
};
ContactService.ContactSaveAllFromNativePath = '/api/Contact/SaveAllFromNative';
ContactService.ContactGetContactDataPath = '/api/Contact/GetContactData';
ContactService.ctorParameters = () => [
    { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ContactService);



/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
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
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qCwG":
/*!******************************************!*\
  !*** ./src/app/shared/base.component.ts ***!
  \******************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "PLH8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let BaseComponent = class BaseComponent {
    constructor(keyboard, cdr, router, navController) {
        this.keyboard = keyboard;
        this.cdr = cdr;
        this.router = router;
        this.navController = navController;
        this.isKeyboardActive = false;
        this.window = window;
        this.colors = new Array();
        keyboard.onKeyboardShow().subscribe(result => {
            this.isKeyboardActive = true;
            cdr.tick();
        });
        keyboard.onKeyboardHide().subscribe(result => {
            this.isKeyboardActive = false;
            cdr.tick();
        });
        document.addEventListener('ionBackButton', (ev) => {
            this.navController.pop();
        });
    }
    // ------------- ACCOUNT -------------
    // redirect to register page
    redirectToRegister() {
        this.router.navigate(['account', 'register']);
    }
    // redirect to login page
    redirectToLogin() {
        this.router.navigate(['account', 'login']);
    }
    // ------------- CHAT -------------
    // ------------- ROOM -------------
    // redirect to rooms list
    redirectToRooms() {
        this.router.navigate(['chat', 'rooms', 'dashboard']);
    }
    // redirect to create room
    redirectToCreateRoom() {
        this.router.navigate(['chat', 'rooms', 'new']);
    }
    // redirect to create room
    redirectToRoom() {
        this.router.navigate(['chat', 'rooms', 'room']);
    }
    // redirect to room-contacts list
    redirectToRoomContacts() {
        this.router.navigate(['chat', 'rooms', 'contacts']);
    }
    // ------------- CONTACTS -------------
    redirectToContacts() {
        this.router.navigate(['chat', 'contacts', 'dashboard']);
    }
    getRandomColor() {
        const colors = ['#3880ff', '#3171e0', '#4c8dff', '#3dc2ff', '#36abe0', '#50c8ff', '#5260ff', '#4854e0', '#6370ff'];
        const random = Math.floor(Math.random() * 9);
        return colors[random];
    }
    sanitizeImage(value) {
        if (!value) {
            return;
        }
        const result = this.window.Ionic.WebView.convertFileSrc(value);
        return result;
    }
};
BaseComponent.ctorParameters = () => [
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
BaseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-component',
        template: ``
    })
], BaseComponent);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "yTWy":
/*!*********************************!*\
  !*** ./src/swagger/services.ts ***!
  \*********************************/
/*! exports provided: AuthService, ContactService, FileService, RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ "S5SI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/contact.service */ "XDyB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return _services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]; });

/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/file.service */ "O8Kr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return _services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]; });

/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/room.service */ "UhIE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return _services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"]; });







/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map