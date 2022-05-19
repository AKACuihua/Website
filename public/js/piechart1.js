am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv5", am4charts.PieChart);
      
    
    // Add data
    chart.data = [ {
        "group": "Pop Song", 
        "cases": 65.8,
        //"color": am4core.color("#ED1C24")
    }, {
        "group": "Cantonese songs", 
        "cases": 8.93,
        //"color": am4core.color("#235789")
    }, {
        "group": "Rock", 
        "cases": 6.61,
        //"color": am4core.color("#F1D302")
    }, {
        "group": "Ballad",
        "cases": 5.88,
       // "color": am4core.color("#020100")
    } , {
        "group": "GuFeng music",
        "cases": 4.01
    } , {
        "group": "Rap",
        "cases": 2.77
    } , {
        "group": "Electronics",
        "cases": 1.30,
      
    } ];

    
    
    // Add and configure Series
   
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "cases";
    pieSeries.dataFields.category = "group";
    //pieSeries.slices.template.propertyFields.fill = "color";
    chart.innerRadius = am4core.percent(60);

    chart.colors.list = [
        am4core.color("#845EC2"),
        am4core.color("#D65DB1"),
        am4core.color("#FF6F91"),
        am4core.color("#FF9671"),
        am4core.color("#FFC75F"),
        am4core.color("#F9F871"),
      ];

    // Put a thick white border around each Slice
   
    //pieSeries.slices.template.stroke = am4core.color("#4a2abb");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    
/*
    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0,0,0,0);
    pieSeries.ticks.template.disabled = true;
    */

    //var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    //shadow.opacity = 0; 

    var hoverState = pieSeries.slices.template.states.getKey("hover"); 

    var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;   

    

    //chart.legend = new am4charts.Legend();

    //title
    var title = chart.titles.create();
    title.text = "The Type of song most popular in KTV";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

    
    // This creates initial animation
    
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    }); // end am4core.ready() 
    