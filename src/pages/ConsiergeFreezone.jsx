import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Pages/consiergeFreezone.scss"
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
import alexLogachevName from "../assets/teams/alex-logachev-min.jpg";
import qrAlex from "../assets/teams/qr/qr-alex.svg";

import RequestModal from "../components/RequestModal.jsx";
import telegramIcon from "../assets/telegram-icon.png";
import arrowButton from "../assets/arrow-left.png";

import twoArrow from "../assets/Registration/two-arrow.png";
import user from "../assets/Registration/user.png";
import message from "../assets/Registration/message.png";
import documentBh from "../assets/Registration/document.png";
import arrowCircle from "../assets/Registration/arrow-circle.png";

import banerPh from "../assets/Registration/baner-photo.jpg";

import { Link } from "react-router-dom";

import GetAdvice from "../components/GetAdvice"
import GetConsult from "../components/GetConsult"
import NewConsultBaner from "../components/NewConsultBaner"

import CostOfService from "../components/CostOfService";
import BigInfoCard from "../components/BigInfoCard";

import BanerBlocks from "../components/BanerBlocks.jsx"
import Table from "../components/Table.jsx"

import ReliablePartner from "../components/ReliablePartners";
import Provide from "../components/Provide";
import NoTaxes from "../components/NoTaxes";

function ConsiergeFreezone() {
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
                        <path d="M82.0312 27.0001C82.0312 25.1173 83.1578 23.4172 84.8917 22.6834C86.6256 21.9495 88.6303 22.3243 89.9819 23.635L115.763 48.635C116.674 49.5178 117.188 50.7319 117.188 52.0001C117.188 53.2683 116.674 54.4824 115.763 55.3653L89.9819 80.3653C88.6303 81.676 86.6256 82.0508 84.8917 81.3169C83.1578 80.583 82.0313 78.8829 82.0313 77.0001V56.6876H37.5C34.9112 56.6876 32.8125 54.589 32.8125 52.0001C32.8125 49.4113 34.9112 47.3126 37.5 47.3126L82.0313 47.3126L82.0312 27.0001Z" fill="#C29773" />
                        <path d="M67.9688 -22.9999C67.9688 -24.8827 66.8422 -26.5828 65.1083 -27.3166C63.3744 -28.0505 61.3697 -27.6757 60.0181 -26.365L34.2368 -1.36503C33.3264 -0.48217 32.8125 0.731916 32.8125 2.00012C32.8125 3.26833 33.3264 4.48243 34.2368 5.36528L60.0181 30.3653C61.3697 31.676 63.3744 32.0508 65.1083 31.3169C66.8422 30.583 67.9687 28.8829 67.9687 27.0001V6.68763L112.5 6.68763C115.089 6.68763 117.188 4.58896 117.188 2.00012C117.188 -0.588715 115.089 -2.68738 112.5 -2.68738L67.9688 -2.68738V-22.9999Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("blocks-freezone.block01"),
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
                        <path d="M100 -10.5C100 3.30712 88.8071 14.5 75 14.5C61.1929 14.5 50 3.30712 50 -10.5C50 -24.3071 61.1929 -35.5 75 -35.5C88.8071 -35.5 100 -24.3071 100 -10.5Z" fill="#C29773" />
                        <path d="M97.9887 36.3924C95.032 36.4282 92.2761 36.5361 89.8745 36.859C85.8565 37.3992 81.4585 38.6903 77.8245 42.3243C74.1905 45.9583 72.8994 50.3563 72.3591 54.3743C71.8737 57.9851 71.8744 62.3967 71.8751 67.0876V68.1622C71.8744 72.8532 71.8737 77.2648 72.3591 80.8755C72.7382 83.695 73.4871 86.7016 75.1557 89.5C75.1038 89.5 75.0519 89.5 75 89.5C25 89.5 25 76.908 25 61.375C25 45.842 47.3858 33.25 75 33.25C83.2886 33.25 91.1062 34.3845 97.9887 36.3924Z" fill="#C29773" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M103.125 89.5C92.813 89.5 87.657 89.5 84.4535 86.2965C81.25 83.093 81.25 77.937 81.25 67.625C81.25 57.313 81.25 52.157 84.4535 48.9535C87.657 45.75 92.813 45.75 103.125 45.75C113.437 45.75 118.593 45.75 121.796 48.9535C125 52.157 125 57.313 125 67.625C125 77.937 125 83.093 121.796 86.2965C118.593 89.5 113.437 89.5 103.125 89.5ZM115.425 62.9113C116.849 61.4875 116.849 59.1791 115.425 57.7553C114.001 56.3316 111.693 56.3316 110.269 57.7553L98.2639 69.7607L95.9808 67.4776C94.557 66.0538 92.2486 66.0538 90.8248 67.4776C89.401 68.9013 89.401 71.2098 90.8248 72.6335L95.6859 77.4947C97.1097 78.9184 99.4181 78.9184 100.842 77.4947L115.425 62.9113Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("blocks-freezone.block02"),
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
                        <path d="M103.243 55.1332C104.337 54.28 105.329 53.288 107.313 51.304L132.047 26.5703C132.179 26.4383 132.245 26.3723 132.276 26.3346C132.71 25.8064 132.542 25.0773 131.921 24.7914C131.877 24.771 131.775 24.7357 131.572 24.6652L131.572 24.6652C128.652 23.6523 124.855 21.7506 121.302 18.198C117.749 14.6454 115.848 10.8476 114.835 7.92805L114.835 7.9278C114.764 7.72469 114.729 7.62312 114.709 7.57879C114.423 6.95779 113.694 6.79038 113.165 7.22441C113.128 7.25539 113.062 7.32133 112.93 7.45318L112.93 7.4534L88.196 32.1872C86.212 34.1712 85.22 35.1632 84.3668 36.2569C83.3605 37.5472 82.4977 38.9433 81.7937 40.4204C81.1969 41.6726 80.7533 43.0035 79.866 45.6653L78.7195 49.1048L76.8965 54.5738L75.1872 59.7018C74.7505 61.0117 75.0915 62.4559 76.0678 63.4322C77.0441 64.4085 78.4883 64.7495 79.7982 64.3128L84.9262 62.6035L90.3953 60.7805L93.8347 59.634L93.8349 59.6339C96.4966 58.7467 97.8274 58.3031 99.0796 57.7063C100.557 57.0023 101.953 56.1395 103.243 55.1332Z" fill="#C29773" />
                        <path d="M139.791 18.8261C145.07 13.5471 145.07 4.98822 139.791 -0.290763C134.512 -5.56975 125.953 -5.56975 120.674 -0.290763L119.347 1.03621C119.018 1.36554 118.853 1.53021 118.779 1.76335C118.706 1.9965 118.745 2.22138 118.824 2.67113C118.878 2.9762 118.93 3.27025 118.955 3.4116C119.076 4.08351 119.3 5.06582 119.706 6.23797C120.519 8.58212 122.055 11.6593 124.948 14.552C127.841 17.4447 130.918 18.9805 133.262 19.7938C134.434 20.2005 135.417 20.424 136.088 20.5446C136.23 20.57 136.524 20.6224 136.829 20.6759C137.279 20.7549 137.503 20.7943 137.737 20.7207C137.97 20.6471 138.134 20.4824 138.464 20.1531L139.791 18.8261Z" fill="#C29773" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0723 -28.1777C18.75 -20.8553 18.75 -9.07023 18.75 14.5V39.5C18.75 63.0702 18.75 74.8553 26.0723 82.1777C33.3947 89.5 45.1798 89.5 68.75 89.5H81.25C104.82 89.5 116.605 89.5 123.928 82.1777C131.133 74.9728 131.248 63.4472 131.25 40.6254L113.636 58.2399C111.95 59.9272 110.569 61.309 109.009 62.5255C107.182 63.9506 105.205 65.1724 103.113 66.1694C101.328 67.0202 99.4742 67.6374 97.2112 68.3908L82.7631 73.2067C78.0845 74.7663 72.9262 73.5486 69.4389 70.0613C65.9516 66.5741 64.734 61.4158 66.2935 56.7372L68.0029 51.6091L70.9723 42.7007L71.1093 42.2894C71.8628 40.0262 72.48 38.1726 73.3309 36.3871C74.3278 34.2953 75.5497 32.3183 76.9748 30.4911C78.1912 28.9315 79.5732 27.5505 81.2606 25.8644L106.301 0.824276L113.25 -6.12473L114.045 -6.91989C118.516 -11.3912 124.377 -13.6262 130.237 -13.625C129.292 -20.0659 127.463 -24.642 123.928 -28.1777C116.605 -35.5 104.82 -35.5 81.25 -35.5H68.75C45.1798 -35.5 33.3947 -35.5 26.0723 -28.1777ZM45.3125 8.25C45.3125 5.66116 47.4112 3.5625 50 3.5625H90.625C93.2138 3.5625 95.3125 5.66116 95.3125 8.25C95.3125 10.8388 93.2138 12.9375 90.625 12.9375H50C47.4112 12.9375 45.3125 10.8388 45.3125 8.25ZM45.3125 33.25C45.3125 30.6612 47.4112 28.5625 50 28.5625H65.625C68.2138 28.5625 70.3125 30.6612 70.3125 33.25C70.3125 35.8388 68.2138 37.9375 65.625 37.9375H50C47.4112 37.9375 45.3125 35.8388 45.3125 33.25ZM45.3125 58.25C45.3125 55.6612 47.4112 53.5625 50 53.5625H59.375C61.9638 53.5625 64.0625 55.6612 64.0625 58.25C64.0625 60.8388 61.9638 62.9375 59.375 62.9375H50C47.4112 62.9375 45.3125 60.8388 45.3125 58.25Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("blocks-freezone.block03"),
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
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M81.7916 85.6731L85.1797 79.949C87.8077 75.509 89.1217 73.2891 91.2323 72.0615C93.3429 70.834 96.0002 70.7882 101.315 70.6966C109.161 70.5614 114.082 70.0807 118.209 68.3712C125.866 65.1996 131.95 59.116 135.121 51.4589C137.5 45.716 137.5 38.4357 137.5 23.875V17.625C137.5 -2.83394 137.5 -13.0634 132.895 -20.5781C130.318 -24.7829 126.783 -28.3183 122.578 -30.895C115.063 -35.5 104.834 -35.5 84.375 -35.5H65.625C45.1661 -35.5 34.9366 -35.5 27.4219 -30.895C23.2171 -28.3183 19.6817 -24.7829 17.105 -20.5781C12.5 -13.0634 12.5 -2.83394 12.5 17.625V23.875C12.5 38.4357 12.5 45.716 14.8788 51.4589C18.0505 59.116 24.134 65.1996 31.7911 68.3712C35.9181 70.0807 40.8389 70.5614 48.6849 70.6966C53.9995 70.7882 56.6568 70.834 58.7674 72.0615C60.8781 73.2891 62.1921 75.509 64.82 79.949L68.2082 85.6731C71.228 90.775 78.7718 90.775 81.7916 85.6731ZM75 -8.9375C77.5888 -8.9375 79.6875 -6.83883 79.6875 -4.25V45.75C79.6875 48.3388 77.5888 50.4375 75 50.4375C72.4112 50.4375 70.3125 48.3388 70.3125 45.75V-4.25C70.3125 -6.83883 72.4112 -8.9375 75 -8.9375ZM54.6875 8.25C54.6875 5.66117 52.5888 3.5625 50 3.5625C47.4112 3.5625 45.3125 5.66117 45.3125 8.25V33.25C45.3125 35.8388 47.4112 37.9375 50 37.9375C52.5888 37.9375 54.6875 35.8388 54.6875 33.25V8.25ZM100 3.5625C102.589 3.5625 104.688 5.66117 104.688 8.25V33.25C104.688 35.8388 102.589 37.9375 100 37.9375C97.4112 37.9375 95.3125 35.8388 95.3125 33.25V8.25C95.3125 5.66117 97.4112 3.5625 100 3.5625Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("blocks-freezone.block04"),
        },
    ];
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const RegisteringCard = ({ count, title, description, days }) => {
        return (
            <div className="registering-card">
                <div className="title">
                    <div>{count}</div>
                    <div>
                        {title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20.5C16.9706 20.5 21 16.4706 21 11.5C21 6.52944 16.9706 2.5 12 2.5C7.02944 2.5 3 6.52944 3 11.5C3 16.4706 7.02944 20.5 12 20.5ZM12 6.75C12.4142 6.75 12.75 7.08579 12.75 7.5V11.1893L15.0303 13.4697C15.3232 13.7626 15.3232 14.2374 15.0303 14.5303C14.7374 14.8232 14.2626 14.8232 13.9697 14.5303L11.4697 12.0303C11.329 11.8897 11.25 11.6989 11.25 11.5V7.5C11.25 7.08579 11.5858 6.75 12 6.75Z" fill="#C29773" />
                        </svg>
                    </div>
                </div>
                <div className="text">
                    <div>{description}</div>
                    <div>{days}</div>
                </div>
            </div>
        )
    }

    const title = (
        <div>
            {t('yourNamespace.title.line1')} <br />
            {t('yourNamespace.title.line2')} <br />
            {t('yourNamespace.title.line3')}
        </div>
    );

    return (<div className="cons-free-wrapper">
        <Header />
        <div className="cons-free-container">
            <div className="baner-guide">
                <NewConsultBaner
                    img={banerPh}
                    title={title}
                    description={[t("subheader")]}
                />
                <BanerBlocks
                    guides={guides}
                />
            </div>


            <div className="registring">
                <div className="title">
                    <div>{t("main_title")}</div>
                    <div>{t("main_paragraph")}</div>
                </div>
                <div className="resolve-container">
                    <RegisteringCard
                        count="1"
                        title={t('resolveContainer.cards.0.title')}
                        description={t('resolveContainer.cards.0.description')}
                        days={t('resolveContainer.cards.0.days')}
                    />
                    <RegisteringCard
                        count="2"
                        title={t('resolveContainer.cards.1.title')}
                        description={t('resolveContainer.cards.1.description')}
                        days={t('resolveContainer.cards.1.days')}
                    />
                    <RegisteringCard
                        count="3"
                        title={t('resolveContainer.cards.2.title')}
                        description={t('resolveContainer.cards.2.description')}
                        days={t('resolveContainer.cards.2.days')}
                    />
                    <RegisteringCard
                        count="4"
                        title={t('resolveContainer.cards.3.title')}
                        description={t('resolveContainer.cards.3.description')}
                        days={t('resolveContainer.cards.3.days')}
                    />
                    <RegisteringCard
                        count="5"
                        title={t('resolveContainer.cards.4.title')}
                        description={t('resolveContainer.cards.4.description')}
                        days={t('resolveContainer.cards.4.days')}
                    />
                    <RegisteringCard
                        count="6"
                        title={t('resolveContainer.cards.5.title')}
                        description={t('resolveContainer.cards.5.description')}
                        days={t('resolveContainer.cards.5.days')}
                    />
                </div>
            </div>

            <div className="table-box">
                <Table/>
            </div>

            <div className="mob-none">
                <GetConsult/>
            </div>

            <div className="setup">
                <CostOfService/>
            </div>

            <div className="discount">
                <div className="block">
                    <div>{t("Discount 5%")}</div>
                    <div>{t("for all accounting services when purchasing the tariff")} <span>{t("Basic")}</span></div>
                </div>
                <div className="block">
                    <div>{t("Discount 10%")}</div>
                    <div>{t("for all accounting services when purchasing a tariff")} <span>{t("Advanced")}</span></div>
                </div>
                <div className="support-block-button">
                    <Link to={"/accounting"}>
                        <div className="button">
                            {t("Accounting support")}
                            <img src={arrowCircle} alt="" />
                        </div>
                    </Link>
                    <div className="descr">
                        {t("Tariffs for accounting support for companies with more than 50 transactions per year or a turnover of more than $100,000 per year")}
                    </div>
                </div>
            </div>


            <div className="big-info-card-container">
                <BigInfoCard
                    name={t("Silicon Oasis")}
                    price={t("$8,000")}
                    activitiesBlocks={[
                        { text: t("Consulting") },
                        { text: t("Service sector") },
                        { text: t("Commerce") },
                        { text: t("Industry") },
                    ]}
                    opportunitiesBlocks={[
                        { text: t("Real and virtual offices") },
                        { text: t("Multi-purpose warehousing and manufacturing") },
                    ]}
                    capitalPrice={t("10 000")}
                    longText={[
                        { text: t("Dubai Silicon Oasis is a free zone, as well as a large business and residential complex in Dubai. This is one of the most attractive places to start a business in the UAE.") },
                        { text: t("It serves as a technological center for industrial, research and development enterprises.") },
                        { text: t("The price/opportunity ratio is the best in the UAE. Suitable for almost any type of business.") },
                        { text: t("It is also part of the DIEZ – an association of the 3 largest free economic zones of Dubai (Silicon Oasis, Dubai Airport Free Zone, Dubai Commerce), which allows you to enjoy all the advantages of the Dubai Airport Free Zone and Dubai Commerce zones.") },
                    ]}
                />

                <BigInfoCard
                    name={t("DIFC")}
                    price={t("$15,000")}
                    activitiesBlocks={[
                        { text: t("Banking and brokerage services, money management") },
                        { text: t("Capital markets") },
                        { text: t("Consulting") },
                    ]}
                    opportunitiesBlocks={[
                        {
                            text: t("Real and virtual offices")
                        },
                        { text: t("Use of British judicial law") },
                    ]}
                    capitalPrice={t("$300,000")}
                    longText={[
                        { text: t("Dubai International Financial Center (DIFC) stands as a preeminent financial hub in the Middle East, South Asia, Africa, and South Asia, distinguished by its private legislation and an independent judicial system.") },
                        { text: t("Within this zone, the transparency of an open register of shareholders and the integration of British law within its judicial framework create an ideal environment for establishing holding structures.") },
                        { text: t("Moreover, DIFC's unwavering dedication to innovation and state-of-the-art technological infrastructure further enhances its appeal to businesses seeking a competitive edge in the global financial landscape.") },
                    ]}
                />

                <BigInfoCard
                    name={t("MeydanFreeZone")}
                    price={t("$10,000")}
                    activitiesBlocks={[
                        { text: t("Consulting") },
                        { text: t("Service sector") },
                        { text: t("Commerce") },
                    ]}
                    opportunitiesBlocks={[
                        { text: t("Real and virtual offices") },
                        { text: t("There is a residential complex on the territory of the zone") },
                    ]}
                    capitalPrice={t("$100,000")}
                    longText={[
                        { text: t("A modern economic free zone in the heart of Dubai, Meydan is located near the most important sights of the emirate, which gives investors a number of strategic advantages.") },
                        { text: t("It offers open office space and fully serviced offices accommodating all types of businesses, including commercial, consulting, investment and administrative companies, as well as a selection of elite residences. The free zone also has a 5-star") },
                    ]}
                />
            </div>

            <div className="consult-help">
                <GetConsult />
            </div>

            <div className="transparent">
                <div className="content">
                    <div className="title">
                        <div>{t("transparentTitle")}</div>
                        <div>{t("transparentDiscount")}</div>
                    </div>
                    <div className="descr">
                        {t("transparentDescription")}
                    </div>
                </div>
                <div className="image">
                </div>
                <div className="image tg">
                </div>
                <div className="content">
                    <div className="title title-tg">
                        <div>{t("communityTitle")}</div>
                        <div><img src={telegramIcon} alt="" /></div>
                    </div>
                    <div className="descr">
                        {t("communityDescription")}
                    </div>
                </div>
                <div className="image mob-tg">
                </div>
            </div>

            <div className="our-services">
                <div className="our-services-content">
                    <div className="title">
                        <div>{t("name72")}</div>
                        <div className="buttons-container">
                            <div className="button">
                                <img src={arrowButton} alt="" />
                            </div>
                            <div className="button rotate180deg">
                                <img src={arrowButton} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div className="content">
                                <div>{t("name73")}</div>
                                <div>{t("name74")}</div>
                            </div>
                            <div className="button">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <div>{t("name75")}</div>
                                <div>{t("name76")}</div>
                            </div>
                            <div className="button">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reliable-box">
                <ReliablePartner />
            </div>

            <div className="provide-box">
                <Provide />
            </div>

            <GetAdvice />


            <div className="no-texes-box">
                <NoTaxes />
            </div>
        </div>
        <Footer />
        <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
    </div >
    )
}

export default ConsiergeFreezone
