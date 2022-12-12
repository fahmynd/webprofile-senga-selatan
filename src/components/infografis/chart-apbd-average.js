import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function Average() {
    useLayoutEffect(() => {

        let root = am5.Root.new("average");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                // wheelX: "panX",
                // wheelY: "zoomX",
                layout: root.verticalLayout
            })
        );

        // chart.set(
        //     "scrollbarX",
        //     am5.Scrollbar.new(root, {
        //         orientation: "horizontal"
        //     })
        // );

        var data = [
            {
                year: "2020",
                pendapatan: 842818327,
                penyelenggaraan: 387238127,
                pelaksanaan: 455580200,
                pembinaan: 0,
                pemberdayaan: 0,
                penanggulangan: 0
            },
            {
                year: "2021",
                pendapatan: 1188318327,
                penyelenggaraan: 386417500,
                pelaksanaan: 455580200,
                pembinaan: 65000000,
                pemberdayaan: 38700000,
                penanggulangan: 241800000
            },
            {
                year: "2022",
                pendapatan: 1437909473,
                penyelenggaraan: 420098120,
                pelaksanaan: 347938200,
                pembinaan: 150004153,
                pemberdayaan: 84269000,
                penanggulangan: 435600000
            }

            // {
            //     year: "2020",
            //     income: 30.6,
            //     expenses: 28.2,
            //     strokeSettings: {
            //         stroke: chart.get("colors").getIndex(1),
            //         strokeWidth: 3,
            //         strokeDasharray: [5, 5]
            //     }
            // },
            // {
            //     year: "2021",
            //     income: 34.1,
            //     expenses: 32.9,
            //     columnSettings: {
            //         strokeWidth: 1,
            //         strokeDasharray: [5],
            //         fillOpacity: 0.2
            //     },
            //     info: "(projection)"
            // }
        ];

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "year",
                renderer: am5xy.AxisRendererX.new(root, {}),
                tooltip: am5.Tooltip.new(root, {})
            })
        );

        xAxis.data.setAll(data);

        var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0,
                extraMax: 0.1,
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );


        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

        var series1 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Pendapatan Desa",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "pendapatan",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: Rp{valueY} {info}"
                })
            })
        );

        series1.columns.template.setAll({
            tooltipY: am5.percent(10),
            templateField: "columnSettings"
        });

        series1.data.setAll(data);

        var series2 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Penyelenggaraan Pemerintahan Desa",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "penyelenggaraan",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: Rp{valueY} {info}"
                })
            })
        );

        series2.strokes.template.setAll({
            strokeWidth: 3,
            templateField: "strokeSettings"
        });


        series2.data.setAll(data);

        series2.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    strokeWidth: 3,
                    stroke: series2.get("stroke"),
                    radius: 5,
                    fill: root.interfaceColors.get("background")
                })
            });
        });

        var series3 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Pelaksanaan Pembangunan Desa",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "pelaksanaan",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: Rp{valueY} {info}"
                })
            })
        );

        series3.strokes.template.setAll({
            strokeWidth: 3,
            templateField: "strokeSettings"
        });


        series3.data.setAll(data);

        series3.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    strokeWidth: 3,
                    stroke: series3.get("stroke"),
                    radius: 5,
                    fill: root.interfaceColors.get("background")
                })
            });
        });

        var series4 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Pembinaan Kemasyarakatan",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "pembinaan",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: Rp{valueY} {info}"
                })
            })
        );

        series4.strokes.template.setAll({
            strokeWidth: 3,
            templateField: "strokeSettings"
        });


        series4.data.setAll(data);

        series4.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    strokeWidth: 3,
                    stroke: series4.get("stroke"),
                    radius: 5,
                    fill: root.interfaceColors.get("background")
                })
            });
        });

        var series5 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Pemberdayaan Masyarakat",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "pemberdayaan",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: Rp{valueY} {info}"
                })
            })
        );

        series5.strokes.template.setAll({
            strokeWidth: 3,
            templateField: "strokeSettings"
        });


        series5.data.setAll(data);

        series5.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    strokeWidth: 3,
                    stroke: series5.get("stroke"),
                    radius: 5,
                    fill: root.interfaceColors.get("background")
                })
            });
        });

        var series6 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Penanggulangan Bencana dan Mendesak",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "penanggulangan",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: Rp{valueY} {info}"
                })
            })
        );

        series6.strokes.template.setAll({
            strokeWidth: 3,
            templateField: "strokeSettings"
        });


        series6.data.setAll(data);

        series6.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    strokeWidth: 3,
                    stroke: series6.get("stroke"),
                    radius: 5,
                    fill: root.interfaceColors.get("background")
                })
            });
        });

        chart.set("cursor", am5xy.XYCursor.new(root, {}));

        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        var legend = chart.children.push(
            am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            })
        );
        legend.data.setAll(chart.series.values);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);
        series1.appear();
        series1.set("fill", am5.color("#E58B20"));
        series1.set("stroke", am5.color("#E58B20"));

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div id="average" style={{ width: "100%", height: "500px" }}></div>
    );
}

export default Average