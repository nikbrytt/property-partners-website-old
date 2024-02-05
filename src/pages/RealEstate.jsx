import "../styles/Pages/realEstate.scss"
import Header from "../components/Header.jsx";
import {
    APIProvider,
    ControlPosition,
    Map,
    MapControl
} from '@vis.gl/react-google-maps';
import { useEffect, useState } from "react";
import Filter from "../components/Filter.jsx";
import Project from "../components/Project.jsx";
import Footer from "../components/Footer.jsx";
import Marker from "../components/Marker.jsx";
import axios from "axios";
import { useTranslation } from "react-i18next";

import GetConsult from "../components/GetConsult.jsx";
import React from 'react';
import AreasCardsInfo from "../data/AreasCardsInfo.jsx";
import AreaCard from "../components/AreaCard.jsx";
import Response from "../data/response.json"
const RealEstate = () => {
    const [mapZoom, setMapZoom] = useState(10);
    const [projects, setProjects] = useState(Response)
    const [visibleProjects, setVisibleProjects] = useState([])
    const { t } = useTranslation();
    const [projectPerView, setprojectsPerView] = useState(10)

    useEffect(() => {
        if(visibleProjects.length === 0 && projects !== null) {
            setVisibleProjects(projects.slice(0, 10))
        }
    }, [projects]);

    const updateProjectsVisibility = () => {
        const currentZoom = mapZoom;
        let visiblePercentage = 100;

        switch (true) {
            case currentZoom < 10:
                visiblePercentage = 5;
                break;
            case currentZoom < 11:
                visiblePercentage = 20;
                break;
            case currentZoom < 12:
                visiblePercentage = 40;
                break;
            case currentZoom < 13:
                visiblePercentage = 60;
                break;
            case currentZoom < 14:
                visiblePercentage = 80;
                break;
            case currentZoom < 15:
                visiblePercentage = 100;
                break;
            default:
                break;
        }

        const totalProjects = projects.length;
        const visibleProjectsCount = Math.ceil((visiblePercentage / 100) * totalProjects);
        const slicedVisibleProjects = projects.slice(0, visibleProjectsCount);
        setVisibleProjects(slicedVisibleProjects);
    };

    const initialDisplayCount = 6;
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);
    const [currnetIndex, setCurrentIndex] = useState(null)

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const handleNextProjects = () => {
        if (currentPage < projects.length / 3) {
            setCurrentPage(currentPage + 1);
        }
    };

    const cardInfo = AreasCardsInfo();

    const handlePrevProjects = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const [filterDataProjects, setFilterDataProjects] = useState({
        search: "",
        priceValues: { from: "", to: "" },
        sizeValues: { from: "", to: "" },
        bedrooms: [],
        location: [],
        completion: [],
        propertyType: []
    })
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        if(projects!=null){
            const filteredList = projects.filter((project) => {
                const projectNameMatches = project.projectName.toLowerCase().startsWith(filterDataProjects.search.toLowerCase());

                const isPriceInRange = () => {
                    if (!filterDataProjects.priceValues.from && !filterDataProjects.priceValues.to) {
                        return true;
                    }

                    const projectPrice = parseFloat(project.priceFrom);

                    const minPrice = filterDataProjects.priceValues.from
                        ? parseFloat(filterDataProjects.priceValues.from)
                        : Number.NEGATIVE_INFINITY;

                    const maxPrice = filterDataProjects.priceValues.to
                        ? parseFloat(filterDataProjects.priceValues.to)
                        : Number.POSITIVE_INFINITY;

                    return projectPrice >= minPrice && projectPrice <= maxPrice;
                };

                const isSizeInRange = () => {
                    if (!filterDataProjects.sizeValues.from && !filterDataProjects.sizeValues.to) {
                        return true;
                    }

                    const projectSize = parseFloat(project.sizeFrom);

                    const minSize = filterDataProjects.sizeValues.from
                        ? parseFloat(filterDataProjects.sizeValues.from)
                        : Number.NEGATIVE_INFINITY;

                    const maxSize = filterDataProjects.sizeValues.to
                        ? parseFloat(filterDataProjects.sizeValues.to)
                        : Number.POSITIVE_INFINITY;

                    return projectSize >= minSize && projectSize <= maxSize;
                };

                const isBedroomsMatch = () => {
                    if (filterDataProjects.bedrooms.length === 0) {
                        return true;
                    }

                    return filterDataProjects.bedrooms.includes(project.selectedBedrooms);
                };

                const isLocationMatch = () => {
                    if (filterDataProjects.location.length === 0) {
                        return true;
                    }

                    return filterDataProjects.location.includes(project.selectedLocation);
                };

                const isCompletionMatch = () => {
                    if (filterDataProjects.completion.length === 0) {
                        return true;
                    }

                    return filterDataProjects.completion.includes(project.selectedStatus);
                };

                const isPropertyTypeMatch = () => {
                    if (filterDataProjects.propertyType.length === 0) {
                        return true;
                    }

                    return filterDataProjects.propertyType.includes(project.selectedProperty);
                };

                return projectNameMatches && isPriceInRange() && isSizeInRange() && isBedroomsMatch() && isLocationMatch() && isCompletionMatch() && isPropertyTypeMatch();
            });

            setFilteredProjects(filteredList);
        }

    }, [filterDataProjects,projects,setFilterDataProjects]);

    if (projects === null) {
        return null;
    }

    return (
        <div className={"real-estate"}>
            <Header />
            <Filter
                filterDataProjects={filterDataProjects}
                setFilterDataProjects={setFilterDataProjects}
            />

            <div className="content">
                <div className="map-projects">
                    <div className="map">
                        <APIProvider apiKey={"AIzaSyAbaX7Vb6ERFTrWR4espV48g25lFRGGjIc"}>
                            <Map
                                zoom={10}
                                center={{
                                    lat: 25.152033492170037,
                                    lng: 55.32550889425454,
                                }}
                                mapId={"eafda8fe79279394"}
                                fullscreenControl={true}
                                onZoomChanged={ev => {
                                    setMapZoom(ev.detail.zoom);
                                    setCurrentIndex(null)
                                    updateProjectsVisibility()
                                }}
                                onClick={event => {
                                    setCurrentIndex(null)
                                }}
                            >

                                <MapControl position={ControlPosition.TOP_LEFT}>

                                </MapControl>

                                {visibleProjects.map((marker, index) => (
                                    <Marker key={index}
                                            index={index}
                                            mapZoom={mapZoom}
                                            project={marker}
                                            currnetIndex={currnetIndex}
                                            setCurrentIndex={setCurrentIndex}
                                    />
                                ))}
                            </Map>
                        </APIProvider>
                    </div>
                    <div className="projects">
                        {
                            filteredProjects.slice(0, projectPerView).map((project, index) => (
                                <Project project={project} key={index} />
                            ))
                        }

                        {projectPerView < filteredProjects.length && <div className="show-more-wrapper">
                            <div className="show-more" onClick={() => setprojectsPerView(projectPerView + 10)}>Show
                                more
                            </div>
                        </div>}
                    </div>

                    <div className="projects-phone">
                        {
                            filteredProjects.slice(startIndex, endIndex).map((project, index) => (
                                <Project project={project} key={index}/>
                            ))
                        }
                    </div>
                </div>
                <div className="map-buttons">
                    <div className="left-arrow" onClick={handlePrevProjects} disabled={currentPage === 1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                            <path d="M5.35878 10L6 9.40171L1.28244 5L6 0.598291L5.35878 0L0 5L5.35878 10Z"
                                  fill="#191C38"/>
                        </svg>
                    </div>
                    <div className="count">
                        {currentPage}
                    </div>
                    <div className="right-arrow" onClick={handleNextProjects} disabled={currentPage === projects.length / 3}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                            <path d="M0.641221 10L0 9.40171L4.71756 5L0 0.598291L0.641221 0L6 5L0.641221 10Z"
                                  fill="#191C38"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div onClick={() => window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            })} className="down-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect width="60" height="60" rx="30" fill="#191C38"/>
                    <path d="M16 27L29.5 40L43 27" stroke="#C29773" stroke-width="3" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </div>

            <div className="areas-content">
                <div className="about-dubai">
                    <div className="about-dubai-content">
                        <div className="title">{t("About Dubai")}</div>
                        <div className="description">
                            <div>{t("About Dubai Descr1")}</div>
                            <div>{t("About Dubai Descr2")}</div>
                        </div>
                    </div>
                </div>

                <div className="area-card-container">
                    {cardInfo.slice(0, 6).map((card, index) => (
                        <AreaCard
                            key={index}
                            name={card.name}
                            description={t(`${card.description}`)}
                            price={card.price}
                            image={card.image}
                            area={card.area}
                        />
                    ))}
                </div>

                <div className="get-consult-box">
                    <GetConsult/>
                </div>

                <div className="area-card-container">
                    {cardInfo.slice(6, 12).map((card, index) => (
                        <AreaCard
                            key={index}
                            name={card.name}
                            description={card.description}
                            price={card.price}
                            image={card.image}
                            area={card.area}
                        />
                    ))}
                </div>
            </div>

            <Footer/>
            {/*<div className="search-bar">*/}
            {/*    <input type="text" placeholder="Type here the area you are looking for..." />*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">*/}
            {/*        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21008 0.5C4.54633 0.5 0.765625 4.28071 0.765625 8.94446C0.765625 13.6082 4.54633 17.3889 9.21008 17.3889C11.1615 17.3889 12.9584 16.727 14.3882 15.6155L17.9637 19.1909C18.3759 19.603 19.0443 19.603 19.4565 19.1909C19.8687 18.7787 19.8687 18.1103 19.4565 17.6981L15.8811 14.1226C16.9926 12.6927 17.6545 10.8959 17.6545 8.94446C17.6545 4.28071 13.8738 0.5 9.21008 0.5ZM2.87674 8.94446C2.87674 5.44665 5.71227 2.61111 9.21008 2.61111C12.7079 2.61111 15.5434 5.44665 15.5434 8.94446C15.5434 12.4423 12.7079 15.2778 9.21008 15.2778C5.71227 15.2778 2.87674 12.4423 2.87674 8.94446Z" fill="#575757" />*/}
            {/*    </svg>*/}
            {/*</div>*/}
        </div>
    );

};

export default RealEstate;