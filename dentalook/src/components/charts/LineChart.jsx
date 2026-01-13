import { useEffect, useRef } from "react";
import * as echarts from "echarts";

/* ---------------- STATIC CONFIG ---------------- */

const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May",
    "Jun", "Jul", "Aug", "Sep", "Oct",
];

const COLORS = [
    "#3B82F6", // blue
    "#10B981", // green
    "#EF4444", // red
    "#F59E0B", // orange
    "#6366F1", // indigo
    "#EC4899", // pink
];

/* ---------------- COMPONENT ---------------- */

export default function LineChart({
    data = [], // API data: [{ name, values }]
    height = 300,
    visibleSeries = {}, // Object tracking which series are visible
}) {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = echarts.init(chartRef.current);

        const option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "line",
                    lineStyle: {
                        type: "dashed",
                        color: "#ccc",
                    },
                },
                backgroundColor: "#fff",
                borderColor: "#e5e7eb",
                borderWidth: 1,
                textStyle: {
                    color: "#374151",
                    fontSize: 14,
                },
                formatter: (params) => {
                    const month = params[0]?.axisValue;

                    let tooltipHtml = `
                <div style="font-weight:600; margin-bottom:6px;">
                  ${month}
                </div>
              `;

                    params.forEach((item) => {
                        tooltipHtml += `
                  <div style="display:flex; align-items:center; margin:4px 0;">
                    <span
                      style="
                        display:inline-block;
                        width:10px;
                        height:10px;
                        border-radius:50%;
                        background:${item.color};
                        margin-right:8px;
                      "
                    ></span>
                    <span style="flex:1;">${item.seriesName}</span>
                    <span style="font-weight:600;">${item.data ?? 0}</span>
                  </div>
                `;
                    });

                    return tooltipHtml;
                },
            },


            grid: {
                left: "3%",
                right: "3%",
                bottom: "3%",
                containLabel: true,
            },

            xAxis: {
                type: "category",
                boundaryGap: false,
                data: MONTHS,
                axisLine: { show: false },
                axisTick: { show: false },
            },

            yAxis: {
                type: "value",
                axisLine: { show: false },
                axisTick: { show: false },
                splitLine: {
                    lineStyle: { color: "#eee" },
                },
                axisLabel: { show: false }
            },

            series: data.map((item, index) => {
                const color = COLORS[index % COLORS.length];
                const isVisible = visibleSeries[item.name] !== false; // Default to true if not specified

                return {
                    name: item.name || `Series ${index + 1}`,
                    type: "line",
                    smooth: true,
                    data: item.values || [],
                    symbol: "circle",
                    symbolSize: 8,
                    lineStyle: {
                        width: 3,
                        color: isVisible ? color : "transparent",
                        opacity: isVisible ? 1 : 0,
                    },
                    itemStyle: {
                        color: isVisible ? color : "transparent",
                        opacity: isVisible ? 1 : 0,
                    },
                    emphasis: {
                        focus: "series",
                    },
                    // Hide the series if not visible
                    ...(isVisible ? {} : {
                        lineStyle: { width: 0 },
                        itemStyle: { opacity: 0 },
                        showSymbol: false,
                    }),
                };
            }),
        };

        chart.setOption(option);
        window.addEventListener("resize", chart.resize);

        return () => {
            window.removeEventListener("resize", chart.resize);
            chart.dispose();
        };
    }, [data, visibleSeries]);

    return (
        <div
            ref={chartRef}
            style={{ width: "100%", height }}
        />
    );
}

