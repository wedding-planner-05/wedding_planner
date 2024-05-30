import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ImStarFull } from "react-icons/im";

const Filters = () => {
  const [value, setValue] = useState([20, 40]);
  const [min, setMinValue] = useState(0);
  const [max, setMaxValue] = useState(999999);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxClick = (rating) => {
    if (selectedRating === rating) {
      setSelectedRating(null); // Uncheck the checkbox if it's already selected
    } else {
      setSelectedRating(rating);
      // getproductbyrating(rating);
    }
  };

  const handlerViewall = (min, max) => {
    console.log("Min Value in Filter :  ", min);
    console.log("Max Value in Filter : ", max);
    setMinValue(min);
    setMaxValue(max);
    // setProductAvailable(true); // Reset product availability flag
  };

  return (
    <>
      <div
        className="me-0 fixed-top"
        style={{ marginTop: "150px", width: "20%" }}
      >
        <Accordion
          style={{
            width: "100%",
            backgroundColor: "",
            boxShadow: "none",
            border: "none",
          }}
          defaultExpanded
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              className="ms-5 "
              style={{ fontSize: "17px", fontWeight: "600" }}
            >
              Price range
            </Typography>
          </AccordionSummary>

          <AccordionDetails className="ms-2">
            <Box className="ms-5" sx={{ width: 200 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => `${value}°C`}
              />
            </Box>
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <div className="row d-flex">
                <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
                  <label>Min</label>
                  <input
                    className="w-75"
                    style={{
                      height: "30px",
                      paddingLeft: "10px",
                      border: "2px solid black",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                    type="number"
                    min={0}
                    value={min}
                    onChange={(e) => setMinValue(e.target.value)}
                  />
                </div>
                <div className="col-sm-6 d-flex flex-column align-items-center">
                  <label>Max</label>
                  <input
                    className="w-75"
                    style={{
                      height: "30px",
                      paddingLeft: "10px",
                      border: "2px solid black",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                    type="number"
                    min={999999}
                    value={max}
                    onChange={(e) => setMaxValue(e.target.value)}
                  />
                </div>
                <div className="w-100 d-flex justify-content-center mt-3">
                  <button
                    className="w-75 mt-3 btn btn-primary"
                    onClick={() => {
                      handlerViewall(0, 15000);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ width: '100%', backgroundColor: "", boxShadow: "none", border: "none" }} defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
        <Typography className="ms-5 " style={{ fontSize: "17px", fontWeight: "600" }}>
        Rating  
      </Typography>
    </AccordionSummary>

     
<AccordionDetails className="ms-5">
      <div className="form-check">
        <input
          className="form-check-input"
          onClick={() => handleCheckboxClick(5)}
          type="checkbox"
          checked={selectedRating === 5}
        />
        <label className="form-check-label">
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
        </label>
      </div>
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          onClick={() => handleCheckboxClick(4)}
          type="checkbox"
          checked={selectedRating === 4}
        />
        <label className="form-check-label">
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-secondary" />
        </label>
      </div>
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          onClick={() => handleCheckboxClick(3)}
          type="checkbox"
          checked={selectedRating === 3}
        />
        <label className="form-check-label">
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-secondary" />
          <ImStarFull className="text-secondary" />
        </label>
      </div>
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          onClick={() => handleCheckboxClick(2)}
          type="checkbox"
          checked={selectedRating === 2}
        />
        <label className="form-check-label">
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-warning" />
          <ImStarFull className="text-secondary" />
          <ImStarFull className="text-secondary" />
          <ImStarFull className="text-secondary" />
        </label>
      </div>
    </AccordionDetails>
    </Accordion>
      </div>
    </>
  );
};

export default Filters;
