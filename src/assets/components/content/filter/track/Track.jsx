import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";

const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100000,
    label: "100000",
  },
  {
    value: 500000,
    label: "500000",
  },
  {
    value: 800000,
    label: "800000",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function Track() {
  return (
    <Box sx={{ width: 250 }}>
      <Separator />

      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[100000, 500000]}
        marks={marks}
      />
    </Box>
  );
}
