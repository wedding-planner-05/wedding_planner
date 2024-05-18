// import React, { useRef, useState,CSSProperties } from 'react'
// import LoadingBar from 'react-top-loading-bar'

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };

// const Loader = () => {
//   const ref = useRef(null)

//   let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState('crimson');
  
//     return (
//       <div className="sweet-loading">
//         <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
//         <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />
  
//         <ClipLoader
//           color={color}
//           loading={loading}
//           cssOverride={override}
//           size={150}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//       </div>
//   )
// }

// export default Loader ;

import { Container } from '@mui/material'
import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
const Loader = ({show}) => {
    let [color, setColor] = useState("crimson");

  return show && <>
    <Container className='text-center p-5 mt-5'>
    <ClipLoader
        // color={color}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  </>
}

export default Loader
