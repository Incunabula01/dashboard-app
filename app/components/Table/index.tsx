"use client";

import React, { useEffect, useState } from 'react'

import { TableCells, ProductTableData, VisitorTableData } from '@/utils/types';

type TableProps = {
    tableData: ProductTableData | VisitorTableData;
    tableHeaderText: string;
    tableHeaderCells: TableCells;
}

interface SortIndicatorProps {
    label: string;
    sortDirection: 'asc' | 'desc';
    toggleSort: (label: string) => void;
}

const SortIndicator: React.FC<SortIndicatorProps> = ({ label, sortDirection, toggleSort }) => {
    const [sortIndicatorDirection, setSortIndicatorDirection] = useState<'asc' | 'desc'>('asc');
    const handleToggle = () => {
        setSortIndicatorDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        toggleSort(label.toLowerCase());
    }

    useEffect(() => {
        if (sortDirection === 'desc') {
            setSortIndicatorDirection(sortDirection);
        }
    }, [sortDirection]);

    return (
        <span
            onClick={handleToggle}
            className={`${sortDirection === 'asc' ? 'text-indigo-600' : 'text-indigo-400'
                } cursor-pointer ml-1`}
        >
            {sortIndicatorDirection === 'asc' ? '▲' : '▼'}
        </span>
    );
};

export default function Table({ tableData = [], tableHeaderText, tableHeaderCells }: TableProps) {
    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        if (tableData) {
            // Sort table by first column value
            // Todo: sort by createdDate
            setSortBy(Object.keys(tableData[0])[1]);
        }
    }, []);

    const sortedData = [...tableData].sort((a, b) => {
        if (!sortBy) return 0;
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        if (aValue === bValue) return 0;
        if (sortDirection === 'asc') return aValue > bValue ? 1 : -1;
        return aValue < bValue ? 1 : -1;
    });

    const handleToggleSort = (key: string) => {
        if (sortBy === key) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(key);
            setSortDirection('asc');
        }
    };

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2 5 shadow sm:px-7 5 xl:pb-1 mt-5 overflow-x-auto md:overflow-x-hidden">

                <h4 className="mb-6 text-xl font-semibold text-black">{tableHeaderText}</h4>

                {tableHeaderCells && tableHeaderCells.length && tableData && tableData.length ?
                    <table className="rounded-sm bg-gray table-auto min-w-full">
                        <thead>
                            <tr>
                                {
                                    tableHeaderCells.map(item => (
                                        <th key={item.id} className='px-6 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600 capitalize'>
                                            {item.label}
                                            <SortIndicator
                                                label={item.label}
                                                sortDirection={sortDirection}
                                                toggleSort={(label) => handleToggleSort(label)}
                                            />
                                        </th>
                                    ))
                                }
                            </tr>

                        </thead>
                        <tbody>
                            {
                                sortedData.map(item => <tr key={item._id} className='bg-white'>{
                                    tableHeaderCells.map(cell => (
                                        <td key={`${item._id}-${cell.id}`} className='px-6 py-4 whitespace-nowrap'>{item[cell.id]}</td>
                                    ))
                                }</tr>)
                            }
                        </tbody>
                    </table> :
                    <div className="pb-4">
                        <p>No Data Available!</p>
                    </div>

                }
            </div>
        </>
    )
}
