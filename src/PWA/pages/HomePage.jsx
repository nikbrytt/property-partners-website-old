import "../styles/HomePage.scss"
import Menu from "../components/Menu.jsx";
import main1 from "../../assets/pwa/main1.png"
import main2 from "../../assets/pwa/main2.png"
import main3 from "../../assets/pwa/main3.png"
import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import Collection from "../components/Collection.jsx";
import collection1 from "../../assets/collection1.jpg";
import collection2 from "../../assets/collection2.jpg";
import collection3 from "../../assets/collection3.jpg";
import collection4 from "../../assets/collection4.jpg";
import {Autoplay, Pagination} from "swiper/modules";
import whyDubai from "../../assets/whyDubai.jpg"
import consultPoslugy from "../../assets/consult-poslugy.png"
import 'swiper/css';
import 'swiper/css/pagination';
import Offers from "../components/Offers.jsx";
import KindProjects from "../components/KindProjects.jsx";
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
import ruslanGeisha from "../../assets/teams/ruslan-geisha.png";
import {useTranslation} from "react-i18next";
import DynamicTruncatedText from "../../components/DynamicTruncatedText.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import offer2 from "../../assets/offer.png"
import offer3 from "../../assets/offer2.png"
import offer4 from "../../assets/offer3.png"
import business from "../../assets/pwa/Areas/bigAreaCard2.png"
import marina from "../../assets/pwa/Areas/bigAreaCard3.png"
import hils from "../../assets/pwa/Areas/bigAreaCard4.png"

const HomePage = ({handleMenuToggle}) => {
    const [activeBanner, setActiveBanner] = useState(1)
    const {t} = useTranslation();
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
    const [activeFocus,setActiveFocus] = useState([false,false]);
    const ref = useRef(null);
    const [visibleTeam,setVisibleTeam] = useState(2);
    const bannerData = [
        {
            img: main1,
            description: "Sobha Hartland II a waterfront lifestyle of beauty and tranquility",
            price_from: "from $447K",
            handover: "3Q 2027"
        },
        {
            img: main2,
            description: "Elegance gets redefined in the heart of the city with Samana California 2",
            price_from: "from $240K",
            handover: "4Q 2026"
        },
        {
            img: main3,
            description: "An exquisite villas from Sobha Reserve in the heart of an idyllic green nook",
            price_from: "from $240K",
            handover: "4Q 2026"
        }

    ]
    const [slidesData, setSlidesData] = useState([
        { img: collection1, name: "Golf Gate 2", developer: "by Damac Properties" },
        { img: offer2, name: "Kempinski", developer: "by Swiss Property" },
        { img: offer3, name: "The Orchard Place", developer: "by Peak Summit" },
        { img: offer4, name: "Harbour Lights", developer: "by Damac Properties" }
    ]);
    const shuffleSlides = () => {
        const shuffled = slidesData.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setSlidesData(shuffled);
    }
    useEffect(() => {
        shuffleSlides()
    }, []);
    const bedroomOptions = ["Studio", "1", "2", "3", "4", "5", "6", "7"];
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBanner(prevActiveBanner => (prevActiveBanner + 1) % bannerData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const  values =[
        {"value": "Al Barari", "label": "Al Barari"},
        {"value": "Al Barsha 1", "label": "Al Barsha 1"},
        {"value": "Al Barsha 2", "label": "Al Barsha 2"},
        {"value": "Al Barsha 3", "label": "Al Barsha 3"},
        {"value": "Al Furjan", "label": "Al Furjan"},
        {"value": "Al Habtoor City", "label": "Al Habtoor City"},
        {"value": "Al Jaddaf", "label": "Al Jaddaf"},
        {"value": "Al Khail Heights", "label": "Al Khail Heights"},
        {"value": "Al Reem Island, Abu Dhabi", "label": "Al Reem Island, Abu Dhabi"},
        {"value": "Al Sufouh 1", "label": "Al Sufouh 1"},
        {"value": "Al Sufouh 2", "label": "Al Sufouh 2"},
        {"value": "Al Wasl (City Walk)", "label": "Al Wasl (City Walk)"},
        {"value": "Arabian Ranches", "label": "Arabian Ranches"},
        {"value": "Arabian Ranches 2", "label": "Arabian Ranches 2"},
        {"value": "Arabian Ranches 3", "label": "Arabian Ranches 3"},
        {"value": "Arjan", "label": "Arjan"},
        {"value": "Barsha South", "label": "Barsha South"},
        {"value": "Bluewaters Island", "label": "Bluewaters Island"},
        {"value": "Business Bay", "label": "Business Bay"},
        {"value": "Cherrywoods", "label": "Cherrywoods"},
        {"value": "City of Arabia", "label": "City of Arabia"},
        {"value": "Complex (Dubailand)", "label": "Complex (Dubailand)"},
        {"value": "Creekside", "label": "Creekside"},
        {"value": "Culture Village", "label": "Culture Village"},
        {"value": "Damac Hills", "label": "Damac Hills"},
        {"value": "Damac Hills 2", "label": "Damac Hills 2"},
        {"value": "Damac Lagoons", "label": "Damac Lagoons"},
        {"value": "Discovery Gardens", "label": "Discovery Gardens"},
        {"value": "Downtown Dubai", "label": "Downtown Dubai"},
        {"value": "Dubai Creek Harbour", "label": "Dubai Creek Harbour"},
        {"value": "Dubai Design District", "label": "Dubai Design District"},
        {"value": "Dubai Festival City", "label": "Dubai Festival City"},
        {"value": "Dubai Golf City", "label": "Dubai Golf City"},
        {"value": "Dubai Harbour", "label": "Dubai Harbour"},
        {"value": "Dubai Healthcare City", "label": "Dubai Healthcare City"},
        {"value": "Dubai Hills", "label": "Dubai Hills"},
        {"value": "Dubai International", "label": "Dubai International"},
        {"value": "Dubai Investment Park", "label": "Dubai Investment Park"},
        {"value": "Dubai Islands", "label": "Dubai Islands"},
        {"value": "Dubai Marina", "label": "Dubai Marina"},
        {"value": "Dubai Maritime City", "label": "Dubai Maritime City"},
        {"value": "Dubai Production City", "label": "Dubai Production City"},
        {"value": "Dubai Science Park", "label": "Dubai Science Park"},
        {"value": "Dubai Silicon Oasis", "label": "Dubai Silicon Oasis"},
        {"value": "Dubai South", "label": "Dubai South"},
        {"value": "Dubai Sports City", "label": "Dubai Sports City"},
        {"value": "Dubai Studio City", "label": "Dubai Studio City"},
        {"value": "Dubai Water Canal", "label": "Dubai Water Canal"},
        {"value": "Dubai Waterfront", "label": "Dubai Waterfront"},
        {"value": "Emaar South", "label": "Emaar South"},
        {"value": "Emirates Hills", "label": "Emirates Hills"},
        {"value": "Expo City Dubai", "label": "Expo City Dubai"},
        {"value": "Financial Centre", "label": "Financial Centre"},
        {"value": "International City", "label": "International City"},
        {"value": "Jebel Ali", "label": "Jebel Ali"},
        {"value": "Jumeirah", "label": "Jumeirah"},
        {"value": "Jumeirah Beach Residence (JBR)", "label": "Jumeirah Beach Residence (JBR)"},
        {"value": "Jumeirah Golf Estates", "label": "Jumeirah Golf Estates"},
        {"value": "Jumeirah Heights", "label": "Jumeirah Heights"},
        {"value": "Jumeirah Islands", "label": "Jumeirah Islands"},
        {"value": "Jumeirah Lake Towers (JLT)", "label": "Jumeirah Lake Towers (JLT)"},
        {"value": "Jumeirah Park", "label": "Jumeirah Park"},
        {"value": "Jumeirah Village Circle (JVC)", "label": "Jumeirah Village Circle (JVC)"},
        {"value": "Jumeirah Village Triangle (JVT)", "label": "Jumeirah Village Triangle (JVT)"},
        {"value": "La Mer", "label": "La Mer"},
        {"value": "Liwan", "label": "Liwan"},
        {"value": "Madina Jumeirah Living", "label": "Madina Jumeirah Living"},
        {"value": "Mina Al Arab, Ras Al Khaimah", "label": "Mina Al Arab, Ras Al Khaimah"},
        {"value": "Mina Rashid", "label": "Mina Rashid"},
        {"value": "Mirdif Hills", "label": "Mirdif Hills"},
        {"value": "Mirdif Tulip", "label": "Mirdif Tulip"},
        {"value": "Mohammed Bin Rashid City (MBR)", "label": "Mohammed Bin Rashid City (MBR)"},
        {"value": "Motor City", "label": "Motor City"},
        {"value": "Mudon", "label": "Mudon"},
        {"value": "Nad Al Sheba", "label": "Nad Al Sheba"},
        {"value": "Nshama", "label": "Nshama"},
        {"value": "Old Town", "label": "Old Town"},
        {"value": "Oman", "label": "Oman"},
        {"value": "Park Gate Residences", "label": "Park Gate Residences"},
        {"value": "Palm Jumeirah", "label": "Palm Jumeirah"},
        {"value": "Ras Al Khor", "label": "Ras Al Khor"},
        {"value": "Remraam", "label": "Remraam"},
        {"value": "Rashid Yachts and Marina", "label": "Rashid Yachts and Marina"},
        {"value": "Sharjah", "label": "Sharjah"},
        {"value": "Sheikh Zayed Road", "label": "Sheikh Zayed Road"},
        {"value": "The Greens", "label": "The Greens"},
        {"value": "The Lakes", "label": "The Lakes"},
        {"value": "The Meadows", "label": "The Meadows"},
        {"value": "The Springs", "label": "The Springs"},
        {"value": "The Sustainable City", "label": "The Sustainable City"},
        {"value": "The Valley", "label": "The Valley"},
        {"value": "The Villa", "label": "The Villa"},
        {"value": "The World Islands", "label": "The World Islands"},
        {"value": "Tilal Al Ghaf", "label": "Tilal Al Ghaf"},
        {"value": "Town Square", "label": "Town Square"},
        {"value": "Villanova", "label": "Villanova"},
        {"value": "Wadi Al Safa 5", "label": "Wadi Al Safa 5"},
        {"value": "YAS Island", "label": "YAS Island"}
    ];
    const sizeData = [
        {value:300,label:"300"},
        {value:600,label:"600"},
        {value:900,label:"900"},
        {value:1300,label:"1300"},
        {value:1700,label:"1700"},
        {value:2200,label:"2200"},
        {value:2600,label:"2600"},
        {value:3300,label:"3300"},
        {value:5000,label:"5000"},
    ]
    const priceData = [
        {value:150000,label:"150K"},
        {value:250000,label:"250K"},
        {value:500000,label:"500K"},
        {value:1000000,label:"1M"},
        {value:5000000,label:"5M"},
    ]
    const [filterDataProjects, setFilterDataProjects] = useState({
        search: "",
        priceValues: { from: "", to: "" },
        sizeValues: { from: "", to: "" },
        bedrooms: [],
        location: [],
        completion: [],
        propertyType: []
    })

    const handlePriceFromChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            priceValues: {
                ...prevState.priceValues,
                from: value
            }
        }));
    }

    const handlePriceToChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            priceValues: {
                ...prevState.priceValues,
                to: value
            }
        }));
    }
    const handleSizeFromChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            sizeValues: {
                ...prevState.sizeValues,
                from: value
            }
        }));
    }

    const handleSizeToChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            sizeValues: {
                ...prevState.sizeValues,
                to: value
            }
        }));
    }
    const handleItemChange = (propertyName, selectedItem) => {
        setFilterDataProjects(prevState => {
            const existingItems = prevState[propertyName];

            const itemExists = existingItems.includes(selectedItem);

            const updatedItems = itemExists
                ? existingItems.filter(item => item !== selectedItem)
                : [...existingItems, selectedItem];

            return {
                ...prevState,
                [propertyName]: updatedItems
            };
        });
    }
    const [filterVisible,setFilterVisible] = useState(null)
    const typeOptions = [t("Plots"), t("Town-house"), t("Villa"), t("Apartments")]

    const completionOptions =[t("ready"), t("any"),t("Off-plan")]
    const handleSearchChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            search: value
        }));
    }
    return (<div className={"phone-home"}>
        <div className="main-banner" style={{
            backgroundImage: `url(${bannerData[activeBanner].img}), linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.33) 25.9%, rgba(0, 0, 0, 0.70) 63.4%, rgba(0, 0, 0, 0.70) 100%)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "lightgray",
            backgroundBlendMode: "multiply"
        }}>
            <Menu handleMenuToggle={handleMenuToggle}/>
            <div className="suggested-projects">
                <div className="description">{bannerData[activeBanner].description}</div>
                <div className="data">
                    <div className="option">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path
                                d="M4.5 4.5H31.5C31.8978 4.5 32.2794 4.65804 32.5607 4.93934C32.842 5.22064 33 5.60218 33 6V30C33 30.3978 32.842 30.7794 32.5607 31.0607C32.2794 31.342 31.8978 31.5 31.5 31.5H4.5C4.10218 31.5 3.72064 31.342 3.43934 31.0607C3.15804 30.7794 3 30.3978 3 30V6C3 5.60218 3.15804 5.22064 3.43934 4.93934C3.72064 4.65804 4.10218 4.5 4.5 4.5V4.5ZM12.75 21V24H16.5V27H19.5V24H21C21.9946 24 22.9484 23.6049 23.6517 22.9017C24.3549 22.1984 24.75 21.2446 24.75 20.25C24.75 19.2554 24.3549 18.3016 23.6517 17.5983C22.9484 16.8951 21.9946 16.5 21 16.5H15C14.8011 16.5 14.6103 16.421 14.4697 16.2803C14.329 16.1397 14.25 15.9489 14.25 15.75C14.25 15.5511 14.329 15.3603 14.4697 15.2197C14.6103 15.079 14.8011 15 15 15H23.25V12H19.5V9H16.5V12H15C14.0054 12 13.0516 12.3951 12.3483 13.0983C11.6451 13.8016 11.25 14.7554 11.25 15.75C11.25 16.7446 11.6451 17.6984 12.3483 18.4017C13.0516 19.1049 14.0054 19.5 15 19.5H21C21.1989 19.5 21.3897 19.579 21.5303 19.7197C21.671 19.8603 21.75 20.0511 21.75 20.25C21.75 20.4489 21.671 20.6397 21.5303 20.7803C21.3897 20.921 21.1989 21 21 21H12.75Z"
                                fill="white"/>
                        </svg>
                        {bannerData[activeBanner].price_from}
                    </div>
                    <div className="option">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path
                                d="M31.83 18C32.5767 17.1785 32.9934 16.1101 33 15C33 13.8065 32.5259 12.6619 31.682 11.818C30.8381 10.9741 29.6935 10.5 28.5 10.5H20.73C20.9696 9.82227 21.0434 9.09699 20.9451 8.38489C20.8469 7.67279 20.5794 6.99459 20.1652 6.40707C19.751 5.81956 19.2021 5.33982 18.5644 5.00802C17.9267 4.67622 17.2188 4.50202 16.5 4.5H7.5C6.30653 4.5 5.16193 4.97411 4.31802 5.81802C3.47411 6.66193 3 7.80653 3 9C3.00662 10.1101 3.42332 11.1785 4.17 12C3.43207 12.825 3.0241 13.8931 3.0241 15C3.0241 16.1069 3.43207 17.175 4.17 18C3.43207 18.825 3.0241 19.8931 3.0241 21C3.0241 22.1069 3.43207 23.175 4.17 24C3.42332 24.8215 3.00662 25.8899 3 27C3 28.1935 3.47411 29.3381 4.31802 30.182C5.16193 31.0259 6.30653 31.5 7.5 31.5H28.5C29.3666 31.4954 30.2135 31.2406 30.9388 30.7663C31.6642 30.2919 32.2371 29.6182 32.5888 28.8262C32.9405 28.0341 33.056 27.1573 32.9213 26.3011C32.7867 25.445 32.4078 24.646 31.83 24C32.5679 23.175 32.9759 22.1069 32.9759 21C32.9759 19.8931 32.5679 18.825 31.83 18ZM16.5 28.5H7.5C7.10218 28.5 6.72064 28.342 6.43934 28.0607C6.15804 27.7794 6 27.3978 6 27C6 26.6022 6.15804 26.2206 6.43934 25.9393C6.72064 25.658 7.10218 25.5 7.5 25.5H16.5C16.8978 25.5 17.2794 25.658 17.5607 25.9393C17.842 26.2206 18 26.6022 18 27C18 27.3978 17.842 27.7794 17.5607 28.0607C17.2794 28.342 16.8978 28.5 16.5 28.5ZM16.5 22.5H7.5C7.10218 22.5 6.72064 22.342 6.43934 22.0607C6.15804 21.7794 6 21.3978 6 21C6 20.6022 6.15804 20.2206 6.43934 19.9393C6.72064 19.658 7.10218 19.5 7.5 19.5H16.5C16.8978 19.5 17.2794 19.658 17.5607 19.9393C17.842 20.2206 18 20.6022 18 21C18 21.3978 17.842 21.7794 17.5607 22.0607C17.2794 22.342 16.8978 22.5 16.5 22.5ZM16.5 16.5H7.5C7.10218 16.5 6.72064 16.342 6.43934 16.0607C6.15804 15.7794 6 15.3978 6 15C6 14.6022 6.15804 14.2206 6.43934 13.9393C6.72064 13.658 7.10218 13.5 7.5 13.5H16.5C16.8978 13.5 17.2794 13.658 17.5607 13.9393C17.842 14.2206 18 14.6022 18 15C18 15.3978 17.842 15.7794 17.5607 16.0607C17.2794 16.342 16.8978 16.5 16.5 16.5ZM16.5 10.5H7.5C7.10218 10.5 6.72064 10.342 6.43934 10.0607C6.15804 9.77936 6 9.39782 6 9C6 8.60218 6.15804 8.22064 6.43934 7.93934C6.72064 7.65804 7.10218 7.5 7.5 7.5H16.5C16.8978 7.5 17.2794 7.65804 17.5607 7.93934C17.842 8.22064 18 8.60218 18 9C18 9.39782 17.842 9.77936 17.5607 10.0607C17.2794 10.342 16.8978 10.5 16.5 10.5ZM29.535 28.065C29.402 28.2052 29.2414 28.3163 29.0632 28.3912C28.885 28.4661 28.6932 28.5031 28.5 28.5H20.73C21.0897 27.5323 21.0897 26.4677 20.73 25.5H28.5C28.8978 25.5 29.2794 25.658 29.5607 25.9393C29.842 26.2206 30 26.6022 30 27C29.9972 27.1995 29.9547 27.3965 29.8748 27.5794C29.795 27.7622 29.6795 27.9273 29.535 28.065V28.065ZM29.535 22.065C29.402 22.2052 29.2414 22.3163 29.0632 22.3912C28.885 22.4661 28.6932 22.5031 28.5 22.5H20.73C21.0897 21.5323 21.0897 20.4677 20.73 19.5H28.5C28.8978 19.5 29.2794 19.658 29.5607 19.9393C29.842 20.2206 30 20.6022 30 21C29.9972 21.1995 29.9547 21.3965 29.8748 21.5794C29.795 21.7622 29.6795 21.9273 29.535 22.065V22.065ZM29.535 16.065C29.402 16.2052 29.2414 16.3163 29.0632 16.3912C28.885 16.4661 28.6932 16.5031 28.5 16.5H20.73C21.0897 15.5323 21.0897 14.4677 20.73 13.5H28.5C28.8978 13.5 29.2794 13.658 29.5607 13.9393C29.842 14.2206 30 14.6022 30 15C29.9972 15.1995 29.9547 15.3965 29.8748 15.5794C29.795 15.7622 29.6795 15.9273 29.535 16.065V16.065Z"
                                fill="white"/>
                        </svg>
                        {bannerData[activeBanner].handover}
                    </div>
                </div>
            </div>
            <div className="filter">
                <div className="tittle">Find Property</div>
                <div className="filter-form">
                    <div className="row">
                        <div className="input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                 fill="none">
                                <path
                                    d="M12.0208 11.5782L14.8762 14.4328L13.9328 15.3762L11.0782 12.5208C10.016 13.3723 8.69483 13.8354 7.3335 13.8335C4.0215 13.8335 1.3335 11.1455 1.3335 7.8335C1.3335 4.5215 4.0215 1.8335 7.3335 1.8335C10.6455 1.8335 13.3335 4.5215 13.3335 7.8335C13.3354 9.19483 12.8723 10.516 12.0208 11.5782ZM10.6835 11.0835C11.5296 10.2134 12.0021 9.04712 12.0002 7.8335C12.0002 5.25483 9.9115 3.16683 7.3335 3.16683C4.75483 3.16683 2.66683 5.25483 2.66683 7.8335C2.66683 10.4115 4.75483 12.5002 7.3335 12.5002C8.54712 12.5021 9.71342 12.0296 10.5835 11.1835L10.6835 11.0835Z"
                                    fill="white"/>
                            </svg>
                            <input value={filterDataProjects.search} onChange={(e)=>handleSearchChange(e.target.value)} type="text" placeholder={"Project name"}/>
                        </div>
                    </div>
                    <div className="multi-row">
                        <div  className={`dropdown`}>
                            <div onClick={()=>{
                                if(filterVisible===0){
                                    setFilterVisible(null)
                                }
                                else {
                                    setFilterVisible(0)
                                }
                            }} className={`container ${filterVisible === 0?"active":""}`}>
                                {filterDataProjects.priceValues.from||"Price from"}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path d="M8 10.6665L4 6.6665H12L8 10.6665Z" fill="white"/>
                                </svg>
                            </div>
                            {filterVisible===0&&   <div className="menu">
                                {priceData.map((data,index)=>(
                                    <div onClick={()=>handlePriceFromChange(data.value)} className={`option ${filterDataProjects.priceValues.from===data.value?"active":""}`}>
                                        {data.label}
                                    </div>

                                ))}

                            </div>}
                        </div>
                        <div className={`dropdown`}>
                            <div onClick={()=>{
                                if(filterVisible===1){
                                    setFilterVisible(null)
                                }
                                else {
                                    setFilterVisible(1)
                                }
                            }} className={`container ${filterVisible === 1?"active":""}`}>
                                {filterDataProjects.priceValues.to||"Price to"}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path d="M8 10.6665L4 6.6665H12L8 10.6665Z" fill="white"/>
                                </svg>
                            </div>
                            {filterVisible === 1&&   <div className="menu">
                                {priceData.map((data,index)=>(
                                    <div onClick={()=>handlePriceToChange(data.value)} className={`option ${filterDataProjects.priceValues.to===data.value?"active":""}`}>
                                        {data.label}
                                    </div>

                                ))}

                            </div>}
                        </div>
                    </div>
                    <div className="multi-row">
                        <div className={`dropdown`}>
                            <div onClick={()=>{
                                if(filterVisible===2){
                                    setFilterVisible(null)
                                }
                                else {
                                    setFilterVisible(2)
                                }
                            }} className={`container ${filterVisible === 2?"active":""}`}>
                                {filterDataProjects.sizeValues.from||"Size from"}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path d="M8 10.6665L4 6.6665H12L8 10.6665Z" fill="white"/>
                                </svg>
                            </div>
                            {filterVisible === 2&&   <div className="menu">
                                {sizeData.map((data,index)=>(
                                    <div onClick={()=>handleSizeFromChange(data.value)} className={`option ${filterDataProjects.sizeValues.from===data.value?"active":""}`}>
                                        {data.label}
                                    </div>

                                ))}

                            </div>}
                        </div>
                        <div className={`dropdown`}>
                            <div onClick={()=>{
                                if(filterVisible===3){
                                    setFilterVisible(null)
                                }
                                else {
                                    setFilterVisible(3)
                                }
                            }} className={`container ${filterVisible === 3?"active":""}`}>
                                {filterDataProjects.sizeValues.to||"Size to"}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path d="M8 10.6665L4 6.6665H12L8 10.6665Z" fill="white"/>
                                </svg>
                            </div>
                            {filterVisible === 3&&   <div className="menu">
                                {sizeData.map((data,index)=>(
                                    <div onClick={()=>handleSizeToChange(data.value)} className={`option ${filterDataProjects.sizeValues.to===data.value?"active":""}`}>
                                        {data.label}
                                    </div>

                                ))}

                            </div>}
                        </div>
                    </div>
                    <div className="multi-row">
                        <div className={`dropdown`}>
                            <div onClick={()=>{
                                if(filterVisible===4){
                                    setFilterVisible(null)
                                }
                                else {
                                    setFilterVisible(4)
                                }
                            }} className={`container ${filterVisible === 4?"active":""}`}>
                                Bedrooms
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path d="M8 10.6665L4 6.6665H12L8 10.6665Z" fill="white"/>
                                </svg>
                            </div>
                            {filterVisible === 4&& <div className="menu">
                                {bedroomOptions.map((option,index)=>(
                                    <div onClick={()=>handleItemChange("bedrooms",option)} className={`option ${filterDataProjects.bedrooms.includes(option)?"active":""}`}>
                                        {filterDataProjects.bedrooms.includes(option)?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#C29773"/>
                                            </svg>:
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#B6B6B6" stroke-width="1.5"/>
                                            </svg>
                                        }
                                        {option}</div>

                                ))}
                            </div>}
                        </div>
                        <div className={`dropdown`}>
                            <div onClick={()=>{
                                if(filterVisible===5){
                                    setFilterVisible(null)
                                }
                                else {
                                    setFilterVisible(5)
                                }
                            }} className={`container ${filterVisible === 5?"active":""}`}>
                                Location
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path d="M8 10.6665L4 6.6665H12L8 10.6665Z" fill="white"/>
                                </svg>
                            </div>
                            {filterVisible === 5&&   <div className="menu">
                                {values.map((option,index)=>(
                                    <div onClick={()=>handleItemChange("location",option.label)} className={`option ${filterDataProjects.location.includes(option.label)?"active":""}`}>
                                        {filterDataProjects.location.includes(option.value)?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#C29773"/>
                                            </svg>:
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#B6B6B6" stroke-width="1.5"/>
                                            </svg>
                                        }
                                        {option.value.length > 10 ? option.value.slice(0, 10) + '...' : option.value}</div>

                                ))}
                            </div>}
                        </div>
                    </div>
                    <div className="multi-row">
                        <div className={`dropdown`}>
                            <div onClick={()=>{
                                if(filterVisible===6){
                                    setFilterVisible(null)
                                }
                                else {
                                    setFilterVisible(6)
                                }
                            }} className={`container ${filterVisible === 6?"active":""}`}>
                                Completion
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path d="M8 10.6665L4 6.6665H12L8 10.6665Z" fill="white"/>
                                </svg>
                            </div>
                            {filterVisible === 6&&  <div className="menu">
                                {completionOptions.map((option,index)=>(
                                    <div onClick={()=>handleItemChange("completion",option)} className={`option ${filterDataProjects.completion.includes(option)?"active":""}`}>
                                        {filterDataProjects.completion.includes(option)?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#C29773"/>
                                            </svg>:
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#B6B6B6" stroke-width="1.5"/>
                                            </svg>
                                        }
                                        {option}</div>

                                ))}
                            </div>}
                        </div>
                        <div className={`dropdown`}>
                            <div onClick={()=>{
                                if(filterVisible===7){
                                    setFilterVisible(null)
                                }
                                else {
                                    setFilterVisible(7)
                                }
                            }}  className={`container ${filterVisible === 7?"active":""}`}>
                                Property type
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path d="M8 10.6665L4 6.6665H12L8 10.6665Z" fill="white"/>
                                </svg>
                            </div>
                            {filterVisible === 7&&  <div className="menu">
                                {typeOptions.map((option,index)=>(
                                    <div onClick={()=>handleItemChange("propertyType",option)} className={`option ${filterDataProjects.propertyType.includes(option)?"active":""}`}>
                                        {filterDataProjects.propertyType.includes(option)?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#C29773"/>
                                            </svg>:
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#B6B6B6" stroke-width="1.5"/>
                                            </svg>
                                        }
                                        {option}</div>

                                ))}
                            </div>}
                        </div>
                    </div>
                    <Link to="/phone/projects" state={{ filter: filterDataProjects }} ><div className="button">
                        Find
                    </div></Link>

                </div>
            </div>
        </div>
        <div className="collections">
            <div className="header">
                <div className="tittle">Special collection</div>
                <Link to={"/phone/properties"}> <div className="option">See more</div></Link>
            </div>
            <div className="collection-data">

                <Swiper slidesPerView={"auto"}
                        spaceBetween={10}

                >
                    <SwiperSlide>
                        <Collection img={collection1} type={"For rent"} projects={"4"} price={"$190,000"} pdf={'https://propart-pdfs.s3.me-south-1.amazonaws.com/TOP+5+rental.pdf'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Collection img={collection2} type={"For families"} projects={"13"} price={"$170,000"} pdf={'https://propart-pdfs.s3.me-south-1.amazonaws.com/%D0%A2%D0%BE%D0%BF+5+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D1%96%D0%B2+%D0%B4%D0%BB%D1%8F+%D1%81%D1%96%D0%BC%D0%B5%D0%B9.pdf'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Collection img={collection3} type={"Selection of villas"} projects={"5"} price={"$2,100,000"} pdf={'https://propart-pdfs.s3.me-south-1.amazonaws.com/Top+5+projects.pdf'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Collection img={collection4} type={"For resale"} projects={"6"} price={"$150,000"} pdf={'https://propart-pdfs.s3.me-south-1.amazonaws.com/PROPERTIES+FOR+RESALE.pdf'}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div className="why-dubai">
            <div className="main">
                <img src={whyDubai}/>
                <div className="prompt">Why Dubai?</div>
                <Link to={"/phone/areas"}><div className="see-more">See more</div></Link>
            </div>
            <div className="information">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_3225_3146)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M5.44941 4.44391C5.44413 4.44849 5.43886 4.45307 5.43359 4.45766L5.44941 4.44391Z"
                                  fill="#C29773"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M12 22C6.477 22 2 17.523 2 12C2 9.11374 3.22266 6.51315 5.17832 4.68788L8.82367 8.29404C8.60791 8.40908 8.40829 8.55617 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13H13.5808L13.9881 13.403L14.3955 13.8059C14.3826 13.8226 14.3686 13.8385 14.3536 13.8536C14.2598 13.9473 14.1326 14 14 14H8.5V16H11V18H13V16H14C14.663 16 15.2989 15.7366 15.7678 15.2678C15.7853 15.2503 15.8025 15.2325 15.8194 15.2146L19.3855 18.7423C17.5569 20.7442 14.9251 22 12 22ZM14.495 13.4293C14.4798 13.3228 14.4305 13.2234 14.3536 13.1464C14.2758 13.0687 14.1751 13.0192 14.0674 13.0046L14.495 13.4293ZM19.5997 18.5L16.0321 14.9562C16.3344 14.5343 16.5 14.0257 16.5 13.5C16.5 12.837 16.2366 12.2011 15.7678 11.7322C15.2989 11.2634 14.663 11 14 11H12.0494L11.0427 10H15.5V8H13V6H11V8H10C9.71513 8 9.43528 8.04862 9.17153 8.14126L5.44941 4.44391C7.20409 2.92142 9.49441 2 12 2C17.523 2 22 6.477 22 12C22 14.4816 21.0962 16.752 19.5997 18.5ZM10.5482 10H10C9.86739 10 9.74021 10.0527 9.64645 10.1464C9.55268 10.2402 9.5 10.3674 9.5 10.5C9.5 10.6326 9.55268 10.7598 9.64645 10.8536C9.74021 10.9473 9.86739 11 10 11H11.559L10.5482 10Z"
                                  fill="#C29773"/>
                            <path
                                d="M9.17153 8.14126L5.44941 4.44391L5.43359 4.45766C5.34719 4.53296 5.26208 4.60971 5.17832 4.68788L8.82367 8.29404C8.93562 8.23434 9.05192 8.18327 9.17153 8.14126Z"
                                fill="#C29773"/>
                            <path d="M12.0494 11L11.0427 10H10.5482L11.559 11H12.0494Z" fill="#C29773"/>
                            <path
                                d="M14.495 13.4293L14.0674 13.0046C14.0452 13.0015 14.0227 13 14 13H13.5808L13.9881 13.403L14.3955 13.8059C14.4629 13.7188 14.5 13.6113 14.5 13.5C14.5 13.4762 14.4983 13.4526 14.495 13.4293Z"
                                fill="#C29773"/>
                            <path
                                d="M19.3855 18.7423C19.4581 18.6627 19.5296 18.5819 19.5997 18.5L16.0321 14.9562C15.9674 15.0465 15.8964 15.1329 15.8194 15.2146L19.3855 18.7423Z"
                                fill="#C29773"/>
                            <path d="M3 3L21.5 21.5" stroke="white" stroke-width="3"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_3225_3146">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="tittle">No taxes</div>
                <div className="desc">No income or property taxes, enticing tax benefits</div>
            </div>
            <div className="information">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 10.111V1L21 7V21H3V7L10 10.111Z" fill="#C29773"/>
                    </svg>
                </div>
                <div className="tittle">Raising properties</div>
                <div className="desc">Real estate is 50% of Dubai's GDP</div>
            </div>
            <div className="information">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM8.5 14V16H11V18H13V16H14C14.663 16 15.2989 15.7366 15.7678 15.2678C16.2366 14.7989 16.5 14.163 16.5 13.5C16.5 12.837 16.2366 12.2011 15.7678 11.7322C15.2989 11.2634 14.663 11 14 11H10C9.86739 11 9.74021 10.9473 9.64645 10.8536C9.55268 10.7598 9.5 10.6326 9.5 10.5C9.5 10.3674 9.55268 10.2402 9.64645 10.1464C9.74021 10.0527 9.86739 10 10 10H15.5V8H13V6H11V8H10C9.33696 8 8.70107 8.26339 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13H14C14.1326 13 14.2598 13.0527 14.3536 13.1464C14.4473 13.2402 14.5 13.3674 14.5 13.5C14.5 13.6326 14.4473 13.7598 14.3536 13.8536C14.2598 13.9473 14.1326 14 14 14H8.5Z" fill="#C29773"/>
                    </svg>
                </div>
                <div className="tittle">Dynamic market</div>
                <div className="desc">60-65K annual projects, 3-4% growth</div>
            </div>
            <div className="information">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2V3H20V5H13V19H17V21H7V19H11V5H4V3H11V2H13ZM5 6.343L7.828 9.172C8.552 9.895 9 10.895 9 12C9 14.21 7.21 16 5 16C2.79 16 1 14.21 1 12C1 10.895 1.448 9.895 2.172 9.172L5 6.343ZM19 6.343L21.828 9.172C22.552 9.895 23 10.895 23 12C23 14.21 21.21 16 19 16C16.79 16 15 14.21 15 12C15 10.895 15.448 9.895 16.172 9.172L19 6.343ZM19 9.172L17.586 10.586C17.212 10.96 17 11.46 17 12L21 12.001C21 11.461 20.788 10.96 20.414 10.586L19 9.172ZM5 9.172L3.586 10.586C3.212 10.96 3 11.46 3 12L7 12.001C7 11.461 6.788 10.96 6.414 10.586L5 9.172Z" fill="#C29773"/>
                    </svg>
                </div>
                <div className="tittle">Stability</div>
                <div className="desc">Recent years saw a 20-25% surge in property prices</div>
            </div>

        </div>
        <div className="offers">
            <div className="header">
                <div className="tittle">Offers</div>
                <Link to={"/phone/properties"}><div className="see-more">See more</div></Link>
            </div>
            <div className="offer-content">
                <Swiper slidesPerView={1}
                        spaceBetween={50}
                        pagination={true} modules={[Pagination]}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Offers img={slide.img} name={slide.name} developer={slide.developer} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        <div className="kind-projects">
            <div className="prompt">
                What kind of projects we can tailor to the client
            </div>
            <div className="content">
                <Swiper slidesPerView={1}
                        spaceBetween={50}
                        pagination={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop
                        modules={[Pagination, Autoplay]}
                >

                    <SwiperSlide>
                        <KindProjects tittle={"Primary real estate"}
                                      text={"Our partners are Dubai's largest real estate developers, which will allow you to get insider information on new projects."}/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <KindProjects tittle={"Secondary real estate"}
                                      text={"In Dubai, the secondary real estate market is also developed, where we can help you find a project that suits your preferences."}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <KindProjects tittle={"Rentals"}
                                      text={"Whether you're searching for a property or visiting Dubai for tourism or business, Property Partners will find the best long-term and short-term rental offers for you."}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <KindProjects tittle={"Commercial real estate"}
                                      text={"Our specialists have Dubai commercial real estate database. We assist in processing business documents and finding the right property for your company."}/>
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>
        <div className="areas">
            <div className="prompt">
                Areas in Dubai
            </div>
            <div className="content">
                <div className="area">
                    <img src={marina}/>
                    <div className="info">
                        <div className="name">Dubai Marina</div>
                        <div className="price">Price from 600,000 AED</div>
                    </div>
                </div>
                <div className="area">
                    <img src={hils}/>
                    <div className="info">
                        <div className="name">Dubai Hills</div>
                        <div className="price">Price from 860,000 AED</div>
                    </div>
                </div>
                <div className="area">
                    <img src={business}/>
                    <div className="info">
                        <div className="name">Business Bay</div>
                        <div className="price">Price from 410,000 AED</div>
                    </div>
                </div>
            </div>
           <Link to={"/phone/areas"}> <div className="see-more">See more

            </div></Link>
        </div>

        <div className="soc-block">
            <div className="title">
                <div className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <rect width="42" height="42" rx="21" fill="#191C38"/>
                        <path
                            d="M20.4875 31H11V11.2051C11.028 11.0751 11.1319 11.01 11.3115 11.01C17.4891 11.0024 23.6672 10.9991 29.8458 11.0002C29.8867 11.0002 29.9259 11.0175 29.9548 11.0482C29.9838 11.079 30 11.1207 30 11.1641V20.8378C30 20.9482 29.9476 21.0034 29.8427 21.0034L20.5888 20.9886C20.5306 20.9886 20.5016 21.0192 20.5016 21.0804L20.4875 31ZM18.3197 18.7903C18.3197 18.7791 18.3218 18.768 18.3258 18.7577C18.3299 18.7473 18.3359 18.7379 18.3434 18.73C18.3509 18.7221 18.3598 18.7158 18.3697 18.7115C18.3795 18.7072 18.39 18.705 18.4007 18.705H27.7387C27.7602 18.705 27.7808 18.6961 27.796 18.6801C27.8111 18.6641 27.8197 18.6424 27.8197 18.6198V13.3805C27.8197 13.3579 27.8111 13.3362 27.796 13.3202C27.7808 13.3042 27.7602 13.2953 27.7387 13.2953H13.2613C13.2398 13.2953 13.2192 13.3042 13.204 13.3202C13.1889 13.3362 13.1803 13.3579 13.1803 13.3805V28.6197C13.1803 28.6423 13.1889 28.664 13.204 28.68C13.2192 28.696 13.2398 28.7049 13.2613 28.7049H18.2387C18.2602 28.7049 18.2808 28.696 18.296 28.68C18.3111 28.664 18.3197 28.6423 18.3197 28.6197V18.7903Z"
                            fill="#C29773"/>
                        <path
                            d="M29.991 31H22.0181L22 23.2355C22 23.0795 22.0779 23.0015 22.2338 23.0015L29.9532 23C29.9656 23 29.9775 23.0049 29.9863 23.0137C29.9951 23.0225 30 23.0344 30 23.0468L29.991 31ZM27.8899 25.2012C27.8899 25.1775 27.8805 25.1549 27.8638 25.1382C27.8471 25.1215 27.8245 25.1121 27.8009 25.1121H24.2081C24.1845 25.1121 24.1619 25.1215 24.1452 25.1382C24.1285 25.1549 24.1192 25.1775 24.1192 25.2012V28.7973C24.1192 28.8209 24.1285 28.8436 24.1452 28.8603C24.1619 28.877 24.1845 28.8864 24.2081 28.8864H27.8009C27.8245 28.8864 27.8471 28.877 27.8638 28.8603C27.8805 28.8436 27.8899 28.8209 27.8899 28.7973V25.2012Z"
                            fill="#C29773"/>
                    </svg>
                    <div className="names">
                        <div>pro.part.uae</div>
                        <div className='place'>Dubai, United Arabian Emirates</div>
                        <div>1 day ago</div>
                    </div>
                </div>
                <a href='https://www.instagram.com/pro.part.ae?igsh=dzIzYjkycW5wdHMz' className="follow">
                    follow
                </a>
            </div>

            <div className="image">
                <img src={consultPoslugy} alt=""/>
            </div>

            <div className="follow-on-instagram">
                <a href='https://www.instagram.com/pro.part.ae?igsh=dzIzYjkycW5wdHMz' className="button">
                    Follow on Instagram
                </a>
            </div>
        </div>
        <div className="offers">
            <div className="header">
                <div className="tittle">Offers</div>
                <Link to={"/phone/properties"}>
                    <div className="see-more">See more</div>
                </Link>
            </div>
            <div className="offer-content">
                <Swiper slidesPerView={1}
                        spaceBetween={50}
                        pagination={true} modules={[Pagination]}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Offers img={slide.img} name={slide.name} developer={slide.developer}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        <div className="consulting">
            <div className="prompt">
                <div className="tittle">Consulting</div>
                <div className="description">What consulting services we provide?</div>
            </div>
            <div className="content">
                <Swiper slidesPerView={1} spaceBetween={50} pagination={true} autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                        loop
                        modules={[Pagination, Autoplay]}>
                    <SwiperSlide>
                        <div className="consult-slide">
                            <div className="option">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13 12V7H11V14H17V12H13Z"
                                        fill="#C29773"/>
                                </svg>
                                <div className="tittle">Investor visa for 10 years or more</div>
                                <div className="description">Obtaining an Investor Visa with Long-Term Duration</div>
                            </div>
                            <div className="option">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                     fill="none">
                                    <path
                                        d="M20.5 2C20.7652 2 21.0196 2.10536 21.2071 2.29289C21.3946 2.48043 21.5 2.73478 21.5 3V21C21.5 21.2652 21.3946 21.5196 21.2071 21.7071C21.0196 21.8946 20.7652 22 20.5 22H4.5C4.23478 22 3.98043 21.8946 3.79289 21.7071C3.60536 21.5196 3.5 21.2652 3.5 21V3C3.5 2.73478 3.60536 2.48043 3.79289 2.29289C3.98043 2.10536 4.23478 2 4.5 2H20.5ZM16.5 16H8.5V18H16.5V16ZM12.5 6C11.4391 6 10.4217 6.42143 9.67157 7.17157C8.92143 7.92172 8.5 8.93913 8.5 10C8.5 11.0609 8.92143 12.0783 9.67157 12.8284C10.4217 13.5786 11.4391 14 12.5 14C13.5609 14 14.5783 13.5786 15.3284 12.8284C16.0786 12.0783 16.5 11.0609 16.5 10C16.5 8.93913 16.0786 7.92172 15.3284 7.17157C14.5783 6.42143 13.5609 6 12.5 6ZM12.5 8C13.0304 8 13.5391 8.21071 13.9142 8.58579C14.2893 8.96086 14.5 9.46957 14.5 10C14.5 10.5304 14.2893 11.0391 13.9142 11.4142C13.5391 11.7893 13.0304 12 12.5 12C11.9696 12 11.4609 11.7893 11.0858 11.4142C10.7107 11.0391 10.5 10.5304 10.5 10C10.5 9.46957 10.7107 8.96086 11.0858 8.58579C11.4609 8.21071 11.9696 8 12.5 8Z"
                                        fill="#C29773"/>
                                </svg>
                                <div className="tittle">Issuance of UAE resident visa</div>
                                <div className="description">Acquiring a UAE Resident Visa for Employees</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="consult-slide">
                            <div className="option">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13 12V7H11V14H17V12H13Z"
                                        fill="#C29773"/>
                                </svg>
                                <div className="tittle">Registration of a local company (LLC)</div>
                                <div className="description">A proper business registration in the UAE</div>
                            </div>
                            <div className="option">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                     fill="none">
                                    <path
                                        d="M20.5 2C20.7652 2 21.0196 2.10536 21.2071 2.29289C21.3946 2.48043 21.5 2.73478 21.5 3V21C21.5 21.2652 21.3946 21.5196 21.2071 21.7071C21.0196 21.8946 20.7652 22 20.5 22H4.5C4.23478 22 3.98043 21.8946 3.79289 21.7071C3.60536 21.5196 3.5 21.2652 3.5 21V3C3.5 2.73478 3.60536 2.48043 3.79289 2.29289C3.98043 2.10536 4.23478 2 4.5 2H20.5ZM16.5 16H8.5V18H16.5V16ZM12.5 6C11.4391 6 10.4217 6.42143 9.67157 7.17157C8.92143 7.92172 8.5 8.93913 8.5 10C8.5 11.0609 8.92143 12.0783 9.67157 12.8284C10.4217 13.5786 11.4391 14 12.5 14C13.5609 14 14.5783 13.5786 15.3284 12.8284C16.0786 12.0783 16.5 11.0609 16.5 10C16.5 8.93913 16.0786 7.92172 15.3284 7.17157C14.5783 6.42143 13.5609 6 12.5 6ZM12.5 8C13.0304 8 13.5391 8.21071 13.9142 8.58579C14.2893 8.96086 14.5 9.46957 14.5 10C14.5 10.5304 14.2893 11.0391 13.9142 11.4142C13.5391 11.7893 13.0304 12 12.5 12C11.9696 12 11.4609 11.7893 11.0858 11.4142C10.7107 11.0391 10.5 10.5304 10.5 10C10.5 9.46957 10.7107 8.96086 11.0858 8.58579C11.4609 8.21071 11.9696 8 12.5 8Z"
                                        fill="#C29773"/>
                                </svg>
                                <div className="tittle">Registration of a company in a free economic zone</div>
                                <div className="description">Get a formal way of staying after property purchase</div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
        <div className="about-us">
            <div className="prompt">
                <div className="tittle">About us </div>
                <div className="description">The main qualities of ProPart, in helping you</div>
            </div>
            <div className="content">
                <div className="data">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                        <path
                            d="M18.8334 0.75L25.1724 10.0245L35.9529 13.188L29.0904 22.083L29.4129 33.312L18.8334 29.535L8.25387 33.312L8.57637 22.083L1.71387 13.188L12.4944 10.0245L18.8334 0.75ZM15.8334 18H12.8334C12.8333 19.5653 13.4451 21.0687 14.538 22.1893C15.6309 23.3099 17.1185 23.9591 18.6833 23.9982C20.2482 24.0374 21.7663 23.4634 22.9139 22.3988C24.0615 21.3343 24.7476 19.8634 24.8259 18.3L24.8334 18H21.8334C21.8368 18.7785 21.5376 19.5278 20.9988 20.0897C20.46 20.6516 19.7239 20.9821 18.946 21.0113C18.168 21.0405 17.4092 20.7662 16.8298 20.2463C16.2504 19.7263 15.8958 19.0015 15.8409 18.225L15.8334 18Z"
                            fill="#C29773"/>
                    </svg>
                    15 years experience
                </div>
                <div className="data">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                        <path d="M23.3362 23.2621L20.0167 30.2371C19.9539 30.369 19.8599 30.4836 19.7429 30.5711C19.6259 30.6585 19.4894 30.7162 19.3451 30.7391C19.2009 30.7619 19.0532 30.7494 18.9149 30.7024C18.7766 30.6555 18.6517 30.5756 18.5512 30.4696L13.2382 24.8611C13.0963 24.7114 12.9072 24.615 12.7027 24.5881L5.0422 23.5861C4.89747 23.567 4.75955 23.513 4.64033 23.4288C4.52112 23.3445 4.42419 23.2326 4.3579 23.1025C4.29161 22.9724 4.25796 22.8282 4.25984 22.6822C4.26172 22.5362 4.29908 22.3929 4.3687 22.2646L8.0617 15.4786C8.15988 15.2971 8.19271 15.0874 8.1547 14.8846L6.7402 7.29011C6.71334 7.14636 6.72192 6.99823 6.76518 6.85854C6.80844 6.71885 6.88509 6.5918 6.9885 6.4884C7.0919 6.38499 7.21895 6.30834 7.35864 6.26508C7.49833 6.22182 7.64646 6.21324 7.7902 6.2401L15.3847 7.65461C15.5875 7.69261 15.7972 7.65978 15.9787 7.5616L22.7647 3.86861C22.8931 3.79897 23.0366 3.76164 23.1826 3.75983C23.3287 3.75803 23.473 3.79182 23.6031 3.85827C23.7332 3.92472 23.8452 4.02184 23.9293 4.14124C24.0135 4.26065 24.0673 4.39874 24.0862 4.54361L25.0882 12.2026C25.1151 12.4071 25.2115 12.5962 25.3612 12.7381L30.9697 18.0511C31.0757 18.1516 31.1556 18.2765 31.2025 18.4148C31.2495 18.5531 31.262 18.7008 31.2392 18.845C31.2163 18.9893 31.1586 19.1258 31.0712 19.2428C30.9837 19.3598 30.8691 19.4538 30.7372 19.5166L23.7622 22.8361C23.5755 22.925 23.425 23.0754 23.3362 23.2621ZM24.5317 26.1526L26.6527 24.0316L33.0172 30.3946L30.8947 32.5171L24.5317 26.1526Z" fill="#C29773"/>
                    </svg>
                    Individual approach
                </div>
                <div className="data">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                        <path d="M19.667 31.5V34.5H16.667V31.5H4.66699C4.26917 31.5 3.88764 31.342 3.60633 31.0607C3.32503 30.7794 3.16699 30.3978 3.16699 30V9H33.167V30C33.167 30.3978 33.009 30.7794 32.7277 31.0607C32.4463 31.342 32.0648 31.5 31.667 31.5H19.667ZM12.167 15C11.277 15 10.4069 15.2639 9.66693 15.7584C8.9269 16.2529 8.35013 16.9557 8.00953 17.7779C7.66894 18.6002 7.57983 19.505 7.75346 20.3779C7.92709 21.2508 8.35568 22.0526 8.98501 22.682C9.61435 23.3113 10.4162 23.7399 11.2891 23.9135C12.162 24.0872 13.0668 23.9981 13.8891 23.6575C14.7113 23.3169 15.4141 22.7401 15.9086 22.0001C16.4031 21.26 16.667 20.39 16.667 19.5H12.167V15ZM19.667 15V18H28.667V15H19.667ZM19.667 21V24H28.667V21H19.667ZM3.16699 4.5H33.167V7.5H3.16699V4.5Z" fill="#C29773"/>
                    </svg>
                    Unique <br/>Data
                </div>
                <div className="data">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                        <path d="M22.0152 15.72C21.7339 15.4388 21.3524 15.2809 20.9547 15.2809C20.5569 15.2809 20.1755 15.4388 19.8942 15.72L18.8337 16.779C18.5569 17.0656 18.2259 17.2941 17.8599 17.4513C17.4939 17.6086 17.1002 17.6913 16.7019 17.6948C16.3035 17.6983 15.9085 17.6224 15.5398 17.4715C15.1711 17.3207 14.8362 17.0979 14.5545 16.8162C14.2728 16.5346 14.0501 16.1996 13.8992 15.8309C13.7484 15.4622 13.6725 15.0672 13.6759 14.6688C13.6794 14.2705 13.7621 13.8768 13.9194 13.5108C14.0766 13.1448 14.3051 12.8138 14.5917 12.537L23.0367 4.08904C25.0361 3.63428 27.1279 3.82144 29.0148 4.62391C30.9017 5.42637 32.4876 6.80329 33.547 8.55888C34.6064 10.3145 35.0853 12.3594 34.9157 14.4028C34.746 16.4462 33.9365 18.3842 32.6022 19.941L29.4402 23.1435L22.0152 15.7185V15.72ZM5.57518 6.70204C7.12732 5.15011 9.15751 4.16701 11.3375 3.91169C13.5175 3.65637 15.7199 4.14376 17.5887 5.29504L12.4692 10.416C11.3604 11.5226 10.7283 13.019 10.7081 14.5854C10.6878 16.1518 11.281 17.664 12.3608 18.7988C13.4407 19.9337 14.9215 20.6013 16.487 20.6589C18.0525 20.7165 19.5784 20.1595 20.7387 19.107L20.9547 18.9015L27.3192 25.2645L20.9547 31.629C20.3921 32.1915 19.6292 32.5074 18.8337 32.5074C18.0382 32.5074 17.2753 32.1915 16.7127 31.629L5.57368 20.49C3.74538 18.6616 2.71826 16.1818 2.71826 13.596C2.71826 11.0103 3.74538 8.5305 5.57368 6.70204H5.57518Z" fill="#C29773"/>
                    </svg>
                    Assistance in processing
                </div>
                <div className="data">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                        <path d="M21.5 30.0001V33.0001H3.5V30.0001H21.5ZM22.379 1.02905L34.046 12.6961L31.925 14.8201L30.335 14.2891L26.6195 18.0001L35.105 26.4856L32.984 28.6066L24.5 20.1211L20.894 23.7271L21.3185 25.4251L19.196 27.5461L7.529 15.8791L9.6515 13.7581L11.3465 14.1811L20.7875 4.74155L20.258 3.15155L22.379 1.02905Z" fill="#C29773"/>
                    </svg>
                    Legal counseling
                </div>
                <div className="data">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                        <path d="M18.167 21V33H6.16699C6.16699 29.8174 7.43127 26.7652 9.68171 24.5147C11.9321 22.2643 14.9844 21 18.167 21ZM27.167 32.25L22.7585 34.5675L23.6 29.6595L20.0345 26.1825L24.9635 25.4655L27.167 21L29.372 25.4655L34.2995 26.1825L30.734 29.6595L31.574 34.5675L27.167 32.25ZM18.167 19.5C13.1945 19.5 9.16699 15.4725 9.16699 10.5C9.16699 5.5275 13.1945 1.5 18.167 1.5C23.1395 1.5 27.167 5.5275 27.167 10.5C27.167 15.4725 23.1395 19.5 18.167 19.5Z" fill="#C29773"/>
                    </svg>
                    Personalized service
                </div>
            </div>
        </div>
        <div className="team">
            <div className="prompt">
                <div className="tittle">Our team</div>
                <div onClick={()=>setVisibleTeam(9)} className="see-more">See more</div>
            </div>
            <div className="content">
                {team.slice(0,visibleTeam).map((team,index)=>(
                    <Link to="/phone/member" state={{ member: team,from:"/phone" }} >  <div className={"member"}>
                        <div className="image-container">
                            <img src={team.image}/>
                        </div>
                        <div className="information">

                            <div className="name"> <DynamicTruncatedText text={team.name} customBreakpoints={{
                                600: 15,
                            }}/></div>
                            <div className="position"><DynamicTruncatedText text={team.position} customBreakpoints={{
                                600: 15,
                            }}/></div>
                        </div>
                    </div></Link>
                ))}
            </div>
        </div>
        <div className="get-in-touch">
            <div className="prompt">
                <div className="tittle">Get in touch with us!</div>
                <div className="description">Text your phone number, our real estate expert will contact you within 5 minutes.</div>
            </div>
            <div className="content">
                <div className={`input ${activeFocus[0]?"active":""}`}>
                    <input
                             type="text"
                             placeholder={"Name"}
                             onFocus={() => setActiveFocus([true,false])}
                             onBlur={() => setActiveFocus([false,false])}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z"
                            fill="#CACACA"
                        />
                    </svg>
                </div>
                <div  className={`input ${activeFocus[1]?"active":""}`} >
                    <input
                        type="text"
                        placeholder={"Phone number"}
                        onFocus={() => setActiveFocus([false,true])}
                        onBlur={() => setActiveFocus([false,false])}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                            fill="#CACACA"
                        />
                    </svg>
                </div>
                <div className="send">
                    Send
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10.0002 15.172L19.1922 5.979L20.6072 7.393L10.0002 18L3.63623 11.636L5.05023 10.222L10.0002 15.172Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
        <Footer active={"Home"}/>
    </div>)
}
export default HomePage