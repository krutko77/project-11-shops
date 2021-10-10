import style from "./Options.module.scss";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Options(props) {
  return (
    <div className={style.options}>
      <Checkbox {...label} />
      <h4 className={style.textOptions}>{props.textOptions}</h4>
    </div>
  );
}
export default Options;
