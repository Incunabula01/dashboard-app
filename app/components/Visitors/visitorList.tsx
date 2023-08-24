import { VisitorTableData } from "@/utils/types";
import Table from "../Table";
import { deviceMapper, visitorsTableHeaders } from "@/utils/config";

async function getAllVisitors() {
    const res = await fetch('http://localhost:3000/api/visitor/all-visitors', { method: 'GET', cache: 'no-store' });
    const resData = await res.json();
    if (resData.success) {
        return resData.data;
    }
    return [];
}

export default async function VisitorList() {

    const visitorData: VisitorTableData = await getAllVisitors();
    console.info('VisitorData ==>', visitorData);
    return (
        <>
            <Table
                tableData={visitorData}
                tableHeaderCells={visitorsTableHeaders}
                tableHeaderText="All Visitors Overview" />
        </>
    )
}
