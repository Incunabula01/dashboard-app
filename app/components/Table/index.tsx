"use client";

import React from 'react'

import { TableCells, ProductTableData, VisitorTableData } from '@/utils/types';

type TableProps = {
    tableData: ProductTableData | VisitorTableData;
    tableHeaderText: string;
    tableHeaderCells: TableCells;
}

export default function Table({ tableData = [], tableHeaderText, tableHeaderCells }: TableProps) {

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
                                        <th key={item.id} className='px-6 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600'>{item.label}</th>
                                    ))
                                }
                            </tr>

                        </thead>
                        <tbody>
                            {
                                tableData.map(item => <tr key={item._id} className='bg-white'>{
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
