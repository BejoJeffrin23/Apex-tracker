(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/character/character.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/character/character.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bd-example\">\n    <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"assets/apex1.jpg\" class=\"d-block  char\" alt=\"...\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>BANGALORE</h5>\n            <p>.</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"assets/apex2.jpg\" class=\"d-block  char\" alt=\"...\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>WRAITH</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"assets/apex3.jpg\" class=\"d-block char\" alt=\"...\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>LIFE LINE</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"assets/apex4.jpg\" class=\"d-block char\" alt=\"...\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>MIRAGE</h5>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ><img src=\"assets/error.jpg\" class=\"error\">\n<h1>Enter the correct details</h1>\n<button [routerLink]=\"['/track']\"><--Go BAck</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/log/log.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/log/log.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"con\">\n    <nav class=\"navbar navbar-expand-lg navbar-light b\">\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.png\" class=\"try\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n         \n         \n          <li class=\"nav-item active\">\n            <a [routerLink]=\"['/character']\" class=\"nav-link\" id=\"at\" href=\"#\">Characters <span class=\"sr-only\">(current)</span></a>\n          </li>\n         \n           \n          \n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"at\">\n              BG-Colour\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <button class=\"dropdown-item\" id=\"bgblue\" href=\"#\">Blue</button>\n              <div class=\"dropdown-divider\"></div>\n              <button class=\"dropdown-item\" id=\"bgblack\" href=\"#\">Black</button>\n              <div class=\"dropdown-divider\"></div>\n              <button class=\"dropdown-item\" id=\"bggrey\" href=\"#\">Grey</button>\n            </div>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\"  href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"at\">\n             BG- Images\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <button class=\"dropdown-item\" id=\"ninja-img\" href=\"#\">NInja</button>\n              <div class=\"dropdown-divider\"></div>\n              <button class=\"dropdown-item\" id=\"gun\" href=\"#\">Gun-man</button>\n              <div class=\"dropdown-divider\"></div>\n              <button class=\"dropdown-item\" id=\"str\" href=\"#\">Dr.StRange</button>\n              <div class=\"dropdown-divider\"></div>\n              <button class=\"dropdown-item\" id=\"cap\" href=\"#\">Captain America</button>\n             \n            </div>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" id=\"at\" href=\"https://en.wikipedia.org/wiki/Apex_Legends\">Details <span class=\"sr-only\">(current)</span></a>\n          </li>\n         \n        </ul>\n        \n      </div>\n    </nav>\n    <div class=\"container-fluid parent\">\n      <img src=\"assets/img.png\" id=\"ninja\" class=\"img2\">\n      \n    <div class=\"para\">\n      <h1 style=\"text-align: center;\">APEX TRACKER</h1>\n      <div class=\"dropdown-divider\"></div>\n     <a [routerLink]=\"['/track']\"><img src=\"assets/logo.png\" class=\"tryt\"></a>\n     <h3 style=\"color: burlywood;text-align: center\">Click Here</h3>\n    </div>\n    </div>\n\n\n    </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/track/track.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/track/track.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"banner\">\n        <video [muted]=\"'muted'\" autoplay loop>\n            <source src=\"assets/mm.mp4\" type=\"video/mp4\">\n        </video>\n    </div>\n<ngx-spinner></ngx-spinner>\n    <div class=\"pos-form\">\n    <form #createBlogForm='ngForm' (ngSubmit)='get()'>\n        \n        <div class=\"form-group\">\n            <label >Platform</label>\n            <div class=\"dropdown\">\n                \n                <select name=\"device\" [(ngModel)]='device' id=\"device\" placeholder=\"select\">\n                  \n                    <option  value=\"psn\">Playstation</option>\n                    <option value=\"xbl\">Xbox</option>\n                    <option value=\"Origin\">Origin</option>\n                  </select>\n              </div>\n        </div>\n        <div class=\"form-group\">\n            <label >Gamer tag</label>\n            <input type=\"text\" class=\"form-control\" name=\"gamerTag\" [(ngModel)]=\"gamerTag\" placeholder=\"Enter your gamer tag\">\n            <small  class=\"form-text text-muted\">Check using gamertag Gsnk_Denchu.</small>\n          </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]='!createBlogForm.form.valid'>Submit</button>\n      </form>\n      </div>\n    \n  \n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-detail/view-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-detail/view-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full\">\n<div *ngIf=\"profileData\" class=\"container\">\n    <h1 class=\"gamertag\">\n    <img src=\"{{profileData.data.platformInfo.avatarUrl}}\" class=\"avatar\">\n    {{profileData.data.platformInfo.platformUserId}}\n</h1>\n<div class=\"grid\">\n    <div>\n        <img src=\"{{profileData.data.segments[1].metadata.imageUrl}}\" >\n    </div>\n    <div>\n        <ul>\n            <li>\n                <h4>Selected Legend</h4>\n                <p>{{profileData.data.metadata.activeLegendName}}</p>\n            </li>\n            <li *ngIf=\"profileData.data.segments[0].stats.seasonWins\">\n                <h4>Season Wins</h4>\n                <p>\n                        {{profileData.data.segments[0].stats.seasonWins.displayValue}}\n                        <span>\n                                {{profileData.data.segments[0].stats.seasonWins.percentile}}%\n  \n                        </span>\n                        \n                </p>\n            </li>\n            <li *ngIf=\"profileData.data.segments[0].stats.level\" >\n                    <h4>Apex Level</h4>\n                    <p>\n                            {{profileData.data.segments[0].stats.level.displayValue}}\n                            <span>\n                                    {{profileData.data.segments[0].stats.level.percentile}}%\n      \n                            </span>\n                            \n                    </p>\n                </li>\n                <li *ngIf=\"profileData.data.segments[0].stats.kills\" >\n                        <h4>Total Kills</h4>\n                        <p>\n                                {{profileData.data.segments[0].stats.kills.displayValue}}\n                                <span>\n                                        {{profileData.data.segments[0].stats.kills.percentile}}%\n          \n                                </span>\n                                \n                        </p>\n                    </li>\n        </ul>\n    </div>\n</div>\n<button [routerLink]=\"['/track']\">Go back</button>\n</div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./character/character.component */ "./src/app/character/character.component.ts");
/* harmony import */ var _track_track_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./track/track.component */ "./src/app/track/track.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-detail/view-detail.component */ "./src/app/view-detail/view-detail.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _log_log_component__WEBPACK_IMPORTED_MODULE_6__["LogComponent"],
            _character_character_component__WEBPACK_IMPORTED_MODULE_8__["CharacterComponent"],
            _track_track_component__WEBPACK_IMPORTED_MODULE_9__["TrackComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
            _view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_13__["ViewDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                { path: 'log', component: _log_log_component__WEBPACK_IMPORTED_MODULE_6__["LogComponent"] },
                { path: '', redirectTo: 'log', pathMatch: 'full' },
                { path: 'character', component: _character_character_component__WEBPACK_IMPORTED_MODULE_8__["CharacterComponent"] },
                { path: 'track', component: _track_track_component__WEBPACK_IMPORTED_MODULE_9__["TrackComponent"] },
                { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"] },
                { path: 'view', component: _view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_13__["ViewDetailComponent"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/character/character.component.css":
/*!***************************************************!*\
  !*** ./src/app/character/character.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".char{\r\n    height: 48vmax;\r\n    width:90vmin;\r\n    margin: auto;\r\n\r\n}\r\n.bd-example{\r\n\r\n    background-color: black;\r\n    height: 100vh;\r\n\r\n}\r\n@media (max-width:700px){\r\n\r\n    .char{\r\n        height: 60vmax;}\r\n.carousel{\r\n    padding-bottom: 100px;\r\n}\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZOztBQUVoQjtBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixhQUFhOztBQUVqQjtBQUNBOztJQUVJO1FBQ0ksY0FBYyxDQUFDO0FBQ3ZCO0lBQ0kscUJBQXFCO0FBQ3pCOzs7O0FBSUEiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcntcclxuICAgIGhlaWdodDogNDh2bWF4O1xyXG4gICAgd2lkdGg6OTB2bWluO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxufVxyXG4uYmQtZXhhbXBsZXtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KXtcclxuXHJcbiAgICAuY2hhcntcclxuICAgICAgICBoZWlnaHQ6IDYwdm1heDt9XHJcbi5jYXJvdXNlbHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuXHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/character/character.component.ts":
/*!**************************************************!*\
  !*** ./src/app/character/character.component.ts ***!
  \**************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CharacterComponent = class CharacterComponent {
    constructor() { }
    ngOnInit() {
    }
};
CharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character',
        template: __webpack_require__(/*! raw-loader!./character.component.html */ "./node_modules/raw-loader/index.js!./src/app/character/character.component.html"),
        styles: [__webpack_require__(/*! ./character.component.css */ "./src/app/character/character.component.css")]
    })
], CharacterComponent);



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\nh1{\r\n    top: 2%;\r\n    position: absolute;\r\n    z-index: 1;\r\n    text-align: center;\r\n    color: aqua;\r\n}\r\nbutton {\r\n    position: absolute;\r\n    z-index: 1;\r\n    background-color: aqua;\r\n    top: 90%;\r\n    font-size: 150%;\r\n    left: 45%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsZUFBZTtJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbmgxe1xyXG4gICAgdG9wOiAyJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYXF1YTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICB0b3A6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIGxlZnQ6IDQ1JVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpServiceService = class HttpServiceService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = "/api/v1/profile";
        this.getUserInfoInLocalStorage = () => {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
        this.setUserInfoInLocalStorage = (data) => {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    getsingle(device, tag) {
        let one = this._http.get(`${this.baseUrl}/${device}/${tag}`);
        console.log(one);
        return one;
    }
};
HttpServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpServiceService);



/***/ }),

/***/ "./src/app/log/log.component.css":
/*!***************************************!*\
  !*** ./src/app/log/log.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n    display: flex;\r\n    flex-wrap: wrap\r\n}\r\n.img2{\r\n    height: 60vmax;\r\n    width: 35vmax;\r\n    margin-left:9vmax;\r\n    margin-top: -6vmax;\r\n    \r\n}\r\n.para{\r\n    background-color: aqua;\r\n    border: 1px solid black;\r\n    height: 40vmin;\r\n    width:21vmax;\r\n    margin-top: 20vmin;\r\n    margin-left: 30vmin;\r\n}\r\n.navbar-nav > li{\r\n    padding-left: 100px;\r\n    padding-right: 60px;\r\n}\r\n.con{\r\n    background-color: black;\r\n    height: 100%;\r\n    \r\n}\r\n.b{\r\n    background-color: aquamarine;\r\n}\r\n.tryt{\r\n    height: 10vh;\r\n    width: 15vmin;\r\n    border-radius: 100%;\r\n    margin-left: 6vmax\r\n    \r\n}\r\n.try{\r\n    height: 8vh;\r\n    width: 5.8vh;\r\n    border-radius: 100%\r\n}\r\n.try:hover{\r\n   transform: scale(1.2,1.2)\r\n}\r\n#at:hover{\r\n    background-color: aqua\r\n}\r\n.form{\r\nmargin: 0;\r\npadding: 0;\r\nbackground-position: center;\r\n}\r\n.login-box{\r\n    width: 30vw;\r\n    height: 40vh;\r\n    background: rgba(0, 0,0,.6);\r\n    color: #fff;\r\n    top:500%;\r\n    left: 50%;\r\n    position:relative;\r\n    transform: translate(2vw,-45vw);\r\n    box-sizing: border-box;\r\n}\r\n@media screen and (max-width:768px){\r\n     \r\n    .para h1{\r\n        font-size: 1.75rem;\r\n    }\r\n\r\n    .para{\r\n        height: 36vmax;\r\n    }\r\n    .parent{\r\n        \r\n        flex-wrap: wrap-reverse\r\n    }\r\n    \r\n    .img2{\r\n        height: 95vmax;\r\n        width: 30vmax;\r\n        margin-left:9vmax;\r\n        margin-top:-15vmax;\r\n        \r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nL2xvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTs7QUFFaEI7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkI7O0FBRUo7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjtBQUNBO0dBQ0c7QUFDSDtBQUVBO0lBQ0k7QUFDSjtBQUVBO0FBQ0EsU0FBUztBQUNULFVBQVU7QUFDViwyQkFBMkI7QUFDM0I7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUk7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7O1FBRUk7SUFDSjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGtCQUFrQjs7SUFFdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZy9sb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwXHJcbn1cclxuLmltZzJ7XHJcbiAgICBoZWlnaHQ6IDYwdm1heDtcclxuICAgIHdpZHRoOiAzNXZtYXg7XHJcbiAgICBtYXJnaW4tbGVmdDo5dm1heDtcclxuICAgIG1hcmdpbi10b3A6IC02dm1heDtcclxuICAgIFxyXG59XHJcblxyXG4ucGFyYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogNDB2bWluO1xyXG4gICAgd2lkdGg6MjF2bWF4O1xyXG4gICAgbWFyZ2luLXRvcDogMjB2bWluO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwdm1pbjtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgPiBsaXtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uY29ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuLmJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcbi50cnl0e1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgd2lkdGg6IDE1dm1pbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNnZtYXhcclxuICAgIFxyXG59XHJcblxyXG4udHJ5e1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICB3aWR0aDogNS44dmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlXHJcbn1cclxuLnRyeTpob3ZlcntcclxuICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsMS4yKVxyXG59XHJcblxyXG4jYXQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhXHJcbn1cclxuXHJcbi5mb3Jte1xyXG5tYXJnaW46IDA7XHJcbnBhZGRpbmc6IDA7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWJveHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLDAsLjYpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0b3A6NTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnZ3LC00NXZ3KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgXHJcbiAgICAucGFyYSBoMXtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcmF7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnZtYXg7XHJcbiAgICB9XHJcbiAgICAucGFyZW50e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWcye1xyXG4gICAgICAgIGhlaWdodDogOTV2bWF4O1xyXG4gICAgICAgIHdpZHRoOiAzMHZtYXg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6OXZtYXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMTV2bWF4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/log/log.component.ts":
/*!**************************************!*\
  !*** ./src/app/log/log.component.ts ***!
  \**************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogComponent = class LogComponent {
    ngOnInit() { }
    ngAfterViewInit() {
        $("#tt").ready(function () {
            $('#bgblue').click(() => {
                $(".con").css("background-color", "#486FCA");
                $(".para").css("background-color", "blue");
            });
            $('#bgblack').click(() => {
                $(".con").css("background-color", "black");
                $(".para").css("background-color", "aqua");
            });
            $('#bggrey').click(() => {
                $(".con").css("background-color", "grey");
                $(".para").css("background-color", "black");
            });
            $('#gun').click(() => {
                $('#ninja').attr('src', 'assets/img2.png');
            });
            $('#ninja-img').click(() => {
                $('#ninja').attr('src', 'assets/img.png');
            });
            $('#str').click(() => {
                $('#ninja').attr('src', 'assets/strange.png');
            });
            $('#cap').click(() => {
                $('#ninja').attr('src', 'assets/cap.png');
            });
        });
    }
};
LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log',
        template: __webpack_require__(/*! raw-loader!./log.component.html */ "./node_modules/raw-loader/index.js!./src/app/log/log.component.html"),
        styles: [__webpack_require__(/*! ./log.component.css */ "./src/app/log/log.component.css")]
    })
], LogComponent);



/***/ }),

/***/ "./src/app/track/track.component.css":
/*!*******************************************!*\
  !*** ./src/app/track/track.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner{\r\n    width: 60%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\nbody{\r\n    background-color:black;\r\n    display: flex;\r\n    flex-wrap: wrap\r\n}\r\n\r\nform{\r\n    background-color: blue;\r\n    margin: 10px;\r\n    height:400px;\r\n    width: 320px;\r\n    \r\n}\r\n\r\n@media screen and (max-width:800px)\r\n{\r\n    .banner{\r\n        width: 100%;\r\n        z-index: 0;\r\n    }\r\n    form{\r\n        margin-top: -500px;\r\n        z-index: 2;\r\n        height:42vh;\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        width:80vw;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2svdHJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYjtBQUNKOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7QUFFaEI7O0FBQ0E7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCx3QkFBZ0I7UUFBaEIsZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdHJhY2svdHJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcFxyXG59XHJcbmZvcm17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweClcclxue1xyXG4gICAgLmJhbm5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgfVxyXG4gICAgZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNTAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBoZWlnaHQ6NDJ2aDtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHdpZHRoOjgwdnc7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/track/track.component.ts":
/*!******************************************!*\
  !*** ./src/app/track/track.component.ts ***!
  \******************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");





let TrackComponent = class TrackComponent {
    constructor(httpService, router, spinner) {
        this.httpService = httpService;
        this.router = router;
        this.spinner = spinner;
        this.get = () => {
            this.spinner.show();
            setTimeout(() => {
                this.spinner.hide();
            }, 10000);
            console.log(this.device, this.gamerTag);
            this.httpService.getsingle(this.device, this.gamerTag).subscribe(data => {
                this.httpService.setUserInfoInLocalStorage(data);
                console.log(data);
                console.log('subscribed');
                this.router.navigate(['/view']);
            }, error => {
                console.log(error);
                setTimeout(() => {
                    this.router.navigate(['/error']);
                }, 3000);
            });
        };
    }
    ngOnInit() {
        console.log("called");
    }
};
TrackComponent.ctorParameters = () => [
    { type: _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
TrackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-track',
        template: __webpack_require__(/*! raw-loader!./track.component.html */ "./node_modules/raw-loader/index.js!./src/app/track/track.component.html"),
        styles: [__webpack_require__(/*! ./track.component.css */ "./src/app/track/track.component.css")]
    })
], TrackComponent);



/***/ }),

/***/ "./src/app/view-detail/view-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/view-detail/view-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background: rgba(0,0,0,0.5);\r\n    color: #fff;\r\n    max-width: 700px;\r\n    margin: 1rem auto;\r\n    padding: 2rem 1.5rem;\r\n    border-radius: 20px;\r\n}\r\n.full{\r\n    background-color: red;\r\n    height: 100vh;\r\n    margin-top: -2%;\r\n}\r\nh1.gamertag{\r\n    font-size: 2rem;\r\n    background: rgba(252, 190, 190, 0.6);\r\n    padding: 0.3rem 0.5rem;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    margin-bottom: 3rem;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\na{\r\n    display: inline-block;\r\n    margin-top: 2rem;\r\n    border: #fff 2px solid;\r\n}\r\na:hover{\r\n    border:#ccc 2px solid;\r\n    color: #ccc;\r\n}\r\n.avatar{\r\n    width: 40px;\r\n    margin-right: 0.7rem;\r\n}\r\nimg{\r\n    width: 100%;\r\n}\r\n.grid{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-gap: 1rem;\r\n}\r\nli{\r\n    background: rgba(252, 190, 190, 0.6);\r\n\r\n}\r\nli p{\r\n    font-size: 2rem;\r\n}\r\nli:first-child p{\r\nfont-size: 1.5rem;\r\n}\r\nli span{\r\n    font-size: 1rem;\r\n    color: #ccc;\r\n}\r\n@media (max-width:500px){\r\n    .full{\r\n        background-color: red;\r\n        height: 144vmax;\r\n        margin-top: -2%;\r\n    }\r\n    h1{\r\n        font-size: 1.5rem;\r\n        display: block;\r\n        text-align: center;\r\n    }\r\n\r\n.grid{\r\n    grid-template-columns: 1fr;\r\n\r\n}\r\nli p{\r\n    font-size: 1.5rem;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1kZXRhaWwvdmlldy1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBYztBQUNsQjtBQUVBO0lBQ0ksb0NBQW9DOztBQUV4QztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0FBRUo7SUFDSSwwQkFBMEI7O0FBRTlCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZGV0YWlsL3ZpZXctZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmZ1bGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLXRvcDogLTIlO1xyXG59XHJcblxyXG5oMS5nYW1lcnRhZ3tcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAxOTAsIDE5MCwgMC42KTtcclxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgYm9yZGVyOiAjZmZmIDJweCBzb2xpZDtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGJvcmRlcjojY2NjIDJweCBzb2xpZDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59XHJcbi5hdmF0YXJ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ncmlke1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBncmlkLWdhcDogMXJlbTtcclxufVxyXG5cclxubGl7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMTkwLCAxOTAsIDAuNik7XHJcblxyXG59XHJcblxyXG5saSBwe1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5saTpmaXJzdC1jaGlsZCBwe1xyXG5mb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxubGkgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICAuZnVsbHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDR2bWF4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yJTtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbi5ncmlke1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblxyXG59XHJcbmxpIHB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/view-detail/view-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/view-detail/view-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ViewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailComponent", function() { return ViewDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");



let ViewDetailComponent = class ViewDetailComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.profileData = this.httpService.getUserInfoInLocalStorage();
        console.log(this.profileData);
    }
};
ViewDetailComponent.ctorParameters = () => [
    { type: _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"] }
];
ViewDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-detail',
        template: __webpack_require__(/*! raw-loader!./view-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-detail/view-detail.component.html"),
        styles: [__webpack_require__(/*! ./view-detail.component.css */ "./src/app/view-detail/view-detail.component.css")]
    })
], ViewDetailComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BEJO JEFFRIN G\Downloads\tracker\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map