import React, { useState, useEffect, useRef } from 'react';
import {
    AdvancedMarker,
    InfoWindow,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import RealEstate from '../pages/RealEstate';



const Marker = ({ index, mapZoom, project, currnetIndex, setCurrentIndex }) => {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const elementRef = useRef(null);


    function convertPriceToShortFormat(price) {
        price = (Number(price) / 3.16).toFixed(0).toString()
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        let suffixIndex = 0;

        while (price >= 1000 && suffixIndex < suffixes.length - 1) {
            price /= 1000;
            suffixIndex++;
        }

        return price.toFixed(1) + suffixes[suffixIndex];
    }

    return (
        <>
            <AdvancedMarker

                className='marker'
                ref={markerRef}
                style={{ pointerEvents: 'auto' }}
                position={{ lat: Number(project.lat), lng: Number(project.lng) }}
                title={'AdvancedMarker that opens an Infowindow when clicked.'}
                onClick={() => {
                    if (currnetIndex === index) {
                        setCurrentIndex(null)
                    } else {
                        setCurrentIndex(index)
                    }
                }}
            >
                <div
                    style={{ borderRadius: mapZoom < 13 ? 20 : 5, padding: mapZoom < 13 ? 7 : 0 }}>
                    <div ref={elementRef} style={{ display: mapZoom < 13 ? "none" : "block" }} className="price">
                        {convertPriceToShortFormat(project.priceFrom)}
                    </div>
                </div>
            </AdvancedMarker >
            {currnetIndex === index && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={200}
                >
                    <div className="pop-container" onClick={() => window.location.href = `/project-view/${project._id}`}>
                        <img src={project.imageSrcMain} alt="" />
                        <div className="pop-content">
                            <div>{project.projectName}</div>
                            <div>{project.developer}</div>
                        </div>
                    </div>
                </InfoWindow >
            )}
        </>
    );
};

export default Marker