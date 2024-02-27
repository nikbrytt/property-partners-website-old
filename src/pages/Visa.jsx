import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Pages/visa.scss"
import accountaingBaner from "../assets/accounting-main.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import checkBrown from "../assets/minland/checkbox-circle-fill-brown.svg";
import checkGrey from "../assets/minland/checkbox-circle-fill-grey.svg";
import GetConsult from "../components/GetConsult"
import visa from "../assets/visa.jpg"
import world from "../assets/visa/world.jpg"
import home from "../assets/visa/home.svg"

import alexLogachevName from "../assets/teams/alex-logachev-min.jpg";
import qrAlex from "../assets/teams/qr/qr-alex.svg";
import alekseiShyianName from "../assets/teams/aleksei-shyian-min.jpg";
import alekseiShyian from "../assets/teams/qr/aleksei-shyian.png";
import tykhovaTatianaName from "../assets/teams/tykhova-tatiana-min.jpg";
import tykhovaTatiana from "../assets/teams/qr/tykhova-tatiana.png";
import kristinaSokolovskayaName from "../assets/teams/kristina-sokolovskaya-min.jpg";
import kristinaSokolovskaya from "../assets/teams/qr/kristina-sokolovskaya.png";
import pavelDyninName from "../assets/teams/pavel-dynin-min.jpg";
import propertyPartnersDynin from "../assets/teams/qr/property-partners-dynin.png";
import annaHorshunovaName from "../assets/teams/anna-horshunova-min.jpg";
import annaHorshunova from "../assets/teams/qr/anna-horshunova.png";
import allaGerassimovaName from "../assets/teams/alla-gerassimova-min.jpg";
import allaGerassimova from "../assets/teams/qr/alla-gerassimova.png";
import dmitriyKoltsovName from "../assets/teams/dmitriy-koltsov-min.jpg";
import dmitriyKoltsov from "../assets/teams/qr/dmitriy-koltsov.png";
import RequestModal from "../components/RequestModal.jsx";

import ConsulatingBaner from "../components/ConsulatingBaner"
import NewConsultBaner from "../components/NewConsultBaner"
import BanerBlocks from "../components/BanerBlocks.jsx"
import {Helmet} from "react-helmet";

function Visa() {
    const { t } = useTranslation();
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 8));

    const team = [
        {
            "image": alexLogachevName, "name": "Alex Logachev", "position": "CEO", "qr": qrAlex,
            "social": {
                "telegram": "https://t.me/oleksandr_logachev",
                "instagram": "https://www.instagram.com/logachev_alexsandr?igshid=MzRlODBiNWFlZA%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971588395135&text&type=phone_number&app_absent=0",
                "facebook": "https://www.facebook.com/logachev.alexsandr?mibextid=LQQJ4d"
            }
        },
        {
            "image": alekseiShyianName, "name": "Aleksei Shyian", "position": "Business Developer", "qr": alekseiShyian,
            "social": {
                "instagram": "https://www.instagram.com/dubai_oleksii_shyian",
                "telegram": "https://t.me/brodubai"
            }
        },
        {
            "image": tykhovaTatianaName, "name": "Tykhova Tatiana", "position": "Real estate broker", "qr": tykhovaTatiana,
            "social": {
                "instagram": "https://www.instagram.com/taffeeta",
                "telegram": "https://t.me/+971522419898",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971522419898&text&type=phone_number&app_absent=0"
            }
        }
        ,
        {
            "image": kristinaSokolovskayaName, "name": "Kristina Sokolovskaya", "position": "CEO Kristal Business Experts", "qr": kristinaSokolovskaya,
            "social": {
                "telegram": "https://t.me/+971529568%20390",
            }
        },
        {
            "image": pavelDyninName, "name": "Pavel Dynin", "position": "Real estate broker", "qr": propertyPartnersDynin,
            "social": {
                "telegram": "https://t.me/pavel_dynin",
                "instagram": "https://www.instagram.com/pavel.dynin?igshid=OGQ5Z%20Dc2ODk2ZA%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585622362&text&type=phone_number&app_absent=0",
                "facebook": "https://www.facebook.com/csdus?mibextid=LQQJ%204d"
            }
        },
        {
            "image": annaHorshunovaName, "name": "Anna Horshunova", "position": "Real estate broker", "qr": annaHorshunova,
            "social": {
                facebook: "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d"
            }
        },
        {
            "image": allaGerassimovaName, "name": "Alla Gerassimova", "position": "Marketer, content maker", "qr": allaGerassimova,
            "social": {
                "telegram": "https://t.me/alla_gerassimova",
                "instagram": "https://www.instagram.com/a11gep?igshid=NTc4MTIw+NjQ2YQ%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971555728933&text&type=phone_number&app_absent=0",
            }
        },
        {
            "image": dmitriyKoltsovName, "name": "Dmitriy Koltsov", "position": "Real estate broker", "qr": dmitriyKoltsov,
            "social": {
                "telegram": "https://t.me/brokervdubae",
                "instagram": "https://www.instagram.com/brokervdubae",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585589938&text&type=phone_number&app_absent=0",
            }
        },
    ]
    const guides = [
        {
            number: '01',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M10.3008 2C9.47235 2 8.80078 2.67157 8.80078 3.5V4.5C8.80078 5.32843 9.47235 6 10.3008 6H15.3008C16.1292 6 16.8008 5.32843 16.8008 4.5V3.5C16.8008 2.67157 16.1292 2 15.3008 2H10.3008Z" fill="#C29773" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.67946 4.87694C5.24876 4.30764 6.04288 4.10719 7.30078 4.03662V4.5C7.30078 6.15685 8.64393 7.5 10.3008 7.5H15.3008C16.9576 7.5 18.3008 6.15685 18.3008 4.5V4.03662C19.5587 4.10719 20.3528 4.30764 20.9221 4.87694C21.8008 5.75562 21.8008 7.16983 21.8008 9.99826V15.9983C21.8008 18.8267 21.8008 20.2409 20.9221 21.1196C20.0434 21.9983 18.6292 21.9983 15.8008 21.9983H9.80078C6.97235 21.9983 5.55814 21.9983 4.67946 21.1196C3.80078 20.2409 3.80078 18.8267 3.80078 15.9983V9.99826C3.80078 7.16983 3.80078 5.75562 4.67946 4.87694ZM13.5508 11C13.5508 10.5858 13.215 10.25 12.8008 10.25C12.3866 10.25 12.0508 10.5858 12.0508 11L12.0508 13.25H9.80078C9.38657 13.25 9.05078 13.5858 9.05078 14C9.05078 14.4142 9.38657 14.75 9.80078 14.75H12.0508V17C12.0508 17.4142 12.3866 17.75 12.8008 17.75C13.215 17.75 13.5508 17.4142 13.5508 17L13.5508 14.75H15.8008C16.215 14.75 16.5508 14.4142 16.5508 14C16.5508 13.5858 16.215 13.25 15.8008 13.25H13.5508V11Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                    <g opacity="0.1">
                        <path d="M59.375 -35.5C54.1973 -35.5 50 -31.3027 50 -26.125V-19.875C50 -14.6973 54.1973 -10.5 59.375 -10.5H90.625C95.8027 -10.5 100 -14.6973 100 -19.875V-26.125C100 -31.3027 95.8027 -35.5 90.625 -35.5H59.375Z" fill="#C29773" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2417 -17.5191C27.7999 -21.0773 32.7631 -22.3301 40.625 -22.7712V-19.875C40.625 -9.51966 49.0197 -1.125 59.375 -1.125H90.625C100.98 -1.125 109.375 -9.51966 109.375 -19.875V-22.7712C117.237 -22.3301 122.2 -21.0773 125.758 -17.5191C131.25 -12.0274 131.25 -3.18853 131.25 14.4891V51.9891C131.25 69.6668 131.25 78.5056 125.758 83.9974C120.267 89.4891 111.428 89.4891 93.75 89.4891H56.25C38.5723 89.4891 29.7335 89.4891 24.2417 83.9974C18.75 78.5056 18.75 69.6668 18.75 51.9891V14.4891C18.75 -3.18853 18.75 -12.0274 24.2417 -17.5191ZM79.6875 20.75C79.6875 18.1612 77.5888 16.0625 75 16.0625C72.4112 16.0625 70.3125 18.1612 70.3125 20.75L70.3125 34.8127H56.25C53.6612 34.8127 51.5625 36.9113 51.5625 39.5002C51.5625 42.089 53.6612 44.1877 56.25 44.1877H70.3125V58.25C70.3125 60.8388 72.4112 62.9375 75 62.9375C77.5888 62.9375 79.6875 60.8388 79.6875 58.25L79.6875 44.1877H93.75C96.3388 44.1877 98.4375 42.089 98.4375 39.5002C98.4375 36.9113 96.3388 34.8127 93.75 34.8127H79.6875V20.75Z" fill="#C29773" />
                    </g>
                </svg>
            ),

            text: t("block-visa.1"),
        },
        {
            number: '02',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M17.1205 16.5013C17.2955 16.3648 17.4542 16.2061 17.7716 15.8886L21.729 11.9312C21.8247 11.8356 21.7809 11.6708 21.6531 11.6264C21.186 11.4644 20.5783 11.1601 20.0099 10.5917C19.4415 10.0233 19.1372 9.41561 18.9751 8.94849C18.9308 8.82066 18.766 8.77687 18.6703 8.87254L14.7129 12.8299C14.3955 13.1474 14.2368 13.3061 14.1003 13.4811C13.9392 13.6876 13.8012 13.9109 13.6886 14.1473C13.5931 14.3476 13.5221 14.5606 13.3801 14.9865L13.1967 15.5368L12.905 16.4118L12.6315 17.2323C12.5616 17.4419 12.6162 17.6729 12.7724 17.8292C12.9286 17.9854 13.1597 18.0399 13.3693 17.9701L14.1898 17.6966L15.0648 17.4049L15.6151 17.2214L15.6151 17.2214C16.041 17.0795 16.2539 17.0085 16.4543 16.913C16.6906 16.8004 16.914 16.6623 17.1205 16.5013Z" fill="#C29773" />
                    <path d="M22.9681 10.6922C23.8127 9.84754 23.8127 8.47812 22.9681 7.63348C22.1234 6.78884 20.754 6.78884 19.9094 7.63348L19.7822 7.76071C19.6594 7.88348 19.6038 8.05496 19.6344 8.22586C19.6537 8.33336 19.6895 8.49053 19.7546 8.67807C19.8847 9.05314 20.1304 9.54549 20.5932 10.0083C21.0561 10.4712 21.5484 10.7169 21.9235 10.847C22.111 10.9121 22.2682 10.9478 22.3757 10.9671C22.5466 10.9978 22.7181 10.9422 22.8409 10.8194L22.9681 10.6922Z" fill="#C29773" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77314 3.17157C3.60156 4.34315 3.60156 6.22876 3.60156 10V14C3.60156 17.7712 3.60156 19.6569 4.77314 20.8284C5.94471 22 7.83033 22 11.6016 22H13.6016C17.3728 22 19.2584 22 20.43 20.8284C21.5828 19.6756 21.6013 17.8316 21.6016 14.1801L18.7833 16.9984C18.5135 17.2683 18.2926 17.4894 18.043 17.6841C17.7507 17.9121 17.4344 18.1076 17.0997 18.2671C16.814 18.4032 16.5174 18.502 16.1554 18.6225L13.8437 19.3931C13.0951 19.6426 12.2698 19.4478 11.7118 18.8898C11.1538 18.3318 10.959 17.5065 11.2085 16.7579L11.482 15.9375L11.9571 14.5121L11.9791 14.4463C12.0996 14.0842 12.1984 13.7876 12.3345 13.5019C12.494 13.1672 12.6895 12.8509 12.9175 12.5586C13.1122 12.309 13.3333 12.0881 13.6033 11.8183L17.6097 7.81188L18.7215 6.70004L18.8488 6.57282C19.5642 5.85741 20.5019 5.49981 21.4395 5.5C21.2882 4.46945 20.9957 3.73727 20.43 3.17157C19.2584 2 17.3728 2 13.6016 2H11.6016C7.83033 2 5.94471 2 4.77314 3.17157ZM7.85156 9C7.85156 8.58579 8.18735 8.25 8.60156 8.25H15.1016C15.5158 8.25 15.8516 8.58579 15.8516 9C15.8516 9.41421 15.5158 9.75 15.1016 9.75H8.60156C8.18735 9.75 7.85156 9.41421 7.85156 9ZM7.85156 13C7.85156 12.5858 8.18735 12.25 8.60156 12.25H11.1016C11.5158 12.25 11.8516 12.5858 11.8516 13C11.8516 13.4142 11.5158 13.75 11.1016 13.75H8.60156C8.18735 13.75 7.85156 13.4142 7.85156 13ZM7.85156 17C7.85156 16.5858 8.18735 16.25 8.60156 16.25H10.1016C10.5158 16.25 10.8516 16.5858 10.8516 17C10.8516 17.4142 10.5158 17.75 10.1016 17.75H8.60156C8.18735 17.75 7.85156 17.4142 7.85156 17Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="102" viewBox="0 0 104 102" fill="none">
                    <g opacity="0.1">
                        <path d="M104.044 55.1332C105.138 54.28 106.13 53.288 108.114 51.304L132.847 26.5703C132.979 26.4383 133.045 26.3723 133.076 26.3346C133.51 25.8064 133.343 25.0773 132.722 24.7914C132.678 24.771 132.576 24.7357 132.373 24.6652L132.373 24.6652C129.453 23.6523 125.655 21.7506 122.103 18.198C118.55 14.6454 116.648 10.8476 115.636 7.92805L115.636 7.9278C115.565 7.72469 115.53 7.62312 115.509 7.57879C115.223 6.95779 114.494 6.79038 113.966 7.22441C113.929 7.25539 113.863 7.32133 113.731 7.45318L113.73 7.4534L88.9967 32.1872C87.0127 34.1712 86.0207 35.1632 85.1676 36.2569C84.1612 37.5472 83.2984 38.9433 82.5945 40.4204C81.9977 41.6726 81.554 43.0035 80.6668 45.6653L79.5203 49.1048L77.6973 54.5738L75.9879 59.7018C75.5513 61.0117 75.8922 62.4559 76.8686 63.4322C77.8449 64.4085 79.2891 64.7495 80.599 64.3128L85.727 62.6035L91.196 60.7805L94.6355 59.634L94.6357 59.6339C97.2973 58.7467 98.6282 58.3031 99.8804 57.7063C101.358 57.0023 102.754 56.1395 104.044 55.1332Z" fill="#C29773" />
                        <path d="M140.592 18.8261C145.871 13.5471 145.871 4.98822 140.592 -0.290763C135.313 -5.56975 126.754 -5.56975 121.475 -0.290763L120.148 1.03621C119.818 1.36554 119.654 1.53021 119.58 1.76335C119.506 1.9965 119.546 2.22138 119.625 2.67113C119.678 2.9762 119.731 3.27025 119.756 3.4116C119.877 4.08351 120.1 5.06582 120.507 6.23797C121.32 8.58212 122.856 11.6593 125.749 14.552C128.642 17.4447 131.719 18.9805 134.063 19.7938C135.235 20.2005 136.217 20.424 136.889 20.5446C137.031 20.57 137.325 20.6224 137.63 20.6759C138.079 20.7549 138.304 20.7943 138.537 20.7207C138.771 20.6471 138.935 20.4824 139.265 20.1531L140.592 18.8261Z" fill="#C29773" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8731 -28.1777C19.5508 -20.8553 19.5508 -9.07023 19.5508 14.5V39.5C19.5508 63.0702 19.5508 74.8553 26.8731 82.1777C34.1954 89.5 45.9806 89.5 69.5508 89.5H82.0508C105.621 89.5 117.406 89.5 124.728 82.1777C131.933 74.9728 132.049 63.4472 132.051 40.6254L114.436 58.2399C112.75 59.9272 111.369 61.309 109.81 62.5255C107.983 63.9506 106.006 65.1724 103.914 66.1694C102.129 67.0202 100.275 67.6374 98.012 68.3908L83.5639 73.2067C78.8853 74.7663 73.727 73.5486 70.2397 70.0613C66.7524 66.5741 65.5347 61.4158 67.0943 56.7372L68.8036 51.6091L71.7731 42.7007L71.9101 42.2894C72.6636 40.0262 73.2807 38.1726 74.1317 36.3871C75.1286 34.2953 76.3504 32.3183 77.7756 30.4911C78.992 28.9315 80.374 27.5505 82.0613 25.8644L107.102 0.824276L114.051 -6.12473L114.846 -6.91989C119.317 -11.3912 125.178 -13.6262 131.038 -13.625C130.092 -20.0659 128.264 -24.642 124.728 -28.1777C117.406 -35.5 105.621 -35.5 82.0508 -35.5H69.5508C45.9806 -35.5 34.1954 -35.5 26.8731 -28.1777ZM46.1133 8.25C46.1133 5.66116 48.2119 3.5625 50.8008 3.5625H91.4258C94.0146 3.5625 96.1133 5.66116 96.1133 8.25C96.1133 10.8388 94.0146 12.9375 91.4258 12.9375H50.8008C48.2119 12.9375 46.1133 10.8388 46.1133 8.25ZM46.1133 33.25C46.1133 30.6612 48.2119 28.5625 50.8008 28.5625H66.4258C69.0146 28.5625 71.1133 30.6612 71.1133 33.25C71.1133 35.8388 69.0146 37.9375 66.4258 37.9375H50.8008C48.2119 37.9375 46.1133 35.8388 46.1133 33.25ZM46.1133 58.25C46.1133 55.6612 48.2119 53.5625 50.8008 53.5625H60.1758C62.7646 53.5625 64.8633 55.6612 64.8633 58.25C64.8633 60.8388 62.7646 62.9375 60.1758 62.9375H50.8008C48.2119 62.9375 46.1133 60.8388 46.1133 58.25Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("block-visa.2"),
        },
        {
            number: '03',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86681 3.46447C2.40234 4.92893 2.40234 7.28595 2.40234 12C2.40234 16.714 2.40234 19.0711 3.86681 20.5355C5.33128 22 7.6883 22 12.4023 22C17.1164 22 19.4734 22 20.9379 20.5355C22.4023 19.0711 22.4023 16.714 22.4023 12C22.4023 7.28595 22.4023 4.92893 20.9379 3.46447C19.4734 2 17.1164 2 12.4023 2C7.6883 2 5.33128 2 3.86681 3.46447ZM17.4023 12.25C17.8166 12.25 18.1523 12.5858 18.1523 13V18C18.1523 18.4142 17.8166 18.75 17.4023 18.75C16.9881 18.75 16.6523 18.4142 16.6523 18V13C16.6523 12.5858 16.9881 12.25 17.4023 12.25ZM13.1523 6C13.1523 5.58579 12.8166 5.25 12.4023 5.25C11.9881 5.25 11.6523 5.58579 11.6523 6V18C11.6523 18.4142 11.9881 18.75 12.4023 18.75C12.8166 18.75 13.1523 18.4142 13.1523 18V6ZM7.40234 8.25C7.81656 8.25 8.15234 8.58579 8.15234 9V18C8.15234 18.4142 7.81656 18.75 7.40234 18.75C6.98813 18.75 6.65234 18.4142 6.65234 18V9C6.65234 8.58579 6.98813 8.25 7.40234 8.25Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="102" viewBox="0 0 104 102" fill="none">
                    <g opacity="0.1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2545 -26.3471C13.1016 -17.1942 13.1016 -2.46278 13.1016 27C13.1016 56.4628 13.1016 71.1942 22.2545 80.3471C31.4074 89.5 46.1388 89.5 75.6016 89.5C105.064 89.5 119.796 89.5 128.949 80.3471C138.102 71.1942 138.102 56.4628 138.102 27C138.102 -2.46278 138.102 -17.1942 128.949 -26.3471C119.796 -35.5 105.064 -35.5 75.6016 -35.5C46.1388 -35.5 31.4074 -35.5 22.2545 -26.3471ZM106.852 28.5625C109.44 28.5625 111.539 30.6612 111.539 33.25V64.5C111.539 67.0888 109.44 69.1875 106.852 69.1875C104.263 69.1875 102.164 67.0888 102.164 64.5V33.25C102.164 30.6612 104.263 28.5625 106.852 28.5625ZM80.2891 -10.5C80.2891 -13.0888 78.1904 -15.1875 75.6016 -15.1875C73.0127 -15.1875 70.9141 -13.0888 70.9141 -10.5V64.5C70.9141 67.0888 73.0127 69.1875 75.6016 69.1875C78.1904 69.1875 80.2891 67.0888 80.2891 64.5V-10.5ZM44.3516 3.5625C46.9404 3.5625 49.0391 5.66116 49.0391 8.25V64.5C49.0391 67.0888 46.9404 69.1875 44.3516 69.1875C41.7627 69.1875 39.6641 67.0888 39.6641 64.5V8.25C39.6641 5.66116 41.7627 3.5625 44.3516 3.5625Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("block-visa.3"),
        },
        {
            number: '04',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.37079 3.17157C3.19922 4.34315 3.19922 6.22876 3.19922 10V14C3.19922 17.7712 3.19922 19.6569 4.37079 20.8284C5.54236 22 7.42798 22 11.1992 22H13.1992C16.9705 22 18.8561 22 20.0276 20.8284C21.1992 19.6569 21.1992 17.7712 21.1992 14V10C21.1992 6.22876 21.1992 4.34315 20.0276 3.17157C18.8561 2 16.9705 2 13.1992 2H11.1992C7.42798 2 5.54236 2 4.37079 3.17157ZM7.44922 8C7.44922 7.58579 7.78501 7.25 8.19922 7.25H16.1992C16.6134 7.25 16.9492 7.58579 16.9492 8C16.9492 8.41421 16.6134 8.75 16.1992 8.75H8.19922C7.78501 8.75 7.44922 8.41421 7.44922 8ZM7.44922 12C7.44922 11.5858 7.78501 11.25 8.19922 11.25H16.1992C16.6134 11.25 16.9492 11.5858 16.9492 12C16.9492 12.4142 16.6134 12.75 16.1992 12.75H8.19922C7.78501 12.75 7.44922 12.4142 7.44922 12ZM8.19922 15.25C7.78501 15.25 7.44922 15.5858 7.44922 16C7.44922 16.4142 7.78501 16.75 8.19922 16.75H13.1992C13.6134 16.75 13.9492 16.4142 13.9492 16C13.9492 15.5858 13.6134 15.25 13.1992 15.25H8.19922Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="102" viewBox="0 0 104 102" fill="none">
                    <g opacity="0.1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4708 -28.1777C19.1484 -20.8553 19.1484 -9.07023 19.1484 14.5V39.5C19.1484 63.0702 19.1484 74.8553 26.4708 82.1777C33.7931 89.5 45.5782 89.5 69.1484 89.5H81.6484C105.219 89.5 117.004 89.5 124.326 82.1777C131.648 74.8553 131.648 63.0702 131.648 39.5V14.5C131.648 -9.07023 131.648 -20.8553 124.326 -28.1777C117.004 -35.5 105.219 -35.5 81.6484 -35.5H69.1484C45.5782 -35.5 33.7931 -35.5 26.4708 -28.1777ZM50.3984 9.8125C47.8096 9.8125 45.7109 11.9112 45.7109 14.5C45.7109 17.0888 47.8096 19.1875 50.3984 19.1875H100.398C102.987 19.1875 105.086 17.0888 105.086 14.5C105.086 11.9112 102.987 9.8125 100.398 9.8125H50.3984ZM50.3984 34.8125C47.8096 34.8125 45.7109 36.9112 45.7109 39.5C45.7109 42.0888 47.8096 44.1875 50.3984 44.1875H81.6484C84.2373 44.1875 86.3359 42.0888 86.3359 39.5C86.3359 36.9112 84.2373 34.8125 81.6484 34.8125H50.3984Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("block-visa.4"),
        },
        {
            number: '05',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H13C13.4142 16.75 13.75 16.4142 13.75 16C13.75 15.5858 13.4142 15.25 13 15.25H8Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="103" height="102" viewBox="0 0 103 102" fill="none">
                    <g opacity="0.1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2715 -28.1777C18.9492 -20.8553 18.9492 -9.07023 18.9492 14.5V39.5C18.9492 63.0702 18.9492 74.8553 26.2715 82.1777C33.5939 89.5 45.379 89.5 68.9492 89.5H81.4492C105.019 89.5 116.805 89.5 124.127 82.1777C131.449 74.8553 131.449 63.0702 131.449 39.5V14.5C131.449 -9.07023 131.449 -20.8553 124.127 -28.1777C116.805 -35.5 105.019 -35.5 81.4492 -35.5H68.9492C45.379 -35.5 33.5939 -35.5 26.2715 -28.1777ZM50.1992 9.8125C47.6104 9.8125 45.5117 11.9112 45.5117 14.5C45.5117 17.0888 47.6104 19.1875 50.1992 19.1875H100.199C102.788 19.1875 104.887 17.0888 104.887 14.5C104.887 11.9112 102.788 9.8125 100.199 9.8125H50.1992ZM50.1992 34.8125C47.6104 34.8125 45.5117 36.9112 45.5117 39.5C45.5117 42.0888 47.6104 44.1875 50.1992 44.1875H81.4492C84.038 44.1875 86.1367 42.0888 86.1367 39.5C86.1367 36.9112 84.038 34.8125 81.4492 34.8125H50.1992Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("employee-visa"),
        }
    ];
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState({
        tittleText: "Our expert will reach you out",
        buttonText: "Get a free consultation"
    });

    const TypeButton = ({ text }) => {
        return (
            <div className="button">{text}</div>
        );
    }


    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="visa-wrapper ">
            <Helmet>
                <title>UAE Resident Visa Services | ProPart Consulting - Your Gateway to Seamless Visa Solutions</title>
                <meta name="description" content="Embark on a hassle-free journey to obtaining a UAE resident visa with ProPart Consulting. Explore expert guidance for various visa categories, efficient registration processes, and more. Choose from Property Investor, Talent, Start-up, Business, or Employee visas. Get started with a free consultation today!" />
                <meta name="keywords" content="UAE Resident Visa, Visa Categories UAE, Property Investor Visa, Talent Visa, Start-up Visa, Business Visa, Employee Visa, ProPart Consulting, Visa Services UAE, Efficient Visa Registration, UAE Visa Expertise, Golden Visa, Residence Permit Programs, UAE Visa Renewal, Visa Costs and Renewal Details" />
            </Helmet>
            <Header></Header>
            <div className="visa-container">
                <div className="visa-baner-guide">
                    <NewConsultBaner
                        img={accountaingBaner}
                        title={t('visaBanerTitle')}
                        description={[t("visaBanerDescription")]}
                    />
                    <BanerBlocks
                        guides={guides}
                    />
                </div>

                <div id="detail" className="detail">
                    <div>{t('detail.1')}</div>
                    <div>{t('detail.2')}</div>
                </div>

                <div className="residence">
                    <div className="permit">
                        <div className="content">
                            <div className="title">
                                {t('visa-title')}
                            </div>
                            <div className="list">
                                <div className="elem">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z" fill="#191C38" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12ZM17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17ZM7 14C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14ZM7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z" fill="#191C38" />
                                        </svg>
                                    </div>
                                    <div className="cont">
                                        <div>{t("name304.1")}</div>
                                        <div>{t("name304.2")}</div>
                                    </div>
                                </div>
                                <div className="elem">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5.19825 3.29918C5.80046 2 7.86697 2 12 2C16.133 2 18.1995 2 18.8017 3.29918C18.8535 3.41086 18.8972 3.52686 18.9323 3.6461C19.3414 5.0333 17.8802 6.64111 14.9577 9.85674L13 12L14.9577 14.1433C17.8802 17.3589 19.3414 18.9667 18.9323 20.3539C18.8972 20.4731 18.8535 20.5891 18.8017 20.7008C18.1995 22 16.133 22 12 22C7.86697 22 5.80046 22 5.19825 20.7008C5.14649 20.5891 5.10282 20.4731 5.06765 20.3539C4.65857 18.9667 6.11981 17.3589 9.0423 14.1433L11 12L9.0423 9.85674C6.11981 6.64111 4.65857 5.0333 5.06765 3.6461C5.10282 3.52686 5.14649 3.41086 5.19825 3.29918Z" fill="#191C38" />
                                        </svg>
                                    </div>

                                    <div className="cont">
                                        <div>{t("name305.1")}</div>
                                        <div>{t("name305.2")}</div>
                                    </div>
                                </div>
                                <div className="elem">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM7.55004 9.60004C7.21867 9.35152 7.15152 8.88141 7.40004 8.55004C7.64857 8.21867 8.11867 8.15152 8.45004 8.40004L10.45 9.90004C10.6389 10.0417 10.75 10.264 10.75 10.5C10.75 10.7361 10.6389 10.9584 10.45 11.1L8.45004 12.6C8.11867 12.8486 7.64857 12.7814 7.40004 12.45C7.15152 12.1187 7.21867 11.6486 7.55004 11.4L8.75004 10.5L7.55004 9.60004ZM16.6 8.55004C16.8486 8.88141 16.7814 9.35152 16.45 9.60004L15.25 10.5L16.45 11.4C16.7814 11.6486 16.8486 12.1187 16.6 12.45C16.3515 12.7814 15.8814 12.8486 15.55 12.6L13.55 11.1C13.3612 10.9584 13.25 10.7361 13.25 10.5C13.25 10.264 13.3612 10.0417 13.55 9.90004L15.55 8.40004C15.8814 8.15152 16.3515 8.21867 16.6 8.55004ZM15.5304 16.5304C15.2375 16.8233 14.7626 16.8233 14.4697 16.5304L13.9996 16.0603C13.4388 16.5896 12.5607 16.5895 12 16.0599C11.4394 16.5895 10.5613 16.5896 10.0005 16.0603L9.53037 16.5304C9.23748 16.8233 8.76261 16.8233 8.46971 16.5304C8.17682 16.2375 8.17682 15.7626 8.46971 15.4697L8.96971 14.9697C9.52875 14.4107 10.429 14.4009 11 14.9403C11.5609 14.4105 12.4392 14.4105 13 14.9403C13.5711 14.4009 14.4713 14.4107 15.0304 14.9697L15.5304 15.4697C15.8233 15.7626 15.8233 16.2375 15.5304 16.5304Z" fill="#191C38" />
                                        </svg>
                                    </div>
                                    <div className="cont">
                                        <div>{t("name306.1")}</div>
                                        <div>{t("name306.2")}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="pro-part">
                        <div className="title">{t("name307")}</div>
                        <div className="list">
                            <div className="elem">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5.66953 9.91436L8.73167 5.77133C10.711 3.09327 11.7007 1.75425 12.6241 2.03721C13.5474 2.32018 13.5474 3.96249 13.5474 7.24712V7.55682C13.5474 8.74151 13.5474 9.33386 13.926 9.70541L13.946 9.72466C14.3327 10.0884 14.9492 10.0884 16.1822 10.0884C18.4011 10.0884 19.5106 10.0884 19.8855 10.7613C19.8917 10.7724 19.8977 10.7837 19.9036 10.795C20.2576 11.4784 19.6152 12.3475 18.3304 14.0857L15.2683 18.2287C13.2889 20.9067 12.2992 22.2458 11.3758 21.9628C10.4525 21.6798 10.4525 20.0375 10.4525 16.7528L10.4526 16.4433C10.4526 15.2585 10.4526 14.6662 10.074 14.2946L10.054 14.2754C9.6673 13.9117 9.05079 13.9117 7.81775 13.9117C5.59888 13.9117 4.48945 13.9117 4.1145 13.2387C4.10829 13.2276 4.10225 13.2164 4.09639 13.205C3.74244 12.5217 4.3848 11.6526 5.66953 9.91436Z" fill="white" />
                                    </svg>
                                </div>

                                <div className="cont">
                                    <div>{t("name308.1")}</div>
                                    <div>{t("name308.2")}</div>
                                </div>
                            </div>
                            <div className="elem">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 2C9.25 1.58579 9.58579 1.25 10 1.25H14C14.4142 1.25 14.75 1.58579 14.75 2C14.75 2.41421 14.4142 2.75 14 2.75H10C9.58579 2.75 9.25 2.41421 9.25 2Z" fill="white" />
                                    </svg>
                                </div>

                                <div className="cont">
                                    <div>{t("name309.1")}</div>
                                    <div>{t("name309.2")}</div>
                                </div>
                            </div>
                            <div className="elem">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534ZM16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="cont">
                                    <div>{t("name310.1")}</div>
                                    <div>{t("name310.2")}</div>
                                </div>
                            </div>
                            <div className="elem">
                                <div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V9C20 7.34315 18.6569 6 17 6H5C4.44772 6 4 5.55228 4 5ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM7.25 15.5C7.25 15.0858 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 15.0858 14.25 15.5C14.25 15.9142 13.9142 16.25 13.5 16.25H8C7.58579 16.25 7.25 15.9142 7.25 15.5Z" fill="white" />
                                        <path d="M4.40879 4.0871C4.75727 4.24338 5 4.59334 5 5H17C17.3453 5 17.6804 5.04375 18 5.12602V4.30604C18 3.08894 16.922 2.15402 15.7172 2.32614L4.91959 3.86865C4.72712 3.89615 4.55271 3.97374 4.40879 4.0871Z" fill="white" />
                                    </svg>
                                </div>

                                <div className="cont">
                                    <div>{t("name311.1")}</div>
                                    <div>{t("name311.2")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GetConsult />

                <div className="what-table">
                    <div className="table-title">
                        <div>{t('residencePermit')}</div>
                        <div>{t('differFromVisa')}</div>
                    </div>
                    <div className="table-what">
                        <div className="table-row">
                            <div className="first-table-row"> {t('type')}</div>
                            <div className="second-table-row">{t("name318")}</div>
                            <div className="third-table-row">{t("name319")}</div>
                            <div className="fourth-table-row">{t("name320")}</div>
                        </div>
                        <div className="table-row">
                            <div className="first-table">{t("name313")}</div>
                            <div className="second-table"><img src={checkBrown} alt="" /></div>
                            <div className="third-table"><img src={checkBrown} alt="" /></div>
                            <div className="fourth-table"><img src={checkBrown} alt="" /></div>
                        </div>
                        <div className="table-row">
                            <div className="first-table">
                                <div>
                                    {t('type')}
                                </div>
                            </div>
                            <div className="second-table">
                                {t("name321")}
                            </div>
                            <div className="third-table">
                                <img src={checkBrown} alt="" />
                            </div>
                            <div className="fourth-table">
                                <img src={checkBrown} alt="" />
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="first-table">
                                <div>
                                    {t("name315")}
                                </div>
                            </div>
                            <div className="second-table">
                                <img src={checkBrown} alt="" />
                            </div>
                            <div className="third-table">
                                <img src={checkBrown} alt="" />
                            </div>
                            <div className="fourth-table">
                                <img src={checkBrown} alt="" />
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="first-table">
                                <div>
                                    {t("name316")}
                                </div>
                            </div>
                            <div className="second-table">
                                <img src={checkGrey} alt="" />
                            </div>
                            <div className="third-table">
                                <img src={checkBrown} alt="" />
                            </div>
                            <div className="fourth-table">
                                <img src={checkBrown} alt="" />
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="first-table">
                                <div>
                                    {t("name317")}
                                </div>
                            </div>
                            <div className="second-table">
                                <img src={checkBrown} alt="" />
                            </div>
                            <div className="third-table">
                                <img src={checkGrey} alt="" />
                            </div>
                            <div className="fourth-table">
                                {t('gccCountries')}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="emirates-id">
                    <div className="title">
                        <div>{t("name322")}</div>
                        <div>{t("name323")}</div>
                    </div>

                    <div className="id-percent">
                        <div className="id-text">
                            <div className="id">
                                <img src={visa} alt="" />
                            </div>
                            <div className="text">
                                {t("name328")}
                            </div>
                        </div>
                        <div className="percent">
                            <div className="block">
                                <div>{t("name324")}</div>
                                <div>{t("name326")}</div>
                            </div>
                            <div className="block">
                                <div>{t("name327")}</div>
                                <div>{t("name3292")}</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="get-residance">
                    <div className="title">
                        {t("name329")}
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <div className="card-title">
                                <div>{t('cardTitle.economicDevelopment')}</div>
                                <div>{t('cardTitle.highlyPaidAcademic')}</div>
                            </div>
                            <div className="list">
                                <div className="button">
                                    <div className="text">
                                        {t('buttons.goldenVisa')}
                                    </div>
                                </div>
                                <div className="button">
                                    <div className="text">
                                        {t('buttons.retirementVisa')}
                                    </div>
                                </div>
                                <div className="button">
                                    <div className="text">
                                        {t('buttons.partnerInvestorVisa')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {t('cards', { returnObjects: true }).map((card, index) => (
                            <div key={index} className="card">
                                <div className="card-title">
                                    <div>{t(`cards.${index}.title.question`)}</div>
                                    <div>{t(`cards.${index}.title.description`)}</div>
                                </div>
                                <div className="list">
                                    {card.buttons.map((button, buttonIndex) => (
                                        <div key={buttonIndex} className="button">
                                            <div className="text">{t(`cards.${index}.buttons.${buttonIndex}.text`)}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="how-long">
                    <div className="content">
                        <div className="title">
                            <div>{t("name353")}</div>
                        </div>

                        <div className="buttons">
                            <div className="button-title">
                                {t("name357")}
                            </div>
                            <div className="button-container">
                                <div className="button" onClick={setShowModal} >{t("name356")}</div>
                                <div className="button" onClick={setShowModal}>{t("name357")}</div>
                                <div className="button" onClick={setShowModal}>{t("name358")}</div>
                            </div>
                        </div>
                        <div className="button-text">
                            <div className="buttons">
                                <div className="button-title">
                                    {t("name357")}
                                </div>
                                <div className="button-container">
                                    <div className="button" onClick={setShowModal}>{t("name300")}</div>
                                    <div className="button" onClick={setShowModal}>{t("name342")}</div>
                                    <div className="button" onClick={setShowModal}>{t("name362")}</div>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="button-title">
                                {t("name357")}
                            </div>
                            <div className="button-container">
                                <div className="button" onClick={setShowModal}>{t("name338")}</div>
                                <div className="button" onClick={setShowModal}>{t("name339")}</div>
                                <div className="button" onClick={setShowModal}>{t("name340")}</div>
                            </div>
                        </div>
                    </div>
                    <div className="image"></div>
                </div>


                <div className="deadline-grounds">
                    <div className="block">
                        <div className="img-title">
                            <img src={world} alt="" />
                            <div>{t("name370")}</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                            <path d="M75 89.5C40.4813 89.5 12.5 61.5187 12.5 27C12.5 -7.51875 40.4813 -35.5 75 -35.5C109.519 -35.5 137.5 -7.51875 137.5 27C137.5 61.5187 109.519 89.5 75 89.5ZM114.719 51.7V51.0437C114.719 45.2812 114.719 42.65 110.644 40.3187C109.334 39.5762 107.989 38.8983 106.613 38.2875C104.319 37.2438 102.8 36.5625 100.75 33.5625C100.505 33.2063 100.264 32.8479 100.025 32.4875C97.8688 29.2063 96.3125 26.8438 90.3875 27.7812C78.7312 29.6312 77.8688 31.6813 77.3562 35.1438L77.275 35.7125C76.5188 40.775 76.3812 42.475 78.4938 44.6937C86.4 52.9875 91.1375 58.9687 92.575 62.4687C93.275 64.175 95.075 69.3438 93.8375 74.4563C101.424 71.4345 108.177 66.6405 113.531 60.475C114.219 58.1375 114.719 55.225 114.719 51.7ZM75 -24.0438C60.5187 -24.0438 47.4375 -18.0063 38.15 -8.31875C39.2563 -7.55 40.2188 -6.46875 40.8812 -4.98125C42.1562 -2.125 42.1562 0.818748 42.1562 3.425C42.1562 5.475 42.1562 7.425 42.8125 8.83125C43.7125 10.7563 47.6 11.5813 51.0312 12.2938C52.2625 12.5563 53.525 12.8187 54.675 13.1375C57.8375 14.0125 60.2875 16.8562 62.2437 19.1375C63.0562 20.0812 64.2625 21.475 64.8687 21.825C65.1812 21.6 66.1875 20.5062 66.6812 18.7125C67.0687 17.3375 66.9562 16.125 66.4 15.4625C62.9 11.3375 63.0937 3.4 64.175 0.46875C65.875 -4.15 71.1875 -3.80625 75.075 -3.55625C76.525 -3.4625 77.8875 -3.36875 78.9125 -3.5C82.8 -3.9875 84 -9.90625 84.8438 -11.0625C86.6687 -13.5625 92.2562 -17.3313 95.7188 -19.6563C89.1969 -22.5563 82.1376 -24.0512 75 -24.0438Z" fill="#C29773" />
                        </svg>
                        <div className="description">
                            <div>{t('residencePermitExtension')}</div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="img-title">
                            <img src={home} alt="" />
                            <div>{t("name372")}</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                            <path d="M125 77.0005C125 78.6581 124.342 80.2478 123.169 81.4199C121.997 82.592 120.408 83.2505 118.75 83.2505H31.25C29.5924 83.2505 28.0027 82.592 26.8306 81.4199C25.6585 80.2478 25 78.6581 25 77.0005V20.7505H6.25L70.7937 -37.9245C71.9444 -38.9715 73.4443 -39.5518 75 -39.5518C76.5557 -39.5518 78.0556 -38.9715 79.2063 -37.9245L143.75 20.7505H125V77.0005Z" fill="#C29773" />
                        </svg>
                        <div className="description">
                            <div>{t("residencePermitViolationWarning")}</div>
                        </div>
                    </div>
                </div>


                <div className="types-visas">
                    <div className="title">
                        {t("name374")}
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <div className="left-content">
                                <div className="content-title">
                                    <div>{t("name375")}</div>
                                    <div>{t("name376")}</div>
                                </div>
                                <div className="conditions">
                                    <div className="conditions-title">{t("name377")}</div>
                                    <div className="list-container">
                                        <div className="list">
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("name378")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("name379")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("name380")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("name381")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="or-container">
                                    <div className="line"></div>
                                    <div className="or">{t("name395")}</div>
                                    <div className="line"></div>
                                </div>
                                <div className="text-container">
                                    <div className="text">{t("name386")}</div>
                                    <div className="text">{t("name387")}</div>
                                </div>
                            </div>
                            <div className="right-content">
                                <div className="right-container">
                                    <div className="content-title">{t("name384")}</div>
                                    <div className="content">
                                        <div className="content-text">
                                            <div>{t("name382")}</div>
                                            <div className="content-text-title">
                                                <div className="text">{t("name383")}</div>
                                                <div className="text-light">{t("name385")}</div>
                                            </div>
                                        </div>

                                        <div className="price">
                                            <div className="aed-block">
                                                <div>{t("name396")}</div>
                                                <div>«Turnkey»</div>
                                            </div>
                                            <div className="dol-block">
                                                <div>{t("name397")}</div>
                                                <div>{t("name400")}</div>
                                            </div>
                                            <div className="days-block">
                                                <div>{t("name398")} <span> {t("business")}</span></div>
                                                <div>{t("name401")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="left-content">
                                <div className="content-title">
                                    <div>{t("name375")}</div>
                                    <div>{t("partnerVisa")}</div>
                                </div>
                                <div className="conditions">
                                    <div className="conditions-title">{t("name377")}</div>
                                    <div className="list-container">
                                        <div className="list">
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("companyCapital")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("shareValue")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("tradeLicense")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("founderCondition")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="or-container">
                                    <div className="line"></div>
                                    <div className="or">{t("name395")}</div>
                                    <div className="line"></div>
                                </div>
                                <div className="text-container">
                                    <div className="text">{t("zoneRequirements")}</div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="right-container">
                                    <div className="content-title">{t("name384")}</div>
                                    <div className="content">
                                        <div className="content-text">
                                            <div>{t("name382")}</div>
                                            <div className="content-text-title">
                                                <div className="text-light">{t("visitRequirement")}
                                                    {t("violationNote")}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="price">
                                            <div className="aed-block">
                                                <div>{t("price.aedBlock.amount")}</div>
                                                <div>{t("price.aedBlock.description")}</div>
                                            </div>
                                            <div className="dol-block">
                                                <div>{t("price.dolBlock.amount")}</div>
                                                <div>{t("price.dolBlock.description")}</div>
                                            </div>
                                            <div className="days-block">
                                                <div>{t("price.daysBlock.duration")} <span>{t("price.daysBlock.businessDays")}</span></div>
                                                <div>{t("price.daysBlock.description")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="left-content">
                                <div className="content-title">
                                    <div>{t("name375")}</div>
                                    <div>{t("retirementVisa")}</div>
                                </div>
                                <div className="conditions">
                                    <div className="conditions-title">{t("conditions.title")}</div>
                                    <div className="list-container">
                                        <div className="list">
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("conditions.deposit")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("conditions.realEstate")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("conditions.investments")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("conditions.ageExperience")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="right-container">
                                    <div className="content-title">{t("name384")}</div>
                                    <div className="content">
                                        <div className="content-text">
                                            <div>{t("visitingRequirement")}</div>
                                            <div className="content-text-title">
                                                <div className="text-light">{t("name404")} </div>
                                                <div className="text-light"> {t("name405")} </div>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <div className="aed-block">
                                                <div>{t("fees.amount")}</div>
                                                <div>{t("fees.turnkey")}</div>
                                            </div>
                                            <div className="days-block">
                                                <div>{t("fees.duration")} <span>{t("fees.businessDays")}</span></div>
                                                <div>{t("fees.receipt")}</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="left-content">
                                <div className="content-title">
                                    <div>{t("name375")}</div>
                                    <div>{t("name300")}</div>
                                </div>
                                <div className="conditions">
                                    <div className="conditions-title">{t("name377")}</div>
                                    <div className="list-container">
                                        <div className="list">
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("name434")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("name433")}
                                            </div>
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                {t("name432")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="right-container">
                                    <div className="content-title">{t('name440')}</div>
                                    <div className="content">
                                        <div className="content-text">
                                        </div>

                                        <div className="price">
                                            <div className="aed-block">
                                                <div>7,000 AED</div>
                                                <div>«Turnkey»</div>
                                            </div>
                                            <div className="dol-block">
                                                <div>2 years</div>
                                                <div>{t("name400")}</div>
                                            </div>
                                            <div className="days-block">
                                                <div>7-10 <span>{t("business")}</span></div>
                                                <div>Receipt</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="left-content">
                                <div className="content-title">
                                    <div>{t("name429")}</div>
                                    <div>{t("name352")}</div>
                                </div>
                                <div className="conditions">
                                    <div className="conditions-title">{t("name377")}</div>
                                    <div className="list-container">
                                        <div className="list">
                                            <div className="list-elem">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#C29773" />
                                                </svg>
                                                The sponsor must have an income of $5,000 per sponsored family member
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content">
                                <div className="right-container">
                                    <div className="content-title">{t("name450")}</div>
                                    <div className="content">
                                        <div className="content-text">

                                        </div>

                                        <div className="price">
                                            <div className="aed-block">
                                                <div>$2 500</div>
                                                <div>{t("price.daysBlock.description")}</div>
                                            </div>
                                            <div className="dol-block">
                                                <div>$1 000</div>
                                                <div>{t("name400")}</div>
                                            </div>
                                            <div className="days-block">
                                                <div>4 weeks</div>
                                                <div>{t("price.daysBlock.description")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-us">
                    <div className="contact-us-form">
                        <div className="texts">
                            <div>{t("e_but")}</div>
                        </div>
                        <div className="form">
                            <div className="form-input">
                                <input placeholder={t("e_cj_line1")} type="text" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z" fill="#C29773" />
                                </svg>
                            </div>
                            <div className="form-input">
                                <input placeholder={t("e_cj_line2")} type="text" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.061 11.683H12.06Z" fill="#C29773" />
                                </svg>
                            </div>
                            <div className="form-input">
                                <input placeholder={t("e_cj_line3")} type="text" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z" fill="#C29773" />
                                </svg>
                            </div>
                            <div className="form-input">
                                <input placeholder={t("e_cj_line4")} type="text" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM11 14V16H13V14H11ZM8.567 8.813L10.529 9.206C10.5847 8.92743 10.7183 8.6704 10.9144 8.46482C11.1104 8.25923 11.3608 8.11354 11.6364 8.04471C11.912 7.97587 12.2015 7.98671 12.4712 8.07597C12.7409 8.16523 12.9797 8.32924 13.1598 8.54891C13.34 8.76858 13.454 9.03489 13.4887 9.31684C13.5234 9.5988 13.4773 9.8848 13.3558 10.1416C13.2343 10.3984 13.0423 10.6154 12.8023 10.7673C12.5623 10.9193 12.2841 11 12 11H11V13H12C12.6628 12.9998 13.3119 12.8114 13.8718 12.4568C14.4317 12.1021 14.8794 11.5958 15.1628 10.9967C15.4462 10.3976 15.5537 9.73028 15.4727 9.07248C15.3917 8.41467 15.1257 7.79337 14.7055 7.28085C14.2852 6.76833 13.7281 6.38567 13.0989 6.17736C12.4698 5.96906 11.7944 5.94368 11.1513 6.10418C10.5083 6.26468 9.92403 6.60447 9.46653 7.084C9.00903 7.56354 8.69709 8.16312 8.567 8.813Z" fill="#C29773" />
                                </svg>
                            </div>
                            <div className="form-button">
                                {t("e_cj_line5")}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10.0002 15.172L19.1922 5.979L20.6072 7.393L10.0002 18L3.63623 11.636L5.05023 10.222L10.0002 15.172Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="agree-terms">
                            {t("e_cj_text1")}
                        </div>

                    </div>
                </div>
            </div >
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
            <Footer></Footer>
        </div >
    )
}

export default Visa
