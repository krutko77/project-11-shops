import style from "./Button.module.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className={style.secondButton} variant="contained">
        SALE
      </Button>
      <Button className={style.secondButton} variant="contained" disabled>
        NEW
      </Button>
      <Button className={style.thirdButton} variant="contained" disabled>
        HIT
      </Button>
      <Button className={style.fourthButton} variant="contained" color="info">
        ДИЛЕР
      </Button>
    </Stack>
  );
}
