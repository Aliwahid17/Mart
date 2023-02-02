import Image from 'next/image'
import React from 'react'
import image from '../../../../data/adImage.json'


const MidCarousal = () => {

      return (

            <>

                  <div className=' flex my-4 gap-2 lg:gap-3' >

                        {
                              image.map((value, key) =>
                                    <div key={key} className='flex flex-shrink-0  snap-start'>
                                          <Image src={value.imageUrl} alt={value.imageAlt} width={335} height={194} className="rounded-md" loading='lazy' />
                                    </div>
                              )
                        }

                  </div>

            </>

      )
}

export default MidCarousal

