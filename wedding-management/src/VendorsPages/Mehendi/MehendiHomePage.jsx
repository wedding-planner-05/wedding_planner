// import React, { useEffect, useState } from "react";
// import { FaMapMarkerAlt, FaRupeeSign, FaStar } from "react-icons/fa";
// import axios from "axios";

// const MehendiHomePage = () => { 


  
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     console.log("after");
//     axios
//       .get("http://localhost:3000/mehendi/mehendi/viewAllVendors")
      
//       .then((response) => {
//         console.log(response.data.data);
//         setProducts(response.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return <>
      
//     <div className="container-fluid d-flex flex-wrap justify-content-evenly pt-5 align-items-center">
//       {products.map((product, index) => (
//         <section key={index} className="main-page m-3">
//           <div
//             key={index}
//             className="p-2 row details-block "
//           >
//             <div className="p-0">
//               <img style={{height:'200px'}}
//                 className="custom-img"
//                 src={product.imageUrl}
//                 alt={product.name}
//               />
//             </div>

//             <div className="p-1 font-size">
//               <div className="row">
//                 <div className="col">
//                   <div className="h6" style={{ width: "170%" }}>
//                     <strong>{product.name}</strong>
//                   </div>
//                 </div>
//                 <div className="col text-end">
//                   <p className="h6">
//                     <FaStar color="crimson" /> {product.rating || "N/A"}
//                   </p>
//                   <p className="font custom-text-size">


//                     <FaMapMarkerAlt color="green" /> {product.address.slice(0,14)}

//                   </p>
//                 </div>
//               </div>
//               <h6 className="mb-0">
//                 <FaRupeeSign /> {product.serviceCharge || "Price not available"}{" "}
//                 Onwards
//               </h6>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>

    
//   </>
// };

// export default MehendiHomePage;

import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
// import "./SoundHomePage.css";

const MehendiHomePage = () => {
  
  const [products,setProducts] = useState([]) ;
  const [dataSource,setDataSource] = useState(Array.from({length:20}))
  const [hasMoreData,setHasMoreData] = useState(true)
  const [inputText, setInputText] = useState("");
  
  const [minValue,setMinValue] = useState(0) ;
  const [maxValue,setMaxValue] = useState(1000000) ;
  const [isProductAvailable, setProductAvailable] = useState(true);
  
    const navigate = useNavigate()

    const location = useLocation() ;
    const data = location.state ; 
    const url = ''



    useEffect(()=>{
      if(data){
          setProducts(data);
        }else{ 
            axios.get("http://localhost:3000/mehendi/mehendi/viewAllVendors").then((response)=>{
              setProducts(response.data.data)
              console.log("data from datavaase",response.data.data);
            }).catch(err=>{
              console.log(err);
            })
          }
        },[])
        
        setTimeout(()=>{
          setDataSource(dataSource.concat(Array.from({length:20})))
        },1000)
        const moreData = ()=>{}

   
    
    const MehendiVendorDetails = (data)=>{
      navigate("/MehendiVendorDetails",{state:data})
    }
    
    const handlerViewall = (min, max) => {
      setMinValue(min);
      setMaxValue(max);
      setProductAvailable(true); // Reset product availability flag
    }

    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      console.log(lowerCase);
      setInputText(lowerCase);
    };

    const filterHandeler = (ele)=>{
        return ele.serviceCharge >= minValue && ele.serviceCharge <= maxValue 
    }

  
  return <> 
  <div className='vendors-box mt-5  d-flex justify-content-between'>
    <div className='filter-box'>
    <div className='filter-box-inner d-flex flex-column align-items-center justify-content-center gap-4 '>
      <button onClick={()=>handlerViewall(0,1000000)} className='btn p-0' style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}}><small>view all</small></button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(0,5000)} className='btn p-0'><small>Below 5000</small></button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(5000,20000)} className='btn p-0'><small>5000-20000</small></button>
      <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(20000,200000)} className='btn p-0'><small>Above 20000</small></button>
    </div> 
    </div>

    
   
    <div className='cards'>
    <div style={{width:"70%"}} className="main">
      {/* <p>Search Vendors</p> */}
      <div className="search mt-5">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="standard"
          fullWidth
          label="search"
        />
      </div>
      {/* <List input={inputText} /> */}
    </div>
    {products.filter(filterHandeler).length  === 0 && isProductAvailable ? 
         <h3>No products available in the selected price range</h3> : 
            // <InfiniteScroll dataLength={dataSource.length} next={moreData} hasMore={hasMoreData} loader={<p>loading...</p>}>
          <div style={{marginTop:'-20px'}} className="d-flex flex-wrap justify-content-evenly align-items-center">
          {products.filter((ele)=>filterHandeler(ele) && ele.name.toLowerCase().includes(inputText.toLowerCase()) ).map((product, index) => (
            <section onClick={()=>MehendiVendorDetails(product)} key={index} className="main-page m-3">
              <div style={{cursor:'pointer'}}
                key={index}
                className="p-2 row details-block "
                >
                <div className="p-0">
                  <img style={{width: "100%",height: "200px"}}
                    className=" custom-img"
                    src={product.imageUrl.startsWith('images') ? `http://localhost:3004/`+ product.imageUrl : product.imageUrl} 
                    alt={product.name}

                  />
                </div>

                {  ()=>{console.log("IMAGE URL: ",product.imageUrl)}}
                <div className="p-1 font-size">
                  <div className="row">
                    <div className="col">
                      <div className="h6" style={{ width: "170%" }}>
                        <strong>{product.name}</strong>
                      </div>
                      {/* <p className="custom-text-size">Photo + Video</p> */}
                    </div>
                    <div className="col text-end">
                      <p className="h6">
                        <FaStar color="crimson" /> {product.rating || "N/A"}
                      </p>
                      <p className="font custom-text-size">
                        <FaMapMarkerAlt color="green" /> {product.address.slice(0,13) + ".."}
                      </p>
                    </div>
                  </div>
                  <h6 className="mb-0">
                    <FaRupeeSign /> {product.serviceCharge || "Price not available"}{" "}
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
</div>
      
  
  </>
}

export default MehendiHomePage

