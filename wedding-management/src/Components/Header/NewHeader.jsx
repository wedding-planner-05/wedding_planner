import React, { useState } from 'react'
import './NewHeader.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const NewHeader = () => {
  const [vendor,setVendor] = useState("") ;
  const [address,setLocation] = useState("") ;
  console.log('Address is ',address);
  const [vendorData,setVendorData]  = useState([]);

  const navigate = useNavigate() ;
  const getStarted= ()=>{
        if(vendor=="" && location == ""){
            toast.error("select location & vendor type")
        }else if(address == ""){
            toast.error("please select location type")
        }else if(vendor == ""){
            toast.error('please select vendor type')
        }
        else{
            axios.get(`http://localhost:3000/${vendor}/${vendor}/viewAllVendors`).then((response)=>{
                console.log('hello');
                console.log(response.data.data)
               
                switch(vendor){
                  case 'sound' : {
                    const filterData = response.data.data?.filter((item)=> item.address.toLowerCase().includes(address.toLowerCase()));
                    setVendorData(filterData)
                    navigate('/SoundHomePage' , {state : filterData})
                  }
                    break ;
                  case 'dress' :  {
                    const filterData = response.data.data?.filter((item)=> item.address.toLowerCase().includes(address.toLowerCase()));
                    setVendorData(filterData)
                    navigate('/DressHomePage' , {state : filterData})
                  }
                    break ;
                  case 'garden'  : {
                    console.log(response.data.data);
                    const filterData = response.data.data?.filter((item)=> item.location.toLowerCase().includes(address.toLowerCase()));
                    setVendorData(filterData)
                    navigate('/GardenHomePage' , {state : filterData}) ;
                  }
                    break ;
                  case 'mehendi' :{
                    const filterData = response.data.data?.filter((item)=> item.address.toLowerCase().includes(address.toLowerCase()));
                    setVendorData(filterData)
                    navigate('/MehendiHomePage' , {state : filterData}) ;
                  }
                  break ;
                  case 'photographer' : {
                    const filterData = response.data.data?.filter((item)=> item.address.toLowerCase().includes(address.toLowerCase()));
                    setVendorData(filterData)
                    navigate('/PhotographerHomePage' , {state : filterData}) ;
                  }
                  break ;
                  case 'cater' : {
                    const filterData = response.data.data?.filter((item)=> item.address.toLowerCase().includes(address.toLowerCase()));
                    setVendorData(filterData)
                    navigate('/GardenHomePage' , {state : filterData}) ;
                  }
                }
            }).catch(err=>{
                console.log(err);  
            })
        }
  }
  return (<>
    <ToastContainer/>
    <div className='header container mt-0 pt-0 h-auto' id='header'>
      <img src="/images/file_2024-05-02_15.20.08.png" className='p-0 m-0' alt="" />
         <div className="search-bar d-flex">
                          <div style={{width:"17vw"}} className='d-flex flex-column'>
                            <select onChange={(e)=>setLocation(e.target.value)} name="pets" id="pet-select">
                                <option value="">Choose Location</option>
                                <option value="Vijay Nagar, Indore">Vijay Nagar, Indore</option>
                                <option value="Bhawarkua, Indore">Bhawarkua, Indore</option>
                                <option value="Rajwada, Indore">Rajwada, Indore</option>
                                <option value="Palasia, Indore">Palasia, Indore</option>
                                <option value="Tilak Nagar, Indore">Tilak Nagar, Indore</option>
                                <option value="Sudama Nagar, Indore">Sudama Nagar, Indore</option>
                                <option value="Pardesipura, Indore">Pardesipura, Indore</option>
                                <option value="Bengali Square, Indore">Bengali Square, Indore</option>
                                <option value="Rau, Indore">Rau, Indore</option>
                                <option value="MR 10 Road, Indore">MR 10 Road, Indore</option>
                                <option value="Mahalaxmi Nagar, Indore">Mahalaxmi Nagar, Indore</option>
                                <option value="Navlakha, Indore">Navlakha, Indore</option>
                                <option value="Annapurna, Indore">Annapurna, Indore</option>
                                <option value="Lokmanya Nagar, Indore">Lokmanya Nagar, Indore</option>
                                <option value="Snehnagar, Indore">Snehnagar, Indore</option>
                                <option value="Scheme No. 54, Indore">Scheme No. 54, Indore</option>
                                <option value="Scheme No. 74, Indore">Scheme No. 74, Indore</option>
                                <option value="Sukhliya, Indore">Sukhliya, Indore</option>
                                <option value="Nipania, Indore">Nipania, Indore</option>
                                <option value="Airport Road, Indore">Airport Road, Indore</option>
                            </select>
                          </div>
                          <div onChange={(e)=>setVendor(e.target.value)} style={{width:"17vw"}} className='d-flex flex-column'>
                            <select name="pets" id="pet-select">
                                <option value="">Choose Vendor</option>
                                <option value="cater">Cater</option>
                                <option value="dress">Dress</option>
                                <option value="garden">Garden</option>
                                <option value="mehendi">Mehendi</option>
                                <option value="photographer">Photographer</option>
                                <option value="sound">Music/Band</option>
                            </select>
                          </div>
                          <button onClick={()=>getStarted()} className='btn text-white'>Get Started</button>
                        </div>
    </div>
    </>
  )
}
export default NewHeader