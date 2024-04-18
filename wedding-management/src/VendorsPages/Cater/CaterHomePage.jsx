import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from 'react-icons/fa'
import { IoLogoAndroid } from 'react-icons/io'

const CaterHomePage = () => {
  const [products,setProducts]=useState([])

  useEffect(()=>{
  axios.get("http://localhost:3000/garden/garden-details/view-all-garden").then(result=>{
      // console.log(result.data.gardens);
      setProducts(result.data.gardens)
  }).catch(err=>{
    console.log(err);
  }) ;    
  },[])
  return (
    <div className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center">
      {products.map((product, index) => (
        <section key={index} className="main-page m-3">
          <div
            key={index}
            className="p-2 row details-block "
          >
            {/* Photographer Image */}
            <div className="p-0">
              <img
                className="img-fluid custom-img"
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
                  <p className="custom-text-size">Photo + Video</p>
                </div>
                <div className="col text-end">
                  <p className="h6">
                    <FaStar color="crimson" /> 
                        {/* {product.rating || "N/A"} */}
                  </p>
                  <p className="font custom-text-size">

                    <FaMapMarkerAlt color="green" /> {product.location}

                    <FaMapMarkerAlt color="green" /> 
                    {/* {product.location.slice(0,14)} */}
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
  
  )
}

export default CaterHomePage
