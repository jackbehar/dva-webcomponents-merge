(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-banner.entry.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-banner.entry.js ***!
  \*****************************************************************************************************/
/*! exports provided: va_banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"va_banner\", function() { return VaBanner; });\n/* harmony import */ var _index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c384c57b.js */ \"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-c384c57b.js\");\nvar __spreadArray=undefined&&undefined.__spreadArray||function(e,s,n){if(n||arguments.length===2)for(var i=0,t=s.length,r;i<t;i++){if(r||!(i in s)){if(!r)r=Array.prototype.slice.call(s,0,i);r[i]=s[i]}}return e.concat(r||Array.prototype.slice.call(s))};var vaBannerCss=\"\";var DISMISSED_BANNERS_KEY=\"DISMISSED_BANNERS\";var VaBanner=function(){function e(e){var s=this;Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this,e);this.componentLibraryAnalytics=Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"c\"])(this,\"component-library-analytics\",7);this.prepareBannerID=function(){return\"\".concat(s.headline,\":\").concat(s.el.innerHTML)};this.dismiss=function(){var e=s.prepareBannerID();if(s.dismissedBanners.includes(e)){return}if(s.showClose){var n=__spreadArray(__spreadArray([],s.dismissedBanners,true),[e],false);var i=s.windowSession?window.sessionStorage:window.localStorage;i.setItem(DISMISSED_BANNERS_KEY,JSON.stringify(n));s.dismissedBanners=n;if(!s.disableAnalytics){var t={componentName:\"va-banner\",action:\"close\",details:{headline:s.headline}};s.componentLibraryAnalytics.emit(t)}}};this.disableAnalytics=false;this.showClose=false;this.headline=undefined;this.type=\"info\";this.visible=true;this.windowSession=false;this.dismissedBanners=[]}e.prototype.componentWillLoad=function(){if(this.showClose){var e=this.windowSession?window.sessionStorage:window.localStorage;var s=e.getItem(DISMISSED_BANNERS_KEY);this.dismissedBanners=s?JSON.parse(s):[]}};e.prototype.render=function(){var e;var s=this.showClose&&((e=this.dismissedBanners)===null||e===void 0?void 0:e.includes(this.prepareBannerID()));if(!this.visible||s){return null}var n=this.showClose?this.dismiss:undefined;return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],null,Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"va-alert\",{visible:true,\"full-width\":true,closeable:this.showClose,onCloseEvent:n,status:this.type,\"data-role\":\"banner\"},Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"h3\",{slot:\"headline\"},this.headline),Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\",null)))};Object.defineProperty(e.prototype,\"el\",{get:function(){return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"])(this)},enumerable:false,configurable:true});return e}();VaBanner.style=vaBannerCss;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGRlcGFydG1lbnQtb2YtdmV0ZXJhbnMtYWZmYWlycy93ZWItY29tcG9uZW50cy9kaXN0L2VzbS1lczUvdmEtYmFubmVyLmVudHJ5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZXBhcnRtZW50LW9mLXZldGVyYW5zLWFmZmFpcnMvd2ViLWNvbXBvbmVudHMvZGlzdC9lc20tZXM1L3ZhLWJhbm5lci5lbnRyeS5qcz85ZjcxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX3NwcmVhZEFycmF5PXRoaXMmJnRoaXMuX19zcHJlYWRBcnJheXx8ZnVuY3Rpb24oZSxzLG4pe2lmKG58fGFyZ3VtZW50cy5sZW5ndGg9PT0yKWZvcih2YXIgaT0wLHQ9cy5sZW5ndGgscjtpPHQ7aSsrKXtpZihyfHwhKGkgaW4gcykpe2lmKCFyKXI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocywwLGkpO3JbaV09c1tpXX19cmV0dXJuIGUuY29uY2F0KHJ8fEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHMpKX07aW1wb3J0e3IgYXMgcmVnaXN0ZXJJbnN0YW5jZSxjIGFzIGNyZWF0ZUV2ZW50LGgsSCBhcyBIb3N0LGcgYXMgZ2V0RWxlbWVudH1mcm9tXCIuL2luZGV4LWMzODRjNTdiLmpzXCI7dmFyIHZhQmFubmVyQ3NzPVwiXCI7dmFyIERJU01JU1NFRF9CQU5ORVJTX0tFWT1cIkRJU01JU1NFRF9CQU5ORVJTXCI7dmFyIFZhQmFubmVyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgcz10aGlzO3JlZ2lzdGVySW5zdGFuY2UodGhpcyxlKTt0aGlzLmNvbXBvbmVudExpYnJhcnlBbmFseXRpY3M9Y3JlYXRlRXZlbnQodGhpcyxcImNvbXBvbmVudC1saWJyYXJ5LWFuYWx5dGljc1wiLDcpO3RoaXMucHJlcGFyZUJhbm5lcklEPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIi5jb25jYXQocy5oZWFkbGluZSxcIjpcIikuY29uY2F0KHMuZWwuaW5uZXJIVE1MKX07dGhpcy5kaXNtaXNzPWZ1bmN0aW9uKCl7dmFyIGU9cy5wcmVwYXJlQmFubmVySUQoKTtpZihzLmRpc21pc3NlZEJhbm5lcnMuaW5jbHVkZXMoZSkpe3JldHVybn1pZihzLnNob3dDbG9zZSl7dmFyIG49X19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLHMuZGlzbWlzc2VkQmFubmVycyx0cnVlKSxbZV0sZmFsc2UpO3ZhciBpPXMud2luZG93U2Vzc2lvbj93aW5kb3cuc2Vzc2lvblN0b3JhZ2U6d2luZG93LmxvY2FsU3RvcmFnZTtpLnNldEl0ZW0oRElTTUlTU0VEX0JBTk5FUlNfS0VZLEpTT04uc3RyaW5naWZ5KG4pKTtzLmRpc21pc3NlZEJhbm5lcnM9bjtpZighcy5kaXNhYmxlQW5hbHl0aWNzKXt2YXIgdD17Y29tcG9uZW50TmFtZTpcInZhLWJhbm5lclwiLGFjdGlvbjpcImNsb3NlXCIsZGV0YWlsczp7aGVhZGxpbmU6cy5oZWFkbGluZX19O3MuY29tcG9uZW50TGlicmFyeUFuYWx5dGljcy5lbWl0KHQpfX19O3RoaXMuZGlzYWJsZUFuYWx5dGljcz1mYWxzZTt0aGlzLnNob3dDbG9zZT1mYWxzZTt0aGlzLmhlYWRsaW5lPXVuZGVmaW5lZDt0aGlzLnR5cGU9XCJpbmZvXCI7dGhpcy52aXNpYmxlPXRydWU7dGhpcy53aW5kb3dTZXNzaW9uPWZhbHNlO3RoaXMuZGlzbWlzc2VkQmFubmVycz1bXX1lLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZD1mdW5jdGlvbigpe2lmKHRoaXMuc2hvd0Nsb3NlKXt2YXIgZT10aGlzLndpbmRvd1Nlc3Npb24/d2luZG93LnNlc3Npb25TdG9yYWdlOndpbmRvdy5sb2NhbFN0b3JhZ2U7dmFyIHM9ZS5nZXRJdGVtKERJU01JU1NFRF9CQU5ORVJTX0tFWSk7dGhpcy5kaXNtaXNzZWRCYW5uZXJzPXM/SlNPTi5wYXJzZShzKTpbXX19O2UucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciBlO3ZhciBzPXRoaXMuc2hvd0Nsb3NlJiYoKGU9dGhpcy5kaXNtaXNzZWRCYW5uZXJzKT09PW51bGx8fGU9PT12b2lkIDA/dm9pZCAwOmUuaW5jbHVkZXModGhpcy5wcmVwYXJlQmFubmVySUQoKSkpO2lmKCF0aGlzLnZpc2libGV8fHMpe3JldHVybiBudWxsfXZhciBuPXRoaXMuc2hvd0Nsb3NlP3RoaXMuZGlzbWlzczp1bmRlZmluZWQ7cmV0dXJuIGgoSG9zdCxudWxsLGgoXCJ2YS1hbGVydFwiLHt2aXNpYmxlOnRydWUsXCJmdWxsLXdpZHRoXCI6dHJ1ZSxjbG9zZWFibGU6dGhpcy5zaG93Q2xvc2Usb25DbG9zZUV2ZW50Om4sc3RhdHVzOnRoaXMudHlwZSxcImRhdGEtcm9sZVwiOlwiYmFubmVyXCJ9LGgoXCJoM1wiLHtzbG90OlwiaGVhZGxpbmVcIn0sdGhpcy5oZWFkbGluZSksaChcInNsb3RcIixudWxsKSkpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJlbFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZ2V0RWxlbWVudCh0aGlzKX0sZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZX0pO3JldHVybiBlfSgpO1ZhQmFubmVyLnN0eWxlPXZhQmFubmVyQ3NzO2V4cG9ydHtWYUJhbm5lciBhcyB2YV9iYW5uZXJ9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-banner.entry.js\n");

/***/ })

}]);