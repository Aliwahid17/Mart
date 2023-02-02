import Link from 'next/link'
import React from 'react'
import Carousel from './Carousel'
import CarouselProduct from './CarouselProduct'
import Category from '../../../../data/productCategory.json'

const ProductCarousel = () => {
    return (
        <>
            {
                Category.map((value, key) =>
                    <section key={key} className=' w-full   ' >

                        <div className=" my-6  justify-between flex items-center">
                            <h2 className=" text-xl font-bold text-slate-700" >
                                {value.category}
                            </h2>
                            <Link href={'/'} >
                                <h2 className='text-lg font-semibold text-green-500' >See All</h2>
                            </Link>
                        </div>

                        <Carousel >

                            <CarouselProduct />

                        </Carousel>

                    </section>
                )
            }


        </>
    )
}

export default ProductCarousel