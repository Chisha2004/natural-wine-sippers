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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 5280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 9648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2279);
/* harmony import */ var _smwine_fe_app_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smwine-fe-app/interceptor */ 6797);







function HttpLoaderFactory(httpClient) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(httpClient, './i18n/', '.json');
}
const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.provideZoneChangeDetection)({
    eventCoalescing: true
  }), (0,_angular_router__WEBPACK_IMPORTED_MODULE_4__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptorsFromDi)()), {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
    useClass: _smwine_fe_app_interceptor__WEBPACK_IMPORTED_MODULE_1__.JwtInterceptor,
    multi: true
  }, (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 9648);



class RegisterUserService {
  http;
  constructor(http) {
    this.http = http;
  }
  registerUser(user) {
    return this.http.post(`/api/v1/auth/register`, user);
  }
  static ɵfac = function RegisterUserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegisterUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RegisterUserService,
    factory: RegisterUserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 925:
/*!**********************************!*\
  !*** ./libs/shared/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* reexport safe */ _lib_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent),
/* harmony export */   UserService: () => (/* reexport safe */ _lib_store_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService),
/* harmony export */   UserStore: () => (/* reexport safe */ _lib_store_service_user_store__WEBPACK_IMPORTED_MODULE_0__.UserStore),
/* harmony export */   UserType: () => (/* reexport safe */ _lib_model_user_interface__WEBPACK_IMPORTED_MODULE_2__.UserType)
/* harmony export */ });
/* harmony import */ var _lib_store_service_user_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store/service/user.store */ 4939);
/* harmony import */ var _lib_store_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/store/user/user.service */ 3909);
/* harmony import */ var _lib_model_user_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/model/user.interface */ 3777);
/* harmony import */ var _lib_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/login/login.component */ 8568);





/***/ }),

/***/ 1329:
/*!*****************************************************!*\
  !*** ./libs/interceptor/src/lib/jwt.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _smwine_fe_app_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smwine-fe-app/store */ 925);




class JwtInterceptor {
  intercept(req, next) {
    //Skip adding the Authorization header for authentication requests
    if (req.url.includes('/auth')) {
      return next.handle(req);
    }
    const userStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_smwine_fe_app_store__WEBPACK_IMPORTED_MODULE_0__.UserStore);
    const token = userStore.token?.();
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
  static ɵfac = function JwtInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || JwtInterceptor)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: JwtInterceptor,
    factory: JwtInterceptor.ɵfac
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/header/header.component */ 6168);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 9648);
/* harmony import */ var _components_beverage_list_beverage_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/beverage-list/beverage-list-component */ 5307);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _services_beverage_beverage_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/beverage/beverage.store */ 4998);
/* harmony import */ var _models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/beverage-category.interface */ 1833);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);











class LandingComponent {
  route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute);
  beverageStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_beverage_beverage_store__WEBPACK_IMPORTED_MODULE_2__.BeverageStore);
  destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
  beverageCatalog = this.beverageStore.catalog;
  activeBeverageType = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(_models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_3__.BeverageType.Wine); //Default wine
  //TODO need to get the active category from either the url or local storage so that when user refreshes the page, it doesn't reset to wine. Also need to update the url when user changes category so that they can share the url with the category they are currently viewing.
  beveragesByType = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => this.beverageCatalog().filter(beverage => beverage.type === this.activeBeverageType()));
  //TODO need to add mini card to show price as well on detailed
  getBeverageTypeFromValue(value) {
    switch (value?.toLowerCase()) {
      case _models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_3__.BeverageType.Wine.toLowerCase():
        return _models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_3__.BeverageType.Wine;
      case _models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_3__.BeverageType.Beer.toLowerCase():
        return _models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_3__.BeverageType.Beer;
      case _models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_3__.BeverageType.Cider.toLowerCase():
        return _models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_3__.BeverageType.Cider;
      default:
        return null;
    }
  }
  ngOnInit() {
    this.route.paramMap.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe(params => {
      const beverageType = params.get('type');
      const validBeverageType = this.getBeverageTypeFromValue(beverageType);
      if (validBeverageType) {
        this.activeBeverageType.set(validBeverageType);
      }
    });
  }
  static ɵfac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LandingComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LandingComponent,
    selectors: [["app-landing"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient])],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("beverages", ctx.beveragesByType());
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
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_beverage_list_beverage_list_component__WEBPACK_IMPORTED_MODULE_1__.BeverageListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1833:
/*!**************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/models/beverage-category.interface.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeverageType: () => (/* binding */ BeverageType)
/* harmony export */ });
var BeverageType;
(function (BeverageType) {
  BeverageType["Wine"] = "Wine";
  BeverageType["Beer"] = "Beer";
  BeverageType["Cider"] = "Cider";
})(BeverageType || (BeverageType = {}));

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _services_beverage_beverage_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/beverage/beverage.store */ 4998);




class AppComponent {
  beverageStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_beverage_beverage_store__WEBPACK_IMPORTED_MODULE_0__.BeverageStore);
  ngOnInit() {
    this.beverageStore.loadCatalog();
  }
  static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
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

/***/ 3777:
/*!*****************************************************!*\
  !*** ./libs/shared/src/lib/model/user.interface.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserType: () => (/* binding */ UserType)
/* harmony export */ });
var UserType;
(function (UserType) {
  UserType["ADMIN"] = "ADMIN";
  UserType["BASIC"] = "BASIC";
  UserType["GUEST"] = "GUEST";
})(UserType || (UserType = {}));

/***/ }),

/***/ 3909:
/*!********************************************************!*\
  !*** ./libs/shared/src/lib/store/user/user.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 9648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class UserService {
  API_BASE_URL = '/api/v1';
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  getUser(userId) {
    return this.http.get(`${this.API_BASE_URL}/users/${userId}`);
  }
  login(email, password) {
    return this.http.post(`${this.API_BASE_URL}/auth/login`, {
      email,
      password
    });
  }
  loginWithToken(token) {
    return this.http.post(`${this.API_BASE_URL}/auth/token-login`, {
      token
    });
  }
  generateGuestUser() {
    return this.http.get(`${this.API_BASE_URL}/auth/generate-guest-user`);
  }
  static ɵfac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UserService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 6168);
/* harmony import */ var _services_beverage_beverage_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/beverage/beverage.store */ 4998);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);







function WineCardDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Loading beverage details... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function WineCardDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Beverage not found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function WineCardDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6)(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9)(6, "div")(7, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15)(17, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Eigenschaften ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17)(20, "div", 18)(21, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Typ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18)(26, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Hersteller ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Gr\u00F6\u00DFe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
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
    let tmp_11_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = ctx_r0.beverage()) == null ? null : tmp_1_0.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (tmp_2_0 = ctx_r0.beverage()) == null ? null : tmp_2_0.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", (tmp_3_0 = ctx_r0.beverage()) == null ? null : tmp_3_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = ctx_r0.beverage()) == null ? null : tmp_4_0.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (tmp_5_0 = ctx_r0.beverage()) == null ? null : tmp_5_0.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", (tmp_6_0 = ctx_r0.beverage()) == null ? null : tmp_6_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 11, (tmp_7_0 = ctx_r0.beverage()) == null ? null : tmp_7_0.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_8_0 = ctx_r0.beverage()) == null ? null : tmp_8_0.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ((tmp_9_0 = ctx_r0.beverage()) == null ? null : tmp_9_0.type) || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_10_0 = ctx_r0.beverage()) == null ? null : tmp_10_0.producer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_11_0 = ctx_r0.beverage()) == null ? null : tmp_11_0.capacity, "ml ");
  }
}
class WineCardDetailComponent {
  route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
  beverageStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_beverage_beverage_store__WEBPACK_IMPORTED_MODULE_1__.BeverageStore);
  destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
  beverageCatalog = this.beverageStore.catalog;
  isLoading = this.beverageStore.isLoading;
  beverageId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null);
  beverage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
    return this.beverageCatalog().find(b => String(b.id) === this.beverageId()) || null;
  });
  ngOnInit() {
    this.route.paramMap.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(params => {
      const beverageId = params.get('beverageId');
      if (beverageId) {
        this.beverageId.set(beverageId);
      }
    });
  }
  static ɵfac = function WineCardDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WineCardDetailComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: WineCardDetailComponent,
    selectors: [["app-wine-card-detail"]],
    decls: 6,
    vars: 1,
    consts: [[1, "block"], [1, "min-h-screen", "bg-gray-50", "py-6", "sm:py-12"], [1, "container", "mx-auto", "max-w-6xl", "px-4", "sm:px-6", "lg:px-8"], [1, "text-center", "py-20"], [1, "text-2xl", "font-semibold", "text-gray-700"], [1, "md:hidden", "text-2xl", "sm:text-3xl", "font-bold", "text-gray-900", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "sm:gap-8", "bg-white", "rounded-lg", "shadow-lg", "p-6", "sm:p-8"], [1, "hidden", "md:flex", "items-center", "justify-center", "order-2", "md:order-1"], [1, "w-full", "h-auto", "object-cover", "rounded-lg", "max-w-xs", "sm:max-w-md", 3, "src", "alt"], [1, "flex", "flex-col", "justify-between", "order-1", "md:order-2"], [1, "hidden", "md:block", "text-2xl", "sm:text-3xl", "lg:text-4xl", "font-bold", "text-gray-900", "mb-2"], [1, "md:hidden", "mb-4", "flex", "justify-center"], [1, "w-full", "h-auto", "object-cover", "rounded-lg", "max-w-xs", 3, "src", "alt"], [1, "text-2xl", "sm:text-3xl", "font-semibold", "text-red-600", "mb-4"], [1, "text-gray-600", "text-base", "sm:text-lg", "leading-relaxed", "mb-6"], [1, "border-t", "pt-6"], [1, "text-lg", "sm:text-xl", "font-bold", "text-gray-900", "mb-4"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-3", "sm:gap-4"], [1, "bg-gray-100", "p-3", "sm:p-4", "rounded-lg"], [1, "text-xs", "sm:text-sm", "font-semibold", "text-gray-600", "mb-1"], [1, "text-base", "sm:text-lg", "font-bold", "text-gray-900", "truncate"], [1, "text-base", "sm:text-lg", "font-bold", "text-gray-900"]],
    template: function WineCardDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WineCardDetailComponent_Conditional_3_Template, 3, 0, "div", 3)(4, WineCardDetailComponent_Conditional_4_Template, 3, 0, "div", 3)(5, WineCardDetailComponent_Conditional_5_Template, 35, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.isLoading() ? 3 : !ctx.beverage() ? 4 : 5);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/beverage-category.interface */ 1833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 9648);





class BeverageService {
  http;
  BASE_URL = '/api/v1/beverages';
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(http) {
    this.http = http;
  }
  getCatalog() {
    return this.http.get(`${this.BASE_URL}/catalog`);
  }
  getBeverage(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
      id: '123',
      name: 'Trousseau Duty',
      category: 'Red',
      description: 'A structured, dense, and elegant wine from a magnificent terroir. A wine of great precision and refinement, which will be a pleasure to open to accompany a fine dinner. A sweet moment in perspective!',
      type: _models_beverage_category_interface__WEBPACK_IMPORTED_MODULE_0__.BeverageType.Wine,
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
    return new (__ngFactoryType__ || BeverageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 9507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* eslint-disable @angular-eslint/prefer-inject */









class WineCardComponent {
  router;
  route;
  translate;
  cartService;
  beverage = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
  constructor(router, route, translate, cartService) {
    this.router = router;
    this.route = route;
    this.translate = translate;
    this.cartService = cartService;
  }
  goToBevergaeDetails(id) {
    this.router.navigate([id], {
      relativeTo: this.route
    });
  }
  getAddToCartLabel() {
    return `${this.translate.instant('WINE_CARD.ADD_TO_CART')} ${this.beverage().name} to cart button`;
  }
  addToCart() {
    this.cartService.addToCart({
      beverageId: this.beverage().id,
      quantity: 1
    });
  }
  static ɵfac = function WineCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WineCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: WineCardComponent,
    selectors: [["app-wine-card"]],
    inputs: {
      beverage: [1, "beverage"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe])],
    decls: 14,
    vars: 10,
    consts: [[1, "bg-white", "rounded-2xl", "shadow-md", "overflow-hidden", "w-[260px]", "md:w-[260px]", "cursor-pointer", "group", "relative"], [3, "click"], [1, "w-full", "object-contain", 3, "src", "alt"], [1, "p-4", "space-y-2"], [1, "text-lg", "font-semibold", "text-gray-800"], [1, "text-sm", "text-gray-600"], [1, "text-base", "font-bold", "text-rose-600"], [1, "add-to-cart", "absolute", "top-2", "right-2", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300", "cursor-pointer", "bg-white", "p-2", "rounded-full", "shadow", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6", "text-gray-800"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4.5v15m7.5-7.5h-15"]],
    template: function WineCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WineCardComponent_Template_button_click_1_listener() {
          return ctx.goToBevergaeDetails(ctx.beverage().id);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "View details of " + ctx.beverage().name + " button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.beverage().imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.beverage().name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.beverage().name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.beverage().producer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 7, ctx.beverage().price, "EUR"), " ");
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

/***/ 4939:
/*!*********************************************************!*\
  !*** ./libs/shared/src/lib/store/service/user.store.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserStore: () => (/* binding */ UserStore)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/signals */ 1803);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/user.service */ 3909);
/* harmony import */ var _model_user_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/user.interface */ 3777);





const USER_STATE_STORAGE_KEY = 'user_state';
const initialState = {
  uuid: '',
  email: '',
  firstName: '',
  lastName: '',
  token: '',
  hasError: false,
  isLoading: false
};
class UserStore extends (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.signalStore)((0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.withState)(initialState), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.withComputed)(store => ({
  currentUser: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => store),
  isLoggedIn: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
    return store.email && !!store.email() && store.userType && store.userType() !== _model_user_interface__WEBPACK_IMPORTED_MODULE_1__.UserType.GUEST;
  })
})), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.withMethods)((store, userService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)) => ({
  loadUser: userId => {
    (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, {
      isLoading: true
    });
    userService.getUser(userId).subscribe({
      next: user => {
        (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, user, {
          hasError: false,
          isLoading: false
        });
        persistUserToStorage(user);
      },
      error: () => {
        (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, {
          hasError: true,
          isLoading: false
        });
      }
    });
  },
  login: (email, password) => {
    (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, {
      isLoading: true
    });
    userService.login(email, password).subscribe({
      next: user => {
        (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, user, {
          hasError: false,
          isLoading: false
        });
        persistUserToStorage(user);
      },
      error: () => {
        (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, {
          hasError: true,
          isLoading: false
        });
      }
    });
  },
  logout: () => {
    (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, initialState);
    localStorage.removeItem(USER_STATE_STORAGE_KEY);
  }
})), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.withHooks)((store, userService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)) => ({
  onInit: () => {
    const userState = JSON.parse(localStorage.getItem(USER_STATE_STORAGE_KEY) || '{}');
    if (userState.userType === _model_user_interface__WEBPACK_IMPORTED_MODULE_1__.UserType.GUEST) {
      (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, userState, {
        hasError: false,
        isLoading: false
      });
    } else if (userState.token) {
      (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, {
        isLoading: true
      });
      userService.loginWithToken(userState.token).subscribe({
        next: user => {
          (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, user, {
            hasError: false,
            isLoading: false
          });
        },
        error: error => {
          if (error.status === 401) {
            localStorage.removeItem(USER_STATE_STORAGE_KEY);
          }
        }
      });
    } else {
      userService.generateGuestUser().subscribe({
        next: user => {
          (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_2__.patchState)(store, user, {
            hasError: false,
            isLoading: false
          });
          persistUserToStorage(user);
        }
      });
    }
  }
}))) {
  static ɵfac = /*@__PURE__*/(() => {
    let ɵUserStore_BaseFactory;
    return function UserStore_Factory(__ngFactoryType__) {
      return (ɵUserStore_BaseFactory || (ɵUserStore_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](UserStore)))(__ngFactoryType__ || UserStore);
    };
  })();
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: UserStore,
    factory: UserStore.ɵfac,
    providedIn: 'root'
  });
}
function persistUserToStorage(user) {
  if (user) {
    localStorage.setItem(USER_STATE_STORAGE_KEY, JSON.stringify(user));
  }
}

/***/ }),

/***/ 4998:
/*!************************************************************************!*\
  !*** ./apps/smwine-fe-app/src/app/services/beverage/beverage.store.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeverageStore: () => (/* binding */ BeverageStore)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals */ 1803);
/* harmony import */ var _ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/signals/rxjs-interop */ 8275);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _ngrx_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/operators */ 2743);
/* harmony import */ var _beverage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beverage.service */ 4284);






const initialState = {
  catalog: [],
  isLoading: false,
  error: null
};
const BeverageStore = (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.signalStore)({
  providedIn: 'root'
}, (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.withState)(initialState), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.withMethods)((store, beverageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_beverage_service__WEBPACK_IMPORTED_MODULE_0__.BeverageService)) => ({
  loadCatalog: (0,_ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.rxMethod)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.patchState)(store, {
    isLoading: true,
    error: null
  })), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => beverageService.getCatalog().pipe((0,_ngrx_operators__WEBPACK_IMPORTED_MODULE_7__.tapResponse)({
    next: catalog => (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.patchState)(store, {
      catalog,
      error: null
    }),
    error: () => (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.patchState)(store, {
      error: 'Technical error occurred while loading catalog.'
    })
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.patchState)(store, {
    isLoading: false
  }))))))
})));

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
/* harmony import */ var _smwine_fe_app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smwine-fe-app/store */ 925);






const appRoutes = [{
  path: 'dashboard',
  component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: 'register',
  component: _pages_register_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent
}, {
  path: 'beer/:beverageId',
  component: _components_wine_card_detail_wine_card_detail_component__WEBPACK_IMPORTED_MODULE_4__.WineCardDetailComponent
}, {
  path: 'wine/:beverageId',
  component: _components_wine_card_detail_wine_card_detail_component__WEBPACK_IMPORTED_MODULE_4__.WineCardDetailComponent
}, {
  path: 'cider/:beverageId',
  component: _components_wine_card_detail_wine_card_detail_component__WEBPACK_IMPORTED_MODULE_4__.WineCardDetailComponent
}, {
  path: 'login',
  component: _smwine_fe_app_store__WEBPACK_IMPORTED_MODULE_5__.LoginComponent
}, {
  path: 'admin',
  canMatch: [_smwine_fe_app_security__WEBPACK_IMPORTED_MODULE_2__.adminAuthGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "libs_admin_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @smwine-fe-app/admin */ 3365)).then(m => m.adminRoutes)
}, {
  path: '',
  redirectTo: '/wine',
  pathMatch: 'full'
}, {
  path: ':type',
  component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _wine_card_wine_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wine-card/wine-card.component */ 4324);



function BeverageListComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-wine-card", 1);
  }
  if (rf & 2) {
    const beverage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("beverage", beverage_r1);
  }
}
class BeverageListComponent {
  beverages = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
  static ɵfac = function BeverageListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BeverageListComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BeverageListComponent,
    selectors: [["app-beverage-list"]],
    inputs: {
      beverages: [1, "beverages"]
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.beverages());
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 8241);









const _forTrack0 = ($index, $item) => $item.path;
function HeaderComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const navLink_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", navLink_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", navLink_r1.label, " ");
  }
}
function HeaderComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-language-selector")(1, "app-shopping-cart")(2, "app-search-header")(3, "app-profile-header");
  }
}
function HeaderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-search-header")(1, "app-language-selector")(2, "app-shopping-cart");
  }
}
function HeaderComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Beer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Wine");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 16);
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
  navigationLinks = [{
    label: 'Beer',
    path: '/beer'
  }, {
    label: 'Wine',
    path: '/wine'
  }, {
    label: 'Cider',
    path: '/cider'
  }];
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
    decls: 16,
    vars: 4,
    consts: [[1, "sticky", "top-0", "z-50", "bg-white", "shadow-md"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "justify-between", "items-center", "h-16"], [1, "flex-shrink-0", "text-xl", "font-bold", "text-red-700"], ["href", "/"], ["src", "/logo.png", 1, "logo-img"], [1, "hidden", "md:flex", "space-x-8", "text-gray-700", "font-medium"], ["routerLinkActive", "active", 1, "hover:text-red-700", "transition", 3, "routerLink"], [1, "md:hidden", "flex", "space-x-8"], ["type", "button", 1, "text-gray-700", "focus:outline-none", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], [1, "md:hidden", "px-4", "pb-4", "space-y-2", "bg-white", "border-t", "border-gray-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["href", "/beer", 1, "block", "text-gray-700", "hover:text-red-700"], ["href", "/wine", 1, "block", "text-gray-700", "hover:text-red-700"], ["href", "/cider", 1, "block", "text-gray-700", "hover:text-red-700"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](7, HeaderComponent_For_8_Template, 2, 2, "a", 7, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, HeaderComponent_Conditional_9_Template, 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, HeaderComponent_Conditional_11_Template, 3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_12_listener() {
          return ctx.menuOpen = !ctx.menuOpen;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HeaderComponent_Conditional_13_Template, 2, 0, ":svg:svg", 10)(14, HeaderComponent_Conditional_14_Template, 2, 0, ":svg:svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HeaderComponent_Conditional_15_Template, 8, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.navigationLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.isMobile ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.isMobile ? 11 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.menuOpen ? 13 : 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.menuOpen ? 15 : -1);
      }
    },
    dependencies: [_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_0__.LanguageSelectorComponent, _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__.ShoppingCartComponent, _profile_header_profile_header_component__WEBPACK_IMPORTED_MODULE_2__.ProfileHeaderComponent, _search_header_search_header_component__WEBPACK_IMPORTED_MODULE_3__.SearchHeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive],
    styles: [".logo-img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: rgb(185, 28, 28, var(--tw-text-opacity, 1));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBSUk7RUFDRSxrREFBQTtBQUROIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxubmF2IHtcclxuICBhIHtcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHJnYigxODUgMjggMjggLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBSUk7RUFDRSxrREFBQTtBQUROO0FBQ0EsZ2ZBQWdmIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taW1nIHtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGEge1xyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogcmdiKDE4NSAyOCAyOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 9507);



const _forTrack0 = ($index, $item) => $item.beverageId;
function ShoppingCartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.cart().items.length);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r2.beverageImgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.beverageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Qty: ", item_r2.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", `€${item_r2.totalForQuantity}`, " ");
  }
}
function ShoppingCartComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](4, ShoppingCartComponent_Conditional_5_For_5_Template, 10, 4, "li", 8, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9)(7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12)(12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.cart().items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](`€${ctx_r0.cart().totalPrice}`);
  }
}
class ShoppingCartComponent {
  cartService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService);
  showCart = false;
  cart = this.cartService.cart;
  addToCart(beverageId, quantity) {
    this.cartService.addToCart({
      beverageId,
      quantity
    });
  }
  static ɵfac = function ShoppingCartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ShoppingCartComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ShoppingCartComponent,
    selectors: [["app-shopping-cart"]],
    decls: 6,
    vars: 2,
    consts: [[1, "relative"], ["aria-label", "Cart", 1, "relative", "p-2", "rounded-full", "hover:bg-gray-100", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-6", "h-6", "text-gray-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.2M16 17a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"], [1, "absolute", "-top-1", "-right-1", "bg-red-600", "text-white", "text-xs", "font-semibold", "rounded-full", "px-1.5", "py-0.5"], [1, "absolute", "right-0", "mt-2", "w-80", "bg-white", "border", "border-gray-200", "rounded-xl", "shadow-lg", "z-50", "text-sm", "divide-y", "divide-gray-100"], [1, "p-4", "font-medium", "text-gray-700"], [1, "max-h-60", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "hover:bg-gray-50"], [1, "p-4", "flex", "justify-between", "items-center"], [1, "font-semibold", "text-gray-800"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "p-4"], ["href", "/checkout", 1, "block", "text-center", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "font-medium", "py-2", "rounded-lg", "transition"], [1, "flex", "items-center", "gap-3"], ["alt", "Item", 1, "w-10", "h-10", "rounded-md", "object-cover", 3, "src"], [1, "font-medium", "text-gray-800"], [1, "text-gray-500", "text-xs"], [1, "font-semibold", "text-gray-700"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ShoppingCartComponent_Conditional_5_Template, 14, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.cart() && ctx.cart().items.length > 0 ? 4 : -1);
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
/* harmony export */   JwtInterceptor: () => (/* reexport safe */ _lib_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.JwtInterceptor),
/* harmony export */   MockHttpInterceptor: () => (/* reexport safe */ _lib_mock_mock_http_interceptor__WEBPACK_IMPORTED_MODULE_0__.MockHttpInterceptor)
/* harmony export */ });
/* harmony import */ var _lib_mock_mock_http_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mock/mock-http-interceptor */ 4519);
/* harmony import */ var _lib_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/jwt.interceptor */ 1329);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _smwine_fe_app_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smwine-fe-app/store */ 925);





function ProfileHeaderComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.profileText());
  }
}
function ProfileHeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileHeaderComponent_Conditional_0_Conditional_4_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r0.isLoggedIn() ? 4 : -1);
  }
}
function ProfileHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Login\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ProfileHeaderComponent {
  userStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_smwine_fe_app_store__WEBPACK_IMPORTED_MODULE_0__.UserStore);
  currentUser = this.userStore.currentUser;
  isLoggedIn = this.userStore.isLoggedIn;
  profileText = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const currentUser = this.currentUser();
    return currentUser?.firstName && currentUser?.firstName() ? currentUser?.firstName() : `Acc: ${currentUser?.uuid()}`; //TOdo we should find better alternative than show uuid.
  });
  static ɵfac = function ProfileHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfileHeaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProfileHeaderComponent,
    selectors: [["app-profile-header"]],
    decls: 2,
    vars: 1,
    consts: [["aria-haspopup", "true", "aria-expanded", "false", "aria-label", "User profile button", 1, "flex", "flex-col", "items-center", "rounded-full", "bg-gray-100", "hover:bg-gray-200", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "px-3", "py-1"], ["routerLink", "/login", "aria-label", "Login link", 1, "flex", "items-center", "space-x-2", "rounded-full", "bg-indigo-600", "hover:bg-indigo-700", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "px-3", "py-1", "text-white", "font-medium", "text-sm"], [1, "flex", "items-center", "space-x-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], [1, "first-name-container", "text-xs", "text-gray-700", "font-medium", "first-letter:uppercase"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"]],
    template: function ProfileHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProfileHeaderComponent_Conditional_0_Template, 5, 1, "button", 0)(1, ProfileHeaderComponent_Conditional_1_Template, 4, 0, "a", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isLoggedIn() ? 0 : 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvc213aW5lLWZlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1oZWFkZXIvcHJvZmlsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8568:
/*!*****************************************************************!*\
  !*** ./libs/shared/src/lib/components/login/login.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _store_service_user_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/service/user.store */ 4939);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2596);




function LoginComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 18)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Conditional_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.clearError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage(), " ");
  }
}
class LoginComponent {
  userStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_store_service_user_store__WEBPACK_IMPORTED_MODULE_0__.UserStore);
  router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  // Reactive form state using standard Signals
  email = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
  password = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
  errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
  constructor() {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
      const error = this.userStore.hasError?.();
      if (error) {
        //TODO store should provide more specific error messages (e.g. invalid credentials, network error, etc.)
        this.errorMessage.set('Invalid email or password.'); //TODO translate this message using i18n
      }
    });
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
      const isLoading = this.userStore.isLoading?.();
      const userEmail = this.userStore.email?.();
      if (this.email() && !isLoading && userEmail === this.email()) {
        this.router.navigate(['/wine']);
      }
    });
  }
  onSubmit(event) {
    event.preventDefault(); // Stop standard browser page reload
    this.clearError();
    if (!this.email() || !this.password()) {
      this.errorMessage.set('Please fill out all required fields.'); //TODO: Use i18n
      return;
    }
    this.userStore.login(this.email(), this.password());
  }
  clearError() {
    this.errorMessage.set(null);
  }
  static ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["lib-login"]],
    decls: 28,
    vars: 3,
    consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-slate-50", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8", "bg-white", "p-8", "rounded-xl", "shadow-md", "border", "border-slate-100"], [1, "text-center"], [1, "text-3xl", "font-extrabold", "text-slate-900", "tracking-tight"], [1, "mt-2", "text-sm", "text-slate-500"], [1, "bg-red-50", "border-l-4", "border-red-500", "p-4", "rounded-md", "animate-fade-in"], [1, "mt-6", "space-y-6", 3, "submit"], [1, "space-y-4"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-slate-700"], ["id", "email", "type", "email", "required", "", "placeholder", "you@example.com", 1, "mt-1", "block", "w-full", "px-3", "py-2", "bg-white", "border", "border-slate-300", "rounded-md", "text-sm", "shadow-sm", "placeholder-slate-400", "focus:outline-none", "focus:border-sky-500", "focus:ring-1", "focus:ring-sky-500", 3, "input", "value"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-slate-700"], ["id", "password", "type", "password", "required", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "mt-1", "block", "w-full", "px-3", "py-2", "bg-white", "border", "border-slate-300", "rounded-md", "text-sm", "shadow-sm", "placeholder-slate-400", "focus:outline-none", "focus:border-sky-500", "focus:ring-1", "focus:ring-sky-500", 3, "input", "value"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "flex", "items-center"], ["id", "remember-me", "type", "checkbox", 1, "h-4", "w-4", "text-sky-600", "focus:ring-sky-500", "border-slate-300", "rounded"], ["for", "remember-me", 1, "ml-2", "block", "text-slate-900", "font-medium"], ["href", "#", 1, "font-medium", "text-sky-600", "hover:text-sky-500", "transition-colors"], ["type", "submit", 1, "group", "relative", "w-full", "flex", "justify-center", "py-2", "px-4", "border", "border-transparent", "text-sm", "font-medium", "rounded-md", "text-white", "bg-sky-600", "hover:bg-sky-500", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-sky-500", "transition-colors", "shadow-sm"], [1, "flex", "items-center", "justify-between"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "text-red-500"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], [1, "ml-3", "text-sm", "font-medium", "text-red-700"], [1, "text-red-500", "hover:text-red-700", "focus:outline-none", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Welcome Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign in to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LoginComponent_Conditional_7_Template, 10, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener($event) {
          return ctx.onSubmit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div")(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function LoginComponent_Template_input_input_13_listener($event) {
          return ctx.email.set($event.target.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function LoginComponent_Template_input_input_17_listener($event) {
          return ctx.password.set($event.target.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div")(26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.errorMessage() ? 7 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.email());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.password());
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvc2hhcmVkL3NyYy9saWIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
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
  apiUrl = '/api/v1/cart/add';
  cartSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
    items: [],
    totalPrice: 0
  });
  cart = this.cartSignal.asReadonly();
  constructor(http) {
    this.http = http;
  }
  /**
   * Adds an item to the cart
   * @param beverageId - The ID of the beverage to add
   * @param quantity - The quantity of the beverage to add
   */
  addToCart({
    beverageId,
    quantity
  }) {
    this.http.post(this.apiUrl, {
      beverageId,
      quantity
    }).subscribe({
      next: cartItems => {
        this.cartSignal.set(cartItems);
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