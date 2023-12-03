import React from 'react'
import { FaShoppingCart} from "react-icons/fa";
import Link from 'next/link';


const HeaderLogo = () => {
  return (
    <div className='logo'>
       <div className='container justify-between flex items-center  '>
          <div className='my-5'>
            <Link href="/index.jsx">
              <img width={"150px"}  src="./imges/logo00.png" alt="" />
              </Link>
          </div>
         
          <div className='flex gap-4 mr-[25px]  items-center h-[40px] mt-[10px] ml-5 px-[22px] bg-neutral-300 border-none '>
            <div className='text-[18px] '>
              <Link  href="/promise">
                 Log In
              </Link>
            </div>
            < FaShoppingCart/>
          </div>
    </div>
  </div>

       
  )
}

export default HeaderLogo