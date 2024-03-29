'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

var _Tile = require('./Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _webfontloader = require('webfontloader');

var _webfontloader2 = _interopRequireDefault(_webfontloader);

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_webfontloader2.default.load({
    google: {
        families: ['Muli', 'Roboto', 'Helvetica', 'sans-serif', 'Arial']
    }
});

var TileGroup = function (_React$Component) {
    _inherits(TileGroup, _React$Component);

    function TileGroup() {
        _classCallCheck(this, TileGroup);

        return _possibleConstructorReturn(this, (TileGroup.__proto__ || Object.getPrototypeOf(TileGroup)).apply(this, arguments));
    }

    _createClass(TileGroup, [{
        key: 'render',
        value: function render() {
            var tiles = this.props.tiles;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                tiles.map(function (item, index) {
                    return _react2.default.createElement(_Tile2.default, { key: index, index: index, config: item, data: item.data || {} });
                })
            );
        }
    }]);

    return TileGroup;
}(_react2.default.Component);

exports.default = TileGroup;