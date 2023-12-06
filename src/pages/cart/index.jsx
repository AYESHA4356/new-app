import HeaderLogo from '@/app/component/templates/HeaderLogo'
import Cart from '@/app/nextpage/Cart'
import React from 'react'
import  "../index.css"


function index() {
  return (
    <div>
        <HeaderLogo/>
        <Cart/>
    </div>
  )
}

export default index