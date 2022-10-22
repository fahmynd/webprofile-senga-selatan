import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function ChartBelanjaDesa(props) {
    useLayoutEffect(() => {

        let root = am5.Root.new("chartBelanjaDesa");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                pinchZoomX: false,
            })
        );

        // Define data
        let data = [{
            belanja: "Belanja Pegawai",
            value: 253376500,
        },
        {
            belanja: "Belanja Barang dan Jasa",
            value: 468346093,
        },
        {
            belanja: "Belanja Modal",
            value: 280586880,
        },
        {
            belanja: "Belanja Tak Terduga",
            value: 435600000,
        },
        ];

        let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        xRenderer.labels.template.setAll({
            rotation: 0,
            centerY: am5.p50,
            centerX: am5.p50,
            paddingTop: 10,
        });

        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                maxDeviation: 0.3,
                categoryField: "belanja",
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, {}),
            })
        );

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0.3,
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        );

        xAxis.get("renderer").labels.template.setAll({
            oversizedBehavior: "wrap",
            maxWidth: 150,
            fontSize: 13,
        });

        xAxis.data.setAll(data);

        // Create series
        let series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                sequencedInterpolation: true,
                categoryXField: "belanja",
                tooltip: am5.Tooltip.new(root, {
                    labelText: "Rp{valueY}",
                }),
            })
        );

        series.columns.template.setAll({
            cornerRadiusTL: 5,
            cornerRadiusTR: 5,
        });

        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                locationX: 0.5,
                locationY: 1,
                fontSize: 12,
                sprite: am5.Label.new(root, {
                    text: "Rp{valueY}",
                    centerX: am5.percent(50),
                    centerY: am5.percent(100),
                    textAlign: "center",
                    populateText: true,
                }),
            });
        });

        series.data.setAll(data);
        series.set("fill", am5.color("#E58B20"));
        series.set("stroke", am5.color("#E58B20"));
        series.appear(1000);
        chart.appear(1000, 100);

        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {}));
        legend.data.setAll(chart.series.values);

        // Add cursor
        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div id="chartBelanjaDesa" style={{ width: "100%", height: "500px" }}></div>
    );
}

export default ChartBelanjaDesa