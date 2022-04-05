
import s from './ImgPersonal.module.scss';
import { NavLink } from "react-router-dom";

function ImgPersonal(props) {
    return (
        <NavLink className={s.linkPersonal} to="/">
            <img className={s.imgPersonal} src={props.img} alt="icon"/>
        </NavLink>
    );
}

export default ImgPersonal;
