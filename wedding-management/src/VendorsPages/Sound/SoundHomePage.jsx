import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';


const SoundHomePage = () => {
    const [products,setProducts] = useState([]) ;
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get("http://localhost:3000/sound/soundInfo/viewAllVendors").then((response)=>{
        setProducts(response.data.data)
        
        }).catch(err=>{
          console.log(err);
        })
    },[])

    const SoundVendorDetails = (data)=>{
        navigate("/SoundVendorDetails",{state:data})
    }

  return <>
  
    {/* <SoundData.Provider value={products}> */}
<Navbar/>
    <div className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center">
      {products.map((product, index) => (
        <section onClick={()=>SoundVendorDetails(product)} key={index} className="main-page m-3">
          <div
            key={index}
            className="p-2 row details-block "
          >
            <div className="p-0">
              <img style={{width: "100%",height: "200px"}}
                className=" custom-img"
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
                <FaRupeeSign /> {product.serviceCharge || "Price not available"}{" "}
                Onwards
              </h6>
            </div>
          </div>
        </section>
      ))}
    </div>

    {/* </SoundData.Provider> */}
  
  </>
}

export default SoundHomePage
