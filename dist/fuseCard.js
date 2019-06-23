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

var FuseCard = function FuseCard(props) {
    var config = props.config;
    var _config$overrideStyle = config.overrideStyles,
        overrideStyles = _config$overrideStyle === undefined ? {} : _config$overrideStyle;

    var _ref = config || {},
        _ref$cardClass = _ref.cardClass,
        cardClass = _ref$cardClass === undefined ? "cardClass" : _ref$cardClass,
        _ref$tileClass = _ref.tileClass,
        tileClass = _ref$tileClass === undefined ? "tileClass" : _ref$tileClass,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        _ref$desc = _ref.desc,
        desc = _ref$desc === undefined ? "" : _ref$desc,
        _ref$note = _ref.note,
        note = _ref$note === undefined ? "" : _ref$note,
        _ref$headerTitle = _ref.headerTitle,
        headerTitle = _ref$headerTitle === undefined ? "" : _ref$headerTitle,
        _ref$headerNote = _ref.headerNote,
        headerNote = _ref$headerNote === undefined ? "" : _ref$headerNote;

    var _config$titleClass = config.titleClass,
        titleClass = _config$titleClass === undefined ? "titleClass" : _config$titleClass,
        _config$descClass = config.descClass,
        descClass = _config$descClass === undefined ? "descClass" : _config$descClass,
        _config$noteClass = config.noteClass,
        noteClass = _config$noteClass === undefined ? "noteClass" : _config$noteClass;
    var _config$progressValue = config.progressValue,
        progressValue = _config$progressValue === undefined ? "" : _config$progressValue,
        _config$progressLabel = config.progressLabel,
        progressLabel = _config$progressLabel === undefined ? progressValue || "" : _config$progressLabel;


    var onPressCallBack = config.onPressCallBack || function () {};
    var onDoublePressCallBack = config.onDoublePressCallBack || function () {};

    var styles = {
        cardStyle: {
            maxWidth: 500,
            width: 300,
            height: 215,
            background: "white",
            display: "flex",
            margin: "20px",
            padding: "0",
            border: "0.1px solid white",
            boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 0, 0, 0.14)",
            WebkitFontSmoothing: "antialiased",
            borderRadius: "0.375rem",
            fontFamily: "'Muli','Roboto', 'Helvetica', 'Arial', sans-serif"
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
            fontSize: 16,
            fontWeight: "300",
            padding: "0px",
            margin: "0px",
            color: "#6c7293",
            display: "flex",
            textTransform: "capitalize",
            textAlign: "center",
            lineHeight: "1.4em",
            // flexDirection: "column",
            justifyContent: "center"
            // maxHeight: titleStyle.maxHeight || "10px",
        },
        descStyle: {
            font: "#000000de",
            color: "#a7abc3",
            fontSize: "13px",
            padding: "0px",
            margin: "0px",
            fontWeight: "300",
            textRendering: "optimizeLegibility",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            textTransform: "capitalize"
            //lineHeight: descStyle.lineHeight || "1.4em",
        },
        noteStyle: {
            font: '',
            fontSize: 13,
            padding: "5px 10px",
            fontWeight: "500",
            margin: 2,
            float: "left",
            color: "#2196f3"
        },
        innerCardStyle: {
            background: "linear-gradient(60deg,#66bb6a,#43a047)",
            color: "black",
            border: "0.1px solid white",
            WebkitFontSmoothing: "antialiased",
            alignItems: "center"

        },
        contentStyle: {
            width: "100%",
            height: "56%",
            color: "#999",
            textAlign: '',
            display: "flex",
            flexDirection: "column"
        },
        headerStyle: {
            font: '',
            fontSize: 14,
            fontWeight: "400",
            padding: "0 0 0 0.5rem",
            color: "white",
            background: "#2196f3",
            flex: "unset",
            height: "25%"
        },
        innerCardIconStyle: {
            color: "white",
            fontSize: 30,
            padding: 16
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
            background: "#2196f3",
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
                    { className: 'd-flex p-0 px-3 pt-3 flex-row ', style: styles.headerStyle },
                    _react2.default.createElement(
                        'p',
                        { className: 'align-self-center' },
                        headerTitle
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'ml-auto  justify-self-end align-self-center' },
                        headerNote
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'd-flex flex-column justify-content-center align-content-center', style: styles.contentStyle },
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
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-12 d-flex align-self-end justify-content-center p-0 mt-auto flex-column', style: { flex: "unset", height: "22%" } },
                    _react2.default.createElement(_Divider2.default, { light: true }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 d-flex align-self-end p-0 mt-auto flex-row  justify-content-center pt-1', style: { flex: "unset" } },
                        _react2.default.createElement(
                            'p',
                            { className: noteClass, style: styles.noteStyle },
                            note
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'progress ', style: styles.progressStyle },
                        _react2.default.createElement('div', { className: 'progress-bar', style: styles.progressBarStyle,
                            role: 'progressbar',
                            'aria-valuenow': progressValue,
                            'aria-valuemin': '0',
                            'aria-valuemax': '100'
                        })
                    )
                )
            )
        )
    );
};
exports.default = FuseCard;