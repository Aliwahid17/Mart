import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import I from '../public/test/milk.svg'
import W from '../public/test/car.jpg'
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Link from 'next/link'
import Categories from './home/Categories'
import Data from '../data/data.json'



// const ProductCarousal = () => {

//     // const view = useRef<HTMLSelectElement>(null)
//     // const [width, setWidth] = useState<number | undefined>(0)


//     // const back = () => {
//     //     const backWidth = width! - view.current?.clientWidth! 
//     //     setWidth(backWidth)
//     //     // console.log(view.current?.clientWidth)
//     // }
//     // const next = () => {
//     //     // console.log(view.current?.clientWidth)
//     //     const nextWidth = view.current?.clientWidth! + width!
//     //     setWidth(nextWidth)

//     // }


//     // useEffect(() => {
//     //     console.log("mount")
//     //     // setWidth(view.current?.clientWidth)
//     //     next()
//     //     // back()
//     //     window.addEventListener('resize',next)
//     //     // window.addEventListener('resize',back)




//     //     return () => {
//     //         console.log("unmount")
//     //         window.removeEventListener('resize',next)
//     //         // window.removeEventListener('resize',back)
//     //     }
//     // }, [])


//     // <>

//     //     <div className='flex justify-between'>


//     //         <button className='w-5 h-5 flex' >
//     //             {/* <button className='w-5 h-5 flex' onClick={back} > */}
//     //             &larr;
//     //         </button>

//     //         {/* {width} */}
//     //         {/* {view.current?.clientWidth} */}

//     //         <button className=' h-5 flex w-5' >
//     //             {/* <button className=' h-5 flex w-5' onClick={next}> */}
//     //             &rarr;
//     //         </button>
//     //     </div>


//     //     <section className='flex overflow-hidden carousal' >
//     //         {/* <section className='flex overflow-hidden carousal' ref={view} > */}
//     //         <Image src={I} alt="f" className='mr-2 ' />
//     //         <Image src={I} alt="f" className='mx-2 ' />
//     //         <Image src={I} alt="f" className='mx-2 ' />
//     //         <Image src={I} alt="f" className='mx-2 ' />
//     //         <Image src={I} alt="f" className='mx-2 ' />
//     //         <Image src={I} alt="f" className='mx-2 ' />
//     //     </section>
//     // </>



//     const maxScrollWidth = useRef<number>(0)
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const carousal = useRef<HTMLDivElement>(null)

//     // console.log(carousal.current)

//     const movePrev = () => {
//         if (currentIndex > 0) return setCurrentIndex((prevState) => prevState - 1)

//     }


//     const moveNext = () => {
//         if (
//             carousal.current !== null! && carousal.current?.offsetWidth! * currentIndex <= maxScrollWidth.current
//         ) return setCurrentIndex((prevState) => prevState + 1)

//     }

//     const isDisabled = (direction: string) => {
//         if (direction === 'prev') return currentIndex <= 0

//         if (direction === 'next' && carousal.current !== null) return (carousal.current.offsetWidth! * currentIndex >= maxScrollWidth.current)

//         return false
//     }

//     useEffect(() => {
//         if (carousal !== null && carousal.current !== null)   (carousal.current.scrollLeft = carousal.current.offsetWidth * currentIndex)

//     }, [currentIndex]);

//     useEffect(() => {
//         maxScrollWidth.current = carousal.current
//             ? carousal.current.scrollWidth - carousal.current.offsetWidth
//             : 0;
//     }, []);

//     // console.log(isDisabled('next'))



//     return (

//         <>

//             <div className="carousel my-12 mx-auto">


//                 <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
//                     Our epic carousel
//                 </h2>


//                 <div className="relative overflow-hidden">
//                     <div className="flex justify-between absolute top-0 left w-full h-full">
//                         <button

//                             onClick={movePrev}
//                             // className={`${isDisabled('prev') ? "hidden" :"hover:bg-blue-900/75  text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300" }   `}
//                             className=" hover:bg-blue-900/75  text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//                             disabled={isDisabled('prev')}
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-12 w-20 -ml-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M15 19l-7-7 7-7"
//                                 />
//                             </svg>
//                             <span className="sr-only">Prev</span>
//                         </button>
//                         <button
//                             onClick={moveNext}
//                             // className={`${isDisabled('next') ? "hidden" :" hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"}`}
//                             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//                             disabled={isDisabled('next')}
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-12 w-20 -ml-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M9 5l7 7-7 7"
//                                 />
//                             </svg>
//                             <span className="sr-only">Next</span>
//                         </button>
//                     </div>



//                     {/* <div
//                         ref={carousal}
//                         className="flex relative z-0 overflow-hidden scroll-smooth inset-0 transition-all ease-in-out duration-100 transform translate-x-0  "
//                     > */}
//                     <div
//                         ref={carousal}
//                         className="carousel-container relative brave-scroll flex gap-1  overflow-x-scroll car-scroll scroll-smooth snap-x snap-mandatory  touch-pan-x  z-0"

//                         style={{

//                         }}

//                     >


//                         <Image src={I} alt="f" className='mr-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />
//                         <Image src={I} alt="f" className='mx-2 ' />

//                         {/* {data.resources.map((resource, index) => {
//             return (
//               <div
//                 key={index}
//                 className="carousel-item text-center relative w-64 h-64 snap-start"
//               >
//                 <a
//                   href={resource.link}
//                   className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                   style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
//                 >
//                   <img
//                     src={resource.imageUrl || ''}
//                     alt={resource.title}
//                     className="w-full aspect-square hidden"
//                   />
//                 </a>
//                 <a
//                   href={resource.link}
//                   className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
//                 >
//                   <h3 className="text-white py-6 px-3 mx-auto text-xl">
//                     {resource.title}
//                   </h3>
//                 </a>
//               </div>
//             );
//           })} */}








//                     </div>



//                 </div>
//             </div>

//         </>


//     )
// }

// export default ProductCarousal

const ProductCarousal = () => {

    const maxScrollWidth = useRef<number>(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [screen, setScreen] = useState(false)
    const carousal = useRef<HTMLDivElement>(null)



    // setScreen(() => )
    // console.log("ontouchstart" in document.documentElement)


    const movePrev = () => {
        if (currentIndex > 0) return setCurrentIndex((prevState) => prevState - 1)
    }


    const moveNext = () => {
        if (carousal.current !== null! && carousal.current?.offsetWidth! * currentIndex <= maxScrollWidth.current) return setCurrentIndex((prevState) => prevState + 1)
    }



    const isDisabled = (direction: string) => {
        if (direction === 'prev') return currentIndex <= 0

        if (direction === 'next' && carousal.current !== null) return (carousal.current.offsetWidth! * currentIndex >= maxScrollWidth.current)

        return false
    }

    useEffect(() => {
        if (carousal !== null && carousal.current !== null) {
            carousal.current.scrollLeft = carousal.current.offsetWidth * currentIndex;

        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousal.current ? carousal.current.scrollWidth - carousal.current.offsetWidth : 0;
        "ontouchstart" in document.documentElement ? setScreen(true) : setScreen(false)
    }, []);



    return (

        <>



            <section className='my-3  ' >

                <div className=" my-6  justify-between flex items-center">
                    <h2 className=" text-2xl font-bold text-slate-700" >
                        Dairy, Bread & Eggs
                    </h2>
                    <Link href={'/'} >
                        <h2 className='text-lg font-semibold text-green-500' >See All</h2>
                    </Link>
                </div>


                <div className='relative overflow-hidden' >

                    {
                        !screen &&



                        <div className="flex items-center justify-between absolute  w-full h-full mx-0 shadow-2xl ">
                            <button
                                onClick={movePrev}
                                className={` ${!isDisabled('prev') && "z-10  w-7 h-7 rounded-full flex justify-center items-center bg-white hover:bg-gray-100 shadow-2xl  "} `}
                            >
                                {!isDisabled('prev') && <AiOutlineLeft className='w-5 h-5 flex justify-center items-center  ' />}

                            </button>


                            <button
                                onClick={moveNext}
                                className={` ${!isDisabled('next') && "z-10  w-7 h-7 rounded-full flex justify-center items-center bg-white hover:bg-gray-100 shadow-2xl  "} `}
                            >
                                {!isDisabled('next') && <AiOutlineRight className='w-5 h-5 flex justify-center items-center  ' />}

                            </button>
                        </div>




                    }

                    <section ref={carousal}
                        className=" relative brave-scroll flex  w-full flex-row  overflow-scroll car-scroll scroll-smooth snap-x snap-mandatory  touch-pan-x  z-0"
                    >

                    <div>
                        <Image src={W} alt="" />
                    </div>

                       
                    </section>
                </div>

            </section>



            






        </>


    )
}

export default ProductCarousal

