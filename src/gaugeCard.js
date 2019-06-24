const GaugeCard = (props) => {
    const { config, data } = props;

    const { cardClass = "cardClass", tilebody = { descStyle: {}, titleStyle: {}, noteStyle: {}, innerCard: {} } } = config;
    const { tileClass = "tileClass", title = "TITLE", desc = "Descript", titleStyle = {}, descStyle = {} } = tilebody || {};
    const { titleClass = "titleClass" } = titleStyle;
    const { descClass = "descClass" } = descStyle;

    const styles = {
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
                padding: descStyle.padding || "5px",
                margin: descStyle.margin || "10px",
            },
        }

    };
    return (
        <Card style={styles.card}>
            <CardContent className="col-12" style={styles.tilebody} >
                <UtilGauge lableName={title} progress={desc} />
            </CardContent>
        </Card>
    );
}
export default GaugeCard;