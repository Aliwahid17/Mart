import Image from "next/image"
import Link from "next/link"
import Cart from '../public/home/cart.svg'
import User from '../public/home/user.svg'
import Search from '../public/home/search.svg'
import Location from '../public/location.svg'
import {BsFillCaretDownFill} from 'react-icons/bs'

const Navbar = () => {

    return (

        <>

            <header className='sticky top-0 z-50'>
                <nav className="bg-gray-600 font-sans w-full m-0 ">
                    <div className="bg-white  lg:shadow-md ">
                        <div className="container  mx-auto px-3 md:px-12 lg:px-24 ">
                            <div className="flex items-center justify-between py-4">

                                {/* Logo */}

                                <Link href="/" >
                                    <h1 className=" text-2xl font-extrabold text-transparent bg-clip-text lg:border-r-2 lg:border-r-gray-900 lg:pr-5  bg-gradient-to-r from-green-500 to-green-700  " >bhumija</h1>
                                </Link>



                                <div className="lg:flex justify-start items-center  w-full pl-5   hidden">

                                    <Image src={Location} alt="location" />
                                    <address className="  font-medium text-base mx-1  ">
                                        {/* 35 words */}
                                        Vaishali Metro, Ghaziabad Uttar Prad...
                                    </address>

                                    <div className=" ">
                                        <BsFillCaretDownFill className="w-4 h-4 hover:animate-bounce " />
                                    </div>
                                </div>
                                <div className="flex">


                                    <div className=" flex mx-4 md:mr-4 h-10 text-gray-600 border-2 rounded-lg border-gray-300 bg-white focus-within:border-green-500 ">
                                        <input className="  w-32 md:w-44 lg:w-56 px-1  h-9  rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                                        <div className="border-[1px] border-gray-300 my-[5px]"></div>
                                        <div className=" w-10 h-10 flex items-center justify-center">
                                            <Image width={33.35} height={33.35} src={Search} alt='Search' />
                                        </div>
                                    </div>

                                    <button className="md:hidden w-10  h-10 flex items-center justify-center  mr-[-7px]">
                                        <Image width={33.35} height={33.35} src={User} alt='User' />
                                    </button>


                                    <button className="hidden relative md:inline-flex mx-2 items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-green-700 rounded-lg group">
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56" />
                                        <span className="absolute inset-0  rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-green-700" />
                                        <span className="relative flex ">
                                            LogIn
                                        </span>
                                    </button>

                                    <Link href={'/'} title="My Cart" className="hidden md:flex justify-center items-center " >

                                    <Image
                                        src={Cart}
                                        alt="google"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 mx-2"
                                        
                                        />
                                        </Link>


                                </div>

                            </div>

                        </div>
                    </div>
                </nav>
            </header>

            <div className=" lg:hidden flex justify-between items-center sm:px-20  mx-auto px-3">

                            <Image src={Location} alt="location"  />

                            <address className=" md:hidden font-medium text-base  ">
                                {/* 35 words */}
                    Vaishali Metro, Ghaziabad Uttar Prad... 
                            </address>
                            <address className=" hidden md:block px-2 font-medium text-base  ">
                                {/* 75 words */}
                    Vaishali Metro, Ghaziabad Uttar Uttar Uttar Uttar Uttar Uttar Uttar Uttar Uttar  Prad...
                            </address>

                            <div className=" ">
                    <BsFillCaretDownFill className="w-4 h-4 hover:animate-bounce " />
                            </div>

            </div>


        </>

    )
}

export default Navbar