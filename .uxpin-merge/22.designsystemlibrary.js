(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-breadcrumbs.entry.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-breadcrumbs.entry.js ***!
  \**********************************************************************************************************/
/*! exports provided: va_breadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"va_breadcrumbs\", function() { return VaBreadcrumbs; });\n/* harmony import */ var _index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c384c57b.js */ \"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-c384c57b.js\");\nvar vaBreadcrumbsCss=\":host{display:block}nav{background:var(--color-white);color:var(--color-link-default);font-size:inherit;padding:1.6rem 0}ul{-webkit-box-sizing:border-box;box-sizing:border-box;list-style:square;margin:0 auto;max-width:100rem;padding-left:0.8rem;padding-right:0.8rem;position:relative;width:100%}\";var VaBreadcrumbs=function(){function e(e){Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this,e);this.componentLibraryAnalytics=Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"c\"])(this,\"component-library-analytics\",7);this.label=\"Breadcrumb\";this.disableAnalytics=false}e.prototype.getClickLevel=function(e){var t=Array.from(this.el.querySelectorAll(\"a\"));var r=t.findIndex((function(t){return t.isEqualNode(e)}));return r+1};e.prototype.fireAnalyticsEvent=function(e){if(!this.disableAnalytics){var t=e.target;if((t===null||t===void 0?void 0:t.tagName)===\"A\"){var r={componentName:\"va-breadcrumbs\",action:\"linkClick\",details:{clickLabel:t.innerText.trim(),clickLevel:this.getClickLevel(t),totalLevels:this.el.querySelectorAll(\"a\").length}};this.componentLibraryAnalytics.emit(r)}}};e.prototype.handleAnchorNode=function(e,t,r){var a=document.createElement(\"li\");a.classList.add(\"va-breadcrumbs-li\");if(t===r.length-1){e.setAttribute(\"aria-current\",\"page\")}e.parentNode.replaceChild(a,e);a.appendChild(e)};e.prototype.handleListNode=function(e,t,r){e.classList.add(\"va-breadcrumbs-li\");var a=e.querySelector(\"a\");if(a&&t===r.length-1){a.setAttribute(\"aria-current\",\"page\")}};e.prototype.componentDidLoad=function(){var e=this;var t;var r=(t=this.el.shadowRoot.querySelector(\"slot\"))===null||t===void 0?void 0:t.assignedNodes();if(!r)return;r.forEach((function(t,a){if(t.nodeName===\"LI\"){e.handleListNode(t,a,r)}else if(t.nodeName===\"A\"){e.handleAnchorNode(t,a,r)}}))};e.prototype.handleSlotChange=function(){var e;var t=(e=this.el.shadowRoot.querySelector(\"slot\"))===null||e===void 0?void 0:e.assignedNodes().filter((function(e){return e.nodeName===\"LI\"}));if(!t)return;t.forEach((function(e,r){if(e.nodeName===\"LI\"){e.classList.add(\"va-breadcrumbs-li\");var a=e.querySelector(\"a\");var i=a===null||a===void 0?void 0:a.getAttribute(\"aria-current\");if(i&&r!==t.length-1){a.removeAttribute(\"aria-current\")}if(r===t.length-1){a===null||a===void 0?void 0:a.setAttribute(\"aria-current\",\"page\")}}}))};e.prototype.render=function(){var e=this;var t=this.label;return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],null,Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"nav\",{\"aria-label\":t},Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"ul\",{role:\"list\",onClick:function(t){return e.fireAnalyticsEvent(t)}},Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\",{onSlotchange:this.handleSlotChange.bind(this)}))))};Object.defineProperty(e.prototype,\"el\",{get:function(){return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"])(this)},enumerable:false,configurable:true});return e}();VaBreadcrumbs.style=vaBreadcrumbsCss;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGRlcGFydG1lbnQtb2YtdmV0ZXJhbnMtYWZmYWlycy93ZWItY29tcG9uZW50cy9kaXN0L2VzbS1lczUvdmEtYnJlYWRjcnVtYnMuZW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlcGFydG1lbnQtb2YtdmV0ZXJhbnMtYWZmYWlycy93ZWItY29tcG9uZW50cy9kaXN0L2VzbS1lczUvdmEtYnJlYWRjcnVtYnMuZW50cnkuanM/MTNlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7ciBhcyByZWdpc3Rlckluc3RhbmNlLGMgYXMgY3JlYXRlRXZlbnQsaCxIIGFzIEhvc3QsZyBhcyBnZXRFbGVtZW50fWZyb21cIi4vaW5kZXgtYzM4NGM1N2IuanNcIjt2YXIgdmFCcmVhZGNydW1ic0Nzcz1cIjpob3N0e2Rpc3BsYXk6YmxvY2t9bmF2e2JhY2tncm91bmQ6dmFyKC0tY29sb3Itd2hpdGUpO2NvbG9yOnZhcigtLWNvbG9yLWxpbmstZGVmYXVsdCk7Zm9udC1zaXplOmluaGVyaXQ7cGFkZGluZzoxLjZyZW0gMH11bHstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7bGlzdC1zdHlsZTpzcXVhcmU7bWFyZ2luOjAgYXV0bzttYXgtd2lkdGg6MTAwcmVtO3BhZGRpbmctbGVmdDowLjhyZW07cGFkZGluZy1yaWdodDowLjhyZW07cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX1cIjt2YXIgVmFCcmVhZGNydW1icz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7cmVnaXN0ZXJJbnN0YW5jZSh0aGlzLGUpO3RoaXMuY29tcG9uZW50TGlicmFyeUFuYWx5dGljcz1jcmVhdGVFdmVudCh0aGlzLFwiY29tcG9uZW50LWxpYnJhcnktYW5hbHl0aWNzXCIsNyk7dGhpcy5sYWJlbD1cIkJyZWFkY3J1bWJcIjt0aGlzLmRpc2FibGVBbmFseXRpY3M9ZmFsc2V9ZS5wcm90b3R5cGUuZ2V0Q2xpY2tMZXZlbD1mdW5jdGlvbihlKXt2YXIgdD1BcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImFcIikpO3ZhciByPXQuZmluZEluZGV4KChmdW5jdGlvbih0KXtyZXR1cm4gdC5pc0VxdWFsTm9kZShlKX0pKTtyZXR1cm4gcisxfTtlLnByb3RvdHlwZS5maXJlQW5hbHl0aWNzRXZlbnQ9ZnVuY3Rpb24oZSl7aWYoIXRoaXMuZGlzYWJsZUFuYWx5dGljcyl7dmFyIHQ9ZS50YXJnZXQ7aWYoKHQ9PT1udWxsfHx0PT09dm9pZCAwP3ZvaWQgMDp0LnRhZ05hbWUpPT09XCJBXCIpe3ZhciByPXtjb21wb25lbnROYW1lOlwidmEtYnJlYWRjcnVtYnNcIixhY3Rpb246XCJsaW5rQ2xpY2tcIixkZXRhaWxzOntjbGlja0xhYmVsOnQuaW5uZXJUZXh0LnRyaW0oKSxjbGlja0xldmVsOnRoaXMuZ2V0Q2xpY2tMZXZlbCh0KSx0b3RhbExldmVsczp0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpLmxlbmd0aH19O3RoaXMuY29tcG9uZW50TGlicmFyeUFuYWx5dGljcy5lbWl0KHIpfX19O2UucHJvdG90eXBlLmhhbmRsZUFuY2hvck5vZGU9ZnVuY3Rpb24oZSx0LHIpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTthLmNsYXNzTGlzdC5hZGQoXCJ2YS1icmVhZGNydW1icy1saVwiKTtpZih0PT09ci5sZW5ndGgtMSl7ZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIixcInBhZ2VcIil9ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChhLGUpO2EuYXBwZW5kQ2hpbGQoZSl9O2UucHJvdG90eXBlLmhhbmRsZUxpc3ROb2RlPWZ1bmN0aW9uKGUsdCxyKXtlLmNsYXNzTGlzdC5hZGQoXCJ2YS1icmVhZGNydW1icy1saVwiKTt2YXIgYT1lLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO2lmKGEmJnQ9PT1yLmxlbmd0aC0xKXthLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLFwicGFnZVwiKX19O2UucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3ZhciB0O3ZhciByPSh0PXRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFwiKSk9PT1udWxsfHx0PT09dm9pZCAwP3ZvaWQgMDp0LmFzc2lnbmVkTm9kZXMoKTtpZighcilyZXR1cm47ci5mb3JFYWNoKChmdW5jdGlvbih0LGEpe2lmKHQubm9kZU5hbWU9PT1cIkxJXCIpe2UuaGFuZGxlTGlzdE5vZGUodCxhLHIpfWVsc2UgaWYodC5ub2RlTmFtZT09PVwiQVwiKXtlLmhhbmRsZUFuY2hvck5vZGUodCxhLHIpfX0pKX07ZS5wcm90b3R5cGUuaGFuZGxlU2xvdENoYW5nZT1mdW5jdGlvbigpe3ZhciBlO3ZhciB0PShlPXRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFwiKSk9PT1udWxsfHxlPT09dm9pZCAwP3ZvaWQgMDplLmFzc2lnbmVkTm9kZXMoKS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVOYW1lPT09XCJMSVwifSkpO2lmKCF0KXJldHVybjt0LmZvckVhY2goKGZ1bmN0aW9uKGUscil7aWYoZS5ub2RlTmFtZT09PVwiTElcIil7ZS5jbGFzc0xpc3QuYWRkKFwidmEtYnJlYWRjcnVtYnMtbGlcIik7dmFyIGE9ZS5xdWVyeVNlbGVjdG9yKFwiYVwiKTt2YXIgaT1hPT09bnVsbHx8YT09PXZvaWQgMD92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7aWYoaSYmciE9PXQubGVuZ3RoLTEpe2EucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpfWlmKHI9PT10Lmxlbmd0aC0xKXthPT09bnVsbHx8YT09PXZvaWQgMD92b2lkIDA6YS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIixcInBhZ2VcIil9fX0pKX07ZS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt2YXIgdD10aGlzLmxhYmVsO3JldHVybiBoKEhvc3QsbnVsbCxoKFwibmF2XCIse1wiYXJpYS1sYWJlbFwiOnR9LGgoXCJ1bFwiLHtyb2xlOlwibGlzdFwiLG9uQ2xpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIGUuZmlyZUFuYWx5dGljc0V2ZW50KHQpfX0saChcInNsb3RcIix7b25TbG90Y2hhbmdlOnRoaXMuaGFuZGxlU2xvdENoYW5nZS5iaW5kKHRoaXMpfSkpKSl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcImVsXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBnZXRFbGVtZW50KHRoaXMpfSxlbnVtZXJhYmxlOmZhbHNlLGNvbmZpZ3VyYWJsZTp0cnVlfSk7cmV0dXJuIGV9KCk7VmFCcmVhZGNydW1icy5zdHlsZT12YUJyZWFkY3J1bWJzQ3NzO2V4cG9ydHtWYUJyZWFkY3J1bWJzIGFzIHZhX2JyZWFkY3J1bWJzfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-breadcrumbs.entry.js\n");

/***/ })

}]);