(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-checkbox-group.entry.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-checkbox-group.entry.js ***!
  \*************************************************************************************************************/
/*! exports provided: va_checkbox_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"va_checkbox_group\", function() { return VaCheckboxGroup; });\n/* harmony import */ var _index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c384c57b.js */ \"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-c384c57b.js\");\n/* harmony import */ var _i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18next-858cee77.js */ \"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/i18next-858cee77.js\");\nvar vaCheckboxGroupCss=\".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}#error-message{color:var(--color-secondary-dark);display:block;font-weight:700;margin-bottom:1.2rem}:host([error]:not([error=''])){border-left:0.4rem solid  var(--color-secondary-dark);padding-left:2rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=''])){margin-left:-2.4rem;}}:host([error]:not([error='']):not([uswds])) label{margin-top:0}:host([error]:not([error='']):not([uswds])) input,:host([error]:not([error=''])) textarea,:host([error]:not([error=''])) select{border:4px solid var(--color-secondary-dark)}.hint-text{color:#71767A;display:block}:host{display:block;border:none;padding:0}#error-message{font-size:1.6rem;line-height:2.4rem;font-weight:700;margin-bottom:0}.required{color:var(--color-secondary-dark);margin:0 0.35rem}legend{display:block;max-width:46rem;font-weight:inherit;font-size:inherit;line-height:inherit}\";var VaCheckboxGroup=function(){function e(e){Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this,e);this.componentLibraryAnalytics=Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"c\"])(this,\"component-library-analytics\",7);this.label=undefined;this.required=false;this.error=undefined;this.enableAnalytics=false;this.hint=undefined}e.prototype.vaChangeHandler=function(e){var r=e.target;if(this.enableAnalytics)this.fireAnalyticsEvent(r.label)};e.prototype.fireAnalyticsEvent=function(e){this.componentLibraryAnalytics.emit({componentName:\"va-checkbox-group\",action:\"change\",details:{label:this.label,optionLabel:e,required:this.required}})};e.prototype.connectedCallback=function(){var e=this;_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_1__[\"i\"].on(\"languageChanged\",(function(){Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"f\"])(e.el)}))};e.prototype.disconnectedCallback=function(){_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_1__[\"i\"].off(\"languageChanged\")};e.prototype.render=function(){var e=this,r=e.label,t=e.required,o=e.error,n=e.hint;return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],{role:\"group\"},Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"legend\",null,r,t&&Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\",{class:\"required\"},_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_1__[\"i\"].t(\"required\"))),n&&Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\",{class:\"hint-text\"},n),Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\",{id:\"error-message\",role:\"alert\"},o&&Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"F\"],null,Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\",{class:\"sr-only\"},_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_1__[\"i\"].t(\"error\")),\" \",o)),Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\",null))};Object.defineProperty(e.prototype,\"el\",{get:function(){return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"])(this)},enumerable:false,configurable:true});return e}();VaCheckboxGroup.style=vaCheckboxGroupCss;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGRlcGFydG1lbnQtb2YtdmV0ZXJhbnMtYWZmYWlycy93ZWItY29tcG9uZW50cy9kaXN0L2VzbS1lczUvdmEtY2hlY2tib3gtZ3JvdXAuZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlcGFydG1lbnQtb2YtdmV0ZXJhbnMtYWZmYWlycy93ZWItY29tcG9uZW50cy9kaXN0L2VzbS1lczUvdmEtY2hlY2tib3gtZ3JvdXAuZW50cnkuanM/MGZjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7ciBhcyByZWdpc3Rlckluc3RhbmNlLGMgYXMgY3JlYXRlRXZlbnQsZiBhcyBmb3JjZVVwZGF0ZSxoLEYgYXMgRnJhZ21lbnQsSCBhcyBIb3N0LGcgYXMgZ2V0RWxlbWVudH1mcm9tXCIuL2luZGV4LWMzODRjNTdiLmpzXCI7aW1wb3J0e2kgYXMgaW5zdGFuY2V9ZnJvbVwiLi9pMThuZXh0LTg1OGNlZTc3LmpzXCI7dmFyIHZhQ2hlY2tib3hHcm91cENzcz1cIi5zci1vbmx5e2JvcmRlcjowO2NsaXA6cmVjdCgwLCAwLCAwLCAwKTstd2Via2l0LWNsaXAtcGF0aDppbnNldCg1MCUpO2NsaXAtcGF0aDppbnNldCg1MCUpO2hlaWdodDoxcHg7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O3dpZHRoOjFweDt3b3JkLXdyYXA6bm9ybWFsICFpbXBvcnRhbnR9I2Vycm9yLW1lc3NhZ2V7Y29sb3I6dmFyKC0tY29sb3Itc2Vjb25kYXJ5LWRhcmspO2Rpc3BsYXk6YmxvY2s7Zm9udC13ZWlnaHQ6NzAwO21hcmdpbi1ib3R0b206MS4ycmVtfTpob3N0KFtlcnJvcl06bm90KFtlcnJvcj0nJ10pKXtib3JkZXItbGVmdDowLjRyZW0gc29saWQgIHZhcigtLWNvbG9yLXNlY29uZGFyeS1kYXJrKTtwYWRkaW5nLWxlZnQ6MnJlbTtwb3NpdGlvbjpyZWxhdGl2ZX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDA4cHgpezpob3N0KFtlcnJvcl06bm90KFtlcnJvcj0nJ10pKXttYXJnaW4tbGVmdDotMi40cmVtO319Omhvc3QoW2Vycm9yXTpub3QoW2Vycm9yPScnXSk6bm90KFt1c3dkc10pKSBsYWJlbHttYXJnaW4tdG9wOjB9Omhvc3QoW2Vycm9yXTpub3QoW2Vycm9yPScnXSk6bm90KFt1c3dkc10pKSBpbnB1dCw6aG9zdChbZXJyb3JdOm5vdChbZXJyb3I9JyddKSkgdGV4dGFyZWEsOmhvc3QoW2Vycm9yXTpub3QoW2Vycm9yPScnXSkpIHNlbGVjdHtib3JkZXI6NHB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeS1kYXJrKX0uaGludC10ZXh0e2NvbG9yOiM3MTc2N0E7ZGlzcGxheTpibG9ja306aG9zdHtkaXNwbGF5OmJsb2NrO2JvcmRlcjpub25lO3BhZGRpbmc6MH0jZXJyb3ItbWVzc2FnZXtmb250LXNpemU6MS42cmVtO2xpbmUtaGVpZ2h0OjIuNHJlbTtmb250LXdlaWdodDo3MDA7bWFyZ2luLWJvdHRvbTowfS5yZXF1aXJlZHtjb2xvcjp2YXIoLS1jb2xvci1zZWNvbmRhcnktZGFyayk7bWFyZ2luOjAgMC4zNXJlbX1sZWdlbmR7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6NDZyZW07Zm9udC13ZWlnaHQ6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0fVwiO3ZhciBWYUNoZWNrYm94R3JvdXA9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3JlZ2lzdGVySW5zdGFuY2UodGhpcyxlKTt0aGlzLmNvbXBvbmVudExpYnJhcnlBbmFseXRpY3M9Y3JlYXRlRXZlbnQodGhpcyxcImNvbXBvbmVudC1saWJyYXJ5LWFuYWx5dGljc1wiLDcpO3RoaXMubGFiZWw9dW5kZWZpbmVkO3RoaXMucmVxdWlyZWQ9ZmFsc2U7dGhpcy5lcnJvcj11bmRlZmluZWQ7dGhpcy5lbmFibGVBbmFseXRpY3M9ZmFsc2U7dGhpcy5oaW50PXVuZGVmaW5lZH1lLnByb3RvdHlwZS52YUNoYW5nZUhhbmRsZXI9ZnVuY3Rpb24oZSl7dmFyIHI9ZS50YXJnZXQ7aWYodGhpcy5lbmFibGVBbmFseXRpY3MpdGhpcy5maXJlQW5hbHl0aWNzRXZlbnQoci5sYWJlbCl9O2UucHJvdG90eXBlLmZpcmVBbmFseXRpY3NFdmVudD1mdW5jdGlvbihlKXt0aGlzLmNvbXBvbmVudExpYnJhcnlBbmFseXRpY3MuZW1pdCh7Y29tcG9uZW50TmFtZTpcInZhLWNoZWNrYm94LWdyb3VwXCIsYWN0aW9uOlwiY2hhbmdlXCIsZGV0YWlsczp7bGFiZWw6dGhpcy5sYWJlbCxvcHRpb25MYWJlbDplLHJlcXVpcmVkOnRoaXMucmVxdWlyZWR9fSl9O2UucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpbnN0YW5jZS5vbihcImxhbmd1YWdlQ2hhbmdlZFwiLChmdW5jdGlvbigpe2ZvcmNlVXBkYXRlKGUuZWwpfSkpfTtlLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbigpe2luc3RhbmNlLm9mZihcImxhbmd1YWdlQ2hhbmdlZFwiKX07ZS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxyPWUubGFiZWwsdD1lLnJlcXVpcmVkLG89ZS5lcnJvcixuPWUuaGludDtyZXR1cm4gaChIb3N0LHtyb2xlOlwiZ3JvdXBcIn0saChcImxlZ2VuZFwiLG51bGwscix0JiZoKFwic3BhblwiLHtjbGFzczpcInJlcXVpcmVkXCJ9LGluc3RhbmNlLnQoXCJyZXF1aXJlZFwiKSkpLG4mJmgoXCJzcGFuXCIse2NsYXNzOlwiaGludC10ZXh0XCJ9LG4pLGgoXCJzcGFuXCIse2lkOlwiZXJyb3ItbWVzc2FnZVwiLHJvbGU6XCJhbGVydFwifSxvJiZoKEZyYWdtZW50LG51bGwsaChcInNwYW5cIix7Y2xhc3M6XCJzci1vbmx5XCJ9LGluc3RhbmNlLnQoXCJlcnJvclwiKSksXCIgXCIsbykpLGgoXCJzbG90XCIsbnVsbCkpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJlbFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZ2V0RWxlbWVudCh0aGlzKX0sZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZX0pO3JldHVybiBlfSgpO1ZhQ2hlY2tib3hHcm91cC5zdHlsZT12YUNoZWNrYm94R3JvdXBDc3M7ZXhwb3J0e1ZhQ2hlY2tib3hHcm91cCBhcyB2YV9jaGVja2JveF9ncm91cH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-checkbox-group.entry.js\n");

/***/ })

}]);