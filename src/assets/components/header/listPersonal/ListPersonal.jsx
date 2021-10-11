
import ImgPersonal from '../imgPersonal/ImgPersonal';
import s from './ListPersonal.module.scss';

import personal1 from './../../../img/personal1.svg'
import personal2 from './../../../img/personal2.svg'
import personal3 from './../../../img/personal3.svg'


const data = {
    img: personal1
}
const data2 = {
    img: personal2
}
const data3 = {
    img: personal3
}






function ListPersonal(props) {
    return (
        <div className={s.listPersonal}>
            <ImgPersonal img={data.img} />
            <ImgPersonal img={data2.img} />
            <div className={s.counterWrap}>
                <ImgPersonal img={data3.img} /> <span className={s.personalCounter}>2</span>
            </div>
        </div>
    );
}

export default ListPersonal;
