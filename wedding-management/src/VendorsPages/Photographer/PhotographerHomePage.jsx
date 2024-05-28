import React, { useEffect, useState } from "react";
import "./Photo.css";
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { RiH3 } from "react-icons/ri";
import { TextField } from "@mui/material";

const PhotographerHomePage = () => {

  const navigate = useNavigate();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000000);
  const [isProductAvailable, setProductAvailable] = useState(true);
  const [inputText, setInputText] = useState("");


  const PhotoVendorDetails = (product) => {
    navigate('/PhotoVendorDetails', { state: product });
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/photographer/photographer/viewAllVendors/")
      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlerViewall = (min, max) => {
    setMinValue(min);
    setMaxValue(max);
    setProductAvailable(true); // Reset product availability flag
  }

  const filterHandler = (product) => {
    return product.price >= minValue && product.price <= maxValue;
  }


  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
  };
  const message = "Hello, I'm interested in your services.And I want to Book a Garden"; 

  return (
    <>
      <div className='vendors-box d-flex justify-content-between'>
        <div className='filter-box'>
          <div className='filter-box-inner d-flex flex-column align-items-center justify-content-center gap-4 '>
            <button onClick={() => handlerViewall(0, 1000000)} className='btn' style={{ height: '40px', width: "110px", border: '1px solid crimson' }}>view all</button>
            <button style={{ height: '40px', width: "110px", border: '1px solid crimson' }} onClick={() => handlerViewall(0, 5000)} className='btn p-0'> <small>{'<='}0-5000</small></button>
            <button style={{ height: '40px', width: "110px", border: '1px solid crimson' }} onClick={() => handlerViewall(5000, 10000)} className='btn p-0'>  <small>5000-10000 </small></button>
            <button style={{ height: '40px', width: "110px", border: '1px solid crimson' }} onClick={() => handlerViewall(10000, 15000)} className='btn p-0'> <small>10000-15000</small></button>
            <button style={{ height: '40px', width: "110px", border: '1px solid crimson' }} onClick={() => handlerViewall(15000, 20000)} className='btn p-0'> <small>15000-20000</small></button>
            <button style={{ height: '40px', width: "110px", border: '1px solid crimson' }} onClick={() => handlerViewall(20000, 25000)} className='btn p-0'> <small>20000-25000</small></button>
            <button style={{ height: '40px', width: "110px", border: '1px solid crimson' }} onClick={() => handlerViewall(25000, 30000)} className='btn p-0'> <small>25000-30000</small></button>
            <button style={{ height: '40px', width: "110px", border: '1px solid crimson' }} onClick={() => handlerViewall(30000, 100000)} className='btn p-0'><small>30000      </small></button>

          </div>
        </div>

      <div className="cards">
      <div style={{width:"70%"}} className="main mt-5">
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
      </div>


        {products.filter(filterHandler).length === 0 && isProductAvailable ? 
          <h3>No products available in the selected price range</h3> : 
          <div style={{marginTop:'-50px'}} className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center pt-5">
            {products.filter((ele)=>filterHandler(ele) && ele.title.toLowerCase().includes(inputText.toLowerCase()) ) .map((product, index) => (
              <section onClick={() => PhotoVendorDetails(product)} key={index} className="main-page m-3">
                <div style={{cursor:'pointer'}} key={index} className="p-2 row details-block ">
                  <div className="p-0">
                    <img className="custom-img" style={{ width: "100%", height: "200px" }} 
                    // src={product.imageUrl}
                    src={
                      product.imageUrl.startsWith("images") ?  `http://localhost:3005/` + product.imageUrl : product.imageUrl
                     } 
                    alt={product.title} />
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
                          <FaMapMarkerAlt color="green" /> {product.address.slice(0, 14) + ".."}
                        </p>
                      </div>
                    </div>
                    <h6 className="mb-0">
                      <FaRupeeSign /> {product.price || "Price not available"} Onwards
                    </h6>
                  </div>
                </div>
              </section>
            ))}
          </div>
        }
      </div>
      </div>
    </>
  );
};

export default PhotographerHomePage;
