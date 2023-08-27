import { ProductTableData, TableData } from "@/utils/types";
import Table from "../Table";
import { productTableHeaders } from "@/utils/config";
import { getAllProducts } from "@/app/api/product";

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
