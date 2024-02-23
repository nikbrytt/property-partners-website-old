import "../styles/filter.scss"
import { useTranslation } from "react-i18next";
import locations from "../data/Location.jsx";
import { useState } from "react";

const Filter = ({ filterDataProjects, setFilterDataProjects }) => {
    const { t } = useTranslation();
    const [visibleSearch, setVisibleSearch] = useState(false);

    const [visibleDropDowns, setVisibleDropDowns] = useState({
        "price": false,
        "size": false,
        "bedrooms": false,
        "location": false,
        "completion": false,
        "propertyType": false
    })

    const bedroomOptions = [t("studio"), "1", "2", "3", "4", "5", "6", "7"];
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

    const [showFilter, setShowFilter] = useState()


    return (<div className={"filter"}>
        <div className="filter-mob" onClick={() => setShowFilter(!showFilter)}>
            Filter

            <svg className={`${showFilter ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="4" viewBox="0 0 10 4" fill="none">
                <path d="M5 4L0 0H10L5 4Z" fill="white"/>
            </svg>
        </div>


        <div className={`filter-container ${showFilter ? 'active' : ''}`}>
            <div className="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#09121F" />
                </svg>

                <input value={filterDataProjects.search} onChange={(e)=>handleSearchChange(e.target.value)} placeholder={t("search on map")}  type="text" />
            </div>

            <div className="dropdown" onMouseEnter={() => {
                setVisibleDropDowns(prevState => ({
                    ...prevState,
                    price: true
                }));
            }}
                 onMouseLeave={() => {
                     setVisibleDropDowns(prevState => ({
                         ...prevState,
                         price: false
                     }));
                 }}
            >
                <div className={"dropdown-container"}>
                    {t("filter1")}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 14L8 10H16L12 14Z" fill="#09121F" />
                    </svg>
                </div>

                {visibleDropDowns.price && <div className="additional-menu">
                    <input value={filterDataProjects.priceValues.from} onChange={(e)=>handlePriceFromChange(e.target.value)}
                           placeholder={t('from')} />
                    <input value={filterDataProjects.priceValues.to} onChange={(e)=>handlePriceToChange(e.target.value)}  placeholder={t("to")}
                    />
                </div>}
            </div>

            <div className="dropdown" onMouseEnter={() => {
                setVisibleDropDowns(prevState => ({
                    ...prevState,
                    size: true
                }));
            }}
                 onMouseLeave={() => {
                     setVisibleDropDowns(prevState => ({
                         ...prevState,
                         size: false
                     }));
                 }}
            >
                <div className={"dropdown-container"}>
                    {t("filter2")}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                    </svg>
                </div>

                {visibleDropDowns.size && <div className="additional-menu">
                    <input value={filterDataProjects.sizeValues.from} onChange={e=>handleSizeFromChange(e.target.value)}
                           placeholder={t("from")} />
                    <input value={filterDataProjects.sizeValues.to} onChange={e=>handleSizeToChange(e.target.value)} placeholder={t("to")}
                    />
                </div>}
            </div>

            <div className="dropdown" onMouseEnter={() => {
                setVisibleDropDowns(prevState => ({
                    ...prevState,
                    bedrooms: true
                }));
            }}
                 onMouseLeave={() => {
                     setVisibleDropDowns(prevState => ({
                         ...prevState,
                         bedrooms: false
                     }));
                 }}
            >
                <div className={"dropdown-container"}>
                    {t("filter3")}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                    </svg>
                </div>

                {visibleDropDowns.bedrooms && <div className="additional-list">
                    {
                        bedroomOptions.map((option, index) => (
                            <div className='dropdown-option' key={index} onClick={()=>handleItemChange("bedrooms",option)}>
                                <div>
                                    {filterDataProjects.bedrooms.includes(option)?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#C29773"/>
                                        </svg>:
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#B6B6B6" stroke-width="1.5"/>
                                        </svg>
                                    }
                                </div>
                                {option}
                            </div>
                        ))
                    }



                </div>}
            </div>

            <div className="dropdown" onMouseEnter={() => {
                setVisibleDropDowns(prevState => ({
                    ...prevState,
                    location: true
                }));
            }}
                 onMouseLeave={() => {
                     setVisibleDropDowns(prevState => ({
                         ...prevState,
                         location: false
                     }));
                 }}
            >
                <div className={"dropdown-container"}>
                    {t("filter4")}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                    </svg>
                </div>

                {visibleDropDowns.location && <div className="additional-list location">
                    {values.map((value, index) => (
                        <div key={index} className='dropdown-option' onClick={()=>handleItemChange("location",value.value)}>
                            <div>
                                {filterDataProjects.location.includes(value.value)?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#C29773"/>
                                    </svg>
                                    :<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#B6B6B6" stroke-width="1.5"/>
                                    </svg>
                                }
                            </div>
                            {value.label}
                        </div>
                    ))}
                </div>}
            </div>

            <div className="dropdown" onMouseEnter={() => {
                setVisibleDropDowns(prevState => ({
                    ...prevState,
                    completion: true
                }));
            }}
                 onMouseLeave={() => {
                     setVisibleDropDowns(prevState => ({
                         ...prevState,
                         completion: false
                     }));
                 }}
            >
                <div className={"dropdown-container"}>
                    {t("filter7")}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                    </svg>
                </div>

                {visibleDropDowns.completion && <div className="additional-list">
                    {
                        completionOptions.map((option, index) => (
                            <div className='dropdown-option' key={index} onClick={()=>handleItemChange("completion",option)}>
                                <div>
                                    {filterDataProjects.completion.includes(option)?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#C29773"/>
                                        </svg>:
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#B6B6B6" stroke-width="1.5"/>
                                        </svg>
                                    }
                                </div>
                                {option}
                            </div>
                        ))
                    }
                </div>}
            </div>

            <div className="dropdown" onMouseEnter={() => {
                setVisibleDropDowns(prevState => ({
                    ...prevState,
                    propertyType: true
                }));
            }}
                 onMouseLeave={() => {
                     setVisibleDropDowns(prevState => ({
                         ...prevState,
                         propertyType: false
                     }));
                 }}
            >
                <div className={"dropdown-container"}>
                    {t("filter6")}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                    </svg>
                </div>

                {visibleDropDowns.propertyType && <div className="additional-list">
                    {
                        typeOptions.map((option, index) => (
                            <div className='dropdown-option' key={index} onClick={()=>handleItemChange("propertyType",option)}>
                                <div>
                                    {filterDataProjects.propertyType.includes(option)?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#C29773"/>
                                        </svg>:
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#B6B6B6" stroke-width="1.5"/>
                                        </svg>
                                    }
                                </div>
                                {option}
                            </div>
                        ))
                    }
                </div>
                }
            </div>

            <div className="clear" onClick={() => setFilterDataProjects({
                search: "",
                priceValues: { from: "", to: "" },
                sizeValues: { from: "", to: "" },
                bedrooms: [],
                location: [],
                completion: [],
                propertyType: []
            })}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <path
                        d="M7.75938 7.32205C7.50055 7.06322 7.08089 7.06322 6.82205 7.32205C6.56322 7.5809 6.56322 8.00055 6.82205 8.25937L8.56268 10L6.82207 11.7407C6.56324 11.9995 6.56324 12.4191 6.82207 12.678C7.08091 12.9368 7.50057 12.9368 7.75938 12.678L9.50005 10.9374L11.2406 12.678C11.4995 12.9368 11.9191 12.9368 12.178 12.678C12.4368 12.4191 12.4368 11.9995 12.178 11.7406L10.4373 10L12.178 8.25937C12.4368 8.00057 12.4368 7.58091 12.178 7.32208C11.9191 7.06324 11.4995 7.06324 11.2406 7.32208L9.50005 9.06267L7.75938 7.32205Z"
                        fill="#FF5959"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9.5 0.5C4.2533 0.5 0 4.7533 0 10C0 15.2467 4.2533 19.5 9.5 19.5C14.7467 19.5 19 15.2467 19 10C19 4.7533 14.7467 0.5 9.5 0.5ZM1.32558 10C1.32558 5.4854 4.9854 1.82558 9.5 1.82558C14.0146 1.82558 17.6744 5.4854 17.6744 10C17.6744 14.5146 14.0146 18.1744 9.5 18.1744C4.9854 18.1744 1.32558 14.5146 1.32558 10Z"
                          fill="#FF5959"/>
                </svg>
                {t("clear")}
            </div>
        </div>
    </div>)
}
export default Filter