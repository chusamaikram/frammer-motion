import React from "react";
import ReactECharts from "echarts-for-react";

export default function DonutChart({
    title = "",
    data = [],
    height = "300px"
}) {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    const option = {
        tooltip: {
            trigger: "item",
        },
        series: [
            {
                name: title,
                type: "pie",
                radius: ["55%", "75%"],
                avoidLabelOverlap: false,

                label: {
                    show: true,
                    formatter: "{b}\n({c})",
                    fontSize: 14,
                    align: "center",
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,      // scale up
                        fontWeight: "bold", // bold text
                        color: "#000"       // optional: change color on hover
                    }
                },

                labelLine: {
                    smooth: 0.2,
                    show: true,
                    length: 20,
                    length2: 10
                },

                data: data.map(item => ({
                    value: item.value,
                    name: item.name,
                    itemStyle: {
                        color: item.color
                    }
                }))
            },

            // 🔹 Center text (always visible)
            {
                type: "pie",
                radius: ["0%", "0%"],
                silent: true,
                label: {
                    show: true,
                    position: "center",
                    formatter: () => `{value|${total}}\n{label|${"Total Tickets"}}`,
                    rich: {
                        value: {
                            fontSize: 26,
                            fontWeight: "bold",
                            color: "#111827",
                            lineHeight: 30,
                        },
                        title: {
                            fontSize: 14,
                            color: "#6B7280",
                            lineHeight: 20
                        },
                    }
                },
                data: [{ value: 1 }]
            }
        ]
    };
    return (
        <ReactECharts
            option={option}
            style={{ height, width: "255px" }}
        />
    );
};



