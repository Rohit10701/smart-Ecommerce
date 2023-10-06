import Container from '@/components/Container';
import { getSingleProduct, getTrendingProducts } from '@/helpers';
import React from 'react'
import { Products } from '../../../type';
import ProductData from '@/components/ProductData';
import SingleProduct from '@/components/SingleProduct';
interface Props {
    searchParams: { [key: string]: string | string[] | undefined }
}
const ProductPage = async ({ searchParams }: Props) => {
    const _idString = searchParams?._id;
    const _id = Number(_idString)
    const product = getSingleProduct(_id)
    const data = await getTrendingProducts();
    return (
        <div>
            <Container>
                <SingleProduct product = {product} />
                <div>
                    <p className='text-xl py-1 font-semibold'> Trending Products</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    {data?.map((item: Products) => (
                            <ProductData item={item} key={item._id}/>
                    ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage