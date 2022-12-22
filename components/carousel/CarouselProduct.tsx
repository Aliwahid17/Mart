import Image from 'next/image'
import React from 'react'
import I from '../../public/test/amul.webp'
import Item from '../../data/item.json'

const CarouselProduct = () => {
    return (
        <>

        {
            Item.map((value , key ) => 
                <div key={key} className='flex-shrink-0 flex-col  flex snap-start border-2 py-1 px-4 rounded-lg border-gray-400 hover:border-green-400 ' >
                    <Image src={value.imageUrl} width={144} height={144} alt="sf" className='w-36 h-36' />
                    <div className='flex flex-col w-36  my-2'>
                        <span className='flex text-lg font-semibold justify-start items-center text-left  my-1' >
                            {value.productName}
                        </span>
                        <span className='flex text-gray-400 text-xs font-semibold justify-start items-center ' >
                            {value.productQuantity}
                        </span>

                        <div className="flex justify-between items-center mt-1">
                            <span className='font-semibold' >
                                {`₹${value.price}`}
                            </span>

                            <button className="relative w-min px-8 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-400 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Add</span>
                            </button>

                        </div>
                    </div>
                </div>
            )
        }



        </>
    )
}

export default CarouselProduct