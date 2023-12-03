import React from 'react';
// import Logo from '../atoms/Logo';
import { BsFacebook , BsTwitter , BsInstagram , BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';

function Footer() {
  return (
    <div className='icon '>
      <div className='bg-neutral-300 text-white p-12 text-center mt-20 '>
            <div className=' ml-[530px]'>
              <img width={"150px"} src="./imges/logo00.png" alt="Your Logo" ></img>
            </div>
           <div className='flex ml-[520px]'>
                <Link className='text-[20px] text-[#3B5998] my-5 mx-3 none stroke-1' href="#">
                  <BsFacebook />
                </Link>

                <Link className='text-[20px] text-[#08a0e9] my-5 mx-3 none' href="#">
                <BsTwitter />
                </Link>

                <Link className='text-[20px] text-[#DD2A7B] my-5 mx-3 none' href="#">
                <BsInstagram />
                </Link>

                <Link className='text-[20px] text-[#0E76A8] my-5 mx-3 none' href="#">
                <BsLinkedin />
                </Link>

            </div>
            <p className="text-black text-[18px]">© 2023 Your E-commerce Site. All rights reserved.</p>
            
            </div>
          </div>
  );
}

export default Footer

