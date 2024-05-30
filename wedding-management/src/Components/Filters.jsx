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

const Filters = ({ handle }) => {
  const [value, setValue] = useState([0, 99999]);
  const [min, setMinValue] = useState(0);
  const [max, setMaxValue] = useState(99999);
  const [selectedRating, setSelectedRating] = useState(null);
  const [isProductAvailable, setProductAvailable] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  const handleCheckboxClick = (rating) => {
    if (selectedRating === rating) {
      setSelectedRating(null); 
    } else {
      setSelectedRating(rating);
    }
  };

  const handlerViewall = (min, max) => {
    console.log("Min Value in Filter :  ", min);
    console.log("Max Value in Filter : ", max);
    setMinValue(min);
    setMaxValue(max);
    setProductAvailable(true); // Reset product availability flag
  };

  const handleMinChange = (event) => {
    const newMin = Number(event.target.value);
    if (newMin <= max && newMin >= 0) {
      setMinValue(newMin);
      setValue([newMin, max]);
    }
  };

  const handleMaxChange = (event) => {
    const newMax = Number(event.target.value);
    if (newMax >= min && newMax <= 99999) {
      setMaxValue(newMax);
      setValue([min, newMax]);
    }
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
              className="ms-5"
              style={{ fontSize: "17px", fontWeight: "600" }}
            >
              Price range
            </Typography>
          </AccordionSummary>

          <AccordionDetails className="ms-2">
            <Box className="ms-5" sx={{ width: 200 }}>
              <Slider
                getAriaLabel={() => "Price range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => `${value}°C`}
                min={0}
                max={99999}
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
                    value={min}
                    onChange={handleMinChange}
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
                    value={max}
                    onChange={handleMaxChange}
                  />
                </div>
                <div className="w-100 d-flex justify-content-center mt-3">
                  <button
                    className="w-75 mt-3 btn btn-primary"
                    onClick={() => {
                      // handlerViewall(min, max);
                      handle(min, max);
                    }}
                  >
                    Apply
                  </button>
                </div>
                <div className="w-100 d-flex justify-content-center mt-3">
                  <button
                    className="w-75 mt-3 btn btn-warning"
                    onClick={() => {
                      setValue([0, 99999]);
                      setMinValue(0);
                      setMaxValue(99999);
                      // handlerViewall(0, 99999);
                      handle(0, 99999);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

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
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography
              className="ms-5"
              style={{ fontSize: "17px", fontWeight: "600" }}
            >
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
