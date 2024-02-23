import '../styles/AboutUs.scss'
import Menu from "../components/Menu.jsx";
import aboutUsPhoto from '../../assets/about-us-pwa.png'
import proPartTeam from '../../assets/propart-team.png'
import Team from '../components/Team.jsx'
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Offers from "../components/Offers.jsx";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import collection1 from "../../assets/collection1.jpg";
import offer2 from "../../assets/offer.png";
import offer3 from "../../assets/offer2.png";
import offer4 from "../../assets/offer3.png";
import alla from '../../assets/teams/anna-horshunova-min.jpg'
import Footer from "../components/Footer.jsx";
const AboutUsPhone = ({handleMenuToggle}) => {
    const {t} = useTranslation();

    const [showMore, setShowMore] = useState(false);
    const handleReadMoreClick = () => {
        setShowMore(!showMore);
    };

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

    const [activeFocus,setActiveFocus] = useState([false,false]);

    return (<div className="about-us-phone">
        <div className="baner-about">
            <Menu handleMenuToggle={handleMenuToggle}/>
            <div className="title">
                <div>Your Space, Your Sanctuary</div>
                <div>A premier real estate agency based in the vibrant heart of Dubai.</div>
            </div>
            <img src={aboutUsPhoto} alt=""/>
        </div>

        <div className="since-our">
            <div>Since our inception in 2023</div>
            <div>{showMore ? `We have been committed to delivering exceptional real estate experiences to our clients. Our journey began with a simple yet profound vision: to redefine the standards of real estate brokerage in one of the world's most dynamic property markets.
                Our mission is rooted in the belief that every real estate transaction is not just a transaction but a stepping stone towards someone's dream. Whether it's helping families find their perfect home or assisting investors in making strategic property investments, we are dedicated to making every experience seamless and memorable. `
                : `We have been committed to delivering exceptional real estate experiences 
                to our clients. Our journey began with a simple yet profound vision: to redefine
                the standards of real estate brokerage in one of the world's most dynamic property markets. `}<span
                className="read-more" onClick={handleReadMoreClick}>
                {showMore ? "Hide" : "Read more"}
            </span></div>
        </div>

        <div className="propart-team">
            <div className="content">
                <div>PROPART Team</div>
                <img src={proPartTeam} alt=""/>
                <div>We pride ourselves on our deep understanding of the unique Dubai real estate market. Our team of
                    seasoned professionals is adept at navigating its complexities, ensuring that our clients make
                    informed and profitable decisions. Our values of integrity, transparency, and excellence are at the
                    core of everything we do, guiding us in building lasting relationships with our clients.
                </div>
            </div>
        </div>

        <Team/>

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

        <div className="what-sets">
            <div className="title">
                <div>What sets us apart is our personalized</div>
                <div>We pride ourselves on our deep understanding of the unique Dubai real estate market.</div>
            </div>
            <div className="sets-content">
                <Swiper slidesPerView={'auto'}
                        spaceBetween={4}
                        loop={true}
                        pagination={true} modules={[Pagination]}
                >
                    <SwiperSlide>
                        <div className="set">
                            <svg id='icon-bg' xmlns="http://www.w3.org/2000/svg" width="89" height="89"
                                 viewBox="0 0 89 89"
                                 fill="none">
                                <path opacity="0.1"
                                      d="M52.5 89C23.5043 89 0 65.4957 0 36.5C0 7.50425 23.5043 -16 52.5 -16C81.4957 -16 105 7.50425 105 36.5C105 65.4957 81.4957 89 52.5 89ZM85.8637 57.248V56.6968C85.8637 51.8563 85.8637 49.646 82.4407 47.6877C81.3405 47.064 80.2104 46.4946 79.0545 45.9815C77.1278 45.1047 75.852 44.5325 74.13 42.0125C73.9244 41.7133 73.7214 41.4122 73.521 41.1095C71.7097 38.3533 70.4025 36.3687 65.4255 37.1562C55.6342 38.7103 54.9097 40.4323 54.4792 43.3408L54.411 43.8185C53.7758 48.071 53.6603 49.499 55.4348 51.3628C62.076 58.3295 66.0555 63.3537 67.263 66.2937C67.851 67.727 69.363 72.0688 68.3235 76.3633C74.6961 73.825 80.3684 69.798 84.8663 64.619C85.4438 62.6555 85.8637 60.209 85.8637 57.248V57.248ZM52.5 -6.37675C40.3358 -6.37675 29.3475 -1.30525 21.546 6.83225C22.4753 7.478 23.2837 8.38625 23.8402 9.63575C24.9112 12.035 24.9112 14.5077 24.9112 16.697C24.9112 18.419 24.9112 20.057 25.4625 21.2383C26.2185 22.8553 29.484 23.5483 32.3662 24.1468C33.4005 24.3673 34.461 24.5877 35.427 24.8555C38.0835 25.5905 40.1415 27.9792 41.7847 29.8955C42.4672 30.6882 43.4805 31.859 43.9897 32.153C44.2522 31.964 45.0975 31.0452 45.5122 29.5385C45.8377 28.3835 45.7432 27.365 45.276 26.8085C42.336 23.3435 42.4987 16.676 43.407 14.2138C44.835 10.334 49.2975 10.6228 52.563 10.8328C53.781 10.9115 54.9255 10.9902 55.7865 10.88C59.052 10.4705 60.06 5.49875 60.7687 4.5275C62.3017 2.4275 66.9952 -0.738251 69.9037 -2.69125C64.4254 -5.12729 58.4956 -6.383 52.5 -6.37675V-6.37675Z"
                                      fill="#191C38"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <path
                                    d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM16.355 13.952V13.847C16.355 12.925 16.355 12.504 15.703 12.131C15.4934 12.0122 15.2782 11.9037 15.058 11.806C14.691 11.639 14.448 11.53 14.12 11.05C14.0808 10.993 14.0422 10.9357 14.004 10.878C13.659 10.353 13.41 9.975 12.462 10.125C10.597 10.421 10.459 10.749 10.377 11.303L10.364 11.394C10.243 12.204 10.221 12.476 10.559 12.831C11.824 14.158 12.582 15.115 12.812 15.675C12.924 15.948 13.212 16.775 13.014 17.593C14.2278 17.1095 15.3083 16.3425 16.165 15.356C16.275 14.982 16.355 14.516 16.355 13.952V13.952ZM10 1.833C7.683 1.833 5.59 2.799 4.104 4.349C4.281 4.472 4.435 4.645 4.541 4.883C4.745 5.34 4.745 5.811 4.745 6.228C4.745 6.556 4.745 6.868 4.85 7.093C4.994 7.401 5.616 7.533 6.165 7.647C6.362 7.689 6.564 7.731 6.748 7.782C7.254 7.922 7.646 8.377 7.959 8.742C8.089 8.893 8.282 9.116 8.379 9.172C8.429 9.136 8.59 8.961 8.669 8.674C8.731 8.454 8.713 8.26 8.624 8.154C8.064 7.494 8.095 6.224 8.268 5.755C8.54 5.016 9.39 5.071 10.012 5.111C10.244 5.126 10.462 5.141 10.626 5.12C11.248 5.042 11.44 4.095 11.575 3.91C11.867 3.51 12.761 2.907 13.315 2.535C12.2715 2.07099 11.142 1.83181 10 1.833V1.833Z"
                                    fill="#191C38"/>
                            </svg>
                            <div className="title">
                                <div>Customs</div>
                                <div>Hassle-Free Customs Clearance</div>
                            </div>
                        </div>
                        <div className="set">
                            <svg id='icon-bg' xmlns="http://www.w3.org/2000/svg" width="89" height="89"
                                 viewBox="0 0 89 89"
                                 fill="none">
                                <path
                                    opacity="0.1"
                                    d="M87.5 80.25H17.5C16.3397 80.25 15.2269 79.7891 14.4064 78.9686C13.5859 78.1481 13.125 77.0353 13.125 75.875V-2.875C13.125 -4.03532 13.5859 -5.14812 14.4064 -5.96859C15.2269 -6.78906 16.3397 -7.25 17.5 -7.25H87.5C88.6603 -7.25 89.7731 -6.78906 90.5936 -5.96859C91.4141 -5.14812 91.875 -4.03532 91.875 -2.875V75.875C91.875 77.0353 91.4141 78.1481 90.5936 78.9686C89.7731 79.7891 88.6603 80.25 87.5 80.25ZM35 14.625V23.375H70V14.625H35ZM35 32.125V40.875H70V32.125H35ZM35 49.625V58.375H70V49.625H35Z"
                                    fill="#191C38"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM8 7V9H16V7H8ZM8 11V13H16V11H8ZM8 15V17H16V15H8Z"
                                    fill="#191C38"/>
                            </svg>
                            <div className="title">
                                <div>Customs</div>
                                <div>Hassle-Free Customs Clearance</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="set">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM8 7V9H16V7H8ZM8 11V13H16V11H8ZM8 15V17H16V15H8Z"
                                    fill="#191C38"/>
                            </svg>
                            <svg id='icon-bg' opacity='0.1' xmlns="http://www.w3.org/2000/svg" width="110" height="110"
                                 viewBox="0 0 110 110"
                                 fill="none">
                                <path
                                    d="M131.667 96.8327H26.3333C24.5873 96.8327 22.9128 96.1391 21.6782 94.9045C20.4436 93.6699 19.75 91.9954 19.75 90.2494V-28.2507C19.75 -29.9967 20.4436 -31.6712 21.6782 -32.9058C22.9128 -34.1404 24.5873 -34.834 26.3333 -34.834H131.667C133.413 -34.834 135.087 -34.1404 136.322 -32.9058C137.556 -31.6712 138.25 -29.9967 138.25 -28.2507V90.2494C138.25 91.9954 137.556 93.6699 136.322 94.9045C135.087 96.1391 133.413 96.8327 131.667 96.8327ZM52.6667 -1.91732V11.2494H105.333V-1.91732H52.6667ZM52.6667 24.416V37.5827H105.333V24.416H52.6667ZM52.6667 50.7494V63.916H105.333V50.7494H52.6667Z"
                                    fill="#191C38"/>
                            </svg>
                            <div className="title">
                                <div>Licensing</div>
                                <div>Expertise in Licensing Procedures</div>
                            </div>
                        </div>
                        <div className="set">
                            <svg id='icon-bg' xmlns="http://www.w3.org/2000/svg" width="110" height="110"
                                 viewBox="0 0 110 110"
                                 fill="none">
                                <path
                                    opacity='0.1'
                                    d="M26.3333 -28.25H131.667C133.413 -28.25 135.087 -27.5564 136.322 -26.3218C137.556 -25.0872 138.25 -23.4127 138.25 -21.6667V83.6667C138.25 85.4127 137.556 87.0872 136.322 88.3218C135.087 89.5564 133.413 90.25 131.667 90.25H26.3333C24.5873 90.25 22.9128 89.5564 21.6782 88.3218C20.4436 87.0872 19.75 85.4127 19.75 83.6667V-21.6667C19.75 -23.4127 20.4436 -25.0872 21.6782 -26.3218C22.9128 -27.5564 24.5873 -28.25 26.3333 -28.25V-28.25ZM72.4364 57.3333L118.981 10.7826L109.672 1.47375L72.4364 38.7157L53.8122 20.0914L44.5033 29.4003L72.4364 57.3333Z"
                                    fill="#191C38"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3V3ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                                    fill="#191C38"/>
                            </svg>
                            <div className="title">
                                <div>Customs</div>
                                <div>Hassle-Free Customs Clearance</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className="get-in-touch">
            <div className="prompt">
                <div className="tittle">Get in touch with us!</div>
                <div className="description">Text your phone number, our real estate expert will contact you within 5
                    minutes.
                </div>
            </div>
            <div className="content">
                <div className={`input ${activeFocus[0] ? "active" : ""}`}>
                    <input
                        type="text"
                        placeholder={"Name"}
                        onFocus={() => setActiveFocus([true, false])}
                        onBlur={() => setActiveFocus([false, false])}
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
                        onFocus={() => setActiveFocus([false, true])}
                        onBlur={() => setActiveFocus([false, false])}
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
                        <path
                            d="M10.0002 15.172L19.1922 5.979L20.6072 7.393L10.0002 18L3.63623 11.636L5.05023 10.222L10.0002 15.172Z"
                            fill="white"/>
                    </svg>
                </div>
            </div>
        </div>

        <div className="broker-card">
            <div className="image">
                <img src={alla} alt=""/>
            </div>
            <div className="content">
                <div className="title">
                    <div className="name">
                        <div>Real estate broker</div>
                        <div>Anna Horshunova</div>
                    </div>
                    <div>Off-plan properties, Investments, Mortgage</div>
                </div>
                <div className="buttons">
                    <div className="button" onClick={() => window.open("tel:+971521038793")}>Contact</div>
                    <div className="button">Request</div>
                </div>
            </div>
        </div>

        <div className="what-sets">
            <div className="title">
                <div>What sets us apart is our personalized</div>
                <div>We pride ourselves on our deep understanding of the unique Dubai real estate market.</div>
            </div>
            <div className="sets-content">
                <Swiper slidesPerView={'auto'}
                        spaceBetween={4}
                        loop={true}
                        pagination={true} modules={[Pagination]}
                >
                    <SwiperSlide>
                        <div className="set">
                            <svg id='icon-bg' xmlns="http://www.w3.org/2000/svg" width="89" height="89"
                                 viewBox="0 0 89 89"
                                 fill="none">
                                <path opacity="0.1"
                                      d="M52.5 89C23.5043 89 0 65.4957 0 36.5C0 7.50425 23.5043 -16 52.5 -16C81.4957 -16 105 7.50425 105 36.5C105 65.4957 81.4957 89 52.5 89ZM85.8637 57.248V56.6968C85.8637 51.8563 85.8637 49.646 82.4407 47.6877C81.3405 47.064 80.2104 46.4946 79.0545 45.9815C77.1278 45.1047 75.852 44.5325 74.13 42.0125C73.9244 41.7133 73.7214 41.4122 73.521 41.1095C71.7097 38.3533 70.4025 36.3687 65.4255 37.1562C55.6342 38.7103 54.9097 40.4323 54.4792 43.3408L54.411 43.8185C53.7758 48.071 53.6603 49.499 55.4348 51.3628C62.076 58.3295 66.0555 63.3537 67.263 66.2937C67.851 67.727 69.363 72.0688 68.3235 76.3633C74.6961 73.825 80.3684 69.798 84.8663 64.619C85.4438 62.6555 85.8637 60.209 85.8637 57.248V57.248ZM52.5 -6.37675C40.3358 -6.37675 29.3475 -1.30525 21.546 6.83225C22.4753 7.478 23.2837 8.38625 23.8402 9.63575C24.9112 12.035 24.9112 14.5077 24.9112 16.697C24.9112 18.419 24.9112 20.057 25.4625 21.2383C26.2185 22.8553 29.484 23.5483 32.3662 24.1468C33.4005 24.3673 34.461 24.5877 35.427 24.8555C38.0835 25.5905 40.1415 27.9792 41.7847 29.8955C42.4672 30.6882 43.4805 31.859 43.9897 32.153C44.2522 31.964 45.0975 31.0452 45.5122 29.5385C45.8377 28.3835 45.7432 27.365 45.276 26.8085C42.336 23.3435 42.4987 16.676 43.407 14.2138C44.835 10.334 49.2975 10.6228 52.563 10.8328C53.781 10.9115 54.9255 10.9902 55.7865 10.88C59.052 10.4705 60.06 5.49875 60.7687 4.5275C62.3017 2.4275 66.9952 -0.738251 69.9037 -2.69125C64.4254 -5.12729 58.4956 -6.383 52.5 -6.37675V-6.37675Z"
                                      fill="#191C38"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <path
                                    d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM16.355 13.952V13.847C16.355 12.925 16.355 12.504 15.703 12.131C15.4934 12.0122 15.2782 11.9037 15.058 11.806C14.691 11.639 14.448 11.53 14.12 11.05C14.0808 10.993 14.0422 10.9357 14.004 10.878C13.659 10.353 13.41 9.975 12.462 10.125C10.597 10.421 10.459 10.749 10.377 11.303L10.364 11.394C10.243 12.204 10.221 12.476 10.559 12.831C11.824 14.158 12.582 15.115 12.812 15.675C12.924 15.948 13.212 16.775 13.014 17.593C14.2278 17.1095 15.3083 16.3425 16.165 15.356C16.275 14.982 16.355 14.516 16.355 13.952V13.952ZM10 1.833C7.683 1.833 5.59 2.799 4.104 4.349C4.281 4.472 4.435 4.645 4.541 4.883C4.745 5.34 4.745 5.811 4.745 6.228C4.745 6.556 4.745 6.868 4.85 7.093C4.994 7.401 5.616 7.533 6.165 7.647C6.362 7.689 6.564 7.731 6.748 7.782C7.254 7.922 7.646 8.377 7.959 8.742C8.089 8.893 8.282 9.116 8.379 9.172C8.429 9.136 8.59 8.961 8.669 8.674C8.731 8.454 8.713 8.26 8.624 8.154C8.064 7.494 8.095 6.224 8.268 5.755C8.54 5.016 9.39 5.071 10.012 5.111C10.244 5.126 10.462 5.141 10.626 5.12C11.248 5.042 11.44 4.095 11.575 3.91C11.867 3.51 12.761 2.907 13.315 2.535C12.2715 2.07099 11.142 1.83181 10 1.833V1.833Z"
                                    fill="#191C38"/>
                            </svg>
                            <div className="title">
                                <div>Customs</div>
                                <div>Hassle-Free Customs Clearance</div>
                            </div>
                        </div>
                        <div className="set">
                            <svg id='icon-bg' xmlns="http://www.w3.org/2000/svg" width="89" height="89"
                                 viewBox="0 0 89 89"
                                 fill="none">
                                <path
                                    opacity="0.1"
                                    d="M87.5 80.25H17.5C16.3397 80.25 15.2269 79.7891 14.4064 78.9686C13.5859 78.1481 13.125 77.0353 13.125 75.875V-2.875C13.125 -4.03532 13.5859 -5.14812 14.4064 -5.96859C15.2269 -6.78906 16.3397 -7.25 17.5 -7.25H87.5C88.6603 -7.25 89.7731 -6.78906 90.5936 -5.96859C91.4141 -5.14812 91.875 -4.03532 91.875 -2.875V75.875C91.875 77.0353 91.4141 78.1481 90.5936 78.9686C89.7731 79.7891 88.6603 80.25 87.5 80.25ZM35 14.625V23.375H70V14.625H35ZM35 32.125V40.875H70V32.125H35ZM35 49.625V58.375H70V49.625H35Z"
                                    fill="#191C38"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM8 7V9H16V7H8ZM8 11V13H16V11H8ZM8 15V17H16V15H8Z"
                                    fill="#191C38"/>
                            </svg>
                            <div className="title">
                                <div>Customs</div>
                                <div>Hassle-Free Customs Clearance</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="set">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM8 7V9H16V7H8ZM8 11V13H16V11H8ZM8 15V17H16V15H8Z"
                                    fill="#191C38"/>
                            </svg>
                            <svg id='icon-bg' opacity='0.1' xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110"
                                 fill="none">
                                <path
                                    d="M131.667 96.8327H26.3333C24.5873 96.8327 22.9128 96.1391 21.6782 94.9045C20.4436 93.6699 19.75 91.9954 19.75 90.2494V-28.2507C19.75 -29.9967 20.4436 -31.6712 21.6782 -32.9058C22.9128 -34.1404 24.5873 -34.834 26.3333 -34.834H131.667C133.413 -34.834 135.087 -34.1404 136.322 -32.9058C137.556 -31.6712 138.25 -29.9967 138.25 -28.2507V90.2494C138.25 91.9954 137.556 93.6699 136.322 94.9045C135.087 96.1391 133.413 96.8327 131.667 96.8327ZM52.6667 -1.91732V11.2494H105.333V-1.91732H52.6667ZM52.6667 24.416V37.5827H105.333V24.416H52.6667ZM52.6667 50.7494V63.916H105.333V50.7494H52.6667Z"
                                    fill="#191C38"/>
                            </svg>
                            <div className="title">
                                <div>Licensing</div>
                                <div>Expertise in Licensing Procedures</div>
                            </div>
                        </div>
                        <div className="set">
                            <svg id='icon-bg' xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110"
                                 fill="none">
                                <path
                                    opacity='0.1' d="M26.3333 -28.25H131.667C133.413 -28.25 135.087 -27.5564 136.322 -26.3218C137.556 -25.0872 138.25 -23.4127 138.25 -21.6667V83.6667C138.25 85.4127 137.556 87.0872 136.322 88.3218C135.087 89.5564 133.413 90.25 131.667 90.25H26.3333C24.5873 90.25 22.9128 89.5564 21.6782 88.3218C20.4436 87.0872 19.75 85.4127 19.75 83.6667V-21.6667C19.75 -23.4127 20.4436 -25.0872 21.6782 -26.3218C22.9128 -27.5564 24.5873 -28.25 26.3333 -28.25V-28.25ZM72.4364 57.3333L118.981 10.7826L109.672 1.47375L72.4364 38.7157L53.8122 20.0914L44.5033 29.4003L72.4364 57.3333Z"
                                    fill="#191C38"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3V3ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                                    fill="#191C38"/>
                        </svg>
                        <div className="title">
                            <div>Customs</div>
                            <div>Hassle-Free Customs Clearance</div>
                        </div>
            </div>
        </SwiperSlide>
    </Swiper>
</div>
</div>

        <div className="params">
        <Swiper slidesPerView={'auto'}
                spaceBetween={4}
                loop={true}
                pagination={true} modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className="params-cont">
                        <div className="param">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M21.25 8.5C21.25 7.09554 21.25 6.39331 20.9129 5.88886C20.767 5.67048 20.5795 5.48298 20.3611 5.33706C19.9199 5.04224 19.3274 5.00529 18.246 5.00066C18.2501 5.29206 18.25 5.59655 18.25 5.91051L18.25 6V7.25H19.25C19.6642 7.25 20 7.58579 20 8C20 8.41421 19.6642 8.75 19.25 8.75H18.25V10.25H19.25C19.6642 10.25 20 10.5858 20 11C20 11.4142 19.6642 11.75 19.25 11.75H18.25V13.25H19.25C19.6642 13.25 20 13.5858 20 14C20 14.4142 19.6642 14.75 19.25 14.75H18.25V21.25H16.75V6C16.75 4.11438 16.75 3.17157 16.1642 2.58579C15.5784 2 14.6356 2 12.75 2H10.75C8.86438 2 7.92157 2 7.33579 2.58579C6.75 3.17157 6.75 4.11438 6.75 6V21.25H5.25V14.75H4.25C3.83579 14.75 3.5 14.4142 3.5 14C3.5 13.5858 3.83579 13.25 4.25 13.25H5.25V11.75H4.25C3.83579 11.75 3.5 11.4142 3.5 11C3.5 10.5858 3.83579 10.25 4.25 10.25H5.25V8.75H4.25C3.83579 8.75 3.5 8.41421 3.5 8C3.5 7.58579 3.83579 7.25 4.25 7.25H5.25V6L5.24999 5.9105C5.24996 5.59655 5.24992 5.29206 5.25403 5.00066C4.17262 5.00529 3.58008 5.04224 3.13886 5.33706C2.92048 5.48298 2.73298 5.67048 2.58706 5.88886C2.25 6.39331 2.25 7.09554 2.25 8.5V21.25H1.75C1.33579 21.25 1 21.5858 1 22C1 22.4142 1.33579 22.75 1.75 22.75H21.75C22.1642 22.75 22.5 22.4142 22.5 22C22.5 21.5858 22.1642 21.25 21.75 21.25H21.25V8.5ZM9 11.75C9 11.3358 9.33579 11 9.75 11H13.75C14.1642 11 14.5 11.3358 14.5 11.75C14.5 12.1642 14.1642 12.5 13.75 12.5H9.75C9.33579 12.5 9 12.1642 9 11.75ZM9 14.75C9 14.3358 9.33579 14 9.75 14H13.75C14.1642 14 14.5 14.3358 14.5 14.75C14.5 15.1642 14.1642 15.5 13.75 15.5H9.75C9.33579 15.5 9 15.1642 9 14.75ZM11.75 18.25C12.1642 18.25 12.5 18.5858 12.5 19V21.25H11V19C11 18.5858 11.3358 18.25 11.75 18.25ZM9 6.25C9 5.83579 9.33579 5.5 9.75 5.5H13.75C14.1642 5.5 14.5 5.83579 14.5 6.25C14.5 6.66421 14.1642 7 13.75 7H9.75C9.33579 7 9 6.66421 9 6.25ZM9 9.25C9 8.83579 9.33579 8.5 9.75 8.5H13.75C14.1642 8.5 14.5 8.83579 14.5 9.25C14.5 9.66421 14.1642 10 13.75 10H9.75C9.33579 10 9 9.66421 9 9.25Z"
                                      fill="#C29773"/>
                            </svg>

                            <div className="title">
                                <div>Company registration</div>
                                <div>Efficient and professional company registration services</div>
                            </div>
                        </div>
                        <div className="param">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M21.1009 8.00353C21.0442 7.99996 20.9825 7.99998 20.9186 8L20.9026 8.00001H18.3941C16.3264 8.00001 14.5572 9.62757 14.5572 11.75C14.5572 13.8724 16.3264 15.5 18.3941 15.5H20.9026L20.9186 15.5C20.9825 15.5 21.0442 15.5001 21.1009 15.4965C21.9408 15.4434 22.6835 14.7862 22.746 13.8682C22.7501 13.808 22.75 13.7431 22.75 13.683L22.75 13.6667V9.83334L22.75 9.81702C22.75 9.75688 22.7501 9.69199 22.746 9.6318C22.6835 8.71381 21.9408 8.05657 21.1009 8.00353ZM18.1717 12.75C18.704 12.75 19.1355 12.3023 19.1355 11.75C19.1355 11.1977 18.704 10.75 18.1717 10.75C17.6394 10.75 17.2078 11.1977 17.2078 11.75C17.2078 12.3023 17.6394 12.75 18.1717 12.75Z"
                                      fill="#C29773"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M20.9179 17C21.067 16.9961 21.1799 17.1342 21.1394 17.2778C20.9387 17.9902 20.62 18.5975 20.1088 19.1088C19.3604 19.8571 18.4114 20.1892 17.239 20.3469C16.0998 20.5 14.6442 20.5 12.8064 20.5H10.6936C8.85583 20.5 7.40019 20.5 6.26098 20.3469C5.08856 20.1892 4.13961 19.8571 3.39124 19.1088C2.64288 18.3604 2.31076 17.4114 2.15314 16.239C1.99997 15.0998 1.99998 13.6442 2 11.8064V11.6936C1.99998 9.85583 1.99997 8.40019 2.15314 7.26098C2.31076 6.08856 2.64288 5.13961 3.39124 4.39124C4.13961 3.64288 5.08856 3.31076 6.26098 3.15314C7.40019 2.99997 8.85582 2.99998 10.6936 3L12.8064 3C14.6442 2.99998 16.0998 2.99997 17.239 3.15314C18.4114 3.31076 19.3604 3.64288 20.1088 4.39124C20.62 4.90252 20.9386 5.50974 21.1394 6.22218C21.1799 6.36575 21.067 6.50387 20.9179 6.5L18.394 6.50001C15.5574 6.50001 13.0571 8.74091 13.0571 11.75C13.0571 14.7591 15.5574 17 18.394 17L20.9179 17ZM5.75 7C5.33579 7 5 7.33579 5 7.75C5 8.16421 5.33579 8.5 5.75 8.5H9.75C10.1642 8.5 10.5 8.16421 10.5 7.75C10.5 7.33579 10.1642 7 9.75 7H5.75Z"
                                      fill="#C29773"/>
                            </svg>

                            <div className="title">
                                <div>Bank account</div>
                                <div>Open a corporate bank account effortlessly</div>
                            </div>
                        </div>
                        <div className="param">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM8 9.25C7.58579 9.25 7.25 9.58579 7.25 10C7.25 10.4142 7.58579 10.75 8 10.75H16C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25H8ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13C13.4142 14.75 13.75 14.4142 13.75 14C13.75 13.5858 13.4142 13.25 13 13.25H8Z"
                                      fill="#C29773"/>
                            </svg>

                            <div className="title">
                                <div>Attorney power</div>
                                <div>Legal support for your business needs in the UAE</div>
                            </div>
                        </div>
                        <div className="param">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M2.75458 14.715L3.27222 16.6469C3.87647 18.902 4.17859 20.0295 4.86351 20.7608C5.40432 21.3382 6.10421 21.7423 6.87466 21.9219C7.85044 22.1494 8.97798 21.8473 11.2331 21.2431C13.4881 20.6388 14.6157 20.3367 15.347 19.6518C15.4077 19.5949 15.4664 19.5363 15.5233 19.4761C15.1891 19.448 14.852 19.3942 14.5094 19.3261C13.8133 19.1877 12.9862 18.9661 12.008 18.704L11.9012 18.6753L11.8764 18.6687C10.8121 18.3835 9.92281 18.1448 9.21277 17.8883C8.46607 17.6185 7.7876 17.286 7.21148 16.7464C6.41753 16.0028 5.86193 15.0404 5.61491 13.9811C5.43567 13.2123 5.48691 12.4585 5.62666 11.6769C5.76058 10.928 6.00109 10.0305 6.28926 8.95515L6.28926 8.95514L6.82365 6.96077L6.84245 6.89062C4.9219 7.40799 3.91101 7.71408 3.23687 8.34548C2.65945 8.88629 2.25537 9.58617 2.07573 10.3566C1.84821 11.3324 2.15033 12.4599 2.75458 14.715Z"
                                    fill="#C29773"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M20.8293 10.7154L20.3116 12.6473C19.7074 14.9024 19.4052 16.0299 18.7203 16.7612C18.1795 17.3386 17.4796 17.7427 16.7092 17.9223C16.6129 17.9448 16.5152 17.9621 16.415 17.9744C15.4999 18.0873 14.3834 17.7881 12.3508 17.2435C10.0957 16.6392 8.96815 16.3371 8.23687 15.6522C7.65945 15.1114 7.25537 14.4115 7.07573 13.641C6.84821 12.6652 7.15033 11.5377 7.75458 9.28263L8.27222 7.35077C8.3591 7.02654 8.43979 6.7254 8.51621 6.44561C8.97128 4.77957 9.27709 3.86298 9.86351 3.23687C10.4043 2.65945 11.1042 2.25537 11.8747 2.07573C12.8504 1.84821 13.978 2.15033 16.2331 2.75458C18.4881 3.35883 19.6157 3.66095 20.347 4.34587C20.9244 4.88668 21.3285 5.58657 21.5081 6.35703C21.7356 7.3328 21.4335 8.46034 20.8293 10.7154ZM11.0524 9.80589C11.1596 9.40579 11.5709 9.16835 11.971 9.27556L16.8006 10.5697C17.2007 10.6769 17.4381 11.0881 17.3309 11.4882C17.2237 11.8883 16.8125 12.1257 16.4124 12.0185L11.5827 10.7244C11.1826 10.6172 10.9452 10.206 11.0524 9.80589ZM10.2756 12.7033C10.3828 12.3032 10.794 12.0658 11.1941 12.173L14.0919 12.9495C14.492 13.0567 14.7294 13.4679 14.6222 13.868C14.515 14.2681 14.1038 14.5056 13.7037 14.3984L10.8059 13.6219C10.4058 13.5147 10.1683 13.1034 10.2756 12.7033Z"
                                      fill="#C29773"/>
                            </svg>

                            <div className="title">
                                <div>Resident Visa</div>
                                <div>Secure your residency in the UAE with a good expert</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="params-cont">
                        <div className="param">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22Z"
                                      fill="black"/>
                                <path
                                    d="M19.3517 7.61665L15.3929 4.05375C14.2651 3.03868 13.7012 2.53114 13.0092 2.26562L13 5.00011C13 7.35713 13 8.53564 13.7322 9.26787C14.4645 10.0001 15.643 10.0001 18 10.0001H21.5801C21.2175 9.29588 20.5684 8.71164 19.3517 7.61665Z"
                                    fill="#191C38"/>
                            </svg>

                            <div className="title">
                                <div>Accounting</div>
                                <div>Professional financial management services</div>
                            </div>
                        </div>
                        <div className="param">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M2 1.25C1.58579 1.25 1.25 1.58579 1.25 2C1.25 2.41421 1.58579 2.75 2 2.75H4V10.5C4 13.5641 4 15.0962 5.00421 16.0481C6.00841 17 7.62465 17 10.8571 17H11.25V20.5365L9.66459 21.3292C9.29411 21.5144 9.14394 21.9649 9.32918 22.3354C9.51442 22.7059 9.96493 22.8561 10.3354 22.6708L12 21.8385L13.6646 22.6708C14.0351 22.8561 14.4856 22.7059 14.6708 22.3354C14.8561 21.9649 14.7059 21.5144 14.3354 21.3292L12.75 20.5365V17H13.1429C16.3753 17 17.9916 17 18.9958 16.0481C20 15.0962 20 13.5641 20 10.5V2.75H22C22.4142 2.75 22.75 2.41421 22.75 2C22.75 1.58579 22.4142 1.25 22 1.25H2ZM15.5303 7.96967C15.8232 8.26256 15.8232 8.73744 15.5303 9.03033L14.2131 10.3476C14.0681 10.4927 13.9113 10.6496 13.7612 10.7642C13.5852 10.8984 13.3335 11.0429 13 11.0429C12.6665 11.0429 12.4148 10.8984 12.2388 10.7642C12.0887 10.6496 11.9319 10.4927 11.7869 10.3476L11.1768 9.73744C11.1067 9.66738 11.0499 9.61061 11 9.56229C10.9501 9.61061 10.8933 9.66738 10.8232 9.73744L9.53033 11.0303C9.23744 11.3232 8.76256 11.3232 8.46967 11.0303C8.17678 10.7374 8.17678 10.2626 8.46967 9.96967L9.78691 8.65241C9.9319 8.50732 10.0887 8.35042 10.2388 8.23584C10.4148 8.10161 10.6665 7.95711 11 7.95711C11.3335 7.95711 11.5852 8.10161 11.7612 8.23584C11.9113 8.35041 12.0681 8.50728 12.213 8.65235L12.8232 9.26256C12.8933 9.33262 12.9501 9.38939 13 9.43771C13.0499 9.38939 13.1067 9.33262 13.1768 9.26256L14.4697 7.96967C14.7626 7.67678 15.2374 7.67678 15.5303 7.96967Z"
                                      fill="#191C38"/>
                            </svg>

                            <div className="title">
                                <div>Trademark registration</div>
                                <div>Protect your brand in the UAE market</div>
                            </div>
                        </div>
                        <div className="param">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M4.00691 9.10478L10.0069 3.77144C11.1436 2.76108 12.8564 2.76108 13.9931 3.77144L19.9931 9.10478C20.6336 9.67408 21 10.4901 21 11.347V21.2498H22C22.4142 21.2498 22.75 21.5856 22.75 21.9998C22.75 22.414 22.4142 22.7498 22 22.7498H2C1.58579 22.7498 1.25 22.414 1.25 21.9998C1.25 21.5856 1.58579 21.2498 2 21.2498H3V11.347C3 10.4901 3.36644 9.67408 4.00691 9.10478ZM9.25 8.99981C9.25 8.58559 9.58579 8.24981 10 8.24981H14C14.4142 8.24981 14.75 8.58559 14.75 8.99981C14.75 9.41402 14.4142 9.74981 14 9.74981H10C9.58579 9.74981 9.25 9.41402 9.25 8.99981ZM14.052 11.2498C14.9505 11.2498 15.6997 11.2498 16.2945 11.3297C16.9223 11.4141 17.4891 11.5998 17.9445 12.0553C18.4 12.5107 18.5857 13.0775 18.6701 13.7053C18.7501 14.3001 18.75 15.0493 18.75 15.9478L18.75 21.2498H17.25V15.9998C17.25 15.0358 17.2484 14.3882 17.1835 13.9052C17.1214 13.4437 17.0142 13.2462 16.8839 13.1159C16.7536 12.9856 16.5561 12.8784 16.0946 12.8163C15.6116 12.7514 14.964 12.7498 14 12.7498H10C9.03599 12.7498 8.38843 12.7514 7.90539 12.8163C7.44393 12.8784 7.24643 12.9856 7.11612 13.1159C6.9858 13.2462 6.87858 13.4437 6.81654 13.9052C6.75159 14.3882 6.75 15.0358 6.75 15.9998V21.2498H5.25L5.25 15.9478C5.24997 15.0493 5.24994 14.3001 5.32991 13.7053C5.41432 13.0775 5.59999 12.5107 6.05546 12.0553C6.51093 11.5998 7.07773 11.4141 7.70552 11.3297C8.3003 11.2498 9.04952 11.2498 9.948 11.2498H14.052ZM8.25 15.4998C8.25 15.0856 8.58579 14.7498 9 14.7498H15C15.4142 14.7498 15.75 15.0856 15.75 15.4998C15.75 15.914 15.4142 16.2498 15 16.2498H9C8.58579 16.2498 8.25 15.914 8.25 15.4998ZM8.25 18.4998C8.25 18.0856 8.58579 17.7498 9 17.7498H15C15.4142 17.7498 15.75 18.0856 15.75 18.4998C15.75 18.914 15.4142 19.2498 15 19.2498H9C8.58579 19.2498 8.25 18.914 8.25 18.4998Z"
                                      fill="#191C38"/>
                            </svg>

                            <div className="title">
                                <div>Mainland</div>
                                <div>Navigating business regulations in the UAE mainland</div>
                            </div>
                        </div>
                        <div className="param">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                                    fill="#191C38"/>
                                <path
                                    d="M2.72778 5.81803C2.62732 5.41619 2.22012 5.17186 1.81828 5.27233C1.41643 5.37279 1.17211 5.77999 1.27257 6.18184L1.65454 7.7097C2.3593 10.5287 4.49604 12.7495 7.25018 13.5787L7.25018 18.0519C7.25015 18.9504 7.25012 19.6996 7.33009 20.2944C7.41449 20.9222 7.60016 21.489 8.05563 21.9445C8.5111 22.3999 9.0779 22.5856 9.7057 22.67C10.3005 22.75 11.0497 22.75 11.9482 22.7499H12.0522C12.9507 22.75 13.6999 22.75 14.2947 22.67C14.9225 22.5856 15.4892 22.3999 15.9447 21.9445C16.4002 21.489 16.5859 20.9222 16.6703 20.2944C16.7502 19.6996 16.7502 18.9504 16.7502 18.052L16.7502 13.859C17.7313 14.1514 18.4808 15.0039 18.6058 16.067L19.2553 21.5876C19.3037 21.9989 19.6764 22.2932 20.0878 22.2448C20.4992 22.1964 20.7934 21.8237 20.745 21.4123L20.0956 15.8918C19.8512 13.815 18.0912 12.2499 16.0002 12.2499H8.0847C5.64125 11.6764 3.71957 9.78517 3.10975 7.3459L2.72778 5.81803Z"
                                    fill="#191C38"/>
                            </svg>

                            <div className="title">
                                <div>UAE employment</div>
                                <div>Hire skilled professionals for your business</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

        <div className="pdfs">
            <div className="pdf">
                <div className="title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                        <path
                            d="M17.1302 18.9337C16.6607 18.906 15.5319 18.9714 14.4015 19.1816C13.7475 18.5341 13.1813 17.7185 12.7612 17.0458C14.1073 13.2597 13.2548 12.1836 12.1073 12.1836C11.2061 12.1836 10.7562 13.1139 10.8563 14.1417C10.907 14.6591 11.3549 15.7462 11.9062 16.7789C11.568 17.6491 10.9644 19.1198 10.3652 20.1842C9.6639 20.3927 9.06235 20.6243 8.63065 20.8198C6.48024 21.798 6.30744 23.1042 6.75491 23.6577C7.6045 24.7091 9.41467 23.802 11.231 20.6243C12.4746 20.2784 14.1106 19.8176 14.2581 19.8176C14.2751 19.8176 14.2984 19.8229 14.3254 19.8314C15.2319 20.6133 16.3026 21.5087 17.1838 21.6265C18.4589 21.798 19.1847 20.8934 19.1344 20.3309C19.0845 19.768 18.7484 19.0287 17.1302 18.9337ZM9.08064 22.3612C8.55507 22.9725 7.70502 23.5589 7.40503 23.3639C7.10465 23.1684 7.05478 22.6059 7.73035 21.9695C8.40546 21.3339 9.53554 21.0039 9.70544 20.9421C9.90614 20.869 9.95601 20.9421 9.95601 21.0401C9.95601 21.138 9.60576 21.7492 9.08064 22.3612ZM11.3818 14.1412C11.3316 13.5292 11.4562 12.9424 11.9817 12.8692C12.5065 12.7953 12.757 13.3825 12.5571 14.3364C12.3569 15.2914 12.2564 15.9267 12.1566 16.001C12.0565 16.0742 11.9572 15.8291 11.9572 15.8291C11.7566 15.4373 11.4317 14.7525 11.3818 14.1412ZM11.5821 19.8903C11.8567 19.4493 12.5572 17.6644 12.5572 17.6644C12.7072 17.9338 13.8821 19.3026 13.8821 19.3026C13.8821 19.3026 12.0815 19.6949 11.5821 19.8903ZM17.0325 20.6722C16.2826 20.5755 15.0076 19.6936 15.0076 19.6936C14.8327 19.6205 16.4048 19.4116 17.0084 19.4494C17.7841 19.4986 18.0591 19.8168 18.0591 20.1346C18.0591 20.4528 17.7841 20.7702 17.0325 20.6722Z"
                            fill="#B4B4B4"/>
                        <path
                            d="M23.4794 5.88765L17.9816 0.509249L17.461 0H16.724H5.5119C2.8646 0 0.710896 2.10721 0.710896 4.6977V5.057H0V10.6752H0.710896V23.3027C0.710896 25.8928 2.86466 28 5.51196 28H19.1981C21.8462 28 24 25.8928 24 23.3027V7.11784V6.39728L23.4794 5.88765ZM19.198 26.2605H5.5119C3.84172 26.2605 2.48819 24.9364 2.48819 23.3027V10.6751H11.2827V5.05694H2.48819V4.69765C2.48819 3.06348 3.84172 1.73895 5.5119 1.73895H16.2986V5.06908C16.2986 6.43014 17.4273 7.53357 18.8187 7.53357H22.2226V23.3026C22.2226 24.9365 20.8686 26.2605 19.198 26.2605ZM2.61286 9.08281V6.48221C2.61286 6.43632 2.65104 6.39886 2.69806 6.39886H3.54268C3.68189 6.39886 3.81025 6.42123 3.92491 6.46514C4.03834 6.50862 4.13802 6.5696 4.22115 6.64682C4.30507 6.72442 4.36947 6.81875 4.41308 6.92687C4.45668 7.03291 4.47916 7.14879 4.47916 7.27107C4.47916 7.39587 4.45668 7.51246 4.41263 7.61735C4.36902 7.72224 4.30462 7.81527 4.22154 7.89374C4.13886 7.97178 4.03873 8.03314 3.92407 8.0758C3.81025 8.11845 3.68189 8.14 3.54268 8.14H3.18623V9.08287C3.18623 9.1288 3.14804 9.16615 3.10108 9.16615H2.69812C2.65104 9.16615 2.61286 9.12875 2.61286 9.08281ZM5.21778 9.08281V6.48221C5.21778 6.43632 5.25602 6.39886 5.30298 6.39886H6.23649C6.41388 6.39886 6.57014 6.42774 6.70185 6.48461C6.83524 6.54269 6.95443 6.635 7.05669 6.75854C7.10946 6.82357 7.15139 6.89548 7.18169 6.9727C7.21121 7.04789 7.23363 7.12921 7.24816 7.21371C7.26231 7.29743 7.27058 7.38767 7.27349 7.48479C7.276 7.57743 7.27723 7.67702 7.27723 7.78267C7.27723 7.88789 7.276 7.98753 7.27349 8.08017C7.27058 8.17691 7.26231 8.26753 7.24816 8.35164C7.23363 8.43619 7.21121 8.51707 7.18169 8.59221C7.15094 8.67025 7.10901 8.74222 7.05702 8.80598C6.95404 8.93078 6.83474 9.02304 6.7018 9.08029C6.57131 9.13717 6.41472 9.16605 6.23644 9.16605H5.30293C5.25597 9.16615 5.21778 9.12875 5.21778 9.08281ZM9.66697 7.54582C9.71394 7.54582 9.75212 7.58323 9.75212 7.62917V7.98354C9.75212 8.02948 9.71394 8.06688 9.66697 8.06688H8.64703V9.08292C8.64703 9.12886 8.60879 9.16621 8.56183 9.16621H8.15881C8.11185 9.16621 8.07366 9.12886 8.07366 9.08292V6.48232C8.07366 6.43643 8.11185 6.39897 8.15881 6.39897H9.70477C9.75167 6.39897 9.78997 6.43638 9.78997 6.48232V6.83669C9.78997 6.88263 9.75173 6.92003 9.70477 6.92003H8.64703V7.54588L9.66697 7.54582Z"
                            fill="#B4B4B4"/>
                        <path
                            d="M3.80459 7.53078C3.87235 7.47106 3.90511 7.38613 3.90511 7.27107C3.90511 7.15644 3.87229 7.07152 3.80459 7.0118C3.73398 6.95 3.6409 6.91992 3.51958 6.91992H3.18555V7.62255H3.51958C3.64084 7.6226 3.73398 7.59258 3.80459 7.53078Z"
                            fill="#B4B4B4"/>
                        <path
                            d="M6.41705 8.61198C6.48022 8.58879 6.53462 8.55144 6.58325 8.49779C6.63603 8.4401 6.66924 8.35719 6.68215 8.2511C6.69669 8.13035 6.70373 7.97269 6.70373 7.78248C6.70373 7.5919 6.69669 7.43418 6.68215 7.31387C6.66924 7.20744 6.63603 7.12454 6.58365 7.06723C6.53506 7.01352 6.47893 6.97541 6.41749 6.95298C6.35141 6.92821 6.27583 6.91602 6.19152 6.91602H5.79102V8.64851H6.19152C6.27538 8.64857 6.35141 8.63637 6.41705 8.61198Z"
                            fill="#B4B4B4"/>
                    </svg>

                    <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="6" width="36" height="36" rx="18" fill="#191C38"/>
                        <g filter="url(#filter0_d_230_2095)">
                            <path
                                d="M14.5 29.834H29.5V31.5007H14.5V29.834ZM22.8333 21.5007H28.6667L22 28.1673L15.3333 21.5007H21.1667V14.834H22.8333V21.5007Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_230_2095" x="0.1" y="0.433985" width="43.8" height="45.466"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="7.2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0980392 0 0 0 0 0.109804 0 0 0 0 0.219608 0 0 0 0.5 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_230_2095"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_230_2095"
                                         result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div>Reva Certificate</div>
            </div>

            <div className="pdf">
                <div className="title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                        <path
                            d="M17.1302 18.9337C16.6607 18.906 15.5319 18.9714 14.4015 19.1816C13.7475 18.5341 13.1813 17.7185 12.7612 17.0458C14.1073 13.2597 13.2548 12.1836 12.1073 12.1836C11.2061 12.1836 10.7562 13.1139 10.8563 14.1417C10.907 14.6591 11.3549 15.7462 11.9062 16.7789C11.568 17.6491 10.9644 19.1198 10.3652 20.1842C9.6639 20.3927 9.06235 20.6243 8.63065 20.8198C6.48024 21.798 6.30744 23.1042 6.75491 23.6577C7.6045 24.7091 9.41467 23.802 11.231 20.6243C12.4746 20.2784 14.1106 19.8176 14.2581 19.8176C14.2751 19.8176 14.2984 19.8229 14.3254 19.8314C15.2319 20.6133 16.3026 21.5087 17.1838 21.6265C18.4589 21.798 19.1847 20.8934 19.1344 20.3309C19.0845 19.768 18.7484 19.0287 17.1302 18.9337ZM9.08064 22.3612C8.55507 22.9725 7.70502 23.5589 7.40503 23.3639C7.10465 23.1684 7.05478 22.6059 7.73035 21.9695C8.40546 21.3339 9.53554 21.0039 9.70544 20.9421C9.90614 20.869 9.95601 20.9421 9.95601 21.0401C9.95601 21.138 9.60576 21.7492 9.08064 22.3612ZM11.3818 14.1412C11.3316 13.5292 11.4562 12.9424 11.9817 12.8692C12.5065 12.7953 12.757 13.3825 12.5571 14.3364C12.3569 15.2914 12.2564 15.9267 12.1566 16.001C12.0565 16.0742 11.9572 15.8291 11.9572 15.8291C11.7566 15.4373 11.4317 14.7525 11.3818 14.1412ZM11.5821 19.8903C11.8567 19.4493 12.5572 17.6644 12.5572 17.6644C12.7072 17.9338 13.8821 19.3026 13.8821 19.3026C13.8821 19.3026 12.0815 19.6949 11.5821 19.8903ZM17.0325 20.6722C16.2826 20.5755 15.0076 19.6936 15.0076 19.6936C14.8327 19.6205 16.4048 19.4116 17.0084 19.4494C17.7841 19.4986 18.0591 19.8168 18.0591 20.1346C18.0591 20.4528 17.7841 20.7702 17.0325 20.6722Z"
                            fill="#B4B4B4"/>
                        <path
                            d="M23.4794 5.88765L17.9816 0.509249L17.461 0H16.724H5.5119C2.8646 0 0.710896 2.10721 0.710896 4.6977V5.057H0V10.6752H0.710896V23.3027C0.710896 25.8928 2.86466 28 5.51196 28H19.1981C21.8462 28 24 25.8928 24 23.3027V7.11784V6.39728L23.4794 5.88765ZM19.198 26.2605H5.5119C3.84172 26.2605 2.48819 24.9364 2.48819 23.3027V10.6751H11.2827V5.05694H2.48819V4.69765C2.48819 3.06348 3.84172 1.73895 5.5119 1.73895H16.2986V5.06908C16.2986 6.43014 17.4273 7.53357 18.8187 7.53357H22.2226V23.3026C22.2226 24.9365 20.8686 26.2605 19.198 26.2605ZM2.61286 9.08281V6.48221C2.61286 6.43632 2.65104 6.39886 2.69806 6.39886H3.54268C3.68189 6.39886 3.81025 6.42123 3.92491 6.46514C4.03834 6.50862 4.13802 6.5696 4.22115 6.64682C4.30507 6.72442 4.36947 6.81875 4.41308 6.92687C4.45668 7.03291 4.47916 7.14879 4.47916 7.27107C4.47916 7.39587 4.45668 7.51246 4.41263 7.61735C4.36902 7.72224 4.30462 7.81527 4.22154 7.89374C4.13886 7.97178 4.03873 8.03314 3.92407 8.0758C3.81025 8.11845 3.68189 8.14 3.54268 8.14H3.18623V9.08287C3.18623 9.1288 3.14804 9.16615 3.10108 9.16615H2.69812C2.65104 9.16615 2.61286 9.12875 2.61286 9.08281ZM5.21778 9.08281V6.48221C5.21778 6.43632 5.25602 6.39886 5.30298 6.39886H6.23649C6.41388 6.39886 6.57014 6.42774 6.70185 6.48461C6.83524 6.54269 6.95443 6.635 7.05669 6.75854C7.10946 6.82357 7.15139 6.89548 7.18169 6.9727C7.21121 7.04789 7.23363 7.12921 7.24816 7.21371C7.26231 7.29743 7.27058 7.38767 7.27349 7.48479C7.276 7.57743 7.27723 7.67702 7.27723 7.78267C7.27723 7.88789 7.276 7.98753 7.27349 8.08017C7.27058 8.17691 7.26231 8.26753 7.24816 8.35164C7.23363 8.43619 7.21121 8.51707 7.18169 8.59221C7.15094 8.67025 7.10901 8.74222 7.05702 8.80598C6.95404 8.93078 6.83474 9.02304 6.7018 9.08029C6.57131 9.13717 6.41472 9.16605 6.23644 9.16605H5.30293C5.25597 9.16615 5.21778 9.12875 5.21778 9.08281ZM9.66697 7.54582C9.71394 7.54582 9.75212 7.58323 9.75212 7.62917V7.98354C9.75212 8.02948 9.71394 8.06688 9.66697 8.06688H8.64703V9.08292C8.64703 9.12886 8.60879 9.16621 8.56183 9.16621H8.15881C8.11185 9.16621 8.07366 9.12886 8.07366 9.08292V6.48232C8.07366 6.43643 8.11185 6.39897 8.15881 6.39897H9.70477C9.75167 6.39897 9.78997 6.43638 9.78997 6.48232V6.83669C9.78997 6.88263 9.75173 6.92003 9.70477 6.92003H8.64703V7.54588L9.66697 7.54582Z"
                            fill="#B4B4B4"/>
                        <path
                            d="M3.80459 7.53078C3.87235 7.47106 3.90511 7.38613 3.90511 7.27107C3.90511 7.15644 3.87229 7.07152 3.80459 7.0118C3.73398 6.95 3.6409 6.91992 3.51958 6.91992H3.18555V7.62255H3.51958C3.64084 7.6226 3.73398 7.59258 3.80459 7.53078Z"
                            fill="#B4B4B4"/>
                        <path
                            d="M6.41705 8.61198C6.48022 8.58879 6.53462 8.55144 6.58325 8.49779C6.63603 8.4401 6.66924 8.35719 6.68215 8.2511C6.69669 8.13035 6.70373 7.97269 6.70373 7.78248C6.70373 7.5919 6.69669 7.43418 6.68215 7.31387C6.66924 7.20744 6.63603 7.12454 6.58365 7.06723C6.53506 7.01352 6.47893 6.97541 6.41749 6.95298C6.35141 6.92821 6.27583 6.91602 6.19152 6.91602H5.79102V8.64851H6.19152C6.27538 8.64857 6.35141 8.63637 6.41705 8.61198Z"
                            fill="#B4B4B4"/>
                    </svg>

                    <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="6" width="36" height="36" rx="18" fill="#191C38"/>
                        <g filter="url(#filter0_d_230_2095)">
                            <path
                                d="M14.5 29.834H29.5V31.5007H14.5V29.834ZM22.8333 21.5007H28.6667L22 28.1673L15.3333 21.5007H21.1667V14.834H22.8333V21.5007Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_230_2095" x="0.1" y="0.433985" width="43.8" height="45.466"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="7.2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0980392 0 0 0 0 0.109804 0 0 0 0 0.219608 0 0 0 0.5 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_230_2095"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_230_2095"
                                         result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div>Reva Certificate</div>
            </div>
        </div>

        <Footer active={"Home"}/>
    </div>)
}

export default AboutUsPhone