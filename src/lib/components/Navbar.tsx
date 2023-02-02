import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from 'public/logo.svg'
import Search from '../../../public/home/search.svg'
// import Account from '../../../public/home/account.svg'
import Cart from '../../../public/home/cart.svg'


export const Navbar = () => {
    return (
        <>

            <header className='sticky top-0 z-50'>
                <nav className="bg-gray-600 font-sans w-full m-0 ">
                    <div className="bg-white  shadow-md ">
                        <div className="container  mx-auto px-3 md:px-12 lg:px-24 ">
                            <div className="flex items-center justify-between py-4">

                                {/* Logo */}

                                <Link href="/" >
                                    <Image className='object-cover w-10 h-10' src={Logo} alt="Logo" />
                                </Link>

                                {/* <button className="md:hidden w-10  h-10 flex items-center justify-center  mr-[-7px]">
                                    <Image width={33.35} height={33.35} src={User} alt='User' />
                                </button> */}


                                {/* <button className=" relative inline-flex mx-2 items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-green-700 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56" />
                                    <span className="absolute inset-0  rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-green-700" />
                                    <span className="relative flex ">
                                        LogIn
                                    </span>
                                </button> */}

                                <div className="flex">


                                    <div className="hidden md:flex mx-4 md:mr-4 h-10 text-gray-600 border-2 rounded-lg border-gray-300 bg-white focus-within:border-green-500 ">
                                        <input className="  w-32 md:w-44 lg:w-56 px-1  h-9  rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                                        <div className="border-[1px] border-gray-300 my-[5px]"></div>
                                        <div className=" w-10 h-10 flex items-center justify-center">
                                            <Image width={33.35} height={33.35} src={Search} alt='Search' />
                                        </div>
                                    </div>

                                    {/* <button className="hidden w-10  h-10 lg:flex items-center justify-center  mr-[-7px]">
                                        <Image width={33.35} height={33.35} src={Account} alt='Account' />
                                    </button> */}


                                    <button className=" relative inline-flex mx-2 items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-green-700 rounded-lg group">
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
        </>
    )
}
