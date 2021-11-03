import s from "./IconCheckboxes.module.scss";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';


// стилизация размера иконки
const MyCheckbox = styled(Checkbox)({
   paddingLeft: 0
}
);

const MyFavoriteBorder = styled(FavoriteBorder)({
   fontSize: 30
}
);

const MyFavorite = styled(Favorite)({
   fontSize: 30
}
);

function IconCheckboxes(props) {
   return (
      <div>
         <MyCheckbox icon={<MyFavoriteBorder />} checkedIcon={<MyFavorite />} />
      </div>
   );
}

export default IconCheckboxes;



