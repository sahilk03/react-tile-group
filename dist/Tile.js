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

var _gaugeCard = require('./gaugeCard');

var _gaugeCard2 = _interopRequireDefault(_gaugeCard);

var _statCard = require('./statCard');

var _statCard2 = _interopRequireDefault(_statCard);

var _customCard = require('./customCard');

var _customCard2 = _interopRequireDefault(_customCard);

var _contactCard = require('./contactCard');

var _contactCard2 = _interopRequireDefault(_contactCard);

var _dashCard = require('./dashCard');

var _dashCard2 = _interopRequireDefault(_dashCard);

var _progressCard = require('./progressCard');

var _progressCard2 = _interopRequireDefault(_progressCard);

var _fuseCard = require('./fuseCard');

var _fuseCard2 = _interopRequireDefault(_fuseCard);

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tile = function Tile(props) {
    var content = '';
    var config = props.config,
        data = props.data,
        index = props.index;

    config.type = config.content ? "customCard" : config.type;

    switch (config.type) {
        default:
        case _constants.SQUARE_CARD:
            content = _react2.default.createElement(SquareTile, { config: config, data: data });
            break;
        case _constants.STAT_CARD:
            content = _react2.default.createElement(_statCard2.default, { config: config, data: data });
            break;
        case _constants.CONTACT_CARD:
            content = _react2.default.createElement(_contactCard2.default, { config: config, data: data });
            break;
        case _constants.DASH_CARD:
            content = _react2.default.createElement(_dashCard2.default, { config: config, data: data });
            break;
        case _constants.PROGRESS_CARD:
            content = _react2.default.createElement(_progressCard2.default, { config: config, data: data });
            break;
        case _constants.CUSTOM_CARD:
            content = _react2.default.createElement(_customCard2.default, { config: config, data: data, index: index });
            break;
        case _constants.GAUGE_CARD:
            content = _react2.default.createElement(_gaugeCard2.default, { config: config, data: data });
            break;
        case _constants.FUSE_CARD:
            content = _react2.default.createElement(_fuseCard2.default, { config: config, data: data });
            break;
    }

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        content
    );
};

var SquareTile = function SquareTile(props) {
    var _props = undefined.props,
        config = _props.config,
        data = _props.data;
    var _config$cardClass = config.cardClass,
        cardClass = _config$cardClass === undefined ? "cardClass" : _config$cardClass,
        _config$tilebody = config.tilebody,
        tilebody = _config$tilebody === undefined ? { descStyle: {}, titleStyle: {}, noteStyle: {}, innerCard: {} } : _config$tilebody;

    var _ref = tilebody || {},
        _ref$tileClass = _ref.tileClass,
        tileClass = _ref$tileClass === undefined ? "tileClass" : _ref$tileClass,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "TITLE" : _ref$title,
        _ref$desc = _ref.desc,
        desc = _ref$desc === undefined ? "Descript" : _ref$desc,
        _ref$titleStyle = _ref.titleStyle,
        titleStyle = _ref$titleStyle === undefined ? {} : _ref$titleStyle,
        _ref$descStyle = _ref.descStyle,
        descStyle = _ref$descStyle === undefined ? {} : _ref$descStyle;

    var _titleStyle$titleClas = titleStyle.titleClass,
        titleClass = _titleStyle$titleClas === undefined ? "titleClass" : _titleStyle$titleClas;
    var _descStyle$descClass = descStyle.descClass,
        descClass = _descStyle$descClass === undefined ? "descClass" : _descStyle$descClass;


    var styles = {
        card: {
            width: config.width || 300,
            background: config.bgcolor || "white",
            height: config.height || "",
            display: 'inline-block',
            margin: config.margin || "30px 20px 20px 20px",
            padding: config.padding || "5px 5px 5px 5px",
            border: config.border || "0.1px solid white",
            //  boxShadow: config.boxShadow || "5px 7px 5px #8888885e",
            boxShadow: config.boxShadow || "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 0, 0, 0.14)",
            WebkitFontSmoothing: "antialiased",
            borderRadius: "5px",
            fontFamily: config.fontFamily || "'Roboto', 'Helvetica', 'Arial', sans-serif"
        },
        tilebody: {
            color: tilebody.color || "#999",
            textAlign: tilebody.textAlignment || 'center',
            titlestyle: {
                font: titleStyle.font || '',
                fontSize: titleStyle.fontSize || 27,
                padding: titleStyle.padding || "2px",
                margin: titleStyle.margin || "2px"
            },
            descstyle: {
                font: descStyle.font || '',
                fontSize: descStyle.fontSize || 20,
                fontFamily: descStyle.fontFamily || "'Roboto', 'Helvetica', 'Arial', sans-serif",
                padding: descStyle.padding || "5px",
                margin: descStyle.margin || "10px"
            }
        }

    };

    return _react2.default.createElement(
        _Card2.default,
        { className: cardClass, style: styles.card },
        _react2.default.createElement(
            _CardContent2.default,
            { className: "col-12 " + tileClass, style: styles.tilebody },
            _react2.default.createElement(
                'div',
                { className: titleClass, style: styles.tilebody.titlestyle },
                title
            ),
            _react2.default.createElement(
                'div',
                { className: descClass, style: styles.tilebody.descstyle },
                desc
            )
        )
    );
};

exports.default = Tile;