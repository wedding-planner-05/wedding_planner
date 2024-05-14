import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import "./SoundHomePage.css"

const SoundHomePage = () => {
    const [products,setProducts] = useState([]) ;
    const [priceFilter, setPriceFilter] = useState({operation :"",price:0});
    
    const navigate = useNavigate()

    const location = useLocation() ;
    const data = location.state ; 

    useEffect(()=>{
    if(data){
      setProducts(data);
    }else{ 
        axios.get("http://localhost:3000/sound/sound/viewAllVendors").then((response)=>{
          setProducts(response.data.data)
        }).catch(err=>{
          console.log(err);
        })
      }
    },[])
      
      const SoundVendorDetails = (data)=>{
        navigate("/SoundVendorDetails",{state:data})
      }

      const filterHandeler = (ele)=>{
          return priceFilter.price? priceFilter.operation=='<=' ? ele.serviceCharge <= priceFilter.price : ele.serviceCharge >= priceFilter.price  : true
      }


  return <>
  <div className=' vendors-box d-flex justify-content-between'>
    <div className='filter-box'>
    <div className='filter-box-inner d-flex flex-column align-items-center justify-content-center gap-4 '>
      <button onClick={()=>setPriceFilter({operation :"",price:0})} className='btn' style={{height:'40px',width:"110px" , border:'1px solid crimson'}}>view all</button>
      <button style={{height:'40px',width:"110px" , border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:5000})} className='btn'>{'<='}5000</button>
      <button style={{height:'40px',width:"110px" , border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:10000})} className='btn'>{'<='}10000</button>
      <button style={{height:'40px',width:"110px" , border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"> =",price:10000})} className='btn'>{'>='}10000</button>
      <button style={{height:'40px',width:"110px" , border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:20000})} className='btn'>{'<='}20000</button>
      <button style={{height:'40px',width:"110px" , border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:30000})} className='btn'>{'<='}30000</button>
      <button style={{height:'40px',width:"110px" , border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"<=",price:35000})} className='btn'>{'<='}35000</button>
      <button style={{height:'40px',width:"110px" , border:'1px solid crimson'}} onClick={()=>setPriceFilter({operation :"> =",price:35000})} className='btn'>{'>='}35000</button>
    </div> 
    </div>
    <div className="d-flex cards flex-wrap justify-content-evenly align-items-center">
      {products.filter((ele)=>filterHandeler(ele)).map((product, index) => (
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
      ))}
    </div>
    </div>
      
  
  </>
}

export default SoundHomePage
