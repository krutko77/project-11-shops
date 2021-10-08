
import ImgPersonal from '../imgPersonal copy/ImgPersonal';
import s from './ListPersonal.module.scss';

import personal1 from './../../../img/personal1.svg'
import personal2 from './../../../img/personal2.svg'
import personal3 from './../../../img/personal3.svg'








function ListPersonal(props) {

    const data = {
        img: personal1
    }
    const data2 = {
        img: personal2
    }
    const data3 = {
        img: personal3
    }
    


    return (
        
        <ul className={s.listPersonal}>
            <li className={s.itemPersonal}>
                <ImgPersonal img={data.img}/>
                <ImgPersonal img={data2.img}/>
                <ImgPersonal img={data3.img}/>
            </li>
        </ul>
    );
}

export default ListPersonal;
