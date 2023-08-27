import { ProductTableData, TableData } from "@/utils/types";
import Table from "../Table";
import { productTableHeaders } from "@/utils/config";
import { getAllProducts } from "@/app/api/product";
import { PageProps } from "@/.next/types/app/products/page";

const ProductList=  async (props: PageProps) => {

    const productData: ProductTableData = await getAllProducts();
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

export default ProductList;