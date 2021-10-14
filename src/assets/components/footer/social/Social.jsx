import s from './Social.module.scss'
import instagram from "../../../img/instagram.svg";
import vk from "../../../img/vk.svg";
import facebook from "../../../img/facebook.svg";
import youtube from "../../../img/youtube.svg";

function Social() {
    return (
        <div className={s.social}>
            <ul className={s.list}>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.imgSocial}
                                    src={instagram}
                                    alt=""/>
                    </a>
                </li>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.imgSocial}
                                    src={vk}
                                    alt=""/></a>
                </li>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.imgSocial}
                                    src={facebook}
                                    alt=""/></a>
                </li>
                <li className={s.item}>
                    <a className={s.link}
                        href="/"><img className={s.imgSocial}
                                    src={youtube}
                                    alt=""/></a></li>
        </ul>
        </div>
    );
}

export default Social;