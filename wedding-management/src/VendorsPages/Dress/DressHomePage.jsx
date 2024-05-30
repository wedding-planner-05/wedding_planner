import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from "react-icons/fa";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AccordionDetails, AccordionSummary, TextField, Typography } from "@mui/material";
import { Accordion } from "react-bootstrap";

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

const location = useLocation() ;
const data = location.state ; 

useEffect(()=>{
  if(data){
    setProducts(data)
  }else{
    axios.get("http://localhost:3000/dress/dress/viewAllVendors").then(res=>{
      console.log(res.data.data);
      setProducts(res.data.data)
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
},[]);

// const handlerViewall = (min, max) => {
//   setMinValue(min);
//   setMaxValue(max);
//   setProductAvailable(true); // Reset product availability flag
// }
// let inputHandler = (e) => {
//   var lowerCase = e.target.value.toLowerCase();
//   console.log(lowerCase);
//   setInputText(lowerCase);
// };

//   const filterHandeler = (ele)=>{
//       return ele.serviceCharge >= minValue && ele.serviceCharge <= maxValue 
//   }

  {/*------------ Filter START -------------- */}
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300000);
  const handlerViewall = (min, max) => {
    console.log("Min ", min);
    console.log("Max ", max);
    setMinValue(min);
    setMaxValue(max);
    setProductAvailable(true); // Reset product availability flag
  };

  const filterHandeler = (ele) => {
    return ele.serviceCharge >= minValue && ele.serviceCharge <= maxValue;
  };

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
  };

  const handleMinChange = (event) => {
    setMin(parseInt(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMax(parseInt(event.target.value));
  };

{/*------------ Filter End -------------- */}
  return <>





  <div className='vendors-box mt-5  d-flex justify-content-between'>
    <div className='filter-box'>
    <div className='filter-box-inner d-flex flex-column align-items-center justify-content-center gap-4 '>
      
      
            {/* -------------- Filter Start ------------------ */}
            <Accordion
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
              }}
              defaultExpanded
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  className="ms-5 text-primary"
                  style={{ fontSize: "17px", fontWeight: "600" }}
                >
                  Price range
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="ms-2">
                {/* <Box style={{backgroundColor:'white'}}>
                        <Slider 
                            getAriaLabel={() => 'Temperature range'}
                            value={[min, max]}
                            onChange={()=>handlerViewall(0,10000)}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={0}
                            max={9999}
                        />
                    </Box> */}
                <div className="container d-flex flex-column justify-content-center align-items-center">
                  <div className="row d-flex">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <label>Min</label>
                      <input
                        className="w-100"
                        style={{
                          height: "30px",
                          paddingLeft: "10px",
                          border: "2px solid #0D6EFD",
                          outline: "none",
                          borderRadius: "5px",
                        }}
                        type="number"
                        value={min}
                        onChange={handleMinChange}
                      />
                    </div>
                    <div className=" d-flex flex-column align-items-center mt-3">
                      <label>Max</label>
                      <input
                        className="w-100"
                        style={{
                          height: "30px",
                          paddingLeft: "10px",
                          border: "2px solid #0D6EFD",
                          outline: "none",
                          borderRadius: "5px",
                        }}
                        type="number"
                        value={max}
                        onChange={handleMaxChange}
                      />
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center">
                    <button
                      className="w-50 mt-3 btn btn-primary"
                      onClick={() => handlerViewall(min, max)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            {/*  -------------- fILTER  End ---------------------*/}
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
          {products.filter((ele)=>filterHandeler(ele) && ele.name.toLowerCase().includes(inputText.toLowerCase()) ).sort((a,b)=>a.serviceCharge-b.serviceCharge).map((product, index) => (
            <section onClick={()=>DressVendorDetails(product)} key={index} className="main-page m-3">
              <div style={{cursor:'pointer'}}
                key={index}
                className="p-2 row details-block "
              >
                <div className="p-0">
                  <img style={{width: "100%",height: "200px"}}
                    className=" custom-img"
                    // src={`http://localhost:3002/`+ product.imageUrl}
                    src={product.imageUrl.startsWith("images") ?  `http://localhost:3002/` + product.imageUrl : product.imageUrl}
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


