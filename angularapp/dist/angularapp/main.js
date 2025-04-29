(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/coder/project/workspace/angularapp/src/main.ts */"zUnb");


/***/ }),

/***/ "7AdY":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorComponent {
    constructor() {
        this.errorCode = 404;
        this.messageTitle = '';
        this.messageBody = '';
    }
    ngOnInit() {
        this.setErrorMessage();
    }
    setErrorMessage() {
        switch (this.errorCode) {
            case 404:
                this.messageTitle = 'Something Went Wrong';
                this.messageBody = "We're sorry, but an error occured. Please try again later.";
                break;
            case 500:
                this.messageTitle = 'Something Went Wrong';
                this.messageBody = "We're sorry, but an error occured. Please try again later.";
                break;
            default:
                this.messageTitle = 'Unknown Error';
                this.messageBody = 'An unexpected error occurred. Please try again later.';
        }
    }
    goBack() { window.history.back(); }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], inputs: { errorCode: "errorCode" }, decls: 9, vars: 2, consts: [[1, "error-handler-container"], ["src", "assets/Finance Hub (1).png", "alt", "Logo", 1, "logo"], [1, "error-content"], [1, "back-button", 3, "click"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_7_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageBody);
    } }, styles: [".error-handler-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    background: linear-gradient(135deg, #45baed, #fcff3d);\n    color: #fff;\n    text-align: center;\n  }\n  \n  .logo[_ngcontent-%COMP%] {\n    max-width: 250px; \n    margin-bottom: 20px;\n    animation: fadeIn 1.5s ease-in-out;\n  }\n  \n  .error-content[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.5);\n    padding: 20px;\n    border-radius: 10px;\n    animation: slideIn 0.5s ease-in-out;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n    font-size: 36px;\n    margin-bottom: 10px;\n  }\n  \n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 20px;\n  }\n  \n  .back-button[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #45baed;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 16px;\n    transition: background-color 0.3s ease;\n  }\n  \n  .back-button[_ngcontent-%COMP%]:hover {\n    background-color: #45baed;\n    color: #fff;\n  }\n  \n  \n  \n  @keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n  }\n  \n  @keyframes slideIn {\n    from {\n        transform: translateY(50px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixxREFBcUQ7SUFDckQsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQixFQUFFLDhDQUE4QztJQUNoRSxtQkFBbUI7SUFDbkIsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7RUFFQSxlQUFlOztFQUNmO0lBQ0U7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtFQUNGOztFQUVBO0lBQ0U7UUFDSSwyQkFBMkI7UUFDM0IsVUFBVTtJQUNkO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItaGFuZGxlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzQ1YmFlZCwgI2ZjZmYzZCk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubG9nbyB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDsgLyogSW5jcmVhc2VkIHRoZSBtYXgtd2lkdGggZm9yIGEgbGFyZ2VyIGxvZ28gKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDEuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5lcnJvci1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICM0NWJhZWQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgfVxuICBcbiAgLmJhY2stYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDViYWVkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvKiBBbmltYXRpb25zICovXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return []; }, { errorCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7lJs":
/*!*********************************************************!*\
  !*** ./src/app/services/planapplicationform.service.ts ***!
  \*********************************************************/
/*! exports provided: PlanapplicationformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanapplicationformService", function() { return PlanapplicationformService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class PlanapplicationformService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.plan = {
            AppliedAmount: 0,
            Status: '',
            ApplicationDate: '',
            Remarks: '',
            ProofDocument: '',
            UserId: 0,
            SavingsPlanId: 0
        };
    }
    addPlanApplication(plan) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Token')
            })
        };
        return this.http.post(`${this.apiUrl}/api/PlanApplication/`, plan, httpOptions);
    }
    deletePlanApplication(planId) {
        console.log("delete plan in serv ", planId);
        return this.http.delete(`${this.apiUrl}/api/PlanApplication/${planId}`);
    }
    getAppliedPlans(userId) {
        return this.http.get(`${this.apiUrl}/api/PlanApplication/user/${userId}`);
    }
    getAllPlanApplications() {
        return this.http.get(`${this.apiUrl}/api/PlanApplication`);
    }
    updatePlanApplication(planId, updatedData) {
        return this.http.put(`${this.apiUrl}/api/PlanApplication/${planId}`, updatedData);
    }
    getPlanApplicationsBySavingsPlanIdAndUserId(savingsPlanId, userId) {
        return this.http.get(`${this.apiUrl}/api/PlanApplication/savingsPlan/${savingsPlanId}/user/${userId}`);
    }
}
PlanapplicationformService.ɵfac = function PlanapplicationformService_Factory(t) { return new (t || PlanapplicationformService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PlanapplicationformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlanapplicationformService, factory: PlanapplicationformService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlanapplicationformService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8rMt":
/*!***************************************************************************!*\
  !*** ./src/app/components/userappliedplans/userappliedplans.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserappliedplansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserappliedplansComponent", function() { return UserappliedplansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_planapplicationform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/planapplicationform.service */ "7lJs");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _usernav_usernav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../usernav/usernav.component */ "W+t2");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error/error.component */ "7AdY");









function UserappliedplansComponent_div_2_table_3_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserappliedplansComponent_div_2_table_3_tr_25_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const planApplication_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r10.showPopup = true; return ctx_r10.popupImageSrc = "../../../" + planApplication_r8.ProofDocument; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserappliedplansComponent_div_2_table_3_tr_25_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const planApplication_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.confirmDelete(planApplication_r8.PlanApplicationId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planApplication_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planApplication_r8.SavingsPlan == null ? null : planApplication_r8.SavingsPlan.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planApplication_r8.AppliedAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 8, planApplication_r8.ApplicationDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planApplication_r8.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planApplication_r8.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planApplication_r8.User == null ? null : planApplication_r8.User.Username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r7.isPending(planApplication_r8.Status));
} }
function UserappliedplansComponent_div_2_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "S. No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Plan Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Applied Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserappliedplansComponent_div_2_table_3_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.sortAmountAsc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserappliedplansComponent_div_2_table_3_Template_i_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.sortAmountDesc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date Applied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Proof of Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserappliedplansComponent_div_2_table_3_tr_25_Template, 22, 11, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.planApplications);
} }
function UserappliedplansComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserappliedplansComponent_div_2_div_4_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.showPopup = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.popupImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserappliedplansComponent_div_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oops! No records found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserappliedplansComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirm Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Are you sure you want to delete this item?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserappliedplansComponent_div_2_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.deletePlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserappliedplansComponent_div_2_div_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.closeDeletePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserappliedplansComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-usernav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserappliedplansComponent_div_2_table_3_Template, 26, 1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserappliedplansComponent_div_2_div_4_Template, 5, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserappliedplansComponent_div_2_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserappliedplansComponent_div_2_div_7_Template, 10, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.planApplications.length > 0)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDeletePopupOpen);
} }
function UserappliedplansComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserappliedplansComponent {
    constructor(planapplicationformService, authService, sanitizer) {
        this.planapplicationformService = planapplicationformService;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.planApplications = [];
        this.isEditPopupOpen = false;
        this.isDeletePopupOpen = false;
        this.showPopup = false;
        this.selectedPlan = null;
        this.planToDelete = null;
    }
    ngOnInit() {
        this.userId = +localStorage.getItem('userId');
        console.log("User ID:", this.userId);
        this.getAllPlanApplicationsByUserId(this.userId);
    }
    getAllPlanApplicationsByUserId(userId) {
        this.planapplicationformService.getAppliedPlans(userId).subscribe((data) => {
            this.planApplications = data;
            console.log("Fetched Plan Applications:", this.planApplications);
        }, (error) => {
            console.error("Error fetching plan applications:", error);
        });
    }
    openEditPopup(planApplicationId, previousPlan) {
        this.planApplicationId = planApplicationId;
        this.selectedPlan = Object.assign({}, previousPlan);
        this.isEditPopupOpen = true;
    }
    closeEditPopup() {
        this.isEditPopupOpen = false;
        this.selectedPlan = null;
    }
    saveChanges() {
        if (this.selectedPlan) {
            this.planapplicationformService.updatePlanApplication(this.planApplicationId, this.selectedPlan).subscribe(() => {
                this.getAllPlanApplicationsByUserId(this.userId);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'Your plan has been updated.', 'success');
            }, (error) => {
                console.error("Error updating plan application:", error);
            });
            this.closeEditPopup();
        }
    }
    confirmDelete(planApplicationId) {
        this.planApplicationId = planApplicationId;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.deletePlan();
            }
        });
    }
    deletePlan() {
        if (this.planApplicationId) {
            this.planapplicationformService.deletePlanApplication(this.planApplicationId).subscribe(() => {
                this.getAllPlanApplicationsByUserId(this.userId);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your plan has been deleted.', 'success');
            }, (error) => {
                console.error("Error deleting plan application:", error);
            });
            this.closeDeletePopup();
        }
    }
    closeDeletePopup() {
        this.isDeletePopupOpen = false;
        this.planToDelete = null;
    }
    closePopups() {
        this.closeEditPopup();
        this.closeDeletePopup();
    }
    isPending(status) {
        if (status == "Pending") {
            return true;
        }
        return false;
    }
    getDocumentUrl(base64String) {
        const url = `data:application/pdf;base64,${base64String}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    sortAmountAsc() {
        this.planApplications.sort((a, b) => a.AppliedAmount - b.AppliedAmount);
    }
    sortAmountDesc() {
        this.planApplications.sort((a, b) => b.AppliedAmount - a.AppliedAmount);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
UserappliedplansComponent.ɵfac = function UserappliedplansComponent_Factory(t) { return new (t || UserappliedplansComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_planapplicationform_service__WEBPACK_IMPORTED_MODULE_2__["PlanapplicationformService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
UserappliedplansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserappliedplansComponent, selectors: [["app-userappliedplans"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "container"], ["class", "table table-striped", 4, "ngIf", "ngIfElse"], ["class", "popup", 4, "ngIf"], ["noRecordsFound", ""], ["class", "modal", 4, "ngIf"], [1, "table", "table-striped"], [1, "sortable"], [1, "sort-icons"], [1, "ascending", 3, "click"], [1, "descending", 3, "click"], [4, "ngFor", "ngForOf"], [1, "view-button", 3, "click"], [1, "btn", "btn-danger", 3, "disabled", "click"], [1, "popup"], [1, "popup-content"], [1, "close", 3, "click"], ["alt", "Document Proof", 3, "src"], [1, "modal"], [1, "modal-content"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-secondary", 3, "click"]], template: function UserappliedplansComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Applied Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserappliedplansComponent_div_2_Template, 8, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserappliedplansComponent_div_3_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _usernav_usernav_component__WEBPACK_IMPORTED_MODULE_6__["UsernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin: 0;\n    padding: 20px;\n    min-height: 100vh;\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #2c3e50;\n    font-size: 32px;\n    margin: 30px 0;\n    font-weight: 600;\n    position: relative;\n    padding-bottom: 15px;\n}\nh2[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100px;\n    height: 3px;\n    background: linear-gradient(to right, #3498db, #2c3e50);\n}\n\n.container[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: 30px auto;\n    padding: 25px;\n    background: #ffffff;\n    border-radius: 15px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n\n.table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: separate;\n    border-spacing: 0;\n    background: white;\n    border-radius: 10px;\n    overflow: hidden;\n    margin-bottom: 30px;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #2c3e50, #3498db);\n    color: white;\n    padding: 18px 15px;\n    font-weight: 600;\n    text-transform: uppercase;\n    font-size: 14px;\n    letter-spacing: 1px;\n    text-align: center;\n    border: none;\n    transition: all 0.3s ease;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 15px;\n    text-align: center;\n    vertical-align: middle;\n    border-bottom: 1px solid #eee;\n    font-size: 14px;\n    color: #2c3e50;\n    transition: all 0.3s ease;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    transition: all 0.3s ease;\n    transform-origin: center;\n    position: relative;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: #f8f9fa;\n    transform: translateY(-5px) scale(1.01);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n    z-index: 1;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {  \n    font-weight: 600;\n    color: #2c3e50;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {  \n    font-weight: 700;\n    color: #2980b9;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    font-weight: 600;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6):contains('APPROVED') {\n    color: #2ecc71 !important;  \n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6):contains('REJECTED') {\n    color: #e74c3c !important;  \n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\n    font-weight: 600;\n    color: #34495e;\n}\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n    background-color: #f8f9fa;\n}\n\n.sort-icons[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: column;\n    margin-left: 8px;\n    opacity: 0.7;\n}\n.ascending[_ngcontent-%COMP%], .descending[_ngcontent-%COMP%] {\n    cursor: pointer;\n    padding: 2px;\n    transition: all 0.3s ease;\n}\n.ascending[_ngcontent-%COMP%]:hover, .descending[_ngcontent-%COMP%]:hover {\n    color: #3498db;\n    transform: scale(1.2);\n}\n\n.view-button[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #3498db, #2980b9);\n    color: white;\n    border: none;\n    padding: 8px 16px;\n    border-radius: 5px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n.view-button[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);\n}\n.btn-danger[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #e74c3c, #c0392b);\n    color: white;\n    border: none;\n    padding: 8px 16px;\n    border-radius: 5px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not([disabled]) {\n    transform: translateY(-2px);\n    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);\n}\n.btn-danger[disabled][_ngcontent-%COMP%] {\n    background: #95a5a6;\n    cursor: not-allowed;\n    opacity: 0.7;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #95a5a6, #7f8c8d);\n    color: white;\n    border: none;\n    padding: 8px 16px;\n    border-radius: 5px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 5px 15px rgba(127, 140, 141, 0.3);\n}\n\n.modal[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n    background: white;\n    padding: 30px;\n    border-radius: 15px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n    text-align: center;\n    max-width: 400px;\n    width: 90%;\n}\n.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #2c3e50;\n    margin-bottom: 20px;\n}\n.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #7f8c8d;\n    margin-bottom: 25px;\n}\n\n.popup[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.8);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n}\n.popup-content[_ngcontent-%COMP%] {\n    background: white;\n    padding: 25px;\n    border-radius: 15px;\n    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);\n    position: relative;\n    max-width: 80%;\n    max-height: 80vh;\n    overflow: auto;\n}\n.popup-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    display: block;\n    margin: 0 auto;\n}\n.close[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 15px;\n    right: 15px;\n    font-size: 24px;\n    color: #2c3e50;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n.close[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n    color: #e74c3c;\n}\n\n.no-records[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #7f8c8d;\n    font-size: 18px;\n    margin: 30px 0;\n}\n\n@media (max-width: 768px) {\n    .container[_ngcontent-%COMP%] {\n        padding: 15px;\n        margin: 15px;\n    }\n\n    .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n        font-size: 12px;\n        padding: 12px 8px;\n    }\n    \n    .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n        font-size: 12px;\n        padding: 12px 8px;\n    }\n\n    h2[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n\n    .btn[_ngcontent-%COMP%], .view-button[_ngcontent-%COMP%] {\n        padding: 6px 12px;\n        font-size: 12px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyYXBwbGllZHBsYW5zL3VzZXJhcHBsaWVkcGxhbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7SUFDSSw2REFBNkQ7SUFDN0QsNERBQTREO0lBQzVELFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0lBQ1gsdURBQXVEO0FBQzNEO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwwQ0FBMEM7QUFDOUM7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxxREFBcUQ7SUFDckQsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMsVUFBVTtBQUNkO0FBRUEsc0NBQXNDO0FBQ3RDLDBCQUEwQixjQUFjO0lBQ3BDLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUEsMEJBQTBCLG1CQUFtQjtJQUN6QyxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0kseUJBQXlCLEdBQUcsaUJBQWlCO0FBQ2pEO0FBRUE7SUFDSSx5QkFBeUIsR0FBRyxlQUFlO0FBQy9DO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4Q0FBOEM7QUFDbEQ7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2Q0FBNkM7QUFDakQ7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUVBO0lBQ0kscURBQXFEO0lBQ3JELFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLCtDQUErQztBQUNuRDtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyYXBwbGllZHBsYW5zL3VzZXJhcHBsaWVkcGxhbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJhc2UgU3R5bGVzICovXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogSGVhZGluZyBTdHlsZXMgKi9cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIG1hcmdpbjogMzBweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5oMjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNDk4ZGIsICMyYzNlNTApO1xufVxuXG4vKiBDb250YWluZXIgU3R5bGVzICovXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIFRhYmxlIFN0eWxlcyAqL1xuLnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4vKiBUYWJsZSBIZWFkZXIgKi9cbi50YWJsZSB0aGVhZCB0aCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzJjM2U1MCwgIzM0OThkYik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4vKiBUYWJsZSBCb2R5ICovXG4udGFibGUgdGJvZHkgdGQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi8qIEVuaGFuY2VkIFJvdyBIb3ZlciBFZmZlY3RzICovXG4udGFibGUgdGJvZHkgdHIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjAxKTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgei1pbmRleDogMTtcbn1cblxuLyogSW1wb3J0YW50IERhdGEgYW5kIFN0YXR1cyBTdHlsaW5nICovXG4udGFibGUgdGQ6bnRoLWNoaWxkKDIpIHsgIC8qIFBsYW4gTmFtZSAqL1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi50YWJsZSB0ZDpudGgtY2hpbGQoMykgeyAgLyogQXBwbGllZCBBbW91bnQgKi9cbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMjk4MGI5O1xufVxuXG4vKiBTdGF0dXMgQ29sb3JzICovXG4udGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDYpIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDYpOmNvbnRhaW5zKCdBUFBST1ZFRCcpIHtcbiAgICBjb2xvcjogIzJlY2M3MSAhaW1wb3J0YW50OyAgLyogQnJpZ2h0IEdyZWVuICovXG59XG5cbi50YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoNik6Y29udGFpbnMoJ1JFSkVDVEVEJykge1xuICAgIGNvbG9yOiAjZTc0YzNjICFpbXBvcnRhbnQ7ICAvKiBCcmlnaHQgUmVkICovXG59XG5cbi8qIFVzZXJuYW1lIENvbHVtbiAqL1xuLnRhYmxlIHRkOm50aC1jaGlsZCg3KSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzM0NDk1ZTtcbn1cblxuLyogU3RyaXBlZCBSb3dzICovXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiBTb3J0IEljb25zICovXG4uc29ydC1pY29ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLmFzY2VuZGluZywgLmRlc2NlbmRpbmcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmFzY2VuZGluZzpob3ZlciwgLmRlc2NlbmRpbmc6aG92ZXIge1xuICAgIGNvbG9yOiAjMzQ5OGRiO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLyogQnV0dG9uIFN0eWxlcyAqL1xuLnZpZXctYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4udmlldy1idXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xufVxuXG4uYnRuLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xufVxuXG4uYnRuLWRhbmdlcltkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQ6ICM5NWE1YTY7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTVhNWE2LCAjN2Y4YzhkKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgxMjcsIDE0MCwgMTQxLCAwLjMpO1xufVxuXG4vKiBNb2RhbCBTdHlsZXMgKi9cbi5tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5tb2RhbC1jb250ZW50IGgzIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubW9kYWwtY29udGVudCBwIHtcbiAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4vKiBQb3B1cCBTdHlsZXMgKi9cbi5wb3B1cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucG9wdXAtY29udGVudCBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGNvbG9yOiAjZTc0YzNjO1xufVxuXG4vKiBObyBSZWNvcmRzIE1lc3NhZ2UgKi9cbi5uby1yZWNvcmRzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMzBweCAwO1xufVxuXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogMTVweDtcbiAgICB9XG5cbiAgICAudGFibGUgdGhlYWQgdGgge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgIH1cbiAgICBcbiAgICAudGFibGUgdGJvZHkgdGQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIC5idG4sIC52aWV3LWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserappliedplansComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userappliedplans',
                templateUrl: './userappliedplans.component.html',
                styleUrls: ['./userappliedplans.component.css']
            }]
    }], function () { return [{ type: src_app_services_planapplicationform_service__WEBPACK_IMPORTED_MODULE_2__["PlanapplicationformService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false,
    apiUrl: 'https://8080-cabbebefebafbfbdfccbdceeaeedceeddeeaecdae.premiumproject.examly.io'
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../managernav/managernav.component */ "hTLC");
/* harmony import */ var _usernav_usernav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usernav/usernav.component */ "W+t2");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");







function HomeComponent_app_managernav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-managernav");
} }
function HomeComponent_app_usernav_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-usernav");
} }
function HomeComponent_app_navbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
class HomeComponent {
    constructor(authService) {
        this.authService = authService;
        this.images = [
            'assets/img1.jpg',
            'assets/img1.jpg',
            'assets/img2.jpg',
            'assets/img3.jpg',
        ];
        this.currentIndex = 0;
        this.userRole = '';
        if (!this.authService) {
            console.warn('AuthService is not provided!');
        }
    }
    ngOnInit() {
        this.userRole = localStorage.getItem('userRole');
        // this.startAutoSlide();
    }
    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
    startAutoSlide() {
        this.intervalId = setInterval(() => {
            this.next();
        }, 3000); // Change image every 2 seconds
    }
    getStarted() {
        alert("Welcome to FinanceHub! Let's get started.");
    }
    prev() {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
    }
    next() {
        this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
    }
    isRegionalManager() {
        return localStorage.getItem('userRole') === 'RegionalManager';
    }
    isCustomer() {
        return localStorage.getItem('userRole') === 'Customer';
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], 8)); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 54, vars: 4, consts: [[4, "ngIf"], ["id", "welcomeMessage", 1, "welcome-message"], ["id", "home", 1, "hero"], [1, "carousel"], [1, "carousel-inner"], [1, "carousel-item"], ["src", "assets/home/1.jpg", "alt", "Image 1"], ["src", "assets/home/2.png", "alt", "Image 2"], ["src", "assets/home/3.jpg", "alt", "Image 3"], [1, "columns"], [1, "column"], ["id", "small-images", 1, "small-images"], [1, "small-image"], ["src", "assets/home/s1.jpg", "alt", "Small Image 1"], ["src", "assets/home/s2.jpg", "alt", "Small Image 2"], ["src", "assets/home/s3.jpg", "alt", "Small Image 3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_app_managernav_0_Template, 1, 0, "app-managernav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_usernav_1_Template, 1, 0, "app-usernav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_app_navbar_2_Template, 1, 0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to Finance Hub!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Regional Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Effortless creation of accounts and secure log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Secure and seamless management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Manage Savings Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Create, view, edit, or delete Savings Plans as needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Review Customer Application forms and update them promtly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Monitor feedback and address customer concerns effectively");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Register easily and log in securely");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Explore savings plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Conveniently apply for the Savings Plans that best suit your needs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Track application forms and delete those no longer needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Submit feedback and review responses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn() && ctx.isRegionalManager());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn() && ctx.isCustomer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_3__["ManagernavComponent"], _usernav_usernav_component__WEBPACK_IMPORTED_MODULE_4__["UsernavComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]], styles: ["body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1));\n}\n\nheader[_ngcontent-%COMP%] {\n    background-color: #1f1c2c;\n    color: white;\n    padding: 1rem 0;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\nheader[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    display: flex;\n    gap: 1rem;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    text-decoration: none;\n    transition: color 0.3s;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #ff6347;\n}\n\n.hero[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n    color: white;\n    padding: 25px;\n    animation: fadeIn 2s ease-in-out;\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n.carousel[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    perspective: 1000px;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    animation: slide 10s infinite;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-shrink: 0;\n}\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n    object-fit: fill;\n    border-radius: 25px;\n    box-shadow: 3px 4px 8px rgba(201, 193, 193, 0.949);\n    transition: transform 0.3s;\n}\n\n@keyframes slide {\n    0%, 20%, 100% { transform: translateX(0); }\n    25%, 45% { transform: translateX(-100%); }\n    50%, 70% { transform: translateX(-200%); }\n    75%, 95% { transform: translateX(0); }\n}\n\n.carousel-control[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: rgba(0, 0, 0, 0.5);\n    color: white;\n    border: none;\n    cursor: pointer;\n    padding: 0.5rem;\n    transition: background-color 0.3s;\n}\n\n.carousel-control.prev[_ngcontent-%COMP%] {\n    left: 0;\n}\n\n.carousel-control.next[_ngcontent-%COMP%] {\n    right: 0;\n}\n\n.carousel-control[_ngcontent-%COMP%]:hover {\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.welcome-message[_ngcontent-%COMP%] {\n    color: black;\n    font-size: 2.5rem;\n    margin-top: 20px;\n    margin-bottom: 5px;\n    text-align: center;\n    font-weight: bold;\n}\n\n.columns[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 2rem;\n    text-align: center;\n}\n\n.column[_ngcontent-%COMP%] {\n    background: white;\n    padding: 1rem;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.column[_ngcontent-%COMP%]:hover {\n    transform: translateY(-10px);\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n\n.small-images[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    padding: 2rem;\n}\n\n.small-image[_ngcontent-%COMP%] {\n    flex: 1 1 calc(33.333% - 2rem);\n    margin: 1rem;\n    max-width: 150px;  \n    height: 150px;     \n}\n\n.small-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;     \n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.small-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n\nfooter[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #82d0ef, #FFD700);\n    color: black;\n    text-align: center;\n    padding: 1rem 0;\n    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);\n    position: relative;\n    width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 1rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    margin: 0.5rem 0;\n}\n\np[_ngcontent-%COMP%] {\n    margin: 0.5rem 0 1rem;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0.5rem 0;\n}\n\na[_ngcontent-%COMP%] {\n    color: #ff6347;\n    text-decoration: none;\n    transition: color 0.3s;\n}\n\na[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n    color: #ff4500;\n}\n\n@media (min-width: 768px) {\n    .columns[_ngcontent-%COMP%] {\n        flex-direction: row;\n        flex-wrap: wrap;\n    }\n\n    .column[_ngcontent-%COMP%] {\n        flex: 1;\n        margin: 1rem;\n    }\n\n    .small-images[_ngcontent-%COMP%] {\n        flex-wrap: wrap;\n    }\n\n    .small-image[_ngcontent-%COMP%] {\n        flex: 1 1 calc(33.333% - 2rem);\n        margin: 1rem;\n    }\n}\n\n@media (min-width: 1024px) {\n    .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n\n    .small-image[_ngcontent-%COMP%] {\n        max-width: 300px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxRkFBcUY7QUFDekY7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0RBQWtEO0lBQ2xELDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQix3QkFBd0IsRUFBRTtJQUMxQyxXQUFXLDRCQUE0QixFQUFFO0lBQ3pDLFdBQVcsNEJBQTRCLEVBQUU7SUFDekMsV0FBVyx3QkFBd0IsRUFBRTtBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixnQkFBZ0IsR0FBRywwQkFBMEI7SUFDN0MsYUFBYSxNQUFNLHVCQUF1QjtBQUM5Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZLE1BQU0sc0NBQXNDO0lBQ3hELG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksT0FBTztRQUNQLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksOEJBQThCO1FBQzlCLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNjksIDE4NiwgMjM3LCAwLjEpLCByZ2JhKDI1MiwgMjU1LCA2MSwgMC4xKSk7XG59XG5cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWMyYztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmhlYWRlciAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oZWFkZXIgbmF2IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cblxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmNjM0Nztcbn1cblxuLmhlcm8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMnMgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uY2Fyb3VzZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbmltYXRpb246IHNsaWRlIDEwcyBpbmZpbml0ZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xuICAgIG9iamVjdC1maXQ6IGZpbGw7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3gtc2hhZG93OiAzcHggNHB4IDhweCByZ2JhKDIwMSwgMTkzLCAxOTMsIDAuOTQ5KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUsIDIwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAgIDI1JSwgNDUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICAgIDUwJSwgNzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTsgfVxuICAgIDc1JSwgOTUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG59XG5cbi5jYXJvdXNlbC1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC5wcmV2IHtcbiAgICBsZWZ0OiAwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC5uZXh0IHtcbiAgICByaWdodDogMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2w6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLndlbGNvbWUtbWVzc2FnZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbHVtbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2x1bW4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG59XG5cbi5jb2x1bW46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5zbWFsbC1pbWFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5zbWFsbC1pbWFnZSB7XG4gICAgZmxleDogMSAxIGNhbGMoMzMuMzMzJSAtIDJyZW0pO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDE1MHB4OyAgLyogU2V0IGEgZml4ZWQgbWF4LXdpZHRoICovXG4gICAgaGVpZ2h0OiAxNTBweDsgICAgIC8qIFNldCBhIGZpeGVkIGhlaWdodCAqL1xufVxuXG4uc21hbGwtaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7ICAgICAvKiBNYWtlIHRoZSBpbWFnZSBmaWxsIHRoZSBjb250YWluZXIgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcbn1cblxuLnNtYWxsLWltYWdlIGltZzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjODJkMGVmLCAjRkZENzAwKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBib3gtc2hhZG93OiAwIC00cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDAuNXJlbSAwIDFyZW07XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbnVsIGxpIHtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG5hIHtcbiAgICBjb2xvcjogI2ZmNjM0NztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cblxuYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICNmZjQ1MDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jb2x1bW5zIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5jb2x1bW4ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuXG4gICAgLnNtYWxsLWltYWdlcyB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAuc21hbGwtaW1hZ2Uge1xuICAgICAgICBmbGV4OiAxIDEgY2FsYygzMy4zMzMlIC0gMnJlbSk7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY2Fyb3VzZWwtaXRlbSBpbWcge1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cblxuICAgIC5zbWFsbC1pbWFnZSB7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "HYps":
/*!*************************************************!*\
  !*** ./src/app/services/savingsplan.service.ts ***!
  \*************************************************/
/*! exports provided: SavingsplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsplanService", function() { return SavingsplanService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class SavingsplanService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getHeaders() {
        const token = localStorage.getItem('authToken');
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        });
    }
    getAllSavingsPlans() {
        return this.http.get(`${this.apiUrl}/api/savingsplans`, { headers: this.getHeaders() });
    }
    getAppliedPlans(userId) {
        return this.http.get(`${this.apiUrl}/api/planapplications/user/${userId}`, { headers: this.getHeaders() });
    }
    deleteSavingsPlan(savingsPlanId) {
        return this.http.delete(`${this.apiUrl}/api/savingsplans/${savingsPlanId}`, { headers: this.getHeaders() });
    }
    getSavingsPlanById(Id) {
        return this.http.get(`${this.apiUrl}/api/savingsplans/${Id}`, { headers: this.getHeaders() });
    }
    addSavingsPlan(requestObject) {
        return this.http.post(`${this.apiUrl}/api/savingsplan`, requestObject, { headers: this.getHeaders() });
    }
    updateSavingsPlan(Id, requestObject) {
        return this.http.put(`${this.apiUrl}/api/savingsplan/${Id}`, requestObject, { headers: this.getHeaders() });
    }
}
SavingsplanService.ɵfac = function SavingsplanService_Factory(t) { return new (t || SavingsplanService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SavingsplanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SavingsplanService, factory: SavingsplanService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SavingsplanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QX/1":
/*!***************************************************************************************!*\
  !*** ./src/app/components/managereditsavingsplan/managereditsavingsplan.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ManagereditsavingsplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagereditsavingsplanComponent", function() { return ManagereditsavingsplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_savingsplan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/savingsplan.service */ "HYps");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../managernav/managernav.component */ "hTLC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error/error.component */ "7AdY");










function ManagereditsavingsplanComponent_div_2_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plan Name must contain only letters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagereditsavingsplanComponent_div_2_div_10_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagereditsavingsplanComponent_div_2_div_10_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.name == null ? null : _r2.controls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.name == null ? null : _r2.controls.name.errors == null ? null : _r2.controls.name.errors.pattern);
} }
function ManagereditsavingsplanComponent_div_2_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal Amount is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal Amount must be at least 1,000.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal Amount cannot exceed 10,000,000.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagereditsavingsplanComponent_div_2_div_15_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagereditsavingsplanComponent_div_2_div_15_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagereditsavingsplanComponent_div_2_div_15_div_3_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.goalAmount == null ? null : _r2.controls.goalAmount.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.goalAmount == null ? null : _r2.controls.goalAmount.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.goalAmount == null ? null : _r2.controls.goalAmount.errors.max);
} }
function ManagereditsavingsplanComponent_div_2_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time Frame is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time Frame must be at least 1 year.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time Frame cannot exceed 50 years.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagereditsavingsplanComponent_div_2_div_20_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagereditsavingsplanComponent_div_2_div_20_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagereditsavingsplanComponent_div_2_div_20_div_3_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.timeFrame == null ? null : _r2.controls.timeFrame.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.timeFrame == null ? null : _r2.controls.timeFrame.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.timeFrame == null ? null : _r2.controls.timeFrame.errors.max);
} }
function ManagereditsavingsplanComponent_div_2_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Risk Level is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagereditsavingsplanComponent_div_2_div_31_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.riskLevel == null ? null : _r2.controls.riskLevel.errors.required);
} }
function ManagereditsavingsplanComponent_div_2_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagereditsavingsplanComponent_div_2_div_36_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.description == null ? null : _r2.controls.description.errors.required);
} }
function ManagereditsavingsplanComponent_div_2_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagereditsavingsplanComponent_div_2_div_45_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.controls.status == null ? null : _r2.controls.status.errors.required);
} }
function ManagereditsavingsplanComponent_div_2_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Successfully edited ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagereditsavingsplanComponent_div_2_div_49_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagereditsavingsplanComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-managernav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ManagereditsavingsplanComponent_div_2_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.updateSavingsPlan(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagereditsavingsplanComponent_div_2_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.savingsPlan.Name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Plan Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ManagereditsavingsplanComponent_div_2_div_10_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagereditsavingsplanComponent_div_2_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.savingsPlan.GoalAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Goal Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManagereditsavingsplanComponent_div_2_div_15_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagereditsavingsplanComponent_div_2_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.savingsPlan.TimeFrame = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Time Frame (years)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ManagereditsavingsplanComponent_div_2_div_20_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagereditsavingsplanComponent_div_2_Template_select_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.savingsPlan.RiskLevel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Risk Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ManagereditsavingsplanComponent_div_2_div_31_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagereditsavingsplanComponent_div_2_Template_textarea_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.savingsPlan.Description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ManagereditsavingsplanComponent_div_2_div_36_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagereditsavingsplanComponent_div_2_Template_select_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.savingsPlan.Status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ManagereditsavingsplanComponent_div_2_div_45_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ManagereditsavingsplanComponent_div_2_div_49_Template, 4, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.savingsPlan.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && (_r2.controls.name == null ? null : _r2.controls.name.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.savingsPlan.GoalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && (_r2.controls.goalAmount == null ? null : _r2.controls.goalAmount.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.savingsPlan.TimeFrame);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && (_r2.controls.timeFrame == null ? null : _r2.controls.timeFrame.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.savingsPlan.RiskLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && (_r2.controls.riskLevel == null ? null : _r2.controls.riskLevel.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.savingsPlan.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && (_r2.controls.description == null ? null : _r2.controls.description.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.savingsPlan.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && (_r2.controls.status == null ? null : _r2.controls.status.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMessage);
} }
function ManagereditsavingsplanComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManagereditsavingsplanComponent {
    constructor(service, activatedRoute, router, authService) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authService = authService;
        this.savingsPlan = {
            Name: '',
            GoalAmount: 0,
            TimeFrame: 0,
            RiskLevel: 'Low',
            Description: '',
            Status: ''
        };
        this.showMessage = false;
    }
    ngOnInit() {
        this.savingsPlanId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"), 10);
        this.service.getSavingsPlanById(this.savingsPlanId).subscribe((data) => {
            this.savingsPlan = data;
            console.log("plan: " + this.savingsPlan.Status);
            if (this.savingsPlan.Status !== 'Active' && this.savingsPlan.Status !== 'Inactive') {
                this.savingsPlan.Status = 'Inactive';
            }
        });
    }
    updateSavingsPlan(form) {
        if (form.valid) {
            if (this.savingsPlan.GoalAmount < 1000 || this.savingsPlan.GoalAmount > 10000000) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Error!',
                    text: 'Goal Amount must be between 1,000 and 10,000,000.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }
            if (this.savingsPlan.TimeFrame < 1 || this.savingsPlan.TimeFrame > 50) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Error!',
                    text: 'Time Frame must be between 1 and 50 years.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }
            console.log('Form is valid');
            console.log('Sending data:', this.savingsPlan); // Log the data being sent
            this.service.updateSavingsPlan(this.savingsPlanId, this.savingsPlan).subscribe((data) => {
                console.log('Update successful', data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Success!',
                    text: 'Savings plan successfully edited.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    this.router.navigate(['/viewsavingplan']);
                });
            }, (error) => {
                console.error('Update failed', error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Error!',
                    text: 'Plan with the same name already exists!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
        }
        else {
            console.log('Form is invalid');
        }
    }
    onClick() {
        this.showMessage = false;
        this.router.navigate(['/managerviewsavingsplan']);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
ManagereditsavingsplanComponent.ɵfac = function ManagereditsavingsplanComponent_Factory(t) { return new (t || ManagereditsavingsplanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_savingsplan_service__WEBPACK_IMPORTED_MODULE_2__["SavingsplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ManagereditsavingsplanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagereditsavingsplanComponent, selectors: [["app-managereditsavingsplan"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "background-wrapper"], [1, "container"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["name", "name", "type", "text", "id", "name", "required", "", "pattern", "^[a-zA-Z ]+$", "placeholder", "Plan Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name"], ["name", "goalAmount", "type", "number", "id", "goalAmount", "required", "", "min", "1000", "max", "10000000", "placeholder", "Goal Amount", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "goalAmount"], ["name", "timeFrame", "type", "number", "id", "timeFrame", "required", "", "min", "1", "max", "50", "placeholder", "Time Frame (years)", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "timeFrame"], ["name", "riskLevel", "id", "riskLevel", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "Low"], ["value", "Medium"], ["value", "High"], ["name", "description", "id", "description", "required", "", "placeholder", "Description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "description"], ["name", "status", "id", "status", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Active"], ["value", "Inactive"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], [3, "click"]], template: function ManagereditsavingsplanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Savings Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagereditsavingsplanComponent_div_2_Template, 50, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagereditsavingsplanComponent_div_3_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_6__["ManagernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\nbody[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1));\n    font-family: 'Arial', sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n\n.background-wrapper[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, rgba(69, 186, 237, 0.15), rgba(252, 255, 61, 0.15));\n    padding: 20px;\n    border-radius: 8px;\n}\n\nform[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 50px auto;\n    padding: 20px;\n    background-color: white;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    color: black; \n    font-family: 'Roboto', sans-serif;\n    font-size: 2rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n    width: 100%;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0;\n    border: none;\n    border-bottom: 2px solid #ccc;\n    font-size: 14px;\n    transition: border-color 0.3s, padding 0.3s;\n    background: none;\n    color: #555;\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n    border-bottom-color: #007bff;\n    outline: none;\n    padding-top: 25px;\n}\n\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%] {\n    transform: translateY(-25px);\n    font-size: 15px;\n    color: #45baed; \n}\n\ninput[_ngcontent-%COMP%]::placeholder, select[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n    color: transparent;\n}\n\nlabel[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    pointer-events: none;\n    transition: transform 0.3s, font-size 0.3s;\n    color: #aaa;\n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 0;\n    margin-top: 20px;\n    background: linear-gradient(135deg, #45baed, #fcff3d);\n    color: white;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: box-shadow 0.3s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\nbutton[_ngcontent-%COMP%]:active {\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 14px;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyZWRpdHNhdmluZ3NwbGFuL21hbmFnZXJlZGl0c2F2aW5nc3BsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7O0FBRXhGO0lBQ0kscUZBQXFGO0lBQ3JGLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVGQUF1RjtJQUN2RixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZLEVBQUUsa0NBQWtDO0lBQ2hELGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYyxFQUFFLGlDQUFpQztBQUNyRDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLG9CQUFvQjtJQUNwQiwwQ0FBMEM7SUFDMUMsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscURBQXFEO0lBQ3JELFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hbmFnZXJlZGl0c2F2aW5nc3BsYW4vbWFuYWdlcmVkaXRzYXZpbmdzcGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg2OSwgMTg2LCAyMzcsIDAuMSksIHJnYmEoMjUyLCAyNTUsIDYxLCAwLjEpKTtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5iYWNrZ3JvdW5kLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNjksIDE4NiwgMjM3LCAwLjE1KSwgcmdiYSgyNTIsIDI1NSwgNjEsIDAuMTUpKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuZm9ybSB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogYmxhY2s7IC8qIENoYW5nZSBoZWFkaW5nIGNvbG9yIHRvIGJsYWNrICovXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MsIHBhZGRpbmcgMC4zcztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwN2JmZjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG5pbnB1dDpmb2N1cyArIGxhYmVsLCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsLFxuc2VsZWN0OmZvY3VzICsgbGFiZWwsIHNlbGVjdDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsLFxudGV4dGFyZWE6Zm9jdXMgKyBsYWJlbCwgdGV4dGFyZWE6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM0NWJhZWQ7IC8qIEJsdWUgY29sb3IgZnJvbSB0aGUgZ3JhZGllbnQgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLCBzZWxlY3Q6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgZm9udC1zaXplIDAuM3M7XG4gICAgY29sb3I6ICNhYWE7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzQ1YmFlZCwgI2ZjZmYzZCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSBpbnNldDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagereditsavingsplanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-managereditsavingsplan',
                templateUrl: './managereditsavingsplan.component.html',
                styleUrls: ['./managereditsavingsplan.component.css']
            }]
    }], function () { return [{ type: src_app_services_savingsplan_service__WEBPACK_IMPORTED_MODULE_2__["SavingsplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "R/xc":
/*!*************************************************************************!*\
  !*** ./src/app/components/useraddfeedback/useraddfeedback.component.ts ***!
  \*************************************************************************/
/*! exports provided: UseraddfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseraddfeedbackComponent", function() { return UseraddfeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/feedback.service */ "kcTb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _usernav_usernav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../usernav/usernav.component */ "W+t2");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error/error.component */ "7AdY");











function UseraddfeedbackComponent_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Feedback is Required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UseraddfeedbackComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UseraddfeedbackComponent_div_2_div_7_div_1_Template, 3, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.feedbackText.errors == null ? null : ctx_r2.feedbackText.errors.required);
} }
function UseraddfeedbackComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-usernav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UseraddfeedbackComponent_div_2_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addFeedback(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UseraddfeedbackComponent_div_2_div_7_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.addform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.feedbackText.invalid && ctx_r0.feedbackText.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.addform.invalid);
} }
function UseraddfeedbackComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UseraddfeedbackComponent {
    constructor(feedbackService, builder, router, authService) {
        this.feedbackService = feedbackService;
        this.builder = builder;
        this.router = router;
        this.authService = authService;
        this.feedback = {
            FeedbackId: 0,
            UserId: 0,
            Comments: '',
            DateProvided: new Date(),
        };
    }
    ngOnInit() {
        this.addform = this.builder.group({
            feedbackText: this.builder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    addFeedback() {
        if (this.addform.valid) {
            this.feedback.UserId = +localStorage.getItem("userId");
            this.feedback.Comments = this.addform.value.feedbackText;
            this.feedback.DateProvided = new Date();
            console.log('Feedback to be sent:', this.feedback); // Log the feedback object
            this.feedbackService.sendFeedback(this.feedback).subscribe((res) => {
                console.log(res);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Success!',
                    text: 'Feedback added successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    this.addform.reset(); // Reset the form
                    this.router.navigate(['/userviewfeedback']);
                });
            }, error => {
                console.error('Error adding feedback:', error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Error!',
                    text: 'There was an error adding the feedback.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Warning!',
                text: 'Please fill out the feedback text.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
    }
    get feedbackText() {
        return this.addform.get('feedbackText');
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
UseraddfeedbackComponent.ɵfac = function UseraddfeedbackComponent_Factory(t) { return new (t || UseraddfeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
UseraddfeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UseraddfeedbackComponent, selectors: [["app-user-add-feedback"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "container"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "text-center"], ["src", "assets/customer-feedback.png", "alt", "Feedback Icon", 2, "width", "70px", "height", "70px", "margin-bottom", "2px"], ["formControlName", "feedbackText", "name", "feedbackText", "id", "feedbackText", "rows", "10", 1, "form-control"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error-message"]], template: function UseraddfeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UseraddfeedbackComponent_div_2_Template, 11, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UseraddfeedbackComponent_div_3_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _usernav_usernav_component__WEBPACK_IMPORTED_MODULE_7__["UsernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n    height: 100%;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    background-color: #f0f2f5;\n    background-size: cover; \n    background-position: center; \n    background-repeat: no-repeat; \n    background-attachment: fixed;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n.heading[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    background-color: #2575fc;\n    color: white;\n    text-align: center;\n    padding: 10px;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    font-size: 1.5em;\n}\n\n.form[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 50px auto;\n    padding: 20px;\n    background-color: #f9f9f9;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    color: #333;\n}\n\n.text-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: bold;\n    margin-bottom: 5px;\n    color: #555;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    width: 95%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    font-size: 14px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 0;\n    margin-top: 20px;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 14px;\n    margin-top: 10px;\n}\n\n.font-dancing-script[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n}\n\n.mt-3[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n}\n\n\n\n.star-rating[_ngcontent-%COMP%] {\n    margin-top: 15px;\n}\n\n.stars[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n.star[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    color: #ccc;\n    cursor: pointer;\n}\n\n.star.active[_ngcontent-%COMP%] {\n    color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyYWRkZmVlZGJhY2svdXNlcmFkZGZlZWRiYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLHdCQUF3Qjs7QUFDeEI7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcmFkZGZlZWRiYWNrL3VzZXJhZGRmZWVkYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5LCBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTc1ZmM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5mb3JtIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG5pbnB1dCwgdGV4dGFyZWEge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZvbnQtZGFuY2luZy1zY3JpcHQge1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm10LTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi8qIFN0YXIgUmF0aW5nIFN0eWxpbmcgKi9cbi5zdGFyLXJhdGluZyB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnN0YXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdGFyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICNjY2M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3Rhci5hY3RpdmUge1xuICAgIGNvbG9yOiBnb2xkO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UseraddfeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-add-feedback',
                templateUrl: './useraddfeedback.component.html',
                styleUrls: ['./useraddfeedback.component.css']
            }]
    }], function () { return [{ type: src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "SFPI":
/*!***************************************************************************!*\
  !*** ./src/app/components/userviewfeedback/userviewfeedback.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserviewfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserviewfeedbackComponent", function() { return UserviewfeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserviewfeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserviewfeedbackComponent.ɵfac = function UserviewfeedbackComponent_Factory(t) { return new (t || UserviewfeedbackComponent)(); };
UserviewfeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserviewfeedbackComponent, selectors: [["app-userviewfeedback"]], decls: 2, vars: 0, template: function UserviewfeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnZpZXdmZWVkYmFjay91c2Vydmlld2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserviewfeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userviewfeedback',
                templateUrl: './userviewfeedback.component.html',
                styleUrls: ['./userviewfeedback.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function AppComponent_pre_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng generate component xyz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng add @angular/material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng add @angular/pwa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng add _____");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng build --prod");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'angularapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 155, vars: 7, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "alt", "Rocket Ship", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "rocket-smoke", "alt", "Rocket Ship Smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], [1, "card-container"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/tutorial", 1, "card"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/cli", 1, "card"], ["d", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"], ["target", "_blank", "rel", "noopener", "href", "https://blog.angular.io/", 1, "card"], ["d", "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"], ["type", "hidden"], ["selection", ""], ["tabindex", "0", 1, "card", "card-small", 3, "click"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"], [1, "terminal", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], ["title", "Animations", "href", "https://angular.io/guide/animations", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["id", "Group_20", "data-name", "Group 20", "xmlns", "http://www.w3.org/2000/svg", "width", "21.813", "height", "23.453", "viewBox", "0 0 21.813 23.453"], ["id", "Path_15", "data-name", "Path 15", "d", "M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z", "transform", "translate(-4088.702 -972.736)", "fill", "#ffa726"], ["id", "Path_16", "data-name", "Path 16", "d", "M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z", "transform", "translate(-4170.633 -972.736)", "fill", "#fb8c00"], ["id", "Path_17", "data-name", "Path 17", "d", "M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1058.315)", "fill", "#ffe0b2"], ["id", "Path_18", "data-name", "Path 18", "d", "M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1036.757)", "fill", "#fff3e0"], ["id", "Path_19", "data-name", "Path 19", "d", "M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1015.199)", "fill", "#fff"], ["title", "CLI", "href", "https://cli.angular.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular CLI Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "21.762", "height", "23.447", "viewBox", "0 0 21.762 23.447"], ["id", "Group_21", "data-name", "Group 21", "transform", "translate(0)"], ["id", "Path_20", "data-name", "Path 20", "d", "M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-2649.48 -313.618)", "fill", "#37474f"], ["id", "Path_21", "data-name", "Path 21", "d", "M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-2731.05 -313.618)", "fill", "#263238"], ["id", "Path_22", "data-name", "Path 22", "d", "M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z", "transform", "translate(-2687.274 -362.17)", "fill", "#fff"], ["id", "Path_23", "data-name", "Path 23", "d", "M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z", "transform", "translate(-2702.289 -380.631)", "fill", "#fff"], ["id", "Rectangle_12", "data-name", "Rectangle 12", "width", "3.517", "height", "0.469", "transform", "translate(9.709 13.744)", "fill", "#fff"], ["title", "Augury", "href", "https://augury.rangle.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular Augury Logo", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "21.81", "height", "23.447", "viewBox", "0 0 21.81 23.447"], ["id", "clip-path"], ["id", "Rectangle_13", "data-name", "Rectangle 13", "width", "10.338", "height", "10.27", "fill", "none"], ["id", "Group_25", "data-name", "Group 25", "transform", "translate(0)"], ["id", "Path_24", "data-name", "Path 24", "d", "M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-3769.274 -311.417)", "fill", "#4a3493"], ["id", "Path_25", "data-name", "Path 25", "d", "M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-3851.207 -311.417)", "fill", "#311b92"], ["id", "Group_24", "data-name", "Group 24", "transform", "translate(6.194 6.73)", "opacity", "0.5"], ["id", "Group_23", "data-name", "Group 23", "transform", "translate(0 0)"], ["id", "Group_22", "data-name", "Group 22", "clip-path", "url(#clip-path)"], ["id", "Path_26", "data-name", "Path 26", "d", "M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z", "transform", "translate(-3822.107 -368.821)", "fill", "#fff"], ["id", "Path_27", "data-name", "Path 27", "d", "M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z", "transform", "translate(-3814.311 -359.969)", "fill", "#fff"], ["title", "Protractor", "href", "https://www.protractortest.org/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular Protractor Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "21.81", "height", "23.447", "viewBox", "0 0 21.81 23.447"], ["id", "Group_26", "data-name", "Group 26", "transform", "translate(0)"], ["id", "Path_28", "data-name", "Path 28", "d", "M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-4609.274 -311.417)", "fill", "#e13439"], ["id", "Path_29", "data-name", "Path 29", "d", "M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-4691.207 -311.417)", "fill", "#b52f32"], ["id", "Path_30", "data-name", "Path 30", "d", "M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z", "transform", "translate(-4634.008 -355.852)", "fill", "#fff"], ["title", "Find a Local Meetup", "href", "https://www.meetup.com/find/?keywords=angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Meetup Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "24.607", "height", "23.447", "viewBox", "0 0 24.607 23.447"], ["id", "logo--mSwarm", "d", "M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z", "transform", "translate(0 0.123)", "fill", "#f64060"], ["title", "Join the Conversation on Gitter", "href", "https://gitter.im/angular/angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Gitter Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "19.447", "height", "19.447", "viewBox", "0 0 19.447 19.447"], ["id", "Group_40", "data-name", "Group 40", "transform", "translate(-1612 -405)"], ["id", "Rectangle_19", "data-name", "Rectangle 19", "width", "19.447", "height", "19.447", "transform", "translate(1612 405)", "fill", "#e60257"], ["id", "gitter", "transform", "translate(1617.795 408.636)"], ["id", "Group_33", "data-name", "Group 33", "transform", "translate(0 0)"], ["id", "Rectangle_15", "data-name", "Rectangle 15", "width", "1.04", "height", "9.601", "transform", "translate(2.304 2.324)", "fill", "#fff"], ["id", "Rectangle_16", "data-name", "Rectangle 16", "width", "1.04", "height", "9.601", "transform", "translate(4.607 2.324)", "fill", "#fff"], ["id", "Rectangle_17", "data-name", "Rectangle 17", "width", "1.04", "height", "4.648", "transform", "translate(6.91 2.324)", "fill", "#fff"], ["id", "Rectangle_18", "data-name", "Rectangle 18", "width", "1.04", "height", "6.971", "transform", "translate(0 0)", "fill", "#fff"], ["href", "https://github.com/angular/angular", "target", "_blank", "rel", "noopener"], [1, "github-star-badge"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", "fill", "#1976d2"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Here are some links to help you get started:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Learn Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "CLI Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Angular Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Next Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "What do you want to do next with your app?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r0.value = "component"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "New Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r0.value = "material"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r0.value = "pwa"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Add PWA Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r0.value = "dependency"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Add Dependency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r0.value = "test"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Run and Watch Tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r0.value = "build"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Build for Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, AppComponent_pre_85_Template, 2, 0, "pre", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, AppComponent_pre_86_Template, 2, 0, "pre", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, AppComponent_pre_87_Template, 2, 0, "pre", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AppComponent_pre_88_Template, 2, 0, "pre", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, AppComponent_pre_89_Template, 2, 0, "pre", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, AppComponent_pre_90_Template, 2, 0, "pre", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "g", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "clipPath", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "rect", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "g", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "g", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "g", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "g", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "svg", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "svg", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "svg", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "g", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "rect", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "g", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "rect", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "rect", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "rect", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "rect", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Love Angular?\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Give our repo a star. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Star ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "svg", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " app is running!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", _r0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pwa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dependency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "build");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Us07":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/managercreatesavingsplan/managercreatesavingsplan.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ManagercreatesavingsplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagercreatesavingsplanComponent", function() { return ManagercreatesavingsplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.all.min.js */ "LDO2");
/* harmony import */ var sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_savingsplan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/savingsplan.service */ "HYps");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../managernav/managernav.component */ "hTLC");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error/error.component */ "7AdY");











function ManagercreatesavingsplanComponent_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plan Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plan Name must contain only letters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagercreatesavingsplanComponent_div_2_div_9_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagercreatesavingsplanComponent_div_2_div_9_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.name.errors == null ? null : ctx_r2.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.name.errors == null ? null : ctx_r2.name.errors.pattern);
} }
function ManagercreatesavingsplanComponent_div_2_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal Amount is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal Amount must be at least 1,000.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal Amount cannot exceed 10,000,000.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagercreatesavingsplanComponent_div_2_div_14_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagercreatesavingsplanComponent_div_2_div_14_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagercreatesavingsplanComponent_div_2_div_14_div_3_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.goalAmount.errors == null ? null : ctx_r3.goalAmount.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.goalAmount.errors == null ? null : ctx_r3.goalAmount.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.goalAmount.errors == null ? null : ctx_r3.goalAmount.errors.max);
} }
function ManagercreatesavingsplanComponent_div_2_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time Frame is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time Frame must be at least 1 year.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time Frame cannot exceed 50 years.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagercreatesavingsplanComponent_div_2_div_19_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagercreatesavingsplanComponent_div_2_div_19_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagercreatesavingsplanComponent_div_2_div_19_div_3_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.timeFrame.errors == null ? null : ctx_r4.timeFrame.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.timeFrame.errors == null ? null : ctx_r4.timeFrame.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.timeFrame.errors == null ? null : ctx_r4.timeFrame.errors.max);
} }
function ManagercreatesavingsplanComponent_div_2_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Risk Level is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagercreatesavingsplanComponent_div_2_div_30_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.riskLevel.errors == null ? null : ctx_r5.riskLevel.errors.required);
} }
function ManagercreatesavingsplanComponent_div_2_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagercreatesavingsplanComponent_div_2_div_39_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.status.errors == null ? null : ctx_r6.status.errors.required);
} }
function ManagercreatesavingsplanComponent_div_2_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagercreatesavingsplanComponent_div_2_div_44_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.description.errors == null ? null : ctx_r7.description.errors.required);
} }
function ManagercreatesavingsplanComponent_div_2_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Savings plan successfully added!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagercreatesavingsplanComponent_div_2_div_47_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.onOkClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagercreatesavingsplanComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-managernav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ManagercreatesavingsplanComponent_div_2_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addSavingsPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plan Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ManagercreatesavingsplanComponent_div_2_div_9_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Goal Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ManagercreatesavingsplanComponent_div_2_div_14_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Time Frame (years)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ManagercreatesavingsplanComponent_div_2_div_19_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Risk Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ManagercreatesavingsplanComponent_div_2_div_30_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ManagercreatesavingsplanComponent_div_2_div_39_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ManagercreatesavingsplanComponent_div_2_div_44_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Create Savings Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ManagercreatesavingsplanComponent_div_2_div_47_Template, 5, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.name.invalid && (ctx_r0.name.dirty || ctx_r0.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.goalAmount.invalid && (ctx_r0.goalAmount.dirty || ctx_r0.goalAmount.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.timeFrame.invalid && (ctx_r0.timeFrame.dirty || ctx_r0.timeFrame.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.riskLevel.invalid && (ctx_r0.riskLevel.dirty || ctx_r0.riskLevel.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.status.invalid && (ctx_r0.status.dirty || ctx_r0.status.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.description.invalid && (ctx_r0.description.dirty || ctx_r0.description.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMessage);
} }
function ManagercreatesavingsplanComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManagercreatesavingsplanComponent {
    constructor(service, formBuilder, router, authService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.savingsPlan = {
            Name: '',
            GoalAmount: 0,
            TimeFrame: 0,
            RiskLevel: 'Low',
            Description: '',
            Status: ''
        };
        this.showMessage = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]+$')]],
            goalAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10000000)]],
            timeFrame: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(50)]],
            riskLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    addSavingsPlan() {
        // Normalize the name for duplicate checking
        const originalName = this.form.value.name;
        const normalizedName = originalName.replace(/\s+/g, '').toLowerCase();
        // Check for duplicates
        this.service.getAllSavingsPlans().subscribe((existingPlans) => {
            const isDuplicate = existingPlans.some(plan => plan.Name.replace(/\s+/g, '').toLowerCase() === normalizedName);
            if (isDuplicate) {
                sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Error!',
                    text: 'A savings plan with the same name already exists.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            else {
                // Store the original name
                this.savingsPlan = Object.assign(Object.assign({}, this.form.value), { Name: originalName });
                this.service.addSavingsPlan(this.savingsPlan).subscribe(() => {
                    sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Success!',
                        text: 'Savings plan successfully added.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        this.router.navigate(['/viewsavingplan']);
                    });
                    this.form.reset();
                }, (error) => {
                    sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Error!',
                        text: 'An error occurred while adding the savings plan.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
            }
        });
    }
    get name() {
        return this.form.get('name');
    }
    get goalAmount() {
        return this.form.get('goalAmount');
    }
    get timeFrame() {
        return this.form.get('timeFrame');
    }
    get riskLevel() {
        return this.form.get('riskLevel');
    }
    get description() {
        return this.form.get('description');
    }
    get status() {
        return this.form.get('status');
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
ManagercreatesavingsplanComponent.ɵfac = function ManagercreatesavingsplanComponent_Factory(t) { return new (t || ManagercreatesavingsplanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_savingsplan_service__WEBPACK_IMPORTED_MODULE_3__["SavingsplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ManagercreatesavingsplanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagercreatesavingsplanComponent, selectors: [["app-managercreatesavingsplan"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "background-wrapper"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["id", "name", "formControlName", "name", "required", "", "placeholder", "Plan Name"], ["for", "name"], ["id", "goalAmount", "formControlName", "goalAmount", "type", "number", "required", "", "min", "1000", "max", "10000000", "placeholder", "Goal Amount"], ["for", "goalAmount"], ["id", "timeFrame", "formControlName", "timeFrame", "type", "number", "required", "", "min", "1", "max", "50", "placeholder", "Time Frame (years)"], ["for", "timeFrame"], ["id", "riskLevel", "formControlName", "riskLevel", "required", ""], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "Low"], ["value", "Medium"], ["value", "High"], ["id", "status", "formControlName", "status", "required", ""], ["value", "Active"], ["value", "Inactive"], ["id", "description", "formControlName", "description", "required", "", "placeholder", "Description"], ["for", "description"], ["type", "submit", 3, "disabled"], ["class", "showMessage", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], [1, "showMessage"], [3, "click"]], template: function ManagercreatesavingsplanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create New Savings Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagercreatesavingsplanComponent_div_2_Template, 48, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagercreatesavingsplanComponent_div_3_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_7__["ManagernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\nbody[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1));\n    font-family: 'Arial', sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n\n.background-wrapper[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, rgba(69, 186, 237, 0.15), rgba(252, 255, 61, 0.15));\n    padding: 20px;\n    border-radius: 8px;\n}\n\nform[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 50px auto;\n    padding: 20px;\n    background-color: white;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    color: black; \n    font-family: 'Roboto', sans-serif;\n    font-size: 2rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n    width: 100%;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0;\n    border: none;\n    border-bottom: 2px solid #ccc;\n    font-size: 14px;\n    transition: border-color 0.3s, padding 0.3s;\n    background: none;\n    color: #555;\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n    border-bottom-color: #007bff;\n    outline: none;\n    padding-top: 25px;\n}\n\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%] {\n    transform: translateY(-25px);\n    font-size: 15px;\n    color: #45baed; \n}\n\ninput[_ngcontent-%COMP%]::placeholder, select[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n    color: transparent;\n}\n\nlabel[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    pointer-events: none;\n    transition: transform 0.3s, font-size 0.3s;\n    color: #aaa;\n}\n\n\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:first-child {\n    color: #aaa; \n}\n\nselect[_ngcontent-%COMP%]:invalid {\n    color: #aaa; \n}\n\n\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:not(:first-child) {\n    color: #555; \n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 0;\n    margin-top: 20px;\n    background: linear-gradient(135deg, #2c3e50, #2980b9); \n    color: white;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: box-shadow 0.3s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\nbutton[_ngcontent-%COMP%]:active {\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 14px;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VyY3JlYXRlc2F2aW5nc3BsYW4vbWFuYWdlcmNyZWF0ZXNhdmluZ3NwbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGOztBQUV4RjtJQUNJLHFGQUFxRjtJQUNyRixnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1RkFBdUY7SUFDdkYsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWSxFQUFFLGtDQUFrQztJQUNoRCxpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGVBQWU7SUFDZiwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWMsRUFBRSxpQ0FBaUM7QUFDckQ7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxvQkFBb0I7SUFDcEIsMENBQTBDO0lBQzFDLFdBQVc7QUFDZjs7QUFFQSwrQ0FBK0M7O0FBQy9DO0lBQ0ksV0FBVyxFQUFFLDJCQUEyQjtBQUM1Qzs7QUFFQTtJQUNJLFdBQVcsRUFBRSwyQkFBMkI7QUFDNUM7O0FBRUEsZ0RBQWdEOztBQUNoRDtJQUNJLFdBQVcsRUFBRSxzQkFBc0I7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxREFBcUQsRUFBRSwyQkFBMkI7SUFDbEYsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlcmNyZWF0ZXNhdmluZ3NwbGFuL21hbmFnZXJjcmVhdGVzYXZpbmdzcGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg2OSwgMTg2LCAyMzcsIDAuMSksIHJnYmEoMjUyLCAyNTUsIDYxLCAwLjEpKTtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5iYWNrZ3JvdW5kLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNjksIDE4NiwgMjM3LCAwLjE1KSwgcmdiYSgyNTIsIDI1NSwgNjEsIDAuMTUpKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuZm9ybSB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogYmxhY2s7IC8qIENoYW5nZSBoZWFkaW5nIGNvbG9yIHRvIGJsYWNrICovXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MsIHBhZGRpbmcgMC4zcztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwN2JmZjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG5pbnB1dDpmb2N1cyArIGxhYmVsLCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsLFxuc2VsZWN0OmZvY3VzICsgbGFiZWwsIHNlbGVjdDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsLFxudGV4dGFyZWE6Zm9jdXMgKyBsYWJlbCwgdGV4dGFyZWE6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM0NWJhZWQ7IC8qIEJsdWUgY29sb3IgZnJvbSB0aGUgZ3JhZGllbnQgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLCBzZWxlY3Q6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgZm9udC1zaXplIDAuM3M7XG4gICAgY29sb3I6ICNhYWE7XG59XG5cbi8qIFdvcmthcm91bmQgZm9yIHN0eWxpbmcgc2VsZWN0IHBsYWNlaG9sZGVycyAqL1xuc2VsZWN0IG9wdGlvbjpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6ICNhYWE7IC8qIExpZ2h0ZW4gdGhlIHRleHQgY29sb3IgKi9cbn1cblxuc2VsZWN0OmludmFsaWQge1xuICAgIGNvbG9yOiAjYWFhOyAvKiBMaWdodGVuIHRoZSB0ZXh0IGNvbG9yICovXG59XG5cbi8qIEVuc3VyZSBvdGhlciBvcHRpb25zIGhhdmUgbm9ybWFsIHRleHQgY29sb3IgKi9cbnNlbGVjdCBvcHRpb246bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIGNvbG9yOiAjNTU1OyAvKiBOb3JtYWwgdGV4dCBjb2xvciAqL1xufVxuXG5idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyYzNlNTAsICMyOTgwYjkpOyAvKiBVcGRhdGVkIGdyYWRpZW50IGNvbG9yICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSBpbnNldDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagercreatesavingsplanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-managercreatesavingsplan',
                templateUrl: './managercreatesavingsplan.component.html',
                styleUrls: ['./managercreatesavingsplan.component.css']
            }]
    }], function () { return [{ type: src_app_services_savingsplan_service__WEBPACK_IMPORTED_MODULE_3__["SavingsplanService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "W+t2":
/*!*********************************************************!*\
  !*** ./src/app/components/usernav/usernav.component.ts ***!
  \*********************************************************/
/*! exports provided: UsernavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernavComponent", function() { return UsernavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UsernavComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsernavComponent.ɵfac = function UsernavComponent_Factory(t) { return new (t || UsernavComponent)(); };
UsernavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsernavComponent, selectors: [["app-usernav"]], decls: 2, vars: 0, template: function UsernavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "usernav works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcm5hdi91c2VybmF2LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsernavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usernav',
                templateUrl: './usernav.component.html',
                styleUrls: ['./usernav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.login = {
            Email: '',
            Password: ''
        };
        this.checkEmailandPassword = false;
        this.role = '';
        this.hidePassword = true;
    }
    ngOnInit() { }
    togglePasswordVisibility() {
        this.hidePassword = !this.hidePassword;
    }
    addlogin() {
        this.authService.login(this.login).subscribe((res) => {
            console.log(res);
            localStorage.setItem("authToken", res.token);
            this.authService.isRole();
            this.role = localStorage.getItem('userRole').toLowerCase();
            console.log(this.role);
            this.router.navigate([`home`]);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Success!',
                text: 'Login Successful!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }, error => {
            this.checkEmailandPassword = true;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Error!',
                text: 'Login Failed. Please try again.',
                icon: 'error',
                timer: 1500,
                showConfirmButton: false
            });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 12, consts: [[1, "background-wrapper"], [1, "container"], [3, "ngSubmit"], ["loginform", "ngForm"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "form-group"], ["type", "text", "name", "email", "id", "email", "required", "", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["em", "ngModel"], ["for", "email"], [1, "asterisk", 2, "color", "red"], ["class", "error-message", 4, "ngIf"], [1, "password-field"], ["name", "password", "id", "password", "required", "", "placeholder", "Password", 1, "form-control", 3, "type", "ngModel", "ngModelChange"], ["pass", "ngModel"], [1, "toggle-password", "fas", 3, "click"], ["for", "password"], [1, "panel-footer"], ["class", "form-group", 4, "ngIf"], [1, "text-center"], ["routerLink", "/register", 1, "custom-link"], [1, "error-message"], [1, "text-danger"], ["disabled", "", 1, "form-control", "btn", "btn-secondary"], [1, "form-control", "btn", "btn-success"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.addlogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.login.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.login.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_23_listener() { return ctx.togglePasswordVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginComponent_div_28_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_div_31_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.required) && (_r1.touched || _r1.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text")("ngModel", ctx.login.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fa-eye", ctx.hidePassword)("fa-eye-slash", !ctx.hidePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r4.errors == null ? null : _r4.errors.required) && (_r4.touched || _r4.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.invalid);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\nbody[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1));\n    font-family: 'Arial', sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n\n.background-wrapper[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, rgba(69, 186, 237, 0.15), rgba(252, 255, 61, 0.15));\n    padding: 20px;\n    border-radius: 8px;\n}\n\nform[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 50px auto;\n    padding: 20px;\n    background-color: white;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    color: black;\n    font-family: 'Roboto', sans-serif;\n    font-size: 2rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n    width: 100%;\n}\n\n.password-field[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n}\n\n.toggle-password[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 15px;\n    cursor: pointer;\n    color: #666;\n    z-index: 3;\n}\n\n.toggle-password[_ngcontent-%COMP%]:hover {\n    color: #45baed;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0;\n    border: none;\n    border-bottom: 2px solid #ccc;\n    font-size: 14px;\n    transition: border-color 0.3s, padding 0.3s;\n    background: none;\n    color: #555;\n    \n    padding-top: 25px;\n    line-height: 1.5;\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n    border-bottom-color: #007bff;\n    outline: none;\n    padding-top: 25px;\n}\n\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%] {\n    transform: translateY(-25px);\n    font-size: 15px;\n    color: #45baed;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, select[_ngcontent-%COMP%]::placeholder {\n    color: transparent;\n}\n\nlabel[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 1px;\n    left: 0;\n    pointer-events: none;\n    transition: transform 0.3s, font-size 0.3s;\n    color: #aaa;\n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 0;\n    margin-top: 20px;\n    background: linear-gradient(135deg, #45baed, #fcff3d) !important;\n    color: white !important;\n    border: none !important;\n    border-radius: 4px !important;\n    font-size: 16px !important;\n    cursor: pointer;\n    transition: box-shadow 0.3s !important;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset !important;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 14px;\n    margin-top: 10px;\n}\n\n.panel[_ngcontent-%COMP%] {\n    border: none;\n    box-shadow: none;\n}\n\n.panel-heading[_ngcontent-%COMP%] {\n    background: none;\n    border-bottom: none;\n    padding: 0;\n}\n\n.panel-footer[_ngcontent-%COMP%] {\n    background: none;\n    border-top: none;\n    padding: 0;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    border: none;\n    border-bottom: 2px solid #ccc;\n    border-radius: 0;\n    padding: 15px 0;\n    background: none;\n    color: #555;\n    font-size: 14px;\n    transition: border-color 0.3s, padding 0.3s;\n    \n    padding-top: 25px;\n    line-height: 1.5;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n    border-bottom-color: #007bff;\n    outline: none;\n    padding-top: 25px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%] {\n    transform: translateY(-25px);\n    font-size: 15px;\n    color: #45baed;\n}\n\n.text-center[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 20px;\n}\n\n.custom-link[_ngcontent-%COMP%] {\n    color: #007bff;\n    text-decoration: none;\n}\n\n.custom-link[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3Rjs7QUFFeEY7SUFDSSxxRkFBcUY7SUFDckYsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUZBQXVGO0lBQ3ZGLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsc0VBQXNFO0lBQ3RFLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxvQkFBb0I7SUFDcEIsMENBQTBDO0lBQzFDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLHNFQUFzRTtJQUN0RSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNjksIDE4NiwgMjM3LCAwLjEpLCByZ2JhKDI1MiwgMjU1LCA2MSwgMC4xKSk7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmFja2dyb3VuZC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDY5LCAxODYsIDIzNywgMC4xNSksIHJnYmEoMjUyLCAyNTUsIDYxLCAwLjE1KSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmZvcm0ge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBhc3N3b3JkLWZpZWxkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50b2dnbGUtcGFzc3dvcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi50b2dnbGUtcGFzc3dvcmQ6aG92ZXIge1xuICAgIGNvbG9yOiAjNDViYWVkO1xufVxuXG5pbnB1dCwgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcywgcGFkZGluZyAwLjNzO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgLyogQ2hhbmdlZCBwYWRkaW5nIGFuZCBsaW5lIGhlaWdodCB0byBhdm9pZCBtZXJnaW5nIHdpdGggcGxhY2Vob2xkZXIgKi9cbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDA3YmZmO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbmlucHV0OmZvY3VzICsgbGFiZWwsIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgbGFiZWwsXG5zZWxlY3Q6Zm9jdXMgKyBsYWJlbCwgc2VsZWN0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNDViYWVkO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsIHNlbGVjdDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFweDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBmb250LXNpemUgMC4zcztcbiAgICBjb2xvcjogI2FhYTtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNDViYWVkLCAjZmNmZjNkKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMikgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMikgaW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wYW5lbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wYW5lbC1oZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnBhbmVsLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcywgcGFkZGluZyAwLjNzO1xuICAgIC8qIENoYW5nZWQgcGFkZGluZyBhbmQgbGluZSBoZWlnaHQgdG8gYXZvaWQgbWVyZ2luZyB3aXRoIHBsYWNlaG9sZGVyICovXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwN2JmZjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzICsgbGFiZWwsIC5mb3JtLWNvbnRyb2w6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM0NWJhZWQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jdXN0b20tbGluayB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY3VzdG9tLWxpbms6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Xlt+":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/managerviewapplicationform/managerviewapplicationform.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ManagerviewapplicationformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerviewapplicationformComponent", function() { return ManagerviewapplicationformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_planapplicationform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/planapplicationform.service */ "7lJs");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../managernav/managernav.component */ "hTLC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error/error.component */ "7AdY");









function ManagerviewapplicationformComponent_div_0_tr_34_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerviewapplicationformComponent_div_0_tr_34_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const planApplication_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.approve(planApplication_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerviewapplicationformComponent_div_0_tr_34_div_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const planApplication_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.reject(planApplication_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "approved-status": a0, "rejected-status": a1 }; };
function ManagerviewapplicationformComponent_div_0_tr_34_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planApplication_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, planApplication_r4.Status === "Approved", planApplication_r4.Status === "Rejected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", planApplication_r4.Status, " ");
} }
function ManagerviewapplicationformComponent_div_0_tr_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManagerviewapplicationformComponent_div_0_tr_34_div_16_Template, 5, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManagerviewapplicationformComponent_div_0_tr_34_div_17_Template, 3, 5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerviewapplicationformComponent_div_0_tr_34_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const planApplication_r4 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r14.showPopup = true; return ctx_r14.popupImageSrc = "../../../" + planApplication_r4.ProofDocument; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planApplication_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planApplication_r4.User == null ? null : planApplication_r4.User.Username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planApplication_r4.SavingsPlan == null ? null : planApplication_r4.SavingsPlan.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](9, 8, planApplication_r4.AppliedAmount, "INR", "symbol", "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 13, planApplication_r4.ApplicationDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planApplication_r4.Remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", planApplication_r4.Status === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", planApplication_r4.Status !== "Pending");
} }
function ManagerviewapplicationformComponent_div_0_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerviewapplicationformComponent_div_0_div_35_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.showPopup = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.popupImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerviewapplicationformComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-managernav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Requested Application Forms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagerviewapplicationformComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.searchPlanName = $event; })("input", function ManagerviewapplicationformComponent_div_0_Template_input_input_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.filterApplicationsByPlanName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "S. No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Applicant Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Plan Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Applied Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerviewapplicationformComponent_div_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.sortAmountAscending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u25BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerviewapplicationformComponent_div_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.sortAmountDescending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u25B2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Application Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Proof of document");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ManagerviewapplicationformComponent_div_0_tr_34_Template, 21, 16, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ManagerviewapplicationformComponent_div_0_div_35_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchPlanName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filteredPlanApplications);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showPopup);
} }
function ManagerviewapplicationformComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManagerviewapplicationformComponent {
    constructor(planApplicationformService, sanitizer, authService) {
        this.planApplicationformService = planApplicationformService;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.planApplications = [];
        this.filteredPlanApplications = [];
        this.showPopup = false;
        this.searchPlanName = '';
    }
    ngOnInit() {
        this.getAllPlanApplications();
    }
    getAllPlanApplications() {
        this.planApplicationformService.getAllPlanApplications().subscribe((data) => {
            this.planApplications = data.map(application => (Object.assign(Object.assign({}, application), { SavingsPlan: application.SavingsPlan || {} // Ensure SavingsPlan is defined
             })));
            this.filteredPlanApplications = this.planApplications;
            console.log("getall in comp ", this.planApplications);
        });
    }
    sortAmountAscending() {
        this.filteredPlanApplications = [...this.filteredPlanApplications.sort((a, b) => a.AppliedAmount - b.AppliedAmount)];
    }
    sortAmountDescending() {
        this.filteredPlanApplications = [...this.filteredPlanApplications.sort((a, b) => b.AppliedAmount - a.AppliedAmount)];
    }
    filterApplicationsByPlanName() {
        if (this.searchPlanName.trim()) {
            this.filteredPlanApplications = this.planApplications.filter(app => { var _a, _b; return (_b = (_a = app.SavingsPlan) === null || _a === void 0 ? void 0 : _a.Name) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(this.searchPlanName.toLowerCase()); });
        }
        else {
            this.filteredPlanApplications = [...this.planApplications];
        }
    }
    approve(planApplication) {
        if (planApplication.Status === 'Pending') {
            planApplication.Status = 'Approved';
            console.log(planApplication.Status);
            this.planApplicationformService.updatePlanApplication(planApplication.PlanApplicationId, planApplication).subscribe((data) => {
                this.getAllPlanApplications();
                this.newStatus = planApplication.Status;
            });
        }
    }
    reject(planApplication) {
        if (planApplication.Status === 'Pending') {
            planApplication.Status = 'Rejected';
            console.log(planApplication.Status);
            this.planApplicationformService.updatePlanApplication(planApplication.PlanApplicationId, planApplication).subscribe((data) => {
                this.getAllPlanApplications();
                this.newStatus = planApplication.Status;
            });
        }
    }
    getDocumentUrl(base64String) {
        const url = `data:application/pdf;base64,${base64String}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
ManagerviewapplicationformComponent.ɵfac = function ManagerviewapplicationformComponent_Factory(t) { return new (t || ManagerviewapplicationformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_planapplicationform_service__WEBPACK_IMPORTED_MODULE_1__["PlanapplicationformService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ManagerviewapplicationformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerviewapplicationformComponent, selectors: [["app-managerviewapplicationform"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "background-wrapper"], [1, "container"], [1, "table", "table-striped"], [1, "no-border-bottom"], ["colspan", "8", 2, "text-align", "center"], ["type", "text", "placeholder", "Search by Plan Name", 1, "search-bar", 3, "ngModel", "ngModelChange", "input"], [1, "sort-btn-container"], [1, "sort-btn", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "popup", 4, "ngIf"], ["class", "action-buttons", 4, "ngIf"], [1, "view-button", 3, "click"], [1, "action-buttons"], [1, "approve-button", 3, "click"], [1, "reject-button", 3, "click"], [3, "ngClass"], [1, "popup"], [1, "popup-content"], [1, "close", 3, "click"], ["alt", "Document Proof", 3, "src"]], template: function ManagerviewapplicationformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManagerviewapplicationformComponent_div_0_Template, 36, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerviewapplicationformComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_5__["ManagernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1)); \n  color: #1f1c2c;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh; \n}\n\n.background-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(69, 186, 237, 0.15), rgba(252, 255, 61, 0.15)); \n  padding: 20px;\n  border-radius: 8px;\n  width: 100%;\n  min-height: 100vh; \n  display: flex;\n  justify-content: center;\n  align-items: flex-start; \n  padding-top: 30px; \n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; \n  align-items: center; \n  width: 100%;\n  max-width: 1200px;\n  padding: 20px;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center; \n  color: #1f1c2c;\n  font-family: 'Roboto', sans-serif; \n  margin-top: 10px; \n  margin-bottom: 20px; \n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center; \n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  width: 300px; \n  font-size: 16px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #ffffff;\n  background-color: #1f1c2c;\n  transition: background 0.3s ease, transform 0.3s ease;\n  display: inline-block; \n}\n\nbutton.approve-button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n}\n\nbutton.reject-button[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n\nbutton.view-button[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n  color: white;\n}\n\n.sort-btn-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.sort-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  color: #1f1c2c;\n}\n\nbutton.sort-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: #ffffff;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px rgba(24, 96, 184, 0.25);\n  animation: fadeIn 1s ease-in-out;\n  overflow: hidden;\n  margin: 0; \n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #1f1c2c;\n  border-radius: 15px 15px 0 0;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  text-align: center; \n  border-bottom: 1px solid #ddd;\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.no-border-bottom[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { \n  border-bottom: none;  \n}\n\n.table[_ngcontent-%COMP%]   th.action-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-right: 40px;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f4f4f4;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n  border-radius: 0 0 15px 15px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.3s ease, transform 0.3s ease;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6a11cb, #2575fc);\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #2575fc, #6a11cb);\n  transform: scale(1.05);\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ff1744, #d50000);\n}\n\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #d50000, #ff1744);\n  transform: scale(1.05);\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.approved-status[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  font-weight: bold;\n}\n\n.rejected-status[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-weight: bold;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.popup[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 20px;\n  border-radius: 8px;\n  position: relative;\n  max-width: 80%;\n  max-height: 80%;\n  overflow: auto;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\n}\n\n.popup-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2Vydmlld2FwcGxpY2F0aW9uZm9ybS9tYW5hZ2Vydmlld2FwcGxpY2F0aW9uZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3Rjs7QUFFeEY7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHFGQUFxRixFQUFFLHVCQUF1QjtFQUM5RyxjQUFjO0VBQ2QsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBRSxxREFBcUQ7QUFDMUU7O0FBRUE7RUFDRSx1RkFBdUYsRUFBRSx1QkFBdUI7RUFDaEgsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCLEVBQUUscURBQXFEO0VBQ3hFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELGlCQUFpQixFQUFFLHNDQUFzQztBQUMzRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUUsMkJBQTJCO0VBQ3hELG1CQUFtQixFQUFFLDhCQUE4QjtFQUNuRCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLHlCQUF5QjtFQUM3QyxjQUFjO0VBQ2QsaUNBQWlDLEVBQUUsdUJBQXVCO0VBQzFELGdCQUFnQixFQUFFLHFDQUFxQztFQUN2RCxtQkFBbUIsRUFBRSxpQ0FBaUM7QUFDeEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUUsMEJBQTBCO0VBQ25ELFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUUsbUNBQW1DO0VBQ2pELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscURBQXFEO0VBQ3JELHFCQUFxQixFQUFFLHdDQUF3QztBQUNqRTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsU0FBUyxFQUFFLHVDQUF1QztBQUNwRDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFFLGtDQUFrQztFQUN0RCw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQixFQUFFLHFEQUFxRDtBQUM1RTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2Vydmlld2FwcGxpY2F0aW9uZm9ybS9tYW5hZ2Vydmlld2FwcGxpY2F0aW9uZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg2OSwgMTg2LCAyMzcsIDAuMSksIHJnYmEoMjUyLCAyNTUsIDYxLCAwLjEpKTsgLyogVXBkYXRlZCBiYWNrZ3JvdW5kICovXG4gIGNvbG9yOiAjMWYxYzJjO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRW5zdXJlIHRoZSBiYWNrZ3JvdW5kIGNvdmVycyB0aGUgZW50aXJlIHZpZXdwb3J0ICovXG59XG5cbi5iYWNrZ3JvdW5kLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDY5LCAxODYsIDIzNywgMC4xNSksIHJnYmEoMjUyLCAyNTUsIDYxLCAwLjE1KSk7IC8qIEJhY2tncm91bmQgd3JhcHBlciAqL1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRW5zdXJlIHRoZSBiYWNrZ3JvdW5kIGNvdmVycyB0aGUgZW50aXJlIHZpZXdwb3J0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gaXRlbXMgdG8gdGhlIHRvcCAqL1xuICBwYWRkaW5nLXRvcDogMzBweDsgLyogUmVkdWNlIHBhZGRpbmcgdG8gbW92ZSBjb250ZW50IHVwICovXG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSB0b3AgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGl0ZW1zIGhvcml6b250YWxseSAqL1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXItYWxpZ24gaGVhZGluZyAqL1xuICBjb2xvcjogIzFmMWMyYztcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAvKiBTZXQgZm9udCB0byBSb2JvdG8gKi9cbiAgbWFyZ2luLXRvcDogMTBweDsgLyogUmVkdWNlIG1hcmdpbiB0byBtb3ZlIGhlYWRpbmcgdXAgKi9cbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRkcyBzcGFjZSBiZWxvdyB0aGUgaGVhZGluZyAqL1xufVxuXG4udG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgdGhlIHNlYXJjaCBiYXIgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDMwMHB4OyAvKiBNZWRpdW0gc2l6ZSBmb3IgdGhlIHNlYXJjaCBiYXIgKi9cbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxYzJjO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiBFbnN1cmVzIGJ1dHRvbnMgYXJlIGlubGluZSBlbGVtZW50cyAqL1xufVxuXG5idXR0b24uYXBwcm92ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbi5yZWplY3QtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24udmlldy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zb3J0LWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnNvcnQtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxZjFjMmM7XG59XG5cbmJ1dHRvbi5zb3J0LWJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDI0LCA5NiwgMTg0LCAwLjI1KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDsgLyogUmVtb3ZlIGFueSBtYXJnaW4gYXJvdW5kIHRoZSB0YWJsZSAqL1xufVxuXG4udGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzFmMWMyYztcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbn1cblxuLnRhYmxlIHRoLCAudGFibGUgdGQge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyLWFsaWducyBhbGwgdGFibGUgY2VsbHMgKi9cbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uby1ib3JkZXItYm90dG9tIHRoIHsgXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIFJlbW92ZSBib3R0b20gYm9yZGVyIGZyb20gdGggZWxlbWVudHMgaW4gdGhlIHJvdyAqLyBcbn1cblxuLnRhYmxlIHRoLmFjdGlvbi1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG4udGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmExMWNiLCAjMjU3NWZjKTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI1NzVmYywgIzZhMTFjYik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmMTc0NCwgI2Q1MDAwMCk7XG59XG5cbi5idG4tZGFuZ2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Q1MDAwMCwgI2ZmMTc0NCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwcm92ZWQtc3RhdHVzIHtcbiAgY29sb3I6ICM0Q0FGNTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmVqZWN0ZWQtc3RhdHVzIHtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLnBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXgtaGVpZ2h0OiA4MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5wb3B1cC1jb250ZW50IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMzMzO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerviewapplicationformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-managerviewapplicationform',
                templateUrl: './managerviewapplicationform.component.html',
                styleUrls: ['./managerviewapplicationform.component.css']
            }]
    }], function () { return [{ type: src_app_services_planapplicationform_service__WEBPACK_IMPORTED_MODULE_1__["PlanapplicationformService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_managercreatesavingsplan_managercreatesavingsplan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/managercreatesavingsplan/managercreatesavingsplan.component */ "Us07");
/* harmony import */ var _components_managereditsavingsplan_managereditsavingsplan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/managereditsavingsplan/managereditsavingsplan.component */ "QX/1");
/* harmony import */ var _components_managernav_managernav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/managernav/managernav.component */ "hTLC");
/* harmony import */ var _components_managerviewapplicationform_managerviewapplicationform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/managerviewapplicationform/managerviewapplicationform.component */ "Xlt+");
/* harmony import */ var _components_managerviewfeedback_managerviewfeedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/managerviewfeedback/managerviewfeedback.component */ "jrcS");
/* harmony import */ var _components_managerviewsavingsplan_managerviewsavingsplan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/managerviewsavingsplan/managerviewsavingsplan.component */ "eVi5");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/registration/registration.component */ "dtpt");
/* harmony import */ var _components_useraddfeedback_useraddfeedback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/useraddfeedback/useraddfeedback.component */ "R/xc");
/* harmony import */ var _components_userappliedplans_userappliedplans_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/userappliedplans/userappliedplans.component */ "8rMt");
/* harmony import */ var _components_usernav_usernav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/usernav/usernav.component */ "W+t2");
/* harmony import */ var _components_userplanapplicationform_userplanapplicationform_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/userplanapplicationform/userplanapplicationform.component */ "ojcb");
/* harmony import */ var _components_userviewfeedback_userviewfeedback_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/userviewfeedback/userviewfeedback.component */ "SFPI");
/* harmony import */ var _components_userviewsavingsplan_userviewsavingsplan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/userviewsavingsplan/userviewsavingsplan.component */ "dh8C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




// @NgModule({
//   declarations: [
//     AppComponent



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _components_managercreatesavingsplan_managercreatesavingsplan_component__WEBPACK_IMPORTED_MODULE_7__["ManagercreatesavingsplanComponent"],
        _components_managereditsavingsplan_managereditsavingsplan_component__WEBPACK_IMPORTED_MODULE_8__["ManagereditsavingsplanComponent"],
        _components_managernav_managernav_component__WEBPACK_IMPORTED_MODULE_9__["ManagernavComponent"],
        _components_managerviewapplicationform_managerviewapplicationform_component__WEBPACK_IMPORTED_MODULE_10__["ManagerviewapplicationformComponent"],
        _components_managerviewfeedback_managerviewfeedback_component__WEBPACK_IMPORTED_MODULE_11__["ManagerviewfeedbackComponent"],
        _components_managerviewsavingsplan_managerviewsavingsplan_component__WEBPACK_IMPORTED_MODULE_12__["ManagerviewsavingsplanComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
        _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"],
        _components_useraddfeedback_useraddfeedback_component__WEBPACK_IMPORTED_MODULE_15__["UseraddfeedbackComponent"],
        _components_userappliedplans_userappliedplans_component__WEBPACK_IMPORTED_MODULE_16__["UserappliedplansComponent"],
        _components_usernav_usernav_component__WEBPACK_IMPORTED_MODULE_17__["UsernavComponent"],
        _components_userplanapplicationform_userplanapplicationform_component__WEBPACK_IMPORTED_MODULE_18__["UserplanapplicationformComponent"],
        _components_userviewfeedback_userviewfeedback_component__WEBPACK_IMPORTED_MODULE_19__["UserviewfeedbackComponent"],
        _components_userviewsavingsplan_userviewsavingsplan_component__WEBPACK_IMPORTED_MODULE_20__["UserviewsavingsplanComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _components_managercreatesavingsplan_managercreatesavingsplan_component__WEBPACK_IMPORTED_MODULE_7__["ManagercreatesavingsplanComponent"],
                    _components_managereditsavingsplan_managereditsavingsplan_component__WEBPACK_IMPORTED_MODULE_8__["ManagereditsavingsplanComponent"],
                    _components_managernav_managernav_component__WEBPACK_IMPORTED_MODULE_9__["ManagernavComponent"],
                    _components_managerviewapplicationform_managerviewapplicationform_component__WEBPACK_IMPORTED_MODULE_10__["ManagerviewapplicationformComponent"],
                    _components_managerviewfeedback_managerviewfeedback_component__WEBPACK_IMPORTED_MODULE_11__["ManagerviewfeedbackComponent"],
                    _components_managerviewsavingsplan_managerviewsavingsplan_component__WEBPACK_IMPORTED_MODULE_12__["ManagerviewsavingsplanComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                    _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"],
                    _components_useraddfeedback_useraddfeedback_component__WEBPACK_IMPORTED_MODULE_15__["UseraddfeedbackComponent"],
                    _components_userappliedplans_userappliedplans_component__WEBPACK_IMPORTED_MODULE_16__["UserappliedplansComponent"],
                    _components_usernav_usernav_component__WEBPACK_IMPORTED_MODULE_17__["UsernavComponent"],
                    _components_userplanapplicationform_userplanapplicationform_component__WEBPACK_IMPORTED_MODULE_18__["UserplanapplicationformComponent"],
                    _components_userviewfeedback_userviewfeedback_component__WEBPACK_IMPORTED_MODULE_19__["UserviewfeedbackComponent"],
                    _components_userviewsavingsplan_userviewsavingsplan_component__WEBPACK_IMPORTED_MODULE_20__["UserviewsavingsplanComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dh8C":
/*!*********************************************************************************!*\
  !*** ./src/app/components/userviewsavingsplan/userviewsavingsplan.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserviewsavingsplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserviewsavingsplanComponent", function() { return UserviewsavingsplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserviewsavingsplanComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserviewsavingsplanComponent.ɵfac = function UserviewsavingsplanComponent_Factory(t) { return new (t || UserviewsavingsplanComponent)(); };
UserviewsavingsplanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserviewsavingsplanComponent, selectors: [["app-userviewsavingsplan"]], decls: 2, vars: 0, template: function UserviewsavingsplanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Savings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnZpZXdzYXZpbmdzcGxhbi91c2Vydmlld3NhdmluZ3NwbGFuLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserviewsavingsplanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userviewsavingsplan',
                templateUrl: './userviewsavingsplan.component.html',
                styleUrls: ['./userviewsavingsplan.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dtpt":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RegistrationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Username must contain letters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password must include at least one lowercase, one uppercase, one digit, and one special character with a minimum length of 8 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Passwords do not match!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile Number must have 10 digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile Number must contain only numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Role is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("*", ctx_r21.err, "");
} }
class RegistrationComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.newUser = {
            Email: "",
            Password: "",
            Username: "",
            MobileNumber: "",
            UserRole: ""
        };
        this.err = "";
        this.showPassword = false;
        this.confirmPassword = "";
        this.checkUserExists = false;
        this.pdfTermsAccepted = false;
        this.regionalManagerCode = '0000';
    }
    ngOnInit() { }
    register() {
        if (!this.pdfTermsAccepted) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Terms Required',
                text: 'Please accept the terms and conditions to proceed',
                icon: 'warning',
                timer: 1500,
                showConfirmButton: false
            });
            return;
        }
        const userRole = this.newUser.UserRole;
        if (userRole === 'RegionalManager') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Enter the code',
                input: 'text',
                inputLabel: 'Please enter the code for Regional Manager',
                inputValidator: (value) => {
                    if (!value) {
                        return 'You need to enter a code!';
                    }
                    else if (value !== this.regionalManagerCode) {
                        return 'Invalid code!';
                    }
                },
                showCancelButton: true,
                confirmButtonText: 'Submit',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.completeRegistration();
                }
            });
        }
        else {
            this.completeRegistration();
        }
    }
    completeRegistration() {
        this.authService.register(this.newUser).subscribe((res) => {
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Success!',
                text: 'Registration Successful!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                this.router.navigate(['/login']);
            });
        }, (error) => {
            this.checkUserExists = true;
            this.err = error.error;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Error!',
                text: 'Registration Failed. Please try again.',
                icon: 'error',
                timer: 1500,
                showConfirmButton: false
            });
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 70, vars: 22, consts: [[1, "background-wrapper"], [1, "container"], [3, "ngSubmit"], ["registerform", "ngForm"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "form-group"], ["type", "text", "placeholder", "Username", "name", "userName", "id", "userName", "required", "", "pattern", "^(?=.*[a-zA-Z])[a-zA-Z0-9]*$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["un", "ngModel"], ["for", "userName"], ["class", "error-message", 4, "ngIf"], ["type", "text", "placeholder", "Email", "name", "email", "id", "email", "required", "", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["em", "ngModel"], ["for", "email"], [1, "input-container"], ["type", "password", "placeholder", "Password", "name", "password", "id", "password", "required", "", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pass", "ngModel"], ["for", "password"], ["type", "password", "placeholder", "Confirm Password", "name", "confirmPassword", "id", "confirmPassword", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cpass", "ngModel"], ["for", "confirmPassword"], ["type", "tel", "placeholder", "Mobile Number", "name", "mobileNumber", "id", "mobileNumber", "minlength", "10", "maxlength", "10", "required", "", "pattern", "[0-9]{10}", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mn", "ngModel"], ["for", "mobileNumber"], ["name", "role", "id", "role", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ur", "ngModel"], ["value", "", "hidden", "", "selected", "", "disabled", ""], ["value", "RegionalManager"], ["value", "Customer"], ["for", "role"], [1, "form-group", "terms-section"], [1, "terms-checkbox-container"], ["type", "checkbox", "id", "pdfTermsCheckbox", "name", "pdfTermsCheckbox", "required", "", 3, "ngModel", "ngModelChange"], ["for", "pdfTermsCheckbox", 1, "checkbox-label"], ["href", "assets/pdfs/PrivacyPolicy.pdf", "target", "_blank"], [1, "panel-footer"], ["class", "form-group", 4, "ngIf"], [1, "error-message"], [1, "text-danger"], ["disabled", "", 1, "form-control", "btn", "btn-default"], [1, "form-control", "btn", "btn-success"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_3_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newUser.Username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistrationComponent_div_15_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegistrationComponent_div_16_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_18_listener($event) { return ctx.newUser.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegistrationComponent_div_22_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegistrationComponent_div_23_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_26_listener($event) { return ctx.newUser.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegistrationComponent_div_30_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegistrationComponent_div_31_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_33_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegistrationComponent_div_37_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RegistrationComponent_div_38_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_40_listener($event) { return ctx.newUser.MobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RegistrationComponent_div_44_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RegistrationComponent_div_45_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RegistrationComponent_div_46_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_select_ngModelChange_48_listener($event) { return ctx.newUser.UserRole = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Select a Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Regional Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, RegistrationComponent_div_58_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_61_listener($event) { return ctx.pdfTermsAccepted = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " I have read and agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, RegistrationComponent_div_67_Template, 3, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, RegistrationComponent_div_68_Template, 3, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, RegistrationComponent_div_69_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.Username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.required) && (_r1.touched || _r1.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r4.errors == null ? null : _r4.errors.required) && (_r4.touched || _r4.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.required) && (_r7.touched || _r7.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r10.errors == null ? null : _r10.errors.required) && (_r10.touched || _r10.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPassword !== _r7.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.MobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.required) && (_r13.touched || _r13.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.minlength) || (_r13.errors == null ? null : _r13.errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.pattern) && (_r13.touched || _r13.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.UserRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r17.errors == null ? null : _r17.errors.required) && (_r17.touched || _r17.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pdfTermsAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid || !ctx.pdfTermsAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.invalid && ctx.pdfTermsAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkUserExists && _r0.submitted);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\nbody[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1));\n    font-family: 'Arial', sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n\n.background-wrapper[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, rgba(69, 186, 237, 0.15), rgba(252, 255, 61, 0.15));\n    padding: 20px;\n    border-radius: 8px;\n}\n\nform[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 50px auto;\n    padding: 20px;\n    background-color: white;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n    color: black;\n    font-family: 'Roboto', sans-serif;\n    font-size: 2rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n    width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n    content: '*';\n    color: red;\n    margin-left: 4px;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px 0;\n    border: none;\n    border-bottom: 2px solid #ccc;\n    font-size: 14px;\n    transition: border-color 0.3s, padding 0.3s;\n    background: none;\n    color: #555;\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n    border-bottom-color: #007bff;\n    outline: none;\n    padding-top: 25px;\n}\n\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%] {\n    transform: translateY(-25px);\n    font-size: 15px;\n    color: #45baed;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, select[_ngcontent-%COMP%]::placeholder {\n    color: transparent;\n}\n\nlabel[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    pointer-events: none;\n    transition: transform 0.3s, font-size 0.3s;\n    color: #aaa;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 0;\n    margin-top: 20px;\n    background: linear-gradient(135deg, #45baed, #fcff3d);\n    color: white;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\nbutton[_ngcontent-%COMP%]:active {\n    transform: translateY(0);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n    background: #cccccc;\n    cursor: not-allowed;\n    transform: none;\n    box-shadow: none;\n}\n\n\n\n.error-message[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 14px;\n    margin-top: 10px;\n}\n\n\n\n.terms-section[_ngcontent-%COMP%] {\n    margin: 20px 0;\n}\n\n.terms-checkbox-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center; \n    gap: 8px;\n    padding: 5px 0;\n}\n\n.terms-checkbox-container[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n    margin-top: 0; \n    flex-shrink: 0;\n    cursor: pointer;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #555;\n    position: static;\n    pointer-events: auto;\n    display: inline;\n    margin: 0;\n    padding: 0;\n    line-height: 20px;\n    vertical-align: middle; \n}\n\n.checkbox-label[_ngcontent-%COMP%]::after {\n    content: none;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #45baed;\n    text-decoration: none;\n    font-weight: bold;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n\n\n@media (max-width: 768px) {\n    form[_ngcontent-%COMP%] {\n        margin: 20px auto;\n        padding: 15px;\n    }\n\n    .terms-checkbox-container[_ngcontent-%COMP%] {\n        flex-direction: row;\n        align-items: center; \n    }\n\n    .checkbox-label[_ngcontent-%COMP%] {\n        font-size: 13px;\n        vertical-align: middle; \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGOztBQUV4RjtJQUNJLHFGQUFxRjtJQUNyRixnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1RkFBdUY7SUFDdkYsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTs7OztJQUlJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLG9CQUFvQjtJQUNwQiwwQ0FBMEM7SUFDMUMsV0FBVztBQUNmOztBQUVBLGtCQUFrQjs7QUFDbEI7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxREFBcUQ7SUFDckQsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUUsOEJBQThCO0lBQ25ELFFBQVE7SUFDUixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhLEVBQUUsc0NBQXNDO0lBQ3JELGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixzQkFBc0IsRUFBRSx3QkFBd0I7QUFDcEQ7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUEsc0JBQXNCOztBQUN0QjtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsbUJBQW1CLEVBQUUsNEJBQTRCO0lBQ3JEOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHNCQUFzQixFQUFFLHdCQUF3QjtJQUNwRDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDY5LCAxODYsIDIzNywgMC4xKSwgcmdiYSgyNTIsIDI1NSwgNjEsIDAuMSkpO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJhY2tncm91bmQtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg2OSwgMTg2LCAyMzcsIDAuMTUpLCByZ2JhKDI1MiwgMjU1LCA2MSwgMC4xNSkpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5mb3JtIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsOjphZnRlciB7XG4gICAgY29udGVudDogJyonO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuaW5wdXQsIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MsIHBhZGRpbmcgMC4zcztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDA3YmZmO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbmlucHV0OmZvY3VzICsgbGFiZWwsIFxuaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCxcbnNlbGVjdDpmb2N1cyArIGxhYmVsLCBcbnNlbGVjdDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzQ1YmFlZDtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLCBzZWxlY3Q6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGZvbnQtc2l6ZSAwLjNzO1xuICAgIGNvbG9yOiAjYWFhO1xufVxuXG4vKiBCdXR0b24gU3R5bGVzICovXG5idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0NWJhZWQsICNmY2ZmM2QpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKiBFcnJvciBNZXNzYWdlcyAqL1xuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi8qIFRlcm1zIFNlY3Rpb24gU3R5bGVzICovXG4udGVybXMtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi50ZXJtcy1jaGVja2JveC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQWxpZ24gaXRlbXMgaW4gdGhlIGNlbnRlciAqL1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuXG4udGVybXMtY2hlY2tib3gtY29udGFpbmVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDA7IC8qIFJlbW92ZSBtYXJnaW4tdG9wIHRvIGFsaWduIGNlbnRlciAqL1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrYm94LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogQWxpZ24gd2l0aCBjaGVja2JveCAqL1xufVxuXG4uY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lO1xufVxuXG4uY2hlY2tib3gtbGFiZWwgYSB7XG4gICAgY29sb3I6ICM0NWJhZWQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2hlY2tib3gtbGFiZWwgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmb3JtIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuXG4gICAgLnRlcm1zLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEVuc3VyZSBjZW50ZXIgYWxpZ25tZW50ICovXG4gICAgfVxuXG4gICAgLmNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiBBbGlnbiB3aXRoIGNoZWNrYm94ICovXG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "eVi5":
/*!***************************************************************************************!*\
  !*** ./src/app/components/managerviewsavingsplan/managerviewsavingsplan.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ManagerviewsavingsplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerviewsavingsplanComponent", function() { return ManagerviewsavingsplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_savingsplan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/savingsplan.service */ "HYps");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../managernav/managernav.component */ "hTLC");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error/error.component */ "7AdY");









function ManagerviewsavingsplanComponent_div_0_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerviewsavingsplanComponent_div_0_tr_26_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const savingsPlan_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.updateSavingsPlan(savingsPlan_r3.SavingsPlanId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerviewsavingsplanComponent_div_0_tr_26_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const savingsPlan_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.confirmDelete(savingsPlan_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const savingsPlan_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](savingsPlan_r3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](7, 7, savingsPlan_r3.GoalAmount, "INR", "symbol", "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](savingsPlan_r3.TimeFrame);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](savingsPlan_r3.RiskLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](savingsPlan_r3.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](savingsPlan_r3.Status);
} }
function ManagerviewsavingsplanComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-managernav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Savings Plans");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S. No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Plan Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Goal Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Time Frame (Years)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Risk Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ManagerviewsavingsplanComponent_div_0_tr_26_Template, 21, 12, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.savingsPlans);
} }
function ManagerviewsavingsplanComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManagerviewsavingsplanComponent {
    constructor(service, activatedRoute, router, authService) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authService = authService;
        this.savingsPlan = {
            Name: '',
            GoalAmount: 0,
            TimeFrame: 0,
            RiskLevel: 'Low',
            Description: '',
            Status: ''
        };
        this.savingsPlans = [];
        this.showMessage = false;
    }
    ngOnInit() {
        this.savingsPlanId = parseInt(this.activatedRoute.snapshot.params['id']);
        this.service.getSavingsPlanById(this.savingsPlanId).subscribe((data) => {
            this.savingsPlan = data;
            console.log(data);
        });
        this.getAllSavingsPlans();
    }
    getAllSavingsPlans() {
        this.service.getAllSavingsPlans().subscribe((data) => { this.savingsPlans = data; });
    }
    updateSavingsPlan(savingsPlanID) {
        this.router.navigate([`/managereditsavingsplan/${savingsPlanID}`]);
    }
    deleteSavingsPlan(id) {
        this.service.deleteSavingsPlan(id).subscribe(() => {
            this.getAllSavingsPlans();
        });
    }
    confirmDelete(savingsPlan) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.deleteSavingsPlan(savingsPlan.SavingsPlanId);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your savings plan has been deleted.', 'success');
            }
        });
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
ManagerviewsavingsplanComponent.ɵfac = function ManagerviewsavingsplanComponent_Factory(t) { return new (t || ManagerviewsavingsplanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_savingsplan_service__WEBPACK_IMPORTED_MODULE_2__["SavingsplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ManagerviewsavingsplanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerviewsavingsplanComponent, selectors: [["app-managerviewsavingsplan"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "background-wrapper"], [1, "container"], [1, "table", "table-striped"], [1, "action-header"], [4, "ngFor", "ngForOf"], [1, "right-align"], [1, "action-buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function ManagerviewsavingsplanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManagerviewsavingsplanComponent_div_0_Template, 27, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerviewsavingsplanComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_6__["ManagernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1));\n  color: #1f1c2c;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n  overflow-x: hidden; \n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #1f1c2c;\n  margin: 0; \n  padding: 20px 0; \n  font-family: 'Roboto', sans-serif; \n  font-size: 2rem; \n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto; \n}\n\n.background-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(69, 186, 237, 0.15), rgba(252, 255, 61, 0.15));\n  padding: 20px;\n  border-radius: 8px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 20px;\n  border-collapse: collapse;\n  background: #ffffff;\n  border-radius: 15px; \n  \n  box-shadow: 0 4px 8px rgba(24, 96, 184, 0.25);\n  animation: fadeIn 1s ease-in-out;\n  overflow: hidden;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #ffffff; \n  color: #1f1c2c; \n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) { \n  text-align: right;  \n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) { \n  text-align: center;  \n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) { \n  width: 15%;  \n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) { \n  width: 25%;  \n  text-align: center;  \n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 18px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.right-align[_ngcontent-%COMP%] { \n  text-align: right; \n}\n\n.table[_ngcontent-%COMP%]   th.action-header[_ngcontent-%COMP%] {\n  text-align: center; \n  padding-right: 40px; \n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f4f4f4;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.3s ease, transform 0.3s ease;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2979ff;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2962ff;\n  transform: scale(1.05);\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ff1745a1, #d50000a6);\n}\n\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #d50000, #ff1744);\n  transform: scale(1.05);\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly; \n  align-items: center; \n  padding:900px;\n  height: 80px;\n}\n\n@keyframes fadeIn {\n  from {\n      opacity: 0;\n      transform: translateY(-20px);\n  }\n  to {\n      opacity: 1;\n      transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2Vydmlld3NhdmluZ3NwbGFuL21hbmFnZXJ2aWV3c2F2aW5nc3BsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7O0FBRXhGO0VBQ0UsOEJBQThCO0VBQzlCLHFGQUFxRjtFQUNyRixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxrQkFBa0IsRUFBRSxpQ0FBaUM7QUFDdkQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVMsRUFBRSwyQkFBMkI7RUFDdEMsZUFBZSxFQUFFLHNDQUFzQztFQUN2RCxpQ0FBaUMsRUFBRSxzQ0FBc0M7RUFDekUsZUFBZSxFQUFFLHFDQUFxQztBQUN4RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFFLDZCQUE2QjtBQUNqRDs7QUFFQTtFQUNFLHVGQUF1RjtFQUN2RixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBRSx5Q0FBeUM7RUFDOUQscURBQXFEO0VBQ3JELDZDQUE2QztFQUM3QyxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CLEVBQUUsMENBQTBDO0VBQy9ELGNBQWMsRUFBRSw2QkFBNkI7QUFDL0M7O0FBRUE7O0VBRUUsaUJBQWlCLEVBQUUsZ0NBQWdDO0FBQ3JEOztBQUVBOzs7O0VBSUUsa0JBQWtCLEVBQUUsa0NBQWtDO0FBQ3hEOztBQUVBOztFQUVFLFVBQVUsRUFBRSxtQ0FBbUM7QUFDakQ7O0FBRUE7O0VBRUUsVUFBVSxFQUFFLHFDQUFxQztFQUNqRCxrQkFBa0IsRUFBRSxrQ0FBa0M7QUFDeEQ7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLHlDQUF5QztFQUM3RCxtQkFBbUIsRUFBRSx1REFBdUQ7QUFDOUU7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CLEVBQUUsc0NBQXNDO0VBQzNELGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtNQUNJLFVBQVU7TUFDViw0QkFBNEI7RUFDaEM7RUFDQTtNQUNJLFVBQVU7TUFDVix3QkFBd0I7RUFDNUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlcnZpZXdzYXZpbmdzcGxhbi9tYW5hZ2Vydmlld3NhdmluZ3NwbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDY5LCAxODYsIDIzNywgMC4xKSwgcmdiYSgyNTIsIDI1NSwgNjEsIDAuMSkpO1xuICBjb2xvcjogIzFmMWMyYztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBQcmV2ZW50IGhvcml6b250YWwgc2Nyb2xsaW5nICovXG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFmMWMyYztcbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmVzIGRlZmF1bHQgbWFyZ2luICovXG4gIHBhZGRpbmc6IDIwcHggMDsgLyogQWRkIHBhZGRpbmcgZm9yIGJldHRlciBhcHBlYXJhbmNlICovXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgLyogRW5zdXJlIGhlYWRpbmcgZm9udCBzdHlsZSBtYXRjaGVzICovXG4gIGZvbnQtc2l6ZTogMnJlbTsgLyogRW5zdXJlIGhlYWRpbmcgZm9udCBzaXplIG1hdGNoZXMgKi9cbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBBbGxvdyB2ZXJ0aWNhbCBzY3JvbGxpbmcgKi9cbn1cblxuLmJhY2tncm91bmQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNjksIDE4NiwgMjM3LCAwLjE1KSwgcmdiYSgyNTIsIDI1NSwgNjEsIDAuMTUpKTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgZW50aXJlIHRhYmxlICovXG4gIC8qIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgyNCwgOTYsIDE4NCwgMC40OTgpOyAqL1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgyNCwgOTYsIDE4NCwgMC4yNSk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyAvKiBTZXQgdGFibGUgaGVhZGluZyBiYWNrZ3JvdW5kIHRvIHdoaXRlICovXG4gIGNvbG9yOiAjMWYxYzJjOyAvKiBUYWJsZSBoZWFkaW5nIHRleHQgY29sb3IgKi9cbn1cblxuLnRhYmxlIHRoOm50aC1jaGlsZCgzKSwgLyogVGFyZ2V0aW5nIEdvYWwgQW1vdW50IGNvbHVtbiAqLyBcbi50YWJsZSB0ZDpudGgtY2hpbGQoMykgeyBcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IC8qIFJpZ2h0LWFsaWduIHNwZWNpZmljIGNvbHVtbiAqLyBcbn1cblxuLnRhYmxlIHRoOm50aC1jaGlsZCgxKSwgLyogVGFyZ2V0aW5nIFMuIE5vIGNvbHVtbiAqLyBcbi50YWJsZSB0aDpudGgtY2hpbGQoNCksIC8qIFRhcmdldGluZyBUaW1lIEZyYW1lIGNvbHVtbiAqLyBcbi50YWJsZSB0ZDpudGgtY2hpbGQoMSksIFxuLnRhYmxlIHRkOm50aC1jaGlsZCg0KSB7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlci1hbGlnbiBzcGVjaWZpYyBjb2x1bW5zICovIFxufVxuXG4udGFibGUgdGg6bnRoLWNoaWxkKDIpLCAvKiBUYXJnZXRpbmcgUGxhbiBOYW1lIGNvbHVtbiAqLyBcbi50YWJsZSB0ZDpudGgtY2hpbGQoMikgeyBcbiAgd2lkdGg6IDE1JTsgLyogU2V0IHdpZHRoIGZvciBQbGFuIE5hbWUgY29sdW1uICovIFxufSBcblxuLnRhYmxlIHRoOm50aC1jaGlsZCg2KSwgLyogVGFyZ2V0aW5nIERlc2NyaXB0aW9uIGNvbHVtbiAqLyBcbi50YWJsZSB0ZDpudGgtY2hpbGQoNikgeyBcbiAgd2lkdGg6IDI1JTsgLyogU2V0IHdpZHRoIGZvciBEZXNjcmlwdGlvbiBjb2x1bW4gKi8gXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyLWFsaWduIHNwZWNpZmljIGNvbHVtbnMgKi8gXG59XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDIwcHggMThweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yaWdodC1hbGlnbiB7IFxuICB0ZXh0LWFsaWduOiByaWdodDsgXG59XG5cbi50YWJsZSB0aC5hY3Rpb24taGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIHRleHQgaW4gdGhlIEFjdGlvbiBoZWFkZXIgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDsgLyogQWRqdXN0IHRoaXMgdmFsdWUgdG8gbW92ZSB0aGUgaGVhZGluZyB0byB0aGUgcmlnaHQgKi9cbn1cblxuLnRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59XG5cbi50YWJsZSB0Ym9keSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMyOTc5ZmY7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyOTYyZmY7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmMTc0NWExLCAjZDUwMDAwYTYpO1xufVxuXG4uYnRuLWRhbmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkNTAwMDAsICNmZjE3NDQpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEFsaWduIGJ1dHRvbnMgdmVydGljYWxseSBjZW50ZXJlZCAqL1xuICBwYWRkaW5nOjkwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerviewsavingsplanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-managerviewsavingsplan',
                templateUrl: './managerviewsavingsplan.component.html',
                styleUrls: ['./managerviewsavingsplan.component.css']
            }]
    }], function () { return [{ type: src_app_services_savingsplan_service__WEBPACK_IMPORTED_MODULE_2__["SavingsplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "hTLC":
/*!***************************************************************!*\
  !*** ./src/app/components/managernav/managernav.component.ts ***!
  \***************************************************************/
/*! exports provided: ManagernavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagernavComponent", function() { return ManagernavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");





class ManagernavComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.name = localStorage.getItem('userName');
    }
    ngOnInit() {
    }
    logout() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.auth.logout();
                this.router.navigate(['/login']);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Success!',
                    text: 'Logged Out!!!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
        });
    }
}
ManagernavComponent.ɵfac = function ManagernavComponent_Factory(t) { return new (t || ManagernavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ManagernavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagernavComponent, selectors: [["app-managernav"]], decls: 25, vars: 1, consts: [[1, "nav-container"], [1, "logo"], ["routerLink", "/home", 2, "display", "flex", "align-items", "center", "text-decoration", "none"], ["src", "assets/navbar/Logo.jpg", "alt", "Finance Hub Logo", 1, "logo-img"], [2, "margin-left", "10px"], [1, "menu"], [1, "border", "border-white", "text-white", "btn-sm", "nav-link"], ["routerLink", "/home", 2, "cursor", "pointer", "padding-right", "20px"], [1, "dropdown"], [1, "dropbtn", 2, "cursor", "pointer", "padding-right", "20px"], [1, "dropdown-content"], ["routerLink", "/addsavingplan"], ["routerLink", "/viewsavingplan"], ["routerLink", "/managerviewapplications", 2, "cursor", "pointer", "padding-right", "20px"], ["routerLink", "/managerviewfeedbacks", 2, "cursor", "pointer", "padding-right", "20px"], [2, "background-color", "rgba(255, 0, 0, 0.774)", "color", "white", 3, "click"]], template: function ManagernavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FINANCE HUB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Savings Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add Savings Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "View Savings Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Requested Application Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Feedbacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagernavComponent_Template_button_click_23_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " / Manager");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n    height: 100%;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    background-color: #f0f2f5;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background: linear-gradient(135deg, rgba(25, 50, 75, 0.1), rgba(200, 255, 255, 0.1)) !important;\n  }\n  \n  .nav-container[_ngcontent-%COMP%] {\n    display: flex !important;\n    justify-content: space-between !important;\n    align-items: center !important;\n    background: linear-gradient(135deg, #2c3e50, #2980b9) !important;\n    padding: 10px 20px !important;\n    position: sticky;\n    top: 0;\n    z-index: 1000;\n  }\n  \n  .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex !important;\n    align-items: center !important;\n    color: #ecf0f1 !important;\n    font-size: 27px !important;\n    font-weight: bold !important;\n    text-decoration: none !important;\n  }\n  \n  .logo-img[_ngcontent-%COMP%] {\n    height: 40px !important;\n    width: 40px !important;\n    margin-right: 10px !important;\n  }\n  \n  .menu[_ngcontent-%COMP%] {\n    display: flex !important;\n    align-items: center !important;\n  }\n  \n  .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    color: #ecf0f1 !important;\n    text-decoration: none !important;\n    margin-right: 20px !important;\n    padding: 10px 15px !important;\n    transition: background 0.3s ease, transform 0.3s ease !important;\n  }\n  \n  .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background: none !important;\n    color: #3cb3ec !important;\n    transform: scale(1.2) !important;\n  }\n  \n  .dropdown[_ngcontent-%COMP%] {\n    position: relative !important;\n    display: inline-block !important;\n  }\n  \n  .dropbtn[_ngcontent-%COMP%] {\n    background: none !important;\n    border: none !important;\n    color: #ecf0f1 !important;\n    font-size: 16px !important;\n    cursor: pointer !important;\n    padding: 10px 15px !important;\n    transition: background 0.3s ease, transform 0.3s ease !important;\n  }\n  \n  .dropbtn[_ngcontent-%COMP%]:hover {\n    background: #2e5599 !important;\n    color: #ffffff !important;\n    transform: scale(1.05) !important;\n  }\n  \n  .dropdown-content[_ngcontent-%COMP%] {\n    display: none !important;\n    position: absolute !important;\n    background-color: #34495e !important;\n    min-width: 200px !important;\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;\n    z-index: 1 !important;\n  }\n  \n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #ecf0f1 !important;\n    padding: 12px 16px !important;\n    text-decoration: none !important;\n    display: block !important;\n    transition: background 0.3s ease, transform 0.3s ease !important;\n    white-space: nowrap !important;\n  }\n  \n  .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background: #3a83a8 !important;\n    color: #ffffff !important;\n    transform: scale(1.05) !important;\n  }\n  \n  .dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  \n  .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: rgba(255, 99, 71, 0.8) !important;\n    color: #ffffff !important;\n    border: none !important;\n    padding: 10px 20px !important;\n    border-radius: 8px !important;\n    cursor: pointer !important;\n    transition: background 0.3s ease, transform 0.3s ease !important;\n  }\n  \n  .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background: darkred !important;\n    transform: scale(1.05) !important;\n  }\n  \n  .nav-link[_ngcontent-%COMP%] {\n    border: 2px solid #ecf0f1 !important;\n    color: #ecf0f1 !important;\n    padding: 5px 10px !important;\n    border-radius: 10px !important;\n    font-size: 14px !important;\n    background: linear-gradient(135deg, #2c3e50, #2980b9) !important;\n  }\n  \n  .logo[_ngcontent-%COMP%] {\n    position: relative !important;\n  }\n  \n  .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: flex !important;\n    align-items: center !important;\n    color: #ecf0f1 !important;\n    font-size: 24px !important;\n    font-weight: bold !important;\n    transition: color 0.3s ease, transform 0.3s ease !important;\n  }\n  \n  .logo-img[_ngcontent-%COMP%] {\n    height: 70px !important;\n    width: 80px !important;\n    margin-right: 10px !important;\n  }\n  \n  .text-white[_ngcontent-%COMP%] {\n    color: #ecf0f1 !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VybmF2L21hbmFnZXJuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsK0ZBQStGO0VBQ2pHOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsZ0VBQWdFO0lBQ2hFLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsOEJBQThCO0VBQ2hDOztFQUVBOzs7SUFHRSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsZ0VBQWdFO0VBQ2xFOztFQUVBOztJQUVFLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGdFQUFnRTtFQUNsRTs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLG9EQUFvRDtJQUNwRCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsZ0VBQWdFO0lBQ2hFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsNkNBQTZDO0lBQzdDLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsZ0VBQWdFO0VBQ2xFOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsZ0VBQWdFO0VBQ2xFOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QiwyREFBMkQ7RUFDN0Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlcm5hdi9tYW5hZ2VybmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1LCA1MCwgNzUsIDAuMSksIHJnYmEoMjAwLCAyNTUsIDI1NSwgMC4xKSkgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm5hdi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzJjM2U1MCwgIzI5ODBiOSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuICAubG9nbyBhIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZWNmMGYxICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmxvZ28taW1nIHtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubWVudSB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm1lbnUgYSxcbiAgLm1lbnUgc3BhbixcbiAgLm1lbnUgYnV0dG9uIHtcbiAgICBjb2xvcjogI2VjZjBmMSAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5tZW51IGE6aG92ZXIsXG4gIC5tZW51IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjM2NiM2VjICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5kcm9wYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNlY2YwZjEgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZHJvcGJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzJlNTU5OSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xuICAgIGNvbG9yOiAjZWNmMGYxICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTJweCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZSAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzNhODNhOCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5tZW51IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDk5LCA3MSwgMC44KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2UgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm1lbnUgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrcmVkICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubmF2LWxpbmsge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlY2YwZjEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2VjZjBmMSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyYzNlNTAsICMyOTgwYjkpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmxvZ28gc3BhbiB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2VjZjBmMSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sb2dvLWltZyB7XG4gICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnRleHQtd2hpdGUge1xuICAgIGNvbG9yOiAjZWNmMGYxICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagernavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-managernav',
                templateUrl: './managernav.component.html',
                styleUrls: ['./managernav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 9, vars: 0, consts: [[1, "nav-container"], [1, "logo"], [1, "menu"], ["routerLink", "/register", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f3f4f6; \n}\n\n.nav-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: linear-gradient(135deg, #1e3a8a, #2e9f89); \n    padding: 10px 20px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); \n    position: sticky;\n    top: 0;\n    z-index: 1000;\n}\n\n.logo[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n.logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0; \n    color: #ffffff;\n    font-size: 28px; \n    font-weight: bold; \n    transition: color 0.3s ease, transform 0.3s ease;\n}\n\n.menu[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #ffffff;\n    text-decoration: none;\n    padding: 12px 25px;\n    border-radius: 25px; \n    background-color: rgba(0, 0, 0, 0.2); \n    transition: background-color 0.3s ease, transform 0.3s ease; \n    display: flex;\n    align-items: center;\n    justify-content: center; \n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #2e9f89; \n    transform: translateY(-4px); \n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 25px;\n}\n\n@media (max-width: 768px) {\n    .nav-container[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n        position: static; \n        margin-bottom: 20px;\n    }\n\n    .menu[_ngcontent-%COMP%] {\n        width: 100%;\n        justify-content: center;\n    }\n\n    .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 12px 0;\n        text-align: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnREFBZ0Q7SUFDaEQsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsMkRBQTJEO0lBQzNELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7IFxufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWUzYThhLCAjMmU5Zjg5KTsgXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTsgXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmxvZ28ge1xuICAgIGZsZXg6IDE7XG59XG5cbi5sb2dvIGgyIHtcbiAgICBtYXJnaW46IDA7IFxuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMjhweDsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUgYSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDEycHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7IFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxufVxuXG4ubWVudSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU5Zjg5OyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7IFxufVxuXG4ubWVudSBhOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7IFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5tZW51IGEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jrcS":
/*!*********************************************************************************!*\
  !*** ./src/app/components/managerviewfeedback/managerviewfeedback.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ManagerviewfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerviewfeedbackComponent", function() { return ManagerviewfeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feedback.service */ "kcTb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../managernav/managernav.component */ "hTLC");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error/error.component */ "7AdY");









function ManagerviewfeedbackComponent_div_2_table_3_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerviewfeedbackComponent_div_2_table_3_tr_10_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const feedback_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.showUserProfile(feedback_r6.User); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Show Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feedback_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r6.Comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, feedback_r6.DateProvided, "dd-MM-yyyy"));
} }
function ManagerviewfeedbackComponent_div_2_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date Provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ManagerviewfeedbackComponent_div_2_table_3_tr_10_Template, 9, 5, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.feedbacks);
} }
function ManagerviewfeedbackComponent_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oops! No records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerviewfeedbackComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-managernav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerviewfeedbackComponent_div_2_table_3_Template, 11, 1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManagerviewfeedbackComponent_div_2_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.feedbacks.length > 0)("ngIfElse", _r3);
} }
function ManagerviewfeedbackComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManagerviewfeedbackComponent {
    constructor(feedbackService, router, route, authService) {
        this.feedbackService = feedbackService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.feedbacks = [];
        this.selectedUser = null;
        this.isProfileModalOpen = false;
    }
    ngOnInit() {
        this.loadFeedbacks();
    }
    // Load all feedbacks
    loadFeedbacks() {
        this.feedbackService.getFeedbacks().subscribe((data) => {
            this.feedbacks = data;
            if (!this.feedbacks.length) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', 'No records found.', 'info');
            }
        });
    }
    // Show user profile in a modal
    showUserProfile(user) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'User Information',
            html: `<p><strong>Name:</strong> ${user.Username}</p>
      <p><strong>Email:</strong> ${user.Email}</p>
      <p><strong>Mobile Number:</strong> ${user.MobileNumber}</p>`,
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }
    openProfileModal(user) {
        this.selectedUser = user;
        this.isProfileModalOpen = true;
    }
    closeProfileModal() {
        this.isProfileModalOpen = false;
        this.selectedUser = null;
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
ManagerviewfeedbackComponent.ɵfac = function ManagerviewfeedbackComponent_Factory(t) { return new (t || ManagerviewfeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ManagerviewfeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerviewfeedbackComponent, selectors: [["app-managerviewfeedback"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "container"], ["class", "table table-striped", 4, "ngIf", "ngIfElse"], ["noRecordsFound", ""], [1, "table", "table-striped"], [1, "comments"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 3, "click"]], template: function ManagerviewfeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Feedback Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerviewfeedbackComponent_div_2_Template, 6, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerviewfeedbackComponent_div_3_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _managernav_managernav_component__WEBPACK_IMPORTED_MODULE_6__["ManagernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1));\n  color: #1f1c2c;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n  padding: 20px;\n  overflow: hidden;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 60%; \n  background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1));\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-top: 20px; \n  margin-left: auto;\n  margin-right: auto; \n  margin-bottom: 40px; \n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #1f1c2c;\n  margin: 10; \n  padding: 20px 0; \n  \n  font-family: 'Roboto', sans-serif; \n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px; \n  margin: 0 auto; \n  border-collapse: collapse;\n  background: linear-gradient(135deg, rgba(69, 186, 237, 0.1), rgba(252, 255, 61, 0.1));\n  border-radius: 15px;\n  \n  box-shadow: 0 4px 8px rgba(24, 96, 184, 0.25);\n  animation: fadeIn 1s ease-in-out;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #1f1c2c;\n  border-radius: 15px 15px 0 0;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  text-align: center; \n  border-bottom: 1px solid #ddd;\n  font-size: 14px; \n  font-weight: normal;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.table[_ngcontent-%COMP%]   th.comments[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.comments[_ngcontent-%COMP%] {\n  text-align: center; \n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f4f4f4; \n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #ffffff; \n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.3s ease, transform 0.3s ease;\n}\n\n.btn-info[_ngcontent-%COMP%] {\n  background: #2979ff;\n}\n\n.btn-info[_ngcontent-%COMP%]:hover {\n  background: #2962ff;\n  transform: scale(1.05);\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2Vydmlld2ZlZWRiYWNrL21hbmFnZXJ2aWV3ZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7O0FBRXhGO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixxRkFBcUY7RUFDckYsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVLEVBQUUsZ0RBQWdEO0VBQzVELHFGQUFxRjtFQUNyRixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBRSxpQ0FBaUM7RUFDbkQsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFFLGdDQUFnQztFQUNwRCxtQkFBbUIsRUFBRSxtQ0FBbUM7QUFDMUQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFVBQVUsRUFBRSwyQkFBMkI7RUFDdkMsZUFBZSxFQUFFLHNDQUFzQzs7RUFFdkQsaUNBQWlDLEVBQUUsdUJBQXVCO0FBQzVEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQixFQUFFLHlDQUF5QztFQUM1RCxjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLHlCQUF5QjtFQUN6QixxRkFBcUY7RUFDckYsbUJBQW1CO0VBQ25CLHFEQUFxRDtFQUNyRCw2Q0FBNkM7RUFDN0MsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUUsNkNBQTZDO0VBQ2pFLDZCQUE2QjtFQUM3QixlQUFlLEVBQUUsNkJBQTZCO0VBQzlDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLG9DQUFvQztBQUMxRDs7QUFFQTtFQUNFLG1CQUFtQixFQUFFLHdDQUF3QztBQUMvRDs7QUFFQTtFQUNFLG1CQUFtQixFQUFFLGtDQUFrQztBQUN6RDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlcnZpZXdmZWVkYmFjay9tYW5hZ2Vydmlld2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDY5LCAxODYsIDIzNywgMC4xKSwgcmdiYSgyNTIsIDI1NSwgNjEsIDAuMSkpO1xuICBjb2xvcjogIzFmMWMyYztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNjAlOyAvKiBSZWR1Y2luZyB0aGUgd2lkdGggZm9yIGEgbW9yZSBjb21wYWN0IHRhYmxlICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNjksIDE4NiwgMjM3LCAwLjEpLCByZ2JhKDI1MiwgMjU1LCA2MSwgMC4xKSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGRzIHNwYWNlIGFib3ZlIHRoZSBoZWFkaW5nICovXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87IC8qIENlbnRlci1hbGlnbnMgdGhlIGNvbnRhaW5lciAqL1xuICBtYXJnaW4tYm90dG9tOiA0MHB4OyAvKiBBZGRzIHNwYWNlIGJlbG93IHRoZSBjb250YWluZXIgKi9cbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWYxYzJjO1xuICBtYXJnaW46IDEwOyAvKiBSZW1vdmVzIGRlZmF1bHQgbWFyZ2luICovXG4gIHBhZGRpbmc6IDIwcHggMDsgLyogQWRkIHBhZGRpbmcgZm9yIGJldHRlciBhcHBlYXJhbmNlICovXG4gIFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IC8qIFNldCBmb250IHRvIFJvYm90byAqL1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7IC8qIEFkanVzdCBtYXgtd2lkdGggZm9yIGEgY29tcGFjdCB0YWJsZSAqL1xuICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyLWFsaWducyB0aGUgdGFibGUgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg2OSwgMTg2LCAyMzcsIDAuMSksIHJnYmEoMjUyLCAyNTUsIDYxLCAwLjEpKTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLyogYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDI0LCA5NiwgMTg0LCAwLjQ5OCk7ICovXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDI0LCA5NiwgMTg0LCAwLjI1KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMWYxYzJjO1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xufVxuXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXItYWxpZ25zIGFsbCB0YWJsZSBjZWxscyBieSBkZWZhdWx0ICovXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBmb250LXNpemU6IDE0cHg7IC8qIEluY3JlYXNpbmcgdGhlIGZvbnQgc2l6ZSAqL1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGFibGUgdGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhYmxlIHRoLmNvbW1lbnRzLCAudGFibGUgdGQuY29tbWVudHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIExlZnQtYWxpZ25zIHRoZSBjb21tZW50cyBjb2x1bW4gKi9cbn1cblxuLnRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7IC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCBmb3IgZXZlbiByb3dzICovXG59XG5cbi50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgZm9yIG9kZCByb3dzICovXG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5idG4taW5mbyB7XG4gIGJhY2tncm91bmQ6ICMyOTc5ZmY7XG59XG5cbi5idG4taW5mbzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyOTYyZmY7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerviewfeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-managerviewfeedback',
                templateUrl: './managerviewfeedback.component.html',
                styleUrls: ['./managerviewfeedback.component.css']
            }]
    }], function () { return [{ type: src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "kcTb":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FeedbackService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    sendFeedback(feedback) {
        return this.http.post(`${this.apiUrl}/api/Feedback`, feedback);
    }
    getAllFeedbacksByUserId(userId) {
        return this.http.get(`${this.apiUrl}/api/Feedback/user/${userId}`);
    }
    deleteFeedback(feedbackId) {
        return this.http.delete(`${this.apiUrl}/api/Feedback/${feedbackId}`);
    }
    getFeedbacks() {
        return this.http.get(`${this.apiUrl}/api/Feedback`);
    }
    getUserByUserId(userId) {
        return this.http.get(`${this.apiUrl}/api/Feedback/user/${userId}`);
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeedbackService, factory: FeedbackService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AuthService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        if (!this.http) {
            console.warn('HttpClient is not provided!');
        }
    }
    register(user) {
        console.log(user);
        return this.http.post(`${this.apiUrl}/api/register`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    login(login) {
        return this.http.post(`${this.apiUrl}/api/login`, login)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Error handling
    handleError(error) {
        console.error('An error occurred:', error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message || 'Server error');
    }
    // Token and user information management
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    decodeToken(token) {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        }
        catch (e) {
            return null;
        }
    }
    isRole() {
        const token = this.getItem('authToken');
        if (token) {
            const payload = this.decodeToken(token);
            if (payload) {
                this.setItem('userRole', payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
                this.setItem('userName', payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']);
                this.setItem('userId', payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
                this.setItem('emailAddress', payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']);
            }
        }
    }
    isLoggedIn() {
        const userRole = this.getItem('userRole');
        return userRole === 'RegionalManager' || userRole === 'Customer';
    }
    hasRole(role) {
        return this.getItem('userRole') === role;
    }
    isRegionalManager() {
        return this.hasRole('RegionalManager');
    }
    isCustomer() {
        return this.hasRole('Customer');
    }
    logout() {
        localStorage.clear();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], 8)); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "ojcb":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/userplanapplicationform/userplanapplicationform.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserplanapplicationformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserplanapplicationformComponent", function() { return UserplanapplicationformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserplanapplicationformComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserplanapplicationformComponent.ɵfac = function UserplanapplicationformComponent_Factory(t) { return new (t || UserplanapplicationformComponent)(); };
UserplanapplicationformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserplanapplicationformComponent, selectors: [["app-userplanapplicationform"]], decls: 2, vars: 0, template: function UserplanapplicationformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Application Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnBsYW5hcHBsaWNhdGlvbmZvcm0vdXNlcnBsYW5hcHBsaWNhdGlvbmZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserplanapplicationformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userplanapplicationform',
                templateUrl: './userplanapplicationform.component.html',
                styleUrls: ['./userplanapplicationform.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map