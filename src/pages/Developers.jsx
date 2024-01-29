import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import '../styles/Pages/Developers.scss'
import developerMain from "../assets/Developer.png"
import companiesInfo from '../data/companiesInfo.json'
import {useState} from "react";
import {Link} from "react-router-dom";
const Developers = () => {
    const [filterText, setFilterText] = useState('');

    const filteredCompanies = companiesInfo.filter(
        company =>
            company.title !== null &&
            company.logo_src !== null &&
            company.title.toLowerCase().includes(filterText.toLowerCase())
    );

    return (<div className='developers-wrapper'>
            <Header/>
            <div className="developers-container">
                <div className="developers-baner">
                    <div className="content">
                        <div className="text">
                            <div className="title">
                                <div>Developers in Dubai</div>
                                <div>Real estate developers in Dubai are the masterminds behind the city's impressive buildings and modern living spaces. They design and create iconic skyscrapers, stylish homes, and bustling business districts. Learn more about each of them, view their projects and areas of where they are presented</div>
                            </div>

                            <div className="input-field">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24"
                                         fill="none">
                                        <path
                                            d="M9.72605 19.9521C11.3967 19.9537 13.0393 19.522 14.4933 18.6993L18.527 22.7326C19.0184 23.224 19.6848 23.5 20.3798 23.5C21.0747 23.5 21.7412 23.224 22.2325 22.7326C22.7239 22.2413 23 21.5749 23 20.88C23 20.1851 22.7239 19.5187 22.2325 19.0273L18.1989 14.994C19.3524 12.9463 19.725 10.5501 19.2479 8.24884C18.7708 5.94757 17.4761 3.89701 15.6035 2.4766C13.731 1.05619 11.4072 0.362099 9.06232 0.522755C6.71741 0.68341 4.51007 1.68794 2.84875 3.35046C1.48852 4.71052 0.562189 6.44337 0.186897 8.32986C-0.188396 10.2164 0.00420735 12.1718 0.74035 13.9488C1.47649 15.7258 2.72311 17.2447 4.32256 18.3133C5.922 19.3819 7.80243 19.9522 9.72605 19.9521ZM4.56051 5.06208C5.75552 3.86771 7.32771 3.1246 9.00921 2.95934C10.6907 2.79407 12.3775 3.21689 13.7822 4.15575C15.1869 5.0946 16.2226 6.49141 16.7129 8.1082C17.2031 9.72499 17.1176 11.4617 16.4708 13.0225C15.824 14.5833 14.6561 15.8716 13.1659 16.6679C11.6758 17.4642 9.95557 17.7192 8.29844 17.3895C6.64131 17.0598 5.14976 16.1658 4.07791 14.8598C3.00606 13.5539 2.42022 11.9166 2.4202 10.2272C2.41727 9.26744 2.60495 8.31667 2.97236 7.43002C3.33977 6.54337 3.87959 5.73849 4.56051 5.06208Z"
                                            fill="#616161"/>
                                    </svg>
                                </div>
                                <input type="text"
                                       placeholder="Find your developer"
                                       value={filterText}
                                       onChange={e => setFilterText(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="image">
                            <img src={developerMain} alt=""/>
                        </div>
                    </div>
                </div>
                {filteredCompanies.length > 0 ? (
                    <div className="developers-container-main">
                        {filteredCompanies.map((company, index) => (
                                <Link to={`/developer/${company.value}`} key={index}>
                                    <div className="developer-box">
                                        <img src={company.logo_src} alt="" />
                                        {company.title}
                                    </div>
                                </Link>
                        ))}
                    </div>)
                        : (
                <div className="we-couldnt">We couldn't find any developer. Please, try another name</div>
                )}
            </div>
            <Footer/>
        </div>
    )
}

export default Developers