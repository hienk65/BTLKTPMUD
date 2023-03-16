import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default function Chart1() {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    let data = [];
    let value = 50;
    for (var i = 0; i < 300; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;
    dateAxis.maxZoomCount = 20;
    dateAxis.startLocation  = 0;
    // dateAxis.maxZoomed = 10;
    // dateAxis.max = 10;
    // dateAxis.renderer.grid.template.location = 0;
    // dateAxis.renderer.cellStartLocation = 0.2;


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "số ca tiêm : {value} \n trong ngày : {date}";

    series.tooltip.pointerOrientation = "vertical";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    //chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;
    chart.scrollbarX.startLocation = 0;
    // chart.scrollbarX.startGrip.icon.disabled = true;
    // chart.scrollbarX.nonScaling = true;
    // chart.scrollbarX.dragStart = true;
    // chart.scrollbarX.start.toFixed = 0;
  }, []);

  return (
    <>
      <h1 className="title">Biểu đồ Tiêm chủng</h1>
      <div id="chartdiv" style={{ height: "500px" }}></div>
    </>
  );
}
