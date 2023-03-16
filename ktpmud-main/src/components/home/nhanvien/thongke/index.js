import React, { useEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { WrapperStyled } from "./styled";
import axios from "axios";

export default function ThongKe() {
    const [state, _setState] = useState([]);
    useEffect(() => {
        axios
            .get(`https://6412c589b1ea74430318ab1a.mockapi.io/sanPham`)
            .then((res) => {
                _setState(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    am4core.useTheme(am4themes_animated);
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    console.log("state", state);
    // Add data
    chart.data = state;

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tenSanPham";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "soLuongSanPham";
    series.dataFields.categoryX = "tenSanPham";
    // series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    return (
        <WrapperStyled>
            <h1 className="title">Biểu đồ thống kê sản phẩm</h1>
            <div id="chartdiv" style={{ height: "500px" }}></div>
        </WrapperStyled>
    );
}
