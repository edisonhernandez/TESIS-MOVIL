(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list class=\"cards\">\n      \n      <ion-card *ngFor=\"let item of mascotas\">\n          <ion-card-header>\n            <img src=\"{{url + 'obtener-foto-mascota/' + item.fotos[0].name}}\" (click)=\"perfilMascota(item._id)\">\n          </ion-card-header>\n        \n          <ion-card-content>\n            <ion-card-title (click)=\"perfilMascota(item._id)\">{{item.nombre}}</ion-card-title>\n          </ion-card-content>\n        </ion-card>\n        <p *ngIf=\"status == true\">No se encontró más mascotas</p>\n    </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"agregando mascotas...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n   <!--<div class=\"cards\">\n      <ion-card>\n        <ion-card-header>\n          <img src=\"../../assets/img/a536c6ad7b1d4473ebc6ddf5b19e7e88.jpg\">\n        </ion-card-header>\n      \n        <ion-card-content>\n          <ion-card-title>Card Title</ion-card-title>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-card-header>\n            <img src=\"../../assets/img/a536c6ad7b1d4473ebc6ddf5b19e7e88.jpg\">\n          </ion-card-header>\n        \n          <ion-card-content>\n            <ion-card-title>Card Titlesadsa asdssd</ion-card-title>\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n              <img src=\"../../assets/img/a536c6ad7b1d4473ebc6ddf5b19e7e88.jpg\">\n            </ion-card-header>\n          \n            <ion-card-content>\n              <ion-card-title>Card Title</ion-card-title>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-card-header>\n                <img src=\"../../assets/img/a536c6ad7b1d4473ebc6ddf5b19e7e88.jpg\">\n              </ion-card-header>\n            \n              <ion-card-content>\n                <ion-card-title>Card Title</ion-card-title>\n              </ion-card-content>\n            </ion-card>\n             \n    </div>-->\n    \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n.cards ion-card {\n  width: 10rem;\n  height: 12rem;\n}\n.cards ion-card ion-card-header {\n  padding: 0;\n  width: 100%;\n  height: 80%;\n}\n.cards ion-card ion-card-header img {\n  width: 100%;\n  height: 100%;\n}\n.cards ion-card ion-card-content {\n  padding: 0;\n  width: 100%;\n  height: 20%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.cards ion-card ion-card-content ion-card-title {\n  width: 100%;\n  color: #3bbfad;\n  font-family: \"Righteous\", cursive;\n  text-align: center;\n  padding: 0 2px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXGRhdmlkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcREFWRVxccHJveWVjdG8tdGl0dWxhY2lvblxcZnVuZGFjaW9uZXMtbW9iaWxlL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NOO0FEQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEQ0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NOO0FEQU07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDSixtQkFBQTtFQUNBLHVCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuXG4gIGlvbi1jYXJke1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDEycmVtO1xuXG4gICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjM2JiZmFkO1xuICAgICAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAycHg7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cbn0iLCIuY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmRzIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDEycmVtO1xufVxuLmNhcmRzIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwJTtcbn1cbi5jYXJkcyBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkcyBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkcyBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1jYXJkLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjM2JiZmFkO1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_mascota_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/mascota.service */ "./src/app/services/mascota.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");








var Tab1Page = /** @class */ (function () {
    //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    function Tab1Page(toastController, _mascotaService, fb, nativeStorage, _route, _router) {
        this.toastController = toastController;
        this._mascotaService = _mascotaService;
        this.fb = fb;
        this.nativeStorage = nativeStorage;
        this._route = _route;
        this._router = _router;
        this.items = [];
        this.mascotas = [];
        this.noMore = false;
        this.page = 1;
        this.status = false;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].url;
    }
    Tab1Page.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.page = 1;
            _this.obtMascotas(_this.page);
            event.target.complete();
        }, 500);
    };
    Tab1Page.prototype.doFbLogout = function () {
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
    Tab1Page.prototype.ngOnInit = function () {
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
        this.obtMascotas(this.page);
    };
    Tab1Page.prototype.presentToast = function (txt) {
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
    Tab1Page.prototype.loadData = function (event) {
        var _this = this;
        this.status = false;
        setTimeout(function () {
            if (_this.mascotas.length != _this.total) {
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
    Tab1Page.prototype.obtMascotas = function (page, adding) {
        if (adding === void 0) { adding = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._mascotaService.obtMascotass(page).subscribe(function (response) {
                            if (response.mascotas && response.n == '1') {
                                //this.fotos = response.fot;
                                _this.total = response.total;
                                _this.pages = response.pages;
                                _this.itemsPerPage = response.itemsPerPage;
                                console.log(_this.total);
                                /* if(page > this.pages){
                                   this._router.navigate[('/login')]
                                 }*/
                                if (!adding) {
                                    _this.mascotas = response.mascotas;
                                }
                                else {
                                    var arrayA = _this.mascotas;
                                    var arrayB = response.mascotas;
                                    _this.mascotas = arrayA.concat(arrayB);
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
    Tab1Page.prototype.viewMore = function () {
        if (this.mascotas.length == this.total) {
            this.noMore = true;
        }
        else {
            this.page += 1;
        }
        this.obtMascotas(this.page, true);
    };
    Tab1Page.prototype.perfilMascota = function (id) {
        this._router.navigate(['perfil-mascota', id]);
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _services_mascota_service__WEBPACK_IMPORTED_MODULE_5__["MascotaService"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            providers: [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"], _services_mascota_service__WEBPACK_IMPORTED_MODULE_5__["MascotaService"]],
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _services_mascota_service__WEBPACK_IMPORTED_MODULE_5__["MascotaService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map