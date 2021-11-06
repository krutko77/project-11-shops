import s from "./Navigation.module.scss";
import NavigationItem from "./navigationItem/NavigationItem.jsx";


function Navigation(props) {
   return (
      <nav className={s.navigation} >
         <ul className={s.list} style={props.styledNavigation}>
            <NavigationItem itemData={props.navData.data1} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data2} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data3} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data4} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data5} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data6} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data7} styledNavItem={props.styledNavItem} />
            <NavigationItem itemData={props.navData.data8} styledNavItem={props.styledNavItem} />
         </ul>
      </nav>
   );
}

export default Navigation;
