// drawChart 
var chart20;

am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    chart2 = am4core.create("visulizationdiv2", am4charts.PieChart)

    var title = chart2.titles.create();
    title.text = "Which kind of song do you sing in Karaoke: ";
    title.fontSize = 20;
    title.marginTop = 30;

    // Add and configure Series
    var pieSeries = chart2.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "typeselect";
    pieSeries.dataFields.category = "musictype";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart2.innerRadius = am4core.percent(30);

    // var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.min = 0;

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
        // change the cursor on hover to make it apparent the object can be interacted with
        .cursorOverStyle = [
            {
                "property": "cursor",
                "value": "pointer"
            }
        ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    var hoverState = pieSeries.slices.template.states.getKey("hover");
    // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart2.legend = new am4charts.Legend();
    
    chart20 = chart2;

});