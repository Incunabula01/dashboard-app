import { FormData, VisitorTableData } from "@/utils/types";
export const dynamic = 'force-dynamic'

const allVisitorsAPIUrl = process.env.ALL_VISITOR_API_URL as RequestInfo | URL;
const addVisitorAPIUrl = process.env.ADD_VISITOR_API_URL as RequestInfo | URL;

export const getAllVisitors = async (): Promise<VisitorTableData | []> => {
    const res = await fetch(allVisitorsAPIUrl, { method: 'GET', cache: 'no-store' });
    const resData = await res.json();
    if (resData.success) {
        return resData.data;
    }
    return [];
}

export const addVisitor = async (formData: FormData): Promise<Boolean> => {
    const res = await fetch(addVisitorAPIUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await res.json();

    return data.success;
} 
