import {
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "./GardenDetail.css";
import { Accordion } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';

const GardenHomePage = () => {
  const [products, setProducts] = useState([]);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000000);
  const [isProductAvailable, setProductAvailable] = useState(true);
  const [inputText, setInputText] = useState("");

  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (data) {
      setProducts(data);
    } else {
      axios
        .get("http://localhost:3000/garden/garden/viewAllVendors")
        .then((response) => {
          // console.log(response.data.data);
          setProducts(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  console.log("Image Url: ", products);

  const GardenVendorDetails = (data) => {
    navigate("/GardenVendorDetails", { state: data });
  };

{/*------------ Filter START -------------- */}

  const handlerViewall = (min, max) => {
    console.log("Min ", min);
    console.log("Max ", max);
    setMinValue(min);
    setMaxValue(max);
    setProductAvailable(true); // Reset product availability flag
  };

  const filterHandeler = (ele) => {
    return ele.price >= minValue && ele.price <= maxValue;
  };

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
  };

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(9999);

  const handleMinChange = (event) => {
    setMin(parseInt(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMax(parseInt(event.target.value));
  };

{/*------------ Filter End -------------- */}

  return (
    <>
      <div className="vendors-box mt-5  d-flex justify-content-between">
        <div className="filter-box">
          <div className="filter-box-inner d-flex flex-column align-items-center justify-content-center gap-4 ">

            {/* -------------- Filter Start ------------------ */}
            <Accordion
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
              }}
              defaultExpanded
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  className="ms-5 text-primary"
                  style={{ fontSize: "17px", fontWeight: "600" }}
                >
                  Price range
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="ms-2">
                {/* <Box style={{backgroundColor:'white'}}>
                        <Slider 
                            getAriaLabel={() => 'Temperature range'}
                            value={[min, max]}
                            onChange={()=>handlerViewall(0,10000)}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={0}
                            max={9999}
                        />
                    </Box> */}
                <div className="container d-flex flex-column justify-content-center align-items-center">
                  <div className="row d-flex">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <label>Min</label>
                      <input
                        className="w-100"
                        style={{
                          height: "30px",
                          paddingLeft: "10px",
                          border: "2px solid #0D6EFD",
                          outline: "none",
                          borderRadius: "5px",
                        }}
                        type="number"
                        value={min}
                        onChange={handleMinChange}
                      />
                    </div>
                    <div className=" d-flex flex-column align-items-center mt-3">
                      <label>Max</label>
                      <input
                        className="w-100"
                        style={{
                          height: "30px",
                          paddingLeft: "10px",
                          border: "2px solid #0D6EFD",
                          outline: "none",
                          borderRadius: "5px",
                        }}
                        type="number"
                        value={max}
                        onChange={handleMaxChange}
                      />
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center">
                    <button
                      className="w-50 mt-3 btn btn-primary"
                      onClick={() => handlerViewall(min, max)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            {/*  -------------- fILTER  End ---------------------*/}

          </div>
        </div>

        <div className="cards">
          <div style={{ width: "70%" }} className="main">
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
            {/* <List input={inputText} /> */}
          </div>

          {products.filter(filterHandeler).length === 0 &&
          isProductAvailable ? (
            <h3 className="text-center"> No products available</h3>
          ) : (
            <div className="d-flex  flex-wrap justify-content-evenly align-items-center">
              {products
                .filter(
                  (ele) =>
                    filterHandeler(ele) &&
                    ele.title.toLowerCase().includes(inputText.toLowerCase())
                )
                .sort((a, b) => a.price - b.price)
                .map((product, index) => (
                  <section
                    onClick={() => GardenVendorDetails(product)}
                    key={index}
                    className="main-page m-3"
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      key={index}
                      className="p-2 row details-block "
                    >
                      <div className="p-0">
                        <img
                          style={{ width: "100%", height: "200px" }}
                          className=" custom-img"
                          // src={
                          //   product.imageUrl
                          //     ? product.imageUrl
                          //     : `http://localhost:3000/` +
                          //       product.imageUrl +
                          //       ".png"
                          // }
                          src={
                            product.imageUrl.startsWith("images")
                              ? `http://localhost:3003/` + product.imageUrl
                              : product.imageUrl
                          }
                          // src={`http://localhost:3003/`+ product.imageUrl}
                          alt={`Image Not Found`}
                        />
                      </div>
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
                              <FaStar color="crimson" />{" "}
                              {product.rating || "N/A"}
                            </p>
                            <p className="font custom-text-size">
                              <FaMapMarkerAlt color="green" />{" "}
                              {product.location}
                            </p>
                          </div>
                        </div>
                        <h6 className="mb-0">
                          <FaRupeeSign />{" "}
                          {product.price || "Price not available"} Onwards
                        </h6>
                      </div>
                    </div>
                  </section>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default GardenHomePage;
