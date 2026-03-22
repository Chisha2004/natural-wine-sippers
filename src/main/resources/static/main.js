"use strict";
(self["webpackChunksmwine_fe_app"] = self["webpackChunksmwine_fe_app"] || []).push([["main"],{

/***/ 536:
/*!**************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/app.config.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory),
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 5280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 9648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2279);






function HttpLoaderFactory(httpClient) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__.TranslateHttpLoader(httpClient, './i18n/', '.json');
}
const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.provideZoneChangeDetection)({
    eventCoalescing: true
  }), (0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.withInterceptorsFromDi)()), (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient]
    }
  }))]
};

/***/ }),

/***/ 548:
/*!************************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/services/register-user/register-user.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterUserService: () => (/* binding */ RegisterUserService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 9445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 9648);

 //TODO would this load different when built for prod


class RegisterUserService {
  http;
  apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  registerUser(user) {
    return this.http.post(`${this.apiBaseUrl}/register`, user);
  }
  static ɵfac = function RegisterUserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegisterUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: RegisterUserService,
    factory: RegisterUserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1700:
/*!***********************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/pages/landing/landing.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/header/header.component */ 6168);
/* harmony import */ var _services_beverage_beverage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/beverage/beverage.service */ 4284);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4334);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 9648);
/* harmony import */ var _components_beverage_list_beverage_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/beverage-list/beverage-list-component */ 5307);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);









class LandingComponent {
  beverageService;
  beverage;
  beverages;
  constructor(beverageService) {
    this.beverageService = beverageService;
  }
  //TODO need to add mini card to show price as well on detailed
  ngOnInit() {
    this.beverageService.getBeverages('wine').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe({
      next: beverages => this.beverages = beverages
    });
  }
  static ɵfac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_beverage_beverage_service__WEBPACK_IMPORTED_MODULE_1__.BeverageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LandingComponent,
    selectors: [["app-landing"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient])],
    decls: 46,
    vars: 25,
    consts: [[1, "block"], [1, "min-h-screen", "bg-white", "text-gray-800"], [3, "beverages"], [1, "py-16", "px-6", "text-center"], [1, "text-3xl", "font-semibold", "mb-10"], [1, "grid", "md:grid-cols-3", "gap-10", "max-w-6xl", "mx-auto"], [1, "space-y-3"], [1, "text-5xl"], [1, "text-xl", "font-semibold"], [1, "bg-black", "text-white", "py-20", "text-center", "px-6"], [1, "text-3xl", "md:text-4xl", "font-bold", "mb-4"], [1, "text-lg", "mb-8", "max-w-2xl", "mx-auto"], [1, "bg-white", "text-black", "px-6", "py-3", "rounded-full", "hover:bg-gray-200", "transition"], [1, "py-10", "text-center", "text-sm", "text-gray-500"]],
    template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-beverage-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\uD83C\uDF47");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 6)(19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\uD83D\uDE9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 6)(28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\uD83C\uDF77");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "section", 9)(37, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Ready to Uncork Something Special? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Join our wine club and receive exclusive access to limited releases and tasting events. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Join the Club ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("beverages", ctx.beverages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, "WHY_CHOOSE_US.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 11, "WHY_CHOOSE_US_1.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 13, "WHY_CHOOSE_US_1.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 15, "WHY_CHOOSE_US_2.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 17, "WHY_CHOOSE_US_2.TEXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 19, "WHY_CHOOSE_US_3.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 21, "WHY_CHOOSE_US_3.TEXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 23, "COPY_WRITE"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_beverage_list_beverage_list_component__WEBPACK_IMPORTED_MODULE_2__.BeverageListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2311:
/*!*****************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/app.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AppComponent {
  title = 'smwine-fe-app';
  static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3252:
/*!**********************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/pages/register/register/register.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_register_user_register_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/register-user/register-user.service */ 548);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 9648);
/* harmony import */ var _smwine_fe_app_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smwine-fe-app/interceptor */ 6797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);









const _c0 = a0 => ({
  "border-red-500": a0
});
function RegisterComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter a valid phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Street Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter a valid postcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class RegisterComponent {
  fb;
  registerUserService;
  userForm;
  constructor(fb, registerUserService) {
    this.fb = fb;
    this.registerUserService = registerUserService;
    this.userForm = this.fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]{10,}$/)]],
      streetAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[A-Za-z0-9]{4,6}$/)]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]{10,}$/)]]
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      //TODO show spinner
      this.registerUserService.registerUser(this.userForm.value).subscribe({
        next: registerUserResponse => {
          console.log(registerUserResponse);
        },
        error: error => {
          //TODO remove log and use toast service
          console.log(error);
        },
        complete: () => {
          //TODO need a spinner component to toggle on and off
        }
      }); //TODO unsubscribe
    } else {
      this.userForm.markAllAsTouched();
    }
  }
  static ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_register_user_register_user_service__WEBPACK_IMPORTED_MODULE_0__.RegisterUserService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["app-register"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
      useClass: _smwine_fe_app_interceptor__WEBPACK_IMPORTED_MODULE_1__.MockHttpInterceptor,
      //TODO why is there a mock interceptor here?
      multi: true
    }])],
    decls: 33,
    vars: 22,
    consts: [[1, "flex", "justify-center", "items-center", "min-h-screen", "bg-gray-100", "p-4"], [1, "w-full", "max-w-lg", "bg-white", "shadow-lg", "rounded-2xl", "p-8"], [1, "text-2xl", "font-bold", "text-gray-800", "mb-6", "text-center"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], ["for", "firstName", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "firstName", "formControlName", "firstName", "type", "text", "placeholder", "Enter first name", 1, "w-full", "px-4", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", 3, "ngClass"], [1, "text-red-500", "text-sm", "mt-1"], ["for", "lastName", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "lastName", "formControlName", "lastName", "type", "text", "placeholder", "Enter last name", 1, "w-full", "px-4", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", 3, "ngClass"], ["for", "phoneNumber", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "phoneNumber", "formControlName", "phoneNumber", "type", "tel", "placeholder", "Enter phone number", 1, "w-full", "px-4", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", 3, "ngClass"], ["for", "streetAddress", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "streetAddress", "formControlName", "streetAddress", "type", "text", "placeholder", "Enter street address", 1, "w-full", "px-4", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", 3, "ngClass"], ["for", "postcode", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "postcode", "formControlName", "postcode", "type", "text", "placeholder", "Enter postcode", 1, "w-full", "px-4", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", 3, "ngClass"], [1, "pt-4"], ["type", "submit", 1, "w-full", "bg-blue-600", "hover:bg-blue-700", "disabled:bg-gray-400", "text-white", "font-semibold", "py-2", "px-4", "rounded-lg", "shadow-md", "transition", 3, "disabled"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Create User Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RegisterComponent_Conditional_9_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RegisterComponent_Conditional_14_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div")(16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RegisterComponent_Conditional_19_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RegisterComponent_Conditional_24_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div")(26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Postcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, RegisterComponent_Conditional_29_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 15)(31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Create Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ((tmp_1_0 = ctx.userForm.get("firstName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.userForm.get("firstName")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_2_0 = ctx.userForm.get("firstName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.userForm.get("firstName")) == null ? null : tmp_2_0.touched) ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ((tmp_3_0 = ctx.userForm.get("lastName")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.userForm.get("lastName")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_4_0 = ctx.userForm.get("lastName")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.userForm.get("lastName")) == null ? null : tmp_4_0.touched) ? 14 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ((tmp_5_0 = ctx.userForm.get("phoneNumber")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.userForm.get("phoneNumber")) == null ? null : tmp_5_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_6_0 = ctx.userForm.get("phoneNumber")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.userForm.get("phoneNumber")) == null ? null : tmp_6_0.touched) ? 19 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, ((tmp_7_0 = ctx.userForm.get("streetAddress")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.userForm.get("streetAddress")) == null ? null : tmp_7_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_8_0 = ctx.userForm.get("streetAddress")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.userForm.get("streetAddress")) == null ? null : tmp_8_0.touched) ? 24 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](20, _c0, ((tmp_9_0 = ctx.userForm.get("postcode")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.userForm.get("postcode")) == null ? null : tmp_9_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](((tmp_10_0 = ctx.userForm.get("postcode")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.userForm.get("postcode")) == null ? null : tmp_10_0.touched) ? 29 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4230:
/*!**********************************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/components/wine-card-detail/wine-card-detail.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WineCardDetailComponent: () => (/* binding */ WineCardDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 6168);
/* harmony import */ var _services_beverage_beverage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/beverage/beverage.service */ 4284);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






class WineCardDetailComponent {
  beverageService;
  beverage = null; //TODO this should based on route param id fetch the beverage details from backend
  constructor(beverageService) {
    this.beverageService = beverageService;
  }
  ngOnInit() {
    this.beverageService.getBeverage('1').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe({
      next: beverage => this.beverage = beverage
    });
  }
  static ɵfac = function WineCardDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WineCardDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_beverage_beverage_service__WEBPACK_IMPORTED_MODULE_1__.BeverageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WineCardDetailComponent,
    selectors: [["app-wine-card-detail"]],
    decls: 38,
    vars: 13,
    consts: [[1, "block"], [1, "min-h-screen", "bg-gray-50", "py-6", "sm:py-12"], [1, "container", "mx-auto", "max-w-6xl", "px-4", "sm:px-6", "lg:px-8"], [1, "md:hidden", "text-2xl", "sm:text-3xl", "font-bold", "text-gray-900", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "sm:gap-8", "bg-white", "rounded-lg", "shadow-lg", "p-6", "sm:p-8"], [1, "hidden", "md:flex", "items-center", "justify-center", "order-2", "md:order-1"], [1, "w-full", "h-auto", "object-cover", "rounded-lg", "max-w-xs", "sm:max-w-md", 3, "src", "alt"], [1, "flex", "flex-col", "justify-between", "order-1", "md:order-2"], [1, "hidden", "md:block", "text-2xl", "sm:text-3xl", "lg:text-4xl", "font-bold", "text-gray-900", "mb-2"], [1, "md:hidden", "mb-4", "flex", "justify-center"], [1, "w-full", "h-auto", "object-cover", "rounded-lg", "max-w-xs", 3, "src", "alt"], [1, "text-2xl", "sm:text-3xl", "font-semibold", "text-red-600", "mb-4"], [1, "text-gray-600", "text-base", "sm:text-lg", "leading-relaxed", "mb-6"], [1, "border-t", "pt-6"], [1, "text-lg", "sm:text-xl", "font-bold", "text-gray-900", "mb-4"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-3", "sm:gap-4"], [1, "bg-gray-100", "p-3", "sm:p-4", "rounded-lg"], [1, "text-xs", "sm:text-sm", "font-semibold", "text-gray-600", "mb-1"], [1, "text-base", "sm:text-lg", "font-bold", "text-gray-900", "truncate"], [1, "text-base", "sm:text-lg", "font-bold", "text-gray-900"]],
    template: function WineCardDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "div")(10, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13)(20, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Eigenschaften ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Typ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16)(29, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Hersteller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16)(34, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Gr\u00F6\u00DFe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.beverage == null ? null : ctx.beverage.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.beverage == null ? null : ctx.beverage.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx.beverage == null ? null : ctx.beverage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.beverage == null ? null : ctx.beverage.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.beverage == null ? null : ctx.beverage.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx.beverage == null ? null : ctx.beverage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 11, ctx.beverage == null ? null : ctx.beverage.price), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.beverage == null ? null : ctx.beverage.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx.beverage == null ? null : ctx.beverage.type) || "N/A", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.beverage == null ? null : ctx.beverage.producer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.beverage == null ? null : ctx.beverage.capacity, "ml ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aW5lLWNhcmQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvd2luZS1jYXJkLWRldGFpbC93aW5lLWNhcmQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4284:
/*!**************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/services/beverage/beverage.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeverageService: () => (/* binding */ BeverageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 9648);




class BeverageService {
  http;
  apiUrl = '/api/v1/beverages';
  constructor(http) {
    this.http = http;
  }
  getBeverages(category) {
    return this.http.get(this.apiUrl);
  }
  getBeverage(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
      id: '123',
      name: 'Trousseau Duty',
      category: 'wine',
      description: 'A structured, dense, and elegant wine from a magnificent terroir. A wine of great precision and refinement, which will be a pleasure to open to accompany a fine dinner. A sweet moment in perspective!',
      type: 'Red',
      grapeVariety: 'Trousseau',
      country: 'France',
      region: 'Jura',
      vintage: '2022/2023',
      degree: '12%',
      capacity: 75,
      rating: 1,
      year: '2022',
      price: '23.4',
      producer: 'Octavin Estate',
      imgUrl: 'https://buvance.com/cdn/shop/files/l_octavin-corveesdet_360x.jpg?v=1748264236%20360w,%20//buvance.com/cdn/shop/files/l_octavin-corveesdet_540x.jpg?v=1748264236%20540w,%20//buvance.com/cdn/shop/files/l_octavin-corveesdet_720x.jpg?v=1748264236%20720w,%20//buvance.com/cdn/shop/files/l_octavin-corveesdet_900x.jpg?v=1748264236%20900w,%20//buvance.com/cdn/shop/files/l_octavin-corveesdet_1080x.jpg?v=1748264236%201080w'
    });
  }
  static ɵfac = function BeverageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BeverageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BeverageService,
    factory: BeverageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4324:
/*!********************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/components/wine-card/wine-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WineCardComponent: () => (/* binding */ WineCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 9507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8503);








class WineCardComponent {
  router;
  translate;
  cartService;
  beverage;
  constructor(router, translate, cartService) {
    this.router = router;
    this.translate = translate;
    this.cartService = cartService;
  }
  goToBevergaeDetails(id) {
    this.router.navigate(['/beverages', id]);
  }
  getAddToCartLabel() {
    return `${this.translate.instant('WINE_CARD.ADD_TO_CART')} ${this.beverage.name} to cart button`;
  }
  addToCart() {
    this.cartService.addToCart({
      productId: this.beverage.id,
      quantity: 1
    });
  }
  static ɵfac = function WineCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WineCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: WineCardComponent,
    selectors: [["app-wine-card"]],
    inputs: {
      beverage: "beverage"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe])],
    decls: 14,
    vars: 10,
    consts: [[1, "bg-white", "rounded-2xl", "shadow-md", "overflow-hidden", "w-[260px]", "md:w-[260px]", "cursor-pointer", "group", "relative"], [3, "click"], [1, "w-full", "object-contain", 3, "src", "alt"], [1, "p-4", "space-y-2"], [1, "text-lg", "font-semibold", "text-gray-800"], [1, "text-sm", "text-gray-600"], [1, "text-base", "font-bold", "text-rose-600"], [1, "add-to-cart", "absolute", "top-2", "right-2", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300", "cursor-pointer", "bg-white", "p-2", "rounded-full", "shadow", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6", "text-gray-800"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4.5v15m7.5-7.5h-15"]],
    template: function WineCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WineCardComponent_Template_button_click_1_listener() {
          return ctx.goToBevergaeDetails(ctx.beverage.id);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WineCardComponent_Template_button_click_11_listener() {
          return ctx.addToCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "View details of " + ctx.beverage.name + " button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.beverage.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.beverage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.beverage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.beverage.producer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 7, ctx.beverage.price, "EUR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.getAddToCartLabel());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aW5lLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvd2luZS1jYXJkL3dpbmUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4519:
/*!****************************************************************!*\
  !*** ./libs/interceptor/src/lib/mock/mock-http-interceptor.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockHttpInterceptor: () => (/* binding */ MockHttpInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 9648);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class MockHttpInterceptor {
  //TODO we now have a mock-server, so we can remove this interceptor
  intercept(req, next) {
    // Example: mock `/users` endpoint
    if (req.url.endsWith('api/register') && req.method === 'POST') {
      const mockUsers = [{
        id: 1,
        name: 'Test'
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse({
        status: 200,
        body: mockUsers
      }));
    }
    // Otherwise, pass request through
    return next.handle(req);
  }
  static ɵfac = function MockHttpInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MockHttpInterceptor)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MockHttpInterceptor,
    factory: MockHttpInterceptor.ɵfac
  });
}

/***/ }),

/***/ 5252:
/*!****************************************!*\
  !*** ./apps/smwine-fe-app/src/main.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 2085);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 536);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 2311);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 5280:
/*!**************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/app.routes.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 8756);
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing/landing.component */ 1700);
/* harmony import */ var _smwine_fe_app_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smwine-fe-app/security */ 5314);
/* harmony import */ var _pages_register_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/register/register/register.component */ 3252);
/* harmony import */ var _components_wine_card_detail_wine_card_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/wine-card-detail/wine-card-detail.component */ 4230);





const appRoutes = [{
  path: '',
  component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent
}, {
  path: 'dashboard',
  component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: 'register',
  component: _pages_register_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent
}, {
  path: 'beverages/:id',
  component: _components_wine_card_detail_wine_card_detail_component__WEBPACK_IMPORTED_MODULE_4__.WineCardDetailComponent
}, {
  path: 'admin',
  canMatch: [_smwine_fe_app_security__WEBPACK_IMPORTED_MODULE_2__.adminAuthGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_admin_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @smwine-fe-app/admin */ 3365)).then(m => m.adminRoutes)
}];

/***/ }),

/***/ 5307:
/*!****************************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/components/beverage-list/beverage-list-component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeverageListComponent: () => (/* binding */ BeverageListComponent)
/* harmony export */ });
/* harmony import */ var _wine_card_wine_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wine-card/wine-card.component */ 4324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


function BeverageListComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-wine-card", 1);
  }
  if (rf & 2) {
    const aBeverage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("beverage", aBeverage_r1);
  }
}
class BeverageListComponent {
  beverages;
  static ɵfac = function BeverageListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BeverageListComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BeverageListComponent,
    selectors: [["app-beverage-list"]],
    inputs: {
      beverages: "beverages"
    },
    decls: 3,
    vars: 0,
    consts: [[1, "flex", "overflow-x-auto", "space-x-3", "p-4", "md:grid", "md:grid-cols-5", "md:gap-3", "md:space-x-0", "md:overflow-visible"], [1, "flex-shrink-0", 3, "beverage"]],
    template: function BeverageListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](1, BeverageListComponent_For_2_Template, 1, 1, "app-wine-card", 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.beverages);
      }
    },
    dependencies: [_wine_card_wine_card_component__WEBPACK_IMPORTED_MODULE_0__.WineCardComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZXZlcmFnZS1saXN0LWNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvYmV2ZXJhZ2UtbGlzdC9iZXZlcmFnZS1saXN0LWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5314:
/*!************************************!*\
  !*** ./libs/security/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminAuthGuard: () => (/* reexport safe */ _lib_security_guard_admin_auth_guard__WEBPACK_IMPORTED_MODULE_0__.adminAuthGuard)
/* harmony export */ });
/* harmony import */ var _lib_security_guard_admin_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/security/guard/admin-auth.guard */ 8356);
//here add exports for security
// export * from './lib/security/security.component';


/***/ }),

/***/ 6168:
/*!**************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/components/header/header.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language-selector/language-selector.component */ 8900);
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-cart/shopping-cart.component */ 6736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1249);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 7912);
/* harmony import */ var _profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile-header/profile-header.component */ 8416);
/* harmony import */ var _search_header_search_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-header/search-header.component */ 9336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 8241);








function HeaderComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-language-selector")(1, "app-shopping-cart")(2, "app-search-header")(3, "app-profile-header");
  }
}
function HeaderComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-search-header")(1, "app-language-selector")(2, "app-shopping-cart");
  }
}
function HeaderComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Beer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Wine");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Cider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-profile-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class HeaderComponent {
  breakpointObserver;
  isActive = true;
  menuOpen = false;
  isMobile = false;
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.Handset]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeWhile)(() => this.isActive)).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  ngOnDestroy() {
    this.isActive = false;
  }
  static ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.B));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 20,
    vars: 4,
    consts: [[1, "sticky", "top-0", "z-50", "bg-white", "shadow-md"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "justify-between", "items-center", "h-16"], [1, "flex-shrink-0", "text-xl", "font-bold", "text-red-700"], ["href", "/"], ["src", "/logo.png", 1, "logo-img"], [1, "hidden", "md:flex", "space-x-8", "text-gray-700", "font-medium"], ["href", "#", 1, "hover:text-red-700", "transition"], [1, "md:hidden", "flex", "space-x-8"], ["type", "button", 1, "text-gray-700", "focus:outline-none", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], [1, "md:hidden", "px-4", "pb-4", "space-y-2", "bg-white", "border-t", "border-gray-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["href", "#", 1, "block", "text-gray-700", "hover:text-red-700"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nav", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Beer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Wine");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Cider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HeaderComponent_Conditional_13_Template, 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HeaderComponent_Conditional_15_Template, 3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_16_listener() {
          return ctx.menuOpen = !ctx.menuOpen;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, HeaderComponent_Conditional_17_Template, 2, 0, ":svg:svg", 10)(18, HeaderComponent_Conditional_18_Template, 2, 0, ":svg:svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, HeaderComponent_Conditional_19_Template, 8, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.isMobile ? 13 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.isMobile ? 15 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.menuOpen ? 17 : 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.menuOpen ? 19 : -1);
      }
    },
    dependencies: [_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_0__.LanguageSelectorComponent, _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__.ShoppingCartComponent, _profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_2__.ProfileHeaderComponent, _search_header_search_header_component__WEBPACK_IMPORTED_MODULE_3__.SearchHeaderComponent],
    styles: [".logo-img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taW1nIHtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDQSxvVEFBb1QiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1pbWcge1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6736:
/*!****************************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShoppingCartComponent: () => (/* binding */ ShoppingCartComponent)
/* harmony export */ });
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 9507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* eslint-disable @angular-eslint/prefer-inject */




const _forTrack0 = ($index, $item) => $item.productId;
function ShoppingCartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.cartItems().length);
  }
}
function ShoppingCartComponent_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u20AC0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.productId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Qty: ", item_r2.quantity, "");
  }
}
function ShoppingCartComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](4, ShoppingCartComponent_Conditional_5_For_5_Template, 10, 2, "li", 8, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9)(7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u20AC12.97");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12)(12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.cartItems());
  }
}
class ShoppingCartComponent {
  cartService;
  showCart = false;
  cartItems;
  constructor(cartService) {
    this.cartService = cartService;
    this.cartItems = this.cartService.cartItems;
  }
  /**
   * Adds an item to the cart
   * @param item - The cart item to add
   */
  addToCart(item) {
    this.cartService.addToCart(item);
  }
  static ɵfac = function ShoppingCartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ShoppingCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ShoppingCartComponent,
    selectors: [["app-shopping-cart"]],
    decls: 6,
    vars: 2,
    consts: [[1, "relative"], ["aria-label", "Cart", 1, "relative", "p-2", "rounded-full", "hover:bg-gray-100", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-6", "h-6", "text-gray-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.2M16 17a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"], [1, "absolute", "-top-1", "-right-1", "bg-red-600", "text-white", "text-xs", "font-semibold", "rounded-full", "px-1.5", "py-0.5"], [1, "absolute", "right-0", "mt-2", "w-80", "bg-white", "border", "border-gray-200", "rounded-xl", "shadow-lg", "z-50", "text-sm", "divide-y", "divide-gray-100"], [1, "p-4", "font-medium", "text-gray-700"], [1, "max-h-60", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "hover:bg-gray-50"], [1, "p-4", "flex", "justify-between", "items-center"], [1, "font-semibold", "text-gray-800"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "p-4"], ["href", "/checkout", 1, "block", "text-center", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "font-medium", "py-2", "rounded-lg", "transition"], [1, "flex", "items-center", "gap-3"], ["src", "https://via.placeholder.com/40", "alt", "Item", 1, "w-10", "h-10", "rounded-md", "object-cover"], [1, "font-medium", "text-gray-800"], [1, "text-gray-500", "text-xs"], [1, "font-semibold", "text-gray-700"]],
    template: function ShoppingCartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShoppingCartComponent_Template_button_click_1_listener() {
          return ctx.showCart = !ctx.showCart;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ShoppingCartComponent_Conditional_4_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ShoppingCartComponent_Conditional_5_Template, 14, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.cartItems() && ctx.cartItems().length > 0 ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.showCart ? 5 : -1);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6797:
/*!***************************************!*\
  !*** ./libs/interceptor/src/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockHttpInterceptor: () => (/* reexport safe */ _lib_mock_mock_http_interceptor__WEBPACK_IMPORTED_MODULE_0__.MockHttpInterceptor)
/* harmony export */ });
/* harmony import */ var _lib_mock_mock_http_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mock/mock-http-interceptor */ 4519);


/***/ }),

/***/ 8356:
/*!******************************************************************!*\
  !*** ./libs/security/src/lib/security/guard/admin-auth.guard.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminAuthGuard: () => (/* binding */ adminAuthGuard)
/* harmony export */ });
const adminAuthGuard = (route, state) => {
  //TODO If not logged in then we should never load admin
  //We do not redirect to login to avoid user navigating here by accident
  //When logged in use is admin they will be automatically be able to load admin related pages
  return true;
};

/***/ }),

/***/ 8416:
/*!******************************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/components/profile-header/profile-header.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileHeaderComponent: () => (/* binding */ ProfileHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ProfileHeaderComponent {
  static ɵfac = function ProfileHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfileHeaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileHeaderComponent,
    selectors: [["app-profile-header"]],
    decls: 5,
    vars: 0,
    consts: [["aria-haspopup", "true", "aria-expanded", "false", "aria-label", "User profile button", 1, "flex", "items-center", "space-x-2", "rounded-full", "bg-gray-100", "hover:bg-gray-200", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "px-3", "py-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-4", "h-4", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"]],
    template: function ProfileHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1oZWFkZXIvcHJvZmlsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8756:
/*!***************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/pages/dashboard/dashboard.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

function DashboardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 3)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class DashboardComponent {
  collapsed = false;
  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
  logout() {
    // Handle logout logic
    console.log('Logging out...');
  }
  static ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 14,
    vars: 6,
    consts: [[1, "flex", "h-screen"], [1, "transition-all", "duration-300", "bg-gray-800", "text-white", "flex", "flex-col"], [1, "p-2", "text-left", "hover:bg-gray-700", "focus:outline-none", 3, "click"], [1, "flex-1", "p-4"], [1, "flex-1", "flex", "flex-col"], [1, "flex", "justify-between", "items-center", "bg-white", "shadow", "px-6", "py-4"], [1, "text-xl", "font-semibold"], [1, "bg-red-500", "hover:bg-red-600", "text-white", "px-4", "py-2", "rounded", 3, "click"], [1, "p-6", "bg-gray-100", "flex-1"], ["href", "#", 1, "block", "py-2", "hover:bg-gray-700", "rounded", "px-2"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_2_listener() {
          return ctx.toggleSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_Conditional_4_Template, 7, 0, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "header", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_9_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "main", 8)(12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to your dashboard!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("w-64", !ctx.collapsed)("w-16", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.collapsed ? "\u2630" : "Collapse", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.collapsed ? 4 : -1);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8900:
/*!************************************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/components/language-selector/language-selector.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSelectorComponent: () => (/* binding */ LanguageSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8503);



function LanguageSelectorComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1.label, " ");
  }
}
class LanguageSelectorComponent {
  translate;
  supportedLangs = [{
    code: 'en',
    label: 'EN'
  }, {
    code: 'de',
    label: 'DE'
  }
  // add more languages here
  ];
  constructor(translate) {
    this.translate = translate;
    translate.setDefaultLang('en');
    translate.use('en'); //TODO maybe store in cookie and init read on load
    //TODO the wine or beverage cards need to return translated values form the backend
  }
  changeLanguage(event) {
    const selectEl = event.target;
    this.translate.use(selectEl.value);
  }
  static ɵfac = function LanguageSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LanguageSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LanguageSelectorComponent,
    selectors: [["app-language-selector"]],
    decls: 3,
    vars: 1,
    consts: [["aria-label", "Select language", "translate", "no", 1, "p-1", "border", "rounded", 3, "change", "value"], [3, "value"]],
    template: function LanguageSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LanguageSelectorComponent_Template_select_change_0_listener($event) {
          return ctx.changeLanguage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, LanguageSelectorComponent_For_2_Template, 2, 2, "option", 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.translate.currentLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.supportedLangs);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZ3VhZ2Utc2VsZWN0b3IvbGFuZ3VhZ2Utc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9336:
/*!***********************************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/components/header/search-header/search-header.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchHeaderComponent: () => (/* binding */ SearchHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SearchHeaderComponent {
  static ɵfac = function SearchHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SearchHeaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchHeaderComponent,
    selectors: [["app-search-header"]],
    decls: 3,
    vars: 0,
    consts: [["aria-haspopup", "true", "aria-expanded", "false", "aria-label", "User profile button", 1, "hover:bg-gray-200", "rounded-full"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"]],
    template: function SearchHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaC1oZWFkZXIvc2VhcmNoLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9445:
/*!************************************************************!*\
  !*** ./apps/smwine-fe-app/src/environments/environment.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3333/api'
};

/***/ }),

/***/ 9507:
/*!*************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/services/cart.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 9648);




class CartService {
  http;
  apiUrl = '/api/v1/cart/add-to-cart';
  cartItemsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
  cartItems = this.cartItemsSignal.asReadonly();
  constructor(http) {
    this.http = http;
  }
  /**
   * Adds an item to the cart
   * @param item - The cart item containing productId and quantity
   */
  addToCart(item) {
    this.http.post(this.apiUrl, item).subscribe({
      next: cartItems => {
        this.cartItemsSignal.set(cartItems);
      },
      error: error => {
        // Handle error - can be extended with error handling logic
      }
    });
  }
  static ɵfac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CartService,
    factory: CartService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5252)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map