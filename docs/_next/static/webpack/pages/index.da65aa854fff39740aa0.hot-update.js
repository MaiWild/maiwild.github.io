webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _data_promo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/promo */ "./data/promo.js");




var _jsxFileName = "C:\\Users\\Ma\xEFlis\\git\\repositories\\maiwild.github.io\\pages\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var People = function People(_ref) {
  var name = _ref.name,
      github = _ref.github,
      mail = _ref.mail,
      stack = _ref.stack,
      cv = _ref.cv,
      portrait = _ref.portrait;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
      src: portrait,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.portrait
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.stack,
      children: stack.map(function (icon) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
            icon: ['fab', icon],
            size: "2x"
          }, icon, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        href: github,
        target: "_blank",
        children: github
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        href: "mailto:".concat(mail),
        target: "_blank",
        children: mail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
      href: cv,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,
      target: "_blank",
      children: "Voir le C.V."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};

_c = People;
var TITLE = 'Alternance développement web et mobile avancé';
function Home() {
  var _this2 = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: TITLE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
        children: TITLE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
          children: "12 avril 2021 - 8 avril 2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 41
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 76
        }, this), "Nos profils encore disponibles"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), _data_promo__WEBPACK_IMPORTED_MODULE_6__["students"] && _data_promo__WEBPACK_IMPORTED_MODULE_6__["students"].length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.grid,
        children: _data_promo__WEBPACK_IMPORTED_MODULE_6__["students"].map(function (student) {
          return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(People, _objectSpread(_objectSpread({}, student), {}, {
            key: student.name,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }
          }));
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "tr\xE8s prochainement..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: ["Done by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          href: "https://florentbarriol.com",
          children: "Florent Barriol"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 19
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "People");
$RefreshReg$(_c2, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGVvcGxlIiwibmFtZSIsImdpdGh1YiIsIm1haWwiLCJzdGFjayIsImN2IiwicG9ydHJhaXQiLCJzdHlsZXMiLCJjYXJkIiwibWFwIiwiaWNvbiIsImJ1dHRvbiIsIlRJVExFIiwiSG9tZSIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwic3R1ZGVudHMiLCJsZW5ndGgiLCJncmlkIiwic3R1ZGVudCIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsTUFBVCxRQUFTQSxNQUFUO0FBQUEsTUFBaUJDLElBQWpCLFFBQWlCQSxJQUFqQjtBQUFBLE1BQXVCQyxLQUF2QixRQUF1QkEsS0FBdkI7QUFBQSxNQUE4QkMsRUFBOUIsUUFBOEJBLEVBQTlCO0FBQUEsTUFBa0NDLFFBQWxDLFFBQWtDQSxRQUFsQztBQUFBLHNCQUNiO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxJQUF2QjtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFRixRQUFWO0FBQW9CLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0Q7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBS0w7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFJLGVBQVMsRUFBRU0sOERBQU0sQ0FBQ0gsS0FBdEI7QUFBQSxnQkFDR0EsS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLDRCQUNiO0FBQUEsaUNBQ0UscUVBQUMsOEVBQUQ7QUFBaUIsZ0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUUEsSUFBUixDQUF2QjtBQUFzQyxnQkFBSSxFQUFDO0FBQTNDLGFBQXFEQSxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFVRTtBQUFBLDZCQUNFO0FBQUcsWUFBSSxFQUFFUixNQUFUO0FBQWlCLGNBQU0sRUFBQyxRQUF4QjtBQUFBLGtCQUFrQ0E7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixlQWFFO0FBQUEsNkJBQ0U7QUFBRyxZQUFJLG1CQUFZQyxJQUFaLENBQVA7QUFBMkIsY0FBTSxFQUFDLFFBQWxDO0FBQUEsa0JBQTRDQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLGVBZ0JFO0FBQUcsVUFBSSxFQUFFRSxFQUFUO0FBQWEsZUFBUyxFQUFFRSw4REFBTSxDQUFDSSxNQUEvQjtBQUF1QyxZQUFNLEVBQUMsUUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFmOztLQUFNWCxNO0FBdUJOLElBQU1ZLEtBQUssR0FBRywrQ0FBZDtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVOLDhEQUFNLENBQUNPLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRRjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxFQUFFTCw4REFBTSxDQUFDUSxJQUF4QjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRVIsOERBQU0sQ0FBQ1MsS0FBdEI7QUFBQSxrQkFBOEJKO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUksaUJBQVMsRUFBRUwsOERBQU0sQ0FBQ1UsUUFBdEI7QUFBQSxnQ0FBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWhDLGVBQW1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBSUdDLG9EQUFRLElBQUlBLG9EQUFRLENBQUNDLE1BQXJCLGdCQUNDO0FBQUssaUJBQVMsRUFBRVosOERBQU0sQ0FBQ2EsSUFBdkI7QUFBQSxrQkFDR0Ysb0RBQVEsQ0FBQ1QsR0FBVCxDQUFhLFVBQUFZLE9BQU87QUFBQSw4QkFDbkIsNERBQUMsTUFBRCxrQ0FBWUEsT0FBWjtBQUFxQixlQUFHLEVBQUVBLE9BQU8sQ0FBQ3BCLElBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEbUI7QUFBQSxTQUFwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxnQkFPQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBcUJFO0FBQVEsZUFBUyxFQUFFTSw4REFBTSxDQUFDZSxNQUExQjtBQUFBLDZCQUNFO0FBQUEsNENBQ1U7QUFBRyxjQUFJLEVBQUMsNEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDtNQTlCdUJULEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGE2NWFhODU0ZmZmMzk3NDBhYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuaW1wb3J0IHsgc3R1ZGVudHMgfSBmcm9tICcuLi9kYXRhL3Byb21vJztcclxuXHJcbmNvbnN0IFBlb3BsZSA9ICh7IG5hbWUsIGdpdGh1YiwgbWFpbCwgc3RhY2ssIGN2LCBwb3J0cmFpdCB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgIDxpbWcgc3JjPXtwb3J0cmFpdH0gY2xhc3NOYW1lPXtzdHlsZXMucG9ydHJhaXR9IC8+XHJcbiAgICA8aDI+e25hbWV9PC9oMj5cclxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zdGFja30+XHJcbiAgICAgIHtzdGFjay5tYXAoaWNvbiA9PiAoXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsIGljb25dfSBzaXplPVwiMnhcIiBrZXk9e2ljb259IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICAgPHA+XHJcbiAgICAgIDxhIGhyZWY9e2dpdGh1Yn0gdGFyZ2V0PVwiX2JsYW5rXCI+e2dpdGh1Yn08L2E+XHJcbiAgICA8L3A+XHJcbiAgICA8cD5cclxuICAgICAgPGEgaHJlZj17YG1haWx0bzoke21haWx9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+e21haWx9PC9hPlxyXG4gICAgPC9wPlxyXG4gICAgPGEgaHJlZj17Y3Z9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gdGFyZ2V0PVwiX2JsYW5rXCIgPlxyXG4gICAgICBWb2lyIGxlIEMuVi5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IFRJVExFID0gJ0FsdGVybmFuY2UgZMOpdmVsb3BwZW1lbnQgd2ViIGV0IG1vYmlsZSBhdmFuY8OpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntUSVRMRX08L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57VElUTEV9PC9oMT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PjxpPjEyIGF2cmlsIDIwMjEgLSA4IGF2cmlsIDIwMjI8L2k+PGJyLz5Ob3MgcHJvZmlscyBlbmNvcmUgZGlzcG9uaWJsZXM8L2gyPlxyXG5cclxuICAgICAgICB7c3R1ZGVudHMgJiYgc3R1ZGVudHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAge3N0dWRlbnRzLm1hcChzdHVkZW50ID0+IChcclxuICAgICAgICAgICAgICA8UGVvcGxlIHsuLi5zdHVkZW50fSBrZXk9e3N0dWRlbnQubmFtZX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHA+dHLDqHMgcHJvY2hhaW5lbWVudC4uLjwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBEb25lIGJ5IDxhIGhyZWY9XCJodHRwczovL2Zsb3JlbnRiYXJyaW9sLmNvbVwiPkZsb3JlbnQgQmFycmlvbDwvYT4uXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==