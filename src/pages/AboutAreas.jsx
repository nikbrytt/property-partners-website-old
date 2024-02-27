import '../styles/Pages/aboutAreas.scss'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import areaMap from '../assets/Areas/map.png'
import GetConsult from "../components/GetConsult.jsx";
import AreaCard from "../components/AreaCard.jsx";


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import AreasCardsInfo from "../data/AreasCardsInfo.jsx";
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

const AboutAreas = () => {
    const staticData = [
        {
            name: 'JUMEIRAH VILLAGE CIRCLE',
            pv: 14345,
        },
        {
            name: 'BUSINESS BAY',
            pv: 10239,
        },
        {
            name: 'DUBAI MARINA',
            pv: 9853,
        },
        {
            name: 'DUBAI HILLS',
            pv: 5279,
        },
        {
            name: 'JUMEIRHA LAKE TOWERS',
            pv: 5119,
        },
    ];
    const cardInfo = AreasCardsInfo();
    const { t } = useTranslation();
    const TransactionBlock = () => {
        return (<div className='transaction-block'>
                <div className="transaction-img">
                    <img src={areaMap} alt=""/>
                </div>

                <div className="content-profit">
                    <div className="transaction-content">
                        <div className="text">
                            <div>Al Wasl (City Walk)</div>

                            <div className='description'>
                                <div>AED 4.2M </div>
                                <div>Average property price</div>
                            </div>
                        </div>

                        <div className="variants">
                            <div className="variant active">1</div>
                            <div className="variant">2</div>
                            <div className="variant">3</div>
                            <div className="variant">4</div>
                        </div>
                    </div>

                    <div className="profit">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                                <path
                                    d="M4.4 13C4.4 13.3314 4.66863 13.6 5 13.6C5.33137 13.6 5.6 13.3314 5.6 13L4.4 13ZM5.42426 0.575736C5.18995 0.341421 4.81005 0.341421 4.57574 0.575736L0.757359 4.39411C0.523045 4.62843 0.523045 5.00833 0.757359 5.24264C0.991674 5.47696 1.37157 5.47696 1.60589 5.24264L5 1.84853L8.39411 5.24264C8.62843 5.47696 9.00833 5.47696 9.24264 5.24264C9.47696 5.00833 9.47696 4.62843 9.24264 4.39411L5.42426 0.575736ZM5.6 13L5.6 1L4.4 1L4.4 13L5.6 13Z"
                                    fill="#82BB5F"/>
                            </svg>
                        </div>
                        37.8% vs 2023
                    </div>
                </div>
            </div>
        )
    }

    function getIntroOfPage(label) {
        if (label === 'JUMEIRAH VILLAGE CIRCLE') {
            return (
                <>
                    <div>Volume: 14,345</div>
                    <div>Sales Value: 15.4B</div>
                    <div>Rank: 1</div>
                </>
            );
        } if (label === 'BUSINESS BAY') {
            return (
                <>
                    <div>Volume: 10,239</div>
                    <div>Sales Value: 22.7B</div>
                    <div>Rank: 2</div>
                </>
            );
        } if (label === 'DUBAI MARINA') {
            return (
                <>
                    <div>Volume: 9,853</div>
                    <div>Sales Value: 40.4B</div>
                    <div>Rank: 3</div>
                </>
            );
        } if (label === 'DUBAI HILLS') {
            return (
                <>
                    <div>Volume: 5,279</div>
                    <div>Sales Value: 16.5B</div>
                    <div>Rank: 4</div>
                </>
            );
        } if (label === 'JUMEIRHA LAKE TOWERS') {
            return (
                <>
                    <div>Volume: 5,119</div>
                    <div>Sales Value: 7.9B</div>
                    <div>Rank: 5</div>
                </>
            );
        }
    }

    function CustomTooltip({ name, label, active, pv }) {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <div className="desc">{getIntroOfPage(label)}</div>
                </div>
            );
        }

        return null;
    }

    return (<div className='about-areas'>
            <Helmet>
                <title>Discover Luxury, Comfort, and Style in Dubai's Premier Areas | Unveiling the Best of Modern Living</title>
                <meta name="description" content="Explore the opulent blend of modern luxury and traditional charm in Dubai, from iconic landmarks like Burj Khalifa to vibrant areas such as Palm Jumeirah and Downtown Dubai. Uncover the top 5 performing areas in Dubai's thriving property market – Jumeirah Village Circle, Business Bay, Dubai Marina, Dubai Hills, and Jumeirah Lakes Towers. Whether you seek family-friendly living, a professional hub, or waterfront luxury, Dubai offers a spectrum of lifestyles. Embark on a journey through the city's unique charms, where luxury, comfort, and style converge to redefine modern living." />
                <meta name="keywords" content="Dubai Luxury Living, Modern Charm, Top Areas in Dubai, Property Market, Jumeirah Village Circle, Business Bay, Dubai Marina, Dubai Hills, Jumeirah Lakes Towers, Iconic Landmarks, Waterfront Luxury, Comfortable Living, Dubai Lifestyle, Modern Living Experience" />
            </Helmet>
            <Header></Header>
            <div className="about-areas-container">
                <div className="about-dubai">
                    <div className="content">
                        <div className="title">{t("About Dubai")}</div>
                        <div className="description">
                            <div>{t("About Dubai Descr1")}</div>
                        </div>
                    </div>
                </div>

                <div className="area-card-container">
                    {cardInfo.slice(0, 6).map((card, index) => (
                        <>
                            <AreaCard
                                key={index}
                                name={card.name}
                                description={card.description}
                                price={card.price}
                                image={card.image}
                                area={card.area}
                            />
                        </>
                    ))}
                </div>

                <div className="get-consult-box">
                    <GetConsult/>
                </div>

                <div className="area-card-container">
                    {cardInfo.slice(6, 12).map((card, index) => (
                        <>
                            <AreaCard
                                key={index}
                                name={card.name}
                                description={card.description}
                                price={card.price}
                                image={card.image}
                                area={card.area}
                            />
                        </>
                    ))}
                </div>

                <div className="statistics">
                    <div className="text-content">
                        <div className="title">{t("Top 5 performing areas in Dubai")}</div>
                        <div className="description">
                            <div>{t("Dubai's property market is booming")}
                            </div>
                            <div> Dubai Marina and JLT are favorites for their luxurious waterfront lifestyles, and
                                Dubai Hills is gaining popularity for its serene, upscale environment.
                            </div>
                        </div>
                    </div>
                    <div className="statistics-info">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={staticData}
                                margin={{
                                    top: 5,
                                    right: 40,
                                    left: 40,
                                    bottom: 5,
                                }}
                                barSize={60}
                            >
                                <XAxis interval={0} style={{fontFamily: 'Onest', fontSize: 9}} dataKey="name"
                                       scale="point" padding={{left: 90, right: 90}}/>
                                <YAxis style={{fontFamily: 'Onest', fontSize: 9}}/>
                                <Tooltip content={<CustomTooltip/>}/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Bar dataKey="pv" fill="#191C38" background={{fill: 'transparent'}}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/*<div className="transaction">*/}
                {/*    <div className="transaction-title">*/}
                {/*        <div>Area wise transaction summary 2023 </div>*/}
                {/*    </div>*/}

                {/*    <div className="transaction-blocks">*/}
                {/*        <TransactionBlock/>*/}
                {/*        <TransactionBlock/>*/}
                {/*        <TransactionBlock/>*/}
                {/*        <TransactionBlock/>*/}
                {/*    </div>*/}
                {/*    <div className="show-more">*/}
                {/*        Show more*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AboutAreas;
