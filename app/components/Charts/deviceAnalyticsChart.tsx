"use client";
import React from 'react';
import { deviceAnalyticsChartOptions } from '@/utils/config';
import { VisitorTableData } from '@/utils/types';
import DonutChart from 'react-apexcharts';

const deviceArray = ['Desktop', 'Laptop', 'Tablet', 'Mobile' ];

const getValues = (visitor: VisitorTableData, getDevice: string): number => {

    if (visitor && visitor.length && visitor.filter(item => item.device === getDevice).length === 0) {
        return 0;
    }
    return visitor.filter(item => item.device === getDevice).reduce((acc, productItem) => acc + productItem.visitors, 0);
};

type DeviceAnalyticsChartProps = {
    chartData: VisitorTableData
}


export default function DeviceAnalyticsChart({ chartData }: DeviceAnalyticsChartProps) {
    
    const chartSeries = deviceArray.map(device => (getValues(chartData, device)));
    
    return (
        <>
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 py-7 shadow sm:px-7.5 xl:col-span-4">
                <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                    <p className="font-bold text-primary">
                        Device Analytics Overview
                    </p>
                    <div className="w-full mb-2">
                        <div id="DeviceAnalyticsChart" className="mx-auto flex justify-center">
                            <DonutChart
                                options={deviceAnalyticsChartOptions}
                                series={chartSeries}
                                type="donut"
                                height={350}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
