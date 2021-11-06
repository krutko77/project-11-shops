import s from "./Navigation.module.scss";
import NavigationItem from "./navigationItem/NavigationItem.jsx";


function Navigation(props) {
  return (
    <nav className={s.navigation} >
      <ul className={s.list} style={props.styledNavigation}>
        <NavigationItem itemData={props.navData.data1} styledNavigationItem={props.styledNavigationItem}/>
        <NavigationItem itemData={props.navData.data2} />
        <NavigationItem itemData={props.navData.data3} />
        <NavigationItem itemData={props.navData.data4} />
        <NavigationItem itemData={props.navData.data5} />
        <NavigationItem itemData={props.navData.data6} />
        <NavigationItem itemData={props.navData.data7} />
        <NavigationItem itemData={props.navData.data8} />
      </ul>
    </nav>
  );
}

export default Navigation;
