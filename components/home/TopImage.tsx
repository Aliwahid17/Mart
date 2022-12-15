import Image from 'next/image'
import React from 'react'
import Top from '../../public/test/up.jpg'

const TopImage = () => {
  return (
    <section className=' w-auto h-auto   '>
      <Image src={Top} className="rounded-md" alt=" Top" loading='lazy' />
    </section>
  )
}

export default TopImage