// drawChart 
var chart30;

am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    chart3 = am4core.create("visulizationdiv3", am4charts.XYChart)

    var title = chart3.titles.create();
    title.text = "Number of different gender:";
    title.fontSize = 20;
    title.marginTop = 30;
   
    var categoryAxis = chart3.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "gender";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    
    var valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;

    // Add and configure Series
    var barSeries = chart3.series.push(new am4charts.ColumnSeries());
    barSeries.dataFields.valueY = "genderselect";
    barSeries.dataFields.categoryX = "gender";
    barSeries.name = "Gender";
    barSeries.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    barSeries.columns.template.fillOpacity = .8;
  
    barSeries.columns.template.stroke = am4core.color("#fff");
    barSeries.columns.template.strokeWidth = 2;
    barSeries.columns.template.strokeOpacity = 1;
    barSeries.columns.template
        // change the cursor on hover to make it apparent the object can be interacted with
        .cursorOverStyle = [
            {
                "property": "cursor",
                "value": "pointer"
            }
        ];
    
    barSeries.columns.template.adapter.add("fill", function (fill, target) {
        return chart3.colors.getIndex(target.dataItem.index);
      
      
       
    
    });
    
    chart30 = chart3;

});