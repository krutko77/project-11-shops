import s from '././Sorter.module.scss';
import SorterItem from './sorterItem/SorterItem';


import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import tile from './../../../img/tile.svg';
import list from './../../../img/list.svg';



const data = {
    title: "Полноприводные"
}
const data2 = {
    title: "от 5000"
}
const data3 = {
    title: "BRP"
}
const data4 = {
    title: "еще"
}
const data5 = {
    img: tile
}
const data6 = {
    img: list
}



function Sorter(props) {
    return (
        <div className={s.innerSorter}>
            <nav className={s.sorter}>
                <ul className={s.list}>
                    <SorterItem title={data.title} />
                    <SorterItem title={data2.title} />
                    <SorterItem title={data3.title} />
                    <SorterItem title={data4.title} />
                </ul>
            </nav>

            <div className={s.selectWrap}>
                <Box sx={{width: 178}}>
                    <FormControl fullWidth>
                        <Select>
                            <MenuItem value="По популярности">По популярности</MenuItem>
                            <MenuItem value="По цене">По цене</MenuItem>
                            <MenuItem value="По рейтингу">По рейтингу</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <a className={s.sortTile}>
                    <img src={data5.img} alt="" />
                </a>

                <a className={s.sortList}>
                    <img src={data6.img} alt="" />
                </a>

            </div>


        </div>
    );
}

export default Sorter;
