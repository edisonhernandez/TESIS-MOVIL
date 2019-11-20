(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-registro-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/registro/registro.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/registro/registro.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"logo\">\n      <img src=\"../../assets/img/logo2.png\">\n    </div>\n</ion-header>\n\n<ion-content >\n  <div class=\"inicio\">\n    \n    <div class=\"options\"> \n     \n      <div class=\"titulo\" >\n        <h4>Únete a nuestra plataforma</h4>\n      </div>\n   <!--   <div class=\"btns2\">\n        <ion-button color=\"secondary\" (click)=\"RGFacebook()\" ><ion-icon name=\"logo-facebook\"></ion-icon> <span>Facebook</span></ion-button>\n        <ion-button color=\"primary\" (click)=\"form()\" > <ion-icon name=\"list\"></ion-icon> <span>Formulario</span></ion-button>\n       \n    </div>\n  -->\n      <form id=\"formC\" #loginForm=\"ngForm\" class=\"formContent\">\n       \n        <ion-item [class.formError]=\"!correo.valid && correo.touched || status == true\">\n          <ion-label   position=\"floating\">Correo electrónico</ion-label>\n          <ion-input  required pattern=\"[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}\" type=\"email\" id=\"correo\" name=\"correo\" #correo=\"ngModel\" [(ngModel)]=\"usuarioAdoptante.correo\"></ion-input>\n        </ion-item>\n        <p class=\"formErrormsj\" *ngIf=\"!correo.valid && correo.touched\">Ingresa un correo válido</p>\n        <p class=\"formErrormsj\" *ngIf=\"status == true\">Correo electrónico ya registrado</p>\n\n        <ion-item [class.formError]=\"!password.valid && password.touched\">\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input pattern=\"^(?=.*\\d)(?=.*[\\u0021-\\u002b\\u003c-\\u0040])(?=.*[A-Z])(?=.*[a-z])\\S{8,30}$\" required minlength=\"8\" maxlength=\"30\"  type=\"password\" id=\"password\"  name=\"password\" #password=\"ngModel\" [(ngModel)]=\"usuarioAdoptante.password\"></ion-input>\n        </ion-item>\n        <p class=\"formErrormsj\" *ngIf=\"!password.valid && password.touched\">Contraseña no válida</p>\n        <p class=\"smallText\">La contraseña debe contener entre 8-20 caracteres, al menos 1 letra mayúscula, 1 letra minúscula, 1 número y un caracter no alfanumérico.\n          </p>\n\n        <ion-button color=\"primary\"  (click)=\"registroProcess()\"   class=\"bntIS\"  [disabled]=!loginForm.form.valid><p>Continuar</p></ion-button>\n\n      </form>\n\n      <div class=\"btnsRedes\" >\n        <p>También puedes ingresar utilizando tus redes sociales</p>\n          <ion-button  (click)=\"doFbLogin()\"   class=\"bntIS\" > <ion-icon name=\"logo-facebook\"></ion-icon><p>Facebook</p></ion-button>\n\n      </div>\n     \n    </div>\n  </div>\n</ion-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/registro/registro.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/registro/registro.module.ts ***!
  \********************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/components/registro/registro.page.ts");







var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]
    }
];
var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/components/registro/registro.page.scss":
/*!********************************************************!*\
  !*** ./src/app/components/registro/registro.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background: none !important;\n  background-image: none !important;\n}\n\nion-header {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-header .logo {\n  margin: 5px;\n  width: 3.5rem;\n  height: 3rem;\n  border-radius: 50%;\n}\n\nion-header .logo img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.inicio {\n  height: 100%;\n}\n\n.inicio .options {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 2rem;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.inicio .options .titulo {\n  text-align: center;\n}\n\n.inicio .options .titulo h4 {\n  color: #3bbfad;\n  font-family: \"Righteous\", cursive;\n}\n\n.inicio .options .logo {\n  width: 7rem;\n  height: 7rem;\n  border-radius: 50%;\n}\n\n.inicio .options .logo img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.inicio .options .titulo {\n  text-align: center;\n  width: 100%;\n}\n\n.inicio .options .titulo h4 {\n  color: #3bbfad;\n}\n\n.inicio .options .formContent {\n  margin-top: 2rem;\n  width: 80%;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #a3a7a6;\n}\n\n.inicio .options .formContent .formError {\n  border: 1px solid #bf3b3b;\n  margin-bottom: 0;\n}\n\n.inicio .options .formContent .formErrormsj {\n  margin-top: 0;\n  color: #bf3b3b;\n}\n\n.inicio .options .formContent .smallText {\n  color: gray;\n  font-size: 12px;\n}\n\n.inicio .options .formContent ion-item {\n  border: 1px solid #a3a7a6;\n  width: 100%;\n  border-radius: 10px;\n  margin-bottom: 1rem;\n}\n\n.inicio .options .formContent .bntIS {\n  width: 100%;\n  text-transform: lowercase;\n}\n\n.inicio .options .formContent .bntIS p:first-letter {\n  text-transform: capitalize !important;\n}\n\n.inicio .options .btnsRedes {\n  padding: 1rem 2rem 0 2rem;\n}\n\n.inicio .options .btnsRedes p {\n  color: #a3a7a6;\n}\n\n.inicio .options .btnsRedes ion-button {\n  text-transform: lowercase;\n  width: 100%;\n  margin: 0;\n  --background:transparent;\n  border: 1px solid #4267b2;\n  color: #4267b2;\n  border-radius: 5px;\n}\n\n.inicio .options .btnsRedes ion-button p:first-letter {\n  text-transform: capitalize !important;\n}\n\n.inicio .options .btnsRedes ion-button p {\n  color: #4267b2;\n}\n\n.inicio .options .btnsRedes ion-button ion-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Ryby9DOlxcVXNlcnNcXGRhdmlkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcREFWRVxccHJveWVjdG8tdGl0dWxhY2lvblxcZnVuZGFjaW9uZXMtbW9iaWxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZWdpc3Ryb1xccmVnaXN0cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0FKOztBRENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDWjs7QURLQTtFQUVJLFlBQUE7QUNISjs7QURLSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0pSOztBRE1RO0VBQ0ksa0JBQUE7QUNKWjs7QURNWTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtBQ0poQjs7QURRUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOWjs7QURRWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOaEI7O0FEVVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNSWjs7QURVWTtFQUNJLGNBQUE7QUNSaEI7O0FEWU07RUFDRSxnQkFBQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDVlY7O0FEZVU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDYlo7O0FEZVE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ2JaOztBRGVRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNiWjs7QURlUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNiWjs7QURnQlE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUNkWjs7QURlWTtFQUNJLHFDQUFBO0FDYmhCOztBRGtCUTtFQUNJLHlCQUFBO0FDaEJaOztBRGlCWTtFQUNJLGNBQUE7QUNmaEI7O0FEaUJZO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNmaEI7O0FEZ0JnQjtFQUNJLHFDQUFBO0FDZHBCOztBRGdCZ0I7RUFDSSxjQUFBO0FDZHBCOztBRGdCZ0I7RUFDSSxpQkFBQTtBQ2RwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXItbWQ6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDMuNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbmljaW97XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5vcHRpb25ze1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAudGl0dWxve1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2JiZmFkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogN3JlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXR1bG97XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2JiZmFkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLmZvcm1Db250ZW50e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2EzYTdhNjtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgIC5mb3JtRXJyb3J7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZjNiM2I7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtRXJyb3Jtc2p7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmYzYjNiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc21hbGxUZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2EzYTdhNjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm50SVN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICAgICAgICAmIHA6Zmlyc3QtbGV0dGVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLmJ0bnNSZWRlc3tcclxuICAgICAgICAgICAgcGFkZGluZzoxcmVtIDJyZW0gMCAycmVtO1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhM2E3YTZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQyNjdiMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI2N2IyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgJiBwOmZpcnN0LWxldHRlcntcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQyNjdiMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIiwiLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi1oZWFkZXIgLmxvZ28ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDMuNXJlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24taGVhZGVyIC5sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmluaWNpbyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbmljaW8gLm9wdGlvbnMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmluaWNpbyAub3B0aW9ucyAudGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluaWNpbyAub3B0aW9ucyAudGl0dWxvIGg0IHtcbiAgY29sb3I6ICMzYmJmYWQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xufVxuLmluaWNpbyAub3B0aW9ucyAubG9nbyB7XG4gIHdpZHRoOiA3cmVtO1xuICBoZWlnaHQ6IDdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmluaWNpbyAub3B0aW9ucyAudGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLnRpdHVsbyBoNCB7XG4gIGNvbG9yOiAjM2JiZmFkO1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhM2E3YTY7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5mb3JtQ29udGVudCAuZm9ybUVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmM2IzYjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmZvcm1Db250ZW50IC5mb3JtRXJyb3Jtc2oge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogI2JmM2IzYjtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmZvcm1Db250ZW50IC5zbWFsbFRleHQge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQgaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhN2E2O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmZvcm1Db250ZW50IC5ibnRJUyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQgLmJudElTIHA6Zmlyc3QtbGV0dGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyB7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbSAwIDJyZW07XG59XG4uaW5pY2lvIC5vcHRpb25zIC5idG5zUmVkZXMgcCB7XG4gIGNvbG9yOiAjYTNhN2E2O1xufVxuLmluaWNpbyAub3B0aW9ucyAuYnRuc1JlZGVzIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MjY3YjI7XG4gIGNvbG9yOiAjNDI2N2IyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5idG5zUmVkZXMgaW9uLWJ1dHRvbiBwOmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5idG5zUmVkZXMgaW9uLWJ1dHRvbiBwIHtcbiAgY29sb3I6ICM0MjY3YjI7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5idG5zUmVkZXMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/registro/registro.page.ts":
/*!******************************************************!*\
  !*** ./src/app/components/registro/registro.page.ts ***!
  \******************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_usuarioAdoptante__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/usuarioAdoptante */ "./src/app/models/usuarioAdoptante.ts");
/* harmony import */ var _models_UsuarioLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/UsuarioLogin */ "./src/app/models/UsuarioLogin.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");












var RegistroPage = /** @class */ (function () {
    function RegistroPage(nativeStorage, fb, _route, _router, _usuarioService, toastController, loadingController) {
        this.nativeStorage = nativeStorage;
        this.fb = fb;
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.slideOpts = {
            lock: false,
        };
        this.proFR = false;
        this.proRegistro = false;
        this.usuarioAdoptante = new _models_usuarioAdoptante__WEBPACK_IMPORTED_MODULE_2__["UsuarioAdoptante"]("", "", "", "", "", null, "");
        this.usuarioAdoptante2 = new _models_usuarioAdoptante__WEBPACK_IMPORTED_MODULE_2__["UsuarioAdoptante"]("", "", "", "", "", null, "");
        this.usuarioLogin = new _models_UsuarioLogin__WEBPACK_IMPORTED_MODULE_3__["UsuarioLogin"]("", "", "", "");
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].url;
        this.status = false;
    }
    RegistroPage.prototype.ngOnInit = function () {
        /*if(this.identity != null){
          this._router.navigate(['tabs']);
        }*/
        this.prob();
    };
    RegistroPage.prototype.presentToast = function (txt) {
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
    RegistroPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegistroPage.prototype.registroProcess = function () {
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
                        this._usuarioService.validUser(this.usuarioAdoptante).subscribe(function (response) {
                            if (response.n == '1') {
                                loading.dismiss();
                                _this._router.navigate(['registro-proceso', _this.usuarioAdoptante.correo, _this.usuarioAdoptante.password]);
                            }
                            else if (response.n == '2') {
                                _this.status = true;
                                loading.dismiss();
                            }
                        }, function (error) {
                            _this.mensaje = error.message;
                            loading.dismiss();
                            _this.presentToast('Intentalo nuevamente');
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage.prototype.prob = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_6__("#correo").keyup(function () {
            _this.status = false;
        });
    };
    RegistroPage.prototype.doFbLogin = function () {
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
                                    if (response.n == '1') { //no registrado -- empieza proceso automatico de registro
                                        loading.dismiss();
                                        _this.usuarioAdoptante2._id = response.usuario._id;
                                        _this.usuarioAdoptante2.nombres = user.name;
                                        _this.usuarioAdoptante2.apellidos = "FBA";
                                        _this.usuarioAdoptante2.correo = user.email;
                                        _this.usuarioAdoptante2.password = "FBA";
                                        _this.usuarioAdoptante2.foto = user.picture;
                                        _this.registrarUsuario(_this.usuarioAdoptante2);
                                    }
                                    else if (response.n == '2') {
                                        //existe usuario, proceso de login
                                        _this.usuarioLogin.correo = user.email;
                                        _this._usuarioService.loginFB(_this.usuarioLogin, 'true').subscribe(function (response) {
                                            var idus = response.usuario._id;
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
    RegistroPage.prototype.registrarUsuario = function (usuarioAdoptante) {
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
                                _this.usuarioLogin.correo = usuarioAdoptante.correo;
                                _this.usuarioLogin.password = usuarioAdoptante.password;
                                _this._usuarioService.loginFB(_this.usuarioLogin, "true").subscribe(function (response) {
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
    RegistroPage.ctorParameters = function () { return [
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeStorage"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
    ]; };
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/registro/registro.page.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]],
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/components/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeStorage"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-registro-registro-module-es5.js.map