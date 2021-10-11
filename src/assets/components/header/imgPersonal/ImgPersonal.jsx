
import s from './ImgPersonal.module.scss';







function ImgPersonal(props) {
    return (
        <a className={s.linkPersonal}>
            <img className={s.imgPersonal} src={props.img} />
        </a>
    );
}

export default ImgPersonal;
