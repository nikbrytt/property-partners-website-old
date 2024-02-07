import Modal from "react-modal";
import ceo from "../assets/teams/alex-logachev-min.jpg"
import "../styles/Components/MailModal.scss"
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import InqureModalBg from "../assets/Modal/inquireBg.png"
import axios from "axios";


const MailModal = ({showMailModal, closeMailModal}) => {
    const {t} = useTranslation();

    function isMobile() {
        return window.innerWidth <= 768;
    }

    const [inquire, setInquire] = useState(false)

    const modalStyles = {
        content: {
            height: 'fit-content',
            margin: 'auto',
            overflow:"hidden",
            display: 'flex',
            padding:0,
            border:"none",
            width: "fit-content",
            zIndex: 1000,
            inset:isMobile()?"10px":"40px"
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)' ,
            zIndex: 999
        }
    };

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [dataSented, setDataSented] = useState('')
    function sentData() {
        let data = JSON.stringify({
            "name": name,
            "phone": phone,
            "email": mail,
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

    return(<Modal  isOpen={showMailModal} style={modalStyles} onRequestClose={closeMailModal}>
        <div className="mail-modal-content">
            <div className="content-form">
                <div className="text-content">
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="131" height="123" viewBox="0 0 131 123"
                             fill="none">
                            <g filter="url(#filter0_d_3143_17949)">
                                <path
                                    d="M83.35 32H47.65C43.425 32 40 35.425 40 39.65V75.35C40 79.575 43.425 83 47.65 83H83.35C87.575 83 91 79.575 91 75.35V39.65C91 35.425 87.575 32 83.35 32Z"
                                    fill="white"/>
                                <path
                                    d="M55.7383 70.9473V56.8027L47.5703 50.5273V67.959C47.5703 69.9512 48.5664 70.9473 50.5586 70.9473"
                                    fill="#4285F4"/>
                                <path
                                    d="M55.3398 56.7031L65.5 64.373L75.6602 56.7031V46.9414L65.5 54.6113L55.3398 46.9414"
                                    fill="#EA4335"/>
                                <path
                                    d="M75.2617 70.9473V56.8027L83.4297 50.5273V67.959C83.4297 69.9512 82.4336 70.9473 80.4414 70.9473"
                                    fill="#34A853"/>
                                <path
                                    d="M47.5703 50.7266L55.7383 57.002V47.2402L52.75 44.9492C50.0605 42.8574 47.5703 44.9492 47.5703 47.5391"
                                    fill="#C5221F"/>
                                <path
                                    d="M83.4297 50.7266L75.2617 57.002V47.2402L78.25 44.9492C80.9395 42.8574 83.4297 44.9492 83.4297 47.5391"
                                    fill="#FBBC04"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_3143_17949" x="0" y="-8" width="131" height="131"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="20"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_3143_17949"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3143_17949"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    <div className="text">
                        <div className='title'>
                            <div>Sign Up</div>
                            <div>and Be Informed</div>
                        </div>

                        <div>
                            More than <span>10,000 investors</span> already
                            receive weekly updates about property
                            market in Dubai
                        </div>
                    </div>
                </div>
                <div className="form">
                    <div className="content">
                        <div className="form-button">
                            <div className="form-input">
                                <div className="input">
                                    <input placeholder={t("j_title42")} type="text" value={name} onChange={(e) => {
                                        setName(e.target.value)
                                    }} />

                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20"
                                             viewBox="0 0 19 20"
                                             fill="none">
                                            <path
                                                d="M15.8346 17.9166H3.16797V16.3333C3.16797 15.2835 3.58501 14.2767 4.32734 13.5343C5.06967 12.792 6.07649 12.375 7.1263 12.375H11.8763C12.9261 12.375 13.9329 12.792 14.6753 13.5343C15.4176 14.2767 15.8346 15.2835 15.8346 16.3333V17.9166ZM9.5013 10.7916C8.87752 10.7916 8.25985 10.6688 7.68356 10.4301C7.10726 10.1913 6.58362 9.84146 6.14254 9.40038C5.70147 8.9593 5.35158 8.43567 5.11287 7.85937C4.87416 7.28308 4.7513 6.66541 4.7513 6.04163C4.7513 5.41785 4.87416 4.80018 5.11287 4.22388C5.35158 3.64758 5.70147 3.12395 6.14254 2.68287C6.58362 2.24179 7.10726 1.89191 7.68356 1.6532C8.25985 1.41449 8.87752 1.29163 9.5013 1.29163C10.7611 1.29163 11.9693 1.79207 12.8601 2.68287C13.7509 3.57367 14.2513 4.78185 14.2513 6.04163C14.2513 7.3014 13.7509 8.50959 12.8601 9.40038C11.9693 10.2912 10.7611 10.7916 9.5013 10.7916V10.7916Z"
                                                fill="#C29773"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="input">
                                    <input placeholder={t("j_title44")} type="text" value={mail} onChange={(e) => {
                                        setMail(e.target.value)
                                    }}/>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20"
                                             viewBox="0 0 19 20"
                                             fill="none">
                                            <path
                                                d="M2.3737 2.875H16.6237C16.8337 2.875 17.035 2.95841 17.1835 3.10687C17.332 3.25534 17.4154 3.4567 17.4154 3.66667V16.3333C17.4154 16.5433 17.332 16.7447 17.1835 16.8931C17.035 17.0416 16.8337 17.125 16.6237 17.125H2.3737C2.16373 17.125 1.96237 17.0416 1.8139 16.8931C1.66544 16.7447 1.58203 16.5433 1.58203 16.3333V3.66667C1.58203 3.4567 1.66544 3.25534 1.8139 3.10687C1.96237 2.95841 2.16373 2.875 2.3737 2.875V2.875ZM9.5462 9.74904L4.47003 5.43842L3.44482 6.64492L9.55649 11.8343L15.5581 6.64096L14.5226 5.44317L9.54699 9.74904H9.5462Z"
                                                fill="#C29773"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="button-no-spam">
                                <div className={`button ${dataSented ? 'fade-out' : ''}`}  onClick={sentData}>
                                    SUBSCRIBE
                                </div>
                                <div className="no-spam">
                                    No spam, only quality offers
                                </div>
                            </div>
                        </div>
                        <div className="not-interested" onClick={closeMailModal}>
                            Not interested
                        </div>
                    </div>
                </div>
            </div>
            <div className="close" onClick={closeMailModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">

                        <path
                            d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17C13.1944 17 17 13.1944 17 8.5Z"
                            fill="white"/>
                    <g mask="url(#mask0_3156_18417)">
                        <path
                            d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17C13.1944 17 17 13.1944 17 8.5Z"
                            fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.25 0C1.90279 0 0 1.90279 0 4.25V12.75C0 15.0972 1.90279 17 4.25 17H12.75C15.0972 17 17 15.0972 17 12.75V4.25C17 1.90279 15.0972 0 12.75 0H4.25ZM5.34896 5.34896C5.68091 5.01701 6.21909 5.01701 6.55104 5.34896L8.5 7.29793L10.449 5.34896C10.7809 5.01701 11.3191 5.01701 11.651 5.34896C11.983 5.68091 11.983 6.21909 11.651 6.55104L9.70207 8.5L11.651 10.449C11.983 10.7809 11.983 11.3191 11.651 11.651C11.3191 11.983 10.7809 11.983 10.449 11.651L8.5 9.70207L6.55104 11.651C6.21909 11.983 5.68091 11.983 5.34896 11.651C5.01701 11.3191 5.01701 10.7809 5.34896 10.449L7.29793 8.5L5.34896 6.55104C5.01701 6.21909 5.01701 5.68091 5.34896 5.34896Z"
                              fill="#FF5959"/>
                    </g>
                </svg>
            </div>
        </div>
    </Modal>)
}
export default MailModal