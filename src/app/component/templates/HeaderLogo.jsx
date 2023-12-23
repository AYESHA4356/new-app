import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

const HeaderLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
<<<<<<< HEAD
    <div className='logo'>
      <div className='container justify-between flex items-center'>
        <div className='my-5'>
          <Link href="/index.jsx">
            <img width={"150px"} src="./imges/logo00.png" alt="" />
          </Link>
        </div>
        <div className='flex gap-4 mr-[25px] items-center h-[40px] mt-[10px] ml-5 px-[22px] bg-neutral-300 border-none'>
          <div className='text-[18px]'>
            <Link href="/promise">
              Log In
            </Link>
          </div>
          <Link href="/search">
            <FaSearch />
          </Link>
          <div ref={cartRef} className=''>
            <FaShoppingCart onClick={toggleCart} className="cart-icon" />
            <div className={`cart-page ${isOpen ? 'open' : ''}`}>
              <div className="flex mx items-center  my-5">
                <h3 className=' mx-9 text-2xl font-semibold ' >Cart</h3>
                  <RxCross2 className='ml-40 text-2xl font-semibold cursor-pointer cross ' />
              </div>
              <div className="flex gap-6 mx-9 my-5 mb-3.5 py-6 ">
                <img src="./imges/1 (3).png" className='h-16 w-16' alt="image" />
                <p className='text-sm font-semibold text-gray-600 cart_para' >GenRoar plain T shirt color <br /> black & navy blue which <br /> is of only 400 Rs </p>
              </div>
              <div className="mx-9 flex justify-between mb-2">
                <h3 className='text-2xl font-semibold' >Subtotal:</h3>
                <h3 className='text-2xl font-semibold' >Rs 400</h3>
              </div>
              <div className=" flex flex-col gap-5 ">
                <button className='butt mx-9'>VIEW CART</button>
                <Link href="/out " className='butt mx-9 text-center'>
                <button  className=' mx-9'>CHECKOUT</button>
                </Link>
              </div>
            </div>
=======
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
>>>>>>> c15496916dfa4012ac3974b45e5dd79307650fc4
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
