import "../styles/Areas.scss"
import Menu from "../components/Menu.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import Offers from "../components/Offers.jsx";
import BigAreaCard1 from "../../assets/pwa/Areas/bigAreaCard1.png"
import BigAreaCard2 from "../../assets/pwa/Areas/bigAreaCard2.png"
import BigAreaCard3 from "../../assets/pwa/Areas/bigAreaCard3.png"
import BigAreaCard4 from "../../assets/pwa/Areas/bigAreaCard4.png"
import BigAreaCard5 from "../../assets/pwa/Areas/bigAreaCard5.png"
import Footer from "../components/Footer.jsx";
import {useEffect, useState} from "react";
import AreasCardsInfo from "../../data/AreasCardsInfo.jsx";
import DynamicTruncatedText from "../../components/DynamicTruncatedText.jsx";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Link} from "react-router-dom";
import collection1 from "../../assets/collection1.jpg";
import offer2 from "../../assets/offer.png";
import offer3 from "../../assets/offer2.png";
import offer4 from "../../assets/offer3.png";


const AreasPhoneCard = ({name, description, price, image, area}) => {
    return (
        <div className="areas-phone-card">
            <div className="image">
                <img src={image} alt="" />
                <div className="price">{price}</div>
            </div>
            <div className="title">
                <div className={"name"}>{name}</div>
                <div><DynamicTruncatedText text={description} customBreakpoints={
                    {
                        650: 20,
                        600: 24
                    }
                } /><DynamicTruncatedText/></div>
            </div>
        </div>
    );
};

const BigAreaCard = ({area}) => {
    return (
        <div className="big-area-card">
            <img src={area.image} alt=""/>
            <div className="content">
                <div className="top-info">
                    <div className="info">
                        <div className="info-block">
                            <div>Sales Value:</div>
                            <div>{area.saleValue}</div>
                        </div>
                        <div className="info-block">
                            <div>Volume:</div>
                            <div>{area.volume}</div>
                        </div>
                        <div className="info-block">
                            <div>Rank</div>
                            <div>{area.rank}</div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                         fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M3 0H5C5.55228 0 6 0.447715 6 1C6 1.51284 5.61396 1.93551 5.11662 1.99327L5 2H3C2.48716 2 2.06449 2.38604 2.00673 2.88338L2 3V17C2 17.5128 2.38604 17.9355 2.88338 17.9933L3 18H17C17.5128 18 17.9355 17.614 17.9933 17.1166L18 17V15C18 14.4477 18.4477 14 19 14C19.5128 14 19.9355 14.386 19.9933 14.8834L20 15V17C20 18.5977 18.7511 19.9037 17.1763 19.9949L17 20H3C1.40232 20 0.0963391 18.7511 0.00509262 17.1763L0 17V3C0 1.40232 1.24892 0.0963391 2.82373 0.00509262L3 0ZM19 0L19.081 0.00300002L19.2007 0.0202401L19.3121 0.0497382L19.4232 0.0936735L19.5207 0.145995L19.6168 0.212786L19.7071 0.292893L19.8037 0.404693L19.8753 0.515938L19.9063 0.576901L19.9401 0.65835L19.9642 0.734007L19.9931 0.881905L20 1V7C20 7.55228 19.5523 8 19 8C18.4477 8 18 7.55228 18 7V3.414L11.7071 9.70711C11.3466 10.0676 10.7794 10.0953 10.3871 9.7903L10.2929 9.70711C9.93241 9.34662 9.90468 8.77939 10.2097 8.3871L10.2929 8.29289L16.584 2H13C12.4477 2 12 1.55228 12 1C12 0.447715 12.4477 0 13 0H19Z"
                              fill="white"/>
                    </svg>
                </div>

                <div className="bottom-info">
                    <div className="title">
                        <div>{area.name}</div>
                        <div>{area.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ReadMoreLess = ({children, limit}) => {
    const [isReadMoreShown,setReadMoreSown] = useState(false)
    const toggleBtn = () => {
        setReadMoreSown(prevState => !prevState)
    }

    return (<div className="description">
            <div>
                {isReadMoreShown ? children : children.substr(0, limit)}
                <span onClick={toggleBtn}> {isReadMoreShown ? 'Hide' : 'Read more'}</span>
            </div>
        </div>
    )
}

const AreasPhone = ({handleMenuToggle}) => {
    const [activeFocus, setActiveFocus] = useState([false, false, false, false]);
    const cardInfo = AreasCardsInfo();

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
    const BigAreasCardInfo = [
            {
                "saleValue": "15.4B",
                "volume": "14,345",
                "rank": "1",
                "image": BigAreaCard1,
                "name": "JVC",
                "description": "Jumeirah Village Circle is a popular residential and commercial area consisting mainly of Arabic and Mediterranean style villas and townhouses. "
            },
            {
                "saleValue": " 22.7B",
                "volume": "10,239",
                "rank": "2",
                "image": BigAreaCard2,
                "name": "Business Bay",
                "description": "The area with the self-explanatory name, Business Bay is the business and commercial center of Dubai."
            },
            {
                "saleValue": "40.4B",
                "volume": "9,853",
                "rank": "3",
                "image": BigAreaCard3,
                "name": "Dubai Marina",
                "description": "Dubai Marina is a carefully planned community located in the southwest part of the city and developed by Emaar Properties."
            },
            {
                "saleValue": "16.5B",
                "volume": "5,279",
                "rank": "4",
                "image": BigAreaCard4,
                "name": "Dubai Hills",
                "description": "Dubai Hills Estate is one of the most popular areas to reside in Dubai, with a mixed-use infrastructure, and great overall amenities."
            },
            {
                "saleValue": " 7.9B",
                "volume": "5,119",
                "rank": "5",
                "image": BigAreaCard5,
                "name": "JLT",
                "description": "The area is built up with 87 towers consisting of apartments, offices and retail outlets, located around three lakes and a park."
            }
        ]
    const ReadMoreLess = ({children, limit}) => {
        const [isReadMoreShown,setReadMoreSown] = useState(false)
        const toggleBtn = () => {
            setReadMoreSown(prevState => !prevState)
        }

        return (<div className="description">
                <div>
                    {isReadMoreShown ? children : children.substr(0, limit)}
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

    return (
        <div className="areas-phone">
            <div className="baner-filter">
                <div className="area-baner">
                    <Menu handleMenuToggle={handleMenuToggle}/>
                </div>

                <div className="filter-menu">
                    <div className="input-container">
                        <div className="input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path
                                    d="M12.0207 11.0779L14.876 13.9326L13.9327 14.8759L11.078 12.0206C10.0159 12.8721 8.69471 13.3352 7.33337 13.3333C4.02137 13.3333 1.33337 10.6453 1.33337 7.33325C1.33337 4.02125 4.02137 1.33325 7.33337 1.33325C10.6454 1.33325 13.3334 4.02125 13.3334 7.33325C13.3353 8.69459 12.8722 10.0157 12.0207 11.0779ZM10.6834 10.5833C11.5294 9.71318 12.002 8.54687 12 7.33325C12 4.75459 9.91137 2.66659 7.33337 2.66659C4.75471 2.66659 2.66671 4.75459 2.66671 7.33325C2.66671 9.91125 4.75471 11.9999 7.33337 11.9999C8.54699 12.0018 9.7133 11.5293 10.5834 10.6833L10.6834 10.5833V10.5833Z"
                                    fill="black"/>
                            </svg>
                            <input type="text" placeholder="Find your area"/>
                        </div>
                    </div>

                    <div className="filter-buttons">
                        <div className="filter-button">
                            Type

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path d="M8 10.6667L4 6.66675H12L8 10.6667Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="filter-button">
                            Budget

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path d="M8 10.6667L4 6.66675H12L8 10.6667Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="filter-button">
                            Proximity

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path d="M8 10.6667L4 6.66675H12L8 10.6667Z" fill="black"/>
                            </svg>
                        </div>
                    </div>

                    <div className="areas-buttons">
                        {cardInfo.map((area, index) => (
                            <div key={index} className="area-button">
                                <div>{area.name}</div>
                                <div>{area.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="title-text">
                <div className="title">
                    About Dubai areas: luxury, comfort and style
                </div>

                <ReadMoreLess
                    children="Dubai's property market is booming, especially in Jumeirah Village Circle (JVC), Business Bay, Dubai Marina, Dubai Hills. "
                    limit='121'/>
            </div>

            <div className="areas-phone-cards">
                {cardInfo.slice(0, 6).map((area, index) => (
                    <AreasPhoneCard key={index}
                                    name={area.name}
                                    description={area.description}
                                    price={area.price}
                                    image={area.image}
                                    area={area.area}/>
                ))}
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

            <div className="areas-phone-cards">
                {cardInfo.slice(6,).map((area, index) => (
                    <AreasPhoneCard key={index}
                                    name={area.name}
                                    description={area.description}
                                    price={area.price}
                                    image={area.image}
                                    area={area.area}/>
                ))}
            </div>

            <div className="top-five">
                <div className="title">
                    <div>Top 5 performing areas in Dubai</div>

                    <ReadMoreLess
                        children="Dubai's property market is booming, especially in Jumeirah Village Circle (JVC), Business Bay, Dubai Marina, Dubai Hills."
                        limit='121'/>
                </div>
            </div>

            <div className="big-area-card-container">
                {BigAreasCardInfo.map((area, index) => (
                    <BigAreaCard key={index} area={area}/>
                ))}
            </div>

            <div className="statistics-info">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={staticData}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                        barSize={30}
                    >
                        <XAxis interval={0} style={{fontFamily: 'Onest', fontSize: 9, width: "125px"}} dataKey="name"
                               scale="point" padding={{left:35, right: 35}}/>
                        <YAxis style={{fontFamily: 'Onest', fontSize: 8}}/>
                        <Tooltip content={<CustomTooltip/>}/>
                        <CartesianGrid strokeDasharray="0 0"/>
                        <Bar dataKey="pv" fill="#191C38" background={{fill: 'transparent'}}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="get-in-touch">
                <div className="prompt">
                    <div className="tittle">Get in touch with us!</div>
                    <div className="description">Text your phone number, our real estate expert will contact you within
                        5 minutes.
                    </div>
                </div>
                <div className="content">
                    <div className={`input ${activeFocus[0] ? "active" : ""}`}>
                        <input
                            type="text"
                            placeholder={"Name"}
                            onFocus={() => setActiveFocus([true, false, false, false])}
                            onBlur={() => setActiveFocus([false, false, false, false])}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z"
                                fill="#CACACA"
                            />
                        </svg>
                    </div>
                    <div className={`input ${activeFocus[1] ? "active" : ""}`}>
                        <input
                            type="text"
                            placeholder={"Phone number"}
                            onFocus={() => setActiveFocus([false, true, false, false])}
                            onBlur={() => setActiveFocus([false, false, false, false])}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                                fill="#CACACA"
                            />
                        </svg>
                    </div>
                    <div className={`input ${activeFocus[2] ? "active" : ""}`}>
                        <input
                            type="text"
                            placeholder={"E-mail"}
                            onFocus={() => setActiveFocus([false, false, true])}
                            onBlur={() => setActiveFocus([false, false, false])}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M2.50008 2.5H17.5001C17.7211 2.5 17.9331 2.5878 18.0893 2.74408C18.2456 2.90036 18.3334 3.11232 18.3334 3.33333V16.6667C18.3334 16.8877 18.2456 17.0996 18.0893 17.2559C17.9331 17.4122 17.7211 17.5 17.5001 17.5H2.50008C2.27907 17.5 2.06711 17.4122 1.91083 17.2559C1.75455 17.0996 1.66675 16.8877 1.66675 16.6667V3.33333C1.66675 3.11232 1.75455 2.90036 1.91083 2.74408C2.06711 2.5878 2.27907 2.5 2.50008 2.5V2.5ZM10.0501 9.73583L4.70675 5.19833L3.62758 6.46833L10.0609 11.9308L16.3784 6.46417L15.2884 5.20333L10.0509 9.73583H10.0501Z"
                                fill="#CACACA"/>
                        </svg>
                    </div>
                    <div className={`input ${activeFocus[3] ? "active" : ""}`}>
                        <input
                            type="text"
                            placeholder={"Number of residence permits"}
                            onFocus={() => setActiveFocus([false, false, false, true])}
                            onBlur={() => setActiveFocus([false, false, false, false])}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M5.37925 15.8333L1.66675 18.75V3.33333C1.66675 3.11232 1.75455 2.90036 1.91083 2.74408C2.06711 2.5878 2.27907 2.5 2.50008 2.5H17.5001C17.7211 2.5 17.9331 2.5878 18.0893 2.74408C18.2456 2.90036 18.3334 3.11232 18.3334 3.33333V15C18.3334 15.221 18.2456 15.433 18.0893 15.5893C17.9331 15.7455 17.7211 15.8333 17.5001 15.8333H5.37925ZM9.16675 11.6667V13.3333H10.8334V11.6667H9.16675ZM7.13925 7.34417L8.77425 7.67167C8.82065 7.43953 8.93201 7.22533 9.09539 7.05401C9.25876 6.88269 9.46743 6.76129 9.6971 6.70392C9.92678 6.64656 10.168 6.65559 10.3928 6.72997C10.6175 6.80436 10.8165 6.94103 10.9666 7.12409C11.1167 7.30715 11.2117 7.52908 11.2406 7.76404C11.2696 7.999 11.2311 8.23734 11.1299 8.45132C11.0286 8.6653 10.8687 8.84614 10.6687 8.97277C10.4687 9.09941 10.2368 9.16665 10.0001 9.16667H9.16675V10.8333H10.0001C10.5524 10.8332 11.0933 10.6762 11.5599 10.3806C12.0265 10.0851 12.3995 9.66316 12.6357 9.16389C12.8719 8.66463 12.9615 8.10857 12.894 7.5604C12.8265 7.01223 12.6048 6.49448 12.2546 6.06738C11.9044 5.64028 11.4402 5.32139 10.9159 5.1478C10.3915 4.97421 9.82872 4.95307 9.29285 5.08682C8.75698 5.22057 8.27011 5.50372 7.88886 5.90334C7.50761 6.30295 7.24766 6.8026 7.13925 7.34417V7.34417Z"
                                fill="#CACACA"/>
                        </svg>
                    </div>
                    <div className="send">
                        Send
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M10.0002 15.172L19.1922 5.979L20.6072 7.393L10.0002 18L3.63623 11.636L5.05023 10.222L10.0002 15.172Z"
                                fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>

            <Footer active={"Areas"}/>
        </div>
    )
}

export default AreasPhone