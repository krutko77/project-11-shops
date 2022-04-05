import s from './Social.module.scss'
import { NavLink } from "react-router-dom";
import instagram from "../../../img/instagram.svg";
import vk from "../../../img/vk.svg";
import facebook from "../../../img/facebook.svg";
import youtube from "../../../img/youtube.svg";

function Social() {
   return (
      <div className={s.social}>
         <ul className={s.list}>
            <li className={s.item}>
               <NavLink className={s.link}
                  to="/"><img className={s.imgSocial}
                     src={instagram}
                     alt="" />
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={s.link}
                  to="/"><img className={s.imgSocial}
                     src={vk}
                     alt="" /></NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={s.link}
                  to="/"><img className={s.imgSocial}
                     src={facebook}
                     alt="" /></NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={s.link}
                  to="/"><img className={s.imgSocial}
                     src={youtube}
                     alt="" /></NavLink></li>
         </ul>
      </div>
   );
}

export default Social;