import collection1 from "../assets/collection1.jpg";
import collection3 from "../assets/collection3.jpg";

import Header from "../components/Header"
import Footer from "../components/Footer"

import '../styles/Pages/aboutUs.scss'
import { useTranslation } from "react-i18next";
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
import DynamicTruncatedText from "../components/DynamicTruncatedText.jsx";
import ruslanGeisha from "../assets/teams/ruslan-geisha.png";
import AboutUsImage from "../assets/about-us.png";
import Provide from "../components/Provide";

import { Link } from "react-router-dom";
import box from "../assets/freezone/box.svg";
import boxBh from "../assets/Registration/box-bh.png";
import world from "../assets/freezone/world.svg";
import worldBh from "../assets/Registration/world-bh.png";
import document from "../assets/freezone/document.svg";
import groupBh from "../assets/Registration/group-bh.png";
import legal from "../assets/freezone/legal.svg";
import checkBh from "../assets/Registration/check-bh.png";
import GetAdvice from "../components/GetAdvice.jsx";
import GetConsult from "../components/GetConsult.jsx";
import {Helmet} from "react-helmet";


function AboutUs() {
    const { t } = useTranslation();
    const team = [
        {
            "image": alexLogachevName, "name": t("Lohachov Oleksandr"), "position": t("Owner & CEO Property Partners Real Estate"), "qr": qrAlex,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Lohachov.vcf", "email": "lohachov@propart.ae",
            "social": {
                "telegram": "https://t.me/oleksandr_logachev",
                "instagram": "https://instagram.com/logachev_alexsandr?igshid=MzRlODBiNWFlZA==",
                "whatsapp": "https://wa.me/971588395135",
                "facebook": "https://www.facebook.com/logachev.alexsandr?mibextid=LQQJ4d",
                "youtube": "https://www.youtube.com/@logachev_alexsandr"
            }
        },
        {
            "image": alekseiShyianName, "name": t("Aleksei Shyian"), "position": t("Business Developer"), "qr": alekseiShyian,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Shyian.vcf", "email": "info@kristalexperts.com",
            "social": {
                "instagram": "https://instagram.com/dubai_oleksii_shyian?igshid=MzRlODBiNWFlZA==",
                "telegram": "https://t.me/brodubai",
                "whatsapp": "https://wa.me/971585952108",
                "linkedin": "https://www.linkedin.com/in/oleksii-shyian-86348b5b/"


            }
        },
        {
            "image": tykhovaTatianaName, "name": t("Tykhova Tatiana"), "position": t("Real estate broker"), "qr": tykhovaTatiana,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Tykhova.vcf", "email": "tykhova@propart.ae",
            "social": {
                "instagram": "https://instagram.com/taffeeta?igshid=NTc4MTIwNjQ2YQ==",
                "telegram": "https://t.me/+971522419898",
                "whatsapp": "https://wa.me/971522419898",
                "facebook": "https://www.facebook.com/profile.php?id=100090630440600&mibextid=LQQJ4d",
                "linkedin": "https://www.linkedin.com/in/tatiana-tykhova-2a7325135?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            }
        }
        ,
        {
            "image": kristinaSokolovskayaName, "name": t("Kristina Sokolovskaya"), "position": t("Owner & CEO Kristal Business Experts"), "qr": kristinaSokolovskaya,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Sokolovskaya.vcf", "email": "info@kristalexperts.com",
            "social": {
                "telegram": "https://t.me/+971529568390",
                "whatsapp": "https://wa.me/971529568390"
            }
        },
        {
            "image": pavelDyninName, "name": t("Pavel Dynin"), "position": t("Real estate broker"), "qr": propertyPartnersDynin,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/dynin.vcf", "email": "dynin@propart.ae",
            "social": {
                "telegram": "https://t.me/pavel_dynin",
                "instagram": "https://instagram.com/pavel.dynin?igshid=OGQ5ZDc2ODk2ZA==",
                "whatsapp": "https://wa.me/971585622362",
                "facebook": "https://www.facebook.com/csdus?mibextid=LQQJ4d"
            }
        },
        {
            "image": annaHorshunovaName, "name": t("Anna Horshunova"), "position": t("Real estate broker"), "qr": annaHorshunova,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Horshunova.vcf", "email": "Horshunova@propart.ae",
            "social": {
                "facebook": "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d",
                "telegram": "https://t.me/annagorshunova",
                "whatsapp": "https://wa.me/971506585962",
                "instagram": "https://instagram.com/annagorshunova?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
            }
        },
        {
            "image": allaGerassimovaName, "name": t("Alla Gerassimova"), "position": t("Marketing specialist, content creator"), "qr": allaGerassimova,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Gerassimova.vcf", "email": "gerassimova@propart.ae",
            "social": {
                "telegram": "https://t.me/alla_gerassimova",
                "instagram": "https://instagram.com/a11gep?igshid=NTc4MTIwNjQ2YQ==",
                "whatsapp": "https://wa.me/971555728933",
            }
        },
        {
            "image": dmitriyKoltsovName, "name": t("Dmitriy Koltsov"), "position": t("Real estate broker"), "qr": dmitriyKoltsov,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Koltsov.vcf", "email": "koltsov@propart.ae",
            "social": {
                "telegram": "https://t.me/brokervdubae",
                "instagram": "https://instagram.com/brokervdubae",
                "whatsapp": "https://wa.me/971585589938",
            }
        },
        // {
        //     "image": aleksandraBobrova, "name": "Aleksandra Bobrova", "position": "Sales manager secondary market","qr":qrAlex,
        //     "social": {
        //         "telegram": "https://t.me/alexandraa_ab",
        //         "instagram":"https://www.instagram.com/alexandraa_ab?igsh=NTl0NTNiaHk5em9w",
        //         "whatsapp":"https://wa.me/971566510053",
        //     }
        // },
        {
            "image": ruslanGeisha, "name": t("Ruslan Geisha"), "position": t("Real estate broker"), "qr": qrAlex,
            "vcf": "https://propart-vcf.s3.me-south-1.amazonaws.com/Geisha.vcf", "email": "geisha@propart.ae",
            "social": {
                "telegram": "https://t.me/ruslan_geisha",
                "instagram": "https://www.instagram.com/mister_geisha?igsh=eWs3aTluNmN0NXdq",
                "whatsapp": "https://wa.me/971503886822",
            }
        },
    ]

    return (
        <div className="about-wrapper">
            <Helmet>
                <title>PROPART: Redefining Real Estate in Dubai - Your Premier Real Estate Agency</title>
                <meta name="description" content="Embark on an exceptional real estate journey with PROPART, your trusted agency in the heart of Dubai. Our seasoned team, led by CEO Lohachov Oleksa, brings a wealth of experience and a personalized approach to redefine your property experiences. From luxurious villas to state-of-the-art apartments, discover a diverse portfolio tailored to your unique needs. Partner with us for expert legal support, hassle-free customs, licensing expertise, and seamless real estate transactions. Your dream property journey begins with PROPART." />
                <meta name="keywords" content="PROPART, Real Estate Dubai, Dubai Property Market, Real Estate Brokerage, Luxury Villas, Apartments in Dubai, Legal Support, Customs Clearance, Licensing Procedures, Real Estate Transactions, Lohachov Oleksa, CEO, Personalized Approach, Seamless Experiences" />
            </Helmet>
            <Header />
            <div className="about-container">
                <div className="banner">
                    <div className="text-photo">
                        <div className="text-content">
                            <div className="text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="207" height="81" viewBox="0 0 207 81"
                                     fill="none">
                                    <path
                                        d="M184.433 0H188.455C192.276 0.32317 195.656 1.47829 198.594 3.46535C201.622 5.51355 203.835 8.13603 205.236 11.3328C207.703 16.973 207.57 24.7553 204.917 30.3627C201.333 37.9485 193.92 41.4859 185.364 41.1846C173.33 40.7653 165.824 32.1118 165.884 20.6873C165.91 15.0405 167.526 9.76062 171.515 5.75156C174.87 2.37137 179.176 0.454186 184.433 0ZM196.061 26.7533C197.364 23.3207 197.528 19.7156 196.553 15.938C195.104 10.324 190.117 7.33029 184.313 8.31291C176.462 9.63616 174.627 18.9382 176.335 25.1025C177.669 29.9326 180.719 32.5834 185.484 33.0551C190.118 33.5137 194.439 31.0244 196.061 26.7533Z"
                                        fill="white"/>
                                    <path
                                        d="M40.5905 80.9996H0V1.29371C0.119933 0.77004 0.564128 0.508204 1.33258 0.508204C27.7622 0.4774 54.194 0.464198 80.628 0.468599C80.803 0.468599 80.9708 0.538144 81.0945 0.661934C81.2182 0.785725 81.2877 0.953622 81.2877 1.12869V40.0806C81.2877 40.5251 81.0633 40.7473 80.6147 40.7473L41.0236 40.6879C40.7749 40.6879 40.6505 40.8111 40.6505 41.0575L40.5905 80.9996ZM31.3157 31.8361C31.3157 31.791 31.3247 31.7464 31.3421 31.7047C31.3595 31.6631 31.385 31.6252 31.4172 31.5934C31.4494 31.5615 31.4876 31.5362 31.5296 31.519C31.5717 31.5017 31.6167 31.4928 31.6622 31.4928H71.6131C71.705 31.4928 71.7931 31.4567 71.8581 31.3923C71.9231 31.3279 71.9596 31.2406 71.9596 31.1496V10.0531C71.9596 9.96207 71.9231 9.87476 71.8581 9.81039C71.7931 9.74602 71.705 9.70986 71.6131 9.70986H9.67457C9.58267 9.70986 9.49455 9.74602 9.42957 9.81039C9.3646 9.87476 9.32809 9.96207 9.32809 10.0531V71.4151C9.32809 71.5061 9.3646 71.5934 9.42957 71.6578C9.49455 71.7221 9.58267 71.7583 9.67457 71.7583H30.9693C31.0612 71.7583 31.1493 71.7221 31.2143 71.6578C31.2792 71.5934 31.3157 71.5061 31.3157 71.4151V31.8361Z"
                                        fill="white"/>
                                    <path
                                        d="M104.01 28.1291V40.3508C104.01 40.5844 103.892 40.7012 103.657 40.7012L94.7602 40.7342C94.6967 40.7342 94.6357 40.7091 94.5907 40.6645C94.5458 40.6199 94.5205 40.5594 94.5205 40.4963V1.34564C94.5205 1.08565 94.6515 0.953454 94.9134 0.949048C102.194 0.922608 108.68 0.938031 114.372 0.995317C124.314 1.10108 129.554 9.79313 126.931 18.8157C125.213 24.7051 119.772 27.5408 113.819 27.706C110.747 27.7942 107.608 27.8074 104.403 27.7457C104.141 27.7413 104.01 27.8691 104.01 28.1291ZM104.023 9.02638L103.983 19.5362C103.983 19.594 104.006 19.6495 104.048 19.6904C104.089 19.7313 104.145 19.7543 104.203 19.7543L112.693 19.7873C113.4 19.7901 114.1 19.6611 114.754 19.4077C115.408 19.1544 116.003 18.7817 116.504 18.3109C117.006 17.8401 117.404 17.2805 117.677 16.6639C117.95 16.0474 118.091 15.386 118.094 14.7175V13.9508C118.099 12.6011 117.537 11.3045 116.532 10.3463C115.527 9.38812 114.16 8.84676 112.733 8.8413L104.243 8.80825C104.185 8.80825 104.129 8.83123 104.088 8.87214C104.046 8.91305 104.023 8.96853 104.023 9.02638Z"
                                        fill="white"/>
                                    <path
                                        d="M158.024 22.0751C161.064 23.2212 162.722 25.4605 162.998 28.7929C163.224 31.5127 163.389 34.2787 163.491 37.091C163.531 38.2239 163.838 39.3214 164.411 40.3838C164.526 40.5998 164.46 40.7078 164.211 40.7078L155.211 40.7342C155.088 40.7341 154.968 40.6984 154.865 40.6315C154.762 40.5645 154.68 40.4693 154.631 40.3573C154.151 39.2818 153.898 38.1643 153.871 37.005C153.822 34.7878 153.72 32.6632 153.565 30.6311C153.36 27.9069 151.876 26.4016 149.111 26.1151C147.48 25.9476 144.554 25.9145 140.332 26.0159C140.069 26.0203 139.938 26.1525 139.938 26.4126V40.3177C139.938 40.5777 139.805 40.7078 139.538 40.7078L130.892 40.7342C130.59 40.7342 130.438 40.5865 130.438 40.2912V1.16133C130.438 1.10171 130.462 1.04453 130.505 1.00237C130.547 0.960209 130.605 0.936523 130.665 0.936523C137.083 0.954155 143.674 0.956359 150.438 0.943135C157.544 0.929911 163.551 4.41444 163.958 11.9125C164.206 16.4395 162.222 19.697 158.004 21.685C157.702 21.8261 157.709 21.9561 158.024 22.0751ZM139.932 8.61307L139.945 18.7956C139.945 18.8429 139.964 18.8883 139.998 18.9218C140.031 18.9553 140.077 18.9741 140.125 18.9741L148.998 18.9543C150.388 18.9523 151.72 18.4378 152.701 17.524C153.682 16.6101 154.233 15.3717 154.231 14.0812V13.2745C154.228 11.9849 153.673 10.7494 152.69 9.83941C151.706 8.92942 150.373 8.41938 148.985 8.42132L140.112 8.43454C140.064 8.43454 140.018 8.45335 139.984 8.48683C139.951 8.52031 139.932 8.56572 139.932 8.61307Z"
                                        fill="white"/>
                                    <path
                                        d="M81.2476 81.0004H45.9227L45.8425 46.9186C45.8425 46.2338 46.1878 45.8914 46.8784 45.8914L81.0806 45.8848C81.1355 45.8848 81.1882 45.9064 81.2271 45.9449C81.2659 45.9835 81.2877 46.0357 81.2877 46.0902L81.2476 81.0004ZM71.9386 55.5467C71.9386 55.443 71.8971 55.3435 71.8231 55.2702C71.7492 55.1969 71.6489 55.1557 71.5443 55.1557H55.626C55.5215 55.1557 55.4212 55.1969 55.3472 55.2702C55.2733 55.3435 55.2318 55.443 55.2318 55.5467V71.3318C55.2318 71.4355 55.2733 71.535 55.3472 71.6083C55.4212 71.6816 55.5215 71.7228 55.626 71.7228H71.5443C71.6489 71.7228 71.7492 71.6816 71.8231 71.6083C71.8971 71.535 71.9386 71.4355 71.9386 71.3318V55.5467Z"
                                        fill="white"/>
                                    <path
                                        d="M102.022 70.5742V80.2003C102.022 80.4211 101.91 80.5315 101.688 80.5315H94.8539C94.6316 80.5315 94.5205 80.4211 94.5205 80.2003V49.0299C94.5205 48.8047 94.6339 48.6943 94.8605 48.6987C98.8389 48.7782 102.942 48.7782 107.169 48.6987C114.056 48.5662 120.051 50.8783 120.491 58.6891C120.864 65.3074 116.663 69.7594 110.063 70.0707C107.609 70.19 105.089 70.2054 102.502 70.1171C102.182 70.1083 102.022 70.2606 102.022 70.5742ZM102.028 55.2044L102.002 63.6445C102.002 63.6814 102.016 63.7168 102.043 63.7429C102.069 63.769 102.104 63.7837 102.142 63.7837L108.796 63.8102C109.352 63.812 109.903 63.7092 110.417 63.5078C110.932 63.3064 111.399 63.0102 111.794 62.6361C112.188 62.2621 112.501 61.8175 112.716 61.3278C112.93 60.8382 113.041 60.313 113.043 59.7822V59.1462C113.046 58.0745 112.604 57.0453 111.812 56.285C111.021 55.5246 109.945 55.0954 108.822 55.0918L102.168 55.0653C102.131 55.0653 102.095 55.0799 102.069 55.106C102.043 55.1321 102.028 55.1675 102.028 55.2044Z"
                                        fill="white"/>
                                    <path
                                        d="M126.5 75.0925L124.765 80.379C124.751 80.421 124.725 80.4576 124.689 80.4838C124.654 80.51 124.611 80.5243 124.567 80.5249L117.416 80.5315C117.382 80.5315 117.349 80.5232 117.319 80.5074C117.289 80.4916 117.263 80.4687 117.244 80.4407C117.224 80.4127 117.212 80.3804 117.207 80.3466C117.203 80.3127 117.207 80.2783 117.218 80.2463L128.657 48.8327C128.671 48.7919 128.698 48.7566 128.734 48.7317C128.769 48.7068 128.811 48.6934 128.854 48.6934H137.436C137.48 48.6934 137.522 48.7068 137.557 48.7317C137.592 48.7566 137.619 48.7919 137.634 48.8327L149.33 80.2463C149.341 80.2783 149.345 80.3127 149.341 80.3466C149.336 80.3804 149.324 80.4127 149.305 80.4407C149.285 80.4687 149.259 80.4916 149.229 80.5074C149.199 80.5232 149.166 80.5315 149.132 80.5315H141.684C141.64 80.531 141.598 80.5166 141.562 80.4904C141.527 80.4643 141.5 80.4276 141.487 80.3856L139.725 75.0925C139.712 75.0505 139.685 75.0138 139.65 74.9876C139.614 74.9615 139.571 74.9471 139.527 74.9466H126.697C126.653 74.9471 126.611 74.9615 126.575 74.9876C126.54 75.0138 126.513 75.0505 126.5 75.0925ZM129.369 68.6983L137.008 68.705C137.395 68.705 137.527 68.5215 137.403 68.1544L133.287 55.8636C133.138 55.4258 132.99 55.4258 132.845 55.8636L128.848 67.982C128.69 68.4595 128.863 68.6983 129.369 68.6983Z"
                                        fill="white"/>
                                    <path
                                        d="M173.817 65.6758C176.016 66.4889 177.248 68.1749 177.515 70.7338C177.733 72.7932 177.877 75.0316 177.948 77.449C177.975 78.324 178.188 79.2256 178.581 80.0078C178.719 80.2907 178.63 80.4299 178.314 80.4254L172.145 80.4056C171.19 80.4011 170.679 79.9261 170.613 78.9803C170.444 76.6601 170.315 74.5167 170.226 72.5501C170.12 70.1592 168.872 68.9152 166.482 68.8179C164.421 68.7384 162.258 68.7251 159.993 68.7782C159.7 68.787 159.553 68.9351 159.553 69.2223L159.56 80.094C159.56 80.3857 159.413 80.5315 159.12 80.5315H152.511C152.289 80.5315 152.178 80.421 152.178 80.2001V48.9042C152.178 48.8632 152.194 48.8237 152.222 48.794C152.251 48.7644 152.29 48.7468 152.331 48.7451C157.817 48.67 163.202 48.6766 168.487 48.765C174.45 48.8645 178.768 52.643 178.274 58.9672C178.041 61.9768 176.309 63.8329 173.777 65.2581C173.493 65.4217 173.506 65.5609 173.817 65.6758ZM159.573 54.9168L159.547 62.8584C159.547 62.9235 159.573 62.9859 159.619 63.0319C159.665 63.0779 159.728 63.1037 159.793 63.1037L166.689 63.1302C167.21 63.132 167.727 63.0368 168.209 62.8499C168.692 62.663 169.131 62.3881 169.501 62.0409C169.871 61.6937 170.164 61.281 170.366 60.8264C170.567 60.3718 170.671 59.8842 170.673 59.3914V58.4633C170.676 57.4684 170.261 56.5127 169.519 55.8066C168.777 55.1005 167.768 54.7017 166.715 54.698L159.82 54.6715C159.754 54.6715 159.692 54.6974 159.645 54.7434C159.599 54.7894 159.573 54.8517 159.573 54.9168Z"
                                        fill="white"/>
                                    <path
                                        d="M196.836 55.6182V80.2994C196.836 80.3609 196.812 80.42 196.769 80.4635C196.726 80.507 196.667 80.5315 196.606 80.5315H189.51C189.449 80.5315 189.391 80.507 189.348 80.4635C189.305 80.42 189.28 80.3609 189.28 80.2994V55.6115C189.28 55.55 189.256 55.4909 189.213 55.4474C189.17 55.4038 189.111 55.3794 189.05 55.3794L179.819 55.3727C179.758 55.3727 179.7 55.3483 179.656 55.3047C179.613 55.2612 179.589 55.2022 179.589 55.1406L179.596 48.9255C179.596 48.895 179.602 48.8648 179.613 48.8367C179.625 48.8085 179.642 48.7829 179.663 48.7614C179.684 48.7398 179.71 48.7227 179.738 48.711C179.766 48.6994 179.795 48.6934 179.826 48.6934H206.298C206.358 48.6934 206.417 48.7178 206.46 48.7614C206.503 48.8049 206.527 48.8639 206.527 48.9255V55.134C206.527 55.1644 206.522 55.1946 206.51 55.2228C206.498 55.251 206.481 55.2766 206.46 55.2981C206.439 55.3197 206.413 55.3368 206.386 55.3484C206.358 55.3601 206.328 55.3661 206.298 55.3661L197.066 55.386C197.005 55.386 196.947 55.4105 196.904 55.454C196.86 55.4975 196.836 55.5566 196.836 55.6182Z"
                                        fill="white"/>
                                </svg>

                                <div className="text-med" style={{color: "#fff"}}>
                                    {t('about-us.text')}
                                </div>
                            </div>
                            <div className="content">
                                <div className="container-med">
                                    <div className="title-med"> {t('about-us.since-inception.title')}</div>
                                    <div className="descr">
                                        <div
                                            className="text-med">{t('about-us.since-inception.description.1')} {t('about-us.since-inception.description.2')}</div>

                                        <div className="text-med">{t('about-us.since-inception.description.3')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="image">
                            <img src={AboutUsImage} alt=""/>
                        </div>
                    </div>
                </div>

                {/*<div className="trust">*/}
                {/*    <div className="content">*/}
                {/*        <div className="title-big">*/}
                {/*            {t('trust-section.title')}*/}
                {/*        </div>*/}
                {/*        <div className="text-med">*/}
                {/*            {t('trust-section.description')}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="image">*/}
                {/*        <img src={collection1} alt=""/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="since-our">
                    <div className="title-med"> {t('about-us.since-inception.title')}</div>
                    <div className="descr">
                        <div className="text-med">{t('about-us.since-inception.description.1')} </div>
                        <div className="text-med">{t('about-us.since-inception.description.2')}</div>
                        <div className="text-med">{t('about-us.since-inception.description.3')}</div>
                    </div>
                </div>

                <div className='about-us-img'>
                    <img src={AboutUsImage} alt=""/>
                </div>

                <div className="propart">
                    <div className="content">
                        <div className="title-big">
                            {t("block5_title")}
                        </div>
                        <div className="text-med">
                            {t("propart-section.description")}
                        </div>
                    </div>
                </div>

                <div className="team">
                    {team.slice(0, 8).map((member, index) => (
                        <Link
                            key={index}
                            className="member"
                            to={""}
                            state={{memberObject: member}}
                        >
                            <div key={index} className="member">
                                <Link
                                    key={index}
                                    className="member"
                                    to={"/agent"}
                                    state={{memberObject: member}}
                                >
                                    <div className="image"><img src={member.image}/></div>
                                </Link>
                                <div className="information">
                                    <Link
                                        key={index}
                                        className="member"
                                        to={"/agent"}
                                        state={{memberObject: member}}
                                    >

                                        <div className="general-info">
                                            <div className="name"><DynamicTruncatedText text={member.name}
                                                                                        customBreakpoints={
                                                                                            {
                                                                                                1920: 50,
                                                                                                1450: 15,
                                                                                                1720: 17,
                                                                                                1000: 13,
                                                                                                768: 10,
                                                                                                725: 9,
                                                                                                650: 8,
                                                                                                600: 11
                                                                                            }
                                                                                        }/></div>
                                            <div className="position"><DynamicTruncatedText text={member.position}
                                                                                            customBreakpoints={
                                                                                                {
                                                                                                    1920: 50,
                                                                                                    1450: 16,
                                                                                                    1000: 13,
                                                                                                    1720: 17,
                                                                                                    725: 10,
                                                                                                    650: 8,
                                                                                                    600: 13
                                                                                                }
                                                                                            }/></div>
                                        </div>

                                    </Link>

                                    <div className="social">
                                        {member.social.facebook && <svg style={{cursor: "pointer"}}
                                                                        onClick={() => window.open(member.social.facebook)}
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.129 22 16.99 22 12C22 6.477 17.523 2 12 2Z"
                                                fill="#191C38"
                                            />
                                        </svg>}
                                        {member.social.instagram &&
                                            <svg style={{cursor: "pointer"}}
                                                 onClick={() => window.open(member.social.instagram)}
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24"
                                                 fill="none">
                                                <path
                                                    d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                                                    fill="#191C38"/>
                                            </svg>}
                                        {member.social.whatsapp &&
                                            <svg style={{cursor: "pointer"}}
                                                 onClick={() => window.open(member.social.whatsapp)}
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24"
                                                 fill="none">
                                                <path
                                                    d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
                                                    fill="#191C38"/>
                                            </svg>}
                                        {member.social.telegram &&
                                            <svg style={{cursor: "pointer"}}
                                                 onClick={() => window.open(member.social.telegram)}
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24"
                                                 fill="none">
                                                <path
                                                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.89 13.17L8.903 13.163L9.773 16.033C9.885 16.344 10.039 16.4 10.226 16.374C10.414 16.349 10.513 16.248 10.636 16.13L11.824 14.982L14.374 16.87C14.84 17.127 15.175 16.994 15.291 16.438L16.948 8.616C17.131 7.888 16.811 7.596 16.246 7.828L6.513 11.588C5.849 11.854 5.853 12.226 6.393 12.391L8.89 13.171V13.17Z"
                                                    fill="#191C38"/>
                                            </svg>}
                                        {member.social.youtube &&
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_908_6319)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M9.58613 15.1029V8.36877C11.9768 9.49368 13.8283 10.5804 16.0181 11.752C14.212 12.7536 11.9768 13.8775 9.58613 15.1029ZM22.9092 5.01955C22.4968 4.47624 21.794 4.05332 21.0457 3.9133C18.8463 3.49564 5.12518 3.49445 2.92698 3.9133C2.32693 4.02579 1.7926 4.29769 1.3336 4.72014C-0.600435 6.51522 0.00559942 16.1417 0.471777 17.701C0.667809 18.3759 0.921228 18.8627 1.24038 19.1822C1.65157 19.6047 2.21456 19.8956 2.86123 20.026C4.67215 20.4006 14.0016 20.61 21.0074 20.0822C21.6529 19.9698 22.2243 19.6695 22.6749 19.2291C24.4631 17.4412 24.3412 7.27417 22.9092 5.01955Z"
                                                          fill="#191C38"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_908_6319">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>}
                                        {member.social.linkedin &&
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0ZM8.64375 17.0203H6.30469V9.53437H8.64375V17.0203ZM7.41094 8.59687H7.39219C6.54375 8.59687 5.99531 8.025 5.99531 7.29844C5.99531 6.55781 6.5625 6 7.425 6C8.2875 6 8.81719 6.55781 8.83594 7.29844C8.84063 8.02031 8.29219 8.59687 7.41094 8.59687ZM18 17.0203H15.3469V13.1484C15.3469 12.1359 14.9344 11.4422 14.0203 11.4422C13.3219 11.4422 12.9328 11.9109 12.7547 12.3609C12.6891 12.5203 12.6984 12.7453 12.6984 12.975V17.0203H10.0688C10.0688 17.0203 10.1016 10.1578 10.0688 9.53437H12.6984V10.7109C12.8531 10.1953 13.6922 9.46406 15.0328 9.46406C16.6969 9.46406 18 10.5422 18 12.8578V17.0203Z"
                                                    fill="#191C38"/>
                                            </svg>}

                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="sets">
                    <div className="sets-content">
                        <div className="title">
                            {t("personalized_approach_title")}

                            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="177" viewBox="0 0 177 177"
                                 fill="none">
                                <path
                                    d="M88.5 177C39.6214 177 0 137.379 0 88.5C0 39.6214 39.6214 0 88.5 0C137.379 0 177 39.6214 177 88.5C177 137.379 137.379 177 88.5 177ZM144.742 123.475V122.546C144.742 114.386 144.742 110.66 138.972 107.359C137.117 106.308 135.212 105.348 133.263 104.483C130.015 103.005 127.865 102.041 124.962 97.7925C124.615 97.2881 124.273 96.7807 123.935 96.2703C120.882 91.6241 118.679 88.2788 110.289 89.6063C93.7835 92.2259 92.5622 95.1287 91.8365 100.032L91.7214 100.837C90.6506 108.005 90.4559 110.413 93.4472 113.554C104.642 125.298 111.351 133.768 113.386 138.724C114.377 141.14 116.926 148.459 115.174 155.698C125.916 151.419 135.478 144.631 143.06 135.901C144.034 132.591 144.742 128.467 144.742 123.475ZM88.5 16.222C67.9946 16.222 49.4715 24.7712 36.3204 38.4887C37.8869 39.5772 39.2498 41.1082 40.1879 43.2146C41.9933 47.259 41.9933 51.4273 41.9933 55.1178C41.9933 58.0206 41.9933 60.7818 42.9225 62.7731C44.1969 65.4989 49.7016 66.6671 54.5603 67.676C56.3037 68.0477 58.0914 68.4193 59.7198 68.8707C64.1979 70.1097 67.6671 74.1364 70.4371 77.3667C71.5876 78.703 73.2957 80.6766 74.1542 81.1722C74.5967 80.8536 76.0215 79.3049 76.7206 76.7649C77.2693 74.8179 77.1101 73.101 76.3224 72.1629C71.3664 66.3219 71.6407 55.0824 73.1718 50.9318C75.579 44.3916 83.1015 44.8784 88.6062 45.2324C90.6594 45.3651 92.5887 45.4979 94.0401 45.312C99.5448 44.6217 101.244 36.2408 102.439 34.6035C105.023 31.0635 112.935 25.7269 117.838 22.4347C108.603 18.3283 98.6068 16.2115 88.5 16.222Z"
                                    fill="#E5E5E5" fill-opacity="0.1"/>
                            </svg>
                        </div>

                        <div className="text">
                            <div>{t("personalized_approach_text1")}</div>
                            <div>{t("personalized_approach_text2")}</div>
                        </div>
                    </div>
                </div>

                <div className="provide">
                    <div className="blocks-container">
                        <div className="block">
                            <img src={box} alt=""/>
                            <img className="bh" src={boxBh} alt=""/>
                            <div className="descr">
                                <div>{t("name911")}</div>
                                <div>{t("name9011")}</div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={world} alt=""/>
                            <img className="bh" src={worldBh} alt=""/>
                            <div className="descr">
                                <div>{t("name86")}</div>
                                <div>{t("name87")}</div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={document} alt=""/>
                            <img className="bh" src={groupBh} alt=""/>
                            <div className="descr">
                                <div>{t("name88")}</div>
                                <div>{t("name89")}</div>
                            </div>
                        </div>
                        <div className="block">
                            <img src={legal} alt=""/>
                            <img className="bh" src={checkBh} alt=""/>
                            <div className="descr">
                                <div>{t("name901")}</div>
                                <div>{t("name91")}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <GetAdvice
                    title={t("Get in touch!")}
                />

                <div className="lohachov">
                    <div className="image">
                        <img src={alexLogachevName} alt=""/>
                    </div>
                    <div className="content">
                        <div className="info">
                            <div className="info-title">
                                <div className="name">
                                    <div>{t("OLEXANDER LOHACHOV")}</div>
                                    <div>{t("Founder, Investor")}</div>
                                </div>

                                <div className="youtube">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18"
                                             viewBox="0 0 27 18"
                                             fill="none">
                                            <path fill-rule="evenod" clip-rule="evenodd"
                                                  d="M10.7844 12.325V5.10981C13.4739 6.31508 15.5569 7.47939 18.0204 8.73467C15.9885 9.80787 13.4739 11.012 10.7844 12.325ZM25.7729 1.52136C25.3089 0.939245 24.5182 0.486114 23.6764 0.336097C21.2021 -0.111396 5.76583 -0.112669 3.29286 0.336097C2.6178 0.45662 2.01668 0.747941 1.5003 1.20056C-0.675489 3.12386 0.00629934 13.4379 0.530749 15.1086C0.751285 15.8318 1.03638 16.3533 1.39543 16.6957C1.85802 17.1483 2.49138 17.4599 3.21888 17.5997C5.25616 18.001 15.7519 18.2254 23.6334 17.66C24.3595 17.5394 25.0023 17.2178 25.5093 16.7459C27.521 14.8303 27.3839 3.93703 25.7729 1.52136Z"
                                                  fill="#FF4C4C"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="cards-container">
                                <div className="card">
                                    <div className="title">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20"
                                             viewBox="0 0 19 20" fill="none">
                                            <path
                                                d="M7.65949 5.47642C8.73614 3.545 9.27447 2.5793 10.0793 2.5793C10.8841 2.5793 11.4225 3.545 12.4991 5.47641L12.7777 5.97609C13.0836 6.52494 13.2366 6.79937 13.4751 6.98043C13.7136 7.1615 14.0107 7.22871 14.6048 7.36314L15.1457 7.48552C17.2364 7.95857 18.2818 8.19509 18.5305 8.99487C18.7792 9.79464 18.0665 10.628 16.6412 12.2947L16.2725 12.7259C15.8674 13.1996 15.6649 13.4364 15.5738 13.7294C15.4827 14.0223 15.5133 14.3383 15.5746 14.9702L15.6303 15.5455C15.8458 17.7693 15.9535 18.8812 15.3024 19.3755C14.6513 19.8698 13.6725 19.4191 11.715 18.5178L11.2085 18.2846C10.6523 18.0285 10.3741 17.9004 10.0793 17.9004C9.78447 17.9004 9.50634 18.0285 8.95006 18.2846L8.44362 18.5178C6.48607 19.4191 5.5073 19.8698 4.85617 19.3755C4.20505 18.8812 4.3128 17.7693 4.52828 15.5455L4.58403 14.9702C4.64527 14.3383 4.67589 14.0223 4.58478 13.7294C4.49368 13.4364 4.29116 13.1996 3.88613 12.7259L3.51738 12.2947C2.09206 10.628 1.3794 9.79464 1.62811 8.99487C1.87681 8.19509 2.92218 7.95857 5.0129 7.48552L5.5538 7.36314C6.14792 7.22871 6.44498 7.1615 6.6835 6.98043C6.92202 6.79937 7.07499 6.52494 7.38094 5.9761L7.65949 5.47642Z"
                                                fill="white"/>
                                            <path
                                                d="M2.44662 0.0796801C2.47661 -0.0261019 2.66438 -0.0267359 2.69508 0.0788411C2.83529 0.560953 3.09526 1.27357 3.48838 1.66405C3.88151 2.05453 4.59587 2.30968 5.07891 2.44662C5.1847 2.47661 5.18533 2.66438 5.07975 2.69508C4.59764 2.83529 3.88503 3.09526 3.49455 3.48838C3.10407 3.88151 2.84892 4.59587 2.71197 5.07891C2.68198 5.1847 2.49422 5.18533 2.46351 5.07975C2.32331 4.59764 2.06334 3.88503 1.67021 3.49455C1.27709 3.10407 0.562728 2.84892 0.0796801 2.71197C-0.026102 2.68198 -0.0267359 2.49422 0.0788411 2.46351C0.560953 2.32331 1.27357 2.06334 1.66405 1.67021C2.05453 1.27708 2.30968 0.562728 2.44662 0.0796801Z"
                                                fill="white"/>
                                            <path fill-rule="evenod" clip-rule="evenod"
                                                  d="M16.5793 0.829297C16.9935 0.829297 17.3293 1.16508 17.3293 1.5793V1.8293H17.5793C17.9935 1.8293 18.3293 2.16508 18.3293 2.5793C18.3293 2.99351 17.9935 3.3293 17.5793 3.3293H17.3293V3.5793C17.3293 3.99351 16.9935 4.3293 16.5793 4.3293C16.1651 4.3293 15.8293 3.99351 15.8293 3.5793V3.3293H15.5793C15.1651 3.3293 14.8293 2.99351 14.8293 2.5793C14.8293 2.16508 15.1651 1.8293 15.5793 1.8293H15.8293V1.5793C15.8293 1.16508 16.1651 0.829297 16.5793 0.829297Z"
                                                  fill="white"/>
                                        </svg>

                                        {t("Agency owner")}
                                    </div>

                                    <div className="description">
                                        {t("12 years of continuous experience in real estate")}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="title">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M17.5816 16.5209C19.0889 14.7701 20 12.4915 20 10C20 7.50853 19.0889 5.22987 17.5816 3.47906L13.3089 7.75178C13.745 8.39249 14 9.16647 14 10C14 10.8335 13.745 11.6075 13.3089 12.2482L17.5816 16.5209Z"
                                                fill="white"/>
                                            <path
                                                d="M16.5209 17.5816C14.7701 19.0889 12.4915 20 10 20C7.50853 20 5.22987 19.0889 3.47906 17.5816L7.75178 13.3089C8.39249 13.745 9.16647 14 10 14C10.8335 14 11.6075 13.745 12.2482 13.3089L16.5209 17.5816Z"
                                                fill="white"/>
                                            <path
                                                d="M2.4184 16.5209L6.69112 12.2482C6.25495 11.6075 6 10.8335 6 10C6 9.16647 6.25495 8.39249 6.69112 7.75178L2.4184 3.47906C0.911142 5.22987 0 7.50853 0 10C0 12.4915 0.911143 14.7701 2.4184 16.5209Z"
                                                fill="white"/>
                                            <path
                                                d="M10 6C9.16647 6 8.39249 6.25495 7.75178 6.69112L3.47906 2.4184C5.22987 0.911142 7.50853 0 10 0C12.4915 0 14.7701 0.911143 16.5209 2.4184L12.2482 6.69112C11.6075 6.25495 10.8335 6 10 6Z"
                                                fill="white"/>
                                        </svg>

                                        {t("Business Speaker")}
                                    </div>

                                    <div className="description">
                                        {t("12 years of continuous experience in real estate")}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="title">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20"
                                             viewBox="0 0 19 20" fill="none">
                                            <path
                                                d="M7.65949 5.47642C8.73614 3.545 9.27447 2.5793 10.0793 2.5793C10.8841 2.5793 11.4225 3.545 12.4991 5.47641L12.7777 5.97609C13.0836 6.52494 13.2366 6.79937 13.4751 6.98043C13.7136 7.1615 14.0107 7.22871 14.6048 7.36314L15.1457 7.48552C17.2364 7.95857 18.2818 8.19509 18.5305 8.99487C18.7792 9.79464 18.0665 10.628 16.6412 12.2947L16.2725 12.7259C15.8674 13.1996 15.6649 13.4364 15.5738 13.7294C15.4827 14.0223 15.5133 14.3383 15.5746 14.9702L15.6303 15.5455C15.8458 17.7693 15.9535 18.8812 15.3024 19.3755C14.6513 19.8698 13.6725 19.4191 11.715 18.5178L11.2085 18.2846C10.6523 18.0285 10.3741 17.9004 10.0793 17.9004C9.78447 17.9004 9.50634 18.0285 8.95006 18.2846L8.44362 18.5178C6.48607 19.4191 5.5073 19.8698 4.85617 19.3755C4.20505 18.8812 4.3128 17.7693 4.52828 15.5455L4.58403 14.9702C4.64527 14.3383 4.67589 14.0223 4.58478 13.7294C4.49368 13.4364 4.29116 13.1996 3.88613 12.7259L3.51738 12.2947C2.09206 10.628 1.3794 9.79464 1.62811 8.99487C1.87681 8.19509 2.92218 7.95857 5.0129 7.48552L5.5538 7.36314C6.14792 7.22871 6.44498 7.1615 6.6835 6.98043C6.92202 6.79937 7.07499 6.52494 7.38094 5.9761L7.65949 5.47642Z"
                                                fill="white"/>
                                            <path
                                                d="M2.44662 0.0796801C2.47661 -0.0261019 2.66438 -0.0267359 2.69508 0.0788411C2.83529 0.560953 3.09526 1.27357 3.48838 1.66405C3.88151 2.05453 4.59587 2.30968 5.07891 2.44662C5.1847 2.47661 5.18533 2.66438 5.07975 2.69508C4.59764 2.83529 3.88503 3.09526 3.49455 3.48838C3.10407 3.88151 2.84892 4.59587 2.71197 5.07891C2.68198 5.1847 2.49422 5.18533 2.46351 5.07975C2.32331 4.59764 2.06334 3.88503 1.67021 3.49455C1.27709 3.10407 0.562728 2.84892 0.0796801 2.71197C-0.026102 2.68198 -0.0267359 2.49422 0.0788411 2.46351C0.560953 2.32331 1.27357 2.06334 1.66405 1.67021C2.05453 1.27708 2.30968 0.562728 2.44662 0.0796801Z"
                                                fill="white"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M16.5793 0.829297C16.9935 0.829297 17.3293 1.16508 17.3293 1.5793V1.8293H17.5793C17.9935 1.8293 18.3293 2.16508 18.3293 2.5793C18.3293 2.99351 17.9935 3.3293 17.5793 3.3293H17.3293V3.5793C17.3293 3.99351 16.9935 4.3293 16.5793 4.3293C16.1651 4.3293 15.8293 3.99351 15.8293 3.5793V3.3293H15.5793C15.1651 3.3293 14.8293 2.99351 14.8293 2.5793C14.8293 2.16508 15.1651 1.8293 15.5793 1.8293H15.8293V1.5793C15.8293 1.16508 16.1651 0.829297 16.5793 0.829297Z"
                                                  fill="white"/>
                                        </svg>

                                        {t("Agency owner")}
                                    </div>

                                    <div className="description">
                                        {t("12 years of continuous experience in real estate")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-cards-container">
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M21.25 8.5C21.25 7.09554 21.25 6.39331 20.9129 5.88886C20.767 5.67048 20.5795 5.48298 20.3611 5.33706C19.9199 5.04224 19.3274 5.00529 18.246 5.00066C18.2501 5.29206 18.25 5.59655 18.25 5.91051L18.25 6V7.25H19.25C19.6642 7.25 20 7.58579 20 8C20 8.41421 19.6642 8.75 19.25 8.75H18.25V10.25H19.25C19.6642 10.25 20 10.5858 20 11C20 11.4142 19.6642 11.75 19.25 11.75H18.25V13.25H19.25C19.6642 13.25 20 13.5858 20 14C20 14.4142 19.6642 14.75 19.25 14.75H18.25V21.25H16.75V6C16.75 4.11438 16.75 3.17157 16.1642 2.58579C15.5784 2 14.6356 2 12.75 2H10.75C8.86438 2 7.92157 2 7.33579 2.58579C6.75 3.17157 6.75 4.11438 6.75 6V21.25H5.25V14.75H4.25C3.83579 14.75 3.5 14.4142 3.5 14C3.5 13.5858 3.83579 13.25 4.25 13.25H5.25V11.75H4.25C3.83579 11.75 3.5 11.4142 3.5 11C3.5 10.5858 3.83579 10.25 4.25 10.25H5.25V8.75H4.25C3.83579 8.75 3.5 8.41421 3.5 8C3.5 7.58579 3.83579 7.25 4.25 7.25H5.25V6L5.24999 5.9105C5.24996 5.59655 5.24992 5.29206 5.25403 5.00066C4.17262 5.00529 3.58008 5.04224 3.13886 5.33706C2.92048 5.48298 2.73298 5.67048 2.58706 5.88886C2.25 6.39331 2.25 7.09554 2.25 8.5V21.25H1.75C1.33579 21.25 1 21.5858 1 22C1 22.4142 1.33579 22.75 1.75 22.75H21.75C22.1642 22.75 22.5 22.4142 22.5 22C22.5 21.5858 22.1642 21.25 21.75 21.25H21.25V8.5ZM9 11.75C9 11.3358 9.33579 11 9.75 11H13.75C14.1642 11 14.5 11.3358 14.5 11.75C14.5 12.1642 14.1642 12.5 13.75 12.5H9.75C9.33579 12.5 9 12.1642 9 11.75ZM9 14.75C9 14.3358 9.33579 14 9.75 14H13.75C14.1642 14 14.5 14.3358 14.5 14.75C14.5 15.1642 14.1642 15.5 13.75 15.5H9.75C9.33579 15.5 9 15.1642 9 14.75ZM11.75 18.25C12.1642 18.25 12.5 18.5858 12.5 19V21.25H11V19C11 18.5858 11.3358 18.25 11.75 18.25ZM9 6.25C9 5.83579 9.33579 5.5 9.75 5.5H13.75C14.1642 5.5 14.5 5.83579 14.5 6.25C14.5 6.66421 14.1642 7 13.75 7H9.75C9.33579 7 9 6.66421 9 6.25ZM9 9.25C9 8.83579 9.33579 8.5 9.75 8.5H13.75C14.1642 8.5 14.5 8.83579 14.5 9.25C14.5 9.66421 14.1642 10 13.75 10H9.75C9.33579 10 9 9.66421 9 9.25Z"
                                  fill="#191C38"/>
                        </svg>

                        <div className="description">
                            <div className="title-med">
                                {t('company_registration')}
                            </div>
                            <div>
                                {t("Efficient and professional company registration services")}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M21.1009 8.00353C21.0442 7.99996 20.9825 7.99998 20.9186 8L20.9026 8.00001H18.3941C16.3264 8.00001 14.5572 9.62757 14.5572 11.75C14.5572 13.8724 16.3264 15.5 18.3941 15.5H20.9026L20.9186 15.5C20.9825 15.5 21.0442 15.5001 21.1009 15.4965C21.9408 15.4434 22.6835 14.7862 22.746 13.8682C22.7501 13.808 22.75 13.7431 22.75 13.683L22.75 13.6667V9.83334L22.75 9.81702C22.75 9.75688 22.7501 9.69199 22.746 9.6318C22.6835 8.71381 21.9408 8.05657 21.1009 8.00353ZM18.1717 12.75C18.704 12.75 19.1355 12.3023 19.1355 11.75C19.1355 11.1977 18.704 10.75 18.1717 10.75C17.6394 10.75 17.2078 11.1977 17.2078 11.75C17.2078 12.3023 17.6394 12.75 18.1717 12.75Z"
                                  fill="#191C38"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M20.9179 17C21.067 16.9961 21.1799 17.1342 21.1394 17.2778C20.9387 17.9902 20.62 18.5975 20.1088 19.1088C19.3604 19.8571 18.4114 20.1892 17.239 20.3469C16.0998 20.5 14.6442 20.5 12.8064 20.5H10.6936C8.85583 20.5 7.40019 20.5 6.26098 20.3469C5.08856 20.1892 4.13961 19.8571 3.39124 19.1088C2.64288 18.3604 2.31076 17.4114 2.15314 16.239C1.99997 15.0998 1.99998 13.6442 2 11.8064V11.6936C1.99998 9.85583 1.99997 8.40019 2.15314 7.26098C2.31076 6.08856 2.64288 5.13961 3.39124 4.39124C4.13961 3.64288 5.08856 3.31076 6.26098 3.15314C7.40019 2.99997 8.85582 2.99998 10.6936 3L12.8064 3C14.6442 2.99998 16.0998 2.99997 17.239 3.15314C18.4114 3.31076 19.3604 3.64288 20.1088 4.39124C20.62 4.90252 20.9386 5.50974 21.1394 6.22218C21.1799 6.36575 21.067 6.50387 20.9179 6.5L18.394 6.50001C15.5574 6.50001 13.0571 8.74091 13.0571 11.75C13.0571 14.7591 15.5574 17 18.394 17L20.9179 17ZM5.75 7C5.33579 7 5 7.33579 5 7.75C5 8.16421 5.33579 8.5 5.75 8.5H9.75C10.1642 8.5 10.5 8.16421 10.5 7.75C10.5 7.33579 10.1642 7 9.75 7H5.75Z"
                                  fill="#191C38"/>
                        </svg>
                        <div className="description">
                            <div className="title-med">
                                {t('bank_account')}
                            </div>
                            <div>
                                {t("Open a corporate bank account effortlessly")}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM8 9.25C7.58579 9.25 7.25 9.58579 7.25 10C7.25 10.4142 7.58579 10.75 8 10.75H16C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25H8ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13C13.4142 14.75 13.75 14.4142 13.75 14C13.75 13.5858 13.4142 13.25 13 13.25H8Z"
                                  fill="#191C38"/>
                        </svg>

                        <div className="description">
                            <div className="title-med">
                                {t('attorney_power')}
                            </div>
                            <div>
                                {t("Legal support for your business needs in the UAE")}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M2.75458 14.715L3.27222 16.6469C3.87647 18.902 4.17859 20.0295 4.86351 20.7608C5.40432 21.3382 6.10421 21.7423 6.87466 21.9219C7.85044 22.1494 8.97798 21.8473 11.2331 21.2431C13.4881 20.6388 14.6157 20.3367 15.347 19.6518C15.4077 19.5949 15.4664 19.5363 15.5233 19.4761C15.1891 19.448 14.852 19.3942 14.5094 19.3261C13.8133 19.1877 12.9862 18.9661 12.008 18.704L11.9012 18.6753L11.8764 18.6687C10.8121 18.3835 9.92281 18.1448 9.21277 17.8883C8.46607 17.6185 7.7876 17.286 7.21148 16.7464C6.41753 16.0028 5.86193 15.0404 5.61491 13.9811C5.43567 13.2123 5.48691 12.4585 5.62666 11.6769C5.76058 10.928 6.00109 10.0305 6.28926 8.95515L6.28926 8.95514L6.82365 6.96077L6.84245 6.89062C4.9219 7.40799 3.91101 7.71408 3.23687 8.34548C2.65945 8.88629 2.25537 9.58617 2.07573 10.3566C1.84821 11.3324 2.15033 12.4599 2.75458 14.715Z"
                                fill="#191C38"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M20.8293 10.7154L20.3116 12.6473C19.7074 14.9024 19.4052 16.0299 18.7203 16.7612C18.1795 17.3386 17.4796 17.7427 16.7092 17.9223C16.6129 17.9448 16.5152 17.9621 16.415 17.9744C15.4999 18.0873 14.3834 17.7881 12.3508 17.2435C10.0957 16.6392 8.96815 16.3371 8.23687 15.6522C7.65945 15.1114 7.25537 14.4115 7.07573 13.641C6.84821 12.6652 7.15033 11.5377 7.75458 9.28263L8.27222 7.35077C8.3591 7.02654 8.43979 6.7254 8.51621 6.44561C8.97128 4.77957 9.27709 3.86298 9.86351 3.23687C10.4043 2.65945 11.1042 2.25537 11.8747 2.07573C12.8504 1.84821 13.978 2.15033 16.2331 2.75458C18.4881 3.35883 19.6157 3.66095 20.347 4.34587C20.9244 4.88668 21.3285 5.58657 21.5081 6.35703C21.7356 7.3328 21.4335 8.46034 20.8293 10.7154ZM11.0524 9.80589C11.1596 9.40579 11.5709 9.16835 11.971 9.27556L16.8006 10.5697C17.2007 10.6769 17.4381 11.0881 17.3309 11.4882C17.2237 11.8883 16.8125 12.1257 16.4124 12.0185L11.5827 10.7244C11.1826 10.6172 10.9452 10.206 11.0524 9.80589ZM10.2756 12.7033C10.3828 12.3032 10.794 12.0658 11.1941 12.173L14.0919 12.9495C14.492 13.0567 14.7294 13.4679 14.6222 13.868C14.515 14.2681 14.1038 14.5056 13.7037 14.3984L10.8059 13.6219C10.4058 13.5147 10.1683 13.1034 10.2756 12.7033Z"
                                  fill="#191C38"/>
                        </svg>
                        <div className="description">
                            <div className="title-med">
                                {t('resident_visa')}
                            </div>
                            <div>
                                {t("Secure your residency in the UAE with a good expert")}
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22Z"
                                  fill="black"/>
                            <path
                                d="M19.3517 7.61665L15.3929 4.05375C14.2651 3.03868 13.7012 2.53114 13.0092 2.26562L13 5.00011C13 7.35713 13 8.53564 13.7322 9.26787C14.4645 10.0001 15.643 10.0001 18 10.0001H21.5801C21.2175 9.29588 20.5684 8.71164 19.3517 7.61665Z"
                                fill="#191C38"/>
                        </svg>

                        <div className="description">
                            <div className="title-med">
                                {t('accounting')}
                            </div>
                            <div>
                                {t("Professional financial management services")}
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M2 1.25C1.58579 1.25 1.25 1.58579 1.25 2C1.25 2.41421 1.58579 2.75 2 2.75H4V10.5C4 13.5641 4 15.0962 5.00421 16.0481C6.00841 17 7.62465 17 10.8571 17H11.25V20.5365L9.66459 21.3292C9.29411 21.5144 9.14394 21.9649 9.32918 22.3354C9.51442 22.7059 9.96493 22.8561 10.3354 22.6708L12 21.8385L13.6646 22.6708C14.0351 22.8561 14.4856 22.7059 14.6708 22.3354C14.8561 21.9649 14.7059 21.5144 14.3354 21.3292L12.75 20.5365V17H13.1429C16.3753 17 17.9916 17 18.9958 16.0481C20 15.0962 20 13.5641 20 10.5V2.75H22C22.4142 2.75 22.75 2.41421 22.75 2C22.75 1.58579 22.4142 1.25 22 1.25H2ZM15.5303 7.96967C15.8232 8.26256 15.8232 8.73744 15.5303 9.03033L14.2131 10.3476C14.0681 10.4927 13.9113 10.6496 13.7612 10.7642C13.5852 10.8984 13.3335 11.0429 13 11.0429C12.6665 11.0429 12.4148 10.8984 12.2388 10.7642C12.0887 10.6496 11.9319 10.4927 11.7869 10.3476L11.1768 9.73744C11.1067 9.66738 11.0499 9.61061 11 9.56229C10.9501 9.61061 10.8933 9.66738 10.8232 9.73744L9.53033 11.0303C9.23744 11.3232 8.76256 11.3232 8.46967 11.0303C8.17678 10.7374 8.17678 10.2626 8.46967 9.96967L9.78691 8.65241C9.9319 8.50732 10.0887 8.35042 10.2388 8.23584C10.4148 8.10161 10.6665 7.95711 11 7.95711C11.3335 7.95711 11.5852 8.10161 11.7612 8.23584C11.9113 8.35041 12.0681 8.50728 12.213 8.65235L12.8232 9.26256C12.8933 9.33262 12.9501 9.38939 13 9.43771C13.0499 9.38939 13.1067 9.33262 13.1768 9.26256L14.4697 7.96967C14.7626 7.67678 15.2374 7.67678 15.5303 7.96967Z"
                                  fill="#191C38"/>
                        </svg>
                        <div className="description">
                            <div className="title-med">
                                {t('trademark_registration')}
                            </div>
                            <div>
                                {t("Protect your business brand in the UAE market")}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.00691 9.10673L10.0069 3.7734C11.1436 2.76303 12.8564 2.76303 13.9931 3.7734L19.9931 9.10673C20.6336 9.67603 21 10.492 21 11.349V21.2518H22C22.4142 21.2518 22.75 21.5875 22.75 22.0018C22.75 22.416 22.4142 22.7518 22 22.7518H2C1.58579 22.7518 1.25 22.416 1.25 22.0018C1.25 21.5875 1.58579 21.2518 2 21.2518H3V11.349C3 10.492 3.36644 9.67603 4.00691 9.10673ZM9.25 9.00176C9.25 8.58755 9.58579 8.25176 10 8.25176H14C14.4142 8.25176 14.75 8.58755 14.75 9.00176C14.75 9.41597 14.4142 9.75176 14 9.75176H10C9.58579 9.75176 9.25 9.41597 9.25 9.00176ZM14.052 11.2518C14.9505 11.2517 15.6997 11.2517 16.2945 11.3317C16.9223 11.4161 17.4891 11.6017 17.9445 12.0572C18.4 12.5127 18.5857 13.0795 18.6701 13.7073C18.7501 14.3021 18.75 15.0513 18.75 15.9498L18.75 21.2518H17.25V16.0018C17.25 15.0377 17.2484 14.3902 17.1835 13.9072C17.1214 13.4457 17.0142 13.2482 16.8839 13.1179C16.7536 12.9876 16.5561 12.8803 16.0946 12.8183C15.6116 12.7534 14.964 12.7518 14 12.7518H10C9.03599 12.7518 8.38843 12.7534 7.90539 12.8183C7.44393 12.8803 7.24643 12.9876 7.11612 13.1179C6.9858 13.2482 6.87858 13.4457 6.81654 13.9072C6.75159 14.3902 6.75 15.0377 6.75 16.0018V21.2518H5.25L5.25 15.9498C5.24997 15.0513 5.24994 14.3021 5.32991 13.7073C5.41432 13.0795 5.59999 12.5127 6.05546 12.0572C6.51093 11.6017 7.07773 11.4161 7.70552 11.3317C8.3003 11.2517 9.04952 11.2517 9.948 11.2518H14.052ZM8.25 15.5018C8.25 15.0875 8.58579 14.7518 9 14.7518H15C15.4142 14.7518 15.75 15.0875 15.75 15.5018C15.75 15.916 15.4142 16.2518 15 16.2518H9C8.58579 16.2518 8.25 15.916 8.25 15.5018ZM8.25 18.5018C8.25 18.0875 8.58579 17.7518 9 17.7518H15C15.4142 17.7518 15.75 18.0875 15.75 18.5018C15.75 18.916 15.4142 19.2518 15 19.2518H9C8.58579 19.2518 8.25 18.916 8.25 18.5018Z"
                                  fill="#191C38"/>
                        </svg>

                        <div className="description">
                            <div className="title-med">
                                {t('mainland')}
                            </div>
                            <div>
                                {t("Navigating business regulations in the UAE mainland")}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                                fill="#191C38"/>
                            <path
                                d="M2.72778 5.81803C2.62732 5.41619 2.22012 5.17186 1.81828 5.27233C1.41643 5.37279 1.17211 5.77999 1.27257 6.18184L1.65454 7.7097C2.3593 10.5287 4.49604 12.7495 7.25018 13.5787L7.25018 18.0519C7.25015 18.9504 7.25012 19.6996 7.33009 20.2944C7.41449 20.9222 7.60016 21.489 8.05563 21.9445C8.5111 22.3999 9.0779 22.5856 9.7057 22.67C10.3005 22.75 11.0497 22.75 11.9482 22.7499H12.0522C12.9507 22.75 13.6999 22.75 14.2947 22.67C14.9225 22.5856 15.4892 22.3999 15.9447 21.9445C16.4002 21.489 16.5859 20.9222 16.6703 20.2944C16.7502 19.6996 16.7502 18.9504 16.7502 18.052L16.7502 13.859C17.7313 14.1514 18.4808 15.0039 18.6058 16.067L19.2553 21.5876C19.3037 21.9989 19.6764 22.2932 20.0878 22.2448C20.4992 22.1964 20.7934 21.8237 20.745 21.4123L20.0956 15.8918C19.8512 13.815 18.0912 12.2499 16.0002 12.2499H8.0847C5.64125 11.6764 3.71957 9.78517 3.10975 7.3459L2.72778 5.81803Z"
                                fill="#191C38"/>
                        </svg>
                        <div className="description">
                            <div className="title-med">
                                {t('uae_employment')}
                            </div>
                            <div>
                                {t("Hire skilled professionals for your business")}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pdf-files">
                    <a className="pdf-file"
                       href='https://propart-pdfs.s3.me-south-1.amazonaws.com/Pro+Part+RERA+Certificate.pdf' download>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="53" viewBox="0 0 44 53" fill="none">
                            <path
                                d="M31.4041 35.4838C30.5433 35.432 28.4739 35.5546 26.4014 35.9484C25.2025 34.735 24.1643 33.2064 23.3942 31.9457C25.862 24.8499 24.2991 22.833 22.1953 22.833C20.5432 22.833 19.7184 24.5765 19.9019 26.5028C19.9948 27.4725 20.816 29.51 21.8268 31.4453C21.2067 33.0762 20.1001 35.8327 19.0016 37.8275C17.7158 38.2182 16.613 38.6524 15.8216 39.0187C11.8791 40.8521 11.5623 43.3002 12.3827 44.3375C13.9403 46.308 17.2589 44.6079 20.5889 38.6524C22.8687 38.0041 25.8682 37.1404 26.1386 37.1404C26.1697 37.1404 26.2125 37.1503 26.262 37.1663C27.9239 38.6318 29.8868 40.3098 31.5023 40.5307C33.8399 40.8521 35.1706 39.1567 35.0784 38.1024C34.9869 37.0475 34.3708 35.6619 31.4041 35.4838ZM16.6465 41.9077C15.683 43.0534 14.1246 44.1523 13.5746 43.7868C13.0239 43.4205 12.9325 42.3662 14.171 41.1735C15.4087 39.9822 17.4805 39.3638 17.792 39.248C18.16 39.1109 18.2514 39.248 18.2514 39.4315C18.2514 39.6151 17.6093 40.7607 16.6465 41.9077ZM20.8654 26.502C20.7732 25.3549 21.0017 24.2551 21.9652 24.118C22.9272 23.9794 23.3866 25.08 23.0201 26.8677C22.653 28.6576 22.4687 29.8482 22.2858 29.9876C22.1024 30.1247 21.9202 29.6653 21.9202 29.6653C21.5525 28.931 20.9568 27.6475 20.8654 26.502ZM21.2325 37.2767C21.736 36.4502 23.0202 33.105 23.0202 33.105C23.2952 33.6099 25.4492 36.1753 25.4492 36.1753C25.4492 36.1753 22.1481 36.9104 21.2325 37.2767ZM31.225 38.7422C29.8502 38.561 27.5126 36.908 27.5126 36.908C27.192 36.771 30.0741 36.3795 31.1808 36.4503C32.6029 36.5426 33.1071 37.1389 33.1071 37.7346C33.1071 38.3309 32.6029 38.9258 31.225 38.7422Z"
                                fill="#B4B4B4"/>
                            <path
                                d="M43.0456 11.0345L32.9664 0.954421L32.0118 0H30.6607H10.1052C5.25177 0 1.30331 3.94928 1.30331 8.80431V9.47769H0V20.0072H1.30331V43.6734C1.30331 48.5276 5.25188 52.4768 10.1053 52.4768H35.1965C40.0514 52.4768 44 48.5276 44 43.6734V13.3401V11.9896L43.0456 11.0345ZM35.1964 49.2167H10.1052C7.04316 49.2167 4.56168 46.7351 4.56168 43.6732V20.0071H20.685V9.47758H4.56168V8.8042C4.56168 5.74149 7.04316 3.25909 10.1052 3.25909H29.8807V9.50034C29.8807 12.0512 31.9501 14.1192 34.501 14.1192H40.7414V43.6731C40.7414 46.7352 38.2591 49.2167 35.1964 49.2167ZM4.79024 17.0228V12.1488C4.79024 12.0628 4.86025 11.9926 4.94644 11.9926H6.49492C6.75013 11.9926 6.98545 12.0345 7.19567 12.1168C7.40363 12.1983 7.58637 12.3126 7.73878 12.4573C7.89262 12.6027 8.0107 12.7795 8.09064 12.9822C8.17059 13.1809 8.21179 13.3981 8.21179 13.6272C8.21179 13.8611 8.17059 14.0797 8.08982 14.2762C8.00988 14.4728 7.8918 14.6472 7.7395 14.7942C7.58791 14.9405 7.40434 15.0555 7.19413 15.1354C6.98545 15.2154 6.75013 15.2558 6.49492 15.2558H5.84142V17.0229C5.84142 17.109 5.77142 17.179 5.68532 17.179H4.94655C4.86025 17.179 4.79024 17.1089 4.79024 17.0228ZM9.56594 17.0228V12.1488C9.56594 12.0628 9.63604 11.9926 9.72214 11.9926H11.4336C11.7588 11.9926 12.0453 12.0467 12.2867 12.1533C12.5313 12.2621 12.7498 12.4351 12.9373 12.6667C13.034 12.7885 13.1109 12.9233 13.1664 13.068C13.2205 13.209 13.2617 13.3614 13.2883 13.5197C13.3142 13.6766 13.3294 13.8458 13.3347 14.0278C13.3393 14.2014 13.3416 14.3881 13.3416 14.5861C13.3416 14.7833 13.3393 14.97 13.3347 15.1436C13.3294 15.3249 13.3142 15.4948 13.2883 15.6524C13.2617 15.8109 13.2205 15.9625 13.1664 16.1033C13.1101 16.2495 13.0332 16.3844 12.9379 16.5039C12.7491 16.7378 12.5304 16.9107 12.2866 17.018C12.0474 17.1246 11.7603 17.1788 11.4335 17.1788H9.72203C9.63594 17.179 9.56594 17.1089 9.56594 17.0228ZM17.7228 14.1422C17.8089 14.1422 17.8789 14.2123 17.8789 14.2984V14.9625C17.8789 15.0486 17.8089 15.1187 17.7228 15.1187H15.8529V17.023C15.8529 17.1091 15.7828 17.1791 15.6967 17.1791H14.9578C14.8717 17.1791 14.8017 17.1091 14.8017 17.023V12.149C14.8017 12.063 14.8717 11.9928 14.9578 11.9928H17.7921C17.8781 11.9928 17.9483 12.0629 17.9483 12.149V12.8131C17.9483 12.8992 17.8782 12.9693 17.7921 12.9693H15.8529V14.1423L17.7228 14.1422Z"
                                fill="#B4B4B4"/>
                            <path
                                d="M6.97476 14.1136C7.09898 14.0017 7.15904 13.8425 7.15904 13.6269C7.15904 13.412 7.09888 13.2529 6.97476 13.1409C6.84531 13.0251 6.67465 12.9688 6.45224 12.9688H5.83984V14.2856H6.45224C6.67455 14.2857 6.84531 14.2294 6.97476 14.1136Z"
                                fill="#B4B4B4"/>
                            <path
                                d="M11.7649 16.1404C11.8807 16.097 11.9805 16.027 12.0696 15.9264C12.1664 15.8183 12.2273 15.6629 12.2509 15.4641C12.2776 15.2378 12.2905 14.9423 12.2905 14.5858C12.2905 14.2286 12.2776 13.933 12.2509 13.7076C12.2273 13.5081 12.1664 13.3527 12.0703 13.2453C11.9813 13.1447 11.8784 13.0732 11.7657 13.0312C11.6446 12.9848 11.506 12.9619 11.3515 12.9619H10.6172V16.2089H11.3515C11.5052 16.209 11.6446 16.1862 11.7649 16.1404Z"
                                fill="#B4B4B4"/>
                        </svg>
                        {t("VRERA CERTIFICATE")}
                    </a>
                    <a className="pdf-file" href='https://propart-pdfs.s3.me-south-1.amazonaws.com/BROKER+ID.pdf'
                       download>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="53" viewBox="0 0 44 53" fill="none">
                            <path
                                d="M31.4041 35.4838C30.5433 35.432 28.4739 35.5546 26.4014 35.9484C25.2025 34.735 24.1643 33.2064 23.3942 31.9457C25.862 24.8499 24.2991 22.833 22.1953 22.833C20.5432 22.833 19.7184 24.5765 19.9019 26.5028C19.9948 27.4725 20.816 29.51 21.8268 31.4453C21.2067 33.0762 20.1001 35.8327 19.0016 37.8275C17.7158 38.2182 16.613 38.6524 15.8216 39.0187C11.8791 40.8521 11.5623 43.3002 12.3827 44.3375C13.9403 46.308 17.2589 44.6079 20.5889 38.6524C22.8687 38.0041 25.8682 37.1404 26.1386 37.1404C26.1697 37.1404 26.2125 37.1503 26.262 37.1663C27.9239 38.6318 29.8868 40.3098 31.5023 40.5307C33.8399 40.8521 35.1706 39.1567 35.0784 38.1024C34.9869 37.0475 34.3708 35.6619 31.4041 35.4838ZM16.6465 41.9077C15.683 43.0534 14.1246 44.1523 13.5746 43.7868C13.0239 43.4205 12.9325 42.3662 14.171 41.1735C15.4087 39.9822 17.4805 39.3638 17.792 39.248C18.16 39.1109 18.2514 39.248 18.2514 39.4315C18.2514 39.6151 17.6093 40.7607 16.6465 41.9077ZM20.8654 26.502C20.7732 25.3549 21.0017 24.2551 21.9652 24.118C22.9272 23.9794 23.3866 25.08 23.0201 26.8677C22.653 28.6576 22.4687 29.8482 22.2858 29.9876C22.1024 30.1247 21.9202 29.6653 21.9202 29.6653C21.5525 28.931 20.9568 27.6475 20.8654 26.502ZM21.2325 37.2767C21.736 36.4502 23.0202 33.105 23.0202 33.105C23.2952 33.6099 25.4492 36.1753 25.4492 36.1753C25.4492 36.1753 22.1481 36.9104 21.2325 37.2767ZM31.225 38.7422C29.8502 38.561 27.5126 36.908 27.5126 36.908C27.192 36.771 30.0741 36.3795 31.1808 36.4503C32.6029 36.5426 33.1071 37.1389 33.1071 37.7346C33.1071 38.3309 32.6029 38.9258 31.225 38.7422Z"
                                fill="#B4B4B4"/>
                            <path
                                d="M43.0456 11.0345L32.9664 0.954421L32.0118 0H30.6607H10.1052C5.25177 0 1.30331 3.94928 1.30331 8.80431V9.47769H0V20.0072H1.30331V43.6734C1.30331 48.5276 5.25188 52.4768 10.1053 52.4768H35.1965C40.0514 52.4768 44 48.5276 44 43.6734V13.3401V11.9896L43.0456 11.0345ZM35.1964 49.2167H10.1052C7.04316 49.2167 4.56168 46.7351 4.56168 43.6732V20.0071H20.685V9.47758H4.56168V8.8042C4.56168 5.74149 7.04316 3.25909 10.1052 3.25909H29.8807V9.50034C29.8807 12.0512 31.9501 14.1192 34.501 14.1192H40.7414V43.6731C40.7414 46.7352 38.2591 49.2167 35.1964 49.2167ZM4.79024 17.0228V12.1488C4.79024 12.0628 4.86025 11.9926 4.94644 11.9926H6.49492C6.75013 11.9926 6.98545 12.0345 7.19567 12.1168C7.40363 12.1983 7.58637 12.3126 7.73878 12.4573C7.89262 12.6027 8.0107 12.7795 8.09064 12.9822C8.17059 13.1809 8.21179 13.3981 8.21179 13.6272C8.21179 13.8611 8.17059 14.0797 8.08982 14.2762C8.00988 14.4728 7.8918 14.6472 7.7395 14.7942C7.58791 14.9405 7.40434 15.0555 7.19413 15.1354C6.98545 15.2154 6.75013 15.2558 6.49492 15.2558H5.84142V17.0229C5.84142 17.109 5.77142 17.179 5.68532 17.179H4.94655C4.86025 17.179 4.79024 17.1089 4.79024 17.0228ZM9.56594 17.0228V12.1488C9.56594 12.0628 9.63604 11.9926 9.72214 11.9926H11.4336C11.7588 11.9926 12.0453 12.0467 12.2867 12.1533C12.5313 12.2621 12.7498 12.4351 12.9373 12.6667C13.034 12.7885 13.1109 12.9233 13.1664 13.068C13.2205 13.209 13.2617 13.3614 13.2883 13.5197C13.3142 13.6766 13.3294 13.8458 13.3347 14.0278C13.3393 14.2014 13.3416 14.3881 13.3416 14.5861C13.3416 14.7833 13.3393 14.97 13.3347 15.1436C13.3294 15.3249 13.3142 15.4948 13.2883 15.6524C13.2617 15.8109 13.2205 15.9625 13.1664 16.1033C13.1101 16.2495 13.0332 16.3844 12.9379 16.5039C12.7491 16.7378 12.5304 16.9107 12.2866 17.018C12.0474 17.1246 11.7603 17.1788 11.4335 17.1788H9.72203C9.63594 17.179 9.56594 17.1089 9.56594 17.0228ZM17.7228 14.1422C17.8089 14.1422 17.8789 14.2123 17.8789 14.2984V14.9625C17.8789 15.0486 17.8089 15.1187 17.7228 15.1187H15.8529V17.023C15.8529 17.1091 15.7828 17.1791 15.6967 17.1791H14.9578C14.8717 17.1791 14.8017 17.1091 14.8017 17.023V12.149C14.8017 12.063 14.8717 11.9928 14.9578 11.9928H17.7921C17.8781 11.9928 17.9483 12.0629 17.9483 12.149V12.8131C17.9483 12.8992 17.8782 12.9693 17.7921 12.9693H15.8529V14.1423L17.7228 14.1422Z"
                                fill="#B4B4B4"/>
                            <path
                                d="M6.97476 14.1136C7.09898 14.0017 7.15904 13.8425 7.15904 13.6269C7.15904 13.412 7.09888 13.2529 6.97476 13.1409C6.84531 13.0251 6.67465 12.9688 6.45224 12.9688H5.83984V14.2856H6.45224C6.67455 14.2857 6.84531 14.2294 6.97476 14.1136Z"
                                fill="#B4B4B4"/>
                            <path
                                d="M11.7649 16.1404C11.8807 16.097 11.9805 16.027 12.0696 15.9264C12.1664 15.8183 12.2273 15.6629 12.2509 15.4641C12.2776 15.2378 12.2905 14.9423 12.2905 14.5858C12.2905 14.2286 12.2776 13.933 12.2509 13.7076C12.2273 13.5081 12.1664 13.3527 12.0703 13.2453C11.9813 13.1447 11.8784 13.0732 11.7657 13.0312C11.6446 12.9848 11.506 12.9619 11.3515 12.9619H10.6172V16.2089H11.3515C11.5052 16.209 11.6446 16.1862 11.7649 16.1404Z"
                                fill="#B4B4B4"/>
                        </svg>
                        {t("OWNER BROKER ID")}
                    </a>
                    <a className="pdf-file"
                       href='https://propart-pdfs.s3.me-south-1.amazonaws.com/Company+Trade+License.pdf' download>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="53" viewBox="0 0 44 53" fill="none">
                            <path
                                d="M31.4041 35.4838C30.5433 35.432 28.4739 35.5546 26.4014 35.9484C25.2025 34.735 24.1643 33.2064 23.3942 31.9457C25.862 24.8499 24.2991 22.833 22.1953 22.833C20.5432 22.833 19.7184 24.5765 19.9019 26.5028C19.9948 27.4725 20.816 29.51 21.8268 31.4453C21.2067 33.0762 20.1001 35.8327 19.0016 37.8275C17.7158 38.2182 16.613 38.6524 15.8216 39.0187C11.8791 40.8521 11.5623 43.3002 12.3827 44.3375C13.9403 46.308 17.2589 44.6079 20.5889 38.6524C22.8687 38.0041 25.8682 37.1404 26.1386 37.1404C26.1697 37.1404 26.2125 37.1503 26.262 37.1663C27.9239 38.6318 29.8868 40.3098 31.5023 40.5307C33.8399 40.8521 35.1706 39.1567 35.0784 38.1024C34.9869 37.0475 34.3708 35.6619 31.4041 35.4838ZM16.6465 41.9077C15.683 43.0534 14.1246 44.1523 13.5746 43.7868C13.0239 43.4205 12.9325 42.3662 14.171 41.1735C15.4087 39.9822 17.4805 39.3638 17.792 39.248C18.16 39.1109 18.2514 39.248 18.2514 39.4315C18.2514 39.6151 17.6093 40.7607 16.6465 41.9077ZM20.8654 26.502C20.7732 25.3549 21.0017 24.2551 21.9652 24.118C22.9272 23.9794 23.3866 25.08 23.0201 26.8677C22.653 28.6576 22.4687 29.8482 22.2858 29.9876C22.1024 30.1247 21.9202 29.6653 21.9202 29.6653C21.5525 28.931 20.9568 27.6475 20.8654 26.502ZM21.2325 37.2767C21.736 36.4502 23.0202 33.105 23.0202 33.105C23.2952 33.6099 25.4492 36.1753 25.4492 36.1753C25.4492 36.1753 22.1481 36.9104 21.2325 37.2767ZM31.225 38.7422C29.8502 38.561 27.5126 36.908 27.5126 36.908C27.192 36.771 30.0741 36.3795 31.1808 36.4503C32.6029 36.5426 33.1071 37.1389 33.1071 37.7346C33.1071 38.3309 32.6029 38.9258 31.225 38.7422Z"
                                fill="#B4B4B4"/>
                            <path
                                d="M43.0456 11.0345L32.9664 0.954421L32.0118 0H30.6607H10.1052C5.25177 0 1.30331 3.94928 1.30331 8.80431V9.47769H0V20.0072H1.30331V43.6734C1.30331 48.5276 5.25188 52.4768 10.1053 52.4768H35.1965C40.0514 52.4768 44 48.5276 44 43.6734V13.3401V11.9896L43.0456 11.0345ZM35.1964 49.2167H10.1052C7.04316 49.2167 4.56168 46.7351 4.56168 43.6732V20.0071H20.685V9.47758H4.56168V8.8042C4.56168 5.74149 7.04316 3.25909 10.1052 3.25909H29.8807V9.50034C29.8807 12.0512 31.9501 14.1192 34.501 14.1192H40.7414V43.6731C40.7414 46.7352 38.2591 49.2167 35.1964 49.2167ZM4.79024 17.0228V12.1488C4.79024 12.0628 4.86025 11.9926 4.94644 11.9926H6.49492C6.75013 11.9926 6.98545 12.0345 7.19567 12.1168C7.40363 12.1983 7.58637 12.3126 7.73878 12.4573C7.89262 12.6027 8.0107 12.7795 8.09064 12.9822C8.17059 13.1809 8.21179 13.3981 8.21179 13.6272C8.21179 13.8611 8.17059 14.0797 8.08982 14.2762C8.00988 14.4728 7.8918 14.6472 7.7395 14.7942C7.58791 14.9405 7.40434 15.0555 7.19413 15.1354C6.98545 15.2154 6.75013 15.2558 6.49492 15.2558H5.84142V17.0229C5.84142 17.109 5.77142 17.179 5.68532 17.179H4.94655C4.86025 17.179 4.79024 17.1089 4.79024 17.0228ZM9.56594 17.0228V12.1488C9.56594 12.0628 9.63604 11.9926 9.72214 11.9926H11.4336C11.7588 11.9926 12.0453 12.0467 12.2867 12.1533C12.5313 12.2621 12.7498 12.4351 12.9373 12.6667C13.034 12.7885 13.1109 12.9233 13.1664 13.068C13.2205 13.209 13.2617 13.3614 13.2883 13.5197C13.3142 13.6766 13.3294 13.8458 13.3347 14.0278C13.3393 14.2014 13.3416 14.3881 13.3416 14.5861C13.3416 14.7833 13.3393 14.97 13.3347 15.1436C13.3294 15.3249 13.3142 15.4948 13.2883 15.6524C13.2617 15.8109 13.2205 15.9625 13.1664 16.1033C13.1101 16.2495 13.0332 16.3844 12.9379 16.5039C12.7491 16.7378 12.5304 16.9107 12.2866 17.018C12.0474 17.1246 11.7603 17.1788 11.4335 17.1788H9.72203C9.63594 17.179 9.56594 17.1089 9.56594 17.0228ZM17.7228 14.1422C17.8089 14.1422 17.8789 14.2123 17.8789 14.2984V14.9625C17.8789 15.0486 17.8089 15.1187 17.7228 15.1187H15.8529V17.023C15.8529 17.1091 15.7828 17.1791 15.6967 17.1791H14.9578C14.8717 17.1791 14.8017 17.1091 14.8017 17.023V12.149C14.8017 12.063 14.8717 11.9928 14.9578 11.9928H17.7921C17.8781 11.9928 17.9483 12.0629 17.9483 12.149V12.8131C17.9483 12.8992 17.8782 12.9693 17.7921 12.9693H15.8529V14.1423L17.7228 14.1422Z"
                                fill="#B4B4B4"/>
                            <path
                                d="M6.97476 14.1136C7.09898 14.0017 7.15904 13.8425 7.15904 13.6269C7.15904 13.412 7.09888 13.2529 6.97476 13.1409C6.84531 13.0251 6.67465 12.9688 6.45224 12.9688H5.83984V14.2856H6.45224C6.67455 14.2857 6.84531 14.2294 6.97476 14.1136Z"
                                fill="#B4B4B4"/>
                            <path
                                d="M11.7649 16.1404C11.8807 16.097 11.9805 16.027 12.0696 15.9264C12.1664 15.8183 12.2273 15.6629 12.2509 15.4641C12.2776 15.2378 12.2905 14.9423 12.2905 14.5858C12.2905 14.2286 12.2776 13.933 12.2509 13.7076C12.2273 13.5081 12.1664 13.3527 12.0703 13.2453C11.9813 13.1447 11.8784 13.0732 11.7657 13.0312C11.6446 12.9848 11.506 12.9619 11.3515 12.9619H10.6172V16.2089H11.3515C11.5052 16.209 11.6446 16.1862 11.7649 16.1404Z"
                                fill="#B4B4B4"/>
                        </svg>
                        {t("COMPANY TRADE LICENCE")}
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs
