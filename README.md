
# How to use react-tile-group

1. npm install react-tile-group 

2. Importing the Component. Example :

```
    import TileGroup from 'react-tile-group';
```	

3. Usage and Configuration 	

```
    <TileGroup tiles={[
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
	]} />
```

4. For Each Tile we need to provide a Array of configuration objects as props i.e, 
	**tiles = [{ key1 : value1 , key2 : value2 }]** . 
	We can override preset/default style using **overrideStyles** key in configuration object which again contains style objects with there respective key.
	Please Refer the configurations provided below for each type of Tile and Example to override those styles.

5. Tile Variants avialable i.e, 
    type: contactCard | statCard | dashCard| progressCard | customCard

6. Configuration of Each Variants are like below: 
    
## 	contactCard

![contactCard](https://github.com/sahilk03/react-tile-group/blob/master/SCREENSHOTS/contactCard.PNG?raw=true)
```
    {
        onPressCallBack:() =>{console.log('Text')},
        onDoublePressCallBack:() =>{console.log('Text')},
        className: 'tile',
		title: " ",
		desc: "34 BEDS",
		note: "Last 24 Hours",
		icon: "hotel",
        type: "contactCard",
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
    }
```
***
## 	statCard

![statCard](https://github.com/sahilk03/react-tile-group/blob/master/SCREENSHOTS/statCard.PNG?raw=true)

```
     {
        className: 'tile',
        type: "statCard",
        title: "Revenue",
        desc: "$34,245",
        note: "Last 24 Hours",
        icon: "home",
        overrideStyles: {
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
        }
    }
```
***	
## dashCard

![dashCard](https://github.com/sahilk03/react-tile-group/blob/master/SCREENSHOTS/dashCard.PNG?raw=true)


```
	{
		className: 'tile',
		type: "dashCard",
		title: "TRAFFIC",
		desc: "350,897",
		note: "Last 24 Hours",
		icon: "insert_chart_outlined",
		overrideStyles: {
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
		}
    }
```
***	
## progressCard

![progressCard](https://github.com/sahilk03/react-tile-group/blob/master/SCREENSHOTS/progressCard.PNG?raw=true)

```
	{
		className: 'tile',
		type: "progressCard",
		progressValue: "78%",
		progressLabel: "progresLabel",
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
    }
```
***
***
## Overriding styles 

 **applicable to all cards.
 
```
	{
		className: 'tile',
		type: "progressCard",
		progressValue: "78%",
		progressLabel: "**customValue**",
		className: 'tilebody',
		title: "Total Profit",
		desc: "All Customs Value",
		note: "Change",
		label: "$18M",
		progressLabelOn: true,

		overrideStyles: {
			labelStyle: {
			/*
						Custom styles go here like background:" white" as React In-Line Style object. 
						So css: margin-top:2px; => marginTop:"2px", 
			*/ 		
			},
			progressStyle: {
			/*
						Custom styles go here likewise we can override all existing/default styles or define new styles. 
			*/	
			},
			progressBarStyle: {
			/*
						Custom styles go here 
			*/ 		
			},
			innerCardStyle: {
				background: "#11cdef",
			}
		}
    }
```

* override appearing classes by directly providing in config object. For Ex:
```
	{
		cardClass: "Custom ClassName",
		tileClass: "tileClass", 
		cardClass  :  "cardClass", 
		titleClass :  "titleClass", 
		descClass  :  "descClass", 
		noteClass: "noteClass",
		type: "progressCard",
		progressValue: "78%",
		progressLabel: "**customValue**",
		className: 'tilebody',
		title: "Total Profit",
		desc: "All Customs Value",
		note: "Change",
		label: "$18M",
		progressLabelOn: true,

		overrideStyles: {
		}
	}
```
***
 7. In Each config you can pass onclick and onDoubleClick Event's Callback Handler with key  "onPressCallBack" or "onDoublePressCallBack". For Ex:
 
```
        onPressCallBack:() =>{console.log('Text')},
        onDoublePressCallBack:() =>{console.log('Text')}
```        
     
Git Repo Link : [react-tile-group](https://github.com/sahilk03/react-tile-group)