'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require('@material-ui/core/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomCard = function (_React$Component) {
    _inherits(CustomCard, _React$Component);

    function CustomCard() {
        _classCallCheck(this, CustomCard);

        return _possibleConstructorReturn(this, (CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).apply(this, arguments));
    }

    _createClass(CustomCard, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                config = _props.config,
                index = _props.index;

            return _react2.default.createElement(
                _Card2.default,
                { style: styles.card },
                _react2.default.createElement(_CardContent2.default, { id: "customCardContent_" + index })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props2 = this.props,
                content = _props2.config.content,
                index = _props2.index;

            document.getElementById("customCardContent_" + index).innerHTML = content;
        }
    }]);

    return CustomCard;
}(_react2.default.Component);

exports.default = CustomCard;