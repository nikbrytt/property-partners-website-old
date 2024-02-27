import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Pages/trademark.scss"
import accountaingBaner from "../assets/trm.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import GetConsult from "../components/GetConsult"
import alarm from "../assets/alarm.png";


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
import {Helmet} from "react-helmet";

function TradeMark() {
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
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState({
        tittleText: "Our expert will reach you out",
        buttonText: "Get a free consultation"
    });
    const closeModal = () => {
        setShowModal(false);
    };

    const RegisteringCard = ({ count, title, description, days }) => {
        return (
            <div className="registering-card">
                <Helmet>
                    <title>Seamless Business Setup and Trademark Registration in the UAE - Your Gateway to Success</title>
                    <meta name="description" content="Establish and protect your business in the UAE effortlessly with our comprehensive suite of services. From turnkey business setup to trademark registration, we offer expert guidance at every step. Our specialized trademark registration services ensure the protection of your brand identity. Discover the process, required documents, and interesting facts about the UAE. Choose us for timely filings, high-impact media publication, and a transparent fee structure. Partner with us for a successful business journey in the UAE." />
                    <meta name="keywords" content="UAE Business Setup, Trademark Registration, Brand Identity Protection, Turnkey Business Support, Consultation Services, Legal Procedures, Media Publication, Comprehensive Business Services, Timely Filings, Transparent Fee Structure, UAE Business Journey, Expert Guidance, Your Gateway to Success" />
                </Helmet>
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
    return (
        <div className="trademark-wrapper">
            <Header></Header>
            <div className="trademark-container">
                <div className="trademark-baner-guide">
                    <NewConsultBaner
                        img={accountaingBaner}
                        title={t("trade-title")}
                        description={[t("trade-descr.1"),
                        t("trade-descr.2")]}
                    />
                </div>
                <div className="registering-trademark">
                    <div className="content">
                        <div className="page-title">{t("name506")}</div>
                        <div>{t("name507")}</div>
                    </div>
                </div>
                <div className="register-cost">
                    <div className="registring">
                        <div className="title">
                            <div>{t("name508")}</div>
                        </div>
                        <div className="resolve-container">
                            <RegisteringCard
                                count={t('registering-card.1.count')}
                                title={t('registering-card.1.title')}
                                description={t('registering-card.1.description')}
                            />
                            <RegisteringCard
                                count={t('registering-card.2.count')}
                                title={t('registering-card.2.title')}
                                description={t('registering-card.2.description')}
                            />
                            <RegisteringCard
                                count={t('registering-card.3.count')}
                                title={t('registering-card.3.title')}
                                description={t('registering-card.3.description')}
                            />
                        </div>
                    </div>
                    <div className="cost">
                        {t("name511")}: <span>25,000 AED</span>
                    </div>
                </div>
                <div className="interesting-facts">
                    <div className="title">
                        {t("name512")}
                    </div>
                    <div className="block-fact-container">
                        <div className="block-fact-container">
                            <div className="elem">
                                <div>{t('block-fact-container.elem1.number')}</div>
                                <div>{t('block-fact-container.elem1.description')}</div>
                            </div>
                            <div className="elem">
                                <div>{t('block-fact-container.elem2.number')}</div>
                                <div>{t('block-fact-container.elem2.description')}</div>
                            </div>
                            <div className="elem">
                                <div>{t('block-fact-container.elem3.number')}</div>
                                <div>{t('block-fact-container.elem3.description')}</div>
                            </div>
                            <div className="elem">
                                <div>{t('block-fact-container.elem4.number')}</div>
                                <div>{t('block-fact-container.elem4.description')}</div>
                            </div>
                            <div className="elem">
                                <div>{t('block-fact-container.elem5.number')}</div>
                                <div>{t('block-fact-container.elem5.description')}</div>
                            </div>
                            <div className="elem">
                                <div>{t('block-fact-container.elem6.number')}</div>
                                <div>{t('block-fact-container.elem6.description')}</div>
                            </div>
                            <div className="elem">
                                <div>{t('block-fact-container.elem7.number')}</div>
                                <div>{t('block-fact-container.elem7.description')}</div>
                            </div>
                            <div className="elem">
                                <div>{t('block-fact-container.elem8.number')}</div>
                                <div>{t('block-fact-container.elem8.description')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="get-consult-box">
                    <GetConsult></GetConsult>
                </div>
            </div>
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
            <Footer></Footer>
        </div>
    )
}

export default TradeMark
