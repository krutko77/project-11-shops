import style from "./Options.module.scss";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Options(props) {
  return (
    <div className={style.options}>
      <Checkbox {...label} defaultChecked />
      <h4 className={style.subtitle}>{props.charTitle}</h4>
    </div>
  );
}
export default Options;
