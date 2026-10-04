import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import InboundMessaging from '@/components/Product/website-widget/InboundMessaging'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <InboundMessaging/>
        <Footer/>
      
    </div>
  )
}

export default page
