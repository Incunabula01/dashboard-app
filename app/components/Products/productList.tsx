import { ProductTableData, TableData } from "@/utils/types";
import Table from "../Table";
import { productTableHeaders } from "@/utils/config";

async function getAllProducts() {
    const res = await fetch('http://localhost:3000/api/product/all-products', { method: 'GET', cache: 'no-store' });
    const resData = await res.json();
    if(resData.success){
        return resData.data;
    }
    return [];
}

export default async function ProductList() {

    const productData: ProductTableData = await getAllProducts();
    console.info('productData ==>', productData);
    return (
        <>
            <Table 
            tableData={productData.length ? 
                    productData.map(item => ({
                        ...item,
                        revenue: Math.round(item.price * item.sales),
                    })) : [] 
            } 
            tableHeaderCells={productTableHeaders} 
            tableHeaderText="All Products Overview" />
        </>
    )
}
