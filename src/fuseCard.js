import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MaterialIcon from './materialIcon';
import { ProgressBar } from 'react-bootstrap'

class FuseCard extends React.Component {

    render() {
        const { config, data } = this.props;
        const { overrideStyles = {} } = config;
        const { cardClass = "cardClass", tileClass = "tileClass", title = "", desc = "", note = "", headerTitle = "", headerNote = "" } = config || {};
        const { titleClass = "titleClass", descClass = "descClass", noteClass = "noteClass" } = config;
        const { progressValue = "", progressLabel = progressValue || "" } = config;

        const onPressCallBack = config.onPressCallBack || function () { };
        const onDoublePressCallBack = config.onDoublePressCallBack || function () { };

        const styles = {
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
                fontFamily: "'Muli','Roboto', 'Helvetica', 'Arial', sans-serif",
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
                textTransform: "capitalize",
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
                alignItems: "center",

            },
            contentStyle: {
                width: "100%",
                height: "56%",
                color: "#999",
                textAlign: '',
                display: "flex",
                flexDirection: "column",
            },
            headerStyle: {
                font: '',
                fontSize: 14,
                fontWeight: "400",
                padding: "0 0 0 0.5rem",
                color: "white",
                background: "#2196f3",
                flex: "unset",
                height: "25%",
            },
            innerCardIconStyle: {
                color: "white",
                fontSize: 30,
                padding: 16,
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
                        <div className="d-flex p-0 px-3 pt-3 flex-row " style={styles.headerStyle}>
                            <p className="align-self-center">
                                {headerTitle}
                            </p>
                            <p className="ml-auto  justify-self-end align-self-center" >
                                {headerNote}
                            </p>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-content-center" style={styles.contentStyle}>
                            <div className="d-inline-block flex-column align-self-center">
                                <p className={titleClass} style={styles.titleStyle}>
                                    {title}
                                </p>
                                <p className={descClass} style={styles.descStyle}>
                                    {desc}
                                </p>
                            </div>
                        </div>

                        <div className="col-12 d-flex align-self-end justify-content-center p-0 mt-auto flex-column" style={{ flex: "unset", height: "22%" }}>
                            <Divider light />

                            <div className="col-12 d-flex align-self-end p-0 mt-auto flex-row  justify-content-center pt-1" style={{ flex: "unset" }}>
                                <p className={noteClass} style={styles.noteStyle}>
                                    {note}
                                </p>
                            </div>

                            <div className="progress " style={styles.progressStyle}>
                                <div className='progress-bar' style={styles.progressBarStyle}
                                    role='progressbar'
                                    aria-valuenow={progressValue}
                                    aria-valuemin='0'
                                    aria-valuemax='100'
                                />
                            </div>
                        </div>

                    </CardContent>
                </Card>
            </div >
        );
    }
}
export default FuseCard;