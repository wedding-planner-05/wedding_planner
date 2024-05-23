import { TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import './GardenDetail.css'
// import { useNavigate } from 'react-router-dom';

const GardenHomePage = () => {
  const [products,setProducts] = useState([]) ;
  
  const [minValue,setMinValue] = useState(0) ;
  const [maxValue,setMaxValue] = useState(1000000) ;
  const [isProductAvailable, setProductAvailable] = useState(true);
  const [inputText, setInputText] = useState("");

  const navigate = useNavigate()

  useEffect(()=>{
      axios.get("http://localhost:3000/garden/garden/viewAllVendors").then((response)=>{
      console.log(response.data.data)
      setProducts(response.data.data)
      }).catch(err=>{
        console.log(err);
      })
  },[])

const GardenVendorDetails = (data)=>{
  navigate("/GardenVendorDetails",{state:data})
}
const handlerViewall = (min, max) => {
  setMinValue(min);
  setMaxValue(max);
  setProductAvailable(true); // Reset product availability flag
}

  const filterHandeler = (ele)=>{
      // return priceFilter.price? priceFilter.operation=='<=' ? ele.serviceCharge <= priceFilter.price : ele.serviceCharge >= priceFilter.price  : true
      return ele.price >= minValue && ele.price <= maxValue 
  }

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
  };


return  <> 
<div className='vendors-box mt-5  d-flex justify-content-between'>
  <div className='filter-box'>
  <div className='filter-box-inner d-flex flex-column align-items-center justify-content-center gap-4 '>
    {/* <button onClick={()=>setPriceFilter({operation :"",price:0})} className='btn' style={{height:'40px',width:"110px" , border:'1px solid crimson'}}>view all</button> */}
    <button onClick={()=>handlerViewall(0,1000000)} className='btn' style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}}>view all</button>
    <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(0,300000)} className='btn'>Below 300000</button>
    <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(300000,500000)} className='btn'>30000-500000</button>
    <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(500000,700000)} className='btn'>500000-700000</button>
    {/* <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(15000,20000)} className='btn'>15000-20000</button> */}
    {/* <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(20000,25000)} className='btn'>20000-25000</button> */}
    {/* <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(25000,30000)} className='btn'>25000-30000</button> */}
    <button style={{height:'40px',width:"150px" ,color:'black',borderRadius:'20px',backgroundColor:'white', border:'3px solid crimson'}} onClick={()=>handlerViewall(700000,2000000)} className='btn'>Above 700000</button>
  </div> 
  </div>

  <div className ='cards'>
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
  {products.filter(filterHandeler).length === 0 && isProductAvailable ? 
        <h3>No products available in the selected price range</h3> : 
        <div className="d-flex  flex-wrap justify-content-evenly align-items-center">
        {products.filter((ele)=>filterHandeler(ele) && ele.title.toLowerCase().includes(inputText.toLowerCase()) ).map((product, index) => (
          <section onClick={()=>GardenVendorDetails(product)} key={index} className="main-page m-3">
            <div style={{cursor:'pointer'}}
              key={index}
              className="p-2 row details-block "
            >
              <div className="p-0">
                <img style={{width: "100%",height: "200px"}}
                  className=" custom-img"
                  src={ product.imageUrl}
                  // src={`http://localhost:3003/`+ product.imageUrl}
                  alt={product.title}
                />
              </div>
              <div className="p-1 font-size">
                <div className="row">
                  <div className="col">
                    <div className="h6" style={{ width: "170%" }}>
                      <strong>{product.title}</strong>
                    </div>
                    {/* <p className="custom-text-size">Photo + Video</p> */}
                  </div>
                  <div className="col text-end">
                    <p className="h6">
                      <FaStar color="crimson" /> {product.rating || "N/A"}
                    </p>
                    <p className="font custom-text-size">
                      <FaMapMarkerAlt color="green" /> {product.location}
                    </p>
                  </div>
                </div>
                <h6 className="mb-0">
                  <FaRupeeSign /> {product.price || "Price not available"}{" "}
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
export default GardenHomePage
 //.slice(0,13) + ".."
{/* <>
    <div className="container-fluid pt-5 d-flex flex-wrap justify-content-evenly align-items-center">
      {products.map((product, index) => (
        <section key={index} className="main-page m-3">
          <div
            key={index}
            className="p-2 row details-block "
          >
            <div className="p-0">
              <img
                className="img-fluid custom-img"
                src={product.imageUrl}
                alt={product.title}
              />
            </div>
            <div className="p-1 font-size">
              <div className="row">
                <div className="col">
                  <div className="h6" style={{ width: "170%" }}>
                    <strong>{product.title}</strong>
                  </div>
                </div>
                <div className="col text-end">
                  <p className="h6">
                    <FaStar color="crimson" /> {product.rating || "N/A"}
                  </p>
                  <p className="font custom-text-size">


                    <FaMapMarkerAlt color="green" /> 

                  </p>
                </div>
              </div>
              <h6 className="mb-0">
                <FaRupeeSign /> {product.price || "Price not available"}{" "}
                Onwards
              </h6>
            </div>
          </div>
        </section>
      ))}
    </div>


</> */}
