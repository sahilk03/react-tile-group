import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MaterialIcon from './materialIcon';

const ContactCard = (props) => {
    const { config } = props;
    const { tileClass = "tileClass", cardClass = "cardClass", titleClass = "titleClass", descClass = "descClass", noteClass = "noteClass", overrideStyles = {} } = config;
    const { title = "TITLE", desc = "Descript", note = "Note", icon: innerCardIcon = "search" } = config;

    const onPressCallBack = config.onPressCallBack || function () { };
    const onDoublePressCallBack = config.onDoublePressCallBack || function () { };

    const styles = {
        cardStyle: {
            maxWidth: 500,
            width: 270,
            height: 160,
            background: "white",
            display: "flex",
            margin: "20px",
            padding: "5px",
            border: "0.1px solid white",
            //  boxShadow: config.boxShadow || "5px 7px 5px #8888885e",
            boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 0, 0, 0.14)",
            WebkitFontSmoothing: "antialiased",
            borderRadius: "20px",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",

        },
        tilebodyStyle: {
            width: "100%",
            height: "100%",
            color: "#999",
            textAlign: '',
            padding: "0px",
            display: "flex",
            flexDirection: "column",
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
            // flexDirection: "column",
            justifyContent: "flex-end"
            // maxHeight: titleStyle.maxHeight || "10px",
        },
        descStyle: {
            font: "#000000de",
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
            fontSize: 15,
            padding: "3px 15px",
            margin: "2px",
            float: "left"
        },
        innerCardStyle: {
            background: "white",
            color: "linear-gradient(60deg,#66bb6a,#43a047)",
            border: "0.1px solid white",
            WebkitFontSmoothing: "antialiased",
            alignItems: "center",

        },
        iconStyle: {
            color: "linear-gradient(60deg,#66bb6a,#43a047)",
            fontSize: "70px"
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
        <div className="d-inline-flex" >
            <Card className={cardClass} style={styles.cardStyle} onClick={() => onPressCallBack()} onDoubleClick={() => onDoublePressCallBack()}>
                <CardContent className={tileClass} style={styles.tilebodyStyle} >
                    <div className="col-12 d-flex p-0 pt-2" style={{ flex: "unset" }}>
                        <div className="col-6 d-inline-block" style={styles.innerCardStyle}>
                            <MaterialIcon icon={innerCardIcon} style={styles.iconStyle} />
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
                        <Divider className="mx-2" light style={{ height: "2px" }} />
                        <p className={noteClass} style={styles.noteStyle}>
                            {note}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div >
    );
}
export default ContactCard;