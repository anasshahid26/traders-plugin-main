function drawCOTLineChart(chartTypeInput, divNameInput, dataListInput, graphListInput, defaultNumDataInput) {

	var valueAxesGuide = [];

	if (chartTypeInput == 'net') {
		valueAxesGuide = [
			{
				"fillAlpha": 0.05,
				"fillColor": "green",
				"lineAlpha": 0,
				"toValue": 100000000000000,
				"value": 0
			},
			{
				"fillAlpha": 0.05,
				"fillColor": "red",
				"lineAlpha": 0,
				"toValue": -10000000000000,
				"value": 0
			}
		];
	}

	var chart = AmCharts.makeChart(divNameInput, {
		"type": "serial",
		"theme": "light",
		// "marginRight": 80,
		// "autoMarginOffset": 20,
		"dataDateFormat": "YYYY-MM-DD",
		"dataProvider": dataListInput,
		"valueAxes": [{
			"gridColor":"#FFFFFF",
			"gridAlpha": 0.2,
			"dashLength": 0,
			"guides": valueAxesGuide,
		}],

		"categoryAxesSettings": {
			"maxSeries": 4000,
			"minPeriod": 'DD',
			"equalSpacing": true
		},

		"gridAboveGraphs": true,
		"startDuration": 0,
		"graphs": graphListInput,
		"chartScrollbar": {
			"oppositeAxis":false,
			"offset":30,
			"scrollbarHeight": 40,
			"backgroundAlpha": 0.2,
			"selectedBackgroundAlpha": 0.2,
			"selectedBackgroundColor": "#888888",
			"graphFillAlpha": 0,
			"graphLineAlpha": 0.5,
			"selectedGraphFillAlpha": 0,
			"selectedGraphLineAlpha": 1,
			"autoGridCount":true,
			"color":"#AAAAAA"
		},
		"chartCursor": {
			"pan": true,
			"valueLineEnabled": true,
			"valueLineBalloonEnabled": true,
			"cursorAlpha":0,
			"valueLineAlpha":0.2
		},
		"categoryField": "date",
		"categoryAxis": {
			"parseDates": true,
			"dashLength": 1,
			"minorGridEnabled": true
		},
		"export": {
			"enabled": true
		},
		"legend":{
			"position": "top",
		}
	});

	chart.addListener("rendered", zoomChart);

	zoomChart();

	function zoomChart() {
		chart.zoomToIndexes(chart.dataProvider.length - defaultNumDataInput, chart.dataProvider.length - 1);
	}
}

function drawCOTAreaChart(divNameInput, dataListInput, graphListInput, defaultNumDataInput) {

	var chart = AmCharts.makeChart(divNameInput, {
		"type": "serial",
		"theme": "light",
			// "titles": [{
			// 		"text": "Traffic incidents per year",
			// 		"size": 15
			// }],
		"legend": {
			"position": "top",
			"align": "center",
			"equalWidths": false,
			"periodValueText": "total: [[value.sum]]",
			"valueAlign": "left",
			"valueText": "[[value]] ([[percents]]%)",
			"valueWidth": 100
		},
		"dataProvider": dataListInput,
		"valueAxes": [{
			"stackType": "100%",
			"gridAlpha": 0.07,
			"position": "left",
			"title": "percent"
		}],
		"categoryAxesSettings": {
			"maxSeries": 4000,
			"minPeriod": 'DD',
			"equalSpacing": true
		},
		"graphs": graphListInput,
		"plotAreaBorderAlpha": 0,
		"marginLeft": 0,
		"marginBottom": 0,
		"chartCursor": {
			"cursorAlpha": 0,
			"zoomable": false
		},
		"categoryField": "date",
		"categoryAxis": {
			"parseDates": true,
			"dashLength": 1,
			"minorGridEnabled": true,
			"startOnAxis": true,
			"axisColor": "#DADADA",
			"gridAlpha": 0.07
		},
		"chartScrollbar": {
			"oppositeAxis":false,
			"offset":30,
			"scrollbarHeight": 40,
			"backgroundAlpha": 0.2,
			"selectedBackgroundAlpha": 0.2,
			"selectedBackgroundColor": "#888888",
			"graphFillAlpha": 0,
			"graphLineAlpha": 0.5,
			"selectedGraphFillAlpha": 0,
			"selectedGraphLineAlpha": 1,
			"autoGridCount":true,
			"color":"#AAAAAA"
		},
		"export": {
			"enabled": true
		}
	});

	chart.addListener("rendered", zoomChart);

	zoomChart();

	function zoomChart() {
		chart.zoomToIndexes(chart.dataProvider.length - defaultNumDataInput, chart.dataProvider.length - 1);
	}
}


function drawCOTCurrentLongShortChart(divName, dataListInput, graphListInput) {
	var chart = AmCharts.makeChart(divName, {
		"type": "serial",
		"theme": "light",
		// "titles": [{
		// 	"text": "Long vs. Short",
		// 	"size": 15
		// }],
		"legend": {
			"autoMargins": false,
			"borderAlpha": 0.2,
			"equalWidths": false,
			"horizontalGap": 10,
			"markerSize": 10,
			"useGraphSettings": true,
			"valueAlign": "left",
			"valueWidth": 0
		},
		"dataProvider": dataListInput,
		"valueAxes": [{
			"stackType": "100%",
			"axisAlpha": 0,
			"gridAlpha": 0,
			"labelsEnabled": false,
			"position": "left"
		}],
		"graphs": graphListInput,
		"marginTop": 30,
		"marginRight": 0,
		"marginLeft": 0,
		"marginBottom": 40,
		"autoMargins": false,
		"categoryField": "category",
		"categoryAxis": {
				"gridPosition": "start",
				"axisAlpha": 0,
				"gridAlpha": 0
		},
		"export": {
			"enabled": true
		 }

	});
}

function drawCotPriceNetChart(divName, dataListInput, graphListInput, fieldMappingsNetPositionsInput) {

	var valueAxesGuide = [
		{
			"fillAlpha": 0.05,
			"fillColor": "green",
			"lineAlpha": 0,
			"toValue": 100000000000000,
			"value": 0
		},
		{
			"fillAlpha": 0.05,
			"fillColor": "red",
			"lineAlpha": 0,
			"toValue": -10000000000000,
			"value": 0
		}
	];

	var fieldMappingsPrices = [
		{
			fromField: "open",
			toField: "open"
		},
		{
			fromField: "close",
			toField: "close"
		},
		{
			fromField: "high",
			toField: "high"
		},
		{
			fromField: "low",
			toField: "low"
		}
	];

	var fieldMappings = fieldMappingsPrices.concat(fieldMappingsNetPositionsInput);

	var chart = AmCharts.makeChart( divName, {
		type: "stock",
		theme: "light",
		path: "/amcharts/",
		dataSets: [
		{
			fieldMappings: fieldMappings,
			// color: "#7f8da9",
			dataProvider: dataListInput,
			title: "Price",
			categoryField: "date"
		},
		{
			fieldMappings: fieldMappingsNetPositionsInput,
			// color: "#fac314",
			dataProvider: dataListInput,
			// compared: true,
			title: "Net Positions",
			categoryField: "date"
		}],

		categoryAxesSettings: {
			maxSeries: 4000,
			minPeriod: 'DD',
			equalSpacing: true
		},

		panels: [
		{
			title: "Prices",
			// showCategoryAxis: true,
			percentHeight: 40,
			valueAxes: [ {
				id: "v1",
				dashLength: 5,
				position: "left"
			} ],

			stockGraphs: [ {
				type: "candlestick",
				id: "g1",
				balloonText: "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
				bullet: "round",
				bulletSize: 2,
				lineThickness: 1,
				openField: "open",
				closeField: "close",
				highField: "high",
				lowField: "low",
				valueField: "close",
				lineColor: "#7f8da9",
				fillColors: "#7f8da9",
				negativeLineColor: "#db4c3c",
				negativeFillColors: "#db4c3c",
				fillAlphas: 1,
				useDataSetColors: false,
				title: "Close Price:",
				comparable: true,
				compareField: "close",
				showBalloon: true,
			} ],

			stockLegend: {
				marginTop: 50,
				markerType: "square",
				// labelText: "[[title]]",
				valueTextRegular: undefined,
				// periodValueTextComparing: "[[percents.value.close]]%"
			}
		},

		{
			title: "Net Positions",
			percentHeight: 60,
			marginTop: 10,
			showCategoryAxis: true,
			// gridAboveGraphs: false,
			valueAxes: [ {
				position: 'left',
				dashLength: 5,
				// guides: valueAxesGuide,
			} ],

			stockGraphs: graphListInput,

			stockLegend: {
				marginTop: 50,
				markerType: "square",
				labelText: "[[title]]",
				useGraphSettings: true,
				// periodValueTextRegular: "[[value.close]]"
			}

		}
		],

		panelsSettings: {
			// color: "#fff",
			// plotAreaFillColors: "#333",
			plotAreaFillAlphas: 1,
			marginLeft: 70,
			marginTop: 5,
			marginBottom: 10
		},

		valueAxesSettings: {
			gridColor: "#EDEDED",
			gridAlpha: 1,
			inside: false,
			showLastLabel: true
		},

		chartScrollbarSettings: {

			graph: "g1",
			graphType: "line",
			usePeriod: "DD"
		},


		chartCursorSettings: {
			valueLineBalloonEnabled: true,
			valueLineEnabled: true,
			categoryBalloonEnabled: true,
		},

		periodSelector: {
			position: "bottom",
			periods: [ {
				period: "DD",
				count: 10,
				label: "10 days"
			}, {
				period: "MM",
				count: 1,
				label: "1 month"
			}, {
				period: "YYYY",
				count: 1,
				selected: true,
				label: "1 year"
			}, {
				period: "YYYY",
				count: 2,
				label: "2 years"
			}, {
				period: "YTD",
				label: "YTD"
			}, {
				period: "MAX",
				label: "MAX"
			} ]
		},
		"export": {
			"enabled": true
		}
	} );

}