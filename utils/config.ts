import { FormControls } from "./types";

export const productFormControls: FormControls = [
    {
        id: "name",
        type: "text",
        placeholder: "Enter product name",
        label: "Name",
        componentType: "input",
    },
    {
        id: "visitors",
        type: "number",
        placeholder: "Enter No. of visitors",
        label: "No of visitors",
        componentType: "input",
    },
    {
        id: "price",
        type: "number",
        placeholder: "Enter Product Price",
        label: "Product Price",
        componentType: "input",
    },
    {
        id: "sales",
        type: "number",
        placeholder: "Enter No. of sales",
        label: "No of Sales",
        componentType: "input",
    },
    {
        id: "month",
        type: "",
        placeholder: "",
        label: "Month",
        componentType: "select",
        options: [
            {
                id: "january",
                label: "January",
            },
            {
                id: "feburary",
                label: "Feburary",
            },
            {
                id: "march",
                label: "March",
            },
            {
                id: "april",
                label: "April",
            },
            {
                id: "may",
                label: "May",
            },
            {
                id: "june",
                label: "June",
            },
            {
                id: "july",
                label: "July",
            },
            {
                id: "august",
                label: "August",
            },
            {
                id: "september",
                label: "September",
            },
            {
                id: "october",
                label: "October",
            },
            {
                id: "november",
                label: "November",
            },
            {
                id: "december",
                label: "December",
            },
        ],
    },
];

export const productTableHeaders = [
    {
        id: "name",
        label: "Name",
    },
    {
        id: "month",
        label: "Month",
    },
    {
        id: "price",
        label: "Price",
    },
    {
        id: "sales",
        label: "Sales",
    },
    {
        id: "revenue",
        label: "Revenue",
    },
];

export const visiorsFormControls: FormControls = [
    {
        id: "visitors",
        type: "number",
        placeholder: "Enter No. of visitors",
        label: "Visitors",
        componentType: "input",
    },
    {
        id: "premiumUserNumber",
        type: "number",
        placeholder: "Enter Premium User Number",
        label: "Premium Users No",
        componentType: "input",
    },
    {
        id: "location",
        type: "text",
        placeholder: "Enter location",
        label: "Location",
        componentType: "input",
    },
    {
        id: "device",
        type: "",
        placeholder: "",
        label: "Device",
        componentType: "select",
        options: [
            {
                id: "desktop",
                label: "Desktop",
            },
            {
                id: "laptop",
                label: "Laptop",
            },
            {
                id: "tablet",
                label: "Tablet",
            },
            {
                id: "mobile",
                label: "Mobile",
            },
        ],
    },
    {
        id: "month",
        type: "",
        placeholder: "",
        label: "Month",
        componentType: "select",
        options: [
            {
                id: "january",
                label: "January",
            },
            {
                id: "febuary",
                label: "February",
            },
            {
                id: "march",
                label: "March",
            },
            {
                id: "april",
                label: "April",
            },
            {
                id: "may",
                label: "May",
            },
            {
                id: "june",
                label: "June",
            },
            {
                id: "july",
                label: "July",
            },
            {
                id: "august",
                label: "August",
            },
            {
                id: "sepember",
                label: "September",
            },
            {
                id: "october",
                label: "October",
            },
            {
                id: "november",
                label: "November",
            },
            {
                id: "december",
                label: "December",
            },
        ],
    },
];

export const visitorsTableHeaders = [
    {
        id: "visitors",
        label: "Visitors",
    },
    {
        id: "location",
        label: "Location",
    },
    {
        id: "device",
        label: "Device",
    },
    {
        id: "premiumUserNumber",
        label: "Premium Visitor",
    },
    {
        id: "month",
        label: "Month",
    },
];


export const yearlyAnalyticsChartOptions: ApexCharts.ApexOptions = {
    legend: {
        show: false,
        position: "top",
        horizontalAlign: "left",
    },
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
        fontFamily: "Nunito, sans-serif",
        height: 335,
        type: "area",
        dropShadow: {
            enabled: true,
            color: "#623CEA14",
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1,
        },

        toolbar: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
    ],
    stroke: {
        width: [2, 2],
        curve: "straight",
    },
    grid: {
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 4,
        colors: "#fff",
        strokeColors: ["#3056D3", "#80CAEE"],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5,
        },
    },
    xaxis: {
        type: "category",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        title: {
            style: {
                fontSize: "0px",
            },
        },
        min: 0,
        max: 1000000,
    },
};

export const visitorAnalyticsChartOptions: ApexCharts.ApexOptions = {
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
        fontFamily: "Nunito, sans-serif",
        type: "bar",
        height: 335,
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        }
    },

    responsive: [
        {
            breakpoint: 1536,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        columnWidth: "25%",
                    },
                },
            },
        },
    ],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: "25%",
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last",
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",

        markers: {
            radius: 99,
        },
    },
    fill: {
        opacity: 1,
    },
};


export const deviceAnalyticsChartOptions: ApexCharts.ApexOptions = {
    chart: {
        type: "donut",
    },
    colors: ["#10B981", "#375E83", "#259AE6", "#FFA70B"],
    labels: ["Desktop", "Laptop", "Tablet", "Mobile"],
    legend: {
        show: true,
        position: "bottom",
    },

    plotOptions: {
        pie: {
            donut: {
                size: "65%",
                background: "transparent",
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};