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

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressCard = function ProgressCard(props) {
    var config = props.config;
    var _config$descClass = config.descClass,
        descClass = _config$descClass === undefined ? "descClass" : _config$descClass,
        _config$titleClass = config.titleClass,
        titleClass = _config$titleClass === undefined ? "titleClass" : _config$titleClass,
        _config$noteClass = config.noteClass,
        noteClass = _config$noteClass === undefined ? "noteClass" : _config$noteClass,
        _config$cardClass = config.cardClass,
        cardClass = _config$cardClass === undefined ? "cardClass" : _config$cardClass,
        _config$tileClass = config.tileClass,
        tileClass = _config$tileClass === undefined ? "tileClass" : _config$tileClass,
        _config$title = config.title,
        title = _config$title === undefined ? "" : _config$title,
        _config$desc = config.desc,
        desc = _config$desc === undefined ? "" : _config$desc,
        _config$note = config.note,
        note = _config$note === undefined ? "" : _config$note,
        _config$label = config.label,
        label = _config$label === undefined ? "" : _config$label,
        _config$iconOn = config.iconOn,
        iconOn = _config$iconOn === undefined ? false : _config$iconOn,
        _config$labelOn = config.labelOn,
        labelOn = _config$labelOn === undefined ? true : _config$labelOn,
        _config$progressLabel = config.progressLabelOn,
        progressLabelOn = _config$progressLabel === undefined ? false : _config$progressLabel,
        _config$icon = config.icon,
        innerCardIcon = _config$icon === undefined ? "" : _config$icon,
        _config$overrideStyle = config.overrideStyles,
        overrideStyles = _config$overrideStyle === undefined ? {} : _config$overrideStyle;
    var _config$progressValue = config.progressValue,
        progressValue = _config$progressValue === undefined ? "" : _config$progressValue,
        _config$progressLabel2 = config.progressLabel,
        progressLabel = _config$progressLabel2 === undefined ? "" : _config$progressLabel2;

    var onPressCallBack = config.onPressCallBack || function () {};
    var onDoublePressCallBack = config.onDoublePressCallBack || function () {};

    var styles = {
        cardStyle: {
            maxWidth: 500,
            width: 280,
            height: 155,
            background: "white",
            display: "flex",
            margin: "20px",
            padding: "0.5rem 1rem",
            border: "0.1px solid white",
            boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 0, 0, 0.14)",
            WebkitFontSmoothing: "antialiased",
            borderRadius: "0.375rem",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
        },
        tilebodyStyle: {
            width: "100%",
            height: "100%",
            color: "#999",
            textAlign: '',
            padding: "0px",
            display: "flex",
            flexDirection: "column"
        },
        titleStyle: {
            font: '',
            fontSize: 15,
            fontWeight: "600",
            padding: "0px",
            margin: "0px",
            color: "#6c7293",
            display: "flex",
            textTransform: "capitalize",
            lineHeight: "1.4em",
            justifyContent: "flex-start"
        },
        descStyle: {
            font: "#000000de",
            color: "#a7abc3",
            fontSize: 15,
            padding: "0px",
            margin: "0px",
            fontWeight: "300",
            textRendering: "optimizeLegibility",
            display: "flex",
            justifyContent: "flex-start",
            textTransform: "capitalize"
        },
        noteStyle: {
            font: '',
            fontSize: 13,
            padding: "5px 10px",
            margin: 2,
            float: "left"
        },
        innerCardStyle: {
            background: "linear-gradient(60deg,#66bb6a,#43a047)",
            color: "black",
            border: "0.1px solid white",
            WebkitFontSmoothing: "antialiased",
            alignItems: "center"

        },
        iconStyle: {
            color: "white",
            fontSize: 30,
            padding: 16
        },
        labelStyle: {
            font: '',
            fontSize: 22,
            fontWeight: "600",
            padding: "0 0 0 0.5rem",
            color: "#22b9ff"
        },
        progressStyle: {
            height: 5,
            background: "#ebedf2",
            borderRadius: "100px",
            // color: progress.color || "black",
            // border: progress.border || "0.1px solid white",
            WebkitFontSmoothing: "antialiased"
        },
        progressBarStyle: {
            width: progressValue,
            background: "#22b9ff",
            fontSize: 30,
            padding: 0
        },
        progressLabelStyle: {
            fontSize: 15
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
        { className: 'd-inline-flex' },
        _react2.default.createElement(
            _Card2.default,
            { className: cardClass, style: styles.cardStyle, onClick: function onClick() {
                    return onPressCallBack();
                }, onDoubleClick: function onDoubleClick() {
                    return onDoublePressCallBack();
                } },
            _react2.default.createElement(
                _CardContent2.default,
                { className: tileClass, style: styles.tilebodyStyle },
                _react2.default.createElement(
                    'div',
                    { className: 'd-flex p-0 pt-2 flex-row', style: { flex: "unset" } },
                    _react2.default.createElement(
                        'div',
                        { className: 'd-inline-block flex-column align-self-center' },
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
                    ),
                    iconOn && _react2.default.createElement(
                        'div',
                        { className: 'ml-auto rounded-circle justify-self-end align-self-center', style: styles.innerCard },
                        _react2.default.createElement(_materialIcon2.default, { icon: innerCardIcon, style: styles.iconStyle })
                    ),
                    labelOn && _react2.default.createElement(
                        'div',
                        { className: 'ml-auto rounded-circle justify-self-end align-self-center', style: styles.labelStyle },
                        label
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-12 d-flex align-self-end justify-content-center p-0 mt-auto flex-column', style: { flex: "unset" } },
                    _react2.default.createElement(
                        'div',
                        { className: 'progress', style: styles.progressStyle },
                        _react2.default.createElement('div', { className: 'progress-bar', style: styles.progressBarStyle,
                            role: 'progressbar',
                            'aria-valuenow': progressValue,
                            'aria-valuemin': '0',
                            'aria-valuemax': '100'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 d-flex align-self-end p-0 mt-auto flex-row  pt-2', style: { flex: "unset" } },
                        _react2.default.createElement(
                            'p',
                            { className: noteClass, style: styles.noteStyle },
                            note
                        ),
                        progressLabelOn && _react2.default.createElement(
                            'p',
                            { className: 'justify-self-end ml-auto', style: styles.progressLabelStyle },
                            progressLabel
                        )
                    )
                )
            )
        )
    );
};
exports.default = ProgressCard;