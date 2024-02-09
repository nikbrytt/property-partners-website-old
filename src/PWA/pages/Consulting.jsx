import Menu from "../components/Menu.jsx";
import "../styles/Consulting.css";
const Consulting = () => {

    return(<div className={"consulting-phone"}>
        <div className="main-banner">
            <Menu/>
            <div className="about">
                <div className="tittle">Company registrationin the UAE, Legaland Accounting Support</div>
                <div className="desc">Remote business registration and launch of all operational processes</div>
                <div className="button">
                    Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 13L4 13L4 11L12 11L12 4L20 12L12 20L12 13Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>)
}
export default Consulting