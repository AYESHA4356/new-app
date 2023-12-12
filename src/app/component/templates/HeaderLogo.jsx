import React from 'react'
import { FaShoppingCart} from "react-icons/fa";
import Link from 'next/link';


const HeaderLogo = () => {
  return (
    <div className='logo '>
       <div className='container justify-between flex items-center  '>
          <div className='my-5'>
            <Link href="">
              <img width={"150px"}  src="./imges/logo00.png" alt="" />
              </Link>
          </div>
         
          <div className='flex gap-4 mr-[25px]  items-center  '>
            <div className='text-[18px] '>
              <Link  href="/promise">
                 Login
              </Link>
            </div>
            <Link href="">
            < FaShoppingCart/>
            </Link>
          </div>
    </div>
  </div>

       
  )
}

export default HeaderLogo