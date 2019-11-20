(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list class=\"cards\">\n      \n      <ion-card *ngFor=\"let fund of fundaciones\">\n          <ion-card-header>\n            <img src=\"{{url + 'obtener-foto/' + fund.logo}}\" (click)=\"perfilFundacion(fund._id)\">\n          </ion-card-header>\n        \n          <ion-card-content>\n            <ion-card-title (click)=\"perfilFundacion(fund._id)\">{{fund.nombreFundacion}}</ion-card-title>\n          </ion-card-content>\n        </ion-card>\n        <p *ngIf=\"status == true\">No se encontró más fundaciones</p>\n    </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"agregando fundaciones...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n   <!--<div class=\"cards\">\n      <ion-card>\n        <ion-card-header>\n          <img src=\"../../assets/img/a536c6ad7b1d4473ebc6ddf5b19e7e88.jpg\">\n        </ion-card-header>\n      \n        <ion-card-content>\n          <ion-card-title>Card Title</ion-card-title>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-card-header>\n            <img src=\"../../assets/img/a536c6ad7b1d4473ebc6ddf5b19e7e88.jpg\">\n          </ion-card-header>\n        \n          <ion-card-content>\n            <ion-card-title>Card Titlesadsa asdssd</ion-card-title>\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n              <img src=\"../../assets/img/a536c6ad7b1d4473ebc6ddf5b19e7e88.jpg\">\n            </ion-card-header>\n          \n            <ion-card-content>\n              <ion-card-title>Card Title</ion-card-title>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-card-header>\n                <img src=\"../../assets/img/a536c6ad7b1d4473ebc6ddf5b19e7e88.jpg\">\n              </ion-card-header>\n            \n              <ion-card-content>\n                <ion-card-title>Card Title</ion-card-title>\n              </ion-card-content>\n            </ion-card>\n             \n    </div>-->\n    \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n.cards ion-card {\n  width: 10rem;\n  height: 12rem;\n}\n.cards ion-card ion-card-header {\n  padding: 0;\n  width: 100%;\n  height: 80%;\n}\n.cards ion-card ion-card-header img {\n  width: 100%;\n  height: 100%;\n}\n.cards ion-card ion-card-content {\n  padding: 0;\n  width: 100%;\n  height: 20%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.cards ion-card ion-card-content ion-card-title {\n  width: 100%;\n  color: #3bbfad;\n  font-family: \"Righteous\", cursive;\n  text-align: center;\n  padding: 0 2px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXGRhdmlkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcREFWRVxccHJveWVjdG8tdGl0dWxhY2lvblxcZnVuZGFjaW9uZXMtbW9iaWxlL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQUo7QURFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQU47QURFTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0FSO0FEQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NWO0FERU07RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDSixtQkFBQTtFQUNBLHVCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgXG4gICAgaW9uLWNhcmR7XG4gICAgICB3aWR0aDogMTByZW07XG4gICAgICBoZWlnaHQ6IDEycmVtO1xuICBcbiAgICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogIzNiYmZhZDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xuICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfSIsIi5jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY2FyZHMgaW9uLWNhcmQge1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogMTJyZW07XG59XG4uY2FyZHMgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xufVxuLmNhcmRzIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcmRzIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmRzIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWNhcmQtdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMzYmJmYWQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");








var Tab2Page = /** @class */ (function () {
    function Tab2Page(toastController, _usuarioService, fb, nativeStorage, _route, _router) {
        this.toastController = toastController;
        this._usuarioService = _usuarioService;
        this.fb = fb;
        this.nativeStorage = nativeStorage;
        this._route = _route;
        this._router = _router;
        this.items = [];
        this.fundaciones = [];
        this.noMore = false;
        this.page = 1;
        this.status = false;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].url;
    }
    Tab2Page.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.page = 1;
            _this.obtFundaciones(_this.page);
            event.target.complete();
        }, 500);
    };
    Tab2Page.prototype.doFbLogout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) {
            //user logged out so we will remove him from the NativeStorage
            _this.nativeStorage.remove('facebook_user');
            _this._router.navigate(['login']);
        }, function (error) {
            console.log(error);
        });
    };
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.nativeStorage.getItem('identity')
            .then(function (data) {
            _this.nm = data.id;
            _this.apel = data.apellidos;
            _this.im = data.image;
        }, function (error) { return console.log(error); });
        this.nativeStorage.getItem('token')
            .then(function (data) {
            _this.token = data.token;
        }, function (error) { return console.log(error); });
        this.obtFundaciones(this.page);
    };
    Tab2Page.prototype.presentToast = function (txt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: txt,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.loadData = function (event) {
        var _this = this;
        this.status = false;
        setTimeout(function () {
            if (_this.fundaciones.length != _this.total) {
                _this.viewMore();
            }
            else {
                _this.status = true;
            }
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            /*if (data.length == 1000) {
              event.target.disabled = true;
            }*/
        }, 500);
    };
    Tab2Page.prototype.obtFundaciones = function (page, adding) {
        if (adding === void 0) { adding = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rol;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rol = 4;
                        return [4 /*yield*/, this._usuarioService.obtUsuariosRol(page, rol).subscribe(function (response) {
                                if (response.usuarios && response.n == '1') {
                                    //this.fotos = response.fot;
                                    _this.total = response.total;
                                    _this.pages = response.pages;
                                    _this.itemsPerPage = response.itemsPerPage;
                                    console.log(_this.total);
                                    /* if(page > this.pages){
                                       this._router.navigate[('/login')]
                                     }*/
                                    if (!adding) {
                                        _this.fundaciones = response.usuarios;
                                    }
                                    else {
                                        var arrayA = _this.fundaciones;
                                        var arrayB = response.usuarios;
                                        _this.fundaciones = arrayA.concat(arrayB);
                                    }
                                }
                                else {
                                    _this.presentToast('Intentalo nuevamente');
                                }
                            }, function (error) {
                                var errorMessage = error;
                                console.log(errorMessage);
                                _this.presentToast('Intentalo nuevamente');
                                if (errorMessage != null && error.error.n == '2') {
                                }
                                else if (errorMessage != null && error.error.n == '3') {
                                }
                                else {
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.viewMore = function () {
        if (this.fundaciones.length == this.total) {
            this.noMore = true;
        }
        else {
            this.page += 1;
        }
        this.obtFundaciones(this.page, true);
    };
    Tab2Page.prototype.perfilFundacion = function (id) {
        this._router.navigate(['perfil-fundacion', id]);
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            providers: [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]],
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map