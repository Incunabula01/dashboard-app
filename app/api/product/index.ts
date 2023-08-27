import { FormData, ProductTableData } from "@/utils/types";
export const dynamic = 'force-dynamic';

export const getAllProducts = async ():Promise<ProductTableData | []> => {
    const res = await fetch('http://localhost:3000/api/product/all-products', { method: 'GET', cache: 'no-store' });
    const resData = await res.json();
    if (resData.success) {
        return resData.data;
    }
    return [];
}

export const addProduct = async (formData: FormData): Promise<Boolean> => {
    const res = await fetch('/api/product/add-product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await res.json();

    return data.success;
} 