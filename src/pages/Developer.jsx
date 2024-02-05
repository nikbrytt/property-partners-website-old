import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import '../styles/Pages/Developer.scss'
import companiesInfo from '../data/companiesInfo.json'
import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import GetConsult from "../components/GetConsult.jsx";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

const Developers = () => {
    const {id} = useParams();
    const [filterText, setFilterText] = useState('');
    const company = companiesInfo.find(item => item.value.toLowerCase() === id.toLowerCase());

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    if (!company) {
        return <div>Company not found</div>;
    }

    const filteredCompanies = companiesInfo.filter(
        company =>
            company.title !== null &&
            company.logo_src !== null &&
            company.title.toLowerCase().includes(filterText.toLowerCase())
    );


    console.log(companiesInfo)
    return (<div className='developer-wrapper'>
            <Header/>
            <div className="developer-container">
                <div className="developer-baner">
                    <div className="text-content">
                        <div className="text-content-block">
                            <div className="header">
                                <div className="title">
                                    <div>Developer</div>
                                    <div>{company.title}</div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="104" viewBox="0 0 113 104"
                                         fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M106.43 34.1446C106.43 26.7669 106.43 23.0781 104.659 20.4282C103.892 19.2811 102.906 18.2961 101.758 17.5296C99.4395 15.9809 96.3254 15.7868 90.6418 15.7625C90.6633 17.2932 90.6628 18.8927 90.6628 20.542V21.012V27.5783H95.9186C98.0956 27.5783 99.8605 29.3422 99.8605 31.5181C99.8605 33.6939 98.0956 35.4578 95.9186 35.4578H90.6628V43.3373H95.9186C98.0956 43.3373 99.8605 45.1013 99.8605 47.2771C99.8605 49.4529 98.0956 51.2169 95.9186 51.2169H90.6628V59.0964H95.9186C98.0956 59.0964 99.8605 60.8603 99.8605 63.0361C99.8605 65.2119 98.0956 66.9759 95.9186 66.9759H90.6628V101.12H82.7791V21.012C82.7791 11.1069 82.7791 6.15427 79.7002 3.07716C76.6214 -3.13104e-07 71.6662 0 61.7558 0H51.2442C41.3337 0 36.3785 -3.13104e-07 33.2997 3.07716C30.2209 6.15427 30.2209 11.1069 30.2209 21.012V101.12H22.3372V66.9759H17.0814C14.9044 66.9759 13.1395 65.2119 13.1395 63.0361C13.1395 60.8603 14.9044 59.0964 17.0814 59.0964H22.3372V51.2169H17.0814C14.9044 51.2169 13.1395 49.4529 13.1395 47.2771C13.1395 45.1013 14.9044 43.3373 17.0814 43.3373H22.3372V35.4578H17.0814C14.9044 35.4578 13.1395 33.6939 13.1395 31.5181C13.1395 29.3422 14.9044 27.5783 17.0814 27.5783H22.3372V21.012L22.3372 20.5419C22.337 18.8927 22.3368 17.2932 22.3584 15.7625C16.6747 15.7868 13.5604 15.9809 11.2415 17.5296C10.0937 18.2961 9.10822 19.2811 8.34129 20.4282C6.56977 23.0781 6.56977 26.7669 6.56977 34.1446V101.12H3.94186C1.76485 101.12 0 102.884 0 105.06C0 107.236 1.76485 109 3.94186 109H109.058C111.235 109 113 107.236 113 105.06C113 102.884 111.235 101.12 109.058 101.12H106.43V34.1446ZM42.0465 51.2169C42.0465 49.0411 43.8114 47.2771 45.9884 47.2771H67.0116C69.1886 47.2771 70.9535 49.0411 70.9535 51.2169C70.9535 53.3927 69.1886 55.1566 67.0116 55.1566H45.9884C43.8114 55.1566 42.0465 53.3927 42.0465 51.2169ZM42.0465 66.9759C42.0465 64.8001 43.8114 63.0361 45.9884 63.0361H67.0116C69.1886 63.0361 70.9535 64.8001 70.9535 66.9759C70.9535 69.1517 69.1886 70.9157 67.0116 70.9157H45.9884C43.8114 70.9157 42.0465 69.1517 42.0465 66.9759ZM56.5 85.3615C58.677 85.3615 60.4419 87.1254 60.4419 89.3012V101.12H52.5581V89.3012C52.5581 87.1254 54.323 85.3615 56.5 85.3615ZM42.0465 22.3253C42.0465 20.1495 43.8114 18.3855 45.9884 18.3855H67.0116C69.1886 18.3855 70.9535 20.1495 70.9535 22.3253C70.9535 24.5012 69.1886 26.2651 67.0116 26.2651H45.9884C43.8114 26.2651 42.0465 24.5012 42.0465 22.3253ZM42.0465 38.0843C42.0465 35.9085 43.8114 34.1446 45.9884 34.1446H67.0116C69.1886 34.1446 70.9535 35.9085 70.9535 38.0843C70.9535 40.2602 69.1886 42.0241 67.0116 42.0241H45.9884C43.8114 42.0241 42.0465 40.2602 42.0465 38.0843Z"
                                              fill="white" fill-opacity="0.1"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="content">
                                <div className="info-block">
                                    <div className="names">
                                        <div className="name">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                 viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M7.50427 2.37628L3.71795 0.405308C1.67521 -0.647676 0 0.423308 0 2.78127V16.137C0 17.163 0.811966 18 1.80342 18H8.1453C8.61538 18 9 17.595 9 17.1V4.86924C9 3.92426 8.32479 2.79927 7.50427 2.37628ZM5.98291 10.5751H3.01709C2.66667 10.5751 2.37607 10.2691 2.37607 9.90012C2.37607 9.53113 2.66667 9.22513 3.01709 9.22513H5.98291C6.33333 9.22513 6.62393 9.53113 6.62393 9.90012C6.62393 10.2691 6.34188 10.5751 5.98291 10.5751ZM5.98291 6.97521H3.01709C2.66667 6.97521 2.37607 6.66922 2.37607 6.30022C2.37607 5.93123 2.66667 5.62523 3.01709 5.62523H5.98291C6.33333 5.62523 6.62393 5.93123 6.62393 6.30022C6.62393 6.66922 6.34188 6.97521 5.98291 6.97521Z"
                                                    fill="#191C38"/>
                                                <path
                                                    d="M18 14V15.4747C18 16.8687 16.88 18 15.5 18H10.97C10.43 18 10 17.5657 10 17.0202V14.8384C11.07 14.9697 12.2 14.6566 13.01 14C13.69 14.5556 14.56 14.8889 15.51 14.8889C16.44 14.8889 17.31 14.5556 18 14Z"
                                                    fill="#191C38"/>
                                                <path
                                                    d="M18 11.7866V11.7959C17.92 13.0194 16.85 14 15.51 14C14.12 14 13.01 12.9447 13.01 11.6652C13.01 13.0941 11.6 14.2428 10 13.9533V8.93806C10 8.34034 10.59 7.89205 11.22 8.0228L13.01 8.39638L13.49 8.49911L15.53 8.92872C16.02 9.02212 16.47 9.18089 16.86 9.41437C16.86 9.42371 16.87 9.42371 16.87 9.42371C16.97 9.48908 17.07 9.5638 17.16 9.64785C17.62 10.0775 17.92 10.7032 17.99 11.6185C17.99 11.6745 18 11.7305 18 11.7866Z"
                                                    fill="#191C38"/>
                                            </svg>

                                            Developments
                                        </div>
                                        <div className="name">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                 viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M17.8601 12.4681L12.3413 2.90144C12.2854 2.80674 12.2045 2.72929 12.1075 2.67761C12.0104 2.62592 11.901 2.60199 11.7912 2.60846L6.87039 2.90144C6.77703 2.90669 6.6862 2.93377 6.6052 2.9805C6.52421 3.02723 6.4553 3.0923 6.40402 3.1705L3.68948 7.29611C3.637 7.38701 3.60938 7.49011 3.60938 7.59507C3.60938 7.70003 3.637 7.80313 3.68948 7.89403L9.20824 17.4607C9.28722 17.5958 9.41602 17.6945 9.56699 17.7357C9.61865 17.7415 9.67079 17.7415 9.72245 17.7357C9.82773 17.7346 9.93086 17.7057 10.0214 17.652L17.6388 13.2812C17.7756 13.2024 17.8756 13.0726 17.9171 12.9203C17.9585 12.7679 17.938 12.6054 17.8601 12.4681Z"
                                                    fill="#C29773"/>
                                                <path
                                                    d="M10.4336 4.8814L5.6503 2.48974C5.56684 2.44769 5.47469 2.42578 5.38124 2.42578C5.28778 2.42578 5.19563 2.44769 5.11218 2.48974L0.328853 4.8814C0.230248 4.93109 0.147328 5.00711 0.0892826 5.10104C0.0312373 5.19497 0.000334656 5.30313 0 5.41355V17.3719C0 17.5304 0.0629944 17.6825 0.175125 17.7946C0.287256 17.9068 0.439338 17.9698 0.597915 17.9698H10.1646C10.3231 17.9698 10.4752 17.9068 10.5873 17.7946C10.6995 17.6825 10.7625 17.5304 10.7625 17.3719V5.41355C10.7621 5.30313 10.7312 5.19497 10.6732 5.10104C10.6151 5.00711 10.5322 4.93109 10.4336 4.8814Z"
                                                    fill="#191C38"/>
                                                <path
                                                    d="M5.38359 8.40194C6.37425 8.40194 7.17734 7.59886 7.17734 6.6082C7.17734 5.61754 6.37425 4.81445 5.38359 4.81445C4.39293 4.81445 3.58984 5.61754 3.58984 6.6082C3.58984 7.59886 4.39293 8.40194 5.38359 8.40194Z"
                                                    fill="#C29773"/>
                                                <path
                                                    d="M5.98202 11.3911H2.99245C2.83387 11.3911 2.68179 11.3281 2.56966 11.216C2.45753 11.1039 2.39453 10.9518 2.39453 10.7932C2.39453 10.6347 2.45753 10.4826 2.56966 10.3704C2.68179 10.2583 2.83387 10.1953 2.99245 10.1953H5.98202C6.1406 10.1953 6.29268 10.2583 6.40481 10.3704C6.51694 10.4826 6.57994 10.6347 6.57994 10.7932C6.57994 10.9518 6.51694 11.1039 6.40481 11.216C6.29268 11.3281 6.1406 11.3911 5.98202 11.3911Z"
                                                    fill="#C29773"/>
                                                <path
                                                    d="M7.77577 13.4849H2.99245C2.83387 13.4849 2.68179 13.4219 2.56966 13.3098C2.45753 13.1976 2.39453 13.0456 2.39453 12.887C2.39453 12.7284 2.45753 12.5763 2.56966 12.4642C2.68179 12.3521 2.83387 12.2891 2.99245 12.2891H7.77577C7.93435 12.2891 8.08643 12.3521 8.19856 12.4642C8.31069 12.5763 8.37368 12.7284 8.37368 12.887C8.37368 13.0456 8.31069 13.1976 8.19856 13.3098C8.08643 13.4219 7.93435 13.4849 7.77577 13.4849Z"
                                                    fill="#C29773"/>
                                                <path
                                                    d="M7.77577 15.5777H2.99245C2.83387 15.5777 2.68179 15.5147 2.56966 15.4025C2.45753 15.2904 2.39453 15.1383 2.39453 14.9798C2.39453 14.8212 2.45753 14.6691 2.56966 14.557C2.68179 14.4448 2.83387 14.3818 2.99245 14.3818H7.77577C7.93435 14.3818 8.08643 14.4448 8.19856 14.557C8.31069 14.6691 8.37368 14.8212 8.37368 14.9798C8.37368 15.1383 8.31069 15.2904 8.19856 15.4025C8.08643 15.5147 7.93435 15.5777 7.77577 15.5777Z"
                                                    fill="#C29773"/>
                                                <path
                                                    d="M5.37917 6.0104C5.22059 6.0104 5.06851 5.94741 4.95638 5.83528C4.84424 5.72315 4.78125 5.57106 4.78125 5.41249V0.629165C4.78125 0.470588 4.84424 0.318506 4.95638 0.206375C5.06851 0.0942444 5.22059 0.03125 5.37917 0.03125C5.53774 0.03125 5.68982 0.0942444 5.80195 0.206375C5.91409 0.318506 5.97708 0.470588 5.97708 0.629165V5.41249C5.97708 5.57106 5.91409 5.72315 5.80195 5.83528C5.68982 5.94741 5.53774 6.0104 5.37917 6.0104Z"
                                                    fill="#C29773"/>
                                            </svg>

                                            Price from
                                        </div>
                                    </div>
                                    <div className="params">
                                        <div>{company.projects_amount}</div>
                                        <div>{company.projects_price_from} AED</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="baner-photo">
                        <div className="photo" style={{ backgroundImage: `url(${company.header_photo_src})` }}></div>
                    </div>
                </div>
                <div className="areas-container">
                    <div className="areas">
                        <Swiper
                            spaceBetween={10}
                            className={"swiper-simillar"}
                            modules={[Autoplay, Pagination, Navigation]}
                            loop
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                900: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                1300: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {company.areas_info && company.areas_info.map((area, index) => (
                                <SwiperSlide key={index}>
                                    <div className="area" key={index}
                                         style={{backgroundImage: `url(${area.area_img_src})`}}>
                                        <div className="info">
                                            <div>{area.area_title}</div>
                                            <div>{area.area_data}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>


                {company.about_the_company &&
                    <div className="about-developer">
                        <div className="container">
                            <div className="title">About developer</div>

                            <div className="container-content">
                                <div className="text-container">
                                    {company.about_the_company && company.about_the_company.map((section, index) => (
                                        <div className="text" key={index}>
                                            {section.paragraphs.slice(0, Math.ceil(section.paragraphs.length / 2)).map((paragraph, pIndex) => (
                                                <div key={pIndex}>{paragraph}</div>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                <div className="photo-gallery">
                                    {company.gallery_images && company.gallery_images.slice(0, Math.ceil(company.gallery_images.length / 2)).map((image, imageIndex) => (
                                        <div className='image-container'>
                                            <img src={image} alt="" key={imageIndex}/>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-container">
                                    {company.about_the_company && company.about_the_company.map((section, index) => (
                                        <div className="text" key={index}>
                                            {section.paragraphs.slice(Math.ceil(section.paragraphs.length / 2)).map((paragraph, pIndex) => (
                                                <div key={pIndex}>{paragraph}</div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="photo-gallery">
                                {company.gallery_images && company.gallery_images.slice(Math.ceil(company.gallery_images.length / 2)).map((image, imageIndex) => (
                                    <div className='image-container'>
                                        <img src={image} alt="" key={imageIndex}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>}

                <div className="get-consult-box">
                    <GetConsult />
                </div>

                <div className="best-projects">
                    {company.section_5_info && company.section_5_info.map((section, index) => (
                        <div className="block" key={index}>
                            <div className="container-info">
                                <div className="info">
                                    {section.container_info.map((info, infoIndex) => (
                                        <div key={infoIndex}>{info}</div>
                                    ))}
                                </div>
                            </div>

                            <div className="two-col-grid">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}

                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"

                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        480: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 40,
                                        },

                                        900: {
                                            slidesPerView: 1,
                                            spaceBetween: 50,
                                        },
                                        1200: {
                                            slidesPerView: 1,
                                            spaceBetween: 50,
                                        },
                                        1400: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        },
                                        1450: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        }
                                    }}
                                >
                                    {section.two_col_grid_image_src.map((image, imageIndex) => (
                                        <SwiperSlide key={imageIndex}>
                                            <img src={image} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="loop-projects">
                    <Swiper
                        spaceBetween={10}
                        className={"swiper-simillar"}
                        modules={[Autoplay, Pagination, Navigation]}
                        loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            900: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1300: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {filteredCompanies.map((company, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/developer/${company.value}`}>
                                    <div  className="developer-box">
                                        <img src={company.logo_src} alt=""/>
                                        {company.title}
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Developers