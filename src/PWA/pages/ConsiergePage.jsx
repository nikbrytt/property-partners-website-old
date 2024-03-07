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
import axios from "axios";

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
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [dataSented, setDataSented] = useState('')

    function sentData() {
        let data = JSON.stringify({
            "email": mail,
            "phone": phone,
            "name": name,
            "additional": "Additional information here"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://contact.propart.ae/append-data',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
            .then((response) => {
                setName('')
                setPhone('')
                setMail('')
                setDataSented(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (<div className="consierge-page">
            <div className="consierge-baner">
                <Menu handleMenuToggle={handleMenuToggle}/>
                <div className="content">
                    <div className="title">Your concierge service in Dubai</div>

                    <div className="photo-button">
                        <img src={consiergeBanerPhoto} alt=""/>

                        <a href="tel:+971521038793" className="button">
                            Get a free consultation

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M12 13L4 13L4 11L12 11L12 4L20 12L12 20L12 13Z" fill="white"/>
                            </svg>
                        </a>
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
                            value={name} onChange={(e) => {
                            setName(e.target.value)
                            setDataSented(false)
                        }}
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
                            value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                            setDataSented(false)
                        }}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                                fill="#CACACA"
                            />
                        </svg>
                    </div>
                    <div className="send" onClick={sentData}>
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