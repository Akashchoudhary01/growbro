import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
// import OutboundMessaging from '@/components/Product/Outbound/Outbound'
import OutboundMessaging from '@/components/Product/Outbound/Outbound'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <OutboundMessaging/>
        <Footer/>
      
    </div>
  )
}

export default page
