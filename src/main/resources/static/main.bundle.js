webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  padding-top: 70px\r\n}\r\n.slide-image {\r\n  width: 100%;\r\n}\r\n.carousel-holder {\r\n  margin-bottom: 30px;\r\n}\r\n.carousel-control,.item {\r\n  border-radius: 4px;\r\n}\r\n.caption {\r\n  height: 130px;\r\n  overflow: hidden;\r\n}\r\n.caption h4 {\r\n  white-space: nowrap;\r\n}\r\n.thumbnail img {\r\n  width: 100%;\r\n}\r\n.thumbnail {\r\n  padding: 0;\r\n}\r\n.thumbnail .caption-full {\r\n  padding: 9px;\r\n  color: #333;\r\n}\r\nfooter {\r\n  margin: 50px 0;\r\n}\r\n.starrating.glyphicon-star {\r\n  margin-right: 4px;\r\n}\r\nli.sub-chapter {\r\n  margin: 25px;\r\n  margin-top: 100px;\r\n}\r\napp-chapter-title{\r\n  width: 100%;\r\n}\r\nmat-input-container{\r\n  width: 100%;\r\n  height: 55px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <mat-card>\n    <router-outlet></router-outlet>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(toastr, vRef) {
        this.toastr = toastr;
        this.title = 'app';
        this.toastr.setRootViewContainerRef(vRef);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_common_home_home_component__ = __webpack_require__("../../../../../src/app/component/common/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_chapter_1_startpoint_chapter_1_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-1-startpoint/chapter-1-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipe_new_line_to_breaker_pipe__ = __webpack_require__("../../../../../src/app/pipe/new-line-to-breaker.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__project_project_module__ = __webpack_require__("../../../../../src/app/project/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_chapter_2_startpoint_chapter_2_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_chapter_2_startpoint_chapter_2_chapter_2_module__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_chapter_1_startpoint_components_hello_world_hello_world_component__ = __webpack_require__("../../../../../src/app/component/chapter-1-startpoint/components/hello-world/hello-world.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_chapter_3_startpoint_chapter_3_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter-3-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_chapter_3_startpoint_chapter3_chapter3_module__ = __webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter3/chapter3.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_common_code_code_component__ = __webpack_require__("../../../../../src/app/component/common/code/code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_chapter_4_startpoint_chapter_4_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter-4-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_common_chapter_title_chapter_title_component__ = __webpack_require__("../../../../../src/app/component/common/chapter-title/chapter-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_chapter_4_startpoint_chapter4_chapter4_module__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/chapter4.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_chapter_5_startpoint_chapter_5_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter-5-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__component_chapter_5_startpoint_chapter5_chapter5_module__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/chapter5.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__component_chapter_6_startpoint_chapter_6_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter-6-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_chapter_6_startpoint_chapter6_chapter6_module__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/chapter6.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_chapter_7_startpoint_chapter_7_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter-7-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__component_chapter_7_startpoint_chapter7_chapter7_module__ = __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/chapter7.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__component_common_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_chapter_1_startpoint_chapter_1_startpoint_component__["a" /* Chapter1StartpointComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipe_new_line_to_breaker_pipe__["a" /* NewLineToBreakerPipe */],
                __WEBPACK_IMPORTED_MODULE_14__component_chapter_2_startpoint_chapter_2_startpoint_component__["a" /* Chapter2StartpointComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_chapter_1_startpoint_components_hello_world_hello_world_component__["a" /* HelloWorldComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_chapter_3_startpoint_chapter_3_startpoint_component__["a" /* Chapter3StartpointComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_common_code_code_component__["a" /* CodeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__component_chapter_4_startpoint_chapter_4_startpoint_component__["a" /* Chapter4StartpointComponent */],
                __WEBPACK_IMPORTED_MODULE_22__component_common_chapter_title_chapter_title_component__["a" /* ChapterTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_24__component_chapter_5_startpoint_chapter_5_startpoint_component__["a" /* Chapter5StartpointComponent */],
                __WEBPACK_IMPORTED_MODULE_27__component_chapter_6_startpoint_chapter_6_startpoint_component__["a" /* Chapter6StartpointComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_chapter_7_startpoint_chapter_7_startpoint_component__["a" /* Chapter7StartpointComponent */],
            ],
            imports: [
                /* 3rd Module */
                __WEBPACK_IMPORTED_MODULE_26_ng2_toastr__["ToastModule"].forRoot(),
                /* Angular Module */
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                /* Angular Material & Animation Modeul */
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatChipsModule */],
                /* App Module */
                __WEBPACK_IMPORTED_MODULE_12__project_project_module__["a" /* ProjectModule */], __WEBPACK_IMPORTED_MODULE_16__component_chapter_2_startpoint_chapter_2_chapter_2_module__["a" /* Chapter2Module */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_19__component_chapter_3_startpoint_chapter3_chapter3_module__["a" /* Chapter3Module */], __WEBPACK_IMPORTED_MODULE_23__component_chapter_4_startpoint_chapter4_chapter4_module__["a" /* Chapter4Module */],
                __WEBPACK_IMPORTED_MODULE_25__component_chapter_5_startpoint_chapter5_chapter5_module__["a" /* Chapter5Module */], __WEBPACK_IMPORTED_MODULE_28__component_chapter_6_startpoint_chapter6_chapter6_module__["a" /* Chapter6Module */],
                __WEBPACK_IMPORTED_MODULE_30__component_chapter_7_startpoint_chapter7_chapter7_module__["a" /* Chapter7Module */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__service_product_service__["a" /* ProductService */], { provide: __WEBPACK_IMPORTED_MODULE_15__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_15__angular_common__["HashLocationStrategy"] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_common_home_home_component__ = __webpack_require__("../../../../../src/app/component/common/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_chapter_1_startpoint_chapter_1_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-1-startpoint/chapter-1-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_chapter_2_startpoint_chapter_2_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_chapter_3_startpoint_chapter_3_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter-3-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_chapter_4_startpoint_chapter_4_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter-4-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_chapter_5_startpoint_chapter_5_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter-5-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_chapter_6_startpoint_chapter_6_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter-6-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_chapter_7_startpoint_chapter_7_startpoint_component__ = __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter-7-startpoint.component.ts");








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__component_common_home_home_component__["a" /* HomeComponent */] },
    { path: 'chapter1', component: __WEBPACK_IMPORTED_MODULE_1__component_chapter_1_startpoint_chapter_1_startpoint_component__["a" /* Chapter1StartpointComponent */] },
    { path: 'chapter2', component: __WEBPACK_IMPORTED_MODULE_2__component_chapter_2_startpoint_chapter_2_startpoint_component__["a" /* Chapter2StartpointComponent */] },
    { path: 'chapter3', component: __WEBPACK_IMPORTED_MODULE_3__component_chapter_3_startpoint_chapter_3_startpoint_component__["a" /* Chapter3StartpointComponent */] },
    { path: 'chapter4', component: __WEBPACK_IMPORTED_MODULE_4__component_chapter_4_startpoint_chapter_4_startpoint_component__["a" /* Chapter4StartpointComponent */] },
    { path: 'chapter5', component: __WEBPACK_IMPORTED_MODULE_5__component_chapter_5_startpoint_chapter_5_startpoint_component__["a" /* Chapter5StartpointComponent */] },
    { path: 'chapter6', component: __WEBPACK_IMPORTED_MODULE_6__component_chapter_6_startpoint_chapter_6_startpoint_component__["a" /* Chapter6StartpointComponent */] },
    { path: 'chapter7', component: __WEBPACK_IMPORTED_MODULE_7__component_chapter_7_startpoint_chapter_7_startpoint_component__["a" /* Chapter7StartpointComponent */] },
];


/***/ }),

/***/ "../../../../../src/app/component/chapter-1-startpoint/chapter-1-startpoint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nli.sub-chapter {\r\n  margin: 25px;\r\n  margin-top: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-1-startpoint/chapter-1-startpoint.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n<mat-toolbar><h2>chapter-1-startpoint</h2> &nbsp;by&nbsp; <a href=\"skim327@myseneca.ca\">SiWoo-Kim</a></mat-toolbar>\n<hr>\n<ul>\n  <li class=\"sub-chapter\">\n    <h3>Component 기본</h3>\n    <p><em>컴포넌트(Component)</em>는 Angular 어플리케이션을 구성하는 기본 요소이며, 템플릿을 가진다</p>\n    <p>모든 앱은 최소한 하나의 모듈(Root Module)과 하나의 루트 컴포넌트(root component)을 가진다. </p>\n    <p>클래스의 <code>@Component</code> 선언시, 해당 클래스는 컴포넌트로 선언된다</p>\n    <hr>\n    <code [innerText]=\"escapeHtml2\"></code>\n    <hr>\n    <p>컴포넌트 어노테이션안의 <em>메타데이타(Metadata)</em> 종류에는 <code>selector</code>, <code>template</code>\n    등이 있으며 기능은 아래와같다.\n    </p>\n    <br>\n      <ul>\n        <li>selector : 컴포넌트에 고유의 HTML 태그를 부여한다</li>\n        <li>template 혹은 templateUrl : 템플릿(view) 의 정보를 명시한다</li>\n        <li>styles 혹은 styleUrls: 스타일 스크립트 의 정보를 명시한다</li>\n      </ul>\n    <br>\n    <p>컴포넌트가 위치할 <code>selector</code> 와 <code>template</code>은 최소 요구 사항이며, 뷰와 컴포넌트 로직을\n    별개로 설계하여 관심이 다른것을 분리(seperation of different concerns) 것이 컴포넌트의 핵심이다.</p>\n    <p>{{escapeHtml1}} 은 컴포넌트의 프러피티인 <strong>name</strong>을 템플릿으로 렌더링함을 의미한다</p>\n\n  </li>\n\n  <li class=\"sub-chapter\">\n    <h3>Module 기본</h3>\n    <p><em>모듈(Module></em>은 컴포넌트(Component) , 서비스(Service), 디렉티브(Directive)을 논리적인 하나의 요소로\n    모아놓은 것이다.\n    </p>\n    <hr>\n    <code [innerText]=\"escapeHtml3\"></code>\n    <hr>\n    <p>\n      모듈은 <code>@NgModule</code> 어노테이션을 붙여 선언하며 어노테이션안의\n      <em>Metadata</em>에 모듈의 내용을 설정한다.\n      RootModule (bootstrap될) 에서는 반드시 <code>BrowserModule</code>을 불러와야 하며,\n      그외 모듈은 <code>CommonModule</code>을 불러와 사용한다.\n    </p>\n  </li>\n\n  <li class=\"sub-chapter\">\n    <h3>데이터 바인딩(Data Binding) 기본</h3>\n    <p>데이터 바인딩(Data Binding)이란 컴포넌트의 프로퍼티(property)와 뷰(View or Template)을 동기화시키는 작업을 의미한다.</p>\n    <p>데이터 바인딩에는 세가지 종류가 있으며 모두 <strong>단방향이다</strong></p>\n    <ul>\n      <li>{{escapeHtml4}} : 삽입식(injection)</li>\n      <li>{{escapeHtml5}} : 프러퍼터 바인딩(property or attribute binding)</li>\n      <li>{{escapeHtml6}} : 이벤트 바인딩(event binding)</li>\n    </ul>\n    <hr>\n    <code [innerText]=\"escapeHtml7\">\n    </code>\n\n    <br>\n      <h1>Hello {{name}}! </h1>\n      <span [hidden]=\"isValid\">The field is not valid</span>\n      <button mat-raised-button (click)=\"onEventHandler()\" >Trigger event handler</button>\n\n    <hr>\n\n    <p>양방햔 바인딩(bi-directional data binding) <code>[(ngModel)]</code>로 구현 가능하지만 꼭 필요하지 않다면 사용하지 않는것이 바람직하다.\n    또한 템플릿 안에서 다른 엘리먼트의 프러퍼티를 지역 템플릿 변수(local template variable)을 생성하여 참조할 수 있다.<br/>\n      <code [innerText]=\"escapeHtml8\"></code>\n    </p>\n    <br/>\n\n    <input #localTemplate type=\"text\" >\n    <p>{{localTemplate.value}}</p>\n\n  </li>\n\n\n</ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-1-startpoint/chapter-1-startpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter1StartpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter1StartpointComponent = /** @class */ (function () {
    function Chapter1StartpointComponent() {
        this.isValid = false;
        this.name = 'Angular';
        this.escapeHtml1 = "{{name}}";
        this.escapeHtml2 = "\n" +
            "@Component({\n" +
            "  selector: 'app-chapter-1-startpoint',\n" +
            "  templateUrl: './chapter-1-startpoint.component.html',\n" +
            "  styleUrls: ['./chapter-1-startpoint.component.css']\n" +
            "})\n" +
            "export class Chapter1StartpointComponent implements OnInit {\n" +
            "  name:string;\n" + "}";
        this.escapeHtml3 = "\n" +
            "      @NgModule({\n" +
            "      declarations: [\n" +
            "      AppComponent,\n" +
            "      HomeComponent,\n" +
            "      Chapter1StartpointComponent,\n" +
            "      ],\n" +
            "      imports: [\n" +
            "      /* Angular Module */\n" +
            "      BrowserModule,HttpModule,\n" +
            "      RouterModule.forRoot(routes),\n" +
            "      ],\n" +
            "      providers: [],\n" +
            "      bootstrap: [AppComponent]\n" +
            "      })\n" +
            "      export class AppModule { }";
        this.escapeHtml4 = "{{property}}";
        this.escapeHtml5 = "[property] or [attr.attribute]";
        this.escapeHtml6 = "(event)";
        this.escapeHtml7 =
            "<h1>Hello {{name}}! </h1>\n" +
                "    <span [hidden]=\"isValid\">The field is not valid</span>\n" +
                "    <button mat-raised-button (click)=\"onEventHandler()\" >Trigger event handler</button>\n" +
                "   ";
        this.escapeHtml8 = "<input #localTemplate type=\"text\">";
    }
    Chapter1StartpointComponent.prototype.onEventHandler = function () {
        console.log("Event is handled by event handler!");
    };
    Chapter1StartpointComponent.prototype.ngOnInit = function () {
    };
    Chapter1StartpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-1-startpoint',
            template: __webpack_require__("../../../../../src/app/component/chapter-1-startpoint/chapter-1-startpoint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-1-startpoint/chapter-1-startpoint.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter1StartpointComponent);
    return Chapter1StartpointComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-1-startpoint/components/hello-world/hello-world.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-1-startpoint/components/hello-world/hello-world.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  hello-world works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-1-startpoint/components/hello-world/hello-world.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloWorldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
    };
    HelloWorldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hello-world',
            template: __webpack_require__("../../../../../src/app/component/chapter-1-startpoint/components/hello-world/hello-world.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-1-startpoint/components/hello-world/hello-world.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2-startpoint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nli.sub-chapter {\r\n  margin: 25px;\r\n  margin-top: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2-startpoint.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n<div class=\"row\">\n  <mat-toolbar><h2>chapter-2-startpoint</h2> &nbsp;by&nbsp; <a href=\"skim327@myseneca.ca\">SiWoo-Kim</a></mat-toolbar>\n  <hr>\n  <ul>\n    <li class=\"sub-chapter\">\n      <h3>Router 기본</h3>\n      <p>\n        앵귤러는 싱글 페이지 어플리케이션(Single Page Application - SPA)을 구축하는데 사용되며,\n        라우터<code>router</code>는 페이지 내용 일부를 변경하는데 이용된다. 어플리케이션에서는\n        보통 변하는 부분과 변하지 않는 부분으로 구성되는데 간략한 구성은 이러하다.\n      </p>\n      <mat-card>\n        <hr>\n      <code [innerText]=\"escapeHtml1\" >\n      </code>\n        <hr>\n      </mat-card>\n      <p> <code>main</code> 은 SPA에서 변하는 부분이며, 라우터 영역 <code [innerText]=\"'<router-outlet></router-outlet>'\"></code> 을 통하며 표시할 수 있다.\n      </p>\n      <br/>\n    </li>\n\n    <li class=\"sub-chapter\">\n      <h3>위치 정책</h3>\n      <p>\n        브라우저의 주소 표시줄은 URL(Uniform Resource Locator)을 의미한다. URL은 <em>여러 구성 요소</em>로 나누어지는데,\n        구성은 이러하다.\n      </p>\n      <hr>\n      <pre>\n        http://siwoo.com:8080/learning?myName=SiWoo\n        Protocol HostName     FileName?QueryString1&QueryString2\n      </pre>\n      <hr>\n\n      <p>\n        앵귤러에서 주소를 관리하는 위치 정책에는 <em>HashLocationStrategy</em> 와 <em>PathLocationStrategy</em>등이 있다.\n        기본 정책인 PathLocationStrategy에서 HashLocationStrategy를 변경시에, <a [routerLink]=\"['/chapter1']\">루트 모듈(Root Module)</a>에서 아래와 같이\n        설정한다.\n\n      </p>\n      <mat-card>\n      <hr>\n      <code [innerText]=\"escapeHtml2\">\n      </code>\n      <hr>\n      </mat-card>\n      <br/>\n    </li>\n\n    <li class=\"sub-chapter\">\n      <h3>라우터의 구성</h3>\n      <p>\n        라우터의 모듈은 <code>RouterModule</code>에 구현되어 있으며, 라우터 모듈의 구성 요소는 아래와 같다.\n      </p>\n      <mat-card>\n        <mat-card-title>라우터 구성 요소</mat-card-title>\n        <hr>\n          <mat-list>\n            <mat-list-item>\n              <p>Router : 라우터를 구현한 객체다. 메서드로는 <code>navigate()</code>,<code>navigateByUrl()</code>등이 있다. 이 객체의\n              프러퍼티인 <em>path</em>을 변경하면 원하는 경로로 이동할 수 있다.\n              </p>\n            </mat-list-item>\n            <br/>\n            <mat-list-item>\n              <p>RouterOutlet : <a [routerLink]=\"['/chapter1']\">컴퍼넌트(Component)</a>을 렌더링(Rendering)하는 영역이다\n              <code [innerText]=\"'<router-outlet></router-outlet>'\"></code>으로 지역을 지정한다\n              </p>\n            </mat-list-item>\n            <mat-list-item>\n              <p>Routes : <a [routerLink]=\"['/chapter1']\">컴퍼넌트(Component)</a>와 URL을 연결하는 객체의 배열(Array)이다.</p>\n            </mat-list-item>\n            <mat-list-item>\n              <p>RouterLink : 앵커 태그<code [innerText]=\"'<a></a>'\"></code>의 Default action을 정지하고 라우터를 통하여  <a [routerLink]=\"['/chapter1']\">컴퍼넌트(Component)</a>를 렌더링 하도록 변경한다.</p>\n            </mat-list-item>\n            <mat-list-item>\n              <p>ActivatedRouter : 현재 활동하는 라우터의 인스턴스를 가리키는 객체다. <a [routerLink]=\"['/chapter1']\">컴퍼넌트(Component)</a>의 생성자(Constructer)로 앵귤로가 주입(Injection)한다</p>\n            </mat-list-item>\n          </mat-list>\n        <hr>\n      </mat-card>\n\n      <br>\n      <p>라우터는 Routes(배열) 객체를 사용하여 설정한다</p>\n      <mat-card>\n        <hr>\n        <code [innerText]=\"escapeHtml3\">\n        </code>\n        <hr>\n      </mat-card>\n      <br>\n      <p>라우터는 모듈 단위로 설정하며, @NgModule 어노테이션의 메타데이터에 라우터 모듈을 로드한다.</p>\n      <mat-card>\n        <hr>\n        <code [innerText]=\"code4\">\n        </code>\n        <hr>\n      </mat-card>\n      <br>\n      <p>루트 모듈이 아닌 자식 모듈(Child Module)에서는 라우터 모듈의  <code>forChild()</code> 메서드를 사용한다</p>\n    </li>\n\n    <li class=\"sub-chapter\">\n      <h3>실습</h3>\n      <mat-card>\n        <mat-card-title>routes.app.ts</mat-card-title>\n        <hr>\n        <code [innerText]=\"code5\">\n        </code>\n        <hr>\n      </mat-card>\n\n      <mat-card>\n        <mat-card-title>app.module.ts</mat-card-title>\n        <hr>\n        <code [innerText]=\"code6\">\n        </code>\n        <hr>\n      </mat-card>\n\n      <mat-card>\n        <mat-card-title>app.html</mat-card-title>\n        <code [innerText]=\"code7\"></code>\n      </mat-card>\n\n      <mat-card>\n        <p>\n          <a mat-raised-button color=\"primary\" [routerLink]=\"['/chapter2/home']\">Home</a> &ngsp;&ngsp;&ngsp;\n          <a mat-raised-button color=\"accent\" [routerLink]=\"['/chapter2/product']\">Product</a>\n        </p>\n      </mat-card>\n    </li>\n\n    <li class=\"sub-chapter\">\n      <h3>naviate() 함수</h3>\n      <p>\n        HTML 앵커 태그외에 뷰의 전환은 Router의 <code>navigate()</code>함수를 사용할 수 있다.<code>navigate()</code> 함수는\n        사용자의 클릭 동작 없이 특정 로직 혹은 이벤트 발생시 뷰를 전환할 수 있으므로 유용하다.\n      </p>\n\n      <mat-card>\n        <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"naviageToProduct()\" >Product</button>\n      </mat-card>\n\n      <mat-card>\n        <mat-card-title>component.html</mat-card-title>\n        <code [innerText]=\"code8\"></code>\n      </mat-card>\n\n\n      <mat-card>\n        <mat-card-title>component.ts</mat-card-title>\n        <code [innerText]=\"code9\"></code>\n      </mat-card>\n\n    </li>\n\n\n    <li class=\"sub-chapter\">\n      <h3>라우터 패스 파라미터(Path Parmemter)로 데이터 전달</h3>\n      <p>\n        라우터는 뷰를 전환할뿐만 아니라 전환될 뷰에 데이터를 함께 전달할 수 있다.\n        컴포넌트는 생성자 인자로 <code>ActivatedRoute</code>를 주입받아, 라우터의 프러퍼티에 접근할 수 있으며\n        URL과 전달받은 데이터 또한 확인할 수 있다.\n      </p>\n\n      <mat-card>\n        <mat-card-title>component.ts</mat-card-title>\n        <code [innerText]=\"code10\"></code>\n      </mat-card>\n\n      <mat-card>\n        <mat-card-title>app.routes.ts</mat-card-title>\n        <code [innerText]=\"code11\"></code>\n      </mat-card>\n\n      <mat-card>\n         <button  mat-raised-button color=\"primary\" [routerLink]=\"['/chapter2/product','1234']\" >Product Detail</button>\n      </mat-card>\n    </li>\n\n    <li class=\"sub-chapter\">\n      <h3>자식 라우팅(routing to children)</h3>\n      <p>\n        Anuglar 어플리케이션은 <strong>부모-자식</strong> 관계로 구성된 컴포넌트들의(Parent-Child relationship of components) 집합이다.\n        각 컴포넌트는 <em>캡슐화(encapsulation)</em>화 되어 있기 때문에 외부에 노출(exposing to external)되지 않으며, 독립적인 로직을 지닌다.\n        이와 마찬가지로 자식 컴포넌트 안에서 이루어지는 라우팅또한 캡슐화할 수 있다. (encapsulation of routing in children).\n        라우터의 계층화는 아래와 같이 설정할 수 있다.\n      </p>\n\n      <mat-card>\n        <mat-card-title>app.routes.ts</mat-card-title>\n        <code [innerText]=\"code12\"></code>\n      </mat-card>\n\n      <mat-card>\n        <mat-card-title>parentComponent.html</mat-card-title>\n        <code [innerText]=\"code13\"></code>\n      </mat-card>\n\n      <mat-card>\n        <a mat-raised-button [routerLink]=\"['/chapter2/parent/child']\" >Child1</a>\n        <a mat-raised-button [routerLink]=\"['/chapter2/parent/child2','child2']\" >Child2</a>\n      </mat-card>\n\n    </li>\n\n  </ul>\n</div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2-startpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter2StartpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter2StartpointComponent = /** @class */ (function () {
    function Chapter2StartpointComponent(router) {
        this.router = router;
        this.escapeHtml1 = "\n" +
            "        <body>\n" +
            "        <header></header> //Not changed content \n" +
            "            <main></main> //Changed content\n" +
            "        <footer></footer> //Not changed content\n" +
            "        </body>";
        this.escapeHtml2 = "@NgModule({\n" +
            "  declarations: [\n" +
            "    AppComponent,\n" +
            "    HomeComponent,\n" +
            "    Chapter1StartpointComponent,\n" +
            "    NewLineToBreakerPipe,\n" +
            "    Chapter2StartpointComponent,\n" +
            "  ],\n" +
            "  imports: [\n....\n" +
            "  ],\n" +
            "  providers: [ProductService, \n{provide:LocationStrategy,useClass:HashLocationStrategy}], //위치 정책을 변경한다 \n " +
            "  bootstrap: [AppComponent]\n" +
            "})\n" +
            "export class AppModule { }\n";
        this.escapeHtml3 = "\n" +
            "export const routes:Routes = [\n" +
            "  {path:'',component:HomeComponent},\n" +
            "  {path:'chapter1',component:Chapter1StartpointComponent},\n" +
            "  {path:'chapter2',component:Chapter2StartpointComponent},\n" +
            "  {path:'project',component:ProjectStartpointComponent}\n" +
            "]\n";
        this.code4 = "\n" +
            "@NgModule({\n" +
            "  declarations: [\n" +
            " .... \n" +
            "  ],\n" +
            "  imports: [\n" +
            "    /* Angular Module */\n" +
            "    BrowserModule,HttpModule,FormsModule,\n" +
            "    RouterModule.forRoot(routes), //라우터 모듈을 로드(Load)한다.";
        this.code5 = "const chapter2Routes:Routes = [ \n//Routes 객체로 라우터를 설정한다\n" +
            "  {path : 'chapter2/home', component :Chapter2HomeComponent},\n" +
            "  {path : 'chapter2/product', component :Chapter2ProductComponent}\n" +
            "]\n" +
            "\n" +
            "export const chapter2Routing = RouterModule.forChild(chapter2Routes);\n" +
            "//RoutingModule 인자로 Routes 배열을 넘겨 컴포넌트와 URL 설정 정보를 넘긴다";
        this.code6 = "@NgModule({\n" +
            "  imports: [\n" +
            "    CommonModule,\n" +
            "    chapter2Routing, //Routing 모듈을 로드(Load)한다.\n" +
            "  ],\n" +
            "  declarations: [Chapter2HomeComponent, Chapter2ProductComponent]\n" +
            "})\n" +
            "export class Chapter2Module { }\n";
        this.code7 = "\n" +
            "        <p>\n" +
            "          <a [routerLink]=\"['/chapter2/home']\">Home</a>\n" +
            "          <a [routerLink]=\"['/chapter2/product']\">Product</a>\n" +
            "        </p>";
        this.code8 = "\n" +
            "      <mat-card>\n" +
            "        <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"naviageToProduct()\" >Product</button>\n" +
            "      </mat-card>";
        this.code9 = "\n" +
            "  constructor(private router:Router) {}\n" +
            "  naviageToProduct(){\n" +
            "    this.router.navigate(['/chapter2/product']);\n" +
            "  } ";
        this.code10 = "\n" +
            "@Component({\n" +
            "  selector: 'app-chapter-2-product-param',\n" +
            "  template : '<h1 class=\"product\">Product Details for {{productId}}</h1>',\n" +
            "  styles : [' .product { background: cadetblue }']\n" +
            "})\n" +
            "export class Chapter2ProductParamComponent implements OnInit {\n" +
            "  productId:number;\n" +
            "  constructor(private activateRoute:ActivatedRoute) {\n" +
            "    this.productId = this.activateRoute.snapshot.params['id'];\n" +
            "  }\n" +
            "\n" +
            "  ngOnInit() {\n" +
            "  }\n" +
            "\n" +
            "}\n";
        this.code11 = "const chapter2Routes:Routes = [\n" +
            "  {path : 'chapter2/home', component :Chapter2HomeComponent},\n" +
            "  {path : 'chapter2/product', component :Chapter2ProductComponent},\n" +
            "  {path : 'chapter2/product/:id', component :Chapter2ProductParamComponent},\n // :id 로 패스 변수를 전달한다" +
            "\n" +
            "]\n" +
            "\n" +
            "export const chapter2Routing = RouterModule.forChild(chapter2Routes);";
        this.code12 = "const chapter2Routes:Routes = [\n" +
            "  {path : 'chapter2/home', component :Chapter2HomeComponent},\n" +
            "  {path : 'chapter2/product', component :Chapter2ProductComponent},\n" +
            "  {path : 'chapter2/product/:id', component :Chapter2ProductParamComponent},\n" +
            "  {\n" +
            "    path : 'chpater2/parent',component : Chapter2ParentComponent,\n" +
            "    children : [ //chapter2/parent에 대한 자식 라우팅을 설정한다 \n" +
            "      {path : 'child' , component : Chapter2ChildComponent},\n" +
            "      {path : 'child2/:name' , component : Chapter2Child2Component},\n" +
            "    ],\n" +
            "  },\n" +
            "\n" +
            "]\n";
        this.code13 = "<p>\n" +
            "  chapter-2-parent works!\n" +
            "</p>\n" +
            "<p><router-outlet></router-outlet></p>\n";
    }
    Chapter2StartpointComponent.prototype.ngOnInit = function () {
    };
    Chapter2StartpointComponent.prototype.naviageToProduct = function () {
        this.router.navigate(['/chapter2/product']);
    };
    Chapter2StartpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-2-startpoint',
            template: __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2-startpoint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2-startpoint.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], Chapter2StartpointComponent);
    return Chapter2StartpointComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child-2/chapter-2-child-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child-2/chapter-2-child-2.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chapter-2-child-2 works! And my name is {{name}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child-2/chapter-2-child-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter2Child2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter2Child2Component = /** @class */ (function () {
    function Chapter2Child2Component(activateRoute) {
        this.activateRoute = activateRoute;
        this.name = this.activateRoute.snapshot.params['name'];
    }
    Chapter2Child2Component.prototype.ngOnInit = function () {
    };
    Chapter2Child2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-2-child-2',
            template: __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child-2/chapter-2-child-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child-2/chapter-2-child-2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Chapter2Child2Component);
    return Chapter2Child2Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child/chapter-2-child.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child/chapter-2-child.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chapter-2-child works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child/chapter-2-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter2ChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter2ChildComponent = /** @class */ (function () {
    function Chapter2ChildComponent() {
    }
    Chapter2ChildComponent.prototype.ngOnInit = function () {
    };
    Chapter2ChildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-2-child',
            template: __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child/chapter-2-child.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child/chapter-2-child.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter2ChildComponent);
    return Chapter2ChildComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-home/chapter-2-home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chapter-2-home works!\n</p>\n<a [routerLink]=\"['/chapter2']\" >back</a>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-home/chapter-2-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter2HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter2HomeComponent = /** @class */ (function () {
    function Chapter2HomeComponent() {
    }
    Chapter2HomeComponent.prototype.ngOnInit = function () {
    };
    Chapter2HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-2-home',
            template: __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-home/chapter-2-home.component.html"),
            styles: ['p { background : deeppink}']
        }),
        __metadata("design:paramtypes", [])
    ], Chapter2HomeComponent);
    return Chapter2HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-parent/chapter-2-parent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-parent/chapter-2-parent.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chapter-2-parent works!\n</p>\n<p><router-outlet></router-outlet></p>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-parent/chapter-2-parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter2ParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter2ParentComponent = /** @class */ (function () {
    function Chapter2ParentComponent() {
    }
    Chapter2ParentComponent.prototype.ngOnInit = function () {
    };
    Chapter2ParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-2-parent',
            template: __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-parent/chapter-2-parent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-parent/chapter-2-parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter2ParentComponent);
    return Chapter2ParentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-product-param/chapter-2-product-param.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter2ProductParamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter2ProductParamComponent = /** @class */ (function () {
    function Chapter2ProductParamComponent(activateRoute) {
        this.activateRoute = activateRoute;
        this.productId = this.activateRoute.snapshot.params['id'];
    }
    Chapter2ProductParamComponent.prototype.ngOnInit = function () {
    };
    Chapter2ProductParamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-2-product-param',
            template: '' +
                '<h1 class="product">Product Details for {{productId}}</h1>' +
                '<button mat-raised-button color="primary" [routerLink]="[\'/chapter2\']">back</button>' +
                '',
            styles: [' .product { background: cadetblue }']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Chapter2ProductParamComponent);
    return Chapter2ProductParamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-product/chapter-2-product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chapter-2-product works!\n</p>>\n<a [routerLink]=\"['/chapter2']\" >back</a>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-product/chapter-2-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter2ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter2ProductComponent = /** @class */ (function () {
    function Chapter2ProductComponent() {
    }
    Chapter2ProductComponent.prototype.ngOnInit = function () {
    };
    Chapter2ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-2-product',
            template: __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-product/chapter-2-product.component.html"),
            styles: ['p { background: cornflowerblue}']
        }),
        __metadata("design:paramtypes", [])
    ], Chapter2ProductComponent);
    return Chapter2ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chapter_2_home_chapter_2_home_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-home/chapter-2-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chapter_2_product_chapter_2_product_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-product/chapter-2-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chapter2_routes__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter2-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chapter_2_product_param_chapter_2_product_param_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-product-param/chapter-2-product-param.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chapter_2_parent_chapter_2_parent_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-parent/chapter-2-parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chapter_2_child_chapter_2_child_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child/chapter-2-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chapter_2_child_2_chapter_2_child_2_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child-2/chapter-2-child-2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var Chapter2Module = /** @class */ (function () {
    function Chapter2Module() {
    }
    Chapter2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__chapter2_routes__["a" /* chapter2Routing */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__chapter_2_home_chapter_2_home_component__["a" /* Chapter2HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__chapter_2_product_chapter_2_product_component__["a" /* Chapter2ProductComponent */], __WEBPACK_IMPORTED_MODULE_5__chapter_2_product_param_chapter_2_product_param_component__["a" /* Chapter2ProductParamComponent */], __WEBPACK_IMPORTED_MODULE_6__chapter_2_parent_chapter_2_parent_component__["a" /* Chapter2ParentComponent */], __WEBPACK_IMPORTED_MODULE_7__chapter_2_child_chapter_2_child_component__["a" /* Chapter2ChildComponent */], __WEBPACK_IMPORTED_MODULE_8__chapter_2_child_2_chapter_2_child_2_component__["a" /* Chapter2Child2Component */]]
        })
    ], Chapter2Module);
    return Chapter2Module;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter2-routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chapter2Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chapter_2_home_chapter_2_home_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-home/chapter-2-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chapter_2_product_chapter_2_product_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-product/chapter-2-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chapter_2_product_param_chapter_2_product_param_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-product-param/chapter-2-product-param.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chapter_2_parent_chapter_2_parent_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-parent/chapter-2-parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chapter_2_child_chapter_2_child_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child/chapter-2-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chapter_2_child_2_chapter_2_child_2_component__ = __webpack_require__("../../../../../src/app/component/chapter-2-startpoint/chapter-2/chapter-2-child-2/chapter-2-child-2.component.ts");







var chapter2Routes = [
    { path: 'chapter2/home', component: __WEBPACK_IMPORTED_MODULE_1__chapter_2_home_chapter_2_home_component__["a" /* Chapter2HomeComponent */] },
    { path: 'chapter2/product', component: __WEBPACK_IMPORTED_MODULE_2__chapter_2_product_chapter_2_product_component__["a" /* Chapter2ProductComponent */] },
    { path: 'chapter2/product/:id', component: __WEBPACK_IMPORTED_MODULE_3__chapter_2_product_param_chapter_2_product_param_component__["a" /* Chapter2ProductParamComponent */] },
    {
        path: 'chapter2/parent', component: __WEBPACK_IMPORTED_MODULE_4__chapter_2_parent_chapter_2_parent_component__["a" /* Chapter2ParentComponent */],
        children: [
            { path: 'child', component: __WEBPACK_IMPORTED_MODULE_5__chapter_2_child_chapter_2_child_component__["a" /* Chapter2ChildComponent */] },
            { path: 'child2/:name', component: __WEBPACK_IMPORTED_MODULE_6__chapter_2_child_2_chapter_2_child_2_component__["a" /* Chapter2Child2Component */] },
        ],
    },
];
var chapter2Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(chapter2Routes);


/***/ }),

/***/ "../../../../../src/app/component/chapter-3-startpoint/chapter-3-startpoint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-3-startpoint/chapter-3-startpoint.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <div class=\"row\">\n    <mat-toolbar><h2>chapter-3-startpoint</h2> &nbsp;by&nbsp; <a href=\"skim327@myseneca.ca\">SiWoo-Kim</a></mat-toolbar>\n    <hr>\n    <ul>\n      <li class=\"sub-chapter\">\n        <h3>의존성 주입 (Dependency injection)</h3>\n        <p><strong>의존성 주입(Dependency injection)</strong>이란 디자인 패턴 중의 하나로 비슷한 문제의 해결 방법을 재사용과 유지 보수성을 하기 좋은\n        형태로 설계하는 것이다. Angular에서 어떻게 의존성 주입으로 보수성과 코드의 독립성을 높이는지 알아보자.</p>\n\n        <mat-card>\n          <mat-card-title><i class=\"fa fa-hand-paper-o\" aria-hidden=\"true\"></i> 의존성?(Dependency)</mat-card-title>\n         <mat-card-content>\n           <p>A의 함수(function)에서 인자로 B를 가지고 있다면 A 함수는 B에 의존한다고 말할 수 있다.<br/>\n           혹은 A의 객체에 B의 객체를 프로퍼티를 가지고 B의 함수를 호출한다면 A는 또한 B에 의존한다라고 말할 수 있다<br/>\n             예를 보자.</p>\n\n           <app-code [code]=\"code1\"></app-code>\n           <p>\n             makePayment 함수는 함수를 실행하기 위하여 Product 객체를 요구하며 Product의 객체가 변경시 같이\n             영향을 받는다. 만약 테스트를 위하여 MockProduct 객체를 인자로 받으려면, 코드를 수정해야 된다.\n             이런식의 코드는 코드의 보수성을 어렵게 만드므로 좋은 방안이 아니다. 아래를 보면서 어떻게 앵귤러 혹은 다른\n             Framework가 이 문제를 해결하는지 알아보도록 하자.\n           </p>\n         </mat-card-content>\n        </mat-card>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>낮은 결합도와 재사용성(Low coupling and Reuse)</h3>\n        <p>\n          의존성 주입 패턴의 핵심은 new 연산자를 사용하지 않는다는 것이다.\n          new 연산자를 사용한다는 것은 객체를 의존성이 있는 객체를 사용하기 위해 본인이 직접 객체를 어떻게 생성하는지\n          알고 있어야 한다는 뜻이다. 의존성 주입 패턴을 사용한 예를 보자.\n        </p>\n\n        <app-code [code]=\"code2\"></app-code>\n\n        <p>\n          <code>provides</code>는 의존성을 주입할 ProductService를 어떻게 생성하는지 Angular에게 알려주기 위해 사용하며,\n          의존성을 주입할 ProductService는 프로퍼티로 주입된다. 이렇게 provides에 등록을 하게 되면 Angular는 생성자에서 이 ProductService를\n          의존하는 모든 다른 객체에게 new 키워드 대신 주입(injection instead of new) 을 해준다.<br/>\n          만약 100개의 다른 코드에서 ProductService를 사용중인데, 클라이언트의 요구가 변화하여 ProductService를 AdvancedProductService로\n          교체하고 싶다면 provides의 프로퍼티만 바꿔주면 앵귤러는 개발자 대신 다른 AdvancedProductService로 바꾸어준다.<br/>\n        </p>\n\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>프로파이더(Provider)</h3>\n        <p>\n          <strong>프라바이더(provider)</strong>는 provide 프로퍼티가 있는 객체이다.\n          이 프로파이더를 <a [routerLink]=\"['/chapter1']\">모듈(@NgModule)</a>에 등록하면 의존성 주입 정보를 Angular는 알게된다.\n          providers(어노테이션의 프로퍼티)와 provider(providers에 등록되는 의존성 정보를 가진 객체)를 꼭 구분하도록 하자.<br/>\n          프로바이더를 등록하는 코드는 다음과 같다.\n        </p>\n\n        <app-code [code]=\"code3\"></app-code>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>서비스 주입 실습</h3>\n        <p>서비스(Service)란 뷰와 관련없고 다른 코드에서 반복해서 나올 수 있는 로직을 따로 추상화(abstraction)하여 뽑아낸 객체를 의미한다.\n        이 서비스 클래스를 추상화하여 어떻게 의존성 주입 패턴으로 주입받는지 예제를 통해 알아보자.\n        </p>\n\n        <app-code [code]=\"code4\" [title]=\"'product-component.ts'\"></app-code>\n\n        <app-product></app-product>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>서비스에 서비스 주입(Inject Service to Service)</h3>\n        <p>\n          데이타베이스 혹은 외부에서 데이터를 가져올때(fetch data from database or external resource), <strong>HTTP 프로토콜</strong>을 사용해야 한다.\n          <em>HTTP 요청(REQUEST)</em>을 보내려면 <code>HttpModule</code>의 Http 객체를 사용해야 되는데, 이 말은 곧 서비스 객체에서 또다른 의존성을 요구함을 나타낸다.\n        </p>\n\n        <pre style=\"border: 1px solid black; text-align: center\"> <h4>HTTP-> Service-> Component</h4> </pre>\n\n        <p>Http 서비스를 주입받는 코드의 예제.</p>\n\n        <app-code [code]=\"code5\" [title]=\"'product-service.ts'\"></app-code>\n\n        <p>서비스 클래스의 <code>@Injectable()</code>는 의존 주입시 <strong>필수</strong> 상기하자</p>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>프로바이더(Provider) 변경하기</h3>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>토근 주입하기(Inject Tokens)</h3>\n        <p>\n          프로그램에서 <em>상수(constant)</em>란 변하지 않은 값을 의미한다.\n          상수는 클래스 단위(Class constant)일수도, 글로벌 단위(Global constant)일수도 있는데,\n          글로벌 단위의 상수는 모든 프로그램에서 공유하므로 주입 받는 것이 마땅하다.<br>\n          문제는 외부 모듈의 상수(external library constant)와의 충돌인데 이때 사용할 수 있는 것이 <strong>토큰(Token)</strong>이다.\n        </p>\n\n        <app-code [code]=\"code7\" [title]=\"'app.module.ts'\"></app-code>\n        <app-code [code]=\"code6\" [title]=\"'productService.ts'\"></app-code>\n      </li>\n    </ul>\n\n\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-3-startpoint/chapter-3-startpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter3StartpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter3StartpointComponent = /** @class */ (function () {
    function Chapter3StartpointComponent() {
    }
    Chapter3StartpointComponent.prototype.ngOnInit = function () {
        this.code1 = "\n" +
            "    const product = new Product();\n" +
            "    makePayment(product);\n //함수를 호출하기 위해 Product 오브젝트가 필요하다" +
            "    ";
        this.code2 = "\n" +
            "@Component({\n" +
            "  selector: 'app-chapter-3-startpoint',\n" +
            "  templateUrl: './chapter-3-startpoint.component.html',\n" +
            "  styleUrls: ['./chapter-3-startpoint.component.css'],\n" +
            "  providers : [ProductService]\n" +
            "})\n" +
            "export class Chapter3StartpointComponent implements OnInit {\n" +
            "\n" +
            "  constructor(private productService:ProductService) { }";
        this.code3 = "\n" +
            "@Component({\n" +
            "  selector: 'app-chapter-3-startpoint',\n" +
            "  templateUrl: './chapter-3-startpoint.component.html',\n" +
            "  styleUrls: ['./chapter-3-startpoint.component.css'],\n" +
            "  providers : [ProductService,{provide:Chapter3Service,useClass:Chapter3Service}]\n" +
            "}) // providers 에 provider를 등록한다";
        this.code4 = "@Component({\n" +
            "  selector: 'app-product',\n" +
            "  templateUrl: './product.component.html',\n" +
            "  styleUrls: ['./product.component.css']\n" +
            "})\n" +
            "export class ProductComponent implements OnInit {\n" +
            "  product:Chap3Product;\n" +
            "\n" +
            "  constructor(private myProductService:Chap3ProductService) {\n" +
            "    this.product = this.myProductService.getProduct();\n" +
            "    console.log(this.product);\n" +
            "  }\n" +
            "\n" +
            "  ngOnInit() {\n" +
            "  }\n" +
            "\n" +
            "}\n";
        this.code5 = "\n" +
            "\n" +
            "@Injectable()\n" +
            "export class Chap3ProductService {\n" +
            "\n" +
            "  products:Chap3Product[];\n" +
            "\n" +
            "  constructor(private http:Http) {\n" +
            "    this.http.get('/data/chap3_product.json').subscribe(data => console.log(data) );\n" +
            "  }\n" +
            "\n" +
            "  getProduct() :Chap3Product{\n" +
            "    return new Chap3Product(\"CocaCola\",\"Nice to drink\",3.2);\n" +
            "  }\n" +
            "\n" +
            "}";
        this.code6 = "\n" +
            "@Injectable()\n" +
            "export class Chap3ProductService {\n" +
            "  \n" +
            "  constructor(private http:Http, @Inject(chap3ServerUrl) private url) {\n" +
            "    this.http.get(url).subscribe(data => console.log(data) );\n" +
            "  }\n" +
            "\n" +
            "  getProduct() :Chap3Product{\n" +
            "    return new Chap3Product(\"CocaCola\",\"Nice to drink\",3.2);\n" +
            "  }\n" +
            "\n" +
            "}\n" +
            "\n";
        this.code7 = "\n" +
            "export const chap3ServerUrl = new InjectionToken('serverUrl');\n\n" +
            "token을 생성한다\n" +
            "@NgModule({\n" +
            "  imports: [\n" +
            "    CommonModule, HttpModule,\n" +
            "    MatCardModule, MatExpansionModule,\n" +
            "  ],\n" +
            "  declarations: [ProductComponent],\n" +
            "  providers : [Chap3ProductService,{provide:chap3ServerUrl,useValue : 'server.com'}],\n" +
            "  exports : [ProductComponent]\n" +
            "})\n" +
            "export class Chapter3Module { }\n";
    };
    Chapter3StartpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-3-startpoint',
            template: __webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter-3-startpoint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter-3-startpoint.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], Chapter3StartpointComponent);
    return Chapter3StartpointComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-3-startpoint/chapter3/chapter3.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_product_product_component__ = __webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter3/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chap3_product_service__ = __webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter3/services/chap3-product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tokens_chap3_tokens__ = __webpack_require__("../../../../../src/app/tokens/chap3-tokens.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Chapter3Module = /** @class */ (function () {
    function Chapter3Module() {
    }
    Chapter3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatExpansionModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_product_product_component__["a" /* ProductComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_chap3_product_service__["a" /* Chap3ProductService */], { provide: __WEBPACK_IMPORTED_MODULE_6__tokens_chap3_tokens__["a" /* chap3ServerUrl */], useValue: 'server.com' }],
            exports: [__WEBPACK_IMPORTED_MODULE_2__components_product_product_component__["a" /* ProductComponent */]]
        })
    ], Chapter3Module);
    return Chapter3Module;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-3-startpoint/chapter3/components/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-3-startpoint/chapter3/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <mat-card-header><mat-card-title>Simple Injection</mat-card-title></mat-card-header>\n  <mat-card-content>\n    <p>Product Detail</p>\n    <p>Name : {{ product.name }}</p>\n    <p>Descriptoin : {{product.description}}</p>\n    <p>Price : \\${{product.price}}</p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-3-startpoint/chapter3/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chap3_product_service__ = __webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter3/services/chap3-product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(myProductService) {
        this.myProductService = myProductService;
        this.product = this.myProductService.getProduct();
        console.log(this.product);
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter3/components/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter3/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chap3_product_service__["a" /* Chap3ProductService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-3-startpoint/chapter3/model/chap-3-product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chap3Product; });
var Chap3Product = /** @class */ (function () {
    function Chap3Product(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    return Chap3Product;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-3-startpoint/chapter3/services/chap3-product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chap3ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_chap_3_product__ = __webpack_require__("../../../../../src/app/component/chapter-3-startpoint/chapter3/model/chap-3-product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tokens_chap3_tokens__ = __webpack_require__("../../../../../src/app/tokens/chap3-tokens.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Chap3ProductService = /** @class */ (function () {
    function Chap3ProductService(http, url) {
        this.http = http;
        this.url = url;
        this.http.get(url).subscribe(function (data) { return console.log(data); });
    }
    Chap3ProductService.prototype.getProduct = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__model_chap_3_product__["a" /* Chap3Product */]("CocaCola", "Nice to drink", 3.2);
    };
    Chap3ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__tokens_chap3_tokens__["a" /* chap3ServerUrl */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], Object])
    ], Chap3ProductService);
    return Chap3ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter-4-startpoint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter-4-startpoint.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <div class=\"row\">\n    <app-chapter-title [title]=\"'Chapter 4 - Data Binding'\" ></app-chapter-title>\n    <hr>\n    <ul>\n      <li class=\"sub-chapter\">\n        <h3>데이터 바인딩(Data Binding) 기초</h3>\n        <p>\n          <strong><em>데이터 바인딩</em></strong>이란 데이터를 컴포넌트 화면과 연결(sending data from component to view or vice versa)하는 기능이다.\n          지금까지 챕터를 읽어왔다면, 우리는 이미 데이터 바인딩을 목격해왔다.\n        </p>\n\n        <app-code [code]=\"codes[0].code\" [title]=\"codes[0].title\"></app-code>\n\n        <hr>\n        <mat-card>\n          <mat-card-title><h4>Try</h4></mat-card-title>\n          <app-chapter4-1></app-chapter4-1>\n        </mat-card>\n        <hr> <br/>\n        <p>\n          앵귤러에서 데이터 바인딩의 방향은 <strong>단반향(one-directional)과 양방향(bi-directional)</strong>이 있다.\n          단방향은 컴포넌트의 데이타가 뷰로 향하거나, 화면의 발생한 <em>event</em>가 컴포넌트의 핸들러로 향하는 것을 의미한다.<br/>\n          앵귤러는 양방향 데이터 바인딩(two-way data binding)을 권장하지 않는다. 하지만 요구 사항에 따라 구현할 수 있다.\n        </p>\n\n\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>이벤트 바인딩(event binding)</h3>\n        <p>\n          이벤트 바인딩이란 특정 이벤트를 컴포넌트의 함수(event handler in component)에 연결함을 의미한다.\n          템플릿(template)에서 이벤트 이름을 괄호(\"()\") 로 감싸는 문법을 사용한다.\n        </p>\n\n\n        <hr>\n        <mat-card>\n          <mat-card-title><h4>Try</h4></mat-card-title>\n          <app-chapter4-1-1></app-chapter4-1-1>\n        </mat-card>\n        <hr><br/>\n\n        <app-code [code]=\"codes[1].code\" [title]=\"codes[1].title\"></app-code>\n\n        <p>클라이언트에 의해 이벤트가 발생할때마다 이벤트 핸들러 함수는 다시 발동되므로 데이타의 흐름은\n          <em>뷰에서 컴포넌트</em>로 흐르게 된다. 데이터는 이벤트 객체에 넣어 보낼 수 있으며, 이벤트 객체는 <code>$event</code>으로 컴포넌트에 전달할 수 있다.</p>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>프러퍼티와 속성 바인딩(Property and Attribute Binding)</h3>\n        <p>\n          <strong>프러퍼티</strong> 자바스크립트의 DOM을 표현하는 객체(ex HTMLInputElement)의 프러퍼티(value,required)를 의미한다.<br/>\n          반면, <strong>속성</strong>은 HTML에 정의된 태그의 값이며 프러퍼티가 곧 HTML의 태그의 값으로 바인딩 되기에 대부분은 프로퍼티를 사용하면 된다.\n          단, 특정 지원하지 않은 속성이 있을 경우 속성 바인딩이 요구되는 상황이 있으니 알아두자. <br/>\n          프러퍼티와 속성을 구분하기 위해 앵귤러에서는 속성 바인딩을 <code>[attr.value]</code>와 같은 형식으로 규정했다.\n        </p>\n        <app-code [code]=\"codes[2].code\" [title]=\"codes[2].title\"></app-code>\n\n        <app-chapter4-1-2></app-chapter4-1-2>\n\n        <p>코드를 실행해보면 프러퍼티를 제외한 속성과 컴포넌트의 프러퍼티는 변하지 않는데 이유는 기본적으로\n        데이터 바인딩은 <strong>단방향(one-directional)</strong>이기 때문이다.</p>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>템플릿 바인딩(Template Binding)</h3>\n        <p>DOM 트리(Dom Tree)에서 엘리먼트(element)을 <strong>제거하거나 추가</strong> 싶다면 어떻게 할까?<br>\n        앵귤레어서는 <code>NgIf, NgFor, NgSwitch</code> 등을 제공하며 이를 구조 디렉티브(structural directives)라고 부른다.\n          이 디렉티브를 이용하면 특정 조건(expression for condition), 배열(array) 을 이용하며 엘리멘트를 추가하거나 제거할 수 있다.\n          예제를 보면서 <code>NgIf, NgFor, NgSwitch</code>의 사용법을 살펴보자.\n        </p>\n\n        <app-code [code]=\"codes[3].code\" [title]=\"codes[3].title\"></app-code>\n\n        <app-chapter-4-2></app-chapter-4-2>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>양방향 바인딩(two-way data binding)</h3>\n        <p> <strong>양방향 바인딩</strong>은 단방향 두개를 조합한 것이다.\n        단방향 두개를 조합 <em>(event -> component),(component -> dom property)</em> 하면 양방향이 되지만\n        편의성을 위해 앵귤러는 <code>NgModel</code>이란 디렉티브를 제공한다.\n        </p>\n\n        <p style=\"border: 1px solid black; margin-top: 15px;margin-bottom: 15px;height: 35px\">\n          <code [innerText]=\"'<input [(ngModel)]=\\'componetProperty\\'>'\" > </code>\n        </p>\n\n        <p>\n          양방향 바인딩은 폼 필드의 값과 모델 객체의 값이 일치해야되는 폼에서 주로 사용되며, 성능에 영향이 크기 때문에\n          꼭 필요한 상황에만 사용하도록 하자.\n        </p>\n\n        <app-code [code]=\"codes[4].code\" [title]=\"codes[4].title\"></app-code>\n\n        <app-code [code]=\"codes[5].code\" [title]=\"codes[5].title\"></app-code>\n        <app-chapter-4-3></app-chapter-4-3>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>옵저버블(Observable)</h3>\n        <p>\n          <strong>반응형 프로그래밍(Reactive Programming)</strong>은\n          <strong>스트림(stream)</strong>을 <strong>구독(subscribe)</strong>하고, 스트림을 알맞게 가공하여 그것에 반응하는 방식의\n          어플리케이션을 만드는 것을 의미한다.<br/>\n          <a href=\"http://reactivex.io/rxjs/\">RxJS</a>는 <strong>옵저버/옵저버블(observer/obserable)</strong>의 디자인 패턴(design pattern)을 모티브로 한\n          스트림 지원 라이브러리 중 하나이며, 앵귤어 내부에 많이 통합되어 있어 사용하기 좋다.\n        </p>\n        <br>\n        <p>\n          <strong>옵저버블</strong> 연속된 데이터 스트림을 생성하는 객체이며, <strong>옵저버</strong> 이 스트림을 구독(subscription)하는 객체다.\n          A 객체가 스트림을 생성하고 B가 이를 구독한다면, A는 Observable이며 B는 Observer이다.\n        </p>\n\n        <app-code [code]=\"codes[6].code\" [title]=\"codes[6].title\"></app-code>\n\n        <p>\n          옵저버 객체는 세 가지 콜백 함수<code>next,error,onComplete</code>를 가지고 있는데 next 는 다음 엘리멘터를 처리할 함수, error는 구독 중 에러 발생시 처리할 함수,\n          데이터 스트림을 모두 소비(consume)하고 실행할 함수가 있다.<br/>\n          또한 스트림은 절달될대 가공될 수 있으며, 그때는 <code>map(),filter()</code>등을 사용하면 된다.\n        </p>\n\n        <p>\n          옵저버블을 알아봤으니, 이벤트를 옵저버블을 사용하여 핸들링하는 방법을 알아보자. 아래는 옵저버블 없이 이벤트를 처리하는 방법이다.<br/>\n          <strong>이벤트(event)</strong>는 자바스크립트에서는 <code>Event</code> 객체로 표현되며, 이벤트가 어떤것인지, 어디서, 발생했는지에\n          대한 정보를 가지고 있다. Template에서 $event를 전달하면, 이벤트 핸들러 함수는 이벤트 정보가 들어있는 Event 객체를 받을 수 있다.<br>\n          또한 엘리멘트에서 <strong>템플릿 지역 변수(Local template variable)</strong> 사용하여 엘리먼트의 프러퍼티에 바로 접근도 가능하다.\n        </p>\n        <app-code [code]=\"codes[7].code\" [title]=\"codes[7].title\" ></app-code>\n\n        <p>\n          비동기적으로 발생하는 이벤트를 옵저버블로 처리하기 위해서는 <code>FormControl</code> 클래스의 <code>valueChanges</code>을\n          사용하면 되는데 <code>valueChanges</code>는 <strong>이벤트를 옵저버블 스트림</strong> 리턴한다.\n\n        </p>\n\n        <app-code [code]=\"codes[8].code\" [title]=\"codes[8].title\" ></app-code>\n\n        <app-chapter-4-4></app-chapter-4-4>\n\n        <h3>구독 취소하기(Cancelling subscription)</h3>\n        <hr>\n        <p>\n          옵저버블은 프로미스와 달리 동작이 완료되기 전에 <strong>취소</strong>할 수 있다.\n          취소를 할 수 있다는 것은 이벤트 핸들러의 동작 중, 클라이언트가 다른 이벤트를 발생한다면\n          전의 이벤트의 요청을 중단하고 새로운 이벤트 핸들러를 동작시킴을 의미한다.\n          구독을 취소함으로써 서버에 불필요한 요청을 보내지 않으므로 성능상 큰 이점을 가져올 수 있다.\n        </p>\n\n        <app-code [code]=\"codes[9].code\" [title]=\"codes[9].title\" ></app-code>\n        <app-chapter-4-4-1></app-chapter-4-4-1>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>파이프 (Pipe)</h3>\n        <p>\n          <strong>파이프</strong>는 어떤 값을 뷰로 보낼때 가공하기위해 사용하는 템플릿 엘리먼트이다.\n          파이프의 기호는 리눅스(linux)와 같이 <strong>|</strong> 기호를 사용하며, 기호 뒤에 파이프 이름을 명시하면 된다.<br>\n          아래는 자주 쓰이는 파이프의 종류이다.\n        </p>\n        <ul>\n          <li><code>UpperCasePipe</code> :  | uppercase </li>\n          <li><code>DatePipe</code> :  | date </li>\n          <li><code>CurrencyPipe</code> :  | uppercase </li>\n          <li><code>JsonPipe</code> :  | uppercase </li>\n          <li><code>AsyncPipe</code> :  | uppercase </li>\n        </ul>\n\n        <br>\n        <p>\n          다음의 예제를 보자.\n        </p>\n\n        <app-code  [code]=\"'\\{\\{ myDate | date : \\'medium\\' | uppercase \\}\\}'\"></app-code>\n\n        <p>{{ date | date : 'medium' | uppercase }}</p>\n\n        <br>\n        <p>\n          파이프에 인자기 있을 수도 있고, 없을수도 있으며 원하는 만큼 메서드 체이닝(method chanining)이 가능하다\n          또한 개발자에 의한 <strong>커스텀 파이프</strong> 정의도 가능하며 방법은 아래와 같다.\n        </p>\n\n        <app-code [code]=\"codes[10].code\" [title]=\"codes[10].title\" ></app-code>\n\n      </li>\n\n    </ul>\n\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter-4-startpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Code */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter4StartpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_chapter4_code__ = __webpack_require__("../../../../../src/app/metadata/chapter4-code.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Code = /** @class */ (function () {
    function Code(id, title, code) {
        this.id = id;
        this.title = title;
        this.code = code;
    }
    return Code;
}());

var Chapter4StartpointComponent = /** @class */ (function () {
    function Chapter4StartpointComponent() {
        this.codes = __WEBPACK_IMPORTED_MODULE_1__metadata_chapter4_code__["a" /* chapter4_code */];
        this.date = new Date();
    }
    Chapter4StartpointComponent.prototype.ngOnInit = function () {
        var mySubscription = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (subscriber) { subscriber.next([1, 2, 3, 4, 5]); })
            .subscribe(function (data) { return data.forEach(function (item) { return console.log(item); }); });
        mySubscription.unsubscribe();
    };
    Chapter4StartpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-4-startpoint',
            template: __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter-4-startpoint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter-4-startpoint.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter4StartpointComponent);
    return Chapter4StartpointComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/chapter4.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_chapter4_1_chapter4_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1/chapter4-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chapter4_1_1_chapter4_1_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-1/chapter4-1-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_chapter4_1_2_chapter4_1_2_component__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-2/chapter4-1-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_chapter_4_2_chapter_4_2_component__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-2/chapter-4-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_chapter_4_3_chapter_4_3_component__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-3/chapter-4-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chapter_4_4_chapter_4_4_component__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4/chapter-4-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chapter_4_4_1_chapter_4_4_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4-1/chapter-4-4-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var Chapter4Module = /** @class */ (function () {
    function Chapter4Module() {
    }
    Chapter4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_chapter4_1_chapter4_1_component__["a" /* Chapter41Component */], __WEBPACK_IMPORTED_MODULE_3__components_chapter4_1_1_chapter4_1_1_component__["a" /* Chapter411Component */], __WEBPACK_IMPORTED_MODULE_4__components_chapter4_1_2_chapter4_1_2_component__["a" /* Chapter412Component */], __WEBPACK_IMPORTED_MODULE_6__components_chapter_4_2_chapter_4_2_component__["a" /* Chapter42Component */],
                __WEBPACK_IMPORTED_MODULE_7__components_chapter_4_3_chapter_4_3_component__["a" /* Chapter43Component */], __WEBPACK_IMPORTED_MODULE_9__components_chapter_4_4_chapter_4_4_component__["a" /* Chapter44Component */], __WEBPACK_IMPORTED_MODULE_10__components_chapter_4_4_1_chapter_4_4_1_component__["a" /* Chapter441Component */],],
            exports: [__WEBPACK_IMPORTED_MODULE_2__components_chapter4_1_chapter4_1_component__["a" /* Chapter41Component */], __WEBPACK_IMPORTED_MODULE_3__components_chapter4_1_1_chapter4_1_1_component__["a" /* Chapter411Component */], __WEBPACK_IMPORTED_MODULE_4__components_chapter4_1_2_chapter4_1_2_component__["a" /* Chapter412Component */],
                __WEBPACK_IMPORTED_MODULE_6__components_chapter_4_2_chapter_4_2_component__["a" /* Chapter42Component */], __WEBPACK_IMPORTED_MODULE_7__components_chapter_4_3_chapter_4_3_component__["a" /* Chapter43Component */], __WEBPACK_IMPORTED_MODULE_9__components_chapter_4_4_chapter_4_4_component__["a" /* Chapter44Component */], __WEBPACK_IMPORTED_MODULE_10__components_chapter_4_4_1_chapter_4_4_1_component__["a" /* Chapter441Component */]]
        })
    ], Chapter4Module);
    return Chapter4Module;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-2/chapter-4-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-2/chapter-4-2.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<hr>\n<mat-card>\n  <mat-card-title><h4><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> <strong>Try</strong></h4></mat-card-title>\n  <mat-card-content>\n    <div>\n      <h3>Structural Directive</h3>\n      <mat-radio-group>\n        <mat-radio-button value=\"true\" (change)=\"isShow=radioButton1.value\" #radioButton1>Turn On</mat-radio-button>\n        <mat-radio-button value=\"false\" (change)=\"isShow=radioButton2.value\" #radioButton2>Turn Off</mat-radio-button>\n\n        <p>\n          State : <strong>{{isShow}}</strong>\n        </p>\n        <p>\n          <span *ngIf=\"isShow\" ><strong>State is turn on</strong></span>\n        </p>\n      </mat-radio-group>\n    </div>\n  </mat-card-content>\n</mat-card>\n<hr><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-2/chapter-4-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter42Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter42Component = /** @class */ (function () {
    function Chapter42Component() {
        this.isShow = true;
    }
    Chapter42Component.prototype.ngOnInit = function () {
    };
    Chapter42Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-4-2',
            template: __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-2/chapter-4-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-2/chapter-4-2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter42Component);
    return Chapter42Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-3/chapter-4-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-3/chapter-4-3.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<hr>\n<mat-card>\n  <mat-card-title><h4><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> <strong>Try</strong></h4></mat-card-title>\n  <mat-card-content>\n    <div>\n      <h3>Two-Way Binding</h3>\n      <mat-input-container >\n        <input matInput type=\"text\" placeholder=\"Enter your id\"\n               [(ngModel)]=\"cookiedName\">\n\n      </mat-input-container>\n        <br>\n        <p>Your ID is {{cookieName}}</p>\n    </div>\n  </mat-card-content>\n</mat-card>\n<hr><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-3/chapter-4-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter43Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter43Component = /** @class */ (function () {
    function Chapter43Component() {
        var _this = this;
        setTimeout(function () {
            _this.cookiedName = "user01@email.com";
        }, 3000);
    }
    Chapter43Component.prototype.ngOnInit = function () {
    };
    Chapter43Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-4-3',
            template: __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-3/chapter-4-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-3/chapter-4-3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter43Component);
    return Chapter43Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4-1/chapter-4-4-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4-1/chapter-4-4-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter441Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Chapter441Component = /** @class */ (function () {
    function Chapter441Component(http) {
        var _this = this;
        this.http = http;
        this.baseWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.urlSuffix = '&units=metric&appid=b9dbf1e48fe5e56ff01cecbdd54fc138';
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(function (city) { return _this.getWeather(city); })
            .subscribe(function (res) {
            _this.temperature = "Current temperature is " + res['main'].temp + "C, humidity: " + res['main'].humidity + "%";
        });
    }
    Chapter441Component.prototype.getWeather = function (city) {
        return this.http.get(this.baseWeatherUrl + city + this.urlSuffix)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        })
            .catch(function (err) {
            if (err.status == 404) {
                console.log("City " + city + " not found");
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of();
            }
        });
    };
    Chapter441Component.prototype.ngOnInit = function () {
    };
    Chapter441Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-4-4-1',
            template: "    \n    <hr>\n    <mat-card>\n      <mat-card-title><h4><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> <strong>Try</strong></h4></mat-card-title>\n      <mat-card-content>\n        <div>\n          <h3>Searching Weatehr</h3>\n          <p><span><strong>{{temperature}}</strong></span></p>\n          <mat-input-container>\n            <input matInput placeholder=\"Enter City\" type=\"text\" [formControl]=\"searchInput\">\n          </mat-input-container>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <hr><br/>\n  ",
            styles: [__webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4-1/chapter-4-4-1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], Chapter441Component);
    return Chapter441Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4/chapter-4-4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4/chapter-4-4.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<hr>\n<mat-card>\n  <mat-card-title><h4><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> <strong>Try</strong></h4></mat-card-title>\n  <mat-card-content>\n    <div>\n      <h3>Event Object</h3>\n      <p><span>{{inputString}}</span></p>\n      <mat-input-container>\n        <input placeholder=\"inputString\" matInput type=\"text\" (keyup)=\"onKeyUpHandler($event)\">\n        <br/>\n       </mat-input-container>\n      <mat-input-container>\n        <input placeholder=\"byTemplate\" #myInputTemplate matInput type=\"text\" (keyup)=\"inputString = myInputTemplate.value\">\n      </mat-input-container>\n\n      <mat-input-container>\n        <input matInput placeholder=\"byObservable\" type=\"text\" [formControl]=\"observableInput\">\n      </mat-input-container>\n    </div>\n  </mat-card-content>\n</mat-card>\n<hr><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4/chapter-4-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter44Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Chapter44Component = /** @class */ (function () {
    function Chapter44Component() {
        var _this = this;
        this.observableInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.observableInput.valueChanges
            .debounceTime(500)
            .subscribe(function (value) { return _this.inputString = value; });
    }
    Chapter44Component.prototype.onKeyUpHandler = function (event) {
        this.inputString = event.target.value;
    };
    Chapter44Component.prototype.ngOnInit = function () {
    };
    Chapter44Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-4-4',
            template: __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4/chapter-4-4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter-4-4/chapter-4-4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter44Component);
    return Chapter44Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-1/chapter4-1-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-1/chapter4-1-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"onClickHandler()\">Get data</button>\n<input placeholder=\"Enter your name\" (input)=\"onInputHandler($event)\">\n\n<div>\n  <span *ngIf=\"data\">{{data}}</span>\n  <span *ngIf=\"name\">{{name}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-1/chapter4-1-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter411Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter411Component = /** @class */ (function () {
    function Chapter411Component() {
    }
    Chapter411Component.prototype.onClickHandler = function () {
        this.data = "Fetched Data";
    };
    Chapter411Component.prototype.onInputHandler = function (event) {
        console.log(event);
        this.name = event.target.value;
    };
    Chapter411Component.prototype.ngOnInit = function () {
    };
    Chapter411Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter4-1-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-1/chapter4-1-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-1/chapter4-1-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter411Component);
    return Chapter411Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-2/chapter4-1-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-2/chapter4-1-2.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<hr>\n<mat-card>\n  <mat-card-title><h4><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> <strong>Try</strong></h4></mat-card-title>\n  <mat-card-content>\n    <div>\n      <h3>Attribute And Property Binding</h3>\n      <mat-form-field style=\"width: 100%\" >\n      <input matInput type=\"text\" [value]=\"greeting\" [attr.value]=\"greeting\"\n        (input)=\"onInputHandler($event)\" placeholder=\"Input Greeting\"\n      >\n      </mat-form-field>\n    </div>\n  </mat-card-content>\n</mat-card>\n<hr><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-2/chapter4-1-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter412Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter412Component = /** @class */ (function () {
    function Chapter412Component() {
        this.greeting = 'Greeting Angular';
    }
    Chapter412Component.prototype.onInputHandler = function (event) {
        var inputElement = event.target;
        console.log('HTMLInputElement property : ' + inputElement.value);
        console.log('HTMLInputElement attribute : ' + inputElement.getAttribute('value'));
        console.log('Component property : ' + this.greeting);
    };
    Chapter412Component.prototype.ngOnInit = function () {
    };
    Chapter412Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter4-1-2',
            template: __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-2/chapter4-1-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1-2/chapter4-1-2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter412Component);
    return Chapter412Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1/chapter4-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1/chapter4-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <h3>Greeting {{name}}!</h3>\n  <span [hidden]=\"isHidden\">The span element is hidden</span>\n  <button (click)=\"onEventHandler()\">Trigger Event</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1/chapter4-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter41Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter41Component = /** @class */ (function () {
    function Chapter41Component() {
        this.name = "Hello Angular!";
        this.isHidden = true;
    }
    Chapter41Component.prototype.onEventHandler = function (event) {
        console.log("Event is triggered!");
    };
    Chapter41Component.prototype.ngOnInit = function () {
    };
    Chapter41Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter4-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1/chapter4-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-4-startpoint/chapter4/components/chapter4-1/chapter4-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter41Component);
    return Chapter41Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter-5-startpoint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter-5-startpoint.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <div class=\"row\">\n    <app-chapter-title [title]=\"'Chapter 5 - Component Communication'\" ></app-chapter-title>\n    <hr>\n    <ul>\n      <li class=\"sub-chapter\">\n        <h3>컴포넌트 통신 기본(Component Communication Basic)</h3>\n        <p>\n          앵귤러의 어플리케이션의 구조는 <strong>컴포넌트 계층 구조(Component hierarchy)</strong>이다.\n          컴포넌트는 <strong>재사용(reusable)</strong>할 수 있으며, 컴포넌트끼리 데이터를 주고받을 수 있다.\n          이러한 계층화는 모듈과의 결합성(row coupling)을 줄이고 코드의 보수성을 좋게 한다.\n        </p>\n\n        <br/>\n\n        <p>\n          <strong>부모 컴포넌트(parent component)</strong>에서 <strong>자식 컴포넌트(child component)</strong>로 데이터의 전달은\n          <code>입력 프러퍼티 바인딩 (input-property binding)</code>을 사용한다. 반대로 <strong>자식 컴포넌트</strong>에서 부모 컴포넌트로 데이터의\n          전달은 <code>이벤트 바인딩(output-event binding)</code>을 사용한다.\n          또한 부모-자식 관계가 아닌 컴포넌트끼리의 데이터의 전달은 <code>중계자 패턴(Mediator pattern)</code>을 사용한다.\n        </p>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>입력 프러퍼티 바인딩(input-property binding)</h3>\n\n        <p>\n          밖에서 컴포넌트 안으로 들어오는 데이터는 프러퍼티 바인딩으로 그것을 받아올 수 있는데, 이때 데이터는\n          <strong>누가</strong> 전달하는지 알 필요가 없으며, 단지 <strong>데이터의 종류(type of data)</strong>만 알면된다.\n        </p>\n\n        <app-code [code]=\"codes[0].code\" [title]=\"codes[0].title\"></app-code>\n        <app-code [code]=\"codes[1].code\" [title]=\"codes[1].title\"></app-code>\n\n        <mat-input-container>\n          <input matInput type=\"text\" placeholder=\"Enter Menu\" (input)=\"onMenuHandler($event)\" >\n        </mat-input-container>\n        <app-chapter5-1-1 [menuName]=\"menu\" [menuPrice]=\"2.32\"  ></app-chapter5-1-1>\n\n        <p>\n          부모 컴포넌트에서 보내는 데이터는 <code>@Input</code> 데코레이터를 지정하여 받을 수 있다.\n          기본적으로 앵귤러의 <a [routerLink]=\"['/chapter4']\">데이터 바인딩은 단방향(one-directional data binding)</a>\n          이므로 <strong>부모의 menu</strong>의 값이 바뀌면 자식에게 영향이 가지만, <strong>자식의 menuName</strong> 변화는 부모에게 영향을 주지 않는 것을 주의하자.\n        </p>\n\n        <p>\n          앵귤러에선 부모 컴포넌트의 데이터를 자식에게 전달할 수 있을 뿐 아니라 <code>getter method</code>을\n          이용하면 입력 프로퍼티의 값이 변경되는 시점을 가로채 특정 로직을 넣을 수 있다.\n        </p>\n        <app-code [code]=\"codes[2].code\" [title]=\"codes[2].title\"></app-code>\n        <app-code [code]=\"codes[3].code\" [title]=\"codes[3].title\"></app-code>\n\n\n        <span matTooltip=\"Must be less than 11\">\n        <mat-input-container>\n          <input matInput placeholder=\"Enter quantity\" type=\"number\" [(ngModel)]=\"quantity\">\n        </mat-input-container>\n        </span>\n        <app-chapter5-1-2 [requestQuantity]=\"quantity\"></app-chapter5-1-2>\n\n        <p>이렇게 <strong>setter 혹은 getter</strong>을 이용하면 이용하면, 받아오는 데이터의 값이 변경될 때\n        원하는 로직을 추가할 수 있다.</p>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>출력 프러퍼티(output property)</h3>\n        <p>\n          모든 컴포넌트는 <code>EventEmitter</code> 객체를 사용하여 자신만의 이벤트를 생성하여\n          발생할 수 있으며, 이것을 이용하여 자식은 부모에게 데이터를 이벤트에 실어 전달 할 수 있다.\n          <code>EventEmiiter</code> RxJS에서 만들어진 클래스 중 하나이며,\n          <a [routerLink]=\"['/chapter4']\"> 옵저버블과 옵저버</a>를 지원한다.\n          <code>emit()</code> 함수는 <strong>옵저버블 스트림 (Oberservable Stream)</strong>을 담고 있는 이벤트를 발생하며,\n          <code>subscribe()</code> 함수로 스트림을 구독(subscription for stream) 할 수있다.\n        </p>\n\n        <h4>Outer Component</h4>\n        <p>\n          <mat-chip-list>\n            <mat-chip color=\"primary\" selected=\"true\">{{stockSymbol}}</mat-chip>\n            <mat-chip color=\"primary\" selected=\"true\">{{price}}</mat-chip>\n          </mat-chip-list>\n        </p>\n        <app-chapter5-1-3 (lastPrice)=\"onPriceQuoteHandler($event)\"></app-chapter5-1-3>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>중계자 패턴</h3>\n        <p>\n          모든 컴포넌트는 독립적이어야 하며, 다른 컴포넌트와의 결합도는 낮을 수록 좋다.\n          다른 컴포넌트의 결합도를 낮게 유지하면서 데이터를 주고 받으려면 <strong>중개자 패턴(The Mediator Pattern)</strong>\n          을 사용하는 것을 고려하라. 중개자는 한 컴포넌트에서 데이터를 받아 다른 컴포넌트로 전달해준다.\n          <br>\n          데이타를 받는 @Input을 가진 컴포넌트와 이벤트를 발생하여 데이터를 보내는 @Output EventEmitter을 가진\n          컴포넌트는 <strong>누가 데이터를 보냈는지, 누가 데이터를 받는지에 대한 정보를 가진 코드가 그들에게선 존재하지 않는다.</strong>\n          이것은 독립성이 높다는 뜻이다.\n        </p>\n\n        <app-code [code]=\"codes[4].code\" [title]=\"codes[4].title\"></app-code>\n        <app-code [code]=\"codes[5].code\" [title]=\"codes[5].title\"></app-code>\n\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title><h3>Mediator Part</h3></mat-card-title>\n          </mat-card-header>\n\n          <p><strong>Mediator Got : {{ stock | json }} </strong></p>\n        <app-chapter5-1-4 (buy)=\"onBuyHandler($event)\"></app-chapter5-1-4>\n        <app-chapter5-1-4-1 [stock]=\"stock\"></app-chapter5-1-4-1>\n        </mat-card>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>프로젝션(Projection)</h3>\n        <p>\n          <code>NgContent</code> 디렉티브를 이용하면 부모 컴포넌트의 <a [routerLink]=\"['/chapter1']\" >템플릿(template)</a>\n          일부분을 자식에게 <strong>프로젝션</strong>할 수 있다. 부모 컴포넌트에선 자식 컴포넌트 태그 안쪽에서\n          원하는 컨텐츠를 넣고, 자식 컴포넌트에서는 <code>ngcontent</code>태그를 이용하여 랜더링할 위치를 지정하면 된다.\n        </p>\n\n        <app-code [code]=\"codes[6].code\" [title]=\"codes[6].title\" ></app-code>\n        <app-code [code]=\"codes[7].code\" [title]=\"codes[7].title\" ></app-code>\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title><h3>Parent Part</h3></mat-card-title>\n            <app-chapter5-1-5><p style=\"color: pink\">This part is projected by Parent</p></app-chapter5-1-5>\n          </mat-card-header>\n        </mat-card>\n      </li>\n\n      <p>\n        자식 <a [routerLink]=\"['/chapter1']\" >템플릿(template)</a>에서 <code>ngContent</code> 디렉티브를 여러번 사용할 수도 있다.\n        여러개의 <code>ngContent</code> 디렉티브를 사용할때 각 디렉티브를 구분할 수 있는 메카니즘이 필요한데 이때 <strong>select 속성</strong>을 사용한다.\n        *ex: <code [innerText]=\"'<ng-content select=\\'.header\\'></ng-content>'\"></code>\n      </p>\n\n      <mat-card>\n        <mat-card-title><h3>Parent Part</h3></mat-card-title>\n        <app-chapter5-1-5-1>\n          <p class=\"header\" style=\"color: lightblue\">This is derived from Parent's header class</p>\n          <p class=\"footer\" style=\"color: pink\">This is derived from Parent's footer class</p>\n        </app-chapter5-1-5-1>\n      </mat-card>\n\n      <li class=\"sub-chapter\">\n        <h3>컴포넌트 생명주기(Componet Life Cycle)</h3>\n        <p>\n          컴포넌트는 각기 <strong>생명주기(Life Cycle)</strong>를 가지고 있으며 이는 이벤트로 표현된다.\n        </p>\n        <br>\n        <img [src]=\"'/assets/img/life-cycle.png'\">\n        <br>\n        <p>\n          위의 특정 생명주기를 가로채서 원하는 동작, 혹은 로직을 부여하고 싶다면 다음 함수들을 사용하면 된다.\n          <mat-list>\n            <mat-list-item><code>ngOnChanges</code> : <strong>자식 입력 프로퍼티(Input property)</strong>로 바인딩된 값이 변경되거나, 초기화때 실행된다.</mat-list-item>\n            <mat-list-item><code>ngOnInit</code> : 프로퍼티의 값을 초기화할때 실행된다. 생성자(construtor)와 달리 컴포넌트의 모든 프로퍼티들이 초기화되고 난 이후이다.</mat-list-item>\n            <mat-list-item><code>ngAfterViewInit</code> : 템플릿(Template)의 바인딩이 완료된 후 실행된다.</mat-list-item>\n            <mat-list-item><code>ngAfterViewChecked</code> : 템플릿에 바인딩된 항목의 값이 변경되면 실행된다.</mat-list-item>\n          </mat-list>\n          위의 함수들을 정의하려면 함수명에 해당하는 이름의 인터페이스를 구현해야됨을 알아두자.\n        </p>\n\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title><h4>Parent Component</h4></mat-card-title>\n          </mat-card-header>\n\n\n          <app-code [code]=\"codes[8].code\" [title]=\"codes[8].title\" ></app-code>\n\n          <div class=\"form-group\">\n            <mat-form-field>\n              <input type=\"text\" matInput placeholder=\"Enter greeting\" class=\"form-control\"\n                [value]=\"greeting\" (input)=\"greeting=$event.target.value\"\n              >\n            </mat-form-field>\n\n            <mat-form-field>\n              <input type=\"text\" matInput placeholder=\"Enter name\" class=\"form-control\"\n                     [value]=\"user.name\" (input)=\"user.name=$event.target.value\"\n              >\n            </mat-form-field>\n          </div>\n\n          <app-chapter5-2-1 [greeting]=\"greeting\" [user]=\"user\" [userName]=\"user.name\" ></app-chapter5-2-1>\n        </mat-card>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>자식 컴포넌트를 직접 받아오기(ViewChild)</h3>\n        <p>\n          앞에서의 설명은 부모의 프로퍼티를 자식에게 전달하거나, 이벤트로 받아오는 메커니즘이였다.\n          이제 부모 컴포넌트에서 <strong>직접 자식 컴포넌트의 프러퍼티, 메서드에 접근하는 방법(Using child component API directly)</strong>을 알아보자.\n        </p>\n\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>Parent Component</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n\n            <mat-list-item>\n              <mat-list>Child 1 API : {{firstChild.message}}</mat-list>\n              <mat-list>Child 2 API : {{secondChild.message}}</mat-list>\n            </mat-list-item>\n            <app-chapter-5-3-1 #child1></app-chapter-5-3-1>\n            <app-chapter-5-3-1 #child2></app-chapter-5-3-1>\n            <button mat-raised-button color=\"primary\" (click)=\"child1.message='clicked'\">Child1</button>\n            <button mat-raised-button color=\"accent\" (click)=\"child2.message='clicked'\">Child2\n            </button>\n          </mat-card-content>\n        </mat-card>\n      </li>\n    </ul>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter-5-startpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter5StartpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_chapter5_code__ = __webpack_require__("../../../../../src/app/metadata/chapter5-code.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chapter5_components_chapter_5_3_1_chapter_5_3_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter-5-3-1/chapter-5-3-1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Chapter5StartpointComponent = /** @class */ (function () {
    function Chapter5StartpointComponent() {
        this.codes = __WEBPACK_IMPORTED_MODULE_1__metadata_chapter5_code__["a" /* chapter5_code */];
        this.menu = "Aroma Latte";
        this.user = { name: 'SiWoo' };
        this.greeting = "Hello Angular";
    }
    Chapter5StartpointComponent.prototype.ngOnInit = function () {
    };
    Chapter5StartpointComponent.prototype.onMenuHandler = function (_a) {
        var target = _a.target;
        this.menu = target.value;
    };
    Chapter5StartpointComponent.prototype.onPriceQuoteHandler = function (event) {
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
    };
    Chapter5StartpointComponent.prototype.onBuyHandler = function (stock) {
        this.stock = stock;
    };
    Chapter5StartpointComponent.prototype.ngAfterViewInit = function () {
        this.firstChild.greeting('Child 1');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('child1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__chapter5_components_chapter_5_3_1_chapter_5_3_1_component__["a" /* Chapter531Component */])
    ], Chapter5StartpointComponent.prototype, "firstChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('child2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__chapter5_components_chapter_5_3_1_chapter_5_3_1_component__["a" /* Chapter531Component */])
    ], Chapter5StartpointComponent.prototype, "secondChild", void 0);
    Chapter5StartpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-5-startpoint',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter-5-startpoint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter-5-startpoint.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter5StartpointComponent);
    return Chapter5StartpointComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/chapter5.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_chapter5_1_1_chapter5_1_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-1/chapter5-1-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_chapter5_1_2_chapter5_1_2_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-2/chapter5-1-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_chapter5_1_3_chapter5_1_3_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-3/chapter5-1-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_chapter5_1_4_chapter5_1_4_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4/chapter5-1-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_chapter5_1_4_1_chapter5_1_4_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4-1/chapter5-1-4-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chapter5_1_5_chapter5_1_5_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5/chapter5-1-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chapter5_1_5_1_chapter5_1_5_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5-1/chapter5-1-5-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chapter5_2_1_chapter5_2_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-2-1/chapter5-2-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_chapter_5_3_1_chapter_5_3_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter-5-3-1/chapter-5-3-1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var components = [
    __WEBPACK_IMPORTED_MODULE_2__components_chapter5_1_1_chapter5_1_1_component__["a" /* Chapter511Component */], __WEBPACK_IMPORTED_MODULE_4__components_chapter5_1_2_chapter5_1_2_component__["a" /* Chapter512Component */], __WEBPACK_IMPORTED_MODULE_5__components_chapter5_1_3_chapter5_1_3_component__["a" /* Chapter513Component */],
    __WEBPACK_IMPORTED_MODULE_6__components_chapter5_1_4_chapter5_1_4_component__["a" /* Chapter514Component */], __WEBPACK_IMPORTED_MODULE_7__components_chapter5_1_4_1_chapter5_1_4_1_component__["a" /* Chapter5141Component */], __WEBPACK_IMPORTED_MODULE_8__components_chapter5_1_5_chapter5_1_5_component__["a" /* Chapter515Component */],
    __WEBPACK_IMPORTED_MODULE_9__components_chapter5_1_5_1_chapter5_1_5_1_component__["a" /* Chapter5151Component */], __WEBPACK_IMPORTED_MODULE_10__components_chapter5_2_1_chapter5_2_1_component__["a" /* Chapter521Component */], __WEBPACK_IMPORTED_MODULE_12__components_chapter_5_3_1_chapter_5_3_1_component__["a" /* Chapter531Component */]
];
var Chapter5Module = /** @class */ (function () {
    function Chapter5Module() {
    }
    Chapter5Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* FormsModule */]
            ],
            declarations: components,
            exports: components,
        })
    ], Chapter5Module);
    return Chapter5Module;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter-5-3-1/chapter-5-3-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter-5-3-1/chapter-5-3-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <mat-card-header>\n    <mat-card-title><h4>CHILD COMPONENT</h4></mat-card-title>\n  </mat-card-header>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter-5-3-1/chapter-5-3-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter531Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter531Component = /** @class */ (function () {
    function Chapter531Component() {
    }
    Chapter531Component.prototype.greeting = function (name) {
        this.message = "Hello " + name;
        console.log("Hello " + name);
    };
    Chapter531Component.prototype.ngOnInit = function () {
    };
    Chapter531Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-5-3-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter-5-3-1/chapter-5-3-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter-5-3-1/chapter-5-3-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter531Component);
    return Chapter531Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-1/chapter5-1-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-1/chapter5-1-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title><h4><strong>Order Component</strong></h4></mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    Our Today's special menu is\n    <mat-chip-list>\n      <mat-chip color=\"primary\" selected=\"true\" >{{ menuName }}</mat-chip>  &&\n      <mat-chip color=\"primary\" selected=\"true\" >{{ menuPrice }}</mat-chip>\n    </mat-chip-list>\n\n  </mat-card-content>\n</mat-card>\n<hr>\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-1/chapter5-1-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter511Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter511Component = /** @class */ (function () {
    function Chapter511Component() {
    }
    Chapter511Component.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], Chapter511Component.prototype, "menuName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], Chapter511Component.prototype, "menuPrice", void 0);
    Chapter511Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter5-1-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-1/chapter5-1-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-1/chapter5-1-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter511Component);
    return Chapter511Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-2/chapter5-1-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-2/chapter5-1-2.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<hr>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h4><strong>Input by Getter Component</strong></h4>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>Your request quantity is <strong>{{requestQuantity}}</strong>\n     and order is\n      <span *ngIf=\"isOrdered;else reject\"><strong>Complete</strong></span>\n      <ng-template #reject><strong>Rejected</strong></ng-template></p>\n  </mat-card-content>\n</mat-card>\n<hr><br>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-2/chapter5-1-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter512Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter512Component = /** @class */ (function () {
    function Chapter512Component(toastr) {
        this.toastr = toastr;
        this.stockQuantity = 10;
    }
    Object.defineProperty(Chapter512Component.prototype, "requestQuantity", {
        get: function () {
            return this._requestQuantity;
        },
        set: function (quantity) {
            if (quantity == null) {
                return;
            }
            this._requestQuantity = quantity;
            if (this.stockQuantity < this._requestQuantity) {
                this.isOrdered = false;
                this.toastr.warning("Order Request is rejected");
                return;
            }
            this.isOrdered = true;
            this.toastr.info("Order is successful");
        },
        enumerable: true,
        configurable: true
    });
    Chapter512Component.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Chapter512Component.prototype, "requestQuantity", null);
    Chapter512Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter5-1-2',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-2/chapter5-1-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-2/chapter5-1-2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]])
    ], Chapter512Component);
    return Chapter512Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-3/chapter5-1-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-3/chapter5-1-3.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h4><strong>Output Property By EventEmitter Component</strong></h4>\n      </mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n      Inside component : {{ stockSymbol }} {{price | currency : 'USD' : 'symbol' : '1.2-2'}}\n    </mat-card-content>\n  </mat-card>\n<hr><br>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-3/chapter5-1-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter513Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter513Component = /** @class */ (function () {
    function Chapter513Component() {
        var _this = this;
        this.lastPrice = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stockSymbol = 'IBM';
        setInterval(function () {
            var priceQuote = {
                stockSymbol: _this.stockSymbol,
                lastPrice: 100 * Math.random()
            };
            _this.price = priceQuote.lastPrice;
            _this.lastPrice.emit(priceQuote);
        }, 1000);
    }
    Chapter513Component.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], Chapter513Component.prototype, "lastPrice", void 0);
    Chapter513Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter5-1-3',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-3/chapter5-1-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-3/chapter5-1-3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter513Component);
    return Chapter513Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4-1/chapter5-1-4-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4-1/chapter5-1-4-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h3>Order Component</h3>\n      </mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n      {{message}}\n    </mat-card-content>\n  </mat-card>\n<hr><br>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4-1/chapter5-1-4-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter5141Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_stock__ = __webpack_require__("../../../../../src/app/model/stock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter5141Component = /** @class */ (function () {
    function Chapter5141Component() {
    }
    Object.defineProperty(Chapter5141Component.prototype, "stock", {
        get: function () {
            return this._stock;
        },
        set: function (stock) {
            if (stock && stock.bidPrice != undefined) {
                this.message = "Placed order to buy 100 shares of " + stock.stockSymbol + "\n      at $" + stock.bidPrice.toFixed(2);
            }
        },
        enumerable: true,
        configurable: true
    });
    Chapter5141Component.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_stock__["a" /* Stock */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_stock__["a" /* Stock */]])
    ], Chapter5141Component.prototype, "stock", null);
    Chapter5141Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter5-1-4-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4-1/chapter5-1-4-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4-1/chapter5-1-4-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter5141Component);
    return Chapter5141Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4/chapter5-1-4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4/chapter5-1-4.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title><h3>Price Quote Component</h3></mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <button mat-raised-button color=\"primary\"\n      (click)=\"buyStocks($event)\">buy</button>\n    <p>\n      {{ stockSymbol }} {{ lastPrice | currency : 'USD' : 'symbol' : '1.2-2' }}\n    </p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4/chapter5-1-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter514Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter514Component = /** @class */ (function () {
    function Chapter514Component() {
        var _this = this;
        this.buy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stockSymbol = 'IBM';
        setInterval(function () {
            _this.lastPrice = 100 * Math.random();
        }, 2000);
    }
    Chapter514Component.prototype.ngOnInit = function () {
    };
    Chapter514Component.prototype.buyStocks = function () {
        this.buy.emit({ bidPrice: this.lastPrice, stockSymbol: this.stockSymbol });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], Chapter514Component.prototype, "buy", void 0);
    Chapter514Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter5-1-4',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4/chapter5-1-4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-4/chapter5-1-4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter514Component);
    return Chapter514Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5-1/chapter5-1-5-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5-1/chapter5-1-5-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title><h4>Child Component</h4></mat-card-title>\n  </mat-card-header>\n  <ng-content select=\".header\"></ng-content>\n  <div>This is part of child Component</div>\n  <ng-content select=\".footer\"></ng-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5-1/chapter5-1-5-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter5151Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter5151Component = /** @class */ (function () {
    function Chapter5151Component() {
    }
    Chapter5151Component.prototype.ngOnInit = function () {
    };
    Chapter5151Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter5-1-5-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5-1/chapter5-1-5-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5-1/chapter5-1-5-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter5151Component);
    return Chapter5151Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5/chapter5-1-5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5/chapter5-1-5.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title><h3>Child Component</h3></mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p style=\"color: lightgreen\">This part is of child component</p>\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5/chapter5-1-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter515Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter515Component = /** @class */ (function () {
    function Chapter515Component() {
    }
    Chapter515Component.prototype.ngOnInit = function () {
    };
    Chapter515Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter5-1-5',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5/chapter5-1-5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-1-5/chapter5-1-5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter515Component);
    return Chapter515Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-2-1/chapter5-2-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-2-1/chapter5-2-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <mat-card-header>\n    <mat-card-title><h4>OnChanges Component</h4></mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item>Greeting : {{greeting}}</mat-list-item>\n      <mat-list-item>User name : {{user.name}}</mat-list-item>\n      <mat-list-item>Message : {{message}}\n\n          <input class=\"form-control\" type=\"text\" placeholder=\"Enter message\" [(ngModel)]=\"message\">\n\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-2-1/chapter5-2-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter521Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter521Component = /** @class */ (function () {
    function Chapter521Component() {
        this.message = 'Initial message';
    }
    Chapter521Component.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            console.log(key + " : " + JSON.stringify(changes[key], null, 2));
        }
    };
    Chapter521Component.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], Chapter521Component.prototype, "greeting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Chapter521Component.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], Chapter521Component.prototype, "userName", void 0);
    Chapter521Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter5-2-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-2-1/chapter5-2-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-5-startpoint/chapter5/components/chapter5-2-1/chapter5-2-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter521Component);
    return Chapter521Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter-6-startpoint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter-6-startpoint.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <div class=\"row\">\n    <app-chapter-title [title]=\"'Chapter 6 - Forms'\" ></app-chapter-title>\n    <hr>\n    <ul>\n      <li class=\"sub-chapter\">\n        <h3>앵귤러 폼처리 기본</h3>\n        <p>앵귤러에선 폼을 구현할 때 <a [routerLink]=\"['/chapter4']\">데이터 바인딩(data binding)</a> 혹은 폼 컨트롤(form control), 이 두가지 방식으로 처리한다.\n          폼 컨트롤은 다시 <strong>템플릿 기반 폼(template form)</strong>, <strong>반응형 폼(reactive form)</strong> 두가지로 나누어진다.\n          앵귤러에서 제공하는 폼 컨트롤 사용시 가장 훌륭한 점은 <strong>HTML 표준 폼</strong> 달리 사용자 검증 로직(custom validation)을 넣을 수 있다는 것이다.</p>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>HTML 표준 유효성 속성(HTML STANDARD VALIDATION ATTRIBUTE)</h3>\n        <p>\n          입력 필드엔 <code>required, pattern, maxlength, min, max, step</code>과 같은 표준 속성으로 유형성을 검증할 수 있다.\n        </p>\n\n        <br/><hr/>\n        <mat-card>\n          <mat-card-content>\n            <code [innerText]=\"'<input #myInput matInput placeholder=\\'입력\\' type=\\'text\\' required pattern=\\'[a-zA-Z0-9]+\\'>'\"></code>\n          </mat-card-content>\n        </mat-card>\n        <br/><hr/>\n\n        <p><span>{{myInput.validity.valid}}</span></p>\n        <mat-form-field>\n          <input #myInput matInput placeholder=\"입력\" type=\"text\" required pattern=\"[a-zA-Z0-9]+\">\n        </mat-form-field>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>Angular 폼 기본(Angular Form)</h3>\n        <p>\n          앞에서 말했다 싶이, 앵귤러에서 폼을 처리하는 방식은 <strong>템플릿 기반 폼 방식</strong> 과 <strong>반응형 폼 방식</strong>이 있다.\n          템플릿 기반 폼(template form)은 템플릿(template)에서 디렉티브(directive)를 사용하고,\n          반응형 폼은 컴포넌트에서 폼 컨트롤(FormControl)을 사용한다.\n          간단한 방식은 주로 템플릿 기반 폼을 사용하고, 복잡한 폼은 반응형 폼을 사용하는 것을 추천한다.\n        </p>\n        <p>\n          두 가지 앵귤러 폼의 중요한 특징을 알아보자.\n        </p>\n        <ul>\n          <li>두 방식 모두 폼 데이터를 Model에 저장한다. <strong>템플릿은 디렉티브(template directive)</strong>를 사용하여 모델을 정의.반응형은 <strong>컴포넌트 코드에서 모델</strong>을 정의하고 템플릿에 연결한다.</li>\n          <li>반응형 폼에서 모델을 정의할때는 <code>FormControl, FormGroup, FormArray</code> 클래스를 사용한다.</li>\n          <li>반응형 폼에서 모델을 정의한 후, 템플릿에서 연결될 엘리먼트를 정의한다.</li>\n        </ul>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>템플릿 기반 폼(Template Form)</h3>\n        <p>\n          템플릿 기반의 폼에선 모델을 정의할 때는 <code>FormsModule</code>의 <code>NgModel, NgModelGroup, NgForm</code>을 사용한다.\n        </p>\n\n        <p>\n          NgForm은 폼 전체를 가리키는 디렉티브이며, <strong>폼 모듈을 로드하면 모든 form 엘리먼트는 이 디렉티브가 자동으로 적용된다.</strong>\n          <strong>NgForm 인스턴스</strong>의 값을 참조할 때 <strong>지역 템플릿 변수(local template variable)</strong>을 지정해 사용할 수도 있다.\n          또한 NgForm은 폼에서 발생하는 <strong>submit 이벤트</strong>의 동작을 막으므로 <strong>NgSubmit 이벤트</strong>를 사용해야 한다\n        </p>\n\n        <app-code [code]=\"codes[0].code\" [title]=\"codes[0].title\"></app-code>\n        <app-chapter6-1-1></app-chapter6-1-1>\n\n        <p>\n          템플릿 기반 폼에서 <code>NgModel</code><strong>[양방향 바인딩의 NgModel과 다르다]</strong>은 폼에 있는\n          필드 하나를 가르키며, <strong>FormControl 인스턴스가</strong> 생성된다.\n        </p>\n\n        <app-code [code]=\"codes[1].code\" [title]=\"codes[1].title\"></app-code>\n        <app-chapter6-1-2></app-chapter6-1-2>\n\n        <p>\n          NgModelGroup을 사용하면 폼 필드(NgModel)을 그룹으로 묶어 사용할 수 있다.\n          NgModelGroup 또한 <strong>FormGroup 인스턴스를 내부적으로 생성한다.</strong>\n          <strong>NgForm.value</strong> 객체 안에 내부적으로 생성되며, NgModelGroup의 내부 폼 필드들은 생성된 객체의 프러퍼티로 존재한다.\n        </p>\n\n        <app-code [code]=\"codes[2].code\" [title]=\"codes[2].title\"></app-code>\n        <app-chapter6-1-3></app-chapter6-1-3>\n\n        <p>\n          지금까지 배웠던 것을 합쳐서 회원 가입 폼을 정의해보자.\n        </p>\n\n        <app-code [code]=\"codes[3].code\" [title]=\"codes[3].title\"></app-code>\n\n        <p *ngIf=\"result\">\n          {{result | json }}\n        </p>\n        <app-chapter6-1-4 (submitEmitter)=\"onSubmitHandler($event)\"></app-chapter6-1-4>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>반응형 폼(Reactive Form)</h3>\n        <p>\n          <strong>반응형 폼</strong>은 컴포넌트안에 폼 모델(Form Model)을 정의하고, <strong>폼 모델과 템플릿의 HTML Element와 연결한다</strong>.\n          <strong>폼 모델</strong>은 데이터를 저장할 때 사용하는 데이터 구조체이며, <code>FormControl, FromGroup, FormArray</code>로 정의되어 있다.\n        </p>\n\n        <p>\n          <code>FormControl</code>은 폼을 구성하는 기본 단위이며, FormControl 모델은 보통 <code [innerText]=\"'<input>'\"></code> Element 하나에 해당된다.\n          FormControl의 장점은 HTML 엘리먼트에 있는 값을 저장하며, 값이 변경되었는지를 확인하며 <strong>유효성 검증 상태</strong>를 확인할 수 있다.\n        </p>\n\n        <p>\n          <code>FormGroup</code>은 폼을 구성하는 요소이며, <strong>FormControl</strong>을 그룹으로 묶을 때 사용한다.\n          그룹으로 묶인 FormControl들 중 하나라도 유효성이 검사에 실패하면 전체 그룹의 유효성 검사가 실패하는 것으로 처리하기에\n          연관된 항목을 묶을때 편리하다.\n        </p>\n\n        <app-code [code]=\"codes[4].code\" [title]=\"codes[4].title\"></app-code>\n        <app-code [code]=\"codes[5].code\" [title]=\"codes[5].title\"></app-code>\n\n        <app-chapter6-1-5></app-chapter6-1-5>\n\n        <p>\n          <strong>FormArray</strong>는 FormGroup과 비슷하지만 <strong>배열과 비슷한 기능</strong>을 하며, 필드가 사용자의 액션에 따라\n          늘어날때 유용하다(Dynamically adding form).\n        </p>\n\n        <hr>\n        <br/>\n\n        <h3>반응형 폼 데릭테브</h3>\n\n        <p>\n          <strong>반응형 폼 디렉티브</strong>은 <code>form</code> 접두사가 붙으며, 템플릿의 <code>ng</code> 접두사와 구별된다.\n          반응형 디렉티브는 템플릿 변수를 지정할 수 없으며 템플릿 클래스에서 모델을 조작해야 한다.\n        </p>\n\n        <p>\n          <strong>formGroup</strong>은 폼을 구성하는 <code [innerText]=\"'<form>'\"></code>에 FormGroup 모델 클래스를 바인딩하는 역할을 한다.\n          모델과 템플릿을 연겨라려면 컴포넌트에 지정한 프러퍼티 이름과 폼 디렉티브에 지정한 이름이 같아야 한다.\n        </p>\n\n        <p>\n          <strong>formGroupName</strong>은 폼 안에서 새로운 그룹으로 폼 컨트롤을 묶는 역할을 한다. <code>formGroupName 디렉티브</code>는\n          formGroup 클래스를 사용한다.\n        </p>\n\n        <app-code [code]=\"codes[6].code\" [title]=\"codes[6].title\"></app-code>\n        <app-chapter6-1-6></app-chapter6-1-6>\n\n        <p><strong>formContol</strong>은 폼 안에 정의된 필드를 가르키기 위해서 사용할 수도, <strong>FormGroup</strong>으로\n        정의되지 않은 상태에서도 사용할 수 있다. 우리는 이미 <a [routerLink]=\"['/chapter4']\">Chapter4 Observable</a>에서 FormControl의 property인\n        <code>valueChanges</code>를 사용했었다.\n\n          <app-code [code]=\"codes[7].code\" [title]=\"codes[7].title\"></app-code>\n          <app-chapter6-1-7></app-chapter6-1-7>\n        </p>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>폼 유효성 검사(Validator)</h3>\n        <p>\n          폼의 유효성 검사는 <strong>validator</strong>을 이용하여 구현한다.\n          앵귤러는 기본 유효성 검사기 <code>required, minLength, maxLength, pattern</code> 등을 제공하며,\n          개발자는 본인만의 유효성 검사기(custom validator)를 구현할 수 있다.\n          유효성 검사기를 정의한 후 <strong>폼 모델 생성시 이 함수를 인자로 넘기면</strong> 폼 컨트롤러의 프러퍼티를 통해\n          유효 검사의 결과를 확인할 수 있다.\n          <strong>유효성 검사기의 갯수에는 제한이 없으며</strong> <code>valid</code>property 을 통해 검사 결과를 확인할 수 있다.\n        </p>\n\n        <p><strong>커스텀 유효성 검사기(Custom Validator)</strong>은 사용자가 원하는 특정 로직을 검사할 수 있으며\n        단순한 함수이기에 정의하기 간편하다. <strong>주의할 점은 <code>FormControl,FormGroup,FormArray</code>와 같은 모델 클래스를 인자로 받고\n            검사 로직을 수행후 에러 객체를 반환하면 된다.</strong></p>\n\n        <app-code [code]=\"codes[8].code\" [title]=\"codes[8].title\"></app-code>\n        <app-code [code]=\"codes[9].code\" [title]=\"codes[9].title\"></app-code>\n        <app-chapter6-2-1></app-chapter6-2-1>\n      </li>\n    </ul>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter-6-startpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter6StartpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_chapter6_code__ = __webpack_require__("../../../../../src/app/metadata/chapter6-code.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter6StartpointComponent = /** @class */ (function () {
    function Chapter6StartpointComponent() {
        this.codes = __WEBPACK_IMPORTED_MODULE_1__metadata_chapter6_code__["a" /* chapter6_code */];
    }
    Chapter6StartpointComponent.prototype.ngOnInit = function () {
    };
    Chapter6StartpointComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    Chapter6StartpointComponent.prototype.onSubmitHandler = function (value) {
        console.log(value);
        this.result = value;
    };
    Chapter6StartpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-6-startpoint',
            template: __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter-6-startpoint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter-6-startpoint.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter6StartpointComponent);
    return Chapter6StartpointComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/chapter6.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter6Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chapter6_1_1_chapter6_1_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-1/chapter6-1-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_chapter6_1_2_chapter6_1_2_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-2/chapter6-1-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_chapter6_1_3_chapter6_1_3_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-3/chapter6-1-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_chapter6_1_4_chapter6_1_4_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-4/chapter6-1-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chapter6_1_5_chapter6_1_5_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-5/chapter6-1-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chapter6_1_6_chapter6_1_6_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-6/chapter6-1-6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chapter6_1_7_chapter6_1_7_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-7/chapter6-1-7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chapter6_2_1_chapter6_2_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-2-1/chapter6-2-1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var components = [
    __WEBPACK_IMPORTED_MODULE_3__components_chapter6_1_1_chapter6_1_1_component__["a" /* Chapter611Component */], __WEBPACK_IMPORTED_MODULE_5__components_chapter6_1_2_chapter6_1_2_component__["a" /* Chapter612Component */],
    __WEBPACK_IMPORTED_MODULE_6__components_chapter6_1_3_chapter6_1_3_component__["a" /* Chapter613Component */], __WEBPACK_IMPORTED_MODULE_7__components_chapter6_1_4_chapter6_1_4_component__["a" /* Chapter614Component */],
    __WEBPACK_IMPORTED_MODULE_8__components_chapter6_1_5_chapter6_1_5_component__["a" /* Chapter615Component */], __WEBPACK_IMPORTED_MODULE_9__components_chapter6_1_6_chapter6_1_6_component__["a" /* Chapter616Component */],
    __WEBPACK_IMPORTED_MODULE_10__components_chapter6_1_7_chapter6_1_7_component__["a" /* Chapter617Component */], __WEBPACK_IMPORTED_MODULE_11__components_chapter6_2_1_chapter6_2_1_component__["a" /* Chapter621Component */]
];
var Chapter6Module = /** @class */ (function () {
    function Chapter6Module() {
    }
    Chapter6Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            ],
            declarations: components,
            exports: components
        })
    ], Chapter6Module);
    return Chapter6Module;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-1/chapter6-1-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-1/chapter6-1-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr>\n<mat-card>\n  <mat-card-content>\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n      <pre>{{myForm['form'] | json }} </pre>\n    </form>\n  </mat-card-content>\n</mat-card>\n<hr><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-1/chapter6-1-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter611Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter611Component = /** @class */ (function () {
    function Chapter611Component() {
    }
    Chapter611Component.prototype.ngOnInit = function () {
    };
    Chapter611Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter6-1-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-1/chapter6-1-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-1/chapter6-1-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter611Component);
    return Chapter611Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-2/chapter6-1-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-2/chapter6-1-2.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<hr>\n<mat-card>\n  <mat-card-header>\n    <p>\n    <strong>User Name : {{userName}}</strong><br/>\n    <strong>NgModel Instance Value : {{userNameInput.value}}</strong>\n    </p>\n  </mat-card-header>\n  <mat-card-content>\n    <form #myForm=\"ngForm\" class=\"form-group\" (ngSubmit)=\"onSubmit(myForm.value)\" >\n      <mat-form-field>\n        <input ngModel #userNameInput=\"ngModel\" matInput placeholder=\"Enter Name\"\n               type=\"text\" name=\"username\">\n      </mat-form-field>\n      <button type=\"submit\" mat-raised-button color=\"accent\" >Submit</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n<hr><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-2/chapter6-1-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter612Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter612Component = /** @class */ (function () {
    function Chapter612Component() {
    }
    Chapter612Component.prototype.ngOnInit = function () {
    };
    Chapter612Component.prototype.onSubmit = function (value) {
        console.log(value);
        this.userName = value['username'];
    };
    Chapter612Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter6-1-2',
            template: __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-2/chapter6-1-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-2/chapter6-1-2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter612Component);
    return Chapter612Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-3/chapter6-1-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-3/chapter6-1-3.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<mat-card>\n  <mat-card-content>\n    <mat-card-header>\n      <p *ngIf=\"isSubmit\">\n        First Name: {{myForm.value.fullName.firstName}} <br/>\n        Last Name: {{myForm.value.fullName.lastName}} <br/>\n      </p>\n    </mat-card-header>\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onTheSubmit(myForm.value.fullName)\">\n      <div ngModelGroup=\"fullName\">\n        <mat-form-field>\n          <input matInput placeholder=\"Enter First Name\" ngModel type=\"text\"\n                 name=\"firstName\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Enter Last Name\" ngModel type=\"text\"\n                 name=\"lastName\">\n        </mat-form-field>\n        <button type=\"submit\" mat-raised-button color=\"accent\">Submit</button>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n<hr><br>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-3/chapter6-1-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter613Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter613Component = /** @class */ (function () {
    function Chapter613Component() {
        this.isSubmit = false;
    }
    Chapter613Component.prototype.ngOnInit = function () {
    };
    Chapter613Component.prototype.onTheSubmit = function (value) {
        console.log(value);
        this.isSubmit = true;
    };
    Chapter613Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter6-1-3',
            template: __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-3/chapter6-1-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-3/chapter6-1-3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter613Component);
    return Chapter613Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-4/chapter6-1-4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field{\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-4/chapter6-1-4.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr/>\n<mat-card>\n  <mat-card-content>\n  <form\n    class=\"form-group\"\n    #joinForm=\"ngForm\" (ngSubmit)=\"onSubmit(joinForm.value)\">\n    <mat-form-field>\n      <input matInput ngModel placeholder=\"Enter name\"\n             type=\"text\" name=\"username\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput ngModel placeholder=\"Enter ssn\"\n             type=\"text\" name=\"ssn\">\n    </mat-form-field>\n\n    <div ngModelGroup=\"passwordsGroup\">\n      <mat-form-field>\n        <input matInput ngModel placeholder=\"Enter password\"\n               type=\"password\" name=\"password\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput ngModel placeholder=\"Enter confirm password\"\n               type=\"password\" name=\"pconfirm\">\n      </mat-form-field>\n    </div>\n\n    <button type=\"submit\" mat-raised-button color=\"primary\">Join</button>\n  </form>\n  </mat-card-content>\n</mat-card>\n<hr><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-4/chapter6-1-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter614Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Chapter614Component = /** @class */ (function () {
    function Chapter614Component() {
        this.submitEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Chapter614Component.prototype.ngOnInit = function () {
    };
    Chapter614Component.prototype.onSubmit = function (value) {
        console.log(value);
        this.submitEmitter.emit(value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], Chapter614Component.prototype, "submitEmitter", void 0);
    Chapter614Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter6-1-4',
            template: __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-4/chapter6-1-4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-4/chapter6-1-4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter614Component);
    return Chapter614Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-5/chapter6-1-5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-5/chapter6-1-5.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr/>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h4>FormGroup 모델</h4>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      <strong>from</strong> : {{from | date : 'medium'}} <br/>\n      <strong>to</strong> : {{to | date : 'medium'}}\n    </p>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit()\">\n      <mat-form-field>\n        <input matInput type=\"date\" placeholder=\"Enter From Date\"\n          [formControlName]=\"'to'\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"date\" placeholder=\"Enter to Date\"\n          [formControlName]=\"'from'\">\n      </mat-form-field>\n      <button mat-raised-button type=\"submit\">Submit</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n<hr/><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-5/chapter6-1-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter615Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter615Component = /** @class */ (function () {
    function Chapter615Component() {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            to: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            from: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
    }
    Chapter615Component.prototype.onFormSubmit = function () {
        this.to = this.formGroup.value['to'];
        this.from = this.formGroup.value['from'];
    };
    Chapter615Component.prototype.ngOnInit = function () {
    };
    Chapter615Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter6-1-5',
            template: __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-5/chapter6-1-5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-5/chapter6-1-5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter615Component);
    return Chapter615Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-6/chapter6-1-6.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-6/chapter6-1-6.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr>\n<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"formGroup\">\n      <div [formGroupName]=\"'dateRange'\">\n        <mat-form-field>\n          <input type=\"date\" matInput placeholder=\"Enter from Date\"\n            [formControlName]=\"'from'\">\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"date\" matInput placeholder=\"Enter from Date\"\n                 [formControlName]=\"'to'\">\n        </mat-form-field>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n<hr/><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-6/chapter6-1-6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter616Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter616Component = /** @class */ (function () {
    function Chapter616Component() {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            dateRange: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                from: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
                to: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
            })
        });
    }
    Chapter616Component.prototype.ngOnInit = function () {
    };
    Chapter616Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter6-1-6',
            template: __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-6/chapter6-1-6.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-6/chapter6-1-6.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter616Component);
    return Chapter616Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-7/chapter6-1-7.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-7/chapter6-1-7.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr/><br>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h4>FormControl ValueChanges</h4>\n    </mat-card-title>\n  </mat-card-header>\n\n    <hr/>\n    <mat-card-content>\n      <p> <strong>Name :</strong> {{name}}</p>\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"Enter Name\"\n               [formControl]=\"myControl\">\n      </mat-form-field>\n    </mat-card-content>\n</mat-card>\n<br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-7/chapter6-1-7.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter617Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter617Component = /** @class */ (function () {
    function Chapter617Component() {
        var _this = this;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Guest');
        this.myControl.valueChanges
            .debounceTime(500)
            .subscribe(function (data) { return _this.name = data; });
    }
    Chapter617Component.prototype.ngOnInit = function () {
    };
    Chapter617Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter6-1-7',
            template: __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-7/chapter6-1-7.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-1-7/chapter6-1-7.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter617Component);
    return Chapter617Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-2-1/chapter6-2-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nmat-form-field{\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-2-1/chapter6-2-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<hr>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h4>Custom Validator</h4>\n    </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n\n    <p *ngIf=\"valid !== null\">\n        <strong>Valid : </strong> {{valid}}\n    </p>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit()\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"Enter username\"\n               [formControlName]=\"'username'\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"Enter ssn\"\n               [formControlName]=\"'ssn'\">\n      </mat-form-field>\n\n      <div [formGroupName]=\"'passwordsGroup'\">\n        <mat-form-field>\n          <input type=\"password\" matInput placeholder=\"Enter Password\"\n                 [formControlName]=\"'password'\">\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"password\" matInput placeholder=\"Enter Password Again\"\n                 [formControlName]=\"'pconfirm'\">\n        </mat-form-field>\n      </div>\n      <button mat-raised-button color=\"primary\" >Submit</button>\n    </form>\n  </mat-card-content>\n\n</mat-card>\n<hr/><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-2-1/chapter6-2-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter621Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_equal_validator__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/validators/equal-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_ssn_validator__ = __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/validators/ssn-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Chapter621Component = /** @class */ (function () {
    function Chapter621Component() {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            'ssn': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__validators_ssn_validator__["a" /* ssnValidator */]),
            'passwordsGroup': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(5)]),
                'pconfirm': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('')
            }, __WEBPACK_IMPORTED_MODULE_2__validators_equal_validator__["a" /* equalValidator */])
        });
    }
    Chapter621Component.prototype.onFormSubmit = function () {
        console.log(this.formGroup.valid);
        this.valid = this.formGroup.valid;
    };
    Chapter621Component.prototype.ngOnInit = function () {
    };
    Chapter621Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter6-2-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-2-1/chapter6-2-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-6-startpoint/chapter6/components/chapter6-2-1/chapter6-2-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter621Component);
    return Chapter621Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/validators/equal-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equalValidator;
function equalValidator(_a) {
    var value = _a.value;
    var _b = Object.keys(value || {}), first = _b[0], rest = _b.slice(1);
    var valid = rest.every(function (v) { return value[v] === value[first]; });
    return valid ? null : { equal: true };
}


/***/ }),

/***/ "../../../../../src/app/component/chapter-6-startpoint/chapter6/validators/ssn-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ssnValidator;
function ssnValidator(_a) {
    var value = _a.value;
    value = value || '';
    var valid = value.match(/^\d{9}$/);
    return valid ? null : { ssn: true };
}


/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter-7-startpoint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter-7-startpoint.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <div class=\"row\">\n    <app-chapter-title [title]=\"'Chapter 8 - Http'\" ></app-chapter-title>\n    <hr>\n    <ul>\n      <li class=\"sub-chapter\">\n        <h3>서버와 클라이언트(Server and Client)</h3>\n        <p>\n          앵귤러 어플리케이션은 <strong>Http 혹은 Websocket</strong>을 이용하여 서버와\n          데이터를 주고 받을 수 있다. 서버에 요청을 보내려면 <strong>Http Object</strong>를\n          사용할 수 있으며, <strong>Websocket</strong>또한 <a [routerLink]=\"['/chapter4']\">Observable (Chapter4)</a>\n          과 맵핑할 수 있다.\n        </p>\n      </li>\n\n      <li class=\"sub-chapter\">\n        <h3>Http Object</h3>\n        <p>\n          앵귤러 어플리케이션은 <strong>Http Request</strong>을 <strong>비동기(asynchronous)</strong>로 처리하기에\n          Http Request을 보낸 후에도 사용자가 하던 작업을 계속할 수 있다(No refresh). Asynchronous Http Request는\n          <a [routerLink]=\"['/chapter4']\">Observable (Chapter4)</a>로 처리할 수 있으며, Observable이 프로미스보다\n          훌륭한 선택임은 당연하다.\n        </p>\n\n        <p>\n          Http 클래스는 <code>@angular/http</code> 패키지에 정의되어 있다.\n          <code>Http</code> 객체의 함수들은 <strong>Http Protocol Method</strong>를 정의하고 있으며,\n          <code>RequestOptionArgs</code> 객체를 추가하여 <strong>옵션(Header,Parameter)</strong>등을 설정할 수 있다.\n          <code>Request</code>객체는 Http 객체보다 더 많은 옵션을 제공하며, <strong>Header를 정의하고, 요청 방식을 선택하는 등 Http 요청 방식을</strong> 더 세밀하게\n          조정할 수 있다.\n        </p>\n\n        <app-code [title]=\"codes[0].title\" [code]=\"codes[0].code\"></app-code>\n        <app-chapter7-1-1></app-chapter7-1-1>\n\n        <p>\n          <code>Request</code> 객체를 생성하면서 객체 리터럴을 전달하지 않고,\n          <strong>RequestOptionsArgs</strong> 객체를 전달할 수도 있다.\n        </p>\n\n        <app-chapter7-1-2></app-chapter7-1-2>\n      </li>\n    </ul>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter-7-startpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter7StartpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_chapter7_code__ = __webpack_require__("../../../../../src/app/metadata/chapter7-code.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chapter7StartpointComponent = /** @class */ (function () {
    function Chapter7StartpointComponent() {
        this.codes = __WEBPACK_IMPORTED_MODULE_1__metadata_chapter7_code__["a" /* chapter7_code */];
    }
    Chapter7StartpointComponent.prototype.ngOnInit = function () {
    };
    Chapter7StartpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-7-startpoint',
            template: __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter-7-startpoint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter-7-startpoint.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Chapter7StartpointComponent);
    return Chapter7StartpointComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter7/chapter7.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter7Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_chapter7_1_1_chapter7_1_1_component__ = __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-1/chapter7-1-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tokens_tokens__ = __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/tokens/tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_chapter7_1_2_chapter7_1_2_component__ = __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-2/chapter7-1-2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var components = [__WEBPACK_IMPORTED_MODULE_2__components_chapter7_1_1_chapter7_1_1_component__["a" /* Chapter711Component */], __WEBPACK_IMPORTED_MODULE_7__components_chapter7_1_2_chapter7_1_2_component__["a" /* Chapter712Component */]];
var Chapter7Module = /** @class */ (function () {
    function Chapter7Module() {
    }
    Chapter7Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["k" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__tokens_tokens__["a" /* backendUrl */], useValue: '/server' }],
            declarations: components,
            exports: components
        })
    ], Chapter7Module);
    return Chapter7Module;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-1/chapter7-1-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field{\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-1/chapter7-1-1.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr/>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h4>Http Basic</h4>\n    </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <mat-list *ngIf=\"users\">\n      <mat-list-item *ngFor=\"let user of users\">\n        {{ user | json }}\n      </mat-list-item>\n    </mat-list>\n    <br/>\n    <p *ngIf=\"invalid;else showUser\"> Cannot found the name : {{myInput.value}} </p>\n    <ng-template #showUser ><p> {{searchUser | json }}</p></ng-template>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Enter Search Name\"\n             [formControl]=\"myInput\" >\n    </mat-form-field>\n    <button mat-raised-button (click)=\"onSearch()\">Search</button>\n  </mat-card-content>\n\n</mat-card>\n<hr/><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-1/chapter7-1-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter711Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokens_tokens__ = __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/tokens/tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Chapter711Component = /** @class */ (function () {
    function Chapter711Component(http, serverUrl) {
        var _this = this;
        this.http = http;
        this.serverUrl = serverUrl;
        this.myInput = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.invalid = true;
        this.http.get(serverUrl + "/user").subscribe(function (response) {
            var data = response.json();
            _this.users = data;
        });
        this.myInput.valueChanges
            .debounceTime(500)
            .switchMap(function (value) { return _this.getUser(value); })
            .subscribe(function (response) {
            console.log(response);
            _this.searchUser = response;
            _this.invalid = false;
        }, function (error) { return _this.invalid = true; });
    }
    Chapter711Component.prototype.getUser = function (value) {
        var param = 'name=' + value;
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */]({
            url: this.serverUrl + "/user/search",
            search: param,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get
        });
        return this.http.request(request).map(function (response) { return response.json(); });
    };
    Chapter711Component.prototype.onSearch = function () {
        var _this = this;
        this.getUser(this.myInput.value).subscribe(function (response) {
            console.log(response);
            _this.searchUser = response;
            _this.invalid = false;
        }, function (error) { return _this.invalid = true; });
    };
    Chapter711Component.prototype.ngOnInit = function () {
    };
    Chapter711Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter7-1-1',
            template: __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-1/chapter7-1-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-1/chapter7-1-1.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__tokens_tokens__["a" /* backendUrl */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String])
    ], Chapter711Component);
    return Chapter711Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-2/chapter7-1-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nmat-form-field{\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-2/chapter7-1-2.component.html":
/***/ (function(module, exports) {

module.exports = "\n<hr/>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h4>RequestOptionsArgs</h4>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"form-group\" [formGroup]=\"formGroup\" (ngSubmit)=\"onUserSubmit()\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"Enter Name\"\n               [formControlName]=\"'name'\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"email\" matInput placeholder=\"Enter Email\"\n              [formControlName]=\"'email'\">\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\">Submit</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n<hr/><br/>\n"

/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-2/chapter7-1-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chapter712Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokens_tokens__ = __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/tokens/tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Chapter712Component = /** @class */ (function () {
    function Chapter712Component(http, serverUrl, formBuilder) {
        this.http = http;
        this.serverUrl = serverUrl;
        this.formGroup = formBuilder.group({
            'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].minLength(3)),
            'email': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].email)
        });
    }
    Chapter712Component.prototype.onUserSubmit = function () {
        var _this = this;
        console.log(this.formGroup.value);
        if (this.formGroup.valid) {
            var requestOptionArgs = {
                url: this.serverUrl + "/user/add",
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                    'Accept': 'application/json',
                }),
                body: this.formGroup.value,
                params: this.formGroup.value
            };
            this.http.post(this.serverUrl + "/user/add", requestOptionArgs)
                .map(function (response) { return response.json(); }).subscribe(function (data) { console.log(data); _this.savedUser = data; });
        }
    };
    Chapter712Component.prototype.ngOnInit = function () {
    };
    Chapter712Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter7-1-2',
            template: __webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-2/chapter7-1-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/chapter-7-startpoint/chapter7/components/chapter7-1-2/chapter7-1-2.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__tokens_tokens__["a" /* backendUrl */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], Chapter712Component);
    return Chapter712Component;
}());



/***/ }),

/***/ "../../../../../src/app/component/chapter-7-startpoint/chapter7/tokens/tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backendUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var backendUrl = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]("BackendUrl");


/***/ }),

/***/ "../../../../../src/app/component/common/chapter-title/chapter-title.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/common/chapter-title/chapter-title.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<mat-toolbar color=\"primary\" >\n  <h2> <strong> <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n    {{title}} &nbsp;by&nbsp;\n    <a [href]=\"author_email\">{{author}}</a> </strong>\n  </h2>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/component/common/chapter-title/chapter-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapterTitleComponent = /** @class */ (function () {
    function ChapterTitleComponent() {
        this.author = "SiWoo Kim";
        this.author_email = "skim327@myseneca.ca";
    }
    ChapterTitleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChapterTitleComponent.prototype, "title", void 0);
    ChapterTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chapter-title',
            template: __webpack_require__("../../../../../src/app/component/common/chapter-title/chapter-title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/common/chapter-title/chapter-title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChapterTitleComponent);
    return ChapterTitleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/common/code/code.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.code-card {\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/common/code/code.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card class=\"code-card\">\n  <mat-card-header *ngIf=\"title\"><mat-card-title><h3><i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\n    {{title}}</h3></mat-card-title></mat-card-header>\n\n  <hr>\n  <code [innerText]=\"code\"></code>\n  <hr>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/component/common/code/code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeComponent = /** @class */ (function () {
    function CodeComponent() {
    }
    CodeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('code'),
        __metadata("design:type", String)
    ], CodeComponent.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], CodeComponent.prototype, "title", void 0);
    CodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-code',
            template: __webpack_require__("../../../../../src/app/component/common/code/code.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/common/code/code.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/common/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/common/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" >\n<ul>\n  <li><a [routerLink]=\"['/chapter1']\">Chapter 1: Starting Angular>:</a></li>\n  <li><a [routerLink]=\"['/chapter2']\">Chapter 2: Router>:</a></li>\n  <li><a [routerLink]=\"['/chapter3']\">Chapter 3: Dependency Injection>:</a></li>\n  <li><a [routerLink]=\"['/chapter4']\">Chapter 4: Data Binding>:</a></li>\n  <li><a [routerLink]=\"['/chapter5']\">Chapter 5: Component Communication>:</a></li>\n  <li><a [routerLink]=\"['/chapter6']\">Chapter 6: Forms>:</a></li>\n  <li><a [routerLink]=\"['/chapter7']\">Chapter 7: Http>:</a></li>\n  <hr>\n  <li><a [routerLink]=\"['/project']\">Learning Project>:</a></li>\n</ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/common/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/component/common/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/common/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/metadata/chapter4-code.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chapter4_code; });
var chapter4_code = [
    {
        "id": "4-1",
        "title": "databindingComponent.html",
        "code": "\n" +
            "<div>\n" +
            "  <h3>Greeting {{name}}!</h3>\n" +
            "  <span [hidden]=\"isHidden\">The span element is hidden</span>\n" +
            "  <button (click)=\"onEventHandler()\">Trigger Event</button>\n" +
            "</div>\n"
    },
    {
        "id": "4-1-1",
        "title": "eventComponent.html",
        "code": "\n" +
            "<button (click)=\"onClickHandler()\">Get data</button>\n" +
            "<input placeholder=\"Enter your name\" (input)=\"onInputHandler($event)\">\n" +
            "\n" +
            "<div>\n" +
            "  <span *ngIf=\"data\">{{data}}</span>\n" +
            "  <span *ngIf=\"name\">{{name}}</span>\n" +
            "</div>\n"
    },
    {
        "id": "4-1-2",
        "title": "attributeAndProperty.html",
        "code": " <div>\n" +
            "      <h3>Attribute And Property Binding</h3>\n" +
            "      <mat-form-field style=\"width: 100%\" >\n" +
            "      <input matInput type=\"text\" [value]=\"greeting\" [attr.value]=\"greeting\"\n" +
            "        (input)=\"onInputHandler($event)\"\n" +
            "      >\n" +
            "      </mat-form-field>\n" +
            "    </div>"
    },
    {
        "id": "4-2-1",
        "title": "structuralBinding.html",
        "code": "\n" +
            "        <mat-radio-button value=\"true\" (change)=\"isShow=radioButton1.value\" #radioButton1>Turn On</mat-radio-button>\n" +
            "        <mat-radio-button value=\"false\" (change)=\"isShow=radioButton2.value\" #radioButton2>Turn Off</mat-radio-button>\n" +
            "\n" +
            "        <p>\n" +
            "          State : <strong>{{isShow}}</strong>\n" +
            "        </p>\n" +
            "        <p>\n" +
            "          <span *ngIf=\"isShow\" ><strong>State is turn on</strong></span>\n" +
            "        </p>"
    },
    {
        "id": "4-3-1",
        "title": "two-wayBinding.html",
        "code": "\n" +
            "      <h3>Two-Way Binding</h3>\n" +
            "      <mat-input-container>\n" +
            "        <input matInput type=\"text\" placeholder=\"Enter your id\"\n" +
            "               [(ngModel)]=\"cookiedName\">\n" +
            "        <br>\n" +
            "        <p>Your ID is {{cookieName}}</p>\n" +
            "      </mat-input-container>"
    },
    {
        "id": "4-3-2",
        "title": "two-wayBinding.ts",
        "code": "\n" +
            "@Component({\n" +
            "  selector: 'app-chapter-4-3',\n" +
            "  templateUrl: './chapter-4-3.component.html',\n" +
            "  styleUrls: ['./chapter-4-3.component.css']\n" +
            "})\n" +
            "export class Chapter43Component implements OnInit {\n" +
            "  cookiedName:string;\n" +
            "\n" +
            "  constructor() {\n" +
            "    setTimeout(()=>{\n" +
            "      this.cookiedName = \"user01@email.com\"\n" +
            "    },3000);\n" +
            "  }\n"
    },
    {
        "id": "4-4",
        "title": "observable.ts",
        "code": "\n" +
            "\n" +
            "    let mySubscription:Subscription =\n" +
            "      new Observable(subscriber => { subscriber.next([1,2,3,4,5])})\n" +
            "      .subscribe(data => (<Array<number>>data).forEach(item => console.log(item) ));\n"
    },
    {
        "id": "4-4-1",
        "title": "observable.ts",
        "code": "\n" +
            "export class Chapter44Component implements OnInit {\n" +
            "  inputString:string;\n" +
            "\n" +
            "  onKeyUpHandler(event : any){\n" +
            "    this.inputString = event.target.value;\n" +
            "  }"
    },
    {
        "id": "4-4-2",
        "title": "observable.ts",
        "code": "\n" +
            "export class Chapter44Component implements OnInit {\n" +
            "  inputString:string;\n" +
            "  observableInput:FormControl = new FormControl();\n" +
            "\n" +
            "  constructor() {\n" +
            "    this.observableInput.valueChanges\n" +
            "      .debounceTime(500)\n" +
            "      .subscribe( value => this.inputString = value );\n" +
            "  }\n"
    },
    {
        "id": "4-4-3",
        "title": "cancelObservable.ts",
        "code": "\n" +
            "@Component({\n" +
            "  selector: 'app-chapter-4-4-1',\n" +
            "  template : `    \n" +
            "    <hr>\n" +
            "    <mat-card>\n" +
            "      <mat-card-title><h4><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> <strong>Try</strong></h4></mat-card-title>\n" +
            "      <mat-card-content>\n" +
            "        <div>\n" +
            "          <h3>Searching Weatehr</h3>\n" +
            "          <p><span><strong>{{temperature}}</strong></span></p>\n" +
            "          <mat-input-container>\n" +
            "            <input matInput placeholder=\"Enter City\" type=\"text\" [formControl]=\"searchInput\">\n" +
            "          </mat-input-container>\n" +
            "        </div>\n" +
            "      </mat-card-content>\n" +
            "    </mat-card>\n" +
            "    <hr><br/>\n" +
            "  `,\n" +
            "  styleUrls: ['./chapter-4-4-1.component.css']\n" +
            "})\n" +
            "export class Chapter441Component implements OnInit {\n" +
            "  private baseWeatherUrl:string = 'http://api.openweathermap.org/data/2.5/weather?q=';\n" +
            "  private urlSuffix:string = '&units=metric&appid=b9dbf1e48fe5e56ff01cecbdd54fc138';\n" +
            "\n" +
            "  searchInput:FormControl = new FormControl();\n" +
            "  temperature:string;\n" +
            "\n" +
            "  constructor(private http:Http) {\n" +
            "    this.searchInput.valueChanges\n" +
            "      .debounceTime(200)\n" +
            "      .switchMap( city => this.getWeather(city) )\n" +
            "      .subscribe( res => {\n" +
            "        this.temperature = `Current temperature is ${res['main'].temp}C, humidity: ${res['main'].humidity}%`\n" +
            "      });\n" +
            "  }\n" +
            "\n" +
            "  private getWeather(city: string):Observable<Array<string>> {\n" +
            "    return this.http.get(this.baseWeatherUrl + city + this.urlSuffix)\n" +
            "      .map(res => {\n" +
            "        console.log(res.json());\n" +
            "        return res.json();\n" +
            "      })\n" +
            "      .catch(err => {\n" +
            "        if(err.status == 404){\n" +
            "          console.log(`City ${city} not found`);\n" +
            "          return Observable.of();\n" +
            "        }\n" +
            "      });\n" +
            "  }"
    },
    {
        "id": "4-5",
        "title": "temperatuePipe.ts",
        "code": "\n" +
            "@Pipe({name: 'temperature'})\n" +
            "export class TemperaturePipe implements PipeTransform {\n" +
            "\n" +
            "  transform(value: number, fromTo: string): any {\n" +
            "\n" +
            "    if(!fromTo){ throw 'Temperature pipe required parameter FtoC or CtoF'}\n" +
            "\n" +
            "    return (fromTo === 'FtoC') ? (value - 32) * 5.0 /9.0 : (value * 5.0) + 5.0 + 32;\n" +
            "    \n" +
            "  }\n" +
            "\n" +
            "}\n"
    },
];


/***/ }),

/***/ "../../../../../src/app/metadata/chapter5-code.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chapter5_code; });
var chapter5_code = [
    {
        id: 1, chapter: 5,
        title: 'OrderComponent.ts',
        code: 'export class Chapter511Component implements OnInit {\n' +
            '  @Input() menuName:string;\n' +
            '  @Input() menuPrice:number;\n' +
            '\n' +
            '  constructor() { }\n' +
            '\n' +
            '  ngOnInit() {\n' +
            '  }\n'
    },
    {
        id: 2, chapter: 5,
        title: 'ParentComponent.html',
        code: '  <mat-input-container>\n' +
            '          <input matInput type="text" placeholder="Enter Menu" (input)="onMenuHandler($event)" >\n' +
            '        </mat-input-container>\n' +
            '        <app-chapter5-1-1 [menuName]="menu" [menuPrice]="2.32"  ></app-chapter5-1-1>\n' +
            '    '
    },
    {
        id: 3, chapter: 5,
        title: 'GetOrderComponent.ts',
        code: '\n' +
            'export class Chapter512Component implements OnInit {\n' +
            '  stockQuantity:number;\n' +
            '  _requestQuantity:number;\n' +
            '  isOrdered:boolean;\n' +
            '\n' +
            '\n' +
            '  @Input()\n' +
            '  set requestQuantity(quantity:number){\n' +
            '    if(quantity == null) { return; }\n' +
            '\n' +
            '    this._requestQuantity = quantity;\n' +
            '\n' +
            '    if(this.stockQuantity < this._requestQuantity){\n' +
            '      this.isOrdered = false;\n' +
            '      this.toastr.warning("Order Request is rejected");\n' +
            '      return;\n' +
            '    }\n' +
            '\n' +
            '    this.isOrdered = true;\n' +
            '    this.toastr.info("Order is successful");\n' +
            '  }\n' +
            '\n' +
            '  get requestQuantity(){\n' +
            '    return this._requestQuantity;\n' +
            '  }\n' +
            '\n' +
            '  constructor(private toastr:ToastsManager) {\n' +
            '    this.stockQuantity = 10;\n' +
            '  }'
    },
    {
        id: 4, chapter: 5,
        title: 'GetOrderComponent.html',
        code: '  <mat-card-content>\n' +
            '    <p>Your request quantity is <strong>{{requestQuantity}}</strong>\n' +
            '     and order is\n' +
            '      <span *ngIf="isOrdered;else reject"><strong>Complete</strong></span>\n' +
            '      <ng-template #reject><strong>Rejected</strong></ng-template></p>\n' +
            '  </mat-card-content>'
    },
    {
        id: 5, chapter: 5,
        title: 'price-quote.ts',
        code: 'export class Chapter514Component implements OnInit {\n' +
            '  @Output() buy:EventEmitter<Stock> = new EventEmitter<Stock>();\n' +
            '  stockSymbol:string = \'IBM\';\n' +
            '  lastPrice:number;\n' +
            '\n' +
            '  constructor() {\n' +
            '    setInterval(()=>{\n' +
            '      this.lastPrice = 100 * Math.random();\n' +
            '    },2000);\n' +
            '  }\n' +
            '\n' +
            '\n' +
            '  ngOnInit() {\n' +
            '  }\n' +
            '\n' +
            '  buyStocks(){\n' +
            '    this.buy.emit({ bidPrice : this.lastPrice , stockSymbol : this.stockSymbol });\n' +
            '  }\n' +
            '\n' +
            '}\n'
    },
    {
        id: 6, chapter: 5,
        title: 'mediator.html',
        code: ' <mat-card>\n' +
            '          <mat-card-header>\n' +
            '            <mat-card-title><h3>Mediator Part</h3></mat-card-title>\n' +
            '          </mat-card-header>\n' +
            '\n' +
            '          <p><strong>Mediator Got : {{ stock | json }} </strong></p>\n' +
            '        <app-chapter5-1-4 (buy)="onBuyHandler($event)"></app-chapter5-1-4>\n' +
            '        <app-chapter5-1-4-1 [stock]="stock"></app-chapter5-1-4-1>\n' +
            '        </mat-card>'
    },
    {
        id: 7, chapter: 5,
        title: 'parent.html',
        code: '\n' +
            '        <mat-card>\n' +
            '          <mat-card-header>\n' +
            '            <mat-card-title><h3>Parent Part</h3></mat-card-title>\n' +
            '            <app-chapter5-1-5><p style="color: pink">This part is projected by Parent</p></app-chapter5-1-5>\n' +
            '          </mat-card-header>\n' +
            '        </mat-card>'
    },
    {
        id: 8, chapter: 5,
        title: 'child.html',
        code: '<mat-card-header>\n' +
            '    <mat-card-title><h3>Child Component</h3></mat-card-title>\n' +
            '  </mat-card-header>\n' +
            '  <mat-card-content>\n' +
            '    <p style="color: lightgreen">This part is of child component</p>\n' +
            '    <ng-content></ng-content>\n' +
            '  </mat-card-content>'
    },
    {
        id: 9, chapter: 5,
        title: 'child.ts',
        code: 'export class Chapter521Component implements OnInit,OnChanges {\n' +
            '\n' +
            '  @Input() greeting:string;\n' +
            '  @Input() user: {name : string};\n' +
            '  @Input() userName:string;\n' +
            '\n' +
            '  message:string = \'Initial message\';\n' +
            '\n' +
            '  ngOnChanges(changes: SimpleChanges): void {\n' +
            '    for(var key in changes){\n' +
            '      console.log(key +" : "+JSON.stringify(changes[key],null,2));\n' +
            '    }\n' +
            '  }\n'
    },
];


/***/ }),

/***/ "../../../../../src/app/metadata/chapter6-code.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chapter6_code; });
var chapter6_code = [
    {
        id: 1, chapter: 6,
        title: 'ngForm.html',
        code: '\n' +
            '<form #myForm="ngForm">\n' +
            '  <pre>{{myForm[\'form\'] | json }}</pre>\n' +
            '</form>\n'
    },
    {
        id: 2, chapter: 6,
        title: 'ngModel.html',
        code: '\n' +
            '  <mat-card-header>\n' +
            '    <p>\n' +
            '    <strong>User Name : {{userName}}</strong><br/>\n' +
            '    <strong>NgModel Instance Value : {{userNameInput.value}}</strong>\n' +
            '    </p>\n' +
            '  </mat-card-header>\n' +
            '  <mat-card-content>\n' +
            '    <form #myForm="ngForm" class="form-group" (ngSubmit)="onSubmit(myForm.value)" >\n' +
            '      <mat-form-field>\n' +
            '        <input ngModel #userNameInput="ngModel" matInput placeholder="Enter Name"\n' +
            '               type="text" name="username">\n' +
            '      </mat-form-field>\n' +
            '      <button type="submit" mat-raised-button color="accent" >Submit</button>\n' +
            '    </form>\n' +
            '  </mat-card-content>'
    },
    {
        id: 3, chapter: 6,
        title: 'ngModelGroup.html',
        code: '<mat-card>\n' +
            '  <mat-card-content>\n' +
            '    <mat-card-header>\n' +
            '      <p>\n' +
            '        First Name: {{myForm.value.fullName.firstName}} <br/>\n' +
            '        Last Name: {{myForm.value.fullName.lastName}} <br/>\n' +
            '      </p>\n' +
            '    </mat-card-header>\n' +
            '    <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value.fullName)">\n' +
            '      <div ngModelGroup="fullName">\n' +
            '        <mat-form-field>\n' +
            '          <input matInput placeholder="Enter First Name" ngModel type="text"\n' +
            '                 name="firstName">\n' +
            '        </mat-form-field>\n' +
            '        <mat-form-field>\n' +
            '          <input matInput placeholder="Enter Last Name" ngModel type="text"\n' +
            '                 name="lastName">\n' +
            '        </mat-form-field>\n' +
            '        <button type="submit" mat-raised-button color="accent">Submit</button>\n' +
            '      </div>\n' +
            '    </form>\n' +
            '  </mat-card-content>\n' +
            '</mat-card>\n'
    },
    {
        id: 4, chapter: 6,
        title: 'joinSubmit.html',
        code: '\n' +
            '<mat-card>\n' +
            '  <mat-card-content>\n' +
            '  <form\n' +
            '    class="form-group"\n' +
            '    #joinForm="ngForm" (ngSubmit)="onSubmit(joinForm.value)">\n' +
            '    <mat-form-field>\n' +
            '      <input matInput ngModel placeholder="Enter name"\n' +
            '             type="text" name="username">\n' +
            '    </mat-form-field>\n' +
            '    <mat-form-field>\n' +
            '      <input matInput ngModel placeholder="Enter ssn"\n' +
            '             type="text" name="ssn">\n' +
            '    </mat-form-field>\n' +
            '\n' +
            '    <div ngModelGroup="passwordsGroup">\n' +
            '      <mat-form-field>\n' +
            '        <input matInput ngModel placeholder="Enter password"\n' +
            '               type="password" name="password">\n' +
            '      </mat-form-field>\n' +
            '      <mat-form-field>\n' +
            '        <input matInput ngModel placeholder="Enter confirm password"\n' +
            '               type="password" name="pconfirm">\n' +
            '      </mat-form-field>\n' +
            '    </div>\n' +
            '\n' +
            '    <button type="submit" mat-raised-button color="primary">Join</button>\n' +
            '  </form>\n' +
            '  </mat-card-content>\n' +
            '</mat-card>'
    },
    {
        id: 5, chapter: 6,
        title: 'formGroup.html',
        code: '\n' +
            '    <form [formGroup]="formGroup" (ngSubmit)="onFormSubmit()">\n' +
            '      <mat-form-field>\n' +
            '        <input matInput type="date" placeholder="Enter From Date"\n' +
            '          [formControlName]="\'to\'">\n' +
            '      </mat-form-field>\n' +
            '      <mat-form-field>\n' +
            '        <input matInput type="date" placeholder="Enter to Date"\n' +
            '          [formControlName]="\'from\'">\n' +
            '      </mat-form-field>\n' +
            '      <button mat-raised-button type="submit">Submit</button>\n' +
            '    </form>'
    },
    {
        id: 6, chapter: 6,
        title: 'formGroup.ts',
        code: '  formGroup:FormGroup = new FormGroup({\n' +
            '    to : new FormControl(),\n' +
            '    from : new FormControl()\n' +
            '  });\n' +
            '\n' +
            '  to:Date;\n' +
            '  from:Date;\n' +
            '\n' +
            '  onFormSubmit(){\n' +
            '\n' +
            '    this.to = this.formGroup.value[\'to\'];\n' +
            '    this.from = this.formGroup.value[\'from\'];\n' +
            '\n' +
            '  }\n'
    },
    {
        id: 7, chapter: 6,
        title: 'formGroupName.html',
        code: '\n' +
            '  <div [formGroupName]="\'dateRange\'">\n' +
            '    <mat-form-field>\n' +
            '      <input type="date" matInput placeholder="Enter from Date"\n' +
            '        [formControlName]="\'from\'">\n' +
            '    </mat-form-field>\n' +
            '    <mat-form-field>\n' +
            '      <input type="date" matInput placeholder="Enter from Date"\n' +
            '             [formControlName]="\'to\'">\n' +
            '    </mat-form-field>\n' +
            '  </div>'
    },
    {
        id: 8, chapter: 6,
        title: 'formGroupName.html',
        code: '\n' +
            'export class Chapter617Component implements OnInit {\n' +
            '  myControl:FormControl = new FormControl(\'Guest\');\n' +
            '  name:String;\n' +
            '\n' +
            '  constructor() {\n' +
            '    this.myControl.valueChanges\n' +
            '      .debounceTime(500)\n' +
            '      .subscribe(data => this.name = data );\n' +
            '  }'
    },
    {
        id: 9, chapter: 6,
        title: 'equalValidator.ts',
        code: 'export function equalValidator({ value } : FormGroup) : { [key:string] : any}{\n' +
            '  const [first , ...rest] = Object.keys(value || {});\n' +
            '  const valid = rest.every(v => value[v] === value[first]);\n' +
            '  return valid ? null : { equal : true };\n' +
            '}'
    },
    {
        id: 10, chapter: 6,
        title: 'customValidator.ts',
        code: '\n' +
            'export class Chapter621Component implements OnInit {\n' +
            '  formGroup:FormGroup;\n' +
            '\n' +
            '  constructor() {\n' +
            '    this.formGroup = new FormGroup({\n' +
            '      \'username\' : new FormControl(\'\',Validators.required),\n' +
            '      \'ssn\' : new FormControl(\'\',ssnValidator),\n' +
            '      \'passwordsGroup\' : new FormGroup({\n' +
            '        \'password\' : new FormControl(\'\',[Validators.required,Validators.minLength(5) ] ),\n' +
            '        \'pconfirm\' : new FormControl(\'\')\n' +
            '      },equalValidator)\n' +
            '    })\n' +
            '  }\n' +
            '\n' +
            '  valid:boolean;\n' +
            '\n' +
            '  onFormSubmit(){\n' +
            '    console.log(this.formGroup.valid);\n' +
            '    this.valid = this.formGroup.valid;\n' +
            '  }'
    },
];


/***/ }),

/***/ "../../../../../src/app/metadata/chapter7-code.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chapter7_code; });
var chapter7_code = [
    {
        id: 1, chapter: 7,
        title: 'httpBasic.ts',
        code: 'export class Chapter711Component implements OnInit {\n' +
            '  users:User[];\n' +
            '  myInput:FormControl = new FormControl();\n' +
            '\n' +
            '  searchUser:User;\n' +
            '\n' +
            '  constructor(private http:Http,@Inject(backendUrl) private serverUrl:string) {\n' +
            '    this.http.get(`${serverUrl}/user`).subscribe(response => {\n' +
            '      var data = response.json();\n' +
            '      this.users = data;\n' +
            '    });\n' +
            '\n' +
            '    this.myInput.valueChanges\n' +
            '      .debounceTime(500)\n' +
            '      .switchMap(value => this.getUser(value))\n' +
            '      .subscribe(response => console.log(response) );\n' +
            '  }\n' +
            '\n' +
            '  private getUser(value: string) :Observable<User>{\n' +
            '    var param:string = \'name=\'+value;\n' +
            '\n' +
            '    var request = new Request({\n' +
            '      url : this.serverUrl+"/user/search",\n' +
            '      search : param,\n' +
            '      method : RequestMethod.Get\n' +
            '    });\n' +
            '\n' +
            '    return this.http.request(request).map(response => response.json())\n' +
            '  }'
    },
];


/***/ }),

/***/ "../../../../../src/app/model/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, description, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.categories = categories;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/model/review.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
var Review = /** @class */ (function () {
    function Review(id, productId, timestamp, user, rating, comment) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.comment = comment;
    }
    return Review;
}());



/***/ }),

/***/ "../../../../../src/app/model/stock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stock; });
var Stock = /** @class */ (function () {
    function Stock() {
    }
    return Stock;
}());



/***/ }),

/***/ "../../../../../src/app/pipe/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, filterField, filterValue) {
        if (!filterField || !filterValue) {
            return list;
        }
        return list.filter(function (item) {
            var property = item[filterField].toLowerCase();
            var filter = filterValue.toLocaleLowerCase();
            return property.indexOf(filter) >= 0;
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipe/new-line-to-breaker.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLineToBreakerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewLineToBreakerPipe = /** @class */ (function () {
    function NewLineToBreakerPipe() {
    }
    NewLineToBreakerPipe.prototype.transform = function (value, args) {
        return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
    NewLineToBreakerPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'newLineToBreaker'
        })
    ], NewLineToBreakerPipe);
    return NewLineToBreakerPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipe/pipe/pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_pipe__ = __webpack_require__("../../../../../src/app/pipe/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__temperature_pipe__ = __webpack_require__("../../../../../src/app/pipe/temperature.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__filter_pipe__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_3__temperature_pipe__["a" /* TemperaturePipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__filter_pipe__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_3__temperature_pipe__["a" /* TemperaturePipe */]]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipe/temperature.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemperaturePipe = /** @class */ (function () {
    function TemperaturePipe() {
    }
    TemperaturePipe.prototype.transform = function (value, fromTo) {
        if (!fromTo) {
            throw 'Temperature pipe required parameter FtoC or CtoF';
        }
        return (fromTo === 'FtoC') ? (value - 32) * 5.0 / 9.0 : (value * 5.0) + 5.0 + 32;
    };
    TemperaturePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'temperature' })
    ], TemperaturePipe);
    return TemperaturePipe;
}());



/***/ }),

/***/ "../../../../../src/app/project/component/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/component/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  carousel works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/project/component/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__("../../../../../src/app/project/component/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/component/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/component/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/component/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/project/component/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/project/component/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/component/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/component/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"form-group\">\n  <mat-input-container style=\"width: 100%\">\n    <input matInput type=\"text\" placeholder=\"Filter products by title\" class=\"form-control\"\n           [formControl]=\"titleFilter\">\n  </mat-input-container>\n</div>\n<div class=\"row\">\n  <div *ngFor=\"let product of products | filter : 'title' : filterCriteria\" class=\"col-4\">\n    <app-product-item [product]=\"product\"></app-product-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project/component/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.products = [];
        this.titleFilter = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.titleFilter.valueChanges
            .debounceTime(100)
            .subscribe(function (value) { return _this.filterCriteria = value; });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) { return _this.products = data; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/project/component/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_product_service__["a" /* ProductService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/component/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/component/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <ul  class=\"nav justify-content-lg-start\">\n      <li class=\"nav-item\">\n        <a mat-raised-button color=\"primary\" class=\"nav-link active\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a mat-raised-button color=\"primary\" class=\"nav-link\" href=\"#\">Item Detail</a>\n      </li>\n    </ul>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/project/component/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/project/component/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/component/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/component/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\napp-stars.large{\r\n  font-size: 24px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/component/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"thumbnail\">\n  <img src=\"http://placehold.it/820x320\">\n  <div>\n    <h4 class=\"pull-right\">{{product.price}}</h4>\n    <h4>{{product.title}}</h4>\n    <p>{{product.description}}</p>\n  </div>\n  <div class=\"ratings\">\n    <p class=\"pull-right\">{{reviews.length}}</p>\n    <p>\n      <app-stars [rating]=\"product.rating\"></app-stars>\n    </p>\n  </div>\n</div>\n\n<div class=\"well\" id=\"reviews-anchor\">\n  <div class=\"row\">\n    <div class=\"col-md-12\"></div>\n  </div>\n  <div class=\"text-right\">\n    <button mat-raised-button color=\"accent\" (click)=\"isReviewHidden=!isReviewHidden\" >Leave a Review</button>\n  </div>\n  <div [hidden]=\"isReviewHidden\">\n    <mat-card>\n      <app-stars [(rating)]=\"newRating\" [readonly]=\"false\" class=\"large\"></app-stars>\n\n      <mat-form-field style=\"width : 100%;\">\n        <textarea matInput placeholder=\"Leave a Reivew\" matTextareaAutosize matAutosizeMinRows=\"5\" matAutosizeMaxRows=\"10\"\n         [(ngModel)]=\"newComment\"></textarea>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" (click)=\"addReview()\">Add review</button>\n    </mat-card>\n  </div>\n  <div class=\"row\" *ngFor=\"let review of reviews\">\n    <hr>\n    <div class=\"col-md-12\">\n      <app-stars [rating]=\"review.rating\"></app-stars>\n      <span>{{review.user}}</span>\n      <span class=\"pull-right\">{{review.timestamp}}</span>\n      <p>{{review.comment}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project/component/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_review__ = __webpack_require__("../../../../../src/app/model/review.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService) {
        var _this = this;
        this.productService = productService;
        this.isReviewHidden = true;
        this.newRating = 0;
        var productId = route.snapshot.params['productId'];
        this.productService.getProductById(productId).subscribe(function (data) { return _this.product = data[0]; });
        this.productService.getReviewsForProduct(this.product).subscribe(function (data) { _this.reviews = data; console.log(data); });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent.prototype.addReview = function () {
        var review = new __WEBPACK_IMPORTED_MODULE_2__model_review__["a" /* Review */](0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
        console.log("Adding review " + JSON.stringify(review, null, 2));
        this.reviews = this.reviews.concat([review]);
        this.product.rating = this.averageRating(this.reviews);
        this.resetForm();
    };
    ProductDetailComponent.prototype.averageRating = function (reviews) {
        var sum = reviews.reduce(function (avg, review) { return avg + review.rating; }, 0);
        return sum / reviews.length;
    };
    ProductDetailComponent.prototype.resetForm = function () {
        this.newRating = 0;
        this.newComment = null;
        this.isReviewHidden = true;
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__("../../../../../src/app/project/component/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/component/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__service_product_service__["a" /* ProductService */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/component/product-item/product-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/component/product-item/product-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"thumbnail\">\n  <img src=\"http://placehold.it/320x150\">\n  <div class=\"catpion\">\n    <h4 class=\"pull-right\">{{product.title}}</h4>\n    <h4><a [routerLink]=\"['/project/products',product.id]\">{{product.title}}</a></h4>\n    <p>{{product.description}}</p>\n  </div>\n  <div>\n    <app-stars [rating]=\"product.rating\"></app-stars>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project/component/product-item/product-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product__ = __webpack_require__("../../../../../src/app/model/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent() {
    }
    ProductItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_product__["a" /* Product */])
    ], ProductItemComponent.prototype, "product", void 0);
    ProductItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-item',
            template: __webpack_require__("../../../../../src/app/project/component/product-item/product-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/component/product-item/product-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductItemComponent);
    return ProductItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/component/project-startpoint/project-startpoint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/component/project-startpoint/project-startpoint.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<div class=\"container\" style=\"margin-top: 55px\">\n  <div class=\"row\">\n  <div class=\"col-md-3\">\n    <app-search></app-search>\n  </div>\n\n  <div class=\"col-md-9\">\n    <router-outlet></router-outlet>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project/component/project-startpoint/project-startpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectStartpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectStartpointComponent = /** @class */ (function () {
    function ProjectStartpointComponent(productService) {
        this.productService = productService;
    }
    ProjectStartpointComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (value) { _this.products = value; }, function (error) { console.log("error occured : " + error); });
    };
    ProjectStartpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-startpoint',
            template: __webpack_require__("../../../../../src/app/project/component/project-startpoint/project-startpoint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/component/project-startpoint/project-startpoint.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_product_service__["a" /* ProductService */]])
    ], ProjectStartpointComponent);
    return ProjectStartpointComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/component/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nmat-form-field{\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/component/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" name=\"searchForm\" role=\"form\"\n  (ngSubmit)=\"onSearch()\" novalidate>\n  <div class=\"form-group\">\n    <mat-form-field>\n    <input matInput class=\"form-control\" type=\"text\" id=\"productTitle\"\n           placeholder=\"Title\" class=\"form-control\"\n          [formControlName]=\"'title'\">\n    </mat-form-field>\n  </div>\n  <div class=\"form-group\">\n    <mat-form-field>\n    <input matInput id=\"productPrice\"\n           name=\"productPrice\"\n           type=\"number\" min=\"0\" step=\"any\"\n           placeholder=\"Price\" class=\"form-control\"\n    [formControlName]=\"'price'\">\n    </mat-form-field>\n  </div>\n  <div class=\"form-group\">\n    <mat-form-field>\n      <mat-select id=\"prodcutCategory\" class=\"form-control\"\n      [formControlName]=\"'category'\" >\n        <mat-option *ngFor=\"let category of categories\" [value]=\"category.name\">{{category.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" mat-raised-button color=\"primary\" class=\"btn btn-primary btn-block\">Search</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/project/component/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_positive_number_validator__ = __webpack_require__("../../../../../src/app/project/validators/positive-number-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(productService, formBuilder) {
        var _this = this;
        this.productService = productService;
        this.productService.getAllCategories().subscribe(function (data) { return _this.categories = data; });
        this.formGroup = formBuilder.group({
            'title': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(3)],
            'price': [null, __WEBPACK_IMPORTED_MODULE_3__validators_positive_number_validator__["a" /* positiveNumberValidator */]],
            'category': [-1,],
        });
    }
    SearchComponent.prototype.onSearch = function () {
        if (this.formGroup.valid) {
            console.log(this.formGroup.value);
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/project/component/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/component/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/component/stars/stars.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <span *ngFor=\"let star of stars;let i = index\" class=\"starrating fa fa-star\"\n        [class.fa-star-o]=\"!star\"\n        (click)=\"fillStarsWithColor(i)\"\n  >\n  </span>\n  <span *ngIf=\"rating\">{{ rating | number : '.0-2'}} stars</span>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/project/component/stars/stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.maxStars = 5;
        this.readonly = true;
        this.ratingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(StarsComponent.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (value) {
            this._rating = value || 0;
            this.stars = Array(this.maxStars).fill(true, 0, this.rating);
        },
        enumerable: true,
        configurable: true
    });
    StarsComponent.prototype.fillStarsWithColor = function (index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    };
    StarsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], StarsComponent.prototype, "readonly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StarsComponent.prototype, "rating", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], StarsComponent.prototype, "ratingChange", void 0);
    StarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stars',
            template: __webpack_require__("../../../../../src/app/project/component/stars/stars.component.html"),
            styles: ['.starrating  { color : #d17581;}']
        })
    ], StarsComponent);
    return StarsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_carousel_carousel_component__ = __webpack_require__("../../../../../src/app/project/component/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_footer_footer_component__ = __webpack_require__("../../../../../src/app/project/component/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/project/component/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_product_item_product_item_component__ = __webpack_require__("../../../../../src/app/project/component/product-item/product-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_search_search_component__ = __webpack_require__("../../../../../src/app/project/component/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_stars_stars_component__ = __webpack_require__("../../../../../src/app/project/component/stars/stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_project_startpoint_project_startpoint_component__ = __webpack_require__("../../../../../src/app/project/component/project-startpoint/project-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/project/component/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_home_home_component__ = __webpack_require__("../../../../../src/app/project/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__project_routes__ = __webpack_require__("../../../../../src/app/project/project.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipe_pipe_pipe_module__ = __webpack_require__("../../../../../src/app/pipe/pipe/pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_13__project_routes__["a" /* projectRouting */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["k" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_14__angular_forms__["f" /* FormsModule */],
                /* Angular Material & Animation Modeul */
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_15__pipe_pipe_pipe_module__["a" /* PipeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__component_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_3__component_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__component_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_product_item_product_item_component__["a" /* ProductItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_stars_stars_component__["a" /* StarsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_project_startpoint_project_startpoint_component__["a" /* ProjectStartpointComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_home_home_component__["a" /* HomeComponent */]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "../../../../../src/app/project/project.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projectRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_home_home_component__ = __webpack_require__("../../../../../src/app/project/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_project_startpoint_project_startpoint_component__ = __webpack_require__("../../../../../src/app/project/component/project-startpoint/project-startpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/project/component/product-detail/product-detail.component.ts");




var routes = [
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_2__component_project_startpoint_project_startpoint_component__["a" /* ProjectStartpointComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__component_home_home_component__["a" /* HomeComponent */] },
            { path: 'products/:productId', component: __WEBPACK_IMPORTED_MODULE_3__component_product_detail_product_detail_component__["a" /* ProductDetailComponent */] }
        ]
    },
];
var projectRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/project/validators/positive-number-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = positiveNumberValidator;
function positiveNumberValidator(formControl) {
    if (!formControl.value) {
        return null;
    }
    var price = parseInt(formControl.value);
    return price === null || (typeof price === 'number' && price > 0)
        ? null : { positivenumber: true };
}


/***/ }),

/***/ "../../../../../src/app/service/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_review__ = __webpack_require__("../../../../../src/app/model/review.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (subscriber) {
            subscriber.next(products);
        });
    };
    ProductService.prototype.getProductById = function (productId) {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (subscriber) { return subscriber.next(products.filter(function (product) { return product.id == productId; })); });
    };
    ProductService.prototype.getReviewsForProduct = function (product) {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (subscriber) { return subscriber.next(reviews.filter(function (review) { return review.productId == product.id; }).map(function (review) { return new __WEBPACK_IMPORTED_MODULE_2__model_review__["a" /* Review */](review.id, review.productId, new Date(review.timestamp), review.user, review.rating, review.comment); })); });
    };
    ProductService.prototype.getAllCategories = function () {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (subscriber) { return subscriber.next(categories); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());

var products = [
    {
        "id": 0,
        "title": "First Product",
        "price": 24.99,
        "rating": 4.3,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 1,
        "title": "Second Product",
        "price": 64.99,
        "rating": 3.5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    },
    {
        "id": 2,
        "title": "Third Product",
        "price": 74.99,
        "rating": 4.2,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics"]
    },
    {
        "id": 3,
        "title": "Fourth Product",
        "price": 84.99,
        "rating": 3.9,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["hardware"]
    },
    {
        "id": 4,
        "title": "Fifth Product",
        "price": 94.99,
        "rating": 5,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 5,
        "title": "Sixth Product",
        "price": 54.99,
        "rating": 4.6,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    }
];
var reviews = [
    {
        "id": 0,
        "productId": 0,
        "timestamp": "2014-05-20T02:17:00+00:00",
        "user": "User 1",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 1,
        "productId": 0,
        "timestamp": "2014-05-20T02:53:00+00:00",
        "user": "User 2",
        "rating": 3,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 2,
        "productId": 0,
        "timestamp": "2014-05-20T05:26:00+00:00",
        "user": "User 3",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 3,
        "productId": 0,
        "timestamp": "2014-05-20T07:20:00+00:00",
        "user": "User 4",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 4,
        "productId": 0,
        "timestamp": "2014-05-20T11:35:00+00:00",
        "user": "User 5",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 5,
        "productId": 0,
        "timestamp": "2014-05-20T11:42:00+00:00",
        "user": "User 6",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    }
];
var categories = [
    { name: "Books" },
    { name: "Electronics" },
    { name: "Hardware" },
];


/***/ }),

/***/ "../../../../../src/app/tokens/chap3-tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chap3ServerUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var chap3ServerUrl = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('serverUrl');


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map