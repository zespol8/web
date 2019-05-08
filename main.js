(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _click_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./click/login/login.component */ "./src/app/click/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _click_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./click/register/register.component */ "./src/app/click/register/register.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");








var routes = [
    { path: 'login', component: _click_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _click_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'event/:id', component: _event_event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"] },
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: '**', redirectTo: '/product', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _click_click_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./click/click.component */ "./src/app/click/click.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _click_add_new_event_add_new_event_add_new_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./click/add_new_event/add_new_event/add-new-event.component */ "./src/app/click/add_new_event/add_new_event/add-new-event.component.ts");
/* harmony import */ var _click_add_new_event_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./click/add_new_event/navigation/navigation.component */ "./src/app/click/add_new_event/navigation/navigation.component.ts");
/* harmony import */ var _services_true_false_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/true-false.service */ "./src/app/services/true-false.service.ts");
/* harmony import */ var _click_add_new_event_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./click/add_new_event/edit/edit.component */ "./src/app/click/add_new_event/edit/edit.component.ts");
/* harmony import */ var _click_add_new_event_add_new_event_points_points_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./click/add_new_event/add_new_event/points/points.component */ "./src/app/click/add_new_event/add_new_event/points/points.component.ts");
/* harmony import */ var _click_add_new_event_edit_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./click/add_new_event/edit/edit-event/edit-event.component */ "./src/app/click/add_new_event/edit/edit-event/edit-event.component.ts");
/* harmony import */ var _click_add_new_event_edit_edit_nav_edit_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./click/add_new_event/edit/edit-nav/edit-nav.component */ "./src/app/click/add_new_event/edit/edit-nav/edit-nav.component.ts");
/* harmony import */ var _click_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./click/login/login.component */ "./src/app/click/login/login.component.ts");
/* harmony import */ var _click_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./click/register/register.component */ "./src/app/click/register/register.component.ts");
/* harmony import */ var _click_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./click/logout/logout.component */ "./src/app/click/logout/logout.component.ts");
/* harmony import */ var _click_add_new_event_image_add_image_add_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./click/add_new_event/image-add/image-add.component */ "./src/app/click/add_new_event/image-add/image-add.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
                _click_click_component__WEBPACK_IMPORTED_MODULE_10__["ClickComponent"],
                _click_add_new_event_add_new_event_add_new_event_component__WEBPACK_IMPORTED_MODULE_12__["AddNewEventComponent"],
                _click_add_new_event_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
                _click_add_new_event_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"],
                _click_add_new_event_add_new_event_points_points_component__WEBPACK_IMPORTED_MODULE_16__["PointsComponent"],
                _click_add_new_event_edit_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_17__["EditEventComponent"],
                _click_add_new_event_edit_edit_nav_edit_nav_component__WEBPACK_IMPORTED_MODULE_18__["EditNavComponent"],
                _click_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _click_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _click_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"],
                _click_add_new_event_image_add_image_add_component__WEBPACK_IMPORTED_MODULE_22__["ImageAddComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_23__["MainComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_24__["ProductComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_25__["EventsComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_26__["EventComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDTJaL1N7hFGC2MrUwhHbp_Mx29ecmT3nk' // Klucz do google maps
                })
            ],
            providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _services_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"], _services_true_false_service__WEBPACK_IMPORTED_MODULE_14__["TrueFalseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/click/add_new_event/add_new_event/add-new-event.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/click/add_new_event/add_new_event/add-new-event.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrL2FkZF9uZXdfZXZlbnQvYWRkX25ld19ldmVudC9hZGQtbmV3LWV2ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/click/add_new_event/add_new_event/add-new-event.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/click/add_new_event/add_new_event/add-new-event.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"tf.add_point_show2\">\n    <div>\n      Dodaj nowy event:\n    </div>\n    <div>\n      <input [(ngModel)]=\"data.name\" placeholder=\"Name\">\n    </div>\n    <div>\n      <textarea maxlength=\"60\" [(ngModel)]=\"data.description\" placeholder=\"Description\"></textarea>\n    </div>\n    <div>\n      <input [(ngModel)]=\"data.place\" placeholder=\"Place\">\n    </div>\n      <div> \n        {{this.cords.error}}\n      </div>\n    <button (click)=\"onButtonClick(1)\">Add</button>\n    <button (click)=\"onButtonClick(2)\">Back</button>\n  </div>\n  <div *ngIf=\"tf.add_point_show1\">\n    <h2>New event: </h2>\n    <h1>Name: {{data.name}}</h1>\n    <h1>Description: {{data.description}}</h1>\n    <h1>Place: {{data.place}}</h1>\n    <app-points></app-points>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/click/add_new_event/add_new_event/add-new-event.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/click/add_new_event/add_new_event/add-new-event.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddNewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewEventComponent", function() { return AddNewEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/true-false.service */ "./src/app/services/true-false.service.ts");





var AddNewEventComponent = /** @class */ (function () {
    function AddNewEventComponent(cords, http, tf) {
        this.cords = cords;
        this.http = http;
        this.tf = tf;
        this.data = ({ name: '', description: '', place: '', geographicCoordinate: {}, endDate: 1, startDate: 1 });
    }
    AddNewEventComponent.prototype.ngOnInit = function () {
    };
    AddNewEventComponent.prototype.onButtonClick = function (x) {
        var _this = this;
        if (x === 1) {
            this.data.geographicCoordinate.latitude = this.cords.lat;
            this.data.geographicCoordinate.longitude = this.cords.lng;
            var accessToken = this.cords.accessToken;
            this.cords.error = this.cords.checkSyntax(this.data); //  SPRAWDZANIE POPRAWNOSCI W INPUTACH
            if (this.cords.error === '') {
                this.http.postAddEventAdmin(this.data, accessToken).subscribe(function (i) {
                    _this.cords.newEventId = i.newEventId;
                });
                this.cords.clearCords();
                this.tf.add_point_show1 = true;
                this.tf.add_point_show2 = false;
            }
        }
        else {
            this.tf.navigation_c_add = false;
            this.tf.navigation_c_show_buttons = true;
        }
    };
    AddNewEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-new-event',
            template: __webpack_require__(/*! ./add-new-event.component.html */ "./src/app/click/add_new_event/add_new_event/add-new-event.component.html"),
            styles: [__webpack_require__(/*! ./add-new-event.component.css */ "./src/app/click/add_new_event/add_new_event/add-new-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_4__["TrueFalseService"]])
    ], AddNewEventComponent);
    return AddNewEventComponent;
}());



/***/ }),

/***/ "./src/app/click/add_new_event/add_new_event/points/points.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/click/add_new_event/add_new_event/points/points.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrL2FkZF9uZXdfZXZlbnQvYWRkX25ld19ldmVudC9wb2ludHMvcG9pbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/click/add_new_event/add_new_event/points/points.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/click/add_new_event/add_new_event/points/points.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Dodaje punty eventu numer: {{data.newEventId}}:\n  <div>\n    <input [(ngModel)]=\"point.name\" placeholder=\"Point Name\">\n  </div>\n  <div>\n    <textarea maxlength=\"60\" [(ngModel)]=\"point.description\" placeholder=\"Point Description\"></textarea>\n  </div>\n  <div>\n    <input [(ngModel)]=\"point.place\" placeholder=\"Point Place\">\n  </div>\n  <div>\n    <button (click)=\"addPointToEvent()\">Add point</button>\n    {{error}}\n  </div>\n  <div>\n    <li *ngFor=\"let i of pointList\">\n      {{i.name}} <button (click)=\"deletePointFromList(i)\">Delete</button>\n    </li>\n  </div>\n</div>\n<div>\n  <br>\n  <button (click)=\"addPointEventToServer()\">Add to server</button>\n</div>"

/***/ }),

/***/ "./src/app/click/add_new_event/add_new_event/points/points.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/click/add_new_event/add_new_event/points/points.component.ts ***!
  \******************************************************************************/
/*! exports provided: PointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsComponent", function() { return PointsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/true-false.service */ "./src/app/services/true-false.service.ts");





var PointsComponent = /** @class */ (function () {
    function PointsComponent(data, cords, http, tf) {
        this.data = data;
        this.cords = cords;
        this.http = http;
        this.tf = tf;
        this.pointList = [];
        this.resetPoint();
        this.error = '';
    }
    PointsComponent.prototype.addPointToEvent = function () {
        this.point.geographicCoordinate.latitude = this.cords.lat;
        this.point.geographicCoordinate.longitude = this.cords.lng;
        this.point.eventId = this.data.newEventId;
        this.error = this.data.checkSyntax(this.point);
        if (this.error === '') {
            this.pointList.push(this.point);
            this.resetPoint();
            this.cords.clearCords();
        }
    };
    PointsComponent.prototype.deletePointFromList = function (point1) {
        this.pointList = this.pointList.filter(function (e) { return e !== point1; });
    };
    PointsComponent.prototype.addPointEventToServer = function () {
        var accessToken = this.data.accessToken;
        for (var _i = 0, _a = this.pointList; _i < _a.length; _i++) {
            this.point = _a[_i];
            console.log(this.point);
            this.http.postAddPointAdmin(this.point, accessToken).subscribe(function (i) {
                console.log(i);
            });
        }
        this.tf.navigation_c_show_buttons = true;
        this.tf.add_point_show1 = false;
        this.tf.add_point_show2 = false;
    };
    PointsComponent.prototype.ngOnInit = function () {
    };
    PointsComponent.prototype.resetPoint = function () {
        this.point = ({
            name: '', description: '', place: '',
            geographicCoordinate: { latitude: 0, longitude: 0 }, startDate: 1, endDate: 1, eventId: this.data.newEventId
        });
    };
    PointsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-points',
            template: __webpack_require__(/*! ./points.component.html */ "./src/app/click/add_new_event/add_new_event/points/points.component.html"),
            styles: [__webpack_require__(/*! ./points.component.css */ "./src/app/click/add_new_event/add_new_event/points/points.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_4__["TrueFalseService"]])
    ], PointsComponent);
    return PointsComponent;
}());



/***/ }),

/***/ "./src/app/click/add_new_event/edit/edit-event/edit-event.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/click/add_new_event/edit/edit-event/edit-event.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrL2FkZF9uZXdfZXZlbnQvZWRpdC9lZGl0LWV2ZW50L2VkaXQtZXZlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/click/add_new_event/edit/edit-event/edit-event.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/click/add_new_event/edit/edit-event/edit-event.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.tf.edit_picked_event\">\n    <div>\n        Edytujesz event {{this.data.newEventId}}: <br>\n    </div>\n    <div>\n        Nazwa eventu: <br>\n        <input [(ngModel)]=\"this.event.name\" placeholder=\"Name\">\n    </div>\n    <div>\n        Opis eventu: <br>\n        <textarea maxlength=\"60\" [(ngModel)]=\"this.event.description\" placeholder=\"Description\"></textarea>\n    </div>\n    <div>\n        Miejsce gdzie odbędzie się event: <br>\n        <input [(ngModel)]=\"this.event.place\" placeholder=\"Place\">\n    </div>\n    <div>\n        Dodaj zdjęcie: \n        <app-image-add></app-image-add>\n    </div>\n    <div>\n        {{this.data.error}}\n    </div>\n    <button (click)=\"editEventButton()\">Confirm&Back</button>\n    <button (click)=\"editPointsButton()\">Edit Points</button>\n</div>\n\n<div *ngIf=\"this.tf.edit_picked_event_points\">\n    Edytujesz punkty eventu {{this.data.newEventId}}: <br>\n    <li *ngFor=\"let i of pointList\">\n        {{i.name}}, {{i.id}}\n        <button (click)=\"editPoint(i.id)\">Edit</button>\n        <button (click)=\"deletePoint(i.id)\">Delete</button>\n    </li>\n    <button (click)=\"addNewPointButton()\">Add new</button>\n</div>\n\n<div *ngIf=\"this.tf.edit_picked_event_add_new_point\">\n    <div>\n        Dodajesz nowy punkt do eventu {{this.event.id}}\n    </div>\n    <div>\n        Nazwa punktu: <br>\n        <input [(ngModel)]=\"this.onePoint.name\" placeholder=\"Name\">\n    </div>\n    <div>\n        Opis punktu: <br>\n        <textarea maxlength=\"60\" [(ngModel)]=\"this.onePoint.description\" placeholder=\"Description\"></textarea>\n    </div>\n    <div>\n        Nazwa miejsca punktu: <br>\n        <input [(ngModel)]=\"this.onePoint.place\" placeholder=\"Place\">\n    </div>\n    <div id=\"error\">\n        {{this.data.error}}\n    </div>\n    <button (click)=\"addNewPoint()\">Dodaj</button>\n    <button (click)=\"cancelEditPoint()\">Wróć</button>\n</div>\n\n<div *ngIf=this.tf.edit_one_point>\n    <div>\n        Edytujesz punkt {{this.nr}}: <br>\n    </div>\n    <div>\n        Nazwa punktu: <br>\n        <input [(ngModel)]=\"this.onePoint.name\" placeholder=\"Name\">\n    </div>\n    <div>\n        Opis punktu: <br>\n        <textarea maxlength=\"60\" [(ngModel)]=\"this.onePoint.description\" placeholder=\"Description\"></textarea>\n    </div>\n    <div>\n        Nazwa miejsca punktu: <br>\n        <input [(ngModel)]=\"this.onePoint.place\" placeholder=\"Place\">\n    </div>\n\n    <div id=\"error\">\n        {{this.data.error}}\n    </div>\n    <button (click)=\"editPointConfirm()\">Confirm</button>\n    <button (click)=\"cancelEditPoint()\">Back</button>\n</div>\n<br>\n<br>\n<button *ngIf=\"this.tf.edit_picked_event_points\" (click)=\"confirmAndBackListOfAll()\">Confirm&Back</button>\n<button (click)=\"backButton()\">Exit edition</button>"

/***/ }),

/***/ "./src/app/click/add_new_event/edit/edit-event/edit-event.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/click/add_new_event/edit/edit-event/edit-event.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventComponent", function() { return EditEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/true-false.service */ "./src/app/services/true-false.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");





var EditEventComponent = /** @class */ (function () {
    function EditEventComponent(tf, data, http) {
        this.tf = tf;
        this.data = data;
        this.http = http;
        this.event = {};
        this.onePoint = {};
        this.pointList = [];
    }
    EditEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getEventAdminById(this.data.accessToken, this.data.newEventId).subscribe(function (i) {
            _this.event = i;
            console.log(_this.data.newEventId);
            console.log(_this.event);
        });
    };
    EditEventComponent.prototype.editEventButton = function () {
        this.data.error = this.data.checkSyntax(this.event);
        if (this.data.error === '') {
            this.http.postEventEdit(this.data.newEventId, this.event, this.data.accessToken).subscribe(function (i) {
                console.log('Edycja eventu bez edycji punktów: ' + i);
            });
            this.tf.edit_event_show1 = true;
            this.tf.edit_event_show2 = false;
        }
    };
    EditEventComponent.prototype.editPointsButton = function () {
        var _this = this;
        this.data.error = this.data.checkSyntax(this.event);
        if (this.data.error === '') {
            this.http.postEventEdit(this.data.newEventId, this.event, this.data.accessToken).subscribe(function (i) {
                console.log('Edycja eventu z punktami: ' + i);
                _this.tf.edit_picked_event = false;
                _this.tf.edit_picked_event_points = true;
            });
            this.look();
        }
    };
    EditEventComponent.prototype.look = function () {
        var _this = this;
        this.http.getEventsPointsAdmin(this.data.accessToken, this.data.newEventId).subscribe(function (i) {
            _this.pointList = i;
            _this.data.listOfAll = _this.pointList;
            console.log('Wczytanie punktów eventu: ' + _this.data.newEventId);
        });
        this.tf.showListOfPoints = true;
    };
    EditEventComponent.prototype.editPoint = function (id) {
        var _this = this;
        this.tf.showListOfPoints = false;
        this.nr = id;
        this.http.getPointAdminById(this.data.newEventId, this.nr, this.data.accessToken).subscribe(function (i) {
            _this.onePoint = i;
            _this.data.onePoint = _this.onePoint;
            console.log('Wybrany punkt do edycji: ' + _this.onePoint.name);
        });
        this.tf.edit_one_point = true;
        this.tf.edit_picked_event_points = false;
    };
    EditEventComponent.prototype.editPointConfirm = function () {
        var _this = this;
        this.data.error = this.data.checkSyntax(this.onePoint);
        this.onePoint.eventId = this.event.id;
        if (this.data.error === '') {
            this.http.postPointEdit(this.onePoint.id, this.onePoint, this.data.accessToken).subscribe(function (i) {
                console.log('Edycja pojedynczego punktu zakonczona: ' + i);
                _this.look();
            });
            this.tf.edit_one_point = false;
            this.tf.edit_picked_event_points = true;
        }
    };
    EditEventComponent.prototype.addNewPoint = function () {
        var _this = this;
        this.onePoint.eventId = this.event.id;
        this.onePoint.geographicCoordinate.latitude = this.data.lat;
        this.onePoint.geographicCoordinate.longitude = this.data.lng;
        this.data.error = this.data.checkSyntax(this.onePoint);
        if (this.data.error === '') {
            this.http.postAddPointAdmin(this.onePoint, this.data.accessToken).subscribe(function (i) {
                console.log(i);
                _this.look();
            });
            this.tf.edit_one_point = false;
            this.tf.edit_picked_event_points = true;
            this.tf.edit_picked_event_add_new_point = false;
        }
    };
    EditEventComponent.prototype.deletePoint = function (nr) {
        var _this = this;
        this.http.postPointDelete(this.data.newEventId, nr, this.data.accessToken).subscribe(function (i) {
            console.log('Usuwanie punktu: ' + i);
            _this.look();
        });
    };
    EditEventComponent.prototype.addNewPointButton = function () {
        this.onePoint = this.data.resetData();
        this.tf.edit_picked_event_add_new_point = true;
        this.tf.edit_picked_event_points = false;
    };
    EditEventComponent.prototype.cancelEditPoint = function () {
        this.tf.showListOfPoints = true; // pokaż z powrotem punkty na mapie
        this.tf.edit_one_point = false;
        this.tf.edit_picked_event_points = true;
        this.tf.edit_picked_event_add_new_point = false;
    };
    EditEventComponent.prototype.backButton = function () {
        this.tf.showListOfPoints = false;
        this.tf.edit_picked_event_points = false;
        this.tf.edit_event_show1 = true;
        this.tf.edit_event_show2 = false;
    };
    EditEventComponent.prototype.confirmAndBackListOfAll = function () {
        var _this = this;
        this.data.listOfAll.forEach(function (element) {
            element.eventId = _this.data.newEventId;
        });
        this.data.listOfAll.forEach(function (element) {
            _this.http.postPointEdit(element.id, element, _this.data.accessToken).subscribe(function (i) {
                console.log(i);
                _this.data.error = '';
            }, function (error) {
                console.log(error);
            });
        });
        this.tf.edit_picked_event_points = false;
        this.tf.edit_event_show1 = true;
        this.tf.edit_event_show2 = false;
    };
    EditEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-event',
            template: __webpack_require__(/*! ./edit-event.component.html */ "./src/app/click/add_new_event/edit/edit-event/edit-event.component.html"),
            styles: [__webpack_require__(/*! ./edit-event.component.css */ "./src/app/click/add_new_event/edit/edit-event/edit-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__["TrueFalseService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], EditEventComponent);
    return EditEventComponent;
}());



/***/ }),

/***/ "./src/app/click/add_new_event/edit/edit-nav/edit-nav.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/click/add_new_event/edit/edit-nav/edit-nav.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrL2FkZF9uZXdfZXZlbnQvZWRpdC9lZGl0LW5hdi9lZGl0LW5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/click/add_new_event/edit/edit-nav/edit-nav.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/click/add_new_event/edit/edit-nav/edit-nav.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tf.edit_event_show1\">\n  <app-edit></app-edit>\n</div>\n<div *ngIf=\"tf.edit_event_show2\">\n    <app-edit-event></app-edit-event>\n</div>\n"

/***/ }),

/***/ "./src/app/click/add_new_event/edit/edit-nav/edit-nav.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/click/add_new_event/edit/edit-nav/edit-nav.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNavComponent", function() { return EditNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/true-false.service */ "./src/app/services/true-false.service.ts");



var EditNavComponent = /** @class */ (function () {
    function EditNavComponent(tf) {
        this.tf = tf;
    }
    EditNavComponent.prototype.ngOnInit = function () {
    };
    EditNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-nav',
            template: __webpack_require__(/*! ./edit-nav.component.html */ "./src/app/click/add_new_event/edit/edit-nav/edit-nav.component.html"),
            styles: [__webpack_require__(/*! ./edit-nav.component.css */ "./src/app/click/add_new_event/edit/edit-nav/edit-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__["TrueFalseService"]])
    ], EditNavComponent);
    return EditNavComponent;
}());



/***/ }),

/***/ "./src/app/click/add_new_event/edit/edit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/click/add_new_event/edit/edit.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrL2FkZF9uZXdfZXZlbnQvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/click/add_new_event/edit/edit.component.html":
/*!**************************************************************!*\
  !*** ./src/app/click/add_new_event/edit/edit.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        Lista twoich eventów: <br>\n        <li *ngFor=\"let i of eventList\">\n            {{this.i.name}}, {{this.i.id}}\n            <button (click)=\"editEvent(this.i.id)\">Edit</button>\n            <button (click)=\"deleteEvent(this.i.id)\">Delete</button>\n        </li>\n    </div>\n</div>\n\n<br>\n<button (click)=\"backButton()\">Back</button>\n"

/***/ }),

/***/ "./src/app/click/add_new_event/edit/edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/click/add_new_event/edit/edit.component.ts ***!
  \************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/true-false.service */ "./src/app/services/true-false.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");





var EditComponent = /** @class */ (function () {
    function EditComponent(tf, http, data) {
        this.tf = tf;
        this.http = http;
        this.data = data;
        this.eventList = [];
    }
    EditComponent.prototype.lookButton = function () {
        var _this = this;
        console.log('Nowa lista');
        this.http.getEventsAdmin(this.data.accessToken).subscribe(function (i) {
            _this.eventList = i;
        });
    };
    EditComponent.prototype.deleteEvent = function (id) {
        var _this = this;
        this.http.postEventDelete(id, this.data.accessToken).subscribe(function (i) {
            console.log(i);
        });
        setTimeout(function () { return _this.lookButton(); }, 2000); // Poprawić timeout czekania na nowa liste.
    };
    EditComponent.prototype.editEvent = function (id) {
        this.data.newEventId = id;
        this.tf.edit_event_show2 = true;
        this.tf.edit_event_show1 = false;
        this.tf.edit_picked_event = true;
    };
    EditComponent.prototype.backButton = function () {
        this.tf.navigation_c_show_buttons = true;
        this.tf.eddit_nav_show = false;
        this.tf.edit_event_show1 = false;
        this.tf.edit_event_show2 = false;
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Nowa lista');
        this.http.getEventsAdmin(this.data.accessToken).subscribe(function (i) {
            _this.eventList = i;
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/click/add_new_event/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/click/add_new_event/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__["TrueFalseService"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/click/add_new_event/image-add/image-add.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/click/add_new_event/image-add/image-add.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrL2FkZF9uZXdfZXZlbnQvaW1hZ2UtYWRkL2ltYWdlLWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/click/add_new_event/image-add/image-add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/click/add_new_event/image-add/image-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input type=\"file\" (change)=\"imageAdd($event)\"> <br>\n  <button type=\"button\" (click)=\"uploadImage()\">Upload</button>\n</div>\n"

/***/ }),

/***/ "./src/app/click/add_new_event/image-add/image-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/click/add_new_event/image-add/image-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImageAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageAddComponent", function() { return ImageAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




var ImageAddComponent = /** @class */ (function () {
    function ImageAddComponent(http, data) {
        this.http = http;
        this.data = data;
        this.selectedFile = null;
    }
    ImageAddComponent.prototype.ngOnInit = function () {
    };
    ImageAddComponent.prototype.imageAdd = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    ImageAddComponent.prototype.uploadImage = function () {
        console.log('Img event id: ' + this.data.newEventId);
        console.log(this.selectedFile);
        this.http.postImgAdd(this.data.accessToken, this.data.newEventId, this.selectedFile).subscribe(function (i) {
            console.log(i);
        }, function (error) {
            console.log(error);
        });
    };
    ImageAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-add',
            template: __webpack_require__(/*! ./image-add.component.html */ "./src/app/click/add_new_event/image-add/image-add.component.html"),
            styles: [__webpack_require__(/*! ./image-add.component.css */ "./src/app/click/add_new_event/image-add/image-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ImageAddComponent);
    return ImageAddComponent;
}());



/***/ }),

/***/ "./src/app/click/add_new_event/navigation/navigation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/click/add_new_event/navigation/navigation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrL2FkZF9uZXdfZXZlbnQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/click/add_new_event/navigation/navigation.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/click/add_new_event/navigation/navigation.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=tf.navigation_c_show_buttons>\n  <button (click)=\"add_n_button()\">Add new event</button>\n  <button (click)=\"edit_button()\">Edit event</button>\n  <button>More</button>\n</div>\n<div>\n  <app-add-new-event *ngIf=tf.navigation_c_add></app-add-new-event>\n  <app-edit-nav *ngIf=tf.eddit_nav_show></app-edit-nav>\n</div>\n"

/***/ }),

/***/ "./src/app/click/add_new_event/navigation/navigation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/click/add_new_event/navigation/navigation.component.ts ***!
  \************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/true-false.service */ "./src/app/services/true-false.service.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(tf) {
        this.tf = tf;
    }
    NavigationComponent.prototype.add_n_button = function () {
        this.tf.navigation_c_add = true;
        this.tf.navigation_c_show_buttons = false;
        this.tf.add_point_show2 = true;
    };
    NavigationComponent.prototype.edit_button = function () {
        this.tf.navigation_c_show_buttons = false;
        this.tf.eddit_nav_show = true;
        this.tf.edit_event_show1 = true;
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/click/add_new_event/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/click/add_new_event/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__["TrueFalseService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/click/click.component.css":
/*!*******************************************!*\
  !*** ./src/app/click/click.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".opis\n  {\n    display: center;\n    position: absolute;\n    font-family: cursive; \n    font-size: 22pt;\n    left: 4cm;\n    top: 4cm;\n  }\n  .Logo\n  {\n    display: center;\n    position: absolute;\n    font-family: cursive;\n    color:green;\n    font-size: 35pt;\n    left: 1cm;\n    top: 0cm;\n   /* border-top-style: solid;\n border-bottom-style:solid;\n border-left-style:solid;\n border-right-style:solid;\n border-color:green;\n border-width: medium;\n */\n  }\n  .Czym\n{\n  \n  display: center;\n  position: absolute;\n  font-family: cursive;\n  color:green;\n  font-size: 35pt;\n  left: 13cm;\n  top: 15cm;\n}\n  .jest\n{\n  display: center;\n  position: absolute;\n  font-family: cursive;\n  color:green;\n  font-size: 24pt;\n  left: 13cm;\n  top: 19cm;\n}\n  .zaloguj\n  {\n    display: center;\n    position: absolute;\n    width:11%;\n    height: 5%;\n    left: 27cm;\n    top: 0cm;\n   justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  }\n  .logo\n  {\n    display: center;\n    position: absolute;\n    color: red;\n    background-color: bisque;\n    width:36%;\n    height: 8%;\n    left: 12cm;\n    top: 1cm;\n   justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  }\n  form {\n    display: flex;\n    position: center;\n    width: 200%;\n    height: 200%;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n  .container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    padding: 40px;\n    background: #eee;\n    border-radius: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpY2svY2xpY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7R0FDVjtFQUNEOztJQUVFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7R0FDVjs7Ozs7O0dBTUE7R0FDQTtFQUNEOzs7RUFHQSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0NBQ1g7RUFDRDs7RUFFRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0NBQ1g7RUFDQzs7SUFFRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7R0FDVix3QkFBd0I7SUFDdkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtHQUN4QjtFQUNEOztJQUVFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0dBQ1Ysd0JBQXdCO0lBQ3ZCLG9CQUFvQjtJQUNwQix1QkFBdUI7R0FDeEI7RUFDSDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtDQUMxQjtFQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY2xpY2svY2xpY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGlzXG4gIHtcbiAgICBkaXNwbGF5OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlOyBcbiAgICBmb250LXNpemU6IDIycHQ7XG4gICAgbGVmdDogNGNtO1xuICAgIHRvcDogNGNtO1xuICB9XG4gIC5Mb2dvXG4gIHtcbiAgICBkaXNwbGF5OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIGNvbG9yOmdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMzVwdDtcbiAgICBsZWZ0OiAxY207XG4gICAgdG9wOiAwY207XG4gICAvKiBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiBib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO1xuIGJvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO1xuIGJvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtcbiBib3JkZXItY29sb3I6Z3JlZW47XG4gYm9yZGVyLXdpZHRoOiBtZWRpdW07XG4gKi9cbiAgfVxuICAuQ3p5bVxue1xuICBcbiAgZGlzcGxheTogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBjb2xvcjpncmVlbjtcbiAgZm9udC1zaXplOiAzNXB0O1xuICBsZWZ0OiAxM2NtO1xuICB0b3A6IDE1Y207XG59XG4uamVzdFxue1xuICBkaXNwbGF5OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGNvbG9yOmdyZWVuO1xuICBmb250LXNpemU6IDI0cHQ7XG4gIGxlZnQ6IDEzY207XG4gIHRvcDogMTljbTtcbn1cbiAgLnphbG9ndWpcbiAge1xuICAgIGRpc3BsYXk6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6MTElO1xuICAgIGhlaWdodDogNSU7XG4gICAgbGVmdDogMjdjbTtcbiAgICB0b3A6IDBjbTtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubG9nb1xuICB7XG4gICAgZGlzcGxheTogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgICB3aWR0aDozNiU7XG4gICAgaGVpZ2h0OiA4JTtcbiAgICBsZWZ0OiAxMmNtO1xuICAgIHRvcDogMWNtO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiAyMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/click/click.component.html":
/*!********************************************!*\
  !*** ./src/app/click/click.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\n  <app-navigation *ngIf=tf.click_c_show2></app-navigation>\n</div>\n"

/***/ }),

/***/ "./src/app/click/click.component.ts":
/*!******************************************!*\
  !*** ./src/app/click/click.component.ts ***!
  \******************************************/
/*! exports provided: ClickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickComponent", function() { return ClickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_true_false_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/true-false.service */ "./src/app/services/true-false.service.ts");





var ClickComponent = /** @class */ (function () {
    function ClickComponent(http, accessToken, tf) {
        this.http = http;
        this.accessToken = accessToken;
        this.tf = tf;
        this.tf.click_c_show1 = true;
        this.tf.click_c_show2 = false;
        this.tf.click_c_show1 = false;
        this.tf.click_c_show2 = true;
        this.tf.map_c_show = true;
    }
    ClickComponent.prototype.ngOnInit = function () {
    };
    ClickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-click',
            template: __webpack_require__(/*! ./click.component.html */ "./src/app/click/click.component.html"),
            styles: [__webpack_require__(/*! ./click.component.css */ "./src/app/click/click.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _services_true_false_service__WEBPACK_IMPORTED_MODULE_4__["TrueFalseService"]])
    ], ClickComponent);
    return ClickComponent;
}());



/***/ }),

/***/ "./src/app/click/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/click/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n  width: 340px;\n  margin: auto;\n}\n.form {\n  margin-bottom: 15px;\n  background: #f7f7f7;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n.login-form h2 {\n  margin: 0 0 15px;\n}\n.form-control, .btn {\n  min-height: 38px;\n  border-radius: 2px;\n}\n.btn {\n  font-size: 15px;\n  font-weight: bold;\n}\n.error {\n  color: red;\n  text-align: center;\n}\n.person {\n  width: 340px;\n  margin: auto;\n  margin-top: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpY2svbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0NBQ2Q7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsMkNBQTJDO0VBQzNDLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jbGljay9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xuICB3aWR0aDogMzQwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLmxvZ2luLWZvcm0gaDIge1xuICBtYXJnaW46IDAgMCAxNXB4O1xufVxuLmZvcm0tY29udHJvbCwgLmJ0biB7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5idG4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGVyc29uIHtcbiAgd2lkdGg6IDM0MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/click/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/click/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"person\">\n    <img src=\"../../../assets/images/business-img.png\">\n  </div>\n  <div class=\"login-form\">\n    <div class=\"form\">\n      <h2 class=\"text-center\">Logowanie</h2>\n      <div class=\"form-group\">\n        <input [(ngModel)]=\"this.log.email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" required=\"required\">\n      </div>\n      <div class=\"form-group\">\n        <input [(ngModel)]=\"this.log.password\" type=\"password\" class=\"form-control\" placeholder=\"Hasło\"\n               required=\"required\">\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"login()\" type=\"submit\" class=\"btn btn-primary btn-block\">Zaloguj</button>\n      </div>\n      <div class=\"clearfix\">\n        <label class=\"pull-left checkbox-inline\"><input type=\"checkbox\"> Zapamiętaj mnie</label>\n        <a href=\"#\" class=\"pull-right\">Zapomniałeś hasła?</a>\n      </div>\n      <div *ngIf=\"loginError\" class=\"error\">\n        {{this.loginError}}\n      </div>\n    </div>\n    <p class=\"text-center\"><a href=\"/register\">Utwórz konto</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/click/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/click/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var md5_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! md5-typescript */ "./node_modules/md5-typescript/dist/index.js");
/* harmony import */ var src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/true-false.service */ "./src/app/services/true-false.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(data, http, tf, router, route) {
        this.data = data;
        this.http = http;
        this.tf = tf;
        this.router = router;
        this.route = route;
        this.log = {};
        if (this.data.isLoggedIn()) {
            this.router.navigate(['/main'], { relativeTo: this.route });
        }
        this.log.email = 'gruszkojados@gmail.com';
        this.log.password = 'razdwatrzy12';
        this.loginError = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Powrot = function () {
        this.tf.login_show = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.log.password = md5_typescript__WEBPACK_IMPORTED_MODULE_4__["Md5"].init(this.log.password);
        console.log(this.log);
        this.http.postLoginAdmin(this.log).subscribe(function (i) {
            _this.data.saveAccessToken(i.accessToken);
            console.log(_this.data.accessToken);
            _this.router.navigate(['/main'], { relativeTo: _this.route });
        }, function (error) {
            _this.http.errors = error;
            console.log('HttpError status = ' + _this.http.errors.status);
            _this.loginError = _this.data.checkLoginError(_this.http.errors.status);
            _this.loginError = error.error;
        });
        this.log.password = '';
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/click/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/click/login/login.component.css"), __webpack_require__(/*! ../../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_5__["TrueFalseService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/click/logout/logout.component.css":
/*!***************************************************!*\
  !*** ./src/app/click/logout/logout.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/click/logout/logout.component.html":
/*!****************************************************!*\
  !*** ./src/app/click/logout/logout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button (click)=\"logoutButton()\">Wyloguj</button>\n</div>\n"

/***/ }),

/***/ "./src/app/click/logout/logout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/click/logout/logout.component.ts ***!
  \**************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/true-false.service */ "./src/app/services/true-false.service.ts");





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(http, data, tf) {
        this.http = http;
        this.data = data;
        this.tf = tf;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logoutButton = function () {
        var _this = this;
        this.http.postLogoutAdmin(this.data.accessToken).subscribe(function (i) {
            console.log('Wylogowano: ' + i);
        }, function (logoutError) {
            console.log('Wylogowano');
            _this.tf.logoutFunction();
            _this.tf.login_show1 = true;
            _this.tf.opis_show1 = true;
        });
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/click/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/click/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_4__["TrueFalseService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/click/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/click/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n  width: 340px;\n  margin: auto;\n  margin-top: 10%;\n}\n.form {\n  margin-bottom: 15px;\n  background: #f7f7f7;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n}\n.login-form h2 {\n  margin: 0 0 15px;\n}\n.form-control, .btn {\n  min-height: 38px;\n  border-radius: 2px;\n}\n.btn {\n  font-size: 15px;\n  font-weight: bold;\n}\n.error {\n  color: red;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpY2svcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLDJDQUEyQztFQUMzQyxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XG4gIHdpZHRoOiAzNDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG4uZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5sb2dpbi1mb3JtIGgyIHtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbn1cbi5mb3JtLWNvbnRyb2wsIC5idG4ge1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYnRuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/click/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/click/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n  <div class=\"form\">\n    <h2 class=\"text-center\">Rejestracja</h2>\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"this.dane.firstName\" type=\"text\" class=\"form-control\" placeholder=\"Imię\" required=\"required\">\n    </div>\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"this.dane.lastName\" type=\"text\" class=\"form-control\" placeholder=\"Nazwisko\" required=\"required\">\n    </div>\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"this.dane.email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" required=\"required\">\n    </div>\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"this.dane.companyName\" type=\"text\" class=\"form-control\" placeholder=\"Instytucja\">\n    </div>\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"this.dane.password\" type=\"password\" class=\"form-control\" placeholder=\"Hasło\" required=\"required\">\n    </div>\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"this.passCheck\" type=\"password\" class=\"form-control\" placeholder=\"Powtórz hasło\" required=\"required\">\n    </div>\n    <div class=\"form-group\">\n      <button (click)=\"dodaj()\" type=\"submit\" class=\"btn btn-primary btn-block\">Zarejestruj</button>\n    </div>\n    <div *ngIf=\"syntaxError\" class=\"error\">\n      {{this.syntaxError}}\n    </div>\n  </div>\n  <p class=\"text-center\">Masz już konto? <a href=\"/login\">Zaloguj się!</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/click/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/click/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/true-false.service */ "./src/app/services/true-false.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(tf, http, data) {
        this.tf = tf;
        this.http = http;
        this.data = data;
        this.syntaxError = '';
        this.dane = { firstName: '', lastName: '', email: '', companyName: '', password: '' };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerButton = function () {
        this.dane = { firstName: '', lastName: '', email: '', companyName: '', password: '' };
        this.passCheck = '';
        this.tf.login_show = false;
        this.tf.register_show2 = true;
        this.tf.register_show3 = false;
    };
    RegisterComponent.prototype.dodaj = function () {
        var _this = this;
        this.syntaxError = '';
        this.syntaxError = this.checkSyntaxForRegistry(this.dane, this.passCheck);
        if (this.syntaxError === '') {
            this.http.postRegisterAdmin(this.dane).subscribe(function (i) {
                console.log(i);
            }, function (error) {
                console.log(error);
                _this.syntaxError = error.error;
            });
            this.tf.login_show = true;
            this.tf.register_show2 = false;
            this.tf.register_show3 = true;
        }
    };
    RegisterComponent.prototype.back = function () {
        this.tf.login_show = true;
        this.tf.register_show2 = false;
        this.tf.register_show3 = true;
        this.syntaxError = '';
    };
    RegisterComponent.prototype.powrot = function () {
        // this.tf.login_show = true;
        this.tf.register_show2 = false;
    };
    RegisterComponent.prototype.checkSyntaxForRegistry = function (dane, passCheck) {
        console.log('Sprawdzam składnie...');
        if (dane.firstName.length < 2) {
            return 'Wypełnij pole z imieniem.(min 2 znaki)';
        }
        else if (dane.lastName.length < 2) {
            return 'Wypełnij pole z nazwiskiem.(min 2 znaki)';
        }
        else if (dane.password.length < 5) {
            return 'Zapomniałeś podać hasła.(min 5 znaków)';
        }
        else if (!(dane.email.includes('@')) || !(dane.email.indexOf('@') > 0)
            || !((dane.email.includes('.com')) || (dane.email.includes('.pl')))) {
            return 'Niepoprawny adres email.';
        }
        else if (dane.password !== passCheck) {
            return 'Hasła różnią się.';
        }
        else {
            return '';
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/click/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/click/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__["TrueFalseService"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-box {\n  margin: 5% auto;\n  background: #f7f7f7;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding-bottom: 30px;\n}\n\n.titles {\n  text-align: center;\n  margin: 30px auto;\n}\n\n.images {\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsMkNBQTJDO0VBQzNDLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9ldmVudC9ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm94IHtcbiAgbWFyZ2luOiA1JSBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4udGl0bGVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLmltYWdlcyB7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-box\">\n  <div class=\"titles\">\n    <h1>{{this.event.name || 'Nowe wydarzenie'}}</h1>\n    <ul class=\"nav justify-content-center\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\" (click)=\"addEvent()\">Zapisz zmiany</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isNew\">\n        <a class=\"nav-link\" href=\"#\">Usuń</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isNew\">\n        <a class=\"nav-link\" href=\"#\">Dodaj zdjęcie</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/main\">Powrót</a>\n      </li>\n    </ul>\n  </div>\n  <div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label>Nazwa</label>\n        <input [(ngModel)]=\"event.name\" type=\"text\" class=\"form-control\" placeholder=\"Super wydarzenie\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label>Miejsce</label>\n        <input [(ngModel)]=\"event.place\" type=\"text\" class=\"form-control\" placeholder=\"Toruń\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Krótki opis</label>\n      <input [(ngModel)]=\"event.shortDescription\" type=\"text\" class=\"form-control\" placeholder=\"...\">\n    </div>\n    <div class=\"form-group\">\n      <label>Opis</label>\n      <input [(ngModel)]=\"event.description\" type=\"textarea\" class=\"form-control\" placeholder=\"...\">\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label>Godziny otwarcia</label>\n        <input [(ngModel)]=\"event.openingHours\" type=\"text\" class=\"form-control\" placeholder=\"PON-PT 10:00 - 15:00\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label>Cena</label>\n        <input [(ngModel)]=\"event.price\" type=\"text\" class=\"form-control\" placeholder=\"20PLN\">\n      </div>\n      <div class=\"form-group col-md-2\">\n        <label>Minimalny wiek</label>\n        <input [(ngModel)]=\"event.minAge\" type=\"number\" class=\"form-control\" placeholder=\"6\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label>Data rozpoczęcia</label>\n        <input [(ngModel)]=\"event.startDate\" type='text' class=\"form-control\" placeholder=\"...\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label>Data zakończenia</label>\n        <input [(ngModel)]=\"event.endDate\" type='text' class=\"form-control\" placeholder=\"...\">\n      </div>\n    </div>\n  </div>\n  <app-map></app-map>\n  <div *ngIf=\"!isNew\">\n    <div id=\"carouselExampleFade\" class=\"images carousel slide carousel-fade w-50\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"../../assets/images/empty-image.png\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../../assets/images/empty-image.png\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../../assets/images/empty-image.png\" class=\"d-block w-100\" alt=\"...\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Poprzedni</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Następny</span>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_true_false_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/true-false.service */ "./src/app/services/true-false.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");






var EventComponent = /** @class */ (function () {
    function EventComponent(tf, data, http, route, router) {
        var _this = this;
        this.tf = tf;
        this.data = data;
        this.http = http;
        this.route = route;
        this.router = router;
        this.event = {};
        this.onePoint = {};
        this.pointList = [];
        this.isNew = false;
        if (!data.isLoggedIn()) {
            this.router.navigate(['/login'], { relativeTo: this.route });
        }
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            if (id === 'new') {
                _this.isNew = true;
            }
            else {
                _this.loadEventData(Number(id));
            }
        });
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent.prototype.loadEventData = function (id) {
        var _this = this;
        this.http.getEventAdminById(this.data.accessToken, id).subscribe(function (i) {
            console.log(i);
            _this.event = i;
        });
    };
    EventComponent.prototype.addEvent = function () {
        var _this = this;
        this.event.geographicCoordinate.latitude = this.data.lat;
        this.event.geographicCoordinate.longitude = this.data.lng;
        var accessToken = this.data.accessToken;
        this.data.error = this.data.checkSyntax(this.data); //  SPRAWDZANIE POPRAWNOSCI W INPUTACH
        if (this.data.error === '') {
            this.http.postAddEventAdmin(this.data, accessToken).subscribe(function (i) {
                _this.data.newEventId = i.newEventId;
                _this.router.navigate(['/event/' + i.newEventId], { relativeTo: _this.route });
            });
        }
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css"), __webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_true_false_service__WEBPACK_IMPORTED_MODULE_3__["TrueFalseService"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 340px;\n}\n\n.buttons {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIHdpZHRoOiAzNDBweDtcbn1cblxuLmJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-around flex-wrap\">\n  <div class=\"card\" *ngFor=\"let event of eventList\">\n    <img src=\"...\" class=\"card-img-top\" alt=\"Image\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{event.name}}</h5>\n      <p class=\"card-text\">{{event.shortDescription}}</p>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">{{event.startDate}}</li>\n      <li class=\"list-group-item\">{{event.startDate}}</li>\n      <li class=\"list-group-item\">{{event.place}}</li>\n    </ul>\n    <div class=\"card-body\">\n      <div class=\"buttons\">\n        <button type=\"button\" (click)=\"eventDetails(event.id)\" class=\"btn btn-outline-primary btn-sm\">Więcej</button>\n        <button type=\"button\" (click)=\"deleteEvent(event.id)\" class=\"btn btn-outline-danger btn-sm\">Usuń</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_true_false_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/true-false.service */ "./src/app/services/true-false.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EventsComponent = /** @class */ (function () {
    function EventsComponent(tf, http, data, router, route) {
        this.tf = tf;
        this.http = http;
        this.data = data;
        this.router = router;
        this.route = route;
        this.eventList = [];
        this.pointList = [];
        this.accesToken = this.data.accessToken;
        if (!data.isLoggedIn()) {
            this.router.navigate(['/login'], { relativeTo: this.route });
        }
        this.loadEvents();
    }
    EventsComponent.prototype.loadEvents = function () {
        var _this = this;
        this.http.getEventsAdmin(this.accesToken).subscribe(function (i) {
            _this.eventList = i;
        });
    };
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent.prototype.deleteEvent = function (id) {
        this.http.postEventDelete(id, this.accesToken).subscribe(function (i) {
            console.log(i);
        });
    };
    EventsComponent.prototype.eventDetails = function (id) {
        this.router.navigate(['/event/' + id], { relativeTo: this.route });
    };
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css"), __webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_true_false_service__WEBPACK_IMPORTED_MODULE_2__["TrueFalseService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-box {\n  margin: 5% auto;\n  background: #f7f7f7;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding-bottom: 30px;\n}\n\n.titles {\n  text-align: center;\n  margin: 30px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLDJDQUEyQztFQUMzQyxxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1ib3gge1xuICBtYXJnaW46IDUlIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi50aXRsZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-box\">\n  <div class=\"titles\">\n  <h1>Panel administratora</h1>\n    <ul class=\"nav justify-content-center\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/event/new\">Dodaj wydarzenie</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Importuj z CSV</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Exportuj do CSV</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"logout()\" href=\"/product\">Wyloguj</a>\n      </li>\n    </ul>\n  </div>\n  <app-events></app-events>\n<!--  <app-map *ngIf=tf.map_c_show id=\"map\"> </app-map>-->\n<!--  <app-click></app-click>-->\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_true_false_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/true-false.service */ "./src/app/services/true-false.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MainComponent = /** @class */ (function () {
    function MainComponent(http, acces, tf, router, route) {
        this.http = http;
        this.acces = acces;
        this.tf = tf;
        this.router = router;
        this.route = route;
        if (!this.acces.isLoggedIn()) {
            this.router.navigate(['/login'], { relativeTo: this.route });
        }
    }
    MainComponent.prototype.isActive = function () {
        var _this = this;
        var accessToken = this.acces.accessToken;
        this.http.isActive(accessToken).subscribe(function (i) {
        }, function (error) {
            _this.http.errors = error;
            console.log(error);
            console.log(_this.http.errors.error);
            console.log('HttpError status = ' + _this.http.errors.status);
        });
    };
    MainComponent.prototype.logout = function () {
        this.acces.removeAccessToken();
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css"), __webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _services_true_false_service__WEBPACK_IMPORTED_MODULE_4__["TrueFalseService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\n    height: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">\n    <agm-map [longitude]=\"lng\" [latitude]=\"lat\" (mapClick)=\"onChoseLocation($event)\" [zoom]=\"zoom\">\n        <div>\n            <agm-marker [latitude]=\"this.cords.onePoint.geographicCoordinate.latitude\" [longitude]=\"this.cords.onePoint.geographicCoordinate.longitude\">\n                \n            </agm-marker>\n        </div>\n        <div *ngIf=\"this.tf.showListOfPoints\">\n            <div *ngFor=\"let i of cords.listOfAll\">\n                <agm-marker [latitude]=\"i.geographicCoordinate.latitude\" [longitude]=\"i.geographicCoordinate.longitude\"\n                    [markerDraggable]=true (markerClick)=\"markerClick(i.id)\" (dragEnd)=\"markerDrag($event, i.id)\">\n                    <agm-info-window [isOpen]=\"checkMarkerId(i.id)\" [latitude]=\"i.lat\" [longitude]=\"i.lng\">\n                        <a>\n                            {{i.name}} <br>\n                            {{i.place}} <br>\n                            {{i.id}}\n                        </a>\n                    </agm-info-window>\n\n                </agm-marker>\n            </div>\n        </div>\n    </agm-map>\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_true_false_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/true-false.service */ "./src/app/services/true-false.service.ts");




var MapComponent = /** @class */ (function () {
    function MapComponent(cords, tf) {
        this.cords = cords;
        this.tf = tf;
        this.markerNumber = null;
        this.zoom = 12;
        this.inputValue = '';
        this.lng = 18.598043358450923;
        this.lat = 53.01371393719378;
    }
    MapComponent.prototype.onChoseLocation = function (event) {
        this.lng = event.coords.lng;
        this.lat = event.coords.lat;
        this.cords.lng = this.lng;
        this.cords.lat = this.lat;
        this.cords.onePoint.geographicCoordinate.latitude = this.lat;
        this.cords.onePoint.geographicCoordinate.longitude = this.lng;
        console.log('onMapClick Lng: ' + this.cords.lng + ' Lat: ' + this.cords.lat);
    };
    MapComponent.prototype.markerDrag = function (event, id) {
        this.cords.listOfAll.forEach(function (element) {
            if (element.id === id) {
                element.geographicCoordinate.latitude = event.coords.lat;
                element.geographicCoordinate.longitude = event.coords.lng;
            }
        });
    };
    MapComponent.prototype.markerClick = function (id) {
        this.markerNumber = id;
    };
    MapComponent.prototype.checkMarkerId = function (id) {
        return this.markerNumber === id;
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_true_false_service__WEBPACK_IMPORTED_MODULE_3__["TrueFalseService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-spy=\"scroll\" data-target=\"#navbar-menu\" data-offset=\"110\">\n\n\n  <!-- Preloader -->\n  <div id=\"loading\">\n    <div id=\"loading-center\">\n      <div id=\"loading-center-absolute\">\n        <div class=\"object\" id=\"object_one\"></div>\n        <div class=\"object\" id=\"object_two\"></div>\n        <div class=\"object\" id=\"object_three\"></div>\n        <div class=\"object\" id=\"object_four\"></div>\n      </div>\n    </div>\n  </div><!--End off Preloader -->\n\n\n  <div class=\"culmn\">\n    <!--Home page style-->\n\n\n    <nav class=\"navbar navbar-default bootsnav navbar-fixed no-background white\">\n\n      <div class=\"container\">\n        <!-- Start Header Navigation -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-menu\">\n            <i class=\"fa fa-bars\"></i>\n          </button>\n          <a class=\"navbar-brand\" href=\"#brand\">\n            <img src=\"../../assets/images/logo.png\" class=\"logo\" alt=\"\">\n            <!--<img src=\"assets/images/footer-logo.png\" class=\"logo logo-scrolled\" alt=\"\">-->\n          </a>\n\n        </div>\n        <!-- End Header Navigation -->\n\n        <!-- navbar menu -->\n        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"/login\"><i class=\"fa fa-sign-in\"></i> Logowanie</a></li>\n            <li><a href=\"/register\"><i class=\"fa fa-user-plus\"></i> Rejestracja</a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div>\n\n    </nav>\n\n    <!--Home Sections-->\n    <section id=\"home\" class=\"home bg-black fix\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"main_home\">\n            <div class=\"col-md-12\">\n              <div class=\"hello_slid\">\n                <div class=\"slid_item xs-text-center\">\n                  <div class=\"col-sm-4\">\n                    <img src=\"../../assets/images/hello-phone-all.png\" alt=\"\"/>\n                  </div>\n                  <div class=\"col-sm-8\">\n                    <div class=\"home_text xs-m-top-30\">\n                      <h2 class=\"text-white\">Witamy w <strong>Walk-e</strong></h2>\n                      <h1 class=\"text-white\">Przenosimy mapy do telefonu</h1>\n                      <h3 class=\"text-white\">Tworzymy <strong>aplikację</strong> dla wydarzeń publicznych</h3>\n                    </div>\n\n                    <div class=\"home_btns m-top-40\">\n                      <a href=\"\" class=\"btn btn-primary m-top-20\">Pobierz aplikację</a>\n                      <!--                    <a href=\"\" class=\"btn btn-default m-top-20\">Take a Tour</a>-->\n                    </div>\n                  </div>\n                </div><!-- End off slid item -->\n\n              </div>\n            </div>\n          </div>\n        </div><!--End off row-->\n      </div><!--End off container -->\n    </section> <!--End off Home Sections-->\n\n\n    <!--Featured Section-->\n    <section id=\"features\" class=\"features bg-grey\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"main_features fix roomy-70\">\n            <div class=\"col-md-6\">\n              <div class=\"features_item sm-m-top-30\">\n                <div class=\"f_item_icon\">\n                  <i class=\"icon icon-medical\"></i>\n                </div>\n                <div class=\"f_item_text\">\n                  <h3>Aplikacja na Androida</h3>\n                  <p>Aplikacja Walk-e dostępna tworzona jest dla z myślą o użytkownikach systemu operacyjnego\n                    Android.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"features_item sm-m-top-30\">\n                <div class=\"f_item_icon\">\n                  <i class=\"icon icon-clock2\"></i>\n                </div>\n                <div class=\"f_item_text\">\n                  <h3>Bez zakładania konta</h3>\n                  <p>Aby korzystać z aplikacji mobilnej nie musisz zakładać żadnego konta! Wystarczy zainstalować\n                    aplikację i już można przeglądać wydarzenia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"features_item m-top-70\">\n                <div class=\"f_item_icon\">\n                  <i class=\"icon icon-adjustments\"></i>\n                </div>\n                <div class=\"f_item_text\">\n                  <h3>Bez papierowych map</h3>\n                  <p>Dzięki aplikacji pozbędziesz się papierowych map. Wystarczy wyszukać event i całą trasę\n                    dostosujesz i przejdziesz z naszą aplikacją.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"features_item m-top-70\">\n                <div class=\"f_item_icon\">\n                  <i class=\"icon icon-tablet2\"></i>\n                </div>\n                <div class=\"f_item_text\">\n                  <h3>Panel administratora</h3>\n                  <p>Wygodna aplikacja webowa, dla organizatorów wydarzeń publicznych, aby w prosty sposób mogli\n                    dodawać swoje eventy.</p>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div><!-- End off row -->\n      </div><!-- End off container -->\n    </section><!-- End off Featured Section-->\n\n    <!--Business Section-->\n    <section id=\"business\" class=\"business bg-blue roomy-70\">\n      <div class=\"business_overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"main_business\">\n            <div class=\"col-md-5\">\n              <div class=\"business_item sm-m-top-50\">\n                <h2 class=\"text-uppercase text-white\"><strong>WALK-E</strong> - wydarzenia publiczne</h2>\n\n                <p class=\"m-top-20 text-white\">Aplikacja została stworzona w celu ułatwienia udziału w wydarzeniach publicznych,\n                których poszczególne części rozsiane są po całym mieście. Papierowe mapy to już przeżytek, a telefon mamy zawsze pod ręką,\n                dzięki temu możemy w każdej chwili zobaczyć, gdzie powinniśmy się udać. Dodatkowo możemy przeglądać i wyszukiwać wydarzenia w pobliżu,\n                zapisywać ulubione a także dostosowywać trasy pod siebie. Za duży plus aplikacji uważamy jej prostotę\n                  oraz fakt, że nie trzeba w niej zakładać konta. Wszystkie dane trzymane są na telefonie, dzięki temu wystarczy\n                  tylko zainstalować i korzystać.\n                  <br><br>\n                Dla organizatorów tychże wydarzeń przygotowaliśmy specjalny panel, w którym w łatwy sposób będą mogli dodawać\n                ich eventy, edytować, załączać zdjęcia oraz usuwać.</p>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-7\">\n              <div class=\"business_item\">\n                <div class=\"business_img\">\n                  <img src=\"../../assets/images/business-img.png\" alt=\"\"/>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </section><!-- End off Business section -->\n\n\n    <!--product section-->\n    <section id=\"product\" class=\"product text-center\">\n      <div class=\"container\">\n        <div class=\"main_product roomy-80\">\n          <div class=\"head_title text-center fix\">\n            <h2 class=\"text-uppercase text-black\">Aplikacja mobilna</h2>\n            <h5>Dostępna na Androida</h5>\n          </div>\n\n          <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n\n            <!-- Wrapper for slides -->\n            <div class=\"carousel-inner\" role=\"listbox\">\n              <div class=\"item active\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                      <div class=\"port_item xs-m-top-30\">\n                        <div class=\"port_img\">\n                          <img src=\"../../assets/images/work-img1.jpg\" alt=\"\"/>\n                          <div class=\"port_overlay text-center\">\n                            <a href=\"../../assets/images/work-img1.jpg\" class=\"popup-img\">+</a>\n                          </div>\n                        </div>\n                        <div class=\"port_caption m-top-20\">\n                          <h5>Tytuł</h5>\n                          <h6>Podtytuł</h6>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"port_item xs-m-top-30\">\n                        <div class=\"port_img\">\n                          <img src=\"../../assets/images/work-img1.jpg\" alt=\"\"/>\n                          <div class=\"port_overlay text-center\">\n                            <a href=\"../../assets/images/work-img1.jpg\" class=\"popup-img\">+</a>\n                          </div>\n                        </div>\n                        <div class=\"port_caption m-top-20\">\n                          <h5>Tytuł</h5>\n                          <h6>Podtytuł</h6>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"port_item xs-m-top-30\">\n                        <div class=\"port_img\">\n                          <img src=\"../../assets/images/work-img1.jpg\" alt=\"\"/>\n                          <div class=\"port_overlay text-center\">\n                            <a href=\"../../assets/images/work-img1.jpg\" class=\"popup-img\">+</a>\n                          </div>\n                        </div>\n                        <div class=\"port_caption m-top-20\">\n                          <h5>Tytuł</h5>\n                          <h6>Podtytuł</h6>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"item\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                      <div class=\"port_item xs-m-top-30\">\n                        <div class=\"port_img\">\n                          <img src=\"../../assets/images/work-img1.jpg\" alt=\"\"/>\n                          <div class=\"port_overlay text-center\">\n                            <a href=\"../../assets/images/work-img1.jpg\" class=\"popup-img\">+</a>\n                          </div>\n                        </div>\n                        <div class=\"port_caption m-top-20\">\n                          <h5>Tytuł</h5>\n                          <h6>Podtytuł</h6>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"port_item xs-m-top-30\">\n                        <div class=\"port_img\">\n                          <img src=\"../../assets/images/work-img1.jpg\" alt=\"\"/>\n                          <div class=\"port_overlay text-center\">\n                            <a href=\"../../assets/images/work-img1.jpg\" class=\"popup-img\">+</a>\n                          </div>\n                        </div>\n                        <div class=\"port_caption m-top-20\">\n                          <h5>Tytuł</h5>\n                          <h6>Podtytuł</h6>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"port_item xs-m-top-30\">\n                        <div class=\"port_img\">\n                          <img src=\"../../assets/images/work-img1.jpg\" alt=\"\"/>\n                          <div class=\"port_overlay text-center\">\n                            <a href=\"../../assets/images/work-img1.jpg\" class=\"popup-img\">+</a>\n                          </div>\n                        </div>\n                        <div class=\"port_caption m-top-20\">\n                          <h5>Tytuł</h5>\n                          <h6>Podtytuł</h6>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"item\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                      <div class=\"port_item xs-m-top-30\">\n                        <div class=\"port_img\">\n                          <img src=\"../../assets/images/work-img1.jpg\" alt=\"\"/>\n                          <div class=\"port_overlay text-center\">\n                            <a href=\"../../assets/images/work-img1.jpg\" class=\"popup-img\">+</a>\n                          </div>\n                        </div>\n                        <div class=\"port_caption m-top-20\">\n                          <h5>Tytuł</h5>\n                          <h6>Podtytuł</h6>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"port_item xs-m-top-30\">\n                        <div class=\"port_img\">\n                          <img src=\"../../assets/images/work-img1.jpg\" alt=\"\"/>\n                          <div class=\"port_overlay text-center\">\n                            <a href=\"../../assets/images/work-img1.jpg\" class=\"popup-img\">+</a>\n                          </div>\n                        </div>\n                        <div class=\"port_caption m-top-20\">\n                          <h5>Tytuł</h5>\n                          <h6>Podtytuł</h6>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"port_item xs-m-top-30\">\n                        <div class=\"port_img\">\n                          <img src=\"../../assets/images/work-img1.jpg\" alt=\"\"/>\n                          <div class=\"port_overlay text-center\">\n                            <a href=\"../../assets/images/work-img1.jpg\" class=\"popup-img\">+</a>\n                          </div>\n                        </div>\n                        <div class=\"port_caption m-top-20\">\n                          <h5>Tytuł</h5>\n                          <h6>Podtytuł</h6>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n            <!-- Controls -->\n            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n              <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n              <span class=\"sr-only\">Poprzedni</span>\n            </a>\n\n            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n              <span class=\"sr-only\">Następny</span>\n            </a>\n          </div>\n        </div><!-- End off row -->\n      </div><!-- End off container -->\n    </section><!-- End off Product section -->\n\n\n    <!--Call to  action section-->\n    <section id=\"action\" class=\"action bg-blue roomy-40\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"maine_action\">\n            <div class=\"col-md-8\">\n              <div class=\"action_item text-center\">\n                <h2 class=\"text-white text-uppercase\">Zapraszamy do użytkowania</h2>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"action_btn text-left sm-text-center\">\n                <a href=\"\" class=\"btn btn-default\">Pobierz</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n\n    <footer id=\"contact\" class=\"footer action-lage bg-black p-top-80\">\n      <!--<div class=\"action-lage\"></div>-->\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"widget_area\">\n            <div class=\"col-md-4 center\">\n              <div class=\"widget_item widget_about\">\n                <h5 class=\"text-white\">About Us</h5>\n                <p class=\"m-top-20\">Jesteśmy zespołem VIII biorącym udział w przedmiocie \"Programowanie Zespołowe\"\n                w 2019r.</p>\n                <div class=\"widget_ab_item m-top-30\">\n                  <div class=\"widget_ab_item_text\">\n                    <h6 class=\"text-white\">Lokalizacja</h6>\n                    <p>\n                      Uniwersytet Mikołaja Kopernika w Toruniu<br>\n                    Wydział Matematyki i Informatyki</p>\n                  </div>\n                </div>\n                <div class=\"widget_ab_item m-top-30\">\n                  <div class=\"widget_ab_item_text\">\n                    <h6 class=\"text-white\">Adres email</h6>\n                    <p>prog.zesp.2019@gmail.com</p>\n                  </div>\n                </div>\n              </div><!-- End off widget item -->\n            </div><!-- End off col-md-3 -->\n\n            <div class=\"col-md-4 center\">\n              <div class=\"widget_item widget_latest sm-m-top-50\">\n                <h5 class=\"text-white\">Nowości</h5>\n                <div class=\"widget_latst_item m-top-30\">\n                  <div class=\"widget_latst_item_text\">\n                    <p>Poprawa wizualna aplikacji webowej</p>\n                    <a href=\"\">7 maja 2019</a>\n                  </div>\n                </div>\n                <div class=\"widget_latst_item m-top-30\">\n                  <div class=\"widget_latst_item_text\">\n                    <p>Poprawa wizualna aplikacji mobilnej</p>\n                    <a href=\"\">3 maja 2019</a>\n                  </div>\n                </div>\n                <div class=\"widget_latst_item m-top-30\">\n                  <div class=\"widget_latst_item_text\">\n                    <p>Ulepszenie funkcjonalności tras</p>\n                    <a href=\"\">22 kwietnia 2019</a>\n                  </div>\n                </div>\n              </div><!-- End off widget item -->\n            </div><!-- End off col-md-3 -->\n\n            <div class=\"col-md-4 center\">\n              <div class=\"widget_item widget_newsletter sm-m-top-50\">\n                <h5 class=\"text-white\">Newsletter</h5>\n                <form class=\"form-inline m-top-30\">\n                  <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Podaj swój email\">\n                    <button type=\"submit\" class=\"btn text-center\"><i class=\"fa fa-arrow-right\"></i></button>\n                  </div>\n\n                </form>\n                <div class=\"widget_brand m-top-40\">\n                  <a href=\"\" class=\"widget_brand_logo text-uppercase\">Walk-e</a>\n                  <p>Dodatkowe informacje o zespole i projekcie znajdują się na stronie\n                  <a href=\"https://aleks-2.mat.umk.pl/pz2018/zesp08/\">zespołu VIII</a>.</p>\n                </div>\n\n              </div><!-- End off widget item -->\n            </div><!-- End off col-md-3 -->\n          </div>\n        </div>\n      </div>\n      <div class=\"main_footer fix bg-mega text-center p-top-40 p-bottom-30 m-top-80\">\n        <div class=\"col-md-12\">\n          <p class=\"wow fadeInRight\" data-wow-duration=\"1s\">\n            Made with\n            <i class=\"fa fa-heart\"></i>\n            by\n            <a target=\"_blank\" href=\"http://bootstrapthemes.co\">Bootstrap Themes</a>\n            2016. Edited by Team VIII. Photos from Freepik. All Rights Reserved\n          </p>\n        </div>\n      </div>\n    </footer>\n\n\n  </div>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);



var DataService = /** @class */ (function () {
    function DataService() {
        this.accessToken = '';
        this.error = '';
        this.lng = 0;
        this.lat = 0;
        this.onePoint = { geographicCoordinate: {} };
        this.onePoint.geographicCoordinate.latitude = 53.01371393719378;
        this.onePoint.geographicCoordinate.longitude = 18.598043358450923;
    }
    DataService.prototype.getAccessToken = function () {
        return sessionStorage.getItem('token');
    };
    DataService.prototype.saveAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        sessionStorage.setItem('token', accessToken);
    };
    DataService.prototype.removeAccessToken = function () {
        sessionStorage.removeItem('token');
    };
    DataService.prototype.isLoggedIn = function () {
        console.log(this.getAccessToken());
        return this.getAccessToken() !== '' && !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.getAccessToken());
    };
    DataService.prototype.checkSyntax = function (data) {
        if (data.geographicCoordinate.latitude === 0 && data.geographicCoordinate.longitude === 0) {
            return 'Pick cords on map...';
        }
        else if (data.name.length < 5) {
            return 'Name is to short...';
        }
        else if (data.description.length < 10) {
            return 'Desc. min. 10...';
        }
        else if (data.place.length < 5) {
            return 'Place is to short...';
        }
        else {
            return '';
        }
    };
    DataService.prototype.checkLoginError = function (errorCode) {
        if (errorCode === 200) {
            return '';
        }
        else if (errorCode === 401) {
            return 'Unauthorized 401';
        }
        else if (errorCode === 403) {
            return 'Forbidden 403';
        }
        else if (errorCode === 404) {
            return 'Not Found 404';
        }
        else if (errorCode === 406) {
            return 'Not Found 406';
        }
        else {
            return 'Server error! Try again.';
        }
    };
    DataService.prototype.clearCords = function () {
        this.lat = 0;
        this.lng = 0;
    };
    DataService.prototype.resetData = function () {
        return {
            name: '', description: '', place: '', geographicCoordinate: { latitude: 0, longitude: 0 },
            endDate: 0, startDate: 0
        };
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.errors = {};
        this.errors.status = 0;
    }
    HttpService.prototype.postLoginAdmin = function (log) {
        // Logowanie do servera przu uzyciu interfejsu Login zawierajacej haslo i emai, powinno zwrocic accessToken
        return this.http.post('https://team8-server.herokuapp.com/admin/login', log);
    };
    HttpService.prototype.postLogoutAdmin = function (accessToken) {
        return this.http.post('https://team8-server.herokuapp.com/admin/logout?accessToken=' + accessToken, null);
    };
    HttpService.prototype.postRegisterAdmin = function (log) {
        // Logowanie do servera przu uzyciu interfejsu Login zawierajacej haslo i emai, powinno zwrocic accessToken
        return this.http.post('https://team8-server.herokuapp.com/admin/register', log);
    };
    HttpService.prototype.postImgAdd = function (accessToken, eventId, img) {
        var formData = new FormData();
        formData.append('file', img);
        return this.http.post('https://team8-server.herokuapp.com/admin/event/' + eventId + '/image?accessToken=' + accessToken, formData);
    };
    HttpService.prototype.postAddEventAdmin = function (log, accessToken) {
        // Dodawanie eventu
        return this.http.post('https://team8-server.herokuapp.com/admin/event?accessToken=' + accessToken, log);
    };
    HttpService.prototype.postAddPointAdmin = function (log, accessToken) {
        // Dodawanie punktu do eventu
        return this.http.post('https://team8-server.herokuapp.com/admin/point?accessToken=' + accessToken + '', log);
    };
    HttpService.prototype.postEventEdit = function (id, event, accessToken) {
        // Edycja pojedynczego eventu
        return this.http.post('https://team8-server.herokuapp.com/admin/event/' + id + '/edit?accessToken=' + accessToken, event);
    };
    HttpService.prototype.postPointEdit = function (id, point, accessToken) {
        // Edycja pojedynczego punktu
        return this.http.post('https://team8-server.herokuapp.com/admin/point/' + id + '/edit?accessToken=' + accessToken, point);
    };
    HttpService.prototype.postEventDelete = function (id, accessToken) {
        // Usuwanie pojedynczego eventu
        return this.http.post('https://team8-server.herokuapp.com/admin/event/' + id + '/delete?accessToken=' + accessToken, null);
    };
    HttpService.prototype.postPointDelete = function (eventId, pointId, accessToken) {
        // Usuwanie pojedynczego punktu
        return this.http.post('https://team8-server.herokuapp.com/admin/'
            + eventId + '/point/' + pointId + '/delete?accessToken=' + accessToken, null);
    };
    HttpService.prototype.getEventsAdmin = function (accessToken) {
        // Pobieranie eventów danego admina
        return this.http.get('https://team8-server.herokuapp.com/admin/events?accessToken=' + accessToken);
    };
    HttpService.prototype.getEventAdminById = function (accessToken, id) {
        // Pobieranie pojedynczego eventu
        return this.http.get('https://team8-server.herokuapp.com/admin/event/' + id + '/?accessToken=' + accessToken);
    };
    HttpService.prototype.getPointAdminById = function (eventId, pointId, accessToken) {
        // Pobieranie pojedynczego punktu
        return this.http.get('https://team8-server.herokuapp.com/admin/'
            + eventId + '/point/' + pointId + '/?accessToken=' + accessToken);
    };
    HttpService.prototype.getEventsPointsAdmin = function (accessToken, id) {
        // Pobieranie punktów eventu o danym id
        return this.http.get('https://team8-server.herokuapp.com/admin/' + id + '/points?accessToken=' + accessToken);
    };
    HttpService.prototype.isActive = function (accessToken) {
        // Metotda sprawdza czy jestes aktywny
        return this.http.get('https://team8-server.herokuapp.com/admin/active?accessToken=' + accessToken);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/true-false.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/true-false.service.ts ***!
  \************************************************/
/*! exports provided: TrueFalseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrueFalseService", function() { return TrueFalseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrueFalseService = /** @class */ (function () {
    function TrueFalseService() {
        this.click_c_show1 = true;
        this.click_c_show2 = false;
        this.map_c_show = false;
        this.navigation_c_show_buttons = true;
        this.navigation_c_add = false;
        this.add_point_show1 = false;
        this.add_point_show2 = true;
        this.eddit_show1 = false;
        this.eddit_show2 = false;
        this.eddit_nav_show = false;
        this.edit_event_show1 = false;
        this.edit_event_show2 = false;
        /// logowanie i rejstracja
        this.login_show = true;
        this.register_show = true;
        this.register_show1 = true;
        this.register_show2 = false;
        this.register_show3 = true;
        this.login_show1 = true;
        this.opis_show1 = true;
        /// app-edit-event
        this.edit_picked_event = false;
        this.edit_picked_event_points = false;
        this.edit_one_point = false;
        this.edit_picked_event_add_new_point = false; // dodaj nowy punkt do eventu
        this.showListOfPoints = false;
        this.logoutButtonShow = false;
    }
    TrueFalseService.prototype.logoutFunction = function () {
        this.click_c_show1 = true;
        this.click_c_show2 = false;
        this.map_c_show = false;
        this.navigation_c_show_buttons = true;
        this.navigation_c_add = false;
        this.add_point_show1 = false;
        this.add_point_show2 = true;
        this.eddit_show1 = false;
        this.eddit_show2 = false;
        this.eddit_nav_show = false;
        this.edit_event_show1 = false;
        this.edit_event_show2 = false;
        this.login_show = true;
        this.register_show1 = true;
        this.register_show2 = false;
        /// app-edit-event
        this.edit_picked_event = false;
        this.edit_picked_event_points = false;
        this.edit_one_point = false;
        this.logoutButtonShow = false;
        this.edit_picked_event_add_new_point = false;
        this.showListOfPoints = false;
    };
    TrueFalseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrueFalseService);
    return TrueFalseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jakubpradzynski/GitHub/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map