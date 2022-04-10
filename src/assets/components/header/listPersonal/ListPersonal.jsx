import s from './ListPersonal.module.scss';
import { NavLink } from "react-router-dom";

function ListPersonal(props) {
   return (
      <div className={s.listPersonal}>
         <NavLink className={s.linkPersonal} to="/">
            <svg className={s.imgPersonal} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z" fill="#2F3035" />
            </svg>
         </NavLink>
         <NavLink className={s.linkPersonal} to="/">
            <svg className={s.imgPersonal} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M20.8225 18.096C17.3835 17.302 14.1825 16.606 15.7325 13.678C20.4525 4.766 16.9835 0 12.0005 0C6.91849 0 3.53649 4.949 8.26849 13.678C9.86549 16.623 6.54349 17.319 3.17849 18.096C0.105486 18.806 -0.00951398 20.332 0.000486018 23L0.00448602 24H23.9945L23.9985 23.031C24.0105 20.343 23.9065 18.809 20.8225 18.096Z" fill="#2F3035" />
            </svg>
         </NavLink>
         <div className={s.counterWrap}>
            <NavLink className={s.linkPersonal} to="/">
               <svg className={s.imgPersonal} width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.999 0L29.0703 2.5H26.659L22.3165 17.5H5.76777L-0.000976562 3.75H21.014L20.309 6.25H3.75902L7.43027 15H20.4653L24.7553 0H29.999ZM10.624 18.75C9.58902 18.75 8.74902 19.59 8.74902 20.625C8.74902 21.6612 9.58902 22.5 10.624 22.5C11.659 22.5 12.499 21.6612 12.499 20.625C12.499 19.59 11.659 18.75 10.624 18.75ZM19.249 10L16.874 18.75C15.839 18.75 14.999 19.5888 14.999 20.625C14.999 21.6612 15.839 22.5 16.874 22.5C17.909 22.5 18.749 21.6612 18.749 20.625C18.749 19.59 17.909 18.75 16.874 18.75L19.249 10Z" fill="#2F3035" />
               </svg>
            </NavLink>
            <span className={s.personalCounter}>2</span>
         </div>
      </div>
   );
}

export default ListPersonal;
