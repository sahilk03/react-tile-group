import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MaterialIcon from './materialIcon';

const StatCard = (props) => {
    const { config, data } = props;
    const { cardClass = "cardClass", tileClass = "tileClass", noteClass = "noteClass", descClass = "descClass", titleClass = "titleClass", title = "TITLE", desc = "Descript", note = "Note", icon: innerCardIcon = "search", overrideStyles = {} } = config;
    const onPressCallBack = config.onPressCallBack || function () { };
    const onDoublePressCallBack = config.onDoublePressCallBack || function () { };
    const styles = {
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
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
        dividerStyle: { height: "2px" },

        tilebodyStyle: {
            width: "100%",
            height: "100%",
            color: "#999",
            textAlign: '',
            padding: "0px",
            textAlign: '',
            padding: "0px",
            display: "flex",

            flexDirection: "column"
        },
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
            textTransform: "capitalize",
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
            alignItems: "center",

        },
        iconStyle: {
            color: "white",
            fontSize: 60,
        }
    };
    for (let overrideStyleKey in overrideStyles) {

        let obj = styles[overrideStyleKey];
        for (let key in overrideStyles[overrideStyleKey]) {
            if (typeof overrideStyles[overrideStyleKey][key] == "string")
                obj[key] = overrideStyles[overrideStyleKey][key];
        }
        styles[overrideStyleKey] = obj;
    }
    return (
        <div className="d-inline-flex overflow-visible" >
            <Card className={cardClass + " rounded-top overflow-visible"} style={styles.cardStyle} onClick={(e) => onPressCallBack(e, data)} onDoubleClick={(e) => onDoublePressCallBack(e, data)}>
                <CardContent className={tileClass} style={styles.tilebodyStyle} >
                    <div className="col-12  p-0 pt-2 d-flex" style={{ flex: "unset" }}>
                        <div className="col-6 d-inline-block" >
                            <Card style={styles.innerCardStyle}>
                                <CardContent>
                                    <MaterialIcon icon={innerCardIcon} style={styles.iconStyle} />
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-6 d-inline-block flex-column align-self-center justify-self-end">
                            <p className={titleClass} style={styles.titleStyle}>
                                {title}
                            </p>
                            <p className={descClass} style={styles.descStyle}>
                                {desc}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 align-self-end p-0 mt-auto" style={{ flex: "unset" }}>
                        <Divider className="mx-2" light style={styles.dividerStyle} />
                        <p className={noteClass} style={styles.noteStyle}>
                            {note}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default StatCard;