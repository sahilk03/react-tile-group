import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GaugeCard from './gaugeCard';
import StatCard from './statCard';
import CustomCard from './customCard';
import ContactCard from './contactCard';
import DashCard from './dashCard';
import ProgressCard from './progressCard';
import FuseCard from './fuseCard';
import { SQUARE_CARD, STAT_CARD, CONTACT_CARD, DASH_CARD, PROGRESS_CARD, CUSTOM_CARD, GAUGE_CARD, FUSE_CARD } from './constants.js';




const Tile = (props) => {
    let content = '';
    const { config, data, index } = props;
    config.type = (config.content) ? "customCard" : config.type;

    switch (config.type) {
        default:
        case SQUARE_CARD: content = <SquareTile config={config} data={data} />;
            break;
        case STAT_CARD: content = <StatCard config={config} data={data} />;
            break;
        case CONTACT_CARD: content = <ContactCard config={config} data={data} />;
            break;
        case DASH_CARD: content = <DashCard config={config} data={data} />;
            break;
        case PROGRESS_CARD: content = <ProgressCard config={config} data={data} />;
            break;
        case CUSTOM_CARD: content = <CustomCard config={config} data={data} index={index} />;
            break;
        case GAUGE_CARD: content = <GaugeCard config={config} data={data} />;
            break;
        case FUSE_CARD: content = <FuseCard config={config} data={data} />;
            break;
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
};





const SquareTile = (props) => {
    const { config, data } = this.props;

    const { cardClass = "cardClass", tilebody = { descStyle: {}, titleStyle: {}, noteStyle: {}, innerCard: {} } } = config;
    const { tileClass = "tileClass", title = "TITLE", desc = "Descript", titleStyle = {}, descStyle = {} } = tilebody || {};
    const { titleClass = "titleClass" } = titleStyle;
    const { descClass = "descClass" } = descStyle;


    const styles = {
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
            fontFamily: config.fontFamily || "'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
        tilebody: {
            color: tilebody.color || "#999",
            textAlign: tilebody.textAlignment || 'center',
            titlestyle: {
                font: titleStyle.font || '',
                fontSize: titleStyle.fontSize || 27,
                padding: titleStyle.padding || "2px",
                margin: titleStyle.margin || "2px",
            },
            descstyle: {
                font: descStyle.font || '',
                fontSize: descStyle.fontSize || 20,
                fontFamily: descStyle.fontFamily || "'Roboto', 'Helvetica', 'Arial', sans-serif",
                padding: descStyle.padding || "5px",
                margin: descStyle.margin || "10px",
            },
        }

    };

    return (
        <Card className={cardClass} style={styles.card}>
            <CardContent className={"col-12 " + tileClass} style={styles.tilebody} >
                <div className={titleClass} style={styles.tilebody.titlestyle}>
                    {title}
                </div>
                <div className={descClass} style={styles.tilebody.descstyle}>
                    {desc}
                </div>
            </CardContent>
        </Card>
    );
}



export default Tile;