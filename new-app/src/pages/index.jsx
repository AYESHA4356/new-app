import React from 'react'
import  "../app/globals.css"
import HeaderMain from '@/app/component/templates/HeaderMain'
import HeaderLogo from '@/app/component/templates/HeaderLogo'
import HeaderBanner from '@/app/component/templates/HeaderBanner'
import Footer from '@/app/component/templates/Footer'

function Home() {
  return (
    <div>
      <h1>badar</h1>
       <HeaderLogo/>
       <HeaderBanner/>
       <HeaderMain/>
       <Footer/>

    </div>
  )
}

export default Home