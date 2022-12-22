import Image from 'next/image'
import React from 'react'
import Top from '../public/test/up.jpg'

const TopImage = () => {

  return (
    <section className=' flex justify-center items-center   '>
      <Image src={Top} className="rounded-md" width={1100} height={393} alt=" Top" loading='lazy' />
    </section>
  )
  
}

export default TopImage