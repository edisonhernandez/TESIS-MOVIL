(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-registro-proceso-registro-proceso-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/registro-proceso/registro-proceso.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/registro-proceso/registro-proceso.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n        <ion-toolbar>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"registro\"></ion-back-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n        <div class=\"logo\">\r\n            <img src=\"../../assets/img/logo2.png\">\r\n          </div>\r\n      </ion-header>\r\n    \r\n\r\n<ion-content>\r\n        <div class=\"inicio\">\r\n          \r\n          <div class=\"options\"> \r\n          \r\n            <div class=\"titulo\" >\r\n              <h4>Solo un paso más</h4>\r\n             \r\n            </div>\r\n\r\n            <form id=\"formC\" #loginForm=\"ngForm\"  class=\"formContent\">\r\n\r\n                <div class=\"photoUser\">\r\n                    <img *ngIf=\"image == ''\" src=\"../../../assets/img/User_Circle.png\">\r\n                    <img *ngIf=\"image != ''\" src=\"{{image}}\">\r\n\r\n                    <ion-button  (click)=\"presentActionSheet()\"><ion-icon name=\"camera\"></ion-icon>\r\n\r\n                    </ion-button>\r\n                   \r\n                      \r\n                </div>\r\n               \r\n              <ion-item [class.formError]=\"!nombres.valid && nombres.touched\"> \r\n                <ion-label position=\"floating\">Nombres</ion-label>\r\n                <ion-input pattern=\"^[a-z A-Z]+$\" maxlength=\"25\" minlength=\"4\" required autofocus=\"true\" type=\"text\" id=\"nombres\" name=\"nombres\" #nombres=\"ngModel\" [(ngModel)]=\"usuarioAdoptante.nombres\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"formErrormsj\" *ngIf=\"!nombres.valid && nombres.touched\">Nombres no válidos</p>\r\n              <p class=\"smallText\" >No se permite símbolos o caracteres especiales.\r\n                </p>\r\n             \r\n\r\n              <ion-item [class.formError]=\"!apellidos.valid && apellidos.touched\">\r\n                <ion-label  position=\"floating\">Apellidos</ion-label>\r\n                <ion-input required pattern=\"^[a-z A-Z]+$\" maxlength=\"40\" minlength=\"5\" type=\"text\" id=\"apellidos\"  name=\"apellidos\" #apellidos=\"ngModel\" [(ngModel)]=\"usuarioAdoptante.apellidos\"></ion-input>\r\n              </ion-item>\r\n              <p class=\"formErrormsj\" *ngIf=\"!apellidos.valid && apellidos.touched\">Apellidos no válidos</p>\r\n\r\n              <p class=\"smallText\" >No se permite símbolos o caracteres especiales.\r\n                </p>\r\n              <ion-item [class.formError]=\"!edad.valid && edad.touched\">\r\n                <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\r\n                <ion-datetime required displayFormat=\"MM/DD/YYYY\" id=\"edad\"  name=\"edad\" #edad=\"ngModel\" [(ngModel)]=\"usuarioAdoptante.edad\" placeholder=\"Fecha de nacimiento\"></ion-datetime>\r\n              </ion-item>\r\n              <ion-button color=\"primary\" type=\"submit\" (click)=\"registrarUsuario()\"   class=\"bntIS\"  [disabled]=!loginForm.form.valid>Finalizar</ion-button>\r\n\r\n            </form>\r\n      \r\n           \r\n          </div>\r\n        </div>\r\n      </ion-content>\r\n     \r\n    \r\n     "

/***/ }),

/***/ "./src/app/components/registro-proceso/registro-proceso.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/registro-proceso/registro-proceso.module.ts ***!
  \************************************************************************/
/*! exports provided: RegistroProcesoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroProcesoPageModule", function() { return RegistroProcesoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_proceso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-proceso.page */ "./src/app/components/registro-proceso/registro-proceso.page.ts");







var routes = [
    {
        path: '',
        component: _registro_proceso_page__WEBPACK_IMPORTED_MODULE_6__["RegistroProcesoPage"]
    }
];
var RegistroProcesoPageModule = /** @class */ (function () {
    function RegistroProcesoPageModule() {
    }
    RegistroProcesoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_proceso_page__WEBPACK_IMPORTED_MODULE_6__["RegistroProcesoPage"]]
        })
    ], RegistroProcesoPageModule);
    return RegistroProcesoPageModule;
}());



/***/ }),

/***/ "./src/app/components/registro-proceso/registro-proceso.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/registro-proceso/registro-proceso.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background: none !important;\n  background-image: none !important;\n}\n\n.imgSlet {\n  width: 6rem;\n  height: 6rem;\n}\n\nion-header {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-header .logo {\n  margin: 5px;\n  width: 3.5rem;\n  height: 3rem;\n  border-radius: 50%;\n}\n\nion-header .logo img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.inicio {\n  height: 100%;\n}\n\n.inicio .options {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 2rem;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.inicio .options .titulo {\n  text-align: center;\n}\n\n.inicio .options .titulo h4 {\n  color: #3bbfad;\n  font-family: \"Righteous\", cursive;\n}\n\n.inicio .options .logo {\n  width: 7rem;\n  height: 7rem;\n  border-radius: 50%;\n}\n\n.inicio .options .logo img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.inicio .options .titulo {\n  text-align: center;\n  width: 100%;\n}\n\n.inicio .options .titulo h4 {\n  color: #3bbfad;\n}\n\n.inicio .options .formContent {\n  margin-top: 2rem;\n  width: 80%;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #a3a7a6;\n}\n\n.inicio .options .formContent .photoUser {\n  width: 100%;\n  text-align: center;\n  height: 6rem;\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.inicio .options .formContent .photoUser img {\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n}\n\n.inicio .options .formContent .photoUser ion-button {\n  position: absolute;\n  top: 12%;\n  left: 38.3%;\n  --background:#0000006b;\n  --border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n}\n\n.inicio .options .formContent .formError {\n  border: 1px solid #bf3b3b;\n  margin-bottom: 0;\n}\n\n.inicio .options .formContent .formErrormsj {\n  margin-top: 0;\n  color: #bf3b3b;\n}\n\n.inicio .options .formContent .smallText {\n  color: gray;\n  font-size: 12px;\n}\n\n.inicio .options .formContent ion-item {\n  border: 1px solid #a3a7a6;\n  width: 100%;\n  border-radius: 10px;\n  margin-bottom: 1rem;\n}\n\n.inicio .options .formContent .bntIS {\n  width: 100%;\n  text-transform: lowercase;\n}\n\n.inicio .options .formContent .bntIS p:first-letter {\n  text-transform: capitalize !important;\n}\n\n.inicio .options .btnsRedes {\n  padding-top: 1rem;\n}\n\n.inicio .options .btnsRedes p {\n  color: #a3a7a6;\n}\n\n.inicio .options .btnsRedes ion-button {\n  text-transform: lowercase;\n  width: 100%;\n  --background:transparent;\n  border: 1px solid #4267b2;\n  color: #4267b2;\n  border-radius: 5px;\n}\n\n.inicio .options .btnsRedes ion-button p:first-letter {\n  text-transform: capitalize !important;\n}\n\n.inicio .options .btnsRedes ion-button p {\n  color: #4267b2;\n}\n\n.inicio .options .btnsRedes ion-button ion-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Ryby1wcm9jZXNvL0M6XFxVc2Vyc1xcZGF2aWRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxEQVZFXFxwcm95ZWN0by10aXR1bGFjaW9uXFxmdW5kYWNpb25lcy1tb2JpbGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlZ2lzdHJvLXByb2Nlc29cXHJlZ2lzdHJvLXByb2Nlc28ucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJvLXByb2Nlc28vcmVnaXN0cm8tcHJvY2Vzby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwyQkFBQTtFQUNBLGlDQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0daOztBREdBO0VBRUksWUFBQTtBQ0RKOztBREdJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRlI7O0FESVE7RUFDSSxrQkFBQTtBQ0ZaOztBRElZO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0FDRmhCOztBRE1RO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0paOztBRE1ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0poQjs7QURRUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ05aOztBRFFZO0VBQ0ksY0FBQTtBQ05oQjs7QURVTTtFQUNFLGdCQUFBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNSVjs7QURZUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDVlo7O0FEV1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDVGhCOztBRFdZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ1RqQjs7QURZVTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUNWWjs7QURZUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDVlo7O0FEWVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ1ZaOztBRFlRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1ZaOztBRGFRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDWFo7O0FEWVk7RUFDSSxxQ0FBQTtBQ1ZoQjs7QURlUTtFQUNJLGlCQUFBO0FDYlo7O0FEY1k7RUFDSSxjQUFBO0FDWmhCOztBRGNZO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1poQjs7QURhZ0I7RUFDSSxxQ0FBQTtBQ1hwQjs7QURhZ0I7RUFDSSxjQUFBO0FDWHBCOztBRGFnQjtFQUNJLGlCQUFBO0FDWHBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Ryby1wcm9jZXNvL3JlZ2lzdHJvLXByb2Nlc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXItbWQ6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmltZ1NsZXR7XHJcbiAgICB3aWR0aDogNnJlbTtcclxuICAgIGhlaWdodDogNnJlbTtcclxufVxyXG5pb24taGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIFxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaW5pY2lve1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAub3B0aW9uc3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnRpdHVsb3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNiYmZhZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0dWxve1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNiYmZhZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtQ29udGVudHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhM2E3YTY7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnBob3RvVXNlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEyJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDM4LjMlO1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiMwMDAwMDA2YjtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgIHdpZHRoOjRyZW07XHJcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cmVtOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtRXJyb3J7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZjNiM2I7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtRXJyb3Jtc2p7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmYzYjNiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc21hbGxUZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2EzYTdhNjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm50SVN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICAgICAgICAmIHA6Zmlyc3QtbGV0dGVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLmJ0bnNSZWRlc3tcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2EzYTdhNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI2N2IyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MjY3YjI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAmIHA6Zmlyc3QtbGV0dGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI2N2IyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCIuaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdTbGV0IHtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24taGVhZGVyIC5sb2dvIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAzLjVyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW9uLWhlYWRlciAubG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbmljaW8ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5pY2lvIC5vcHRpb25zIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLnRpdHVsbyBoNCB7XG4gIGNvbG9yOiAjM2JiZmFkO1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmxvZ28ge1xuICB3aWR0aDogN3JlbTtcbiAgaGVpZ2h0OiA3cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5pY2lvIC5vcHRpb25zIC50aXR1bG8gaDQge1xuICBjb2xvcjogIzNiYmZhZDtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmZvcm1Db250ZW50IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTNhN2E2O1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQgLnBob3RvVXNlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQgLnBob3RvVXNlciBpbWcge1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW5pY2lvIC5vcHRpb25zIC5mb3JtQ29udGVudCAucGhvdG9Vc2VyIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiAzOC4zJTtcbiAgLS1iYWNrZ3JvdW5kOiMwMDAwMDA2YjtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG59XG4uaW5pY2lvIC5vcHRpb25zIC5mb3JtQ29udGVudCAuZm9ybUVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmM2IzYjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmZvcm1Db250ZW50IC5mb3JtRXJyb3Jtc2oge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogI2JmM2IzYjtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmZvcm1Db250ZW50IC5zbWFsbFRleHQge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQgaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhN2E2O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmZvcm1Db250ZW50IC5ibnRJUyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuLmluaWNpbyAub3B0aW9ucyAuZm9ybUNvbnRlbnQgLmJudElTIHA6Zmlyc3QtbGV0dGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLmluaWNpbyAub3B0aW9ucyAuYnRuc1JlZGVzIHAge1xuICBjb2xvcjogI2EzYTdhNjtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyNjdiMjtcbiAgY29sb3I6ICM0MjY3YjI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyBpb24tYnV0dG9uIHA6Zmlyc3QtbGV0dGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyBpb24tYnV0dG9uIHAge1xuICBjb2xvcjogIzQyNjdiMjtcbn1cbi5pbmljaW8gLm9wdGlvbnMgLmJ0bnNSZWRlcyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/registro-proceso/registro-proceso.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/registro-proceso/registro-proceso.page.ts ***!
  \**********************************************************************/
/*! exports provided: RegistroProcesoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroProcesoPage", function() { return RegistroProcesoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_usuarioAdoptante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/usuarioAdoptante */ "./src/app/models/usuarioAdoptante.ts");
/* harmony import */ var _models_usuarioLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/usuarioLogin */ "./src/app/models/usuarioLogin.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");













var RegistroProcesoPage = /** @class */ (function () {
    function RegistroProcesoPage(/*public _uploadService:UploadService,*/ nativeStorage, actionSheetController, camera, activeRoute, _route, _router, _usuarioService, toastController, loadingController) {
        this.nativeStorage = nativeStorage;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.activeRoute = activeRoute;
        this._route = _route;
        this._router = _router;
        this._usuarioService = _usuarioService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.image = '';
        this.usuarioAdoptante = new _models_usuarioAdoptante__WEBPACK_IMPORTED_MODULE_3__["UsuarioAdoptante"]("", "", "", "", "", null, "");
        this.usuarioLogin = new _models_usuarioLogin__WEBPACK_IMPORTED_MODULE_4__["UsuarioLogin"]("", "", "", "");
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].url;
    }
    RegistroProcesoPage.prototype.ngOnInit = function () {
        this.usuarioAdoptante.correo = this.activeRoute.snapshot.paramMap.get('user');
        this.usuarioAdoptante.password = this.activeRoute.snapshot.paramMap.get('pass');
    };
    RegistroProcesoPage.prototype.presentToast = function (txt) {
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
    RegistroProcesoPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Seleccionar foto',
                            buttons: [{
                                    text: 'Cámara',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.openCam();
                                    }
                                }, {
                                    text: 'Galería',
                                    icon: 'image',
                                    handler: function () {
                                        _this.openGallery();
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroProcesoPage.prototype.openCam = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //alert(imageData)
            _this.image = window.Ionic.WebView.convertFileSrc(imageData);
            _this.mensaje = imageData;
            _this.usuarioAdoptante.foto = imageData;
        }, function (err) {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    };
    RegistroProcesoPage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.image = window.Ionic.WebView.convertFileSrc(imageData);
            _this.mensaje = imageData;
            _this.usuarioAdoptante.foto = imageData;
        }, function (err) {
            // Handle error
        });
    };
    RegistroProcesoPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegistroProcesoPage.prototype.registrarUsuario = function () {
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
                        this._usuarioService.uploadUser(this.mensaje, this.usuarioAdoptante).then(function (response) {
                            _this.usuarioLogin.correo = _this.usuarioAdoptante.correo;
                            _this.usuarioLogin.password = _this.usuarioAdoptante.password;
                            _this._usuarioService.login(_this.usuarioLogin, 'true').subscribe(function (response) {
                                _this.usuarioAdoptante._id = response.usuario._id;
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
                                            id: _this.usuarioAdoptante._id,
                                            type: 'n',
                                            nombres: _this.usuarioAdoptante.nombres,
                                            apellidos: _this.usuarioAdoptante.apellidos,
                                            correo: _this.usuarioAdoptante.correo,
                                            image: _this.image
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
                        }, function (error) {
                            loading.dismiss();
                            _this.presentToast('Error al registrar, inténtalo nuevamente');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroProcesoPage.ctorParameters = function () { return [
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
    ]; };
    RegistroProcesoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro-proceso',
            template: __webpack_require__(/*! raw-loader!./registro-proceso.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/registro-proceso/registro-proceso.page.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] /*,UploadService*/],
            styles: [__webpack_require__(/*! ./registro-proceso.page.scss */ "./src/app/components/registro-proceso/registro-proceso.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
    ], RegistroProcesoPage);
    return RegistroProcesoPage;
}());



/***/ }),

/***/ "./src/app/models/usuarioLogin.ts":
/*!****************************************!*\
  !*** ./src/app/models/usuarioLogin.ts ***!
  \****************************************/
/*! exports provided: UsuarioLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioLogin", function() { return UsuarioLogin; });
var UsuarioLogin = /** @class */ (function () {
    function UsuarioLogin(_id, correo, password, gettoken) {
        this._id = _id;
        this.correo = correo;
        this.password = password;
        this.gettoken = gettoken;
    }
    UsuarioLogin.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: undefined }
    ]; };
    return UsuarioLogin;
}());



/***/ })

}]);
//# sourceMappingURL=components-registro-proceso-registro-proceso-module-es5.js.map