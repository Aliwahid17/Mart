import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Carousel = ({ children }: { children: React.ReactNode }) => {

    const maxScrollWidth = useRef<number>(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [screen, setScreen] = useState(false)
    const carousel = useRef<HTMLDivElement>(null)


    const movePrev = () => {
        if (currentIndex > 0) return setCurrentIndex((prevState) => prevState - 1)
    }


    const moveNext = () => {
        if (carousel.current !== null! && carousel.current?.offsetWidth! * currentIndex <= maxScrollWidth.current) return setCurrentIndex((prevState) => prevState + 1)
    }



    const isDisabled = (direction: string) => {
        if (direction === 'prev') return currentIndex <= 0

        if (direction === 'next' && carousel.current !== null) return (carousel.current.offsetWidth! * currentIndex >= maxScrollWidth.current)

        return false
    }

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;

        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
        "ontouchstart" in document.documentElement ? setScreen(true) : setScreen(false)
    }, []);

    return (
        <>
            <div className='relative my-2   overflow-hidden' >
                {
                    !screen &&
                    <div className="flex items-center justify-between absolute  w-full h-full  shadow-2xl ">
                        <button
                            onClick={movePrev}
                            className={` ${!isDisabled('prev') && "z-10  w-7 h-7 rounded-full flex justify-center items-center bg-gray-200 hover:bg-gray-500 shadow-2xl  "} `}
                        >
                            {!isDisabled('prev') && <AiOutlineLeft className='w-5  h-5   ' />}

                            <span className="sr-only">Previous</span>

                        </button>


                        <button
                            onClick={moveNext}
                            className={` ${!isDisabled('next') && "z-10  w-7 h-7 rounded-full flex justify-center items-center bg-gray-200 hover:bg-gray-500 shadow-2xl  "} `}
                        >
                            {!isDisabled('next') && <AiOutlineRight className='w-5 h-5 flex justify-center items-center  ' />}

                            <span className="sr-only">Next</span>

                        </button>
                    </div>




                }
                <section ref={carousel}
                    className=" relative brave-scroll flex gap-2    overflow-x-scroll car-scroll scroll-smooth snap-x snap-mandatory  touch-pan-x  z-0"
                >

                    {children}

                </section>
            </div>


        </>
    )

}

export default Carousel