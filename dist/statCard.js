'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require('@material-ui/core/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _materialIcon = require('./materialIcon');

var _materialIcon2 = _interopRequireDefault(_materialIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StatCard = function StatCard(props) {
    var _tilebodyStyle;

    var config = props.config;
    var _config$cardClass = config.cardClass,
        cardClass = _config$cardClass === undefined ? "cardClass" : _config$cardClass,
        _config$tileClass = config.tileClass,
        tileClass = _config$tileClass === undefined ? "tileClass" : _config$tileClass,
        _config$noteClass = config.noteClass,
        noteClass = _config$noteClass === undefined ? "noteClass" : _config$noteClass,
        _config$descClass = config.descClass,
        descClass = _config$descClass === undefined ? "descClass" : _config$descClass,
        _config$titleClass = config.titleClass,
        titleClass = _config$titleClass === undefined ? "titleClass" : _config$titleClass,
        _config$title = config.title,
        title = _config$title === undefined ? "TITLE" : _config$title,
        _config$desc = config.desc,
        desc = _config$desc === undefined ? "Descript" : _config$desc,
        _config$note = config.note,
        note = _config$note === undefined ? "Note" : _config$note,
        _config$icon = config.icon,
        innerCardIcon = _config$icon === undefined ? "search" : _config$icon,
        _config$overrideStyle = config.overrideStyles,
        overrideStyles = _config$overrideStyle === undefined ? {} : _config$overrideStyle;


    var styles = {
        cardStyle: {
            overflow: "visible",
            maxWidth: 500,
            width: 280,
            background: "white",
            height: 140,
            display: "flex",
            margin: "48px 20px 20px 20px",
            marginTop: "48px",
            padding: 5,
            border: "0.1px solid white",
            boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 0, 0, 0.14)",
            WebkitFontSmoothing: "antialiased",
            borderRadius: "5px",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
        },
        dividerStyle: { height: "2px" },

        tilebodyStyle: (_tilebodyStyle = {
            width: "100%",
            height: "100%",
            color: "#999",
            textAlign: '',
            padding: "0px"
        }, _defineProperty(_tilebodyStyle, 'textAlign', ''), _defineProperty(_tilebodyStyle, 'padding', "0px"), _defineProperty(_tilebodyStyle, 'display', "flex"), _defineProperty(_tilebodyStyle, 'flexDirection', "column"), _tilebodyStyle),
        titleStyle: {
            font: '',
            fontSize: 15,
            padding: "0px",
            margin: "0px",
            color: "",
            display: "flex",
            textTransform: "capitalize",
            lineHeight: "1.4em",
            justifyContent: "flex-end"
        },
        descStyle: {
            color: "#000000de",
            fontSize: 22,
            padding: "0px",
            margin: "0px",
            fontWeight: "300",
            textRendering: "optimizeLegibility",
            display: "flex",
            justifyContent: "flex-end",
            textTransform: "capitalize"
        },
        noteStyle: {
            font: '',
            fontSize: 15,
            padding: "3px 15px",
            margin: "2px",
            float: "left"
        },
        innerCardStyle: {
            background: "red",
            width: 100,
            height: 100,
            margin: "-60px 0px 0px 0px",
            border: "0.1px solid white",
            boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 0, 0, 0.14)",
            WebkitFontSmoothing: "antialiased",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        },
        iconStyle: {
            color: "white",
            fontSize: 60
        }
    };
    for (var overrideStyleKey in overrideStyles) {

        var obj = styles[overrideStyleKey];
        for (var key in overrideStyles[overrideStyleKey]) {
            if (typeof overrideStyles[overrideStyleKey][key] == "string") obj[key] = overrideStyles[overrideStyleKey][key];
        }
        styles[overrideStyleKey] = obj;
    }
    return _react2.default.createElement(
        'div',
        { className: 'd-inline-flex overflow-visible' },
        _react2.default.createElement(
            _Card2.default,
            { className: cardClass + " rounded-top overflow-visible", style: styles.cardStyle },
            _react2.default.createElement(
                _CardContent2.default,
                { className: tileClass, style: styles.tilebodyStyle },
                _react2.default.createElement(
                    'div',
                    { className: 'col-12  p-0 pt-2 d-flex', style: { flex: "unset" } },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-6 d-inline-block' },
                        _react2.default.createElement(
                            _Card2.default,
                            { style: styles.innerCardStyle },
                            _react2.default.createElement(
                                _CardContent2.default,
                                null,
                                _react2.default.createElement(_materialIcon2.default, { icon: innerCardIcon, style: styles.iconStyle })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-6 d-inline-block flex-column align-self-center justify-self-end' },
                        _react2.default.createElement(
                            'p',
                            { className: titleClass, style: styles.titleStyle },
                            title
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: descClass, style: styles.descStyle },
                            desc
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-12 align-self-end p-0 mt-auto', style: { flex: "unset" } },
                    _react2.default.createElement(_Divider2.default, { className: 'mx-2', light: true, style: styles.dividerStyle }),
                    _react2.default.createElement(
                        'p',
                        { className: noteClass, style: styles.noteStyle },
                        note
                    )
                )
            )
        )
    );
};
exports.default = StatCard;