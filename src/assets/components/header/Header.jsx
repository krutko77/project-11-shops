import s from '././Header.module.scss';
import HeaderItem from './header-item/HeaderItem';
import ListPersonal from './listPersonal/ListPersonal';


const data = {
    titleLink: "Магазины"
}
const data2 = {
    titleLink: "Акции"
}
const data3 = {
    titleLink: "Доставка и оплата"
}
const data4 = {
    titleLink: "Москва,  ул. Науки  25"
}



function Header(props) {
    return (
        <div className={s.header}>
            <nav className={s.navigationLeft}>
                <ul className={s.listLeft}>
                    <HeaderItem titleLink={data.titleLink} />
                    <HeaderItem titleLink={data2.titleLink} />
                    <HeaderItem titleLink={data3.titleLink} />
                </ul>
            </nav>

            <div className={s.logoSvg}>
                <svg classname={s.logo} width="80" height="76" viewBox="0 0 80 76" fill="#2F3035" stroke="#2F3035" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.9 70C0.833333 70 0.8 69.9667 0.8 69.9L0.84 56.16C0.84 56.1067 0.866667 56.08 0.92 56.08L4.66 56.06C5.39333 56.0467 6.06 56.22 6.66 56.58C7.27333 56.94 7.76 57.4267 8.12 58.04C8.48 58.64 8.66 59.3067 8.66 60.04V65.78C8.66 66.5533 8.47333 67.26 8.1 67.9C7.72667 68.5267 7.22667 69.0267 6.6 69.4C5.97333 69.7733 5.26667 69.9667 4.48 69.98L0.9 70ZM3.24 67.54H4.48C4.97333 67.54 5.38667 67.3667 5.72 67.02C6.06667 66.6733 6.24 66.26 6.24 65.78V60.02C6.24 59.5933 6.08 59.2267 5.76 58.92C5.45333 58.6 5.08667 58.4467 4.66 58.46L3.26 58.48L3.24 67.54ZM10.3136 70C10.2603 70 10.2336 69.9667 10.2336 69.9L10.2736 56.16C10.2736 56.1067 10.3003 56.08 10.3536 56.08H14.3936C15.1136 56.08 15.7736 56.26 16.3736 56.62C16.9869 56.9667 17.4736 57.44 17.8336 58.04C18.1936 58.6267 18.3736 59.2933 18.3736 60.04C18.3736 60.5333 18.3003 60.98 18.1536 61.38C18.0069 61.7667 17.8336 62.1 17.6336 62.38C17.4336 62.6467 17.2536 62.8467 17.0936 62.98C17.8136 63.78 18.1736 64.72 18.1736 65.8L18.1936 69.9C18.1936 69.9667 18.1603 70 18.0936 70H15.8336C15.7803 70 15.7536 69.98 15.7536 69.94V65.8C15.7536 65.32 15.5803 64.9067 15.2336 64.56C14.9003 64.2 14.4869 64.02 13.9936 64.02H12.6736L12.6536 69.9C12.6536 69.9667 12.6269 70 12.5736 70H10.3136ZM12.6736 61.62H14.3936C14.8069 61.62 15.1736 61.4667 15.4936 61.16C15.8136 60.8533 15.9736 60.48 15.9736 60.04C15.9736 59.6133 15.8136 59.2467 15.4936 58.94C15.1869 58.6333 14.8203 58.48 14.3936 58.48H12.6736V61.62ZM19.982 70C19.9154 70 19.882 69.9667 19.882 69.9L19.902 56.16C19.902 56.1067 19.9287 56.08 19.982 56.08H22.222C22.2754 56.08 22.302 56.1067 22.302 56.16L22.322 69.9C22.322 69.9667 22.2954 70 22.242 70H19.982ZM26.3213 70C26.2679 70 26.2346 69.9667 26.2212 69.9L23.4613 56.16C23.4479 56.1067 23.4746 56.08 23.5413 56.08H25.8013C25.8546 56.08 25.8879 56.1067 25.9013 56.16L27.5413 65.32L29.1413 56.16C29.1546 56.1067 29.1879 56.08 29.2413 56.08H31.4813C31.5479 56.08 31.5746 56.1067 31.5613 56.16L28.8413 69.9C28.8279 69.9667 28.7946 70 28.7413 70H26.3213ZM32.8136 70C32.7603 70 32.7336 69.9667 32.7336 69.9L32.7536 56.16C32.7536 56.1067 32.7803 56.08 32.8336 56.08H39.2536C39.3069 56.08 39.3336 56.1133 39.3336 56.18V58.42C39.3336 58.4733 39.3069 58.5 39.2536 58.5H35.1536V61.62H39.2536C39.3069 61.62 39.3336 61.6467 39.3336 61.7L39.3536 63.96C39.3536 64.0133 39.3269 64.04 39.2736 64.04H35.1536V67.54H39.2736C39.3269 67.54 39.3536 67.5733 39.3536 67.64V69.92C39.3536 69.9733 39.3269 70 39.2736 70H32.8136ZM44.1808 70C44.1274 70 44.1008 69.9667 44.1008 69.9L44.1408 56.16C44.1408 56.1067 44.1674 56.08 44.2208 56.08H46.6608C46.7141 56.08 46.7608 56.1067 46.8008 56.16L48.6208 58.8L50.4408 56.16C50.4808 56.1067 50.5274 56.08 50.5808 56.08H53.0408C53.0941 56.08 53.1208 56.1067 53.1208 56.16L53.1608 69.9C53.1608 69.9667 53.1341 70 53.0808 70H50.8208C50.7674 70 50.7408 69.9667 50.7408 69.9L50.7208 59.7L48.6208 62.74L46.5408 59.7L46.5208 69.9C46.5208 69.9667 46.4941 70 46.4408 70H44.1808ZM58.543 70.2C57.823 70.2 57.163 70.02 56.563 69.66C55.9763 69.2867 55.503 68.8 55.143 68.2C54.783 67.5867 54.603 66.9133 54.603 66.18L54.623 59.84C54.623 59.1067 54.7963 58.44 55.143 57.84C55.503 57.24 55.983 56.76 56.583 56.4C57.183 56.04 57.8363 55.86 58.543 55.86C59.263 55.86 59.9163 56.04 60.503 56.4C61.0896 56.76 61.5563 57.24 61.903 57.84C62.263 58.44 62.443 59.1067 62.443 59.84L62.463 66.18C62.463 66.9133 62.283 67.5867 61.923 68.2C61.5763 68.8 61.103 69.2867 60.503 69.66C59.9163 70.02 59.263 70.2 58.543 70.2ZM58.543 67.78C58.943 67.78 59.2896 67.62 59.583 67.3C59.8896 66.9667 60.043 66.5933 60.043 66.18L60.023 59.84C60.023 59.4 59.883 59.0267 59.603 58.72C59.323 58.4133 58.9696 58.26 58.543 58.26C58.1296 58.26 57.7763 58.4133 57.483 58.72C57.1896 59.0133 57.043 59.3867 57.043 59.84V66.18C57.043 66.62 57.1896 67 57.483 67.32C57.7763 67.6267 58.1296 67.78 58.543 67.78ZM65.7297 70C65.6764 70 65.6497 69.9667 65.6497 69.9V58.5H63.0497C62.983 58.5 62.9497 58.4667 62.9497 58.4L62.9697 56.16C62.9697 56.1067 62.9964 56.08 63.0497 56.08H70.6497C70.7164 56.08 70.7497 56.1067 70.7497 56.16V58.4C70.7497 58.4667 70.723 58.5 70.6697 58.5H68.0497L68.0697 69.9C68.0697 69.9667 68.043 70 67.9897 70H65.7297ZM74.9883 70.2C74.2683 70.2 73.6083 70.02 73.0083 69.66C72.4216 69.2867 71.9483 68.8 71.5883 68.2C71.2283 67.5867 71.0483 66.9133 71.0483 66.18L71.0683 59.84C71.0683 59.1067 71.2416 58.44 71.5883 57.84C71.9483 57.24 72.4283 56.76 73.0283 56.4C73.6283 56.04 74.2816 55.86 74.9883 55.86C75.7083 55.86 76.3616 56.04 76.9483 56.4C77.5349 56.76 78.0016 57.24 78.3483 57.84C78.7083 58.44 78.8883 59.1067 78.8883 59.84L78.9083 66.18C78.9083 66.9133 78.7283 67.5867 78.3683 68.2C78.0216 68.8 77.5483 69.2867 76.9483 69.66C76.3616 70.02 75.7083 70.2 74.9883 70.2ZM74.9883 67.78C75.3883 67.78 75.7349 67.62 76.0283 67.3C76.3349 66.9667 76.4883 66.5933 76.4883 66.18L76.4683 59.84C76.4683 59.4 76.3283 59.0267 76.0483 58.72C75.7683 58.4133 75.4149 58.26 74.9883 58.26C74.5749 58.26 74.2216 58.4133 73.9283 58.72C73.6349 59.0133 73.4883 59.3867 73.4883 59.84V66.18C73.4883 66.62 73.6349 67 73.9283 67.32C74.2216 67.6267 74.5749 67.78 74.9883 67.78Z" fill="#2F3035" className={s.svgElem1}></path>
                    <path d="M59.0441 7.95599C58.3406 7.2526 57.2364 7.14888 56.4141 7.70921C53.3162 9.82072 37.7781 20.4384 36.1082 22.1082C33.6866 24.53 33.6866 28.4702 36.1082 30.8919C37.319 32.1027 38.9097 32.7081 40.5001 32.7081C42.0905 32.7081 43.681 32.1027 44.8919 30.8919C46.5618 29.222 57.1794 13.6839 59.291 10.5861C59.8511 9.76389 59.7475 8.65958 59.0441 7.95599ZM41.9639 27.964C41.1568 28.7713 39.8433 28.7713 39.0362 27.964C38.2289 27.1569 38.2288 25.8438 39.0357 25.0366C39.6846 24.3954 44.0961 21.2492 49.5239 17.4763C45.7511 22.9041 42.6049 27.3154 41.9639 27.964Z" fill="#2F3035" className={s.svgElem2}></path>
                    <path d="M23.5473 36.1294L20.9915 37.3762C19.1214 34.0386 18.1406 30.3134 18.1406 26.5C18.1406 23.706 18.6558 21.03 19.5961 18.5621L22.5246 19.9668C22.8134 20.1053 23.1183 20.171 23.4186 20.171C24.1901 20.171 24.9307 19.7377 25.2867 18.9955C25.7811 17.9646 25.3463 16.7279 24.3153 16.2334L21.4239 14.8465C25.0177 8.98547 31.2356 4.89919 38.4298 4.23565V7.34951C38.4298 8.49294 39.3567 9.41982 40.5001 9.41982C41.6435 9.41982 42.5704 8.49294 42.5704 7.34951V4.2341C45.037 4.45863 47.4236 5.08676 49.6893 6.10949C50.7312 6.57997 51.9575 6.11632 52.428 5.07444C52.8985 4.03224 52.435 2.8061 51.3928 2.33562C47.9596 0.78589 44.2948 0 40.5 0C33.4216 0 26.7669 2.75641 21.7616 7.7616C16.7565 12.7669 14 19.4216 14 26.5C14 31.7306 15.5525 36.8178 18.4898 41.2111C18.8854 41.8027 19.5395 42.131 20.2122 42.131C20.518 42.131 20.8277 42.0632 21.1187 41.9212L25.3628 39.8509C26.3905 39.3496 26.8172 38.1102 26.3159 37.0825C25.8145 36.0549 24.5751 35.6283 23.5473 36.1294Z" fill="#2F3035" className={s.svgElem3}></path>
                    <path d="M64.6643 15.6073C64.194 14.5652 62.968 14.1015 61.9255 14.5721C60.8834 15.0426 60.42 16.2688 60.8905 17.3109C62.1971 20.2049 62.8594 23.2966 62.8594 26.5C62.8594 30.3191 61.8754 34.0504 59.9998 37.3917L57.3315 36.1211C56.2994 35.6296 55.0639 36.0678 54.5722 37.1002C54.0806 38.1325 54.519 39.368 55.5514 39.8596L59.899 41.9299C60.185 42.066 60.4882 42.1311 60.788 42.1311C61.4608 42.1311 62.1151 41.8024 62.5102 41.2113C65.4475 36.8179 67.0001 31.7307 67.0001 26.5C67.0001 22.7053 66.2142 19.0404 64.6643 15.6073Z" fill="#2F3035" className={s.svgElem4}></path>
                </svg>
            </div>
            <div className={s.navigationRight}>
                <ul className={s.listRight}>
                    <HeaderItem titleLink={data4.titleLink} />
                </ul>

                <ListPersonal />
                
            </div>
        </div>
    );
}

export default Header;
