// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import "./CaterPage.css"
// import { FaRupeeSign } from "react-icons/fa";
// // import CaterContactpage from './CaterContactpage';
// import { useNavigate } from 'react-router-dom';
// function CaterPage() {
//   const navigate = useNavigate();
//     const [caterdata, setCaterdata] = useState([]);
//     useEffect(() => {

//         axios.get("http://localhost:3000/cater/cater/viewAllVendors").then(result => {
//           console.log('hello java');
//           console.log(result.data.data);
//             setCaterdata(result.data.data);
//         }
//         ).catch(err => {
//             console.log(err);
//         })
//     }, [])

//     function dataCater(product){
//        navigate("/CaterContactpage",{state:product})
//     }
//     return <>  
//     <div className="container-fluid d-flex flex-wrap pt-5 justify-content-evenly align-items-center">
//       {caterdata.map((product, index) => (
//         <section key={index} className="main-page m-3" onClick={()=>dataCater(product)}>
//           <div
//             key={index}
//             className="p-2 row details-block "
//           >
//             {/* Photographer Image */}
//             <div className="p-0">
//               <img
//                 className="img-fluid custom-img"
//                 src= {product.imageUrl}
//                 alt={product.name}
//               />
//             </div>
//             {/* Photographer Details */}
//             <div className="p-1 font-size">
//               <div className="row">
//                 <div className="col">
//                   <div className="h6" style={{ width: "170%" }}>
//                     <strong>{product.name}</strong>
//                   </div>
//                   {/* <p className="custom-text-size">Photo + Video</p> */}
//                 </div>
//                 <div className="col text-end">
//                   <p className="h6">
//                     {product.rating || "N/A"}
//                   </p>
//                   <p className="font custom-text-size">
//                      {product.address}
//                   </p>
//                 </div>
//               </div>
//               <h6 className="mb-2"><FaRupeeSign />
//                 {product.servicecharge}
//                 <span style={{marginLeft:"1rem"}}>Onwards</span>
//               </h6>
//               <h5>{product.description}</h5>
//           {/* <button>contact us</button> */}
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   </>
// };


// export default CaterPage
// import axios from 'axios';
// import React, {useEffect, useState } from 'react'
// import { FaMapMarkerAlt, FaRupeeSign, FaStar } from 'react-icons/fa'
// import { useLocation, useNavigate } from 'react-router-dom';
// import "./SoundHomePage.css"
// import Navbar from '../../Components/Navbar/Navbar';

import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./CaterPage.css"
import { FaRupeeSign } from "react-icons/fa";
// import CaterContactpage from './CaterContactpage';
import { useLocation, useNavigate } from 'react-router-dom';

const CaterPage = () => {
    const [products,setProducts] = useState([]) ;
    
    
    const [minValue,setMinValue] = useState(0) ;
    const [maxValue,setMaxValue] = useState(1000000) ;
    const [isProductAvailable, setProductAvailable] = useState(true);


    const navigate = useNavigate()

    const location = useLocation() ;
    const data = location.state ; 

    useEffect(()=>{
    if(data){
      setProducts(data);
    }else{ 
        axios.get("http://localhost:3001/cater/cater/viewAllVendors").then((response)=>{
          console.log(response);
          setProducts(response.data.data)
          console.log("data from datavaase",response.data.data);
        }).catch(err=>{
          console.log(err);
        })
      }
    },[])
    
    
    const SoundVendorDetails = (data)=>{
      navigate("/CaterContactpage",{state:data})
    }
    const handlerViewall = (min, max) => {
      setMinValue(min);
      setMaxValue(max);
      setProductAvailable(true); // Reset product availability flag
      console.log(min , max);
    }

      const filterHandeler = (ele)=>{
        console.log('elemet is ',ele);
              console.log(ele.servicecharge >= minValue && ele.servicecharge <= maxValue);
          return ele.servicecharge >= minValue && ele.servicecharge <= maxValue 
      }


  
  return <> 
  {/* <Navbar/> */}
  <div className='vendors-box mt-5  d-flex justify-content-between'>
    <div className='filter-box'>
    <div className='filter-box-inner d-flex flex-column align-items-center justify-content-center gap-4 '>
      {/* <button onClick={()=>setPriceFilter({operation :"",price:0})} className='btn' style={{height:'40px',width:"110px" , border:'1px solid crimson'}}>view all</button> */}
      <button onClick={()=>handlerViewall(0,1000000)} className='btn' style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}}>view all</button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(0,5000)} className='btn'>0-5000</button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(5000,10000)} className='btn'>5000-10000</button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(10000,15000)} className='btn'>10000-15000</button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(15000,20000)} className='btn'>15000-20000</button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(20000,25000)} className='btn'>20000-25000</button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(25000,30000)} className='btn'>25000-30000</button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(30000,100000)} className='btn'>30000</button>
    </div> 
    </div>

    {products.filter(filterHandeler).length === 0 && isProductAvailable ? 
          <h3>No products available in the selected price range</h3> : 
          <div className="d-flex cards flex-wrap justify-content-evenly align-items-center">
          {products.filter((ele)=>filterHandeler(ele)).map((product, index) => (
            <section onClick={()=>SoundVendorDetails(product)} key={index} className="main-page m-3">
              <div style={{cursor:'pointer'}}
                key={index}
                className="p-2 row details-block "
              >
                <div className="p-0">
                  <img style={{width: "100%",height: "200px"}}
                    className=" custom-img"
                    src={`http://localhost:3001/`+product.imageUrl}
                    alt={product.name}
                  />
                </div>
                <div className="p-1 font-size">
                  <div className="row">
                    <div className="col">
                      <div className="h6" style={{ width: "170%" }}>
                        <strong>{product.name}</strong>
                      </div>
                      {/* <p className="custom-text-size">Photo + Video</p> */}
                    </div>
                    {/* <div className="col text-end">
                      <p className="h6">
                        <FaStar color="crimson" /> {product.rating || "N/A"}
                      </p>
                      <p className="font custom-text-size">
                        <FaMapMarkerAlt color="green" /> {product.address.slice(0,13) + ".."}
                      </p>
                    </div> */}
                  </div>
                  <h6 className="mb-0">
                    <FaRupeeSign /> {product.servicecharge || "Price not available"}{" "}
                    Onwards
                  </h6>
                </div>
              </div>
            </section>
          ))
          }
    </div>
  }      


   
    </div>
      
  
  </>
}

export default CaterPage

