import style from "./Track.module.scss";

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className={style.wrap}>
        <div className={style.wrapLeft}>
          <p className={style.text}>от</p>
          <span className={style.span}>100 000</span>
        </div>
        <div className={style.wrapRight}>
          <p className={style.text}>до</p>
          <span className={style.span}>500 000</span>
        </div>
      </div>
    </Box>
  );
}
