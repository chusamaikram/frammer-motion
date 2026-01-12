import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = ({ data = [], height, ShowAllLabels = false, barwidth = "80%" }) => {

  const barNames = data.map(item => item.name);
  const barValues = data.map(item => item.value);
  const barColors = data.map(item => item.color);

  const option = {
    tooltip: {
      trigger: "axis",       // show tooltip on hover
      axisPointer: {
        type: "shadow"       // shadow highlights the bar
      }
    },
    xAxis: {
      type: "category",
      data: barNames,
      axisLine: {
        show: false   // 👈 removes x-axis baseline
      },
      axisLabel: {
        formatter: (value, index) => {
          if (ShowAllLabels) {
            return value; // All Tickets, Resolved Tickets
          }

          // condensed mode → alternate + first word
          if (index % 2 !== 0) return "";
          return value.split(" ")[0];
        }
      }
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false   // 👈 removes horizontal lines
      }
    },
    series: [
      {
        type: "bar",
        data: barValues.map((value, index) => ({
          value,
          itemStyle: { color: barColors[index] } // assign color from donut
        })),
        barWidth: { barwidth },
        emphasis: {
          label: {
            show: false   // 👈 disables hover value
          }
        }
      },


    ]
  };

  return <ReactECharts option={option} style={{ height, width: "100%" }} />;
};

export default BarChart;
