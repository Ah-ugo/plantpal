"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLinkContext = exports.LinkContext = void 0;
var _react = require("react");
const LinkContext = exports.LinkContext = /*#__PURE__*/(0, _react.createContext)({
  isHovered: false,
  isFocused: false,
  isPressed: false,
  isDisabled: false,
  isFocusVisible: false
});
const useLinkContext = () => (0, _react.useContext)(LinkContext);
exports.useLinkContext = useLinkContext;
//# sourceMappingURL=Context.js.map