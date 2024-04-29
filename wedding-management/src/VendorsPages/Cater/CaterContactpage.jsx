import React from 'react'
import { useLocation } from 'react-router-dom'
import "./CaterContactpage.css"
import { ImGift } from 'react-icons/im';
function CaterContactpage() {
    const { state } = useLocation();

    console.log(state, "this is state data");
    return (
        <>
            <div className='container-fluid boxWrapper'>
                <div>
                    <img src={state.imageUrl} alt="" />
                </div>
            </div>
        </>

    )
}

export default CaterContactpage;