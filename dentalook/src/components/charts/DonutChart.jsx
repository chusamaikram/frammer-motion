// import React from "react";
// import ReactECharts from "echarts-for-react";

// export default function DonutChart({
//     title = "",
//     data = [],
//     height = "300px",
//     centerlabel="Total Tickets"
// }) {
//     const total = data.reduce((sum, item) => sum + item.value, 0);

//     const option = {
//         tooltip: {
//             trigger: "item",
//         },
//         series: [
//             {
//                 name: title,
//                 type: "pie",
//                 radius: ["55%", "75%"],
//                 avoidLabelOverlap: false,

//                 label: {
//                     show: true,
//                     formatter: "{b}\n({c})",
//                     fontSize: 14,
//                     align: "center",
//                 },
//                 emphasis: {
//                     label: {
//                         show: true,
//                         fontSize: 16,      
//                         fontWeight: "bold", 
//                         color: "#000"       
//                     }
//                 },

//                 labelLine: {
//                     smooth: 0.2,
//                     show: true,
//                     length: 20,
//                     length2: 10
//                 },

//                 data: data.map(item => ({
//                     value: item.value,
//                     name: item.name,
//                     itemStyle: {
//                         color: item.color
//                     }
//                 }))
//             },

//             // 🔹 Center text (always visible)
//             {
//                 type: "pie",
//                 radius: ["0%", "0%"],
//                 silent: true,
//                 label: {
//                     show: true,
//                     position: "center",
//                     formatter: () => `{value|${total}}\n{label|${centerlabel}}`,
//                     rich: {
//                         value: {
//                             fontSize: 26,
//                             fontWeight: "bold",
//                             color: "#111827",
//                             lineHeight: 30,
//                         },
//                         title: {
//                             fontSize: 14,
//                             color: "#6B7280",
//                             lineHeight: 20
//                         },
//                     }
//                 },
//                 data: [{ value: 1 }]
//             }
//         ]
//     };
//     return (
//         <ReactECharts
//             option={option}
//             style={{ height, width: "400px" }}
//         />
//     );
// };



import React from "react";
import ReactECharts from "echarts-for-react";

export default function DonutChart({
    title = "",
    data = [],
    height = "300px",
    centerlabel = "Total Tickets",
    showLegend = false, // ✅ new prop
}) {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    const option = {
        tooltip: {
            trigger: "item",
        },

        // ✅ Optional legend
        legend: showLegend
            ? {
                show: true,
                bottom: 0,
                left: "left",
                orient: "horizontal",
                icon: "circle",
                itemWidth: 12,
                itemHeight: 12,
                itemGap:16,
                padding: [20, 0, 0, 0], // ✅ space from top
                textStyle: {
                    fontSize: 14,
                    color: "#45556C",
                },
            }
            : { show: false },


        series: [
            {
                name: title,
                type: "pie",
                radius: ["55%", "75%"],
                 center: ["50%", "40%"], // ✅ MOVE PIE UP
                avoidLabelOverlap: false,

                label: {
                    show: true,
                    formatter: "{b}\n({c})",
                    fontSize: 12,
                    align: "center",
                },

                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000",
                    },
                },

                labelLine: {
                    smooth: 0.2,
                    show: true,
                    length: 20,
                    length2: 10,
                },

                data: data.map((item) => ({
                    value: item.value,
                    name: item.name,
                    itemStyle: {
                        color: item.color,
                    },
                })),
            },

            // 🔹 Center text
            {
                type: "pie",
                radius: ["0%", "0%"],
                 center: ["50%", "40%"], // ✅ MOVE PIE UP
                silent: true,
                label: {
                    show: true,
                    position: "center",
                    formatter: () =>
                        `{value|${total}}\n{title|${centerlabel}}`,
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
                            lineHeight: 20,
                        },
                    },
                },
                data: [{ value: 1 }],
            },
        ],
    };

    return (
        <ReactECharts
            option={option}
            style={{ height, width: "350px" }}
        />
    );
}
