import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Pages/minLand.scss"
import accountaingBaner from "../assets/mainLandBg.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import checkBrown from "../assets/minland/checkbox-circle-fill-brown.svg";
import GetConsult from "../components/GetConsult"
import ConsulatingBaner from "../components/ConsulatingBaner"

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


import NewConsultBaner from "../components/NewConsultBaner"
import CostOfService from "../components/CostOfService";
import BanerBlocks from "../components/BanerBlocks.jsx"
import Table from "../components/Table.jsx"

import settings from "../assets/minland/settings.png"
import support from "../assets/minland/support.png"
import document from "../assets/minland/document.png"
import services from "../assets/minland/services.png"

import smile from "../assets/minland/smile.png"
import employees from "../assets/minland/employess.png"
import box from "../assets/minland/box.png"


function MinLand() {
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.125 12C13.125 11.6988 13.3052 11.4268 13.5827 11.3093C13.8601 11.1919 14.1808 11.2519 14.3971 11.4616L18.5221 15.4616C18.6678 15.6029 18.75 15.7971 18.75 16C18.75 16.2029 18.6678 16.3972 18.5221 16.5384L14.3971 20.5384C14.1808 20.7482 13.8601 20.8081 13.5827 20.6907C13.3052 20.5733 13.125 20.3013 13.125 20V16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25L13.125 15.25L13.125 12Z" fill="#C29773" />
                    <path d="M10.875 4.00002C10.875 3.69877 10.6948 3.42676 10.4173 3.30934C10.1399 3.19192 9.81916 3.25188 9.60289 3.46159L5.47789 7.4616C5.33222 7.60285 5.25 7.79711 5.25 8.00002C5.25 8.20293 5.33222 8.39719 5.47789 8.53844L9.60289 12.5384C9.81916 12.7482 10.1399 12.8081 10.4173 12.6907C10.6948 12.5733 10.875 12.3013 10.875 12V8.75002L18 8.75002C18.4142 8.75002 18.75 8.41423 18.75 8.00002C18.75 7.58581 18.4142 7.25002 18 7.25002L10.875 7.25002V4.00002Z" fill="#C29773" />
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
            text: t("main-land-blocks.01"),
        },
        {
            number: '02',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z" fill="#C29773" />
                    <path d="M15.6782 13.5028C15.2051 13.5085 14.7642 13.5258 14.3799 13.5774C13.737 13.6639 13.0334 13.8705 12.4519 14.4519C11.8705 15.0333 11.6639 15.737 11.5775 16.3799C11.4998 16.9576 11.4999 17.6635 11.5 18.414V18.586C11.4999 19.3365 11.4998 20.0424 11.5775 20.6201C11.6381 21.0712 11.7579 21.5522 12.0249 22C12.0166 22 12.0083 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C13.3262 13 14.577 13.1815 15.6782 13.5028Z" fill="#C29773" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 22C14.8501 22 14.0251 22 13.5126 21.4874C13 20.9749 13 20.1499 13 18.5C13 16.8501 13 16.0251 13.5126 15.5126C14.0251 15 14.8501 15 16.5 15C18.1499 15 18.9749 15 19.4874 15.5126C20 16.0251 20 16.8501 20 18.5C20 20.1499 20 20.9749 19.4874 21.4874C18.9749 22 18.1499 22 16.5 22ZM18.468 17.7458C18.6958 17.518 18.6958 17.1487 18.468 16.9209C18.2402 16.693 17.8709 16.693 17.6431 16.9209L15.7222 18.8417L15.3569 18.4764C15.1291 18.2486 14.7598 18.2486 14.532 18.4764C14.3042 18.7042 14.3042 19.0736 14.532 19.3014L15.3097 20.0791C15.5375 20.307 15.9069 20.307 16.1347 20.0791L18.468 17.7458Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                    <g opacity="0.1">
                        <path d="M103.243 55.1332C104.337 54.28 105.329 53.288 107.313 51.304L132.047 26.5703C132.179 26.4383 132.245 26.3723 132.276 26.3346C132.71 25.8064 132.542 25.0773 131.921 24.7914C131.877 24.771 131.775 24.7357 131.572 24.6652L131.572 24.6652C128.652 23.6523 124.855 21.7506 121.302 18.198C117.749 14.6454 115.848 10.8476 114.835 7.92805L114.835 7.9278C114.764 7.72469 114.729 7.62312 114.709 7.57879C114.423 6.95779 113.694 6.79038 113.165 7.22441C113.128 7.25539 113.062 7.32133 112.93 7.45318L112.93 7.4534L88.196 32.1872C86.212 34.1712 85.22 35.1632 84.3668 36.2569C83.3605 37.5472 82.4977 38.9433 81.7937 40.4204C81.1969 41.6726 80.7533 43.0035 79.866 45.6653L78.7195 49.1048L76.8965 54.5738L75.1872 59.7018C74.7505 61.0117 75.0915 62.4559 76.0678 63.4322C77.0441 64.4085 78.4883 64.7495 79.7982 64.3128L84.9262 62.6035L90.3953 60.7805L93.8347 59.634L93.8349 59.6339C96.4966 58.7467 97.8274 58.3031 99.0796 57.7063C100.557 57.0023 101.953 56.1395 103.243 55.1332Z" fill="#C29773" />
                        <path d="M139.791 18.8261C145.07 13.5471 145.07 4.98822 139.791 -0.290763C134.512 -5.56975 125.953 -5.56975 120.674 -0.290763L119.347 1.03621C119.018 1.36554 118.853 1.53021 118.779 1.76335C118.706 1.9965 118.745 2.22138 118.824 2.67113C118.878 2.9762 118.93 3.27025 118.955 3.4116C119.076 4.08351 119.3 5.06582 119.706 6.23797C120.519 8.58212 122.055 11.6593 124.948 14.552C127.841 17.4447 130.918 18.9805 133.262 19.7938C134.434 20.2005 135.417 20.424 136.088 20.5446C136.23 20.57 136.524 20.6224 136.829 20.6759C137.279 20.7549 137.503 20.7943 137.737 20.7207C137.97 20.6471 138.134 20.4824 138.464 20.1531L139.791 18.8261Z" fill="#C29773" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0723 -28.1777C18.75 -20.8553 18.75 -9.07023 18.75 14.5V39.5C18.75 63.0702 18.75 74.8553 26.0723 82.1777C33.3947 89.5 45.1798 89.5 68.75 89.5H81.25C104.82 89.5 116.605 89.5 123.928 82.1777C131.133 74.9728 131.248 63.4472 131.25 40.6254L113.636 58.2399C111.95 59.9272 110.569 61.309 109.009 62.5255C107.182 63.9506 105.205 65.1724 103.113 66.1694C101.328 67.0202 99.4742 67.6374 97.2112 68.3908L82.7631 73.2067C78.0845 74.7663 72.9262 73.5486 69.4389 70.0613C65.9516 66.5741 64.734 61.4158 66.2935 56.7372L68.0029 51.6091L70.9723 42.7007L71.1093 42.2894C71.8628 40.0262 72.48 38.1726 73.3309 36.3871C74.3278 34.2953 75.5497 32.3183 76.9748 30.4911C78.1912 28.9315 79.5732 27.5505 81.2606 25.8644L106.301 0.824276L113.25 -6.12473L114.045 -6.91989C118.516 -11.3912 124.377 -13.6262 130.237 -13.625C129.292 -20.0659 127.463 -24.642 123.928 -28.1777C116.605 -35.5 104.82 -35.5 81.25 -35.5H68.75C45.1798 -35.5 33.3947 -35.5 26.0723 -28.1777ZM45.3125 8.25C45.3125 5.66116 47.4112 3.5625 50 3.5625H90.625C93.2138 3.5625 95.3125 5.66116 95.3125 8.25C95.3125 10.8388 93.2138 12.9375 90.625 12.9375H50C47.4112 12.9375 45.3125 10.8388 45.3125 8.25ZM45.3125 33.25C45.3125 30.6612 47.4112 28.5625 50 28.5625H65.625C68.2138 28.5625 70.3125 30.6612 70.3125 33.25C70.3125 35.8388 68.2138 37.9375 65.625 37.9375H50C47.4112 37.9375 45.3125 35.8388 45.3125 33.25ZM45.3125 58.25C45.3125 55.6612 47.4112 53.5625 50 53.5625H59.375C61.9638 53.5625 64.0625 55.6612 64.0625 58.25C64.0625 60.8388 61.9638 62.9375 59.375 62.9375H50C47.4112 62.9375 45.3125 60.8388 45.3125 58.25Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("main-land-blocks.02"),
        },
        {
            number: '03',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.5189 16.5013C16.6939 16.3648 16.8526 16.2061 17.1701 15.8886L21.1275 11.9312C21.2231 11.8356 21.1793 11.6708 21.0515 11.6264C20.5844 11.4644 19.9767 11.1601 19.4083 10.5917C18.8399 10.0233 18.5356 9.41561 18.3736 8.94849C18.3292 8.82066 18.1644 8.77687 18.0688 8.87254L14.1114 12.8299C13.7939 13.1474 13.6352 13.3061 13.4987 13.4811C13.3377 13.6876 13.1996 13.9109 13.087 14.1473C12.9915 14.3476 12.9205 14.5606 12.7786 14.9865L12.5951 15.5368L12.3034 16.4118L12.0299 17.2323C11.9601 17.4419 12.0146 17.6729 12.1708 17.8292C12.3271 17.9854 12.5581 18.0399 12.7677 17.9701L13.5882 17.6966L14.4632 17.4049L15.0135 17.2214L15.0136 17.2214C15.4394 17.0795 15.6524 17.0085 15.8527 16.913C16.0891 16.8004 16.3124 16.6623 16.5189 16.5013Z" fill="#C29773" />
                    <path d="M22.3665 10.6922C23.2112 9.84754 23.2112 8.47812 22.3665 7.63348C21.5219 6.78884 20.1525 6.78884 19.3078 7.63348L19.1806 7.76071C19.0578 7.88348 19.0022 8.05496 19.0329 8.22586C19.0522 8.33336 19.0879 8.49053 19.153 8.67807C19.2831 9.05314 19.5288 9.54549 19.9917 10.0083C20.4545 10.4712 20.9469 10.7169 21.3219 10.847C21.5095 10.9121 21.6666 10.9478 21.7741 10.9671C21.945 10.9978 22.1165 10.9422 22.2393 10.8194L22.3665 10.6922Z" fill="#C29773" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.9812 19.6756 20.9997 17.8316 21 14.1801L18.1817 16.9984C17.9119 17.2683 17.691 17.4894 17.4415 17.6841C17.1491 17.9121 16.8328 18.1076 16.4981 18.2671C16.2124 18.4032 15.9159 18.502 15.5538 18.6225L13.2421 19.3931C12.4935 19.6426 11.6682 19.4478 11.1102 18.8898C10.5523 18.3318 10.3574 17.5065 10.607 16.7579L10.8805 15.9375L11.3556 14.5121L11.3775 14.4463C11.4981 14.0842 11.5968 13.7876 11.7329 13.5019C11.8924 13.1672 12.0879 12.8509 12.316 12.5586C12.5106 12.309 12.7317 12.0881 13.0017 11.8183L17.0081 7.81188L18.12 6.70004L18.2472 6.57282C18.9626 5.85741 19.9003 5.49981 20.838 5.5C20.6867 4.46945 20.3941 3.73727 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H10.5C10.9142 12.25 11.25 12.5858 11.25 13C11.25 13.4142 10.9142 13.75 10.5 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H9.5C9.91421 16.25 10.25 16.5858 10.25 17C10.25 17.4142 9.91421 17.75 9.5 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                    <g opacity="0.1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6529 -26.3471C12.5 -17.1942 12.5 -2.46278 12.5 27C12.5 56.4628 12.5 71.1942 21.6529 80.3471C30.8058 89.5 45.5372 89.5 75 89.5C104.463 89.5 119.194 89.5 128.347 80.3471C137.5 71.1942 137.5 56.4628 137.5 27C137.5 -2.46278 137.5 -17.1942 128.347 -26.3471C119.194 -35.5 104.463 -35.5 75 -35.5C45.5372 -35.5 30.8058 -35.5 21.6529 -26.3471ZM106.25 28.5625C108.839 28.5625 110.938 30.6612 110.938 33.25V64.5C110.938 67.0888 108.839 69.1875 106.25 69.1875C103.661 69.1875 101.562 67.0888 101.562 64.5V33.25C101.562 30.6612 103.661 28.5625 106.25 28.5625ZM79.6875 -10.5C79.6875 -13.0888 77.5888 -15.1875 75 -15.1875C72.4112 -15.1875 70.3125 -13.0888 70.3125 -10.5V64.5C70.3125 67.0888 72.4112 69.1875 75 69.1875C77.5888 69.1875 79.6875 67.0888 79.6875 64.5V-10.5ZM43.75 3.5625C46.3388 3.5625 48.4375 5.66116 48.4375 8.25V64.5C48.4375 67.0888 46.3388 69.1875 43.75 69.1875C41.1612 69.1875 39.0625 67.0888 39.0625 64.5V8.25C39.0625 5.66116 41.1612 3.5625 43.75 3.5625Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("main-land-blocks.03"),
        },
        {
            number: '04',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0867 21.3877L13.6288 20.4718C14.0492 19.7614 14.2595 19.4062 14.5972 19.2098C14.9349 19.0134 15.36 19.0061 16.2104 18.9915C17.4658 18.9698 18.2531 18.8929 18.9134 18.6194C20.1386 18.1119 21.1119 17.1386 21.6194 15.9134C22 14.9946 22 13.8297 22 11.5V10.5C22 7.22657 22 5.58985 21.2632 4.38751C20.8509 3.71473 20.2853 3.14908 19.6125 2.7368C18.4101 2 16.7734 2 13.5 2H10.5C7.22657 2 5.58985 2 4.38751 2.7368C3.71473 3.14908 3.14908 3.71473 2.7368 4.38751C2 5.58985 2 7.22657 2 10.5V11.5C2 13.8297 2 14.9946 2.3806 15.9134C2.88807 17.1386 3.86144 18.1119 5.08658 18.6194C5.74689 18.8929 6.53422 18.9698 7.78958 18.9915C8.63992 19.0061 9.06509 19.0134 9.40279 19.2098C9.74049 19.4063 9.95073 19.7614 10.3712 20.4718L10.9133 21.3877C11.3965 22.204 12.6035 22.204 13.0867 21.3877ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8.75 9C8.75 8.58579 8.41421 8.25 8 8.25C7.58579 8.25 7.25 8.58579 7.25 9V13C7.25 13.4142 7.58579 13.75 8 13.75C8.41421 13.75 8.75 13.4142 8.75 13V9ZM16 8.25C16.4142 8.25 16.75 8.58579 16.75 9V13C16.75 13.4142 16.4142 13.75 16 13.75C15.5858 13.75 15.25 13.4142 15.25 13V9C15.25 8.58579 15.5858 8.25 16 8.25Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                    <g opacity="0.1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0723 -28.1777C18.75 -20.8553 18.75 -9.07023 18.75 14.5V39.5C18.75 63.0702 18.75 74.8553 26.0723 82.1777C33.3947 89.5 45.1798 89.5 68.75 89.5H81.25C104.82 89.5 116.605 89.5 123.928 82.1777C131.25 74.8553 131.25 63.0702 131.25 39.5V14.5C131.25 -9.07023 131.25 -20.8553 123.928 -28.1777C116.605 -35.5 104.82 -35.5 81.25 -35.5H68.75C45.1798 -35.5 33.3947 -35.5 26.0723 -28.1777ZM50 9.8125C47.4112 9.8125 45.3125 11.9112 45.3125 14.5C45.3125 17.0888 47.4112 19.1875 50 19.1875H100C102.589 19.1875 104.688 17.0888 104.688 14.5C104.688 11.9112 102.589 9.8125 100 9.8125H50ZM50 34.8125C47.4112 34.8125 45.3125 36.9112 45.3125 39.5C45.3125 42.0888 47.4112 44.1875 50 44.1875H81.25C83.8388 44.1875 85.9375 42.0888 85.9375 39.5C85.9375 36.9112 83.8388 34.8125 81.25 34.8125H50Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("main-land-blocks.04"),
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    };

    const title = (
        <div>
            {t("setUpLocalCompanyTitle")} <br />
            {t("setUpLocalCompanySubtitle")}
        </div>
    )
    
    return (
        <div className="minland-wrapper ">
            <Header></Header>
            <div className="minland-container">
                <div className="minland-baner-guide">
                    <NewConsultBaner
                        img={accountaingBaner}
                        title={title}
                        description={[t("openCompanyAndPrepare")]}
                    />
                    <BanerBlocks
                        guides={guides}
                    />
                </div>

                <div className="process-of-setuping">
                    <div className="page-title">{t("name165.1")} </div>
                    <div className="page-description" >{t("name165.2")}</div>
                </div>

                <div className="table-box">
                    <Table />
                </div>

                <div className="accompany">
                    <div className="page-title">{t("page-title-accompany")}</div>
                    <div className="page-description">{t("page-description-accompany")}</div>
                    <div className="accompany-blocks-container">
                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name191")}</div>
                                    <div>{t("name192")}</div>
                                </div>
                                <div className="accompany-paragraph">
                                    <div>{t("name194")}</div>
                                </div>
                            </div>
                            <div className="right-content">
                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="110" viewBox="0 0 58 110"
                                         fill="none">
                                        <g opacity="0.1" filter="url(#filter0_d_1917_9156)">
                                            <ellipse cx="55.0003" cy="27.5003" rx="18.3333" ry="18.3333"
                                                     fill="#C29773"/>
                                            <path
                                                d="M91.6663 80.208C91.6663 91.5989 91.6663 100.833 54.9997 100.833C18.333 100.833 18.333 91.5989 18.333 80.208C18.333 68.8171 34.7492 59.583 54.9997 59.583C75.2501 59.583 91.6663 68.8171 91.6663 80.208Z"
                                                fill="#C29773"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_1917_9156" x="-4" y="0" width="118" height="118"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                               result="hardAlpha"/>
                                                <feOffset dy="4"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                         result="effect1_dropShadow_1917_9156"/>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="effect1_dropShadow_1917_9156" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className="list-title">{t("name195")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name196")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name197")}
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="110" viewBox="0 0 59 110"
                                         fill="none">
                                        <g opacity="0.1">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M33.7063 9.16699H77.2937C82.6052 9.16699 85.2609 9.16699 87.4028 9.91227C91.4644 11.3255 94.6532 14.6083 96.026 18.7895C96.75 20.9945 96.75 23.7285 96.75 29.1964V93.3821C96.75 97.3156 92.2354 99.4027 89.3796 96.7894C87.7017 95.254 85.1733 95.254 83.4954 96.7894L81.2812 98.8155C78.3406 101.506 73.9094 101.506 70.9688 98.8155C68.0281 96.1246 63.5969 96.1246 60.6562 98.8155C57.7156 101.506 53.2844 101.506 50.3438 98.8155C47.4031 96.1246 42.9719 96.1246 40.0312 98.8155C37.0906 101.506 32.6594 101.506 29.7188 98.8155L27.5046 96.7894C25.8267 95.254 23.2983 95.254 21.6204 96.7894C18.7646 99.4027 14.25 97.3156 14.25 93.3821V29.1964C14.25 23.7285 14.25 20.9945 14.974 18.7895C16.3468 14.6083 19.5356 11.3255 23.5972 9.91227C25.7391 9.16699 28.3948 9.16699 33.7063 9.16699ZM32.5833 30.9378C30.6849 30.9378 29.1458 32.4768 29.1458 34.3753C29.1458 36.2738 30.6849 37.8128 32.5833 37.8128H34.875C36.7735 37.8128 38.3125 36.2738 38.3125 34.3753C38.3125 32.4768 36.7735 30.9378 34.875 30.9378H32.5833ZM48.625 30.9378C46.7265 30.9378 45.1875 32.4768 45.1875 34.3753C45.1875 36.2738 46.7265 37.8128 48.625 37.8128H78.4167C80.3151 37.8128 81.8542 36.2738 81.8542 34.3753C81.8542 32.4768 80.3151 30.9378 78.4167 30.9378H48.625ZM32.5833 46.9795C30.6849 46.9795 29.1458 48.5185 29.1458 50.417C29.1458 52.3155 30.6849 53.8545 32.5833 53.8545H34.875C36.7735 53.8545 38.3125 52.3155 38.3125 50.417C38.3125 48.5185 36.7735 46.9795 34.875 46.9795H32.5833ZM48.625 46.9795C46.7265 46.9795 45.1875 48.5185 45.1875 50.417C45.1875 52.3155 46.7265 53.8545 48.625 53.8545H78.4167C80.3151 53.8545 81.8542 52.3155 81.8542 50.417C81.8542 48.5185 80.3151 46.9795 78.4167 46.9795H48.625ZM32.5833 63.0212C30.6849 63.0212 29.1458 64.5602 29.1458 66.4587C29.1458 68.3571 30.6849 69.8962 32.5833 69.8962H34.875C36.7735 69.8962 38.3125 68.3571 38.3125 66.4587C38.3125 64.5602 36.7735 63.0212 34.875 63.0212H32.5833ZM48.625 63.0212C46.7265 63.0212 45.1875 64.5602 45.1875 66.4587C45.1875 68.3571 46.7265 69.8962 48.625 69.8962H78.4167C80.3151 69.8962 81.8542 68.3571 81.8542 66.4587C81.8542 64.5602 80.3151 63.0212 78.4167 63.0212H48.625Z"
                                                  fill="#C29773"/>
                                        </g>
                                    </svg>
                                    <div className="list-title">{t("name199")}</div>
                                    <div className="list-lower">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name200")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name201")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name202")}</div>
                                    <div>{t("name203")}</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name205")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name206")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name207")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name208")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name209")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="110" viewBox="0 0 58 110"
                                         fill="none">
                                        <g opacity="0.1" filter="url(#filter0_d_1917_9156)">
                                            <ellipse cx="55.0003" cy="27.5003" rx="18.3333" ry="18.3333"
                                                     fill="#C29773"/>
                                            <path
                                                d="M91.6663 80.208C91.6663 91.5989 91.6663 100.833 54.9997 100.833C18.333 100.833 18.333 91.5989 18.333 80.208C18.333 68.8171 34.7492 59.583 54.9997 59.583C75.2501 59.583 91.6663 68.8171 91.6663 80.208Z"
                                                fill="#C29773"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_1917_9156" x="-4" y="0" width="118" height="118"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                               result="hardAlpha"/>
                                                <feOffset dy="4"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                         result="effect1_dropShadow_1917_9156"/>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="effect1_dropShadow_1917_9156" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className="list-title">{t("name210")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name211")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name212")}
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="110" viewBox="0 0 59 110"
                                         fill="none">
                                        <g opacity="0.1">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M33.7063 9.16699H77.2937C82.6052 9.16699 85.2609 9.16699 87.4028 9.91227C91.4644 11.3255 94.6532 14.6083 96.026 18.7895C96.75 20.9945 96.75 23.7285 96.75 29.1964V93.3821C96.75 97.3156 92.2354 99.4027 89.3796 96.7894C87.7017 95.254 85.1733 95.254 83.4954 96.7894L81.2812 98.8155C78.3406 101.506 73.9094 101.506 70.9688 98.8155C68.0281 96.1246 63.5969 96.1246 60.6562 98.8155C57.7156 101.506 53.2844 101.506 50.3438 98.8155C47.4031 96.1246 42.9719 96.1246 40.0312 98.8155C37.0906 101.506 32.6594 101.506 29.7188 98.8155L27.5046 96.7894C25.8267 95.254 23.2983 95.254 21.6204 96.7894C18.7646 99.4027 14.25 97.3156 14.25 93.3821V29.1964C14.25 23.7285 14.25 20.9945 14.974 18.7895C16.3468 14.6083 19.5356 11.3255 23.5972 9.91227C25.7391 9.16699 28.3948 9.16699 33.7063 9.16699ZM32.5833 30.9378C30.6849 30.9378 29.1458 32.4768 29.1458 34.3753C29.1458 36.2738 30.6849 37.8128 32.5833 37.8128H34.875C36.7735 37.8128 38.3125 36.2738 38.3125 34.3753C38.3125 32.4768 36.7735 30.9378 34.875 30.9378H32.5833ZM48.625 30.9378C46.7265 30.9378 45.1875 32.4768 45.1875 34.3753C45.1875 36.2738 46.7265 37.8128 48.625 37.8128H78.4167C80.3151 37.8128 81.8542 36.2738 81.8542 34.3753C81.8542 32.4768 80.3151 30.9378 78.4167 30.9378H48.625ZM32.5833 46.9795C30.6849 46.9795 29.1458 48.5185 29.1458 50.417C29.1458 52.3155 30.6849 53.8545 32.5833 53.8545H34.875C36.7735 53.8545 38.3125 52.3155 38.3125 50.417C38.3125 48.5185 36.7735 46.9795 34.875 46.9795H32.5833ZM48.625 46.9795C46.7265 46.9795 45.1875 48.5185 45.1875 50.417C45.1875 52.3155 46.7265 53.8545 48.625 53.8545H78.4167C80.3151 53.8545 81.8542 52.3155 81.8542 50.417C81.8542 48.5185 80.3151 46.9795 78.4167 46.9795H48.625ZM32.5833 63.0212C30.6849 63.0212 29.1458 64.5602 29.1458 66.4587C29.1458 68.3571 30.6849 69.8962 32.5833 69.8962H34.875C36.7735 69.8962 38.3125 68.3571 38.3125 66.4587C38.3125 64.5602 36.7735 63.0212 34.875 63.0212H32.5833ZM48.625 63.0212C46.7265 63.0212 45.1875 64.5602 45.1875 66.4587C45.1875 68.3571 46.7265 69.8962 48.625 69.8962H78.4167C80.3151 69.8962 81.8542 68.3571 81.8542 66.4587C81.8542 64.5602 80.3151 63.0212 78.4167 63.0212H48.625Z"
                                                  fill="#C29773"/>
                                        </g>
                                    </svg>
                                    <div className="list-title">{t("name213")}</div>
                                    <div className="list-lower">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name214")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name215")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name216")}</div>
                                    <div>{t("name217")}</div>
                                </div>
                                <div className="accompany-paragraph">
                                    <div>
                                        <span className="big-description">
                                            {t("name219")}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="110" viewBox="0 0 58 110"
                                         fill="none">
                                        <g opacity="0.1" filter="url(#filter0_d_1917_9156)">
                                            <ellipse cx="55.0003" cy="27.5003" rx="18.3333" ry="18.3333"
                                                     fill="#C29773"/>
                                            <path
                                                d="M91.6663 80.208C91.6663 91.5989 91.6663 100.833 54.9997 100.833C18.333 100.833 18.333 91.5989 18.333 80.208C18.333 68.8171 34.7492 59.583 54.9997 59.583C75.2501 59.583 91.6663 68.8171 91.6663 80.208Z"
                                                fill="#C29773"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_1917_9156" x="-4" y="0" width="118" height="118"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                               result="hardAlpha"/>
                                                <feOffset dy="4"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                         result="effect1_dropShadow_1917_9156"/>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="effect1_dropShadow_1917_9156" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className="list-title">{t("name220")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name221")}
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="110" viewBox="0 0 59 110"
                                         fill="none">
                                        <g opacity="0.1">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M33.7063 9.16699H77.2937C82.6052 9.16699 85.2609 9.16699 87.4028 9.91227C91.4644 11.3255 94.6532 14.6083 96.026 18.7895C96.75 20.9945 96.75 23.7285 96.75 29.1964V93.3821C96.75 97.3156 92.2354 99.4027 89.3796 96.7894C87.7017 95.254 85.1733 95.254 83.4954 96.7894L81.2812 98.8155C78.3406 101.506 73.9094 101.506 70.9688 98.8155C68.0281 96.1246 63.5969 96.1246 60.6562 98.8155C57.7156 101.506 53.2844 101.506 50.3438 98.8155C47.4031 96.1246 42.9719 96.1246 40.0312 98.8155C37.0906 101.506 32.6594 101.506 29.7188 98.8155L27.5046 96.7894C25.8267 95.254 23.2983 95.254 21.6204 96.7894C18.7646 99.4027 14.25 97.3156 14.25 93.3821V29.1964C14.25 23.7285 14.25 20.9945 14.974 18.7895C16.3468 14.6083 19.5356 11.3255 23.5972 9.91227C25.7391 9.16699 28.3948 9.16699 33.7063 9.16699ZM32.5833 30.9378C30.6849 30.9378 29.1458 32.4768 29.1458 34.3753C29.1458 36.2738 30.6849 37.8128 32.5833 37.8128H34.875C36.7735 37.8128 38.3125 36.2738 38.3125 34.3753C38.3125 32.4768 36.7735 30.9378 34.875 30.9378H32.5833ZM48.625 30.9378C46.7265 30.9378 45.1875 32.4768 45.1875 34.3753C45.1875 36.2738 46.7265 37.8128 48.625 37.8128H78.4167C80.3151 37.8128 81.8542 36.2738 81.8542 34.3753C81.8542 32.4768 80.3151 30.9378 78.4167 30.9378H48.625ZM32.5833 46.9795C30.6849 46.9795 29.1458 48.5185 29.1458 50.417C29.1458 52.3155 30.6849 53.8545 32.5833 53.8545H34.875C36.7735 53.8545 38.3125 52.3155 38.3125 50.417C38.3125 48.5185 36.7735 46.9795 34.875 46.9795H32.5833ZM48.625 46.9795C46.7265 46.9795 45.1875 48.5185 45.1875 50.417C45.1875 52.3155 46.7265 53.8545 48.625 53.8545H78.4167C80.3151 53.8545 81.8542 52.3155 81.8542 50.417C81.8542 48.5185 80.3151 46.9795 78.4167 46.9795H48.625ZM32.5833 63.0212C30.6849 63.0212 29.1458 64.5602 29.1458 66.4587C29.1458 68.3571 30.6849 69.8962 32.5833 69.8962H34.875C36.7735 69.8962 38.3125 68.3571 38.3125 66.4587C38.3125 64.5602 36.7735 63.0212 34.875 63.0212H32.5833ZM48.625 63.0212C46.7265 63.0212 45.1875 64.5602 45.1875 66.4587C45.1875 68.3571 46.7265 69.8962 48.625 69.8962H78.4167C80.3151 69.8962 81.8542 68.3571 81.8542 66.4587C81.8542 64.5602 80.3151 63.0212 78.4167 63.0212H48.625Z"
                                                  fill="#C29773"/>
                                        </g>
                                    </svg>
                                    <div className="list-title">{t("name222")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name223")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name224")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name225")}</div>
                                    <div>{t("name226")}</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name228")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name229")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name230")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name231")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name232")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="110" viewBox="0 0 58 110"
                                         fill="none">
                                        <g opacity="0.1" filter="url(#filter0_d_1917_9156)">
                                            <ellipse cx="55.0003" cy="27.5003" rx="18.3333" ry="18.3333"
                                                     fill="#C29773"/>
                                            <path
                                                d="M91.6663 80.208C91.6663 91.5989 91.6663 100.833 54.9997 100.833C18.333 100.833 18.333 91.5989 18.333 80.208C18.333 68.8171 34.7492 59.583 54.9997 59.583C75.2501 59.583 91.6663 68.8171 91.6663 80.208Z"
                                                fill="#C29773"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_1917_9156" x="-4" y="0" width="118" height="118"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                               result="hardAlpha"/>
                                                <feOffset dy="4"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                         result="effect1_dropShadow_1917_9156"/>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="effect1_dropShadow_1917_9156" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className="list-title">{t("name233")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name234")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name235")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name236")}
                                        </div>
                                    </div>
                                </div>

                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="110" viewBox="0 0 59 110"
                                         fill="none">
                                        <g opacity="0.1">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M33.7063 9.16699H77.2937C82.6052 9.16699 85.2609 9.16699 87.4028 9.91227C91.4644 11.3255 94.6532 14.6083 96.026 18.7895C96.75 20.9945 96.75 23.7285 96.75 29.1964V93.3821C96.75 97.3156 92.2354 99.4027 89.3796 96.7894C87.7017 95.254 85.1733 95.254 83.4954 96.7894L81.2812 98.8155C78.3406 101.506 73.9094 101.506 70.9688 98.8155C68.0281 96.1246 63.5969 96.1246 60.6562 98.8155C57.7156 101.506 53.2844 101.506 50.3438 98.8155C47.4031 96.1246 42.9719 96.1246 40.0312 98.8155C37.0906 101.506 32.6594 101.506 29.7188 98.8155L27.5046 96.7894C25.8267 95.254 23.2983 95.254 21.6204 96.7894C18.7646 99.4027 14.25 97.3156 14.25 93.3821V29.1964C14.25 23.7285 14.25 20.9945 14.974 18.7895C16.3468 14.6083 19.5356 11.3255 23.5972 9.91227C25.7391 9.16699 28.3948 9.16699 33.7063 9.16699ZM32.5833 30.9378C30.6849 30.9378 29.1458 32.4768 29.1458 34.3753C29.1458 36.2738 30.6849 37.8128 32.5833 37.8128H34.875C36.7735 37.8128 38.3125 36.2738 38.3125 34.3753C38.3125 32.4768 36.7735 30.9378 34.875 30.9378H32.5833ZM48.625 30.9378C46.7265 30.9378 45.1875 32.4768 45.1875 34.3753C45.1875 36.2738 46.7265 37.8128 48.625 37.8128H78.4167C80.3151 37.8128 81.8542 36.2738 81.8542 34.3753C81.8542 32.4768 80.3151 30.9378 78.4167 30.9378H48.625ZM32.5833 46.9795C30.6849 46.9795 29.1458 48.5185 29.1458 50.417C29.1458 52.3155 30.6849 53.8545 32.5833 53.8545H34.875C36.7735 53.8545 38.3125 52.3155 38.3125 50.417C38.3125 48.5185 36.7735 46.9795 34.875 46.9795H32.5833ZM48.625 46.9795C46.7265 46.9795 45.1875 48.5185 45.1875 50.417C45.1875 52.3155 46.7265 53.8545 48.625 53.8545H78.4167C80.3151 53.8545 81.8542 52.3155 81.8542 50.417C81.8542 48.5185 80.3151 46.9795 78.4167 46.9795H48.625ZM32.5833 63.0212C30.6849 63.0212 29.1458 64.5602 29.1458 66.4587C29.1458 68.3571 30.6849 69.8962 32.5833 69.8962H34.875C36.7735 69.8962 38.3125 68.3571 38.3125 66.4587C38.3125 64.5602 36.7735 63.0212 34.875 63.0212H32.5833ZM48.625 63.0212C46.7265 63.0212 45.1875 64.5602 45.1875 66.4587C45.1875 68.3571 46.7265 69.8962 48.625 69.8962H78.4167C80.3151 69.8962 81.8542 68.3571 81.8542 66.4587C81.8542 64.5602 80.3151 63.0212 78.4167 63.0212H48.625Z"
                                                  fill="#C29773"/>
                                        </g>
                                    </svg>
                                    <div className="list-title">{t("name237")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name238")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name239")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name240")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name241")}</div>
                                    <div>{t("name242")}</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name244")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name245")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name246")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name247")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("Emirates ID Issue")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("Roads and Transport Authority")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="110" viewBox="0 0 58 110"
                                         fill="none">
                                        <g opacity="0.1" filter="url(#filter0_d_1917_9156)">
                                            <ellipse cx="55.0003" cy="27.5003" rx="18.3333" ry="18.3333"
                                                     fill="#C29773"/>
                                            <path
                                                d="M91.6663 80.208C91.6663 91.5989 91.6663 100.833 54.9997 100.833C18.333 100.833 18.333 91.5989 18.333 80.208C18.333 68.8171 34.7492 59.583 54.9997 59.583C75.2501 59.583 91.6663 68.8171 91.6663 80.208Z"
                                                fill="#C29773"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_1917_9156" x="-4" y="0" width="118" height="118"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                               result="hardAlpha"/>
                                                <feOffset dy="4"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                         result="effect1_dropShadow_1917_9156"/>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="effect1_dropShadow_1917_9156" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className="list-title">{t("name248")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("Contract details for employee")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("E-signature")}
                                        </div>
                                    </div>
                                </div>
                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="110" viewBox="0 0 59 110"
                                         fill="none">
                                        <g opacity="0.1">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M33.7063 9.16699H77.2937C82.6052 9.16699 85.2609 9.16699 87.4028 9.91227C91.4644 11.3255 94.6532 14.6083 96.026 18.7895C96.75 20.9945 96.75 23.7285 96.75 29.1964V93.3821C96.75 97.3156 92.2354 99.4027 89.3796 96.7894C87.7017 95.254 85.1733 95.254 83.4954 96.7894L81.2812 98.8155C78.3406 101.506 73.9094 101.506 70.9688 98.8155C68.0281 96.1246 63.5969 96.1246 60.6562 98.8155C57.7156 101.506 53.2844 101.506 50.3438 98.8155C47.4031 96.1246 42.9719 96.1246 40.0312 98.8155C37.0906 101.506 32.6594 101.506 29.7188 98.8155L27.5046 96.7894C25.8267 95.254 23.2983 95.254 21.6204 96.7894C18.7646 99.4027 14.25 97.3156 14.25 93.3821V29.1964C14.25 23.7285 14.25 20.9945 14.974 18.7895C16.3468 14.6083 19.5356 11.3255 23.5972 9.91227C25.7391 9.16699 28.3948 9.16699 33.7063 9.16699ZM32.5833 30.9378C30.6849 30.9378 29.1458 32.4768 29.1458 34.3753C29.1458 36.2738 30.6849 37.8128 32.5833 37.8128H34.875C36.7735 37.8128 38.3125 36.2738 38.3125 34.3753C38.3125 32.4768 36.7735 30.9378 34.875 30.9378H32.5833ZM48.625 30.9378C46.7265 30.9378 45.1875 32.4768 45.1875 34.3753C45.1875 36.2738 46.7265 37.8128 48.625 37.8128H78.4167C80.3151 37.8128 81.8542 36.2738 81.8542 34.3753C81.8542 32.4768 80.3151 30.9378 78.4167 30.9378H48.625ZM32.5833 46.9795C30.6849 46.9795 29.1458 48.5185 29.1458 50.417C29.1458 52.3155 30.6849 53.8545 32.5833 53.8545H34.875C36.7735 53.8545 38.3125 52.3155 38.3125 50.417C38.3125 48.5185 36.7735 46.9795 34.875 46.9795H32.5833ZM48.625 46.9795C46.7265 46.9795 45.1875 48.5185 45.1875 50.417C45.1875 52.3155 46.7265 53.8545 48.625 53.8545H78.4167C80.3151 53.8545 81.8542 52.3155 81.8542 50.417C81.8542 48.5185 80.3151 46.9795 78.4167 46.9795H48.625ZM32.5833 63.0212C30.6849 63.0212 29.1458 64.5602 29.1458 66.4587C29.1458 68.3571 30.6849 69.8962 32.5833 69.8962H34.875C36.7735 69.8962 38.3125 68.3571 38.3125 66.4587C38.3125 64.5602 36.7735 63.0212 34.875 63.0212H32.5833ZM48.625 63.0212C46.7265 63.0212 45.1875 64.5602 45.1875 66.4587C45.1875 68.3571 46.7265 69.8962 48.625 69.8962H78.4167C80.3151 69.8962 81.8542 68.3571 81.8542 66.4587C81.8542 64.5602 80.3151 63.0212 78.4167 63.0212H48.625Z"
                                                  fill="#C29773"/>
                                        </g>
                                    </svg>
                                    <div className="list-title">{t("Cost and terms")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("14-28 days")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t('name250')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accompany-block">
                            <div className="left-content">
                                <div className="stage-title">
                                    <div>{t("name251")}</div>
                                    <div>{t("name252")}</div>
                                </div>
                                <div className="list-container">
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("name254")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("Emirates ID Issue")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("Roads and Transport Authority")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="110" viewBox="0 0 58 110"
                                         fill="none">
                                        <g opacity="0.1" filter="url(#filter0_d_1917_9156)">
                                            <ellipse cx="55.0003" cy="27.5003" rx="18.3333" ry="18.3333"
                                                     fill="#C29773"/>
                                            <path
                                                d="M91.6663 80.208C91.6663 91.5989 91.6663 100.833 54.9997 100.833C18.333 100.833 18.333 91.5989 18.333 80.208C18.333 68.8171 34.7492 59.583 54.9997 59.583C75.2501 59.583 91.6663 68.8171 91.6663 80.208Z"
                                                fill="#C29773"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_1917_9156" x="-4" y="0" width="118" height="118"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                               result="hardAlpha"/>
                                                <feOffset dy="4"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix"
                                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                         result="effect1_dropShadow_1917_9156"/>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="effect1_dropShadow_1917_9156" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className="list-title">{t("What you need from the client?")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("Contract details for employee")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("E-signature")}
                                        </div>
                                    </div>
                                </div>
                                <div className="list-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="110" viewBox="0 0 59 110"
                                         fill="none">
                                        <g opacity="0.1">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M33.7063 9.16699H77.2937C82.6052 9.16699 85.2609 9.16699 87.4028 9.91227C91.4644 11.3255 94.6532 14.6083 96.026 18.7895C96.75 20.9945 96.75 23.7285 96.75 29.1964V93.3821C96.75 97.3156 92.2354 99.4027 89.3796 96.7894C87.7017 95.254 85.1733 95.254 83.4954 96.7894L81.2812 98.8155C78.3406 101.506 73.9094 101.506 70.9688 98.8155C68.0281 96.1246 63.5969 96.1246 60.6562 98.8155C57.7156 101.506 53.2844 101.506 50.3438 98.8155C47.4031 96.1246 42.9719 96.1246 40.0312 98.8155C37.0906 101.506 32.6594 101.506 29.7188 98.8155L27.5046 96.7894C25.8267 95.254 23.2983 95.254 21.6204 96.7894C18.7646 99.4027 14.25 97.3156 14.25 93.3821V29.1964C14.25 23.7285 14.25 20.9945 14.974 18.7895C16.3468 14.6083 19.5356 11.3255 23.5972 9.91227C25.7391 9.16699 28.3948 9.16699 33.7063 9.16699ZM32.5833 30.9378C30.6849 30.9378 29.1458 32.4768 29.1458 34.3753C29.1458 36.2738 30.6849 37.8128 32.5833 37.8128H34.875C36.7735 37.8128 38.3125 36.2738 38.3125 34.3753C38.3125 32.4768 36.7735 30.9378 34.875 30.9378H32.5833ZM48.625 30.9378C46.7265 30.9378 45.1875 32.4768 45.1875 34.3753C45.1875 36.2738 46.7265 37.8128 48.625 37.8128H78.4167C80.3151 37.8128 81.8542 36.2738 81.8542 34.3753C81.8542 32.4768 80.3151 30.9378 78.4167 30.9378H48.625ZM32.5833 46.9795C30.6849 46.9795 29.1458 48.5185 29.1458 50.417C29.1458 52.3155 30.6849 53.8545 32.5833 53.8545H34.875C36.7735 53.8545 38.3125 52.3155 38.3125 50.417C38.3125 48.5185 36.7735 46.9795 34.875 46.9795H32.5833ZM48.625 46.9795C46.7265 46.9795 45.1875 48.5185 45.1875 50.417C45.1875 52.3155 46.7265 53.8545 48.625 53.8545H78.4167C80.3151 53.8545 81.8542 52.3155 81.8542 50.417C81.8542 48.5185 80.3151 46.9795 78.4167 46.9795H48.625ZM32.5833 63.0212C30.6849 63.0212 29.1458 64.5602 29.1458 66.4587C29.1458 68.3571 30.6849 69.8962 32.5833 69.8962H34.875C36.7735 69.8962 38.3125 68.3571 38.3125 66.4587C38.3125 64.5602 36.7735 63.0212 34.875 63.0212H32.5833ZM48.625 63.0212C46.7265 63.0212 45.1875 64.5602 45.1875 66.4587C45.1875 68.3571 46.7265 69.8962 48.625 69.8962H78.4167C80.3151 69.8962 81.8542 68.3571 81.8542 66.4587C81.8542 64.5602 80.3151 63.0212 78.4167 63.0212H48.625Z"
                                                  fill="#C29773"/>
                                        </g>
                                    </svg>
                                    <div className="list-title">{t("Cost and terms?")}</div>
                                    <div className="list-upper">
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t("3-6 weeks")}
                                        </div>
                                        <div className="list-elem">
                                            <img src={checkBrown} alt=""/>
                                            {t('name250')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="get-consult-block">
                    <GetConsult/>
                </div>

                <div className="cost-of-service-box">
                    <div className="cost-of-service-title">
                        <div className="page-title">{t("name165.1")} </div>
                        <div className="page-description">{t("name165.2")}</div>
                    </div>
                    <CostOfService/>
                </div>

                <div className="the-main-services">
                    <div className="content">
                        <div className="title">
                            {t("the-main-services.title")}
                        </div>
                        <div className="content-blocks">
                            <div className="block">
                                <div className="image">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M10 17.25C9.30964 17.25 8.75 16.6904 8.75 16C8.75 15.3096 9.30964 14.75 10 14.75C10.6904 14.75 11.25 15.3096 11.25 16C11.25 16.6904 10.6904 17.25 10 17.25Z"
                                            fill="#C29773"/>
                                        <path
                                            d="M15.25 8C15.25 8.69036 14.6904 9.25 14 9.25C13.3096 9.25 12.75 8.69036 12.75 8C12.75 7.30964 13.3096 6.75 14 6.75C14.6904 6.75 15.25 7.30964 15.25 8Z"
                                            fill="#C29773"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM10 18.75C8.48122 18.75 7.25 17.5188 7.25 16C7.25 14.4812 8.48122 13.25 10 13.25C11.5188 13.25 12.75 14.4812 12.75 16C12.75 17.5188 11.5188 18.75 10 18.75ZM16.75 8C16.75 9.51878 15.5188 10.75 14 10.75C12.4812 10.75 11.25 9.51878 11.25 8C11.25 6.48122 12.4812 5.25 14 5.25C15.5188 5.25 16.75 6.48122 16.75 8ZM13.25 16C13.25 15.5858 13.5858 15.25 14 15.25H19C19.4142 15.25 19.75 15.5858 19.75 16C19.75 16.4142 19.4142 16.75 19 16.75H14C13.5858 16.75 13.25 16.4142 13.25 16ZM10 7.25C10.4142 7.25 10.75 7.58579 10.75 8C10.75 8.41421 10.4142 8.75 10 8.75L5 8.75C4.58579 8.75 4.25 8.41421 4.25 8C4.25 7.58579 4.58579 7.25 5 7.25L10 7.25ZM4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H6C6.41421 15.25 6.75 15.5858 6.75 16C6.75 16.4142 6.41421 16.75 6 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16ZM19 7.25C19.4142 7.25 19.75 7.58579 19.75 8C19.75 8.41421 19.4142 8.75 19 8.75H18C17.5858 8.75 17.25 8.41421 17.25 8C17.25 7.58579 17.5858 7.25 18 7.25H19Z" fill="#C29773" />
                                    </svg>
                                </div>
                                <img src={settings} alt="" />
                                <div className="text">
                                    <div>{t("the-main-services.blocks.0.title")}</div>
                                    <div>{t("the-main-services.blocks.0.description")} </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="image">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0867 21.3877L13.6288 20.4718C14.0492 19.7614 14.2595 19.4062 14.5972 19.2098C14.9349 19.0134 15.36 19.0061 16.2104 18.9915C17.4658 18.9698 18.2531 18.8929 18.9134 18.6194C20.1386 18.1119 21.1119 17.1386 21.6194 15.9134C22 14.9946 22 13.8297 22 11.5V10.5C22 7.22657 22 5.58985 21.2632 4.38751C20.8509 3.71473 20.2853 3.14908 19.6125 2.7368C18.4101 2 16.7734 2 13.5 2H10.5C7.22657 2 5.58985 2 4.38751 2.7368C3.71473 3.14908 3.14908 3.71473 2.7368 4.38751C2 5.58985 2 7.22657 2 10.5V11.5C2 13.8297 2 14.9946 2.3806 15.9134C2.88807 17.1386 3.86144 18.1119 5.08658 18.6194C5.74689 18.8929 6.53422 18.9698 7.78958 18.9915C8.63992 19.0061 9.06509 19.0134 9.40279 19.2098C9.74049 19.4063 9.95073 19.7614 10.3712 20.4718L10.9133 21.3877C11.3965 22.204 12.6035 22.204 13.0867 21.3877ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8.75 9C8.75 8.58579 8.41421 8.25 8 8.25C7.58579 8.25 7.25 8.58579 7.25 9V13C7.25 13.4142 7.58579 13.75 8 13.75C8.41421 13.75 8.75 13.4142 8.75 13V9ZM16 8.25C16.4142 8.25 16.75 8.58579 16.75 9V13C16.75 13.4142 16.4142 13.75 16 13.75C15.5858 13.75 15.25 13.4142 15.25 13V9C15.25 8.58579 15.5858 8.25 16 8.25Z" fill="#C29773" />
                                    </svg>
                                </div>
                                <img src={support} alt="" />
                                <div className="text">
                                    <div>{t("the-main-services.blocks.1.title")} </div>
                                    <div>{t("the-main-services.blocks.1.description")} </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="image">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V9C20 7.34315 18.6569 6 17 6H5C4.44772 6 4 5.55228 4 5ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM7.25 15.5C7.25 15.0858 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 15.0858 14.25 15.5C14.25 15.9142 13.9142 16.25 13.5 16.25H8C7.58579 16.25 7.25 15.9142 7.25 15.5Z" fill="#C29773" />
                                        <path d="M4.40879 4.0871C4.75727 4.24338 5 4.59334 5 5H17C17.3453 5 17.6804 5.04375 18 5.12602V4.30604C18 3.08894 16.922 2.15402 15.7172 2.32614L4.91959 3.86865C4.72712 3.89615 4.55271 3.97374 4.40879 4.0871Z" fill="#C29773" />
                                    </svg>
                                </div>
                                <img src={document} alt="" />
                                <div className="text">
                                    <div>{t("the-main-services.blocks.2.title")}</div>
                                    <div>{t("the-main-services.blocks.2.description")} </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="image">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4297 2C11.3158 2 10.3015 2.6007 8.27277 3.80211L7.58661 4.20846C5.55789 5.40987 4.54353 6.01057 3.98661 7C3.42969 7.98943 3.42969 9.19084 3.42969 11.5937V12.4063C3.42969 14.8092 3.42969 16.0106 3.98661 17C4.54353 17.9894 5.55789 18.5901 7.58661 19.7915L8.27277 20.1979C10.3015 21.3993 11.3158 22 12.4297 22C13.5435 22 14.5579 21.3993 16.5866 20.1979L17.2728 19.7915C19.3015 18.5901 20.3158 17.9894 20.8728 17C21.4297 16.0106 21.4297 14.8092 21.4297 12.4063V11.5937C21.4297 9.19084 21.4297 7.98943 20.8728 7C20.3158 6.01057 19.3015 5.40987 17.2728 4.20846L16.5866 3.80211C14.5579 2.6007 13.5435 2 12.4297 2ZM8.67969 12C8.67969 9.92893 10.3586 8.25 12.4297 8.25C14.5008 8.25 16.1797 9.92893 16.1797 12C16.1797 14.0711 14.5008 15.75 12.4297 15.75C10.3586 15.75 8.67969 14.0711 8.67969 12Z" fill="#C29773" />
                                    </svg>
                                </div>
                                <img src={services} alt="" />
                                <div className="text">
                                    <div>{t("the-main-services.blocks.3.title")}</div>
                                    <div>{t("the-main-services.blocks.3.description")} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="statistic">
                    <div className="content">
                        <div className="statistic-block">
                            <div className="img-number">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534ZM16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z" fill="#191C38" />
                                </svg>
                                {t("statistics.clients.number")}
                            </div>
                            <img src={smile} alt="" />
                            <div className="text">
                                {t("statistics.clients.text")}
                            </div>
                        </div>
                        <div className="statistic-block">
                            <div className="img-number">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" fill="#191C38" />
                                    <path d="M18 16.5C18 18.433 15.3137 20 12 20C8.68629 20 6 18.433 6 16.5C6 14.567 8.68629 13 12 13C15.3137 13 18 14.567 18 16.5Z" fill="#191C38" />
                                    <path d="M7.12205 5C7.29951 5 7.47276 5.01741 7.64005 5.05056C7.23249 5.77446 7 6.61008 7 7.5C7 8.36825 7.22131 9.18482 7.61059 9.89636C7.45245 9.92583 7.28912 9.94126 7.12205 9.94126C5.70763 9.94126 4.56102 8.83512 4.56102 7.47063C4.56102 6.10614 5.70763 5 7.12205 5Z" fill="#191C38" />
                                    <path d="M5.44734 18.986C4.87942 18.3071 4.5 17.474 4.5 16.5C4.5 15.5558 4.85657 14.744 5.39578 14.0767C3.4911 14.2245 2 15.2662 2 16.5294C2 17.8044 3.5173 18.8538 5.44734 18.986Z" fill="#191C38" />
                                    <path d="M16.9994 7.5C16.9994 8.36825 16.7781 9.18482 16.3888 9.89636C16.547 9.92583 16.7103 9.94126 16.8774 9.94126C18.2918 9.94126 19.4384 8.83512 19.4384 7.47063C19.4384 6.10614 18.2918 5 16.8774 5C16.6999 5 16.5267 5.01741 16.3594 5.05056C16.7669 5.77446 16.9994 6.61008 16.9994 7.5Z" fill="#191C38" />
                                    <path d="M18.5521 18.986C20.4821 18.8538 21.9994 17.8044 21.9994 16.5294C21.9994 15.2662 20.5083 14.2245 18.6036 14.0767C19.1429 14.744 19.4994 15.5558 19.4994 16.5C19.4994 17.474 19.12 18.3071 18.5521 18.986Z" fill="#191C38" />
                                </svg>
                                {t("statistics.employees.number")}
                            </div>
                            <img src={employees} alt="" />
                            <div className="text">
                                {t("statistics.employees.text")}
                            </div>
                        </div>
                        <div className="statistic-block">
                            <div className="img-number">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L8.10057 3.5508L17.0236 8.64967L21.0403 6.64132C20.3941 5.90949 19.3515 5.36234 17.5777 4.43152Z" fill="#191C38" />
                                    <path d="M21.7484 7.96434L17.75 9.96353V13C17.75 13.4142 17.4142 13.75 17 13.75C16.5858 13.75 16.25 13.4142 16.25 13V10.7135L12.75 12.4635V21.904C13.4679 21.7252 14.2848 21.2965 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C22 15.8458 22 14.5833 22 12.0585V11.9415C22 10.0489 22 8.86557 21.7484 7.96434Z" fill="#191C38" />
                                    <path d="M11.25 21.904V12.4635L2.25164 7.96434C2 8.86557 2 10.0489 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27062 18.4393 6.42228 19.5685L8.42229 20.618C9.71524 21.2965 10.5321 21.7252 11.25 21.904Z" fill="#191C38" />
                                    <path d="M2.95969 6.64132L12 11.1615L15.4112 9.4559L6.52456 4.37785L6.42229 4.43152C4.64855 5.36234 3.6059 5.90949 2.95969 6.64132Z" fill="#191C38" />
                                </svg>
                                {t("statistics.companies.number")}
                            </div>
                            <img src={box} alt="" />
                            <div className="text">
                                {t("statistics.companies.text")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
            <Footer></Footer>
        </div>
    )
}

export default MinLand
