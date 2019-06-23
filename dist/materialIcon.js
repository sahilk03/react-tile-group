'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Style: <link rel="stylesheet" href="vendors/material-icons/material-icons.css">
// https://github.com/material-components/material-components-web-react/blob/master/packages/material-icon/index.js

var MaterialIcon = function (_React$Component) {
  _inherits(MaterialIcon, _React$Component);

  function MaterialIcon() {
    _classCallCheck(this, MaterialIcon);

    return _possibleConstructorReturn(this, (MaterialIcon.__proto__ || Object.getPrototypeOf(MaterialIcon)).apply(this, arguments));
  }

  _createClass(MaterialIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          otherProps = _objectWithoutProperties(_props, ['icon']);

      return _react2.default.createElement(MaterialIconDefault, _extends({
        icon: icon
      }, otherProps));
    }
  }]);

  return MaterialIcon;
}(_react2.default.Component);

exports.default = MaterialIcon;


var MaterialIconDefault = function MaterialIconDefault(props) {
  var className = props.className,
      icon = props.icon,
      otherProps = _objectWithoutProperties(props, ['className', 'icon']);

  var classes = (0, _classnames2.default)('material-icons', className);

  return _react2.default.createElement(
    'i',
    _extends({
      className: classes
    }, otherProps),
    icon
  );
};

MaterialIcon.propTypes = {
  icon: _propTypes2.default.string
};

MaterialIcon.defaultProps = {
  icon: ''
};

MaterialIconDefault.propTypes = {
  icon: _propTypes2.default.string,
  className: _propTypes2.default.string
};

MaterialIconDefault.defaultProps = {
  icon: '',
  className: ''
};