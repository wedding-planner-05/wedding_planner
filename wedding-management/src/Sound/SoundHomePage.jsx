import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const SoundHomePage = () => {
    const [products,setProducts] = useState([]) ;
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8000/sound/soundInfo/viewAllVendors").then((response)=>{
        setProducts(response.data.data)
        }).catch()
    },[])

    const SoundVendorDetails = (data)=>{
        navigate("/SoundVendorDetails",{state:data})
    }
  return <>
  
  <div className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center">
      {products.map((product, index) => (
        <section onClick={()=>SoundVendorDetails(product)} key={index} className="main-page m-3">
          <div
            key={index}
            className="p-2 row details-block "
          >
            <div className="p-0">
              <img
                className="img-fluid custom-img"
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <div className="p-1 font-size">
              <div className="row">
                <div className="col">
                  <div className="h6" style={{ width: "170%" }}>
                    <strong>{product.name}</strong>
                  </div>
                  <p className="custom-text-size">Photo + Video</p>
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
                <FaRupeeSign /> {product.serviceCharge || "Price not available"}{" "}
                Onwards
              </h6>
            </div>
          </div>
        </section>
      ))}
    </div>
  
  </>
}

export default SoundHomePage
