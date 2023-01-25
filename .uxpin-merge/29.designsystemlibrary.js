(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-link.entry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-link.entry.js ***!
  \***************************************************************************************************/
/*! exports provided: va_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"va_link\", function() { return VaLink; });\n/* harmony import */ var _index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c384c57b.js */ \"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-c384c57b.js\");\nvar vaLinkCss=\"button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,[role='option']:focus{outline:2px solid var(--color-gold-light);outline-offset:2px}a{text-decoration:none;color:var(--color-link-default);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--color-link-visited)}:host{display:inline}:host a{cursor:pointer;text-decoration:underline}:host([active]:not([active='false'])) a{font-weight:700}i::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-family:'Font Awesome 5 Free';font-size:1.6rem;font-style:normal;font-variant:normal;font-weight:900;line-height:1;margin-right:0.8rem;text-rendering:auto}:host([active]:not([active='false'])) i::before{content:'\\\\f105';margin-bottom:0.1rem;margin-left:0.8rem;margin-right:0;vertical-align:middle}:host([active]:not([active='false'])) a:focus i::before,:host([active]:not([active='false'])) a:hover i::before{margin-left:1.2rem;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:margin;transition-property:margin}:host([download]:not([download='false'])) i::before{content:'\\\\f019';}:host([video]:not([video='false'])) i::before{content:'\\\\f144';}:host([channel]:not([channel='false'])) i::before{content:'\\\\f167';font-family:'Font Awesome 5 Brands';font-weight:400}:host([calendar]:not([calendar='false'])) i::before{content:'\\\\f133';}dfn{font-style:normal}abbr{text-decoration:none}\";var VaLink=function(){function t(t){var e=this;Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this,t);this.componentLibraryAnalytics=Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"c\"])(this,\"component-library-analytics\",7);this.handleClick=function(t){if(!e.disableAnalytics){var n={componentName:\"va-link\",action:\"click\",details:{label:e.text}};e.componentLibraryAnalytics.emit(n)}};this.getAbbreviationTitle=function(){var t=e,n=t.abbrTitle,i=t.filetype;if(i===\"PDF\")return\"Portable Document Format\";return n};this.abbrTitle=undefined;this.active=false;this.calendar=false;this.channel=false;this.disableAnalytics=false;this.download=false;this.href=undefined;this.filename=undefined;this.filetype=undefined;this.pages=undefined;this.text=undefined;this.video=false}t.prototype.render=function(){var t=this,e=t.active,n=t.calendar,i=t.channel,o=t.download,a=t.filetype,r=t.filename,l=t.getAbbreviationTitle,s=t.handleClick,c=t.href,f=t.pages,d=t.text,u=t.video;if(e){return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],null,Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"a\",{href:c,onClick:s},d,Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"i\",{\"aria-hidden\":\"true\"})))}if(i||u){return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],null,Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"a\",{href:c,onClick:s,rel:\"noopener\",target:\"_blank\"},Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"i\",{\"aria-hidden\":\"true\"}),d,\" \",Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"dfn\",null,i?\"YouTube\":\"on YouTube\")))}if(n){return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],null,Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"a\",{href:c,download:r,onClick:s},Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"i\",{\"aria-hidden\":\"true\"}),d))}if(o){return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],null,Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"a\",{href:c,download:r,onClick:s},Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"i\",{\"aria-hidden\":\"true\"}),d,\" \",a&&Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"dfn\",null,\"(\",Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"abbr\",{title:l()},a),f&&\", \".concat(f,\" pages\"),\")\")))}return Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"],null,Object(_index_c384c57b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"a\",{href:c,onClick:s},d))};return t}();VaLink.style=vaLinkCss;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGRlcGFydG1lbnQtb2YtdmV0ZXJhbnMtYWZmYWlycy93ZWItY29tcG9uZW50cy9kaXN0L2VzbS1lczUvdmEtbGluay5lbnRyeS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVwYXJ0bWVudC1vZi12ZXRlcmFucy1hZmZhaXJzL3dlYi1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS92YS1saW5rLmVudHJ5LmpzPzY0ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e3IgYXMgcmVnaXN0ZXJJbnN0YW5jZSxjIGFzIGNyZWF0ZUV2ZW50LGgsSCBhcyBIb3N0fWZyb21cIi4vaW5kZXgtYzM4NGM1N2IuanNcIjt2YXIgdmFMaW5rQ3NzPVwiYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpmb2N1cyxzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOmZvY3VzLGE6bm90KFtkaXNhYmxlZF0pOmZvY3VzLGgxOmZvY3VzLGlucHV0Om5vdChbZGlzYWJsZWRdKTpmb2N1cyx0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMsW3JvbGU9J29wdGlvbiddOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNvbG9yLWdvbGQtbGlnaHQpO291dGxpbmUtb2Zmc2V0OjJweH1he3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOnZhcigtLWNvbG9yLWxpbmstZGVmYXVsdCk7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjAuM3M7dHJhbnNpdGlvbi1kdXJhdGlvbjowLjNzOy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OmNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3I7dHJhbnNpdGlvbi1wcm9wZXJ0eTpjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yfWE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuMDUpO2NvbG9yOmluaGVyaXR9YTp2aXNpdGVke2NvbG9yOnZhcigtLWNvbG9yLWxpbmstdmlzaXRlZCl9Omhvc3R7ZGlzcGxheTppbmxpbmV9Omhvc3QgYXtjdXJzb3I6cG9pbnRlcjt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfTpob3N0KFthY3RpdmVdOm5vdChbYWN0aXZlPSdmYWxzZSddKSkgYXtmb250LXdlaWdodDo3MDB9aTo6YmVmb3Jley1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtZmFtaWx5OidGb250IEF3ZXNvbWUgNSBGcmVlJztmb250LXNpemU6MS42cmVtO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6OTAwO2xpbmUtaGVpZ2h0OjE7bWFyZ2luLXJpZ2h0OjAuOHJlbTt0ZXh0LXJlbmRlcmluZzphdXRvfTpob3N0KFthY3RpdmVdOm5vdChbYWN0aXZlPSdmYWxzZSddKSkgaTo6YmVmb3Jle2NvbnRlbnQ6J1xcXFxmMTA1JzttYXJnaW4tYm90dG9tOjAuMXJlbTttYXJnaW4tbGVmdDowLjhyZW07bWFyZ2luLXJpZ2h0OjA7dmVydGljYWwtYWxpZ246bWlkZGxlfTpob3N0KFthY3RpdmVdOm5vdChbYWN0aXZlPSdmYWxzZSddKSkgYTpmb2N1cyBpOjpiZWZvcmUsOmhvc3QoW2FjdGl2ZV06bm90KFthY3RpdmU9J2ZhbHNlJ10pKSBhOmhvdmVyIGk6OmJlZm9yZXttYXJnaW4tbGVmdDoxLjJyZW07LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjAuM3M7dHJhbnNpdGlvbi1kdXJhdGlvbjowLjNzOy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Om1hcmdpbjt0cmFuc2l0aW9uLXByb3BlcnR5Om1hcmdpbn06aG9zdChbZG93bmxvYWRdOm5vdChbZG93bmxvYWQ9J2ZhbHNlJ10pKSBpOjpiZWZvcmV7Y29udGVudDonXFxcXGYwMTknO306aG9zdChbdmlkZW9dOm5vdChbdmlkZW89J2ZhbHNlJ10pKSBpOjpiZWZvcmV7Y29udGVudDonXFxcXGYxNDQnO306aG9zdChbY2hhbm5lbF06bm90KFtjaGFubmVsPSdmYWxzZSddKSkgaTo6YmVmb3Jle2NvbnRlbnQ6J1xcXFxmMTY3Jztmb250LWZhbWlseTonRm9udCBBd2Vzb21lIDUgQnJhbmRzJztmb250LXdlaWdodDo0MDB9Omhvc3QoW2NhbGVuZGFyXTpub3QoW2NhbGVuZGFyPSdmYWxzZSddKSkgaTo6YmVmb3Jle2NvbnRlbnQ6J1xcXFxmMTMzJzt9ZGZue2ZvbnQtc3R5bGU6bm9ybWFsfWFiYnJ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9XCI7dmFyIFZhTGluaz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dmFyIGU9dGhpcztyZWdpc3Rlckluc3RhbmNlKHRoaXMsdCk7dGhpcy5jb21wb25lbnRMaWJyYXJ5QW5hbHl0aWNzPWNyZWF0ZUV2ZW50KHRoaXMsXCJjb21wb25lbnQtbGlicmFyeS1hbmFseXRpY3NcIiw3KTt0aGlzLmhhbmRsZUNsaWNrPWZ1bmN0aW9uKHQpe2lmKCFlLmRpc2FibGVBbmFseXRpY3Mpe3ZhciBuPXtjb21wb25lbnROYW1lOlwidmEtbGlua1wiLGFjdGlvbjpcImNsaWNrXCIsZGV0YWlsczp7bGFiZWw6ZS50ZXh0fX07ZS5jb21wb25lbnRMaWJyYXJ5QW5hbHl0aWNzLmVtaXQobil9fTt0aGlzLmdldEFiYnJldmlhdGlvblRpdGxlPWZ1bmN0aW9uKCl7dmFyIHQ9ZSxuPXQuYWJiclRpdGxlLGk9dC5maWxldHlwZTtpZihpPT09XCJQREZcIilyZXR1cm5cIlBvcnRhYmxlIERvY3VtZW50IEZvcm1hdFwiO3JldHVybiBufTt0aGlzLmFiYnJUaXRsZT11bmRlZmluZWQ7dGhpcy5hY3RpdmU9ZmFsc2U7dGhpcy5jYWxlbmRhcj1mYWxzZTt0aGlzLmNoYW5uZWw9ZmFsc2U7dGhpcy5kaXNhYmxlQW5hbHl0aWNzPWZhbHNlO3RoaXMuZG93bmxvYWQ9ZmFsc2U7dGhpcy5ocmVmPXVuZGVmaW5lZDt0aGlzLmZpbGVuYW1lPXVuZGVmaW5lZDt0aGlzLmZpbGV0eXBlPXVuZGVmaW5lZDt0aGlzLnBhZ2VzPXVuZGVmaW5lZDt0aGlzLnRleHQ9dW5kZWZpbmVkO3RoaXMudmlkZW89ZmFsc2V9dC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuYWN0aXZlLG49dC5jYWxlbmRhcixpPXQuY2hhbm5lbCxvPXQuZG93bmxvYWQsYT10LmZpbGV0eXBlLHI9dC5maWxlbmFtZSxsPXQuZ2V0QWJicmV2aWF0aW9uVGl0bGUscz10LmhhbmRsZUNsaWNrLGM9dC5ocmVmLGY9dC5wYWdlcyxkPXQudGV4dCx1PXQudmlkZW87aWYoZSl7cmV0dXJuIGgoSG9zdCxudWxsLGgoXCJhXCIse2hyZWY6YyxvbkNsaWNrOnN9LGQsaChcImlcIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifSkpKX1pZihpfHx1KXtyZXR1cm4gaChIb3N0LG51bGwsaChcImFcIix7aHJlZjpjLG9uQ2xpY2s6cyxyZWw6XCJub29wZW5lclwiLHRhcmdldDpcIl9ibGFua1wifSxoKFwiaVwiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9KSxkLFwiIFwiLGgoXCJkZm5cIixudWxsLGk/XCJZb3VUdWJlXCI6XCJvbiBZb3VUdWJlXCIpKSl9aWYobil7cmV0dXJuIGgoSG9zdCxudWxsLGgoXCJhXCIse2hyZWY6Yyxkb3dubG9hZDpyLG9uQ2xpY2s6c30saChcImlcIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifSksZCkpfWlmKG8pe3JldHVybiBoKEhvc3QsbnVsbCxoKFwiYVwiLHtocmVmOmMsZG93bmxvYWQ6cixvbkNsaWNrOnN9LGgoXCJpXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0pLGQsXCIgXCIsYSYmaChcImRmblwiLG51bGwsXCIoXCIsaChcImFiYnJcIix7dGl0bGU6bCgpfSxhKSxmJiZcIiwgXCIuY29uY2F0KGYsXCIgcGFnZXNcIiksXCIpXCIpKSl9cmV0dXJuIGgoSG9zdCxudWxsLGgoXCJhXCIse2hyZWY6YyxvbkNsaWNrOnN9LGQpKX07cmV0dXJuIHR9KCk7VmFMaW5rLnN0eWxlPXZhTGlua0NzcztleHBvcnR7VmFMaW5rIGFzIHZhX2xpbmt9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-link.entry.js\n");

/***/ })

}]);