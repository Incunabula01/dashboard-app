import { VisitorTableData } from "@/utils/types";
import Table from "../Table";
import { visitorsTableHeaders } from "@/utils/config";
import { getAllVisitors } from "@/app/api/visitor";
import { PageProps } from "@/.next/types/app/visitors/page";


const VisitorList = async (props: PageProps) => {

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