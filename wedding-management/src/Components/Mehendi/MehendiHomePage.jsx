import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from "react-icons/fa";
import axios from "axios";
<<<<<<< HEAD

const MehendiHomePage = () => {
=======
// import './Mehendi.css';


const MehendiHomePage = () => { 
>>>>>>> 200321ccc5a57fb194b1f477a0eeb7917d36f8ae

  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("after");
    axios
      .get("http://localhost:3000/vendorfunc/viewalldresses")
      
      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>
      
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
                  <p className="custom-text-size">Photo + Video</p>
                </div>
                <div className="col text-end">
                  <p className="h6">
                    <FaStar color="crimson" /> {product.rating || "N/A"}
                  </p>
                  <p className="font custom-text-size">
<<<<<<< HEAD
                    <FaMapMarkerAlt color="green" /> {product.address}
=======
                    <FaMapMarkerAlt color="green" /> {product.address.slice(0,14)}
>>>>>>> 200321ccc5a57fb194b1f477a0eeb7917d36f8ae
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
};

export default MehendiHomePage;