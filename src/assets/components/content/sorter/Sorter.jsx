import s from '././Sorter.module.scss';
import SorterItem from './sorterItem/SorterItem';

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
    title: "По популярности"
}
const data6 = {
    title: "По цене"
}
const data7 = {
    title: "По рейтингу"
}
const data8 = {
    img: tile
}
const data9 = {
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

                <select className={s.select}>
                    <option value="По популярности">{data5.title}</option>
                    <option value="По цене">{data6.title}</option>
                    <option value="По рейтингу">{data7.title}</option>
                </select>



                <a className={s.sortTile}>
                    <img src={data8.img} alt="" />
                </a>

                <a className={s.sortList}>
                    <img src={data9.img} alt="" />
                </a>

            </div>


        </div>
    );
}

export default Sorter;
