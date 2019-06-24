import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MaterialIcon from './materialIcon';
import { ProgressBar } from 'react-bootstrap'

const ProgressCard = (props) => {
    const { config, data } = this.props;

    const { descClass = "descClass", titleClass = "titleClass", noteClass = "noteClass", cardClass = "cardClass", tileClass = "tileClass", title = "", desc = "", note = "", label = "", iconOn = false, labelOn = true, progressLabelOn = false, icon: innerCardIcon = "", overrideStyles = {}, } = config;
    const { progressValue = "", progressLabel = "" } = config;
    const onPressCallBack = config.onPressCallBack || function () { };
    const onDoublePressCallBack = config.onDoublePressCallBack || function () { };

    const styles = {
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
            textTransform: "capitalize",
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
        },
        labelStyle: {
            font: '',
            fontSize: 22,
            fontWeight: "600",
            padding: "0 0 0 0.5rem",
            color: "#22b9ff",
        },
        progressStyle: {
            height: 5,
            background: "#ebedf2",
            borderRadius: "100px",
            // color: progress.color || "black",
            // border: progress.border || "0.1px solid white",
            WebkitFontSmoothing: "antialiased",
        },
        progressBarStyle: {
            width: progressValue,
            background: "#22b9ff",
            fontSize: 30,
            padding: 0,
        },
        progressLabelStyle: {
            fontSize: 15,
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
            <Card className={cardClass} style={styles.cardStyle} onClick={(e) => onPressCallBack(e, data)} onDoubleClick={(e) => onDoublePressCallBack(e, data)}>

                <CardContent className={tileClass} style={styles.tilebodyStyle} >
                    <div className="d-flex p-0 pt-2 flex-row" style={{ flex: "unset" }}>
                        <div className="d-inline-block flex-column align-self-center">
                            <p className={titleClass} style={styles.titleStyle}>
                                {title}
                            </p>
                            <p className={descClass} style={styles.descStyle}>
                                {desc}
                            </p>
                        </div>
                        {iconOn &&
                            <div className="ml-auto rounded-circle justify-self-end align-self-center" style={styles.innerCard}>
                                <MaterialIcon icon={innerCardIcon} style={styles.iconStyle} />
                            </div>
                        }
                        {labelOn && <div className="ml-auto rounded-circle justify-self-end align-self-center" style={styles.labelStyle}>
                            {label}
                        </div>
                        }
                    </div>

                    <div className="col-12 d-flex align-self-end justify-content-center p-0 mt-auto flex-column" style={{ flex: "unset" }}>
                        <div className='progress' style={styles.progressStyle}>
                            <div className='progress-bar' style={styles.progressBarStyle}
                                role='progressbar'
                                aria-valuenow={progressValue}
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                            </div>
                        </div>
                        <div className="col-12 d-flex align-self-end p-0 mt-auto flex-row  pt-2" style={{ flex: "unset" }}>
                            <p className={noteClass} style={styles.noteStyle}>
                                {note}
                            </p>
                            {progressLabelOn && <p className="justify-self-end ml-auto" style={styles.progressLabelStyle}>
                                {progressLabel}
                            </p>}
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div >
    );
}
export default ProgressCard;