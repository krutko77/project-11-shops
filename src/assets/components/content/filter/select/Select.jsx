import style from "./Select.module.scss";
import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const MyInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input::before": {
    borderBottom: "none",
  },
}));

export default function SelectVariants() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 68 }}>
        <Select
          className={style.input}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          input={<MyInput />}
        >
          <MenuItem value={10}>90</MenuItem>
          <MenuItem value={20}>130</MenuItem>
          <MenuItem value={30}>154</MenuItem>
          <MenuItem value={40}>230</MenuItem>
          <MenuItem value={50}>300</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
