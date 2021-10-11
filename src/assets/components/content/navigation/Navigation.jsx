import s from '././Navigation.module.scss';
import NavigationItem from './navigationItem/NavigationItem';


const data = {
    title: "Квадроциклы"
}
const data2 = {
    title: "Катера"
}
const data3 = {
    title: "Гидроциклы"
}
const data4 = {
    title: "Лодки"
}
const data5 = {
    title: "Вездеходы"
}
const data6 = {
    title: "Снегоходы"
}
const data7 = {
    title: "Двигатели"
}
const data8 = {
    title: "Запчасти"
}



function Navigation(props) {
    return (
            <nav className={s.navigation}>
                <ul className={s.list}>
                    <NavigationItem title={data.title}/> 
                    <NavigationItem title={data2.title}/> 
                    <NavigationItem title={data3.title}/> 
                    <NavigationItem title={data4.title}/> 
                    <NavigationItem title={data5.title}/> 
                    <NavigationItem title={data6.title}/> 
                    <NavigationItem title={data7.title}/> 
                    <NavigationItem title={data8.title}/> 
                </ul>
            </nav>
    );
}

export default Navigation;
