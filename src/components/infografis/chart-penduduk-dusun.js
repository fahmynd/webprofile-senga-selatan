import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function ChartPendudukDusun(props) {
    useLayoutEffect(() => {

        let root = am5.Root.new("chartPendudukDusun");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                endAngle: 270
            })
        );

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "dusun",
                endAngle: 270
            })
        );

        series.get("colors").set("colors", [
            am5.color(0x095256),
            am5.color(0x087f8c),
            am5.color(0x5aaa95),
            am5.color(0x86a873),
            am5.color(0xbb9f06)
        ]);

        series.states.create("hidden", {
            endAngle: -90
        });

        // series.set("fill", am5.color("#E58B20"));


        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([{
            dusun: "Dusun 1",
            value: 501.9
        }, {
            dusun: "Dusun 2",
            value: 301.9
        }, {
            dusun: "Dusun 3",
            value: 201.1
        }, {
            dusun: "Dusun 4",
            value: 165.8
        }, {
            dusun: "Dusun 5",
            value: 99
        }]);


        series.appear(1000, 100);

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div id="chartPendudukDusun" style={{ width: "100%", height: "500px" }}></div>
    );
}

export default ChartPendudukDusun