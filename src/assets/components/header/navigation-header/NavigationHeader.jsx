import s from "./NavigationHeader.module.scss";
import NavigationItem from "./navigation-header-Item/NavigationHeaderItem.jsx";

const data = {
  title: "Квадроциклы",
  path: "/catalog",
};
const data2 = {
  title: "Катера",
  path: "/catalog",
};
const data3 = {
  title: "Гидроциклы",
  path: "/catalog/jet-skis",
};
const data4 = {
  title: "Лодки",
  path: "/catalog",
};
const data5 = {
  title: "Вездеходы",
  path: "/catalog",
};
const data6 = {
  title: "Снегоходы",
  path: "/catalog",
};
const data7 = {
  title: "Двигатели",
  path: "/catalog",
};
const data8 = {
  title: "Запчасти",
  path: "/catalog",
};

function Navigation(props) {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <NavigationItem title={data.title} path={data.path} />
        <NavigationItem title={data2.title} path={data2.path} />
        <NavigationItem title={data3.title} path={data3.path} />
        <NavigationItem title={data4.title} path={data4.path} />
        <NavigationItem title={data5.title} path={data5.path} />
        <NavigationItem title={data6.title} path={data6.path} />
        <NavigationItem title={data7.title} path={data7.path} />
        <NavigationItem title={data8.title} path={data8.path} />
      </ul>
    </nav>
  );
}

export default Navigation;
