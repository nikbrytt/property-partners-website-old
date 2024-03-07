import Header from "../components/Header.jsx";
import "../styles/Pages/concierge.scss"
import conciergeMain from "../assets/conciergeMain.jpg";
import imagePerson from "../assets/teams/anna-horshunova-min.jpg";
import aboutUs from "../assets/aboutUs.jpg";
import servicesPerson from "../assets/servicesPerson.jpg";
import servicesLife from "../assets/servicesLif.jpg"
import vipService from "../assets/vipServices.jpg"
import Footer from "../components/Footer.jsx";
import { useTranslation } from "react-i18next";
import ContactUsModal from "../components/ContactUsModal.jsx";
import RequestModal from "../components/RequestModal.jsx";
import React, { useState } from "react";
import alexLogachevName from "../assets/teams/alex-logachev-min.jpg";
import {Link as ScrollLink} from "react-scroll";
import homeMain from "../assets/homeMain.png";

import banerPhoto from "../assets/consierge/baner-photo.png"
import business from "../assets/consierge/business.png"
import family from "../assets/consierge/family.png"
import vip from "../assets/consierge/vip.png"
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import axios from "axios";

const Concierge = () => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [info, setInfo] = useState('')

    const [dataSented, setDataSented] = useState('')

    function sentData() {
        let data = JSON.stringify({
            "name": name,
            "phone": phone,
            "email": mail,
            "additional": info
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
                setInfo('')
                setDataSented(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const closeModal = () => {
        setShowModal(false);
    };
    return (<div className={"concierge-wrapper"}>
        <Helmet>
            <title>Unlock Dubai's Finest with Property Partners - Your Premier Concierge Service</title>
            <meta name="description" content="Experience Dubai to its fullest, whether for business or leisure, with Property Partners - your premier concierge service. From second citizenship acquisition to real estate management, investment guidance to business event planning, we handle it all. Enjoy personalized life services, VIP treatment, and round-the-clock lifestyle assistance. Let us create lasting memories and ensure every detail is meticulously managed for you." />
            <meta name="keywords" content="Dubai Concierge Service, Business Concierge, Legal Support, Real Estate Management, Investment Guidance, Bank Account Opening, Business Events Planning, Company Registration UAE, Tourism Services, Shopping Assistance, Rental Accommodation, Lifestyle Management, Private Jet Rentals, VIP Services, Lifestyle Manager, Tours and Entertainment, Real Estate" />
        </Helmet>
        <Header />
        <div className="consierge-banner">
            <div className="content">
                <div className="tittle">
                    <div>{t("e_title")}</div>
                    <div>{t("e1_title")}</div>
                </div>
                <div className="advantages">
                    <div className="advantages-wrapper">
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M14 19.9995V21.9995H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8175L13.879 16.9495L12.464 18.3635L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547Z"
                                    fill="white"/>
                            </svg>
                            {t("e_ch1")}
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M15.224 15.5084L13.011 20.1584C12.9691 20.2463 12.9065 20.3227 12.8285 20.381C12.7505 20.4393 12.6594 20.4778 12.5633 20.493C12.4671 20.5083 12.3686 20.4999 12.2764 20.4686C12.1842 20.4373 12.101 20.384 12.034 20.3134L8.49197 16.5744C8.39735 16.4746 8.27131 16.4104 8.13497 16.3924L3.02797 15.7244C2.93149 15.7117 2.83954 15.6757 2.76006 15.6195C2.68058 15.5634 2.61596 15.4887 2.57177 15.402C2.52758 15.3153 2.50514 15.2191 2.5064 15.1218C2.50765 15.0245 2.53256 14.9289 2.57897 14.8434L5.04097 10.3194C5.10642 10.1984 5.12831 10.0586 5.10297 9.9234L4.15997 4.8604C4.14207 4.76456 4.14778 4.66581 4.17662 4.57268C4.20546 4.47956 4.25656 4.39486 4.3255 4.32592C4.39444 4.25699 4.47913 4.20589 4.57226 4.17704C4.66539 4.1482 4.76414 4.14249 4.85997 4.1604L9.92297 5.1034C10.0582 5.12873 10.198 5.10685 10.319 5.0414L14.843 2.5794C14.9286 2.53297 15.0242 2.50808 15.1216 2.50688C15.219 2.50568 15.3152 2.5282 15.4019 2.5725C15.4887 2.61681 15.5633 2.68155 15.6194 2.76115C15.6755 2.84076 15.7114 2.93282 15.724 3.0294L16.392 8.1354C16.4099 8.27174 16.4742 8.39777 16.574 8.4924L20.313 12.0344C20.3836 12.1014 20.4369 12.1846 20.4682 12.2768C20.4995 12.3691 20.5079 12.4675 20.4926 12.5637C20.4774 12.6599 20.4389 12.7509 20.3806 12.8289C20.3223 12.9069 20.2459 12.9695 20.158 13.0114L15.508 15.2244C15.3835 15.2836 15.2832 15.3839 15.224 15.5084ZM16.021 17.4354L17.435 16.0214L21.678 20.2634L20.263 21.6784L16.021 17.4354Z"
                                    fill="white"/>
                            </svg>
                            {t("Life Services")}
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M14.121 10.4799C13.9335 10.2924 13.6792 10.1871 13.414 10.1871C13.1489 10.1871 12.8945 10.2924 12.707 10.4799L12 11.1859C11.8155 11.3769 11.5948 11.5293 11.3508 11.6341C11.1068 11.7389 10.8444 11.7941 10.5788 11.7964C10.3133 11.7987 10.0499 11.7481 9.80411 11.6475C9.55832 11.5469 9.33502 11.3984 9.14723 11.2107C8.95944 11.0229 8.81094 10.7996 8.71038 10.5538C8.60982 10.308 8.55921 10.0446 8.56152 9.77906C8.56383 9.51351 8.619 9.25107 8.72382 9.00706C8.82864 8.76305 8.981 8.54236 9.17202 8.35787L14.802 2.72587C16.1349 2.42269 17.5295 2.54746 18.7875 3.08244C20.0454 3.61742 21.1027 4.53536 21.8089 5.70576C22.5151 6.87615 22.8344 8.23941 22.7213 9.6017C22.6083 10.964 22.0686 12.2559 21.179 13.2939L19.071 15.4289L14.121 10.4789V10.4799ZM3.16102 4.46787C4.19578 3.43324 5.54924 2.77785 7.00258 2.60763C8.45592 2.43742 9.9242 2.76234 11.17 3.52987L7.75702 6.94387C7.01782 7.68159 6.59645 8.67917 6.58296 9.72343C6.56946 10.7677 6.96491 11.7758 7.6848 12.5324C8.40469 13.289 9.39193 13.734 10.4356 13.7724C11.4792 13.8108 12.4965 13.4395 13.27 12.7379L13.414 12.6009L17.657 16.8429L13.414 21.0859C13.039 21.4608 12.5303 21.6714 12 21.6714C11.4697 21.6714 10.9611 21.4608 10.586 21.0859L3.16002 13.6599C1.94115 12.4409 1.25641 10.7877 1.25641 9.06387C1.25641 7.34005 1.94115 5.68684 3.16002 4.46787H3.16102Z"
                                    fill="white"/>
                            </svg>
                            {t("VIP Services")}
                        </div>

                        <ScrollLink
                            to="collections"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={1000}
                        >
                            <div className="learn-more">

                                {t("home_button")}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z"
                                        fill="#191C38"/>
                                </svg>
                            </div>
                        </ScrollLink>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={banerPhoto}/>
            </div>
        </div>
        <div className="consierge-banner phone">
            <div className="content">
                <div className="tittle">
                    <div>{t("e_title")}</div>
                    <div>{t("e1_title")}</div>
                </div>
                <div className="image">
                    <img src={banerPhoto}/>
                </div>
                <div className="advantages">
                    <div className="advantages-wrapper">
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M14 19.9995V21.9995H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8175L13.879 16.9495L12.464 18.3635L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547Z"
                                    fill="white"/>
                            </svg>
                            {t("e_ch1")}
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M15.224 15.5084L13.011 20.1584C12.9691 20.2463 12.9065 20.3227 12.8285 20.381C12.7505 20.4393 12.6594 20.4778 12.5633 20.493C12.4671 20.5083 12.3686 20.4999 12.2764 20.4686C12.1842 20.4373 12.101 20.384 12.034 20.3134L8.49197 16.5744C8.39735 16.4746 8.27131 16.4104 8.13497 16.3924L3.02797 15.7244C2.93149 15.7117 2.83954 15.6757 2.76006 15.6195C2.68058 15.5634 2.61596 15.4887 2.57177 15.402C2.52758 15.3153 2.50514 15.2191 2.5064 15.1218C2.50765 15.0245 2.53256 14.9289 2.57897 14.8434L5.04097 10.3194C5.10642 10.1984 5.12831 10.0586 5.10297 9.9234L4.15997 4.8604C4.14207 4.76456 4.14778 4.66581 4.17662 4.57268C4.20546 4.47956 4.25656 4.39486 4.3255 4.32592C4.39444 4.25699 4.47913 4.20589 4.57226 4.17704C4.66539 4.1482 4.76414 4.14249 4.85997 4.1604L9.92297 5.1034C10.0582 5.12873 10.198 5.10685 10.319 5.0414L14.843 2.5794C14.9286 2.53297 15.0242 2.50808 15.1216 2.50688C15.219 2.50568 15.3152 2.5282 15.4019 2.5725C15.4887 2.61681 15.5633 2.68155 15.6194 2.76115C15.6755 2.84076 15.7114 2.93282 15.724 3.0294L16.392 8.1354C16.4099 8.27174 16.4742 8.39777 16.574 8.4924L20.313 12.0344C20.3836 12.1014 20.4369 12.1846 20.4682 12.2768C20.4995 12.3691 20.5079 12.4675 20.4926 12.5637C20.4774 12.6599 20.4389 12.7509 20.3806 12.8289C20.3223 12.9069 20.2459 12.9695 20.158 13.0114L15.508 15.2244C15.3835 15.2836 15.2832 15.3839 15.224 15.5084ZM16.021 17.4354L17.435 16.0214L21.678 20.2634L20.263 21.6784L16.021 17.4354Z"
                                    fill="white"/>
                            </svg>
                            Life Services
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M14.121 10.4799C13.9335 10.2924 13.6792 10.1871 13.414 10.1871C13.1489 10.1871 12.8945 10.2924 12.707 10.4799L12 11.1859C11.8155 11.3769 11.5948 11.5293 11.3508 11.6341C11.1068 11.7389 10.8444 11.7941 10.5788 11.7964C10.3133 11.7987 10.0499 11.7481 9.80411 11.6475C9.55832 11.5469 9.33502 11.3984 9.14723 11.2107C8.95944 11.0229 8.81094 10.7996 8.71038 10.5538C8.60982 10.308 8.55921 10.0446 8.56152 9.77906C8.56383 9.51351 8.619 9.25107 8.72382 9.00706C8.82864 8.76305 8.981 8.54236 9.17202 8.35787L14.802 2.72587C16.1349 2.42269 17.5295 2.54746 18.7875 3.08244C20.0454 3.61742 21.1027 4.53536 21.8089 5.70576C22.5151 6.87615 22.8344 8.23941 22.7213 9.6017C22.6083 10.964 22.0686 12.2559 21.179 13.2939L19.071 15.4289L14.121 10.4789V10.4799ZM3.16102 4.46787C4.19578 3.43324 5.54924 2.77785 7.00258 2.60763C8.45592 2.43742 9.9242 2.76234 11.17 3.52987L7.75702 6.94387C7.01782 7.68159 6.59645 8.67917 6.58296 9.72343C6.56946 10.7677 6.96491 11.7758 7.6848 12.5324C8.40469 13.289 9.39193 13.734 10.4356 13.7724C11.4792 13.8108 12.4965 13.4395 13.27 12.7379L13.414 12.6009L17.657 16.8429L13.414 21.0859C13.039 21.4608 12.5303 21.6714 12 21.6714C11.4697 21.6714 10.9611 21.4608 10.586 21.0859L3.16002 13.6599C1.94115 12.4409 1.25641 10.7877 1.25641 9.06387C1.25641 7.34005 1.94115 5.68684 3.16002 4.46787H3.16102Z"
                                    fill="white"/>
                            </svg>
                            VIP Services
                        </div>
                        <ScrollLink
                            to="collections"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={1000}
                        >
                            <div className="learn-more">

                                {t("home_button")}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z"
                                        fill="#191C38"/>
                                </svg>
                            </div>
                        </ScrollLink>
                    </div>

                </div>
            </div>

        </div>
        <div className="about-us">
            <div className={"content1"}>{t("e_block1")}</div>
            <div className={"content2"}>{t("e_block2")}</div>
            <div className={"content3"}><img src={imagePerson}/></div>
            <div className={"content4"}><img src={aboutUs}/></div>
        </div>
        <div className="our-services">
            <div className="content">
                <div className={"div1"}><img src={business}/></div>
                <div className={"div2"}>{t("e_ch1")}</div>
                <div className={"div3"}>{t("e_ch4")}</div>
                <div className={"div3"}>{t("e_ch7")}</div>
                <div className={"div3"}>{t("e_ch5")}</div>
                <div className={"div3"}>{t("e_ch8")}</div>
                <div className={"div3"}>{t("e_ch2")}</div>
                <div className={"div3"}>{t("e_ch3")}</div>
                <div className={"div3"}>{t("e_ch6")}</div>
                <div className={"div3"}>{t("e_ch9")}</div>
            </div>
            <div className="content">
                <div className={"div1"}><img src={family}/></div>
                <div className={"div2"}>{t("e_ch11")}</div>
                <div className={"div3"}>{t("e_ch33")}</div>
                <div className={"div3"}>{t("e_ch66")}</div>
                <div className={"div3"}>{t("e_ch44")}</div>
                <div className={"div3"}>{t("e_ch77")}</div>
                <div className={"div3"}>{t("e_ch22")}</div>
                <div className={"div3"}>{t("e_ch55")}</div>
                <div className={"div3"}>{t("e_ch88")}</div>
            </div>
            <div className="content">
                <div className={"div1"}><img src={vip}/></div>
                <div className={"div2"}>{t("e_ch111")}</div>
                <div className={"div3"}>{t("e_ch222")}</div>
                <div className={"div3"}>{t("e_ch333")}</div>
                <div className={"div3"}>{t("e_ch444")}</div>
                <div className={"div3"}>{t("e_ch555")}</div>
                <div className={"div3"}>{t("e_ch666")}</div>
                <div className={"div3"}>{t("e_ch777")}</div>
                <div className={"div3"}>{t("e_ch888")}</div>
            </div>
        </div>
        <div className="contact-us">
            <div className="contact-us-form">
                <div className="texts">
                    <div>{t("e_cj")}</div>
                    <div>{t("e_cj_text")}</div>
                </div>
                <div className="form">
                    <div className="form-input">
                        <input placeholder={t("j_title42")} type="text" value={name} onChange={(e) => {
                            setName(e.target.value)
                            setDataSented(false)
                        }}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z"
                                fill="#C29773"/>
                        </svg>
                    </div>
                    <div className="form-input">
                        <input placeholder={t("j_title44")} type="text" value={mail} onChange={(e) => {
                            setMail(e.target.value)
                            setDataSented(false)
                        }}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.061 11.683H12.06Z"
                                fill="#C29773"/>
                        </svg>
                    </div>
                    <div className="form-input">
                        <input placeholder={t("j_title43")} type="text" value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                            setDataSented(false)
                        }}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                                fill="#C29773"/>
                        </svg>
                    </div>
                    <div className="form-input">
                        <input placeholder={t("e_cj_line4")} type="text" value={info} onChange={(e) => {
                            setInfo(e.target.value)
                            setDataSented(false)
                        }}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM11 14V16H13V14H11ZM8.567 8.813L10.529 9.206C10.5847 8.92743 10.7183 8.6704 10.9144 8.46482C11.1104 8.25923 11.3608 8.11354 11.6364 8.04471C11.912 7.97587 12.2015 7.98671 12.4712 8.07597C12.7409 8.16523 12.9797 8.32924 13.1598 8.54891C13.34 8.76858 13.454 9.03489 13.4887 9.31684C13.5234 9.5988 13.4773 9.8848 13.3558 10.1416C13.2343 10.3984 13.0423 10.6154 12.8023 10.7673C12.5623 10.9193 12.2841 11 12 11H11V13H12C12.6628 12.9998 13.3119 12.8114 13.8718 12.4568C14.4317 12.1021 14.8794 11.5958 15.1628 10.9967C15.4462 10.3976 15.5537 9.73028 15.4727 9.07248C15.3917 8.41467 15.1257 7.79337 14.7055 7.28085C14.2852 6.76833 13.7281 6.38567 13.0989 6.17736C12.4698 5.96906 11.7944 5.94368 11.1513 6.10418C10.5083 6.26468 9.92403 6.60447 9.46653 7.084C9.00903 7.56354 8.69709 8.16312 8.567 8.813Z"
                                fill="#C29773"/>
                        </svg>
                    </div>
                    <Link to="/message" className="form-button" onClick={sentData}>
                        {t("e_cj_line5")}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M10.0002 15.172L19.1922 5.979L20.6072 7.393L10.0002 18L3.63623 11.636L5.05023 10.222L10.0002 15.172Z"
                                fill="white"/>
                        </svg>
                    </Link>
                </div>
                <div className="agree-terms">
                    {t("e_cj_text1")}
                </div>
                <div className="privacy">
                    <span>{t("e_cj_text2")}</span> and <span>{t("e_cj_text2_1")}</span>
                </div>
            </div>
        </div>
        <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={alexLogachevName} />

        <Footer />
    </div>)
}
export default Concierge