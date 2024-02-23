import '../styles/consiergePage.scss'
import {useState} from "react";
import Menu from "../components/Menu.jsx";
import Team from '../components/Team.jsx'
import consiergeBanerPhoto from '../../assets/consierge-baner-pwa.png'
import consiergeBaner from '../../assets/aboutUs.jpg'
import servicesPerson from '../../assets/sevicPwa.png'
import Footer from "../components/Footer.jsx";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const ConiergePage = ({handleMenuToggle}) => {
    const [activeFocus, setActiveFocus] = useState([false, false, false, false]);
    const [showMore, setShowMore] = useState(false);
    const handleReadMoreClick = () => {
        setShowMore(!showMore);
    };
    const [services, setServices] = useState(4)

    const services1 = [
        {
            name: "Real estate management"
        },
        {
            name: "Legal services"
        },
        {
            name: "Second citizenship"
        },
        {
            name: "Business concierge services"
        },
        {
            name: "Investment assistance"
        },
        {
            name: "Opening an account with a UAE Bank"
        },
        {
            name: "Organization of business events"
        },
        {
            name: "Company registration in the UAE"
        },
    ]

    const services2 = [
        {
            name: "Tourism and recreation"
        },
        {
            name: "Shopping assistance"
        },
        {
            name: "Lifestyle manager"
        },
        {
            name: "Private jet rentals"
        },
        {
            name: "Impressions"
        },
        {
            name: "Children's concierge"
        },
        {
            name: "Rental accommodation: villas and apartments"
        },
    ]

    const services3 = [
        {
            name: "Real estate management"
        },
        {
            name: "Legal services"
        },
        {
            name: "Second citizenship"
        },
        {
            name: "Business concierge services"
        },
        {
            name: "Investment assistance"
        },
        {
            name: "Opening an account with a UAE Bank"
        },
        {
            name: "Organization of business events"
        },
        {
            name: "Company registration in the UAE"
        },
    ]


    return (<div className="consierge-page">
            <div className="consierge-baner">
                <Menu handleMenuToggle={handleMenuToggle}/>
                <div className="content">
                    <div className="title">Your concierge service in Dubai</div>

                    <div className="photo-button">
                        <img src={consiergeBanerPhoto} alt=""/>

                        <div className="button">
                            Get a free consultation

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M12 13L4 13L4 11L12 11L12 4L20 12L12 20L12 13Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-us">
                <div className="content">
                    <img src={consiergeBaner} alt=""/>

                    <div className="title">
                        <div>About us</div>
                        <div>{showMore ? `We have been committed to delivering exceptional real estate experiences to our clients. Our journey began with a simple yet profound vision: to redefine the standards of real estate brokerage in one of the world's most dynamic property markets.
                            Our mission is rooted in the belief that every real estate transaction is not just a transaction but a stepping stone towards someone's dream. Whether it's helping families find their perfect home or assisting investors in making strategic property investments, we are dedicated to making every experience seamless and memorable. `
                                        : `We have been committed to delivering exceptional real estate experiences 
                            to our clients. Our journey began with a simple yet profound vision: to redefine
                            the standards of real estate brokerage in one of the world's most dynamic property markets. `}<span
                                        className="read-more" onClick={handleReadMoreClick}>
                            {showMore ? "Hide" : "Read more"}
                        </span></div>
                    </div>
                </div>
            </div>

            <Team/>

            <div className="what-services">
                <div className="services-title">What services do we provide?</div>

                <Swiper slidesPerView={'auto'}
                        spaceBetween={20}
                        loop={true}
                        pagination={true} modules={[Pagination]}
                >
                    <SwiperSlide>
                        <div className="content">
                            <img src={servicesPerson} alt=""/>

                            <div className="business-services">
                                <div className="title">Business services</div>
                                <div className="servic-container">
                                    {services1.slice(0, services === 1 ? services1.length : 3).map((service, index) => (
                                        <div key={index}
                                             className="servic"
                                        >
                                        {service.name}
                                        </div>
                                    ))}
                                    {services !== 1 &&
                                    <div className="show-all" onClick={() => setServices(1)}>
                                        {services === 1 ? 'Show less' : "Show more"}
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <img src={servicesPerson} alt=""/>

                            <div className="business-services">
                                <div className="title">Services for life</div>
                                <div className="servic-container">
                                    {services2.slice(0, services === 2 ? services1.length : 3).map((service, index) => (
                                        <div key={index}
                                             className="servic"
                                        >
                                            {service.name}
                                        </div>
                                    ))}
                                    {services !== 2 &&
                                        <div className="show-all" onClick={() => setServices(2)}>
                                            {services === 2 ? 'Show less' : "Show more"}
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content">
                            <img src={servicesPerson} alt=""/>

                            <div className="business-services">
                                <div className="title">Services for life</div>
                                <div className="servic-container">
                                    {services3.slice(0, services === 3 ? services1.length : 3).map((service, index) => (
                                        <div key={index}
                                             className="servic"
                                        >
                                            {service.name}
                                        </div>
                                    ))}
                                    {services !== 3 &&
                                        <div className="show-all" onClick={() => setServices(3)}>
                                            {services === 3 ? 'Show less' : "Show more"}
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
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

export default ConiergePage