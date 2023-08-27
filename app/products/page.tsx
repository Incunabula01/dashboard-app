import { PageProps } from '@/.next/types/app/page';
import ProductLayout from '../components/Products/productLayout';
import ProductList from '../components/Products/productList';

const Products = (props: PageProps) => {
    return (
        <ProductLayout>
            <ProductList />
        </ProductLayout>
    )
}

export default Products;