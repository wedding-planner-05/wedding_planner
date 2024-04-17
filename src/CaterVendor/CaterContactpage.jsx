import React from 'react'
import { ImGift } from 'react-icons/im';
import { useLocation } from 'react-router-dom'
import "./CaterContactpage.css"
function CaterContactpage() {
    const { state } = useLocation();

    console.log(state, "thiso is state data");
    return (
        <>
           <div className='container-fluid boxWrapper'>
            
           </div>
        </>

    )
}

export default CaterContactpage