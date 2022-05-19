am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv0", am4charts.XYChart);
    
    // Add data
    chart.data = [{

              "Category": 2009,
              "New increment": 3317,
              "Cancellation": 236
            },
            {
              "Category": 2010,
              "New increment": 3766,
              "Cancellation": 257
            },
            {
              "Category": 2011,
              "New increment": 3958,
              "Cancellation": 283
            },
            {
              "Category": 2012,
              "New increment": 4257,
              "Cancellation": 339
            },
            {
              "Category": 2013,
              "New increment": 4637,
              "Cancellation": 257
            },
            {
              "Category": 2014,
              "New increment": 5947,
              "Cancellation": 336
            },
            {
              "Category": 2015,
              "New increment": 9149,
              "Cancellation": 519
            },
            {
              "Category": 2016,
              "New increment": 10102,
              "Cancellation": 860
            },
            {
              "Category": 2017,
              "New increment": 11031,
              "Cancellation": 1467
            },
            {
              "Category": 2018,
              "New increment": 10738,
              "Cancellation": 3821
            },
            {
              "Category": 2019,
              "New increment": 10634,
              "Cancellation": 4609
            }];


    chart.data.forEach(function (o) {
    
        o.Category = "" + o.Category;
        o["Project Development"] = o["Project Development"] || undefined;
    
    });
    
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy";
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  
    /*看看需不需要dataAxis.dataFields.category = "Category";
    dataAxis.title.text = "Year";*/
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    /*valueAxis.title.text = "Number of Employees";
    truevalueAxis.tooltip.disabled = true;看看需不需要*/
    
    // Create series
    /*var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "New increment";
    series.dataFields.dateX = "Category";
    series.tooltipText = "New increment"
    series.strokeWidth = 2;
    series.minBulletDistance = 15;


    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";
    
    // Make bullets grow on hover
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");
    
    var bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;
    
    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;
    
    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();
    
    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;
    
    dateAxis.start = 0;
    dateAxis.keepSelection = true; */
    
    
    ["New increment",
    "Cancellation"
    ].forEach(function (elem) {

        // Create series
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = elem;
        series.dataFields.dateX = "Category";
        series.tooltipText = elem + ": {valueY}"
        series.strokeWidth = 2;
        series.minBulletDistance = 15;

        // Drop-shaped tooltips
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.strokeOpacity = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.label.minWidth = 40;
        series.tooltip.label.minHeight = 40;
        series.tooltip.label.textAlign = "middle";
        series.tooltip.label.textValign = "middle";

        // Make bullets grow on hover
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.circle.fill = am4core.color("#fff");

        var bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.3;

        series.legendSettings.valueText = elem;

        // Make a panning cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "panXY";
        chart.cursor.xAxis = dateAxis;
        //chart.cursor.snapToSeries = series;
        chart.cursor.maxTooltipDistance = 1;

    });


    
          chart.scrollbarY = new am4core.Scrollbar();
          chart.scrollbarY.parent = chart.bottomAxesContainer;
          chart.scrollbarY.toBack();
    
          // Create a horizontal scrollbar with previe and place it underneath the date axis
          chart.scrollbarX = new am4charts.XYChartScrollbar();
          chart.scrollbarY = new am4charts.XYChartScrollbar();
          //chart.scrollbarX.series.push(series);
          chart.scrollbarX.parent = chart.bottomAxesContainer;
    
          dateAxis.start = 0;
          dateAxis.keepSelection = true;

          var title = chart.titles.create();
              title.text = "The Change number of KTV";
              title.fontSize = 20;
              title.marginTop = 20;
              title.marginBottom = 20;


      // Create a horizontal scrollbar with previe and place it underneath the date axis
      // chart.scrollbarX = new am4charts.XYChartScrollbar();
      // chart.scrollbarX.series.push(series);

      //chart.scrollbarX = new am4core.Scrollbar();
      //chart.scrollbarX.parent = chart.bottomAxesContainer;
      chart.legend = new am4charts.Legend();

      am4core.useTheme(am4themes_kelly);
    }); // end am4core.ready()

    /*chart.legend = new am4charts.Legend();
    series.legendSettings.valueText = elem;
    am4core.useTheme(am4themes_kelly);

    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    /*var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
    scrollbarX.scrollbarChart.seriesContainer.hide();*/

    //}); // end am4core.ready()