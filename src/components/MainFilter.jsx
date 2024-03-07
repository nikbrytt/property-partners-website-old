import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import '../styles/Components/MapFilter.scss'

const MainFilter = ({setFilterDataProjects, handleSetFilterData, isNotHome}) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

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

    const [filterDataProjects1, setFilterDataProjects1] = useState({
        search: "",
        priceValues: {from: "", to: ""},
        sizeValues: {from: "", to: ""},
        bedrooms: [],
        location: [],
        completion: [],
        propertyType: [],
    })

    const handleSearchChange = (value) => {
        setFilterDataProjects1(prevState => ({
            ...prevState,
            search: value
        }));
    }

    const handleItemChange = (propertyName, selectedItem) => {
        setFilterDataProjects1(prevState => {
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

    const handleFromToChange = (type, field, value) => {
        setFilterDataProjects1(prevState => ({
            ...prevState,
            [type]: {
                ...prevState[type],
                [field]: value
            }
        }));
    }

    const Search = () => {
        handleSetFilterData(filterDataProjects1)
    }

    const resetFilter = () => {
        setFilterDataProjects({
            search: "",
            priceValues: { from: "", to: "" },
            sizeValues: { from: "", to: "" },
            bedrooms: [],
            location: [],
            completion: [],
            propertyType: []
        })
    }

    const handleSearchButtonClick = () => {
        const filterString = encodeURIComponent(JSON.stringify(filterDataProjects1));
        navigate(`/real-estate?filter=${filterString}`);
    };

    return (<div className="main-filter">
        <div className="search-row">
            {
                completionOptions.map((option, index) => (
                    <div key={index}
                         className={`${filterDataProjects1.completion.includes(option) ? 'status active' : 'status'}`}
                         onClick={() => handleItemChange("completion", option)}>
                        {option}
                    </div>
                ))
            }
            <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                     fill="none">
                    <path
                        d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.867 16 16 12.867 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16ZM17.485 16.071L20.314 18.899L18.899 20.314L16.071 17.485L17.485 16.071Z"
                        fill="white"/>
                </svg>
                <input type="text" placeholder='Type location' value={filterDataProjects1.search}
                       onChange={(e) => handleSearchChange(e.target.value)}/>
                <div className="search-button" onClick={isNotHome ? Search : handleSearchButtonClick}>
                    Search
                </div>
            </div>
        </div>
        <div className="types-row">
            <div className="type">
                Completion
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                     fill="none">
                    <path
                        d="M9.2778 11.8764L14.1001 6.9035C14.401 6.5932 14.2186 6 13.8223 6H4.17773C3.78142 6 3.59902 6.5932 3.89992 6.9035L8.72219 11.8764C8.88205 12.0412 9.11795 12.0412 9.2778 11.8764Z"
                        fill="#000"/>
                </svg>
                <div className="menu">
                    {typeOptions.map((option, index) => (
                        <div key={index} className={`option`}
                             onClick={() => handleItemChange("propertyType", option)}>
                            {filterDataProjects1.propertyType.includes(option) ?
                                <svg className='hide' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                          fill="#DBA77B"/>
                                </svg> :
                                <svg className='hide' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                        stroke="#B6B6B6" stroke-width="1.5"/>
                                </svg>
                            }

                            {option}

                            {filterDataProjects1.propertyType.includes(option) ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                     fill="none">
                                    <path
                                        d="M5 9.5C7.48528 9.5 9.5 7.48528 9.5 5C9.5 2.51472 7.48528 0.5 5 0.5C2.51472 0.5 0.5 2.51472 0.5 5C0.5 7.48528 2.51472 9.5 5 9.5Z"
                                        fill="white" stroke="white"/>
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                     fill="none">
                                    <path
                                        d="M5 9.5C7.48528 9.5 9.5 7.48528 9.5 5C9.5 2.51472 7.48528 0.5 5 0.5C2.51472 0.5 0.5 2.51472 0.5 5C0.5 7.48528 2.51472 9.5 5 9.5Z"
                                        stroke="white"/>
                                </svg>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="type">
                Size
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                     fill="none">
                    <path
                        d="M9.2778 11.8764L14.1001 6.9035C14.401 6.5932 14.2186 6 13.8223 6H4.17773C3.78142 6 3.59902 6.5932 3.89992 6.9035L8.72219 11.8764C8.88205 12.0412 9.11795 12.0412 9.2778 11.8764Z"
                        fill="#000"/>
                </svg>
                <div className='price-menu'>
                    <div>
                        <input
                            value={filterDataProjects1.sizeValues.from}
                            onChange={(e) => handleFromToChange('sizeValues', 'from', e.target.value)}
                            placeholder={t('from')}
                        />
                        m2
                    </div>
                    <div>
                        <input
                            value={filterDataProjects1.sizeValues.to}
                            onChange={(e) => handleFromToChange('sizeValues', 'to', e.target.value)}
                            placeholder={t("to")}
                        />
                        m2
                    </div>
                </div>
            </div>
            <div className="type">
                Beds
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                     fill="none">
                    <path
                        d="M9.2778 11.8764L14.1001 6.9035C14.401 6.5932 14.2186 6 13.8223 6H4.17773C3.78142 6 3.59902 6.5932 3.89992 6.9035L8.72219 11.8764C8.88205 12.0412 9.11795 12.0412 9.2778 11.8764Z"
                        fill="#000"/>
                </svg>
                <div className="menu">
                    {bedroomOptions.map((option, index) => (
                        <div key={index} className={`option`}
                             onClick={() => handleItemChange("bedrooms", option)}>
                            {filterDataProjects1.bedrooms.includes(option) ?
                                <svg className='hide' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                          fill="#DBA77B"/>
                                </svg> :
                                <svg className='hide' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                        stroke="#B6B6B6" stroke-width="1.5"/>
                                </svg>
                            }

                            {option}

                            {filterDataProjects1.bedrooms.includes(option) ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                     fill="none">
                                    <path
                                        d="M5 9.5C7.48528 9.5 9.5 7.48528 9.5 5C9.5 2.51472 7.48528 0.5 5 0.5C2.51472 0.5 0.5 2.51472 0.5 5C0.5 7.48528 2.51472 9.5 5 9.5Z"
                                        fill="white" stroke="white"/>
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                     fill="none">
                                    <path
                                        d="M5 9.5C7.48528 9.5 9.5 7.48528 9.5 5C9.5 2.51472 7.48528 0.5 5 0.5C2.51472 0.5 0.5 2.51472 0.5 5C0.5 7.48528 2.51472 9.5 5 9.5Z"
                                        stroke="white"/>
                                </svg>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="type">
                Price
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                     fill="none">
                    <path
                        d="M9.2778 11.8764L14.1001 6.9035C14.401 6.5932 14.2186 6 13.8223 6H4.17773C3.78142 6 3.59902 6.5932 3.89992 6.9035L8.72219 11.8764C8.88205 12.0412 9.11795 12.0412 9.2778 11.8764Z"
                        fill="#000"/>
                </svg>
                <div className='price-menu'>
                    <div>
                        <input value={filterDataProjects1.priceValues.from}
                               onChange={(e) => handleFromToChange('priceValues', 'from', e.target.value)}
                               placeholder={t('from')}/>
                        €
                    </div>
                    <div>
                        <input value={filterDataProjects1.priceValues.to}
                               onChange={(e) => handleFromToChange('priceValues', 'to', e.target.value)}
                               placeholder={t("to")}
                        />
                        €
                    </div>
                </div>
            </div>
            <div className="type">
                Location
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                     fill="none">
                    <path
                        d="M9.2778 11.8764L14.1001 6.9035C14.401 6.5932 14.2186 6 13.8223 6H4.17773C3.78142 6 3.59902 6.5932 3.89992 6.9035L8.72219 11.8764C8.88205 12.0412 9.11795 12.0412 9.2778 11.8764Z"
                        fill="#000"/>
                </svg>
                <div className="menu">
                    {values.map((option, index) => (
                        <div key={index} className={`option`}
                             onClick={() => handleItemChange("location", option.value)}>
                            {filterDataProjects1.location.includes(option.label) ?
                                <svg className='hide' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                          fill="#DBA77B"/>
                                </svg> :
                                <svg className='hide' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                        stroke="#B6B6B6" stroke-width="1.5"/>
                                </svg>
                            }

                            {option.label}

                            {filterDataProjects1.location.includes(option.value) ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                     fill="none">
                                    <path
                                        d="M5 9.5C7.48528 9.5 9.5 7.48528 9.5 5C9.5 2.51472 7.48528 0.5 5 0.5C2.51472 0.5 0.5 2.51472 0.5 5C0.5 7.48528 2.51472 9.5 5 9.5Z"
                                        fill="white" stroke="white"/>
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                     fill="none">
                                    <path
                                        d="M5 9.5C7.48528 9.5 9.5 7.48528 9.5 5C9.5 2.51472 7.48528 0.5 5 0.5C2.51472 0.5 0.5 2.51472 0.5 5C0.5 7.48528 2.51472 9.5 5 9.5Z"
                                        stroke="white"/>
                                </svg>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="reset" onClick={() => resetFilter()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                    <path
                        d="M4.27615 13.3953L3.67504 13.9945L4.29122 14.5794L4.89233 13.9799L4.27615 13.3953ZM11.9685 16.7781L20.5755 8.40596L19.3582 7.22196L10.7512 15.594L11.9685 16.7781ZM10.7512 8.40594L19.3582 16.7781L20.5755 15.594L11.9684 7.22196L10.7512 8.40594ZM26.2786 12C26.2786 17.7027 21.526 22.3256 15.6633 22.3256V24C22.4766 24 28 18.6273 28 12H26.2786ZM5.04806 12C5.04806 6.29734 9.80068 1.67442 15.6633 1.67442V0C8.84998 0 3.32667 5.37258 3.32667 12H5.04806ZM15.6633 1.67442C21.526 1.67442 26.2786 6.29734 26.2786 12H28C28 5.37258 22.4766 0 15.6633 0V1.67442ZM5.13023 13.2918C5.07604 12.8689 5.04806 12.4379 5.04806 12H3.32667C3.32667 12.5072 3.35907 13.0076 3.42206 13.4989L5.13023 13.2918ZM15.6633 22.3256C12.0156 22.3256 8.79708 20.5366 6.88491 17.8076L5.46246 18.7506C7.68157 21.9176 11.4223 24 15.6633 24V22.3256ZM4.89233 13.9799L8.38979 10.4915L7.15742 9.32247L3.65997 12.8108L4.89233 13.9799ZM4.87727 12.7962L1.20225 9.30781L0 10.5061L3.67504 13.9945L4.87727 12.7962Z"
                        fill="#C8C8CB"/>
                </svg>
            </div>
        </div>
    </div>)
}

export default MainFilter