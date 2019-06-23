"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var GaugeCard = function GaugeCard(props) {
    var config = props.config;
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
            maxWidth: 500,
            width: config.width || 300,
            background: config.bgcolor || "white",
            height: config.height || '',
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
                padding: descStyle.padding || "5px",
                margin: descStyle.margin || "10px"
            }
        }

    };
    return React.createElement(
        Card,
        { style: styles.card },
        React.createElement(
            CardContent,
            { className: "col-12", style: styles.tilebody },
            React.createElement(UtilGauge, { lableName: title, progress: desc })
        )
    );
};
exports.default = GaugeCard;