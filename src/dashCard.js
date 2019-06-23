import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MaterialIcon from './materialIcon';

const DashCard = (props) => {
    const { config } = props;
    const { cardClass = "cardClass", tileClass = "tileClass", descClass = "descClass", titleClass = "titleClass", noteClass = "noteClass", title = "TITLE", desc = "Descript", note = "Note", icon: innerCardIcon = "search", overrideStyles = {} } = config;
    const onPressCallBack = config.onPressCallBack || function () { };
    const onDoublePressCallBack = config.onDoublePressCallBack || function () { };

    const styles = {
        cardStyle: {
            maxWidth: 500,
            width: 280,
            height: 135,
            background: "white",
            display: "flex",
            margin: "20px",
            padding: "0.5rem 1rem",
            border: "0.1px solid white",
            boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 0, 0, 0.14)",
            WebkitFontSmoothing: "antialiased",
            borderRadius: "0.375rem",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
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
            padding: "0px",
            margin: "0px",
            color: "",
            display: "flex",
            textTransform: "capitalize",
            lineHeight: "1.4em",
            justifyContent: "flex-start"
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
            justifyContent: "flex-start",
            textTransform: "capitalize",
            //lineHeight: descStyle.lineHeight || "1.4em",
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
            alignItems: "center",
        },
        iconStyle: {
            color: "white",
            fontSize: 30,
            padding: 16,
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

                        <div className="col-8 d-inline-block flex-column align-self-center">
                            <p className={titleClass} style={styles.titleStyle}>
                                {title}
                            </p>
                            <p className={descClass} style={styles.descStyle}>
                                {desc}
                            </p>
                        </div>
                        <div className="rounded-circle justify-self-center align-self-center" style={styles.innerCardStyle}>
                            <MaterialIcon icon={innerCardIcon} style={styles.iconStyle} />
                        </div>
                    </div>
                    <div className="col-12 d-flex align-self-end justify-content-center p-0 mt-auto" style={{ flex: "unset" }}>
                        {/* <Divider className="mx-2" light style={{ height: "2px" }} /> */}
                        <p className={noteClass} style={styles.noteStyle}>
                            {note}
                        </p>
                    </div>

                </CardContent>
            </Card>
        </div >
    );
}
export default DashCard;