import { VisitorTableData } from "@/utils/types";
import Table from "../Table";
import { visitorsTableHeaders } from "@/utils/config";
import { getAllVisitors } from "@/app/api/visitor";


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
