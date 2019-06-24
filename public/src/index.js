import React from 'react';
import { render } from 'react-dom';
import TileGroup from '../../src';

const onPressCallBack = (event, data) => {
    console.log("onPressCallBack");
    debugger
};

const tiles1 = [
    {
        onDoublePressCallBack: onPressCallBack,
        className: 'tile',
        type: "contactCard",
        title: " ",
        desc: "34 BEDS",
        note: "Last 24 Hours",
        icon: "hotel",
        overrideStyles: {
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
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                padding: "0px",
                margin: "0px",
                color: "",
                display: "flex",
                textTransform: "capitalize",
                lineHeight: "1.4em",
                // flexDirection: "column",
                justifyContent: "flex-end"
            },
            descStyle: {
                font: "#000000de",
                color: "#000000de",
                fontSize: 22,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                padding: "0px",
                margin: "0px",
                fontWeight: "300",
                textRendering: "optimizeLegibility",
                // maxHeight:  "10px",
                display: "flex",
                justifyContent: "flex-end",
                textTransform: "capitalize",
                //lineHeight: "1.4em",
            },
            noteStyle: {
                font: '',
                fontSize: 15,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                padding: "3px 15px",
                margin: "2px",
                float: "left"
            },
            innerCardStyle: {
                background: "white",
                color: "#fbc658",
                border: "0.1px solid white",
                WebkitFontSmoothing: "antialiased",
                alignItems: "center",

            }, iconStyle: {
                color: "linear-gradient(60deg,#66bb6a,#43a047)",
                fontSize: "70px"
            },
        }
    },
    {
        type: "contactCard",
        className: 'tilebody',
        title: "Certification",
        desc: "30",

        note: "Get More Space...",
        icon: "school",
        overrideStyles: {
            innerCardStyle: {
                color: "#6bd098",
            }, descStyle: {
                fontSize: "30px"
            },
        }

    },
    {
        type: "contactCard",
        className: 'tilebody',
        title: "NEW USERS",
        desc: "2,356",
        note: "Tracked from Github",
        icon: "person_add",
        overrideStyles: {
            innerCardStyle: {
                color: "#ef8157"
            },
            iconStyle: {
                color: "#ef8157",

            }
        }
    },
    {
        type: "contactCard",
        className: 'tilebody',
        title: "SHIPMENTS",
        desc: "245",
        note: "Just Updated",
        icon: "local_shipping",
        overrideStyles: {

            innerCardStyle: {
                color: "#51cbce",
            }
        }
    }
];

const tiles2 = [
    {
        className: 'tile',
        type: "statCard",
        className: 'tilebody',
        title: "Revenue",
        desc: "$34,245",
        note: "Last 24 Hours",
        icon: "home",
        overrideStyles: {

            innerCardStyle: {
                background: "linear-gradient(60deg,#66bb6a,#43a047)",
            }
        }
    },
    {
        // className: 'tile',
        type: "statCard",
        // width: 300,
        className: 'tilebody',
        title: "Used Space",
        desc: "60/70 GB",
        note: "Get More Space...",
        icon: "ac_unit",
        overrideStyles: {

            innerCardStyle: {
                background: "linear-gradient(60deg,#ffa726,#fb8c00)",
            }
        }
    },
    {
        // className: 'tile',
        type: "statCard",
        // width: 300,
        className: 'tilebody',
        title: "Fixed Issues",
        desc: "75",
        note: "Tracked from Github",
        icon: "info",
        overrideStyles: {

            innerCardStyle: {
                background: "linear-gradient(60deg,#ef5300,#e53935)",
                display: "flex",
                justifyContent: "center"
            }
        }
    },
    {
        // className: 'tile',
        type: "statCard",
        // width: 300,
        className: 'tilebody',
        title: "Gamers",
        desc: "+245",
        note: "Just Updated",
        icon: "videogame_asset",
        overrideStyles: {

            innerCardStyle: {
                background: "linear-gradient(60deg,#26c6da,#00acc1)",
            }
        }
    },

];

const tiles3 = [
    {
        className: 'tile',
        type: "dashCard",
        title: "TRAFFIC",
        desc: "350,897",
        note: "Last 24 Hours",
        icon: "insert_chart_outlined",
        overrideStyles: {
            innerCardStyle: {
                background: "#FF1493",
            }
        }
    },
    {
        className: 'tile',
        type: "dashCard",
        title: "TRAFFIC",
        desc: "350,897",
        note: "Last 24 Hours",
        icon: "pie_chart",
        overrideStyles: {
            innerCardStyle: {
                background: "#fb6340",
            }
        }
    },
    {
        className: 'tile',
        type: "dashCard",
        className: 'tilebody',
        title: "TRAFFIC",
        desc: "350,897",
        note: "Last 24 Hours",
        icon: "insert_chart_outlined",
        overrideStyles: {
            innerCardStyle: {
                background: "#ffd600",
            }
        }
    },
    {
        className: 'tile',
        type: "dashCard",
        className: 'tilebody',
        title: "Performance",
        desc: "350,897",
        note: "Last 24 Hours",
        icon: "trending_up",
        overrideStyles: {
            innerCardStyle: {
                background: "#11cdef",
            }
        }
    },
];

const tiles4 = [
    {
        className: 'tile',
        type: "progressCard",
        progressValue: "78%",
        //  progressLabel: "progresLabel",
        className: 'tilebody',
        title: "Total Profit",
        desc: "All Customs Value",
        note: "Change",
        label: "$18M",
        progressLabelOn: true,
        overrideStyles: {
            labelStyle: {
                color: "#22b9ff",
                fontWeight: "600",
                padding: "0 0 0 0.5rem",
            },
            progressStyle: {
            },
            progressBarStyle: {
                background: "#22b9ff"
            },

            innerCardStyle: {
                background: "#11cdef",
            }
        }
    },
    {
        className: 'tile',
        type: "progressCard",
        progressLabelOn: true,
        title: "New Feedbacks",
        desc: "Customer Review",
        note: "Change",
        label: "1349",
        progressValue: "29%",
        overrideStyles: {
            progressStyle: {
            },
            progressBarStyle: {
                background: "#ffb822"
            }
        }
    },
    {
        className: 'tile',
        type: "progressCard",
        className: 'tilebody',
        title: "New Orders",
        desc: "Fresh Order Amount",
        note: "change",
        label: "567",
        progressLabelOn: true,
        progressValue: "69%",
        //      progressLabel: "progresLabel",
        overrideStyles: {
            labelStyle: {
            },
            progressStyle: {

            },
            progressBarStyle: {
                background: "#fd27eb"
            },
            innerCardStyle: {
                background: "#11cdef",
            }
        }
    },
    {
        className: 'tile',
        type: "progressCard",
        className: 'tilebody',
        title: " New Users",
        desc: "Joined New User",
        note: "change",
        label: "276",
        progressLabelOn: true,
        progressValue: "90%",
        //      progressLabel: "progresLabel",
        overrideStyles: {

            labelStyle: {
            },
            progressStyle: {
            },
            progressBarStyle: {
                background: "#1dc9b7"
            }
            ,
            innerCardStyle: {
                background: "#11cdef",
            }
        }
    },
];


const App = () => (
    <div className="d-flex flex-wrap p-2 mt-2 justify-content-center">
        <TileGroup className="mx-auto" tiles={[{
            className: 'tile',
            type: "fuseCard",
            title: "protocol.protocalNumber",
            desc: "protocol.description",
            note: "ScreenFailureRate",
            headerTitle: "Feasibility",
            headerNote: "Phase: ",
            progressLabelOn: true,
            tilebody: {

                headerStyle: {
                    background: "#4caf50"
                },
                progress: {
                    progressValue: "20%",
                    //      progressLabel: "progresLabel",
                },
                innerCard: {
                    background: "#11cdef",
                }
            }
        }]} />

    </div>
);
/* 
        <TileGroup className="mx-auto" tiles={[ ...tiles1, ...tiles2,...tiles3,...tiles4]} />
*/
render(<App />, document.getElementById("root"));


