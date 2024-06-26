import { FormData, ProductTableData } from "@/utils/types";
export const dynamic = 'force-dynamic';

const allProductAPIUrl = process.env.NEXT_PUBLIC_ALL_PRODUCT_API_URL as RequestInfo | URL;
const addProductAPIUrl = process.env.NEXT_PUBLIC_ADD_PRODUCT_API_URL as RequestInfo | URL;

export const getAllProducts = async ():Promise<ProductTableData | []> => {
    try {
        const res = await fetch(allProductAPIUrl, { method: 'GET', cache: 'default' });

        const resData = await res.json();
        if (resData.success) {
            return resData.data;
        }
    } catch (error) {
        console.error('getAllProducts Error!', error);
    }
    return [];
}

export const addProduct = async (formData: FormData): Promise<Boolean> => {
    const res = await fetch(addProductAPIUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...formData, 
            createdDate: new Date()
        })
    });

    const data = await res.json();

    return data.success;
} 