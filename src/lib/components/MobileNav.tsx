import Link from 'next/link'
import React from 'react'
import Account from '../../../public/home/account.svg'
import Cart from '../../../public/home/cart.svg'
import Home from '../../../public/home/home.svg'
import Support from '../../../public/home/support.svg'
import Search from '../../../public/home/search.svg'
import Image from 'next/image'

export const MobileNav = () => {
  return (
    <>
      <section className="block md:hidden fixed inset-x-0 bottom-0 z-10  shadow-lg bg-gray-200 rounded-md font-semibold ">
        <nav className="flex items-center justify-between">

          <Link href="#" className="w-full focus:text-green-500 hover:text-green-500 justify-center flex flex-col items-center  pt-2 pb-1">
            <Image className=" mb-1 object-cover w-10 h-10 " src={Home} alt="Home" />
            <span className="sr-only">Home</span>
          </Link>

          <Link href="#" className="w-full focus:text-green-500 hover:text-green-500 justify-center flex flex-col items-center  pt-2 pb-1">
            <Image className=" mb-1 object-cover w-10 h-10 " src={Search} alt="Search" />
            <span className="sr-only">Search</span>
          </Link>
          <Link href="#" className="w-full focus:text-green-500 hover:text-green-500 justify-center flex flex-col items-center  pt-2 pb-1">
            <Image className=" mb-1 object-cover w-10 h-10 " src={Cart} alt="Cart" />
            <span className="sr-only">Cart</span>
          </Link>
          <Link href="#" className="w-full focus:text-green-500 hover:text-green-500 justify-center flex flex-col items-center  pt-2 pb-1">
            <Image className=" mb-1 object-cover w-10 h-10 " src={Support} alt="Support" />
            <span className="sr-only">Support</span>
          </Link>
          <Link href="#" className="w-full focus:text-green-500 hover:text-green-500 justify-center flex flex-col items-center  pt-2 pb-1">
            <Image className=" mb-1 object-cover w-10 h-10 " src={Account} alt="Account" />
            <span className="sr-only">Account</span>
          </Link>
        </nav>
      </section>
    </>
  )
}
