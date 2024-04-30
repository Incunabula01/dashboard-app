import { VisitorTableData } from "@/utils/types";
import Table from "../Table";
import { visitorsTableHeaders } from "@/utils/config";
import { getAllVisitors } from "@/app/api/visitor";


const VisitorList = async () => {

    const visitorData: VisitorTableData = await getAllVisitors();
    return (
        <>
            <Table
                tableData={visitorData}
                tableHeaderCells={visitorsTableHeaders}
                tableHeaderText="All Visitors Overview" />
        </>
    )
}

export default VisitorList;