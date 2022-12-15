import Image from 'next/image'
import React, { useState } from 'react'
import Top from '../../public/test/car.jpg'



const MidCarousal = () => {






  return (
    // <section>MidCarousal</section>

    <section className='sm:my-4 my-3 grid  w-auto h-auto sm:grid-cols-2 gap-3 ' >

{/* w-544px h-194px */}

      <Image src={Top} alt={"jsfj"} className="rounded-md"/>
      <Image src={Top} alt={"jsfj"} className="rounded-md"/>
      {/* <Image src={Top} alt={"jsfj"} width={544 } height={194}  />
      <Image src={Top} alt={"jsfj"} width={544} height={194}  /> */}

    </section>

    






  )
}

export default MidCarousal

