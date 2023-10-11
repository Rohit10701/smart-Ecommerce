'use client';
import Container from '@/components/Container';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { StateProps } from '../../../type';
import CartItem from '@/components/CartItem';
import { resetCart } from '@/redux/shoppingSlice';
import PaymentForm from '@/components/PaymentFrom';
import Link from 'next/link';

const Page = () => {
    const { productData } = useSelector((state: StateProps) => state.shopping)
    const dispatch = useDispatch()
    return (
        <Container>
            {
                productData.length > 0 ?
                    <Container>
                        <h2 className='text-2xl font-semibold mb-2'>
                            <div className='flex flex-col gap-5'>
                                <CartItem />
                                <div className='flex item-center justify-end'>
                                    <button onClick={() => dispatch(resetCart())} className='bg-red-500 text-base font-semibold text-slate-100 py-2 px-6 hove:bg-red-700 hover:text-white duration-200 '>
                                        reset cart
                                    </button>
                                </div>
                                {/* payment Form */}
                                <PaymentForm />
                            </div>
                        </h2>
                    </Container>: <div className='flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4'>
                        <p className='border-[1px] border-orange-600 w-full p-2 text-center'>
                            your product cart is currently empty.
                            <Link href = {'/'}>
                            <button className='bg-darkText text-white py-2 px-6 rounded-md hover:bg-orange-600 duration-200'>Return to Shop</button>
                            </Link>
                        </p>
                    </div>
            }
        </Container>
    )
}

export default Page