import anna from "../assets/teams/anna-horshunova-min.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import FloorPlan from "./FloorPlan.jsx";
import {AdvancedMarker, APIProvider, Map} from "@vis.gl/react-google-maps";
import ProjectSimilar from "./ProjectSimilar.jsx";
import React from "react";

<div className="images-container">

    <div className="main-image"><img src={project.imageSrcMain}/></div>
    <div className="more">
        <div className="button" onClick={() => setShowImages(true)}>
            <div>Show More</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M13.1722 11.9997L8.22217 7.04974L9.63617 5.63574L16.0002 11.9997L9.63617 18.3637L8.22217 16.9497L13.1722 11.9997Z"
                    fill="black"/>
            </svg>

        </div>
    </div>
    <div className={"images"}><img src={project.interiorGallery[1]}/></div>
    <div className={"images"}><img src={project.interiorGallery[2]}/></div>
    <div className={"images"}><img src={project.architectureGallery[1]}/></div>
    <div className={"images"}><img src={project.architectureGallery[2]}/></div>


</div>
<div className="project-information">
    <div className="general-information">
        <div className="name-block">
            <div>{project.projectName}</div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none">
                    <g clip-path="url(#clip0_317_448)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.25 9C8.25 11.0715 9.92925 12.75 12 12.75C14.0708 12.75 15.75 11.0715 15.75 9C15.75 6.9285 14.0708 5.25 12 5.25C9.92925 5.25 8.25 6.9285 8.25 9ZM3 9C3 4.02975 7.02975 0 12 0C16.9703 0 21 4.02975 21 9C21 12.7125 13.473 24.0083 12 24C10.5037 24.0083 3 12.7635 3 9Z"
                              fill="#C29773"/>
                        <circle cx="12" cy="9" r="2" fill="#C29773"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_317_448">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                {project.selectedLocation || project.ownLocation}
            </div>
        </div>
        <div className="price-block">
            <div>$ {formatNumberWithCommas(project.priceFrom)}</div>
            <div>$ {(Number(project.priceFrom) / Number(project.sizeFrom)).toFixed(0)} for m²</div>
        </div>
    </div>
    <div className="additional-information">
        <div className="additional-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path
                    d="M12 14.5V22.5H4C4 20.3783 4.84285 18.3434 6.34315 16.8431C7.84344 15.3429 9.87827 14.5 12 14.5ZM18 22L15.061 23.545L15.622 20.273L13.245 17.955L16.531 17.477L18 14.5L19.47 17.477L22.755 17.955L20.378 20.273L20.938 23.545L18 22ZM12 13.5C8.685 13.5 6 10.815 6 7.5C6 4.185 8.685 1.5 12 1.5C15.315 1.5 18 4.185 18 7.5C18 10.815 15.315 13.5 12 13.5Z"
                    fill="#09121F"/>
            </svg>
            <div className="info">
                <div>Developer</div>
                <div>{project.developer}</div>
            </div>
        </div>
        <div className="additional-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                    d="M3.6665 21.5C3.40129 21.5 3.14693 21.3946 2.9594 21.2071C2.77186 21.0196 2.6665 20.7652 2.6665 20.5V4.5C2.6665 4.23478 2.77186 3.98043 2.9594 3.79289C3.14693 3.60536 3.40129 3.5 3.6665 3.5H11.0805L13.0805 5.5H20.6665C20.9317 5.5 21.1861 5.60536 21.3736 5.79289C21.5611 5.98043 21.6665 6.23478 21.6665 6.5V9.5H4.6665V19.496L6.6665 11.5H23.1665L20.8565 20.743C20.8023 20.9592 20.6775 21.1512 20.5017 21.2883C20.326 21.4255 20.1094 21.5 19.8865 21.5H3.6665Z"
                    fill="#09121F"/>
            </svg>
            <div className="info">
                <div>Completion</div>
                <div>{project.selectedStatus}</div>
            </div>
        </div>
        <div className="additional-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <rect width="24" height="24" transform="translate(0.333496 0.5)" fill="white"/>
                <path
                    d="M12.3335 4.5H17.7335H19.5335H21.2085C21.2775 4.5 21.3335 4.55596 21.3335 4.625V12.375C21.3335 12.444 21.2775 12.5 21.2085 12.5H17.4585C17.3895 12.5 17.3335 12.556 17.3335 12.625V17.375C17.3335 17.444 17.2775 17.5 17.2085 17.5H12.3335M12.3335 4.5H3.4585C3.38946 4.5 3.3335 4.55717 3.3335 4.6262C3.3335 8.05683 3.3335 9.79039 3.3335 12.5M12.3335 4.5V7.04822C12.3335 7.08138 12.3467 7.11317 12.3701 7.13661L14.5835 9.35M8.7335 12.5H12.2085C12.2775 12.5 12.3335 12.556 12.3335 12.625V17.5M3.3335 12.5C3.3335 15.2096 3.3335 16.9432 3.3335 20.3738C3.3335 20.4428 3.38946 20.5 3.4585 20.5H5.1335H6.9335M3.3335 12.5H5.08172C5.11487 12.5 5.14667 12.4868 5.17011 12.4634L6.9335 10.7M8.7335 20.5H12.2085C12.2775 20.5 12.3335 20.444 12.3335 20.375V17.5"
                    stroke="#191C38" stroke-width="2" stroke-linejoin="bevel"/>
            </svg>
            <div className="info">
                <div>Type</div>
                <div>{project.selectedProperty}</div>
            </div>
        </div>
        <div className="additional-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <rect width="24" height="24" transform="translate(0 0.5)" fill="white"/>
                <path
                    d="M4 19.5C4 20.0523 4.44772 20.5 5 20.5C5.55228 20.5 6 20.0523 6 19.5H4ZM4 2.5V19.5H6V2.5H4Z"
                    fill="black"/>
                <path d="M20 19.5L5 19.5" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M8 5.5L5 2.5L2 5.5" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M19 22.5L22 19.5L19 16.5" stroke="black" stroke-width="1.5" stroke-linecap="square"
                      stroke-linejoin="round"/>
                <path d="M10.5 5H19.5V13.5" stroke="black" stroke-width="2" stroke-linecap="square"
                      stroke-linejoin="round"/>
                <path d="M19 5.5L5 19.5" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M13.5 5L5 13.5" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M19.5 10.5L11 19" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
            <div className="info">
                <div>Handover</div>
                <div>{project.selectedMonth}Q 20{project.selectedYear}</div>
            </div>
        </div>
        <div className="additional-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                    d="M20.6665 20.4999C20.6665 20.7651 20.5611 21.0195 20.3736 21.207C20.1861 21.3946 19.9317 21.4999 19.6665 21.4999H5.6665C5.40129 21.4999 5.14693 21.3946 4.9594 21.207C4.77186 21.0195 4.6665 20.7651 4.6665 20.4999V11.4999H1.6665L11.9935 2.11192C12.1776 1.9444 12.4176 1.85156 12.6665 1.85156C12.9154 1.85156 13.1554 1.9444 13.3395 2.11192L23.6665 11.4999H20.6665V20.4999Z"
                    fill="#09121F"/>
            </svg>
            <div className="info">
                <div>Bedrooms</div>
                <div>1</div>
            </div>
        </div>

    </div>
</div>
<div className="manager-plan-wrapper">
    <div className="manager-view">
        <div className="image-container">
            <img src={anna}/>
        </div>
        <div className="broker-info">
            <div className="general-info">
                <div>Real estate broker</div>
                <div>Anna Horshunova</div>
            </div>
            <div className="additional-info">
                Off-plan properties, Investments, Commercial property, Mortgage
            </div>
            <div className="buttons-container">
                <div className="button">Contact agent</div>
                <div className="button">Request</div>
            </div>
        </div>
    </div>
    <div className="payment-plan">
        <div className="plan-header">
            <div>Payment Plan</div>
            <div>USD {formattedTotalSum}</div>
        </div>
        <div className="plan-type">
            {project.paymentPlans.Studio &&
                <div
                    className={activePlan === "Studio" ? 'active' : ''}
                    onClick={() => handlePlanClick("Studio")}
                >
                    S
                </div>}
            {project.paymentPlans["1"] &&
                <div
                    className={activePlan === "1" ? 'active' : ''}
                    onClick={() => handlePlanClick("1")}
                >
                    1
                </div>}
            {project.paymentPlans["2"] &&
                <div
                    className={activePlan === "2" ? 'active' : ''}
                    onClick={() => handlePlanClick("2")}
                >
                    2
                </div>}
            {project.paymentPlans["3"] &&
                <div
                    className={activePlan === "3" ? 'active' : ''}
                    onClick={() => handlePlanClick("3")}
                >
                    3
                </div>}
            {project.paymentPlans["4+"] &&
                <div
                    className={activePlan === "4+" ? 'active' : ''}
                    onClick={() => handlePlanClick("4+")}
                >
                    4+
                </div>}
        </div>
        <div className="plan-content">
            <div className="column">
                <div className="header">Stage</div>
                <div className="values">
                    <div className="value">Initial Payment</div>
                    <div className="value">During Construction</div>
                    <div className="value">Upon Handover</div>
                    <div className="value">After Handover</div>
                </div>
            </div>
            <div className="column">
                <div className="header">Percent</div>
                <div className="values">
                    <div className="value">{project.paymentPlans[activePlan].percent1}%</div>
                    <div className="value">{project.paymentPlans[activePlan].percent2}%</div>
                    <div className="value">{project.paymentPlans[activePlan].percent3}%</div>
                    <div className="value">{project.paymentPlans[activePlan].percent4}%</div>

                </div>
            </div>
            <div className="column">
                <div className="header">Price</div>
                <div className="values">
                    <div
                        className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum1)}</div>
                    <div
                        className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum2)}</div>
                    <div
                        className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum3)}</div>
                    <div
                        className="value">$ {formatNumberWithCommas(project.paymentPlans[activePlan].sum4)}</div>

                </div>
            </div>
        </div>
    </div>
</div>
<div className="floor-plans">
    <div className="header">Floor plan</div>
    <div className="navigations">
        <div className="floor-types">
            {project.plans["Studio"].length != 0 &&
                <div
                    className={`floor-type ${activeFloorPlan === "Studio" ? 'active' : ''}`}
                    onClick={() => handleFloorPlanClick("Studio")}
                >
                    Studio
                </div>}
            {project.plans["1"].length != 0 &&
                <div
                    className={`floor-type ${activeFloorPlan === "1" ? 'active' : ''}`}
                    onClick={() => handleFloorPlanClick("1")}
                >
                    1
                </div>}
            {project.plans["2"].length != 0 &&
                <div
                    className={`floor-type ${activeFloorPlan === "2" ? 'active' : ''}`}
                    onClick={() => handleFloorPlanClick("2")}
                >
                    2
                </div>}
            {project.plans["3"].length != 0 &&
                <div
                    className={`floor-type ${activeFloorPlan === "3" ? 'active' : ''}`}
                    onClick={() => handleFloorPlanClick("3")}
                >
                    3
                </div>}
            {project.plans["4+"].length != 0 &&
                <div
                    className={`floor-type ${activeFloorPlan === "4+" ? 'active' : ''}`}
                    onClick={() => handleFloorPlanClick("4+")}
                >
                    4+
                </div>
            }
        </div>
        <div className="arrows">
            <div ref={navigationPrevRef} className="left-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none">
                    <path
                        d="M10.828 12.0002L15.778 16.9502L14.364 18.3642L8 12.0002L14.364 5.63623L15.778 7.05023L10.828 12.0002Z"
                        fill="white"/>
                </svg>
            </div>
            <div ref={navigationNextRef} className="right-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none">
                    <path
                        d="M13.1722 12.0002L8.22217 7.05023L9.63617 5.63623L16.0002 12.0002L9.63617 18.3642L8.22217 16.9502L13.1722 12.0002Z"
                        fill="white"/>
                </svg>
            </div>
        </div>
    </div>
    <div className="floor-content">
        <Swiper
            spaceBetween={50}
            slidesPerView={4} style={{zIndex: -999}}

            modules={[Pagination, Navigation]}
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
        >
            {project.plans[activeFloorPlan].map((plan, index) => (
                <SwiperSlide key={index}>
                    <FloorPlan plan={plan} type={activeFloorPlan}/>
                </SwiperSlide>
            ))}


        </Swiper>
    </div>
</div>
<div className="location">
    <div className="header">Location</div>
    <div className="map-container">
        <div className="map">
            <APIProvider apiKey={"AIzaSyAbaX7Vb6ERFTrWR4espV48g25lFRGGjIc"}>
                <Map
                    zoom={14}
                    center={{lat: Number(project.lat), lng: Number(project.lng)}}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    mapId={"eafda8fe79279394"}
                >
                    <AdvancedMarker

                        className={"marker"}
                        position={{lat: Number(project.lat), lng: Number(project.lng)}}>
                        <div style={{borderRadius: 20, padding: 7}}>

                        </div>
                    </AdvancedMarker>
                </Map>
            </APIProvider>
        </div>
    </div>
</div>
<div className="simillar">
    <div className="header">
        <div className="tittle">Similar properties</div>
        <div className="arrows">
            <div ref={navigationPrevRefSimilar} className="left-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none">
                    <path
                        d="M10.828 12.0002L15.778 16.9502L14.364 18.3642L8 12.0002L14.364 5.63623L15.778 7.05023L10.828 12.0002Z"
                        fill="white"/>
                </svg>
            </div>
            <div ref={navigationNextRefSimilar} className="right-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none">
                    <path
                        d="M13.1722 12.0002L8.22217 7.05023L9.63617 5.63623L16.0002 12.0002L9.63617 18.3642L8.22217 16.9502L13.1722 12.0002Z"
                        fill="white"/>
                </svg>
            </div>
        </div>
    </div>
    <div className="floor-content">
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            style={{height: "100%", zIndex: -999}}
            modules={[Pagination, Navigation]}
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRefSimilar.current;
                swiper.params.navigation.nextEl = navigationNextRefSimilar.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
        >

            {randomProjects.map((project, index) => (
                <SwiperSlide key={index}>
                    <ProjectSimilar project={project}/>
                </SwiperSlide>
            ))}

        </Swiper>
    </div>
</div>