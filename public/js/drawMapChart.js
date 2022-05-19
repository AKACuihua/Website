"https://www.amcharts.com/lib/4/geodata/json/worldLow.json"
am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
     // Create map instance\   
    var chart = am4core.create("chartdiv11", am4maps.MapChart);

    chart.titles.create().text = "The Distribution of KTV in China";

    // Set map definition
    chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/chinaHigh.json";
    chart.geodataSource.events.on("parseended", function (ev) {
        var data = [];
        for (var i = 0; i < ev.target.data.features.length; i++) {
            data.push({
                id: ev.target.data.features[i].id,
                value: Math.round(Math.random() * 10000)
            })
        }

        console.log(ev.target.data);

    var data = [
        { id: "CN-ZJ", value: 14.5 },
        { id: "HK-WC", value: 18.7 },
{ id: "CN-ZJ", value: 4599},
{ id: "CN-YN", value: 1707},
{ id: "CN-XZ", value: 107 },
{ id: "CN-XJ", value: 278 },
{ id: "CN-TW", value: 4359},
{ id: "CN-TJ", value: 806 },
{ id: "CN-SX", value: 1175 },
{ id: "CN-SN", value: 1366 },
{ id: "CN-SH", value: 1809 },
{ id: "CN-SD", value: 2853 },
{ id: "CN-SC", value: 250},
{ id: "CN-QH", value: 5369 },
{ id: "CN-NX", value: 382 },
{ id: "CN-NM", value: 953 },
{ id: "CN-MO", value: 57 },
{ id: "CN-LN", value: 1462 },
{ id: "CN-JX", value: 1457},
{ id: "CN-JS", value: 5326 },
{ id: "CN-JL", value: 558 },
{ id: "CN-HN", value: 3622 },
{ id: "CN-HL", value: 972 },
{ id: "CN-HK", value: 56 },
{ id: "CN-HI", value: 420 },
{ id: "CN-HE", value: 2598 },
{ id: "CN-HB", value: 2656},
{ id: "CN-HA", value: 4181 },
{ id: "CN-GZ", value: 1379 },
{ id: "CN-GX", value: 1412 },
{ id: "CN-GS", value: 770},
{ id: "CN-GD", value: 8566 },
{ id: "CN-FJ", value: 2580 },
{ id: "CN-CQ", value: 1502},
{ id: "CN-BJ", value: 2204 },
{ id: "CN-AH", value: 2473 },

    ];

        polygonSeries.data = data;
    })

    // Set projection
    chart.projection = new am4maps.projections.Mercator();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: chart.colors.getIndex(1).brighten(1),
        max: chart.colors.getIndex(1).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

   
let heatLegend = chart.createChild(am4maps.HeatLegend);
heatLegend.series = polygonSeries;
heatLegend.align = "right";
heatLegend.valign = "bottom";
heatLegend.height = am4core.percent(80);
heatLegend.orientation = "vertical";
heatLegend.valign = "middle";
heatLegend.marginRight = am4core.percent(4);
heatLegend.valueAxis.renderer.opposite = true;
heatLegend.valueAxis.renderer.dx = - 25;
heatLegend.valueAxis.strictMinMax = false;
heatLegend.valueAxis.fontSize = 9;
heatLegend.valueAxis.logarithmic = true;

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#3c5bdc");


// heat legend behavior
polygonSeries.mapPolygons.template.events.on("over", function (event) {
  handleHover(event.target);
})

polygonSeries.mapPolygons.template.events.on("hit", function (event) {
  handleHover(event.target);
})

function handleHover(column) {
  if (!isNaN(column.dataItem.value)) {
    heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
  }
  else {
    heatLegend.valueAxis.hideTooltip();
  }
}

polygonSeries.mapPolygons.template.events.on("out", function (event) {
  heatLegend.valueAxis.hideTooltip();
})

    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);

}); // end am4core.ready()