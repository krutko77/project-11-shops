import style from "./Subtitle.module.scss";

function Subtitle(props) {
  return (
    <div className={style.subtitle}>
      <h4 className={style.subtitle}>{props.subtitle}</h4>
    </div>
  );
}
export default Subtitle;
