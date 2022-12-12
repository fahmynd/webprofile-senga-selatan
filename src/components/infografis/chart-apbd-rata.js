import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class Average extends Component {
  componentDidMount() {
    let root = am5.Root.new("average");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );

    // Define data
    let data = [
      {
        category: "Tahun 2020",
        value1: 842818327,
        value2: 446267500
      },
      {
        category: "Tahun 2021",
        value1: 1188318327,
        value2: 1187497700
      },
      {
        category: "Tahun 2022",
        value1: 1437909473,
        value2: 1437909473
      }
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
        categoryField: "category",
        renderer: xRenderer,
        // textAlign: "center",
        // tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        extraMax: 0.1,
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      oversizedBehavior: "wrap",
      maxWidth: 100,
      fontSize: 13,
      textAlign: "center",
    });

    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Pendapatan Desa",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        sequencedInterpolation: true,
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name} {categoryX} = Rp{valueY}",
        }),
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Belanja Desa",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        sequencedInterpolation: true,
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name} {categoryX} = Rp{valueY}",
        }),
      })
    );
    series2.data.setAll(data);
    series1.set("fill", am5.color("#44A694"));
    series1.set("stroke", am5.color("#44A694"));
    series2.set("fill", am5.color("#E58B20"));
    series2.set("stroke", am5.color("#E58B20"));
    chart.appear(1000, 100);
    series1.appear(1000);
    series2.appear(1000);

    series1.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
    });
    series2.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
    });

    series1.bullets.push(function () {
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
    series2.bullets.push(function () {
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
    // Add legend
    // let legend = chart.children.push(am5.Legend.new(root, {}));
    // legend.data.setAll(chart.series.values);

    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );
    legend.data.setAll(chart.series.values);

    // Add cursor
    // chart.set("cursor", am5xy.XYCursor.new(root, {}));
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    cursor.lineX.set("visible", false);

    this.root = root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return <div id="average" style={{ width: "100%", height: "500px" }}></div>;
  }
}

export default Average;
