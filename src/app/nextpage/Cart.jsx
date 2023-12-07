import React from 'react'

function Cart() {
  return (
    <div className=' p-[25px] '  >
      <div className="box_2 section1 flex   my-auto mx-auto h-[460px] w-[1010px] ">
        <div className="box1 p-[30px] ">
          <img width={"400px"} src="./imp3.jpeg" alt=""/>
        </div>
        <div className="box1 main0 text-[24px]   ">
          <h1 className='mb-[30px] mt-[30px] text-[#123C69] font-[500] ' >Polo Men's Short Seleevs Branded T-Shirts For<br/> Men's With Top Quality For Eid Collection 2023</h1>
          <span className='mx-[30px] text-[#cf2960] font-[700] '>Rs. 1999\- <br/> </span>
          <div></div>
          <div className=''>
            <button className='bg-[#cf2960] py-[10px] px-[40px] text-[20px] mr-[30px] mt-[100px] '>Buy Now  <br/></button>
            <button className='bg-[#123C69] py-[10px] px-[40px] text-[20px]  mt-[100px] '>Add to Cart</button>
         </div>

        </div>
        

      </div>

    </div>
  )
}

export default Cart