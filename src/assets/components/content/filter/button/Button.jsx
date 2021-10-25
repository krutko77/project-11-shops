import style from "./Button.module.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)({
  marginLeft: 9,
  paddingLeft: 14,
  paddingRight: 14,
  background: "black",
  borderRadius: 1,
});

export default function ContainedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <div className={style.buttons}>
        <Button className={style.buttonsFirst} variant="contained">
          SALE
        </Button>
        <MyButton variant="contained" disabled>
          NEW
        </MyButton>
        <MyButton variant="contained" disabled>
          HIT
        </MyButton>
        <MyButton variant="contained" color="info">
          ДИЛЕР
        </MyButton>
      </div>
    </Stack>
  );
}
