import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default function Chart2() {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        year: 2005,
        income: 23.5,
        color: chart.colors.next(),
      },
      {
        year: 2006,
        income: 26.2,
        color: chart.colors.next(),
      },
      {
        year: 2007,
        income: 30.1,
        color: chart.colors.next(),
      },
      {
        year: 2008,
        income: 29.5,
        color: chart.colors.next(),
      },
      {
        year: 2009,
        income: 24.6,
        color: chart.colors.next(),
      },
    ];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueX = "income";
    series.dataFields.categoryY = "year";
    series.name = "Income";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{valueX}";
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.2;
  }, []);
  return (
    <>
      <h1>Thu nhập</h1>
      <div id="chartdiv" style={{ height : '500px'}}></div>
    </>
  );
}
