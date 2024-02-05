import Header from "../components/Header.jsx";
import Feedback from "../components/Feedback.jsx";
import "../styles/Pages/projectView.scss"
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FloorPlan from "../components/FloorPlan.jsx";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import Footer from "../components/Footer.jsx";
import { Link, useParams } from "react-router-dom";
import Marker from "../components/Marker.jsx";
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import RequestModal from "../components/RequestModal.jsx";
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
import { useTranslation } from "react-i18next";
import * as i18n from "i18next";
import 'swiper/css/navigation';
import GetConsult from "../components/GetConsult.jsx";
import DynamicTruncatedText from "../components/DynamicTruncatedText.jsx";
import { Link as ScrollLink } from 'react-scroll';
import Response from "../data/response.json"

const ProjectView = () => {
    const { id } = useParams();
    const [showImages, setShowImages] = useState(false);
    const [project, setProject] = useState(null);
    const [randomProjects, setRandomProjects] = useState(Response);
    const [activePlan, setActivePlan] = useState(0)
    const [activeFloorPlan, setActiveFloorPlan] = useState(0)
    const [activeGallery, setActiveGallery] = useState('Architecture')
    const [mapZoom, setMapZoom] = useState(15);
    const [showModal, setShowModal] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [translatedText, setTranslatedText] = useState('');

    const [modalText, setModalText] = useState({
        tittleText: "",
        buttonText: ""
    });

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem("lang"))
        handleTranslate();
    }, [id]);

    const { t } = useTranslation();

    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 8));

    const [currnetIndex, setCurrentIndex] = useState(null)

    const closeModal = () => {
        setShowModal(false);
    };

    function formatNumberWithCommas(value) {
        value = (Number(value) / 3.16).toFixed(0).toString()
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const navigationSimPrevRef = React.useRef(null)
    const navigationSimNextRef = React.useRef(null)

    const handlePlanClick = (index) => {
        setActivePlan(index);
    };
    const handleFloorPlanClick = (index) => {
        setActiveFloorPlan(index);
    };

    const handleGalleryClick = (index) => {
        setActiveGallery(index);
    };

    let formattedTotalSum = 0

    if (project != null) {
        const activePaymentPlan = project.paymentPlans[activePlan];

        const totalSum =
            parseFloat(activePaymentPlan.sum1) +
            parseFloat(activePaymentPlan.sum2) +
            parseFloat(activePaymentPlan.sum3) +
            parseFloat(activePaymentPlan.sum4);

        formattedTotalSum = formatNumberWithCommas(totalSum.toString());
    }

    function isMobile() {
        return window.innerWidth <= 768;
    }

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    function convertPriceToShortFormat(price) {
        price = (Number(price) / 3.16).toFixed(0).toString()
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        let suffixIndex = 0;

        while (price >= 1000 && suffixIndex < suffixes.length - 1) {
            price /= 1000;
            suffixIndex++;
        }

        return price.toFixed(1) + suffixes[suffixIndex];
    }

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
            "image": tykhovaTatianaName,
            "name": "Tykhova Tatiana",
            "position": "Real estate broker",
            "qr": tykhovaTatiana,
            "social": {
                "instagram": "https://www.instagram.com/taffeeta",
                "telegram": "https://t.me/+971522419898",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971522419898&text&type=phone_number&app_absent=0"
            }
        }
        ,
        {
            "image": kristinaSokolovskayaName,
            "name": "Kristina Sokolovskaya",
            "position": "CEO Kristal Business Experts",
            "qr": kristinaSokolovskaya,
            "social": {
                "telegram": "https://t.me/+971529568%20390",
            }
        },
        {
            "image": pavelDyninName,
            "name": "Pavel Dynin",
            "position": "Real estate broker",
            "qr": propertyPartnersDynin,
            "social": {
                "telegram": "https://t.me/pavel_dynin",
                "instagram": "https://www.instagram.com/pavel.dynin?igshid=OGQ5Z%20Dc2ODk2ZA%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585622362&text&type=phone_number&app_absent=0",
                "facebook": "https://www.facebook.com/csdus?mibextid=LQQJ%204d"
            }
        },
        {
            "image": annaHorshunovaName,
            "name": "Anna Horshunova",
            "position": "Real estate broker",
            "qr": annaHorshunova,
            "social": {
                facebook: "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d"
            }
        },
        {
            "image": allaGerassimovaName,
            "name": "Alla Gerassimova",
            "position": "Marketer, content maker",
            "qr": allaGerassimova,
            "social": {
                "telegram": "https://t.me/alla_gerassimova",
                "instagram": "https://www.instagram.com/a11gep?igshid=NTc4MTIw+NjQ2YQ%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971555728933&text&type=phone_number&app_absent=0",
            }
        },
        {
            "image": dmitriyKoltsovName,
            "name": "Dmitriy Koltsov",
            "position": "Real estate broker",
            "qr": dmitriyKoltsov,
            "social": {
                "telegram": "https://t.me/brokervdubae",
                "instagram": "https://www.instagram.com/brokervdubae",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585589938&text&type=phone_number&app_absent=0",
            }
        },
    ]

    if (project === null || randomProjects === null) {
        return null;
    }

    const ProjectSimm = ({ project }) => {
        return (<div className={"project-sim"} onClick={() => window.location.href = `/project-view/${project._id}`}>

            <div className="img-container">
                <div className="image" style={{
                    background: `linear-gradient(0deg, #000 -58.46%, rgba(0, 0, 0, 0.00) 96.51%), url(${project.imageSrcMain}) lightgray 50% / cover no-repeat`,
                }}>
                </div>

            </div>

            <div className="project-content">
                <div className="price">
                    ${formatNumberWithCommas(project.priceFrom)} <span>/from</span>
                </div>
                <div className="name">
                    <DynamicTruncatedText text={project.projectName} customBreakpoints={{
                        1920: 20,
                    }} />

                    by

                    <DynamicTruncatedText text={project.developer} customBreakpoints={{
                        1920: 20,
                    }} />
                </div>
            </div>

            <div className="description">
                <div className="info">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                            <path
                                d="M23.3864 11.4997V9.51718C23.3864 7.025 23.3864 5.77891 22.5857 5.00469C21.785 4.23047 20.4963 4.23047 17.919 4.23047H11.0846C8.50726 4.23047 7.21856 4.23047 6.41788 5.00469C5.61719 5.77891 5.61719 7.025 5.61719 9.51718V11.4997M14.5018 4.89131V11.4997"
                                stroke="#C29773" stroke-width="2" />
                            <path d="M24.1932 22.0002V20.3848M4.80859 22.0002V20.3848" stroke="#C29773" stroke-width="2"
                                stroke-linecap="round" />
                            <path
                                d="M1.57812 15.5385C1.57812 14.284 1.57813 13.6568 1.77487 13.162C2.03719 12.5023 2.54035 11.9782 3.17365 11.7049C3.64863 11.5 4.25077 11.5 5.45505 11.5H23.5474C24.7517 11.5 25.3537 11.5 25.8288 11.7049C26.462 11.9782 26.9652 12.5023 27.2276 13.162C27.4243 13.6568 27.4243 14.284 27.4243 15.5385C27.4243 16.7929 27.4243 17.4201 27.2276 17.915C26.9652 18.5746 26.462 19.0988 25.8288 19.372C25.3537 19.5769 24.7517 19.5769 23.5474 19.5769H5.45505C4.25077 19.5769 3.64863 19.5769 3.17365 19.372C2.54035 19.0988 2.03719 18.5746 1.77487 17.915C1.57813 17.4201 1.57812 16.7929 1.57812 15.5385Z"
                                stroke="#1C274C" stroke-width="2" />
                            <path
                                d="M25.8107 11.5C25.8107 6.55025 25.8107 4.07538 24.3387 2.53769C22.8668 1 20.4976 1 15.7594 1H13.2466C8.50837 1 6.13927 1 4.66728 2.53769C3.19531 4.07538 3.19531 6.55025 3.19531 11.5"
                                stroke="#1C274C" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="text">
                        {project.selectedBedrooms} <span>bdrm</span>
                    </div>
                </div>

                <div className="info">
                    <div>
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4.5" y="4" width="21" height="21" stroke="#C29773" stroke-width="2" />
                            <path
                                d="M17.6587 13.9519V13.1709L18.8247 12.1919C18.9201 12.1113 19.0264 12.0196 19.1437 11.9169C19.2611 11.8143 19.3637 11.7006 19.4517 11.5759C19.5471 11.4513 19.5947 11.3266 19.5947 11.2019C19.5947 11.0406 19.5471 10.9196 19.4517 10.8389C19.3637 10.7509 19.2391 10.7069 19.0777 10.7069C18.9311 10.7069 18.8101 10.7436 18.7147 10.8169C18.6267 10.8903 18.5791 11.0003 18.5717 11.1469H17.6367C17.6441 10.6996 17.7907 10.3623 18.0767 10.1349C18.3627 9.90761 18.7184 9.79395 19.1437 9.79395C19.5544 9.79395 19.8954 9.90395 20.1667 10.1239C20.4381 10.3439 20.5737 10.6593 20.5737 11.0699C20.5737 11.3706 20.5041 11.6309 20.3647 11.8509C20.2254 12.0636 20.0567 12.2616 19.8587 12.4449C19.7414 12.5549 19.6204 12.6576 19.4957 12.7529C19.3784 12.8483 19.2574 12.9473 19.1327 13.0499H20.5297V13.9519H17.6587Z"
                                fill="#C29773" />
                            <path
                                d="M16.6504 17.9999C16.1811 17.9999 15.7924 17.9376 15.4844 17.8129C15.1837 17.6883 14.9564 17.4866 14.8024 17.2079C14.6557 16.9293 14.5824 16.5553 14.5824 16.0859V13.3909H13.6914V12.2029H14.5824V10.5859H15.9244V12.2029H17.2774V13.3909H15.9244V15.9099C15.9244 16.2033 15.9757 16.4269 16.0784 16.5809C16.1811 16.7349 16.4121 16.8119 16.7714 16.8119H17.2334V17.9999H16.6504Z"
                                fill="#C29773" />
                            <path
                                d="M10.9801 18V13.391H10.0781V12.203H10.9801V11.653C10.9801 11.213 11.0461 10.8537 11.1781 10.575C11.3101 10.289 11.5191 10.08 11.8051 9.948C12.0985 9.816 12.4725 9.75 12.9271 9.75H13.7851V10.938H13.0811C12.8831 10.938 12.7291 10.971 12.6191 11.037C12.5091 11.103 12.4285 11.202 12.3771 11.334C12.3331 11.4587 12.3111 11.6127 12.3111 11.796V12.203H13.7851V13.391H12.3111V18H10.9801Z"
                                fill="#C29773" />
                            <mask id="path-5-inside-1_2627_21161" fill="white">
                                <rect x="23.5" width="6" height="6" rx="0.5" />
                            </mask>
                            <rect x="23.5" width="6" height="6" rx="0.5" fill="white" />
                            <rect x="23.5" width="6" height="6" rx="0.5" stroke="#191C38" stroke-width="2"
                                mask="url(#path-5-inside-1_2627_21161)" />
                            <mask id="path-6-inside-2_2627_21161" fill="white">
                                <rect x="23.5" y="23" width="6" height="6" rx="0.5" />
                            </mask>
                            <rect x="23.5" y="23" width="6" height="6" rx="0.5" fill="white" />
                            <rect x="23.5" y="23" width="6" height="6" rx="0.5" stroke="#191C38" stroke-width="2"
                                mask="url(#path-6-inside-2_2627_21161)" />
                            <mask id="path-7-inside-3_2627_21161" fill="white">
                                <rect x="0.5" y="23" width="6" height="6" rx="0.5" />
                            </mask>
                            <rect x="0.5" y="23" width="6" height="6" rx="0.5" fill="white" />
                            <rect x="0.5" y="23" width="6" height="6" rx="0.5" stroke="#191C38" stroke-width="2"
                                mask="url(#path-7-inside-3_2627_21161)" />
                            <mask id="path-8-inside-4_2627_21161" fill="white">
                                <rect x="0.5" width="6" height="6" rx="0.5" />
                            </mask>
                            <rect x="0.5" width="6" height="6" rx="0.5" fill="white" />
                            <rect x="0.5" width="6" height="6" rx="0.5" stroke="#191C38" stroke-width="2"
                                mask="url(#path-8-inside-4_2627_21161)" />
                        </svg>

                    </div>


                    <div className="text">
                        {(Number(project.priceFrom) / 3.16 / Number(project.sizeFrom)).toFixed(0)} <span>USD</span>
                    </div>
                </div>

                <div className="info">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path
                                d="M10.45 1C6.19218 1.00766 3.96257 1.1122 2.53769 2.53708C1 4.07477 1 6.54965 1 11.4994C1 16.4492 1 18.924 2.53769 20.4617C4.07538 21.9994 6.55026 21.9994 11.5 21.9994C16.4497 21.9994 18.9247 21.9994 20.4623 20.4617C21.8872 19.0368 21.9917 16.8072 21.9994 12.5494"
                                stroke="#1C274C" stroke-width="2" stroke-linecap="round" />
                            <path
                                d="M12.55 10.45L22 1M22 1H16.389M22 1V6.61094M20.95 2.05L11.5 11.5M11.5 11.5H15.7M11.5 11.5V7.3"
                                stroke="#C29773" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="text">
                        {project.sizeFrom} <span>sq.ft</span>
                    </div>
                </div>
            </div>
        </div>)
    }

    const text = "Featuring a central park and lush green areas, this community provides an ideal environment for a balanced and tranquil way of life. Enveloped by jogging trails, cycling lanes, charming cafes and convenient retail options, Town Square Dubai caters to all your needs, creating a vibrant atmosphere filled with energy and warmth in every corner! Featuring combination of 1, 2, and 3-bedroom apartments, these modern layouts prioritize nprivacy and comfort. Experience the warmth of an inviting lobby upon returning home and relax in the landscaped courtyard, complete with a swimming pool, expansive deck, and children’s play areas."

    return (<div className={"project-view"}>
        <Header />
        <RequestModal showModal={showModal} closeModal={closeModal} modalText={modalText}
            image={team[randomNumber].image} />

        <div className="project-content">
            <div className="path">
                <Link to='/'>Home</Link>
                <div>{'->'}</div>
                <Link to='/real-estate'>Buy</Link>
                <div>{'->'}</div>
                <Link to='/project-view/653461c6fa2662129d9aef21'>{project.projectName}</Link>
            </div>

            <div className="project-sticky">
                <div className="project-info-container">
                    <div className="project-images">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}

                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={project.imageSrcMain} /></SwiperSlide>
                            <SwiperSlide><img src={project.interiorGallery[1]} /></SwiperSlide>
                            <SwiperSlide><img src={project.interiorGallery[2]} /></SwiperSlide>
                            <SwiperSlide><img src={project.architectureGallery[1]} /></SwiperSlide>
                            <SwiperSlide><img src={project.architectureGallery[2]} /></SwiperSlide>
                        </Swiper>

                    </div>

                    <div className="project-description">
                        <div className='title'>
                            <div>
                                {t("About the development")}
                            </div>
                            <div>
                                {t("Dubai's off-plan")}
                            </div>
                        </div>

                        <div className="text">
                            <div>
                                {t("Dubai's off-plan")}
                            </div>
                            <div>
                                {t("Buyers can secure")}
                            </div>
                        </div>
                        <div onClick={() => setIsReadMore(!isReadMore)} className="read-more">
                            Read More
                        </div>
                    </div>

                    <div className="payment-plan">
                        <div className="title">Payment plan</div>

                        <div className='plan-type'>
                            {project.paymentPlans.Studio &&
                                <div
                                    className={activePlan === "Studio" ? 'active' : ''}
                                    onClick={() => handlePlanClick("Studio")}
                                >
                                </div>}
                            {project.paymentPlans["1"] &&
                                <div
                                    className={activePlan === "1" ? 'active' : ''}
                                    onClick={() => handlePlanClick("1")}
                                >
                                    {activePlan === "1" ?
                                        <>
                                            1 Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                    fill="white" />
                                            </svg>
                                        </>
                                        :
                                        '1 Bedrooms'
                                    }
                                </div>}
                            {project.paymentPlans["2"] &&
                                <div
                                    className={activePlan === "2" ? 'active' : ''}
                                    onClick={() => handlePlanClick("2")}
                                >
                                    {activePlan === "2" ?
                                        <>
                                            2 Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                    fill="white" />
                                            </svg>
                                        </>
                                        :
                                        '2 Bedrooms'
                                    }
                                </div>}
                            {project.paymentPlans["3"] &&
                                <div
                                    className={activePlan === "3" ? 'active' : ''}
                                    onClick={() => handlePlanClick("3")}
                                >
                                    {activePlan === "3" ?
                                        <>
                                            3 Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                    fill="white" />
                                            </svg>
                                        </>
                                        :
                                        '3 Bedrooms'
                                    }
                                </div>}
                            {project.paymentPlans["4+"] &&
                                <div
                                    className={activePlan === "4+" ? 'active' : ''}
                                    onClick={() => handlePlanClick("4+")}
                                >
                                    {activePlan === "4+" ?
                                        <>
                                            4+ Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                    fill="white" />
                                            </svg>
                                        </>
                                        :
                                        '4+ Bedrooms'
                                    }
                                </div>}
                        </div>

                        <div className="plan-content">
                            <div className="column">
                                <div className="header">{t("r_pay3")}</div>
                                <div className="values">
                                    <div className="value">Booking</div>
                                    <div className="value">During Construction</div>
                                    <div className="value">Upon Handover</div>
                                    <div className="value">After Handover</div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="header">{t("r_pay4")}</div>
                                <div className="values">
                                    <div className="value">{project.paymentPlans[activePlan].percent1}%</div>
                                    <div className="value">{project.paymentPlans[activePlan].percent2}%</div>
                                    <div className="value">{project.paymentPlans[activePlan].percent3}%</div>
                                    <div className="value">{project.paymentPlans[activePlan].percent4}%</div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="header">{t("r_pay5")}</div>
                                <div className="values">
                                    <div
                                        className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum1)}</div>
                                    <div
                                        className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum2)}</div>
                                    <div
                                        className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum3)}</div>
                                    <div
                                        className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum4)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sticky-container">
                    <div className="sticky-blocks">
                        <div className="sticky-project">

                            <div className="title">

                                <div className='price'>
                                    <span>{t("r_pay2")}</span> ${formatNumberWithCommas(project.priceFrom)}</div>
                                <div
                                    className='per-ft'>{t("r_pay2")} {(Number(project.priceFrom) / 3.16 / Number(project.sizeFrom)).toFixed(0)} for
                                    sq.ft
                                </div>
                                <div className='number'>Trakheesi number: #43923321</div>
                            </div>

                            <div className="info-buttons">
                                <div className="name">

                                    <div>{project.projectName}</div>

                                    <div className="description">
                                        <div>{project.selectedLocation || project.ownLocation}</div>
                                        <ScrollLink
                                            to="location"
                                            spy={true}
                                            smooth={true}
                                            offset={-40}
                                            duration={1000}
                                        >
                                            <div>View map</div>
                                        </ScrollLink>
                                    </div>
                                </div>

                                <div className="information">
                                    <div className="block">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M12 14V22H4C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14ZM18 21.5L15.061 23.045L15.622 19.773L13.245 17.455L16.531 16.977L18 14L19.47 16.977L22.755 17.455L20.378 19.773L20.938 23.045L18 21.5ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"
                                                    fill="#191C38" />
                                            </svg>
                                        </div>

                                        <div className="text">
                                            <div>Developer</div>
                                            <div>{project.developer}</div>
                                        </div>
                                    </div>

                                    <div className="block">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M3 21C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H10.414L12.414 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6V9H4V18.996L6 11H22.5L20.19 20.243C20.1358 20.4592 20.011 20.6512 19.8352 20.7883C19.6595 20.9255 19.4429 21 19.22 21H3Z"
                                                    fill="#191C38" />
                                            </svg>
                                        </div>

                                        <div className="text">
                                            <div>Project</div>
                                            <div><DynamicTruncatedText text={project.projectName} customBreakpoints={{
                                                1920: 20,
                                                1640: 8,
                                            }} /></div>
                                        </div>
                                    </div>

                                    <div className="block">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                viewBox="0 0 24 25"
                                                fill="none">
                                                <path
                                                    d="M12 4.5H17.4H19.2H20.875C20.944 4.5 21 4.55596 21 4.625V12.375C21 12.444 20.944 12.5 20.875 12.5H17.125C17.056 12.5 17 12.556 17 12.625V17.375C17 17.444 16.944 17.5 16.875 17.5H12M12 4.5H3.125C3.05596 4.5 3 4.55717 3 4.6262C3 8.05683 3 9.79039 3 12.5M12 4.5V7.04822C12 7.08138 12.0132 7.11317 12.0366 7.13661L14.25 9.35M8.4 12.5H11.875C11.944 12.5 12 12.556 12 12.625V17.5M3 12.5C3 15.2096 3 16.9432 3 20.3738C3 20.4428 3.05596 20.5 3.125 20.5H4.8H6.6M3 12.5H4.74822C4.78138 12.5 4.81317 12.4868 4.83661 12.4634L6.6 10.7M8.4 20.5H11.875C11.944 20.5 12 20.444 12 20.375V17.5"
                                                    stroke="#191C38" stroke-width="2" stroke-linejoin="bevel" />
                                            </svg>
                                        </div>

                                        <div className="text">
                                            <div>Type</div>
                                            <div><DynamicTruncatedText text={project.selectedProperty}
                                                customBreakpoints={{
                                                    1920: 20,
                                                    1640: 8,
                                                }} /></div>
                                        </div>
                                    </div>

                                    <div className="block">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                viewBox="0 0 24 25"
                                                fill="none">
                                                <path
                                                    d="M4 19.5C4 20.0523 4.44772 20.5 5 20.5C5.55228 20.5 6 20.0523 6 19.5H4ZM4 2.5V19.5H6V2.5H4Z"
                                                    fill="#191C38" />
                                                <path d="M20 19.5L5 19.5" stroke="#191C38" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M8 5.5L5 2.5L2 5.5" stroke="#191C38" stroke-width="1.5"
                                                    stroke-linejoin="round" />
                                                <path d="M19 22.5L22 19.5L19 16.5" stroke="#191C38" stroke-width="1.5"
                                                    stroke-linecap="square" stroke-linejoin="round" />
                                                <path d="M10.5 5H19.5V13.5" stroke="#191C38" stroke-width="2"
                                                    stroke-linecap="square" stroke-linejoin="round" />
                                                <path d="M19 5.5L5 19.5" stroke="#191C38" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M13.5 5L5 13.5" stroke="#191C38" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M19.5 10.5L11 19" stroke="#191C38" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <div className="text">
                                            <div>Total area</div>
                                            <div>{project.sizeFrom} ft²</div>
                                        </div>
                                    </div>

                                    <div className="block">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M20 19.9999C20 20.2651 19.8946 20.5195 19.7071 20.707C19.5196 20.8946 19.2652 20.9999 19 20.9999H5C4.73478 20.9999 4.48043 20.8946 4.29289 20.707C4.10536 20.5195 4 20.2651 4 19.9999V10.9999H1L11.327 1.61192C11.5111 1.4444 11.7511 1.35156 12 1.35156C12.2489 1.35156 12.4889 1.4444 12.673 1.61192L23 10.9999H20V19.9999Z"
                                                    fill="#191C38" />
                                            </svg>
                                        </div>

                                        <div className="text">
                                            <div>Bedrooms</div>
                                            <div>2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="buttons">
                                    <div onClick={setShowModal} >Contact us</div>
                                    <a href="tel:+971521038793">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="updated">
                                    Updated on 20 Jan 2024
                                </div>
                            </div>
                        </div>

                        <div className="sticky-info">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45"
                                    fill="none">
                                    <path
                                        d="M27.6482 2.64453C31.3262 16.3226 29.6125 23.5431 22.5071 24.3061C10.0131 24.3061 6.06851 31.9586 7.72595 35.7948C9.38338 39.631 14.5884 42.6468 18.8516 43.3763C23.1148 44.1059 30.0242 44.1634 38.651 35.7948C47.2777 27.4262 41.1498 13.921 38.651 10.3794C36.985 8.01834 33.3174 5.44005 27.6482 2.64453Z"
                                        fill="#D8D8D8" />
                                    <mask
                                        id="mask0_2627_21324"
                                        style={{ maskType: "luminance" }}
                                        maskUnits="userSpaceOnUse"
                                        x="7"
                                        y="2"
                                        width="37"
                                        height="42"
                                    >
                                        <path
                                            d="M27.6521 2.64453C31.3301 16.3226 29.6164 23.5431 22.511 24.3061C10.017 24.3061 6.07241 31.9586 7.72985 35.7948C9.38729 39.631 14.5923 42.6468 18.8555 43.3763C23.1187 44.1059 30.0281 44.1634 38.6549 35.7948C47.2816 27.4262 41.1538 13.921 38.6549 10.3794C36.9889 8.01834 33.3213 5.44005 27.6521 2.64453Z"
                                            fill="white"
                                        />
                                    </mask>
                                    <g mask="url(#mask0_2627_21324)">
                                        <path d="M47.0479 -2.0459H-2.04297V47.045H47.0479V-2.0459Z" fill="#C29773" />
                                    </g>
                                    <path
                                        d="M22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5C45 34.9264 34.9264 45 22.5 45ZM22.5 41.4C32.9382 41.4 41.4 32.9382 41.4 22.5C41.4 12.0618 32.9382 3.6 22.5 3.6C12.0618 3.6 3.6 12.0618 3.6 22.5C3.6 32.9382 12.0618 41.4 22.5 41.4ZM20.4545 20.4545C20.4545 19.3249 21.3703 18.4091 22.5 18.4091C23.6297 18.4091 24.5455 19.3249 24.5455 20.4545V30.6818C24.5455 31.8115 23.6297 32.7273 22.5 32.7273C21.3703 32.7273 20.4545 31.8115 20.4545 30.6818V20.4545ZM22.5 16.3636C21.3703 16.3636 20.4545 15.4479 20.4545 14.3182C20.4545 13.1885 21.3703 12.2727 22.5 12.2727C23.6297 12.2727 24.5455 13.1885 24.5455 14.3182C24.5455 15.4479 23.6297 16.3636 22.5 16.3636Z"
                                        fill="#191C38" />
                                </svg>
                            </div>

                            <div>
                                The information presented on this website, including prices and property dimensions, is
                                taken from publicly accessible sources such as Property Finder, Bayut and other. We do
                                not
                                assert proprietary rights over the content provided herein.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky-info">
                <div className="content">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M14.7462 1.41016C16.7079 8.70513 15.7939 12.5561 12.0043 12.963C5.34084 12.963 3.23706 17.0443 4.12102 19.0903C5.00499 21.1363 7.781 22.7447 10.0547 23.1338C12.3284 23.5229 16.0134 23.5535 20.6144 19.0903C25.2153 14.627 21.9471 7.42427 20.6144 5.53542C19.7259 4.27619 17.7698 2.9011 14.7462 1.41016Z"
                                fill="#D8D8D8" />
                            <mask id="mask0_2754_21091" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3"
                                y="1" width="20" height="23">
                                <path
                                    d="M14.7501 1.40967C16.7118 8.70465 15.7978 12.5556 12.0082 12.9625C5.34475 12.9625 3.24096 17.0438 4.12493 19.0898C5.0089 21.1358 7.78491 22.7442 10.0586 23.1333C12.3323 23.5224 16.0173 23.553 20.6183 19.0898C25.2192 14.6266 21.951 7.42378 20.6183 5.53493C19.7298 4.2757 17.7737 2.90061 14.7501 1.40967Z"
                                    fill="white" />
                            </mask>
                            <g mask="url(#mask0_2754_21091)">
                                <path d="M25.092 -1.09131H-1.08984V25.0905H25.092V-1.09131Z" fill="#C29773" />
                            </g>
                            <path
                                d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12 22.08C17.567 22.08 22.08 17.567 22.08 12C22.08 6.43297 17.567 1.92 12 1.92C6.43297 1.92 1.92 6.43297 1.92 12C1.92 17.567 6.43297 22.08 12 22.08ZM10.9091 10.9091C10.9091 10.3066 11.3975 9.81818 12 9.81818C12.6025 9.81818 13.0909 10.3066 13.0909 10.9091V16.3636C13.0909 16.9661 12.6025 17.4545 12 17.4545C11.3975 17.4545 10.9091 16.9661 10.9091 16.3636V10.9091ZM12 8.72727C11.3975 8.72727 10.9091 8.23886 10.9091 7.63636C10.9091 7.03387 11.3975 6.54545 12 6.54545C12.6025 6.54545 13.0909 7.03387 13.0909 7.63636C13.0909 8.23886 12.6025 8.72727 12 8.72727Z"
                                fill="#191C38" />
                        </svg>

                    </div>

                    <div>
                        The information presented on this website, including prices and property dimensions, is
                        taken from publicly accessible sources such as Property Finder, Bayut and other. We do not
                        assert proprietary rights over the content provided herein.
                    </div>
                </div>
            </div>

            <div className="project-description-box">
                <div className="project-description-phone">
                    <div className='title'>
                        <div>
                            About the Cassia Estepona
                        </div>
                        <div>
                            Featuring a central park and lush green areas, this community provides an ideal
                            environment for a balanced and tranquil way of life. Enveloped by jogging trails, c...
                        </div>
                    </div>
                    <div onClick={() => setIsReadMore(!isReadMore)} className="read-more">
                        Read More
                    </div>
                </div>
            </div>

            <div className="payment-box">
                <div className="payment-plan">
                    <div className="title">Payment plan</div>

                    <div className='plan-type'>
                        {project.paymentPlans.Studio &&
                            <div
                                className={activePlan === "Studio" ? 'active' : ''}
                                onClick={() => handlePlanClick("Studio")}
                            >
                            </div>}
                        {project.paymentPlans["1"] &&
                            <div
                                className={activePlan === "1" ? 'active' : ''}
                                onClick={() => handlePlanClick("1")}
                            >
                                {activePlan === "1" ?
                                    <>
                                        1 Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                fill="white" />
                                        </svg>
                                    </>
                                    :
                                    '1 Bedrooms'
                                }
                            </div>}
                        {project.paymentPlans["2"] &&
                            <div
                                className={activePlan === "2" ? 'active' : ''}
                                onClick={() => handlePlanClick("2")}
                            >
                                {activePlan === "2" ?
                                    <>
                                        2 Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                fill="white" />
                                        </svg>
                                    </>
                                    :
                                    '2 Bedrooms'
                                }
                            </div>}
                        {project.paymentPlans["3"] &&
                            <div
                                className={activePlan === "3" ? 'active' : ''}
                                onClick={() => handlePlanClick("3")}
                            >
                                {activePlan === "3" ?
                                    <>
                                        3 Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                fill="white" />
                                        </svg>
                                    </>
                                    :
                                    '3 Bedrooms'
                                }
                            </div>}
                        {project.paymentPlans["4+"] &&
                            <div
                                className={activePlan === "4+" ? 'active' : ''}
                                onClick={() => handlePlanClick("4+")}
                            >
                                {activePlan === "4+" ?
                                    <>
                                        4+ Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                fill="white" />
                                        </svg>
                                    </>
                                    :
                                    '4+ Bedrooms'
                                }
                            </div>}
                    </div>

                    <div className="plan-content">
                        <div className="column">
                            <div className="header">{t("r_pay3")}</div>
                            <div className="values">
                                <div className="value">Booking</div>
                                <div className="value">During Construction</div>
                                <div className="value">Upon Handover</div>
                                <div className="value">After Handover</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="header">{t("r_pay4")}</div>
                            <div className="values">
                                <div className="value">{project.paymentPlans[activePlan].percent1}%</div>
                                <div className="value">{project.paymentPlans[activePlan].percent2}%</div>
                                <div className="value">{project.paymentPlans[activePlan].percent3}%</div>
                                <div className="value">{project.paymentPlans[activePlan].percent4}%</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="header">{t("r_pay5")}</div>
                            <div className="values">
                                <div
                                    className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum1)}</div>
                                <div
                                    className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum2)}</div>
                                <div
                                    className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum3)}</div>
                                <div
                                    className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum4)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="floor-plans">
                <div className="floor-container">
                    <div className="header">{t("r_plan")}</div>

                    <div className="navigations">
                        <div className="floor-types">
                            {project.plans["Studio"].length != 0 &&
                                <div
                                    className={`floor-type ${activeFloorPlan === "Studio" ? 'active' : ''}`}
                                    onClick={() => handleFloorPlanClick("Studio")}
                                >
                                    Studio
                                </div>}
                            {project.plans["1"].length != 0 &&
                                <div
                                    className={`floor-type ${activeFloorPlan === "1" ? 'active' : ''}`}
                                    onClick={() => handleFloorPlanClick("1")}
                                >
                                    {activeFloorPlan === "1" ?
                                        <>
                                            1 Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                    fill="white" />
                                            </svg>
                                        </>
                                        :
                                        '1 Bedrooms'
                                    }
                                </div>}
                            {project.plans["2"].length != 0 &&
                                <div
                                    className={`floor-type ${activeFloorPlan === "2" ? 'active' : ''}`}
                                    onClick={() => handleFloorPlanClick("2")}
                                >
                                    {activeFloorPlan === "2" ?
                                        <>
                                            2 Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                    fill="white" />
                                            </svg>
                                        </>
                                        :
                                        '2 Bedrooms'
                                    }
                                </div>}
                            {project.plans["3"].length != 0 &&
                                <div
                                    className={`floor-type ${activeFloorPlan === "3" ? 'active' : ''}`}
                                    onClick={() => handleFloorPlanClick("3")}
                                >
                                    {activeFloorPlan === "3" ?
                                        <>
                                            3 Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                    fill="white" />
                                            </svg>
                                        </>
                                        :
                                        '3 Bedrooms'
                                    }
                                </div>}
                            {project.plans["4+"].length != 0 &&
                                <div
                                    className={`floor-type ${activeFloorPlan === "4+" ? 'active' : ''}`}
                                    onClick={() => handleFloorPlanClick("4+")}
                                >
                                    {activeFloorPlan === "4+" ?
                                        <>
                                            4+ Bedrooms <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                    fill="white" />
                                            </svg>
                                        </>
                                        :
                                        '4+ Bedrooms'
                                    }
                                </div>
                            }
                        </div>
                        <div className="arrows">
                            <div ref={navigationPrevRef} className="left-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M10.828 12.0002L15.778 16.9502L14.364 18.3642L8 12.0002L14.364 5.63623L15.778 7.05023L10.828 12.0002Z"
                                        fill="white" />
                                </svg>
                            </div>
                            <div ref={navigationNextRef} className="right-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M13.1722 12.0002L8.22217 7.05023L9.63617 5.63623L16.0002 12.0002L9.63617 18.3642L8.22217 16.9502L13.1722 12.0002Z"
                                        fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="floor-content">
                        <Swiper
                            spaceBetween={10}
                            className={"swiper-simillar"}
                            slidesPerView={isMobile() ? 2 : 4} style={{ zIndex: -999 }}
                            modules={[Pagination, Navigation]}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            breakpoints={{
                                // when window width is >= 320px
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                // when window width is >= 480px
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },

                                900: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                                1400: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                                1450: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                }
                            }}
                        >
                            {project.plans[activeFloorPlan].map((plan, index) => (
                                <SwiperSlide key={index}>
                                    <FloorPlan plan={plan} type={activeFloorPlan} />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="gallery">
                <div className="gallery-content">
                    <div className="header">Gallery</div>

                    <div className="navigations">
                        <div className="gallery-types">
                            <div
                                className={`gallery-type ${activeGallery === "Architecture" ? 'active' : ''}`}
                                onClick={() => handleGalleryClick("Architecture")}
                            >
                                {activeGallery === "Architecture" ?
                                    <>
                                        Architecture <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                                fill="white" />
                                        </svg>
                                    </>
                                    :
                                    'Architecture'
                                }
                            </div>

                        </div>
                    </div>

                    <div className="photo-grid">
                        {activeGallery === "Architecture" ? <>
                            <img src={project.interiorGallery[0]} alt="" />
                            <div className="blocks">
                                <div className="block">
                                    <img src={project.interiorGallery[1]} alt="" />
                                </div>
                                <div className="block">
                                    <img src={project.interiorGallery[2]} alt="" />
                                </div>
                                <div className="block">
                                    <img src={project.interiorGallery[3]} alt="" />
                                </div>
                                <div className="block">
                                    <img src={project.interiorGallery[4]} alt="" />
                                </div>
                            </div>
                        </> :
                            <>
                                <img src={project.interiorGallery[0]} alt="" />
                                <div className="blocks">
                                    <div className="block">
                                        <img src={project.interiorGallery[1]} alt="" />
                                    </div>
                                    <div className="block">
                                        <img src={project.interiorGallery[2]} alt="" />
                                    </div>
                                    <div className="block">
                                        <img src={project.interiorGallery[3]} alt="" />
                                    </div>
                                    <div className="block">
                                        <img src={project.interiorGallery[4]} alt="" />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>

            <GetConsult />

            <div className="location">
                <div className="content">
                    <div className="title">
                        Location
                    </div>
                    <div className="map-container">
                        <div className="map">
                            <APIProvider apiKey={"AIzaSyAbaX7Vb6ERFTrWR4espV48g25lFRGGjIc"}>
                                <Map
                                    zoom={16}
                                    center={{ lat: Number(project.lat), lng: Number(project.lng) }}
                                    fullscreenControl={true}
                                    onZoomChanged={ev => {
                                        setMapZoom(ev.detail.zoom)
                                    }}
                                    mapId={"eafda8fe79279394"}
                                    onClick={event => {
                                        setCurrentIndex(null)
                                    }}
                                >
                                    <AdvancedMarker
                                        className={"marker"}
                                        position={{ lat: Number(project.lat), lng: Number(project.lng) }}>
                                        <div style={{
                                            borderRadius: mapZoom < 13 ? 20 : 5,
                                            padding: mapZoom < 13 ? 7 : 0,
                                            background: "#C29773"
                                        }}>
                                            <div style={{
                                                display: mapZoom < 13 ? "none" : "block",
                                                background: "#C29773"
                                            }}
                                                className="price">
                                                {convertPriceToShortFormat(project.priceFrom)}
                                            </div>
                                        </div>
                                    </AdvancedMarker>
                                    {randomProjects.map((marker, index) => (
                                        <Marker key={index}
                                            index={index}
                                            mapZoom={mapZoom}
                                            project={marker}
                                            currnetIndex={currnetIndex}
                                            setCurrentIndex={setCurrentIndex}
                                        />
                                    ))}
                                </Map>
                            </APIProvider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="simillar">
                <div className="contetnt">
                    <div className="arrow-prev" ref={navigationSimPrevRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <g filter="url(#filter0_d_2627_21332)">
                                <path
                                    d="M22.5 2C32.1498 2 40 9.85019 40 19.5C40 29.1498 32.1498 37 22.5 37C12.8502 37 5 29.1498 5 19.5C5 9.85019 12.8502 2 22.5 2ZM17.0939 20.5311L24.3856 27.8227C24.67 28.1071 25.0433 28.25 25.4167 28.25C25.79 28.25 26.1634 28.1071 26.4478 27.8227C27.0179 27.2525 27.0179 26.3308 26.4478 25.7606L20.1871 19.5L26.4477 13.2394C27.0179 12.6692 27.0179 11.7475 26.4477 11.1773C25.8775 10.6071 24.9558 10.6071 24.3856 11.1773L17.0939 18.469C16.5238 19.0392 16.5238 19.9608 17.0939 20.5311Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_2627_21332" x="0" y="0" width="45" height="45"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha" />
                                    <feOffset dy="3" />
                                    <feGaussianBlur stdDeviation="2.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                        result="effect1_dropShadow_2627_21332" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2627_21332"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="arrow-next" ref={navigationSimNextRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <g filter="url(#filter0_d_2627_21329)">
                                <path
                                    d="M22.5 2C12.8502 2 5 9.85019 5 19.5C5 29.1498 12.8502 37 22.5 37C32.1498 37 40 29.1498 40 19.5C40 9.85019 32.1498 2 22.5 2ZM27.9061 20.5311L20.6144 27.8227C20.33 28.1071 19.9567 28.25 19.5833 28.25C19.21 28.25 18.8366 28.1071 18.5522 27.8227C17.9821 27.2525 17.9821 26.3308 18.5522 25.7606L24.8129 19.5L18.5523 13.2394C17.9821 12.6692 17.9821 11.7475 18.5523 11.1773C19.1225 10.6071 20.0442 10.6071 20.6144 11.1773L27.9061 18.469C28.4762 19.0392 28.4762 19.9608 27.9061 20.5311Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_2627_21329" x="0" y="0" width="45" height="45"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha" />
                                    <feOffset dy="3" />
                                    <feGaussianBlur stdDeviation="2.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                        result="effect1_dropShadow_2627_21329" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2627_21329"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={14}
                        loop={true}
                        modules={[Navigation]}
                        className="mySimSwiper"
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationSimPrevRef.current;
                            swiper.params.navigation.nextEl = navigationSimNextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                            },
                            900: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1300: {
                                slidesPerView: 4,
                                spaceBetween: 14,
                            },
                            1450: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            }
                        }}
                    >
                        {randomProjects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectSimm project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>

        <div className={`modal ${isReadMore ? 'active' : ''}`}>
            <div className="content">
                <div className="header">
                    <div>About the Cassia Estepona </div>

                    <div className="button" onClick={() => setIsReadMore(false)}>
                        Close
                    </div>
                </div>

                <div className="modaltext">
                    <div>Featuring a central park and lush green areas, this community provides an ideal environment for a balanced and tranquil way of life. Enveloped by jogging trails, cycling lanes, charming cafes and convenient retail options, Town Square Dubai caters to all your needs, creating a vibrant atmosphere filled with energy and warmth in every corner! </div>
                    <div>Featuring combination of 1, 2, and 3-bedroom apartments, these modern layouts prioritize nprivacy and comfort. Experience the warmth of an inviting lobby upon returning home and relax in the landscaped courtyard, complete with a swimming pool, expansive deck, and children’s play areas.</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}
export default ProjectView