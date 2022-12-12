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

        // Define data
        let data = [
            {
                year: "2020",
                skor: 0.7337,
                iks: 0.8343,
                ike: 0.7000,
                ikl: 0.6667,
                info: "(Maju)"
            },
            {
                year: "2021",
                skor: 0.8308,
                iks: 0.9257,
                ike: 0.7000,
                ikl: 0.8667,
                info: "(Mandiri)"
            },
            {
                year: "2022",
                skor: 0.8308,
                iks: 0.9257,
                ike: 0.7000,
                ikl: 0.8667,
                strokeSettings: {
                    stroke: chart.get("colors").getIndex(1),
                    strokeWidth: 3,
                    strokeDasharray: [5, 5]
                },
                info: "(Mandiri)"
            }
            // {
            //     year: "2023",
            //     skor: 0.9,
            //     iks: 0.96,
            //     ike: 0.8,
            //     ikl: 0.93,
            //     columnSettings: {
            //         strokeWidth: 1,
            //         strokeDasharray: [5],
            //         fillOpacity: 0.2
            //     },
            //     info: "(Mandiri)"
            // }
        ];

        // let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        // xRenderer.labels.template.setAll({
        //     rotation: 0,
        //     centerY: am5.p50,
        //     centerX: am5.p50,
        //     paddingTop: 10,
        // });

        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "year",
                renderer: am5xy.AxisRendererX.new(root, {}),
                tooltip: am5.Tooltip.new(root, {})
            })
        );

        xAxis.data.setAll(data);

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0,
                extraMax: 0.1,
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        // xAxis.get("renderer").labels.template.setAll({
        //     oversizedBehavior: "wrap",
        //     maxWidth: 100,
        //     fontSize: 10,
        // });



        // Create series
        // let series = chart.series.push(
        //     am5xy.ColumnSeries.new(root, {
        //         name: "",
        //         xAxis: xAxis,
        //         yAxis: yAxis,
        //         valueYField: "value",
        //         sequencedInterpolation: true,
        //         categoryXField: "belanja",
        //         tooltip: am5.Tooltip.new(root, {
        //             labelText: "Rp{valueY}",
        //         }),
        //     })
        // );

        // series.columns.template.setAll({
        //     cornerRadiusTL: 5,
        //     cornerRadiusTR: 5,
        // });

        // series.bullets.push(function () {
        //     return am5.Bullet.new(root, {
        //         locationX: 0.5,
        //         locationY: 1,
        //         fontSize: 10,
        //         sprite: am5.Label.new(root, {
        //             text: "Rp{valueY}",
        //             centerX: am5.percent(50),
        //             centerY: am5.percent(80),
        //             textAlign: "center",
        //             populateText: true,
        //         }),
        //     });
        // });

        // series.data.setAll(data);
        // series.set("fill", am5.color("#E58B20"));
        // series.set("stroke", am5.color("#E58B20"));
        // series.appear(1000);
        // chart.appear(1000, 100);

        // // Add legend
        // let legend = chart.children.push(am5.Legend.new(root, {}));
        // legend.data.setAll(chart.series.values);

        // // Add cursor
        // let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        // cursor.lineY.set("visible", false);

        // var series1 = chart.series.push(
        //     am5xy.ColumnSeries.new(root, {
        //         name: "Skor IDM",
        //         xAxis: xAxis,
        //         yAxis: yAxis,
        //         valueYField: "skor",
        //         categoryXField: "year",
        //         tooltip: am5.Tooltip.new(root, {
        //             pointerOrientation: "horizontal",
        //             labelText: "{name} Tahun {categoryX}: {valueY} {info}"
        //         })
        //     })
        // );

        // series1.columns.template.setAll({
        //     tooltipY: am5.percent(10),
        //     templateField: "columnSettings"
        // });

        // series1.data.setAll(data);

        let series1 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Skor IDM",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "skor",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: {valueY}"
                })
            })
        );

        series1.strokes.template.setAll({
            strokeWidth: 3,
            templateField: "strokeSettings"
        });


        series1.data.setAll(data);

        series1.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    strokeWidth: 3,
                    stroke: series1.get("stroke"),
                    radius: 5,
                    fill: root.interfaceColors.get("background")
                })
            });
        });

        let series2 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "IKS",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "iks",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: {valueY}"
                })
            })
        );

        // series2.strokes.template.setAll({
        //     strokeWidth: 3,
        //     templateField: "strokeSettings"
        // });

        series2.strokes.template.setAll({
            strokeDasharray: [2, 2],
            strokeWidth: 2
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

        let series3 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "IKE",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "ike",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: {valueY}"
                })
            })
        );

        series3.strokes.template.setAll({
            strokeDasharray: [2, 2],
            strokeWidth: 2
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

        let series4 = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "IKL",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "ikl",
                categoryXField: "year",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} Tahun {categoryX}: {valueY}"
                })
            })
        );

        series4.strokes.template.setAll({
            strokeDasharray: [2, 2],
            strokeWidth: 2
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

        series1.set("fill", am5.color("#E58B20"));
        series1.set("stroke", am5.color("#E58B20"));
        series2.set("fill", am5.color("#44A694"));
        series2.set("stroke", am5.color("#44A694"));
        series3.set("fill", am5.color("#44A694"));
        series3.set("stroke", am5.color("#44A694"));
        series4.set("fill", am5.color("#44A694"));
        series4.set("stroke", am5.color("#44A694"));
        series1.appear(1000);
        series2.appear(1000);
        series3.appear(1000);
        series4.appear(1000);
        chart.set("cursor", am5xy.XYCursor.new(root, {}));

        // let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        // cursor.lineY.set("visible", false);

        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        let legend = chart.children.push(
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

        // end am5.ready()

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div id="idmChart" style={{ width: "100%", height: "500px" }}></div>
    );
}

export default IdmChart