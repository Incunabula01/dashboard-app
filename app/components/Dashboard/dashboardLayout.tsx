"use client";
import React from 'react';
import { ProductTableData, VisitorTableData } from '@/utils/types';
import Card from '../Card';
import { FaUsers, FaProductHunt, FaDollarSign, FaPeopleGroup } from 'react-icons/fa6';
import YearlyAnalyticsChart from '../Charts/yearlyAnalyticsChart';
import VisitorsAnalyticsChart from '../Charts/visitorAnalyticsChart';
import DeviceAnalyticsChart from '../Charts/deviceAnalyticsChart';

type DashboardLayoutProps = {
    products: ProductTableData;
    visitors: VisitorTableData;
}

export default function DashboardLayout({ products, visitors }: DashboardLayoutProps) {

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                <Card data={
                    visitors && visitors.length ?
                        visitors.reduce((acc, visitorItem) => acc + visitorItem.premiumUserNumber, 0)
                        : 0
                }
                    label={'Total Premium Visitors'}
                    icon={<FaUsers size={25} />} />
                <Card
                    data={products && products.length}
                    label={'Total Products'}
                    icon={<FaProductHunt size={25} />} />
                <Card data={
                    products && products.length ?
                        products.reduce((acc, productItem) => acc + productItem.sales, 0)
                        : 0
                }
                    label={'Total Sales'}
                    icon={<FaDollarSign size={25} />} />
                <Card data={
                    visitors && visitors.length ?
                        visitors.reduce((acc, visitorItem) => acc + visitorItem.visitors, 0)
                        : 0
                }
                    label={'Total Visitors'}
                    icon={<FaPeopleGroup size={25} />} />
            </div>
            <div className="mt-44 grid-cols-12 grid gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
                <YearlyAnalyticsChart chartData={
                    products && products.length ?
                        products.map(item => ({
                            ...item,
                            revenue: item.price * item.sales - item.sales * 10,
                            cost: item.sales * 10
                        })) : []
                    } />
                <DeviceAnalyticsChart chartData={visitors} />
                <VisitorsAnalyticsChart chartData={visitors}/>
                
            </div>
        </>
    )
}
