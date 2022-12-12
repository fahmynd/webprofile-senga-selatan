import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function IdmChart(props) {
    useLayoutEffect(() => {

        let root = am5.Root.new("idmChart");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            // wheelX: "panX",
            // wheelY: "zoomX",
            pinchZoomX: true
        }));

        chart.get("colors").set("step", 3);

        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            maxDeviation: 0.3,
            baseInterval: {
                timeUnit: "day",
                count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {}),
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {})
        }));


        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(am5xy.LineSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value1",
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueX}: {valueY}\n{previousDate}: {value2}"
            })
        }));

        series.strokes.template.setAll({
            strokeWidth: 2
        });

        series.get("tooltip").get("background").set("fillOpacity", 0.5);

        var series2 = chart.series.push(am5xy.LineSeries.new(root, {
            name: "Series 2",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value2",
            valueXField: "date"
        }));
        series2.strokes.template.setAll({
            strokeDasharray: [2, 2],
            strokeWidth: 2
        });

        // Set date fields
        // https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
        root.dateFormatter.setAll({
            dateFormat: "yyyy",
            dateFields: ["valueX"]
        });


        // Set data
        var data = [{
            date: new Date(2020).getTime(),
            value1: 50,
            value2: 48,
            // previousDate: new Date(2019, 5, 5)
        }, {
            date: new Date(2021).getTime(),
            value1: 53,
            value2: 51,
            // previousDate: "2019-05-06"
        }, {
            date: new Date(2022).getTime(),
            value1: 56,
            value2: 58,
            // previousDate: "2019-05-07"
        }]

        series.data.setAll(data);
        series2.data.setAll(data);


        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        series2.appear(1000);
        chart.appear(1000, 100);

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div id="idmChart" style={{ width: "100%", height: "500px" }}></div>
    );
}

export default IdmChart