import Link from 'next/link'
import React from 'react'

const HeaderMain = () => {
  return (
    <div className='container '>
        <div className='some text-[50px] text-center py-9 	font-serif'>
            <h1>Collection</h1>
        </div>
        <div className=' pic flex gap-10 text-center ml-10 mr-10 '>
            <div className='py-9 px-9 bg-stone-200  border-solid border-e-stone-400 border-t-stone-400 border-2 size  '>
               <Link  href="/cart" >
                   <img  src="./imp3.jpeg" alt="" />
               </Link>
                 <h1 className='pt-5'>Fashion clothes<br/> Rs 1999/-  </h1> 
            </div>

            <div className='py-9 px-9 bg-stone-200 size border-solid border-e-stone-400 border-t-stone-400 border-2'>
            <Link  href="/cart" >
                   <img  src="./imp4.jpeg" alt="" />
               </Link>
                 <h1 className='pt-5' >Polo shits design<br/> Rs 1999/-  </h1> 
            </div>

            <div className='py-9 px-9 bg-stone-200 size border-solid border-e-stone-400 border-t-stone-400 border-2'>
            <Link  href="/cart" >
                   <img  src="./imp5.jpeg" alt="" />
               </Link>
                 <h1 className='pt-5' >Custom T-shirt design <br/> Rs 1999/-  </h1> 
            </div>

            <div className='py-9 px-9 bg-stone-200 size border-solid border-e-stone-400 border-t-stone-400 border-2 '>
            <Link  href="/cart" >
                   <img  src="./imp6.jpeg" alt="" />
               </Link>
                 <h1 className='pt-5' >Polo shits design<br/> Rs 1999/-  </h1> 
            </div>
        </div>
    </div>
  )
}

export default HeaderMain