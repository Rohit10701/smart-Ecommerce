import React from 'react'
import { getProducts } from '@/helpers'
import Container from './Container';
import ProductData from './ProductData';
const Products = async () => {
    const products = await getProducts();
    return (
        <Container className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10'>
            {
                products.productData?.map(({item : any}) => (
                    <ProductData item={item} key={item._id}/>
                ))
            }
        </Container>
    )
}

export default Products