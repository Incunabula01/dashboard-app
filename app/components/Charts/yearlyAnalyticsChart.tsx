"use client";
import { yearlyAnalyticsChartOptions } from '@/utils/config';
import { ProductTableData } from '@/utils/types';
import React from 'react';
// import Chart from 'react-apexcharts';
import AphexChart from './aphexChart';

type YearlyAnalyticsChartProps = {
    chartData: ProductTableData;
}

const monthArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const getValues = (products: ProductTableData, getMonth: string, value: string): number => {

    if (products.filter(item => item.month === getMonth).length === 0) {
        return 0;
    }
    return products.filter(item => item.month === getMonth).reduce((acc, productItem) => acc + productItem[value], 0);
};

export default function YearlyAnalyticsChart({ chartData }: YearlyAnalyticsChartProps) {

    const chartSeries: ApexAxisChartSeries = [{
        name: 'Sales',
        data: monthArray.map(month => (getValues(chartData, month, 'sales')))
    },
    {
        name: 'Cost',
        data: monthArray.map(month => (getValues(chartData, month, 'cost')))
    },
    {
        name: 'Revenue',
        data: monthArray.map(month => (getValues(chartData, month, 'revenue')))
    }];

    let updateOptions = {
        ...yearlyAnalyticsChartOptions,
        chart: {
            events: {
                mounted: (chart: { windowResizeHandler: () => void; }) => {
                    if (typeof window !== 'undefined'){
                        chart.windowResizeHandler();
                    }
                }
            }
        }
    };

    return (
        <>
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 py-7 shadow sm:px-7.5 xl:col-span-8">
                <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                    <p className="font-bold text-primary">
                        Yearly Analytics Overview
                    </p>
                    <div className="w-full">
                        <div id="YearlyAnalyticsChart" className="-ml-5">
                           
                            <AphexChart
                                options={updateOptions}
                                series={chartSeries}
                                type="area"
                                height={350}
                                width="100%"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
