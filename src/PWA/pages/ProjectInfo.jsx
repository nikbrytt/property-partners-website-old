import {Link, useLocation} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import "../styles/ProjectInfo.css"
import {Autoplay, Pagination} from "swiper/modules";
import React, {useEffect, useState} from "react";
import alexLogachevName from "../../assets/teams/alex-logachev-min.jpg";
import qrAlex from "../../assets/teams/qr/qr-alex.svg";
import alekseiShyianName from "../../assets/teams/aleksei-shyian-min.jpg";
import alekseiShyian from "../../assets/teams/qr/aleksei-shyian.png";
import tykhovaTatianaName from "../../assets/teams/tykhova-tatiana-min.jpg";
import tykhovaTatiana from "../../assets/teams/qr/tykhova-tatiana.png";
import kristinaSokolovskayaName from "../../assets/teams/kristina-sokolovskaya-min.jpg";
import kristinaSokolovskaya from "../../assets/teams/qr/kristina-sokolovskaya.png";
import pavelDyninName from "../../assets/teams/pavel-dynin-min.jpg";
import propertyPartnersDynin from "../../assets/teams/qr/property-partners-dynin.png";
import annaHorshunovaName from "../../assets/teams/anna-horshunova-min.jpg";
import annaHorshunova from "../../assets/teams/qr/anna-horshunova.png";
import allaGerassimovaName from "../../assets/teams/alla-gerassimova-min.jpg";
import allaGerassimova from "../../assets/teams/qr/alla-gerassimova.png";
import dmitriyKoltsovName from "../../assets/teams/dmitriy-koltsov-min.jpg";
import dmitriyKoltsov from "../../assets/teams/qr/dmitriy-koltsov.png";
import {APIProvider, ControlPosition, Map, MapControl} from "@vis.gl/react-google-maps";
import projects from "../data/response.json";
import Marker from "../../components/Marker.jsx";
import Project from "../components/Project.jsx";
const ProjectInfo = () => {
    let { state } = useLocation();
    const [mapZoom, setMapZoom] = useState(10);
    const [currnetIndex, setCurrentIndex] = useState(null)
    const project = state.project
    const [liked, setLiked] = useState([]);
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
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 8));
    const[activePayment,setActivePayment] = useState(null)
    const[activeFloor,setActiveFloor] = useState(null)
    useEffect(() => {
        if(project){
            for (const key in project.paymentPlans) {
                setActivePayment(key);
                setActiveFloor(key);
                break;
            }
        }

    }, [project]);
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const shuffledProjects = shuffleArray(projects);
    const slicedProjects = shuffledProjects.slice(0, 15);

    useEffect(() => {
        const likedData = localStorage.getItem("liked");
        const initialLiked = likedData ? JSON.parse(likedData) : [];
        setLiked(initialLiked);

        const handleStorageChange = () => {
            const updatedLikedData = localStorage.getItem("liked");
            const updatedLiked = updatedLikedData ? JSON.parse(updatedLikedData) : [];
            setLiked(updatedLiked);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const handleLikeClick = (e) => {

        const likedData = localStorage.getItem("liked");
        let updatedLiked = likedData ? JSON.parse(likedData) : [];

        const index = updatedLiked.findIndex((item) => item === project._id);

        if (index !== -1) {
            updatedLiked = updatedLiked.filter((item) => item !== project._id);
        } else {
            updatedLiked.push(project._id);
        }

        localStorage.setItem("liked", JSON.stringify(updatedLiked));
        window.dispatchEvent(new Event("storage"));
    };
    function formatNumberWithCommas(value) {
        value = (Number(value) / 3.16).toFixed(0).toString()
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function formatNumberWithCommas2(value) {
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    console.log(project)
    return(<div className={"project-info"}>
        <div className="images-container">
            <div className="images">
                <Swiper slidesPerView={1}
                        spaceBetween={50}
                        loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true} modules={[Pagination,Autoplay]}
                >
                    <SwiperSlide>
                        <img src={project.imageSrcMain}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.interiorGallery[1]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.interiorGallery[2]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.interiorGallery[3]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.interiorGallery[4]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.architectureGallery[1]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.architectureGallery[2]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.architectureGallery[3]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.architectureGallery[4]}/>
                    </SwiperSlide>
                </Swiper>
                <div className="options">
                    <div className="option">
                        <Link to={"/phone/properties"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 19" fill="none">
                            <path d="M23 10H1M1 10L8.5 1.5M1 10L8.5 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </div>
                    <div onClick={()=>{handleLikeClick()}} className="option">
                    {liked.includes(project._id)?
                        <svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.46572C9.00067 0.839279 5.65975 0.027595 3.1547 2.43263C0.649644 4.83766 0.296966 8.85871 2.2642 11.7032C3.89982 14.0681 8.84978 19.056 10.4721 20.6704C10.6536 20.8511 10.7443 20.9414 10.8502 20.9768C10.9426 21.0077 11.0437 21.0077 11.1361 20.9768C11.242 20.9414 11.3327 20.8511 11.5142 20.6704C13.1366 19.056 18.0865 14.0681 19.7221 11.7032C21.6894 8.85871 21.3797 4.81236 18.8316 2.43263C16.2835 0.0528947 12.9993 0.839279 11 3.46572Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>:
                        <svg   xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.46572C9.00067 0.839279 5.65975 0.027595 3.1547 2.43263C0.649644 4.83766 0.296966 8.85871 2.2642 11.7032C3.89982 14.0681 8.84978 19.056 10.4721 20.6704C10.6536 20.8511 10.7443 20.9414 10.8502 20.9768C10.9426 21.0077 11.0437 21.0077 11.1361 20.9768C11.242 20.9414 11.3327 20.8511 11.5142 20.6704C13.1366 19.056 18.0865 14.0681 19.7221 11.7032C21.6894 8.85871 21.3797 4.81236 18.8316 2.43263C16.2835 0.0528947 12.9993 0.839279 11 3.46572Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    }
                    </div>
                </div>
            </div>
            <div className="information">
                <div className="general">
                    <div className="name">{project.projectName}</div>
                    <div className="location">{project.selectedLocation||project.ownLocation}</div>
                </div>
                <div className="price">From <span>${formatNumberWithCommas(project.priceFrom)}</span></div>
                <div className="advantages">
                    <div className="option">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 3.5H4C3.20435 3.5 2.44129 3.81607 1.87868 4.37868C1.31607 4.94129 1 5.70435 1 6.5V19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5H6C6.16471 20.4991 6.32665 20.4576 6.47145 20.3791C6.61625 20.3006 6.73941 20.1876 6.83 20.05L8.54 17.5H15.46L17.17 20.05C17.2606 20.1876 17.3838 20.3006 17.5285 20.3791C17.6733 20.4576 17.8353 20.4991 18 20.5H22C22.2652 20.5 22.5196 20.3946 22.7071 20.2071C22.8946 20.0196 23 19.7652 23 19.5V6.5C23 5.70435 22.6839 4.94129 22.1213 4.37868C21.5587 3.81607 20.7956 3.5 20 3.5ZM21 18.5H18.54L16.83 16C16.7454 15.8531 16.6248 15.7302 16.4796 15.6428C16.3344 15.5553 16.1694 15.5062 16 15.5H8C7.83529 15.5009 7.67335 15.5424 7.52855 15.6209C7.38375 15.6994 7.26059 15.8124 7.17 15.95L5.46 18.5H3V13.5H21V18.5ZM7 11.5V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5H10C10.2652 9.5 10.5196 9.60536 10.7071 9.79289C10.8946 9.98043 11 10.2348 11 10.5V11.5H7ZM13 11.5V10.5C13 10.2348 13.1054 9.98043 13.2929 9.79289C13.4804 9.60536 13.7348 9.5 14 9.5H16C16.2652 9.5 16.5196 9.60536 16.7071 9.79289C16.8946 9.98043 17 10.2348 17 10.5V11.5H13ZM21 11.5H19V10.5C19 9.70435 18.6839 8.94129 18.1213 8.37868C17.5587 7.81607 16.7956 7.5 16 7.5H14C13.2599 7.50441 12.5476 7.78221 12 8.28C11.4524 7.78221 10.7401 7.50441 10 7.5H8C7.20435 7.5 6.44129 7.81607 5.87868 8.37868C5.31607 8.94129 5 9.70435 5 10.5V11.5H3V6.5C3 6.23478 3.10536 5.98043 3.29289 5.79289C3.48043 5.60536 3.73478 5.5 4 5.5H20C20.2652 5.5 20.5196 5.60536 20.7071 5.79289C20.8946 5.98043 21 6.23478 21 6.5V11.5Z" fill="#191C38"/>
                        </svg>
                        <span>{project.selectedBedrooms}</span> bdrm
                    </div>
                    <div className="option">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path d="M13.6875 10.9494L13.667 9.96751L14.7091 9.14344C14.7943 9.07554 14.8894 8.99838 14.9942 8.91196C15.0991 8.82554 15.1909 8.72986 15.2695 8.62492C15.3547 8.51998 15.3973 8.41504 15.3973 8.3101C15.3973 8.1743 15.3547 8.07245 15.2695 8.00455C15.1909 7.93047 15.0794 7.89344 14.9353 7.89344C14.8042 7.89344 14.696 7.9243 14.6108 7.98603C14.5322 8.04776 14.4896 8.14035 14.483 8.26381H13.6473C13.6539 7.88726 13.785 7.60331 14.0406 7.41196C14.2962 7.2206 14.6141 7.12492 14.9942 7.12492C15.3613 7.12492 15.6661 7.21751 15.9086 7.4027C16.1511 7.58788 16.2723 7.85331 16.2723 8.19899C16.2723 8.45208 16.2101 8.67122 16.0855 8.8564C15.961 9.03541 15.8103 9.20208 15.6333 9.3564C15.5284 9.44899 15.4203 9.53541 15.3088 9.61566C15.204 9.69591 15.0958 9.77924 14.9844 9.86566H16.233L16.2535 10.9494H13.6875Z" fill="#191C38"/>
                            <path d="M12.791 14.7571C12.4475 14.7571 12.163 14.7056 11.9375 14.6026C11.7174 14.4996 11.551 14.333 11.4383 14.1028C11.3309 13.8726 11.2772 13.5636 11.2772 13.1759V10.8978H9.14373V14.7571H8.20122V10.8978H7.5625V10.0158H8.20122V9.60745C8.20122 9.28078 8.24796 9.01401 8.34143 8.80712C8.4349 8.59478 8.5829 8.43962 8.78542 8.34162C8.99314 8.24362 9.25798 8.19462 9.57993 8.19462H10.1875V9.07662H9.68898C9.54878 9.07662 9.43973 9.10112 9.36183 9.15012C9.28394 9.19912 9.22682 9.27262 9.19047 9.37062C9.15931 9.46317 9.14373 9.57751 9.14373 9.71362V10.0158H11.2772V8.19442H12.2596V9.96799H13.25V10.9494H12.2596V13.0305C12.2596 13.2728 12.2972 13.4576 12.3723 13.5848C12.4475 13.7121 12.6166 13.7757 12.8796 13.7757H13.2178V14.7571H12.791Z" fill="#191C38"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63875 1C1.28598 1 1 1.28598 1 1.63875V4.73625C1 5.08902 1.28598 5.375 1.63875 5.375H3.21053V17.625H1.63875C1.28598 17.625 1 17.911 1 18.2637V21.3612C1 21.714 1.28598 22 1.63875 22H4.73625C5.08902 22 5.375 21.714 5.375 21.3612V19.7895H17.625V21.3612C17.625 21.714 17.911 22 18.2637 22H21.3612C21.714 22 22 21.714 22 21.3612V18.2637C22 17.911 21.714 17.625 21.3612 17.625L19.7895 17.5789V5.42105L21.3612 5.375C21.714 5.375 22 5.08902 22 4.73625V1.63875C22 1.28598 21.714 1 21.3612 1H18.2637C17.911 1 17.625 1.28598 17.625 1.63875V3.625H5.375V1.63875C5.375 1.28598 5.08902 1 4.73625 1H1.63875ZM4.5 17.625V5.375H4.73625C5.08902 5.375 5.375 5.08902 5.375 4.73625H17.625C17.625 5.08902 17.911 5.375 18.2637 5.375H18.5V17.625H18.2637C17.911 17.625 17.625 17.911 17.625 18.2637V18.5H5.375V18.2637C5.375 17.911 5.08902 17.625 4.73625 17.625H4.5ZM1.875 4.5V1.875H4.5V4.5H1.875ZM18.5 1.875H21.125V4.5H18.5V1.875ZM1.875 21.125V18.5H4.5V21.125H1.875ZM18.5 18.5H21.125V21.125H18.5V18.5Z" fill="#191C38"/>
                        </svg>
                        <span>{formatNumberWithCommas((project.priceFrom/project.sizeFrom).toFixed(0))}</span> USD
                    </div>
                    <div className="option">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 3V5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10ZM17.707 7.707L12 13.414L10.586 12L16.293 6.293L13 3H21V11L17.707 7.707Z" fill="#191C38"/>
                        </svg>
                        <span>{formatNumberWithCommas2(project.sizeFrom)}</span> sq.ft
                    </div>
                    <div className="option">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 12V21C22 21.2652 21.8946 21.5196 21.7071 21.7071C21.5196 21.8946 21.2652 22 21 22H20C19.7348 22 19.4804 21.8946 19.2929 21.7071C19.1054 21.5196 19 21.2652 19 21V20H5V21C5 21.2652 4.89464 21.5196 4.70711 21.7071C4.51957 21.8946 4.26522 22 4 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V12L4.48 6.212C4.63432 5.852 4.89096 5.54524 5.21805 5.32978C5.54515 5.11432 5.92832 4.99965 6.32 5H9V3H15V5H17.681C18.0723 5.00004 18.4551 5.1149 18.7818 5.33033C19.1085 5.54576 19.3648 5.85231 19.519 6.212L22 12ZM4.176 12H19.824L17.681 7H6.32L4.177 12H4.176ZM6.5 17C6.89782 17 7.27936 16.842 7.56066 16.5607C7.84196 16.2794 8 15.8978 8 15.5C8 15.1022 7.84196 14.7206 7.56066 14.4393C7.27936 14.158 6.89782 14 6.5 14C6.10218 14 5.72064 14.158 5.43934 14.4393C5.15804 14.7206 5 15.1022 5 15.5C5 15.8978 5.15804 16.2794 5.43934 16.5607C5.72064 16.842 6.10218 17 6.5 17ZM17.5 17C17.8978 17 18.2794 16.842 18.5607 16.5607C18.842 16.2794 19 15.8978 19 15.5C19 15.1022 18.842 14.7206 18.5607 14.4393C18.2794 14.158 17.8978 14 17.5 14C17.1022 14 16.7206 14.158 16.4393 14.4393C16.158 14.7206 16 15.1022 16 15.5C16 15.8978 16.158 16.2794 16.4393 16.5607C16.7206 16.842 17.1022 17 17.5 17Z" fill="#191C38"/>
                        </svg>
                        Parking
                    </div>
                </div>
            </div>
        </div>
        <div className="interior-photo">
            <div className="header">Interior photos</div>
            <div className="content">
                <Swiper slidesPerView={"auto"} spaceBetween={8}>

                    <SwiperSlide>
                        <img src={project.architectureGallery[1]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.architectureGallery[2]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.architectureGallery[3]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.architectureGallery[4]}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div className="manager">
            <div className="content">
                <div className="image">
                    <img src={team[randomNumber].image}/>
                </div>
                <div className="info">
                    <div className="main">
                        <div className="genaral">
                            <div className="position">{team[randomNumber].position}</div>
                            <div className="name">{team[randomNumber].name}</div>
                        </div>
                        <div className="desc">Off-plan properties, Investments, Mortgage</div>
                    </div>
                    <div className="buttons">
                        <div className="contact">Contact</div>
                        <div className="request">Request</div>
                    </div>

                </div>
            </div>

        </div>
        {activePayment!=null&& <div className="payment-plan">
            <div className="content">
                <div className="header">
                    <div className="tittle">
                        <div className="name">Floor plan</div>
                        <div className="price">$ {formatNumberWithCommas((Number(project.paymentPlans[activePayment].sum1)+Number(project.paymentPlans[activePayment].sum2)+Number(project.paymentPlans[activePayment].sum3)+Number(project.paymentPlans[activePayment].sum4)))}</div>

                    </div>
                    <div className="options">
                        {project.paymentPlans.Studio&& <div onClick={()=>setActivePayment("Studio")} className={`option ${activePayment==="Studio"?"active":""}`}>S</div>}
                        {project.paymentPlans["1"]&&<div onClick={()=>setActivePayment("1")} className={`option ${activePayment==="1"?"active":""}`}>1</div>}
                        {project.paymentPlans["2"]&&<div onClick={()=>setActivePayment("2")} className={`option ${activePayment==="2"?"active":""}`}>2</div>}
                        {project.paymentPlans["3"]&&<div onClick={()=>setActivePayment("3")} className={`option ${activePayment==="3"?"active":""}`}>3</div>}
                        {project.paymentPlans["4+"]&& <div onClick={()=>setActivePayment("4+")} className={`option ${activePayment==="4+"?"active":""}`}>4+</div>}
                    </div>
                </div>
                <div className="data">
                    <div className="column">
                        <div className="header">
                            Stage
                        </div>
                        <div className="data">
                            <div className="data-data">Initial Payment</div>
                            <div className="data-data">During Construction</div>
                            <div className="data-data">Upon Handover</div>
                            <div className="data-data">After Handover</div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="header">
                            Percent
                        </div>
                        <div className="data">
                            <div className="data-data">{project.paymentPlans[activePayment].percent1}%</div>
                            <div className="data-data">{project.paymentPlans[activePayment].percent2}%</div>
                            <div className="data-data">{project.paymentPlans[activePayment].percent3}%</div>
                            <div className="data-data">{project.paymentPlans[activePayment].percent4}%</div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="header">
                            Price
                        </div>
                        <div className="data">
                            <div className="data-data">${formatNumberWithCommas(project.paymentPlans[activePayment].sum1)}</div>
                            <div className="data-data">${formatNumberWithCommas(project.paymentPlans[activePayment].sum2)}</div>
                            <div className="data-data">${formatNumberWithCommas(project.paymentPlans[activePayment].sum3)}</div>
                            <div className="data-data">${formatNumberWithCommas(project.paymentPlans[activePayment].sum4)}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>}
        {activeFloor!=null&&<div className="floor-plans">
            <div className="header">
                <div className="tittle">Floor plan</div>
                <div className="options">
                    {project.plans.Studio.length>0&& <div onClick={()=>setActiveFloor("Studio")} className={`option ${activeFloor==="Studio"?"active":""}`}>S</div>}
                    {project.plans["1"].length>0&&<div onClick={()=>setActiveFloor("1")} className={`option ${activeFloor==="1"?"active":""}`}>1</div>}
                    {project.plans["2"].length>0&&<div onClick={()=>setActiveFloor("2")} className={`option ${activeFloor==="2"?"active":""}`}>2</div>}
                    {project.plans["3"].length>0&&<div onClick={()=>setActiveFloor("3")} className={`option ${activeFloor==="3"?"active":""}`}>3</div>}
                    {project.plans["4+"].length>0&& <div onClick={()=>setActiveFloor("4+")} className={`option ${activeFloor==="4+"?"active":""}`}>4+</div>}
                </div>
            </div>
            <div className="data">
                <Swiper slidesPerView={"auto"} spaceBetween={10}>
                    {
                        project.plans[activeFloor].map((plan,index)=>(
                            <SwiperSlide>
                                <div className="floor-plan-data">
                                    <div className="image"><img src={plan.imgSrc}/></div>
                                    <div className="data">
                                        <div className="price">${formatNumberWithCommas(plan.price.replace(/,/g, ''))}</div>
                                        <div className="type">{activeFloor}</div>
                                        <div className="size">{formatNumberWithCommas(plan.size)} <span>sq.ft</span></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>}
        <div className="locations">
            <div className="header">Location</div>
            <div className="data">
                <APIProvider apiKey={"AIzaSyAbaX7Vb6ERFTrWR4espV48g25lFRGGjIc"}>
                    <Map
                        zoom={10}
                        center={{
                            lat: Number(project.lat),
                            lng: Number(project.lng),
                        }}
                        mapId={"eafda8fe79279394"}
                        fullscreenControl={false}
                        disableDefaultUI={true}
                        onZoomChanged={ev => {
                            setMapZoom(ev.detail.zoom);
                            setCurrentIndex(null)
                        }}
                        onClick={event => {
                            setCurrentIndex(null)
                        }}
                    >

                        <MapControl position={ControlPosition.TOP_LEFT}>

                        </MapControl>

                            <Marker key={0}
                                    index={0}
                                    mapZoom={mapZoom}
                                    project={project}
                                    currnetIndex={currnetIndex}
                                    setCurrentIndex={setCurrentIndex}
                            />


                    </Map>
                </APIProvider>
            </div>
        </div>
        <div className="simmilar">
            <div className="header">
                Similar properties
            </div>
            <div className="content">
                {slicedProjects.map((likedProject, index) => (
                    <Project projectData={likedProject} key={index}/>
                ))}
            </div>
        </div>
        <div className="call-us">
            <div className="content" onClick={()=>window.open('tel:+971521038793')}>
                Call us now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z" fill="white"/>
                </svg>
            </div>

        </div>
    </div>)
}
export default ProjectInfo