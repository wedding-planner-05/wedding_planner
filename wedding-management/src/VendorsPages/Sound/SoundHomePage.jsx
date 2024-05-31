import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaSearch, FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./SoundHomePage.css";
import Filters from "../../Components/Filters";
import Swal from "sweetalert2";
import swal from "sweetalert";

const SoundHomePage = () => {
  const [products, setProducts] = useState([]);
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMoreData, setHasMoreData] = useState(true);
  const [inputText, setInputText] = useState("");

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000000);
  const [isProductAvailable, setProductAvailable] = useState(true);

  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    axios
      .get("http://localhost:3000/sound/sound/rating")
      .then((result) => {
        console.log("review rating", result.data);
        // let ratings = result?.data?.result
        // if(ratings?.length){
        //  let newProducts = []
        //  products.map(ele=>{
        //     let ratObj =  ratings.find((rat)=>rat.vendorId === ele.vendorId)
        //     if(ratObj){
        //       ele.rating =  ratObj.averageRating
        //     }
        //     newProducts.push(ele)
        //   })
        //  console.log("new object:::", newProducts) 
        //  newProducts.length && setProducts(newProducts)
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      setProducts(data);
    } else {
      axios
        .get("http://localhost:3000/sound/sound/viewAllVendors")
        .then((response) => {
          setProducts(response.data.data);
          console.log("data from datavaase", response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  setTimeout(() => {
    setDataSource(dataSource.concat(Array.from({ length: 20 })));
  }, 1000);

  const SoundVendorDetails = (data) => {
    navigate("/SoundVendorDetails", { state: data });
  };

  {
    /*------------ Filter START -------------- */
  }

  const handlerViewall = (min, max) => {
    // console.log("Min ", min);
    // console.log("Max ", max);
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

  {
    /*------------ Filter End -------------- */
  }

  return (
    <>
      <div className="vendors-box  d-flex justify-content-evenly ">
        {/* ---------------- Filter Start -------------------- */}
        <Filters handle={handlerViewall} />
        {/* ---------------- Filter End --------------------*/}
        <div className="cards me-5" style={{ marginLeft: "350px" }}>
          <div style={{ width: "70%" }} className="main">
            {/* <p>Search Vendors</p> */}
            <div className="search mt-5">
              <TextField
                className="mt-2"
                id="outlined-basic"
                onChange={inputHandler}
                variant="standard"
                fullWidth
                label={
                  <>
                    Search <FaSearch size={"18px"} />
                  </>
                }
              />
            </div>
          </div>
          {
            products.filter(filterHandeler).length === 0 &&
            isProductAvailable ? (
              <div
                className=" m-5 d-flex justify-content-center align-items-center"
                style={{
                  height: "450px",
                  width: "auto",
                  boxShadow: "0px 0px 10px grey",
                }}
              >
                <div style={{fontSize:'50px'}}>Sorry, No Sound Vendor Available</div>
              </div>
            ) : (
              // <InfiniteScroll dataLength={dataSource.length} next={moreData} hasMore={hasMoreData} loader={<p>loading...</p>}>
              <div
                style={{ marginTop: "-20px" }}
                className="d-flex flex-wrap justify-content-evenly align-items-center"
              >
                {products
                  .filter(
                    (ele) =>
                      filterHandeler(ele) &&
                      ele.name.toLowerCase().includes(inputText.toLowerCase())
                  )
                  .map((product, index) => (
                    <section
                      onClick={() => SoundVendorDetails(product)}
                      key={index}
                      className="main-page m-3"
                    >
                      <div
                        style={{ cursor: "pointer", height: "100%" }}
                        key={index}
                        className="p-2 row details-block "
                      >
                        <div className="p-0">
                          <img
                            style={{ width: "100%", height: "200px" }}
                            className=" custom-img"
                            src={
                              product.imageUrl.startsWith("images")
                                ? `http://localhost:3006/` + product.imageUrl
                                : product.imageUrl
                            }
                            alt={product.name}
                          />
                        </div>

                        {() => {
                          console.log("IMAGE URL: ", product.imageUrl);
                        }}
                        <div className="p-1 font-size mt-4">
                          <div className="row">
                            <div className="col">
                              <div className="h6" style={{ width: "170%" }}>
                                <strong>{product.name}</strong>
                              </div>
                              {/* <p className="custom-text-size">Photo + Video</p> */}
                            </div>
                            <div className="col text-end">
                              <p className="h6">
                                <FaStar color="crimson" />{" "}
                                {product.rating || "N/A"}
                              </p>
                              <p className="font custom-text-size">
                                <FaMapMarkerAlt color="green" />{" "}
                                {product.address.slice(0, 13) + ".."}
                              </p>
                            </div>
                          </div>
                          <h6 className="mb-2">
                            <FaRupeeSign />{" "}
                            {product.serviceCharge || "Price not available"}{" "}
                            Onwards
                          </h6>
                        </div>
                      </div>
                    </section>
                  ))}
              </div>
            )
            // </InfiniteScroll>
          }
        </div>
      </div>
    </>
  );
};

export default SoundHomePage;
