import style from "./Button.module.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">SALE</Button>
      <Button variant="contained" disabled>
        NEW
      </Button>
      <Button variant="contained" disabled>
        HIT
      </Button>
      <Button className={style.button} variant="contained" color="info">
        ДИЛЕР
      </Button>
    </Stack>
  );
}
