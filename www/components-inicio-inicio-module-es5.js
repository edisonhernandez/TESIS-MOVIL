(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inicio/inicio.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inicio/inicio.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <div class=\"logo\">\n        <img src=\"../../assets/img/logo.png\">\n      </div>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"slidesContainer\">\n        \n        <ion-slide>\n           \n          <div class=\"contentSlide\">\n              <div class=\"textS\">\n                  <h1>ADOPTA</h1>\n                  <p>Un amigo te espera</p>\n              </div>\n              \n              \n          </div>\n          \n        </ion-slide>\n        <ion-slide>\n          \n          <div class=\"contentSlide\">\n              <div class=\"textS\">\n                  <h1>VOLUNTARIO</h1>\n                  <p>Puedes ayudar en emergencias</p>\n              </div>\n             \n          </div>\n        </ion-slide>\n        <ion-slide>\n         \n          <div class=\"contentSlide\">\n              <div class=\"textS\">\n                  <h1>DONACIONES</h1>\n                  <p>Con tu ayuda es posible salvar a nuestros amigitos</p>\n              </div>\n              \n            \n          </div>\n        </ion-slide>\n      </ion-slides>\n      <div class=\"btnsIR\">\n          <ion-button  href=\"/login\" shape=\"round\" class=\"bntIS\" color=\"light\"><p>Iniciar sesión</p></ion-button>\n        <ion-button color=\"primary\" href=\"/registro\" shape=\"round\" class=\"bntRG\"><p>Registrarme</p></ion-button>\n      \n      \n      </div>\n\n   <!--<div class=\"inicio\">\n      \n      <div class=\"options\">\n        <div class=\"logo\">\n          <img src=\"../../assets/img/logo.png\">\n        </div>\n        <div class=\"btns\">\n            <ion-button  href=\"/login\" shape=\"round\" class=\"bntIS\" color=\"light\">Iniciar sesión</ion-button>\n            <ion-button color=\"primary\" href=\"/registro\" shape=\"round\" class=\"bntRG\">Registrarme</ion-button>\n        </div>\n      </div>\n    </div>-->\n  </ion-content>\n\n  \n\n  \n  "

/***/ }),

/***/ "./src/app/components/inicio/inicio.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/inicio/inicio.module.ts ***!
  \****************************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/components/inicio/inicio.page.ts");







var routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]
    }
];
var InicioPageModule = /** @class */ (function () {
    function InicioPageModule() {
    }
    InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
        })
    ], InicioPageModule);
    return InicioPageModule;
}());



/***/ }),

/***/ "./src/app/components/inicio/inicio.page.scss":
/*!****************************************************!*\
  !*** ./src/app/components/inicio/inicio.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.inicio{\n    background-image: url(\"../../../assets/img/puppy-wallpaper-iphone.jpg\");\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    height: 100%;\n\n    .options{\n        height: 100%;\n        width: 100%;\n        margin: 0;\n        background-color: rgba(0, 0, 0, 0.72);\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n\n        .logo{\n            width: 7rem;\n            height: 7rem;\n            border-radius: 50%;\n\n            img{\n                width: 100%;\n                height: 100%;\n                border-radius: 50%;\n\n            }\n        }\n\n\n        .btns{\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            width: 80%;\n\n            ion-button{\n                width: 100%;\n            }\n\n        }\n    }\n\n}*/\nh1, h2, h3, h4, h5, p {\n  padding: 0;\n  margin: 0;\n}\n.logo {\n  width: 100%;\n  text-align: start;\n  height: 7rem;\n  padding: 1rem;\n  position: absolute;\n  top: 0;\n  z-index: 1020;\n  background: black;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8547794118)), color-stop(68%, rgba(9, 9, 9, 0.4514180672)), to(rgba(255, 255, 255, 0.0004376751)));\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8547794118) 0%, rgba(9, 9, 9, 0.4514180672) 68%, rgba(255, 255, 255, 0.0004376751) 100%);\n}\n.logo img {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 50%;\n}\n.slidesContainer {\n  height: 100%;\n}\n.slidesContainer ion-slide {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0;\n}\n.slidesContainer ion-slide:nth-child(1) {\n  background-image: url('52a3b22a15457a4472eca1673d8d6076.jpg');\n  background-size: 100% 100%;\n  background-position: center;\n}\n.slidesContainer ion-slide:nth-child(2) {\n  background-image: url('426f46a7d0569db433ddc7aa905c6a41.jpg');\n  background-size: 125% 100%;\n  background-position: center;\n}\n.slidesContainer ion-slide:nth-child(3) {\n  background-image: url('d1add943796e090d5fe6daf088f06ca5.jpg');\n  background-size: 100% 100%;\n  background-position: center;\n}\n.slidesContainer .contentSlide {\n  width: 100%;\n  height: 18rem;\n  position: absolute;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  background: black;\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.8547794118)), color-stop(68%, rgba(9, 9, 9, 0.4514180672)), to(rgba(255, 255, 255, 0.0004376751)));\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8547794118) 0%, rgba(9, 9, 9, 0.4514180672) 68%, rgba(255, 255, 255, 0.0004376751) 100%);\n}\n.slidesContainer .contentSlide .textS {\n  width: 100%;\n  padding: 0 2rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: start;\n}\n.slidesContainer .contentSlide .textS h1 {\n  color: #3bbfad;\n  font-family: \"Righteous\", cursive;\n}\n.slidesContainer .contentSlide .textS p {\n  color: white;\n}\n.btnsIR {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  z-index: 1020;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0 2rem 2rem 2rem;\n}\n.btnsIR ion-button:nth-child(1) {\n  text-transform: lowercase;\n}\n.btnsIR ion-button:nth-child(2) {\n  text-transform: lowercase;\n}\n.btnsIR p:first-letter {\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmljaW8vQzpcXFVzZXJzXFxkYXZpZFxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXERBVkVcXHByb3llY3RvLXRpdHVsYWNpb25cXGZ1bmRhY2lvbmVzLW1vYmlsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW5pY2lvXFxpbmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQThDQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDQ0o7QURDQTtFQUVJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Qsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNDLGlCQUFBO0VBQ0osbUxBQUE7RUFBQSw0SUFBQTtBQ0NBO0FERUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7QUNESjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsVUFBQTtBQ0RSO0FER0k7RUFDSSw2REFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNEUjtBRElJO0VBQ0ksNkRBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDRlI7QURJSTtFQUNJLDZEQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0ZSO0FESUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0osU0FBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1MQUFBO0VBQUEsMElBQUE7QUNGUjtBRElRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtBQ0ZaO0FER1k7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7QUNEaEI7QURJWTtFQUNJLFlBQUE7QUNGaEI7QURTQTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO0FDUEo7QURRSTtFQUNJLHlCQUFBO0FDTlI7QURRSTtFQUNJLHlCQUFBO0FDTlI7QURRSTtFQUNJLHFDQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouaW5pY2lve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wdXBweS13YWxscGFwZXItaXBob25lLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAub3B0aW9uc3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICB3aWR0aDogN3JlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgLmJ0bnN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG5cclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59Ki9cclxuaDEsaDIsaDMsaDQsaDUscHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmxvZ297XHJcbiAgICAgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDA7XHJcbiAgIHotaW5kZXg6IDEwMjA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMCwwLDAuODU0Nzc5NDExNzY0NzA1OCkgMCUsIHJnYmEoOSw5LDksMC40NTE0MTgwNjcyMjY4OTA3KSA2OCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wMDA0Mzc2NzUwNzAwMjgwMDk2NSkgMTAwJSk7XHJcblxyXG5cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgIH1cclxufVxyXG4uc2xpZGVzQ29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBcclxuICAgIGlvbi1zbGlkZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgJiBpb24tc2xpZGU6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvNTJhM2IyMmExNTQ1N2E0NDcyZWNhMTY3M2Q4ZDYwNzYuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICYgaW9uLXNsaWRlOm50aC1jaGlsZCgyKXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nLzQyNmY0NmE3ZDA1NjlkYjQzM2RkYzdhYTkwNWM2YTQxLmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEyNSUgMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmIGlvbi1zbGlkZTpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9kMWFkZDk0Mzc5NmUwOTBkNWZlNmRhZjA4OGYwNmNhNS5qcGdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRTbGlkZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsMCwwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwwLjg1NDc3OTQxMTc2NDcwNTgpIDAlLCByZ2JhKDksOSw5LDAuNDUxNDE4MDY3MjI2ODkwNykgNjglLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDAwNDM3Njc1MDcwMDI4MDA5NjUpIDEwMCUpO1xyXG5cclxuICAgICAgICAudGV4dFN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2JiZmFkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG4uYnRuc0lSe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTAyMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAycmVtIDJyZW0gMnJlbTtcclxuICAgICYgaW9uLWJ1dHRvbjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIH1cclxuICAgICYgaW9uLWJ1dHRvbjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIH1cclxuICAgICYgcDpmaXJzdC1sZXR0ZXJ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8qLmluaWNpb3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3B1cHB5LXdhbGxwYXBlci1pcGhvbmUuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5vcHRpb25ze1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5sb2dve1xuICAgICAgICAgICAgd2lkdGg6IDdyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5idG5ze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbn0qL1xuaDEsIGgyLCBoMywgaDQsIGg1LCBwIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgaGVpZ2h0OiA3cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAyMDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMC44NTQ3Nzk0MTE4KSAwJSwgcmdiYSg5LCA5LCA5LCAwLjQ1MTQxODA2NzIpIDY4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwMDQzNzY3NTEpIDEwMCUpO1xufVxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2xpZGVzQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNsaWRlc0NvbnRhaW5lciBpb24tc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMDtcbn1cbi5zbGlkZXNDb250YWluZXIgaW9uLXNsaWRlOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvNTJhM2IyMmExNTQ1N2E0NDcyZWNhMTY3M2Q4ZDYwNzYuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnNsaWRlc0NvbnRhaW5lciBpb24tc2xpZGU6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy80MjZmNDZhN2QwNTY5ZGI0MzNkZGM3YWE5MDVjNmE0MS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTI1JSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uc2xpZGVzQ29udGFpbmVyIGlvbi1zbGlkZTpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2QxYWRkOTQzNzk2ZTA5MGQ1ZmU2ZGFmMDg4ZjA2Y2E1LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zbGlkZXNDb250YWluZXIgLmNvbnRlbnRTbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjg1NDc3OTQxMTgpIDAlLCByZ2JhKDksIDksIDksIDAuNDUxNDE4MDY3MikgNjglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDAwNDM3Njc1MSkgMTAwJSk7XG59XG4uc2xpZGVzQ29udGFpbmVyIC5jb250ZW50U2xpZGUgLnRleHRTIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4uc2xpZGVzQ29udGFpbmVyIC5jb250ZW50U2xpZGUgLnRleHRTIGgxIHtcbiAgY29sb3I6ICMzYmJmYWQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xufVxuLnNsaWRlc0NvbnRhaW5lciAuY29udGVudFNsaWRlIC50ZXh0UyBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuc0lSIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDIwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMnJlbSAycmVtIDJyZW07XG59XG4uYnRuc0lSIGlvbi1idXR0b246bnRoLWNoaWxkKDEpIHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5idG5zSVIgaW9uLWJ1dHRvbjpudGgtY2hpbGQoMikge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuLmJ0bnNJUiBwOmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/inicio/inicio.page.ts":
/*!**************************************************!*\
  !*** ./src/app/components/inicio/inicio.page.ts ***!
  \**************************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");



var InicioPage = /** @class */ (function () {
    function InicioPage(fb) {
        this.fb = fb;
        this.slidesOpts = {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            on: {
                beforeInit: function () {
                    var swiper = this;
                    swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
                    swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate: function () {
                    var swiper = this;
                    var swiperWidth = swiper.width, swiperHeight = swiper.height, slides = swiper.slides, $wrapperEl = swiper.$wrapperEl, slidesSizesGrid = swiper.slidesSizesGrid, $ = swiper.$;
                    var params = swiper.params.coverflowEffect;
                    var isHorizontal = swiper.isHorizontal();
                    var transform$$1 = swiper.translate;
                    var center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                    var rotate = isHorizontal ? params.rotate : -params.rotate;
                    var translate = params.depth;
                    // Each slide offset from center
                    for (var i = 0, length_1 = slides.length; i < length_1; i += 1) {
                        var $slideEl = slides.eq(i);
                        var slideSize = slidesSizesGrid[i];
                        var slideOffset = $slideEl[0].swiperSlideOffset;
                        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
                        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                        var ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = center + "px 50%";
                    }
                },
                setTransition: function (duration) {
                    var swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                }
            }
        };
    }
    InicioPage.prototype.ngOnInit = function () {
    };
    InicioPage.prototype.login = function () {
        this.fb.login(['public_profile', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', res); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    InicioPage.ctorParameters = function () { return [
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"] }
    ]; };
    InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/inicio/inicio.page.html"),
            providers: [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"]],
            styles: [__webpack_require__(/*! ./inicio.page.scss */ "./src/app/components/inicio/inicio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"]])
    ], InicioPage);
    return InicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-inicio-inicio-module-es5.js.map