import Concierge from "./pages/Concierge.jsx";
import Home from "./pages/Home.jsx";
import RealEstate from "./pages/RealEstate.jsx";
import ProjectCard from "./pages/ProjectCard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ContactUsModal from "./components/ContactUsModal.jsx";
import PDFmodal from "./components/PDFmodal.jsx";
import { useState } from "react";
import Agent from "./pages/Agent.jsx";
import Employment from "./pages/Employment.jsx"
import ConsiergeFreezone from "./pages/ConsiergeFreezone.jsx"
import BankAccount from "./pages/BankAccount.jsx"
import PowerOfAttorney from "./pages/PowerOfAttorney.jsx"
import MinLand from "./pages/MinLand.jsx"
import Visa from "./pages/Visa.jsx"
import Accounting from "./pages/Accounting.jsx"
import TradeMark from "./pages/TradeMark.jsx"
import Areas from "./pages/Areas.jsx";
import AreaPage from "./pages/AreaPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import SupportChat from "./components/SupportChat.jsx";
import AboutAgent from "./pages/AboutAgent.jsx";
import ProjectView from "./pages/ProjectView.jsx";
import AboutAreas from "./pages/AboutAreas.jsx";
import AreasViewPage from "./pages/AreasViewPage.jsx";
import Developers from "./pages/Developers.jsx";
import Developer from "./pages/Developer.jsx";
import HomePage from "./PWA/pages/HomePage.jsx";
import PhoneMap from "./PWA/pages/PhoneMap.jsx";
import Properties from "./PWA/pages/Properties.jsx";
import ProjectInfo from "./PWA/pages/ProjectInfo.jsx";
import AreasPhone from "./PWA/pages/AreasPhone.jsx";
import Projects from "./PWA/pages/Projects.jsx";
import AboutUsPhone from "./PWA/pages/AboutUsPhone.jsx";
import ConsiergePage from './PWA/pages/ConsiergePage.jsx'
import Consulting from "./PWA/pages/Consulting.jsx";
import MemberPage from "./PWA/pages/MemberPage.jsx";
import Burger from "./PWA/components/Burger.jsx";
function App() {
    const [isPDFModalOpen, setPDFModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
        document.body.classList.toggle('menu-open');
    };

    const openPDFModal = () => {
        setPDFModalOpen(true);
    };

    const closePDFModal = () => {
        setPDFModalOpen(false);
    };
    return (
        <BrowserRouter>
            <ScrollToTop />
            <SupportChat />
            <Burger menuOpen={menuOpen} handleMenuToggle={handleMenuToggle}/>
            <ContactUsModal />
            <PDFmodal closeModal={closePDFModal} showModal={isPDFModalOpen} />
            <Routes >
                <Route path="/" element={<Home handleMenuToggle={handleMenuToggle} openModal={openPDFModal} />} />
                <Route path="/real-estate" element={<RealEstate />} />
                <Route path="/concierge" element={<Concierge />} />
                <Route path="/project/:id" element={<ProjectCard />} />
                <Route path="/agent" element={<Agent />} />
                <Route path="/employment" element={<Employment />} />
                <Route path="/general" element={<ConsiergeFreezone />} />
                <Route path="/bank-account" element={<BankAccount />} />
                <Route path="/attorney" element={<PowerOfAttorney />} />
                <Route path="/main-land" element={<MinLand />} />
                <Route path="/visa" element={<Visa />} />
                <Route path="/accounting" element={<Accounting />} />
                <Route path="/trademark-registration" element={<TradeMark />} />
                <Route path="/about-areas" element={<Areas />} />

                <Route path="/area-page/:id" element={<AreaPage />} />
                <Route path="/area/:id" element={<AreasViewPage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/about-agent" element={<AboutAgent />} />
                <Route path="/project-view/:id" element={<ProjectView />} />
                <Route path="/areas" element={<AboutAreas />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/developer/:id" element={<Developer />} />

                <Route path="/phone" element={<HomePage handleMenuToggle={handleMenuToggle} />} />
                <Route path="/phone/map" element={<PhoneMap handleMenuToggle={handleMenuToggle} />} />
                <Route path="/phone/properties" element={<Properties handleMenuToggle={handleMenuToggle} />} />
                <Route path="/phone/project" element={<ProjectInfo />} />
                <Route path="/phone/areas" element={<AreasPhone handleMenuToggle={handleMenuToggle} />} />
                <Route path="/phone/projects" element={<Projects handleMenuToggle={handleMenuToggle} />} />
                <Route path="/phone/about-us" element={<AboutUsPhone handleMenuToggle={handleMenuToggle} />} />
                <Route path="/phone/consierge" element={<ConsiergePage handleMenuToggle={handleMenuToggle} />} />
                <Route path="/phone/consulting" element={<Consulting />} />
                <Route path="/phone/member" element={<MemberPage />} />
            </Routes>
        </BrowserRouter>)
}

export default App