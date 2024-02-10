import MenuProjectFilter from "../components/MenuProjectFilter.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Properties.css"
import Project from "../components/Project.jsx";
import projects from "../data/response.json";
import {useEffect, useState} from "react";
import {shuffle} from "lodash";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Properties = ({handleMenuToggle}) => {
    const { t } = useTranslation();
    const [filterDataProjects, setFilterDataProjects]=useState({
        search: "",
        priceValues: { from: "", to: "" },
        sizeValues: { from: "", to: "" },
        bedrooms: [],
        location: [],
        completion: [],
        propertyType: []
    })
    const shuffledProjects = projects.slice(0, 10);
    const [liked, setLiked] = useState([]);
    const [visited,setVisited] = useState([]);

    useEffect(() => {
        const likedData = localStorage.getItem("liked");
        const initialLiked = likedData ? JSON.parse(likedData) : [];
        setLiked(initialLiked);
        const visitedData = localStorage.getItem("visited");
        const visitedList = visitedData ? JSON.parse(visitedData) : [];
        setVisited(visitedList);

        const handleStorageChange = () => {
            const updatedLikedData = localStorage.getItem("liked");
            const updatedLiked = updatedLikedData ? JSON.parse(updatedLikedData) : [];
            setLiked(updatedLiked);
            const visitedData = localStorage.getItem("visited");
            const visitedList = visitedData ? JSON.parse(visitedData) : [];
            setVisited(visitedList);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);
    const [visibleArea, setVisibleArea] = useState(false)
    const bedroomOptions = [t("studio"), "1", "2", "3", "4", "5", "6", "7"];
    const priceData = [
        {value:150000,label:"150K"},
        {value:250000,label:"250K"},
        {value:500000,label:"500K"},
        {value:1000000,label:"1M"},
        {value:5000000,label:"5M"},
    ]
    const sizeData = [
        {value:300,label:"300"},
        {value:600,label:"600"},
        {value:900,label:"900"},
        {value:1300,label:"1300"},
        {value:1700,label:"1700"},
        {value:2200,label:"2200"},
        {value:2600,label:"2600"},
        {value:3300,label:"3300"},
        {value:5000,label:"5000"},
    ]
    const  values =[
        {"value": "Al Barari", "label": "Al Barari"},
        {"value": "Al Barsha 1", "label": "Al Barsha 1"},
        {"value": "Al Barsha 2", "label": "Al Barsha 2"},
        {"value": "Al Barsha 3", "label": "Al Barsha 3"},
        {"value": "Al Furjan", "label": "Al Furjan"},
        {"value": "Al Habtoor City", "label": "Al Habtoor City"},
        {"value": "Al Jaddaf", "label": "Al Jaddaf"},
        {"value": "Al Khail Heights", "label": "Al Khail Heights"},
        {"value": "Al Reem Island, Abu Dhabi", "label": "Al Reem Island, Abu Dhabi"},
        {"value": "Al Sufouh 1", "label": "Al Sufouh 1"},
        {"value": "Al Sufouh 2", "label": "Al Sufouh 2"},
        {"value": "Al Wasl (City Walk)", "label": "Al Wasl (City Walk)"},
        {"value": "Arabian Ranches", "label": "Arabian Ranches"},
        {"value": "Arabian Ranches 2", "label": "Arabian Ranches 2"},
        {"value": "Arabian Ranches 3", "label": "Arabian Ranches 3"},
        {"value": "Arjan", "label": "Arjan"},
        {"value": "Barsha South", "label": "Barsha South"},
        {"value": "Bluewaters Island", "label": "Bluewaters Island"},
        {"value": "Business Bay", "label": "Business Bay"},
        {"value": "Cherrywoods", "label": "Cherrywoods"},
        {"value": "City of Arabia", "label": "City of Arabia"},
        {"value": "Complex (Dubailand)", "label": "Complex (Dubailand)"},
        {"value": "Creekside", "label": "Creekside"},
        {"value": "Culture Village", "label": "Culture Village"},
        {"value": "Damac Hills", "label": "Damac Hills"},
        {"value": "Damac Hills 2", "label": "Damac Hills 2"},
        {"value": "Damac Lagoons", "label": "Damac Lagoons"},
        {"value": "Discovery Gardens", "label": "Discovery Gardens"},
        {"value": "Downtown Dubai", "label": "Downtown Dubai"},
        {"value": "Dubai Creek Harbour", "label": "Dubai Creek Harbour"},
        {"value": "Dubai Design District", "label": "Dubai Design District"},
        {"value": "Dubai Festival City", "label": "Dubai Festival City"},
        {"value": "Dubai Golf City", "label": "Dubai Golf City"},
        {"value": "Dubai Harbour", "label": "Dubai Harbour"},
        {"value": "Dubai Healthcare City", "label": "Dubai Healthcare City"},
        {"value": "Dubai Hills", "label": "Dubai Hills"},
        {"value": "Dubai International", "label": "Dubai International"},
        {"value": "Dubai Investment Park", "label": "Dubai Investment Park"},
        {"value": "Dubai Islands", "label": "Dubai Islands"},
        {"value": "Dubai Marina", "label": "Dubai Marina"},
        {"value": "Dubai Maritime City", "label": "Dubai Maritime City"},
        {"value": "Dubai Production City", "label": "Dubai Production City"},
        {"value": "Dubai Science Park", "label": "Dubai Science Park"},
        {"value": "Dubai Silicon Oasis", "label": "Dubai Silicon Oasis"},
        {"value": "Dubai South", "label": "Dubai South"},
        {"value": "Dubai Sports City", "label": "Dubai Sports City"},
        {"value": "Dubai Studio City", "label": "Dubai Studio City"},
        {"value": "Dubai Water Canal", "label": "Dubai Water Canal"},
        {"value": "Dubai Waterfront", "label": "Dubai Waterfront"},
        {"value": "Emaar South", "label": "Emaar South"},
        {"value": "Emirates Hills", "label": "Emirates Hills"},
        {"value": "Expo City Dubai", "label": "Expo City Dubai"},
        {"value": "Financial Centre", "label": "Financial Centre"},
        {"value": "International City", "label": "International City"},
        {"value": "Jebel Ali", "label": "Jebel Ali"},
        {"value": "Jumeirah", "label": "Jumeirah"},
        {"value": "Jumeirah Beach Residence (JBR)", "label": "Jumeirah Beach Residence (JBR)"},
        {"value": "Jumeirah Golf Estates", "label": "Jumeirah Golf Estates"},
        {"value": "Jumeirah Heights", "label": "Jumeirah Heights"},
        {"value": "Jumeirah Islands", "label": "Jumeirah Islands"},
        {"value": "Jumeirah Lake Towers (JLT)", "label": "Jumeirah Lake Towers (JLT)"},
        {"value": "Jumeirah Park", "label": "Jumeirah Park"},
        {"value": "Jumeirah Village Circle (JVC)", "label": "Jumeirah Village Circle (JVC)"},
        {"value": "Jumeirah Village Triangle (JVT)", "label": "Jumeirah Village Triangle (JVT)"},
        {"value": "La Mer", "label": "La Mer"},
        {"value": "Liwan", "label": "Liwan"},
        {"value": "Madina Jumeirah Living", "label": "Madina Jumeirah Living"},
        {"value": "Mina Al Arab, Ras Al Khaimah", "label": "Mina Al Arab, Ras Al Khaimah"},
        {"value": "Mina Rashid", "label": "Mina Rashid"},
        {"value": "Mirdif Hills", "label": "Mirdif Hills"},
        {"value": "Mirdif Tulip", "label": "Mirdif Tulip"},
        {"value": "Mohammed Bin Rashid City (MBR)", "label": "Mohammed Bin Rashid City (MBR)"},
        {"value": "Motor City", "label": "Motor City"},
        {"value": "Mudon", "label": "Mudon"},
        {"value": "Nad Al Sheba", "label": "Nad Al Sheba"},
        {"value": "Nshama", "label": "Nshama"},
        {"value": "Old Town", "label": "Old Town"},
        {"value": "Oman", "label": "Oman"},
        {"value": "Park Gate Residences", "label": "Park Gate Residences"},
        {"value": "Palm Jumeirah", "label": "Palm Jumeirah"},
        {"value": "Ras Al Khor", "label": "Ras Al Khor"},
        {"value": "Remraam", "label": "Remraam"},
        {"value": "Rashid Yachts and Marina", "label": "Rashid Yachts and Marina"},
        {"value": "Sharjah", "label": "Sharjah"},
        {"value": "Sheikh Zayed Road", "label": "Sheikh Zayed Road"},
        {"value": "The Greens", "label": "The Greens"},
        {"value": "The Lakes", "label": "The Lakes"},
        {"value": "The Meadows", "label": "The Meadows"},
        {"value": "The Springs", "label": "The Springs"},
        {"value": "The Sustainable City", "label": "The Sustainable City"},
        {"value": "The Valley", "label": "The Valley"},
        {"value": "The Villa", "label": "The Villa"},
        {"value": "The World Islands", "label": "The World Islands"},
        {"value": "Tilal Al Ghaf", "label": "Tilal Al Ghaf"},
        {"value": "Town Square", "label": "Town Square"},
        {"value": "Villanova", "label": "Villanova"},
        {"value": "Wadi Al Safa 5", "label": "Wadi Al Safa 5"},
        {"value": "YAS Island", "label": "YAS Island"}
    ];
    const completionOptions =[t("ready"), t("any"),t("Off-plan")]
    const typeOptions = [t("Plots"), t("Town-house"), t("Villa"), t("Apartments")]
    const handleSearchChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            search: value
        }));
    }
    const handlePriceFromChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            priceValues: {
                ...prevState.priceValues,
                from: value
            }
        }));
    }

    const handlePriceToChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            priceValues: {
                ...prevState.priceValues,
                to: value
            }
        }));
    }

    const handleSizeFromChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            sizeValues: {
                ...prevState.sizeValues,
                from: value
            }
        }));
    }

    const handleSizeToChange = (value) => {
        setFilterDataProjects(prevState => ({
            ...prevState,
            sizeValues: {
                ...prevState.sizeValues,
                to: value
            }
        }));
    }
    const [filteredProjects, setFilteredProjects] = useState([]);

    const handleItemChange = (propertyName, selectedItem) => {
        setFilterDataProjects(prevState => {
            const existingItems = prevState[propertyName];

            const itemExists = existingItems.includes(selectedItem);

            const updatedItems = itemExists
                ? existingItems.filter(item => item !== selectedItem)
                : [...existingItems, selectedItem];

            return {
                ...prevState,
                [propertyName]: updatedItems
            };
        });
    }
    const [filterOpen, setFilterOpen] = useState(false);
    return(<div className={"Properties"}>
        <MenuProjectFilter setFilterOpen={setFilterOpen} handleMenuToggle={handleMenuToggle} />
        <div className={`project-content ${filterOpen===true?"block":""}`}>

            <div className="option">
                <div className="header">
                    <div className="tittle">Popular</div>
                    <Link to={"/phone/projects"}>  <div className="see-more">See more</div></Link>
                </div>
                <div className="content">
                    {
                        shuffledProjects.map((projectData, index) => (
                            <Project projectData={projectData} key={index}/>
                        ))
                    }


                </div>
            </div>
            {visited.length>0&&<div className="option">
                <div className="header">
                    <div className="tittle">Reviewed</div>
                   <div className="see-more">See more</div>
                </div>
                <div className="content">
                    {projects.filter(project => visited.includes(project._id)).map((likedProject, index) => (
                        <Project projectData={likedProject} key={index}/>
                    ))}
                </div>
            </div>}
            {liked.length>0&&
            <div className="option">
                <div className="header">
                    <div className="tittle">Liked</div>
                    <div className="see-more">See more</div>
                </div>
                <div className="content">
                    {projects.filter(project => liked.includes(project._id)).map((likedProject, index) => (
                        <Project projectData={likedProject} key={index}/>
                    ))}
                </div>
            </div>}

            {filterOpen===true&&<div className="filter-prop">
                <div className="header">
                    <svg onClick={()=>setFilterOpen(false)}  xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                        <path opacity="0.4" d="M20.5 41C31.8217 41 41 31.8217 41 20.5C41 9.17816 31.8217 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8217 9.17816 41 20.5 41Z" fill="black" fill-opacity="0.2"/>
                        <path d="M22.6189 20.9741L27.2164 16.0718C27.7961 15.4537 27.7961 14.4306 27.2164 13.8125C26.6367 13.1943 25.6772 13.1943 25.0976 13.8125L20.5 18.7148L15.9024 13.8125C15.3228 13.1943 14.3633 13.1943 13.7836 13.8125C13.2039 14.4306 13.2039 15.4537 13.7836 16.0718L18.3812 20.9741L13.7836 25.8764C13.2039 26.4946 13.2039 27.5177 13.7836 28.1358C14.0835 28.4555 14.4632 28.6047 14.843 28.6047C15.2228 28.6047 15.6026 28.4555 15.9024 28.1358L20.5 23.2334L25.0976 28.1358C25.3974 28.4555 25.7772 28.6047 26.157 28.6047C26.5368 28.6047 26.9166 28.4555 27.2164 28.1358C27.7961 27.5177 27.7961 26.4946 27.2164 25.8764L22.6189 20.9741Z" fill="#575757"/>
                    </svg>
                    <div className="name">Filter</div>
                    <div onClick={()=>{
                        setFilterDataProjects({
                            search: "",
                            priceValues: { from: "", to: "" },
                            sizeValues: { from: "", to: "" },
                            bedrooms: [],
                            location: [],
                            completion: [],
                            propertyType: []
                        })
                    }} className="clear">Clear All</div>
                </div>
                <div className="content">
                    <Link to="/phone/projects" state={{ filter: filterDataProjects }} > <div className="apply">Apply filter</div></Link>
                    <div className="selection">
                        <div className="tittle">Bedrooms</div>
                        <div className="options">
                            {bedroomOptions.map((option,index)=>(
                                <div onClick={()=>handleItemChange("bedrooms",option)} className={`option ${filterDataProjects.bedrooms.includes(option)?"active":""}`}>{option}</div>
                            ))}
                        </div>
                    </div>
                    <div className="delimeter"/>
                    <div className="selection">
                        <div className="tittle">Price from</div>
                        <div className="options">
                            {priceData.map((option,index)=>(
                                <div onClick={()=>handlePriceFromChange(option.value)} className={`option ${filterDataProjects.priceValues.from===option.value?"active":""}`}>{option.label}</div>
                            ))}
                        </div>
                    </div>
                    <div className="selection">
                        <div className="tittle">Price up to</div>
                        <div className="options">
                            {priceData.map((option,index)=>(
                                <div onClick={()=>handlePriceToChange(option.value)} className={`option ${filterDataProjects.priceValues.to===option.value?"active":""}`}>{option.label}</div>
                            ))}
                        </div>
                    </div>
                    <div className="delimeter"/>
                    <div className="selection-icons">
                        <div className="tittle">Property Type</div>
                        <div className="options">
                            <div onClick={()=>handleItemChange("propertyType","Apartments")} className={`option ${filterDataProjects.propertyType.includes("Apartments")?"active":""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <g clip-path="url(#clip0_167_1847)">
                                        <path d="M24.5834 24.1668H22.8909C22.9084 24.0287 22.9171 23.8895 22.9167 23.7502C22.9167 22.5741 22.2399 21.573 21.25 21.1095V7.08354C21.25 6.83354 21.0834 6.66689 20.8334 6.66689H14.5834V0.416895C14.5834 0.166895 14.4167 0.000244151 14.1667 0.000244151H2.91675C2.66665 0.000195323 2.5 0.166846 2.5 0.416846V24.1668H0.41665C0.16665 24.1668 0 24.3335 0 24.5835C0 24.8335 0.16665 25.0002 0.41665 25.0002H24.5834C24.8334 25.0002 25 24.8335 25 24.5835C25 24.3335 24.8334 24.1668 24.5834 24.1668ZM20.4167 20.8629C20.2786 20.8435 20.1394 20.8336 20 20.8335C19.6887 20.8338 19.3797 20.8857 19.0854 20.9872C19.0128 20.8904 18.8958 20.8335 18.75 20.8335C18.5 20.8335 18.3334 21.0001 18.3334 21.2501V21.3778C18.1747 21.4921 18.028 21.622 17.8954 21.7657C17.8743 21.7879 17.8536 21.8105 17.8333 21.8334C17.4881 21.4019 17.0434 21.0896 16.5405 20.9376C16.4683 20.8714 16.3687 20.8334 16.25 20.8334C16.2036 20.8334 16.16 20.8393 16.1198 20.8502C16.0247 20.8391 15.9291 20.8335 15.8333 20.8334C15.5722 20.8334 15.2782 20.8673 15.0399 20.9641C15.0104 20.974 14.9812 20.9843 14.9521 20.9953C14.6642 20.7612 14.3274 20.5927 13.9726 20.5C13.9688 20.4989 13.9649 20.4982 13.9612 20.4972C13.9303 20.4891 13.8992 20.4817 13.868 20.4749C13.8426 20.4694 13.8172 20.4643 13.7916 20.4597C13.7805 20.4576 13.7694 20.4554 13.7583 20.4535C13.7194 20.4468 13.6803 20.4411 13.6411 20.4363C13.6162 20.4331 13.5912 20.4304 13.5662 20.428C13.5479 20.4263 13.5295 20.425 13.5112 20.4237C13.4916 20.4224 13.472 20.4208 13.4522 20.4198C13.4126 20.4178 13.373 20.4168 13.3333 20.4167C13.3027 20.4167 13.2723 20.4174 13.242 20.4185C13.2222 20.4192 13.2024 20.4204 13.1826 20.4215C13.1747 20.422 13.1667 20.4224 13.1588 20.4229C12.7792 20.4481 12.4063 20.5552 12.0833 20.745V7.5002H20.4167V20.8629ZM3.33335 0.833545H13.75V6.66689H11.6667C11.4167 6.66689 11.25 6.83354 11.25 7.08354V20.0419C11.0362 19.8286 10.7916 19.6486 10.5244 19.5079C10.5008 19.4953 10.477 19.483 10.453 19.4711C10.4436 19.4665 10.4343 19.4617 10.4248 19.4571C10.1235 19.3107 9.79892 19.2179 9.46572 19.1829L9.45142 19.1815C9.41203 19.1776 9.37257 19.1745 9.33306 19.1722C9.32256 19.1716 9.31206 19.1709 9.30151 19.1704C9.25659 19.1682 9.21163 19.167 9.16665 19.1669C8.54653 19.1669 7.97202 19.3708 7.5 19.7136V19.5836C7.5 19.3336 7.33335 19.1669 7.08335 19.1669C6.83335 19.1669 6.6667 19.3336 6.6667 19.5836V20.4169C6.6667 20.4794 6.6771 20.5367 6.69663 20.5875C6.48811 20.9304 6.35042 21.3116 6.2917 21.7086C5.82769 21.7614 5.38395 21.9282 5.00005 22.1941V22.0836C5.00005 21.8336 4.8334 21.667 4.5834 21.667C4.3334 21.667 4.16675 21.8336 4.16675 22.0836V22.917C4.16675 22.9656 4.17324 23.011 4.18525 23.0527C3.97509 23.3923 3.83719 23.7716 3.78018 24.1669H3.33345V0.833545H3.33335ZM6.47705 22.5088C6.4853 22.5081 6.49365 22.5076 6.50195 22.507C6.52393 22.5053 6.5459 22.5036 6.56807 22.5026C6.60092 22.501 6.63381 22.5002 6.6667 22.5001C6.9167 22.5001 7.08335 22.3335 7.08335 22.0835C7.08335 20.9168 8 20.0001 9.1667 20.0001C10.2083 20.0001 11.0833 20.7501 11.2083 21.7918C11.2351 21.901 11.3016 21.9963 11.3949 22.0591C11.4007 22.0631 11.4066 22.0669 11.4126 22.0707C11.419 22.0747 11.4254 22.0787 11.4321 22.0823C11.4483 22.0912 11.4649 22.0992 11.4821 22.106C11.5015 22.1137 11.5214 22.1202 11.5417 22.1252C11.5666 22.1334 11.5947 22.1366 11.6245 22.1357C11.7615 22.1377 11.8889 22.0628 11.9583 21.9586L11.9584 21.9585L12.0001 21.9169C12.3334 21.5002 12.7917 21.2502 13.3334 21.2502C13.6148 21.2502 13.896 21.3291 14.1484 21.4764C13.6514 21.9438 13.3695 22.553 13.3368 23.2048C13.3346 23.2477 13.3334 23.2907 13.3334 23.3336C13.3334 23.6233 13.3816 23.901 13.477 24.1669H4.625C4.82002 23.2698 5.5627 22.5919 6.47705 22.5088ZM14.4606 24.1668C14.3015 23.8976 14.2083 23.5793 14.2083 23.2918C14.2083 22.8311 14.39 22.416 14.7022 22.1126C14.7619 22.0572 14.8256 22.0062 14.8927 21.96C14.9587 21.9608 15.0241 21.9461 15.0834 21.9168C16 21.4168 17.0833 21.8752 17.4167 22.7918C17.4583 22.9168 17.5833 23.0418 17.7917 23.0418C17.8312 23.0418 17.875 23.0292 17.9189 23.0069C18.0235 22.9897 18.1062 22.913 18.1667 22.7918C18.3282 22.4487 18.5782 22.1748 18.8825 21.9828C18.9481 21.9645 19.0045 21.932 19.0494 21.888C19.3356 21.7442 19.66 21.6668 20 21.6668C21.1667 21.6668 22.0834 22.5835 22.0834 23.7502C22.0834 23.8752 22.0834 24.0418 22.0417 24.1668H14.4606Z" fill="black"/>
                                        <path d="M13.75 10.8334C13.5 10.8334 13.3333 11 13.3333 11.25V12.0834C13.3333 12.3334 13.5 12.5 13.75 12.5C14 12.5 14.1666 12.3334 14.1666 12.0834V11.25C14.1666 11 14 10.8334 13.75 10.8334ZM13.75 18.3334C13.5 18.3334 13.3333 18.5 13.3333 18.7501V19.5834C13.3333 19.8334 13.5 20.0001 13.75 20.0001C14 20.0001 14.1666 19.8334 14.1666 19.5834V18.7501C14.1666 18.5 14 18.3334 13.75 18.3334ZM13.75 13.3334C13.5 13.3334 13.3333 13.5 13.3333 13.75V14.5834C13.3333 14.8334 13.5 15.0001 13.75 15.0001C14 15.0001 14.1666 14.8334 14.1666 14.5834V13.75C14.1666 13.5 14 13.3334 13.75 13.3334ZM13.75 15.8334C13.5 15.8334 13.3333 16 13.3333 16.25V17.0834C13.3333 17.3334 13.5 17.5 13.75 17.5C14 17.5 14.1666 17.3334 14.1666 17.0834V16.25C14.1666 16 14 15.8334 13.75 15.8334ZM13.75 8.3334C13.5 8.3334 13.3333 8.50005 13.3333 8.75005V9.5834C13.3333 9.8334 13.5 10 13.75 10C14 10 14.1666 9.8334 14.1666 9.5834V8.75005C14.1666 8.50005 14 8.3334 13.75 8.3334ZM16.25 12.5C16.5 12.5 16.6666 12.3334 16.6666 12.0834V11.25C16.6666 11 16.5 10.8334 16.25 10.8334C16 10.8334 15.8333 11 15.8333 11.25V12.0834C15.8333 12.3334 16 12.5 16.25 12.5ZM16.25 10C16.5 10 16.6666 9.8334 16.6666 9.5834V8.75005C16.6666 8.50005 16.5 8.3334 16.25 8.3334C16 8.3334 15.8333 8.50005 15.8333 8.75005V9.5834C15.8333 9.8334 16 10 16.25 10ZM16.25 15.0001C16.5 15.0001 16.6666 14.8334 16.6666 14.5834V13.75C16.6666 13.5 16.5 13.3334 16.25 13.3334C16 13.3334 15.8333 13.5 15.8333 13.75V14.5834C15.8333 14.8334 16 15.0001 16.25 15.0001ZM16.25 17.5C16.5 17.5 16.6666 17.3334 16.6666 17.0834V16.25C16.6666 16 16.5 15.8334 16.25 15.8334C16 15.8334 15.8333 16 15.8333 16.25V17.0834C15.8333 17.3334 16 17.5 16.25 17.5ZM16.25 20.0001C16.5 20.0001 16.6666 19.8334 16.6666 19.5834V18.7501C16.6666 18.5 16.5 18.3334 16.25 18.3334C16 18.3334 15.8333 18.5 15.8333 18.7501V19.5834C15.8333 19.8334 16 20.0001 16.25 20.0001ZM18.75 15.0001C19 15.0001 19.1666 14.8334 19.1666 14.5834V13.75C19.1666 13.5 19 13.3334 18.75 13.3334C18.5 13.3334 18.3333 13.5 18.3333 13.75V14.5834C18.3333 14.8334 18.5 15.0001 18.75 15.0001ZM18.75 12.5C19 12.5 19.1666 12.3334 19.1666 12.0834V11.25C19.1666 11 19 10.8334 18.75 10.8334C18.5 10.8334 18.3333 11 18.3333 11.25V12.0834C18.3333 12.3334 18.5 12.5 18.75 12.5ZM18.75 20.0001C19 20.0001 19.1666 19.8334 19.1666 19.5834V18.7501C19.1666 18.5 19 18.3334 18.75 18.3334C18.5 18.3334 18.3333 18.5 18.3333 18.7501V19.5834C18.3333 19.8334 18.5 20.0001 18.75 20.0001ZM18.75 17.5C19 17.5 19.1666 17.3334 19.1666 17.0834V16.25C19.1666 16 19 15.8334 18.75 15.8334C18.5 15.8334 18.3333 16 18.3333 16.25V17.0834C18.3333 17.3334 18.5 17.5 18.75 17.5ZM18.75 10C19 10 19.1666 9.8334 19.1666 9.5834V8.75005C19.1666 8.50005 19 8.3334 18.75 8.3334C18.5 8.3334 18.3333 8.50005 18.3333 8.75005V9.5834C18.3333 9.8334 18.5 10 18.75 10ZM4.58334 15.8334C4.83334 15.8334 4.99999 15.6667 4.99999 15.4167V14.5834C4.99999 14.3334 4.83334 14.1667 4.58334 14.1667C4.33334 14.1667 4.16669 14.3334 4.16669 14.5834V15.4167C4.16664 15.6667 4.33334 15.8334 4.58334 15.8334ZM4.58334 18.3334C4.83334 18.3334 4.99999 18.1667 4.99999 17.9167V17.0834C4.99999 16.8334 4.83334 16.6667 4.58334 16.6667C4.33334 16.6667 4.16669 16.8334 4.16669 17.0834V17.9167C4.16664 18.1667 4.33334 18.3334 4.58334 18.3334ZM4.58334 20.8334C4.83334 20.8334 4.99999 20.6667 4.99999 20.4167V19.5834C4.99999 19.3334 4.83334 19.1667 4.58334 19.1667C4.33334 19.1667 4.16669 19.3334 4.16669 19.5834V20.4167C4.16664 20.6667 4.33334 20.8334 4.58334 20.8334ZM4.58334 3.3334C4.83334 3.3334 4.99999 3.16675 4.99999 2.91675V2.0834C4.99999 1.8334 4.83334 1.66675 4.58334 1.66675C4.33334 1.66675 4.16669 1.8334 4.16669 2.0834V2.91675C4.16664 3.1667 4.33334 3.3334 4.58334 3.3334ZM4.58334 5.8334C4.83334 5.8334 4.99999 5.66675 4.99999 5.41675V4.5834C4.99999 4.3334 4.83334 4.16675 4.58334 4.16675C4.33334 4.16675 4.16669 4.3334 4.16669 4.5834V5.41675C4.16664 5.6667 4.33334 5.8334 4.58334 5.8334ZM4.58334 8.3334C4.83334 8.3334 4.99999 8.16675 4.99999 7.91675V7.0834C4.99999 6.8334 4.83334 6.66675 4.58334 6.66675C4.33334 6.66675 4.16669 6.8334 4.16669 7.0834V7.91675C4.16664 8.1667 4.33334 8.3334 4.58334 8.3334ZM4.58334 10.8334C4.83334 10.8334 4.99999 10.6667 4.99999 10.4167V9.5834C4.99999 9.3334 4.83334 9.16675 4.58334 9.16675C4.33334 9.16675 4.16669 9.3334 4.16669 9.5834V10.4167C4.16664 10.6667 4.33334 10.8334 4.58334 10.8334ZM4.58334 13.3334C4.83334 13.3334 4.99999 13.1667 4.99999 12.9167V12.0834C4.99999 11.8334 4.83334 11.6667 4.58334 11.6667C4.33334 11.6667 4.16669 11.8334 4.16669 12.0834V12.9167C4.16664 13.1667 4.33334 13.3334 4.58334 13.3334ZM7.08334 5.8334C7.33334 5.8334 7.49999 5.66675 7.49999 5.41675V4.5834C7.49999 4.3334 7.33334 4.16675 7.08334 4.16675C6.83334 4.16675 6.66669 4.3334 6.66669 4.5834V5.41675C6.66664 5.6667 6.83334 5.8334 7.08334 5.8334ZM7.08334 3.3334C7.33334 3.3334 7.49999 3.16675 7.49999 2.91675V2.0834C7.49999 1.8334 7.33334 1.66675 7.08334 1.66675C6.83334 1.66675 6.66669 1.8334 6.66669 2.0834V2.91675C6.66664 3.1667 6.83334 3.3334 7.08334 3.3334ZM7.08334 10.8334C7.33334 10.8334 7.49999 10.6667 7.49999 10.4167V9.5834C7.49999 9.3334 7.33334 9.16675 7.08334 9.16675C6.83334 9.16675 6.66669 9.3334 6.66669 9.5834V10.4167C6.66664 10.6667 6.83334 10.8334 7.08334 10.8334ZM7.08334 8.3334C7.33334 8.3334 7.49999 8.16675 7.49999 7.91675V7.0834C7.49999 6.8334 7.33334 6.66675 7.08334 6.66675C6.83334 6.66675 6.66669 6.8334 6.66669 7.0834V7.91675C6.66664 8.1667 6.83334 8.3334 7.08334 8.3334ZM7.08334 13.3334C7.33334 13.3334 7.49999 13.1667 7.49999 12.9167V12.0834C7.49999 11.8334 7.33334 11.6667 7.08334 11.6667C6.83334 11.6667 6.66669 11.8334 6.66669 12.0834V12.9167C6.66664 13.1667 6.83334 13.3334 7.08334 13.3334ZM7.08334 15.8334C7.33334 15.8334 7.49999 15.6667 7.49999 15.4167V14.5834C7.49999 14.3334 7.33334 14.1667 7.08334 14.1667C6.83334 14.1667 6.66669 14.3334 6.66669 14.5834V15.4167C6.66664 15.6667 6.83334 15.8334 7.08334 15.8334ZM7.08334 18.3334C7.33334 18.3334 7.49999 18.1667 7.49999 17.9167V17.0834C7.49999 16.8334 7.33334 16.6667 7.08334 16.6667C6.83334 16.6667 6.66669 16.8334 6.66669 17.0834V17.9167C6.66664 18.1667 6.83334 18.3334 7.08334 18.3334ZM9.58334 8.3334C9.83334 8.3334 9.99999 8.16675 9.99999 7.91675V7.0834C9.99999 6.8334 9.83334 6.66675 9.58334 6.66675C9.33334 6.66675 9.16669 6.8334 9.16669 7.0834V7.91675C9.16664 8.1667 9.33334 8.3334 9.58334 8.3334ZM9.58334 5.8334C9.83334 5.8334 9.99999 5.66675 9.99999 5.41675V4.5834C9.99999 4.3334 9.83334 4.16675 9.58334 4.16675C9.33334 4.16675 9.16669 4.3334 9.16669 4.5834V5.41675C9.16664 5.6667 9.33334 5.8334 9.58334 5.8334ZM9.58334 3.3334C9.83334 3.3334 9.99999 3.16675 9.99999 2.91675V2.0834C9.99999 1.8334 9.83334 1.66675 9.58334 1.66675C9.33334 1.66675 9.16669 1.8334 9.16669 2.0834V2.91675C9.16664 3.1667 9.33334 3.3334 9.58334 3.3334ZM9.58334 18.3334C9.83334 18.3334 9.99999 18.1667 9.99999 17.9167V17.0834C9.99999 16.8334 9.83334 16.6667 9.58334 16.6667C9.33334 16.6667 9.16669 16.8334 9.16669 17.0834V17.9167C9.16664 18.1667 9.33334 18.3334 9.58334 18.3334ZM9.58334 15.8334C9.83334 15.8334 9.99999 15.6667 9.99999 15.4167V14.5834C9.99999 14.3334 9.83334 14.1667 9.58334 14.1667C9.33334 14.1667 9.16669 14.3334 9.16669 14.5834V15.4167C9.16664 15.6667 9.33334 15.8334 9.58334 15.8334ZM9.58334 13.3334C9.83334 13.3334 9.99999 13.1667 9.99999 12.9167V12.0834C9.99999 11.8334 9.83334 11.6667 9.58334 11.6667C9.33334 11.6667 9.16669 11.8334 9.16669 12.0834V12.9167C9.16664 13.1667 9.33334 13.3334 9.58334 13.3334ZM9.58334 10.8334C9.83334 10.8334 9.99999 10.6667 9.99999 10.4167V9.5834C9.99999 9.3334 9.83334 9.16675 9.58334 9.16675C9.33334 9.16675 9.16669 9.3334 9.16669 9.5834V10.4167C9.16664 10.6667 9.33334 10.8334 9.58334 10.8334ZM12.0833 5.8334C12.3333 5.8334 12.5 5.66675 12.5 5.41675V4.5834C12.5 4.3334 12.3333 4.16675 12.0833 4.16675C11.8333 4.16675 11.6667 4.3334 11.6667 4.5834V5.41675C11.6666 5.6667 11.8333 5.8334 12.0833 5.8334ZM12.0833 3.3334C12.3333 3.3334 12.5 3.16675 12.5 2.91675V2.0834C12.5 1.8334 12.3333 1.66675 12.0833 1.66675C11.8333 1.66675 11.6667 1.8334 11.6667 2.0834V2.91675C11.6666 3.1667 11.8333 3.3334 12.0833 3.3334Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_167_1847">
                                            <rect width="25" height="25" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Apartment
                            </div>
                            <div onClick={()=>handleItemChange("propertyType","Villa")} className={`option ${filterDataProjects.propertyType.includes("Villa")?"active":""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <g clip-path="url(#clip0_167_1851)">
                                        <path d="M24.6094 21.0938H23.0117V20.6289C23.65 20.4807 24.0998 19.9091 24.0938 19.2539C24.0938 19.2149 23.7773 15.3477 22.7265 15.3477C21.6757 15.3477 21.3593 19.2305 21.3593 19.2539C21.3533 19.9091 21.8031 20.4807 22.4414 20.6289V21.0938H19.707V14.4258L20.9375 15.8828C21.2617 16.2735 21.8359 15.7383 21.5077 15.3672L11.2812 3.25779C11.2451 3.21661 11.2006 3.18351 11.1508 3.16063C11.101 3.13775 11.047 3.12561 10.9922 3.125C10.8866 3.12872 10.7862 3.17193 10.7109 3.24608L6.875 7.42188H1.89454C1.79094 7.42188 1.69159 7.46303 1.61833 7.53629C1.54507 7.60954 1.50392 7.7089 1.50392 7.8125V21.0938H0.390625C0.287025 21.0938 0.187668 21.1349 0.114411 21.2082C0.041155 21.2814 0 21.3808 0 21.4844C0 21.588 0.041155 21.6873 0.114411 21.7606C0.187668 21.8338 0.287025 21.875 0.390625 21.875H24.6094C24.713 21.875 24.8123 21.8338 24.8856 21.7606C24.9588 21.6873 25 21.588 25 21.4844C25 21.3808 24.9588 21.2814 24.8856 21.2082C24.8123 21.1349 24.713 21.0938 24.6094 21.0938ZM21.918 19.2539C21.918 18.5313 22.3672 16.2656 22.6992 15.9375C23.0469 16.2656 23.4805 18.5313 23.4805 19.2539C23.4844 19.4212 23.4372 19.5857 23.345 19.7253C23.2528 19.8649 23.1202 19.9731 22.9648 20.0352C22.9648 19.7969 23.0625 19.2539 22.6797 19.2539C22.2968 19.2539 22.4101 19.7969 22.3945 20.0352C22.2489 19.9649 22.1273 19.8533 22.0446 19.7144C21.962 19.5755 21.922 19.4154 21.9297 19.2539H21.918ZM18.9375 14.0625V21.0938H13.6367V14.0625H18.9375ZM10.9727 4.09767L18.75 13.2813H9.84767V7.8125C9.84767 7.7089 9.80651 7.60954 9.73326 7.53629C9.66 7.46303 9.56064 7.42188 9.45704 7.42188H7.89454L10.9727 4.09767ZM2.27346 8.20313H9.08988V21.0938H8.33209V10.1563C8.33209 10.0527 8.29094 9.95329 8.21768 9.88004C8.14443 9.80678 8.04507 9.76563 7.94147 9.76563H4.54688C4.44327 9.76563 4.34392 9.80678 4.27066 9.88004C4.19741 9.95329 4.15625 10.0527 4.15625 10.1563V21.0938H2.27346V8.20313ZM7.57421 17.5781H4.92579V10.5469H7.57421V17.5781ZM4.92579 21.0938V18.3594H7.57426V21.0938H4.92579ZM9.84767 21.0938V14.0625H12.8906V21.0938H9.84767Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_167_1851">
                                            <rect width="25" height="25" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Villa
                            </div>
                            <div onClick={()=>handleItemChange("propertyType","Town house")} className={`option ${filterDataProjects.propertyType.includes("Town house")?"active":""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <g clip-path="url(#clip0_167_1956)">
                                        <path d="M24.333 9.1731H25.0001V9.80572H24.333V9.1731Z" fill="black"/>
                                        <path d="M24.9999 8.55213V6.89415L21.1749 3.77783L17.5978 6.71917H16.0932L12.4831 3.77783L8.90592 6.71917H7.40126L3.79122 3.77783L0 6.89512V21.2224H24.9998V10.4213H24.3328V14.9709H18.6728V15.6379H24.3328V19.5998H18.0548V11.1419H18.6728V10.4749H18.0548V7.207L21.1769 4.63982L24.3328 7.2111V8.55213H24.9999ZM16.3164 7.38618H16.5185V8.39809H17.1855V7.38618H17.3876V10.4749H16.3164V7.38618ZM16.3164 11.1419H17.3877V18.5808H16.3164V11.1419ZM16.3164 19.2478H17.3877V19.5998H16.3164V19.2478ZM9.35454 11.1419H9.92302V10.4749H9.35454V7.21387L12.485 4.63982L15.6493 7.21792V10.4749H15.0808V11.1419H15.6493V19.5998H9.35454V11.1419ZM7.61615 18.5808V11.1419H8.68749V18.5808H7.61615ZM8.68749 19.2478V19.5998H7.61615V19.2478H8.68749ZM7.6161 7.38618H7.81827V8.39809H8.48532V7.38618H8.68744V10.4749H7.6161V7.38618ZM0.667053 15.6379H6.34978V14.9709H0.667053V7.21023L3.79312 4.63982L6.9491 7.21115V10.4749H6.34978V11.1419H6.9491V19.5998H0.667053V15.6379ZM24.3328 20.2668V20.5553H0.667053V20.2668H24.3328Z" fill="black"/>
                                        <path d="M5.36365 10.4748V7.30645H2.30789V10.4748H1.94229V11.1419H5.72925V10.4748H5.36365ZM3.50222 10.4748H2.97494V9.12483H3.50222V10.4748ZM3.50222 8.45778H2.97494V7.9735H3.50222V8.45778ZM4.69655 10.4748H4.16927V9.12478H4.69655V10.4748ZM4.69655 8.45778H4.16927V7.9735H4.69655V8.45778ZM14.0297 10.4748V7.3064H10.974V10.4748H10.6084V11.1418H14.3953V10.4748H14.0297ZM12.1684 10.4748H11.6411V9.12483H12.1684V10.4748ZM12.1684 8.45778H11.6411V7.9735H12.1684V8.45778ZM13.3627 10.4748H12.8355V9.12478H13.3627V10.4748ZM13.3627 8.45778H12.8355V7.9735H13.3627V8.45778ZM22.7688 10.4748V7.3064H19.713V10.4748H19.3474V11.1418H23.1344V10.4748H22.7688ZM20.9074 10.4748H20.3801V9.12483H20.9074V10.4748ZM20.9075 8.45778H20.3801V7.9735H20.9075V8.45778ZM22.1017 10.4748H21.5745V9.12478H22.1017V10.4748ZM22.1017 8.45778H21.5745V7.9735H22.1017V8.45778ZM9.92306 14.9707H15.0809V15.6377H9.92306V14.9707ZM1.60876 16.6385V19.1564H2.27582V17.3056H3.50222V19.1564H4.16927V17.3056H5.39567V19.1564H6.06273V16.6385H1.60876ZM10.3479 16.6385V19.1564H11.015V17.3056H12.2413V19.1564H12.9084V17.3056H14.1348V19.1564H14.8018V16.6385H10.3479ZM19.0139 16.6385V19.1564H19.681V17.3056H20.9075V19.1564H21.5745V17.3056H22.8009V19.1564H23.4679V16.6385H19.0139ZM2.6429 12.0176V14.4033H5.02854V12.0176H2.6429ZM4.36149 13.7363H3.30995V12.6847H4.36149V13.7363ZM11.3071 12.0176V14.4033H13.6928V12.0176H11.3071ZM13.0258 13.7363H11.9741V12.6847H13.0258V13.7363ZM20.0482 12.0176V14.4033H22.4338V12.0176H20.0482ZM21.7667 13.7363H20.7152V12.6847H21.7667V13.7363ZM7.81825 8.92461H8.48531V9.59167H7.81825V8.92461ZM16.5187 8.94924H17.1857V9.6163H16.5187V8.94924Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_167_1956">
                                            <rect width="25" height="25" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Townhouse
                            </div>
                            <div onClick={()=>handleItemChange("propertyType","Plots")} className={`option ${filterDataProjects.propertyType.includes("Plots")?"active":""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                    <path d="M7.25 1H9.125" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.8751 1H14.7501" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18.5003 1H20.3753" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24.1247 1H25.9997V2.875" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 24.125V26H2.875" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 20.375V18.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 14.75V12.875" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 9.125V7.25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.5 1H1V3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.49969 20.5661V8.5H25.9997V26H8.49969V20.5661Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M25.9999 17.25H17.2499V8.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Plots
                            </div>
                        </div>
                    </div>
                    <div className="selection">
                        <div className="tittle">Size from (sq.ft)</div>
                        <div className="options">
                            {sizeData.map((option,index)=>(
                                <div onClick={()=>handleSizeFromChange(option.value)} className={`option ${filterDataProjects.sizeValues.from===option.value?"active":""}`}>{option.label}</div>
                            ))}
                        </div>
                    </div>
                    <div className="selection">
                        <div className="tittle">Size up to (sq.ft)</div>
                        <div className="options">
                            {sizeData.map((option,index)=>(
                                <div onClick={()=>handleSizeToChange(option.value)} className={`option ${filterDataProjects.sizeValues.to===option.value?"active":""}`}>{option.label}</div>
                            ))}
                        </div>
                    </div>
                    <div className="delimeter"/>
                    <div className="areas">
                        <div onClick={()=>setVisibleArea(!visibleArea)} className="main">Select Area
                            <div className="open">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                                    <path d="M1 4.5H9M9 4.5L5.66667 1.5M9 4.5L5.66667 7.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                        </div>
                        {visibleArea&&<div className={`choise ${visibleArea ? 'visible' : ''}`}>
                            {values.map((value,index)=>(
                                <div className="option" onClick={()=>{handleItemChange("location",value.value)}}>
                                    {filterDataProjects.location.includes(value.value)?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#C29773"/>
                                        </svg>:
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#B6B6B6" stroke-width="1.5"/>
                                        </svg>
                                    }
                                    {value.value}
                                </div>
                            ))}
                        </div>}
                    </div>
                    <div className="selection">
                        <div className="tittle">Completion status</div>
                        <div className="options">
                            {completionOptions.map((option,index)=>(
                                <div onClick={()=>handleItemChange("completion",option)} className={`option ${filterDataProjects.completion.includes(option)?"active":""}`}>{option}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
        <Footer active={"Properties"}/>
    </div>)
}
export default Properties