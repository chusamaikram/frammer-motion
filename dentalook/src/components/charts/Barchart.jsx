import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = ({
  data = [],
  height,
  ShowAllLabels = false,
  barwidth = "80%",
  visibleSeries = null // Optional: pass visibility object to enable legend control
}) => {

  const barNames = data.map(item => item.name);
  const barValues = data.map(item => item.value);
  const barColors = data.map(item => item.color);

  // Filter data based on visibility if visibleSeries is provided
  const getFilteredData = () => {
    if (!visibleSeries) {
      // If no visibleSeries prop, show all data
      return {
        names: barNames,
        values: barValues,
        colors: barColors
      };
    }

    // Filter based on visibility
    const filtered = data.filter(item => visibleSeries[item.name] !== false);
    return {
      names: filtered.map(item => item.name),
      values: filtered.map(item => item.value),
      colors: filtered.map(item => item.color)
    };
  };

  const { names, values, colors } = getFilteredData();

  const option = {
    grid: {
      left: "3%",
      right: "3%",
      bottom: "0",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    xAxis: {
      type: "category",
      data: names,
      axisLine: {
        show: false
      },
      axisLabel: {
        formatter: (value, index) => {
          if (ShowAllLabels) {
            return value;
          }

          // show only first word
          if (index % 2 !== 0) return "";
          return value.split(" ")[0];
        }
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false
      }
    },
    series: [
      {
        type: "bar",
        data: values.map((value, index) => ({
          value,
          itemStyle: { color: colors[index] }
        })),
        barWidth: barwidth,
        emphasis: {
          label: {
            show: false
          }
        }
      },
    ]
  };

  return <ReactECharts option={option} style={{ height, width: "100%" }} />;
};

export default BarChart;