import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./CaterPage.css"
// import CaterContactpage from './CaterContactpage';
import { useNavigate } from 'react-router-dom';
function CaterPage() {
  const navigate = useNavigate();
    const [caterdata, setCaterdata] = useState([]);
    useEffect(() => {

        axios.get("http://localhost:3000/cater/cater/viewAllVendors").then(result => {
          console.log('hello java');
          console.log(result.data.data);
            setCaterdata(result.data.data);
        }
        ).catch(err => {
            console.log(err);
        })
    }, [])

    function dataCater(product){
       navigate("/CaterContactpage",{state:product})
    }
    return <>  
    <div className="container-fluid d-flex flex-wrap pt-5 justify-content-evenly align-items-center">
      {caterdata.map((product, index) => (
        <section key={index} className="main-page m-3" onClick={()=>dataCater(product)}>
          <div
            key={index}
            className="p-2 row details-block "
          >
            {/* Photographer Image */}
            <div className="p-0">
              <img
                className="img-fluid custom-img"
                src= {product.imageUrl}
                alt={product.name}
              />
            </div>
            {/* Photographer Details */}
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
                    {product.rating || "N/A"}
                  </p>
                  <p className="font custom-text-size">
                     {product.address}
                  </p>
                </div>
              </div>
              <h6 className="mb-0">
                {product.serviceCharge}
                Onwards
              </h6>
              <h5>{product.description}</h5>
          {/* <button>contact us</button> */}
            </div>
          </div>
        </section>
      ))}
    </div>
  </>
};


export default CaterPage
