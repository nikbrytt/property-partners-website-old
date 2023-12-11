import "../styles/footer.css"
import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';

const Footer = () => {

    return (<footer>
        <div className="logo-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="143" height="56" viewBox="0 0 143 56" fill="none">
                <g clip-path="url(#clip0_116_408)">
                    <path
                        d="M126.296 0H129.05C131.667 0.224607 133.981 1.02743 135.994 2.40846C138.067 3.83198 139.583 5.65463 140.542 7.87642C142.231 11.7964 142.14 17.2052 140.323 21.1024C137.869 26.3746 132.793 28.8332 126.933 28.6237C118.693 28.3324 113.553 22.318 113.594 14.3779C113.612 10.4533 114.718 6.78374 117.45 3.9974C119.747 1.64813 122.696 0.315664 126.296 0ZM134.259 18.5938C135.151 16.2081 135.264 13.7025 134.596 11.0771C133.603 7.17528 130.189 5.09463 126.214 5.77756C120.837 6.69724 119.58 13.1623 120.751 17.4465C121.664 20.8035 123.752 22.6459 127.015 22.9737C130.189 23.2924 133.148 21.5623 134.259 18.5938Z"
                        fill="#C29773"/>
                    <path
                        d="M27.7359 55.9984H0V1.0228C0.0819512 0.661607 0.385474 0.481011 0.910569 0.481011C18.9702 0.459765 37.0313 0.450659 55.094 0.453694C55.2135 0.453694 55.3282 0.501661 55.4127 0.587044C55.4972 0.672426 55.5447 0.78823 55.5447 0.908979V27.7753C55.5447 28.0819 55.3914 28.2352 55.0849 28.2352L28.0319 28.1942C27.8619 28.1942 27.7769 28.2792 27.7769 28.4491L27.7359 55.9984ZM21.3984 22.0888C21.3984 22.0577 21.4045 22.0269 21.4164 21.9982C21.4283 21.9695 21.4457 21.9434 21.4677 21.9214C21.4897 21.8994 21.5158 21.882 21.5445 21.8701C21.5732 21.8582 21.604 21.8521 21.6351 21.8521H48.934C48.9968 21.8521 49.057 21.8271 49.1014 21.7827C49.1458 21.7383 49.1707 21.6781 49.1707 21.6153V7.06443C49.1707 7.00164 49.1458 6.94142 49.1014 6.89702C49.057 6.85262 48.9968 6.82768 48.934 6.82768H6.61073C6.54794 6.82768 6.48772 6.85262 6.44333 6.89702C6.39893 6.94142 6.37398 7.00164 6.37398 7.06443V49.3877C6.37398 49.4505 6.39893 49.5107 6.44333 49.5551C6.48772 49.5995 6.54794 49.6244 6.61073 49.6244H21.1616C21.2244 49.6244 21.2846 49.5995 21.329 49.5551C21.3734 49.5107 21.3984 49.4505 21.3984 49.3877V22.0888Z"
                        fill="#C29773"/>
                    <path
                        d="M71.1382 19.3666V27.7849C71.1382 27.9457 71.0578 28.0262 70.8969 28.0262L64.8143 28.0489C64.7708 28.0489 64.7291 28.0317 64.6984 28.0009C64.6677 27.9702 64.6504 27.9285 64.6504 27.885V0.918516C64.6504 0.739437 64.7399 0.64838 64.919 0.645345C69.8968 0.627134 74.3313 0.637757 78.2224 0.677215C85.0198 0.750061 88.6029 6.73705 86.8091 12.9517C85.6345 17.0083 81.9148 18.9614 77.8445 19.0753C75.7442 19.136 73.5982 19.1451 71.4068 19.1026C71.2277 19.0995 71.1382 19.1876 71.1382 19.3666ZM71.1473 6.20892L71.12 13.4479C71.12 13.4878 71.1358 13.526 71.164 13.5542C71.1922 13.5824 71.2304 13.5982 71.2702 13.5982L77.0751 13.621C77.5582 13.6228 78.037 13.534 78.4841 13.3595C78.9311 13.185 79.3377 12.9283 79.6805 12.604C80.0234 12.2797 80.2959 11.8943 80.4824 11.4696C80.6689 11.0449 80.7657 10.5893 80.7675 10.1289V9.60079C80.7709 8.67112 80.3868 7.77807 79.6995 7.11808C79.0121 6.45808 78.078 6.0852 77.1024 6.08144L71.2975 6.05868C71.2577 6.05868 71.2195 6.07451 71.1913 6.10268C71.1631 6.13086 71.1473 6.16908 71.1473 6.20892Z"
                        fill="#C29773"/>
                    <path
                        d="M108.303 15.1961C110.379 15.9852 111.511 17.5271 111.699 19.8218C111.854 21.6945 111.967 23.5991 112.036 25.5356C112.064 26.3156 112.273 27.0714 112.665 27.8029C112.744 27.9516 112.698 28.026 112.528 28.026L106.382 28.0442C106.298 28.0441 106.215 28.0196 106.145 27.9735C106.075 27.9274 106.019 27.8618 105.986 27.7847C105.658 27.0441 105.485 26.2747 105.467 25.4764C105.433 23.9497 105.363 22.4867 105.257 21.0875C105.118 19.2117 104.104 18.1752 102.216 17.9779C101.102 17.8625 99.1033 17.8398 96.2198 17.9096C96.0407 17.9126 95.9512 18.0037 95.9512 18.1827V27.7574C95.9512 27.9365 95.8601 28.026 95.678 28.026L89.773 28.0442C89.5666 28.0442 89.4634 27.9425 89.4634 27.7392V0.795422C89.4634 0.754367 89.4797 0.714994 89.5087 0.685964C89.5377 0.656934 89.5771 0.640625 89.6182 0.640625C94.001 0.652766 98.5023 0.654284 103.122 0.645178C107.975 0.636072 112.077 3.03542 112.355 8.19835C112.525 11.3155 111.17 13.5586 108.289 14.9275C108.083 15.0246 108.088 15.1141 108.303 15.1961ZM95.9466 5.92648L95.9557 12.9379C95.9557 12.9705 95.9687 13.0017 95.9917 13.0248C96.0148 13.0478 96.0461 13.0608 96.0787 13.0608L102.138 13.0471C103.087 13.0458 103.997 12.6915 104.667 12.0623C105.338 11.433 105.714 10.5803 105.712 9.69168V9.13623C105.71 8.24823 105.331 7.39749 104.66 6.7709C103.988 6.14431 103.078 5.79311 102.129 5.79445L96.0696 5.80355C96.037 5.80355 96.0057 5.8165 95.9826 5.83956C95.9596 5.86261 95.9466 5.89388 95.9466 5.92648Z"
                        fill="#C29773"/>
                    <path
                        d="M55.5126 56.0005H31.4462L31.3916 32.5852C31.3916 32.1148 31.6268 31.8796 32.0973 31.8796L55.3988 31.875C55.4362 31.875 55.4721 31.8899 55.4986 31.9163C55.525 31.9428 55.5399 31.9787 55.5399 32.0161L55.5126 56.0005ZM49.1705 38.513C49.1705 38.4418 49.1422 38.3735 49.0918 38.3231C49.0414 38.2727 48.9731 38.2444 48.9018 38.2444H38.057C37.9857 38.2444 37.9174 38.2727 37.867 38.3231C37.8167 38.3735 37.7884 38.4418 37.7884 38.513V49.3579C37.7884 49.4292 37.8167 49.4975 37.867 49.5479C37.9174 49.5982 37.9857 49.6265 38.057 49.6265H48.9018C48.9731 49.6265 49.0414 49.5982 49.0918 49.5479C49.1422 49.4975 49.1705 49.4292 49.1705 49.3579V38.513Z"
                        fill="#C29773"/>
                    <path
                        d="M69.7723 48.8145V55.4298C69.7723 55.5815 69.6965 55.6574 69.5447 55.6574H64.878C64.7263 55.6574 64.6504 55.5815 64.6504 55.4298V34.0086C64.6504 33.8539 64.7278 33.778 64.8826 33.781C67.5991 33.8356 70.4006 33.8356 73.2871 33.781C77.9902 33.6899 82.0832 35.2789 82.3837 40.6467C82.6387 45.195 79.7704 48.2545 75.2631 48.4685C73.5876 48.5504 71.8667 48.5611 70.1001 48.5004C69.8816 48.4943 69.7723 48.599 69.7723 48.8145ZM69.7769 38.2519L69.7587 44.0522C69.7587 44.0776 69.7688 44.1019 69.7867 44.1198C69.8046 44.1378 69.8289 44.1478 69.8543 44.1478L74.398 44.166C74.7777 44.1673 75.1539 44.0967 75.5052 43.9583C75.8564 43.8198 76.1758 43.6163 76.4451 43.3592C76.7145 43.1022 76.9284 42.7966 77.0748 42.4601C77.2211 42.1236 77.2971 41.7627 77.2982 41.3979V40.9608C77.3005 40.2243 76.9982 39.517 76.4577 38.9945C75.9173 38.472 75.1829 38.177 74.4162 38.1745L69.8725 38.1563C69.8471 38.1563 69.8228 38.1664 69.8049 38.1843C69.787 38.2022 69.7769 38.2265 69.7769 38.2519Z"
                        fill="#C29773"/>
                    <path
                        d="M86.6086 51.925L85.4112 55.5536C85.4017 55.5825 85.3834 55.6076 85.3589 55.6256C85.3345 55.6436 85.305 55.6534 85.2746 55.6538L80.3393 55.6583C80.3159 55.6583 80.2928 55.6526 80.2721 55.6418C80.2513 55.6309 80.2335 55.6152 80.2201 55.596C80.2067 55.5768 80.1981 55.5546 80.1951 55.5314C80.192 55.5082 80.1947 55.4846 80.2027 55.4626L88.0974 33.9003C88.1076 33.8723 88.1262 33.8481 88.1506 33.831C88.1751 33.8139 88.2041 33.8047 88.2339 33.8047H94.1572C94.187 33.8047 94.2161 33.8139 94.2405 33.831C94.2649 33.8481 94.2835 33.8723 94.2938 33.9003L102.366 55.4626C102.374 55.4846 102.377 55.5082 102.374 55.5314C102.371 55.5546 102.362 55.5768 102.349 55.596C102.335 55.6152 102.317 55.6309 102.297 55.6418C102.276 55.6526 102.253 55.6583 102.229 55.6583H97.0892C97.0589 55.658 97.0294 55.6481 97.0049 55.6302C96.9804 55.6122 96.9621 55.587 96.9526 55.5582L95.737 51.925C95.7275 51.8962 95.7093 51.871 95.6848 51.853C95.6603 51.8351 95.6308 51.8252 95.6004 51.8249H86.7452C86.7148 51.8252 86.6853 51.8351 86.6608 51.853C86.6363 51.871 86.6181 51.8962 86.6086 51.925ZM88.5891 47.5361L93.8613 47.5406C94.1284 47.5406 94.2194 47.4147 94.1344 47.1627L91.2935 38.7263C91.1903 38.4258 91.0886 38.4258 90.9884 38.7263L88.2294 47.0444C88.1201 47.3722 88.24 47.5361 88.5891 47.5361Z"
                        fill="#C29773"/>
                    <path
                        d="M119.048 45.4565C120.55 46.015 121.393 47.1729 121.575 48.9303C121.723 50.3447 121.822 51.8821 121.871 53.5424C121.889 54.1433 122.035 54.7625 122.303 55.2997C122.397 55.494 122.337 55.5896 122.121 55.5866L117.905 55.5729C117.253 55.5699 116.904 55.2436 116.858 54.5941C116.743 53.0006 116.655 51.5285 116.594 50.1778C116.521 48.5357 115.668 47.6813 114.035 47.6145C112.627 47.5599 111.149 47.5508 109.601 47.5872C109.4 47.5933 109.3 47.695 109.3 47.8923L109.305 55.3589C109.305 55.5593 109.205 55.6594 109.004 55.6594H104.488C104.336 55.6594 104.26 55.5835 104.26 55.4318V33.9378C104.26 33.9096 104.271 33.8825 104.291 33.8621C104.31 33.8417 104.337 33.8297 104.365 33.8285C108.113 33.7769 111.794 33.7815 115.406 33.8422C119.48 33.9105 122.431 36.5056 122.094 40.849C121.934 42.916 120.751 44.1908 119.021 45.1697C118.826 45.282 118.835 45.3776 119.048 45.4565ZM109.314 38.0672L109.296 43.5215C109.296 43.5662 109.313 43.6091 109.345 43.6407C109.377 43.6722 109.419 43.69 109.464 43.69L114.176 43.7082C114.533 43.7095 114.886 43.644 115.216 43.5157C115.545 43.3873 115.845 43.1985 116.098 42.9601C116.351 42.7216 116.552 42.4382 116.689 42.126C116.826 41.8137 116.898 41.4788 116.899 41.1404V40.503C116.901 39.8196 116.618 39.1633 116.11 38.6783C115.603 38.1934 114.914 37.9195 114.195 37.917L109.482 37.8988C109.438 37.8988 109.395 37.9165 109.363 37.9481C109.332 37.9797 109.314 38.0226 109.314 38.0672Z"
                        fill="#C29773"/>
                    <path
                        d="M134.878 38.5579V55.499C134.878 55.5413 134.861 55.5818 134.831 55.6117C134.801 55.6416 134.761 55.6583 134.719 55.6583H129.802C129.759 55.6583 129.719 55.6416 129.689 55.6117C129.659 55.5818 129.642 55.5413 129.642 55.499V38.5533C129.642 38.511 129.625 38.4705 129.596 38.4406C129.566 38.4107 129.525 38.394 129.483 38.394L123.086 38.3894C123.044 38.3894 123.003 38.3726 122.973 38.3427C122.944 38.3128 122.927 38.2723 122.927 38.2301L122.931 33.964C122.931 33.9431 122.935 33.9224 122.943 33.9031C122.951 33.8837 122.963 33.8662 122.978 33.8514C122.993 33.8366 123.01 33.8248 123.03 33.8168C123.049 33.8088 123.07 33.8047 123.091 33.8047H141.434C141.476 33.8047 141.517 33.8215 141.547 33.8514C141.577 33.8812 141.593 33.9218 141.593 33.964V38.2255C141.593 38.2464 141.589 38.2671 141.581 38.2865C141.573 38.3058 141.562 38.3234 141.547 38.3382C141.532 38.353 141.514 38.3647 141.495 38.3727C141.476 38.3807 141.455 38.3848 141.434 38.3848L135.037 38.3985C134.995 38.3985 134.955 38.4153 134.925 38.4452C134.895 38.4751 134.878 38.5156 134.878 38.5579Z"
                        fill="#C29773"/>
                </g>
                <defs>
                    <clipPath id="clip0_116_408">
                        <rect width="142.049" height="56" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <div className={"description"}>Real estate agency in Dubai
                with 15 years of experience in market
            </div>
            <div>© 2023 All rights reserved</div>
        </div>
        <div className="menu-wrapper">
            <div className="menu">
                <div className="tittle">Quick Menu</div>
                <Link to={"/real-estate"}>
                    <div className="menu-option">Buy</div>
                </Link>
                <Link to={"/"}>
                    <div className="menu-option">Consulting</div>
                </Link>
                <Link to={"/concierge"}>
                    <div className="menu-option">Concierge</div>
                </Link>
                <ScrollLink
                    to="collections"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                >
                    <div style={{cursor: "pointer"}} className="menu-option">Our Collection</div>
                </ScrollLink>
            </div>
            <div className="menu">
                <div className="tittle">About Us</div>
                <div className="menu-option">Get Best Offers</div>
                <Link to={"/concierge"}>
                    <div className="menu-option">Must Know</div>
                </Link>
                <div className="menu-option">Contact Us</div>
            </div>
            <div className="menu">
                <div className="tittle">Contact Info</div>
                <div className="menu-option">Dubai, UAE</div>
                <a href="tel:+971521038793">
                    <div className="menu-option">+971 52 103 8793</div>
                </a>
                <a href="mailto:info@propart.com">
                    <div className="menu-option">info@propart.com</div>
                </a>

            </div>
        </div>
        <div className="information">
            <div className="location" onClick={()=>window.open("https://maps.app.goo.gl/82cX2nKJWnd4ZvacA")}>
                <div>Al Shafar Tower 1</div>
                <div>Dubai, UAE</div>
            </div>
            <div className="social">
                <svg style={{cursor:"pointer"}} onClick={()=>window.open("https://www.instagram.com/property.partners.uae?igshid=OGQ5ZDc2ODk2ZA%3D%3D")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                        fill="white"/>
                </svg>
                <svg style={{cursor:"pointer"}} onClick={()=>window.open("https://api.whatsapp.com/send/?phone=971521038793&text&type=phone_number&app_absent=0")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
                        fill="white"/>
                </svg>
                <svg style={{cursor:"pointer"}} onClick={()=>window.open("https://t.me/property_partnersUAE")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.89 13.17L8.903 13.163L9.773 16.033C9.885 16.344 10.039 16.4 10.226 16.374C10.414 16.349 10.513 16.248 10.636 16.13L11.824 14.982L14.374 16.87C14.84 17.127 15.175 16.994 15.291 16.438L16.948 8.616C17.131 7.888 16.811 7.596 16.246 7.828L6.513 11.588C5.849 11.854 5.853 12.226 6.393 12.391L8.89 13.171V13.17Z"
                        fill="white"/>
                </svg>
                <svg style={{cursor:"pointer"}} onClick={()=>window.open("https://www.facebook.com/people/Property-Partners-%D0%90%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE-%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-%D0%B2-%D0%94%D1%83%D0%B1%D0%B0%D0%B5/61551106169923/?mibextid=LQQJ4d")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.129 22 16.99 22 12C22 6.477 17.523 2 12 2Z"
                        fill="white"/>
                </svg>
            </div>
            <a href="tel:+971521038793">
            <div className="call-us">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path
                        d="M21.5 16.42V19.956C21.5001 20.2092 21.4042 20.453 21.2316 20.6382C21.059 20.8234 20.8226 20.9363 20.57 20.954C20.133 20.984 19.776 21 19.5 21C10.663 21 3.5 13.837 3.5 5C3.5 4.724 3.515 4.367 3.546 3.93C3.56372 3.67744 3.67658 3.44101 3.8618 3.26841C4.04703 3.09581 4.29082 2.99989 4.544 3H8.08C8.20404 2.99987 8.3237 3.04586 8.41573 3.12902C8.50776 3.21218 8.5656 3.32658 8.578 3.45C8.601 3.68 8.622 3.863 8.642 4.002C8.84073 5.38892 9.248 6.73783 9.85 8.003C9.945 8.203 9.883 8.442 9.703 8.57L7.545 10.112C8.86445 13.1865 11.3145 15.6365 14.389 16.956L15.929 14.802C15.9919 14.714 16.0838 14.6509 16.1885 14.6237C16.2932 14.5964 16.4042 14.6068 16.502 14.653C17.767 15.2539 19.1156 15.6601 20.502 15.858C20.641 15.878 20.824 15.9 21.052 15.922C21.1752 15.9346 21.2894 15.9926 21.3724 16.0846C21.4553 16.1766 21.5012 16.2961 21.501 16.42H21.5Z"
                        fill="white"/>
                </svg>
                Call us now
            </div>
            </a>
        </div>


    </footer>)
}
export default Footer