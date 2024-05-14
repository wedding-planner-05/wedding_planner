import React, { useEffect, useState } from "react";
import "./Photo.css";
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PhotographerHomePage = () => {
  
  const navigate = useNavigate();

    const PhotoVendorDetails =(product)=> {
    navigate('/PhotoVendorDetails', {state:product});

  }
  
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState({operation :"",price:0});


  useEffect(() => {
    // console.log("after");
    axios.get("http://localhost:3000/photographer/photographer/viewAllVendors/")
      .then((response) => {
        // console.log(response.data.Photographers);
        setProducts(response.data.Photographers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
     const filterHandeler = (ele)=>{
          return priceFilter.price ? priceFilter.operation=='<=' ? ele.price <= priceFilter.price : ele.price >= priceFilter.price  : true
      }

  return <>

    <div className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center">
    <div className='container filter-box d-flex align-items-center justify-content-center gap-4 mt-4 mb-4'>
      <div>select by price {"=>"}</div>
      <button onClick={()=>setPriceFilter({operation :"",price:0})} className='btn' style={{height:'40px', border:'1px solid crimson'}}>view all</button>
      <button style={{height:'40px', border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:5000})} className='btn'>{'<='}5000</button>
      <button style={{height:'40px', border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:10000})} className='btn'>{'<='}10000</button>
      <button style={{height:'40px', border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"> =",price:10000})} className='btn'>{'>='}10000</button>
      <button style={{height:'40px', border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:20000})} className='btn'>{'<='}20000</button>
      <button style={{height:'40px', border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:30000})} className='btn'>{'<='}30000</button>
      <button style={{height:'40px', border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:35000})} className='btn'>{'<='}35000</button>
      <button style={{height:'40px', border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"> =",price:35000})} className='btn'>{'>='}35000</button>
    </div>
      {products.filter((ele)=>filterHandeler(ele)).map((product, index) => (
        <section onClick={()=>PhotoVendorDetails(product)} key={index} className="main-page m-3">
          <div
            key={index}
            className="p-2 row details-block "
          >
            {/* Photographer Image */}
            <div className="p-0">
              <img
                className=" custom-img"
                style={{width:"100%",height: "200px"}}
                src={product.imageUrl}
                alt={product.title}
              />
            </div>
            {/* Photographer Details */}
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
                    <FaMapMarkerAlt color="green" /> {product.address.slice(0,14) + ".."}
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
  </>
};

export default PhotographerHomePage;


