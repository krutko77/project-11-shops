import s from './BreadcrumbsProductCard.module.scss';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function handleClick(event) {
   event.preventDefault();
   console.info('You clicked a breadcrumb.');
}

function BreadcrumbsProductCard() {
   return (
      <div className={s.breadcrumbs} role="presentation" onClick={handleClick}>
         <Breadcrumbs separator={<NavigateNextIcon fontSize="small" color="#C4C4C4" />}
            aria-label="breadcrumb">
            <Link underline="hover" color="#C4C4C4" href="/">
               Главная
            </Link>
            <Link underline="hover" color="#C4C4C4" href="/">
               Гидроциклы
            </Link>
            <Link underline="hover" color="#C4C4C4" href="/">
               Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
            </Link>
            {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
         </Breadcrumbs>
      </div>
   );
}

export default BreadcrumbsProductCard;
