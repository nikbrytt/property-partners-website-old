import Header from "../components/Header.jsx";
import Feedback from "../components/Feedback.jsx";
import "../styles/projectCard.scss"
import anna from "../assets/teams/anna-horshunova-min.jpg"
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FloorPlan from "../components/FloorPlan.jsx";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import ProjectSimilar from "../components/ProjectSimilar.jsx";
import Footer from "../components/Footer.jsx";
import { Link, useParams } from "react-router-dom";
import Marker from "../components/Marker.jsx";
import axios from "axios";
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
import i18next from "i18next";
import * as i18n from "i18next";

const ProjectCard = () => {
    const { id } = useParams();
    const [showImages, setShowImages] = useState(false);
    const [project, setProject] = useState(null);
    const [randomProjects, setRandomProjects] = useState(null);
    const [activePlan, setActivePlan] = useState(0)
    const [activeFloorPlan, setActiveFloorPlan] = useState(0)
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

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    };

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://157.175.196.127:8080/api/projects/${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setProject(response.data)
                for (const key in response.data.paymentPlans) {
                    setActivePlan(key);
                    setActiveFloorPlan(key);
                    break;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const [currnetIndex, setCurrentIndex] = useState(null)
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://157.175.196.127:8080/api/projects/random',
            headers: {}
        };

        axios
            .request(config)
            .then((response) => {
                if (response.data) {
                    setRandomProjects(response.data);
                } else {
                    console.error('Response data is null or undefined');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const closeModal = () => {
        setShowModal(false);
    };

    function formatNumberWithCommas(value) {
        value = (Number(value) / 3.16).toFixed(0).toString()
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const navigationPrevRef = React.useRef(null)
    const navigationPrevRefSimilar = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const navigationNextRefSimilar = React.useRef(null)

    const handlePlanClick = (index) => {
        setActivePlan(index);
    };
    const handleFloorPlanClick = (index) => {
        setActiveFloorPlan(index);
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


    const handleTranslate = async () => {
        try {
            const response = await axios.post('https://libretranslate.com/translate', {
                q: "Hello world",
                source: 'auto',
                target: "ru",
                format: 'text',
            });

            console.log(response.data.translatedText);
        } catch (error) {
            console.error('Translation error:', error);
        }
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

    return (<div className={"project-card"}>
        <Header />
        <Feedback />
        <RequestModal showModal={showModal} closeModal={closeModal} modalText={modalText}
            image={team[randomNumber].image} />
        <div className="content">
            <div className="navigation">
                <Link to={"/real-estate"}>
                    <div className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 13V20L4 12L12 4V11H20V13H12Z" fill="white" />
                        </svg>
                        {t("r_but")}
                    </div>
                </Link>
                <div className="link" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M13.5762 17.2706L8.4662 14.4836C7.97569 14.9705 7.35201 15.3013 6.67379 15.4342C5.99557 15.5672 5.29316 15.4964 4.65513 15.2307C4.01709 14.9651 3.47199 14.5164 3.08855 13.9414C2.70511 13.3664 2.50049 12.6908 2.50049 11.9996C2.50049 11.3085 2.70511 10.6328 3.08855 10.0578C3.47199 9.4828 4.01709 9.03419 4.65513 8.76852C5.29316 8.50286 5.99557 8.43204 6.67379 8.56499C7.35201 8.69795 7.97569 9.02873 8.4662 9.51562L13.5762 6.72862C13.4009 5.90636 13.5275 5.04848 13.9328 4.31188C14.3381 3.57527 14.9949 3.00915 15.7833 2.71706C16.5717 2.42496 17.4388 2.4264 18.2262 2.72111C19.0136 3.01582 19.6686 3.58411 20.0714 4.32206C20.4742 5.06001 20.598 5.9183 20.42 6.73998C20.242 7.56165 19.7742 8.29181 19.1021 8.79692C18.43 9.30204 17.5986 9.54835 16.7598 9.49082C15.9211 9.43329 15.131 9.07577 14.5342 8.48362L9.4242 11.2706C9.52613 11.7513 9.52613 12.248 9.4242 12.7286L14.5342 15.5156C15.131 14.9235 15.9211 14.566 16.7598 14.5084C17.5986 14.4509 18.43 14.6972 19.1021 15.2023C19.7742 15.7074 20.242 16.4376 20.42 17.2593C20.598 18.0809 20.4742 18.9392 20.0714 19.6772C19.6686 20.4151 19.0136 20.9834 18.2262 21.2781C17.4388 21.5728 16.5717 21.5743 15.7833 21.2822C14.9949 20.9901 14.3381 20.424 13.9328 19.6874C13.5275 18.9508 13.4009 18.0929 13.5762 17.2706Z"
                            fill="white" />
                    </svg>
                </div>
            </div>
            <div className="images-container">

                <div className="main-image"><img src={project.imageSrcMain} /></div>
                <div className="more">
                    <div className="button" onClick={() => setShowImages(true)}>
                        <div onClick={() => {
                            setModalText({ tittleText: t("modalHeader1"), buttonText: t("modalButton") })
                            setShowModal(true)
                        }
                        }> {t("r_but1")}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M13.1722 11.9997L8.22217 7.04974L9.63617 5.63574L16.0002 11.9997L9.63617 18.3637L8.22217 16.9497L13.1722 11.9997Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
                <div className={"images"}><img src={project.interiorGallery[1]} /></div>
                <div className={"images"}><img src={project.interiorGallery[2]} /></div>
                <div className={"images"}><img src={project.architectureGallery[1]} /></div>
                <div className={"images"}><img src={project.architectureGallery[2]} /></div>


            </div>
            <div className="images-container-phone">
                <Swiper
                    slidesPerView={1} style={{ zIndex: -999 }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide><img src={project.imageSrcMain} /></SwiperSlide>
                    <SwiperSlide><img src={project.interiorGallery[1]} /></SwiperSlide>
                    <SwiperSlide><img src={project.interiorGallery[2]} /></SwiperSlide>
                    <SwiperSlide><img src={project.architectureGallery[1]} /></SwiperSlide>
                    <SwiperSlide><img src={project.architectureGallery[2]} /></SwiperSlide>
                </Swiper>
            </div>

            <div className="project-information">
                <div className="general-information">
                    <div className="name-block">
                        <div>{project.projectName}</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <g clip-path="url(#clip0_317_448)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.25 9C8.25 11.0715 9.92925 12.75 12 12.75C14.0708 12.75 15.75 11.0715 15.75 9C15.75 6.9285 14.0708 5.25 12 5.25C9.92925 5.25 8.25 6.9285 8.25 9ZM3 9C3 4.02975 7.02975 0 12 0C16.9703 0 21 4.02975 21 9C21 12.7125 13.473 24.0083 12 24C10.5037 24.0083 3 12.7635 3 9Z"
                                        fill="#C29773" />
                                    <circle cx="12" cy="9" r="2" fill="#C29773" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_317_448">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {project.selectedLocation || project.ownLocation}
                        </div>
                    </div>
                    <div className="price-block">
                        <div><span>{t("r_pay2")}</span> ${formatNumberWithCommas(project.priceFrom)}</div>
                        <div>{t("r_pay2")} {(Number(project.priceFrom) / 3.16 / Number(project.sizeFrom)).toFixed(0)} for m²
                        </div>
                    </div>
                </div>
                <div className="additional-information">
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path
                                d="M12 14.5V22.5H4C4 20.3783 4.84285 18.3434 6.34315 16.8431C7.84344 15.3429 9.87827 14.5 12 14.5ZM18 22L15.061 23.545L15.622 20.273L13.245 17.955L16.531 17.477L18 14.5L19.47 17.477L22.755 17.955L20.378 20.273L20.938 23.545L18 22ZM12 13.5C8.685 13.5 6 10.815 6 7.5C6 4.185 8.685 1.5 12 1.5C15.315 1.5 18 4.185 18 7.5C18 10.815 15.315 13.5 12 13.5Z"
                                fill="#09121F" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type1")}</div>
                            <div>{project.developer}</div>
                        </div>
                    </div>
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path
                                d="M3.6665 21.5C3.40129 21.5 3.14693 21.3946 2.9594 21.2071C2.77186 21.0196 2.6665 20.7652 2.6665 20.5V4.5C2.6665 4.23478 2.77186 3.98043 2.9594 3.79289C3.14693 3.60536 3.40129 3.5 3.6665 3.5H11.0805L13.0805 5.5H20.6665C20.9317 5.5 21.1861 5.60536 21.3736 5.79289C21.5611 5.98043 21.6665 6.23478 21.6665 6.5V9.5H4.6665V19.496L6.6665 11.5H23.1665L20.8565 20.743C20.8023 20.9592 20.6775 21.1512 20.5017 21.2883C20.326 21.4255 20.1094 21.5 19.8865 21.5H3.6665Z"
                                fill="#09121F" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type2")}</div>
                            <div>{project.selectedStatus}</div>
                        </div>
                    </div>
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <rect width="24" height="24" transform="translate(0.333496 0.5)" fill="white" />
                            <path
                                d="M12.3335 4.5H17.7335H19.5335H21.2085C21.2775 4.5 21.3335 4.55596 21.3335 4.625V12.375C21.3335 12.444 21.2775 12.5 21.2085 12.5H17.4585C17.3895 12.5 17.3335 12.556 17.3335 12.625V17.375C17.3335 17.444 17.2775 17.5 17.2085 17.5H12.3335M12.3335 4.5H3.4585C3.38946 4.5 3.3335 4.55717 3.3335 4.6262C3.3335 8.05683 3.3335 9.79039 3.3335 12.5M12.3335 4.5V7.04822C12.3335 7.08138 12.3467 7.11317 12.3701 7.13661L14.5835 9.35M8.7335 12.5H12.2085C12.2775 12.5 12.3335 12.556 12.3335 12.625V17.5M3.3335 12.5C3.3335 15.2096 3.3335 16.9432 3.3335 20.3738C3.3335 20.4428 3.38946 20.5 3.4585 20.5H5.1335H6.9335M3.3335 12.5H5.08172C5.11487 12.5 5.14667 12.4868 5.17011 12.4634L6.9335 10.7M8.7335 20.5H12.2085C12.2775 20.5 12.3335 20.444 12.3335 20.375V17.5"
                                stroke="#191C38" stroke-width="2" stroke-linejoin="bevel" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type3")}</div>
                            <div>{project.selectedProperty}</div>
                        </div>
                    </div>
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <rect width="24" height="24" transform="translate(0 0.5)" fill="white" />
                            <path
                                d="M4 19.5C4 20.0523 4.44772 20.5 5 20.5C5.55228 20.5 6 20.0523 6 19.5H4ZM4 2.5V19.5H6V2.5H4Z"
                                fill="black" />
                            <path d="M20 19.5L5 19.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M8 5.5L5 2.5L2 5.5" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M19 22.5L22 19.5L19 16.5" stroke="black" stroke-width="1.5" stroke-linecap="square"
                                stroke-linejoin="round" />
                            <path d="M10.5 5H19.5V13.5" stroke="black" stroke-width="2" stroke-linecap="square"
                                stroke-linejoin="round" />
                            <path d="M19 5.5L5 19.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M13.5 5L5 13.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M19.5 10.5L11 19" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type4")}</div>
                            <div>{project.selectedMonth}Q 20{project.selectedYear}</div>
                        </div>
                    </div>
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path
                                d="M20.6665 20.4999C20.6665 20.7651 20.5611 21.0195 20.3736 21.207C20.1861 21.3946 19.9317 21.4999 19.6665 21.4999H5.6665C5.40129 21.4999 5.14693 21.3946 4.9594 21.207C4.77186 21.0195 4.6665 20.7651 4.6665 20.4999V11.4999H1.6665L11.9935 2.11192C12.1776 1.9444 12.4176 1.85156 12.6665 1.85156C12.9154 1.85156 13.1554 1.9444 13.3395 2.11192L23.6665 11.4999H20.6665V20.4999Z"
                                fill="#09121F" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type5")}</div>
                            <div>1</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="project-information-phone">
                <div className="general-information">
                    <div className="name-block">
                        <div>{project.projectName}</div>
                        <div className={"name-block-2"}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <g clip-path="url(#clip0_317_448)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.25 9C8.25 11.0715 9.92925 12.75 12 12.75C14.0708 12.75 15.75 11.0715 15.75 9C15.75 6.9285 14.0708 5.25 12 5.25C9.92925 5.25 8.25 6.9285 8.25 9ZM3 9C3 4.02975 7.02975 0 12 0C16.9703 0 21 4.02975 21 9C21 12.7125 13.473 24.0083 12 24C10.5037 24.0083 3 12.7635 3 9Z"
                                            fill="#C29773" />
                                        <circle cx="12" cy="9" r="2" fill="#C29773" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_317_448">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {project.selectedLocation || project.ownLocation}
                            </div>
                            <div className="price-block">
                                <div>$ {formatNumberWithCommas(project.priceFrom)}</div>
                                <div>{t("r_pay2")} {(Number(project.priceFrom) / Number(project.sizeFrom)).toFixed(0)} for
                                    m²
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="additional-information">
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path
                                d="M12 14.5V22.5H4C4 20.3783 4.84285 18.3434 6.34315 16.8431C7.84344 15.3429 9.87827 14.5 12 14.5ZM18 22L15.061 23.545L15.622 20.273L13.245 17.955L16.531 17.477L18 14.5L19.47 17.477L22.755 17.955L20.378 20.273L20.938 23.545L18 22ZM12 13.5C8.685 13.5 6 10.815 6 7.5C6 4.185 8.685 1.5 12 1.5C15.315 1.5 18 4.185 18 7.5C18 10.815 15.315 13.5 12 13.5Z"
                                fill="#09121F" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type1")}</div>
                            <div>{project.developer}</div>
                        </div>
                    </div>
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path
                                d="M3.6665 21.5C3.40129 21.5 3.14693 21.3946 2.9594 21.2071C2.77186 21.0196 2.6665 20.7652 2.6665 20.5V4.5C2.6665 4.23478 2.77186 3.98043 2.9594 3.79289C3.14693 3.60536 3.40129 3.5 3.6665 3.5H11.0805L13.0805 5.5H20.6665C20.9317 5.5 21.1861 5.60536 21.3736 5.79289C21.5611 5.98043 21.6665 6.23478 21.6665 6.5V9.5H4.6665V19.496L6.6665 11.5H23.1665L20.8565 20.743C20.8023 20.9592 20.6775 21.1512 20.5017 21.2883C20.326 21.4255 20.1094 21.5 19.8865 21.5H3.6665Z"
                                fill="#09121F" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type2")}</div>
                            <div>{project.selectedStatus}</div>
                        </div>
                    </div>
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <rect width="24" height="24" transform="translate(0.333496 0.5)" fill="white" />
                            <path
                                d="M12.3335 4.5H17.7335H19.5335H21.2085C21.2775 4.5 21.3335 4.55596 21.3335 4.625V12.375C21.3335 12.444 21.2775 12.5 21.2085 12.5H17.4585C17.3895 12.5 17.3335 12.556 17.3335 12.625V17.375C17.3335 17.444 17.2775 17.5 17.2085 17.5H12.3335M12.3335 4.5H3.4585C3.38946 4.5 3.3335 4.55717 3.3335 4.6262C3.3335 8.05683 3.3335 9.79039 3.3335 12.5M12.3335 4.5V7.04822C12.3335 7.08138 12.3467 7.11317 12.3701 7.13661L14.5835 9.35M8.7335 12.5H12.2085C12.2775 12.5 12.3335 12.556 12.3335 12.625V17.5M3.3335 12.5C3.3335 15.2096 3.3335 16.9432 3.3335 20.3738C3.3335 20.4428 3.38946 20.5 3.4585 20.5H5.1335H6.9335M3.3335 12.5H5.08172C5.11487 12.5 5.14667 12.4868 5.17011 12.4634L6.9335 10.7M8.7335 20.5H12.2085C12.2775 20.5 12.3335 20.444 12.3335 20.375V17.5"
                                stroke="#191C38" stroke-width="2" stroke-linejoin="bevel" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type3")}</div>
                            <div>{project.selectedProperty}</div>
                        </div>
                    </div>
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <rect width="24" height="24" transform="translate(0 0.5)" fill="white" />
                            <path
                                d="M4 19.5C4 20.0523 4.44772 20.5 5 20.5C5.55228 20.5 6 20.0523 6 19.5H4ZM4 2.5V19.5H6V2.5H4Z"
                                fill="black" />
                            <path d="M20 19.5L5 19.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M8 5.5L5 2.5L2 5.5" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M19 22.5L22 19.5L19 16.5" stroke="black" stroke-width="1.5" stroke-linecap="square"
                                stroke-linejoin="round" />
                            <path d="M10.5 5H19.5V13.5" stroke="black" stroke-width="2" stroke-linecap="square"
                                stroke-linejoin="round" />
                            <path d="M19 5.5L5 19.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M13.5 5L5 13.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M19.5 10.5L11 19" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type4")}</div>
                            <div>{project.selectedMonth}Q 20{project.selectedYear}</div>
                        </div>
                    </div>
                    <div className="additional-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path
                                d="M20.6665 20.4999C20.6665 20.7651 20.5611 21.0195 20.3736 21.207C20.1861 21.3946 19.9317 21.4999 19.6665 21.4999H5.6665C5.40129 21.4999 5.14693 21.3946 4.9594 21.207C4.77186 21.0195 4.6665 20.7651 4.6665 20.4999V11.4999H1.6665L11.9935 2.11192C12.1776 1.9444 12.4176 1.85156 12.6665 1.85156C12.9154 1.85156 13.1554 1.9444 13.3395 2.11192L23.6665 11.4999H20.6665V20.4999Z"
                                fill="#09121F" />
                        </svg>
                        <div className="info">
                            <div>{t("r_block_type5")}</div>
                            <div>1</div>
                        </div>
                    </div>

                </div>
            </div>

            {/*<div className="project-description">*/}
            {/*    <div className="header">{t("projectInfo")}</div>*/}
            {/*    <div className="about-project"*/}
            {/*         dangerouslySetInnerHTML={{*/}
            {/*             __html: project.description*/}
            {/*         }}*/}
            {/*    />*/}

            {/*</div>*/}

            <div className="manager-plan-wrapper">
                <div className="manager-view">
                    <div className="image-container">
                        <img src={team[randomNumber].image} />
                    </div>
                    <div className="broker-info">
                        <div className="general-info">
                            <div>{team[randomNumber].position}</div>
                            <div>{team[randomNumber].name}</div>
                        </div>
                        <div className="additional-info">
                            {t("r_req2")}
                        </div>
                        <div className="buttons-container">
                            <div className="button" onClick={() => window.open("tel:+971521038793")}>{t("r_req3")}</div>
                            <div className="button" onClick={() => {
                                setModalText({ tittleText: t("modalHeader"), buttonText: t("modalButton") })
                                setShowModal(true)
                            }
                            }>{t("r_req4")}</div>
                        </div>
                    </div>
                </div>

                <div className="payment-plan">
                    <div className="plan-header">
                        <div>{t("r_pay1")}</div>
                        <div><span>{t("r_pay2")}</span> ${formattedTotalSum}</div>
                    </div>
                    <div className="plan-type">
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
                                1
                            </div>}
                        {project.paymentPlans["2"] &&
                            <div
                                className={activePlan === "2" ? 'active' : ''}
                                onClick={() => handlePlanClick("2")}
                            >
                                2
                            </div>}
                        {project.paymentPlans["3"] &&
                            <div
                                className={activePlan === "3" ? 'active' : ''}
                                onClick={() => handlePlanClick("3")}
                            >
                            3
                            </div>}
                        {project.paymentPlans["4+"] &&
                            <div
                                className={activePlan === "4+" ? 'active' : ''}
                                onClick={() => handlePlanClick("4+")}
                            >
                                4+
                            </div>}
                    </div>
                    <div className="plan-content">
                        <div className="column">
                            <div className="header">{t("r_pay3")}</div>
                            <div className="values">
                                <div className="value">{t("r_pay3")}</div>
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
                                1
                            </div>}
                        {project.plans["2"].length != 0 &&
                            <div
                                className={`floor-type ${activeFloorPlan === "2" ? 'active' : ''}`}
                                onClick={() => handleFloorPlanClick("2")}
                            >
                                2
                            </div>}
                        {project.plans["3"].length != 0 &&
                            <div
                                className={`floor-type ${activeFloorPlan === "3" ? 'active' : ''}`}
                                onClick={() => handleFloorPlanClick("3")}
                            >
                                3
                            </div>}
                        {project.plans["4+"].length != 0 &&
                            <div
                                className={`floor-type ${activeFloorPlan === "4+" ? 'active' : ''}`}
                                onClick={() => handleFloorPlanClick("4+")}
                            >
                                4+
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
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },

                            900: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1450: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                            1400: {
                                slidesPerView: 3,
                                spaceBetween: 50,
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
            <div className="location">
                <div className="header">{t("r_loc")}</div>
                <div className="map-container">
                    <div className="map">
                        <APIProvider apiKey={"AIzaSyAbaX7Vb6ERFTrWR4espV48g25lFRGGjIc"}>
                            <Map
                                zoom={16}
                                center={{ lat: Number(project.lat), lng: Number(project.lng) }}
                                gestureHandling={"greedy"}
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
                                        <div style={{ display: mapZoom < 13 ? "none" : "block", background: "#C29773" }}
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
            <div className="simillar">
                <div className="header">
                    <div className="tittle">{t("r_sim")}</div>
                    <div className="arrows">
                        <div ref={navigationPrevRefSimilar} className="left-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M10.828 12.0002L15.778 16.9502L14.364 18.3642L8 12.0002L14.364 5.63623L15.778 7.05023L10.828 12.0002Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div ref={navigationNextRefSimilar} className="right-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M13.1722 12.0002L8.22217 7.05023L9.63617 5.63623L16.0002 12.0002L9.63617 18.3642L8.22217 16.9502L13.1722 12.0002Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="simillar-content">
                    <Swiper className={"swiper-simillar"}
                        modules={[Pagination, Navigation]}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRefSimilar.current;
                            swiper.params.navigation.nextEl = navigationNextRefSimilar.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        spaceBetween={50}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            // when window width is >= 480px
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },

                            // when window width is >= 1024px
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1400: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1450: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            }
                        }}
                    >
                        {randomProjects.map((project, index) => (
                            <SwiperSlide key={index} style={{ height: "100%", background: "white" }}>
                                <ProjectSimilar project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="warning">
                All information provided on this website, including but not limited to prices and property sizes, is sourced from publicly available platforms such as Property Finder, Bayut, among others. We do not claim ownership of any rights to the information presented here.
            </div>
        </div>

        <Footer />
    </div>)
}
export default ProjectCard