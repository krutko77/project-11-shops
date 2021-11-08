import NavigationBlockItem from "./navigation-item/NavigationBlockItem";
import s from "./NavigationBlock.module.scss";



const data = {
  title: "запчасти"
}
const data2 = {
  title: "моторы"
}
const data3 = {
  title: "шины"
}
const data4 = {
  title: "электроника"
}
const data5 = {
  title: "инструменты"
}
const data6 = {
  title: "аксессуары"
}





function NavigationBlock() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <NavigationBlockItem title={data.title} />
        <NavigationBlockItem title={data2.title}/>
        <NavigationBlockItem title={data3.title}/>
        <NavigationBlockItem title={data4.title}/>
        <NavigationBlockItem title={data5.title}/>
        <NavigationBlockItem title={data6.title}/>
      </ul>
    </nav>
  );
}

export default NavigationBlock;