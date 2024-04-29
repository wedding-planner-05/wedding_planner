import { FaHeartPulse } from "react-icons/fa6";
import React from 'react' 
import "./Header.css"
const Header = () => {
  return (
    <div className='container-fluid'>
            <div className='header mt-3 row'>
                <div className='groom-image col-md-4'>
                    <img src="/images/groom.png" alt="" />
                </div>
                <div className='header-text text-center col-md-4'>
                       <div className="dreams mt-3">
                       <h3>
                        Turning Dreams <br />into Reality.....
                        </h3>
                        <h3>Your Perfect Wedding Awaits...</h3>
                        <span style={{color:"crimson"}}>____________________ <FaHeartPulse/>  ____________________</span><br />
                        <a href="#">
                        <button className='btn btn-danger'>Get started</button>
                        </a>
                       </div>
                       <div className="header-text-image">
                        <img src="/images/images2.png" alt="" />
                       </div>
                                            
                </div>
                <div className='bride-image col-md-4'>
                    <img src="/images/bride.png" alt="" />
                </div>
            </div>
    </div>
  )
}

export default Header
