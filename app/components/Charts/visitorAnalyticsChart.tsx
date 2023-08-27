"use client";
import { visitorAnalyticsChartOptions } from '@/utils/config';
import { VisitorTableData } from '@/utils/types';
import React from 'react';
import Chart from 'react-apexcharts';

type VisitorAnalyticsChartProps = {
    chartData: VisitorTableData;
}

const getValues = (visitors: VisitorTableData, country: string, value: string): number => {

    if (visitors && visitors.length === 0) {
        return 0;
    }
    return visitors.filter(item => item.location === country).reduce((acc, visitorItem) => acc + visitorItem[value], 0);
};

export default function VisitorAnalyticsChart({ chartData }: VisitorAnalyticsChartProps) {
    const uniqueLocation = [...new Set(chartData.map((item) => item.location))];
    
    const chartSeries: ApexAxisChartSeries = [{
        name: 'Visitors',
        data: uniqueLocation.map(country => (getValues(chartData, country, 'visitors')))
    },
    {
        name: 'Premium Visitors',
        data: uniqueLocation.map(country => (getValues(chartData, country, 'premiumUserNumber')))
    },
    ];

    let updatedOptions = {
        ...visitorAnalyticsChartOptions,
        xaxis: {
            categories: uniqueLocation
        }
    };

    return (
        <>
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 py-7 shadow sm:px-7.5 xl:col-span-8">
                <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                    <p className="font-bold text-primary">
                        Visitor Analytics Overview
                    </p>
                    <div className="w-full">
                        <div id="VisitorAnalyticsChart" className="-ml-5">
                            <Chart
                                options={updatedOptions}
                                series={chartSeries}
                                type="area"
                                height={350}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
