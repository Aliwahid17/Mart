// import front from '../public/home/homepage.png'
import React from 'react'
import Categories from '../components/home/Categories'
import MidCarousal from '../components/home/MidCarousal'
import TopImage from '../components/home/TopImage'
import ProductCarousal from '../components/ProductCarousal'



export default function Home() {
  return (
    <>

      {/* <div className="my-4 flex justify-center  ">
        <div className=" mx-3 container flex justify-center  ">
          <main className='mx-1  my-1 md:mx-12 lg:mx-28  ' >
            <TopImage />
            <MidCarousal />
            <Categories />
            </main>
            </div>
          </div> */}


      <main className='my-4 mx-3 md:mx-14 lg:mx-52 ' >
        <TopImage />
        <MidCarousal />
        <Categories />
        <ProductCarousal />
      </main>


    </>

  )
}
