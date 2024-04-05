 import React from 'react'
 import './Vendor.css'
import { FaHeartPulse } from 'react-icons/fa6'

const Vendors = () => {
  return (
    <div className='vendor-div container mt-5 p-5'>
        <h2 style={{fontSize:"1.5vw"}} className='text-center'>Find trusted wedding services in all Indore area’s & Book Verified Vendors in simple steps.</h2>
      
      <div className='vendor-image-div mt-5' >

        <div className='vendor-image'>
        <a href=""><img src="/images/vendor1.png" alt="" /></a>
        <a href=""><img src="/images/vendor2.png" alt="" /></a>
        </div>            
        
        <div className='vendor-image mt-3'>
        <div className='text-center'>Vendors Category <br /> <span style={{color:"crimson"}}>_________________ <FaHeartPulse/>  _________________</span><br /></div>

        <a href=""><img src="/images/vendor3.png" alt="" /></a>
        <a href=""><img src="/images/vendor4.png" alt="" /></a>
        </div>            
        
        <div className='vendor-image'>
        <a href=""><img src="/images/vendor5.png" alt="" /></a>
        <a href=""><img src="/images/vendor6.png" alt="" /></a>
        </div>            
      
      </div>
    </div>
  )
}

export default Vendors
