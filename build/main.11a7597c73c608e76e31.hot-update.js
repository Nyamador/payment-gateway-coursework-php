webpackHotUpdate("main",{

/***/ "./frontend/components/PaymentContainer.js":
/*!*************************************************!*\
  !*** ./frontend/components/PaymentContainer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SecureText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SecureText */ "./frontend/components/SecureText.js");
/* harmony import */ var _LogoAndAmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogoAndAmount */ "./frontend/components/LogoAndAmount.js");
/* harmony import */ var _HowWouldYouLikeToPay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HowWouldYouLikeToPay */ "./frontend/components/HowWouldYouLikeToPay.js");
/* harmony import */ var _FlexColumn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FlexColumn */ "./frontend/components/FlexColumn.js");
/* harmony import */ var _CardForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardForm */ "./frontend/components/CardForm.js");
/* harmony import */ var _MomoForm_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MomoForm.jsx */ "./frontend/components/MomoForm.jsx");
/* harmony import */ var _ActionMenu_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ActionMenu.jsx */ "./frontend/components/ActionMenu.jsx");
/* harmony import */ var _SelectedMethodHeader_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SelectedMethodHeader.jsx */ "./frontend/components/SelectedMethodHeader.jsx");
/* harmony import */ var _icons_credit_card_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icons/credit-card.svg */ "./frontend/icons/credit-card.svg");
/* harmony import */ var _icons_credit_card_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_icons_credit_card_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icons_card_active_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icons/card_active.svg */ "./frontend/icons/card_active.svg");
/* harmony import */ var _icons_card_active_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_icons_card_active_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _icons_phone_active_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../icons/phone_active.svg */ "./frontend/icons/phone_active.svg");
/* harmony import */ var _icons_phone_active_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_icons_phone_active_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _icons_phone_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../icons/phone.svg */ "./frontend/icons/phone.svg");
/* harmony import */ var _icons_phone_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_icons_phone_svg__WEBPACK_IMPORTED_MODULE_15__);



var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;















var PaymentWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_FlexColumn__WEBPACK_IMPORTED_MODULE_7__["default"])(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    width: 30%;\n    background-color: white;\n    margin: auto;\n    min-height: 90%;\n    border-radius: 4px;\n    box-shadow: 0px 0px 7px 6px #c1c1c121;\n"])));
var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    // padding: 12px;\n"])));
var PaymentMethodSelectionWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_FlexColumn__WEBPACK_IMPORTED_MODULE_7__["default"])(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    border-top: 1px solid #E1E1E1;\n    background-color: #f9f9f9;\n    height: 100px;\n    margin-top: auto;\n    border-radius: 0 0 4px 4px;\n"])));
var PaymentMethodButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    height: 50px;\n    outline: transparent;\n    border: none;\n    background: transparent;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    border-top : ", ";\n\n    $:active{\n        outline: transparent;\n    }\n"])), function (props) {
  return props.momo ? "1px solid #E1E1E1" : "";
});
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    margin-right: 10px;\n"])));

var PaymentContainer = function PaymentContainer(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isMomoActive = _useState2[0],
      setIsMomoActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isCardActive = _useState4[0],
      setIsCardActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      showHowToPay = _useState6[0],
      setShowHowToPay = _useState6[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PaymentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Header, null, showHowToPay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SecureText__WEBPACK_IMPORTED_MODULE_4__["default"], null), isCardActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectedMethodHeader_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Card ",
    img_url: _icons_card_active_svg__WEBPACK_IMPORTED_MODULE_13___default.a
  }), isMomoActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectedMethodHeader_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "MoMo",
    img_url: _icons_phone_active_svg__WEBPACK_IMPORTED_MODULE_14___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LogoAndAmount__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data
  }), isMomoActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MomoForm_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data
  }), isCardActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CardForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data
  }), showHowToPay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HowWouldYouLikeToPay__WEBPACK_IMPORTED_MODULE_6__["default"], null), isMomoActive || isCardActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ActionMenu_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onPaymentMethodChange: function onPaymentMethodChange() {
      setShowHowToPay(true);
      setIsMomoActive(false);
      setIsCardActive(false);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PaymentMethodSelectionWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PaymentMethodButton, {
    onClick: function onClick() {
      setShowHowToPay(false);
      setIsMomoActive(false);
      setIsCardActive(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _icons_credit_card_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    title: "card"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Pay With ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, "Card"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PaymentMethodButton, {
    momo: true,
    onClick: function onClick() {
      setShowHowToPay(false);
      setIsCardActive(false);
      setIsMomoActive(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _icons_phone_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
    title: "momo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Pay With ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, "MoMo"), " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentContainer);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL1BheW1lbnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiUGF5bWVudFdyYXBwZXIiLCJzdHlsZWQiLCJGbGV4Q29sdW1uIiwiSGVhZGVyIiwiZGl2IiwiUGF5bWVudE1ldGhvZFNlbGVjdGlvbldyYXBwZXIiLCJQYXltZW50TWV0aG9kQnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJtb21vIiwiSW1hZ2VXcmFwcGVyIiwic3BhbiIsIlBheW1lbnRDb250YWluZXIiLCJkYXRhIiwidXNlU3RhdGUiLCJpc01vbW9BY3RpdmUiLCJzZXRJc01vbW9BY3RpdmUiLCJpc0NhcmRBY3RpdmUiLCJzZXRJc0NhcmRBY3RpdmUiLCJzaG93SG93VG9QYXkiLCJzZXRTaG93SG93VG9QYXkiLCJhY3RpdmVDYXJkIiwiYWN0aXZlUGhvbmUiLCJjYXJkIiwicGhvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLG1EQUFELENBQVQsaVNBQXBCO0FBU0EsSUFBTUMsTUFBTSxHQUFHRix5REFBTSxDQUFDRyxHQUFWLDZKQUFaO0FBSUEsSUFBTUMsNkJBQTZCLEdBQUdKLGlFQUFNLENBQUNDLG1EQUFELENBQVQsc1JBQW5DO0FBUUEsSUFBTUksbUJBQW1CLEdBQUdMLHlEQUFNLENBQUNNLE1BQVYsaWJBVU4sVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsSUFBTixHQUFhLG1CQUFiLEdBQW1DLEVBQXZDO0FBQUEsQ0FWQyxDQUF6QjtBQWlCQSxJQUFNQyxZQUFZLEdBQUdULHlEQUFNLENBQUNVLElBQVYsK0pBQWxCOztBQU9BLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBWTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxLQUFELENBRGY7QUFBQTtBQUFBLE1BQzFCQyxZQUQwQjtBQUFBLE1BQ1pDLGVBRFk7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUE7QUFBQSxNQUUxQkcsWUFGMEI7QUFBQSxNQUVaQyxlQUZZOztBQUFBLG1CQUdPSixzREFBUSxDQUFDLElBQUQsQ0FIZjtBQUFBO0FBQUEsTUFHMUJLLFlBSDBCO0FBQUEsTUFHWkMsZUFIWTs7QUFNakMsc0JBQ0ksMkRBQUMsY0FBRCxxQkFDSSwyREFBQyxNQUFELFFBQ0tELFlBQVksaUJBQUksMkRBQUMsbURBQUQsT0FEckIsRUFFS0YsWUFBWSxpQkFBSSwyREFBQyxrRUFBRDtBQUFzQixTQUFLLEVBQUMsT0FBNUI7QUFBb0MsV0FBTyxFQUFFSSw4REFBVUE7QUFBdkQsSUFGckIsRUFHS04sWUFBWSxpQkFBSSwyREFBQyxrRUFBRDtBQUFzQixTQUFLLEVBQUMsTUFBNUI7QUFBbUMsV0FBTyxFQUFFTywrREFBV0E7QUFBdkQsSUFIckIsQ0FESixlQU1JLDJEQUFDLHNEQUFEO0FBQWUsUUFBSSxFQUFFVDtBQUFyQixJQU5KLEVBUUtFLFlBQVksaUJBQUksMkRBQUMscURBQUQ7QUFBVSxRQUFJLEVBQUVGO0FBQWhCLElBUnJCLEVBVUtJLFlBQVksaUJBQUksMkRBQUMsaURBQUQ7QUFBVSxRQUFJLEVBQUVKO0FBQWhCLElBVnJCLEVBWUlNLFlBQVksaUJBQUksMkRBQUMsNkRBQUQsT0FacEIsRUFpQktKLFlBQVksSUFBSUUsWUFBaEIsZ0JBQStCLDJEQUFDLHdEQUFEO0FBQVkseUJBQXFCLEVBQUUsaUNBQU07QUFDckVHLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FKLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FFLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0g7QUFKK0IsSUFBL0IsZ0JBS0QsMkRBQUMsNkJBQUQscUJBQ0ksMkRBQUMsbUJBQUQ7QUFBcUIsV0FBTyxFQUN4QixtQkFBTTtBQUNGRSxxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBSixxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBRSxxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNIO0FBTEwsa0JBTUksMkRBQUMsWUFBRCxxQkFDSTtBQUFLLE9BQUcsRUFBRUssOERBQVY7QUFBZ0IsU0FBSyxFQUFDO0FBQXRCLElBREosQ0FOSixlQVNJLGdHQUFZLGtGQUFaLENBVEosQ0FESixlQWFJLDJEQUFDLG1CQUFEO0FBQXFCLFFBQUksRUFBRSxJQUEzQjtBQUFpQyxXQUFPLEVBQ3BDLG1CQUFNO0FBQ0ZILHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FGLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FGLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0g7QUFMTCxrQkFNSSwyREFBQyxZQUFELHFCQUNBO0FBQUssT0FBRyxFQUFFUSx3REFBVjtBQUFpQixTQUFLLEVBQUM7QUFBdkIsSUFEQSxDQU5KLGVBU0ksZ0dBQVksa0ZBQVosTUFUSixDQWJKLENBdEJKLENBREo7QUFtREgsQ0F6REQ7O0FBMkRlWiwrRUFBZixFIiwiZmlsZSI6Im1haW4uMTFhNzU5N2M3M2M2MDhlNzZlMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmltcG9ydCBTZWN1cmVUZXh0IGZyb20gJy4vU2VjdXJlVGV4dCdcbmltcG9ydCBMb2dvQW5kQW1vdW50IGZyb20gJy4vTG9nb0FuZEFtb3VudCdcbmltcG9ydCBIb3dXb3VsZFlvdUxpa2VUb1BheSBmcm9tICcuL0hvd1dvdWxkWW91TGlrZVRvUGF5J1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi9GbGV4Q29sdW1uJ1xuaW1wb3J0IENhcmRGb3JtIGZyb20gJy4vQ2FyZEZvcm0nXG5pbXBvcnQgTW9tb0Zvcm0gZnJvbSAnLi9Nb21vRm9ybS5qc3gnXG5pbXBvcnQgQWN0aW9uTWVudSBmcm9tICcuL0FjdGlvbk1lbnUuanN4J1xuaW1wb3J0IFNlbGVjdGVkTWV0aG9kSGVhZGVyIGZyb20gJy4vU2VsZWN0ZWRNZXRob2RIZWFkZXIuanN4J1xuXG5cbmltcG9ydCBjYXJkIGZyb20gJy4uL2ljb25zL2NyZWRpdC1jYXJkLnN2ZydcbmltcG9ydCBhY3RpdmVDYXJkIGZyb20gJy4uL2ljb25zL2NhcmRfYWN0aXZlLnN2ZydcbmltcG9ydCBhY3RpdmVQaG9uZSBmcm9tICcuLi9pY29ucy9waG9uZV9hY3RpdmUuc3ZnJ1xuaW1wb3J0IHBob25lIGZyb20gJy4uL2ljb25zL3Bob25lLnN2ZydcblxuXG5jb25zdCBQYXltZW50V3JhcHBlciA9IHN0eWxlZChGbGV4Q29sdW1uKWBcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaW4taGVpZ2h0OiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDZweCAjYzFjMWMxMjE7XG5gXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gICAgLy8gcGFkZGluZzogMTJweDtcbmBcblxuY29uc3QgUGF5bWVudE1ldGhvZFNlbGVjdGlvbldyYXBwZXIgPSBzdHlsZWQoRmxleENvbHVtbilgXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG5gXG5cbmNvbnN0IFBheW1lbnRNZXRob2RCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGhlaWdodDogNTBweDtcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci10b3AgOiAke3Byb3BzID0+IHByb3BzLm1vbW8gPyBcIjFweCBzb2xpZCAjRTFFMUUxXCIgOiBcIlwifTtcblxuICAgICQ6YWN0aXZle1xuICAgICAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcbiAgICB9XG5gXG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbmBcblxuXG5cblxuY29uc3QgUGF5bWVudENvbnRhaW5lciA9ICh7ZGF0YX0pID0+IHtcbiAgICBjb25zdCBbaXNNb21vQWN0aXZlLCBzZXRJc01vbW9BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2lzQ2FyZEFjdGl2ZSwgc2V0SXNDYXJkQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtzaG93SG93VG9QYXksIHNldFNob3dIb3dUb1BheV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGF5bWVudFdyYXBwZXI+XG4gICAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgICAgIHtzaG93SG93VG9QYXkgJiYgPFNlY3VyZVRleHQvPn1cbiAgICAgICAgICAgICAgICB7aXNDYXJkQWN0aXZlICYmIDxTZWxlY3RlZE1ldGhvZEhlYWRlciB0aXRsZT1cIkNhcmQgXCIgaW1nX3VybD17YWN0aXZlQ2FyZH0vPn1cbiAgICAgICAgICAgICAgICB7aXNNb21vQWN0aXZlICYmIDxTZWxlY3RlZE1ldGhvZEhlYWRlciB0aXRsZT1cIk1vTW9cIiBpbWdfdXJsPXthY3RpdmVQaG9uZX0vPn1cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgPExvZ29BbmRBbW91bnQgZGF0YT17ZGF0YX0vPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7aXNNb21vQWN0aXZlICYmIDxNb21vRm9ybSBkYXRhPXtkYXRhfS8+fVxuXG4gICAgICAgICAgICB7aXNDYXJkQWN0aXZlICYmIDxDYXJkRm9ybSBkYXRhPXtkYXRhfS8+fVxuICAgICAgICBcbiAgICAgICAgICAge3Nob3dIb3dUb1BheSAmJiA8SG93V291bGRZb3VMaWtlVG9QYXkvPn1cblxuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB7aXNNb21vQWN0aXZlIHx8IGlzQ2FyZEFjdGl2ZSA/IDxBY3Rpb25NZW51IG9uUGF5bWVudE1ldGhvZENoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3dIb3dUb1BheSh0cnVlKVxuICAgICAgICAgICAgICAgIHNldElzTW9tb0FjdGl2ZShmYWxzZSlcbiAgICAgICAgICAgICAgICBzZXRJc0NhcmRBY3RpdmUoZmFsc2UpXG4gICAgICAgICAgICB9fS8+IDogXG4gICAgICAgICAgICA8UGF5bWVudE1ldGhvZFNlbGVjdGlvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgPFBheW1lbnRNZXRob2RCdXR0b24gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dIb3dUb1BheShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTW9tb0FjdGl2ZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzQ2FyZEFjdGl2ZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXJkfSB0aXRsZT1cImNhcmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8cD5QYXkgV2l0aCA8c3Ryb25nPkNhcmQ8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgPC9QYXltZW50TWV0aG9kQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPFBheW1lbnRNZXRob2RCdXR0b24gbW9tbz17dHJ1ZX0gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dIb3dUb1BheShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzQ2FyZEFjdGl2ZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTW9tb0FjdGl2ZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bob25lfSB0aXRsZT1cIm1vbW9cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8cD5QYXkgV2l0aCA8c3Ryb25nPk1vTW88L3N0cm9uZz4gPC9wPlxuICAgICAgICAgICAgICAgIDwvUGF5bWVudE1ldGhvZEJ1dHRvbj5cbiAgICAgICAgICAgIDwvUGF5bWVudE1ldGhvZFNlbGVjdGlvbldyYXBwZXI+fVxuXG4gICAgICAgIDwvUGF5bWVudFdyYXBwZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXltZW50Q29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==