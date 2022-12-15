// import front from '../public/home/homepage.png'
import React from 'react'
import Categories from '../components/home/Categories'
import MidCarousal from '../components/home/MidCarousal'
import TopImage from '../components/home/TopImage'



export default function Home() {
  return (
    <>

      <div className="my-4 flex justify-center  ">
        <div className=" px-3 container flex justify-center  ">
          <main className='px-1  my-1 md:px-12 lg:px-28  ' >
            <TopImage />
            <MidCarousal />
            <Categories />
          </main>
        </div>
      </div>

    </>

  )
}
