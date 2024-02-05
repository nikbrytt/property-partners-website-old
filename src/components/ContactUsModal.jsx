import Modal from "react-modal";
import ceo from "../assets/teams/alex-logachev-min.jpg"
import "../styles/contactUsModal.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";
const ContactUsModal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const startModalVisible = localStorage.getItem("startModalVisible","true")
            if (!startModalVisible) {
                const timer = setTimeout(() => {
                   // setShowModal(true);
                }, 2);
                return () => clearTimeout(timer);
            }
    }, []);

    function isMobile() {
        return window.innerWidth <= 768;
    }
    const closeModal = () => {
        setShowModal(false);
        localStorage.setItem("startModalVisible","true")
    };

    const modalStyles = {
        content: {
            width: 'fit-content',
            height: 'fit-content',
            margin: 'auto',
            overflow:"hidden",
            display: 'flex',
            padding:0,
            border:"none",
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


    function sentData() {
        let data = JSON.stringify({
            "email": name,
            "phone": phone,
            "name": mail,
            "additional": "Additional information here"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://142.93.97.213:3000/append-data',
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
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const { t } = useTranslation();


    return(<Modal  isOpen={showModal} style={modalStyles} onRequestClose={closeModal}>
        <div className="modal-content">
            <div className="image-container">
                <img src={ceo}/>
            </div>
            <div className="modal-form">
                <div className="close-button">
                    <div onClick={closeModal} className="close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 10.5862L16.95 5.63623L18.364 7.05023L13.414 12.0002L18.364 16.9502L16.95 18.3642L12 13.4142L7.05 18.3642L5.636 16.9502L10.586 12.0002L5.636 7.05023L7.05 5.63623L12 10.5862Z" fill="#09121F"/>
                        </svg>
                    </div>
                   </div>
                <div className="form">
                    <div className="tittle">
                        <div>Get advice from our expert</div>
                        <div>Leave your phone number and our specialist will contact you!</div>
                    </div>
                    <div className="form-form">
                        <div className="form-input">
                            <input placeholder={t("j_title42")} type="text" value={name} onChange={(e) => {
                                setName(e.target.value)
                            }}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z" fill="#C29773"/>
                            </svg>
                        </div>
                        <div className="form-input">
                            <input placeholder={t("j_title43")} type="text" value={phone} onChange={(e) => {
                                setPhone(e.target.value)
                            }}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z" fill="#C29773"/>
                            </svg>
                        </div>
                        <div className="form-button" onClick={sentData}>
                            To get a consultation
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10 15.172L19.192 5.979L20.607 7.393L10 18L3.636 11.636L5.05 10.222L10 15.172Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Modal>)
}
export default ContactUsModal