import React from 'react'
import Carousel from '../components/carousel/Carousel'
import Categories from '../components/Categories'
import MidCarousal from '../components/carousel/MidCarousal'
import TopImage from '../components/TopImage'
import ProductCarousel from '../components/carousel/ProductCarousel'



export default function Home() {
  return (
    <>

      <div className=" w-full m-0 ">
        <div className="container  mx-auto px-3 md:px-20 lg:px-44 xl:px-56 ">
          <main className="flex flex-col items-center justify-center py-4">
            <TopImage />
            <Carousel  >
              <MidCarousal />
            </Carousel>
            <Categories />
            <ProductCarousel />
          </main>
        </div>
      </div>

    </>

  )
}
