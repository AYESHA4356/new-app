import React from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";


const Filter = () => {
    return(
        <div className="ml-8 w-90 ml-100">
             <div className="flex gap-3">
                <input type="text" className="  w-2/3 h-8 text-5xl py-9  border-b border-black focus:outline-none" placeholder="Search Products..." />
                <input type="search" placeholder="All Catagories" className=" te h-8 text-4xl py-9 border-b border-black focus:outline-none" />
                <Link href="/Home" >
                <i class="   text-black-500 rotate-360-hover transition duration-1000  origin-center text-2xl">
                    <RxCross2 className="main_rotate" style={{ height: '70px', width: '60px'  }} />
                </i>
                </Link>
            </div>
            <div className="flex gap-7 text-gray-500   ">
                <p># Type at least 1 character to search</p>
                <p> # Hit enter to search or ESC to close</p>
            </div>
        </div>
    );
};

export default Filter



