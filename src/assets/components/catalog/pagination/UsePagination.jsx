import s from './UsePagination.module.scss';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
   listStyle: 'none',
   paddingLeft: "20px",
   margin: 0,
   display: 'flex',
   alignItems: "center",
});

export default function UsePagination() {
   const { items } = usePagination({
      count: 11,
   });

   return (
      <div className={s.navWrap}>
         <nav >
            <List >
               {items.map(({ page, type, selected, ...item }, index) => {
                  let children = null;

                  if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                     children = '…';
                  } else if (type === 'page') {
                     children = (
                        <button
                           type="button"
                           style={{
                              fontWeight: selected ? 'bold' : 'regular',
                              borderWidth: selected ? "2px" : 0,
                              borderColor: selected ? "#1C62CD" : "transparent",
                              color: selected ? "#1C62CD" : "#C4C4C4",
                              borderStyle: "solid",
                              width: "39px",
                              height: "39px",
                              backgroundColor: "transparent",
                              fontFamily: "BarlowRegular",
                              fontSize: "18px",
                              lineHeight: "120%",
                              cursor: "pointer",
                           }}
                           {...item}
                        >
                           {page}
                        </button>
                     );
                  } 

                  return <li
                     style={{
                        marginRight: "15px",
                     }}
                     key={index}>{children}</li>;
               })}
            </List>
         </nav>
      </div>
   );
}
