import Image from 'next/image'
import React from 'react'
import Milk from "../public/test/milk.svg"
import Data from '../data/data.json'



const Categories = () => {

  return (


    <section className='my-5  ' >

      <div className='grid  grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-10  gap-3 '>

        {
          Object.values(Data).map((value, key) =>


            <div className='2xl:w-[99px]' key={key}>
              <picture className='flex pt-3 pb-1  bg-gray-500 justify-center items-center'>
                <Image src={Milk} alt={"Milkk"} width={65} height={65} loading='lazy' />
              </picture>
              <p className='flex text-xs md:text-sm lg:text-base font-semibold justify-center items-center text-center my-1'>{value.product}</p>
            </div>

          )
        }

      </div>

    </section>
  )
}

export default Categories