import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const DressHomePage = () => {
  
//   const navigate = useNavigate();

//     const PhotoVendorDetails =(product)=> {
//     navigate('/PhotoVendorDetails', {state:product});

//   }
  
const [products, setProducts] = useState([]);
const [inputText, setInputText] = useState("");

const navigate = useNavigate()
const [minValue,setMinValue] = useState(0) ;
const [maxValue,setMaxValue] = useState(1000000) ;
const [isProductAvailable, setProductAvailable] = useState(true); 

const DressVendorDetails = (data)=>{
  console.log('hello world');
  navigate("/DressDetailPage",{state:data})
}

useEffect(()=>{
  axios.get("http://localhost:3000/dress/dress/viewAllVendors").then(res=>{
    console.log(res.data.data);
    setProducts(res.data.data)
    console.log(res)
    }).catch(err=>{
      console.log(err)
    })
},[])
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
      // return priceFilter.price? priceFilter.operation=='<=' ? ele.serviceCharge <= priceFilter.price : ele.serviceCharge >= priceFilter.price  : true
      return ele.serviceCharge >= minValue && ele.serviceCharge <= maxValue 
  }

  return <>
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

    <div className="cards">
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
          <div className="d-flex flex-wrap justify-content-evenly align-items-center">
          {products.filter((ele)=>filterHandeler(ele) && ele.name.toLowerCase().includes(inputText.toLowerCase()) ).map((product, index) => (
            <section onClick={()=>DressVendorDetails(product)} key={index} className="main-page m-3">
              <div style={{cursor:'pointer'}}
                key={index}
                className="p-2 row details-block "
              >
                <div className="p-0">
                  <img style={{width: "100%",height: "200px"}}
                    className=" custom-img"
                    // src={`http://localhost:3002/`+ product.imageUrl}
                    src={
                      product.imageUrl.startsWith("images") ?  `http://localhost:3002/` + product.imageUrl : product.imageUrl
                     } 
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
};

export default DressHomePage;


