(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"logo\">\n      <img src=\"../../assets/img/logo2.png\">\n    </div>\n</ion-header>\n\n<ion-content >\n  <div class=\"inicio\">\n    \n    <div class=\"options\"> \n      <div class=\"titulo\" >\n        <h4>Inicio de sesión</h4>\n      </div>\n   <!--   <div class=\"btns2\">\n        <ion-button color=\"secondary\" (click)=\"RGFacebook()\" ><ion-icon name=\"logo-facebook\"></ion-icon> <span>Facebook</span></ion-button>\n        <ion-button color=\"primary\" (click)=\"form()\" > <ion-icon name=\"list\"></ion-icon> <span>Formulario</span></ion-button>\n       \n    </div>\n  -->\n    \n      <form #loginForm=\"ngForm\"  class=\"formContent\">\n        <ion-item [class.formError]=\"!correo.valid && correo.touched\">\n          <ion-label position=\"floating\">Correo electrónico</ion-label>\n          <ion-input required pattern=\"[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}\" autofocus=\"true\" type=\"email\" id=\"correo\" name=\"correo\" #correo=\"ngModel\" [(ngModel)]=\"usuarioLogin.correo\"></ion-input>\n        </ion-item>\n        <p class=\"formErrormsj\" *ngIf=\"!correo.valid && correo.touched\">Ingresa un correo válido</p>\n\n        <ion-item [class.formError]=\"!password.valid && password.touched\">\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input required type=\"password\" id=\"password\"  name=\"password\" #password=\"ngModel\" [(ngModel)]=\"usuarioLogin.password\"></ion-input>\n        </ion-item>\n        <div class=\"frgpss\">\n          <p  (click)=\"recover()\" shape=\"round\" class=\"bntIS\" >¿Olvidaste tu contraseña?</p>\n        </div>\n        <ion-button color=\"primary\"  (click)=\"login()\"   class=\"bntIS\"  [disabled]=!loginForm.form.valid><p>Iniciar sesión</p></ion-button>\n\n      </form>\n      <div class=\"btnsRedes\" >\n        <p>También puedes ingresar utilizando tus redes sociales</p>\n          <ion-button  (click)=\"doFbLogin()\"   class=\"bntIS\" > <ion-icon name=\"logo-facebook\"></ion-icon><p>Facebook</p></ion-button>\n\n      </div>\n     \n    </div>\n  </div>\n</ion-content>\n\n\n\n  "

/***/ }),

/***/ "./src/app/components/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/components/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/components/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background: none !important;\n  background-image: none !important;\n}\n\nion-header {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-header .logo {\n  margin: 5px;\n  width: 3.5rem;\n  height: 3rem;\n  border-radius: 50%;\n}\n\nion-header .logo img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.inicio {\n  height: 100%;\n}\n\n.inicio .options {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 2rem;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.inicio .options .titulo {\n  text-align: center;\n}\n\n.inicio .options .titulo h4 {\n  color: #3bbfad;\n  font-family: \"Righteous\", cursive;\n}\n\n.inicio .options .logo {\n  width: 7rem;\n  height: 7rem;\n  border-radius: 50%;\n}\n\n.inicio .options .logo img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.inicio .options .titulo {\n  text-align: center;\n  width: 100%;\n}\n\n.inicio .options .titulo h4 {\n  color: #3bbfad;\n}\n\n.inicio .options .formContent {\n  margin-top: 2rem;\n  width: 80%;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #a3a7a6;\n}\n\n.inicio .options .formContent .formError {\n  border: 1px solid #bf3b3b;\n  margin-bottom: 0;\n}\n\n.inicio .options .formContent .formErrormsj {\n  margin-top: 0;\n  color: #bf3b3b;\n}\n\n.inicio .options .formContent .smallText {\n  color: gray;\n  font-size: 12px;\n}\n\n.inicio .options .formContent ion-item {\n  border: 1px solid #a3a7a6;\n  width: 100%;\n  border-radius: 10px;\n  margin-bottom: 1rem;\n}\n\n.inicio .options .formContent .bntIS {\n  width: 100%;\n  text-transform: lowercase;\n}\n\n.inicio .options .formContent .bntIS p:first-letter {\n  text-transform: capitalize !important;\n}\n\n.inicio .options .btnsRedes {\n  padding: 1rem 2rem 0 2rem;\n}\n\n.inicio .options .btnsRedes p {\n  color: #a3a7a6;\n}\n\n.inicio .options .btnsRedes ion-button {\n  text-transform: lowercase;\n  width: 100%;\n  margin: 0;\n  --background:transparent;\n  border: 1px solid #4267b2;\n  color: #4267b2;\n  border-radius: 5px;\n}\n\n.inicio .options .btnsRedes ion-button p:first-letter {\n  text-transform: capitalize !important;\n}\n\n.inicio .options .btnsRedes ion-button p {\n  color: #4267b2;\n}\n\n.inicio .options .btnsRedes ion-button ion-icon {\n  margin-right: 5px;\n}\n\n.frgpss {\n  width: 100%;\n  text-align: center;\n}\n\n.frgpss p::first-letter {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGRhdmlkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcREFWRVxccHJveWVjdG8tdGl0dWxhY2lvblxcZnVuZGFjaW9uZXMtbW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0FKOztBRENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDWjs7QURLQTtFQUVJLFlBQUE7QUNISjs7QURLSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0pSOztBRE1RO0VBQ0ksa0JBQUE7QUNKWjs7QURNWTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtBQ0poQjs7QURRUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOWjs7QURRWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOaEI7O0FEVVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNSWjs7QURVWTtFQUNJLGNBQUE7QUNSaEI7O0FEWU07RUFDRSxnQkFBQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDVlY7O0FEZVU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDYlo7O0FEZVE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ2JaOztBRGVRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNiWjs7QURlUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNiWjs7QURnQlE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUNkWjs7QURlWTtFQUNJLHFDQUFBO0FDYmhCOztBRGtCUTtFQUNJLHlCQUFBO0FDaEJaOztBRGlCWTtFQUNJLGNBQUE7QUNmaEI7O0FEaUJZO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNmaEI7O0FEZ0JnQjtFQUNJLHFDQUFBO0FDZHBCOztBRGdCZ0I7RUFDSSxjQUFBO0FDZHBCOztBRGdCZ0I7RUFDSSxpQkFBQTtBQ2RwQjs7QUR1QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNwQko7O0FEcUJJO0VBQ0ksMEJBQUE7QUNuQlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGVyLW1kOmFmdGVye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIFxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaW5pY2lve1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAub3B0aW9uc3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnRpdHVsb3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNiYmZhZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0dWxve1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNiYmZhZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtQ29udGVudHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhM2E3YTY7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAuZm9ybUVycm9ye1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmYzYjNiO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybUVycm9ybXNqe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2JmM2IzYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNtYWxsVGV4dHtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhM2E3YTY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJudElTe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgICAgICAgJiBwOmZpcnN0LWxldHRlcntcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5idG5zUmVkZXN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MXJlbSAycmVtIDAgMnJlbTtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTNhN2E2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjY3YjI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQyNjdiMjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICYgcDpmaXJzdC1sZXR0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MjY3YjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5mcmdwc3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICYgcDo6Zmlyc3QtbGV0dGVye1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbn0iLCIuaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW9uLWhlYWRlciAubG9nbyB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMy41cmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1oZWFkZXIgLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW5pY2lvIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmluaWNpbyAub3B0aW9ucyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5pY2lvIC5vcHRpb25zIC50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5pY2lvIC5vcHRpb25zIC50aXR1bG8gaDQge1xuICBjb2xvcjogIzNiYmZhZDtcbiAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCIsIGN1cnNpdmU7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5sb2dvIHtcbiAgd2lkdGg6IDdyZW07XG4gIGhlaWdodDogN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmluaWNpbyAub3B0aW9ucyAubG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW5pY2lvIC5vcHRpb25zIC50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmluaWNpbyAub3B0aW9ucyAudGl0dWxvIGg0IHtcbiAgY29sb3I6ICMzYmJmYWQ7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5mb3JtQ29udGVudCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2EzYTdhNjtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmZvcm1Db250ZW50IC5mb3JtRXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmYzYjNiO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQgLmZvcm1FcnJvcm1zaiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjYmYzYjNiO1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQgLnNtYWxsVGV4dCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5mb3JtQ29udGVudCBpb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2E3YTY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQgLmJudElTIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5mb3JtQ29udGVudCAuYm50SVMgcDpmaXJzdC1sZXR0ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuLmluaWNpbyAub3B0aW9ucyAuYnRuc1JlZGVzIHtcbiAgcGFkZGluZzogMXJlbSAycmVtIDAgMnJlbTtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyBwIHtcbiAgY29sb3I6ICNhM2E3YTY7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5idG5zUmVkZXMgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyNjdiMjtcbiAgY29sb3I6ICM0MjY3YjI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyBpb24tYnV0dG9uIHA6Zmlyc3QtbGV0dGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyBpb24tYnV0dG9uIHAge1xuICBjb2xvcjogIzQyNjdiMjtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5mcmdwc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZyZ3BzcyBwOjpmaXJzdC1sZXR0ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/components/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_UsuarioLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/UsuarioLogin */ "./src/app/models/UsuarioLogin.ts");
/* harmony import */ var _models_usuarioAdoptante__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/usuarioAdoptante */ "./src/app/models/usuarioAdoptante.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");












var LoginPage = /** @class */ (function () {
    function LoginPage(nativeStorage, loadingController, fb, _route, _router, _usuarioService, toastController, alertController) {
        this.nativeStorage = nativeStorage;
        this.loadingController = loadingController;
        this.fb = fb;
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.proLogin = false;
        this.usuarioLogin = new _models_UsuarioLogin__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogin"]("", "", "", "");
        this.usuarioLogin2 = new _models_UsuarioLogin__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogin"]("", "", "", "");
        this.usuarioAdoptante = new _models_usuarioAdoptante__WEBPACK_IMPORTED_MODULE_4__["UsuarioAdoptante"]("", "", "", "", "", null, "");
        this.usuarioAdoptante2 = new _models_usuarioAdoptante__WEBPACK_IMPORTED_MODULE_4__["UsuarioAdoptante"]("", "", "", "", "", null, "");
        this.identity = this._usuarioService.obtIdentity();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].url;
        this.mensaje = "inicio";
    }
    LoginPage.prototype.ngOnInit = function () {
        /*if(this.identity != null){
          this._router.navigate(['tabs']);
        }*/
    };
    LoginPage.prototype.presentToast = function (txt) {
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
    LoginPage.prototype.presentAlertConfirm = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmar cuenta',
                            message: 'Hola' + '<strong>' + user.name + '</strong>' + ' tu cuenta de facebook no coinciden con nuestros registros. Deseas crear una cuenta?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Sí',
                                    handler: function () {
                                        _this.presentToast('proceso de registro');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentAlert = function (er, msj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: er,
                            subHeader: 'Subtitle',
                            message: msj,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Verificando...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this._usuarioService.login(this.usuarioLogin).subscribe(function (response) {
                            if (response.usuario && response.n == '3') {
                                console.log("entro");
                                _this.usuarioAdoptante2._id = response.usuario._id;
                                _this.presentToast(_this.usuarioAdoptante2._id);
                                _this.usuarioAdoptante2.nombres = response.usuario.nombres;
                                _this.usuarioAdoptante2.apellidos = response.usuario.apellidos;
                                _this.usuarioAdoptante2.correo = response.usuario.correo;
                                _this.usuarioAdoptante2.edad = response.usuario.edad;
                                _this.usuarioAdoptante2.foto = response.usuario.foto;
                                _this._usuarioService.login(_this.usuarioLogin, 'true').subscribe(function (response) {
                                    _this.token = response.token;
                                    console.log(_this.token);
                                    if (_this.token.length <= 0) {
                                        _this.presentToast('No se pudo guardar el token');
                                    }
                                    else {
                                        //PERSISTIR token del usuario
                                        _this.nativeStorage.setItem('token', {
                                            token: _this.token,
                                        })
                                            .then(function () {
                                            _this.nativeStorage.setItem('identity', {
                                                id: _this.usuarioAdoptante2._id,
                                                type: 'n',
                                                nombres: _this.usuarioAdoptante2.nombres,
                                                apellidos: _this.usuarioAdoptante2.apellidos,
                                                correo: _this.usuarioAdoptante2.correo,
                                                image: _this.usuarioAdoptante2.foto
                                            })
                                                .then(function () {
                                                loading.dismiss();
                                                _this.presentToast(_this.usuarioAdoptante2._id + " oken");
                                                _this._router.navigate(['tabs']);
                                            }, function (error) {
                                                loading.dismiss();
                                                _this.presentToast('Inténtalo nuevamente5');
                                            });
                                        }, function (error) {
                                            console.log(error);
                                            loading.dismiss();
                                            _this.presentToast('Inténtalo nuevamente8');
                                            _this._router.navigate(['tabs']);
                                        });
                                    }
                                }, function (error) {
                                    loading.dismiss();
                                    var errorMessage = error;
                                    _this.presentToast('Error token, inténtalo nuevamente.');
                                });
                            }
                            else if (response.n == '2') {
                                loading.dismiss();
                                _this.presentToast('Correo o contraseña incorrectos');
                            }
                        }, function (error) {
                            loading.dismiss();
                            var errorMessage = error;
                            _this.mensaje = error.message;
                            if (error.error.n == '0' || error.error.n == '1') {
                                _this.presentToast('Correo o contraseña incorrectos');
                            }
                            else if (error.error.n == '5') {
                                _this.presentToast('Error, intentalo nuevamente2');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        var rs = this.fb.login(['public_profile', 'email'])
            .then(function (res) { return _this.presentAlert('success', res); })
            .catch(function (e) { return _this.presentAlert('error1', e); });
    };
    LoginPage.prototype.doFbLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, permissions;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Verificando...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        permissions = new Array();
                        //the permissions your facebook app needs from the user
                        permissions = ["public_profile", "email"];
                        this.fb.login(permissions)
                            .then(function (response) {
                            var userId = response.authResponse.userID;
                            //Getting name and gender properties
                            _this.fb.api("/me?fields=name,email", permissions)
                                .then(function (user) {
                                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                                var us = new _models_UsuarioLogin__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogin"]("", "", "", "");
                                us.correo = user.email;
                                _this._usuarioService.validUser(us).subscribe(function (response) {
                                    var idus = response.usuario._id;
                                    if (response.n == '1') { //no registrado -- empieza proceso automatico de registro
                                        loading.dismiss();
                                        _this.usuarioAdoptante.nombres = user.name;
                                        _this.usuarioAdoptante.apellidos = "FBA";
                                        _this.usuarioAdoptante.correo = user.email;
                                        _this.usuarioAdoptante.password = "FBA";
                                        _this.usuarioAdoptante.foto = user.picture;
                                        _this.registrarUsuario(_this.usuarioAdoptante);
                                    }
                                    else if (response.n == '2') { //si el usuario ya existe
                                        //CONSEGUIR EL TOKEN
                                        _this.usuarioLogin2.correo = user.email;
                                        _this._usuarioService.loginFB(_this.usuarioLogin2, 'true').subscribe(function (response) {
                                            _this.token = response.token;
                                            console.log(_this.token);
                                            if (_this.token.length <= 0) {
                                                _this.presentToast('No se pudo guardar el token');
                                            }
                                            else {
                                                //PERSISTIR token del usuario
                                                _this.nativeStorage.setItem('token', {
                                                    token: _this.token,
                                                })
                                                    .then(function () {
                                                    _this.nativeStorage.setItem('identity', {
                                                        id: idus,
                                                        type: 'fb',
                                                        nombres: user.name,
                                                        correo: user.email,
                                                        image: user.picture
                                                    })
                                                        .then(function () {
                                                        loading.dismiss();
                                                        _this._router.navigate(['tabs']);
                                                    }, function (error) {
                                                        loading.dismiss();
                                                        _this.presentToast('Inténtalo nuevamente');
                                                    });
                                                }, function (error) {
                                                    loading.dismiss();
                                                    _this.presentToast('Inténtalo nuevamente');
                                                });
                                            }
                                        }, function (error) {
                                            loading.dismiss();
                                            var errorMessage = error;
                                            _this.presentToast('Error token, inténtalo nuevamente.');
                                        });
                                    }
                                }, function (error) {
                                    _this.mensaje = error.message;
                                    loading.dismiss();
                                    _this.presentToast('Intentalo nuevamente');
                                    console.log(error);
                                });
                            });
                        }, function (error) {
                            loading.dismiss();
                            _this.presentToast('ERROR, inténtalo nuevamente');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.registrarUsuario = function (usuarioAdoptante) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Creando tu cuenta...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this._usuarioService.registro(usuarioAdoptante).subscribe(function (response) {
                            if (response.n == '1') {
                                _this.usuarioLogin2.correo = usuarioAdoptante.correo;
                                _this.usuarioLogin2.password = usuarioAdoptante.password;
                                _this._usuarioService.loginFB(_this.usuarioLogin2, "true").subscribe(function (response) {
                                    _this.token = response.token;
                                    console.log(_this.token);
                                    if (_this.token.length <= 0) {
                                        _this.presentToast('No se pudo guardar el token');
                                    }
                                    else {
                                        //PERSISTIR token del usuario
                                        _this.nativeStorage.setItem('token', {
                                            token: _this.token,
                                        })
                                            .then(function () {
                                            _this.nativeStorage.setItem('identity', {
                                                nombres: usuarioAdoptante.nombres,
                                                correo: usuarioAdoptante.correo,
                                                image: usuarioAdoptante.foto
                                            })
                                                .then(function () {
                                                loading.dismiss();
                                                _this._router.navigate(['tabs']);
                                            }, function (error) {
                                                loading.dismiss();
                                                _this.presentToast('Inténtalo nuevamente');
                                            });
                                        }, function (error) {
                                            loading.dismiss();
                                            _this.presentToast('Inténtalo nuevamente');
                                        });
                                    }
                                }, function (error) {
                                    loading.dismiss();
                                    _this.presentToast('Error token, inténtalo nuevamente');
                                });
                            }
                        }, function (error) {
                            loading.dismiss();
                            _this.presentToast('Error al registrar, inténtalo nuevamente');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.page.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"]],
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/components/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-login-login-module-es5.js.map