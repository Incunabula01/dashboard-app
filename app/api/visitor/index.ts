import { FormData, VisitorTableData } from "@/utils/types";
export const dynamic = 'force-dynamic'

export const getAllVisitors = async (): Promise<VisitorTableData | []> => {
    const res = await fetch('http://localhost:3000/api/visitor/all-visitors', { method: 'GET', cache: 'no-store' });
    const resData = await res.json();
    if (resData.success) {
        return resData.data;
    }
    return [];
}

export const addVisitor = async (formData: FormData): Promise<Boolean> => {
    const res = await fetch('/api/visitor/add-visitor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await res.json();

    return data.success;
} 
