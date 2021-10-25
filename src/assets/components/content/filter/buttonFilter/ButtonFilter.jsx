import style from "./ButtonFilter.module.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
    <Stack className={style.buttonWrap} direction="row" spacing={2}>
      <Button className={style.button} variant="contained" disabled>
        ВЫБРАТЬ
      </Button>
    </Stack>
  );
}
