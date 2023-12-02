import React from 'react'


function Login() {
  return (
          <div className='container'>
          <div className='verfy h-[450px] w-[450px] mt-[80px] my-0 mx-auto border-solid border-rgba(0,0,0,.1)  border '>
              <div className=' clear text-[18px] py-[30px] px-[20px] m-0 border-b-solid border-b-rgba(0,0,0,.1) border-b  '>
                <span>Log in | Sign up</span>
              </div>
              <div className='login block pt-[30px] px-[20px] pb-[30px] '>
                <div className='box mb-[20px] block  leading-[18px]  text-[18px]  align-left '>
                  <p className='font-[500]'>Name:</p>
                  <input className='py-[10px] pl-[10px] pr-[150px]  mt-[15px] border-solid border-rgba(0,0,0,.1); border-2  '
                   type="text"
                   placeholder='Enter Name' />
                </div>
                <div className='box mb-[15px] block  leading-[18px]  text-[18px]  align-left '>
                  <p className='font-[500]'>Password:</p>
                  <input className='py-[10px] pl-[10px] pr-[150px]  mt-[15px] border-solid border-rgba(0,0,0,.1); border-2 '
                   type="password" 
                   placeholder='Enter Password' />
                </div>
                </div>
                <div className='box end  block  leading-[18px] font-[400] text-[18px]  align-left py-[25px] px-[90px] '>
                  <button className=' h-[40px] mt-[10px] ml-5 px-[22px] bg-[#2c699d] border-none '>Log in </button>
                  <button className=' h-[40px] mt-[10px] ml-5 px-[22px] bg-[#2c699d] border-none '>Sign up </button>
                </div>
                
          </div>
        </div>

  )
}

export default Login

